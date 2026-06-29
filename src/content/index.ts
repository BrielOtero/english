import type { Level } from '../types';
import { LEVELS } from '../types';
import { GRAMMAR } from './grammar';
import { VOCAB_SETS } from './vocab';
import { SOUNDS } from './phonetics';
import { PITFALLS } from './pitfalls';
import { PHRASAL } from './phrasal';
import { IDIOMS } from './idioms';
import { READINGS } from './reading';
import { WRITING } from './writing';

export { GRAMMAR, VOCAB_SETS, SOUNDS, PITFALLS, PHRASAL, IDIOMS, READINGS, WRITING };

/** A top-level navigation destination. */
export interface Track {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  section: 'core' | 'practice';
}

export const TRACKS: Track[] = [
  {
    id: 'roadmap',
    title: 'Roadmap',
    icon: '🧭',
    blurb: 'Your path from A1 to native',
    section: 'core',
  },
  {
    id: 'grammar',
    title: 'Grammar',
    icon: '📐',
    blurb: 'The CEFR grammar spine, A1–C2',
    section: 'core',
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary',
    icon: '📚',
    blurb: 'Words in themes, with audio',
    section: 'core',
  },
  {
    id: 'pronunciation',
    title: 'Pronunciation',
    icon: '🎧',
    blurb: 'Sounds & minimal pairs',
    section: 'core',
  },
  {
    id: 'reading',
    title: 'Reading',
    icon: '📖',
    blurb: 'Graded texts you can listen to',
    section: 'core',
  },
  {
    id: 'writing',
    title: 'Writing',
    icon: '✍️',
    blurb: 'Write, then compare to a model',
    section: 'core',
  },
  {
    id: 'review',
    title: 'Review',
    icon: '♻️',
    blurb: 'Spaced-repetition flashcards',
    section: 'practice',
  },
  {
    id: 'pitfalls',
    title: 'Spanish Pitfalls',
    icon: '🇪🇸',
    blurb: 'False friends & L1 traps',
    section: 'practice',
  },
  {
    id: 'phrasal',
    title: 'Phrasal Verbs',
    icon: '🧩',
    blurb: 'High-frequency multi-word verbs',
    section: 'practice',
  },
  {
    id: 'idioms',
    title: 'Idioms',
    icon: '💬',
    blurb: 'Idioms & strong collocations',
    section: 'practice',
  },
];

/* ---- derived stats ---- */

export const TOTAL_LESSONS = GRAMMAR.reduce((n, u) => n + u.lessons.length, 0);
export const TOTAL_VOCAB = VOCAB_SETS.reduce((n, s) => n + s.items.length, 0);

export function grammarUnit(level: Level) {
  return GRAMMAR.find((u) => u.level === level);
}

export function lessonCountByLevel(): Record<Level, number> {
  const out = {} as Record<Level, number>;
  for (const lvl of LEVELS) out[lvl] = grammarUnit(lvl)?.lessons.length ?? 0;
  return out;
}

/* ---- spaced-repetition deck ---- */

/** A single flashcard for the SRS review, derived from the content. */
export interface ReviewCard {
  /** Unique key the store uses to schedule this card. */
  id: string;
  /** Prompt side — Spanish, for productive recall toward English. */
  front: string;
  /** Answer side — the English word/phrase. */
  back: string;
  /** What the Listen button speaks. */
  audio: string;
  /** Extra context shown after flipping (definition, example). */
  note?: string;
  /** Source label, e.g. "Vocabulary". */
  tag: string;
  level: Level;
}

/** Build the full flashcard deck from vocabulary, phrasal verbs, and idioms. */
export function buildReviewDeck(): ReviewCard[] {
  const cards: ReviewCard[] = [];

  for (const set of VOCAB_SETS) {
    for (const item of set.items) {
      cards.push({
        id: `vocab:${item.id}`,
        front: item.es,
        back: item.word,
        audio: item.word,
        note: `${item.meaning} — “${item.example}”`,
        tag: 'Vocabulary',
        level: item.level,
      });
    }
  }

  for (const pv of PHRASAL) {
    cards.push({
      id: `phrasal:${pv.id}`,
      front: pv.es,
      back: pv.verb,
      audio: pv.verb,
      note: `${pv.meaning} — “${pv.example}”`,
      tag: 'Phrasal verb',
      level: pv.level,
    });
  }

  for (const idiom of IDIOMS) {
    cards.push({
      id: `idiom:${idiom.id}`,
      front: idiom.es,
      back: idiom.phrase,
      audio: idiom.phrase,
      note: `${idiom.meaning} — “${idiom.example}”`,
      tag: idiom.kind === 'idiom' ? 'Idiom' : 'Collocation',
      level: idiom.level,
    });
  }

  return cards;
}
