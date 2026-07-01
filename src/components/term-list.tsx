import { useMemo, useState } from 'react';
import type { Level } from '../types';
import { IDIOMS, PHRASAL } from '../content';
import { useStore } from '../store';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';

interface TermEntry {
  /** SRS id, e.g. "phrasal:ph-get-up". */
  id: string;
  term: string;
  meaning: string;
  example: string;
  level: Level;
  badge?: string;
}

function TermList({ entries }: { entries: TermEntry[] }) {
  const reviews = useStore((s) => s.reviews);
  const grade = useStore((s) => s.grade);
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return entries;
    return entries.filter(
      (e) => e.term.toLowerCase().includes(needle) || e.meaning.toLowerCase().includes(needle),
    );
  }, [entries, q]);

  return (
    <div className="fade-in">
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search…"
        aria-label="Search"
        className="mb-4 w-full max-w-xs rounded-full border border-rule-soft bg-paper px-4 py-2 text-[13px] text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((e) => {
          const added = !!reviews[e.id];
          return (
            <div key={e.id} className="rounded-xl border border-rule-soft bg-paper p-4">
              <div className="flex items-center gap-2">
                <Speaker text={e.term} size="sm" />
                <span className="text-[16px] font-medium text-ink">{e.term}</span>
                <LevelBadge level={e.level} className="ml-auto" />
              </div>
              <p className="mt-1 text-[13px] text-ink-soft">{e.meaning}</p>
              <p className="mt-2 text-[13px] text-ink">“{e.example}”</p>
              <div className="mt-3 flex items-center gap-2">
                {e.badge && (
                  <span className="rounded-full border border-rule-soft px-2 py-0.5 font-mono text-[10px] text-ink-mute uppercase">
                    {e.badge}
                  </span>
                )}
                <button
                  onClick={() => grade(e.id, 'good')}
                  disabled={added}
                  className={`ml-auto rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide uppercase transition-colors ${
                    added
                      ? 'border-success bg-success/10 text-success'
                      : 'border-rule-soft text-ink-soft hover:border-accent hover:text-accent'
                  }`}
                >
                  {added ? '✓ in review' : '+ review'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PhrasalVerbs() {
  const entries: TermEntry[] = PHRASAL.map((pv) => ({
    id: `phrasal:${pv.id}`,
    term: pv.verb,
    meaning: pv.meaning,
    example: pv.example,
    level: pv.level,
    badge: pv.separable ? 'separable' : 'inseparable',
  }));
  return <TermList entries={entries} />;
}

export function Idioms() {
  const entries: TermEntry[] = IDIOMS.map((idiom) => ({
    id: `idiom:${idiom.id}`,
    term: idiom.phrase,
    meaning: idiom.meaning,
    example: idiom.example,
    level: idiom.level,
    badge: idiom.kind,
  }));
  return <TermList entries={entries} />;
}
