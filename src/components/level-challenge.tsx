import { useCallback, useEffect, useState } from 'react';
import type { Exercise, Lesson } from '@/types';
import { shuffle } from '@/lib/shuffle';
import { useDuel } from '@/lib/use-duel';
import { useStore } from '@/store';
import { startBattleTheme, stopBattleTheme, sVictory, sDefeat } from '@/lib/sound';
import { AppModal } from '@/components/app-modal';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/icons';
import { ExerciseDeck } from '@/components/exercise';
import { DuelHud } from '@/components/duel';
import { ConfettiBurst } from '@/components/confetti';
import { Slime, StarIcon } from '@/components/map-art';

const HP = 5;
const LIVES = 3;

/** Draw `count` questions from the lesson's pool, preferring ones the learner hasn't nailed
 *  yet; cycle the pool if it's smaller than the fight needs, so the duel always resolves. */
function drawQuestions(lesson: Lesson, count: number): Exercise[] {
  const correct = useStore.getState().answeredCorrect;
  const all = lesson.exercises;
  const fresh = all.filter((e) => !correct[e.id]);
  const pool = shuffle(fresh.length >= count ? fresh : all);
  if (pool.length === 0) return [];
  return Array.from({ length: count }, (_, k) => pool[k % pool.length]);
}

function seedFrom(id: string): number {
  let n = 0;
  for (const ch of id) n += ch.charCodeAt(0);
  return n;
}

/**
 * A level's guardian duel — the gate that turns "read a lesson" into "prove you own it".
 * Same lives/HP combat as the world bosses (so it feels like play, not a test): land HP
 * clean hits before losing all LIVES. Winning clears the level and schedules its refresh.
 */
export function LevelChallenge({
  lesson,
  alreadyCleared,
  onClose,
}: {
  lesson: Lesson;
  /** True when re-taking a mastered-but-due level, so the copy reads "refresh" not "clear". */
  alreadyCleared: boolean;
  onClose: () => void;
}) {
  const passLesson = useStore((s) => s.passLesson);
  const [phase, setPhase] = useState<'intro' | 'battle' | 'win' | 'lose'>('intro');
  const duel = useDuel(HP, LIVES);
  const { round } = duel;

  const [questions, setQuestions] = useState(() => drawQuestions(lesson, HP + LIVES));
  const [builtRound, setBuiltRound] = useState(round);
  if (builtRound !== round) {
    setBuiltRound(round);
    setQuestions(drawQuestions(lesson, HP + LIVES));
  }

  useEffect(() => {
    startBattleTheme(seedFrom(lesson.id), false);
    return () => stopBattleTheme();
  }, [lesson.id]);

  const finish = useCallback(
    (won: boolean) => {
      if (won) {
        passLesson(lesson.id);
        sVictory();
        setPhase('win');
      } else {
        sDefeat();
        setPhase('lose');
      }
    },
    [passLesson, lesson.id],
  );

  useEffect(() => {
    if (phase !== 'battle' || !duel.over) return;
    const t = setTimeout(() => finish(duel.won), 800);
    return () => clearTimeout(t);
  }, [phase, duel.over, duel.won, finish]);

  function startFight() {
    duel.start();
    setPhase('battle');
  }

  const verb = alreadyCleared ? 'refresh' : 'clear';

  return (
    <AppModal open onClose={onClose} label={`${lesson.title} — trial`}>
      <div className="px-5 pt-4 pb-6 sm:px-6">
        {phase === 'intro' && (
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-danger/10">
              <Slime className="h-12 w-12" />
            </div>
            <p className="kicker mt-3 text-[14px] text-danger">
              {alreadyCleared ? 'Mastery refresh' : 'Level trial'}
            </p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">
              {alreadyCleared ? "The Guardian's stirring again" : 'Face the Guardian'}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {alreadyCleared
                ? `This level is fading from memory. Beat the Guardian to lock “${lesson.title}” back in.`
                : `Land ${HP} clean hits to ${verb} “${lesson.title}”. You have ${LIVES} lives — a wrong answer costs one.`}
            </p>
            {questions.length === 0 ? (
              <EmptyState className="mt-5 bg-transparent p-4">
                No practice for this level yet.
              </EmptyState>
            ) : (
              <Button variant="destructive" className="mt-5 w-full" onClick={startFight}>
                Fight!
              </Button>
            )}
            <Button variant="ghost" size="sm" className="mt-2 w-full" onClick={onClose}>
              Not yet
            </Button>
          </div>
        )}

        {phase === 'battle' && (
          <div>
            <DuelHud
              name="Level Guardian"
              icon={<Slime className="h-8 w-8" />}
              hp={duel.foeHP}
              maxHp={HP}
              hpHitKey={duel.foeHitKey}
              lives={duel.userLives}
              maxLives={LIVES}
              livesHitKey={duel.userHitKey}
            />
            <div className="h-[64vh] sm:h-[500px]">
              <ExerciseDeck exercises={questions} stable onResult={duel.onResult} />
            </div>
          </div>
        )}

        {phase === 'lose' && (
          <div className="text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-ink/5 text-ink-soft">
              <Slime className="h-12 w-12" />
            </div>
            <p className="kicker mt-3 text-[14px] text-danger">So close</p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">
              The Guardian holds!
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              Run through the practice once more, then come back and finish the job.
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
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-success/10">
              <StarIcon className="h-12 w-12 text-gold" />
            </div>
            <p className="kicker mt-3 text-[14px] text-success">Victory</p>
            <h2 className="font-display mt-1 text-[24px] leading-tight text-ink">
              {alreadyCleared ? 'Mastery refreshed!' : 'Level cleared!'}
            </h2>
            <p className="mx-auto mt-2 max-w-xs text-[14px] leading-relaxed text-ink-soft">
              {alreadyCleared
                ? 'Locked back in — the Guardian rests. See you at the next refresh.'
                : 'You’ve proven it — this level is yours. The trail continues.'}
            </p>
            <Button className="mt-5 w-full" onClick={onClose}>
              Onward <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </Button>
          </div>
        )}
      </div>
    </AppModal>
  );
}
