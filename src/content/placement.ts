import type { PlacementQuestion } from '@/types';

// The placement test's question bank: a handful of graded questions per CEFR
// band, ordered easy → hard. The adaptive engine (src/lib/placement.ts) draws
// from these, climbing when the learner answers well and dropping back when they
// don't, to estimate a starting level. Each question has exactly one defensible
// answer — the distractors are plausible but wrong, so a right answer is signal.

export const PLACEMENT: PlacementQuestion[] = [
  /* ---- A1 · the basics: be, present simple, plurals, questions ---- */
  {
    id: 'pl-a1-1',
    level: 'A1',
    prompt: 'She ___ from Italy.',
    options: ['am', 'is', 'are', 'be'],
    answer: 1,
  },
  {
    id: 'pl-a1-2',
    level: 'A1',
    prompt: 'I have two ___.',
    options: ['child', 'childs', 'children', 'childrens'],
    answer: 2,
  },
  {
    id: 'pl-a1-3',
    level: 'A1',
    prompt: '___ you like coffee?',
    options: ['Do', 'Does', 'Are', 'Is'],
    answer: 0,
  },
  {
    id: 'pl-a1-4',
    level: 'A1',
    prompt: 'He ___ TV every evening.',
    options: ['watch', 'watches', 'watching', 'watchs'],
    answer: 1,
  },

  /* ---- A2 · past simple, comparatives, present continuous, going to ---- */
  {
    id: 'pl-a2-1',
    level: 'A2',
    prompt: 'Yesterday we ___ to the beach.',
    options: ['go', 'goes', 'went', 'gone'],
    answer: 2,
  },
  {
    id: 'pl-a2-2',
    level: 'A2',
    prompt: 'This book is ___ than that one.',
    options: ['interesting', 'more interesting', 'most interesting', 'interestinger'],
    answer: 1,
  },
  {
    id: 'pl-a2-3',
    level: 'A2',
    prompt: 'Look! It ___ outside.',
    options: ['rains', 'is raining', 'rain', 'rained'],
    answer: 1,
  },
  {
    id: 'pl-a2-4',
    level: 'A2',
    prompt: "I'm tired. I ___ go to bed early tonight.",
    options: ['am going to', 'go', 'went', 'would'],
    answer: 0,
  },

  /* ---- B1 · present perfect, first conditional, used to, relative clauses ---- */
  {
    id: 'pl-b1-1',
    level: 'B1',
    prompt: "I haven't seen him ___ Monday.",
    options: ['since', 'for', 'from', 'ago'],
    answer: 0,
  },
  {
    id: 'pl-b1-2',
    level: 'B1',
    prompt: 'If it rains tomorrow, we ___ the picnic.',
    options: ['cancel', 'will cancel', 'would cancel', 'cancelled'],
    answer: 1,
  },
  {
    id: 'pl-b1-3',
    level: 'B1',
    prompt: 'I ___ smoke, but I quit last year.',
    options: ['use to', 'used to', 'am used to', 'was used to'],
    answer: 1,
  },
  {
    id: 'pl-b1-4',
    level: 'B1',
    prompt: 'The woman ___ car was stolen called the police.',
    options: ['who', 'which', 'whose', 'whom'],
    answer: 2,
  },

  /* ---- B2 · past perfect, passive, reported speech, so/such ---- */
  {
    id: 'pl-b2-1',
    level: 'B2',
    prompt: 'By the time we arrived, the film ___.',
    options: ['already started', 'has already started', 'had already started', 'was already start'],
    answer: 2,
  },
  {
    id: 'pl-b2-2',
    level: 'B2',
    prompt: 'This bridge ___ in 1890.',
    options: ['built', 'was built', 'has built', 'is building'],
    answer: 1,
  },
  {
    id: 'pl-b2-3',
    level: 'B2',
    prompt: 'He asked me ___ I was leaving.',
    options: ['that', 'if', 'do', 'are'],
    answer: 1,
  },
  {
    id: 'pl-b2-4',
    level: 'B2',
    prompt: 'It was ___ a boring film that we left early.',
    options: ['so', 'such', 'very', 'too'],
    answer: 1,
  },

  /* ---- C1 · inversion, third conditional, subjunctive ---- */
  {
    id: 'pl-c1-1',
    level: 'C1',
    prompt: 'Not only ___ late, but he also forgot the tickets.',
    options: ['he was', 'was he', 'he is', 'did he was'],
    answer: 1,
  },
  {
    id: 'pl-c1-2',
    level: 'C1',
    prompt: 'Had I known you were coming, I ___ a cake.',
    options: ['will bake', 'baked', 'would have baked', 'would bake'],
    answer: 2,
  },
  {
    id: 'pl-c1-3',
    level: 'C1',
    prompt: 'The board recommended that he ___ present at every meeting.',
    options: ['is', 'was', 'be', 'would be'],
    answer: 2,
  },
  {
    id: 'pl-c1-4',
    level: 'C1',
    prompt: '___ it not for your help, I would have failed.',
    options: ['Were', 'Was', 'Had', 'If'],
    answer: 0,
  },

  /* ---- C2 · concession, subtle grammar, correlative inversion ---- */
  {
    id: 'pl-c2-1',
    level: 'C2',
    prompt: '___ his best efforts, the deal fell through.',
    options: ['Despite', 'Although', 'However', 'Nevertheless'],
    answer: 0,
  },
  {
    id: 'pl-c2-2',
    level: 'C2',
    prompt: "I'd rather you ___ tell anyone about this.",
    options: ["don't", "didn't", "won't", 'not'],
    answer: 1,
  },
  {
    id: 'pl-c2-3',
    level: 'C2',
    prompt: 'Scarcely had the meeting begun ___ the fire alarm went off.',
    options: ['than', 'when', 'then', 'that'],
    answer: 1,
  },
  {
    id: 'pl-c2-4',
    level: 'C2',
    prompt: 'Her argument, ___ compelling, ultimately failed to convince the board.',
    options: ['while', 'despite', 'because', 'whereas'],
    answer: 0,
  },
];
