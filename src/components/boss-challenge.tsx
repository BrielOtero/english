import { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { Lesson } from '../types';
import type { WorldInfo } from '../content/worlds';
import { shuffle } from '../lib/shuffle';
import { useStore } from '../store';
import {
  startBattleTheme,
  stopBattleTheme,
  startWorldTheme,
  stopWorldTheme,
  sVictory,
  sDefeat,
} from '../lib/sound';
import { totalStars } from '../lib/stars';
import { AppModal } from './app-modal';
import { ExerciseDeck } from './exercise';
import { ConfettiBurst } from './confetti';
import { StarReward } from './star-reward';
import { Slime, StarIcon, Chest, Castle, Heart } from './map-art';

export type BattleMode = 'mini' | 'bonus' | 'boss';

// Combat is a duel: the boss has HP (correct answers chip it down), you have lives
// (a wrong answer costs one). Run out of lives and you're defeated. The question pool
// is HP + LIVES so the fight always resolves before running out of questions.
const MINI_HP = 5;
const BOSS_HP = 8;
const LIVES = 3;
const BONUS_QUESTIONS = 6;

function Hearts({ total, left, hitKey }: { total: number; left: number; hitKey: number }) {
  return (
    <motion.div
      key={hitKey}
      animate={hitKey ? { x: [0, -4, 4, -2, 0] } : {}}
      className="flex gap-0.5"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ scale: i < left ? 1 : 0.5, opacity: i < left ? 1 : 0.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Heart className={`h-5 w-5 ${i < left ? 'text-danger' : 'text-ink-mute/40'}`} />
        </motion.span>
      ))}
    </motion.div>
  );
}

/**
 * A world's set-piece challenge, in three flavours that all share one ExerciseDeck:
 *   - `boss`  — a lives duel over the whole world; winning clears it and unlocks the next.
 *   - `mini`  — a shorter lives duel over one block of lessons; winning marks it cleared.
 *   - `bonus` — an optional no-stakes mixed round; winning marks the world's bonus cleared.
 * Framed as a fight so it feels like a game, not an exam. Renders in the responsive
 * AppModal (bottom sheet on mobile, dialog on desktop).
 */
