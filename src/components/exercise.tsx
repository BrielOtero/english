import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Exercise } from '@/types';
import { matches, normalize } from '@/lib/check';
import { shuffle } from '@/lib/shuffle';
import { Speaker } from '@/components/speaker';
import { Markup } from '@/components/markup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProgressBar } from '@/components/ui/progress';
import { OptionButton, type OptionState } from '@/components/ui/option-button';
import { Icon } from '@/components/icons';
import { sCorrect, sWrong } from '@/lib/sound';
import { useStore } from '@/store';

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
  requeueWrong = false,
}: {
  exercises: Exercise[];
  onComplete?: () => void;
  /** Fires once per checked answer — the battle system uses it to deal damage. */
  onResult?: (correct: boolean) => void;
  /** Fixed-height layout with controls pinned to the bottom, for the battle modal — the
   *  question region flexes while the Check/Next button stays put, so nothing dances. */
  stable?: boolean;
  /** Practice/mastery mode: a wrong answer sends the card to the back of the deck, so the
   *  learner keeps meeting it until it's answered right — you can't finish by failing. */
  requeueWrong?: boolean;
}) {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);
  const [wasCorrect, setWasCorrect] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  // Cards requeued after a wrong answer (mastery mode) — appended to the live deck.
  const [extra, setExtra] = useState<Exercise[]>([]);

  // Per-question input state.
  const [text, setText] = useState('');
  const [choice, setChoice] = useState<number | null>(null);
  const [picked, setPicked] = useState<number[]>([]);

  const completedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const markAnsweredCorrect = useStore((s) => s.markAnsweredCorrect);

  const deck = requeueWrong ? exercises.concat(extra) : exercises;
  const ex = deck[i];
  const done = i >= deck.length;
  const total = exercises.length;

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
    const pct = Math.round((score / total) * 100);
    return (
      <div className="fade-in rounded-xl border border-rule-soft bg-paper p-6 text-center">
        <p className="kicker text-[13.5px] text-ink-soft">Practice complete</p>
        {requeueWrong ? (
          <>
            <p className="font-display mt-2 text-[32px] leading-none text-ink">
              All {total} mastered
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">
              {bestStreak >= 3
                ? `On fire — best streak ×${bestStreak}. Ready for the challenge?`
                : 'Every card cleared. Ready to take on the challenge?'}
            </p>
          </>
        ) : (
          <>
            <p className="font-display mt-2 text-[32px] leading-none text-ink">
              {score} / {total}
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">
              {pct >= 80
                ? 'Excellent — you have got this.'
                : pct >= 50
                  ? 'Good progress. Review the misses and try again.'
                  : 'Keep going — repetition is how it sticks.'}
            </p>
          </>
        )}
        <Button variant="outline" size="sm" className="mt-4" onClick={restart}>
          Practice again
        </Button>
      </div>
    );
  }

  function resetInputs() {
    setText('');
    setChoice(null);
    setPicked([]);
  }

  function restart() {
    setI(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setExtra([]);
    resetInputs();
    setChecked(false);
    completedRef.current = false;
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
      const s = streak + 1;
      setStreak(s);
      setBestStreak((b) => Math.max(b, s));
      sCorrect(s); // pitch rises with the combo
    } else {
      setStreak(0);
      sWrong();
    }
    onResult?.(ok);
  }

  function next() {
    // Mastery mode: a missed card goes to the back of the deck to be met again.
    if (requeueWrong && !wasCorrect) setExtra((x) => [...x, ex]);
    setChecked(false);
    resetInputs();
    setI((n) => n + 1);
  }

  const prompt = KIND_LABEL[ex.kind];

  const header = (
    <>
      <div className="mb-4 flex items-center justify-between gap-2">
        <span className="kicker text-[13.5px] text-ink-soft">{prompt}</span>
        <div className="flex items-center gap-2">
          {streak >= 2 && (
            <motion.span
              key={streak}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-accent tabular-nums"
            >
              ×{streak}
            </motion.span>
          )}
          <span className="font-mono text-[11px] text-ink-mute tabular-nums">
            {requeueWrong ? score : i + 1} / {total}
          </span>
        </div>
      </div>
      <ProgressBar
        value={requeueWrong ? (score / total) * 100 : (i / total) * 100}
        className="mb-5"
      />
    </>
  );

  const body = (
    <>
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
              const state: OptionState = !checked
                ? isChosen
                  ? 'selected'
                  : 'idle'
                : isAnswer
                  ? 'correct'
                  : isChosen
                    ? 'wrong'
                    : 'muted';
              return (
                <OptionButton
                  key={idx}
                  state={state}
                  disabled={checked}
                  onClick={() => setChoice(idx)}
                >
                  {opt}
                </OptionButton>
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
          <Input
            ref={inputRef}
            value={text}
            disabled={checked}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            placeholder="Type the correct sentence…"
          />
        </div>
      )}

      {ex.kind === 'dictation' && (
        <div>
          <div className="mb-3 flex items-center gap-3">
            <Speaker text={ex.text} size="lg" label="Play the sentence" />
            <span className="text-[13px] text-ink-soft">Press play, then type what you hear.</span>
          </div>
          <Input
            ref={inputRef}
            value={text}
            disabled={checked}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (checked ? next() : check())}
            placeholder="Type what you hear…"
          />
        </div>
      )}

      {ex.kind === 'order' && (
        <div>
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
      <p
        className={`flex items-center gap-1.5 font-semibold ${wasCorrect ? 'text-success' : 'text-danger'}`}
      >
        <Icon name={wasCorrect ? 'check' : 'x'} className="h-3.5 w-3.5" />
        {wasCorrect ? 'Correct' : 'Not quite'}
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
    <Button size="sm" onClick={check} className="w-full sm:w-auto">
      Check
    </Button>
  ) : (
    <Button variant="dark" size="sm" onClick={next} className="w-full sm:w-auto">
      {i + 1 < deck.length || (requeueWrong && !wasCorrect) ? (
        <>
          Next <Icon name="arrow-right" className="h-3.5 w-3.5" />
        </>
      ) : (
        'Finish'
      )}
    </Button>
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
