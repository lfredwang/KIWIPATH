import type { Lesson } from '../../types';
import { MOD1_LESSONS } from './mod1Lessons';
import { MOD2_LESSONS } from './mod2Lessons';
import { MOD3_LESSONS } from './mod3Lessons';
import { MOD4_LESSONS } from './mod4Lessons';
import { MOD5_LESSONS } from './mod5Lessons';
import { MOD6_LESSONS } from './mod6Lessons';
import { MOD7_LESSONS } from './mod7Lessons';
import { MOD8_LESSONS } from './mod8Lessons';

/**
 * Complete 48-Lesson Offline New Zealand Encyclopaedia across all 8 Modules.
 * Every module is independently modularised so both built-in bundles and GitHub `content/modules/*.json`
 * stay cleanly structured and zero-drift.
 */
export const LESSONS_BY_MODULE: Record<string, Lesson[]> = {
  'mod-1': MOD1_LESSONS,
  'mod-2': MOD2_LESSONS,
  'mod-3': MOD3_LESSONS,
  'mod-4': MOD4_LESSONS,
  'mod-5': MOD5_LESSONS,
  'mod-6': MOD6_LESSONS,
  'mod-7': MOD7_LESSONS,
  'mod-8': MOD8_LESSONS,
};

export const ALL_LESSONS: Lesson[] = [
  ...MOD1_LESSONS,
  ...MOD2_LESSONS,
  ...MOD3_LESSONS,
  ...MOD4_LESSONS,
  ...MOD5_LESSONS,
  ...MOD6_LESSONS,
  ...MOD7_LESSONS,
  ...MOD8_LESSONS,
].sort((a, b) => a.number - b.number);
