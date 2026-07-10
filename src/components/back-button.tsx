import { type ReactNode } from 'react';

/** The single back control used across the app — a bordered pill with a chevron, so it
 *  reads as a real button rather than a faint text link. Pass the destination as children
 *  (no leading arrow — the chevron is built in). */
export function BackButton({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="press mb-4 inline-flex items-center gap-1.5 rounded-full border border-rule-soft bg-paper py-1.5 pr-4 pl-3 text-[13px] font-medium text-ink-soft shadow-[var(--shadow-sm)] transition-colors hover:border-accent/50 hover:text-ink"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      {children}
    </button>
  );
}
