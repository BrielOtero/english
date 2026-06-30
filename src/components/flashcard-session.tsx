import { useEffect, useState } from 'react';
import type { ReviewCard } from '../content';
import type { Grade } from '../store';
import { useStore } from '../store';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { Icon } from './icons';

const GRADES: { grade: Grade; label: string; cls: string }[] = [
  { grade: 'again', label: 'Again', cls: 'border-danger text-danger hover:bg-danger/10' },
  { grade: 'good', label: 'Good', cls: 'border-accent text-accent hover:bg-accent/10' },
  { grade: 'easy', label: 'Easy', cls: 'border-success text-success hover:bg-success/10' },
];

/**
 * Runs a deck of flashcards: show the Spanish prompt, flip to reveal the English
 * answer + audio, then grade recall (Again/Good/Easy). Grading updates the shared
 * spaced-repetition schedule in the store.
 */
export function FlashcardSession({ cards, onDone }: { cards: ReviewCard[]; onDone?: () => void }) {
  const grade = useStore((s) => s.grade);
  // Snapshot the deck once at mount. Grading mutates the live source array (the
  // graded card drops out of the due/new query), so deriving from it each render
  // would skip cards and miscount — freeze a copy for the session's lifetime.
  const [deck] = useState(() => cards);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reveal, setReveal] = useState(false);

  const card = deck[i];
  const done = i >= deck.length;

  // Fire the completion callback once, when the deck is exhausted.
  useEffect(() => {
    if (done) onDone?.();
    // Only depends on `done`; re-running on onDone identity changes is unwanted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  if (done) {
    return (
      <div className="fade-in rounded-xl border border-rule-soft bg-paper p-8 text-center">
        <Icon name="check" className="mx-auto h-9 w-9 text-success" />
        <p className="font-display mt-2 text-[24px] text-ink">Session complete</p>
        <p className="mt-1 text-[13px] text-ink-soft">
          You reviewed {deck.length} card{deck.length === 1 ? '' : 's'}. Come back tomorrow to keep
          them fresh.
        </p>
      </div>
    );
  }

  function answer(g: Grade) {
    grade(card.id, g);
    setFlipped(false);
    setReveal(false);
    setI((n) => n + 1);
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-ink-mute">
        <span className="tracking-[0.15em] uppercase">{card.tag}</span>
        <span>
          {i + 1} / {deck.length}
        </span>
      </div>
      <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-bg2">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${(i / deck.length) * 100}%` }}
        />
      </div>

      <button
        onClick={() => {
          setFlipped(true);
          setReveal(true);
        }}
        className="block w-full rounded-2xl border border-rule-soft bg-paper p-8 text-center transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[var(--shadow-md)] active:scale-[0.99]"
      >
        <div className="mb-3 flex justify-center">
          <LevelBadge level={card.level} />
        </div>
        <p className="text-[13px] text-ink-mute italic">{card.front}</p>
        {reveal ? (
          <>
            <p className="font-display mt-2 flex items-center justify-center gap-2 text-[30px] leading-tight text-ink">
              {card.back}
              <Speaker text={card.audio} size="md" />
            </p>
            {card.note && (
              <p className="mx-auto mt-2 max-w-md text-[13px] text-ink-soft">{card.note}</p>
            )}
          </>
        ) : (
          <p className="font-display mt-4 text-[15px] text-ink-mute">Tap to reveal</p>
        )}
      </button>

      {flipped ? (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {GRADES.map((g) => (
            <button
              key={g.grade}
              onClick={() => answer(g.grade)}
              className={`rounded-lg border bg-paper px-3 py-2.5 font-mono text-[11px] tracking-wide uppercase transition-colors ${g.cls}`}
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
