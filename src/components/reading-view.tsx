import { useState } from 'react';
import { READINGS } from '../content';
import { useStore } from '../store';
import { playSequence } from '../lib/audio';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { ExerciseDeck } from './exercise';
import { Icon } from './icons';

export function ReadingView() {
  const rate = useStore((s) => s.voiceRate);
  const voiceURI = useStore((s) => s.voiceURI);
  const showSpanish = useStore((s) => s.showSpanish);
  const [openId, setOpenId] = useState<string | null>(null);

  const open = READINGS.find((r) => r.id === openId);

  if (open) {
    return (
      <div className="fade-in">
        <button
          onClick={() => setOpenId(null)}
          className="mb-4 font-mono text-[11px] tracking-wide text-ink-mute uppercase transition-colors hover:text-ink"
        >
          ← All texts
        </button>

        <div className="mb-4 flex items-center gap-3">
          <LevelBadge level={open.level} />
          <button
            onClick={() => playSequence(open.paragraphs, { rate, voiceURI })}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] tracking-wide text-paper uppercase transition active:scale-[0.97] hover:opacity-90"
          >
            <Icon name="play" className="h-2.5 w-2.5" /> Listen to all
          </button>
        </div>
        <h2 className="font-display text-[28px] leading-tight text-ink">{open.title}</h2>

        {open.glossary && open.glossary.length > 0 && showSpanish && (
          <div className="mt-4 flex flex-wrap gap-2 rounded-lg border border-rule-soft bg-bg p-3">
            {open.glossary.map((g) => (
              <span key={g.word} className="text-[12px] text-ink-soft">
                <span className="font-medium text-ink">{g.word}</span> = {g.es}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 space-y-3">
          {open.paragraphs.map((p, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <Speaker text={p} size="sm" />
              <p className="text-[15.5px] leading-relaxed text-ink">{p}</p>
            </div>
          ))}
        </div>

        {open.questions.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 kicker text-[13.5px] text-ink-soft">
              Comprehension check
            </p>
            <ExerciseDeck exercises={open.questions} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fade-in grid gap-3 sm:grid-cols-2">
      {READINGS.map((r) => (
        <button
          key={r.id}
          onClick={() => setOpenId(r.id)}
          className="group rounded-xl border border-rule-soft bg-paper p-5 text-left transition duration-150 hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[var(--shadow-md)] active:scale-[0.99]"
        >
          <div className="mb-2 flex items-center gap-2">
            <LevelBadge level={r.level} />
            <span className="font-mono text-[11px] text-ink-mute">
              {r.questions.length} questions
            </span>
          </div>
          <h3 className="text-[17px] font-medium text-ink group-hover:text-accent">{r.title}</h3>
          <p className="mt-1 text-[13px] text-ink-soft">{r.blurb}</p>
        </button>
      ))}
    </div>
  );
}
