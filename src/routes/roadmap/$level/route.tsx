import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/roadmap/$level')({
  component: Outlet,
  validateSearch: (s: Record<string, unknown>) => ({
    fight: typeof s.fight === 'string' ? s.fight : undefined,
  }),
});
