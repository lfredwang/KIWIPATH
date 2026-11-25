import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { reviewCardSM2, isCardDue, formatNextInterval } from '../src/services/sm2';

describe('SM-2 Spaced Repetition Service', () => {
  it('progresses intervals correctly on consecutive good ratings', () => {
    const t0 = 1_700_000_000_000;
    const r1 = reviewCardSM2('lex-1', undefined, 'good', t0);
    assert.equal(r1.repetitions, 1);
    assert.equal(r1.intervalDays, 1);
    assert.equal(isCardDue(r1, t0 + 1000), false);
    assert.equal(isCardDue(r1, r1.nextReviewAt), true);

    const r2 = reviewCardSM2('lex-1', r1, 'good', r1.nextReviewAt);
    assert.equal(r2.repetitions, 2);
    assert.equal(r2.intervalDays, 6);

    const r3 = reviewCardSM2('lex-1', r2, 'good', r2.nextReviewAt);
    assert.equal(r3.repetitions, 3);
    assert.ok(r3.intervalDays >= 12);
  });

  it('resets repetitions on "again" and clamps easeFactor at >= 1.3', () => {
    let prog = reviewCardSM2('lex-2', undefined, 'good', 1000);
    for (let i = 0; i < 10; i++) {
      prog = reviewCardSM2('lex-2', prog, 'again', 2000 + i);
    }
    assert.equal(prog.repetitions, 0);
    assert.equal(prog.intervalDays, 0.01);
    assert.ok(prog.easeFactor >= 1.3);
  });

  it('formats intervals cleanly in Chinese', () => {
    assert.equal(formatNextInterval(0.01), '15 分钟后');
    assert.equal(formatNextInterval(1), '1 天后');
    assert.equal(formatNextInterval(6), '6 天后');
    assert.equal(formatNextInterval(60), '2 个月后');
  });
});
