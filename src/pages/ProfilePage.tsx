import React, { useEffect, useState } from 'react';
import {
  Award,
  CloudDownload,
  Download,
  ExternalLink,
  HardDrive,
  RefreshCw,
  RotateCcw,
  Save,
  Trash2,
  Upload,
  Volume2,
} from 'lucide-react';
import type { AppState, LanguagePreference, NZCity, UserStage } from '../types';
import { useApp } from '../context/AppContext';
import { BADGES } from '../data/gamification';
import { estimateStorageKB, validateImportedState } from '../services/storage';
import {
  buildGitHubRawBaseUrl,
  parseGitHubRepoInput,
} from '../services/githubSync';
import { getEnglishVoices, isSpeechSupported, speakText, type VoiceOption } from '../services/speech';
import { ConfirmDialog } from '../components/ConfirmDialog';

const CITIES: NZCity[] = [
  'Auckland',
  'Wellington',
  'Christchurch',
  'Hamilton',
  'Tauranga',
  'Queenstown',
  'Dunedin',
];

export const ProfilePage: React.FC = () => {
  const {
    state,
    allLessons,
    levelInfo,
    syncingGitHub,
    syncFromGitHub,
    updateGitHubConfig,
    clearSyncedCache,
    updateProfile,
    restoreBackupState,
    resetAllData,
    showToast,
  } = useApp();

  const [city, setCity] = useState<NZCity>(state.profile.city);
  const [stage, setStage] = useState<UserStage>(state.profile.stage);
  const [langPref, setLangPref] = useState<LanguagePreference>(state.profile.languagePref);
  const [voiceUri, setVoiceUri] = useState<string>(state.profile.preferredVoiceUri ?? '');
  const [voices, setVoices] = useState<VoiceOption[]>([]);

  const [repoInput, setRepoInput] = useState(
    `https://github.com/${state.githubConfig.owner}/${state.githubConfig.repo}.git`
  );
  const [branchInput, setBranchInput] = useState(state.githubConfig.branch);
  const [pathInput, setPathInput] = useState(state.githubConfig.contentPath);
  const [syncError, setSyncError] = useState('');

  const [pendingRestore, setPendingRestore] = useState<AppState | null>(null);
  const [importError, setImportError] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (!isSpeechSupported()) return;
    const refresh = () => setVoices(getEnglishVoices());
    refresh();
    window.speechSynthesis.addEventListener?.('voiceschanged', refresh);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', refresh);
    };
  }, []);

  const handleSavePrefs = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      city,
      stage,
      languagePref: langPref,
      preferredVoiceUri: voiceUri || undefined,
    });
    showToast('阅读与语音偏好已保存到本地');
  };

  const handleSyncGitHub = async (e: React.FormEvent) => {
    e.preventDefault();
    setSyncError('');
    const parsed = parseGitHubRepoInput(
      repoInput,
      branchInput.trim() || 'main',
      pathInput.trim() || 'content'
    );
    if (!parsed.ok || !parsed.data) {
      setSyncError(parsed.error ?? '仓库格式错误');
      return;
    }
    updateGitHubConfig(parsed.data);
    const res = await syncFromGitHub(parsed.data);
    if (!res.ok && res.error) {
      setSyncError(res.error);
    }
  };

  const handleExportJson = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kiwipath-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('已导出本地学习进度 JSON 备份');
  };

  const handlePickBackupFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportError('');
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const res = validateImportedState(parsed);
        if (!res.ok || !res.data) {
          setImportError(res.error ?? '备份文件格式无效');
          return;
        }
        setPendingRestore(res.data);
      } catch {
        setImportError('无法解析该 JSON 文件，请确认未损坏。');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const storageKB = estimateStorageKB(state);
  const rawBaseUrl = buildGitHubRawBaseUrl(state.githubConfig);

  return (
    <div className="space-y-6">
      {/* GitHub Cloud Database Sync Panel */}
      <form
        onSubmit={handleSyncGitHub}
        className="bg-white rounded-2xl border border-fern-200 p-5 sm:p-6 shadow-xs space-y-4"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-base font-bold text-ink-900">
              <CloudDownload className="w-5 h-5 text-fern-700" />
              GitHub 云端知识库直连与同步
            </div>
            <p className="text-xs text-ink-500 mt-1">
              本单文件 HTML 内置全部 {allLessons.length} 节完整离线百科；联网时可直连你的公开 GitHub 仓库拉取最新扩展内容并缓存到本地浏览器（免密码、零服务器成本）。
            </p>
          </div>
          <a
            href={`https://github.com/${state.githubConfig.owner}/${state.githubConfig.repo}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-tasman-700 hover:underline"
          >
            打开 GitHub 仓库
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <label className="md:col-span-2 space-y-1">
            <span className="font-semibold text-ink-700">GitHub 公开仓库地址</span>
            <input
              type="text"
              value={repoInput}
              onChange={(e) => setRepoInput(e.target.value)}
              placeholder="https://github.com/lfredwang/KIWIPATH.git"
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-mono"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">分支 Branch</span>
            <input
              type="text"
              value={branchInput}
              onChange={(e) => setBranchInput(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-mono"
            />
          </label>
          <label className="space-y-1">
            <span className="font-semibold text-ink-700">数据目录 Path</span>
            <input
              type="text"
              value={pathInput}
              onChange={(e) => setPathInput(e.target.value)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-mono"
            />
          </label>
        </div>

        <div className="rounded-xl bg-alps-50 border border-slate-200 px-3.5 py-2.5 text-[11px] font-mono text-ink-600 break-all">
          Manifest 读取地址：{rawBaseUrl}/manifest.json
        </div>

        {syncError && (
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900">
            {syncError}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="text-xs text-ink-600">
            {state.syncedContent ? (
              <span>
                ✅ 已缓存同步版：<strong>v{state.syncedContent.version}</strong>（
                {state.syncedContent.lessons.length} 节课程 · 更新于{' '}
                {new Date(state.syncedContent.syncedAt).toLocaleString('zh-CN')}）
              </span>
            ) : (
              <span>📦 当前使用内置离线全量版本（{allLessons.length} 节，尚未触发云端覆盖）</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {state.syncedContent && (
              <button
                type="button"
                onClick={clearSyncedCache}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-ink-600 hover:bg-slate-50"
              >
                <Trash2 className="w-3.5 h-3.5" />
                恢复内置版
              </button>
            )}
            <button
              type="submit"
              disabled={syncingGitHub}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800 disabled:opacity-50 transition"
            >
              {syncingGitHub ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <CloudDownload className="w-3.5 h-3.5" />
              )}
              {syncingGitHub ? '正在拉取校验...' : '保存并立即同步最新知识库'}
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Reading & Speech Preferences (No Personal Name Required) */}
        <form
          onSubmit={handleSavePrefs}
          className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-ink-900">阅读偏好与朗读设置</h2>
              <p className="text-xs text-ink-500">无需填姓名或登录，所有偏好仅存于本机</p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800"
            >
              <Save className="w-3.5 h-3.5" />
              保存偏好
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <label className="space-y-1">
              <span className="font-semibold text-ink-700">关注新西兰城市</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as NZCity)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span className="font-semibold text-ink-700">当前学习阶段</span>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value as UserStage)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white"
              >
                <option value="pre-arrival">行前准备中</option>
                <option value="just-landed">刚落地新西兰</option>
                <option value="settling-in">安顿融入期</option>
                <option value="citizenship">长居与入籍进阶</option>
              </select>
            </label>

            <label className="sm:col-span-2 space-y-1">
              <span className="font-semibold text-ink-700">渐进双语显示策略</span>
              <select
                value={String(langPref)}
                onChange={(e) => {
                  const v = e.target.value;
                  setLangPref(v === 'auto' ? 'auto' : (Number(v) as 1 | 2 | 3 | 4));
                }}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm bg-white"
              >
                <option value="auto">跟随等级自动进阶（推荐）</option>
                <option value="1">强制 Tier 1（80% 中文护航）</option>
                <option value="2">强制 Tier 2（50/50 双语对照）</option>
                <option value="3">强制 Tier 3（英文为主 + 可展开中文）</option>
                <option value="4">强制 Tier 4（沉浸全英 + Te Reo）</option>
              </select>
            </label>
          </div>

          <div className="space-y-1.5 text-xs pt-2 border-t border-slate-100">
            <div className="font-semibold text-ink-700">浏览器本地英文朗读语音（优先 en-NZ）</div>
            <div className="flex gap-2">
              <select
                value={voiceUri}
                onChange={(e) => setVoiceUri(e.target.value)}
                className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs bg-white"
              >
                <option value="">自动选择（优先 en-NZ → en-AU → en-GB）</option>
                {voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.isNZ ? '🇳🇿 ' : ''}
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() =>
                  speakText('Kia ora! Welcome to Aotearoa New Zealand, sweet as!', {
                    preferredVoiceUri: voiceUri || undefined,
                  })
                }
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-slate-200 bg-alps-50 text-fern-900 font-semibold hover:bg-fern-50"
              >
                <Volume2 className="w-3.5 h-3.5" />
                试听
              </button>
            </div>
          </div>
        </form>

        {/* Local Storage & Safe Backup/Restore */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-base font-bold text-ink-900">
              <HardDrive className="w-5 h-5 text-fern-700" />
              学习记录持久化与备份恢复
            </div>
            <span className="text-xs font-mono bg-fern-50 text-fern-800 px-2.5 py-1 rounded-full">
              约 {storageKB} KB
            </span>
          </div>

          <p className="text-xs text-ink-600 leading-relaxed">
            所有已读章节、自测成绩、闪卡记忆曲线、交规错题本、生活清单与直聘进度均 <strong>100% 自动保存在你当前浏览器的本地存储（IndexedDB + localStorage）</strong>，绝不外传。换电脑/换浏览器时，可导出 JSON 备份无缝迁移。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleExportJson}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-fern-900 text-white py-2.5 px-4 text-xs font-semibold hover:bg-fern-800 transition"
            >
              <Download className="w-4 h-4" />
              导出进度备份 JSON
            </button>

            <label className="inline-flex items-center justify-center gap-2 rounded-xl border border-fern-300 bg-fern-50 text-fern-900 py-2.5 px-4 text-xs font-semibold hover:bg-fern-100 cursor-pointer transition">
              <Upload className="w-4 h-4" />
              导入恢复备份 JSON
              <input
                type="file"
                accept="application/json"
                onChange={handlePickBackupFile}
                className="hidden"
              />
            </label>
          </div>

          {importError && (
            <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-800">
              备份校验未通过：{importError}
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <div className="text-xs text-ink-500">
              成长等级：<strong>Lv.{levelInfo.current.level}</strong> · {state.xp} XP · 已读{' '}
              {state.completedLessonIds.length}/{allLessons.length} 节
            </div>
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-rose-200 text-rose-700 text-xs font-semibold hover:bg-rose-50 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              清空本地记录
            </button>
          </div>
        </div>
      </div>

      {/* Achievements / Badges Wall */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-base font-bold text-ink-900">
            <Award className="w-5 h-5 text-kowhai-500" />
            成就徽章墙
          </div>
          <span className="text-xs text-ink-500">
            已解锁 {state.unlockedBadges.length} / {BADGES.length}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BADGES.map((badge) => {
            const unlocked = state.unlockedBadges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`rounded-2xl border p-3.5 text-center space-y-1.5 transition ${
                  unlocked
                    ? 'bg-fern-50/70 border-fern-200'
                    : 'bg-slate-50 border-slate-200 opacity-55 grayscale'
                }`}
              >
                <div className="text-2xl">{badge.emoji}</div>
                <div className="text-xs font-bold text-ink-900">{badge.titleZh}</div>
                <div className="text-[11px] text-ink-500 leading-snug">{badge.descZh}</div>
              </div>
            );
          })}
        </div>
      </div>

      <ConfirmDialog
        open={Boolean(pendingRestore)}
        title="确认用备份文件覆盖当前学习记录？"
        description={
          pendingRestore
            ? `校验通过！该备份包含 ${pendingRestore.xp} XP 与 ${pendingRestore.completedLessonIds.length} 节已完成章节。确认后将覆盖当前浏览器的学习记录。`
            : ''
        }
        confirmLabel="确认恢复备份"
        onConfirm={() => {
          if (pendingRestore) {
            restoreBackupState(pendingRestore);
            setPendingRestore(null);
          }
        }}
        onCancel={() => setPendingRestore(null)}
      />

      <ConfirmDialog
        open={confirmReset}
        danger
        title="确认清空本机全部学习记录？"
        description="此操作将永久清除当前浏览器中的已读章节、闪卡记录、错题本、清单与直聘记录，且无法撤销（除非已导出 JSON 备份）。"
        confirmLabel="确认清空"
        onConfirm={() => {
          resetAllData();
          setConfirmReset(false);
        }}
        onCancel={() => setConfirmReset(false)}
      />
    </div>
  );
};
