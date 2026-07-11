import { createFileRoute } from '@tanstack/react-router';
import { PhrasalVerbs } from '@/components/term-list';

export const Route = createFileRoute('/phrasal')({ component: PhrasalVerbs });
