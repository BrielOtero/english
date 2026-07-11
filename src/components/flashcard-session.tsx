import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { ReviewCard } from '../content';
import type { Grade } from '../store';
import { useStore } from '../store';
import { playPhrase } from '../lib/audio';
import { sFlip, sCorrect, sTick, sFinish } from '../lib/sound';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { Icon } from './icons';
import { ProgressBar } from './ui/progress';

const GRADES: { grade: Grade; label: string; cls: string; out: string }[] = [
  {
    grade: 'again',
    label: 'Again',
    cls: 'border-danger text-danger hover:bg-danger/10',
    out: 'card-out-left',
  },
  {
    grade: 'good',
    label: 'Good',
    cls: 'border-accent text-accent hover:bg-accent/10',
    out: 'card-out-up',
  },
  {
    grade: 'easy',
    label: 'Easy',
    cls: 'border-success text-success hover:bg-success/10',
    out: 'card-out-right',
  },
];

/**
 * Runs a deck of flashcards: a real 3D card with the definition on the front and the
 * word on the back. Flipping reveals + pronounces the answer; grading (Again/Good/Easy)
 * throws the card aside and updates the shared spaced-repetition schedule.
 */
export function FlashcardSession({ cards, onDone }: { cards: ReviewCard[]; onDone?: () => void }) {
  const grade = useStore((s) => s.grade);
  const rate = useStore((s) => s.voiceRate);
  const voiceURI = useStore((s) => s.voiceURI);
  const reduce = useReducedMotion();
  // Snapshot the deck once at mount. Grading mutates the live source array (the graded
  // card drops out of the due/new query), so deriving from it each render would skip
  // cards and miscount — freeze a copy for the session's lifetime.
  const [deck] = useState(() => cards);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [out, setOut] = useState<string | null>(null);

  const card = deck[i];
  const done = i >= deck.length;

  // Fire the completion callback + fanfare once, when the deck is exhausted.
  useEffect(() => {
    if (done) {
      onDone?.();
      sFinish();
    }
    // Only depends on `done`; re-running on onDone identity changes is unwanted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (done) {
    return (
      <div className="fade-in rounded-xl border border-rule-soft bg-paper p-8 text-center">
        <span className="stamp mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/12 text-success">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <p className="font-display mt-3 text-[24px] text-ink">Session complete</p>
        <p className="mt-1 text-[13px] text-ink-soft">
          You reviewed {deck.length} card{deck.length === 1 ? '' : 's'}. Come back tomorrow to keep
          them fresh.
        </p>
      </div>
    );
  }

  function pronounce() {
    setSpeaking(true);
    playPhrase(card.audio, { rate, voiceURI, onEnd: () => setSpeaking(false) });
  }

  // First tap flips the card and speaks the word; a tap on the back replays it.
  function reveal() {
    if (flipped) {
      pronounce();
      return;
    }
    setFlipped(true);
    sFlip();
    pronounce();
  }

  function answer(g: Grade) {
    if (out) return; // ignore taps while a card is mid-throw
    if (g === 'again') sTick();
    else sCorrect(g === 'easy' ? 6 : 2);
    const advance = () => {
      grade(card.id, g);
      setFlipped(false);
      setSpeaking(false);
      setOut(null);
      setI((n) => n + 1);
    };
    if (reduce) {
      advance();
      return;
    }
    setOut(GRADES.find((x) => x.grade === g)!.out);
    window.setTimeout(advance, 180);
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-ink-mute">
        <span className="tracking-[0.15em] uppercase">{card.tag}</span>
        <span>
          {i + 1} / {deck.length}
        </span>
      </div>
      <ProgressBar value={(i / deck.length) * 100} className="mb-4" />

      <div key={card.id} className={out ?? 'card-in'}>
        <button
          onClick={reveal}
          data-flipped={flipped}
          className="flip group block w-full rounded-2xl transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.99]"
        >
          <div className="flip-inner">
            <div className="flip-face flex min-h-[196px] flex-col items-center justify-center rounded-2xl border border-rule-soft bg-paper p-8 text-center transition-[border-color,box-shadow] duration-150 group-hover:border-accent/60 group-hover:shadow-[var(--shadow-md)]">
              <LevelBadge level={card.level} />
              <p className="mt-3 text-[13px] text-ink-mute italic">{card.front}</p>
              <p className="font-display mt-5 text-[14px] text-ink-mute">Tap to reveal</p>
            </div>

            <div className="flip-back flip-face flex min-h-[196px] flex-col items-center justify-center rounded-2xl border border-rule-soft bg-paper p-8 text-center transition-[border-color,box-shadow] duration-150 group-hover:border-accent/60 group-hover:shadow-[var(--shadow-md)]">
              <LevelBadge level={card.level} />
              <p
                className={`font-display mt-3 flex items-center justify-center gap-2 text-[30px] leading-tight text-ink ${
                  speaking ? 'speak-pulse' : ''
                }`}
              >
                {card.back}
                <Speaker text={card.audio} size="md" />
              </p>
              {card.note && (
                <p className="mx-auto mt-2 max-w-md text-[13px] text-ink-soft">{card.note}</p>
              )}
              <p className="mt-4 font-mono text-[10px] tracking-wide text-ink-mute uppercase">
                Tap to hear it again
              </p>
            </div>
          </div>
        </button>
      </div>

      {flipped ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {GRADES.map((g) => (
            <button
              key={g.grade}
              onClick={() => answer(g.grade)}
              className={`press rounded-lg border bg-paper px-3 py-2.5 font-mono text-[11px] tracking-wide uppercase ${g.cls}`}
            >
              {g.label}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-center text-[12px] text-ink-mute">
          Say the answer out loud, then tap the card to check.
        </p>
      )}
    </div>
  );
}
