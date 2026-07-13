import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { Lesson } from '@/types';
import { resolveStages, type ResolvedStage } from '@/lib/practice';
import { useStore } from '@/store';
import { AppModal } from '@/components/app-modal';
import { ExerciseDeck } from '@/components/exercise';
import { Icon } from '@/components/icons';

/**
 * A lesson's practice as a small climb: sub-topic stages (easy → hard), then an interleaved
 * Mix finale. Tapping a stage opens it in a calm dialog (bottom sheet on mobile) to play —
 * lighter than the Guardian's dialog, which keeps practice feeling like a warm-up. A stage is
 * "done" once every exercise in it has been answered correctly at least once (tracked globally).
 */
export function PracticeStages({ lesson }: { lesson: Lesson }) {
  const answeredCorrect = useStore((s) => s.answeredCorrect);
  const [openStage, setOpenStage] = useState<number | null>(null);

  const concept = useMemo(() => resolveStages(lesson) ?? [], [lesson]);
  const stages: (ResolvedStage & { mix?: boolean })[] = [
    ...concept,
    // Mix draws fresh batches from the whole lesson (interleaved review).
    { focus: 'Mix it all', exercises: lesson.exercises, mix: true },
  ];

  const doneCount = (exs: { id: string }[]) => exs.filter((e) => answeredCorrect[e.id]).length;
  const active = openStage !== null ? stages[openStage] : null;

  return (
    <>
      <div className="space-y-2.5">
        {stages.map((st, idx) => {
          const total = st.exercises.length;
          const done = doneCount(st.exercises);
          const cleared = total > 0 && done === total;
          return (
            <motion.button
              key={st.focus}
              type="button"
              disabled={total === 0}
              onClick={() => setOpenStage(idx)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 300, damping: 26 }}
              whileTap={{ scale: 0.99 }}
              className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-colors ${
                cleared
                  ? 'border-success/40 bg-success/5'
                  : 'border-rule-soft bg-paper hover:border-accent/40'
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-[14px] font-semibold ${
                  cleared
                    ? 'border-transparent bg-success text-paper'
                    : 'border-accent/50 text-accent'
                }`}
              >
                {cleared ? (
                  <Icon name="check" className="h-4 w-4" />
                ) : st.mix ? (
                  <Icon name="layers" className="h-4 w-4" />
                ) : (
                  idx + 1
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14.5px] font-medium text-ink">{st.focus}</p>
                <p className="mt-1 text-[12px] text-ink-mute">
                  {st.mix ? 'A fresh mix each time' : 'A short set each time'}
                </p>
              </div>
              <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-ink-mute" />
            </motion.button>
          );
        })}
      </div>

      {active && (
        <AppModal wide open onClose={() => setOpenStage(null)} label={active.focus}>
          <div className="flex h-[82dvh] flex-col px-6 pt-6 pb-6 sm:h-[600px] sm:px-8">
            <div className="mb-5 shrink-0">
              <p className="kicker text-[12px] text-ink-mute">Practice</p>
              <h3 className="font-display text-[24px] leading-tight text-ink">{active.focus}</h3>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-rule-soft to-transparent" />
            </div>
            <div className="min-h-0 flex-1">
              <ExerciseDeck
                key={active.focus}
                pool={active.exercises}
                batchSize={active.mix ? 12 : 10}
                requeueWrong
                stable
              />
            </div>
          </div>
        </AppModal>
      )}
    </>
  );
}
