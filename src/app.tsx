import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Level } from './types';
import { TRACKS, TOTAL_LESSONS } from './content';
import { Icon, type IconName } from './components/icons';
import { VoiceSettings } from './components/voice-settings';
import { Account } from './components/account';
import { GlobalSearch } from './components/global-search';
import { setPreferredVoice } from './lib/speech';
import { setMusicEnabled, setFxEnabled } from './lib/sound';
import { useStore } from './store';
import { Sidebar } from './components/sidebar';
import { BottomNav } from './components/bottom-nav';
import { Home } from './components/home';
import { WorldMap } from './components/world-map';
import { DailyDrill } from './components/daily-drill';
import { Placement } from './components/placement';
import { GrammarBrowser } from './components/grammar-browser';
import { VocabBrowser } from './components/vocab-browser';
import { PronunciationLab } from './components/pronunciation-lab';
import { ReadingView } from './components/reading-view';
import { WritingView } from './components/writing-view';
import { Review } from './components/review';
import { PhrasalVerbs, Idioms } from './components/term-list';

const TRACK_IDS = new Set(TRACKS.map((t) => t.id));

function getInitialTab(): string {
  if (typeof window === 'undefined') return 'home';
  const t = new URLSearchParams(window.location.search).get('tab');
  return t && TRACK_IDS.has(t) ? t : 'home';
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

export default function App() {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const voiceURI = useStore((s) => s.voiceURI);
  const musicOn = useStore((s) => s.musicOn);
  const fxOn = useStore((s) => s.fxOn);
  const completed = useStore((s) => s.completed);

  const [activeId, setActiveId] = useState(getInitialTab);
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
  }, [musicOn, fxOn]);

  const selectTab = (id: string) => {
    setActiveId(id);
    const url = new URL(window.location.href);
    if (id === 'home') url.searchParams.delete('tab');
    else url.searchParams.set('tab', id);
    url.searchParams.delete('lesson');
    url.searchParams.delete('level');
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  };

  // Jump into the Grammar track at a specific level (used by the level test's result).
  const goToLevel = (level: Level) => {
    setActiveId('grammar');
    const url = new URL(window.location.href);
    url.searchParams.set('tab', 'grammar');
    url.searchParams.set('level', level);
    url.searchParams.delete('lesson');
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  };

  // Navigate from global search to any section (optionally opening a grammar lesson).
  const goTo = (tab: string, lessonId?: string) => {
    setActiveId(tab);
    const url = new URL(window.location.href);
    if (tab === 'home') url.searchParams.delete('tab');
    else url.searchParams.set('tab', tab);
    if (lessonId) url.searchParams.set('lesson', lessonId);
    else url.searchParams.delete('lesson');
    url.searchParams.delete('level');
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  };

  const track = TRACKS.find((t) => t.id === activeId) ?? TRACKS[0];
  const completedCount = Object.keys(completed).length;

  return (
    <div className="min-h-screen bg-bg text-ink">
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
            <span className="hidden items-center gap-2 rounded-full border border-rule-soft bg-bg px-3 py-1.5 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[11px] text-ink-soft tabular-nums">
                {completedCount}/{TOTAL_LESSONS}
              </span>
            </span>
            <div className="hidden sm:block">
              <VoiceSettings />
            </div>
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
      <div className="relative z-[1] mx-auto max-w-[1280px] px-4 pb-28 sm:px-8 lg:pb-16">
        <div className="grid gap-8 pt-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
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

                {activeId === 'home' && <Home onSelect={selectTab} />}
                {activeId === 'roadmap' && <WorldMap onOpenTrack={selectTab} />}
                {activeId === 'placement' && <Placement onStartLevel={goToLevel} />}
                {activeId === 'drill' && <DailyDrill onClose={() => selectTab('home')} />}
                {activeId === 'grammar' && <GrammarBrowser />}
                {activeId === 'vocabulary' && <VocabBrowser />}
                {activeId === 'pronunciation' && <PronunciationLab />}
                {activeId === 'reading' && <ReadingView />}
                {activeId === 'writing' && <WritingView />}
                {activeId === 'review' && <Review />}
                {activeId === 'phrasal' && <PhrasalVerbs />}
                {activeId === 'idioms' && <Idioms />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <BottomNav activeId={activeId} onSelect={selectTab} />
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} onNavigate={goTo} />}
    </div>
  );
}
