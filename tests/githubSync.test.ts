import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildGitHubRawBaseUrl,
  mergeLessons,
  parseGitHubRepoInput,
  validateContentManifest,
  validateLessonArray,
} from '../src/services/githubSync';
import { DEFAULT_GITHUB_CONFIG } from '../src/services/storage';
import { ALL_LESSONS } from '../src/data/curriculum/allLessons';

describe('GitHub Cloud JSON Database Sync Service', () => {
  it('defaults to lfredwang/KIWIPATH and builds valid raw.githubusercontent.com URLs', () => {
    assert.equal(DEFAULT_GITHUB_CONFIG.owner, 'lfredwang');
    assert.equal(DEFAULT_GITHUB_CONFIG.repo, 'KIWIPATH');
    assert.equal(
      buildGitHubRawBaseUrl(DEFAULT_GITHUB_CONFIG),
      'https://raw.githubusercontent.com/lfredwang/KIWIPATH/main/content'
    );
  });

  it('parses both full GitHub HTTPS URLs (.git) and owner/repo shorthand', () => {
    const r1 = parseGitHubRepoInput('https://github.com/lfredwang/KIWIPATH.git');
    assert.equal(r1.ok, true);
    assert.equal(r1.data?.owner, 'lfredwang');
    assert.equal(r1.data?.repo, 'KIWIPATH');

    const r2 = parseGitHubRepoInput('lfredwang/KIWIPATH');
    assert.equal(r2.ok, true);
    assert.equal(r2.data?.owner, 'lfredwang');
    assert.equal(r2.data?.repo, 'KIWIPATH');

    const bad = parseGitHubRepoInput('not-a-valid-repo');
    assert.equal(bad.ok, false);
  });

  it('validates content manifests and rejects broken schemas', () => {
    assert.equal(validateContentManifest(null).ok, false);
    assert.equal(validateContentManifest({ version: '2.0.0' }).ok, false);
    const ok = validateContentManifest({
      version: '2.0.0',
      updatedAt: '2026-11-25',
      modules: [{ moduleId: 'mod-1', file: 'modules/mod-1.json', lessonCount: 6 }],
      policiesFile: 'policies.json',
    });
    assert.equal(ok.ok, true);
  });

  it('validates exported lessons and merges GitHub updates cleanly over built-in lessons', () => {
    const valid = validateLessonArray(ALL_LESSONS);
    assert.equal(valid.ok, true);
    assert.equal(valid.data?.length, 48);

    const updatedLesson = {
      ...ALL_LESSONS[0],
      title: { ...ALL_LESSONS[0].title, zh: '更新后的第 1 课标题' },
    };
    const merged = mergeLessons(ALL_LESSONS, [updatedLesson]);
    assert.equal(merged.length, 48);
    assert.equal(merged[0].title.zh, '更新后的第 1 课标题');
  });
});
