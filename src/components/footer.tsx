import { GitHubIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-rule-soft pt-6 text-[13px] text-ink-mute">
      <span>Built by</span>
      <a
        href="https://github.com/BrielOtero/english"
        target="_blank"
        rel="noopener noreferrer"
        className="press inline-flex items-center gap-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
      >
        <GitHubIcon className="h-4 w-4" />
        BrielOtero
      </a>
    </footer>
  );
}
