import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/home';
import { useTabNav } from '@/lib/nav';

function HomePage() {
  const go = useTabNav();
  return <Home onSelect={go} />;
}

export const Route = createFileRoute('/')({ component: HomePage });
