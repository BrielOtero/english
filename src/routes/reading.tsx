import { createFileRoute } from '@tanstack/react-router';
import { ReadingView } from '@/components/reading-view';

export const Route = createFileRoute('/reading')({ component: ReadingView });
