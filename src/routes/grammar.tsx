import { createFileRoute } from '@tanstack/react-router';
import { GrammarBrowser } from '@/components/grammar-browser';

export const Route = createFileRoute('/grammar')({
  component: GrammarBrowser,
  // Grammar deep-links (?lesson= / ?level=) are read from the URL by the browser itself.
  validateSearch: (s: Record<string, unknown>) => ({
    lesson: typeof s.lesson === 'string' ? s.lesson : undefined,
    level: typeof s.level === 'string' ? s.level : undefined,
  }),
});
