import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createRootRoute, Outlet, useNavigate, useRouterState } from '@tanstack/react-router';
import { TRACKS } from '@/content';
import { totalStars } from '@/lib/stars';
import { tabPath, pathToTab } from '@/lib/nav';
import { setPreferredVoice } from '@/lib/speech';
import { setMusicEnabled, setFxEnabled, setMusicVolume, setFxVolume } from '@/lib/sound';
import { useStore } from '@/store';
import { Icon, type IconName } from '@/components/icons';
import { GlobalSearch } from '@/components/global-search';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { BottomNav } from '@/components/bottom-nav';

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

function RootLayout() {
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

      <Header
        trackTitle={track.title}
        stars={stars}
        theme={theme}
        onHome={() => selectTab('home')}
        onSearch={() => setSearchOpen(true)}
        onToggleTheme={toggleTheme}
      />

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

        <Footer />
      </div>

      <BottomNav activeId={activeId} onSelect={selectTab} />
      {searchOpen && <GlobalSearch onClose={() => setSearchOpen(false)} onNavigate={goTo} />}
    </div>
  );
}

export const Route = createRootRoute({ component: RootLayout });
