import { createFileRoute } from '@tanstack/react-router';
import { Idioms } from '@/components/term-list';

export const Route = createFileRoute('/idioms')({ component: Idioms });
