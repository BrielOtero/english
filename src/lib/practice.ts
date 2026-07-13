import type { Exercise, Lesson } from '@/types';

export interface ResolvedStage {
  focus: string;
  exercises: Exercise[];
}

/** Resolve a lesson's `practice` grouping (ids → real exercises, in order). Returns null when
 *  the lesson has no explicit stages, so the caller falls back to one flat practice deck. */
export function resolveStages(lesson: Lesson): ResolvedStage[] | null {
  if (!lesson.practice?.length) return null;
  const byId = new Map(lesson.exercises.map((e) => [e.id, e]));
  return lesson.practice.map((s) => ({
    focus: s.focus,
    exercises: s.ids.map((id) => byId.get(id)).filter((e): e is Exercise => !!e),
  }));
}
