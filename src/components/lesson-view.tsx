import { useState } from 'react';
import type { FormTable, Lesson, Pitfall } from '../types';
import { useStore } from '../store';
import { Markup } from './markup';
import { PhraseLine } from './phrase-line';
import { ExerciseDeck } from './exercise';
import { LevelBadge } from './level-badge';
import { Icon } from './icons';
import { ConfettiBurst } from './confetti';
import { StarRewardOverlay } from './star-reward';
import { Card } from './ui/card';
import { Toggle } from './ui/toggle';
import { totalStars } from '../lib/stars';

function SubHead({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 kicker text-[13.5px] text-ink-soft">{children}</h3>;
}

function Table({ table }: { table: FormTable }) {
  return (
    <div className="my-4 overflow-x-auto soft-scroll">
      <table className="w-full border-collapse text-[13px]">
        {table.caption && (
          <caption className="mb-2 text-left text-[12px] text-ink-mute">{table.caption}</caption>
        )}
        <thead>
          <tr>
            {table.columns.map((c, i) => (
              <th
                key={i}
                className="border-b border-rule-soft px-3 py-2 text-left font-mono text-[11px] tracking-wide text-ink-mute uppercase"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r} className="border-b border-rule-soft/60">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`px-3 py-2 ${c === 0 ? 'font-medium text-ink' : 'text-ink-soft'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PitfallCard({ pitfall }: { pitfall: Pitfall }) {
  return (
    <div className="rounded-lg border border-rule-soft bg-bg p-3.5">
      <p className="flex items-start gap-1.5 text-[14px] text-ink-soft">
        <Icon name="x" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-danger" />
        <span className="line-through decoration-danger/50">{pitfall.wrong}</span>
      </p>
      <p className="mt-1 flex items-start gap-1.5 text-[14px] text-ink">
        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
        {pitfall.right}
      </p>
      <p className="mt-2 text-[12px] text-ink-soft">
        <Markup text={pitfall.why} />
      </p>
    </div>
  );
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  const completed = useStore((s) => !!s.completed[lesson.id]);
  const markComplete = useStore((s) => s.markComplete);
  const unmarkComplete = useStore((s) => s.unmarkComplete);
  const [burstKey, setBurstKey] = useState(0);
  const [reward, setReward] = useState<{ earned: number; total: number } | null>(null);

  // Mark done and celebrate: a full star reward when this crosses a milestone (mastering
  // the world's lessons bumps the grand total), otherwise a small confetti pop.
  function complete() {
    const before = totalStars(useStore.getState());
    markComplete(lesson.id);
    const after = totalStars(useStore.getState());
    if (after > before) setReward({ earned: after - before, total: after });
    else setBurstKey((k) => k + 1);
  }

  function toggleComplete() {
    if (completed) unmarkComplete(lesson.id);
    else complete();
  }

  return (
    <article className="fade-in" id={`lesson-${lesson.id}`}>
      <div className="mb-5 flex items-center gap-3">
        <LevelBadge level={lesson.level} />
        <span className="relative">
          <Toggle pressed={completed} onClick={toggleComplete}>
            {completed ? (
              <>
                <Icon name="check" className="h-3 w-3" /> Completed
              </>
            ) : (
              'Mark complete'
            )}
          </Toggle>
          {burstKey > 0 && <ConfettiBurst key={burstKey} />}
        </span>
      </div>

      <h2 className="font-display text-[clamp(24px,3.4vw,34px)] leading-tight text-ink">
        {lesson.title}
      </h2>
      <p className="mt-3 measure reading text-ink-soft">
        <Markup text={lesson.summary} />
      </p>

      <div className="mt-8 space-y-8">
        {lesson.sections.map((sec, i) => (
          <section key={i}>
            {sec.heading && <SubHead>{sec.heading}</SubHead>}
            <p className="measure reading text-ink-soft">
              <Markup text={sec.body} />
            </p>
            {sec.examples && (
              <Card className="mt-4 space-y-2.5 p-5">
                {sec.examples.map((ph, k) => (
                  <PhraseLine key={k} phrase={ph} />
                ))}
              </Card>
            )}
          </section>
        ))}
      </div>

      {lesson.tables?.map((t, i) => (
        <Table key={i} table={t} />
      ))}

      {lesson.examples.length > 0 && (
        <section className="mt-8">
          <SubHead>Examples · tap to listen</SubHead>
          <Card className="space-y-3 p-5">
            {lesson.examples.map((ph, i) => (
              <PhraseLine key={i} phrase={ph} />
            ))}
          </Card>
        </section>
      )}

      {lesson.pitfalls && lesson.pitfalls.length > 0 && (
        <section className="mt-8">
          <SubHead>Watch out</SubHead>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {lesson.pitfalls.map((p, i) => (
              <PitfallCard key={i} pitfall={p} />
            ))}
          </div>
        </section>
      )}

      {lesson.exercises.length > 0 && (
        <section className="mt-8">
          <SubHead>Practice</SubHead>
          <ExerciseDeck exercises={lesson.exercises} onComplete={complete} />
        </section>
      )}

      {reward && (
        <StarRewardOverlay
          earned={reward.earned}
          total={reward.total}
          onDone={() => setReward(null)}
        />
      )}
    </article>
  );
}
