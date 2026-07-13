import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, type Transition } from 'framer-motion';
import type { Exercise } from '@/types';
import { matches, normalize } from '@/lib/check';
import { shuffle } from '@/lib/shuffle';
import { Speaker } from '@/components/speaker';
import { Markup } from '@/components/markup';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProgressBar } from '@/components/ui/progress';
import { OptionButton, type OptionState } from '@/components/ui/option-button';
import { cn } from '@/components/ui/cn';
import { Icon } from '@/components/icons';
import { sCorrect, sWrong } from '@/lib/sound';
import { useStore } from '@/store';

const KIND_LABEL: Record<Exercise['kind'], string> = {
  mcq: 'Choose the right answer',
  cloze: 'Fill in the blank',
  correct: 'Fix the mistake',
  order: 'Put the words in order',
  dictation: 'Listen and type what you hear',
  truefalse: 'True or false?',
  tapCloze: 'Tap the missing word',
  pickAll: 'Tap all that apply',
  build: 'Build the sentence',
  trim: 'Tap the extra words',
  match: 'Match the pairs',
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
    case 'truefalse':
      return ex.answer ? 'True' : 'False';
    case 'tapCloze':
      return `${ex.before} ${ex.options[ex.answer]} ${ex.after}`.replace(/\s+/g, ' ').trim();
    case 'pickAll':
      return ex.correct.map((i) => ex.options[i]).join(', ');
    case 'build':
      return ex.answer;
    case 'trim':
      return ex.words.filter((_, i) => !ex.remove.includes(i)).join(' ');
    case 'match':
      return ex.pairs.map(([a, b]) => `${a} = ${b}`).join(' · ');
  }
}

// A distinct colour per matched pair (literal classes so Tailwind's JIT emits them). Both
// halves of a pair share its colour, so a matched grid reads at a glance like a memory game.
const PAIR_COLORS = [
  'border-lvl-a1 bg-lvl-a1/15 text-lvl-a1',
  'border-lvl-b2 bg-lvl-b2/15 text-lvl-b2',
  'border-lvl-c1 bg-lvl-c1/15 text-lvl-c1',
  'border-lvl-a2 bg-lvl-a2/15 text-lvl-a2',
  'border-accent2 bg-accent2/15 text-accent2',
  'border-lvl-c2 bg-lvl-c2/15 text-lvl-c2',
];
const SPRING_POP: Transition = { duration: 0.34, ease: [0.34, 1.4, 0.5, 1] };

/** Draw a fresh practice batch from a pool: unseen items first (so repeat sessions bring new
 *  questions), topped up with already-seen ones once the unseen run out. */
function sampleBatch(pool: Exercise[], size: number, correct: Record<string, true>): Exercise[] {
  const unseen = shuffle(pool.filter((e) => !correct[e.id]));
  if (unseen.length >= size) return unseen.slice(0, size);
  return [...unseen, ...shuffle(pool.filter((e) => correct[e.id]))].slice(0, size);
}

/**
 * Runs a list of exercises one at a time: shows the prompt, checks the answer,
 * gives immediate feedback with the model answer and explanation, and reports a
 * final score. `onComplete` fires once when the learner reaches the summary.
 */
