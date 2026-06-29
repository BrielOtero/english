import type { WritingPrompt } from '../types';

// Pushed-output writing tasks at i+1, with tips, useful phrases, and a model answer
// to compare against. Seeded here; expanded by the content pipeline.

export const WRITING: WritingPrompt[] = [
  {
    id: 'wr-introduce',
    level: 'A1',
    title: 'Introduce yourself',
    prompt:
      'Write 4–6 sentences about yourself: your name, where you are from, your job, and what you like.',
    es: 'Escribe 4–6 frases sobre ti: tu nombre, de dónde eres, tu trabajo y qué te gusta.',
    minWords: 30,
    tips: [
      'Start with "My name is...".',
      'Use the present simple for habits and facts.',
      'Use "I like + -ing" to talk about hobbies.',
    ],
    usefulPhrases: [
      { en: 'My name is...', es: 'Me llamo...' },
      { en: 'I am from...', es: 'Soy de...' },
      { en: 'I work as a...', es: 'Trabajo de...' },
      { en: 'In my free time, I like...', es: 'En mi tiempo libre, me gusta...' },
    ],
    model:
      'My name is Laura. I am from Valencia, in Spain. I am a nurse and I work in a hospital. I live with my family. In my free time, I like reading and cooking. I also like going to the beach in summer.',
  },
  {
    id: 'wr-opinion',
    level: 'B2',
    title: 'Give your opinion',
    prompt:
      'Some people think working from home is better than working in an office. Write a short paragraph giving your opinion with reasons.',
    es: 'Algunas personas piensan que trabajar desde casa es mejor que trabajar en una oficina. Escribe un párrafo dando tu opinión con razones.',
    minWords: 80,
    tips: [
      'State your opinion clearly in the first sentence.',
      'Use linkers: "Firstly", "However", "On the other hand", "In conclusion".',
      'Give at least two reasons or examples.',
    ],
    usefulPhrases: [
      { en: 'In my opinion / I believe that...', es: 'En mi opinión / Creo que...' },
      { en: 'On the one hand... on the other hand...', es: 'Por un lado... por otro lado...' },
      { en: 'Furthermore / Moreover', es: 'Además' },
      { en: 'All things considered', es: 'Considerándolo todo' },
    ],
    model:
      'In my opinion, working from home offers real advantages, although it is not perfect for everyone. On the one hand, it saves a great deal of time, since employees no longer have to commute, and it allows for a more flexible schedule. On the other hand, working from home can feel isolating, and it is sometimes harder to separate work from personal life. All things considered, I believe a hybrid model — a few days at home and a few in the office — combines the best of both worlds.',
  },
];
