import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  CloudDownload,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { CURRICULUM_MODULES } from '../data/curriculum/modules';
import { REGIONAL_CITY_GUIDES, VISA_PATHWAYS_2026 } from '../data/curriculum/specialPacks';
import { useApp } from '../context/AppContext';
import { BilingualBlock } from '../components/BilingualBlock';
import { LessonReader } from '../components/LessonReader';
import type { Lesson } from '../types';

type SubView = 'modules' | 'cities' | 'visas';

export const CurriculumPage: React.FC = () => {
  const {
    state,
    allLessons,
    effectiveTier,
    setActiveTab,
    syncingGitHub,
    syncFromGitHub,
  } = useApp();
  const [subView, setSubView] = useState<SubView>('modules');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>(state.profile.city);
  const [moduleFilter, setModuleFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const totalCards = useMemo(
    () => allLessons.reduce((sum, l) => sum + l.cards.length, 0),
    [allLessons]
  );

  const searchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return allLessons.filter((lesson) => {
      const hay = [
        lesson.title.zh,
        lesson.title.en,
        lesson.summary.zh,
        lesson.summary.en,
        ...lesson.terms.map((t) => `${t.term} ${t.zh}`),
        ...lesson.cards.map(
          (c) =>
            `${c.title.zh} ${c.title.en} ${c.body.zh} ${c.body.en} ${(c.keyPoints ?? [])
              .map((k) => `${k.zh} ${k.en}`)
              .join(' ')}`
        ),
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [allLessons, searchQuery]);

  if (activeLesson) {
    return (
      <LessonReader
        lesson={activeLesson}
        onBack={() => setActiveLesson(null)}
        onSelectLesson={(next) => setActiveLesson(next)}
      />
    );
  }

  const completedCount = state.completedLessonIds.filter((id) =>
    allLessons.some((l) => l.id === id)
  ).length;
  const visibleModules =
    moduleFilter === 'ALL'
      ? CURRICULUM_MODULES
      : CURRICULUM_MODULES.filter((m) => m.id === moduleFilter);

  return (
    <div className="space-y-5">
      {/* Encyclopaedia Banner */}
      <div className="bg-gradient-to-r from-fern-950 via-fern-900 to-tasman-700 rounded-3xl p-5 sm:p-6 text-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-white/15 px-2.5 py-1 rounded-full font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                KiwiPath 新西兰人全维度离线百科（{allLessons.length} 节 · {totalCards} 张深度卡）
              </span>
              <span className="inline-flex items-center gap-1 bg-emerald-400/20 text-emerald-100 px-2.5 py-1 rounded-full">
                {state.syncedContent
                  ? `已同步 GitHub v${state.syncedContent.version}`
                  : '内置完整 2026-11 核验版'}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
              从入境第 1 天到 True Kiwi：免登录即读，学习记录本地自动保存
            </h1>
            <p className="text-xs sm:text-sm text-fern-100">
              覆盖落地、租房买房、2026 交规、求职与雇佣法、税务维权、Kiwi 口音毛利语、医疗教育与自然安全。可随时从 GitHub 数据库（{state.githubConfig.owner}/{state.githubConfig.repo}）同步最新扩充章节。
            </p>
          </div>

          <div className="flex flex-col items-stretch sm:items-end gap-2">
            <div className="bg-white/12 border border-white/15 rounded-2xl px-4 py-2.5 text-center min-w-[140px]">
              <div className="text-2xl font-bold font-mono">
                {completedCount} / {allLessons.length}
              </div>
              <div className="text-[11px] text-fern-100">本机已掌握章节</div>
            </div>
            <button
              type="button"
              disabled={syncingGitHub}
              onClick={() => void syncFromGitHub()}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-fern-950 hover:bg-fern-50 text-xs font-semibold transition disabled:opacity-50"
            >
              <CloudDownload className="w-3.5 h-3.5" />
              {syncingGitHub ? '正在从 GitHub 同步...' : '一键同步 GitHub 最新库'}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-view Switcher + Full-Book Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: 'modules', label: '📚 8 大模块全书', count: `${allLessons.length} 节` },
              { id: 'cities', label: '🗺️ 区域城市指南包', count: `${REGIONAL_CITY_GUIDES.length} 城` },
              { id: 'visas', label: '🛂 2026 签证与入籍包', count: `${VISA_PATHWAYS_2026.length} 通道` },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSubView(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                subView === tab.id
                  ? 'bg-fern-900 text-white border-fern-900 shadow-xs'
                  : 'bg-white text-ink-700 border-slate-200 hover:border-fern-400'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full ${
                  subView === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-ink-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {subView === 'modules' && (
          <div className="relative sm:w-80">
            <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="全书搜索（如：ACC / 宠物押金 / RUC / IRD / 离岸流）"
              className="w-full rounded-xl bg-white border border-slate-200 pl-9 pr-8 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-fern-600"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-700"
                aria-label="清空搜索"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* 1. 8 Modules & All 48 Lessons */}
      {subView === 'modules' && (
        <div className="space-y-4">
          {/* Instant Full-Book Search Results */}
          {searchQuery.trim() ? (
            <div className="bg-white rounded-2xl border border-fern-200 p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-fern-900">
                <span>
                  🔍 全书检索 “{searchQuery.trim()}” — 找到 {searchMatches.length} 节相关内容
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-tasman-700 hover:underline"
                >
                  返回完整目录
                </button>
              </div>
              {searchMatches.length === 0 ? (
                <div className="text-sm text-ink-500 py-6 text-center">
                  未找到包含该关键词的章节，试试换更简短的词（如 IRD、GP、租房、环岛、KiwiSaver、毛利语）。
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {searchMatches.map((lesson) => {
                    const isDone = state.completedLessonIds.includes(lesson.id);
                    return (
                      <button
                        key={lesson.id}
                        type="button"
                        onClick={() => setActiveLesson(lesson)}
                        className="text-left rounded-xl border border-slate-200 hover:border-fern-600 bg-alps-50/70 hover:bg-fern-50 p-3.5 transition flex items-start justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-sm font-bold text-ink-900">
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Sparkles className="w-4 h-4 text-kowhai-500 shrink-0" />
                            )}
                            <span>
                              #{lesson.number} {lesson.title.zh}
                            </span>
                          </div>
                          <div className="text-xs text-ink-600 line-clamp-2">{lesson.summary.zh}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-ink-400 shrink-0 mt-1" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            <>
              {/* Module Quick Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => setModuleFilter('ALL')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                    moduleFilter === 'ALL'
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-white text-ink-700 border-slate-200 hover:border-fern-400'
                  }`}
                >
                  全部 8 大模块 ({allLessons.length} 节)
                </button>
                {CURRICULUM_MODULES.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setModuleFilter(m.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                      moduleFilter === m.id
                        ? 'bg-fern-900 text-white border-fern-900'
                        : 'bg-white text-ink-700 border-slate-200 hover:border-fern-400'
                    }`}
                  >
                    模块 {m.number} · {m.title.zh.split('：')[0]}
                  </button>
                ))}
              </div>

              {/* Modules List */}
              <div className="space-y-5">
                {visibleModules.map((mod) => {
                  const lessons = allLessons.filter((l) => l.moduleId === mod.id);
                  const doneInMod = lessons.filter((l) =>
                    state.completedLessonIds.includes(l.id)
                  ).length;
                  return (
                    <section
                      key={mod.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-fern-800 bg-fern-50 border border-fern-100 px-2.5 py-0.5 rounded-full">
                              模块 {mod.number} · {mod.levelRange}
                            </span>
                            <span className="text-xs text-ink-500">
                              本模块进度 {doneInMod} / {lessons.length} 节
                            </span>
                          </div>
                          <BilingualBlock
                            text={mod.title}
                            tier={effectiveTier}
                            primaryClassName="text-lg font-bold text-ink-900"
                            secondaryClassName="text-xs text-ink-500"
                          />
                          <p className="text-xs text-ink-500">{mod.subtitle.zh}</p>
                        </div>

                        {mod.linkedFeature && (
                          <button
                            type="button"
                            onClick={() => setActiveTab(mod.linkedFeature!)}
                            className="text-xs font-semibold text-tasman-700 bg-tasman-100/70 hover:bg-tasman-100 px-3 py-1.5 rounded-xl transition"
                          >
                            配套实战工具 →
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 border-t border-slate-100">
                        {lessons.map((lesson) => {
                          const isDone = state.completedLessonIds.includes(lesson.id);
                          return (
                            <button
                              key={lesson.id}
                              type="button"
                              onClick={() => setActiveLesson(lesson)}
                              className={`text-left rounded-xl border p-3.5 transition flex items-start justify-between gap-3 group ${
                                isDone
                                  ? 'border-emerald-200 bg-emerald-50/40 hover:border-emerald-500'
                                  : 'border-slate-200 bg-alps-50/70 hover:border-fern-600 hover:bg-fern-50/50'
                              }`}
                            >
                              <div className="space-y-1 min-w-0">
                                <div className="flex items-start gap-2">
                                  {isDone ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  ) : (
                                    <span className="w-5 h-5 rounded-md bg-fern-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                                      {lesson.number}
                                    </span>
                                  )}
                                  <span className="text-sm font-bold text-ink-900 leading-snug">
                                    {lesson.title.zh}
                                  </span>
                                </div>
                                <p className="text-xs text-ink-600 line-clamp-2 pl-7">
                                  {lesson.summary.zh}
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-[11px] text-ink-500 pl-7">
                                  <span className="inline-flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> {lesson.durationMin} 分钟
                                  </span>
                                  <span>{lesson.cards.length} 张深度卡</span>
                                  <span>{lesson.terms.length} 原词</span>
                                  <span>{lesson.quiz.length} 自测题</span>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-ink-400 group-hover:text-fern-800 shrink-0 mt-1" />
                            </button>
                          );
                        })}
                      </div>
                    </section>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* 2. Regional City Guides */}
      {subView === 'cities' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {REGIONAL_CITY_GUIDES.map((g) => (
              <button
                key={g.city}
                type="button"
                onClick={() => setSelectedCity(g.city)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
                  selectedCity === g.city
                    ? 'bg-tasman-700 text-white border-tasman-700'
                    : 'bg-white text-ink-700 border-slate-200 hover:border-tasman-500'
                }`}
              >
                {g.city} · {g.maoriName}
              </button>
            ))}
          </div>

          {REGIONAL_CITY_GUIDES.filter(
            (g) => g.city === selectedCity || !REGIONAL_CITY_GUIDES.some((x) => x.city === selectedCity)
          )
            .slice(0, 1)
            .map((guide) => (
              <div
                key={guide.city}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-tasman-700">
                      <MapPin className="w-3.5 h-3.5" />
                      {guide.maoriName}
                    </div>
                    <h2 className="text-xl font-bold text-ink-900 mt-0.5">{guide.city}</h2>
                    <p className="text-sm text-ink-600 mt-1">{guide.taglineZh}</p>
                  </div>
                  <span className="text-xs font-medium bg-slate-100 text-ink-700 px-3 py-1 rounded-full">
                    人口：{guide.population}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl bg-alps-50 border border-slate-200 p-3.5">
                    <div className="text-[11px] font-semibold text-ink-500">公共交通卡</div>
                    <div className="text-sm font-bold text-ink-900 mt-1">{guide.transportCard}</div>
                  </div>
                  <div className="rounded-xl bg-alps-50 border border-slate-200 p-3.5">
                    <div className="text-[11px] font-semibold text-ink-500">水费计费差异</div>
                    <div className="text-sm font-bold text-ink-900 mt-1">{guide.waterBilling}</div>
                  </div>
                  <div className="rounded-xl bg-alps-50 border border-slate-200 p-3.5">
                    <div className="text-[11px] font-semibold text-ink-500">地方建省日假期</div>
                    <div className="text-sm font-bold text-ink-900 mt-1">{guide.anniversaryDay}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="font-bold text-ink-900">主导产业</div>
                    <div className="flex flex-wrap gap-1.5">
                      {guide.keyIndustries.map((ind) => (
                        <span
                          key={ind}
                          className="text-xs bg-fern-50 text-fern-800 border border-fern-100 px-2.5 py-1 rounded-full"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <span className="font-bold text-ink-900">气候特点：</span>
                      <span className="text-ink-700">{guide.climateZh}</span>
                    </div>
                    <div>
                      <span className="font-bold text-ink-900">居住与租房感受：</span>
                      <span className="text-ink-700">{guide.housingVibeZh}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3.5">
                      <div className="text-xs font-bold text-emerald-900 mb-1.5">👍 城市优势</div>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-emerald-900">
                        {guide.prosZh.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-amber-50/70 border border-amber-200 p-3.5">
                      <div className="text-xs font-bold text-amber-900 mb-1.5">⚠️ 避坑提醒</div>
                      <ul className="list-disc pl-4 space-y-1 text-xs text-amber-900">
                        {guide.watchOutZh.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* 3. Visa Pathways 2026 */}
      {subView === 'visas' && (
        <div className="space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-3.5 text-xs text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>
              <strong>信息声明：</strong>
              以下签证通道说明基于截至 2026 年 11 月的官方公开规则整理，仅供个人学习规划参考，不构成持牌移民顾问（IAA）或执业律师正式意见。
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VISA_PATHWAYS_2026.map((visa) => (
              <div
                key={visa.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="inline-flex items-center gap-1 text-[11px] font-semibold bg-tasman-100 text-tasman-700 px-2.5 py-0.5 rounded-full">
                      <Globe2 className="w-3 h-3" />
                      {visa.stageTag}
                    </div>
                    <h3 className="text-base font-bold text-ink-900 mt-1.5">{visa.nameZh}</h3>
                    <div className="text-xs text-ink-500">{visa.nameEn}</div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-fern-700 shrink-0" />
                </div>

                <ul className="space-y-2 text-xs text-ink-700 leading-relaxed">
                  {visa.keyRequirements2026.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-fern-700 font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs text-rose-900">
                  <strong>⚠️ 避坑红线：</strong> {visa.watchOut2026}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
