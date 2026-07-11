import { createFileRoute } from '@tanstack/react-router';
import { WorldMap } from '@/components/world-map';

export const Route = createFileRoute('/roadmap/$level/$lessonId')({ component: LessonRoute });

function LessonRoute() {
  const { level, lessonId } = Route.useParams();
  return <WorldMap level={level} lessonId={lessonId} />;
}
