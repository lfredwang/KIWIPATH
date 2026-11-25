import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type {
  AppState,
  BilingualTier,
  CandidateCV,
  GitHubSyncConfig,
  JobChatThread,
  Lesson,
  NavTab,
  PolicyUpdate,
  UserProfile,
} from '../types';
import {
  createInitialState,
  getTodayStr,
  loadAppState,
  saveAppState,
} from '../services/storage';
import { reviewCardSM2, type ReviewRating } from '../services/sm2';
import { getLevelForXp, type LevelDefinition } from '../data/gamification';
import { ALL_LESSONS } from '../data/curriculum/allLessons';
import { POLICIES_2026 } from '../data/tools/policies2026';
import { mergeLessons, syncContentFromGitHub } from '../services/githubSync';

export interface ToastItem {
  id: string;
  message: string;
  tone?: 'success' | 'info' | 'warning';
}

interface AppContextValue {
  state: AppState;
  loaded: boolean;
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  effectiveTier: BilingualTier;
  levelInfo: {
    current: LevelDefinition;
    next: LevelDefinition | null;
    progressPct: number;
  };
  allLessons: Lesson[];
  allPolicies: PolicyUpdate[];
  syncingGitHub: boolean;
  syncFromGitHub: (overrideConfig?: GitHubSyncConfig) => Promise<{ ok: boolean; error?: string }>;
  updateGitHubConfig: (config: GitHubSyncConfig) => void;
  clearSyncedCache: () => void;
  toasts: ToastItem[];
  showToast: (message: string, tone?: ToastItem['tone']) => void;
  updateProfile: (patch: Partial<UserProfile>) => void;
  completeLesson: (lessonId: string, quizScorePct: number, xpReward: number) => void;
  completeDailyChallenge: (xpReward: number) => void;
  rateFlashcard: (itemId: string, rating: ReviewRating) => void;
  recordRoadCodeResult: (wrongIds: string[], scorePct: number) => void;
  toggleChecklistItem: (itemId: string) => void;
  addCustomChecklistItem: (groupId: string, textZh: string, textEn: string) => void;
  deleteCustomChecklistItem: (groupId: string, itemId: string) => void;
  toggleSaveJob: (jobId: string) => void;
  upsertJobThread: (thread: JobChatThread, awardXp?: number) => void;
  updateCv: (cv: CandidateCV) => void;
  importPolicies: (policies: PolicyUpdate[]) => void;
  restoreBackupState: (nextState: AppState) => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function computeBadges(state: AppState): string[] {
  const badges = new Set<string>(state.unlockedBadges);
  badges.add('kia-ora-starter');
  if (state.completedLessonIds.length >= 1) badges.add('first-lesson');
  if (state.completedLessonIds.length >= 5) badges.add('five-lessons');

  const threads = Object.values(state.jobThreads);
  if (threads.some((t) => t.completed)) badges.add('boss-chatter');
  if (threads.some((t) => t.status === 'interview' || t.status === 'offer')) {
    badges.add('offer-getter');
  }
  if (!state.cv.includeRedFlagPhoto && !state.cv.includeRedFlagAge && state.cv.fullName.trim()) {
    badges.add('cv-ready');
  }
  if (state.roadCodeBestScore >= 80) badges.add('road-code-ace');
  if (Object.keys(state.flashcards).length >= 10) badges.add('te-reo-friend');
  if (state.checkedItemIds.length >= 10) badges.add('checklist-doer');
  if (state.dailyChallengeDoneDate) badges.add('daily-challenger');

  return Array.from(badges);
}

function updateStreak(prev: AppState): Pick<AppState, 'streakDays' | 'lastActiveDate'> {
  const today = getTodayStr();
  if (prev.lastActiveDate === today) {
    return { streakDays: Math.max(1, prev.streakDays), lastActiveDate: today };
  }
  const prevDate = new Date(`${prev.lastActiveDate}T00:00:00`);
  const currDate = new Date(`${today}T00:00:00`);
  const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / (24 * 60 * 60 * 1000));
  if (diffDays === 1) {
    return { streakDays: prev.streakDays + 1, lastActiveDate: today };
  }
  return { streakDays: 1, lastActiveDate: today };
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>(() => createInitialState());
  const [loaded, setLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>('curriculum');
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [syncingGitHub, setSyncingGitHub] = useState(false);
  const saveTimerRef = useRef<number | null>(null);

  const showToast = (message: string, tone: ToastItem['tone'] = 'success') => {
    const id = `t-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setToasts((prev) => [...prev.slice(-2), { id, message, tone }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 3400);
  };

  useEffect(() => {
    let active = true;
    loadAppState().then((restored) => {
      if (!active) return;
      const streak = updateStreak(restored);
      const next: AppState = {
        ...restored,
        ...streak,
        profile: { ...restored.profile, onboardingCompleted: true },
        unlockedBadges: computeBadges(restored),
      };
      setState(next);
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      void saveAppState(state);
    }, 120);
    return () => {
      if (saveTimerRef.current) window.clearTimeout(saveTimerRef.current);
    };
  }, [state, loaded]);

  const levelInfo = useMemo(() => getLevelForXp(state.xp), [state.xp]);

  const effectiveTier: BilingualTier = useMemo(() => {
    if (state.profile.languagePref === 'auto') {
      return levelInfo.current.autoTier;
    }
    return state.profile.languagePref;
  }, [state.profile.languagePref, levelInfo]);

  const allLessons = useMemo(
    () => mergeLessons(ALL_LESSONS, state.syncedContent?.lessons),
    [state.syncedContent]
  );

  const allPolicies = useMemo(() => {
    const map = new Map<string, PolicyUpdate>();
    for (const p of POLICIES_2026) map.set(p.id, p);
    for (const p of state.syncedContent?.policies ?? []) map.set(p.id, p);
    for (const p of state.importedPolicies) map.set(p.id, p);
    return Array.from(map.values()).sort((a, b) =>
      b.effectiveDate.localeCompare(a.effectiveDate)
    );
  }, [state.syncedContent, state.importedPolicies]);

  const mutate = (updater: (prev: AppState) => AppState) => {
    setState((prev) => {
      const updated = updater(prev);
      return {
        ...updated,
        ...updateStreak(updated),
        unlockedBadges: computeBadges(updated),
      };
    });
  };

  const updateProfile = (patch: Partial<UserProfile>) => {
    mutate((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...patch, onboardingCompleted: true },
    }));
  };

  const updateGitHubConfig = (config: GitHubSyncConfig) => {
    mutate((prev) => ({ ...prev, githubConfig: config }));
    showToast(`已保存 GitHub 数据源：${config.owner}/${config.repo}`);
  };

  const syncFromGitHub = async (overrideConfig?: GitHubSyncConfig) => {
    const cfg = overrideConfig ?? state.githubConfig;
    setSyncingGitHub(true);
    const res = await syncContentFromGitHub(cfg);
    setSyncingGitHub(false);
    if (!res.ok || !res.data) {
      showToast(res.error ?? 'GitHub 同步失败，当前继续使用内置离线库', 'warning');
      return { ok: false, error: res.error };
    }
    mutate((prev) => ({
      ...prev,
      githubConfig: cfg,
      syncedContent: res.data!,
    }));
    showToast(
      `已从 GitHub 同步最新版（v${res.data.version}，共 ${res.data.lessons.length} 节课程）！`
    );
    return { ok: true };
  };

  const clearSyncedCache = () => {
    mutate((prev) => ({ ...prev, syncedContent: null }));
    showToast('已清除 GitHub 同步缓存，恢复为内置离线版本', 'info');
  };

  const completeLesson = (lessonId: string, quizScorePct: number, xpReward: number) => {
    mutate((prev) => {
      const alreadyDone = prev.completedLessonIds.includes(lessonId);
      return {
        ...prev,
        completedLessonIds: alreadyDone
          ? prev.completedLessonIds
          : [...prev.completedLessonIds, lessonId],
        lessonQuizScores: {
          ...prev.lessonQuizScores,
          [lessonId]: Math.max(prev.lessonQuizScores[lessonId] ?? 0, quizScorePct),
        },
        xp: alreadyDone ? prev.xp : prev.xp + xpReward,
      };
    });
    showToast(`章节已完成！学习进度已自动保存，+${xpReward} XP`);
  };

  const completeDailyChallenge = (xpReward: number) => {
    const today = getTodayStr();
    mutate((prev) => {
      if (prev.dailyChallengeDoneDate === today) return prev;
      return {
        ...prev,
        dailyChallengeDoneDate: today,
        xp: prev.xp + xpReward,
      };
    });
    showToast(`今日 Kiwi 挑战达成！+${xpReward} XP`);
  };

  const rateFlashcard = (itemId: string, rating: ReviewRating) => {
    mutate((prev) => {
      const nextProgress = reviewCardSM2(itemId, prev.flashcards[itemId], rating);
      return {
        ...prev,
        flashcards: { ...prev.flashcards, [itemId]: nextProgress },
        xp: prev.xp + (rating === 'again' ? 2 : 5),
      };
    });
  };

  const recordRoadCodeResult = (wrongIds: string[], scorePct: number) => {
    mutate((prev) => ({
      ...prev,
      roadCodeWrongIds: Array.from(new Set(wrongIds)),
      roadCodeBestScore: Math.max(prev.roadCodeBestScore, scorePct),
      xp: prev.xp + (scorePct >= 80 ? 35 : 15),
    }));
  };

  const toggleChecklistItem = (itemId: string) => {
    mutate((prev) => {
      const exists = prev.checkedItemIds.includes(itemId);
      return {
        ...prev,
        checkedItemIds: exists
          ? prev.checkedItemIds.filter((id) => id !== itemId)
          : [...prev.checkedItemIds, itemId],
        xp: exists ? prev.xp : prev.xp + 5,
      };
    });
  };

  const addCustomChecklistItem = (groupId: string, textZh: string, textEn: string) => {
    const cleanZh = textZh.trim();
    if (!cleanZh) return;
    const item = {
      id: `custom-${Date.now()}`,
      textZh: cleanZh,
      textEn: textEn.trim() || cleanZh,
    };
    mutate((prev) => ({
      ...prev,
      customChecklistItems: {
        ...prev.customChecklistItems,
        [groupId]: [...(prev.customChecklistItems[groupId] ?? []), item],
      },
    }));
    showToast('已添加自定义清单事项');
  };

  const deleteCustomChecklistItem = (groupId: string, itemId: string) => {
    mutate((prev) => ({
      ...prev,
      customChecklistItems: {
        ...prev.customChecklistItems,
        [groupId]: (prev.customChecklistItems[groupId] ?? []).filter((x) => x.id !== itemId),
      },
      checkedItemIds: prev.checkedItemIds.filter((id) => id !== itemId),
    }));
  };

  const toggleSaveJob = (jobId: string) => {
    mutate((prev) => {
      const exists = prev.savedJobIds.includes(jobId);
      return {
        ...prev,
        savedJobIds: exists
          ? prev.savedJobIds.filter((id) => id !== jobId)
          : [...prev.savedJobIds, jobId],
      };
    });
  };

  const upsertJobThread = (thread: JobChatThread, awardXp = 0) => {
    mutate((prev) => ({
      ...prev,
      jobThreads: { ...prev.jobThreads, [thread.jobId]: thread },
      xp: prev.xp + awardXp,
    }));
  };

  const updateCv = (cv: CandidateCV) => {
    mutate((prev) => ({ ...prev, cv }));
    showToast('NZ 简历名片已保存到本地浏览器');
  };

  const importPolicies = (policies: PolicyUpdate[]) => {
    mutate((prev) => {
      const map = new Map<string, PolicyUpdate>();
      for (const p of prev.importedPolicies) map.set(p.id, p);
      for (const p of policies) map.set(p.id, p);
      return {
        ...prev,
        importedPolicies: Array.from(map.values()),
      };
    });
    showToast(`成功导入并合并 ${policies.length} 条政策补丁`);
  };

  const restoreBackupState = (nextState: AppState) => {
    const finalized: AppState = {
      ...nextState,
      profile: { ...nextState.profile, onboardingCompleted: true },
      unlockedBadges: computeBadges(nextState),
    };
    setState(finalized);
    void saveAppState(finalized);
    showToast('学习记录备份已成功恢复！');
  };

  const resetAllData = () => {
    const fresh = createInitialState();
    setState(fresh);
    void saveAppState(fresh);
    showToast('已清空并重置本地学习记录', 'warning');
  };

  return (
    <AppContext.Provider
      value={{
        state,
        loaded,
        activeTab,
        setActiveTab,
        effectiveTier,
        levelInfo,
        allLessons,
        allPolicies,
        syncingGitHub,
        syncFromGitHub,
        updateGitHubConfig,
        clearSyncedCache,
        toasts,
        showToast,
        updateProfile,
        completeLesson,
        completeDailyChallenge,
        rateFlashcard,
        recordRoadCodeResult,
        toggleChecklistItem,
        addCustomChecklistItem,
        deleteCustomChecklistItem,
        toggleSaveJob,
        upsertJobThread,
        updateCv,
        importPolicies,
        restoreBackupState,
        resetAllData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
