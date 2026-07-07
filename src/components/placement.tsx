import { useState } from 'react';
import type { Level, PlacementQuestion } from '../types';
import { LEVELS, LEVEL_BLURB } from '../types';
import { PLACEMENT } from '../content';
import { shuffle } from '../lib/shuffle';
import {
  startPlacement,
  nextQuestion,
  recordAnswer,
  isFinished,
  estimatedLevel,
  certainty,
  type PlacementProgress,
} from '../lib/placement';
import { useStore } from '../store';
import { LevelBadge } from './level-badge';
import { Icon } from './icons';

type Phase = 'intro' | 'testing' | 'result';

/** A one-line takeaway per result level, tying the CEFR band back to the journey. */
const RESULT_NOTE: Record<Level, string> = {
  A1: "You're at the very start — the perfect place to build strong foundations.",
  A2: "You've got the basics down. Now we widen your range.",
  B1: 'You can handle everyday English. Time to sharpen accuracy and fluency.',
  B2: "You're solidly independent. The focus shifts to nuance and naturalness.",
  C1: "You're advanced — from here it's about precision, idiom, and register.",
  C2: 'Top of the scale. Going native now is about immersion: read, watch, and speak every day.',
};

const HOW = [
  'Around a dozen quick multiple-choice questions.',
  'It gets harder or easier as you go, homing in on your level.',
  'No studying — just answer honestly. Guessing only muddies the result.',
];

/**
 * The adaptive placement test. It holds the current attempt in local state and
 * defers every decision (which question next, when to stop, the final estimate)
 * to the pure engine in lib/placement.ts. On finishing it saves the level to the
 * store and offers to jump straight into lessons at that level.
 */
export function Placement({ onStartLevel }: { onStartLevel: (level: Level) => void }) {
  const placementLevel = useStore((s) => s.placementLevel);
  const setPlacementResult = useStore((s) => s.setPlacementResult);

  const [phase, setPhase] = useState<Phase>('intro');
  const [bank, setBank] = useState<PlacementQuestion[]>([]);
  const [progress, setProgress] = useState<PlacementProgress>(startPlacement);
  const [current, setCurrent] = useState<PlacementQuestion | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [result, setResult] = useState<Level | null>(null);

  function begin() {
    // Shuffle so retakes aren't identical; the engine still picks by band.
    const shuffled = shuffle(PLACEMENT);
    const p = startPlacement();
    setBank(shuffled);
    setProgress(p);
    setCurrent(nextQuestion(p, shuffled));
    setChoice(null);
    setResult(null);
    setPhase('testing');
  }

  function submit() {
    if (choice === null || !current) return;
    const p = recordAnswer(progress, current, choice === current.answer);
    const q = isFinished(p) ? null : nextQuestion(p, bank);

    if (isFinished(p) || !q) {
      const lvl = estimatedLevel(p) ?? LEVELS[Math.max(p.lo, 0)];
      setPlacementResult(lvl);
      setResult(lvl);
      setProgress(p);
      setPhase('result');
      return;
    }
    setProgress(p);
    setCurrent(q);
    setChoice(null);
  }

  /* ---- intro ---- */
  if (phase === 'intro') {
    return (
      <div className="fade-in max-w-2xl">
        {placementLevel && (
          <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-rule-soft bg-bg p-4">
            <LevelBadge level={placementLevel} />
            <span className="text-[13.5px] text-ink-soft">
              You last tested at <span className="font-medium text-ink">{placementLevel}</span>.
            </span>
            <button
              onClick={() => onStartLevel(placementLevel)}
              className="ml-auto rounded-full border border-rule-soft bg-paper px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
            >
              Go to my level
            </button>
          </div>
        )}

        <div className="rounded-2xl border border-rule-soft bg-paper p-6">
          <p className="kicker text-[13.5px] text-ink-soft">Find your level</p>
          <h2 className="font-display mt-2 text-[26px] leading-tight text-ink">
            Where should you start?
          </h2>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
            A short adaptive test that estimates your CEFR level, so you begin at the right place on
            the road from zero to native.
          </p>

          <ul className="mt-5 space-y-2.5">
            {HOW.map((line) => (
              <li key={line} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={begin}
            className="press mt-6 rounded-full bg-accent px-6 py-2.5 font-mono text-[11px] tracking-wide text-on-accent uppercase transition hover:opacity-90"
          >
            {placementLevel ? 'Retake the test' : 'Start the test'}
          </button>
        </div>
      </div>
    );
  }

  /* ---- result ---- */
  if (phase === 'result' && result) {
    return (
      <div className="fade-in max-w-2xl">
        <div className="rounded-2xl border border-rule-soft bg-paper p-6 text-center">
          <p className="kicker text-[13.5px] text-ink-soft">Your estimated level</p>
          <div className="mt-4 flex justify-center">
            <LevelBadge level={result} className="!text-[22px] !px-4 !py-2" />
          </div>
          <p className="font-display mt-4 text-[22px] leading-tight text-ink">
            {LEVEL_BLURB[result]}
          </p>
          <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-ink-soft">
            {RESULT_NOTE[result]}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onStartLevel(result)}
              className="press rounded-full bg-accent px-6 py-2.5 font-mono text-[11px] tracking-wide text-on-accent uppercase transition hover:opacity-90"
            >
              Start {result} lessons
            </button>
            <button
              onClick={begin}
              className="rounded-full border border-rule-soft bg-bg px-5 py-2.5 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
            >
              Retake
            </button>
          </div>
        </div>
        <p className="mt-4 text-center text-[12px] text-ink-mute">
          An estimate to point you at a starting line — not a certificate. Trust your progress over
          the number.
        </p>
      </div>
    );
  }

  /* ---- testing ---- */
  if (!current) return null;
  const pct = Math.round(certainty(progress) * 100);

  return (
    <div className="fade-in max-w-2xl">
      <div className="rounded-2xl border border-rule-soft bg-paper p-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="kicker text-[13.5px] text-ink-soft">Question {progress.count + 1}</span>
          <span className="font-mono text-[11px] text-ink-mute">Finding your level…</span>
        </div>
        <div className="mb-6 h-1 w-full overflow-hidden rounded-full bg-bg2">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>

        <p className="mb-5 text-[17px] leading-relaxed text-ink">{current.prompt}</p>

        <div className="grid gap-2">
          {current.options.map((opt, idx) => {
            const selected = idx === choice;
            return (
              <button
                key={idx}
                onClick={() => setChoice(idx)}
                className={`rounded-lg border px-4 py-2.5 text-left text-[14px] transition-colors ${
                  selected
                    ? 'border-accent bg-accent/10 text-ink'
                    : 'border-rule-soft bg-bg text-ink-soft hover:border-accent/60'
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={submit}
            disabled={choice === null}
            className="press rounded-full bg-ink px-6 py-2.5 font-mono text-[11px] tracking-wide text-paper uppercase transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
