import type { Level } from '../types';

const LEVEL_CLASS: Record<Level, string> = {
  A1: 'bg-sage text-paper',
  A2: 'bg-success text-paper',
  B1: 'bg-accent text-paper',
  B2: 'bg-gold text-paper',
  C1: 'bg-accent2 text-paper',
  C2: 'bg-ink text-paper',
};

export function LevelBadge({ level, className = '' }: { level: Level; className?: string }) {
  return (
    <span
      className={`inline-block rounded-sm px-1.5 py-0.5 text-center font-mono text-[10px] font-medium tracking-wide ${LEVEL_CLASS[level]} ${className}`}
    >
      {level}
    </span>
  );
}
