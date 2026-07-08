import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { GRAMMAR, VOCAB_SETS, SOUNDS, PHRASAL, IDIOMS, READINGS, WRITING } from '../content';
import { Icon } from './icons';

/** One searchable thing, with where to go when picked. */
interface Hit {
  key: string;
  type: string;
  title: string;
  subtitle: string;
  tab: string;
  lesson?: string;
}

/** Build a flat index of everything searchable, once. */
function buildIndex(): Hit[] {
  const hits: Hit[] = [];
  for (const u of GRAMMAR)
    for (const l of u.lessons)
      hits.push({
        key: `g:${l.id}`,
        type: 'Lesson',
        title: l.title,
        subtitle: `${l.level} grammar`,
        tab: 'grammar',
        lesson: l.id,
      });
  for (const s of VOCAB_SETS)
    for (const it of s.items)
      hits.push({
        key: `v:${it.id}`,
        type: 'Word',
        title: it.word,
        subtitle: it.meaning,
        tab: 'vocabulary',
      });
  for (const p of PHRASAL)
    hits.push({
      key: `p:${p.id}`,
      type: 'Phrasal verb',
      title: p.verb,
      subtitle: p.meaning,
      tab: 'phrasal',
    });
  for (const i of IDIOMS)
    hits.push({
      key: `i:${i.id}`,
      type: i.kind === 'idiom' ? 'Idiom' : 'Collocation',
      title: i.phrase,
      subtitle: i.meaning,
      tab: 'idioms',
    });
  for (const r of READINGS)
    hits.push({
      key: `r:${r.id}`,
      type: 'Reading',
      title: r.title,
      subtitle: `${r.level} · ${r.blurb}`,
      tab: 'reading',
    });
  for (const w of WRITING)
    hits.push({
      key: `w:${w.id}`,
      type: 'Writing',
      title: w.title,
      subtitle: `${w.level} prompt`,
      tab: 'writing',
    });
  for (const s of SOUNDS)
    hits.push({
      key: `s:${s.id}`,
      type: 'Sound',
      title: `${s.symbol} — ${s.name}`,
      subtitle: 'pronunciation',
      tab: 'pronunciation',
    });
  return hits;
}

/** Rank matches: title-prefix beats title-contains beats subtitle-contains. */
function search(index: Hit[], q: string): Hit[] {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  const scored: { hit: Hit; score: number }[] = [];
  for (const h of index) {
    const t = h.title.toLowerCase();
    const s = h.subtitle.toLowerCase();
    let score = 0;
    if (t.startsWith(needle)) score = 3;
    else if (t.includes(needle)) score = 2;
    else if (s.includes(needle)) score = 1;
    if (score) scored.push({ hit: h, score });
  }
  return scored
    .sort((a, b) => b.score - a.score || a.hit.title.length - b.hit.title.length)
    .slice(0, 40)
    .map((x) => x.hit);
}

/**
 * A ⌘K-style global search palette. Indexes every lesson, word, phrasal verb, idiom,
 * reading, writing prompt and sound; arrow-keys + enter to jump straight to it.
 */
export function GlobalSearch({
  onClose,
  onNavigate,
}: {
  onClose: () => void;
  onNavigate: (tab: string, lesson?: string) => void;
}) {
  const index = useMemo(() => buildIndex(), []);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const deferredQ = useDeferredValue(q);
  const results = useMemo(() => search(index, deferredQ), [index, deferredQ]);

  // Focus the field on mount (the parent mounts this only while search is open).
  useEffect(() => {
    const id = setTimeout(() => inputRef.current?.focus(), 20);
    return () => clearTimeout(id);
  }, []);

  function choose(h: Hit) {
    onNavigate(h.tab, h.lesson);
    onClose();
  }

  function onKey(e: React.KeyboardEvent) {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      choose(results[active]);
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="backdrop-in absolute inset-0 bg-black/50 backdrop-blur-[6px]"
      />
      <div className="pop-in relative z-10 w-full max-w-xl rounded-2xl border border-rule-soft bg-raised shadow-[var(--shadow-pop)]">
        <div className="flex items-center gap-3 border-b border-rule-soft px-4">
          <Icon name="search" className="h-[18px] w-[18px] text-ink-mute" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKey}
            placeholder="Search lessons, words, idioms…"
            style={{ boxShadow: 'none' }}
            className="w-full bg-transparent py-3.5 text-[15px] text-ink placeholder:text-ink-mute focus:outline-none"
          />
          <kbd className="hidden rounded border border-rule-soft px-1.5 py-0.5 font-mono text-[10px] text-ink-mute sm:block">
            esc
          </kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {q && results.length === 0 && (
            <p className="px-3 py-6 text-center text-[13px] text-ink-mute">No matches for “{q}”.</p>
          )}
          {!q && (
            <p className="px-3 py-6 text-center text-[13px] text-ink-mute">
              Type to search the whole course.
            </p>
          )}
          {results.map((h, i) => (
            <button
              key={h.key}
              onClick={() => choose(h)}
              onMouseMove={() => setActive(i)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                i === active ? 'bg-[var(--accent-tint)]' : ''
              }`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[14px] font-medium text-ink">{h.title}</span>
                <span className="block truncate text-[12px] text-ink-soft">{h.subtitle}</span>
              </span>
              <span className="shrink-0 rounded-full border border-rule-soft px-2 py-0.5 font-mono text-[10px] text-ink-mute">
                {h.type}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
