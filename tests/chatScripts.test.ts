import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateCustomReply } from '../src/data/jobs/chatScripts';
import { NZ_JOBS } from '../src/data/jobs/jobsData';

describe('Kiwi Direct Chat Free-Text Rule Evaluator (0-Cost Local Coach)', () => {
  const sampleJob = NZ_JOBS[0];

  it('catches NZ privacy red flags (age / marital / photo)', () => {
    const res = evaluateCustomReply('Hi, I am 34 years old and married with kids.', sampleJob);
    assert.equal(res.quality, 'pitfall');
    assert.ok(res.scoreDelta.cultureSafe < 0);
    assert.ok(res.coachFeedbackZh.includes('年龄/婚育/照片'));
  });

  it('catches unpaid trial / overwork red flags', () => {
    const res = evaluateCustomReply('I can do unpaid trial and 996 overtime every night!', sampleJob);
    assert.equal(res.quality, 'pitfall');
    assert.ok(res.coachFeedbackZh.includes('无薪试工或疯狂加班'));
  });

  it('catches Tall Poppy boasting red flags', () => {
    const res = evaluateCustomReply('I am the best in the world and smarter than everyone.', sampleJob);
    assert.equal(res.quality, 'pitfall');
    assert.ok(res.coachFeedbackZh.includes('Tall Poppy'));
  });

  it('rewards natural Kiwi greetings + professional work rights / experience signals', () => {
    const res = evaluateCustomReply(
      'Kia ora! I hold valid NZ work rights and bring 5 years of team experience delivering measurable results.',
      sampleJob
    );
    assert.equal(res.quality, 'great');
    assert.ok(res.scoreDelta.kiwiNatural >= 25);
    assert.ok(res.scoreDelta.professional >= 20);
  });

  it('gives constructive "ok" feedback for overly short replies', () => {
    const res = evaluateCustomReply('Hi, interested.', sampleJob);
    assert.equal(res.quality, 'ok');
    assert.ok(Boolean(res.betterPhraseEn));
  });
});
