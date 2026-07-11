import { createFileRoute } from '@tanstack/react-router';
import { PronunciationLab } from '@/components/pronunciation-lab';

export const Route = createFileRoute('/pronunciation')({ component: PronunciationLab });
