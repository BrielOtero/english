import { createFileRoute } from '@tanstack/react-router';
import { DailyDrill } from '@/components/daily-drill';
import { useTabNav } from '@/lib/nav';

function DrillPage() {
  const go = useTabNav();
  return <DailyDrill onClose={() => go('home')} />;
}

export const Route = createFileRoute('/drill')({ component: DrillPage });
