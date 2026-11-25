import type {
  ContentManifest,
  GitHubSyncConfig,
  Lesson,
  PolicyUpdate,
  SyncedContentCache,
} from '../types';
import { validatePolicyPatch, type ValidationResult } from './storage';

/**
 * Builds the public GitHub raw content base URL.
 * Works directly from standalone `file://` HTML files because raw.githubusercontent.com sends CORS headers.
 */
export function buildGitHubRawBaseUrl(config: GitHubSyncConfig): string {
  const owner = config.owner.trim().replace(/^\/+|\/+$/g, '');
  const repo = config.repo.trim().replace(/\.git$/i, '').replace(/^\/+|\/+$/g, '');
  const branch = (config.branch || 'main').trim().replace(/^\/+|\/+$/g, '');
  const contentPath = (config.contentPath || 'content').trim().replace(/^\/+|\/+$/g, '');
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${contentPath}`;
}

/**
 * Parses a GitHub repo input (accepts either "owner/repo" or "https://github.com/owner/repo(.git)").
 */
export function parseGitHubRepoInput(
  input: string,
  fallbackBranch = 'main',
  fallbackPath = 'content'
): ValidationResult<GitHubSyncConfig> {
  const clean = input.trim();
  if (!clean) {
    return { ok: false, error: '请输入 GitHub 仓库地址或 用户名/仓库名。' };
  }

  const urlMatch = clean.match(/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+?)(?:\.git)?(?:\/.*)?$/i);
  if (urlMatch) {
    return {
      ok: true,
      data: {
        owner: urlMatch[1],
        repo: urlMatch[2],
        branch: fallbackBranch,
        contentPath: fallbackPath,
      },
    };
  }

  const slashMatch = clean.match(/^([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+?)(?:\.git)?$/);
  if (slashMatch) {
    return {
      ok: true,
      data: {
        owner: slashMatch[1],
        repo: slashMatch[2],
        branch: fallbackBranch,
        contentPath: fallbackPath,
      },
    };
  }

  return {
    ok: false,
    error: '仓库格式无法识别，请输入类似 lfredwang/KIWIPATH 或 https://github.com/lfredwang/KIWIPATH.git',
  };
}

export function validateContentManifest(raw: unknown): ValidationResult<ContentManifest> {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: 'manifest.json 必须是 JSON 对象。' };
  }
  const m = raw as Record<string, unknown>;
  if (typeof m.version !== 'string' || !m.version.trim()) {
    return { ok: false, error: 'manifest.json 缺少有效的 version 字段。' };
  }
  if (typeof m.updatedAt !== 'string' || !m.updatedAt.trim()) {
    return { ok: false, error: 'manifest.json 缺少有效的 updatedAt 字段。' };
  }
  if (!Array.isArray(m.modules)) {
    return { ok: false, error: 'manifest.json 缺少有效的 modules 数组。' };
  }
  for (const item of m.modules) {
    if (
      !item ||
      typeof item !== 'object' ||
      typeof (item as Record<string, unknown>).moduleId !== 'string' ||
      typeof (item as Record<string, unknown>).file !== 'string'
    ) {
      return { ok: false, error: 'manifest.json 中的 modules 条目格式无效。' };
    }
  }
  return { ok: true, data: m as unknown as ContentManifest };
}

export function validateLessonArray(raw: unknown): ValidationResult<Lesson[]> {
  if (!Array.isArray(raw)) {
    return { ok: false, error: '模块课程数据必须是 JSON 数组。' };
  }
  const valid: Lesson[] = [];
  for (let i = 0; i < raw.length; i++) {
    const item = raw[i];
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return { ok: false, error: `第 ${i + 1} 节课程不是合法对象。` };
    }
    const l = item as Record<string, unknown>;
    if (
      typeof l.id !== 'string' ||
      typeof l.moduleId !== 'string' ||
      typeof l.number !== 'number' ||
      !l.title ||
      typeof (l.title as Record<string, unknown>).zh !== 'string' ||
      !Array.isArray(l.cards) ||
      !Array.isArray(l.quiz)
    ) {
      return { ok: false, error: `课程 "${String(l.id ?? i + 1)}" 缺少必要字段（id/moduleId/number/title/cards/quiz）。` };
    }
    valid.push(l as unknown as Lesson);
  }
  return { ok: true, data: valid };
}

/**
 * Merges built-in offline lessons with GitHub-synced lessons (GitHub overrides same ID, adds new IDs),
 * sorted deterministically by lesson number.
 */
export function mergeLessons(builtIn: Lesson[], synced: Lesson[] | undefined): Lesson[] {
  const map = new Map<string, Lesson>();
  for (const l of builtIn) map.set(l.id, l);
  if (synced) {
    for (const l of synced) map.set(l.id, l);
  }
  return Array.from(map.values()).sort((a, b) => a.number - b.number);
}

/**
 * Fetches latest manifest + module JSONs + policies JSON from a public GitHub repo.
 */
export async function syncContentFromGitHub(
  config: GitHubSyncConfig
): Promise<ValidationResult<SyncedContentCache>> {
  const baseUrl = buildGitHubRawBaseUrl(config);
  const cacheBust = `?t=${Date.now()}`;

  try {
    const manifestResp = await fetch(`${baseUrl}/manifest.json${cacheBust}`, {
      cache: 'no-store',
    });
    if (!manifestResp.ok) {
      return {
        ok: false,
        error: `无法读取 GitHub 数据库清单（HTTP ${manifestResp.status}）。请确认仓库 ${config.owner}/${config.repo} 已设为 Public，且已推送 content/manifest.json。`,
      };
    }

    const manifestJson = await manifestResp.json();
    const manifestRes = validateContentManifest(manifestJson);
    if (!manifestRes.ok || !manifestRes.data) {
      return { ok: false, error: manifestRes.error ?? 'manifest.json 校验失败' };
    }

    const manifest = manifestRes.data;
    const allLessons: Lesson[] = [];

    for (const modEntry of manifest.modules) {
      const modResp = await fetch(`${baseUrl}/${modEntry.file}${cacheBust}`, {
        cache: 'no-store',
      });
      if (!modResp.ok) {
        return {
          ok: false,
          error: `读取模块文件 ${modEntry.file} 失败（HTTP ${modResp.status}）。`,
        };
      }
      const modJson = await modResp.json();
      const lessonsRes = validateLessonArray(modJson);
      if (!lessonsRes.ok || !lessonsRes.data) {
        return { ok: false, error: `${modEntry.file}: ${lessonsRes.error}` };
      }
      allLessons.push(...lessonsRes.data);
    }

    let policies: PolicyUpdate[] = [];
    if (manifest.policiesFile) {
      const polResp = await fetch(`${baseUrl}/${manifest.policiesFile}${cacheBust}`, {
        cache: 'no-store',
      });
      if (polResp.ok) {
        const polJson = await polResp.json();
        const polRes = validatePolicyPatch(polJson);
        if (polRes.ok && polRes.data) {
          policies = polRes.data;
        }
      }
    }

    return {
      ok: true,
      data: {
        version: manifest.version,
        syncedAt: new Date().toISOString(),
        sourceRepo: `${config.owner}/${config.repo}@${config.branch}`,
        lessons: allLessons,
        policies,
      },
    };
  } catch (err) {
    return {
      ok: false,
      error: `网络请求失败（当前可能处于离线环境，或无法访问 raw.githubusercontent.com）：${
        err instanceof Error ? err.message : String(err)
      }`,
    };
  }
}
