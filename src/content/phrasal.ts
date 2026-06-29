import type { PhrasalVerb } from '../types';

// High-frequency phrasal verbs, taught as chunks: meaning, Spanish gloss, an example
// in context, and whether the verb is separable. Seeded here; expanded by the pipeline.

export const PHRASAL: PhrasalVerb[] = [
  {
    id: 'ph-get-up',
    verb: 'get up',
    meaning: 'to rise from bed / stand up',
    es: 'levantarse',
    example: 'I get up at seven every morning.',
    level: 'A1',
    separable: false,
  },
  {
    id: 'ph-turn-off',
    verb: 'turn off',
    meaning: 'to stop a machine or light',
    es: 'apagar',
    example: 'Please turn off the lights when you leave. / Turn them off.',
    level: 'A1',
    separable: true,
  },
  {
    id: 'ph-look-for',
    verb: 'look for',
    meaning: 'to try to find something',
    es: 'buscar',
    example: "I'm looking for my keys.",
    level: 'A2',
    separable: false,
  },
  {
    id: 'ph-give-up',
    verb: 'give up',
    meaning: 'to stop trying / quit',
    es: 'rendirse / dejar (un hábito)',
    example: "Don't give up — you're almost there!",
    level: 'A2',
    separable: true,
  },
  {
    id: 'ph-find-out',
    verb: 'find out',
    meaning: 'to discover information',
    es: 'averiguar / enterarse',
    example: 'I need to find out what time the train leaves.',
    level: 'B1',
    separable: true,
  },
  {
    id: 'ph-put-up-with',
    verb: 'put up with',
    meaning: 'to tolerate something unpleasant',
    es: 'aguantar / soportar',
    example: "I can't put up with the noise any longer.",
    level: 'B2',
    separable: false,
  },
];
