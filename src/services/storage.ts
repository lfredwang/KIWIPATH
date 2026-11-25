import type { AppState, CandidateCV } from '../types';

const DB_NAME = 'kiwipath_offline_db';
const DB_VERSION = 1;
const STORE_NAME = 'app_state';
const STATE_KEY = 'primary_state';
const LS_BACKUP_KEY = 'kiwipath_state_v1';

export const DEFAULT_CV: CandidateCV = {
  fullName: 'Sam Taylor',
  preferredName: 'Sam',
  city: 'Auckland',
  visaStatus: 'Open Work Visa (Valid until 2028) / Eligible to work full-time in NZ',
  targetRole: 'Full-Stack Software Engineer',
  phone: '021 000 0000',
  email: 'sam.taylor@example.co.nz',
  linkedin: 'linkedin.com/in/sam-taylor-nz',
  summaryEn:
    'Pragmatic software engineer with 5+ years of experience building reliable web applications and collaborating across product and operations teams. Quick to adapt, focused on clear communication and measurable outcomes.',
  skills: ['TypeScript', 'React', 'Node.js', 'SQL', 'Agile / Scrum', 'Stakeholder Communication'],
  experiences: [
    {
      id: 'exp-1',
      role: 'Senior Frontend Developer',
      company: 'Horizon Digital',
      period: '2022 – Present',
      achievements: [
        'Reduced checkout page load time by 38%, lifting conversion rate by 11%.',
        'Collaborated with cross-functional teams of 12 across design, QA, and backend to ship 4 major releases on schedule.',
      ],
    },
    {
      id: 'exp-2',
      role: 'Web Developer',
      company: 'Pacific Commerce Tech',
      period: '2020 – 2022',
      achievements: [
        'Built internal operations dashboard used daily by 150+ customer support staff.',
        'Introduced automated UI testing, cutting post-release bug tickets by 45%.',
      ],
    },
  ],
  education: 'Bachelor of Computer Science (NZQA Level 7 Equivalent)',
  nzqaNote: 'IQA Assessment Completed — Level 7',
  includeRedFlagPhoto: false,
  includeRedFlagAge: false,
};

export function getTodayStr(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export const DEFAULT_GITHUB_CONFIG = {
  owner: 'lfredwang',
  repo: 'KIWIPATH',
  branch: 'main',
  contentPath: 'content',
};

export function createInitialState(): AppState {
  return {
    profile: {
      name: 'Kiwi 探索者',
      stage: 'just-landed',
      city: 'Auckland',
      focusGoals: ['系统学习新西兰生活百科', '快速找工作/直聘', 'Kiwi 俚语与毛利语'],
      languagePref: 'auto',
      onboardingCompleted: true,
    },
    xp: 0,
    streakDays: 1,
    lastActiveDate: getTodayStr(),
    completedLessonIds: [],
    lessonQuizScores: {},
    dailyChallengeDoneDate: null,
    flashcards: {},
    roadCodeWrongIds: [],
    roadCodeBestScore: 0,
    checkedItemIds: [],
    customChecklistItems: {},
    savedJobIds: [],
    jobThreads: {},
    cv: DEFAULT_CV,
    importedPolicies: [],
    unlockedBadges: ['kia-ora-starter'],
    githubConfig: { ...DEFAULT_GITHUB_CONFIG },
    syncedContent: null,
  };
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function loadAppState(): Promise<AppState> {
  const fallback = createInitialState();
  try {
    const db = await openDB();
    const saved = await new Promise<AppState | undefined>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(STATE_KEY);
      req.onsuccess = () => resolve(req.result as AppState | undefined);
      req.onerror = () => reject(req.error);
    });
    if (saved) {
      return mergeWithDefaults(saved, fallback);
    }
  } catch {
    // Fallback to localStorage
  }

  try {
    const raw = localStorage.getItem(LS_BACKUP_KEY);
    if (raw) {
      return mergeWithDefaults(JSON.parse(raw) as Partial<AppState>, fallback);
    }
  } catch {
    // ignore parse errors
  }
  return fallback;
}

