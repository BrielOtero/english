import { MAX_STARS } from '../lib/stars';
import type { Theme } from '../store';
import { Button } from './ui/button';
import { Icon, Wordmark } from './icons';
import { StarIcon } from './map-art';
import { VoiceSettings } from './voice-settings';
import { Account } from './account';

export function Header({
  trackTitle,
  stars,
  theme,
  onHome,
  onSearch,
  onToggleTheme,
}: {
  trackTitle: string;
  stars: number;
  theme: Theme;
  onHome: () => void;
  onSearch: () => void;
  onToggleTheme: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-rule-soft bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 sm:px-8">
        <button onClick={onHome} className="leading-none" aria-label="Fluent — home">
          <Wordmark className="text-[19px] text-ink" />
        </button>
        <span className="kicker hidden text-[15px] text-ink-soft md:inline">
          <span className="mr-2 text-ink-mute">/</span>
          {trackTitle}
        </span>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="soft"
            size="icon"
            onClick={onSearch}
            title="Search (⌘K)"
            aria-label="Search"
          >
            <Icon name="search" className="h-4 w-4" />
          </Button>
          <span
            className="flex items-center gap-1 rounded-full border border-rule-soft bg-bg px-2 py-1 sm:gap-1.5 sm:px-3 sm:py-1.5"
            title="Stars earned"
          >
            <StarIcon className="h-3.5 w-3.5 text-gold" />
            <span className="font-mono text-[11px] text-ink-soft tabular-nums">
              {stars}/{MAX_STARS}
            </span>
          </span>
          <VoiceSettings />
          <Button
            variant="soft"
            size="icon"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <Icon name={theme === 'light' ? 'moon' : 'sun'} className="h-4 w-4" />
          </Button>
          <Account />
        </div>
      </div>
    </header>
  );
}
