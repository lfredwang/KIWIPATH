import React, { useMemo, useRef, useState } from 'react';
import {
  Award,
  FileText,
  Send,
  ShieldAlert,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';
import type { ChatMessage, ChatOption, JobChatThread, JobPosting } from '../types';
import { JOB_CHAT_SCRIPTS, evaluateCustomReply } from '../data/jobs/chatScripts';
import { useApp } from '../context/AppContext';
import { speakText } from '../services/speech';

interface JobChatModalProps {
  job: JobPosting;
  onClose: () => void;
}

function nowTimeStr(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export const JobChatModal: React.FC<JobChatModalProps> = ({ job, onClose }) => {
  const { state, effectiveTier, upsertJobThread, showToast } = useApp();
  const stages = JOB_CHAT_SCRIPTS[job.chatScriptId] ?? JOB_CHAT_SCRIPTS['script-tech'];
  const [customText, setCustomText] = useState('');
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const thread: JobChatThread = useMemo(() => {
    const existing = state.jobThreads[job.id];
    if (existing) return existing;
    const firstStage = stages[0];
    return {
      jobId: job.id,
      status: 'chatting',
      currentStage: 0,
      completed: false,
      cvSent: false,
      scores: { professional: 50, kiwiNatural: 50, cultureSafe: 50 },
      messages: [
        {
          id: `sys-init-${job.id}`,
          sender: 'system',
          textEn: `Offline Simulation Chat started with ${job.hiringManager.name} (${job.hiringManager.title} at ${job.company}).`,
          textZh: `已开启离线仿真直聊 · 招聘方：${job.hiringManager.name}（${job.company}）`,
          timestamp: nowTimeStr(),
        },
        {
          id: `boss-0-${job.id}`,
          sender: 'boss',
          textEn: firstStage.bossPromptEn,
          textZh: firstStage.bossPromptZh,
          timestamp: nowTimeStr(),
        },
      ],
      updatedAt: new Date().toISOString(),
    };
  }, [state.jobThreads, job, stages]);

  const clampScore = (v: number) => Math.max(0, Math.min(100, v));

  const scrollToBottom = () => {
    window.setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 60);
  };

  const handleSendCv = () => {
    if (thread.cvSent) {
      showToast('已向该招聘方发送过简历名片', 'info');
      return;
    }
    const cvMsg: ChatMessage = {
      id: `cv-${Date.now()}`,
      sender: 'user',
      isCvCard: true,
      textEn: `[NZ CV Card] ${state.cv.preferredName || state.cv.fullName} · ${state.cv.targetRole} · ${state.cv.city} · ${state.cv.visaStatus}`,
      textZh: `已一键投递 NZ 简历名片：${state.cv.fullName}（${state.cv.targetRole}）`,
      timestamp: nowTimeStr(),
    };
    const next: JobChatThread = {
      ...thread,
      cvSent: true,
      scores: {
        ...thread.scores,
        professional: clampScore(thread.scores.professional + 8),
      },
      messages: [...thread.messages, cvMsg],
      updatedAt: new Date().toISOString(),
    };
    upsertJobThread(next, 10);
    showToast('已发送 NZ 简历名片！专业度 +8');
    scrollToBottom();
  };

  const applyTurn = (
    userEn: string,
    userZh: string | undefined,
    evalResult: {
      quality: 'great' | 'ok' | 'pitfall';
      scoreDelta: { professional: number; kiwiNatural: number; cultureSafe: number };
      coachFeedbackZh: string;
      betterPhraseEn?: string;
      bossReplyEn: string;
      bossReplyZh: string;
    }
  ) => {
    const nextScores = {
      professional: clampScore(thread.scores.professional + evalResult.scoreDelta.professional),
      kiwiNatural: clampScore(thread.scores.kiwiNatural + evalResult.scoreDelta.kiwiNatural),
      cultureSafe: clampScore(thread.scores.cultureSafe + evalResult.scoreDelta.cultureSafe),
    };

    const nextStageIndex = thread.currentStage + 1;
    const isFinished = nextStageIndex >= stages.length;
    const avgScore = Math.round(
      (nextScores.professional + nextScores.kiwiNatural + nextScores.cultureSafe) / 3
    );

    const newMessages: ChatMessage[] = [
      ...thread.messages,
      {
        id: `u-${Date.now()}`,
        sender: 'user',
        textEn: userEn,
        textZh: userZh,
        timestamp: nowTimeStr(),
        coachReview: {
          quality: evalResult.quality,
          feedbackZh: evalResult.coachFeedbackZh,
          betterPhraseEn: evalResult.betterPhraseEn,
        },
      },
      {
        id: `b-${Date.now() + 1}`,
        sender: 'boss',
        textEn: evalResult.bossReplyEn,
        textZh: evalResult.bossReplyZh,
        timestamp: nowTimeStr(),
      },
    ];

    let nextStatus = thread.status;
    let awardXp = 10;

    if (!isFinished) {
      const upcoming = stages[nextStageIndex];
      newMessages.push({
        id: `stage-${nextStageIndex}-${Date.now() + 2}`,
        sender: 'boss',
        textEn: upcoming.bossPromptEn,
        textZh: upcoming.bossPromptZh,
        timestamp: nowTimeStr(),
      });
    } else {
      if (avgScore >= 78) {
        nextStatus = 'offer';
        awardXp = 60;
        newMessages.push({
          id: `offer-${Date.now() + 3}`,
          sender: 'system',
          isOfferCard: true,
          textEn: `🎉 Simulated Offer / Final Interview Unlocked! Average Score: ${avgScore}/100. Check this package in the Offer Checker!`,
          textZh: `🎉 沟通表现优异（均分 ${avgScore}/100）！已解锁模拟 Offer / 终面直通卡，快去「Offer 体检器」测算税后到手薪资！`,
          timestamp: nowTimeStr(),
        });
      } else if (avgScore >= 60) {
        nextStatus = 'interview';
        awardXp = 40;
        newMessages.push({
          id: `iv-${Date.now() + 3}`,
          sender: 'system',
          isOfferCard: true,
          textEn: `📅 Interview Invite Unlocked! Average Score: ${avgScore}/100.`,
          textZh: `📅 恭喜拿到面试邀约（均分 ${avgScore}/100）！可随时复盘教练建议再次演练冲击模拟 Offer。`,
          timestamp: nowTimeStr(),
        });
      } else {
        awardXp = 20;
        newMessages.push({
          id: `done-${Date.now() + 3}`,
          sender: 'system',
          textEn: `Simulation finished (Average Score: ${avgScore}/100). Review the Kiwi Coach tips and try again!`,
          textZh: `本轮演练结束（均分 ${avgScore}/100）。建议复盘上方教练排雷提示，重新开聊练习地道表达！`,
          timestamp: nowTimeStr(),
        });
      }
    }

    const updated: JobChatThread = {
      ...thread,
      status: nextStatus,
      currentStage: nextStageIndex,
      completed: isFinished,
      scores: nextScores,
      messages: newMessages,
      updatedAt: new Date().toISOString(),
    };
    upsertJobThread(updated, awardXp);
    scrollToBottom();
  };

  const handleChooseOption = (opt: ChatOption) => {
    applyTurn(opt.text.en, opt.text.zh, opt);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customText.trim();
    if (!trimmed || thread.completed) return;
    const evaluation = evaluateCustomReply(trimmed, job);
    setCustomText('');
    applyTurn(trimmed, undefined, evaluation);
  };

  const handleRestart = () => {
    const firstStage = stages[0];
    upsertJobThread({
      jobId: job.id,
      status: 'chatting',
      currentStage: 0,
      completed: false,
      cvSent: false,
      scores: { professional: 50, kiwiNatural: 50, cultureSafe: 50 },
      messages: [
        {
          id: `sys-re-${Date.now()}`,
          sender: 'system',
          textEn: `Restarted offline simulation chat with ${job.hiringManager.name}.`,
          textZh: `已重新开启与 ${job.hiringManager.name} 的离线仿真直聊。`,
          timestamp: nowTimeStr(),
        },
        {
          id: `boss-re-${Date.now() + 1}`,
          sender: 'boss',
          textEn: firstStage.bossPromptEn,
          textZh: firstStage.bossPromptZh,
          timestamp: nowTimeStr(),
        },
      ],
      updatedAt: new Date().toISOString(),
    });
  };

  const activeStage = !thread.completed ? stages[thread.currentStage] : null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="px-5 py-3.5 bg-fern-950 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
              style={{ backgroundColor: job.hiringManager.avatarColor }}
            >
              {job.hiringManager.avatarInitials}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold truncate">
                {job.hiringManager.name} · {job.hiringManager.title}
              </div>
              <div className="text-xs text-fern-100/80 truncate">
                {job.title} @ {job.company} · {job.city}（离线仿真沙盘）
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleSendCv}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                thread.cvSent
                  ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30'
                  : 'bg-white text-fern-950 hover:bg-fern-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              {thread.cvSent ? '已发简历名片' : '一键发 NZ 简历'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/10 text-white"
              aria-label="关闭聊天"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live 3-Axis Kiwi Coach Score Bar */}
        <div className="px-5 py-2.5 bg-alps-50 border-b border-slate-200 grid grid-cols-3 gap-3 text-xs">
          {(
            [
              { label: '专业度 Professional', val: thread.scores.professional, bar: 'bg-tasman-600' },
              { label: '地道度 Kiwi Natural', val: thread.scores.kiwiNatural, bar: 'bg-fern-700' },
              { label: '文化安全 Culture Safe', val: thread.scores.cultureSafe, bar: 'bg-amber-500' },
            ] as const
          ).map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="flex justify-between font-medium text-ink-700">
                <span className="truncate">{s.label}</span>
                <span className="font-mono font-bold">{s.val}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full ${s.bar} transition-all`} style={{ width: `${s.val}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Messages Feed */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {thread.messages.map((m) => {
            if (m.sender === 'system') {
              return (
                <div
                  key={m.id}
                  className={`mx-auto max-w-xl text-center rounded-xl px-4 py-2 text-xs ${
                    m.isOfferCard
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold'
                      : 'bg-slate-100 text-ink-500'
                  }`}
                >
                  <div>{m.textZh ?? m.textEn}</div>
                </div>
              );
            }

            const isUser = m.sender === 'user';
            return (
              <div key={m.id} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-1.5`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm space-y-1 shadow-2xs ${
                    isUser
                      ? 'bg-fern-900 text-white rounded-br-sm'
                      : 'bg-white border border-slate-200 text-ink-900 rounded-bl-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="leading-relaxed">{m.textEn}</div>
                    {!isUser && (
                      <button
                        type="button"
                        onClick={() => speakText(m.textEn, { preferredVoiceUri: state.profile.preferredVoiceUri })}
                        className="text-ink-400 hover:text-fern-700 shrink-0 mt-0.5"
                        aria-label="朗读老板回复"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  {m.textZh && effectiveTier <= 3 && (
                    <div className={`text-xs ${isUser ? 'text-fern-100/85' : 'text-ink-500'}`}>
                      {m.textZh}
                    </div>
                  )}
                </div>

                {/* Inline Kiwi Job Coach Review */}
                {m.coachReview && (
                  <div
                    className={`max-w-[85%] rounded-xl border px-3.5 py-2.5 text-xs space-y-1 ${
                      m.coachReview.quality === 'great'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : m.coachReview.quality === 'pitfall'
                          ? 'bg-rose-50 border-rose-200 text-rose-900'
                          : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}
                  >
                    <div className="font-bold inline-flex items-center gap-1">
                      {m.coachReview.quality === 'pitfall' ? (
                        <ShieldAlert className="w-3.5 h-3.5" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5" />
                      )}
                      Kiwi 求职教练点评
                    </div>
                    <div>{m.coachReview.feedbackZh}</div>
                    {m.coachReview.betterPhraseEn && (
                      <div className="pt-1 text-ink-700">
                        <strong>更地道参考表达：</strong>"{m.coachReview.betterPhraseEn}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Bottom Reply Controls */}
        <div className="border-t border-slate-200 bg-white p-4 space-y-3">
          {activeStage ? (
            <>
              <div className="flex items-center justify-between text-xs text-ink-500">
                <span className="font-semibold text-fern-800">
                  第 {thread.currentStage + 1}/{stages.length} 轮：{activeStage.stageLabel}
                </span>
                <span>点选预设回复，或下方自由输入（支持红线检测）</span>
              </div>
              <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-1">
                {activeStage.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleChooseOption(opt)}
                    className="text-left rounded-xl border border-slate-200 hover:border-fern-600 hover:bg-fern-50/50 px-3.5 py-2 transition text-xs space-y-0.5"
                  >
                    <div className="font-medium text-ink-900">{opt.text.en}</div>
                    {effectiveTier <= 3 && <div className="text-ink-500">{opt.text.zh}</div>}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSendCustom} className="flex gap-2">
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="自由英文/双语回复（例：试试故意输入年龄/加班看教练如何拦截）..."
                  className="flex-1 rounded-xl border border-slate-200 px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fern-600"
                />
                <button
                  type="submit"
                  disabled={!customText.trim()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-fern-900 text-white text-sm font-semibold hover:bg-fern-800 disabled:opacity-40 transition"
                >
                  <Send className="w-4 h-4" />
                  发送
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-fern-900">
                <Award className="w-5 h-5 text-kowhai-500" />
                本岗位多轮仿真直聊已完成！
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-ink-700 hover:bg-slate-50"
                >
                  再演练一次
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-fern-900 text-white text-xs font-semibold hover:bg-fern-800"
                >
                  返回求职看板
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
