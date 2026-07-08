// Bespoke, hand-built SVG artwork for the world map — no emoji, no external assets.
// Everything is drawn with the design tokens (var(--accent), var(--sage), …) so it
// themes automatically in light/dark, scales crisply at any size, animates, and stays
// fully offline and open-source-clean. Pass a Tailwind size class via `className`.

type Art = { className?: string };

/** The player mascot — a friendly sprout adventurer. */
export function Mascot({ className = 'h-12 w-12' }: Art) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M32 25C28 16 20 14 15 15c0 8 8 12 17 10z" fill="var(--accent)" />
      <path d="M32 25c4-9 12-11 17-10 0 8-8 12-17 10z" fill="var(--accent-strong)" />
      <path d="M32 27V18" stroke="var(--accent-strong)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="42" r="15" fill="var(--sage)" />
      <ellipse cx="32" cy="46" rx="9" ry="7" fill="var(--paper)" opacity="0.22" />
      <circle cx="23" cy="45" r="2.3" fill="var(--accent-2)" opacity="0.55" />
      <circle cx="41" cy="45" r="2.3" fill="var(--accent-2)" opacity="0.55" />
      <circle cx="27" cy="41" r="2.6" fill="var(--ink)" />
      <circle cx="37" cy="41" r="2.6" fill="var(--ink)" />
      <circle cx="28" cy="40" r="0.9" fill="var(--paper)" />
      <circle cx="38" cy="40" r="0.9" fill="var(--paper)" />
      <path
        d="M28 46 q4 4 8 0"
        stroke="var(--ink)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A numbered shield crest for a world header (uses `currentColor` for its tone). */
export function Crest({ n, className = 'h-12 w-12' }: Art & { n: number }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path d="M24 4 42 10 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V10 Z" fill="currentColor" />
      <path
        d="M24 4 42 10 V24 C42 34 34 42 24 44 C14 42 6 34 6 24 V10 Z"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="1.4"
        opacity="0.45"
      />
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontSize="17"
        fontWeight="700"
        fontFamily="var(--font-display)"
        fill="var(--paper)"
      >
        {n}
      </text>
    </svg>
  );
}

/** Boss node — a little castle with a pennant. */
export function Castle({ className = 'h-8 w-8' }: Art) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g fill="var(--ink-soft)">
        <rect x="13" y="30" width="11" height="23" rx="1.5" />
        <rect x="40" y="30" width="11" height="23" rx="1.5" />
        <rect x="23" y="24" width="18" height="29" rx="1.5" />
        <rect x="13" y="27" width="3" height="4" />
        <rect x="18" y="27" width="3" height="4" />
        <rect x="21.5" y="27" width="3" height="4" />
        <rect x="40" y="27" width="3" height="4" />
        <rect x="45" y="27" width="3" height="4" />
        <rect x="48.5" y="27" width="3" height="4" />
      </g>
      <path d="M28 53 v-7 a4 4 0 0 1 8 0 v7 z" fill="var(--ink)" />
      <rect x="16.5" y="36" width="4" height="6" rx="1" fill="var(--gold)" />
      <rect x="43.5" y="36" width="4" height="6" rx="1" fill="var(--gold)" />
      <line x1="32" y1="24" x2="32" y2="12" stroke="var(--ink)" strokeWidth="2" />
      <path d="M32 13 l9 3 -9 3 z" fill="var(--danger)" />
    </svg>
  );
}

/** Bonus/special node — a treasure chest. */
export function Chest({ className = 'h-7 w-7' }: Art) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="12" y="30" width="40" height="22" rx="3" fill="var(--accent-2)" />
      <path d="M12 31 a20 13 0 0 1 40 0 z" fill="var(--gold)" />
      <rect x="10" y="28" width="44" height="6" rx="3" fill="var(--gold)" />
      <rect x="29" y="28" width="6" height="24" fill="var(--accent-strong)" opacity="0.3" />
      <circle cx="32" cy="39" r="3.2" fill="var(--paper)" />
      <rect x="30.5" y="39" width="3" height="5" rx="1.5" fill="var(--paper)" />
      <path
        d="M48 18 l1.4 3.6 3.6 1.4 -3.6 1.4 -1.4 3.6 -1.4 -3.6 -3.6 -1.4 3.6 -1.4 z"
        fill="var(--gold)"
      />
    </svg>
  );
}

/** Mini-boss node — a friendly slime creature. */
export function Slime({ className = 'h-7 w-7' }: Art) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M14 48 C14 32 22 24 32 24 s18 8 18 24 c-12 5 -24 5 -36 0 z" fill="var(--danger)" />
      <circle cx="25" cy="40" r="4" fill="var(--paper)" />
      <circle cx="39" cy="40" r="4" fill="var(--paper)" />
      <circle cx="26" cy="41" r="2" fill="var(--ink)" />
      <circle cx="40" cy="41" r="2" fill="var(--ink)" />
      <path
        d="M28 47 q4 3 8 0"
        stroke="var(--ink)"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Lesson node (unvisited) — a leaf in the world's tone (`currentColor`). */
export function Leaf({ className = 'h-6 w-6' }: Art) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path d="M5 19 C4 11 9 5 19 4 c1 10 -5 15 -14 15 z" fill="currentColor" />
      <path
        d="M12 12 c2 -2 4 -3 6 -3.5"
        stroke="var(--paper)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Lesson node (cleared) — a check. */
export function Check({ className = 'h-6 w-6' }: Art) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      aria-hidden
    >
      <path d="m6 12 4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A five-point star (fills with `currentColor`). */
export function StarIcon({ className = 'h-4 w-4' }: Art) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2.2 l2.95 5.98 6.6 .96 -4.77 4.65 1.13 6.57 L12 17.98 6.09 20.4 l1.13 -6.57 L2.45 9.14 l6.6 -.96 z" />
    </svg>
  );
}

/** Padlock for locked worlds. */
export function Padlock({ className = 'h-6 w-6' }: Art) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 10V8a5 5 0 0 1 10 0v2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zm2 0h6V8a3 3 0 0 0-6 0z" />
    </svg>
  );
}
