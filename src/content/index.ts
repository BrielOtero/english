import type { Level, VocabSet } from '@/types';
import type { IconName } from '@/components/icons';
import { GRAMMAR } from '@/content/grammar';
import { VOCAB_SETS } from '@/content/vocab';
import { SOUNDS } from '@/content/phonetics';
import { PHRASAL } from '@/content/phrasal';
import { IDIOMS } from '@/content/idioms';
import { READINGS } from '@/content/reading';
import { WRITING } from '@/content/writing';
import { PLACEMENT } from '@/content/placement';

/** The grammar spine (metadata + hand-written exercises). A lesson's large practice bank is not
 *  overlaid here — it loads lazily per lesson via `@/content/generated` when its practice opens,
 *  so the initial bundle and cross-lesson features (drill/boss) stay light. */
export { GRAMMAR };

export { VOCAB_SETS, SOUNDS, PHRASAL, IDIOMS, READINGS, WRITING, PLACEMENT };
export {
  hasGenerated,
  peekGenerated,
  loadGenerated,
  type GeneratedLesson,
} from '@/content/generated';

/** A top-level navigation destination. */
export interface Track {
  id: string;
  title: string;
  icon: IconName;
  blurb: string;
  section: 'core' | 'practice';
}

export const TRACKS: Track[] = [
  {
    id: 'home',
    title: 'Home',
    icon: 'home',
    blurb: 'Your front door — jump into anything',
    section: 'core',
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    icon: 'route',
    blurb: 'Your climb from A1 to native — as an interactive world map',
    section: 'core',
  },
  {
    id: 'placement',
    title: 'Level Test',
    icon: 'target',
    blurb: 'A short adaptive test to find your level',
    section: 'core',
  },
  {
    id: 'grammar',
    title: 'Grammar',
    icon: 'book',
    blurb: 'The CEFR grammar spine, A1–C2',
    section: 'core',
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    icon: 'layers',
    blurb: 'Words in themes, with audio',
    section: 'core',
  },
  {
    id: 'pronunciation',
    title: 'Pronunciation',
    icon: 'volume',
    blurb: 'Sounds & minimal pairs',
    section: 'core',
  },
  {
    id: 'reading',
    title: 'Reading',
    icon: 'book-open',
    blurb: 'Graded texts you can listen to',
    section: 'core',
  },
  {
    id: 'writing',
    title: 'Writing',
    icon: 'pencil',
    blurb: 'Write, then compare to a model',
    section: 'core',
  },
  {
    id: 'drill',
    title: 'Daily Drill',
    icon: 'bolt',
    blurb: 'A fast, arcade-style brain-training minigame',
    section: 'practice',
  },
  {
    id: 'review',
    title: 'Review',
    icon: 'refresh',
    blurb: 'Spaced-repetition flashcards',
    section: 'practice',
  },
  {
    id: 'phrasal',
    title: 'Phrasal Verbs',
    icon: 'link',
    blurb: 'High-frequency multi-word verbs',
    section: 'practice',
  },
  {
    id: 'idioms',
    title: 'Idioms',
    icon: 'chat',
    blurb: 'Idioms & strong collocations',
    section: 'practice',
  },
];

/* ---- derived stats ---- */

export const TOTAL_LESSONS = GRAMMAR.reduce((n, u) => n + u.lessons.length, 0);

export function grammarUnit(level: Level) {
  return GRAMMAR.find((u) => u.level === level);
}

/* ---- spaced-repetition deck ---- */

/** A single flashcard for the SRS review, derived from the content. */
export interface ReviewCard {
  /** Unique key the store uses to schedule this card. */
  id: string;
  /** Prompt side — the English definition/meaning, for productive recall. */
  front: string;
  /** Answer side — the English word/phrase. */
  back: string;
  /** What the Listen button speaks. */
  audio: string;
  /** Extra context shown after flipping (an example sentence). */
  note?: string;
  /** Source label, e.g. "Vocabulary". */
  tag: string;
  level: Level;
}

/** Flashcards for one vocabulary set. `tag` defaults to the set's theme (shown when studying a
 *  single set); Review passes 'Vocabulary' so mixed decks share one label. */
export function setToCards(set: VocabSet, tag: string = set.theme): ReviewCard[] {
  return set.items.map((item) => ({
    id: `vocab:${item.id}`,
    front: item.meaning,
    back: item.word,
    audio: item.word,
    note: `“${item.example}”`,
    tag,
    level: item.level,
  }));
}

/** Build the full flashcard deck from vocabulary, phrasal verbs, and idioms. */
export function buildReviewDeck(): ReviewCard[] {
  const cards: ReviewCard[] = VOCAB_SETS.flatMap((set) => setToCards(set, 'Vocabulary'));

  for (const pv of PHRASAL) {
    cards.push({
      id: `phrasal:${pv.id}`,
      front: pv.meaning,
      back: pv.verb,
      audio: pv.verb,
      note: `“${pv.example}”`,
      tag: 'Phrasal verb',
      level: pv.level,
    });
  }

  for (const idiom of IDIOMS) {
    cards.push({
      id: `idiom:${idiom.id}`,
      front: idiom.meaning,
      back: idiom.phrase,
      audio: idiom.phrase,
      note: `“${idiom.example}”`,
      tag: idiom.kind === 'idiom' ? 'Idiom' : 'Collocation',
      level: idiom.level,
    });
  }

  return cards;
}

/** A Review deck built ONLY from vocabulary, limited to the groups the learner opted into.
 *  Reuses the same VOCAB_SETS shown in the Vocabulary section, so groups stay in sync. */
export function buildVocabDeck(isIncluded: (setId: string) => boolean): ReviewCard[] {
  return VOCAB_SETS.filter((set) => isIncluded(set.id)).flatMap((set) =>
    setToCards(set, 'Vocabulary'),
  );
}
