import { useMemo, useState } from 'react';
import type { ReviewCard } from '../content';
import type { VocabSet } from '../types';
import { VOCAB_SETS } from '../content';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { LevelFilter, levelCounts, type LevelChoice } from './level-filter';
import { BackButton } from './back-button';
import { FlashcardSession } from './flashcard-session';

function setToCards(set: VocabSet): ReviewCard[] {
  return set.items.map((item) => ({
    id: `vocab:${item.id}`,
    front: item.meaning,
    back: item.word,
    audio: item.word,
    note: `“${item.example}”`,
    tag: set.theme,
    level: item.level,
  }));
}

export function VocabBrowser() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [studying, setStudying] = useState(false);
  const [level, setLevel] = useState<LevelChoice>('all');

  const counts = useMemo(() => levelCounts(VOCAB_SETS, (s) => s.level), []);
  const visible = level === 'all' ? VOCAB_SETS : VOCAB_SETS.filter((s) => s.level === level);

  const openSet = VOCAB_SETS.find((s) => s.id === openId);

  if (openSet && studying) {
    return (
      <div className="fade-in">
        <BackButton onClick={() => setStudying(false)}>{openSet.title}</BackButton>
        <FlashcardSession cards={setToCards(openSet)} />
      </div>
    );
  }

  if (openSet) {
    return (
      <div className="fade-in">
        <BackButton onClick={() => setOpenId(null)}>All vocabulary</BackButton>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <LevelBadge level={openSet.level} />
              <span className="kicker text-[13.5px] text-ink-soft">
                {openSet.items.length} words
              </span>
            </div>
            <h2 className="font-display text-[28px] leading-tight text-ink">{openSet.title}</h2>
            <p className="mt-1 max-w-xl text-[14px] text-ink-soft">{openSet.blurb}</p>
          </div>
          <button
            onClick={() => setStudying(true)}
            className="shrink-0 rounded-full bg-accent px-4 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition active:scale-[0.97] hover:opacity-90"
          >
            Study set →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {openSet.items.map((item) => (
            <div key={item.id} className="rounded-xl border border-rule-soft bg-paper p-4">
              <div className="flex items-center gap-2">
                <Speaker text={item.word} size="sm" />
                <span className="text-[16px] font-medium text-ink">{item.word}</span>
                <span className="font-mono text-[11px] text-ink-mute">{item.pos}</span>
              </div>
              {item.ipa && <p className="mt-0.5 font-mono text-[11px] text-ink-mute">{item.ipa}</p>}
              <p className="mt-1 text-[13px] text-ink-soft">{item.meaning}</p>
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
    <div className="fade-in">
      <LevelFilter value={level} counts={counts} onChange={setLevel} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((set) => (
          <button
            key={set.id}
            onClick={() => {
              setOpenId(set.id);
              setStudying(false);
            }}
            className="group rounded-xl border border-rule-soft bg-paper p-5 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[var(--shadow-md)] active:scale-[0.99]"
          >
            <div className="mb-2 flex items-center gap-2">
              <LevelBadge level={set.level} />
              <span className="font-mono text-[11px] text-ink-mute">{set.items.length} words</span>
            </div>
            <h3 className="text-[17px] font-medium text-ink group-hover:text-accent">
              {set.title}
            </h3>
            <p className="mt-1 text-[13px] text-ink-soft">{set.blurb}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
