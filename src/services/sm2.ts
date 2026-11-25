import type { FlashcardProgress } from '../types';

export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

const RATING_QUALITY: Record<ReviewRating, number> = {
  again: 1,
  hard: 3,
  good: 4,
  easy: 5,
};

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Standard SM-2 Spaced Repetition Update
 */
export function reviewCardSM2(
  itemId: string,
  prev: FlashcardProgress | undefined,
  rating: ReviewRating,
  now = Date.now()
): FlashcardProgress {
  const q = RATING_QUALITY[rating];
  const prevEase = prev?.easeFactor ?? 2.5;
  const prevInterval = prev?.intervalDays ?? 0;
  const prevReps = prev?.repetitions ?? 0;

  let easeFactor = prevEase + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  let repetitions: number;
  let intervalDays: number;

  if (q < 3) {
    repetitions = 0;
    intervalDays = 0.01; // review again in ~15 mins
  } else {
    repetitions = prevReps + 1;
    if (repetitions === 1) {
      intervalDays = rating === 'easy' ? 4 : rating === 'hard' ? 1 : 1;
    } else if (repetitions === 2) {
      intervalDays = rating === 'easy' ? 8 : rating === 'hard' ? 3 : 6;
    } else {
      const mult = rating === 'hard' ? 1.2 : rating === 'easy' ? easeFactor * 1.3 : easeFactor;
      intervalDays = Math.max(1, Math.round(prevInterval * mult));
    }
  }

  return {
    itemId,
    easeFactor: Number(easeFactor.toFixed(2)),
    intervalDays,
    repetitions,
    nextReviewAt: now + Math.round(intervalDays * DAY_MS),
    lastRating: rating,
  };
}

export function isCardDue(progress: FlashcardProgress | undefined, now = Date.now()): boolean {
  if (!progress) return true;
  return progress.nextReviewAt <= now;
}

export function formatNextInterval(days: number): string {
  if (days < 0.1) return '15 分钟后';
  if (days === 1) return '1 天后';
  if (days < 30) return `${Math.round(days)} 天后`;
  return `${Math.round(days / 30)} 个月后`;
}
