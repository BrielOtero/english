// The star economy that drives world progression. Stars are EARNED per bit of progress
// so the count feels meaningful: 1 per lesson, 2 per mini-boss, 2 for the bonus, 3 for the
// boss. Everything is DERIVED from saved progress (completed lessons, cleared minis/bonus/
// bosses), so old saves migrate automatically — their existing progress just re-scores.
// Kept in one place so the map, the world screen, and the reward animation all agree.

import { LEVELS, type Level } from '../types';
import { grammarUnit } from '../content';

/** Lessons per block — a mini-boss caps each full block except the world's last. */
export const BLOCK = 4;

const LESSON_STARS = 1;
const MINI_STARS = 2;
const BONUS_STARS = 2;
const BOSS_STARS = 3;

/** How many mini-bosses a world of `n` lessons has (one per full block but the last). */
function miniCount(n: number): number {
  return Math.max(0, Math.floor((n - 1) / BLOCK));
}

/** How far the learner has unlocked: their placement floor, plus one past the last boss beaten. */
export function unlockedThroughFor(
  placementLevel: Level | null,
  bossCleared: Record<string, true>,
): number {
  const startIdx = placementLevel ? LEVELS.indexOf(placementLevel) : 0;
  const maxBossIdx = LEVELS.reduce((m, lv, i) => (bossCleared[lv] ? i : m), -1);
  return Math.max(startIdx, maxBossIdx + 1);
}

/** Stars earned in one world: 1 per lesson, 2 per mini-boss, 2 for the bonus, 3 for the boss. */
export function worldStars(
  level: Level,
  completed: Record<string, true>,
  miniCleared: Record<string, true>,
  bonusCleared: Record<string, true>,
  bossCleared: Record<string, true>,
): number {
  const lessons = grammarUnit(level)?.lessons ?? [];
  const doneLessons = lessons.filter((l) => completed[l.id]).length;
  const minis = miniCount(lessons.length);
  let miniDone = 0;
  for (let i = 0; i < minis; i++) if (miniCleared[`${level}:${i}`]) miniDone++;
  return (
    doneLessons * LESSON_STARS +
    miniDone * MINI_STARS +
    (bonusCleared[level] ? BONUS_STARS : 0) +
    (bossCleared[level] ? BOSS_STARS : 0)
  );
}

/** The most stars a world can yield (all lessons + all minis + bonus + boss). */
export function worldMaxStars(level: Level): number {
  const n = (grammarUnit(level)?.lessons ?? []).length;
  return n * LESSON_STARS + miniCount(n) * MINI_STARS + BONUS_STARS + BOSS_STARS;
}

export const MAX_STARS = LEVELS.reduce((s, lv) => s + worldMaxStars(lv), 0);

interface StarState {
  completed: Record<string, true>;
  miniCleared: Record<string, true>;
  bonusCleared: Record<string, true>;
  bossCleared: Record<string, true>;
}

/** Grand total of stars earned across every world. */
export function totalStars(s: StarState): number {
  return LEVELS.reduce(
    (n, lv) => n + worldStars(lv, s.completed, s.miniCleared, s.bonusCleared, s.bossCleared),
    0,
  );
}
