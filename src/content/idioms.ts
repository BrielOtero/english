import type { Idiom } from '../types';

// Idioms and strong collocations for native-like fluency and register. Seeded here;
// expanded by the content pipeline.

export const IDIOMS: Idiom[] = [
  {
    id: 'id-make-decision',
    phrase: 'make a decision',
    meaning: 'to decide',
    es: 'tomar una decisión',
    example: 'We need to make a decision by Friday.',
    level: 'A2',
    kind: 'collocation',
  },
  {
    id: 'id-heavy-rain',
    phrase: 'heavy rain',
    meaning: 'a lot of rain (not "strong rain")',
    es: 'lluvia fuerte',
    example: 'Heavy rain is expected this weekend.',
    level: 'B1',
    kind: 'collocation',
  },
  {
    id: 'id-piece-of-cake',
    phrase: 'a piece of cake',
    meaning: 'something very easy',
    es: 'pan comido / muy fácil',
    example: 'The exam was a piece of cake.',
    level: 'B1',
    kind: 'idiom',
  },
  {
    id: 'id-cold-feet',
    phrase: 'get cold feet',
    meaning: 'to become nervous and hesitate before a big event',
    es: 'echarse atrás / acobardarse',
    example: 'He got cold feet the day before the wedding.',
    level: 'B2',
    kind: 'idiom',
  },
  {
    id: 'id-bottom-line',
    phrase: 'the bottom line',
    meaning: 'the most important fact or conclusion',
    es: 'lo esencial / en resumidas cuentas',
    example: 'The bottom line is that we cannot afford it.',
    level: 'C1',
    kind: 'idiom',
  },
];
