import { useEffect, useMemo, useState } from 'react';
import type { Lesson } from '../types';
import type { WorldInfo } from '../content/worlds';
import { shuffle } from '../lib/shuffle';
import { useStore } from '../store';
import { startBattleTheme, stopBattleTheme, startWorldTheme, stopWorldTheme } from '../lib/sound';
import { totalStars } from '../lib/stars';
import { AppModal } from './app-modal';
import { ExerciseDeck } from './exercise';
import { ConfettiBurst } from './confetti';
import { StarReward } from './star-reward';
import { Slime, StarIcon, Chest } from './map-art';

export type BattleMode = 'mini' | 'bonus' | 'boss';

const QUESTION_COUNT: Record<BattleMode, number> = { mini: 5, bonus: 6, boss: 10 };

/**
 * A world's set-piece challenge, in three flavours that all share one ExerciseDeck:
 *   - `boss`  — draws from the whole world; winning clears it and unlocks the next world.
 *   - `mini`  — a mid-world skirmish over one block of lessons; no lasting effect.
 *   - `bonus` — an optional mixed round; winning marks the world's bonus as cleared.
 * Framed as a fight so it feels like a game, not an exam. Renders in the responsive
 * AppModal (bottom sheet on mobile, dialog on desktop).
 */
export function BossChallenge({
  world,
  mode = 'boss',
  lessons,
  seed = 0,
  onClose,
}: {
  world: WorldInfo;
  mode?: BattleMode;
  /** Lessons this challenge draws from — a block for minis, the whole world otherwise. */
  lessons: Lesson[];
  /** Varies the battle music so each fight sounds different. */
  seed?: number;
  onClose: () => void;
}) {
  const clearBoss = useStore((s) => s.clearBoss);
  const clearBonus = useStore((s) => s.clearBonus);
  const [phase, setPhase] = useState<'intro' | 'battle' | 'win'>('intro');
  // Grand star total after a boss is cleared — drives the reward animation.
  const [wonTotal, setWonTotal] = useState(0);

  const isBoss = mode === 'boss';
  const isBonus = mode === 'bonus';

  const title = isBoss ? world.boss : isBonus ? 'Bonus round' : `Mini-boss · World ${world.n}`;
  // Literal classes (not interpolated) so Tailwind's JIT emits them.
  const accentText = isBonus ? 'text-accent2' : 'text-danger';

  // Draw from this challenge's lessons, skipping questions already answered correctly so
  // repeats are rare; fall back to the full set when too few fresh ones remain.
  const questions = useMemo(() => {
    const correct = useStore.getState().answeredCorrect;
    const count = QUESTION_COUNT[mode];
    const all = lessons.flatMap((l) => l.exercises);
    const fresh = all.filter((e) => !correct[e.id]);
    return shuffle(fresh.length >= count ? fresh : all).slice(0, count);
  }, [lessons, mode]);

  useEffect(() => {
    stopWorldTheme();
    startBattleTheme(seed, isBoss);
    return () => {
      stopBattleTheme();
      startWorldTheme(world.level);
    };
  }, [seed, isBoss, world.level]);

  function win() {
    if (isBoss) {
      clearBoss(world.level);
      // clearBoss updated the store synchronously, so this total already counts the boss star.
      setWonTotal(totalStars(useStore.getState()));
    } else if (isBonus) {
      clearBonus(world.level);
    }
    setPhase('win');
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
              {isBonus ? <Chest className="h-12 w-12" /> : <Slime className="h-12 w-12" />}
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
                ? `Answer ${questions.length} challenges to defeat ${world.boss} and open the path to the next world.`
                : isBonus
                  ? `A ${questions.length}-question bonus mixing everything from ${world.name}. Clear it to open the chest.`
                  : `A quick ${questions.length}-question skirmish to sharpen up.`}
            </p>
            {questions.length === 0 ? (
              <p className="mt-5 rounded-xl border border-dashed border-rule-soft p-4 text-[13px] text-ink-mute">
                {isBonus
                  ? 'No bonus questions here yet.'
                  : 'This boss is still asleep — no challenges here yet.'}
              </p>
            ) : (
              <button
                onClick={() => setPhase('battle')}
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
            <p className={`kicker mb-3 text-center text-[14px] ${accentText}`}>
              {isBoss ? `Battling ${world.boss}…` : isBonus ? 'Bonus round' : 'Skirmish'}
            </p>
            <ExerciseDeck exercises={questions} onComplete={win} />
          </div>
        )}

        {phase === 'win' && (
          <div className="relative text-center">
            <ConfettiBurst />
            {isBoss ? (
              <div className="mx-auto mt-1 mb-1">
                <StarReward earned={1} total={wonTotal} />
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
              {isBoss
                ? `${world.boss} defeated!`
                : isBonus
                  ? 'Bonus cleared!'
                  : 'Checkpoint cleared!'}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {isBoss
                ? world.bossDefeated
                : isBonus
                  ? 'Chest claimed — extra reps banked. Onward!'
                  : 'Sharper already. Onward up the trail.'}
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
