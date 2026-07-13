import { useEffect, useState } from 'react';
import type { Lesson } from '@/types';
import { hasGenerated, peekGenerated, loadGenerated } from '@/content/generated';

/**
 * Lazily hydrate a lesson with its large AI-generated exercise bank. The bank lives in a
 * per-lesson chunk that is fetched the first time the lesson opens; until it lands (or when the
 * lesson has no generated bank), the hand-written exercises from the grammar spine are used.
 *
 * Returns the lesson to actually play — its `exercises` (and `practice` stages) swapped for the
 * generated set once available — plus `loading` so the caller can hold the practice UI until the
 * fuller bank is ready instead of flashing the small fallback first.
 */
export function useLessonBank(lesson: Lesson): { lesson: Lesson; loading: boolean } {
  const [, bump] = useState(0);

  useEffect(() => {
    // Nothing to fetch if there's no bank or it's already cached.
    if (!hasGenerated(lesson.id) || peekGenerated(lesson.id)) return;
    let alive = true;
    loadGenerated(lesson.id).then(() => alive && bump((n) => n + 1));
    return () => {
      alive = false;
    };
  }, [lesson.id]);

  // Read the cache during render so a lesson change is reflected immediately (no stale bank).
  const bank = peekGenerated(lesson.id);
  const hydrated = bank
    ? { ...lesson, exercises: bank.exercises, practice: bank.practice }
    : lesson;
  return { lesson: hydrated, loading: hasGenerated(lesson.id) && !bank };
}
