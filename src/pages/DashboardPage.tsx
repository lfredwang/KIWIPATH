import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Flame,
  MessageSquareQuote,
  ShieldAlert,
  Sparkles,
  Volume2,
  Wrench,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getDailyChallengeForToday } from '../data/gamification';
import { CHECKLIST_GROUPS } from '../data/tools/checklists';
import { getTodayStr } from '../services/storage';
import { speakText } from '../services/speech';
import { BilingualBlock } from '../components/BilingualBlock';

export const DashboardPage: React.FC = () => {
  const {
    state,
    allLessons,
    allPolicies,
    effectiveTier,
    levelInfo,
    setActiveTab,
    completeDailyChallenge,
    showToast,
  } = useApp();

  const challenge = getDailyChallengeForToday();
  const todayStr = getTodayStr();
  const challengeDone = state.dailyChallengeDoneDate === todayStr;
  const [pickedOptionId, setPickedOptionId] = useState<string | null>(null);

  const nextLesson =
    allLessons.find((l) => !state.completedLessonIds.includes(l.id)) ?? allLessons[0];

  const totalChecklistItems = CHECKLIST_GROUPS.reduce((sum, g) => sum + g.items.length, 0);
  const highUrgencyPolicies = allPolicies.filter((p) => p.urgency === 'high').slice(0, 3);

  const handlePickChallenge = (optId: string) => {
    if (pickedOptionId || challengeDone) return;
    setPickedOptionId(optId);
    completeDailyChallenge(25);
  };

  return (
    <div className="space-y-6">
      {/* Hero Progress Banner */}
      <div className="bg-gradient-to-br from-fern-950 via-fern-900 to-fern-700 text-white rounded-3xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs bg-white/15 px-3 py-1 rounded-full">
              <span>{levelInfo.current.badgeEmoji}</span>
              <span>
                Lv.{levelInfo.current.level} · {levelInfo.current.titleZh}（{levelInfo.current.titleEn}）
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Kia ora! 欢迎来到 KiwiPath 新西兰离线百科
            </h1>
            <p className="text-sm text-fern-100 max-w-xl">
              {levelInfo.current.descriptionZh}。无需注册填姓名，所有学习进度本地自动保存，可随时从 GitHub 数据库同步最新章节。
            </p>
          </div>

          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 min-w-[230px] space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1 text-amber-200 font-semibold">
                <Flame className="w-4 h-4" />
                连续 {state.streakDays} 天
              </span>
              <span className="font-mono font-bold text-white">{state.xp} XP</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-emerald-400 rounded-full transition-all"
                style={{ width: `${levelInfo.progressPct}%` }}
              />
            </div>
            <div className="text-[11px] text-fern-100/85">
              {levelInfo.next
                ? `距离 Lv.${levelInfo.next.level}（${levelInfo.next.titleZh}）还差 ${
                    levelInfo.next.minXp - state.xp
                  } XP`
                : '已达最高等级 True Kiwi！'}
            </div>
          </div>
        </div>

        {/* 4 Quick Stat Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-white/15">
          <button
            type="button"
            onClick={() => setActiveTab('curriculum')}
            className="text-left rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2.5 transition"
          >
            <div className="text-[11px] text-fern-100">百科全书章节</div>
            <div className="text-lg font-bold font-mono">
              {state.completedLessonIds.length}/{allLessons.length}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('language')}
            className="text-left rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2.5 transition"
          >
            <div className="text-[11px] text-fern-100">已练闪卡</div>
            <div className="text-lg font-bold font-mono">{Object.keys(state.flashcards).length}</div>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className="text-left rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2.5 transition"
          >
            <div className="text-[11px] text-fern-100">生活清单</div>
            <div className="text-lg font-bold font-mono">
              {state.checkedItemIds.length}/{totalChecklistItems}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('jobs')}
            className="text-left rounded-xl bg-white/10 hover:bg-white/15 px-3.5 py-2.5 transition"
          >
            <div className="text-[11px] text-fern-100">直聘沟通中</div>
            <div className="text-lg font-bold font-mono">{Object.keys(state.jobThreads).length}</div>
          </button>
        </div>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Daily 3-Minute Kiwi Challenge */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-kowhai-500" />
              <h2 className="text-base font-bold text-ink-900">今日 3 分钟 Kiwi 挑战</h2>
            </div>
            {challengeDone ? (
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                今日已完成 (+25 XP)
              </span>
            ) : (
              <span className="text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full">
                完成奖励 +25 XP
              </span>
            )}
          </div>

          {/* Daily Slang Mini Card */}
          <div className="rounded-xl bg-fern-50 border border-fern-100 p-3.5 flex items-center justify-between gap-3">
            <div>
              <div className="text-[11px] font-semibold text-fern-700">今日一词 · Daily Kiwi Slang</div>
              <div className="text-base font-bold text-ink-900 mt-0.5">
                {challenge.slangTerm}{' '}
                <span className="text-xs font-normal text-ink-500">{challenge.slangPhonetic}</span>
              </div>
              <div className="text-xs text-ink-700 mt-0.5">{challenge.slangMeaningZh}</div>
            </div>
            <button
              type="button"
              onClick={() => {
                if (!speakText(challenge.slangTerm, { preferredVoiceUri: state.profile.preferredVoiceUri })) {
                  showToast('当前浏览器不支持语音朗读', 'warning');
                }
              }}
              className="p-2.5 rounded-xl bg-white border border-fern-200 text-fern-800 hover:bg-fern-100 transition shrink-0"
              aria-label="朗读今日一词"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Challenge Scenario Question */}
          <BilingualBlock
            text={challenge.question}
            tier={effectiveTier}
            primaryClassName="text-sm font-semibold text-ink-900 leading-relaxed"
            secondaryClassName="text-xs text-ink-500"
          />

          <div className="space-y-2">
            {challenge.options.map((opt) => {
              const showResult = Boolean(pickedOptionId) || challengeDone;
              const isPicked = pickedOptionId === opt.id;
              let cls = 'border-slate-200 hover:border-fern-500 bg-white';
              if (showResult) {
                if (opt.isCorrect) cls = 'border-emerald-500 bg-emerald-50/80';
                else if (isPicked) cls = 'border-rose-400 bg-rose-50/80';
              }
              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={showResult}
                  onClick={() => handlePickChallenge(opt.id)}
                  className={`w-full text-left rounded-xl border p-3 transition ${cls}`}
                >
                  <BilingualBlock
                    text={opt.text}
                    tier={effectiveTier}
                    primaryClassName="text-sm font-medium text-ink-900"
                    secondaryClassName="text-xs text-ink-500"
                  />
                  {showResult && (opt.isCorrect || isPicked) && (
                    <div className="mt-2 pt-2 border-t border-slate-200/70 text-xs text-ink-700">
                      {opt.isCorrect ? '✅ ' : '❌ '}
                      {opt.explanationZh}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Next Lesson + 2026 Policy Alerts */}
        <div className="space-y-5">
          {/* Next Recommended Lesson */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-fern-800 inline-flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                推荐下一节精读
              </span>
              <span className="text-[11px] text-ink-500">Lesson #{nextLesson.number}</span>
            </div>
            <h3 className="text-base font-bold text-ink-900">{nextLesson.title.zh}</h3>
            <p className="text-xs text-ink-600 leading-relaxed">{nextLesson.summary.zh}</p>
            <button
              type="button"
              onClick={() => setActiveTab('curriculum')}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-fern-900 text-white py-2.5 text-xs font-semibold hover:bg-fern-800 transition"
            >
              立即打开离线知识书
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2025-2026 High Urgency Policy Radar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800 inline-flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                2025–2026 必看新政速报
              </span>
              <button
                type="button"
                onClick={() => setActiveTab('tools')}
                className="text-xs font-medium text-tasman-700 hover:underline"
              >
                全部 12 条 →
              </button>
            </div>
            <div className="space-y-2.5">
              {highUrgencyPolicies.map((pol) => (
                <div
                  key={pol.id}
                  className="rounded-xl bg-alps-50 border border-slate-200/80 p-3 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2 text-[11px]">
                    <span className="font-semibold text-amber-800">{pol.category}</span>
                    <span className="text-ink-500 font-mono">{pol.effectiveDate}</span>
                  </div>
                  <div className="text-xs font-bold text-ink-900">{pol.titleZh}</div>
                  <div className="text-[11px] text-ink-600 line-clamp-2">{pol.impactZh}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Entry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          type="button"
          onClick={() => setActiveTab('jobs')}
          className="text-left bg-white rounded-2xl border border-slate-200 hover:border-fern-500 p-4 shadow-xs transition flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-ink-900">Kiwi 直聘（离线仿真）</div>
            <div className="text-xs text-ink-500 mt-0.5">
              12 岗位 · BOSS 多轮直聊 + 教练排雷 + 合规 NZ 简历
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('language')}
          className="text-left bg-white rounded-2xl border border-slate-200 hover:border-fern-500 p-4 shadow-xs transition flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-700 flex items-center justify-center shrink-0">
            <MessageSquareQuote className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-ink-900">语言实验室</div>
            <div className="text-xs text-ink-500 mt-0.5">
              44 条俚语/毛利语/口音 + 12 地名正音 + SM-2 闪卡
            </div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tools')}
          className="text-left bg-white rounded-2xl border border-slate-200 hover:border-fern-500 p-4 shadow-xs transition flex items-start gap-3"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-ink-900">离线实战工具箱</div>
            <div className="text-xs text-ink-500 mt-0.5">
              2026 税薪计算、交规刷题、7 组清单与紧急救援黄页
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
