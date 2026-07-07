// The content model for the whole app. Every lesson, word, sound, and drill is
// typed data that satisfies these interfaces — adding content is a data edit, not
// a code change. Components stay presentational and render whatever the data says.

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

/** A short label describing what a level means, for the roadmap and headers. */
export const LEVEL_BLURB: Record<Level, string> = {
  A1: 'Beginner — survive simple, everyday exchanges.',
  A2: 'Elementary — handle routine tasks and basic descriptions.',
  B1: 'Intermediate — cope with most travel, work, and daily situations.',
  B2: 'Upper-intermediate — interact fluently and argue a point of view.',
  C1: 'Advanced — use English flexibly for social, academic, and professional life.',
  C2: 'Mastery — understand virtually everything and express yourself precisely.',
};

/** An example sentence or phrase, optionally with IPA and a note. */
export interface Phrase {
  /** The English text (this is what the "Listen" button speaks). */
  en: string;
  /** Optional IPA transcription. */
  ipa?: string;
  /** Optional teaching note (register, nuance, when to use it). */
  note?: string;
}

/* ------------------------------------------------------------------ */
/* Exercises — a discriminated union; every variant self-checks.       */
/* ------------------------------------------------------------------ */

/** Multiple choice: pick the one correct option. */
export interface McqExercise {
  kind: 'mcq';
  id: string;
  /** The question; may include a ___ blank. */
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  answer: number;
  /** Optional sentence spoken by a Listen button (used by listen-and-choose questions). */
  audio?: string;
  /** Shown after answering, explaining why. */
  explain?: string;
}

/** Fill in the blank. The sentence is `before` + blank + `after`. */
export interface ClozeExercise {
  kind: 'cloze';
  id: string;
  before: string;
  after: string;
  /** Accepted answers (matched case-insensitively, punctuation-insensitively). */
  answers: string[];
  hint?: string;
  explain?: string;
}

/** Fix the mistake in a sentence. */
export interface CorrectExercise {
  kind: 'correct';
  id: string;
  /** The incorrect sentence shown to the learner. */
  wrong: string;
  /** Accepted corrected sentences. The first is treated as the model answer. */
  answers: string[];
  explain?: string;
}

/** Reorder shuffled chunks into a correct sentence. */
export interface OrderExercise {
  kind: 'order';
  id: string;
  /** The chunks to arrange (will be shuffled for display). */
  tokens: string[];
  /** The correct full sentence (tokens joined with single spaces). */
  answer: string;
  explain?: string;
}

/** Listen (via TTS) and type what you hear. */
export interface DictationExercise {
  kind: 'dictation';
  id: string;
  /** The sentence spoken aloud and expected back. */
  text: string;
  explain?: string;
}

export type Exercise =
  McqExercise | ClozeExercise | CorrectExercise | OrderExercise | DictationExercise;

/* ------------------------------------------------------------------ */
/* Placement test — an adaptive check that estimates the learner's level */
/* ------------------------------------------------------------------ */

/** One graded question in the placement test. Each is tagged with the CEFR
 *  band it probes; the adaptive engine walks these bands up and down. */
export interface PlacementQuestion {
  id: string;
  /** The band this question tests. Answering it right suggests you handle this level. */
  level: Level;
  /** The question stem; may contain a ___ blank. */
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  answer: number;
}

/* ------------------------------------------------------------------ */
/* Lessons (grammar & skills)                                          */
/* ------------------------------------------------------------------ */

/** A block of teaching prose, optionally followed by its own examples. */
export interface LessonSection {
  heading?: string;
  /** The explanation, in English. Use **double asterisks** to mark key terms. */
  body: string;
  examples?: Phrase[];
}

/** A common mistake, shown as wrong → right with the reason. */
export interface Pitfall {
  wrong: string;
  right: string;
  why: string;
}

/** A small reference table (conjugations, forms, structures). */
export interface FormTable {
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface Lesson {
  id: string;
  level: Level;
  title: string;
  /** One-line summary shown in lists and the roadmap (English). */
  summary: string;
  /** Ordered teaching sections. */
  sections: LessonSection[];
  /** Optional reference table(s). */
  tables?: FormTable[];
  /** Illustrative example sentences with audio. */
  examples: Phrase[];
  /** Common mistakes to avoid. */
  pitfalls?: Pitfall[];
  /** Interactive practice; finishing them all marks the lesson complete. */
  exercises: Exercise[];
}

/** A CEFR level's worth of grammar lessons. */
export interface GrammarUnit {
  level: Level;
  title: string;
  blurb: string;
  lessons: Lesson[];
}

/* ------------------------------------------------------------------ */
/* Vocabulary                                                          */
/* ------------------------------------------------------------------ */

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'preposition'
  | 'conjunction'
  | 'pronoun'
  | 'determiner'
  | 'phrase'
  | 'interjection';

export interface VocabItem {
  id: string;
  word: string;
  pos: PartOfSpeech;
  ipa?: string;
  /** A simple English definition. */
  meaning: string;
  /** An example sentence using the word. */
  example: string;
  level: Level;
  /** Common collocations / word partners. */
  collocations?: string[];
}

export interface VocabSet {
  id: string;
  title: string;
  /** The theme/domain, e.g. "Food & cooking". */
  theme: string;
  level: Level;
  blurb: string;
  items: VocabItem[];
}

/* ------------------------------------------------------------------ */
/* Pronunciation                                                       */
/* ------------------------------------------------------------------ */

export interface MinimalPair {
  a: string;
  b: string;
  ipaA: string;
  ipaB: string;
  note?: string;
}

export interface SoundLesson {
  id: string;
  /** The phoneme, e.g. "/iː/" or "/θ/". */
  symbol: string;
  /** A friendly name, e.g. "long E (sheep)". */
  name: string;
  level: Level;
  /** How to physically make the sound. */
  howTo: string;
  /** Words that feature the sound (with audio). */
  examples: string[];
  /** Contrast pairs to drill discrimination. */
  pairs: MinimalPair[];
}

/* ------------------------------------------------------------------ */
/* Phrasal verbs & idioms / collocations                              */
/* ------------------------------------------------------------------ */

export interface PhrasalVerb {
  id: string;
  /** The phrasal verb, e.g. "give up". */
  verb: string;
  meaning: string;
  example: string;
  level: Level;
  /** Whether the object can split the verb (turn it off / turn off the light). */
  separable?: boolean;
}

export interface Idiom {
  id: string;
  phrase: string;
  meaning: string;
  example: string;
  level: Level;
  kind: 'idiom' | 'collocation';
}

/* ------------------------------------------------------------------ */
/* Reading & Listening (comprehensible input)                          */
/* ------------------------------------------------------------------ */

export interface Reading {
  id: string;
  level: Level;
  title: string;
  /** One-line description of the text. */
  blurb: string;
  /** Paragraphs of graded text; each can be played via TTS. */
  paragraphs: string[];
  /** Comprehension questions checked after reading. */
  questions: McqExercise[];
}

/* ------------------------------------------------------------------ */
/* Writing & Speaking (pushed output)                                  */
/* ------------------------------------------------------------------ */

export interface WritingPrompt {
  id: string;
  level: Level;
  title: string;
  /** The task in English. */
  prompt: string;
  /** A suggested minimum length. */
  minWords?: number;
  /** Concrete tips for a good answer. */
  tips: string[];
  /** Phrases/connectors to use, with audio. */
  usefulPhrases: Phrase[];
  /** A model answer to compare against after writing. */
  model: string;
}