export function ExerciseDeck({
  exercises,
  pool,
  batchSize = 10,
  onComplete,
  onResult,
  stable = false,
  requeueWrong = false,
}: {
  /** A fixed set to run through (guardian/boss/reading). */
  exercises?: Exercise[];
  /** A large bank to draw fresh batches from (practice). Each session samples `batchSize`,
   *  preferring unseen items, so "practice again" gives new questions — not the same ones. */
  pool?: Exercise[];
  batchSize?: number;
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
  // Match-pairs state: the selected left, the pairs already locked, whether any mismatch
  // happened, and the right side to flash red on a miss.
  const [matchSel, setMatchSel] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [matchWrong, setMatchWrong] = useState(false);
  const [matchFlash, setMatchFlash] = useState<number | null>(null);
  // Pool mode: the current sampled batch (re-sampled on "practice again").
  const [batch, setBatch] = useState<Exercise[]>(() =>
    pool ? sampleBatch(pool, batchSize, useStore.getState().answeredCorrect) : [],
  );

  const completedRef = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const markAnsweredCorrect = useStore((s) => s.markAnsweredCorrect);

  const base = pool ? batch : (exercises ?? []);
  const deck = requeueWrong ? base.concat(extra) : base;
  const ex = deck[i];
  const done = i >= deck.length;
  const total = base.length;

  // A stable shuffle of tile indices for the current tap-to-build exercise (order/build).
  const shuffledIdx = useMemo(() => {
    if (ex?.kind === 'order') return shuffle(ex.tokens.map((_, idx) => idx));
    if (ex?.kind === 'build') return shuffle(ex.words.map((_, idx) => idx));
    if (ex?.kind === 'match') return shuffle(ex.pairs.map((_, idx) => idx));
    return [];
  }, [ex]);

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

  if (!(pool ?? exercises ?? []).length) return null;

  if (done) {
    const pct = Math.round((score / total) * 100);
    const poolMastered = pool
      ? pool.filter((e) => useStore.getState().answeredCorrect[e.id]).length
      : 0;
    return (
      <div className="fade-in rounded-xl border border-rule-soft bg-paper p-6 text-center">
        <p className="kicker text-[13.5px] text-ink-soft">
          {pool ? 'Batch complete' : 'Practice complete'}
        </p>
        {requeueWrong ? (
          <>
            <p className="font-display mt-2 text-[32px] leading-none text-ink">
              {pool ? `+${total} done` : `All ${total} mastered`}
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">
              {pool
                ? `${poolMastered} / ${pool.length} in this group — practice again for a fresh set.`
                : bestStreak >= 3
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
    setMatchSel(null);
    setMatched([]);
    setMatchWrong(false);
    setMatchFlash(null);
  }

  function restart() {
    setI(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setExtra([]);
    // Pool mode: pull a fresh batch (unseen first) so "practice again" isn't the same set.
    if (pool) setBatch(sampleBatch(pool, batchSize, useStore.getState().answeredCorrect));
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
      case 'truefalse':
        return choice === (ex.answer ? 1 : 0);
      case 'tapCloze':
        return choice === ex.answer;
      case 'pickAll':
        return (
          [...picked].sort((a, b) => a - b).join(',') ===
          [...ex.correct].sort((a, b) => a - b).join(',')
        );
      case 'build':
        return normalize(picked.map((p) => ex.words[p]).join(' ')) === normalize(ex.answer);
      case 'trim':
        return (
          [...picked].sort((a, b) => a - b).join(',') ===
          [...ex.remove].sort((a, b) => a - b).join(',')
        );
      case 'match':
        return matched.length === ex.pairs.length && !matchWrong;
    }
  }

  // Record a graded answer: feedback, score, streak, sound, and the battle callback. Shared
  // by the Check button and by self-completing kinds (match) that have no Check button.
  function settle(ok: boolean) {
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

  function check() {
    if (checked) return;
    // Don't let the learner check an empty answer (pickAll/trim allow "none" as an answer).
    if ((ex.kind === 'mcq' || ex.kind === 'truefalse' || ex.kind === 'tapCloze') && choice === null)
      return;
    if ((ex.kind === 'order' || ex.kind === 'build') && picked.length === 0) return;
    if ((ex.kind === 'cloze' || ex.kind === 'correct' || ex.kind === 'dictation') && !text.trim())
      return;
    settle(evaluate());
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
                className="rounded-md border border-accent bg-accent/10 px-2.5 py-1 text-[14px] text-ink transition-transform active:scale-95"
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
                  className="rounded-md border border-rule-soft bg-paper px-2.5 py-1 text-[14px] text-ink-soft transition-[color,border-color,transform] hover:border-accent hover:text-ink active:scale-95"
                >
                  {ex.tokens[idx]}
                </button>
              ))}
          </div>
        </div>
      )}

      {ex.kind === 'truefalse' && (
        <div>
          {ex.audio && (
            <div className="mb-4 flex items-center gap-3">
              <Speaker text={ex.audio} size="lg" label="Play the sentence" />
              <span className="text-[13px] text-ink-soft">Press play, then decide.</span>
            </div>
          )}
          <p className="mb-5 text-[18px] leading-relaxed text-ink">{ex.statement}</p>
          <div className="grid grid-cols-2 gap-3">
            {(
              [
                { v: 1, label: 'True', icon: 'check', pos: true },
                { v: 0, label: 'False', icon: 'x', pos: false },
              ] as const
            ).map(({ v, label, icon, pos }) => {
              const isAnswer = v === (ex.answer ? 1 : 0);
              const isChosen = v === choice;
              const strong = pos
                ? 'border-success bg-success/15 text-success'
                : 'border-danger bg-danger/15 text-danger';
              const soft = pos
                ? 'border-success/30 bg-success/5 text-success/80 hover:border-success/60'
                : 'border-danger/30 bg-danger/5 text-danger/80 hover:border-danger/60';
              const cls = !checked
                ? isChosen
                  ? strong
                  : soft
                : isAnswer
                  ? strong
                  : 'border-rule-soft bg-bg text-ink-mute opacity-60';
              return (
                <motion.button
                  key={v}
                  type="button"
                  disabled={checked}
                  onClick={() => setChoice(v)}
                  whileTap={!checked ? { scale: 0.97 } : undefined}
                  animate={checked && isAnswer ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                  transition={SPRING_POP}
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-xl border-2 py-4 text-[15px] font-medium transition-[color,background-color,border-color]',
                    cls,
                  )}
                >
                  <Icon name={icon} className="h-4 w-4" /> {label}
                </motion.button>
              );
            })}
          </div>
        </div>
      )}

      {ex.kind === 'tapCloze' && (
        <div>
          <p className="mb-5 text-[16px] leading-relaxed text-ink">
            {ex.before}{' '}
            <span className="mx-1 inline-flex min-w-16 justify-center rounded-md border-b-2 border-accent px-2 py-0.5 text-center font-medium text-ink">
              {choice !== null ? ex.options[choice] : '···'}
            </span>{' '}
            {ex.after}
          </p>
          <div className="flex flex-wrap gap-2">
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
                  className="px-3 py-2"
                >
                  {opt}
                </OptionButton>
              );
            })}
          </div>
        </div>
      )}

      {ex.kind === 'pickAll' && (
        <div>
          <p className="mb-4 text-[16px] text-ink">{ex.prompt}</p>
          <div className="grid grid-cols-1 gap-2">
            {ex.options.map((opt, idx) => {
              const isCorrect = ex.correct.includes(idx);
              const isPicked = picked.includes(idx);
              const state: OptionState = !checked
                ? isPicked
                  ? 'selected'
                  : 'idle'
                : isCorrect
                  ? 'correct'
                  : isPicked
                    ? 'wrong'
                    : 'muted';
              return (
                <OptionButton
                  key={idx}
                  state={state}
                  disabled={checked}
                  onClick={() =>
                    setPicked((cur) =>
                      cur.includes(idx) ? cur.filter((k) => k !== idx) : [...cur, idx],
                    )
                  }
                >
                  {opt}
                </OptionButton>
              );
            })}
          </div>
        </div>
      )}

      {ex.kind === 'build' && (
        <div>
          <div className="mb-3 flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-dashed border-rule-soft bg-bg p-3">
            {picked.length === 0 && (
              <span className="text-[13px] text-ink-mute">
                Tap the words to build the sentence…
              </span>
            )}
            {picked.map((p, pos) => (
              <button
                key={pos}
                disabled={checked}
                onClick={() => setPicked((cur) => cur.filter((_, k) => k !== pos))}
                className="rounded-md border border-accent bg-accent/10 px-2.5 py-1 text-[14px] text-ink transition-transform active:scale-95"
              >
                {ex.words[p]}
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
                  className="rounded-md border border-rule-soft bg-paper px-2.5 py-1 text-[14px] text-ink-soft transition-[color,border-color,transform] hover:border-accent hover:text-ink active:scale-95"
                >
                  {ex.words[idx]}
                </button>
              ))}
          </div>
        </div>
      )}

      {ex.kind === 'trim' && (
        <div>
          <p className="mb-3 text-[13px] text-ink-soft">Tap the word(s) that don’t belong.</p>
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-[17px] leading-relaxed">
            {ex.words.map((w, idx) => {
              const marked = picked.includes(idx);
              const shouldRemove = ex.remove.includes(idx);
              let cls: string;
              if (!checked) {
                cls = marked
                  ? 'text-danger line-through decoration-danger/60'
                  : 'text-ink hover:text-danger';
              } else if (shouldRemove && marked) {
                cls = 'text-success line-through decoration-success/60';
              } else if (shouldRemove && !marked) {
                cls = 'text-danger underline decoration-danger/60';
              } else if (marked) {
                cls = 'text-danger';
              } else {
                cls = 'text-ink';
              }
              return (
                <button
                  key={idx}
                  disabled={checked}
                  onClick={() =>
                    setPicked((cur) =>
                      cur.includes(idx) ? cur.filter((k) => k !== idx) : [...cur, idx],
                    )
                  }
                  className={cn('rounded px-1 transition-[color,transform] active:scale-95', cls)}
                >
                  {w}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {ex.kind === 'match' && (
        <div>
          <p className="mb-4 text-[13px] text-ink-soft">Tap a word, then its match.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              {ex.pairs.map(([left], idx) => {
                const isMatched = matched.includes(idx);
                const cls = isMatched
                  ? PAIR_COLORS[idx % PAIR_COLORS.length]
                  : matchSel === idx
                    ? 'border-accent bg-accent/10 text-ink'
                    : 'border-rule-soft bg-paper text-ink shadow-[var(--shadow-sm)] hover:border-accent/60';
                return (
                  <motion.button
                    key={idx}
                    type="button"
                    disabled={checked || isMatched}
                    whileTap={!isMatched ? { scale: 0.97 } : undefined}
                    animate={isMatched ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                    transition={SPRING_POP}
                    onClick={() => {
                      setMatchFlash(null);
                      setMatchSel(idx);
                    }}
                    className={cn(
                      'rounded-lg border-2 px-4 py-2.5 text-left text-[14px] font-medium transition-[color,background-color,border-color]',
                      cls,
                    )}
                  >
                    {left}
                  </motion.button>
                );
              })}
            </div>
            <div className="flex flex-col gap-2">
              {shuffledIdx.map((ri) => {
                const isMatched = matched.includes(ri);
                const isFlash = matchFlash === ri;
                const cls = isMatched
                  ? PAIR_COLORS[ri % PAIR_COLORS.length]
                  : isFlash
                    ? 'border-danger bg-danger/10 text-ink'
                    : 'border-rule-soft bg-paper text-ink shadow-[var(--shadow-sm)] hover:border-accent/60';
                return (
                  <motion.button
                    key={ri}
                    type="button"
                    disabled={checked || isMatched}
                    whileTap={!isMatched ? { scale: 0.97 } : undefined}
                    animate={
                      isMatched
                        ? { scale: [1, 1.08, 1], x: 0 }
                        : isFlash
                          ? { x: [0, -5, 5, -3, 3, 0] }
                          : { scale: 1, x: 0 }
                    }
                    transition={isFlash ? { duration: 0.4, ease: 'easeInOut' } : SPRING_POP}
                    onClick={() => {
                      if (matchSel === null || matched.includes(ri)) return;
                      if (ri === matchSel) {
                        const nm = [...matched, ri];
                        setMatched(nm);
                        setMatchSel(null);
                        setMatchFlash(null);
                        if (nm.length === ex.pairs.length) settle(!matchWrong);
                        else sCorrect(1);
                      } else {
                        setMatchWrong(true);
                        setMatchFlash(ri);
                        setMatchSel(null);
                        sWrong();
                      }
                    }}
                    className={cn(
                      'rounded-lg border-2 px-4 py-2.5 text-left text-[14px] font-medium transition-[color,background-color,border-color]',
                      cls,
                    )}
                  >
                    {ex.pairs[ri][1]}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );

  const feedback = checked ? (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mt-4 rounded-lg border p-3 text-[13px]',
        wasCorrect ? 'border-success/40 bg-success/10' : 'border-danger/40 bg-danger/10',
      )}
    >
      <p
        className={cn(
          'flex items-center gap-1.5 font-semibold',
          wasCorrect ? 'text-success' : 'text-danger',
        )}
      >
        <motion.span
          initial={{ scale: 0.4 }}
          animate={{ scale: 1 }}
          transition={SPRING_POP}
          className="inline-flex"
        >
          <Icon name={wasCorrect ? 'check' : 'x'} className="h-3.5 w-3.5" />
        </motion.span>
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
    </motion.div>
  ) : null;

  const controlsInner = !checked ? (
    ex.kind === 'match' ? null : (
      <Button size="sm" onClick={check} className="w-full sm:w-auto">
        Check
      </Button>
    )
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

  // Immersive mode (in a dialog): the deck runs flush with the surface — no card-in-a-card —
  // with the controls pinned to the bottom so the Check/Next button never moves.
  if (stable) {
    return (
      <div className={cn('flex h-full flex-col', checked && !wasCorrect && 'shake')}>
        <div className="shrink-0">{header}</div>
        <div className="soft-scroll -mx-1 flex min-h-0 flex-1 flex-col overflow-y-auto px-1">
          <div className="w-full">
            {body}
            {feedback}
          </div>
        </div>
        <div className="mt-4 flex shrink-0 justify-end border-t border-rule-soft/60 pt-4">
          {controlsInner}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={deckRef}
      className={cn(
        'scroll-mt-20 rounded-xl border border-rule-soft bg-paper p-5',
        checked && !wasCorrect && 'shake',
      )}
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
