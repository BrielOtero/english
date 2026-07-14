import type { Exercise, PracticeStage } from '@/types';

export interface GeneratedLesson {
  exercises: Exercise[];
  practice: PracticeStage[];
}

/** Lazy per-lesson practice banks. Each entry is a dynamic import(), so a lesson's large
 *  verified exercise set becomes its own chunk, fetched only when that lesson's practice
 *  opens — the initial bundle never pulls in the whole (thousands-of-exercises) corpus. */
const loaders: Record<string, () => Promise<GeneratedLesson>> = {
  'a1-articles-quantifiers': () => import('./a1-articles-quantifiers'),
  'a1-future-will-going-to': () => import('./a1-future-will-going-to'),
  'a1-have-can-would-like': () => import('./a1-have-can-would-like'),
  'a1-past-simple-be': () => import('./a1-past-simple-be'),
  'a1-past-simple': () => import('./a1-past-simple'),
  'a1-plurals-adjectives-comparatives': () => import('./a1-plurals-adjectives-comparatives'),
  'a1-present-continuous': () => import('./a1-present-continuous'),
  'a1-present-simple': () => import('./a1-present-simple'),
  'a1-pronouns-possessives': () => import('./a1-pronouns-possessives'),
  'a1-there-is-there-are': () => import('./a1-there-is-there-are'),
  'a1-verb-to-be': () => import('./a1-verb-to-be'),
  'a2-adverbs-of-manner': () => import('./a2-adverbs-of-manner'),
  'a2-comparatives-superlatives': () => import('./a2-comparatives-superlatives'),
  'a2-conditionals': () => import('./a2-conditionals'),
  'a2-future-forms': () => import('./a2-future-forms'),
  'a2-gerunds-infinitives': () => import('./a2-gerunds-infinitives'),
  'a2-modals': () => import('./a2-modals'),
  'a2-past-continuous': () => import('./a2-past-continuous'),
  'a2-present-perfect': () => import('./a2-present-perfect'),
  'a2-pronouns': () => import('./a2-pronouns'),
  'a2-quantifiers': () => import('./a2-quantifiers'),
  'a2-questions-and-agreeing': () => import('./a2-questions-and-agreeing'),
  'b1-adjectives-gerunds-prepositions': () => import('./b1-adjectives-gerunds-prepositions'),
  'b1-conditionals-wish': () => import('./b1-conditionals-wish'),
  'b1-connectors': () => import('./b1-connectors'),
  'b1-future-continuous-predictions': () => import('./b1-future-continuous-predictions'),
  'b1-indirect-questions-determiners': () => import('./b1-indirect-questions-determiners'),
  'b1-modals-deduction': () => import('./b1-modals-deduction'),
  'b1-passive-voice': () => import('./b1-passive-voice'),
  'b1-past-perfect-used-to': () => import('./b1-past-perfect-used-to'),
  'b1-present-perfect-continuous': () => import('./b1-present-perfect-continuous'),
  'b1-relative-clauses': () => import('./b1-relative-clauses'),
  'b1-reported-speech': () => import('./b1-reported-speech'),
  'b2-causatives-and-sense-verbs': () => import('./b2-causatives-and-sense-verbs'),
  'b2-comparatives-and-quantifiers': () => import('./b2-comparatives-and-quantifiers'),
  'b2-emphasis-and-cleft-sentences': () => import('./b2-emphasis-and-cleft-sentences'),
  'b2-future-perfect-and-future-in-the-past': () => import('./b2-future-perfect-and-future-in-the-past'),
  'b2-mixed-conditionals-and-alternatives': () => import('./b2-mixed-conditionals-and-alternatives'),
  'b2-narrative-tenses': () => import('./b2-narrative-tenses'),
  'b2-passive-voice': () => import('./b2-passive-voice'),
  'b2-past-modals-of-deduction': () => import('./b2-past-modals-of-deduction'),
  'b2-relative-and-participle-clauses': () => import('./b2-relative-and-participle-clauses'),
  'b2-reported-speech': () => import('./b2-reported-speech'),
  'b2-subjunctive-and-discourse-markers': () => import('./b2-subjunctive-and-discourse-markers'),
  'c1-advanced-past-modals': () => import('./c1-advanced-past-modals'),
  'c1-cleft-sentences': () => import('./c1-cleft-sentences'),
  'c1-inversion-conditionals': () => import('./c1-inversion-conditionals'),
  'c1-inversion-negative-adverbials': () => import('./c1-inversion-negative-adverbials'),
  'c1-mixed-reduced-conditionals': () => import('./c1-mixed-reduced-conditionals'),
  'c1-nominalisation-noun-phrases': () => import('./c1-nominalisation-noun-phrases'),
  'c1-participle-clauses': () => import('./c1-participle-clauses'),
  'c1-passive-reporting': () => import('./c1-passive-reporting'),
  'c1-subjunctive': () => import('./c1-subjunctive'),
};

const cache = new Map<string, GeneratedLesson>();

/** Whether this lesson has a generated bank to load. */
export function hasGenerated(id: string): boolean {
  return loaders[id] !== undefined;
}

/** The bank if it is already loaded (synchronous, cache-only); otherwise undefined. */
export function peekGenerated(id: string): GeneratedLesson | undefined {
  return cache.get(id);
}

/** Load (and cache) a lesson's generated bank; resolves undefined when there is none. */
export async function loadGenerated(id: string): Promise<GeneratedLesson | undefined> {
  const cached = cache.get(id);
  if (cached) return cached;
  const load = loaders[id];
  if (!load) return undefined;
  const mod = await load();
  const gen: GeneratedLesson = { exercises: mod.exercises, practice: mod.practice };
  cache.set(id, gen);
  return gen;
}
