import type { Track } from '@/content';
import { Icon } from '@/components/icons';

function Row({
  track,
  n,
  active,
  onSelect,
}: {
  track: Track;
  n: number;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  return (
    <li>
      <button
        onClick={() => onSelect(track.id)}
        aria-current={active ? 'page' : undefined}
        className={`group relative flex w-full items-center gap-3 rounded-lg py-2 pr-2.5 pl-3 text-left transition-colors ${
          active ? 'bg-[var(--accent-tint)] text-ink' : 'text-ink-soft hover:bg-bg2 hover:text-ink'
        }`}
      >
        {active && (
          <span className="absolute top-1.5 bottom-1.5 left-0 w-[2px] rounded-full bg-accent" />
        )}
        <Icon
          name={track.icon}
          className={`h-[18px] w-[18px] ${active ? 'text-accent' : 'text-ink-mute group-hover:text-ink-soft'}`}
        />
        <span className={`text-[13.5px] ${active ? 'font-semibold' : 'font-medium'}`}>
          {track.title}
        </span>
        <span className="ml-auto font-mono text-[10px] text-ink-mute tabular-nums">
          {String(n).padStart(2, '0')}
        </span>
      </button>
    </li>
  );
}

function Group({
  label,
  tracks,
  indexOf,
  activeId,
  onSelect,
}: {
  label: string;
  tracks: Track[];
  indexOf: (id: string) => number;
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mb-5">
      <p className="kicker mb-1.5 px-3 text-[14px] text-ink-mute">{label}</p>
      <ul className="space-y-0.5">
        {tracks.map((t) => (
          <Row
            key={t.id}
            track={t}
            n={indexOf(t.id)}
            active={t.id === activeId}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
}

/** Desktop "Contents" rail (a table of contents, not a generic sidebar). */
export function Sidebar({
  tracks,
  activeId,
  onSelect,
}: {
  tracks: Track[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const core = tracks.filter((t) => t.section === 'core');
  const practice = tracks.filter((t) => t.section === 'practice');
  const indexOf = (id: string) => tracks.findIndex((t) => t.id === id) + 1;
  return (
    <nav className="hidden lg:sticky lg:top-[72px] lg:block lg:self-start" aria-label="Sections">
      <Group
        label="Learn"
        tracks={core}
        indexOf={indexOf}
        activeId={activeId}
        onSelect={onSelect}
      />
      <Group
        label="Practice"
        tracks={practice}
        indexOf={indexOf}
        activeId={activeId}
        onSelect={onSelect}
      />
    </nav>
  );
}
