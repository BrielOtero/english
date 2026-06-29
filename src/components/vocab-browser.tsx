import { useState } from 'react';
import type { ReviewCard } from '../content';
import type { VocabSet } from '../types';
import { VOCAB_SETS } from '../content';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { FlashcardSession } from './flashcard-session';
import { useStore } from '../store';

function setToCards(set: VocabSet): ReviewCard[] {
  return set.items.map((item) => ({
    id: `vocab:${item.id}`,
    front: item.es,
    back: item.word,
    audio: item.word,
    note: `${item.meaning} — “${item.example}”`,
    tag: set.theme,
    level: item.level,
  }));
}

export function VocabBrowser() {
  const showSpanish = useStore((s) => s.showSpanish);
  const [openId, setOpenId] = useState<string | null>(null);
  const [studying, setStudying] = useState(false);

  const openSet = VOCAB_SETS.find((s) => s.id === openId);

  if (openSet && studying) {
    return (
      <div className="fade-in">
        <button
          onClick={() => setStudying(false)}
          className="mb-4 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
        >
          ← {openSet.title}
        </button>
        <FlashcardSession cards={setToCards(openSet)} />
      </div>
    );
  }

  if (openSet) {
    return (
      <div className="fade-in">
        <button
          onClick={() => setOpenId(null)}
          className="mb-4 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
        >
          ← All vocabulary
        </button>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <LevelBadge level={openSet.level} />
              <span className="font-mono text-[11px] tracking-[0.15em] text-ink-mute uppercase">
                {openSet.items.length} words
              </span>
            </div>
            <h2 className="font-display text-[28px] leading-tight text-ink">{openSet.title}</h2>
            <p className="mt-1 max-w-xl text-[14px] text-ink-soft">{openSet.blurb}</p>
          </div>
          <button
            onClick={() => setStudying(true)}
            className="shrink-0 rounded-full bg-accent px-4 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90"
          >
            Study set →
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {openSet.items.map((item) => (
            <div key={item.id} className="rounded-xl border border-rule-soft bg-paper p-4">
              <div className="flex items-center gap-2">
                <Speaker text={item.word} size="sm" />
                <span className="text-[16px] font-medium text-ink">{item.word}</span>
                <span className="font-mono text-[11px] text-ink-mute">{item.pos}</span>
              </div>
              {item.ipa && <p className="mt-0.5 font-mono text-[11px] text-ink-mute">{item.ipa}</p>}
              <p className="mt-1 text-[13px] text-ink-soft">{item.meaning}</p>
              {showSpanish && <p className="text-[13px] text-accent italic">{item.es}</p>}
              <p className="mt-2 text-[13px] text-ink">“{item.example}”</p>
              {item.collocations && item.collocations.length > 0 && (
                <p className="mt-2 font-mono text-[11px] text-ink-mute">
                  + {item.collocations.join(' · ')}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in grid gap-3 sm:grid-cols-2">
      {VOCAB_SETS.map((set) => (
        <button
          key={set.id}
          onClick={() => {
            setOpenId(set.id);
            setStudying(false);
          }}
          className="group rounded-xl border border-rule-soft bg-paper p-5 text-left transition-colors hover:border-accent/50"
        >
          <div className="mb-2 flex items-center gap-2">
            <LevelBadge level={set.level} />
            <span className="font-mono text-[11px] text-ink-mute">{set.items.length} words</span>
          </div>
          <h3 className="text-[17px] font-medium text-ink group-hover:text-accent">{set.title}</h3>
          <p className="mt-1 text-[13px] text-ink-soft">{set.blurb}</p>
        </button>
      ))}
    </div>
  );
}
