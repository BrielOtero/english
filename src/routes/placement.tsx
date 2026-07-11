import { createFileRoute, useNavigate } from '@tanstack/react-router';
import type { Level } from '@/types';
import { Placement } from '@/components/placement';

function PlacementPage() {
  const navigate = useNavigate();
  return (
    <Placement
      onStartLevel={(level: Level) => {
        void navigate({ to: '/grammar', search: { level, lesson: undefined } });
        window.scrollTo({ top: 0 });
      }}
    />
  );
}

export const Route = createFileRoute('/placement')({ component: PlacementPage });
