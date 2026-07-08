import { useMemo, useState } from 'react';
import type { Level } from '../types';
import type { WorldInfo } from '../content/worlds';
import { grammarUnit } from '../content';
import { shuffle } from '../lib/shuffle';
import { useStore } from '../store';
import { AppModal } from './app-modal';
import { ExerciseDeck } from './exercise';
import { ConfettiBurst } from './confetti';
import { Slime, StarIcon } from './map-art';

/** How many questions a boss throws at you. */
const BOSS_QUESTIONS = 8;

/**
 * A world's boss fight. It assembles a challenge quiz from that level's lessons and
 * runs it through the shared ExerciseDeck; finishing "defeats" the boss, which clears
 * the world (unlocking the next one). Framed as a battle so it feels like a game, not
 * an exam. Renders in the responsive AppModal (bottom sheet on mobile, dialog on desktop).
 */
export function BossChallenge({
  level,
  world,
  mini = false,
  onClose,
}: {
  level: Level;
  world: WorldInfo;
  /** A mid-world skirmish: sharpens up but doesn't clear/unlock the world. */
  mini?: boolean;
  onClose: () => void;
}) {
  const clearBoss = useStore((s) => s.clearBoss);
  const [phase, setPhase] = useState<'intro' | 'battle' | 'win'>('intro');

  const title = mini ? `Mini-boss · World ${world.n}` : world.boss;

  // A fresh sample of the world's drills each fight, so re-runs aren't identical.
  const questions = useMemo(() => {
    const all = (grammarUnit(level)?.lessons ?? []).flatMap((l) => l.exercises);
    return shuffle(all).slice(0, mini ? 4 : BOSS_QUESTIONS);
  }, [level, mini]);

  function win() {
    if (!mini) clearBoss(level);
    setPhase('win');
  }

  return (
    <AppModal open onClose={onClose} label={`Boss: ${world.boss}`}>
      <div className="px-5 pt-4 pb-6 sm:px-6">
        {phase === 'intro' && (
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-danger/10">
              <Slime className="h-12 w-12" />
            </div>
            <p className="kicker mt-3 text-[14px] text-danger">
              {mini ? `Skirmish · World ${world.n}` : `Boss fight · World ${world.n}`}
            </p>
            <h2 className="font-display mt-1 text-[26px] leading-tight text-ink">{title}</h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {mini
                ? `A quick ${questions.length}-question skirmish to sharpen up.`
                : `Answer ${questions.length} challenges to defeat ${world.boss} and open the path to the next world.`}
            </p>
            {questions.length === 0 ? (
              <p className="mt-5 rounded-xl border border-dashed border-rule-soft p-4 text-[13px] text-ink-mute">
                This boss is still asleep — no challenges here yet.
              </p>
            ) : (
              <button
                onClick={() => setPhase('battle')}
                className="press mt-5 w-full rounded-full bg-danger px-6 py-3 font-mono text-[12px] tracking-wide text-paper uppercase transition hover:opacity-90"
              >
                Fight!
              </button>
            )}
            <button
              onClick={onClose}
              className="mt-2 w-full rounded-full px-6 py-2 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
            >
              Retreat
            </button>
          </div>
        )}

        {phase === 'battle' && (
          <div>
            <p className="kicker mb-3 text-center text-[14px] text-danger">
              Battling {world.boss}…
            </p>
            <ExerciseDeck exercises={questions} onComplete={win} />
          </div>
        )}

        {phase === 'win' && (
          <div className="relative text-center">
            <ConfettiBurst />
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-success/10">
              <StarIcon className="h-12 w-12 text-gold" />
            </div>
            <p className="kicker mt-3 text-[14px] text-success">Victory</p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">
              {mini ? 'Checkpoint cleared!' : `${world.boss} defeated!`}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {mini ? 'Sharper already. Onward up the trail.' : world.bossDefeated}
            </p>
            {!mini && (
              <p className="mt-3 text-[13px] font-medium text-accent">
                You earned a star · the next world is open!
              </p>
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
