import type { Level, PlacementQuestion } from '@/types';
import { LEVELS } from '@/types';

// The adaptive placement engine. It works a "bracket staircase": the learner is
// probed at a band, and each result narrows the range of plausible levels until
// it collapses onto one. Starting in the middle (B1) keeps the test short — most
// people are placed in well under a dozen questions, and no one waits for a fixed
// count of questions that stopped being informative.
//
// Everything here is a pure function of (progress, question, correctness); the
// component in components/placement.tsx just holds the current progress in state
// and feeds answers back in. That keeps the placement logic testable and the UI dumb.

const START_IDX = 2; // B1 — a neutral middle so we climb or drop toward the truth
const PER_LEVEL = 3; // questions asked at a band before we judge it
const PASS = 2; // this many correct (of PER_LEVEL) clears a band
const MAX_QUESTIONS = 15; // absolute safety cap so the test always terminates

/** The evolving state of one placement attempt. */
export interface PlacementProgress {
  /** Highest band index the learner has clearly passed (-1 = none demonstrated yet). */
  lo: number;
  /** Highest band index still plausible. */
  hi: number;
  /** The band currently being probed. */
  cur: number;
  /** Correct answers within the current band's round. */
  roundCorrect: number;
  /** Questions answered within the current band's round. */
  roundCount: number;
  /** Ids already shown, so a question never repeats within an attempt. */
  askedIds: string[];
  /** Total questions answered so far. */
  count: number;
  /** Set once the test is finished — the estimated level's index into LEVELS. */
  estimateIdx: number | null;
}

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);
const bandIdx = (q: PlacementQuestion) => LEVELS.indexOf(q.level);

/** Begin a fresh attempt, probing the middle of the ladder. */
export function startPlacement(): PlacementProgress {
  return {
    lo: -1,
    hi: LEVELS.length - 1,
    cur: START_IDX,
    roundCorrect: 0,
    roundCount: 0,
    askedIds: [],
    count: 0,
    estimateIdx: null,
  };
}

export function isFinished(p: PlacementProgress): boolean {
  return p.estimateIdx !== null;
}

/** The estimated level once finished, or null while still testing. */
export function estimatedLevel(p: PlacementProgress): Level | null {
  return p.estimateIdx === null ? null : LEVELS[p.estimateIdx];
}

/**
 * How close the test is to placing the learner, 0..1 — used for the progress bar.
 * It reflects how tight the [lo, hi] bracket has become, not a fixed question count,
 * because the number of questions is not known in advance.
 */
export function certainty(p: PlacementProgress): number {
  if (p.estimateIdx !== null) return 1;
  const span = LEVELS.length - 1;
  const width = p.hi - Math.max(p.lo, 0);
  return clamp(1 - width / span, 0, 0.95);
}

/**
 * Pick the next unseen question. It prefers the probed band, then fans outward but
 * stays inside the live [lo, hi] bracket; only if that is exhausted does it fall
 * back to any unseen question. Returns null when the bank is out of questions.
 */
export function nextQuestion(
  p: PlacementProgress,
  bank: PlacementQuestion[],
): PlacementQuestion | null {
  const loBound = Math.max(p.lo, 0);
  const order = [p.cur];
  for (let d = 1; d < LEVELS.length; d++) {
    if (p.cur + d <= p.hi) order.push(p.cur + d);
    if (p.cur - d >= loBound) order.push(p.cur - d);
  }
  for (const idx of order) {
    const q = bank.find((x) => bandIdx(x) === idx && !p.askedIds.includes(x.id));
    if (q) return q;
  }
  return bank.find((x) => !p.askedIds.includes(x.id)) ?? null;
}

function finishAt(p: PlacementProgress, idx: number): PlacementProgress {
  return { ...p, estimateIdx: clamp(idx, 0, LEVELS.length - 1) };
}

/**
 * Fold one answered question into the progress and advance the staircase.
 * The returned progress is either finished (estimateIdx set) or ready for the
 * next call to nextQuestion().
 */
export function recordAnswer(
  p: PlacementProgress,
  q: PlacementQuestion,
  correct: boolean,
): PlacementProgress {
  const base: PlacementProgress = {
    ...p,
    askedIds: [...p.askedIds, q.id],
    count: p.count + 1,
    roundCorrect: p.roundCorrect + (correct ? 1 : 0),
    roundCount: p.roundCount + 1,
  };

  // Mid-round: keep probing the same band unless we've hit the safety cap.
  if (base.roundCount < PER_LEVEL && base.count < MAX_QUESTIONS) {
    return base;
  }

  // Safety cap reached mid-walk — settle on the strongest evidence so far.
  if (base.count >= MAX_QUESTIONS) {
    const passedNow = base.roundCorrect >= PASS;
    const idx = passedNow ? base.cur : base.lo >= 0 ? base.lo : Math.max(base.cur - 1, 0);
    return finishAt(base, idx);
  }

  // Round complete — judge this band, then either move or settle.
  const score = base.roundCorrect;
  const next: PlacementProgress = { ...base, roundCorrect: 0, roundCount: 0 };
  let { lo, hi, cur } = next;

  if (score >= PASS) {
    // Cleared the band → the learner is at least this level.
    lo = Math.max(lo, cur);
    if (cur >= hi) return finishAt(next, cur); // nothing higher left to try
    cur = cur + 1;
  } else if (score === 0) {
    // Missed the whole band → the learner is below it.
    hi = cur - 1;
    if (hi < 0) return finishAt(next, 0); // below A1 → start at the beginning
    if (hi <= lo) return finishAt(next, Math.max(lo, 0));
    cur = hi;
  } else {
    // A partial score lands right on the learner's level.
    return finishAt(next, cur);
  }

  if (lo >= hi) return finishAt(next, Math.max(lo, 0));
  return { ...next, lo, hi, cur };
}
