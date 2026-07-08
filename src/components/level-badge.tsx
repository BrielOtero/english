import type { Level } from '../types';

// A botanical "growth" ramp — seedling green through to dark heartwood — so the six
// CEFR bands stay distinguishable even though the whole palette leans green.
const LEVEL_CLASS: Record<Level, string> = {
  A1: 'bg-lvl-a1 text-paper',
  A2: 'bg-lvl-a2 text-paper',
  B1: 'bg-lvl-b1 text-paper',
  B2: 'bg-lvl-b2 text-paper',
  C1: 'bg-lvl-c1 text-paper',
  C2: 'bg-lvl-c2 text-paper',
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
