import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { TRACKS } from './content';
import { totalStars, MAX_STARS } from './lib/stars';
import { StarIcon } from './components/map-art';
import { Icon, type IconName } from './components/icons';
import { VoiceSettings } from './components/voice-settings';
import { Account } from './components/account';
import { GlobalSearch } from './components/global-search';
import { setPreferredVoice } from './lib/speech';
import { setMusicEnabled, setFxEnabled, setMusicVolume, setFxVolume } from './lib/sound';
import { useStore } from './store';
import { Sidebar } from './components/sidebar';
import { BottomNav } from './components/bottom-nav';

const TRACK_IDS = new Set(TRACKS.map((t) => t.id));

/** Route path for a tab id — home lives at "/", everything else at "/<id>". */
export function tabPath(id: string): string {
  return id === 'home' ? '/' : `/${id}`;
}

/** Which tab the current path belongs to (first segment; defaults to home). */
function pathToTab(pathname: string): string {
  const seg = pathname.replace(/^\/+/, '').split('/')[0];
  return seg && TRACK_IDS.has(seg) ? seg : 'home';
}

function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="font-display text-[19px] leading-none text-ink italic"
      aria-label="Fluent — home"
    >
      <span className="text-accent">/</span>ˈfluː.ənt<span className="text-accent">/</span>
    </button>
  );
}

function GitHubMark({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function TrackHead({ icon, title, blurb }: { icon: IconName; title: string; blurb: string }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--accent-tint)] text-accent">
          <Icon name={icon} className="h-[18px] w-[18px]" />
        </span>
        <h1 className="font-display text-[clamp(26px,4vw,38px)] leading-none text-ink">{title}</h1>
      </div>
      <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">{blurb}</p>
    </div>
  );
}

/** The app shell: masthead, sidebar, bottom nav, and the routed page in the main column.
 *  Navigation goes through the router now, so browser back/forward and deep links work. */
export function Layout() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const activeId = pathToTab(pathname);
  const track = TRACKS.find((t) => t.id === activeId) ?? TRACKS[0];

  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const voiceURI = useStore((s) => s.voiceURI);
  const musicOn = useStore((s) => s.musicOn);
  const fxOn = useStore((s) => s.fxOn);
  const musicVol = useStore((s) => s.musicVol);
  const fxVol = useStore((s) => s.fxVol);
  const completed = useStore((s) => s.completed);
  const bossCleared = useStore((s) => s.bossCleared);
  const bonusCleared = useStore((s) => s.bonusCleared);
  const miniCleared = useStore((s) => s.miniCleared);

  const [searchOpen, setSearchOpen] = useState(false);

  // ⌘K / Ctrl+K opens global search.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#10140e' : '#eae6da');
  }, [theme]);

  useEffect(() => {
    setPreferredVoice(voiceURI);
  }, [voiceURI]);

  useEffect(() => {
    setMusicEnabled(musicOn);
    setFxEnabled(fxOn);
    setMusicVolume(musicVol);
    setFxVolume(fxVol);
  }, [musicOn, fxOn, musicVol, fxVol]);

  // `to` is a dynamic tab path; cast to a known literal to satisfy the router's strict
  // typing — the actual string is validated at runtime.
  const selectTab = (id: string) => {
    void navigate({ to: tabPath(id) as '/' });
    window.scrollTo({ top: 0 });
  };
  const goTo = (tab: string, lessonId?: string) => {
    void navigate({ to: tabPath(tab) as '/', search: lessonId ? { lesson: lessonId } : {} });
    window.scrollTo({ top: 0 });
  };

  const stars = totalStars({ completed, miniCleared, bonusCleared, bossCleared });

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-bg text-ink">
      <div className="grain" />

      {/* Masthead */}
      <header className="sticky top-0 z-30 border-b border-rule-soft bg-paper/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 sm:px-8">
          <Wordmark onClick={() => selectTab('home')} />
          <span className="kicker hidden text-[15px] text-ink-soft md:inline">
            <span className="mr-2 text-ink-mute">/</span>
            {track.title}
          </span>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              title="Search (⌘K)"
              aria-label="Search"
              className="press grid h-9 w-9 place-items-center rounded-full border border-rule-soft bg-paper text-ink-soft hover:text-ink"
            >
              <Icon name="search" className="h-4 w-4" />
            </button>
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
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="press grid h-9 w-9 place-items-center rounded-full border border-rule-soft bg-paper text-ink-soft hover:text-ink"
            >
              <Icon name={theme === 'light' ? 'moon' : 'sun'} className="h-4 w-4" />
            </button>
            <Account />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="relative z-[1] mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-4 pb-28 sm:px-8 lg:pb-16">
        <div className="grid flex-1 grid-cols-1 gap-8 pt-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
          <Sidebar tracks={TRACKS} activeId={activeId} onSelect={selectTab} />

          <main className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <TrackHead icon={track.icon} title={track.title} blurb={track.blurb} />
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-rule-soft pt-6 text-[13px] text-ink-mute">
          <span>Built by</span>
          <a
            href="https://github.com/BrielOtero/english"
            target="_blank"
            rel="noopener noreferrer"
            className="press inline-flex items-center gap-1.5 font-medium text-ink-soft transition-colors hover:text-ink"
          >
            <GitHubMark className="h-4 w-4" />
            BrielOtero
          </a>
        </footer>
      </div>

      <BottomNav activeId={activeId} onSelect={selectTab} />
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} onNavigate={goTo} />}
    </div>
  );
}
