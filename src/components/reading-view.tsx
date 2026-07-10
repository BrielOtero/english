import { useMemo, useState } from 'react';
import { READINGS } from '../content';
import { useStore } from '../store';
import { playSequence } from '../lib/audio';
import { Speaker } from './speaker';
import { LevelBadge } from './level-badge';
import { LevelFilter, levelCounts, type LevelChoice } from './level-filter';
import { ExerciseDeck } from './exercise';
import { BackButton } from './back-button';
import { Icon } from './icons';

export function ReadingView() {
  const rate = useStore((s) => s.voiceRate);
  const voiceURI = useStore((s) => s.voiceURI);
  const [openId, setOpenId] = useState<string | null>(null);
  const [level, setLevel] = useState<LevelChoice>('all');

  const counts = useMemo(() => levelCounts(READINGS, (r) => r.level), []);
  const visible = level === 'all' ? READINGS : READINGS.filter((r) => r.level === level);

  const open = READINGS.find((r) => r.id === openId);

  if (open) {
    return (
      <div className="fade-in">
        <BackButton onClick={() => setOpenId(null)}>All texts</BackButton>

        <div className="mb-4 flex items-center gap-3">
          <LevelBadge level={open.level} />
          <button
            onClick={() => playSequence(open.paragraphs, { rate, voiceURI })}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 font-mono text-[10px] tracking-wide text-paper uppercase transition active:scale-[0.97] hover:opacity-90"
          >
            <Icon name="play" className="h-2.5 w-2.5" /> Listen to all
          </button>
        </div>
        <h2 className="font-display text-[clamp(26px,3.4vw,34px)] leading-tight text-ink">
          {open.title}
        </h2>

        <div className="mt-6 space-y-4">
          {open.paragraphs.map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <Speaker text={p} size="sm" />
              <p className="reading measure text-ink">{p}</p>
            </div>
          ))}
        </div>

        {open.questions.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 kicker text-[13.5px] text-ink-soft">Comprehension check</p>
            <ExerciseDeck exercises={open.questions} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fade-in">
      <LevelFilter value={level} counts={counts} onChange={setLevel} />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {visible.map((r) => (
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
    </div>
  );
}
