import { useCallback, useEffect, useState } from 'react';
import type { Exercise, Lesson } from '@/types';
import type { WorldInfo } from '@/content/worlds';
import { shuffle } from '@/lib/shuffle';
import { useDuel } from '@/lib/use-duel';
import { useStore } from '@/store';
import {
  startBattleTheme,
  stopBattleTheme,
  startWorldTheme,
  stopWorldTheme,
  sVictory,
  sDefeat,
} from '@/lib/sound';
import { totalStars } from '@/lib/stars';
import { AppModal } from '@/components/app-modal';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/icons';
import { ExerciseDeck } from '@/components/exercise';
import { DuelHud } from '@/components/duel';
import { ConfettiBurst } from '@/components/confetti';
import { StarReward } from '@/components/star-reward';
import { Slime, StarIcon, Chest, Castle } from '@/components/map-art';

export type BattleMode = 'mini' | 'bonus' | 'boss';

// The question pool is HP + LIVES so the fight always resolves before running out of questions.
// HP scales with scope so bigger fights test more: a boss must land ~one hit per lesson in the
// whole world, a mini ~two per lesson in its block. Floors keep small scopes from being trivial.
const LIVES = 3;
const BONUS_QUESTIONS = 6;
const MIN_MINI_HP = 5;
const MIN_BOSS_HP = 8;

/**
 * Sample `count` questions that cover every lesson in scope. A round-robin (one per lesson,
 * then two, then three…) guarantees a boss/mini can't skip a whole topic by luck — the flaw
 * of a plain random slice. Unseen questions are drawn first; tiny pools cycle-fill; the final
 * order is shuffled so concepts are interleaved rather than grouped by lesson.
 */
function coverageSample(
  lessons: Lesson[],
  count: number,
  correct: Record<string, true>,
): Exercise[] {
  const buckets = lessons
    .map((l) => {
      const ex = shuffle(l.exercises);
      return [...ex.filter((e) => !correct[e.id]), ...ex.filter((e) => correct[e.id])];
    })
    .filter((b) => b.length);
  const picked: Exercise[] = [];
  let progressed = true;
  while (picked.length < count && progressed) {
    progressed = false;
    for (const b of buckets) {
      if (b.length && picked.length < count) {
        picked.push(b.shift()!);
        progressed = true;
      }
    }
  }
  for (let k = 0; picked.length && picked.length < count; k++)
    picked.push(picked[k % picked.length]);
  return shuffle(picked).slice(0, count);
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

  const hp = isBoss
    ? Math.max(MIN_BOSS_HP, lessons.length) // ~one hit per lesson in the world
    : Math.max(MIN_MINI_HP, lessons.length * 2); // ~two per lesson in the block
  const count = combat ? hp + LIVES : BONUS_QUESTIONS;

  const duel = useDuel(hp, LIVES);
  const { round } = duel;

  const title = isBoss ? world.boss : isBonus ? 'Bonus round' : `Mini-boss · World ${world.n}`;
  // Literal classes (not interpolated) so Tailwind's JIT emits them.
  const accentText = isBonus ? 'text-accent2' : 'text-danger';

  const buildQuestions = () => {
    const correct = useStore.getState().answeredCorrect;
    if (combat) return coverageSample(lessons, count, correct);
    // Bonus is a no-stakes mixed round — a simple unseen-first sample is enough.
    const all = lessons.flatMap((l) => l.exercises);
    const fresh = all.filter((e) => !correct[e.id]);
    return shuffle(fresh.length >= count ? fresh : all).slice(0, count);
  };
  // Snapshot per fight, reshuffled only on retry: shuffle() is impure, so a useMemo could
  // swap the questions on any re-render.
  const [questions, setQuestions] = useState(buildQuestions);
  const [builtRound, setBuiltRound] = useState(round);
  if (builtRound !== round) {
    setBuiltRound(round);
    setQuestions(buildQuestions());
  }

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

  // Resolve a duel once the foe is down or the player is out of lives — after a short beat
  // so the final hit animation lands first.
  useEffect(() => {
    if (phase !== 'battle' || !combat || !duel.over) return;
    const t = setTimeout(() => finish(duel.won), 800);
    return () => clearTimeout(t);
  }, [phase, combat, duel.over, duel.won, finish]);

  function startFight() {
    duel.start();
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
              <EmptyState className="mt-5 bg-transparent p-4">
                {isBonus
                  ? 'No bonus questions here yet.'
                  : 'This foe is still asleep — no challenges here yet.'}
              </EmptyState>
            ) : (
              <Button
                variant={isBonus ? 'bonus' : 'destructive'}
                className="mt-5 w-full"
                onClick={startFight}
              >
                {isBonus ? 'Open the chest' : 'Fight!'}
              </Button>
            )}
            <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={onClose}>
              {isBonus ? 'Back' : 'Retreat'}
            </Button>
          </div>
        )}

        {phase === 'battle' && (
          <div>
            {combat ? (
              <DuelHud
                name={isBoss ? world.boss : 'Mini-boss'}
                icon={isBoss ? <Castle className="h-8 w-8" /> : <Slime className="h-8 w-8" />}
                hp={duel.foeHP}
                maxHp={hp}
                hpHitKey={duel.foeHitKey}
                lives={duel.userLives}
                maxLives={LIVES}
                livesHitKey={duel.userHitKey}
              />
            ) : (
              <p className={`kicker mb-3 text-center text-[14px] ${accentText}`}>Bonus round</p>
            )}
            {/* Fixed height + the deck's pinned-controls layout: the modal opens at its
                final size and the Check/Next button stays locked to the bottom-right. */}
            <div className="h-[64vh] sm:h-[500px]">
              <ExerciseDeck
                exercises={questions}
                stable
                onResult={combat ? duel.onResult : undefined}
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
            <Button variant="destructive" className="mt-5 w-full" onClick={startFight}>
              Try again
            </Button>
            <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={onClose}>
              Retreat
            </Button>
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
            <Button className="mt-5 w-full" onClick={onClose}>
              Onward <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>
    </AppModal>
  );
}
