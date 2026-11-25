import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  mergeWithDefaults,
  validateImportedState,
  validatePolicyPatch,
} from '../src/services/storage';
import { offlineDataProvider } from '../src/services/dataProvider';
import { CURRICULUM_MODULES } from '../src/data/curriculum/modules';
import { FLAGSHIP_LESSONS } from '../src/data/curriculum/flagshipLessons';
import { REGIONAL_CITY_GUIDES, VISA_PATHWAYS_2026 } from '../src/data/curriculum/specialPacks';
import { NZ_JOBS } from '../src/data/jobs/jobsData';
import { JOB_CHAT_SCRIPTS } from '../src/data/jobs/chatScripts';
import { LEXICON_ITEMS, NZ_PLACE_NAMES } from '../src/data/language/lexiconData';
import { ROAD_CODE_QUESTIONS } from '../src/data/tools/roadCodeData';
import { CHECKLIST_GROUPS } from '../src/data/tools/checklists';
import { POLICIES_2026 } from '../src/data/tools/policies2026';
import { NZ_DIRECTORY } from '../src/data/tools/directory';
import { LEVELS, BADGES, DAILY_CHALLENGES } from '../src/data/gamification';

describe('Storage Migration & Safe JSON Import Validators', () => {
  it('merges partial legacy states cleanly without losing defaults', () => {
    const defaults = createInitialState();
    const merged = mergeWithDefaults(
      {
        xp: 350,
        profile: { name: 'KiwiLearner', stage: 'settling-in', city: 'Wellington', focusGoals: [], languagePref: 2, onboardingCompleted: true },
      },
      defaults
    );
    assert.equal(merged.xp, 350);
    assert.equal(merged.profile.city, 'Wellington');
    assert.equal(merged.cv.fullName, defaults.cv.fullName);
    assert.deepEqual(merged.completedLessonIds, []);
  });

  it('rejects invalid backup JSON structures cleanly', () => {
    assert.equal(validateImportedState(null).ok, false);
    assert.equal(validateImportedState([]).ok, false);
    assert.equal(validateImportedState({ xp: 100 }).ok, false);
    assert.equal(
      validateImportedState({
        profile: { name: 'Test', stage: 'invalid-stage', city: 'Auckland' },
      }).ok,
      false
    );
    assert.equal(
      validateImportedState({
        profile: { name: 'Test', stage: 'just-landed', city: 'Auckland' },
        xp: -10,
      }).ok,
      false
    );
  });

  it('accepts valid backup JSON and restores all fields', () => {
    const initial = createInitialState();
    initial.profile.name = 'TestLearner';
    initial.xp = 620;
    initial.completedLessonIds = ['l-05'];

    const res = validateImportedState(JSON.parse(JSON.stringify(initial)));
    assert.equal(res.ok, true);
    assert.equal(res.data?.profile.name, 'TestLearner');
    assert.equal(res.data?.xp, 620);
    assert.deepEqual(res.data?.completedLessonIds, ['l-05']);
  });

  it('validates policy JSON patches and rejects malformed entries', () => {
    assert.equal(validatePolicyPatch({ notAnArray: true }).ok, false);
    assert.equal(validatePolicyPatch([{ id: 'p1' }]).ok, false);

    const validPatch = [
      {
        id: 'pol-custom-1',
        category: '移民签证',
        effectiveDate: '2026-12-01',
        titleZh: '示例政策更新',
        titleEn: 'Sample Policy Update',
        oldRuleZh: '旧规',
        newRuleZh: '新规',
        impactZh: '影响说明',
        officialSource: 'Immigration NZ',
        verifiedDate: '2026-11',
        urgency: 'info',
      },
    ];
    const okRes = validatePolicyPatch(validPatch);
    assert.equal(okRes.ok, true);
    assert.equal(okRes.data?.length, 1);

    const merged = offlineDataProvider.getPolicies(okRes.data!);
    assert.ok(merged.some((p) => p.id === 'pol-custom-1'));
  });
});

describe('Offline Datasets Integrity & Cross-References', () => {
  it('has unique IDs across every core dataset', () => {
    const assertUnique = (name: string, ids: string[]) => {
      const set = new Set(ids);
      assert.equal(set.size, ids.length, `Duplicate IDs found in ${name}`);
    };

    assertUnique('CURRICULUM_MODULES', CURRICULUM_MODULES.map((m) => m.id));
    assertUnique('FLAGSHIP_LESSONS', FLAGSHIP_LESSONS.map((l) => l.id));
    assertUnique('VISA_PATHWAYS_2026', VISA_PATHWAYS_2026.map((v) => v.id));
    assertUnique('NZ_JOBS', NZ_JOBS.map((j) => j.id));
    assertUnique('LEXICON_ITEMS', LEXICON_ITEMS.map((x) => x.id));
    assertUnique('ROAD_CODE_QUESTIONS', ROAD_CODE_QUESTIONS.map((q) => q.id));
    assertUnique('CHECKLIST_GROUPS', CHECKLIST_GROUPS.map((g) => g.id));
    assertUnique('POLICIES_2026', POLICIES_2026.map((p) => p.id));
    assertUnique('NZ_DIRECTORY', NZ_DIRECTORY.map((d) => d.id));
    assertUnique('BADGES', BADGES.map((b) => b.id));
    assertUnique('DAILY_CHALLENGES', DAILY_CHALLENGES.map((d) => d.id));
  });

  it('maintains valid cross-references (lessons -> modules, jobs -> scripts, roadCode answers)', () => {
    const modIds = new Set(CURRICULUM_MODULES.map((m) => m.id));
    for (const lesson of FLAGSHIP_LESSONS) {
      assert.ok(modIds.has(lesson.moduleId), `Lesson ${lesson.id} references unknown module ${lesson.moduleId}`);
      assert.ok(lesson.cards.length > 0, `Lesson ${lesson.id} must have cards`);
      assert.ok(lesson.quiz.length > 0, `Lesson ${lesson.id} must have quiz questions`);
    }

    for (const job of NZ_JOBS) {
      const script = JOB_CHAT_SCRIPTS[job.chatScriptId];
      assert.ok(Array.isArray(script) && script.length >= 2, `Job ${job.id} references invalid script ${job.chatScriptId}`);
    }

    for (const q of ROAD_CODE_QUESTIONS) {
      assert.ok(
        q.options.some((o) => o.id === q.correctOptionId),
        `RoadCode question ${q.id} correctOptionId ${q.correctOptionId} missing from options`
      );
    }

    assert.equal(CURRICULUM_MODULES.length, 8);
    assert.equal(FLAGSHIP_LESSONS.length, 48);
    // Verify consecutive numbering 1..48 with zero gaps
    assert.deepEqual(
      FLAGSHIP_LESSONS.map((l) => l.number),
      Array.from({ length: 48 }, (_, i) => i + 1)
    );
    // Verify every module has at least 5 full lessons
    for (const mod of CURRICULUM_MODULES) {
      const count = FLAGSHIP_LESSONS.filter((l) => l.moduleId === mod.id).length;
      assert.ok(count >= 5, `Module ${mod.id} should have >= 5 lessons, got ${count}`);
    }
    assert.equal(REGIONAL_CITY_GUIDES.length, 5);
    assert.equal(NZ_JOBS.length, 12);
    assert.equal(LEXICON_ITEMS.length, 44);
    assert.equal(NZ_PLACE_NAMES.length, 12);
    assert.equal(ROAD_CODE_QUESTIONS.length, 18);
    assert.equal(LEVELS.length, 6);
  });
});
