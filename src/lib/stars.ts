// The star economy that drives world progression. Each world is worth three stars:
// one for reaching it, one for clearing every lesson, one for beating its boss.
// Kept in one place so the map, the world screen, and the reward animation all agree.

import { LEVELS, type Level } from '../types';
import { grammarUnit } from '../content';

export const MAX_STARS = LEVELS.length * 3;

/** How far the learner has unlocked: their placement floor, plus one past the last boss beaten. */
export function unlockedThroughFor(
  placementLevel: Level | null,
  bossCleared: Record<string, true>,
): number {
  const startIdx = placementLevel ? LEVELS.indexOf(placementLevel) : 0;
  const maxBossIdx = LEVELS.reduce((m, lv, i) => (bossCleared[lv] ? i : m), -1);
  return Math.max(startIdx, maxBossIdx + 1);
}

export function starsForLevel(
  level: Level,
  idx: number,
  unlockedThrough: number,
  completed: Record<string, true>,
  bossCleared: Record<string, true>,
): number {
  if (idx > unlockedThrough) return 0;
  const lessons = grammarUnit(level)?.lessons ?? [];
  const allDone = lessons.length > 0 && lessons.every((l) => completed[l.id]);
  return 1 + (allDone ? 1 : 0) + (bossCleared[level] ? 1 : 0);
}

interface StarState {
  placementLevel: Level | null;
  completed: Record<string, true>;
  bossCleared: Record<string, true>;
}

/** Grand total of stars earned across every world. */
export function totalStars(s: StarState): number {
  const unlockedThrough = unlockedThroughFor(s.placementLevel, s.bossCleared);
  return LEVELS.reduce(
    (n, lv, i) => n + starsForLevel(lv, i, unlockedThrough, s.completed, s.bossCleared),
    0,
  );
}
