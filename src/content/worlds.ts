import type { Level } from '@/types';

// The overworld map is a game: each CEFR level is a "world" you climb, with a boss
// (a challenge quiz) guarding the way to the next. Names and taglines are deliberately
// playful — each joke nods to the grammar that level is famous for — so the journey
// feels friendly, not like a syllabus. This is typed data, like the rest of the course.

export interface WorldInfo {
  level: Level;
  /** World number (1-based), shown as "World 1". */
  n: number;
  /** A playful place name. */
  name: string;
  /** A one-line joke/quip about this level, winking at its signature grammar. */
  tagline: string;
  /** The boss guarding the exit — a friendly villain. */
  boss: string;
  /** A quip shown once the boss is defeated. */
  bossDefeated: string;
  /** The collectible you earn for fully clearing (3-starring) the world. */
  reward: string;
}

export const WORLDS: WorldInfo[] = [
  {
    level: 'A1',
    n: 1,
    name: 'Sproutlands',
    tagline: "Every sentence starts with “I am…” — and nobody's judging.",
    boss: 'The To-Be Beast',
    bossDefeated: 'The To-Be Beast is… well, it is defeated.',
    reward: 'Seedling Crest',
  },
  {
    level: 'A2',
    n: 2,
    name: 'Past-Tense Prairie',
    tagline: 'Where the verbs went, goed— sorry, went.',
    boss: 'The Irregular Ogre',
    bossDefeated: 'You catched— caught the Ogre. Nicely done.',
    reward: 'Trailblazer Badge',
  },
  {
    level: 'B1',
    n: 3,
    name: 'Conditional Canyon',
    tagline: 'If you cross it, you will level up. (Yes, on purpose.)',
    boss: 'The Conditional Kraken',
    bossDefeated: 'If the Kraken had trained harder, it would have won.',
    reward: 'Canyon Compass',
  },
  {
    level: 'B2',
    n: 4,
    name: 'Passive Peaks',
    tagline: 'Mistakes were made. Fluency was gained.',
    boss: 'The Passive Phantom',
    bossDefeated: 'The Phantom has been defeated. By you. (See what happened there?)',
    reward: 'Climber’s Rope',
  },
  {
    level: 'C1',
    n: 5,
    name: 'Inversion Heights',
    tagline: 'Rarely have you climbed this high.',
    boss: 'The Inversion Imp',
    bossDefeated: 'Never before has an Imp been so thoroughly beaten.',
    reward: 'Eagle Feather',
  },
  {
    level: 'C2',
    n: 6,
    name: 'Mount Mastery',
    tagline: 'Only the fluent shall pass. (Hi — that’s nearly you.)',
    boss: 'The Fluency Dragon',
    bossDefeated: 'The Dragon bows. The summit is yours.',
    reward: 'Crown of Fluency',
  },
];
