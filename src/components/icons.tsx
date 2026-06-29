import type { ReactNode } from 'react';

// A small set of line icons (Lucide-style), drawn with currentColor so they follow
// the theme tokens. Used for navigation and UI affordances instead of emoji.

export type IconName =
  | 'route'
  | 'book'
  | 'layers'
  | 'volume'
  | 'book-open'
  | 'pencil'
  | 'refresh'
  | 'alert'
  | 'link'
  | 'chat'
  | 'download'
  | 'check'
  | 'play'
  | 'sun'
  | 'moon';

const PATHS: Record<IconName, ReactNode> = {
  route: (
    <>
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="5" r="2.5" />
      <path d="M8.5 19H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h3.5" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </>
  ),
  volume: (
    <>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a10 10 0 0 1 0 14" />
    </>
  ),
  'book-open': (
    <>
      <path d="M12 7v13" />
      <path d="M2.5 5H8a3 3 0 0 1 3 3v11a2.5 2.5 0 0 0-2.5-2.5H2.5Z" />
      <path d="M21.5 5H16a3 3 0 0 0-3 3v11a2.5 2.5 0 0 1 2.5-2.5h6Z" />
    </>
  ),
  pencil: (
    <>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      <path d="m14 5 3 3" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 0 0-15.5-6.3L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 15.5 6.3L21 16" />
      <path d="M21 21v-5h-5" />
    </>
  ),
  alert: (
    <>
      <path d="m10.3 4 -8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3l-8-14a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
    </>
  ),
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  play: <path d="M7 5v14l11-7z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M12 3a6.5 6.5 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
};

export function Icon({ name, className = 'h-4 w-4' }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/** A small "ES" tag used to flag a Spanish-language note (replaces the flag emoji). */
export function EsTag({ className = '' }: { className?: string }) {
  return (
    <span
      className={`mr-1.5 inline-block rounded-sm bg-accent/15 px-1 py-0.5 align-middle font-mono text-[9px] leading-none font-medium tracking-wide text-accent ${className}`}
    >
      ES
    </span>
  );
}
