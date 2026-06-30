import { useState } from 'react';
import type { FormTable, Lesson, Pitfall } from '../types';
import { useStore } from '../store';
import { Markup } from './markup';
import { PhraseLine } from './phrase-line';
import { ExerciseDeck } from './exercise';
import { LevelBadge } from './level-badge';
import { ConfettiBurst } from './confetti';
import { EsTag } from './icons';

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 kicker text-[13.5px] text-ink-soft">
      {children}
    </h3>
  );
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

function PitfallCard({ pitfall, showSpanish }: { pitfall: Pitfall; showSpanish: boolean }) {
  return (
    <div className="rounded-lg border border-rule-soft bg-bg p-3.5">
      <p className="text-[14px] text-ink-soft">
        <span className="mr-1.5 font-mono text-[11px] text-danger">✗</span>
        <span className="line-through decoration-danger/50">{pitfall.wrong}</span>
      </p>
      <p className="mt-1 text-[14px] text-ink">
        <span className="mr-1.5 font-mono text-[11px] text-success">✓</span>
        {pitfall.right}
      </p>
      <p className="mt-2 text-[12px] text-ink-soft">
        <Markup text={pitfall.why} />
      </p>
      {showSpanish && pitfall.esNote && (
        <p className="mt-1 text-[12px] text-accent">
          <EsTag />
          <Markup text={pitfall.esNote} />
        </p>
      )}
    </div>
  );
}

export function LessonView({ lesson }: { lesson: Lesson }) {
  const completed = useStore((s) => !!s.completed[lesson.id]);
  const markComplete = useStore((s) => s.markComplete);
  const unmarkComplete = useStore((s) => s.unmarkComplete);
  const showSpanish = useStore((s) => s.showSpanish);
  const [burstKey, setBurstKey] = useState(0);

  function toggleComplete() {
    if (completed) {
      unmarkComplete(lesson.id);
    } else {
      markComplete(lesson.id);
      setBurstKey((k) => k + 1); // fire the celebration
    }
  }

  return (
    <article className="fade-in" id={`lesson-${lesson.id}`}>
      <div className="mb-5 flex items-center gap-3">
        <LevelBadge level={lesson.level} />
        <span className="relative">
          <button
            onClick={toggleComplete}
            className={`rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide uppercase transition-colors ${
              completed
                ? 'border-success bg-success/10 text-success'
                : 'border-rule-soft bg-paper text-ink-mute hover:text-ink'
            }`}
          >
            {completed ? '✓ Completed' : 'Mark complete'}
          </button>
          {burstKey > 0 && <ConfettiBurst key={burstKey} />}
        </span>
      </div>

      <h2 className="font-display text-[clamp(24px,3.4vw,34px)] leading-tight text-ink">
        {lesson.title}
      </h2>
      <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{lesson.summary}</p>
      {showSpanish && lesson.summaryEs && (
        <p className="mt-1 max-w-2xl text-[14px] leading-relaxed text-ink-mute italic">
          {lesson.summaryEs}
        </p>
      )}

      {/* Teaching sections */}
      <div className="mt-7 space-y-6">
        {lesson.sections.map((sec, i) => (
          <section key={i}>
            {sec.heading && <SubHead>{sec.heading}</SubHead>}
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
              <Markup text={sec.body} />
            </p>
            {showSpanish && sec.bodyEs && (
              <p className="mt-1.5 max-w-2xl text-[13.5px] leading-relaxed text-ink-mute italic">
                <Markup text={sec.bodyEs} />
              </p>
            )}
            {sec.examples && (
              <div className="mt-3 space-y-2.5 rounded-lg border border-rule-soft bg-paper p-4">
                {sec.examples.map((ph, k) => (
                  <PhraseLine key={k} phrase={ph} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Reference tables */}
      {lesson.tables?.map((t, i) => (
        <Table key={i} table={t} />
      ))}

      {/* Examples */}
      {lesson.examples.length > 0 && (
        <section className="mt-8">
          <SubHead>Examples · tap to listen</SubHead>
          <div className="space-y-3 rounded-xl border border-rule-soft bg-paper p-5">
            {lesson.examples.map((ph, i) => (
              <PhraseLine key={i} phrase={ph} />
            ))}
          </div>
        </section>
      )}

      {/* Pitfalls */}
      {lesson.pitfalls && lesson.pitfalls.length > 0 && (
        <section className="mt-8">
          <SubHead>Watch out</SubHead>
          <div className="grid gap-3 sm:grid-cols-2">
            {lesson.pitfalls.map((p, i) => (
              <PitfallCard key={i} pitfall={p} showSpanish={showSpanish} />
            ))}
          </div>
        </section>
      )}

      {/* Practice */}
      {lesson.exercises.length > 0 && (
        <section className="mt-8">
          <SubHead>Practice</SubHead>
          <ExerciseDeck exercises={lesson.exercises} onComplete={() => markComplete(lesson.id)} />
        </section>
      )}
    </article>
  );
}
