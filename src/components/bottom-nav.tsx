import { useMemo, useState } from 'react';
import { TRACKS, buildReviewDeck, type Track } from '@/content';
import { useStore, isDue } from '@/store';
import { Icon, type IconName } from '@/components/icons';
import { AppModal } from '@/components/app-modal';

const HUBS: { id: string; icon: IconName; label: string }[] = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'grammar', icon: 'book', label: 'Learn' },
  { id: 'vocabulary', icon: 'layers', label: 'Words' },
];
const MORE_IDS = [
  'roadmap',
  'placement',
  'drill',
  'pronunciation',
  'reading',
  'writing',
  'phrasal',
  'idioms',
];

/** Mobile-only native-app bottom bar: 5 thumb-reachable hubs with a raised Review. */
export function BottomNav({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreTracks = MORE_IDS.map((id) => TRACKS.find((t) => t.id === id)).filter(
    (t): t is Track => !!t,
  );
  const go = (id: string) => {
    onSelect(id);
    setMoreOpen(false);
  };

  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(10px,env(safe-area-inset-bottom))] lg:hidden">
        <div className="mx-auto flex max-w-md items-end justify-around rounded-[26px] border border-rule-soft bg-paper/85 px-1.5 py-2 shadow-[var(--shadow-pop)] backdrop-blur-xl">
          {HUBS.slice(0, 2).map((h) => (
            <Tab
              key={h.id}
              icon={h.icon}
              label={h.label}
              active={activeId === h.id}
              onClick={() => go(h.id)}
            />
          ))}
          <RaisedReview active={activeId === 'review'} onClick={() => go('review')} />
          <Tab
            icon={HUBS[2].icon}
            label={HUBS[2].label}
            active={activeId === HUBS[2].id}
            onClick={() => go(HUBS[2].id)}
          />
          <Tab
            icon="grid"
            label="More"
            active={MORE_IDS.includes(activeId)}
            onClick={() => setMoreOpen(true)}
          />
        </div>
      </nav>

      <AppModal open={moreOpen} onClose={() => setMoreOpen(false)} label="More sections">
        <div className="px-5 pt-4 pb-6">
          <p className="kicker mb-3 text-[16px] text-ink-soft">More to explore</p>
          <div className="grid grid-cols-2 gap-2.5">
            {moreTracks.map((t) => (
              <button
                key={t.id}
                onClick={() => go(t.id)}
                className={`press flex items-center gap-3 rounded-2xl border p-3.5 text-left ${
                  activeId === t.id
                    ? 'border-accent bg-[var(--accent-tint)]'
                    : 'border-rule-soft bg-paper'
                }`}
              >
                <Icon name={t.icon} className="h-5 w-5 text-accent" />
                <span className="text-[13.5px] font-medium text-ink">{t.title}</span>
              </button>
            ))}
          </div>
        </div>
      </AppModal>
    </>
  );
}

function Tab({
  icon,
  label,
  active,
  onClick,
}: {
  icon: IconName;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className="press flex w-14 flex-col items-center gap-1 py-1"
    >
      <Icon
        name={icon}
        className={`h-[22px] w-[22px] ${active ? 'text-accent' : 'text-ink-mute'}`}
      />
      <span className={`text-[10px] font-medium ${active ? 'text-accent' : 'text-ink-mute'}`}>
        {label}
      </span>
    </button>
  );
}

function RaisedReview({ active, onClick }: { active: boolean; onClick: () => void }) {
  const reviews = useStore((s) => s.reviews);
  const now = useStore((s) => s.now);
  const due = useMemo(
    () => buildReviewDeck().filter((c) => isDue(reviews[c.id], now)).length,
    [reviews, now],
  );
  return (
    <button
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className="press flex w-14 flex-col items-center gap-1 py-1"
    >
      <span
        className={`relative -mt-7 grid h-12 w-12 place-items-center rounded-full bg-accent text-on-accent shadow-[var(--shadow-pop)] ${
          active ? 'ring-2 ring-gold' : ''
        }`}
      >
        <Icon name="refresh" className="h-6 w-6" />
        {due > 0 && (
          <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gold px-1 font-mono text-[9px] text-on-accent tabular-nums">
            {due}
          </span>
        )}
      </span>
      <span className={`text-[10px] font-medium ${active ? 'text-accent' : 'text-ink-mute'}`}>
        Review
      </span>
    </button>
  );
}
