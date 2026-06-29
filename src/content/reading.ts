import type { Reading } from '../types';

// Graded comprehensible-input texts (i+1). Each can be read aloud by the browser,
// has a small glossary, and ends with comprehension questions. Seeded here; expanded
// by the content pipeline.

export const READINGS: Reading[] = [
  {
    id: 'rd-my-day',
    level: 'A1',
    title: 'A normal day',
    blurb: 'A simple text in the present simple about a daily routine.',
    paragraphs: [
      'My name is Tom. I am a teacher. I live in a small town near the sea.',
      'Every morning I get up at six o’clock. I drink a coffee and I read the news. Then I go to work by bike.',
      'I like my job because I like children. In the evening, I cook dinner and I watch a film. I go to bed at eleven.',
    ],
    glossary: [
      { word: 'near', es: 'cerca de' },
      { word: 'by bike', es: 'en bicicleta' },
      { word: 'in the evening', es: 'por la tarde/noche' },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'rd-my-day-q1',
        prompt: 'What is Tom’s job?',
        options: ['A doctor', 'A teacher', 'A cook', 'A driver'],
        answer: 1,
        explain: 'The text says "I am a teacher."',
      },
      {
        kind: 'mcq',
        id: 'rd-my-day-q2',
        prompt: 'How does he go to work?',
        options: ['By car', 'By bus', 'By bike', 'On foot'],
        answer: 2,
        explain: '"I go to work by bike."',
      },
    ],
  },
  {
    id: 'rd-procrastination',
    level: 'B2',
    title: 'Why we procrastinate',
    blurb: 'A short article with B2 vocabulary on a familiar problem.',
    paragraphs: [
      'Most of us have put off an important task at least once, choosing to scroll through our phones instead. This behaviour, known as procrastination, is often misunderstood as simple laziness.',
      'In fact, researchers argue that procrastination is an emotional problem, not a time-management one. When a task makes us feel anxious or bored, we avoid it to escape the unpleasant feeling — even though we know the delay will cost us later.',
      'The good news is that small strategies can help. Breaking a task into tiny steps, or promising yourself a reward, can make starting feel far less daunting.',
    ],
    glossary: [
      { word: 'put off', es: 'posponer' },
      { word: 'laziness', es: 'pereza' },
      { word: 'daunting', es: 'intimidante' },
    ],
    questions: [
      {
        kind: 'mcq',
        id: 'rd-proc-q1',
        prompt: 'According to the text, procrastination is mainly:',
        options: [
          'a time-management problem',
          'an emotional problem',
          'a sign of laziness',
          'impossible to fix',
        ],
        answer: 1,
        explain: 'The text says it is "an emotional problem, not a time-management one."',
      },
      {
        kind: 'mcq',
        id: 'rd-proc-q2',
        prompt: 'Which strategy does the text suggest?',
        options: [
          'Working longer hours',
          'Breaking tasks into tiny steps',
          'Ignoring the task',
          'Doing the hardest part first',
        ],
        answer: 1,
        explain: '"Breaking a task into tiny steps... can make starting feel far less daunting."',
      },
    ],
  },
];
