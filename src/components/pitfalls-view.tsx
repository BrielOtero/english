import { useMemo, useState } from 'react';
import type { PitfallCategory } from '../types';
import { PITFALLS } from '../content';
import { Markup } from './markup';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { EsTag } from './icons';

const CATEGORIES: { id: PitfallCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'false-friend', label: 'False friends' },
  { id: 'grammar', label: 'Grammar' },
  { id: 'preposition', label: 'Prepositions' },
  { id: 'word-order', label: 'Word order' },
  { id: 'pronunciation', label: 'Pronunciation' },
  { id: 'vocabulary', label: 'Vocabulary' },
];

export function PitfallsView() {
  const [cat, setCat] = useState<PitfallCategory | 'all'>('all');

  const list = useMemo(
    () => (cat === 'all' ? PITFALLS : PITFALLS.filter((p) => p.category === cat)),
    [cat],
  );

  return (
    <div className="fade-in">
      <div className="mb-5 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const active = c.id === cat;
          const count =
            c.id === 'all' ? PITFALLS.length : PITFALLS.filter((p) => p.category === c.id).length;
          if (count === 0 && c.id !== 'all') return null;
          return (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full border px-3 py-1.5 text-[12px] transition-colors ${
                active
                  ? 'border-accent bg-accent/10 text-ink'
                  : 'border-rule-soft bg-paper text-ink-soft hover:border-accent/50'
              }`}
            >
              {c.label} <span className="font-mono text-[10px] text-ink-mute">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((p) => (
          <div key={p.id} className="rounded-xl border border-rule-soft bg-paper p-4">
            <div className="mb-2 flex items-center gap-2">
              <LevelBadge level={p.level} />
              <h3 className="text-[15px] font-medium text-ink">{p.title}</h3>
            </div>
            <p className="text-[13.5px] text-ink-soft">
              <span className="mr-1.5 font-mono text-[11px] text-danger">✗</span>
              <span className="line-through decoration-danger/50">{p.wrong}</span>
            </p>
            <p className="mt-1 flex items-center gap-2 text-[13.5px] text-ink">
              <span className="font-mono text-[11px] text-success">✓</span>
              {p.right}
              <Speaker text={p.right} size="sm" />
            </p>
            <p className="mt-2 text-[12.5px] text-ink-soft">
              <Markup text={p.explain} />
            </p>
            {p.esNote && (
              <p className="mt-1 text-[12.5px] text-accent">
                <EsTag />
                <Markup text={p.esNote} />
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
