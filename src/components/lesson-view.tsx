import { useState } from 'react';
import type { FormTable, Lesson, Pitfall } from '@/types';
import { useStore, isDue } from '@/store';
import { Markup } from '@/components/markup';
import { PhraseLine } from '@/components/phrase-line';
import { ExerciseDeck } from '@/components/exercise';
import { LevelChallenge } from '@/components/level-challenge';
import { LevelBadge } from '@/components/level-badge';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slime } from '@/components/map-art';

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

/** The bottom-of-lesson gate: read → practice → face the Guardian. Beating it is the only
 *  way to clear the level, so "completed" always means "proven", never "scrolled past". */
function TrialCta({
  cleared,
  due,
  hasExercises,
  onStart,
}: {
  cleared: boolean;
  due: boolean;
  hasExercises: boolean;
  onStart: () => void;
}) {
  if (!hasExercises) return null;
  const tone = cleared && !due ? 'border-success/40 bg-success/5' : 'border-danger/40 bg-danger/5';
  return (
    <Card className={`mt-10 flex items-center gap-4 border ${tone} p-5`}>
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-paper shadow-[var(--shadow-sm)]">
        <Slime className="h-9 w-9" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-medium text-ink">
          {cleared && due
            ? 'Time to refresh this level'
            : cleared
              ? 'Level cleared'
              : 'Ready to prove it?'}
        </p>
        <p className="mt-0.5 text-[13px] text-ink-soft">
          {cleared && due
            ? "The Guardian's stirring — beat it again to keep your mastery."
            : cleared
              ? 'You own this one. Retake the trial anytime for a tune-up.'
              : 'Beat the Guardian to clear the level and earn its star.'}
        </p>
      </div>
      <Button
        variant={cleared && !due ? 'outline' : 'destructive'}
        size="sm"
        className="shrink-0"
        onClick={onStart}
      >
        {cleared && due ? 'Refresh' : cleared ? 'Retake' : 'Face the Guardian'}
      </Button>
    </Card>
  );
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  const cleared = useStore((s) => !!s.completed[lesson.id]);
  const review = useStore((s) => s.lessonReviews[lesson.id]);
  const now = useStore((s) => s.now);
  const [trialOpen, setTrialOpen] = useState(false);

  const due = cleared && isDue(review, now);

  return (
    <article className="fade-in" id={`lesson-${lesson.id}`}>
      <div className="mb-5 flex items-center gap-3">
        <LevelBadge level={lesson.level} />
        {cleared ? (
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-medium ${
              due
                ? 'border-gold/50 bg-gold/10 text-ink'
                : 'border-success/40 bg-success/10 text-success'
            }`}
          >
            <Icon name="check" className="h-3 w-3" />
            {due ? 'Refresh due' : 'Cleared'}
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full border border-rule-soft px-2.5 py-1 text-[12px] text-ink-mute">
            Not cleared yet
          </span>
        )}
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
          <SubHead>Practice · master every card</SubHead>
          <ExerciseDeck exercises={lesson.exercises} requeueWrong />
        </section>
      )}

      <TrialCta
        cleared={cleared}
        due={due}
        hasExercises={lesson.exercises.length > 0}
        onStart={() => setTrialOpen(true)}
      />

      {trialOpen && (
        <LevelChallenge
          lesson={lesson}
          alreadyCleared={cleared}
          onClose={() => setTrialOpen(false)}
        />
      )}
    </article>
  );
}
