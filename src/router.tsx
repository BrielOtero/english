import { createRootRoute, createRoute, createRouter, useNavigate } from '@tanstack/react-router';
import type { Level } from './types';
import { Layout, tabPath } from './app';
import { Home } from './components/home';
import { WorldMap } from './components/world-map';
import { Placement } from './components/placement';
import { DailyDrill } from './components/daily-drill';
import { GrammarBrowser } from './components/grammar-browser';
import { VocabBrowser } from './components/vocab-browser';
import { PronunciationLab } from './components/pronunciation-lab';
import { ReadingView } from './components/reading-view';
import { WritingView } from './components/writing-view';
import { Review } from './components/review';
import { PhrasalVerbs, Idioms } from './components/term-list';

/** Navigate to a tab by id. `to` is dynamic, so it's cast to a known literal to satisfy
 *  the router's strict typing; the real path is resolved at runtime. */
function useTabNav() {
  const navigate = useNavigate();
  return (id: string) => {
    void navigate({ to: tabPath(id) as '/' });
    window.scrollTo({ top: 0 });
  };
}

const rootRoute = createRootRoute({ component: Layout });

function HomeRoute() {
  const go = useTabNav();
  return <Home onSelect={go} />;
}

function PlacementRoute() {
  const navigate = useNavigate();
  return (
    <Placement
      onStartLevel={(level: Level) => {
        void navigate({ to: '/grammar', search: { level } });
        window.scrollTo({ top: 0 });
      }}
    />
  );
}

function DrillRoute() {
  const go = useTabNav();
  return <DailyDrill onClose={() => go('home')} />;
}

// The roadmap is URL-driven: the world map, a world, and a lesson are all real routes,
// and a fight is a `?fight=` search param on the world route — so browser back/forward
// steps through the whole path (map → world → lesson, and open/close a fight).
function RoadmapRoute() {
  return <WorldMap />;
}

const worldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/roadmap/$level',
  validateSearch: (s: Record<string, unknown>) => ({
    fight: typeof s.fight === 'string' ? s.fight : undefined,
  }),
  component: WorldRoute,
});
function WorldRoute() {
  const { level } = worldRoute.useParams();
  const { fight } = worldRoute.useSearch();
  return <WorldMap level={level} fight={fight} />;
}

const lessonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/roadmap/$level/$lessonId',
  component: LessonRoute,
});
function LessonRoute() {
  const { level, lessonId } = lessonRoute.useParams();
  return <WorldMap level={level} lessonId={lessonId} />;
}

const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomeRoute }),
  createRoute({ getParentRoute: () => rootRoute, path: '/roadmap', component: RoadmapRoute }),
  worldRoute,
  lessonRoute,
  createRoute({ getParentRoute: () => rootRoute, path: '/placement', component: PlacementRoute }),
  createRoute({ getParentRoute: () => rootRoute, path: '/drill', component: DrillRoute }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/grammar',
    component: GrammarBrowser,
    // Grammar deep-links (?lesson= / ?level=) are read from the URL by the browser itself.
    validateSearch: (s: Record<string, unknown>) => ({
      lesson: typeof s.lesson === 'string' ? s.lesson : undefined,
      level: typeof s.level === 'string' ? s.level : undefined,
    }),
  }),
  createRoute({ getParentRoute: () => rootRoute, path: '/vocabulary', component: VocabBrowser }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/pronunciation',
    component: PronunciationLab,
  }),
  createRoute({ getParentRoute: () => rootRoute, path: '/reading', component: ReadingView }),
  createRoute({ getParentRoute: () => rootRoute, path: '/writing', component: WritingView }),
  createRoute({ getParentRoute: () => rootRoute, path: '/review', component: Review }),
  createRoute({ getParentRoute: () => rootRoute, path: '/phrasal', component: PhrasalVerbs }),
  createRoute({ getParentRoute: () => rootRoute, path: '/idioms', component: Idioms }),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