export function BossChallenge({
  world,
  mode = 'boss',
  lessons,
  seed = 0,
  miniId,
  onClose,
}: {
  world: WorldInfo;
  mode?: BattleMode;
  /** Lessons this challenge draws from — a block for minis, the whole world otherwise. */
  lessons: Lesson[];
  /** Varies the battle music so each fight sounds different. */
  seed?: number;
  /** `${level}:${blockIndex}` for a mini-boss, so a win can be recorded. */
  miniId?: string;
  onClose: () => void;
}) {
  const clearBoss = useStore((s) => s.clearBoss);
  const clearBonus = useStore((s) => s.clearBonus);
  const clearMini = useStore((s) => s.clearMini);
  const [phase, setPhase] = useState<'intro' | 'battle' | 'win' | 'lose'>('intro');
  const [wonTotal, setWonTotal] = useState(0);

  const isBoss = mode === 'boss';
  const isBonus = mode === 'bonus';
  const isMini = mode === 'mini';
  const combat = isBoss || isMini;

  const hp = isBoss ? BOSS_HP : MINI_HP;
  const count = combat ? hp + LIVES : BONUS_QUESTIONS;

  const [bossHP, setBossHP] = useState(hp);
  const [userLives, setUserLives] = useState(LIVES);
  const [bossHitKey, setBossHitKey] = useState(0);
  const [userHitKey, setUserHitKey] = useState(0);
  const [round, setRound] = useState(0);

  const title = isBoss ? world.boss : isBonus ? 'Bonus round' : `Mini-boss · World ${world.n}`;
  // Literal classes (not interpolated) so Tailwind's JIT emits them.
  const accentText = isBonus ? 'text-accent2' : 'text-danger';

  // Draw from this challenge's lessons, skipping questions already answered correctly so
  // repeats are rare; fall back to the full set when too few fresh ones remain. `round`
  // re-shuffles on a retry so a rematch isn't the exact same questions.
  const questions = useMemo(() => {
    void round;
    const correct = useStore.getState().answeredCorrect;
    const all = lessons.flatMap((l) => l.exercises);
    const fresh = all.filter((e) => !correct[e.id]);
    return shuffle(fresh.length >= count ? fresh : all).slice(0, count);
  }, [lessons, count, round]);

  useEffect(() => {
    stopWorldTheme();
    startBattleTheme(seed, isBoss);
    return () => {
      stopBattleTheme();
      startWorldTheme(world.level);
    };
  }, [seed, isBoss, world.level]);

  const finish = useCallback(
    (won: boolean) => {
      if (won) {
        if (isBoss) {
          clearBoss(world.level);
          // clearBoss updated the store synchronously, so this already counts the boss star.
          setWonTotal(totalStars(useStore.getState()));
        } else if (isMini && miniId) {
          clearMini(miniId);
        } else if (isBonus) {
          clearBonus(world.level);
        }
        sVictory();
        setPhase('win');
      } else {
        sDefeat();
        setPhase('lose');
      }
    },
    [isBoss, isMini, isBonus, miniId, world.level, clearBoss, clearMini, clearBonus],
  );

  // Resolve a duel once the boss is down or the player is out of lives — after a short
  // beat so the final hit animation lands first.
  useEffect(() => {
    if (phase !== 'battle' || !combat) return;
    if (bossHP > 0 && userLives > 0) return;
    const won = bossHP <= 0;
    const t = setTimeout(() => finish(won), 800);
    return () => clearTimeout(t);
  }, [phase, combat, bossHP, userLives, finish]);

  function onResult(correct: boolean) {
    // Ignore answers landed during the brief resolve delay — the duel is already decided.
    if (bossHP <= 0 || userLives <= 0) return;
    if (correct) {
      setBossHP((h) => Math.max(0, h - 1));
      setBossHitKey((k) => k + 1);
    } else {
      setUserLives((l) => Math.max(0, l - 1));
      setUserHitKey((k) => k + 1);
    }
  }

  function startFight() {
    setBossHP(hp);
    setUserLives(LIVES);
    setBossHitKey(0);
    setUserHitKey(0);
    setRound((r) => r + 1);
    setPhase('battle');
  }

  return (
    <AppModal open onClose={onClose} label={title}>
      <div className="px-5 pt-4 pb-6 sm:px-6">
        {phase === 'intro' && (
          <div className="text-center">
            <div
              className={`mx-auto grid h-20 w-20 place-items-center rounded-3xl ${
                isBonus ? 'bg-accent2/10' : 'bg-danger/10'
              }`}
            >
              {isBonus ? (
                <Chest className="h-12 w-12" />
              ) : isBoss ? (
                <Castle className="h-12 w-12" />
              ) : (
                <Slime className="h-12 w-12" />
              )}
            </div>
            <p className={`kicker mt-3 text-[14px] ${accentText}`}>
              {isBoss
                ? `Boss fight · World ${world.n}`
                : isBonus
                  ? `Bonus round · World ${world.n}`
                  : `Skirmish · World ${world.n}`}
            </p>
            <h2 className="font-display mt-1 text-[26px] leading-tight text-ink">{title}</h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {isBoss
                ? `Land ${hp} clean hits to defeat ${world.boss}. You have ${LIVES} lives — every wrong answer costs one.`
                : isBonus
                  ? `A ${count}-question bonus mixing everything from ${world.name}. Clear it to open the chest.`
                  : `Land ${hp} clean hits to clear this mini-boss. ${LIVES} lives — a wrong answer costs one.`}
            </p>
            {questions.length === 0 ? (
              <p className="mt-5 rounded-xl border border-dashed border-rule-soft p-4 text-[13px] text-ink-mute">
                {isBonus
                  ? 'No bonus questions here yet.'
                  : 'This foe is still asleep — no challenges here yet.'}
              </p>
            ) : (
              <button
                onClick={startFight}
                className={`press mt-5 w-full rounded-full px-6 py-3 font-mono text-[12px] tracking-wide text-paper uppercase transition hover:opacity-90 ${
                  isBonus ? 'bg-accent2' : 'bg-danger'
                }`}
              >
                {isBonus ? 'Open the chest' : 'Fight!'}
              </button>
            )}
            <button
              onClick={onClose}
              className="mt-2 w-full rounded-full px-6 py-2 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
            >
              {isBonus ? 'Back' : 'Retreat'}
            </button>
          </div>
        )}

        {phase === 'battle' && (
          <div>
            {combat ? (
              <div className="mb-4 rounded-2xl border border-rule-soft bg-bg/60 p-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    key={bossHitKey}
                    animate={bossHitKey ? { x: [0, -6, 6, -4, 4, 0], scale: [1, 1.12, 1] } : {}}
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-danger/10 text-danger"
                  >
                    {isBoss ? <Castle className="h-8 w-8" /> : <Slime className="h-8 w-8" />}
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[13px] font-medium text-ink">
                        {isBoss ? world.boss : 'Mini-boss'}
                      </span>
                      <span className="font-mono text-[11px] text-ink-mute tabular-nums">
                        {bossHP}/{hp}
                      </span>
                    </div>
                    <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-danger/15">
                      <motion.div
                        className="h-full rounded-full bg-danger"
                        animate={{ width: `${(bossHP / hp) * 100}%` }}
                        transition={{ type: 'spring', stiffness: 200, damping: 26 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wide text-ink-mute uppercase">
                    Your lives
                  </span>
                  <Hearts total={LIVES} left={userLives} hitKey={userHitKey} />
                </div>
              </div>
            ) : (
              <p className={`kicker mb-3 text-center text-[14px] ${accentText}`}>Bonus round</p>
            )}
            {/* Fixed height + the deck's pinned-controls layout: the modal opens at its
                final size and the Check/Next button stays locked to the bottom-right. */}
            <div className="h-[64vh] sm:h-[500px]">
              <ExerciseDeck
                exercises={questions}
                stable
                onResult={combat ? onResult : undefined}
                onComplete={combat ? undefined : () => finish(true)}
              />
            </div>
          </div>
        )}

        {phase === 'lose' && (
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-ink/5 text-ink-soft">
              {isBoss ? <Castle className="h-12 w-12" /> : <Slime className="h-12 w-12" />}
            </div>
            <p className="kicker mt-3 text-[14px] text-danger">Defeated</p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">Out of lives!</h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {isBoss ? world.boss : 'The mini-boss'} still stands. Regroup and try again.
            </p>
            <button
              onClick={startFight}
              className="press mt-5 w-full rounded-full bg-danger px-6 py-3 font-mono text-[12px] tracking-wide text-paper uppercase transition hover:opacity-90"
            >
              Try again
            </button>
            <button
              onClick={onClose}
              className="mt-2 w-full rounded-full px-6 py-2 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
            >
              Retreat
            </button>
          </div>
        )}

        {phase === 'win' && (
          <div className="relative text-center">
            <ConfettiBurst />
            {isBoss ? (
              <div className="mx-auto mt-1 mb-1">
                <StarReward earned={1} total={wonTotal} mute />
              </div>
            ) : (
              <div
                className={`mx-auto grid h-20 w-20 place-items-center rounded-3xl ${
                  isBonus ? 'bg-accent2/10' : 'bg-success/10'
                }`}
              >
                {isBonus ? (
                  <Chest className="h-12 w-12" />
                ) : (
                  <StarIcon className="h-12 w-12 text-gold" />
                )}
              </div>
            )}
            <p className="kicker mt-3 text-[14px] text-success">{isBonus ? 'Bonus' : 'Victory'}</p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">
              {isBoss ? `${world.boss} defeated!` : isBonus ? 'Bonus cleared!' : 'Mini-boss down!'}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {isBoss
                ? world.bossDefeated
                : isBonus
                  ? 'Chest claimed — extra reps banked. Onward!'
                  : 'Cleared with lives to spare. Onward up the trail.'}
            </p>
            {isBoss && (
              <p className="mt-3 text-[13px] font-medium text-accent">The next world is open!</p>
            )}
            <button
              onClick={onClose}
              className="press mt-5 w-full rounded-full bg-accent px-6 py-3 font-mono text-[12px] tracking-wide text-on-accent uppercase transition hover:opacity-90"
            >
              Onward →
            </button>
          </div>
        )}
      </div>
    </AppModal>
  );
}
