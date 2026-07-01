import type { Level } from '../types';
import type { IconName } from '../components/icons';
import { GRAMMAR } from './grammar';
import { VOCAB_SETS } from './vocab';
import { SOUNDS } from './phonetics';
import { PHRASAL } from './phrasal';
import { IDIOMS } from './idioms';
import { READINGS } from './reading';
import { WRITING } from './writing';

export { GRAMMAR, VOCAB_SETS, SOUNDS, PHRASAL, IDIOMS, READINGS, WRITING };

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
    id: 'roadmap',
    title: 'Roadmap',
    icon: 'route',
    blurb: 'Your path from A1 to native',
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

/** Build the full flashcard deck from vocabulary, phrasal verbs, and idioms. */
export function buildReviewDeck(): ReviewCard[] {
  const cards: ReviewCard[] = [];

  for (const set of VOCAB_SETS) {
    for (const item of set.items) {
      cards.push({
        id: `vocab:${item.id}`,
        front: item.meaning,
        back: item.word,
        audio: item.word,
        note: `“${item.example}”`,
        tag: 'Vocabulary',
        level: item.level,
      });
    }
  }

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
