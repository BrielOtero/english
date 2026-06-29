import { useState } from 'react';
import { WRITING } from '../content';
import { useStore } from '../store';
import { PhraseLine } from './phrase-line';
import { LevelBadge } from './level-badge';

export function WritingView() {
  const showSpanish = useStore((s) => s.showSpanish);
  const [openId, setOpenId] = useState<string | null>(null);
  const [text, setText] = useState('');
  const [showModel, setShowModel] = useState(false);

  const open = WRITING.find((w) => w.id === openId);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  if (open) {
    return (
      <div className="fade-in">
        <button
          onClick={() => {
            setOpenId(null);
            setText('');
            setShowModel(false);
          }}
          className="mb-4 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
        >
          ← All prompts
        </button>

        <div className="mb-2 flex items-center gap-2">
          <LevelBadge level={open.level} />
          {open.minWords && (
            <span className="font-mono text-[11px] text-ink-mute">{open.minWords}+ words</span>
          )}
        </div>
        <h2 className="font-display text-[26px] leading-tight text-ink">{open.title}</h2>
        <p className="mt-2 max-w-2xl text-[15px] text-ink">{open.prompt}</p>
        {showSpanish && open.es && (
          <p className="mt-1 text-[13px] text-ink-soft italic">{open.es}</p>
        )}

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={9}
              placeholder="Write your answer here…"
              className="w-full rounded-xl border border-rule-soft bg-paper p-4 text-[15px] leading-relaxed text-ink focus:border-accent focus:outline-none"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="font-mono text-[11px] text-ink-mute">{words} words</span>
              <button
                onClick={() => setShowModel((v) => !v)}
                className="rounded-full border border-rule-soft bg-bg px-4 py-1.5 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
              >
                {showModel ? 'Hide model answer' : 'Show model answer'}
              </button>
            </div>
            {showModel && (
              <div className="mt-3 rounded-xl border border-accent/40 bg-accent/5 p-4">
                <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-accent uppercase">
                  Model answer
                </p>
                <p className="text-[14px] leading-relaxed text-ink">{open.model}</p>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
                Tips
              </p>
              <ul className="space-y-1.5">
                {open.tips.map((t, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-ink-soft">
                    <span className="text-accent">•</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
                Useful phrases
              </p>
              <div className="space-y-2 rounded-lg border border-rule-soft bg-paper p-3">
                {open.usefulPhrases.map((p, i) => (
                  <PhraseLine key={i} phrase={p} size="sm" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in grid gap-3 sm:grid-cols-2">
      {WRITING.map((w) => (
        <button
          key={w.id}
          onClick={() => {
            setOpenId(w.id);
            setText('');
            setShowModel(false);
          }}
          className="group rounded-xl border border-rule-soft bg-paper p-5 text-left transition-colors hover:border-accent/50"
        >
          <div className="mb-2">
            <LevelBadge level={w.level} />
          </div>
          <h3 className="text-[17px] font-medium text-ink group-hover:text-accent">{w.title}</h3>
          <p className="mt-1 text-[13px] text-ink-soft">{w.prompt}</p>
        </button>
      ))}
    </div>
  );
}
