import { useEffect, useMemo, useState } from 'react';
import { buildVocabDeck, VOCAB_SETS } from '../content';
import { useStore, isDue, isLearned } from '../store';
import { LEVELS } from '../types';
import { sStart } from '../lib/sound';
import { AppModal } from './app-modal';
import { BackButton } from './back-button';
import { FlashcardSession } from './flashcard-session';
import { Icon } from './icons';
import { LevelBadge } from './level-badge';
import { Leaf } from './map-art';
import { Button } from './ui/button';
import { Badge, badgeVariants } from './ui/badge';
import { Stat } from './ui/stat';
import { cn } from './ui/cn';

const NEW_PER_SESSION = 12;

/** The one adaptive call-to-action that leads the Review overview. Whatever the state,
 *  it resolves to a single inviting next step so the page always pulls you forward. */
interface HeroConfig {
  kicker: string;
  title: string;
  sub: string;
  cta: string;
  onCta: () => void;
  /** A quieter alternative action (e.g. "or learn 12 new"). */
  secondary?: { label: string; onClick: () => void };
  /** An enticing stat under the button (e.g. "588 words waiting"). */
  note?: string;
  /** Show a check by the kicker for the "done / caught up" states. */
  caughtUp?: boolean;
}

/**
 * The spaced-repetition daily driver — vocabulary for now. The learner picks which
 * vocabulary groups (the same ones shown in the Vocabulary section) to practice, so the
 * deck is theirs to shape and never overwhelming. Grammar, phrasal verbs and more card
 * types will slot in as extra categories later.
 */
