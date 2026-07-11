import { createFileRoute } from '@tanstack/react-router';
import { WritingView } from '@/components/writing-view';

export const Route = createFileRoute('/writing')({ component: WritingView });
