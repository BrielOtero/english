import { useEffect, useMemo, useRef, useState } from 'react';
import type { Exercise } from '../types';
import { matches, normalize } from '../lib/check';
import { shuffle } from '../lib/shuffle';
import { Speaker } from './speaker';
import { Markup } from './markup';
import { sCorrect, sWrong } from '../lib/sound';
import { useStore } from '../store';

const KIND_LABEL: Record<Exercise['kind'], string> = {
  mcq: 'Choose the right answer',
  cloze: 'Fill in the blank',
  correct: 'Fix the mistake',
  order: 'Put the words in order',
  dictation: 'Listen and type what you hear',
};

/** The model answer to reveal after a wrong attempt. */
function modelAnswer(ex: Exercise): string {
  switch (ex.kind) {
    case 'mcq':
      return ex.options[ex.answer];
    case 'cloze':
      return `${ex.before} ${ex.answers[0]} ${ex.after}`.replace(/\s+/g, ' ').trim();
    case 'correct':
      return ex.answers[0];
    case 'order':
      return ex.answer;
    case 'dictation':
      return ex.text;
  }
}

/**
 * Runs a list of exercises one at a time: shows the prompt, checks the answer,
 * gives immediate feedback with the model answer and explanation, and reports a
 * final score. `onComplete` fires once when the learner reaches the summary.
 */
