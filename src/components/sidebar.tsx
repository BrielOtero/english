import type { Track } from '../content';

function Group({
  label,
  tracks,
  activeId,
  onSelect,
}: {
  label: string;
  tracks: Track[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="mb-5">
      <p className="mb-2 px-2 font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
        {label}
      </p>
      <ul className="space-y-0.5">
        {tracks.map((t) => {
          const active = t.id === activeId;
          return (
            <li key={t.id}>
              <button
                onClick={() => onSelect(t.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors ${
                  active ? 'bg-accent/12 text-ink' : 'text-ink-soft hover:bg-bg2 hover:text-ink'
                }`}
              >
                <span aria-hidden="true" className="text-[15px]">
                  {t.icon}
                </span>
                <span className={`text-[13.5px] ${active ? 'font-medium' : ''}`}>{t.title}</span>
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

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
  return (
    <nav className="lg:sticky lg:top-6 lg:self-start" aria-label="Sections">
      <Group label="Learn" tracks={core} activeId={activeId} onSelect={onSelect} />
      <Group label="Practice" tracks={practice} activeId={activeId} onSelect={onSelect} />
    </nav>
  );
}
