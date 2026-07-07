import type { Level } from '../types';
import { LEVELS } from '../types';
import { LevelBadge } from './level-badge';

// A shared level selector used across the browse-able tracks (vocabulary,
// pronunciation, reading, writing, phrasal verbs, idioms) so filtering by CEFR
// level works the same everywhere. Unlike the Grammar spine — which shows one
// level at a time — these tracks default to "All" and treat the level as an
// optional filter, and levels with no content are shown but disabled.

export type LevelChoice = Level | 'all';

/** Count how many items sit at each level, for the chip badges. */
export function levelCounts<T>(
  items: readonly T[],
  getLevel: (t: T) => Level,
): Record<Level, number> {
  const counts = Object.fromEntries(LEVELS.map((l) => [l, 0])) as Record<Level, number>;
  for (const it of items) counts[getLevel(it)]++;
  return counts;
}

const chip = (active: boolean) =>
  `flex items-center gap-2 rounded-lg border px-3 py-1.5 transition-colors ${
    active ? 'border-accent bg-accent/10' : 'border-rule-soft bg-paper hover:border-accent/50'
  }`;

export function LevelFilter({
  value,
  counts,
  onChange,
}: {
  value: LevelChoice;
  counts: Record<Level, number>;
  onChange: (v: LevelChoice) => void;
}) {
  const total = LEVELS.reduce((n, l) => n + counts[l], 0);
  return (
    <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter by level">
      <button
        role="tab"
        aria-selected={value === 'all'}
        onClick={() => onChange('all')}
        className={chip(value === 'all')}
      >
        <span className="text-[12px] font-medium text-ink">All</span>
        <span className="font-mono text-[11px] text-ink-mute">{total}</span>
      </button>
      {LEVELS.map((lvl) => {
        const count = counts[lvl];
        const active = value === lvl;
        return (
          <button
            key={lvl}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(lvl)}
            disabled={count === 0}
            className={`${chip(active)} disabled:cursor-not-allowed disabled:opacity-40`}
          >
            <LevelBadge level={lvl} />
            <span className="font-mono text-[11px] text-ink-mute">{count}</span>
          </button>
        );
      })}
    </div>
  );
}
