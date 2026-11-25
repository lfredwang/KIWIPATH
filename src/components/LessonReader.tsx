import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Layers,
  ListChecks,
  MessageCircle,
  Scale,
  ShieldCheck,
  Volume2,
} from 'lucide-react';
import type { Lesson, LessonCard } from '../types';
import { useApp } from '../context/AppContext';
import { BilingualBlock } from './BilingualBlock';
import { speakText } from '../services/speech';

interface LessonReaderProps {
  lesson: Lesson;
  onBack: () => void;
  onSelectLesson?: (lesson: Lesson) => void;
}

const CARD_META: Record<
  LessonCard['type'],
  { label: string; badgeClass: string; icon: React.FC<{ className?: string }> }
> = {
  concept: { label: '核心概念', badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200', icon: BookOpen },
  comparison: { label: '对比拆解', badgeClass: 'bg-sky-50 text-sky-800 border-sky-200', icon: Scale },
  dialogue: { label: '真实双语话术', badgeClass: 'bg-violet-50 text-violet-800 border-violet-200', icon: MessageCircle },
  warning: { label: '高频避坑红线', badgeClass: 'bg-amber-50 text-amber-900 border-amber-200', icon: AlertTriangle },
  checklist: { label: '手把手实操', badgeClass: 'bg-teal-50 text-teal-800 border-teal-200', icon: ListChecks },
};

export const LessonReader: React.FC<LessonReaderProps> = ({
  lesson,
  onBack,
  onSelectLesson,
}) => {
  const { state, allLessons, effectiveTier, completeLesson, showToast } = useApp();
  const [readMode, setReadMode] = useState<'article' | 'cards'>('article');
  const [cardIdx, setCardIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setCardIdx(0);
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lesson.id]);

  const alreadyDone = state.completedLessonIds.includes(lesson.id);
  const currentIdx = allLessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx >= 0 && currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const handleSpeak = (text: string) => {
    const ok = speakText(text, { preferredVoiceUri: state.profile.preferredVoiceUri });
    if (!ok) showToast('当前浏览器不支持内置语音朗读', 'warning');
  };

  const handleSubmitQuiz = () => {
    const total = lesson.quiz.length;
    let correct = 0;
    for (const q of lesson.quiz) {
      const picked = answers[q.id];
      const opt = q.options.find((o) => o.id === picked);
      if (opt?.isCorrect) correct += 1;
    }
    const scorePct = total > 0 ? Math.round((correct / total) * 100) : 100;
    setSubmitted(true);
    completeLesson(lesson.id, scorePct, lesson.xpReward);
  };

  const renderCard = (card: LessonCard, idx: number) => {
    const meta = CARD_META[card.type];
    const Icon = meta.icon;
    return (
      <article
        key={card.id}
        className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4"
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${meta.badgeClass}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {meta.label}
          </span>
          <span className="text-xs text-ink-500 font-mono">
            要点 {idx + 1} / {lesson.cards.length}
          </span>
        </div>

        <BilingualBlock
          text={card.title}
          tier={effectiveTier}
          primaryClassName="text-lg font-bold text-ink-900"
          secondaryClassName="text-sm text-ink-500"
        />

        <BilingualBlock
          text={card.body}
          tier={effectiveTier}
          primaryClassName="text-sm sm:text-base text-ink-800 leading-relaxed whitespace-pre-line"
          secondaryClassName="text-sm text-ink-500 leading-relaxed whitespace-pre-line"
        />

        {card.keyPoints && card.keyPoints.length > 0 && (
          <div className="bg-alps-50 rounded-xl border border-slate-200/80 p-4 space-y-2.5">
            <div className="text-xs font-bold text-fern-900">实操细则与关键要点：</div>
            {card.keyPoints.map((kp, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-fern-900 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <BilingualBlock
                  text={kp}
                  tier={effectiveTier}
                  primaryClassName="text-sm text-ink-900 font-medium leading-relaxed"
                  secondaryClassName="text-xs text-ink-500"
                />
              </div>
            ))}
          </div>
        )}

        {card.dialogueLines && card.dialogueLines.length > 0 && (
          <div className="space-y-3 pt-1">
            {card.dialogueLines.map((line, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 p-3.5 bg-slate-50/70 space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-fern-900">{line.speaker}</span>
                  <button
                    type="button"
                    onClick={() => handleSpeak(line.en)}
                    className="inline-flex items-center gap-1 text-xs text-tasman-700 hover:text-tasman-600 font-medium"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    朗读英文
                  </button>
                </div>
                <div className="text-sm font-medium text-ink-900 whitespace-pre-line">{line.en}</div>
                {effectiveTier <= 3 && (
                  <div className="text-xs text-ink-500 whitespace-pre-line">{line.zh}</div>
                )}
                {line.subtextZh && (
                  <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-1.5">
                    🎯 实战提示：{line.subtextZh}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="space-y-5">
      {/* Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-fern-900 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          返回全书目录
        </button>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="inline-flex rounded-xl border border-slate-200 bg-white p-0.5">
            <button
              type="button"
              onClick={() => setReadMode('article')}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg font-semibold transition ${
                readMode === 'article' ? 'bg-fern-900 text-white' : 'text-ink-600'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              百科长文模式
            </button>
            <button
              type="button"
              onClick={() => setReadMode('cards')}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg font-semibold transition ${
                readMode === 'cards' ? 'bg-fern-900 text-white' : 'text-ink-600'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              逐卡精读
            </button>
          </div>

          {lesson.verifiedDate && (
            <span className="inline-flex items-center gap-1 bg-fern-50 text-fern-800 border border-fern-100 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              核验：{lesson.verifiedDate} · {lesson.officialSource ?? '官方公开资料'}
            </span>
          )}
        </div>
      </div>

      {/* Lesson Hero */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-fern-700 uppercase tracking-wide">
              第 {lesson.number} 节 / 共 {allLessons.length} 节 · 约 {lesson.durationMin} 分钟 · Lv.{lesson.targetLevel}
            </div>
            <BilingualBlock
              text={lesson.title}
              tier={effectiveTier}
              primaryClassName="text-xl font-bold text-ink-900"
              secondaryClassName="text-sm text-ink-500"
            />
          </div>
          {alreadyDone ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-4 h-4" />
              已掌握
            </span>
          ) : (
            <button
              type="button"
              onClick={() => completeLesson(lesson.id, 100, lesson.xpReward)}
              className="inline-flex items-center gap-1 text-xs font-semibold bg-fern-50 hover:bg-fern-100 text-fern-900 border border-fern-200 px-3 py-1.5 rounded-full transition"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              标记已读 (+{lesson.xpReward} XP)
            </button>
          )}
        </div>

        {/* Key Terms Pronunciation Strip */}
        {lesson.terms.length > 0 && (
          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-semibold text-ink-500 mb-2">
              本节核心原词（点击即可本地朗读）：
            </div>
            <div className="flex flex-wrap gap-2">
              {lesson.terms.map((t) => (
                <button
                  key={t.term}
                  type="button"
                  onClick={() => handleSpeak(t.term)}
                  className="text-left inline-flex items-center gap-2 rounded-xl bg-alps-50 hover:bg-fern-50 border border-slate-200 hover:border-fern-300 px-3 py-1.5 transition"
                >
                  <Volume2 className="w-3.5 h-3.5 text-fern-700 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-ink-900">{t.term}</span>
                    {t.phonetic && (
                      <span className="text-[11px] text-ink-500 ml-1.5">{t.phonetic}</span>
                    )}
                    <div className="text-[11px] text-ink-700">{t.zh}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Area: Full Encyclopaedia Article OR Single Card */}
      {readMode === 'article' ? (
        <div className="space-y-4">{lesson.cards.map((c, idx) => renderCard(c, idx))}</div>
      ) : (
        <div className="space-y-4">
          {lesson.cards[cardIdx] && renderCard(lesson.cards[cardIdx], cardIdx)}
          <div className="flex items-center justify-between">
            <button
              type="button"
              disabled={cardIdx === 0}
              onClick={() => setCardIdx((i) => Math.max(0, i - 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-ink-700 hover:bg-slate-50 disabled:opacity-40"
            >
              <ArrowLeft className="w-4 h-4" />
              上一张卡片
            </button>
            <span className="text-xs font-mono text-ink-500">
              {cardIdx + 1} / {lesson.cards.length}
            </span>
            <button
              type="button"
              disabled={cardIdx >= lesson.cards.length - 1}
              onClick={() => setCardIdx((i) => Math.min(lesson.cards.length - 1, i + 1))}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-fern-900 text-white text-sm font-semibold hover:bg-fern-800 disabled:opacity-40"
            >
              下一张卡片
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Action Tip */}
      {lesson.actionTip && (
        <div className="rounded-2xl bg-fern-50 border border-fern-200 p-4 text-sm text-fern-900">
          <div className="font-bold mb-1">📌 本节实操行动建议</div>
          <BilingualBlock text={lesson.actionTip} tier={effectiveTier} compact />
        </div>
      )}

      {/* Embedded Scenario Self-Check Quiz */}
      {lesson.quiz.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="text-sm font-bold text-ink-900">📝 本节情景避坑自测（{lesson.quiz.length} 题）</div>
          {lesson.quiz.map((q, qIndex) => {
            const picked = answers[q.id];
            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3"
              >
                <div className="text-xs font-bold text-fern-700">情景题 {qIndex + 1}</div>
                <BilingualBlock
                  text={q.prompt}
                  tier={effectiveTier}
                  primaryClassName="text-sm sm:text-base font-bold text-ink-900"
                  secondaryClassName="text-xs text-ink-500"
                />
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isSelected = picked === opt.id;
                    let cls = 'border-slate-200 hover:border-fern-400 bg-white';
                    if (submitted) {
                      if (opt.isCorrect) cls = 'border-emerald-500 bg-emerald-50/70';
                      else if (isSelected) cls = 'border-rose-400 bg-rose-50/70';
                    } else if (isSelected) {
                      cls = 'border-fern-700 bg-fern-50 ring-1 ring-fern-700';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={submitted}
                        onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                        className={`w-full text-left rounded-xl border p-3.5 transition ${cls}`}
                      >
                        <BilingualBlock
                          text={opt.text}
                          tier={effectiveTier}
                          primaryClassName="text-sm font-medium text-ink-900"
                          secondaryClassName="text-xs text-ink-500"
                        />
                        {submitted && (isSelected || opt.isCorrect) && (
                          <div
                            className={`mt-2 pt-2 border-t text-xs ${
                              opt.isCorrect
                                ? 'border-emerald-200 text-emerald-800'
                                : 'border-rose-200 text-rose-800'
                            }`}
                          >
                            {opt.isCorrect ? '✅ ' : '❌ '}
                            {opt.feedback.zh}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {!submitted && (
            <div className="flex justify-end">
              <button
                type="button"
                disabled={Object.keys(answers).length < lesson.quiz.length}
                onClick={handleSubmitQuiz}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-fern-900 text-white text-sm font-semibold hover:bg-fern-800 disabled:opacity-45 transition"
              >
                <Award className="w-4 h-4" />
                提交自测并记录完成 (+{lesson.xpReward} XP)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Prev / Next Chapter Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
        {prevLesson && onSelectLesson ? (
          <button
            type="button"
            onClick={() => onSelectLesson(prevLesson)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-fern-500 text-xs font-semibold text-ink-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            上一节：#{prevLesson.number} {prevLesson.title.zh.slice(0, 18)}
          </button>
        ) : (
          <div />
        )}

        {nextLesson && onSelectLesson && (
          <button
            type="button"
            onClick={() => onSelectLesson(nextLesson)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-fern-900 text-white hover:bg-fern-800 text-xs font-semibold transition"
          >
            下一节：#{nextLesson.number} {nextLesson.title.zh.slice(0, 18)}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