export async function saveAppState(state: AppState): Promise<void> {
  try {
    localStorage.setItem(LS_BACKUP_KEY, JSON.stringify(state));
  } catch {
    // quota fallback
  }
  try {
    const db = await openDB();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(state, STATE_KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // IndexedDB unavailable; localStorage already saved
  }
}

export function mergeWithDefaults(
  partial: Partial<AppState>,
  defaults: AppState
): AppState {
  return {
    ...defaults,
    ...partial,
    profile: {
      ...defaults.profile,
      ...(partial.profile ?? {}),
    },
    cv: {
      ...defaults.cv,
      ...(partial.cv ?? {}),
    },
    flashcards: partial.flashcards ?? defaults.flashcards,
    jobThreads: partial.jobThreads ?? defaults.jobThreads,
    lessonQuizScores: partial.lessonQuizScores ?? defaults.lessonQuizScores,
    customChecklistItems: partial.customChecklistItems ?? defaults.customChecklistItems,
    importedPolicies: partial.importedPolicies ?? defaults.importedPolicies,
    githubConfig: {
      ...defaults.githubConfig,
      ...(partial.githubConfig ?? {}),
    },
    syncedContent: partial.syncedContent ?? defaults.syncedContent,
  };
}

export function estimateStorageKB(state: AppState): number {
  const bytes = new Blob([JSON.stringify(state)]).size;
  return Math.max(1, Math.round(bytes / 1024));
}

export interface ValidationResult<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

const VALID_STAGES = new Set(['pre-arrival', 'just-landed', 'settling-in', 'citizenship']);
const VALID_CITIES = new Set([
  'Auckland',
  'Wellington',
  'Christchurch',
  'Hamilton',
  'Tauranga',
  'Queenstown',
  'Dunedin',
]);
const VALID_POLICY_CATEGORIES = new Set([
  '移民签证',
  '雇佣与职场',
  '税务与KiwiSaver',
  '租房与房产',
  '交通与驾照',
  '医疗与维权',
  '公民与社会',
]);
const VALID_URGENCIES = new Set(['high', 'medium', 'info']);

/**
 * Strictly validates an untrusted JSON backup object before restoring into AppState.
 * Prevents malformed or malicious payloads from corrupting local persistence.
 */
export function validateImportedState(raw: unknown): ValidationResult<AppState> {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return { ok: false, error: '备份文件格式无效：根节点必须是 JSON 对象。' };
  }

  const obj = raw as Record<string, unknown>;
  const defaults = createInitialState();

  if (!obj.profile || typeof obj.profile !== 'object' || Array.isArray(obj.profile)) {
    return { ok: false, error: '备份文件缺少有效的 profile 用户档案字段。' };
  }

  const prof = obj.profile as Record<string, unknown>;
  if (typeof prof.name !== 'string' || !prof.name.trim()) {
    return { ok: false, error: '用户档案中的称呼（profile.name）无效。' };
  }
  if (typeof prof.stage !== 'string' || !VALID_STAGES.has(prof.stage)) {
    return { ok: false, error: '用户档案中的阶段（profile.stage）不在允许范围内。' };
  }
  if (typeof prof.city !== 'string' || !VALID_CITIES.has(prof.city)) {
    return { ok: false, error: '用户档案中的城市（profile.city）不在允许范围内。' };
  }
  if (obj.xp !== undefined && (typeof obj.xp !== 'number' || !Number.isFinite(obj.xp) || obj.xp < 0)) {
    return { ok: false, error: '经验值（xp）必须为非负数字。' };
  }
  if (obj.completedLessonIds !== undefined && !Array.isArray(obj.completedLessonIds)) {
    return { ok: false, error: '已完成课程列表（completedLessonIds）格式错误。' };
  }

  // Validate embedded importedPolicies if present
  if (obj.importedPolicies !== undefined) {
    const polCheck = validatePolicyPatch(obj.importedPolicies);
    if (!polCheck.ok) {
      return { ok: false, error: `备份中的自定义政策数据无效：${polCheck.error}` };
    }
  }

  const merged = mergeWithDefaults(obj as Partial<AppState>, defaults);
  return { ok: true, data: merged };
}

/**
 * Strictly validates an imported JSON policy update pack (array of PolicyUpdate).
 */
export function validatePolicyPatch(
  raw: unknown
): ValidationResult<import('../types').PolicyUpdate[]> {
  if (!Array.isArray(raw)) {
    return { ok: false, error: '政策更新包必须是 JSON 数组（[ ... ]）。' };
  }

  const cleaned: import('../types').PolicyUpdate[] = [];
  for (let i = 0; i < raw.length; i++) {
    const item = raw[i];
    if (!item || typeof item !== 'object' || Array.isArray(item)) {
      return { ok: false, error: `第 ${i + 1} 条政策不是合法对象。` };
    }
    const p = item as Record<string, unknown>;
    const requiredStrings = [
      'id',
      'effectiveDate',
      'titleZh',
      'titleEn',
      'oldRuleZh',
      'newRuleZh',
      'impactZh',
      'officialSource',
      'verifiedDate',
    ];
    for (const key of requiredStrings) {
      if (typeof p[key] !== 'string' || !(p[key] as string).trim()) {
        return { ok: false, error: `第 ${i + 1} 条政策缺少必填文本字段 "${key}"。` };
      }
    }
    if (typeof p.category !== 'string' || !VALID_POLICY_CATEGORIES.has(p.category)) {
      return { ok: false, error: `第 ${i + 1} 条政策的分类 "${String(p.category)}" 无效。` };
    }
    if (typeof p.urgency !== 'string' || !VALID_URGENCIES.has(p.urgency)) {
      return { ok: false, error: `第 ${i + 1} 条政策的紧急度 "${String(p.urgency)}" 无效（须为 high / medium / info）。` };
    }
    cleaned.push({
      id: (p.id as string).trim(),
      category: p.category as import('../types').PolicyUpdate['category'],
      effectiveDate: (p.effectiveDate as string).trim(),
      titleZh: (p.titleZh as string).trim(),
      titleEn: (p.titleEn as string).trim(),
      oldRuleZh: (p.oldRuleZh as string).trim(),
      newRuleZh: (p.newRuleZh as string).trim(),
      impactZh: (p.impactZh as string).trim(),
      officialSource: (p.officialSource as string).trim(),
      verifiedDate: (p.verifiedDate as string).trim(),
      urgency: p.urgency as import('../types').PolicyUpdate['urgency'],
    });
  }

  return { ok: true, data: cleaned };
}
