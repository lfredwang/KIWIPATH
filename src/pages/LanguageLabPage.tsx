import React, { useMemo, useState } from 'react';
import {
  BookMarked,
  CheckCircle2,
  MapPin,
  RotateCw,
  Search,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { LEXICON_ITEMS, NZ_PLACE_NAMES } from '../data/language/lexiconData';
import type { LexiconCategory } from '../types';
import { useApp } from '../context/AppContext';
import { formatNextInterval, isCardDue, reviewCardSM2, type ReviewRating } from '../services/sm2';
import { speakText } from '../services/speech';

type LabTab = 'browse' | 'flashcards' | 'places';

const CATEGORY_LABELS: Record<'ALL' | LexiconCategory, string> = {
  ALL: '全部词条 (44)',
  'kiwi-slang': 'Kiwi 日常俚语',
  'workplace-subtext': '职场潜台词',
  'te-reo': '日常毛利语 Te Reo',
  'accent-vowels': 'Kiwi 口音元音规律',
};

export const LanguageLabPage: React.FC = () => {
  const { state, rateFlashcard, showToast } = useApp();
  const [subTab, setSubTab] = useState<LabTab>('browse');
  const [cat, setCat] = useState<'ALL' | LexiconCategory>('ALL');
  const [query, setQuery] = useState('');
  const [flipped, setFlipped] = useState(false);

  const dueQueue = useMemo(
    () => LEXICON_ITEMS.filter((item) => isCardDue(state.flashcards[item.id])),
    [state.flashcards]
  );
  const currentCard = dueQueue[0] ?? null;

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LEXICON_ITEMS.filter((item) => {
      if (cat !== 'ALL' && item.category !== cat) return false;
      if (q) {
        const hay = `${item.term} ${item.meaningZh} ${item.meaningEn} ${item.exampleEn}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [cat, query]);

  const handleSpeak = (text: string) => {
    if (!speakText(text, { preferredVoiceUri: state.profile.preferredVoiceUri })) {
      showToast('当前浏览器不支持内置语音朗读', 'warning');
    }
  };

  const handleRate = (rating: ReviewRating) => {
    if (!currentCard) return;
    rateFlashcard(currentCard.id, rating);
    setFlipped(false);
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-950 to-fern-900 text-white rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs bg-white/15 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            本地 Web Speech 发音 + SM-2 科学记忆曲线（零 API 费用）
          </div>
          <h1 className="text-xl font-bold">语言实验室 · Kiwi 俚语、口音与毛利语</h1>
          <p className="text-xs text-violet-100">
            听懂新西兰元音漂移与职场潜台词，自然用出 Kia ora / Ngā mihi / Sweet as
          </p>
        </div>
        <div className="bg-white/10 border border-white/15 rounded-xl px-4 py-2.5 text-center">
          <div className="text-xl font-bold font-mono">{dueQueue.length}</div>
          <div className="text-[11px] text-violet-100">今日待复习闪卡</div>
        </div>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap gap-2">
        {(
          [
            { id: 'browse', label: '词汇与口音词典', icon: BookMarked },
            { id: 'flashcards', label: `SM-2 闪卡复习 (${dueQueue.length})`, icon: RotateCw },
            { id: 'places', label: '12 毛利地名正音表', icon: MapPin },
          ] as const
        ).map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setSubTab(t.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                subTab === t.id
                  ? 'bg-fern-900 text-white border-fern-900'
                  : 'bg-white text-ink-700 border-slate-200 hover:border-fern-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* 1. Browse Dictionary */}
      {subTab === 'browse' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索俚语、毛利词、中文含义..."
                className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-fern-600"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(CATEGORY_LABELS) as Array<'ALL' | LexiconCategory>).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                    cat === c
                      ? 'bg-fern-900 text-white border-fern-900'
                      : 'bg-slate-50 text-ink-700 border-slate-200'
                  }`}
                >
                  {CATEGORY_LABELS[c]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const prog = state.flashcards[item.id];
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-ink-900">{item.term}</h3>
                        <span className="text-[11px] bg-slate-100 text-ink-600 px-2 py-0.5 rounded-full">
                          {CATEGORY_LABELS[item.category]}
                        </span>
                      </div>
                      <div className="text-xs text-ink-500 font-mono mt-0.5">{item.phonetic}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSpeak(item.term)}
                      className="p-2 rounded-xl bg-fern-50 text-fern-800 hover:bg-fern-100 transition shrink-0"
                      aria-label={`朗读 ${item.term}`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-sm font-semibold text-ink-800">{item.meaningZh}</div>
                  <div className="text-xs text-ink-500">{item.meaningEn}</div>

                  <div className="rounded-xl bg-alps-50 border border-slate-200/80 p-3 space-y-1 text-xs">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-medium text-ink-900">"{item.exampleEn}"</span>
                      <button
                        type="button"
                        onClick={() => handleSpeak(item.exampleEn)}
                        className="text-tasman-700 hover:text-tasman-600 shrink-0"
                        aria-label="朗读例句"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-ink-500">{item.exampleZh}</div>
                  </div>

                  <div className="text-xs text-fern-900 bg-fern-50/70 rounded-lg px-2.5 py-1.5">
                    💡 {item.culturalNoteZh}
                  </div>

                  {prog && (
                    <div className="text-[11px] text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      已复习 {prog.repetitions} 次 · 下次间隔 {formatNextInterval(prog.intervalDays)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. SM-2 Flashcard Queue */}
      {subTab === 'flashcards' && (
        <div className="max-w-xl mx-auto">
          {!currentCard ? (
            <div className="bg-white rounded-3xl border border-emerald-200 p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-lg font-bold text-ink-900">Ka pai! 今日到期闪卡已全部复习完！</h2>
              <p className="text-sm text-ink-500">
                SM-2 算法已按你的掌握程度安排好下次复习时间，明天再来巩固吧。
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between text-xs text-ink-500">
                <span className="bg-fern-50 text-fern-800 px-2.5 py-1 rounded-full font-semibold">
                  {CATEGORY_LABELS[currentCard.category]}
                </span>
                <span>队列剩余 {dueQueue.length} 张</span>
              </div>

              <div className="text-center py-6 space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-ink-900">{currentCard.term}</h2>
                <div className="text-sm font-mono text-ink-500">{currentCard.phonetic}</div>
                <button
                  type="button"
                  onClick={() => handleSpeak(currentCard.term)}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-fern-50 text-fern-800 text-xs font-semibold hover:bg-fern-100 transition"
                >
                  <Volume2 className="w-4 h-4" />
                  听发音
                </button>
              </div>

              {!flipped ? (
                <button
                  type="button"
                  onClick={() => setFlipped(true)}
                  className="w-full py-3 rounded-2xl bg-fern-900 text-white text-sm font-semibold hover:bg-fern-800 transition"
                >
                  翻看中文释义与地道例句
                </button>
              ) : (
                <div className="space-y-5 pt-4 border-t border-slate-100">
                  <div className="space-y-1.5 text-center">
                    <div className="text-lg font-bold text-ink-900">{currentCard.meaningZh}</div>
                    <div className="text-xs text-ink-500">{currentCard.meaningEn}</div>
                  </div>

                  <div className="rounded-xl bg-alps-50 border border-slate-200 p-3.5 text-xs space-y-1">
                    <div className="font-semibold text-ink-900">"{currentCard.exampleEn}"</div>
                    <div className="text-ink-600">{currentCard.exampleZh}</div>
                    <div className="text-fern-800 pt-1">💡 {currentCard.culturalNoteZh}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-center text-ink-500">
                      你的记忆熟练度？（系统将按 SM-2 安排下次复习）
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {(
                        [
                          { id: 'again', label: '忘了', cls: 'bg-rose-50 border-rose-200 text-rose-800' },
                          { id: 'hard', label: '有点难', cls: 'bg-amber-50 border-amber-200 text-amber-800' },
                          { id: 'good', label: '记住了', cls: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
                          { id: 'easy', label: '秒懂', cls: 'bg-sky-50 border-sky-200 text-sky-800' },
                        ] as const
                      ).map((btn) => {
                        const preview = reviewCardSM2(
                          currentCard.id,
                          state.flashcards[currentCard.id],
                          btn.id
                        );
                        return (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => handleRate(btn.id)}
                            className={`rounded-xl border py-2.5 px-2 text-center transition hover:brightness-95 ${btn.cls}`}
                          >
                            <div className="text-xs font-bold">{btn.label}</div>
                            <div className="text-[10px] opacity-80 mt-0.5">
                              {formatNextInterval(preview.intervalDays)}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 3. NZ Maori Place Names */}
      {subTab === 'places' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NZ_PLACE_NAMES.map((place) => (
            <div
              key={place.name}
              className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-2"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-ink-900">{place.name}</h3>
                  <div className="text-xs text-ink-500">{place.englishName}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleSpeak(place.name)}
                  className="p-2 rounded-xl bg-fern-50 text-fern-800 hover:bg-fern-100"
                  aria-label={`朗读地名 ${place.name}`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs font-mono font-semibold text-tasman-700 bg-tasman-100/70 px-2.5 py-1 rounded-lg">
                读音指引：{place.phoneticGuide}
              </div>
              <div className="text-xs text-ink-600">{place.regionTipZh}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
