import { useMemo } from 'react';
import { LEVELS, LEVEL_BLURB } from '../types';
import { GRAMMAR, TOTAL_LESSONS, buildReviewDeck } from '../content';
import { useStore, isLearned } from '../store';
import { LevelBadge } from './level-badge';
import { Icon, type IconName } from './icons';

const METHOD: { icon: IconName; t: string; d: string }[] = [
  {
    icon: 'download',
    t: 'Get input',
    d: 'Read & listen to graded texts a little above your level. Tap any sentence to hear it.',
  },
  {
    icon: 'pencil',
    t: 'Practice & produce',
    d: 'Do the lesson drills and write. Errors are where the learning happens.',
  },
  {
    icon: 'refresh',
    t: 'Review daily',
    d: 'Five minutes of spaced repetition makes vocabulary permanent.',
  },
];

export function Roadmap({ onSelect }: { onSelect: (trackId: string) => void }) {
  const completed = useStore((s) => s.completed);
  const reviews = useStore((s) => s.reviews);

  const completedCount = Object.keys(completed).length;
  const learnedCards = useMemo(
    () => buildReviewDeck().filter((c) => isLearned(reviews[c.id])).length,
    [reviews],
  );
  const pct = TOTAL_LESSONS ? Math.round((completedCount / TOTAL_LESSONS) * 100) : 0;

  return (
    <div className="fade-in">
      {/* Overall progress */}
      <div className="mb-8 rounded-2xl border border-rule-soft bg-paper p-6">
        <p className="kicker text-[13.5px] text-ink-soft">
          Your journey to native
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-6">
          <div>
            <p className="font-display text-[40px] leading-none text-ink">{pct}%</p>
            <p className="mt-1 text-[12px] text-ink-mute">
              {completedCount} / {TOTAL_LESSONS} lessons complete
            </p>
          </div>
          <div className="border-l border-rule-soft pl-6">
            <p className="font-display text-[40px] leading-none text-accent">{learnedCards}</p>
            <p className="mt-1 text-[12px] text-ink-mute">words & phrases learned</p>
          </div>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-bg2">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* How to use it — the method */}
      <div className="mb-8 grid gap-3 sm:grid-cols-3">
        {METHOD.map((s) => (
          <div key={s.t} className="rounded-xl border border-rule-soft bg-bg p-4">
            <Icon name={s.icon} className="h-5 w-5 text-accent" />
            <p className="mt-2 text-[14px] font-medium text-ink">{s.t}</p>
            <p className="mt-1 text-[12.5px] leading-snug text-ink-soft">{s.d}</p>
          </div>
        ))}
      </div>

      {/* Level ladder */}
      <p className="mb-3 kicker text-[13.5px] text-ink-soft">
        The path · A1 → C2
      </p>
      <div className="space-y-2.5">
        {LEVELS.map((lvl) => {
          const unit = GRAMMAR.find((u) => u.level === lvl);
          const total = unit?.lessons.length ?? 0;
          const done = unit?.lessons.filter((l) => completed[l.id]).length ?? 0;
          const lvlPct = total ? Math.round((done / total) * 100) : 0;
          return (
            <button
              key={lvl}
              onClick={() => onSelect('grammar')}
              className="group flex w-full items-center gap-4 rounded-xl border border-rule-soft bg-paper p-4 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[var(--shadow-md)] active:scale-[0.99]"
            >
              <LevelBadge level={lvl} />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-medium text-ink group-hover:text-accent">
                  {LEVEL_BLURB[lvl]}
                </p>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg2">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${lvlPct}%` }} />
                </div>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-ink-mute">
                {done}/{total}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
