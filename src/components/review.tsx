import { useEffect, useMemo, useState } from 'react';
import { buildReviewDeck } from '../content';
import { useStore, isDue, isLearned } from '../store';
import { FlashcardSession } from './flashcard-session';

const NEW_PER_SESSION = 12;

/**
 * The spaced-repetition daily driver. Surfaces cards that are due for review, plus a
 * handful of new ones, and runs them through a flashcard session. The schedule is
 * shared with every "add to review" button elsewhere in the app.
 */
export function Review() {
  const reviews = useStore((s) => s.reviews);
  const now = useStore((s) => s.now);
  const refreshNow = useStore((s) => s.refreshNow);
  const [session, setSession] = useState<'idle' | 'due' | 'new'>('idle');

  // Keep the "due" computation honest on each visit.
  useEffect(() => {
    refreshNow();
  }, [refreshNow]);

  const deck = useMemo(() => buildReviewDeck(), []);

  const dueCards = useMemo(
    () => deck.filter((c) => isDue(reviews[c.id], now)),
    [deck, reviews, now],
  );
  const newCards = useMemo(() => deck.filter((c) => !reviews[c.id]), [deck, reviews]);
  const knownCount = useMemo(
    () => deck.filter((c) => isLearned(reviews[c.id])).length,
    [deck, reviews],
  );

  if (session === 'due') {
    return (
      <div className="fade-in">
        <BackToOverview onClick={() => setSession('idle')} />
        <FlashcardSession cards={dueCards} onDone={() => refreshNow()} />
      </div>
    );
  }
  if (session === 'new') {
    return (
      <div className="fade-in">
        <BackToOverview onClick={() => setSession('idle')} />
        <FlashcardSession cards={newCards.slice(0, NEW_PER_SESSION)} onDone={() => refreshNow()} />
      </div>
    );
  }

  return (
    <div className="fade-in">
      <div className="mb-6 grid grid-cols-3 gap-3">
        <Stat n={dueCards.length} label="Due now" accent />
        <Stat n={newCards.length} label="New available" />
        <Stat n={knownCount} label="Learned" />
      </div>

      <div className="rounded-xl border border-rule-soft bg-paper p-6">
        {dueCards.length > 0 ? (
          <>
            <p className="text-[15px] text-ink">
              You have <span className="font-semibold text-accent">{dueCards.length}</span> card
              {dueCards.length === 1 ? '' : 's'} ready to review.
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">
              Reviewing right before you forget is the most efficient way to remember for good.
            </p>
            <button
              onClick={() => setSession('due')}
              className="mt-4 rounded-full bg-accent px-5 py-2.5 font-mono text-[12px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90"
            >
              Start review →
            </button>
          </>
        ) : (
          <>
            <p className="text-[15px] text-ink">✅ You're all caught up — nothing due right now.</p>
            <p className="mt-1 text-[13px] text-ink-soft">
              Learn some new words to fill tomorrow's review.
            </p>
          </>
        )}
      </div>

      {newCards.length > 0 && (
        <div className="mt-4 rounded-xl border border-rule-soft bg-paper p-6">
          <p className="text-[15px] text-ink">Learn new words & phrases</p>
          <p className="mt-1 text-[13px] text-ink-soft">
            Add up to {NEW_PER_SESSION} new cards to your memory. They'll come back on a spaced
            schedule.
          </p>
          <button
            onClick={() => setSession('new')}
            className="mt-4 rounded-full border border-rule-soft bg-bg px-5 py-2.5 font-mono text-[12px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
          >
            Learn new →
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ n, label, accent }: { n: number; label: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-rule-soft bg-paper p-4 text-center">
      <p className={`font-display text-[30px] leading-none ${accent ? 'text-accent' : 'text-ink'}`}>
        {n}
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-wide text-ink-mute uppercase">{label}</p>
    </div>
  );
}

function BackToOverview({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mb-4 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
    >
      ← Review overview
    </button>
  );
}
