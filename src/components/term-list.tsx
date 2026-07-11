import { useMemo, useState } from 'react';
import type { Level } from '../types';
import { IDIOMS, PHRASAL } from '../content';
import { useStore } from '../store';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { LevelFilter, levelCounts, type LevelChoice } from './level-filter';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Toggle } from './ui/toggle';
import { EmptyState } from './ui/empty-state';
import { Icon } from './icons';

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
  const [level, setLevel] = useState<LevelChoice>('all');

  const counts = useMemo(() => levelCounts(entries, (e) => e.level), [entries]);
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return entries.filter((e) => {
      if (level !== 'all' && e.level !== level) return false;
      if (!needle) return true;
      return e.term.toLowerCase().includes(needle) || e.meaning.toLowerCase().includes(needle);
    });
  }, [entries, q, level]);

  return (
    <div className="fade-in">
      <LevelFilter value={level} counts={counts} onChange={setLevel} />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search…"
        aria-label="Search"
        className="mb-4 w-full max-w-xs rounded-full border border-rule-soft bg-paper px-4 py-2 text-[13px] text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {filtered.map((e) => {
          const added = !!reviews[e.id];
          return (
            <Card key={e.id} className="p-4">
              <div className="flex items-center gap-2">
                <Speaker text={e.term} size="sm" />
                <span className="text-[16px] font-medium text-ink">{e.term}</span>
                <LevelBadge level={e.level} className="ml-auto" />
              </div>
              <p className="mt-1 text-[13px] text-ink-soft">{e.meaning}</p>
              <p className="mt-2 text-[13px] text-ink">“{e.example}”</p>
              <div className="mt-3 flex items-center gap-2">
                {e.badge && (
                  <Badge variant="outline" size="sm">
                    {e.badge}
                  </Badge>
                )}
                <Toggle
                  pressed={added}
                  disabled={added}
                  className="ml-auto"
                  onClick={() => grade(e.id, 'good')}
                >
                  {added ? (
                    <>
                      <Icon name="check" className="h-3 w-3" /> in review
                    </>
                  ) : (
                    '+ review'
                  )}
                </Toggle>
              </div>
            </Card>
          );
        })}
      </div>
      {filtered.length === 0 && <EmptyState>Nothing matches this level and search.</EmptyState>}
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