export function ExerciseDeck({
  exercises,
  onComplete,
  onResult,
  stable = false,
}: {
  exercises: Exercise[];
  onComplete?: () => void;
  /** Fires once per checked answer — the battle system uses it to deal damage. */
  onResult?: (correct: boolean) => void;
  /** Fixed-height layout with controls pinned to the bottom, for the battle modal — the
   *  question region flexes while the Check/Next button stays put, so nothing dances. */
  stable?: boolean;
}) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);

  // Per-question input state.
  const [text, setText] = useState('');
  const [choice, setChoice] = useState<number | null>(null);
  const [picked, setPicked] = useState<number[]>([]);

  const completedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const markAnsweredCorrect = useStore((s) => s.markAnsweredCorrect);

  const ex = exercises[i];
  const done = i >= exercises.length;

  // A stable shuffle of token indices for the current ordering exercise.
  const shuffledIdx = useMemo(
    () => (ex && ex.kind === 'order' ? shuffle(ex.tokens.map((_, idx) => idx)) : []),
    [ex],
  );

  useEffect(() => {
    if (done && !completedRef.current) {
      completedRef.current = true;
      onComplete?.();
    }
  }, [done, onComplete]);

  // Focus the text field when a typing exercise appears — but never scroll the page
  // to it (otherwise opening a lesson jumps straight down to the practice input).
  useEffect(() => {
    if (ex && ex.kind !== 'mcq' && ex.kind !== 'order') {
      inputRef.current?.focus({ preventScroll: true });
    }
  }, [ex]);

  // On mobile the deck sits low; bring the next question — and the feedback/controls
  // after a check — into view so nothing important lands below the fold.
  useEffect(() => {
    if (i > 0) deckRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [i]);
  useEffect(() => {
    // 'center' keeps the expanded card's controls clear of the fixed mobile dock.
    if (checked) controlsRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [checked]);

  if (!exercises.length) return null;

  if (done) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <div className="fade-in rounded-xl border border-rule-soft bg-paper p-6 text-center">
        <p className="kicker text-[13.5px] text-ink-soft">Practice complete</p>
        <p className="font-display mt-2 text-[32px] leading-none text-ink">
          {score} / {exercises.length}
        </p>
        <p className="mt-1 text-[13px] text-ink-soft">
          {pct >= 80
            ? 'Excellent — you have got this.'
            : pct >= 50
              ? 'Good progress. Review the misses and try again.'
              : 'Keep going — repetition is how it sticks.'}
        </p>
        <button
          onClick={() => {
            setI(0);
            setScore(0);
            resetInputs();
            setChecked(false);
            completedRef.current = false;
          }}
          className="mt-4 rounded-full border border-rule-soft bg-bg px-4 py-2 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
        >
          Practice again
        </button>
      </div>
    );
  }

  function resetInputs() {
    setText('');
    setChoice(null);
    setPicked([]);
  }

  function evaluate(): boolean {
    switch (ex.kind) {
      case 'mcq':
        return choice === ex.answer;
      case 'cloze':
        return matches(text, ex.answers);
      case 'correct':
        return matches(text, ex.answers);
      case 'order':
        return normalize(picked.map((p) => ex.tokens[p]).join(' ')) === normalize(ex.answer);
      case 'dictation':
        return matches(text, [ex.text]);
    }
  }

  function check() {
    if (checked) return;
    // Don't let the learner check an empty answer.
    if (ex.kind === 'mcq' && choice === null) return;
    if (ex.kind === 'order' && picked.length === 0) return;
    if ((ex.kind === 'cloze' || ex.kind === 'correct' || ex.kind === 'dictation') && !text.trim())
      return;
    const ok = evaluate();
    setWasCorrect(ok);
    setChecked(true);
    if (ok) {
      setScore((s) => s + 1);
      markAnsweredCorrect(ex.id);
      sCorrect(1);
    } else {
      sWrong();
    }
    onResult?.(ok);
  }

  function next() {
    setChecked(false);
    resetInputs();
    setI((n) => n + 1);
  }

  const prompt = KIND_LABEL[ex.kind];

  const header = (
    <>
      {/* progress */}
      <div className="mb-4 flex items-center justify-between">
        <span className="kicker text-[13.5px] text-ink-soft">{prompt}</span>
        <span className="font-mono text-[11px] text-ink-mute">
          {i + 1} / {exercises.length}
        </span>
      </div>
      <div className="mb-5 h-1 w-full overflow-hidden rounded-full bg-bg2">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${(i / exercises.length) * 100}%` }}
        />
      </div>
    </>
  );

  const body = (
    <>
      {/* --- prompt body, per kind --- */}
      {ex.kind === 'mcq' && (
        <div>
          {ex.audio && (
            <div className="mb-4 flex items-center gap-3">
              <Speaker text={ex.audio} size="lg" label="Play the sentence" />
              <span className="text-[13px] text-ink-soft">
                Press play, then choose what you hear.
              </span>
            </div>
          )}
          <p className="mb-4 text-[16px] text-ink">{ex.prompt}</p>
          <div className="grid grid-cols-1 gap-2">
            {ex.options.map((opt, idx) => {
              const isAnswer = idx === ex.answer;
              const isChosen = idx === choice;
              const cls = !checked
                ? isChosen
                  ? 'border-accent bg-accent/10 text-ink'
                  : 'border-rule-soft bg-bg hover:border-accent/60 text-ink-soft'
                : isAnswer
                  ? 'border-success bg-success/10 text-ink'
                  : isChosen
                    ? 'border-danger bg-danger/10 text-ink'
                    : 'border-rule-soft bg-bg text-ink-mute';
              return (
                <button
                  key={idx}
                  disabled={checked}
                  onClick={() => setChoice(idx)}
                  className={`rounded-lg border px-4 py-2.5 text-left text-[14px] transition-colors ${cls}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {ex.kind === 'cloze' && (
        <div className="text-[16px] leading-relaxed text-ink">
          {ex.before}{' '}
          <input
            ref={inputRef}
            value={text}
            disabled={checked}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            placeholder="…"
            className="mx-1 w-32 rounded-md border-b-2 border-accent bg-bg px-2 py-1 text-center text-[15px] text-ink focus:outline-none"
          />{' '}
          {ex.after}
          {ex.hint && !checked && <p className="mt-3 text-[12px] text-ink-mute">Hint: {ex.hint}</p>}
        </div>
      )}

      {ex.kind === 'correct' && (
        <div>
          <p className="mb-1 font-mono text-[10px] tracking-[0.15em] text-danger uppercase">
            Wrong
          </p>
          <p className="mb-3 text-[15px] text-ink-soft line-through decoration-danger/50">
            {ex.wrong}
          </p>
          <input
            ref={inputRef}
            value={text}
            disabled={checked}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            placeholder="Type the correct sentence…"
            className="w-full rounded-lg border border-rule-soft bg-bg px-3 py-2.5 text-[15px] text-ink focus:border-accent focus:outline-none"
          />
        </div>
      )}

      {ex.kind === 'dictation' && (
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Speaker text={ex.text} size="lg" label="Play the sentence" />
            <span className="text-[13px] text-ink-soft">Press play, then type what you hear.</span>
          </div>
          <input
            ref={inputRef}
            value={text}
            disabled={checked}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            placeholder="Type what you hear…"
            className="w-full rounded-lg border border-rule-soft bg-bg px-3 py-2.5 text-[15px] text-ink focus:border-accent focus:outline-none"
          />
        </div>
      )}

      {ex.kind === 'order' && (
        <div>
          {/* answer line */}
          <div className="mb-3 flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-dashed border-rule-soft bg-bg p-3">
            {picked.length === 0 && (
              <span className="text-[13px] text-ink-mute">Tap the words in order…</span>
            )}
            {picked.map((p, pos) => (
              <button
                key={pos}
                disabled={checked}
                onClick={() => setPicked((cur) => cur.filter((_, k) => k !== pos))}
                className="rounded-md border border-accent bg-accent/10 px-2.5 py-1 text-[14px] text-ink"
              >
                {ex.tokens[p]}
              </button>
            ))}
          </div>
          {/* word bank */}
          <div className="flex flex-wrap gap-2">
            {shuffledIdx
              .filter((idx) => !picked.includes(idx))
              .map((idx) => (
                <button
                  key={idx}
                  disabled={checked}
                  onClick={() => setPicked((cur) => [...cur, idx])}
                  className="rounded-md border border-rule-soft bg-paper px-2.5 py-1 text-[14px] text-ink-soft transition-colors hover:border-accent hover:text-ink"
                >
                  {ex.tokens[idx]}
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );

  const feedback = checked ? (
    <div
      className={`mt-4 rounded-lg border p-3 text-[13px] ${
        wasCorrect ? 'border-success/40 bg-success/10' : 'border-danger/40 bg-danger/10'
      }`}
    >
      <p className={`font-semibold ${wasCorrect ? 'text-success' : 'text-danger'}`}>
        {wasCorrect ? '✓ Correct' : '✗ Not quite'}
      </p>
      {!wasCorrect && (
        <p className="mt-1 flex items-center gap-2 text-ink">
          Answer: <span className="font-medium">{modelAnswer(ex)}</span>
          <Speaker text={modelAnswer(ex)} size="sm" />
        </p>
      )}
      {ex.explain && (
        <p className="mt-1 text-ink-soft">
          <Markup text={ex.explain} />
        </p>
      )}
    </div>
  ) : null;

  const controlsInner = !checked ? (
    <button
      onClick={check}
      className="w-full rounded-full bg-accent px-5 py-2.5 font-mono text-[11px] tracking-wide text-paper uppercase transition active:scale-[0.97] hover:opacity-90 sm:w-auto"
    >
      Check
    </button>
  ) : (
    <button
      onClick={next}
      className="w-full rounded-full bg-ink px-5 py-2.5 font-mono text-[11px] tracking-wide text-paper uppercase transition active:scale-[0.97] hover:opacity-90 sm:w-auto"
    >
      {i + 1 < exercises.length ? 'Next →' : 'Finish'}
    </button>
  );

  // Battle mode: a fixed-height card with the controls pinned to the bottom, so the
  // Check/Next button never moves and only the question region flexes underneath the HUD.
  if (stable) {
    return (
      <div
        className={`flex h-full flex-col rounded-xl border border-rule-soft bg-paper p-5 ${
          checked && !wasCorrect ? 'shake' : ''
        }`}
      >
        <div className="shrink-0">{header}</div>
        <div className="soft-scroll min-h-0 flex-1 overflow-y-auto">
          {body}
          {feedback}
        </div>
        <div className="mt-3 flex shrink-0 justify-end border-t border-rule-soft/60 pt-3">
          {controlsInner}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={deckRef}
      className={`scroll-mt-20 rounded-xl border border-rule-soft bg-paper p-5 ${
        checked && !wasCorrect ? 'shake' : ''
      }`}
    >
      {header}
      {body}
      {feedback}
      <div ref={controlsRef} className="mt-5 flex justify-end">
        {controlsInner}
      </div>
    </div>
  );
}
