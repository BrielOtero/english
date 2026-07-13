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

/* ---- Tap-only kinds (no keyboard): usable one-handed, on any device ---- */

/** Judge whether a statement is correct — tap (or swipe) True / False. */
export interface TrueFalseExercise {
  kind: 'truefalse';
  id: string;
  /** The sentence to judge. */
  statement: string;
  /** true = the statement is correct/natural English. */
  answer: boolean;
  /** Optional sentence spoken by a Listen button. */
  audio?: string;
  explain?: string;
}

/** Fill the blank by tapping a word chip — a typing-free cloze. */
export interface TapClozeExercise {
  kind: 'tapCloze';
  id: string;
  before: string;
  after: string;
  /** Word chips to choose from. */
  options: string[];
  /** Index into `options` of the correct word. */
  answer: number;
  explain?: string;
}

/** Tap every item that fits the rule, e.g. "tap the questions". */
export interface PickAllExercise {
  kind: 'pickAll';
  id: string;
  /** The instruction / rule. */
  prompt: string;
  options: string[];
  /** Indices of the items that match. */
  correct: number[];
  explain?: string;
}

/** Build the sentence by tapping word tiles from a bank that includes distractors. */
export interface BuildExercise {
  kind: 'build';
  id: string;
  /** Every tile offered, including distractor words that are NOT in the answer. */
  words: string[];
  /** The correct full sentence (its words joined with single spaces). */
  answer: string;
  explain?: string;
}

/** Tap the extra / wrong words to trim the sentence down to correct English. */
export interface TrimExercise {
  kind: 'trim';
  id: string;
  /** The sentence as individual words (each is tappable). */
  words: string[];
  /** Indices of the words that must be removed. */
  remove: number[];
  explain?: string;
}

/** Tap a term, then its match, until every pair is connected. Self-completing (no Check).
 *  Right-hand values must be distinct (matching is resolved by pair, not by text). */
export interface MatchExercise {
  kind: 'match';
  id: string;
  /** Pairs to connect: [left, right] — e.g. contraction ↔ full form, word ↔ meaning. */
  pairs: [string, string][];
  explain?: string;
}

export type Exercise =
  | McqExercise
  | ClozeExercise
  | CorrectExercise
  | OrderExercise
  | DictationExercise
  | TrueFalseExercise
  | TapClozeExercise
  | PickAllExercise
  | BuildExercise
  | TrimExercise
  | MatchExercise;

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

/** One stage of a lesson's practice climb — a sub-topic to drill, ordered easy → hard.
 *  Exercises are referenced by id; they live in the lesson's flat `exercises` pool. */
export interface PracticeStage {
  /** What this stage drills, e.g. "Am / is / are". */
  focus: string;
  /** Exercise ids for this stage, in easy → hard order. */
  ids: string[];
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
  /** The flat pool the practice deck, guardian, and bosses all draw from. */
  exercises: Exercise[];
  /** Optional concept-grouped practice: splits the pool into a sub-topic climb (easy→hard,
   *  then a Mix finale). When absent, practice is one flat deck. */
  practice?: PracticeStage[];
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