export function Review() {
  const reviews = useStore((s) => s.reviews);
  const now = useStore((s) => s.now);
  const refreshNow = useStore((s) => s.refreshNow);
  const reviewGroups = useStore((s) => s.reviewGroups);
  const toggleReviewGroup = useStore((s) => s.toggleReviewGroup);
  const setReviewGroups = useStore((s) => s.setReviewGroups);
  const [session, setSession] = useState<'idle' | 'due' | 'new'>('idle');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [category, setCategory] = useState<null | 'vocabulary'>(null);
  const closeSettings = () => {
    setSettingsOpen(false);
    setCategory(null);
  };

  // Keep the "due" computation honest on each visit.
  useEffect(() => {
    refreshNow();
  }, [refreshNow]);

  const included = (id: string) => reviewGroups[id] !== false;
  const deck = useMemo(() => buildVocabDeck((id) => reviewGroups[id] !== false), [reviewGroups]);

  const dueCards = useMemo(
    () => deck.filter((c) => isDue(reviews[c.id], now)),
    [deck, reviews, now],
  );
  const newCards = useMemo(() => deck.filter((c) => !reviews[c.id]), [deck, reviews]);
  const knownCount = useMemo(
    () => deck.filter((c) => isLearned(reviews[c.id])).length,
    [deck, reviews],
  );
  const activeGroups = VOCAB_SETS.filter((s) => included(s.id)).length;

  if (session === 'due') {
    return (
      <div className="fade-in">
        <BackButton onClick={() => setSession('idle')}>Review overview</BackButton>
        <FlashcardSession cards={dueCards} onDone={() => refreshNow()} />
      </div>
    );
  }
  if (session === 'new') {
    return (
      <div className="fade-in">
        <BackButton onClick={() => setSession('idle')}>Review overview</BackButton>
        <FlashcardSession cards={newCards.slice(0, NEW_PER_SESSION)} onDone={() => refreshNow()} />
      </div>
    );
  }

  const startReview = () => {
    sStart();
    setSession('due');
  };
  const startLearn = () => {
    sStart();
    setSession('new');
  };
  const learnSize = Math.min(NEW_PER_SESSION, newCards.length);

  const hero: HeroConfig =
    activeGroups === 0
      ? {
          kicker: 'Get started',
          title: 'Build your review deck',
          sub: 'Pick a few vocabulary groups and they turn into flashcards here — served right before you would forget them.',
          cta: 'Choose groups',
          onCta: () => setSettingsOpen(true),
        }
      : dueCards.length > 0
        ? {
            kicker: 'Ready for you',
            title: `${dueCards.length} card${dueCards.length === 1 ? '' : 's'} to review`,
            sub: 'Reviewing right before you forget is the most efficient way to remember for good.',
            cta: 'Start review',
            onCta: startReview,
            secondary:
              newCards.length > 0
                ? { label: `or learn ${learnSize} new`, onClick: startLearn }
                : undefined,
          }
        : newCards.length > 0
          ? {
              kicker: 'All caught up',
              caughtUp: true,
              title: 'Learn something new',
              sub: "Nothing's due right now — a perfect moment to grow. New words come back on a smart schedule, so they stick.",
              cta: `Learn ${learnSize} new word${learnSize === 1 ? '' : 's'}`,
              onCta: startLearn,
              note: `${newCards.length.toLocaleString()} words waiting in your groups`,
            }
          : {
              kicker: 'All mastered',
              caughtUp: true,
              title: "You've learned them all",
              sub: 'Every word in your active groups is in long-term memory. Add more groups to keep growing.',
              cta: 'Add more groups',
              onCta: () => setSettingsOpen(true),
            };

  return (
    <div className="fade-in">
      <ReviewHero {...hero} />

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Stat value={dueCards.length} label="Due now" accent />
        <Stat value={newCards.length} label="New available" />
        <Stat value={knownCount} label="Learned" />
      </div>

      <button
        onClick={() => setSettingsOpen(true)}
        className="press mt-4 flex w-full items-center gap-3 rounded-xl border border-rule-soft bg-paper p-4 text-left transition-colors hover:border-accent/60"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--accent-tint)] text-accent">
          <SlidersIcon className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[14.5px] font-medium text-ink">Configure review</span>
          <span className="block truncate text-[12.5px] text-ink-soft">
            Vocabulary · {activeGroups} of {VOCAB_SETS.length} groups on
          </span>
        </span>
        <Chevron className="h-4 w-4 shrink-0 text-ink-mute" />
      </button>

      <AppModal open={settingsOpen} onClose={closeSettings} label="Review settings">
        {/* Fixed height so the dialog never grows or shrinks as you move between panels. */}
        <div className="flex h-[68vh] max-h-[520px] flex-col px-5 pt-4 pb-5 sm:px-6 sm:pb-6">
          {category === 'vocabulary' ? (
            <>
              <div className="mb-3 flex shrink-0 items-center justify-between gap-2">
                <button
                  onClick={() => setCategory(null)}
                  className="press flex items-center gap-1.5 text-[13px] font-medium text-ink-mute transition-colors hover:text-ink"
                >
                  <Chevron className="h-4 w-4 rotate-180" /> Categories
                </button>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => setReviewGroups({})}
                    className="rounded-full border border-rule-soft bg-bg px-3 py-1.5 text-[12px] text-ink-soft transition-colors hover:text-ink"
                  >
                    All
                  </button>
                  <button
                    onClick={() =>
                      setReviewGroups(Object.fromEntries(VOCAB_SETS.map((s) => [s.id, false])))
                    }
                    className="rounded-full border border-rule-soft bg-bg px-3 py-1.5 text-[12px] text-ink-soft transition-colors hover:text-ink"
                  >
                    None
                  </button>
                </div>
              </div>
              <p className="mb-4 shrink-0 text-[13px] text-ink-soft">
                Pick vocabulary groups to practice — {activeGroups} of {VOCAB_SETS.length} on.
              </p>

              <div className="-mr-2 min-h-0 flex-1 space-y-4 overflow-y-auto pr-2">
                {LEVELS.map((lv) => {
                  const sets = VOCAB_SETS.filter((s) => s.level === lv);
                  if (!sets.length) return null;
                  return (
                    <div key={lv}>
                      <div className="mb-2 flex items-center gap-2">
                        <LevelBadge level={lv} />
                        <span className="font-mono text-[10px] tracking-wide text-ink-mute uppercase">
                          {sets.length} groups
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {sets.map((s) => {
                          const on = included(s.id);
                          return (
                            <button
                              key={s.id}
                              onClick={() => toggleReviewGroup(s.id)}
                              aria-pressed={on}
                              className={cn(
                                badgeVariants({ variant: on ? 'active' : 'default' }),
                                !on && 'hover:text-ink',
                              )}
                            >
                              {on && <Icon name="check" className="h-3 w-3 text-accent" />}
                              {s.title}
                              <span className="ml-1 text-ink-mute">({s.items.length})</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="mb-2 flex shrink-0 items-center justify-between">
                <h2 className="font-display text-[19px] leading-none text-ink">Review settings</h2>
                <button
                  onClick={closeSettings}
                  aria-label="Close"
                  className="press grid h-8 w-8 place-items-center rounded-full text-ink-mute transition-colors hover:text-ink"
                >
                  <Icon name="x" className="h-4 w-4" />
                </button>
              </div>
              <p className="mb-2 shrink-0 text-[13px] text-ink-soft">Choose what to practice.</p>
              <div className="-mx-2 min-h-0 flex-1 overflow-y-auto">
                <CategoryRow
                  title="Vocabulary"
                  subtitle={`${activeGroups} of ${VOCAB_SETS.length} groups on`}
                  onClick={() => setCategory('vocabulary')}
                />
                <CategoryRow title="Grammar" subtitle="Coming soon" />
                <CategoryRow title="Phrasal verbs" subtitle="Coming soon" />
                <CategoryRow title="Idioms & collocations" subtitle="Coming soon" />
              </div>
            </>
          )}
        </div>
      </AppModal>
    </div>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" />
    </svg>
  );
}

function CategoryRow({
  title,
  subtitle,
  onClick,
}: {
  title: string;
  subtitle: string;
  onClick?: () => void;
}) {
  const soon = !onClick;
  return (
    <button
      onClick={onClick}
      disabled={soon}
      className={`flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
        soon ? 'cursor-default' : 'hover:bg-bg'
      }`}
    >
      <span className="min-w-0">
        <span className={`block text-[14.5px] font-medium ${soon ? 'text-ink-mute' : 'text-ink'}`}>
          {title}
        </span>
        <span className="block text-[12px] text-ink-mute">{subtitle}</span>
      </span>
      {soon ? (
        <Badge variant="outline" size="sm" className="shrink-0">
          Soon
        </Badge>
      ) : (
        <Chevron className="h-4 w-4 shrink-0 text-ink-mute" />
      )}
    </button>
  );
}

function Chevron({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

/** The hero that opens the Review tab: a warm, botanical panel that always leads with
 *  one bold call-to-action, so the page pulls the learner into their next session. */
function ReviewHero({ kicker, title, sub, cta, onCta, secondary, note, caughtUp }: HeroConfig) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-rule-soft bg-paper p-7 sm:p-9">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-tint)] to-transparent opacity-70" />
      <Leaf className="pointer-events-none absolute -top-5 -right-3 h-40 w-40 rotate-12 text-accent/10" />

      <div className="relative">
        <p className="kicker flex items-center gap-1.5 text-[13px] text-accent">
          {caughtUp && <Icon name="check" className="h-3.5 w-3.5" />}
          {kicker}
        </p>
        <h2 className="font-display mt-1.5 text-[clamp(24px,4.5vw,36px)] leading-[1.05] text-ink">
          {title}
        </h2>
        <p className="reading mt-3 max-w-lg text-[14.5px] text-ink-soft">{sub}</p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Button onClick={onCta} className="group shadow-[var(--shadow-md)]">
            {cta}
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
            />
          </Button>
          {secondary && (
            <button
              onClick={secondary.onClick}
              className="press text-[13px] font-medium text-ink-soft underline decoration-rule-soft underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              {secondary.label}
            </button>
          )}
        </div>

        {note && (
          <p className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] text-ink-mute">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent/70" />
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
