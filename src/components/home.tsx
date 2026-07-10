import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TRACKS, buildReviewDeck, type Track } from '../content';
import { useStore, isLearned, isDue } from '../store';
import { totalStars, MAX_STARS } from '../lib/stars';
import { Icon } from './icons';
import { LevelBadge } from './level-badge';

/**
 * The front door. Two ways in — the game Roadmap or the classic sections — plus a
 * progress snapshot and an attractive launcher grid to jump straight to any section.
 */
export function Home({ onSelect }: { onSelect: (id: string) => void }) {
  const completed = useStore((s) => s.completed);
  const reviews = useStore((s) => s.reviews);
  const now = useStore((s) => s.now);
  const placementLevel = useStore((s) => s.placementLevel);
  const bossCleared = useStore((s) => s.bossCleared);
  const bonusCleared = useStore((s) => s.bonusCleared);
  const miniCleared = useStore((s) => s.miniCleared);

  const stars = totalStars({ completed, miniCleared, bonusCleared, bossCleared });
  const deck = useMemo(() => buildReviewDeck(), []);
  const learned = deck.filter((c) => isLearned(reviews[c.id])).length;
  const due = deck.filter((c) => isDue(reviews[c.id], now)).length;

  const sections = TRACKS.filter((t) => t.id !== 'home');
  const core = sections.filter((t) => t.section === 'core');
  const practice = sections.filter((t) => t.section === 'practice');

  const stats = [
    { v: `${stars}/${MAX_STARS}`, k: 'stars earned' },
    { v: `${learned}`, k: 'words learned' },
    { v: placementLevel ?? '—', k: 'your level' },
  ];

  return (
    <div className="fade-in">
      <div className="rounded-3xl border border-rule-soft bg-paper p-7 sm:p-9">
        <div>
          <p className="kicker text-[15px] text-ink-soft">Zero to native</p>
          <h1 className="font-display mt-1 text-[clamp(30px,6vw,52px)] leading-[1.03] text-ink">
            Learn English, your way.
          </h1>
          <p className="reading mt-3 max-w-xl text-ink-soft">
            Two ways in: climb the game <span className="font-medium text-ink">Roadmap</span>, or
            browse the classic sections below.{' '}
            {placementLevel ? (
              <>
                You're around <LevelBadge level={placementLevel} className="align-middle" />.
              </>
            ) : (
              'Take the Trial to find your level.'
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => onSelect('roadmap')}
              className="press rounded-full bg-accent px-6 py-3 font-mono text-[12px] tracking-wide text-on-accent uppercase transition hover:opacity-90"
            >
              Open the Roadmap →
            </button>
            <button
              onClick={() => onSelect(placementLevel ? 'grammar' : 'placement')}
              className="rounded-full border border-rule-soft bg-bg px-6 py-3 font-mono text-[12px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
            >
              {placementLevel ? 'Browse lessons' : 'Take the Trial'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.k} className="rounded-2xl border border-rule-soft bg-bg p-4 text-center">
            <p className="font-display text-[clamp(20px,4vw,30px)] leading-none text-ink">{s.v}</p>
            <p className="mt-1 text-[11px] text-ink-mute">{s.k}</p>
          </div>
        ))}
      </div>

      <SectionGrid label="Learn" tracks={core} due={due} onSelect={onSelect} />
      <SectionGrid label="Practice" tracks={practice} due={due} onSelect={onSelect} />
    </div>
  );
}

function SectionGrid({
  label,
  tracks,
  due,
  onSelect,
}: {
  label: string;
  tracks: Track[];
  due: number;
  onSelect: (id: string) => void;
}) {
  return (
    <>
      <p className="kicker mt-8 mb-3 text-[14px] text-ink-soft">{label}</p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((t) => (
          <motion.button
            key={t.id}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(t.id)}
            className="group relative flex items-center gap-4 rounded-2xl border border-rule-soft bg-paper p-4 text-left transition-shadow hover:border-accent/60 hover:shadow-[var(--shadow-md)]"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--accent-tint)] text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
              <Icon name={t.icon} className="h-[22px] w-[22px]" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="text-[16px] font-medium text-ink group-hover:text-accent">
                  {t.title}
                </span>
                {t.id === 'review' && due > 0 && (
                  <span className="rounded-full bg-gold/15 px-2 py-0.5 font-mono text-[10px] text-gold">
                    {due} due
                  </span>
                )}
              </span>
              <span className="mt-0.5 block truncate text-[12.5px] text-ink-soft">{t.blurb}</span>
            </span>
            <span className="font-mono text-[15px] text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
              →
            </span>
          </motion.button>
        ))}
      </div>
    </>
  );
}
