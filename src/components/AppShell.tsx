import React from 'react';
import {
  BookOpen,
  Briefcase,
  CloudDownload,
  Home,
  Languages,
  MessageSquareQuote,
  RefreshCw,
  Settings,
  WifiOff,
  Wrench,
} from 'lucide-react';
import type { LanguagePreference, NavTab } from '../types';
import { useApp } from '../context/AppContext';

const NAV_ITEMS: Array<{
  id: NavTab;
  labelZh: string;
  labelEn: string;
  icon: React.FC<{ className?: string }>;
}> = [
  { id: 'curriculum', labelZh: '离线知识书', labelEn: 'Handbook', icon: BookOpen },
  { id: 'dashboard', labelZh: '学习总览', labelEn: 'Overview', icon: Home },
  { id: 'jobs', labelZh: 'Kiwi 直聘', labelEn: 'Jobs Sim', icon: Briefcase },
  { id: 'language', labelZh: '语言实验室', labelEn: 'Language', icon: MessageSquareQuote },
  { id: 'tools', labelZh: '工具与新政', labelEn: 'Tools & 2026', icon: Wrench },
  { id: 'profile', labelZh: '同步与备份', labelEn: 'Sync & Data', icon: Settings },
];

const TIER_OPTIONS: Array<{ value: LanguagePreference; label: string }> = [
  { value: 'auto', label: '自动双语' },
  { value: 1, label: 'T1 中文护航' },
  { value: 2, label: 'T2 双语对照' },
  { value: 3, label: 'T3 英文进阶' },
  { value: 4, label: 'T4 全英沉浸' },
];

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    state,
    activeTab,
    setActiveTab,
    effectiveTier,
    levelInfo,
    allLessons,
    syncingGitHub,
    syncFromGitHub,
    updateProfile,
    toasts,
  } = useApp();

  return (
    <div className="min-h-screen bg-alps-50 text-ink-900 flex flex-col lg:flex-row">
      {/* Desktop Left Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-fern-950 text-white border-r border-fern-900">
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fern-600 to-tasman-600 flex items-center justify-center text-lg shadow-xs">
              🌿
            </div>
            <div>
              <div className="font-bold text-base tracking-tight">KiwiPath</div>
              <div className="text-[11px] text-fern-100/80">新西兰人成长百科</div>
            </div>
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] bg-white/10 text-emerald-200 px-2.5 py-1 rounded-full">
            <WifiOff className="w-3 h-3" />
            内置 {allLessons.length} 节 · 免登录即学
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                  active
                    ? 'bg-white text-fern-950 shadow-xs'
                    : 'text-fern-100/85 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{effectiveTier >= 4 ? item.labelEn : item.labelZh}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 m-3 rounded-2xl bg-white/8 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-white">
              {levelInfo.current.badgeEmoji} Lv.{levelInfo.current.level}
            </span>
            <span className="text-emerald-200 font-mono">{state.xp} XP</span>
          </div>
          <div className="text-[11px] text-fern-100/80">
            已完成 {state.completedLessonIds.length} / {allLessons.length} 节
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full bg-emerald-400 rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(
                  100,
                  Math.round((state.completedLessonIds.length / Math.max(1, allLessons.length)) * 100)
                )}%`,
              }}
            />
          </div>
          <div className="text-[10px] text-fern-100/65 flex justify-between">
            <span>本地自动存进度</span>
            <span>{state.syncedContent ? `GH v${state.syncedContent.version}` : '内置 2026-11'}</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen pb-20 lg:pb-0">
        {/* Top Utility Header */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="lg:hidden text-lg">🌿</span>
              <div>
                <div className="text-sm font-bold text-ink-900 flex items-center gap-2">
                  <span>{NAV_ITEMS.find((i) => i.id === activeTab)?.labelZh}</span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-fern-50 text-fern-800 border border-fern-100">
                    离线优先 · 学习记录本地自动保留
                  </span>
                </div>
                <div className="text-[11px] text-ink-500">
                  已读 {state.completedLessonIds.length}/{allLessons.length} 节 · 连续 {state.streakDays} 天 · 数据源：{state.githubConfig.owner}/{state.githubConfig.repo}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={syncingGitHub}
                onClick={() => void syncFromGitHub()}
                title={`从 GitHub (${state.githubConfig.owner}/${state.githubConfig.repo}) 同步最新知识库`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-fern-200 bg-fern-50 hover:bg-fern-100 text-fern-900 text-xs font-semibold transition disabled:opacity-50"
              >
                {syncingGitHub ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <CloudDownload className="w-3.5 h-3.5" />
                )}
                <span className="hidden sm:inline">
                  {syncingGitHub ? '同步中...' : '同步 GitHub 数据库'}
                </span>
              </button>

              <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-xl px-2.5 py-1.5 border border-slate-200">
                <Languages className="w-3.5 h-3.5 text-fern-800 shrink-0" />
                <select
                  aria-label="渐进双语层级切换"
                  value={String(state.profile.languagePref)}
                  onChange={(e) => {
                    const v = e.target.value;
                    updateProfile({
                      languagePref: v === 'auto' ? 'auto' : (Number(v) as 1 | 2 | 3 | 4),
                    });
                  }}
                  className="bg-transparent text-xs font-semibold text-ink-900 focus:outline-none cursor-pointer"
                >
                  {TIER_OPTIONS.map((opt) => (
                    <option key={String(opt.value)} value={String(opt.value)}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="text-[10px] font-mono bg-fern-900 text-white px-1.5 py-0.5 rounded-md">
                  T{effectiveTier}
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 sm:px-6 py-5">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-slate-200 px-1 py-1.5 grid grid-cols-6 gap-0.5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 rounded-lg transition ${
                active ? 'text-fern-900 font-semibold bg-fern-50' : 'text-ink-500'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] mt-0.5 truncate max-w-full">{item.labelZh.slice(0, 4)}</span>
            </button>
          );
        })}
      </nav>

      {/* Global Toast Container */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto px-4 py-2.5 rounded-xl shadow-lg text-xs font-medium border flex items-center gap-2 ${
              t.tone === 'warning'
                ? 'bg-amber-50 text-amber-900 border-amber-200'
                : t.tone === 'info'
                  ? 'bg-sky-50 text-sky-900 border-sky-200'
                  : 'bg-fern-900 text-white border-fern-800'
            }`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
};
