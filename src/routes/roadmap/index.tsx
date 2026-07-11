import { createFileRoute } from '@tanstack/react-router';
import { WorldMap } from '@/components/world-map';

export const Route = createFileRoute('/roadmap/')({ component: WorldMap });
