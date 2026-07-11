import { createFileRoute } from '@tanstack/react-router';
import { VocabBrowser } from '@/components/vocab-browser';

export const Route = createFileRoute('/vocabulary')({ component: VocabBrowser });
