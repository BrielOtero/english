import { createFileRoute } from '@tanstack/react-router';
import { WorldMap } from '@/components/world-map';

export const Route = createFileRoute('/roadmap/$level/')({ component: TrailRoute });

function TrailRoute() {
  const { level } = Route.useParams();
  const { fight } = Route.useSearch();
  return <WorldMap level={level} fight={fight} />;
}
