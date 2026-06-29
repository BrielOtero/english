import { useEffect, useState } from 'react';
import { TRACKS, TOTAL_LESSONS } from './content';
import { Icon, type IconName } from './components/icons';
import { useStore } from './store';
import { Sidebar } from './components/sidebar';
import { Roadmap } from './components/roadmap';
import { GrammarBrowser } from './components/grammar-browser';
import { VocabBrowser } from './components/vocab-browser';
import { PronunciationLab } from './components/pronunciation-lab';
import { ReadingView } from './components/reading-view';
import { WritingView } from './components/writing-view';
import { Review } from './components/review';
import { PitfallsView } from './components/pitfalls-view';
import { PhrasalVerbs, Idioms } from './components/term-list';

const TRACK_IDS = new Set(TRACKS.map((t) => t.id));

function getInitialTab(): string {
  if (typeof window === 'undefined') return 'roadmap';
  const t = new URLSearchParams(window.location.search).get('tab');
  return t && TRACK_IDS.has(t) ? t : 'roadmap';
}

function TrackHead({ icon, title, blurb }: { icon: IconName; title: string; blurb: string }) {
  return (
    <div className="fade-in mb-7">
      <div className="mb-2 flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-ink-mute uppercase">
        <Icon name={icon} className="h-3.5 w-3.5 text-accent" />
        <span>Section</span>
      </div>
      <h1 className="font-display text-[clamp(28px,4vw,40px)] leading-none font-medium tracking-tight text-ink">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-soft">{blurb}</p>
    </div>
  );
}

export default function App() {
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const showSpanish = useStore((s) => s.showSpanish);
  const toggleSpanish = useStore((s) => s.toggleSpanish);
  const voiceRate = useStore((s) => s.voiceRate);
  const setVoiceRate = useStore((s) => s.setVoiceRate);
  const completed = useStore((s) => s.completed);

  const [activeId, setActiveId] = useState(getInitialTab);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const selectTab = (id: string) => {
    setActiveId(id);
    const url = new URL(window.location.href);
    if (id === 'roadmap') url.searchParams.delete('tab');
    else url.searchParams.set('tab', id);
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0 });
  };

  const track = TRACKS.find((t) => t.id === activeId) ?? TRACKS[0];
  const completedCount = Object.keys(completed).length;
  const slow = voiceRate < 0.85;

  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="grain" />
      <div className="relative z-[1] mx-auto max-w-[1280px] px-4 pt-8 pb-20 sm:px-10">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-end justify-between gap-6 border-b border-rule pb-6">
          <div>
            <span className="rounded-sm border border-rule-soft px-2 py-1 font-mono text-[11px] tracking-[0.15em] text-ink-mute uppercase">
              Zero → Native
            </span>
            <h1 className="font-display mt-3 text-[clamp(30px,4vw,46px)] leading-none font-normal tracking-tight">
              <em className="serif-italic text-accent">Fluent</em>
            </h1>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink-soft">
              A self-study path from your first words of English to a confident, near-native C1 —
              built for Spanish speakers. Grammar, vocabulary, pronunciation, and daily review in
              one place.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-rule-soft bg-paper px-3.5 py-2 text-center">
              <span className="font-mono text-[11px] text-ink-mute">
                {completedCount}/{TOTAL_LESSONS} lessons
              </span>
            </div>
            <button
              onClick={toggleSpanish}
              aria-pressed={showSpanish}
              title="Show or hide Spanish translations"
              className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-wide uppercase transition-colors ${
                showSpanish
                  ? 'border-accent bg-accent text-paper'
                  : 'border-rule-soft bg-paper text-ink-soft hover:text-ink'
              }`}
            >
              ES {showSpanish ? 'on' : 'off'}
            </button>
            <button
              onClick={() => setVoiceRate(slow ? 0.95 : 0.7)}
              aria-pressed={slow}
              title="Audio speed"
              className={`rounded-full border px-3 py-2 font-mono text-[11px] tracking-wide uppercase transition-colors ${
                slow
                  ? 'border-accent bg-accent text-paper'
                  : 'border-rule-soft bg-paper text-ink-soft hover:text-ink'
              }`}
            >
              {slow ? 'slow' : 'normal'}
            </button>
            <button
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="grid h-9 w-9 place-items-center rounded-full border border-rule-soft bg-paper text-ink-soft transition-colors hover:text-ink"
            >
              <Icon name={theme === 'light' ? 'moon' : 'sun'} className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-[210px_minmax(0,1fr)]">
          <Sidebar tracks={TRACKS} activeId={activeId} onSelect={selectTab} />

          <main className="min-w-0">
            <TrackHead icon={track.icon} title={track.title} blurb={track.blurb} />

            {activeId === 'roadmap' && <Roadmap onSelect={selectTab} />}
            {activeId === 'grammar' && <GrammarBrowser />}
            {activeId === 'vocabulary' && <VocabBrowser />}
            {activeId === 'pronunciation' && <PronunciationLab />}
            {activeId === 'reading' && <ReadingView />}
            {activeId === 'writing' && <WritingView />}
            {activeId === 'review' && <Review />}
            {activeId === 'pitfalls' && <PitfallsView />}
            {activeId === 'phrasal' && <PhrasalVerbs />}
            {activeId === 'idioms' && <Idioms />}
          </main>
        </div>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-5 font-mono text-[11px] text-ink-mute">
          <span>CEFR A1–C2 · grammar · vocabulary · pronunciation · spaced repetition</span>
          <span className="serif-italic text-[12px]">Built to take you from zero to native.</span>
        </footer>
      </div>
    </div>
  );
}
