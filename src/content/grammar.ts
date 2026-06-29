import type { GrammarUnit } from '../types';

// The grammar spine, organized by CEFR level (A1 → C2). Each lesson teaches one
// structure with a rule, worked examples, common Spanish-speaker pitfalls, and
// self-checking practice. This file is seeded with representative lessons and is
// expanded by the content pipeline; everything satisfies the GrammarUnit type.

export const GRAMMAR: GrammarUnit[] = [
  {
    level: 'A1',
    title: 'A1 · Beginner',
    blurb: 'The first building blocks: be, have, the present, and simple questions.',
    lessons: [
      {
        id: 'a1-to-be',
        level: 'A1',
        title: "The verb 'to be' (am / is / are)",
        summary:
          "'To be' is the most important verb in English. You use it to say who you are, how you feel, and where things are.",
        sections: [
          {
            heading: 'The three forms',
            body: "Use **am** with I, **is** with he/she/it, and **are** with you/we/they. In speaking we almost always use contractions: I'm, you're, he's, she's, it's, we're, they're.",
            examples: [
              { en: 'I am a student.', es: 'Soy estudiante.', ipa: '/aɪ æm ə ˈstjuːdənt/' },
              { en: 'She is from Spain.', es: 'Ella es de España.' },
              { en: 'We are happy.', es: 'Estamos felices.' },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "To make it negative, add **not** (isn't, aren't, I'm not). To ask a question, put **be before the subject**: Are you ready? Is he here?",
            examples: [
              { en: "I'm not tired.", es: 'No estoy cansado.' },
              { en: 'Are you a teacher?', es: '¿Eres profesor?' },
              { en: 'Is it cold today?', es: '¿Hace frío hoy?' },
            ],
          },
        ],
        tables: [
          {
            caption: 'Subject + be',
            columns: ['Subject', 'be', 'Contraction'],
            rows: [
              ['I', 'am', "I'm"],
              ['he / she / it', 'is', "he's / she's / it's"],
              ['you / we / they', 'are', "you're / we're / they're"],
            ],
          },
        ],
        examples: [
          {
            en: "My name is Ana and I'm twenty years old.",
            es: 'Me llamo Ana y tengo veinte años.',
            note: "Age uses 'be', not 'have': I am 20 (NOT I have 20).",
          },
          { en: 'They are not at home right now.', es: 'No están en casa ahora mismo.' },
        ],
        pitfalls: [
          {
            wrong: 'I have 20 years.',
            right: 'I am 20 years old.',
            why: "English states age with **be**, not 'have'.",
            esNote: "En español dices 'tengo 20 años', pero en inglés es 'I am 20'.",
          },
          {
            wrong: 'Is raining.',
            right: 'It is raining.',
            why: 'English always needs a subject. Use the dummy subject **it**.',
            esNote: "El español omite el sujeto ('está lloviendo'); el inglés no.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-be-1',
            prompt: 'Choose the correct form: "She ___ my sister."',
            options: ['am', 'is', 'are', 'be'],
            answer: 1,
            explain: 'Third person singular (she) takes **is**.',
          },
          {
            kind: 'cloze',
            id: 'a1-be-2',
            before: 'We',
            after: 'from Mexico.',
            answers: ['are', "'re"],
            hint: 'we + ?',
            explain: 'Use **are** with we/you/they.',
          },
          {
            kind: 'correct',
            id: 'a1-be-3',
            wrong: 'I have 30 years.',
            answers: ['I am 30 years old.', "I'm 30 years old.", 'I am 30.'],
            explain: 'Age uses **be**: I am 30 (years old).',
          },
          {
            kind: 'order',
            id: 'a1-be-4',
            tokens: ['Are', 'you', 'a', 'doctor', '?'],
            answer: 'Are you a doctor ?',
            explain: 'In questions, **be** comes before the subject.',
          },
          {
            kind: 'translate',
            id: 'a1-be-5',
            es: 'Ella no está aquí.',
            answers: ["She isn't here.", 'She is not here.', "She's not here."],
            explain: "Negative of 'is' is **isn't / is not**.",
          },
        ],
      },
      {
        id: 'a1-present-simple',
        level: 'A1',
        title: 'Present simple: habits and facts',
        summary:
          'Use the present simple for routines, habits, and things that are always true. Watch the -s on he/she/it.',
        sections: [
          {
            heading: 'The form',
            body: 'Use the base verb for I/you/we/they, and **add -s** for he/she/it. Make negatives and questions with **do / does**.',
            examples: [
              { en: 'I work in an office.', es: 'Trabajo en una oficina.' },
              {
                en: 'He works in an office.',
                es: 'Él trabaja en una oficina.',
                note: 'he/she/it → add -s',
              },
              { en: 'Do you like coffee?', es: '¿Te gusta el café?' },
              { en: "She doesn't eat meat.", es: 'Ella no come carne.' },
            ],
          },
        ],
        tables: [
          {
            caption: 'do-support',
            columns: ['Type', 'I / you / we / they', 'he / she / it'],
            rows: [
              ['Positive', 'I play', 'she plays'],
              ['Negative', "I don't play", "she doesn't play"],
              ['Question', 'Do you play?', 'Does she play?'],
            ],
          },
        ],
        examples: [
          {
            en: 'The sun rises in the east.',
            es: 'El sol sale por el este.',
            note: 'A general fact → present simple.',
          },
          {
            en: 'My brother plays football every weekend.',
            es: 'Mi hermano juega al fútbol cada fin de semana.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He live here.',
            right: 'He lives here.',
            why: "Don't forget the **-s** on he/she/it.",
            esNote: 'Es el error más común de los hispanohablantes en presente simple.',
          },
          {
            wrong: 'You like coffee?',
            right: 'Do you like coffee?',
            why: 'Yes/no questions need **do/does**.',
            esNote: "El español no usa auxiliar ('¿te gusta?'), pero el inglés sí.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-ps-1',
            prompt: 'Choose: "My father ___ in a bank."',
            options: ['work', 'works', 'working', 'is work'],
            answer: 1,
            explain: 'he (my father) → add **-s**: works.',
          },
          {
            kind: 'correct',
            id: 'a1-ps-2',
            wrong: 'She want a new phone.',
            answers: ['She wants a new phone.'],
            explain: 'Add **-s** for she: wants.',
          },
          {
            kind: 'cloze',
            id: 'a1-ps-3',
            before: '___ your sister speak English?',
            after: '',
            answers: ['Does', 'does'],
            hint: 'question word for he/she/it',
            explain: 'Questions about he/she/it use **Does**.',
          },
          {
            kind: 'translate',
            id: 'a1-ps-4',
            es: 'No me gusta el té.',
            answers: ["I don't like tea.", 'I do not like tea.'],
            explain: 'Negatives use **do not / don’t** + base verb.',
          },
        ],
      },
    ],
  },
  {
    level: 'A2',
    title: 'A2 · Elementary',
    blurb: 'The past, the present perfect, comparatives, and the first conditionals.',
    lessons: [
      {
        id: 'a2-past-simple',
        level: 'A2',
        title: 'Past simple: regular and irregular',
        summary:
          'Use the past simple for finished actions at a specific time in the past. Regular verbs add -ed; many common verbs are irregular.',
        sections: [
          {
            heading: 'Regular vs irregular',
            body: 'Regular verbs add **-ed** (work → worked). Irregular verbs change form (go → went, see → saw). Negatives and questions use **did** + base verb.',
            examples: [
              { en: 'I watched a film last night.', es: 'Vi una película anoche.' },
              {
                en: 'We went to the beach on Sunday.',
                es: 'Fuimos a la playa el domingo.',
                note: 'go → went (irregular)',
              },
              { en: 'Did you call her?', es: '¿La llamaste?' },
              { en: "He didn't finish his homework.", es: 'Él no terminó su tarea.' },
            ],
          },
        ],
        examples: [
          {
            en: 'She bought a car two weeks ago.',
            es: 'Compró un coche hace dos semanas.',
            note: 'buy → bought',
          },
          { en: 'They didn’t come to the party.', es: 'No vinieron a la fiesta.' },
        ],
        pitfalls: [
          {
            wrong: 'I didn’t went.',
            right: "I didn't go.",
            why: 'After **did/didn’t**, use the base verb, not the past form.',
            esNote: "El pasado ya está en 'did'; el verbo vuelve a su forma base.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-pst-1',
            prompt: 'Choose: "They ___ to Italy last summer."',
            options: ['go', 'went', 'gone', 'goed'],
            answer: 1,
            explain: 'go is irregular: **went**.',
          },
          {
            kind: 'correct',
            id: 'a2-pst-2',
            wrong: 'Did you saw the news?',
            answers: ['Did you see the news?'],
            explain: 'After **did**, use the base verb: see.',
          },
          {
            kind: 'order',
            id: 'a2-pst-3',
            tokens: ['She', "didn't", 'answer', 'the', 'phone'],
            answer: "She didn't answer the phone",
            explain: '**didn’t** + base verb (answer).',
          },
        ],
      },
    ],
  },
  {
    level: 'B1',
    title: 'B1 · Intermediate',
    blurb: 'Perfect tenses, conditionals, reported speech, the passive, and relative clauses.',
    lessons: [
      {
        id: 'b1-present-perfect-vs-past',
        level: 'B1',
        title: 'Present perfect vs past simple',
        summary:
          'The present perfect links the past to now (no specific time). The past simple is for finished time. Mixing them up is a classic Spanish-speaker error.',
        sections: [
          {
            heading: 'The difference',
            body: 'Use the **present perfect** (have/has + past participle) for experiences and recent results with no stated time. Use the **past simple** when you say *when* it happened.',
            examples: [
              {
                en: "I've been to Japan.",
                es: 'He estado en Japón.',
                note: 'Experience, no time → present perfect',
              },
              {
                en: 'I went to Japan in 2019.',
                es: 'Fui a Japón en 2019.',
                note: 'Specific time → past simple',
              },
              { en: 'She has just arrived.', es: 'Acaba de llegar.' },
            ],
          },
        ],
        examples: [
          { en: 'Have you finished the report yet?', es: '¿Has terminado ya el informe?' },
          { en: "We haven't seen that film.", es: 'No hemos visto esa película.' },
        ],
        pitfalls: [
          {
            wrong: 'I have seen her yesterday.',
            right: 'I saw her yesterday.',
            why: 'With a finished time word (**yesterday**), use the past simple.',
            esNote: "En español usas el pretérito perfecto con 'ayer'; en inglés no.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-pp-1',
            prompt: 'Choose: "___ you ever ___ sushi?"',
            options: ['Did / eat', 'Have / eaten', 'Have / ate', 'Did / eaten'],
            answer: 1,
            explain: "'ever' (experience) → present perfect: **Have you eaten**.",
          },
          {
            kind: 'correct',
            id: 'b1-pp-2',
            wrong: 'I have called him two hours ago.',
            answers: ['I called him two hours ago.'],
            explain: "'two hours ago' is finished time → past simple: **called**.",
          },
          {
            kind: 'translate',
            id: 'b1-pp-3',
            es: 'Nunca he probado el caviar.',
            answers: ["I've never tried caviar.", 'I have never tried caviar.'],
            explain: 'Experience with **never** → present perfect.',
          },
        ],
      },
    ],
  },
  {
    level: 'B2',
    title: 'B2 · Upper-intermediate',
    blurb: 'Narrative tenses, mixed conditionals, the causative, and advanced modals.',
    lessons: [
      {
        id: 'b2-causative',
        level: 'B2',
        title: 'The causative: have / get something done',
        summary:
          'Use the causative to say someone else does a service for you: "I had my hair cut" (a hairdresser cut it, not me).',
        sections: [
          {
            heading: 'The structure',
            body: 'Form: **have/get + object + past participle**. The focus is on the result, not who did it.',
            examples: [
              {
                en: 'I had my car repaired.',
                es: 'Me repararon el coche.',
                note: 'A mechanic did it.',
              },
              { en: 'She got her nails done.', es: 'Se hizo las uñas.' },
              {
                en: 'We need to have the windows cleaned.',
                es: 'Necesitamos que limpien las ventanas.',
              },
            ],
          },
        ],
        examples: [
          {
            en: "They're having a new kitchen installed.",
            es: 'Les están instalando una cocina nueva.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I cut my hair yesterday. (when a hairdresser did it)',
            right: 'I had my hair cut yesterday.',
            why: 'If someone else does the service, use the **causative**.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-caus-1',
            prompt: 'Choose: "We had the house ___ last month."',
            options: ['paint', 'painted', 'painting', 'to paint'],
            answer: 1,
            explain: 'have + object + **past participle** (painted).',
          },
          {
            kind: 'order',
            id: 'b2-caus-2',
            tokens: ['I', 'need', 'to', 'get', 'my', 'eyes', 'tested'],
            answer: 'I need to get my eyes tested',
            explain: 'get + object + past participle (tested).',
          },
        ],
      },
    ],
  },
  {
    level: 'C1',
    title: 'C1 · Advanced',
    blurb: 'Inversion, cleft sentences, nominalisation, and sophisticated discourse.',
    lessons: [
      {
        id: 'c1-inversion',
        level: 'C1',
        title: 'Inversion after negative adverbials',
        summary:
          'For emphasis and formal style, put a negative adverbial first and invert the subject and auxiliary: "Never have I seen such a thing."',
        sections: [
          {
            heading: 'How it works',
            body: 'When a sentence starts with a **negative or restrictive adverbial** (Never, Rarely, Not only, Hardly, Little, Only then, No sooner), the auxiliary comes **before the subject**, like in a question.',
            examples: [
              {
                en: 'Never have I seen such a beautiful sunset.',
                es: 'Nunca he visto un atardecer tan hermoso.',
              },
              {
                en: 'Not only did he apologise, but he also paid for the damage.',
                es: 'No solo se disculpó, sino que también pagó los daños.',
              },
              {
                en: 'Hardly had we arrived when it started to rain.',
                es: 'Apenas habíamos llegado cuando empezó a llover.',
              },
            ],
          },
        ],
        examples: [
          {
            en: 'Little did she know that her life was about to change.',
            es: 'Poco sabía ella que su vida estaba a punto de cambiar.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen this.',
            right: 'Never have I seen this.',
            why: 'After the negative adverbial, **invert** auxiliary and subject.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-inv-1',
            prompt: 'Choose: "Not until I got home ___ that I had lost my keys."',
            options: ['I realised', 'did I realise', 'I did realise', 'realised I'],
            answer: 1,
            explain: 'Restrictive adverbial fronted → inversion: **did I realise**.',
          },
          {
            kind: 'order',
            id: 'c1-inv-2',
            tokens: ['Rarely', 'have', 'I', 'felt', 'so', 'welcome'],
            answer: 'Rarely have I felt so welcome',
            explain: 'Rarely + **have I** (inverted).',
          },
        ],
      },
    ],
  },
  {
    level: 'C2',
    title: 'C2 · Mastery',
    blurb: 'Stylistic inversion, distance clefts, and nuanced register for rhetorical effect.',
    lessons: [
      {
        id: 'c2-cleft-emphasis',
        level: 'C2',
        title: 'Distance clefts for precise emphasis',
        summary:
          "Cleft sentences split one idea into two clauses to spotlight a specific element: 'It wasn't until midnight that they finally agreed.'",
        sections: [
          {
            heading: 'It-clefts and what-clefts',
            body: 'Use **It + be + X + that...** to highlight X, and **What... is/was...** to foreground a whole idea. They add precision and rhetorical weight in formal writing and speech.',
            examples: [
              {
                en: 'It was her honesty that won everyone over.',
                es: 'Fue su honestidad lo que conquistó a todos.',
              },
              {
                en: 'What strikes me most is the sheer scale of the project.',
                es: 'Lo que más me impacta es la enorme escala del proyecto.',
              },
              {
                en: "It wasn't until much later that the truth emerged.",
                es: 'No fue hasta mucho después que salió la verdad.',
              },
            ],
          },
        ],
        examples: [
          {
            en: 'All I want is a little peace and quiet.',
            es: 'Todo lo que quiero es un poco de paz y tranquilidad.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The thing what I like is the music.',
            right: 'The thing (that) I like is the music.',
            why: "After 'the thing', use **that** or nothing — not 'what'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-cleft-1',
            prompt: 'Choose the cleft that emphasises the person: "___ solved the puzzle."',
            options: ['It was Maria who', 'Maria she', 'That Maria', 'Maria that was'],
            answer: 0,
            explain: 'It + be + person + **who** → It was Maria who.',
          },
          {
            kind: 'translate',
            id: 'c2-cleft-2',
            es: 'Lo que necesitamos es más tiempo.',
            answers: ['What we need is more time.'],
            explain: 'what-cleft: **What we need is...**',
          },
        ],
      },
    ],
  },
];
