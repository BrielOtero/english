import type { GrammarUnit } from '../types';

// CEFR grammar spine A1-C2. Generated content; edit src/types.ts for the shape.
export const GRAMMAR: GrammarUnit[] = [
  {
    level: 'A1',
    title: 'A1 · Everyday Basics',
    blurb:
      'The core building blocks of English: be, basic tenses, articles, pronouns, and simple sentences for daily life.',
    lessons: [
      {
        id: 'a1-verb-to-be',
        level: 'A1',
        title: 'The verb to be (am / is / are)',
        summary:
          'The verb **to be** is the most important verb in English. Use **am**, **is**, and **are** to describe people and things, and to give your name, age, job, and feelings. English needs the verb in every sentence, even where other languages leave it out.',
        sections: [
          {
            heading: 'Forms and contractions',
            body: "Use **I am**, **he/she/it is**, and **we/you/they are**. In speaking and informal writing we use **contractions**: I'm, he's, she's, it's, we're, you're, they're. Both the long and short forms are correct.",
            examples: [
              {
                en: "I am a teacher. / I'm a teacher.",
              },
              {
                en: "She is from Spain. / She's from Spain.",
              },
              {
                en: "We are happy. / We're happy.",
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "For the **negative**, add **not**: I am not, she is not (isn't), they are not (aren't). For **questions**, put the verb first: **Are you ready? Is he here?** Short answers keep the verb: **Yes, I am. / No, she isn't.**",
            examples: [
              {
                en: "I'm not tired.",
              },
              {
                en: 'Are you a student? Yes, I am.',
              },
              {
                en: "It isn't cold today.",
              },
            ],
          },
          {
            heading: 'Talking about age and feelings',
            body: 'English uses **be** for age and many states: **I am 20** (not *I have 20*). We also use **be** with hungry, thirsty, cold, hot, right, and afraid.',
            examples: [
              {
                en: "How old are you? I'm thirty.",
              },
              {
                en: "I'm hungry and thirsty.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Forms of to be',
            columns: ['Subject', 'Affirmative', 'Negative', 'Question'],
            rows: [
              ['I', "am / I'm", "am not / I'm not", 'Am I?'],
              ['He/She/It', "is / 's", "is not / isn't", 'Is he?'],
              ['We/You/They', "are / 're", "are not / aren't", 'Are they?'],
            ],
          },
        ],
        examples: [
          {
            en: 'My name is Ana.',
          },
          {
            en: 'They are my friends.',
          },
          {
            en: "He isn't at home.",
          },
          {
            en: "Is it expensive? No, it isn't.",
          },
          {
            en: "We're from Mexico.",
          },
          {
            en: "I'm not afraid of dogs.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I have 25 years.',
            right: 'I am 25 (years old).',
            why: 'English uses the verb to be for age, not have.',
          },
          {
            wrong: 'She teacher.',
            right: 'She is a teacher.',
            why: 'Every English sentence needs a verb; you cannot drop is.',
          },
          {
            wrong: 'I am agree with you.',
            right: 'I agree with you.',
            why: 'Agree is a normal verb, so it does not take be.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-be-ex1',
            prompt: 'She ___ a doctor.',
            options: ['am', 'is', 'are', 'be'],
            answer: 1,
            explain: 'With she we use is.',
          },
          {
            kind: 'mcq',
            id: 'a1-be-ex2',
            prompt: 'Choose the correct sentence.',
            options: ['They is happy.', 'They are happy.', 'They am happy.', 'They be happy.'],
            answer: 1,
            explain: 'With they we use are.',
          },
          {
            kind: 'mcq',
            id: 'a1-be-ex3',
            prompt: 'Choose the correct sentence.',
            options: ['I have 30 years.', 'I am 30 years.', 'I am 30.', 'I have 30 years old.'],
            answer: 2,
            explain: 'Use be for age, not have.',
          },
          {
            kind: 'order',
            id: 'a1-be-ex4',
            tokens: ['Are', 'you', 'from', 'Spain', '?'],
            answer: 'Are you from Spain?',
            explain: 'In questions the verb be comes before the subject.',
          },
          {
            kind: 'mcq',
            id: 'a1-be-ex6',
            prompt: "Complete: '___ he your brother?'",
            options: ['Are', 'Is', 'Am', 'Be'],
            answer: 1,
            explain: 'With he the question form is Is he...?',
          },
          {
            kind: 'mcq',
            id: 'a1-be-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "We aren't at school today.",
              "We aren't in school today.",
              "We weren't at school today.",
              "We aren't at school tomorrow.",
            ],
            answer: 0,
            audio: "We aren't at school today.",
            explain: "aren't is the contraction of are not.",
          },
        ],
      },
      {
        id: 'a1-there-is-there-are',
        level: 'A1',
        title: 'There is / There are',
        summary:
          'Use **there is** and **there are** to say that something **exists** or is present in a place. Use **there is** with singular nouns and **there are** with plural nouns.',
        sections: [
          {
            heading: 'Singular and plural',
            body: "**There is** (there's) introduces one thing; **There are** introduces more than one. With uncountable nouns like water or money we use **there is**.",
            examples: [
              {
                en: 'There is a book on the table.',
              },
              {
                en: 'There are three chairs in the room.',
              },
              {
                en: 'There is some milk in the fridge.',
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "Negative: **There isn't / There aren't**. Question: **Is there...? / Are there...?** We often use **any** in questions and negatives with plural or uncountable nouns.",
            examples: [
              {
                en: "There isn't a problem.",
              },
              {
                en: 'Are there any shops near here?',
              },
              {
                en: "There aren't any eggs.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'There is / There are',
            columns: ['Form', 'Affirmative', 'Negative', 'Question'],
            rows: [
              ['Singular', "There is / There's a cat.", "There isn't a cat.", 'Is there a cat?'],
              ['Plural', 'There are two cats.', "There aren't any cats.", 'Are there any cats?'],
            ],
          },
        ],
        examples: [
          {
            en: "There's a supermarket on the corner.",
          },
          {
            en: 'There are many people here.',
          },
          {
            en: 'Is there a bathroom?',
          },
          {
            en: "There aren't any buses at night.",
          },
          {
            en: 'There is a lot of noise.',
          },
          {
            en: 'How many students are there?',
          },
        ],
        pitfalls: [
          {
            wrong: 'It has a book on the table.',
            right: 'There is a book on the table.',
            why: 'To express existence (hay), English uses there is/are, not it has.',
          },
          {
            wrong: 'There are a problem.',
            right: 'There is a problem.',
            why: 'Use there is with a singular noun.',
          },
          {
            wrong: 'There is many cars.',
            right: 'There are many cars.',
            why: 'Use there are with plural nouns.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-there-ex1',
            prompt: 'There ___ two windows in my room.',
            options: ['is', 'are', 'was', 'be'],
            answer: 1,
            explain: 'Two windows is plural, so we use there are.',
          },
          {
            kind: 'mcq',
            id: 'a1-there-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'There is some apples.',
              'There are some apples.',
              'It is some apples.',
              'There have some apples.',
            ],
            answer: 1,
            explain: 'Apples is plural, so there are.',
          },
          {
            kind: 'mcq',
            id: 'a1-there-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'It has a park near my house.',
              'There are a park near my house.',
              'There is a park near my house.',
              'It is a park near my house.',
            ],
            answer: 2,
            explain: 'Existence is expressed with there is, not it has.',
          },
          {
            kind: 'order',
            id: 'a1-there-ex5',
            tokens: ['There', "aren't", 'any', 'shops', 'here', '.'],
            answer: "There aren't any shops here.",
            explain: "Negative plural uses there aren't any.",
          },
          {
            kind: 'mcq',
            id: 'a1-there-ex6',
            prompt: 'There ___ a lot of milk in the bottle.',
            options: ['are', 'was', 'is', 'be'],
            answer: 2,
            explain: 'Milk is uncountable, so there is.',
          },
          {
            kind: 'mcq',
            id: 'a1-there-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'There is many people in the street.',
              'There are many people on the street.',
              'There are many people in the street.',
              'There are many people in the streets.',
            ],
            answer: 2,
            audio: 'There are many people in the street.',
            explain: 'Plural noun people takes there are.',
          },
        ],
      },
      {
        id: 'a1-present-simple',
        level: 'A1',
        title: 'Present simple (habits and facts)',
        summary:
          'Use the **present simple** for **habits**, **routines**, and **facts** that are generally true. The main rule is the **-s** ending for he, she, and it. We make negatives and questions with **do** and **does**.',
        sections: [
          {
            heading: 'The third person -s',
            body: 'Add **-s** to the verb with **he/she/it**: I work / she works. Add **-es** after o, s, ch, sh, x (go → goes, watch → watches). For verbs ending in consonant + y, change y to **-ies** (study → studies).',
            examples: [
              {
                en: 'I live in Madrid.',
              },
              {
                en: 'He goes to work by bus.',
              },
              {
                en: 'She studies English.',
              },
            ],
          },
          {
            heading: 'Negatives and questions with do/does',
            body: "Use **don't** (do not) and **doesn't** (does not) + the **base verb**. In questions use **Do/Does** + subject + base verb. After does/doesn't, the verb has **no -s**.",
            examples: [
              {
                en: "I don't eat meat.",
              },
              {
                en: "She doesn't like coffee.",
              },
              {
                en: 'Do you speak English?',
              },
            ],
          },
          {
            heading: 'Adverbs of frequency',
            body: 'We often use **always, usually, often, sometimes, never** with the present simple. They go **before the main verb** but **after** the verb be: I usually walk; she is never late.',
            examples: [
              {
                en: 'I always have breakfast.',
              },
              {
                en: 'He never drinks tea.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Present simple of work',
            columns: ['Subject', 'Affirmative', 'Negative', 'Question'],
            rows: [
              ['I/You/We/They', 'work', "don't work", 'Do you work?'],
              ['He/She/It', 'works', "doesn't work", 'Does he work?'],
            ],
          },
        ],
        examples: [
          {
            en: 'Water boils at 100 degrees.',
          },
          {
            en: "We don't have classes on Sunday.",
          },
          {
            en: 'Does she work here?',
          },
          {
            en: 'My brother plays football.',
          },
          {
            en: 'I usually get up at seven.',
          },
          {
            en: "They don't live near the centre.",
          },
        ],
        pitfalls: [
          {
            wrong: 'She work in a bank.',
            right: 'She works in a bank.',
            why: 'Add -s to the verb with he, she, it.',
          },
          {
            wrong: "He doesn't works here.",
            right: "He doesn't work here.",
            why: "After doesn't the verb has no -s.",
          },
          {
            wrong: 'Do she like tea?',
            right: 'Does she like tea?',
            why: 'Use does with he, she, it.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-ps-ex1',
            prompt: 'He ___ (watch) TV every evening.',
            options: ['watch', 'watches', 'watching', 'watched'],
            answer: 1,
            explain: 'watch becomes watches in the third person.',
          },
          {
            kind: 'mcq',
            id: 'a1-ps-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              "She don't like fish.",
              "She doesn't likes fish.",
              "She doesn't like fish.",
              'She not like fish.',
            ],
            answer: 2,
            explain: "doesn't + base verb without -s.",
          },
          {
            kind: 'mcq',
            id: 'a1-ps-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'My father work in a hospital.',
              'My father works in a hospital.',
              'My father working in a hospital.',
              'My father is work in a hospital.',
            ],
            answer: 1,
            explain: 'Third person singular needs works.',
          },
          {
            kind: 'order',
            id: 'a1-ps-ex4',
            tokens: ['Do', 'you', 'speak', 'French', '?'],
            answer: 'Do you speak French?',
            explain: 'Questions use Do + subject + base verb.',
          },
          {
            kind: 'mcq',
            id: 'a1-ps-ex6',
            prompt: "Where does 'always' go? 'I ___ go ___ to bed late.'",
            options: ['always / —', '— / always', 'go always', 'always go always'],
            answer: 0,
            explain: 'Adverbs of frequency go before the main verb: I always go.',
          },
          {
            kind: 'mcq',
            id: 'a1-ps-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'My sister study medicine in London.',
              'My sister studies medicine in London.',
              'My sisters study medicine in London.',
              'My sister studied medicine in London.',
            ],
            answer: 1,
            audio: 'My sister studies medicine in London.',
            explain: 'study becomes studies in the third person.',
          },
        ],
      },
      {
        id: 'a1-present-continuous',
        level: 'A1',
        title: 'Present continuous (actions now)',
        summary:
          'Use the **present continuous** for actions happening **now** or around the present moment. Form it with **am/is/are + verb-ing**. Compare it with the present simple, which is for habits.',
        sections: [
          {
            heading: 'Form: be + verb-ing',
            body: "Use the correct form of **be** plus the **-ing** form: I'm working, she's reading, they're playing. Spelling: make → making (drop e), run → running (double the consonant).",
            examples: [
              {
                en: "I'm studying right now.",
              },
              {
                en: 'She is cooking dinner.',
              },
              {
                en: "They're watching a film.",
              },
            ],
          },
          {
            heading: 'Now vs. habits',
            body: 'Use the **present continuous** for things happening at the moment of speaking, often with **now, right now, at the moment**. Use the **present simple** for habits with always, usually, every day.',
            examples: [
              {
                en: "I usually walk, but today I'm taking the bus.",
              },
              {
                en: "What are you doing? I'm cooking.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Present continuous',
            columns: ['Subject', 'Affirmative', 'Negative', 'Question'],
            rows: [
              ['I', "I'm working", "I'm not working", 'Am I working?'],
              ['He/She/It', "He's working", "He isn't working", 'Is he working?'],
              ['We/You/They', "We're working", "We aren't working", 'Are we working?'],
            ],
          },
        ],
        examples: [
          {
            en: "Look! It's raining.",
          },
          {
            en: 'The children are sleeping.',
          },
          {
            en: "I'm not listening to music now.",
          },
          {
            en: 'Why are you laughing?',
          },
          {
            en: "He's writing an email.",
          },
          {
            en: "We're learning English.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I working now.',
            right: "I'm working now.",
            why: 'You must include the verb be (am/is/are) before -ing.',
          },
          {
            wrong: 'She is cook dinner.',
            right: 'She is cooking dinner.',
            why: 'After be you need the -ing form, not the base verb.',
          },
          {
            wrong: 'I am wanting a coffee.',
            right: 'I want a coffee.',
            why: 'State verbs like want, like, know are not normally used in the continuous.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-pc-ex1',
            prompt: 'They ___ (play) in the garden now.',
            options: ['is playing', 'are playing', 'are play', 'playing'],
            answer: 1,
            explain: 'Action now: are playing.',
          },
          {
            kind: 'mcq',
            id: 'a1-pc-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'She is read a book.',
              'She reading a book.',
              'She is reading a book.',
              'She reads a book now is.',
            ],
            answer: 2,
            explain: 'be + verb-ing: is reading.',
          },
          {
            kind: 'mcq',
            id: 'a1-pc-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Look, it raining!',
              'Look, its raining!',
              "Look, it's raining!",
              "Look, it's rain!",
            ],
            answer: 2,
            explain: 'Add the verb be: it is raining.',
          },
          {
            kind: 'order',
            id: 'a1-pc-ex5',
            tokens: ['What', 'are', 'you', 'doing', '?'],
            answer: 'What are you doing?',
            explain: 'Question word + be + subject + -ing.',
          },
          {
            kind: 'mcq',
            id: 'a1-pc-ex6',
            prompt: "Choose: 'I usually drive, but today I ___ the train.'",
            options: ['take', 'am taking', 'takes', 'taking'],
            answer: 1,
            explain: 'Today (now) needs the continuous: am taking.',
          },
          {
            kind: 'mcq',
            id: 'a1-pc-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The baby was sleeping at the moment.',
              'The baby is sleeping at the moment.',
              'The baby is sleeping for the moment.',
              'The babies are sleeping at the moment.',
            ],
            answer: 1,
            audio: 'The baby is sleeping at the moment.',
            explain: 'At the moment signals the present continuous.',
          },
        ],
      },
      {
        id: 'a1-have-can-would-like',
        level: 'A1',
        title: 'Have / have got, can, and would like',
        summary:
          "Use **have** or **have got** for **possession**, family, and characteristics. Use **can / can't** for **ability** and **permission**, and **would like** to ask for things politely. These are very common in everyday English.",
        sections: [
          {
            heading: 'Have and have got',
            body: "Both **have** and **have got** mean *tener*. With have we use do/does for questions and negatives: **Do you have...? I don't have...** With have got we use the verb itself: **Have you got...? I haven't got...**",
            examples: [
              {
                en: "I have two brothers. / I've got two brothers.",
              },
              {
                en: 'Do you have a car?',
              },
              {
                en: "She hasn't got a pen.",
              },
            ],
          },
          {
            heading: "Can and can't",
            body: "**Can** expresses **ability** and **permission**. It is followed by the **base verb** with no to: **I can swim** (not *I can to swim*). The negative is **can't / cannot**. Can is the same for all subjects.",
            examples: [
              {
                en: 'I can speak two languages.',
              },
              {
                en: "She can't drive.",
              },
              {
                en: 'Can I open the window?',
              },
            ],
          },
          {
            heading: 'Would like',
            body: "**Would like** (I'd like) is a polite way to say *want*. Use it with a **noun** or a **to-infinitive**: I'd like a coffee; I'd like to go home. In questions: **Would you like...?**",
            examples: [
              {
                en: "I'd like a glass of water.",
              },
              {
                en: 'Would you like to dance?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'can for ability',
            columns: ['Form', 'Example'],
            rows: [
              ['Affirmative', 'I can cook.'],
              ['Negative', "I can't cook."],
              ['Question', 'Can you cook?'],
              ['Short answer', "Yes, I can. / No, I can't."],
            ],
          },
        ],
        examples: [
          {
            en: "He's got blue eyes.",
          },
          {
            en: "We don't have time.",
          },
          {
            en: 'Can you help me, please?',
          },
          {
            en: "I can't find my keys.",
          },
          {
            en: "I'd like to learn the guitar.",
          },
          {
            en: 'Would you like some tea?',
          },
        ],
        pitfalls: [
          {
            wrong: 'I can to swim.',
            right: 'I can swim.',
            why: 'After can we use the base verb with no to.',
          },
          {
            wrong: 'She cans drive.',
            right: 'She can drive.',
            why: 'Can never takes -s; it is the same for all subjects.',
          },
          {
            wrong: 'I want a coffee, please. (in a polite request)',
            right: "I'd like a coffee, please.",
            why: 'Would like is more polite than want for requests.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-have-ex1',
            prompt: "I ___ swim, but I can't dive.",
            options: ["can't", 'can', 'could', 'would'],
            answer: 1,
            explain: 'can expresses ability.',
          },
          {
            kind: 'mcq',
            id: 'a1-have-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'He can to play tennis.',
              'He cans play tennis.',
              'He can play tennis.',
              'He can plays tennis.',
            ],
            answer: 2,
            explain: 'can + base verb, no -s, no to.',
          },
          {
            kind: 'mcq',
            id: 'a1-have-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Do you have got a bike?',
              'Do you got a bike?',
              'Are you got a bike?',
              'Have you got a bike?',
            ],
            answer: 3,
            explain:
              'Use either have got (Have you got...?) or have with do (Do you have...?), not both.',
          },
          {
            kind: 'order',
            id: 'a1-have-ex5',
            tokens: ['Would', 'you', 'like', 'to', 'come', '?'],
            answer: 'Would you like to come?',
            explain: 'would like + to-infinitive.',
          },
          {
            kind: 'mcq',
            id: 'a1-have-ex6',
            prompt: 'She ___ got two children.',
            options: ['have', 'has', 'had', 'haves'],
            answer: 1,
            explain: 'Third person of have got is has got.',
          },
          {
            kind: 'mcq',
            id: 'a1-have-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'I can find my keys.',
              "I can't find my key.",
              "I can't find my keys.",
              "I couldn't find my keys.",
            ],
            answer: 2,
            audio: "I can't find my keys.",
            explain: "can't is the negative of can.",
          },
        ],
      },
      {
        id: 'a1-past-simple-be',
        level: 'A1',
        title: 'Past simple of be (was / were)',
        summary:
          'Use **was** and **were** to talk about states and situations in the **past**. Use **was** with I, he, she, it and **were** with you, we, they. This is the past of the verb to be.',
        sections: [
          {
            heading: 'Was and were',
            body: '**I/he/she/it** → **was**; **you/we/they** → **were**. We use them for the past of be: descriptions, locations, age, and feelings in the past.',
            examples: [
              {
                en: 'I was at home yesterday.',
              },
              {
                en: 'They were happy.',
              },
              {
                en: 'It was cold last night.',
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "Negative: **wasn't / weren't**. Question: put **was/were** before the subject: **Was she there? Were you tired?** Short answers: Yes, I was. / No, they weren't.",
            examples: [
              {
                en: "I wasn't at the party.",
              },
              {
                en: 'Were you at school?',
              },
              {
                en: "She wasn't happy.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past of be',
            columns: ['Subject', 'Affirmative', 'Negative', 'Question'],
            rows: [
              ['I/He/She/It', 'was', "wasn't", 'Was I?'],
              ['You/We/They', 'were', "weren't", 'Were you?'],
            ],
          },
        ],
        examples: [
          {
            en: 'My grandparents were farmers.',
          },
          {
            en: 'The film was very good.',
          },
          {
            en: "We weren't ready.",
          },
          {
            en: 'Where were you last night?',
          },
          {
            en: 'He was born in 1990.',
          },
          {
            en: 'Was it expensive? Yes, it was.',
          },
        ],
        pitfalls: [
          {
            wrong: 'They was at home.',
            right: 'They were at home.',
            why: 'Use were with they, we, and you.',
          },
          {
            wrong: 'I were tired.',
            right: 'I was tired.',
            why: 'Use was with I, he, she, it.',
          },
          {
            wrong: 'He is born in 1990.',
            right: 'He was born in 1990.',
            why: 'Birth is a past event, so use was born.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-waswere-ex1',
            prompt: 'We ___ very tired after the trip.',
            options: ['was', 'were', 'are', 'been'],
            answer: 1,
            explain: 'With we we use were.',
          },
          {
            kind: 'mcq',
            id: 'a1-waswere-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'She were a nurse.',
              'She was a nurse.',
              'She is were a nurse.',
              'She were nurse.',
            ],
            answer: 1,
            explain: 'With she we use was.',
          },
          {
            kind: 'mcq',
            id: 'a1-waswere-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'They was at the cinema.',
              'They were at the cinema.',
              'They were at cinema.',
              'They been at the cinema.',
            ],
            answer: 1,
            explain: 'they takes were.',
          },
          {
            kind: 'order',
            id: 'a1-waswere-ex5',
            tokens: ['I', "wasn't", 'at', 'home', '.'],
            answer: "I wasn't at home.",
            explain: "Negative of was is wasn't.",
          },
          {
            kind: 'mcq',
            id: 'a1-waswere-ex6',
            prompt: 'It ___ a wonderful day.',
            options: ['were', 'was', 'is', 'been'],
            answer: 1,
            explain: 'With it we use was.',
          },
          {
            kind: 'mcq',
            id: 'a1-waswere-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'My parents was born in Spain.',
              'My parent was born in Spain.',
              'My parents were born in Spain.',
              'My parents are born in Spain.',
            ],
            answer: 2,
            audio: 'My parents were born in Spain.',
            explain: 'were born for a plural subject in the past.',
          },
        ],
      },
      {
        id: 'a1-past-simple',
        level: 'A1',
        title: 'Past simple (regular and irregular)',
        summary:
          'Use the **past simple** for finished actions in the **past**. Regular verbs add **-ed**; many common verbs are **irregular** and must be learned. Negatives and questions use **did** + base verb.',
        sections: [
          {
            heading: 'Regular verbs: -ed',
            body: 'Add **-ed** to regular verbs: work → worked, play → played. Verbs ending in e add only **-d** (like → liked). Consonant + y becomes **-ied** (study → studied). The form is the same for all subjects.',
            examples: [
              {
                en: 'I worked all day.',
              },
              {
                en: 'She studied for the exam.',
              },
              {
                en: 'We watched a film.',
              },
            ],
          },
          {
            heading: 'Irregular verbs',
            body: 'Many frequent verbs have **special past forms**: go → went, have → had, see → saw, eat → ate, make → made, take → took, get → got. You need to memorise these.',
            examples: [
              {
                en: 'I went to the beach.',
              },
              {
                en: 'He had a great time.',
              },
              {
                en: 'We saw a good film.',
              },
            ],
          },
          {
            heading: 'Negatives and questions with did',
            body: "Use **didn't** (did not) + **base verb** for negatives, and **Did** + subject + **base verb** for questions. After did/didn't, never use the past form: **I didn't go** (not *didn't went*).",
            examples: [
              {
                en: "I didn't see her.",
              },
              {
                en: 'Did you go out?',
              },
              {
                en: "She didn't call me.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common irregular verbs',
            columns: ['Base', 'Past', 'Example'],
            rows: [
              ['go', 'went', 'I went home.'],
              ['have', 'had', 'We had lunch.'],
              ['see', 'saw', 'I saw John.'],
              ['buy', 'bought', 'She bought a dress.'],
              ['come', 'came', 'They came late.'],
            ],
          },
        ],
        examples: [
          {
            en: 'We arrived at eight.',
          },
          {
            en: 'He bought a new phone.',
          },
          {
            en: "I didn't like the food.",
          },
          {
            en: 'Did they enjoy the party?',
          },
          {
            en: 'She came home early.',
          },
          {
            en: "We didn't have time.",
          },
        ],
        pitfalls: [
          {
            wrong: "I didn't went to school.",
            right: "I didn't go to school.",
            why: "After didn't use the base verb, not the past form.",
          },
          {
            wrong: 'Did you saw the film?',
            right: 'Did you see the film?',
            why: 'After did in questions use the base verb.',
          },
          {
            wrong: 'She goed home.',
            right: 'She went home.',
            why: 'Go is irregular: the past is went, not goed.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-past-ex1',
            prompt: 'Yesterday I ___ (go) to the gym.',
            options: ['went', 'goed', 'gone', 'going'],
            answer: 0,
            explain: 'The past of go is went.',
          },
          {
            kind: 'mcq',
            id: 'a1-past-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              "I didn't saw him.",
              "I didn't see him.",
              'I not saw him.',
              "I don't saw him.",
            ],
            answer: 1,
            explain: "didn't + base verb see.",
          },
          {
            kind: 'mcq',
            id: 'a1-past-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'She studyed English last year.',
              'She studied English last year.',
              'She study English last year.',
              'She studies English last year.',
            ],
            answer: 1,
            explain: 'Consonant + y changes to -ied: studied.',
          },
          {
            kind: 'order',
            id: 'a1-past-ex5',
            tokens: ['Did', 'you', 'see', 'the', 'match', '?'],
            answer: 'Did you see the match?',
            explain: 'Did + subject + base verb.',
          },
          {
            kind: 'mcq',
            id: 'a1-past-ex6',
            prompt: 'We ___ (watch) a film last night.',
            options: ['watching', 'watch', 'watched', 'watchd'],
            answer: 2,
            explain: 'Regular verb watch becomes watched.',
          },
          {
            kind: 'mcq',
            id: 'a1-past-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "They didn't came to the party.",
              "They didn't come to the party.",
              "They don't come to the party.",
              "They didn't come to the parties.",
            ],
            answer: 1,
            audio: "They didn't come to the party.",
            explain: "didn't + base verb come.",
          },
        ],
      },
      {
        id: 'a1-future-will-going-to',
        level: 'A1',
        title: 'Future: will, going to, and imperatives',
        summary:
          'Talk about the future with **will** for predictions and decisions, and **going to** for plans and intentions. Also learn **imperatives** to give orders, instructions, and advice.',
        sections: [
          {
            heading: 'Will',
            body: "Use **will** (+ base verb) for predictions, promises, and decisions made at the moment of speaking. Will is the same for all subjects. Negative: **won't**. Short form: **I'll, she'll**.",
            examples: [
              {
                en: 'It will rain tomorrow.',
              },
              {
                en: "I'll help you.",
              },
              {
                en: "She won't be late.",
              },
            ],
          },
          {
            heading: 'Going to',
            body: 'Use **be going to + base verb** for **plans** and **intentions** already decided, and for predictions based on what you can see now. Form: am/is/are going to.',
            examples: [
              {
                en: "I'm going to visit my family.",
              },
              {
                en: "They're going to buy a house.",
              },
              {
                en: "Look at the clouds! It's going to rain.",
              },
            ],
          },
          {
            heading: 'Imperatives',
            body: "The **imperative** uses the **base verb** with no subject to give orders, instructions, or advice: **Open the door. Don't worry.** Add **please** to be polite. The negative is **Don't + verb**.",
            examples: [
              {
                en: 'Sit down, please.',
              },
              {
                en: "Don't touch that.",
              },
              {
                en: 'Turn left at the corner.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'will vs going to',
            columns: ['Use', 'Form', 'Example'],
            rows: [
              ['Prediction / decision now', 'will + base', "I'll call you later."],
              ['Plan / intention', 'going to + base', "I'm going to study tonight."],
              ['Order / instruction', 'base verb', 'Close the window.'],
            ],
          },
        ],
        examples: [
          {
            en: "I think she'll pass the exam.",
          },
          {
            en: "We're going to travel in summer.",
          },
          {
            en: "Don't be late!",
          },
          {
            en: "I'll have a coffee, please.",
          },
          {
            en: 'Be careful!',
          },
          {
            en: 'What are you going to do tonight?',
          },
        ],
        pitfalls: [
          {
            wrong: 'I will to call you.',
            right: 'I will call you.',
            why: 'After will use the base verb with no to.',
          },
          {
            wrong: 'She going to study.',
            right: 'She is going to study.',
            why: 'Going to needs the verb be (am/is/are).',
          },
          {
            wrong: 'You sit down, please. (as a command)',
            right: 'Sit down, please.',
            why: 'Imperatives have no subject; just use the base verb.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-fut-ex1',
            prompt: "I'm tired. I think I ___ go to bed.",
            options: ['would', 'will', 'shall', 'can'],
            answer: 1,
            explain: 'A decision made now uses will.',
          },
          {
            kind: 'mcq',
            id: 'a1-fut-ex2',
            prompt: 'Choose the best sentence for a fixed plan.',
            options: [
              'I will visit Rome next week (already booked).',
              "I'm going to visit Rome next week.",
              'I visit Rome next week.',
              'I visiting Rome next week.',
            ],
            answer: 1,
            explain: 'Plans already decided use going to.',
          },
          {
            kind: 'mcq',
            id: 'a1-fut-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'They going to move house.',
              "They're going to move house.",
              "They're go to move house.",
              "They're going to moves house.",
            ],
            answer: 1,
            explain: 'going to needs the verb be.',
          },
          {
            kind: 'order',
            id: 'a1-fut-ex5',
            tokens: ['What', 'are', 'you', 'going', 'to', 'do', '?'],
            answer: 'What are you going to do?',
            explain: 'Question with going to.',
          },
          {
            kind: 'mcq',
            id: 'a1-fut-ex6',
            prompt: "Complete: 'Look at those clouds! It ___ rain.'",
            options: ['will', 'is going to', 'go to', 'going'],
            answer: 1,
            explain: 'Prediction from present evidence uses going to.',
          },
          {
            kind: 'mcq',
            id: 'a1-fut-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Turn right and then go straight on.',
              'Turn left and then goes straight on.',
              'Turn left and then go straight on.',
              'Turn left and than go straight on.',
            ],
            answer: 2,
            audio: 'Turn left and then go straight on.',
            explain: 'Imperatives use the base verb with no subject.',
          },
        ],
      },
      {
        id: 'a1-pronouns-possessives',
        level: 'A1',
        title: 'Pronouns and possessives',
        summary:
          "Learn **subject pronouns** (I, you, he...), **object pronouns** (me, you, him...), **possessive adjectives** (my, your, his...), and **possessive pronouns** (mine, yours...). Also learn the **possessive 's** to show who owns something.",
        sections: [
          {
            heading: 'Subject and object pronouns',
            body: '**Subject pronouns** (I, you, he, she, it, we, they) come before the verb. **Object pronouns** (me, you, him, her, it, us, them) come after the verb or a preposition.',
            examples: [
              {
                en: 'She loves him.',
              },
              {
                en: 'I can see them.',
              },
              {
                en: 'Give it to me.',
              },
            ],
          },
          {
            heading: 'Possessive adjectives and pronouns',
            body: "**Possessive adjectives** (my, your, his, her, its, our, their) go before a noun. **Possessive pronouns** (mine, yours, his, hers, ours, theirs) replace the noun. Note: **its** (possessive) has no apostrophe; **it's** means it is.",
            examples: [
              {
                en: "This is my book. It's mine.",
              },
              {
                en: 'Is this your pen or hers?',
              },
              {
                en: 'Their house is bigger than ours.',
              },
            ],
          },
          {
            heading: "Possessive 's",
            body: "To say who owns something, add **'s** to a person or name: **Ana's car, my brother's house**. For plural nouns ending in s, add just an apostrophe: **my parents' house**.",
            examples: [
              {
                en: "This is Maria's bag.",
              },
              {
                en: "The students' books are here.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Pronouns and possessives',
            columns: ['Subject', 'Object', 'Possessive adj.', 'Possessive pron.'],
            rows: [
              ['I', 'me', 'my', 'mine'],
              ['you', 'you', 'your', 'yours'],
              ['he', 'him', 'his', 'his'],
              ['she', 'her', 'her', 'hers'],
              ['we', 'us', 'our', 'ours'],
              ['they', 'them', 'their', 'theirs'],
            ],
          },
        ],
        examples: [
          {
            en: 'We invited them to our party.',
          },
          {
            en: 'Her name is Sofia.',
          },
          {
            en: "That book isn't yours, it's mine.",
          },
          {
            en: 'Can you help us?',
          },
          {
            en: "This is John's car.",
          },
          {
            en: 'The dog wagged its tail.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The car of my brother is red.',
            right: "My brother's car is red.",
            why: "English usually shows possession with 's, not with 'of'.",
          },
          {
            wrong: 'She loves he.',
            right: 'She loves him.',
            why: 'After a verb use the object pronoun him.',
          },
          {
            wrong: "The dog hurt it's leg.",
            right: 'The dog hurt its leg.',
            why: "Possessive its has no apostrophe; it's means it is.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-pron-ex1',
            prompt: 'This is ___ house. (de nosotros)',
            options: ['your', 'our', 'their', 'us'],
            answer: 1,
            explain: 'our is the possessive adjective for we.',
          },
          {
            kind: 'mcq',
            id: 'a1-pron-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'I saw she yesterday.',
              'I saw her yesterday.',
              'I saw hers yesterday.',
              'I saw their yesterday.',
            ],
            answer: 1,
            explain: 'After the verb use the object pronoun her.',
          },
          {
            kind: 'mcq',
            id: 'a1-pron-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The house of my parents is big.',
              "My parents's house is big.",
              "My parents' house is big.",
              "My parent's house is big.",
            ],
            answer: 2,
            explain: "Use the possessive 's (here parents') instead of 'of'.",
          },
          {
            kind: 'order',
            id: 'a1-pron-ex5',
            tokens: ['Can', 'you', 'give', 'it', 'to', 'me', '?'],
            answer: 'Can you give it to me?',
            explain: 'Object pronouns it and me come after the verb/preposition.',
          },
          {
            kind: 'mcq',
            id: 'a1-pron-ex6',
            prompt: "Complete: 'Is this your bag?' 'No, it's ___.'",
            options: ['her', 'hers', 'she', "her's"],
            answer: 1,
            explain: 'hers is the possessive pronoun for she.',
          },
          {
            kind: 'mcq',
            id: 'a1-pron-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Their car is faster than our.',
              'There car is faster than ours.',
              'Their car is faster than ours.',
              'Their cars are faster than ours.',
            ],
            answer: 2,
            audio: 'Their car is faster than ours.',
            explain: 'their (adjective) and ours (pronoun) are possessives.',
          },
        ],
      },
      {
        id: 'a1-articles-quantifiers',
        level: 'A1',
        title: 'Articles, demonstratives, and some/any',
        summary:
          'Learn when to use **a/an**, **the**, or **no article**, and the demonstratives **this/that/these/those**. Then learn **countable and uncountable** nouns with **some, any, how much, how many**.',
        sections: [
          {
            heading: 'a / an / the / zero article',
            body: 'Use **a/an** with singular countable nouns mentioned for the first time (**a** before a consonant sound, **an** before a vowel sound). Use **the** for something specific or already known. Use **no article** for plurals and uncountables in general statements.',
            examples: [
              {
                en: 'I have a dog and an umbrella.',
              },
              {
                en: 'The dog is in the garden.',
              },
              {
                en: 'I like music.',
              },
            ],
          },
          {
            heading: 'Demonstratives',
            body: 'Use **this** (singular, near) and **these** (plural, near); **that** (singular, far) and **those** (plural, far).',
            examples: [
              {
                en: 'This book is interesting.',
              },
              {
                en: 'Those cars are expensive.',
              },
            ],
          },
          {
            heading: 'some / any and how much / how many',
            body: 'Use **some** in affirmatives and **any** in negatives and questions, with plural or uncountable nouns. Ask quantity with **how many** (countable) and **how much** (uncountable).',
            examples: [
              {
                en: 'I have some friends here.',
              },
              {
                en: "There isn't any sugar.",
              },
              {
                en: 'How much money do you have?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Quantifiers',
            columns: ['Type', 'Affirmative', 'Negative / Question', 'How...?'],
            rows: [
              ['Countable (plural)', 'some apples', 'any apples', 'How many apples?'],
              ['Uncountable', 'some water', 'any water', 'How much water?'],
            ],
          },
        ],
        examples: [
          {
            en: 'She is a teacher.',
          },
          {
            en: 'Can I have an apple?',
          },
          {
            en: 'The sun is bright today.',
          },
          {
            en: 'Are there any eggs?',
          },
          {
            en: "I'd like some water.",
          },
          {
            en: 'How many people are coming?',
          },
        ],
        pitfalls: [
          {
            wrong: 'She is teacher.',
            right: 'She is a teacher.',
            why: 'Use a/an before singular jobs and countable nouns.',
          },
          {
            wrong: 'I have an university degree.',
            right: 'I have a university degree.',
            why: "University starts with a 'y' sound, so use a, not an.",
          },
          {
            wrong: 'There are any apples on the table.',
            right: 'There are some apples on the table.',
            why: 'Use some in affirmative sentences; any is for negatives and questions.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-art-ex1',
            prompt: 'I have ___ orange and a banana.',
            options: ['a', 'an', 'the', 'some'],
            answer: 1,
            explain: 'Orange begins with a vowel sound, so an.',
          },
          {
            kind: 'mcq',
            id: 'a1-art-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'Do you have some sugar?',
              'Do you have any sugar?',
              'Do you have a sugar?',
              'Do you have the any sugar?',
            ],
            answer: 1,
            explain: 'Use any in questions with uncountable nouns.',
          },
          {
            kind: 'mcq',
            id: 'a1-art-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'How much apples do you want?',
              'How many apples do you want?',
              'How many apple do you want?',
              'How much apple do you want?',
            ],
            answer: 1,
            explain: 'Apples are countable, so how many.',
          },
          {
            kind: 'order',
            id: 'a1-art-ex5',
            tokens: ['There', "isn't", 'any', 'milk', '.'],
            answer: "There isn't any milk.",
            explain: 'any with negative and uncountable noun.',
          },
          {
            kind: 'mcq',
            id: 'a1-art-ex6',
            prompt: "Complete: '___ book on the table is mine.' (a specific known book)",
            options: ['A', 'An', 'The', '—'],
            answer: 2,
            explain: 'Use the for a specific, identified noun.',
          },
          {
            kind: 'mcq',
            id: 'a1-art-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "I'd like any water and a sandwich, please.",
              "I'd like some water and a sandwich, please.",
              "I'd like some water and the sandwich, please.",
              'I like some water and a sandwich, please.',
            ],
            answer: 1,
            audio: "I'd like some water and a sandwich, please.",
            explain: 'some with uncountable water, a with countable sandwich.',
          },
        ],
      },
      {
        id: 'a1-plurals-adjectives-comparatives',
        level: 'A1',
        title: 'Plurals, adjectives, comparatives, and connectors',
        summary:
          'Form **plural** nouns, place **adjectives** correctly, and make **comparatives** and **superlatives**. Also learn key **prepositions of place and time** and the connectors **and, but, because**.',
        sections: [
          {
            heading: 'Plurals and adjective position',
            body: 'Most plurals add **-s** (cat → cats); after s, ch, sh, x add **-es** (box → boxes). Some are irregular (man → men, child → children). **Adjectives** go **before the noun** and never change for plural: **a red car, two red cars**.',
            examples: [
              {
                en: 'I have three big dogs.',
              },
              {
                en: 'There are two children outside.',
              },
              {
                en: 'She has beautiful eyes.',
              },
            ],
          },
          {
            heading: 'Comparatives and superlatives',
            body: 'Short adjectives: **-er** (cheaper) for comparatives and **the -est** (the cheapest) for superlatives, with **than** to compare. Long adjectives use **more** and **the most** (more expensive, the most expensive). Irregular: good → better → the best; bad → worse → the worst.',
            examples: [
              {
                en: 'This car is cheaper than that one.',
              },
              {
                en: 'She is the tallest in the class.',
              },
              {
                en: 'English is more useful than Latin.',
              },
            ],
          },
          {
            heading: 'Prepositions and connectors',
            body: 'Place: **in** (countries, rooms), **on** (surfaces), **at** (points). Time: **at** (times), **on** (days), **in** (months, years). Connect ideas with **and** (addition), **but** (contrast), and **because** (reason).',
            examples: [
              {
                en: 'The keys are on the table.',
              },
              {
                en: 'We meet at 5 on Monday.',
              },
              {
                en: "I'm tired because I worked a lot.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Comparatives and superlatives',
            columns: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
              ['cheap', 'cheaper', 'the cheapest'],
              ['big', 'bigger', 'the biggest'],
              ['expensive', 'more expensive', 'the most expensive'],
              ['good', 'better', 'the best'],
              ['bad', 'worse', 'the worst'],
            ],
          },
          {
            caption: 'Prepositions of time',
            columns: ['Preposition', 'Use', 'Example'],
            rows: [
              ['at', 'times', "at 7 o'clock"],
              ['on', 'days/dates', 'on Monday'],
              ['in', 'months/years', 'in July, in 2020'],
            ],
          },
        ],
        examples: [
          {
            en: 'My city is bigger than yours.',
          },
          {
            en: 'This is the best restaurant in town.',
          },
          {
            en: 'There are some old books on the shelf.',
          },
          {
            en: "I like coffee but I don't like tea.",
          },
          {
            en: 'We were born in 1995.',
          },
          {
            en: "He's happy because he passed the exam.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I have three cars red.',
            right: 'I have three red cars.',
            why: 'Adjectives go before the noun in English.',
          },
          {
            wrong: 'She is more taller than me.',
            right: 'She is taller than me.',
            why: "Don't use more with a short adjective that already takes -er.",
          },
          {
            wrong: "I'm tired because of I worked a lot.",
            right: "I'm tired because I worked a lot.",
            why: 'Use because + clause; because of is followed by a noun.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-plur-ex1',
            prompt: 'There are two ___ in the room. (child)',
            options: ['childs', 'children', 'childrens', 'child'],
            answer: 1,
            explain: 'The plural of child is children.',
          },
          {
            kind: 'mcq',
            id: 'a1-plur-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'This is more cheap than that.',
              'This is cheaper than that.',
              'This is cheapest than that.',
              'This is more cheaper than that.',
            ],
            answer: 1,
            explain: 'Short adjective: cheaper + than.',
          },
          {
            kind: 'mcq',
            id: 'a1-plur-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'She has a dress beautiful.',
              'She has beautiful dress.',
              'She has an beautiful dress.',
              'She has a beautiful dress.',
            ],
            answer: 3,
            explain: 'The adjective goes before the noun.',
          },
          {
            kind: 'order',
            id: 'a1-plur-ex5',
            tokens: ['We', 'meet', 'at', 'six', 'on', 'Friday', '.'],
            answer: 'We meet at six on Friday.',
            explain: 'at for time, on for days.',
          },
          {
            kind: 'mcq',
            id: 'a1-plur-ex6',
            prompt: "Complete: 'The cat is ___ the table.' (surface)",
            options: ['in', 'on', 'at', 'to'],
            answer: 1,
            explain: 'Use on for surfaces.',
          },
          {
            kind: 'mcq',
            id: 'a1-plur-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'London is bigger than Madrid but Madrid is sunny.',
              'London is biggest than Madrid but Madrid is sunnier.',
              'London is bigger than Madrid and Madrid is sunnier.',
              'London is bigger than Madrid but Madrid is sunnier.',
            ],
            answer: 3,
            audio: 'London is bigger than Madrid but Madrid is sunnier.',
            explain: 'Comparatives bigger and sunnier joined by but.',
          },
        ],
      },
    ],
  },
  {
    level: 'A2',
    title: 'A2 · Everyday Grammar',
    blurb:
      'Build real fluency: talk about experiences, plans, the past, comparisons, rules and conditions.',
    lessons: [
      {
        id: 'a2-present-perfect',
        level: 'A2',
        title: 'Present Perfect: experiences and recent news',
        summary:
          'Use the **present perfect** (have/has + past participle) to talk about life experiences and recent actions when the exact time is not important. Common partners are **ever/never**, **already/yet**, and **for/since**.',
        sections: [
          {
            heading: 'Form and basic use',
            body: 'Build the present perfect with **have/has + past participle** (worked, gone, seen). Use it for an experience at an unspecified time (**I have visited Rome**) or for a past action with a result now (**She has lost her keys**). Do not say the exact past time with it.',
            examples: [
              {
                en: 'I have eaten sushi many times.',
              },
              {
                en: 'He has broken his phone.',
              },
            ],
          },
          {
            heading: 'ever, never, already, yet',
            body: "Use **ever** in questions (**Have you ever flown?**) and **never** for no experience (**I have never flown**). Use **already** for something done sooner than expected (**I have already finished**), and **yet** in negatives and questions for something expected but not done (**They haven't arrived yet**).",
            examples: [
              {
                en: 'Have you ever met a famous person?',
              },
              {
                en: "We haven't decided yet.",
              },
            ],
          },
          {
            heading: 'for and since',
            body: 'Use **for** with a length of time (**for two years**, **for ten minutes**) and **since** with a starting point (**since 2020**, **since Monday**). Both describe a situation that started in the past and continues now.',
            examples: [
              {
                en: 'I have lived here for five years.',
              },
              {
                en: 'She has known him since 2019.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'for vs since',
            columns: ['Word', 'Used with', 'Example'],
            rows: [
              ['for', 'a period of time', 'for three days'],
              ['since', 'a point in time', 'since Friday'],
            ],
          },
        ],
        examples: [
          {
            en: 'Have you ever been to Japan?',
          },
          {
            en: 'I have never tried snowboarding.',
          },
          {
            en: 'The film has already started.',
          },
          {
            en: "We haven't eaten yet.",
          },
          {
            en: 'They have been married for ten years.',
          },
          {
            en: 'I have worked here since March.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have seen her yesterday.',
            right: 'I saw her yesterday.',
            why: "Do not use the present perfect with a finished time word like 'yesterday'. Use the past simple instead.",
          },
          {
            wrong: 'I live here since 2020.',
            right: 'I have lived here since 2020.',
            why: 'For a situation that started in the past and continues, English uses the present perfect, not the present simple.',
          },
          {
            wrong: 'I have lived here since five years.',
            right: 'I have lived here for five years.',
            why: "Use 'for' with a length of time, and 'since' only with a starting point.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-pp-ex1',
            prompt: 'Choose the correct sentence.',
            options: [
              'I have visited Paris last year.',
              'I have visited Paris twice.',
              'I have visit Paris twice.',
            ],
            answer: 1,
            explain: "No exact past time with present perfect, and the participle is 'visited'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pp-ex2',
            prompt: 'We have lived in this city ___ ten years.',
            options: ['since', 'for', 'during', 'in'],
            answer: 1,
            explain: "Use 'for' with a duration like 'ten years'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pp-ex3',
            prompt: 'She has worked here ___ January.',
            options: ['for', 'since', 'from', 'in'],
            answer: 1,
            explain: "Use 'since' with a point in time like 'January'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pp-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              'Have you ever eat octopus?',
              'Have you ever ate octopus?',
              'Have you ever eaten octopus?',
              'Did you ever eaten octopus?',
            ],
            answer: 2,
            explain: "After 'have', use the past participle 'eaten'.",
          },
          {
            kind: 'order',
            id: 'a2-pp-ex5',
            tokens: ['They', "haven't", 'finished', 'yet'],
            answer: "They haven't finished yet.",
            explain: "'yet' goes at the end of a negative sentence.",
          },
          {
            kind: 'mcq',
            id: 'a2-pp-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'I have never been to South Africa.',
              'I have never been to South America.',
              'I had never been to South America.',
              'I have never been in South America.',
            ],
            answer: 1,
            audio: 'I have never been to South America.',
            explain: "Listen for 'have never been', the present perfect of experience.",
          },
        ],
      },
      {
        id: 'a2-future-forms',
        level: 'A2',
        title: 'Talking about the future: will, going to, present continuous',
        summary:
          'Use **going to** for plans and predictions from evidence, **will** for decisions made now, offers and predictions from opinion, and the **present continuous** for fixed arrangements with a time and place.',
        sections: [
          {
            heading: 'going to for plans and evidence',
            body: "Use **be going to + verb** for intentions decided before now (**I'm going to study law**) and for predictions based on what you can see (**Look at those clouds — it's going to rain**).",
            examples: [
              {
                en: "We're going to move to Madrid.",
              },
              {
                en: "She's going to have a baby.",
              },
            ],
          },
          {
            heading: 'will for instant decisions and offers',
            body: "Use **will + verb** for a decision made at the moment of speaking (**I'll help you**), for offers and promises, and for predictions you think or believe (**I think it will be fine**). The short form is **'ll**, and the negative is **won't**.",
            examples: [
              {
                en: "The phone is ringing — I'll get it.",
              },
              {
                en: 'I think she will win.',
              },
            ],
          },
          {
            heading: 'Present continuous for arrangements',
            body: "Use the **present continuous** (be + -ing) for fixed future arrangements, usually with another person and a clear time (**I'm meeting Ana at six**). It feels personal and confirmed, like an appointment in your calendar.",
            examples: [
              {
                en: "We're flying to Rome on Friday.",
              },
              {
                en: "I'm seeing the doctor tomorrow.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Which future form?',
            columns: ['Situation', 'Form', 'Example'],
            rows: [
              ['Plan / intention', 'going to', "I'm going to call her."],
              ['Decision now / offer', 'will', "I'll call her."],
              ['Fixed arrangement', 'present continuous', "I'm calling her at five."],
            ],
          },
        ],
        examples: [
          {
            en: "It's going to be a long day.",
          },
          {
            en: "Don't worry, I'll do it.",
          },
          {
            en: "They're getting married in July.",
          },
          {
            en: "I'm going to learn to drive this year.",
          },
          {
            en: 'Maybe it will snow tonight.',
          },
          {
            en: "We're having dinner with them on Saturday.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I will buy a new car next year. I already chose the model.',
            right: "I'm going to buy a new car next year. I already chose the model.",
            why: "For a plan decided before now, use 'going to', not 'will'.",
          },
          {
            wrong: 'Wait, I am going to help you with that bag right now.',
            right: "Wait, I'll help you with that bag right now.",
            why: "An offer or decision made at the moment of speaking uses 'will', not 'going to'.",
          },
          {
            wrong: 'I meet Ana tomorrow at six.',
            right: "I'm meeting Ana tomorrow at six.",
            why: 'For a fixed personal arrangement, use the present continuous, not the present simple.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-fut-ex1',
            prompt: 'The phone is ringing. Which is best?',
            options: ["I'm going to answer it.", "I'll answer it.", 'I answer it.'],
            answer: 1,
            explain: "An instant decision uses 'will'.",
          },
          {
            kind: 'mcq',
            id: 'a2-fut-ex2',
            prompt: 'Choose the best future form: a fixed arrangement with a friend at 8.',
            options: ["I'll meet Sam at 8.", 'I meet Sam at 8.', "I'm meeting Sam at 8."],
            answer: 2,
            explain: 'Fixed personal arrangements use the present continuous.',
          },
          {
            kind: 'mcq',
            id: 'a2-fut-ex3',
            prompt: 'Look at that sky! It ___ rain.',
            options: ['will', 'going to', 'is going to', 'is going'],
            answer: 2,
            explain: "Evidence you can see (clouds) means 'going to'.",
          },
          {
            kind: 'mcq',
            id: 'a2-fut-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              'We will travel to Japan in spring; we booked the flights last week.',
              "We're going travel to Japan in spring; we booked the flights last week.",
              "We're going to travel to Japan in spring; we booked the flights last week.",
              'We travel to Japan in spring; we booked the flights last week.',
            ],
            answer: 2,
            explain: "A plan already decided uses 'going to'.",
          },
          {
            kind: 'order',
            id: 'a2-fut-ex5',
            tokens: ['I', 'think', 'she', 'will', 'like', 'it'],
            answer: 'I think she will like it.',
            explain: "Opinion-based predictions use 'will'.",
          },
          {
            kind: 'mcq',
            id: 'a2-fut-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "We're flying to London on Monday morning.",
              "We're flying to London on Monday evening.",
              'We fly to London on Monday morning.',
              'We were flying to London on Monday morning.',
            ],
            answer: 0,
            audio: "We're flying to London on Monday morning.",
            explain: 'Present continuous for a fixed travel arrangement.',
          },
        ],
      },
      {
        id: 'a2-past-continuous',
        level: 'A2',
        title: 'Past continuous, when/while, and used to',
        summary:
          'Use the **past continuous** (was/were + -ing) for an action in progress in the past, often interrupted by a **past simple** action with **when/while**. Use **used to** for past habits and states that are no longer true.',
        sections: [
          {
            heading: 'Past continuous for actions in progress',
            body: 'Form it with **was/were + verb-ing**. It describes an action happening at a moment in the past (**At 8 p.m. I was cooking**). It sets the scene or background of a story.',
            examples: [
              {
                en: 'They were sleeping at midnight.',
              },
              {
                en: 'It was raining when we left.',
              },
            ],
          },
          {
            heading: 'when and while',
            body: 'Use the **past continuous** for the longer background action and the **past simple** for the shorter action that interrupts it. **While** usually goes with the long action (-ing), and **when** usually goes with the short one. (**While I was reading, the phone rang.**)',
            examples: [
              {
                en: 'When she arrived, I was cooking.',
              },
              {
                en: 'While he was driving, he saw an accident.',
              },
            ],
          },
          {
            heading: 'used to for past habits',
            body: "Use **used to + base verb** for habits or states that were true in the past but not now (**I used to play tennis**). The negative is **didn't use to** and the question is **Did you use to...?** (no 'd' after 'did').",
            examples: [
              {
                en: 'We used to live by the sea.',
              },
              {
                en: "She didn't use to like coffee.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past continuous forms',
            columns: ['Subject', 'Auxiliary', 'Example'],
            rows: [
              ['I / he / she / it', 'was', 'I was working'],
              ['you / we / they', 'were', 'They were working'],
            ],
          },
        ],
        examples: [
          {
            en: 'I was watching TV when you called.',
          },
          {
            en: 'While we were waiting, it started to snow.',
          },
          {
            en: 'What were you doing at ten?',
          },
          {
            en: 'They used to be neighbours.',
          },
          {
            en: 'Did you use to walk to school?',
          },
          {
            en: "He wasn't listening to the teacher.",
          },
        ],
        pitfalls: [
          {
            wrong: 'When she called, I cooked dinner.',
            right: 'When she called, I was cooking dinner.',
            why: 'The background action in progress needs the past continuous, not the past simple.',
          },
          {
            wrong: 'I was use to play football.',
            right: 'I used to play football.',
            why: "'Used to' is not a continuous form; do not add 'was/were' or '-ing'.",
          },
          {
            wrong: 'Did you used to smoke?',
            right: 'Did you use to smoke?',
            why: "After 'did', the verb is the base form 'use to', without the final 'd'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-pc-ex1',
            prompt: 'While I ___ lunch, the doorbell rang.',
            options: ['made', 'was making', 'make', 'have made'],
            answer: 1,
            explain: 'The long background action takes the past continuous.',
          },
          {
            kind: 'mcq',
            id: 'a2-pc-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'When the lights went out, we watched a film.',
              'When the lights went out, we were watching a film.',
              'When the lights were going out, we watched a film.',
            ],
            answer: 1,
            explain: 'The short action interrupts the longer one in progress.',
          },
          {
            kind: 'mcq',
            id: 'a2-pc-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'I use to live in Paris ten years ago.',
              'I used to lived in Paris ten years ago.',
              'I was used to live in Paris ten years ago.',
              'I used to live in Paris ten years ago.',
            ],
            answer: 3,
            explain: "In the positive, it is 'used to' with a 'd'.",
          },
          {
            kind: 'order',
            id: 'a2-pc-ex4',
            tokens: ['What', 'were', 'you', 'doing', 'at', 'noon?'],
            answer: 'What were you doing at noon?',
            explain: 'Question word + were + subject + -ing.',
          },
          {
            kind: 'mcq',
            id: 'a2-pc-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'She was reading when the phone rung.',
              'He was reading when the phone rang.',
              'She was reading when the phone rang.',
              'She is reading when the phone rang.',
            ],
            answer: 2,
            audio: 'She was reading when the phone rang.',
            explain: 'Past continuous interrupted by past simple.',
          },
        ],
      },
      {
        id: 'a2-comparatives-superlatives',
        level: 'A2',
        title: 'Comparatives, superlatives and (not) as...as',
        summary:
          'Use **comparatives + than** to compare two things, **superlatives with the** for the top of a group, and **(not) as...as** to say things are equal or unequal.',
        sections: [
          {
            heading: 'Comparatives with than',
            body: 'Add **-er** to short adjectives (**cheaper**, **bigger**) and use **more** before longer ones (**more expensive**). Follow the comparison with **than**. Irregular: **good → better**, **bad → worse**, **far → further**.',
            examples: [
              {
                en: 'This bag is cheaper than that one.',
              },
              {
                en: 'Today is more interesting than yesterday.',
              },
            ],
          },
          {
            heading: 'Superlatives with the',
            body: 'Use **the + -est** for short adjectives (**the cheapest**) and **the most** for longer ones (**the most expensive**). Irregular: **the best**, **the worst**. Use them for one thing at the top of a group.',
            examples: [
              {
                en: "It's the biggest city in Spain.",
              },
              {
                en: 'She is the best player on the team.',
              },
            ],
          },
          {
            heading: '(not) as...as',
            body: "Use **as + adjective + as** to say two things are equal (**Tom is as tall as Sam**). Use **not as...as** to say one is less (**This film isn't as good as the book**).",
            examples: [
              {
                en: 'My phone is as fast as yours.',
              },
              {
                en: "It isn't as cold as last week.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Forms by adjective length',
            columns: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
              ['cheap (short)', 'cheaper', 'the cheapest'],
              ['big (one vowel)', 'bigger', 'the biggest'],
              ['expensive (long)', 'more expensive', 'the most expensive'],
              ['good (irregular)', 'better', 'the best'],
            ],
          },
        ],
        examples: [
          {
            en: 'Winter is colder than autumn.',
          },
          {
            en: 'This is the most beautiful beach here.',
          },
          {
            en: 'He runs faster than me.',
          },
          {
            en: "My car isn't as new as yours.",
          },
          {
            en: 'That was the worst day of my life.',
          },
          {
            en: 'She is as clever as her brother.',
          },
        ],
        pitfalls: [
          {
            wrong: 'This phone is more cheap than that one.',
            right: 'This phone is cheaper than that one.',
            why: "Short adjectives take '-er', not 'more'.",
          },
          {
            wrong: "It's the most big city.",
            right: "It's the biggest city.",
            why: "Short adjectives form the superlative with '-est', not 'most'.",
          },
          {
            wrong: 'She is more tall than me.',
            right: 'She is taller than me.',
            why: "Use the '-er' form for one-syllable adjectives like 'tall'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-cs-ex1',
            prompt: 'A train is ___ than a bus. (fast)',
            options: ['more fast', 'faster', 'fastest', 'the fastest'],
            answer: 1,
            explain: "'fast' is short, so add '-er': faster.",
          },
          {
            kind: 'mcq',
            id: 'a2-cs-ex2',
            prompt: 'It is the ___ restaurant in town. (expensive)',
            options: ['more expensive', 'most expensive', 'expensiver', 'expensivest'],
            answer: 1,
            explain: "'expensive' is long, so use 'the most expensive'.",
          },
          {
            kind: 'mcq',
            id: 'a2-cs-ex3',
            prompt: 'Choose the correct sentence.',
            options: ['He is gooder than me.', 'He is better than me.', 'He is more good than me.'],
            answer: 1,
            explain: "'good' is irregular: 'better'.",
          },
          {
            kind: 'mcq',
            id: 'a2-cs-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              "This book isn't as interesting than the other one.",
              "This book isn't as interesting like the other one.",
              "This book isn't as interesting as the other one.",
              "This book isn't so interesting than the other one.",
            ],
            answer: 2,
            explain: "The structure is 'as ... as', not 'as ... than'.",
          },
          {
            kind: 'order',
            id: 'a2-cs-ex5',
            tokens: ['It', 'is', 'the', 'best', 'film', 'of', 'the', 'year'],
            answer: 'It is the best film of the year.',
            explain: 'Superlative: the + best + noun.',
          },
          {
            kind: 'mcq',
            id: 'a2-cs-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'This is the cheapest hotel in the country.',
              'This is a cheaper hotel in the city.',
              'This was the cheapest hotel in the city.',
              'This is the cheapest hotel in the city.',
            ],
            answer: 3,
            audio: 'This is the cheapest hotel in the city.',
            explain: "Superlative 'the cheapest' with '-est'.",
          },
        ],
      },
      {
        id: 'a2-adverbs-of-manner',
        level: 'A2',
        title: 'Adverbs of manner and word order',
        summary:
          '**Adverbs of manner** say how we do something (usually adjective + **-ly**) and normally go **after the verb or object**. Watch the irregular adverbs **well**, **fast** and **hard**.',
        sections: [
          {
            heading: 'Forming adverbs of manner',
            body: 'Make most adverbs by adding **-ly** to the adjective: **quick → quickly**, **careful → carefully**. Adjectives ending in **-y** change to **-ily** (**happy → happily**). Some are irregular: **good → well**, and **fast** and **hard** do not change.',
            examples: [
              {
                en: 'She speaks English fluently.',
              },
              {
                en: 'He drives carefully.',
              },
            ],
          },
          {
            heading: 'Adjective or adverb?',
            body: "An **adjective** describes a noun (**a quick car**), while an **adverb** describes a verb (**it moves quickly**). Use **well** as the adverb of 'good': **a good cook** but **she cooks well**.",
            examples: [
              {
                en: 'He is a good singer.',
              },
              {
                en: 'He sings well.',
              },
            ],
          },
          {
            heading: 'Position in the sentence',
            body: 'Adverbs of manner normally come **after the verb**, or **after the object** if there is one (**She opened the door quietly**). Do not put the adverb between the verb and its object.',
            examples: [
              {
                en: 'They finished the test quickly.',
              },
              {
                en: 'Please read the email carefully.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Adjective to adverb',
            columns: ['Adjective', 'Adverb'],
            rows: [
              ['quick', 'quickly'],
              ['easy', 'easily'],
              ['good', 'well'],
              ['fast', 'fast'],
              ['hard', 'hard'],
            ],
          },
        ],
        examples: [
          {
            en: 'She answered the question correctly.',
          },
          {
            en: 'The children played happily.',
          },
          {
            en: 'He works hard every day.',
          },
          {
            en: 'Can you speak more slowly?',
          },
          {
            en: 'I know the city well.',
          },
          {
            en: 'They run very fast.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She sings very good.',
            right: 'She sings very well.',
            why: "After a verb, use the adverb 'well', not the adjective 'good'.",
          },
          {
            wrong: 'He speaks fastly.',
            right: 'He speaks fast.',
            why: "'fast' is already an adverb; do not add '-ly'.",
          },
          {
            wrong: 'She opened quietly the door.',
            right: 'She opened the door quietly.',
            why: 'Do not place the adverb between the verb and its object.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-adv-ex1',
            prompt: 'He finished his homework ___. (quick)',
            options: ['quick', 'quickly', 'quicker', 'more quickly'],
            answer: 1,
            explain: "The adverb of 'quick' is 'quickly'.",
          },
          {
            kind: 'mcq',
            id: 'a2-adv-ex2',
            prompt: 'Choose the correct sentence.',
            options: ['She dances good.', 'She dances well.', 'She dances goodly.'],
            answer: 1,
            explain: "The adverb of 'good' is 'well'.",
          },
          {
            kind: 'mcq',
            id: 'a2-adv-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'They speak very slow.',
              'They speak very slowly.',
              'They speaks very slowly.',
              'They speak very slowley.',
            ],
            answer: 1,
            explain: "After a verb, use the adverb 'slowly'.",
          },
          {
            kind: 'order',
            id: 'a2-adv-ex4',
            tokens: ['She', 'read', 'the', 'letter', 'carefully'],
            answer: 'She read the letter carefully.',
            explain: "The adverb goes after the object 'the letter'.",
          },
          {
            kind: 'mcq',
            id: 'a2-adv-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Please close the door quickly.',
              'Please close the doors quietly.',
              'Please close the door quietly.',
              'Please shut the door quietly.',
            ],
            answer: 2,
            audio: 'Please close the door quietly.',
            explain: "Adverb 'quietly' after the object.",
          },
        ],
      },
      {
        id: 'a2-modals',
        level: 'A2',
        title: 'Modals: should, have to, must, might',
        summary:
          "Use **should** for advice, **must/have to** for obligation, **mustn't** for prohibition, **don't have to** for no obligation, and **might** for possibility. Modals are followed by the **base verb**.",
        sections: [
          {
            heading: 'should for advice',
            body: "Use **should + base verb** to give advice or an opinion (**You should rest**). The negative **shouldn't** means it is not a good idea (**You shouldn't smoke**).",
            examples: [
              {
                en: 'You should drink more water.',
              },
              {
                en: "We shouldn't be late.",
              },
            ],
          },
          {
            heading: 'must, have to, and their negatives',
            body: "Use **must** and **have to** for strong obligation (**I must go**, **I have to work**). But the negatives are different: **mustn't** = prohibition (don't do it), while **don't have to** = no obligation (it isn't necessary).",
            examples: [
              {
                en: "You mustn't park here.",
              },
              {
                en: "You don't have to come if you're tired.",
              },
            ],
          },
          {
            heading: 'might for possibility',
            body: "Use **might + base verb** to say something is possible but not certain (**It might rain**). It is similar to 'maybe'. The negative is **might not**.",
            examples: [
              {
                en: 'I might go to the party.',
              },
              {
                en: 'She might not come.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Negative meanings',
            columns: ['Form', 'Meaning'],
            rows: [
              ["mustn't", "prohibition (don't do it)"],
              ["don't have to", 'no obligation (not necessary)'],
              ["shouldn't", 'bad idea / advice not to'],
              ['might not', 'possibly not'],
            ],
          },
        ],
        examples: [
          {
            en: 'You should see a doctor.',
          },
          {
            en: 'I have to finish this today.',
          },
          {
            en: 'Visitors must show their ID.',
          },
          {
            en: "You don't have to pay; it's free.",
          },
          {
            en: 'We might travel next summer.',
          },
          {
            en: "You mustn't use your phone here.",
          },
        ],
        pitfalls: [
          {
            wrong: 'You should to rest.',
            right: 'You should rest.',
            why: "After a modal like 'should', use the base verb without 'to'.",
          },
          {
            wrong: "You mustn't pay; it's free.",
            right: "You don't have to pay; it's free.",
            why: "'mustn't' means it is forbidden; for 'not necessary' use 'don't have to'.",
          },
          {
            wrong: 'It maybe rains tomorrow.',
            right: 'It might rain tomorrow.',
            why: "'might' is a modal followed by the base verb; 'maybe' is a separate adverb.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-mod-ex1',
            prompt: 'This is free. You ___ pay.',
            options: ["mustn't", "don't have to", 'should'],
            answer: 1,
            explain: "No obligation = 'don't have to'.",
          },
          {
            kind: 'mcq',
            id: 'a2-mod-ex2',
            prompt: 'You look tired. You ___ go to bed early.',
            options: ['must', 'have to', 'should', 'might'],
            answer: 2,
            explain: "Advice uses 'should'.",
          },
          {
            kind: 'mcq',
            id: 'a2-mod-ex3',
            prompt: 'Danger! You ___ touch that wire.',
            options: ["don't have to", "mustn't", 'might not'],
            answer: 1,
            explain: "Prohibition = 'mustn't'.",
          },
          {
            kind: 'mcq',
            id: 'a2-mod-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              'She should to study more.',
              'She shoulds study more.',
              'She should study more.',
              'She should studies more.',
            ],
            answer: 2,
            explain: "No 'to' after 'should'.",
          },
          {
            kind: 'order',
            id: 'a2-mod-ex5',
            tokens: ['I', 'might', 'go', 'to', 'the', 'gym', 'later'],
            answer: 'I might go to the gym later.',
            explain: "'might' + base verb for possibility.",
          },
          {
            kind: 'mcq',
            id: 'a2-mod-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "You shouldn't drink too much coffee.",
              "You couldn't drink so much coffee.",
              "You shouldn't drink so much coffee.",
              "You shouldn't drink so many coffee.",
            ],
            answer: 2,
            audio: "You shouldn't drink so much coffee.",
            explain: "'shouldn't' for advice not to do something.",
          },
        ],
      },
      {
        id: 'a2-conditionals',
        level: 'A2',
        title: 'Zero and first conditional',
        summary:
          'Use the **zero conditional** (if + present, present) for facts and general truths, and the **first conditional** (if + present, will + verb) for likely future results.',
        sections: [
          {
            heading: 'Zero conditional: facts',
            body: 'Use **if + present simple, present simple** for things that are always true (**If you heat ice, it melts**). You can replace **if** with **when** because the result always happens.',
            examples: [
              {
                en: 'If you mix blue and yellow, you get green.',
              },
              {
                en: "Plants die if they don't get water.",
              },
            ],
          },
          {
            heading: 'First conditional: likely future',
            body: "Use **if + present simple, will + base verb** for a real possible result in the future (**If it rains, we will stay home**). Use the **present simple** after 'if', never 'will'.",
            examples: [
              {
                en: 'If you study, you will pass.',
              },
              {
                en: "We will be late if we don't hurry.",
              },
            ],
          },
          {
            heading: 'Word order and commas',
            body: "The **if-clause** can come first or second. When 'if' comes first, use a **comma** (**If you call me, I'll answer**). When it comes second, no comma is needed (**I'll answer if you call me**).",
            examples: [
              {
                en: "If you're hungry, I'll cook something.",
              },
              {
                en: "I'll cook something if you're hungry.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conditional structures',
            columns: ['Type', 'If-clause', 'Main clause'],
            rows: [
              ['Zero', 'if + present', 'present'],
              ['First', 'if + present', 'will + base verb'],
            ],
          },
        ],
        examples: [
          {
            en: 'If you press this button, the machine starts.',
          },
          {
            en: "If I have time, I'll call you.",
          },
          {
            en: 'Water boils if you heat it to 100°C.',
          },
          {
            en: "She won't come if she's busy.",
          },
          {
            en: "If we leave now, we'll catch the train.",
          },
          {
            en: 'What will you do if it rains?',
          },
        ],
        pitfalls: [
          {
            wrong: 'If it will rain, we will stay home.',
            right: 'If it rains, we will stay home.',
            why: "After 'if', use the present simple, not 'will'.",
          },
          {
            wrong: 'If you will heat ice, it melts.',
            right: 'If you heat ice, it melts.',
            why: 'Zero conditional uses the present simple in both parts.',
          },
          {
            wrong: "I'll help you, if you ask me.",
            right: "I'll help you if you ask me.",
            why: "When the if-clause comes second, do not add a comma before 'if'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-cond-ex1',
            prompt: 'If you heat water, it ___. (boil)',
            options: ['boil', 'boils', 'will boil', 'boiled'],
            answer: 1,
            explain: 'Zero conditional: present simple in both clauses.',
          },
          {
            kind: 'mcq',
            id: 'a2-cond-ex2',
            prompt: 'If it rains tomorrow, we ___ at home.',
            options: ['stay', 'stayed', 'will stay', 'would stay'],
            answer: 2,
            explain: "First conditional: 'will' + base verb in the result.",
          },
          {
            kind: 'mcq',
            id: 'a2-cond-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "If you will call, I'll answer.",
              "If you call, I'll answer.",
              'If you call, I answer will.',
            ],
            answer: 1,
            explain: "Present simple after 'if', 'will' in the main clause.",
          },
          {
            kind: 'mcq',
            id: 'a2-cond-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              'If she will study, she will pass the exam.',
              'If she studies, she will pass the exam.',
              'If she study, she will pass the exam.',
              'If she studies, she pass the exam.',
            ],
            answer: 1,
            explain: "Use the present simple after 'if'.",
          },
          {
            kind: 'order',
            id: 'a2-cond-ex5',
            tokens: ['If', 'we', 'leave', 'now,', "we'll", 'catch', 'the', 'bus'],
            answer: "If we leave now, we'll catch the bus.",
            explain: 'If + present, will + base verb.',
          },
          {
            kind: 'mcq',
            id: 'a2-cond-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'If you mix red and white, you get pink.',
              'If you mix red and white, you got pink.',
              'If you mix red and blue, you get pink.',
              'If you mix red and white, you get purple.',
            ],
            answer: 0,
            audio: 'If you mix red and white, you get pink.',
            explain: 'Zero conditional: present in both clauses.',
          },
        ],
      },
      {
        id: 'a2-gerunds-infinitives',
        level: 'A2',
        title: 'Gerunds and infinitives',
        summary:
          "Some verbs are followed by the **-ing** form (gerund), others by **to + verb** (infinitive). Use the **gerund** after prepositions and certain verbs like 'enjoy', and the **infinitive** after verbs like 'want' and 'decide'.",
        sections: [
          {
            heading: 'Verbs + gerund',
            body: 'After verbs like **enjoy, like, love, hate, finish, mind, suggest** and **avoid**, use the **-ing** form (**I enjoy reading**). Also use the gerund as the subject of a sentence (**Swimming is healthy**).',
            examples: [
              {
                en: 'She loves cooking.',
              },
              {
                en: 'We finished painting the room.',
              },
            ],
          },
          {
            heading: 'Verbs + infinitive',
            body: 'After verbs like **want, need, decide, hope, would like, promise** and **plan**, use **to + base verb** (**I want to travel**). Also use the infinitive to express purpose (**I went out to buy bread**).',
            examples: [
              {
                en: 'They decided to stay.',
              },
              {
                en: 'I need to call my boss.',
              },
            ],
          },
          {
            heading: 'Gerund after prepositions',
            body: "Always use the **-ing** form after a preposition (**good at swimming**, **interested in learning**, **before leaving**). Never use 'to + verb' directly after a preposition.",
            examples: [
              {
                en: "She's good at drawing.",
              },
              {
                en: 'Think before speaking.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common patterns',
            columns: ['Followed by -ing', 'Followed by to + verb'],
            rows: [
              ['enjoy, finish, avoid', 'want, need, decide'],
              ['like, love, hate', 'hope, plan, would like'],
              ['after prepositions', 'to show purpose'],
            ],
          },
        ],
        examples: [
          {
            en: 'I enjoy listening to music.',
          },
          {
            en: 'He wants to learn Italian.',
          },
          {
            en: "We're thinking about moving house.",
          },
          {
            en: 'She decided to change jobs.',
          },
          {
            en: 'Reading helps you relax.',
          },
          {
            en: "They're interested in joining the club.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I enjoy to read.',
            right: 'I enjoy reading.',
            why: "'enjoy' is always followed by the -ing form, not the infinitive.",
          },
          {
            wrong: 'I want learning English.',
            right: 'I want to learn English.',
            why: "'want' is followed by 'to + base verb', not the -ing form.",
          },
          {
            wrong: "She's good at to cook.",
            right: "She's good at cooking.",
            why: "After a preposition like 'at', use the -ing form.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-gi-ex1',
            prompt: 'I enjoy ___ to new places. (travel)',
            options: ['to travel', 'travel', 'travelling', 'travels'],
            answer: 2,
            explain: "'enjoy' takes the -ing form.",
          },
          {
            kind: 'mcq',
            id: 'a2-gi-ex2',
            prompt: 'She wants ___ a doctor. (become)',
            options: ['becoming', 'to become', 'become', 'becomes'],
            answer: 1,
            explain: "'want' takes 'to + base verb'.",
          },
          {
            kind: 'mcq',
            id: 'a2-gi-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "He's interested in learn French.",
              "He's interested in learning French.",
              "He's interested in to learn French.",
            ],
            answer: 1,
            explain: "After the preposition 'in', use the -ing form.",
          },
          {
            kind: 'mcq',
            id: 'a2-gi-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              'They decided buying a new car.',
              'They decided buy a new car.',
              'They decided to buy a new car.',
              'They decided to buying a new car.',
            ],
            answer: 2,
            explain: "'decide' takes the infinitive 'to buy'.",
          },
          {
            kind: 'order',
            id: 'a2-gi-ex5',
            tokens: ['We', 'finished', 'cleaning', 'the', 'kitchen'],
            answer: 'We finished cleaning the kitchen.',
            explain: "'finish' takes the -ing form.",
          },
          {
            kind: 'mcq',
            id: 'a2-gi-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'She hoped to study abroad next year.',
              'She hopes to study abroad this year.',
              'She hopes studying abroad next year.',
              'She hopes to study abroad next year.',
            ],
            answer: 3,
            audio: 'She hopes to study abroad next year.',
            explain: "'hope' is followed by the infinitive 'to study'.",
          },
        ],
      },
      {
        id: 'a2-quantifiers',
        level: 'A2',
        title: 'Quantifiers: much, many, a few, a little, enough',
        summary:
          'Use **many/a few** with countable nouns and **much/a little** with uncountable nouns. Use **enough** for the right amount, and choose forms by whether the noun is countable.',
        sections: [
          {
            heading: 'much vs many',
            body: "Use **many** with **countable** plural nouns (**many books**) and **much** with **uncountable** nouns (**much time**). 'Much' and 'many' are most common in questions and negatives; in positives we often use **a lot of** (**a lot of friends**).",
            examples: [
              {
                en: 'How many people are coming?',
              },
              {
                en: "We don't have much money.",
              },
            ],
          },
          {
            heading: 'a few vs a little',
            body: 'Use **a few** with countable nouns (**a few apples**) and **a little** with uncountable nouns (**a little milk**). Both mean a small but sufficient amount.',
            examples: [
              {
                en: 'I have a few questions.',
              },
              {
                en: 'Add a little salt.',
              },
            ],
          },
          {
            heading: 'enough',
            body: 'Use **enough** before a noun (**enough chairs**) but **after** an adjective or adverb (**old enough**, **fast enough**). It means the necessary amount.',
            examples: [
              {
                en: "There aren't enough seats.",
              },
              {
                en: "He isn't tall enough.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Countable vs uncountable',
            columns: ['Quantifier', 'Countable', 'Uncountable'],
            rows: [
              ['how much / how many', 'many', 'much'],
              ['small amount', 'a few', 'a little'],
            ],
          },
        ],
        examples: [
          {
            en: 'How much sugar do you want?',
          },
          {
            en: 'There are too many cars in the city.',
          },
          {
            en: 'I only need a little help.',
          },
          {
            en: 'We have a few days off.',
          },
          {
            en: 'Is there enough bread for everyone?',
          },
          {
            en: "She's experienced enough for the job.",
          },
        ],
        pitfalls: [
          {
            wrong: 'How much friends do you have?',
            right: 'How many friends do you have?',
            why: "'friends' is countable, so use 'many', not 'much'.",
          },
          {
            wrong: 'I have a little books.',
            right: 'I have a few books.',
            why: "'books' is countable, so use 'a few', not 'a little'.",
          },
          {
            wrong: "He isn't enough old to drive.",
            right: "He isn't old enough to drive.",
            why: "'enough' goes after an adjective, not before it.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-q-ex1',
            prompt: 'How ___ water do you drink a day?',
            options: ['many', 'much', 'few'],
            answer: 1,
            explain: "'water' is uncountable, so use 'much'.",
          },
          {
            kind: 'mcq',
            id: 'a2-q-ex2',
            prompt: 'There are only ___ eggs left, just three.',
            options: ['a little', 'a few', 'much', 'little'],
            answer: 1,
            explain: "'eggs' is countable, so 'a few'.",
          },
          {
            kind: 'mcq',
            id: 'a2-q-ex3',
            prompt: "She isn't experienced ___ for this job.",
            options: ['too', 'very', 'enough', 'much'],
            answer: 2,
            explain: "'enough' comes after the adjective.",
          },
          {
            kind: 'mcq',
            id: 'a2-q-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              "We don't have many time.",
              "We don't have much time.",
              "We don't have a many time.",
              "We don't have much times.",
            ],
            answer: 1,
            explain: "'time' is uncountable, so use 'much'.",
          },
          {
            kind: 'order',
            id: 'a2-q-ex5',
            tokens: ['There', "aren't", 'enough', 'chairs', 'for', 'everyone'],
            answer: "There aren't enough chairs for everyone.",
            explain: "'enough' goes before the noun 'chairs'.",
          },
          {
            kind: 'mcq',
            id: 'a2-q-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'There are too much people here today.',
              'There are so many people here today.',
              'There are too many people here today.',
              'There were too many people here today.',
            ],
            answer: 2,
            audio: 'There are too many people here today.',
            explain: "'people' is countable, so 'many'.",
          },
        ],
      },
      {
        id: 'a2-pronouns',
        level: 'A2',
        title: 'Indefinite and reflexive pronouns',
        summary:
          'Use **someone/anyone/no one**, **something/anything/nothing** and **somewhere/anywhere** for unknown people, things and places. Use **reflexive pronouns** (myself, yourself...) when the subject and object are the same.',
        sections: [
          {
            heading: 'some-, any-, no-',
            body: "Use **some-** words in positive sentences (**someone called**), **any-** words in questions and negatives (**Is anyone there?**, **I don't know anything**), and **no-** words for a negative meaning with a positive verb (**Nobody came**).",
            examples: [
              {
                en: 'Someone is knocking at the door.',
              },
              {
                en: "I didn't see anything strange.",
              },
            ],
          },
          {
            heading: 'Reflexive pronouns',
            body: "Use **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** when the action returns to the subject (**I hurt myself**). Use **by + reflexive** to mean 'alone' (**She lives by herself**).",
            examples: [
              {
                en: 'He taught himself to play guitar.',
              },
              {
                en: 'We enjoyed ourselves at the party.',
              },
            ],
          },
          {
            heading: 'These words take a singular verb',
            body: "Indefinite pronouns like **everyone, someone, nobody** and **everything** take a **singular verb** (**Everyone is here**). Do not add an extra negative with 'no-' words.",
            examples: [
              {
                en: 'Everybody knows the answer.',
              },
              {
                en: 'Nobody was at home.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Indefinite pronouns',
            columns: ['', 'People', 'Things', 'Places'],
            rows: [
              ['some-', 'someone', 'something', 'somewhere'],
              ['any-', 'anyone', 'anything', 'anywhere'],
              ['no-', 'no one', 'nothing', 'nowhere'],
            ],
          },
        ],
        examples: [
          {
            en: 'Is there anything to eat?',
          },
          {
            en: 'I want to go somewhere quiet.',
          },
          {
            en: 'Nobody understands this rule.',
          },
          {
            en: 'Did you make this yourself?',
          },
          {
            en: 'The cat washed itself.',
          },
          {
            en: 'Everyone needs a break.',
          },
        ],
        pitfalls: [
          {
            wrong: "I don't know nothing.",
            right: "I don't know anything.",
            why: "English does not use a double negative; with 'don't', use 'anything'.",
          },
          {
            wrong: 'Everyone are happy.',
            right: 'Everyone is happy.',
            why: "'Everyone' takes a singular verb.",
          },
          {
            wrong: 'She did it by her.',
            right: 'She did it by herself.',
            why: "To mean 'alone/by oneself', use the reflexive pronoun 'herself'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-pr-ex1',
            prompt: 'Is there ___ in the box?',
            options: ['something', 'anything', 'nothing'],
            answer: 1,
            explain: "In a question, use 'anything'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pr-ex2',
            prompt: 'He cut ___ while cooking.',
            options: ['hisself', 'himself', 'him', 'themselves'],
            answer: 1,
            explain: "The action returns to 'he', so 'himself'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pr-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "Nobody don't like Mondays.",
              'Nobody like Mondays.',
              'Nobody likes Mondays.',
              "Nobody doesn't like Mondays.",
            ],
            answer: 2,
            explain: "'Nobody' is already negative and takes a singular verb.",
          },
          {
            kind: 'mcq',
            id: 'a2-pr-ex4',
            prompt: '___ called you this morning. (a person, positive)',
            options: ['Anyone', 'Someone', 'Nothing'],
            answer: 1,
            explain: "Positive sentence about a person uses 'someone'.",
          },
          {
            kind: 'order',
            id: 'a2-pr-ex5',
            tokens: ['We', 'enjoyed', 'ourselves', 'at', 'the', 'concert'],
            answer: 'We enjoyed ourselves at the concert.',
            explain: "Reflexive 'ourselves' matches the subject 'we'.",
          },
          {
            kind: 'mcq',
            id: 'a2-pr-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'She taught himself to paint.',
              'She taught herself to paint.',
              'She taught herself painting.',
              'She teaches herself to paint.',
            ],
            answer: 1,
            audio: 'She taught herself to paint.',
            explain: "Reflexive 'herself' for an action done alone.",
          },
        ],
      },
      {
        id: 'a2-questions-and-agreeing',
        level: 'A2',
        title: 'Question tags, subject questions and so/neither',
        summary:
          "Use **question tags** to check information (**..., isn't it?**), **subject questions** without 'do' when the question word is the subject (**Who called?**), and **so/neither + auxiliary** to agree.",
        sections: [
          {
            heading: 'Question tags',
            body: "Add a short **tag** to confirm something. A positive sentence takes a negative tag, and a negative sentence takes a positive tag (**You're tired, aren't you?** / **She isn't here, is she?**). Use the same auxiliary as the main verb.",
            examples: [
              {
                en: "It's cold today, isn't it?",
              },
              {
                en: "You don't smoke, do you?",
              },
            ],
          },
          {
            heading: 'Subject questions',
            body: "When the question word (**who, what, which**) is the **subject**, do not use 'do/does/did'. Keep normal word order (**Who broke the window?**, **What happened?**). Use 'do' only when asking about the object (**Who did you see?**).",
            examples: [
              {
                en: 'Who lives here?',
              },
              {
                en: 'What makes you happy?',
              },
            ],
          },
          {
            heading: 'so and neither for agreeing',
            body: "Use **So + auxiliary + subject** to agree with a positive statement (**I'm tired. — So am I.**), and **Neither + auxiliary + subject** to agree with a negative one (**I don't drink. — Neither do I.**). Note the inverted word order.",
            examples: [
              {
                en: 'I love pizza. — So do I.',
              },
              {
                en: "She can't swim. — Neither can I.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Agreeing with so / neither',
            columns: ['Statement', 'Agreement'],
            rows: [
              ['I am hungry.', 'So am I.'],
              ['I like tea.', 'So do I.'],
              ["I can't drive.", 'Neither can I.'],
              ["I don't smoke.", 'Neither do I.'],
            ],
          },
        ],
        examples: [
          {
            en: "You can swim, can't you?",
          },
          {
            en: "They didn't call, did they?",
          },
          {
            en: 'Who wrote this email?',
          },
          {
            en: 'What happened last night?',
          },
          {
            en: "I'm hungry. — So am I.",
          },
          {
            en: "I don't like horror films. — Neither do I.",
          },
        ],
        pitfalls: [
          {
            wrong: "You are tired, isn't it?",
            right: "You are tired, aren't you?",
            why: 'The tag must match the subject and auxiliary of the sentence.',
          },
          {
            wrong: 'Who did break the window?',
            right: 'Who broke the window?',
            why: "When 'who' is the subject, do not use 'did'; use the past simple directly.",
          },
          {
            wrong: 'I like coffee. — So I do.',
            right: 'I like coffee. — So do I.',
            why: "After 'so', invert: auxiliary before the subject.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-qa-ex1',
            prompt: "It's a beautiful day, ___?",
            options: ['is it', "doesn't it", "isn't it", "isn't he"],
            answer: 2,
            explain: "Positive statement 'It's' takes the negative tag 'isn't it'.",
          },
          {
            kind: 'mcq',
            id: 'a2-qa-ex2',
            prompt: 'Choose the correct subject question.',
            options: ['Who did make this cake?', 'Who made this cake?', 'Who make this cake?'],
            answer: 1,
            explain: "'Who' is the subject, so no 'did' and use the past simple.",
          },
          {
            kind: 'mcq',
            id: 'a2-qa-ex3',
            prompt: "A: I can't cook. B: ___ can I.",
            options: ['So', 'Neither', 'Either', 'Also'],
            answer: 1,
            explain: "Agree with a negative using 'Neither can I'.",
          },
          {
            kind: 'mcq',
            id: 'a2-qa-ex4',
            prompt: 'Choose the correct sentence.',
            options: [
              "She works here, doesn't she works?",
              "She works here, doesn't she?",
              'She works here, does she?',
              "She works here, doesn't her?",
            ],
            answer: 1,
            explain: "The tag is just auxiliary + subject: 'doesn't she?'.",
          },
          {
            kind: 'order',
            id: 'a2-qa-ex5',
            tokens: ['So', 'do', 'I'],
            answer: 'So do I.',
            explain: 'Agree with a positive statement: So + auxiliary + subject.',
          },
          {
            kind: 'mcq',
            id: 'a2-qa-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "You haven't met him before, haven't you?",
              "You haven't met her before, have you?",
              "You hadn't met him before, have you?",
              "You haven't met him before, have you?",
            ],
            answer: 3,
            audio: "You haven't met him before, have you?",
            explain: "Negative sentence takes a positive tag 'have you?'.",
          },
        ],
      },
    ],
  },
  {
    level: 'B1',
    title: 'B1 · Grammar in Action',
    blurb:
      'Connect tenses, conditions and reported speech to talk about real life with confidence.',
    lessons: [
      {
        id: 'b1-present-perfect-continuous',
        level: 'B1',
        title: 'Present Perfect Continuous & Past Simple',
        summary:
          'Use the **present perfect continuous** (have/has been + -ing) to focus on the duration of an activity that started in the past and continues now or has just stopped. Compare it with the **past simple**, which describes finished actions at a finished time.',
        sections: [
          {
            heading: 'Form and main use',
            body: 'Build it with **have/has + been + verb-ing**. We use it to emphasise how long an action has been happening, often with **for** and **since**. The action may continue now or may have just finished with a visible result.',
            examples: [
              {
                en: 'I have been studying English for three years.',
              },
              {
                en: "She's tired because she has been running.",
              },
            ],
          },
          {
            heading: 'Continuous vs Past Simple',
            body: 'Use the **present perfect continuous** when the time is unfinished or connected to now. Use the **past simple** for an action completed at a specific finished moment (yesterday, in 2010, last week).',
            examples: [
              {
                en: 'We have been waiting for an hour. (still waiting)',
              },
              {
                en: 'We waited for an hour and then left. (finished)',
              },
            ],
          },
          {
            heading: 'Stative verbs',
            body: 'Verbs of state such as **know, be, like, have (possess)** are not normally used in continuous forms. Use the **present perfect simple** instead.',
            examples: [
              {
                en: 'I have known her since 2015.',
              },
              {
                en: 'He has had that car for years.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'for vs since',
            columns: ['Word', 'Use', 'Example'],
            rows: [
              ['for', 'a period of time', 'for two hours, for a week'],
              ['since', 'a starting point', 'since Monday, since 2020'],
            ],
          },
        ],
        examples: [
          {
            en: 'How long have you been learning to drive?',
          },
          {
            en: 'My eyes hurt because I have been reading all day.',
          },
          {
            en: 'They have been living here since March.',
          },
          {
            en: 'I called you twice last night.',
          },
          {
            en: 'It has been raining, so the streets are wet.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am studying English since three years.',
            right: 'I have been studying English for three years.',
            why: "For duration up to now, English needs a perfect form plus 'for' with a period, not the present tense.",
          },
          {
            wrong: 'I have been knowing him for years.',
            right: 'I have known him for years.',
            why: "Stative verbs like 'know' are not used in continuous forms.",
          },
          {
            wrong: 'I have seen her yesterday.',
            right: 'I saw her yesterday.',
            why: "A finished time word like 'yesterday' requires the past simple, not a perfect form.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-ppc-ex1',
            prompt: 'She is exhausted because she ___ all morning. (clean)',
            options: ['was cleaning', 'had been cleaning', 'has been cleaning', 'has cleaned'],
            answer: 2,
            explain: 'The action explains a present result, so use have/has been + -ing.',
          },
          {
            kind: 'mcq',
            id: 'b1-ppc-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'I have finished the book last night.',
              'I finished the book last night.',
              'I have been finishing the book last night.',
            ],
            answer: 1,
            explain: "'Last night' is a finished time, so use the past simple.",
          },
          {
            kind: 'mcq',
            id: 'b1-ppc-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "We are waiting for the bus since 8 o'clock.",
              "We have been waiting for the bus since 8 o'clock.",
              "We waited for the bus since 8 o'clock.",
              "We have been waiting for the bus from 8 o'clock.",
            ],
            answer: 1,
            explain: 'Duration up to now uses present perfect continuous, not the present.',
          },
          {
            kind: 'order',
            id: 'b1-ppc-ex5',
            tokens: ['How', 'long', 'have', 'you', 'been', 'working', 'here?'],
            answer: 'How long have you been working here?',
            explain: 'Question word + have + subject + been + -ing.',
          },
          {
            kind: 'mcq',
            id: 'b1-ppc-ex6',
            prompt: 'I ___ her since we were children. (know)',
            options: ['know', 'have known', 'have been knowing', 'knew'],
            answer: 1,
            explain: "'Know' is stative, so use the present perfect simple.",
          },
          {
            kind: 'mcq',
            id: 'b1-ppc-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'It had been snowing all night, so the roads are dangerous.',
              'It has been raining all night, so the roads are dangerous.',
              'It has been snowing all night, so the roads are dangerous.',
              'It has been snowing all night, so the road is dangerous.',
            ],
            answer: 2,
            audio: 'It has been snowing all night, so the roads are dangerous.',
            explain: 'Present perfect continuous showing a present result.',
          },
        ],
      },
      {
        id: 'b1-past-perfect-used-to',
        level: 'B1',
        title: 'Past Perfect & Used to / Would',
        summary:
          'Use the **past perfect** (had + past participle) for an action that happened before another past action. Use **used to** and **would** for past habits, and **be used to** for things that are familiar now.',
        sections: [
          {
            heading: 'Past perfect: the earlier past',
            body: 'Form it with **had + past participle**. It shows which of two past events happened first. The later event is usually in the **past simple**.',
            examples: [
              {
                en: 'When I arrived, the train had already left.',
              },
              {
                en: 'She had never seen the sea before that trip.',
              },
            ],
          },
          {
            heading: 'Used to and would for past habits',
            body: "**Used to + infinitive** describes past habits or states that are no longer true. **Would + infinitive** also describes repeated past actions, but not states. We don't use 'would' for past states like 'live' or 'have'.",
            examples: [
              {
                en: 'I used to play tennis every weekend.',
              },
              {
                en: 'On Sundays we would visit my grandmother.',
              },
            ],
          },
          {
            heading: 'Be used to: being familiar with',
            body: "**Be used to + noun / -ing** means something is normal or familiar now. Don't confuse it with **used to**, which is about the past. **Get used to** means becoming familiar with something.",
            examples: [
              {
                en: 'I am used to getting up early.',
              },
              {
                en: 'She is getting used to her new job.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'used to vs be used to',
            columns: ['Structure', 'Meaning', 'Example'],
            rows: [
              ['used to + infinitive', 'past habit (not now)', 'I used to smoke.'],
              ['be used to + -ing/noun', 'familiar now', "I'm used to the noise."],
              ['get used to + -ing/noun', 'becoming familiar', "I'm getting used to it."],
            ],
          },
        ],
        examples: [
          {
            en: 'They had finished dinner before we got there.',
          },
          {
            en: 'He realised he had forgotten his keys.',
          },
          {
            en: 'There used to be a cinema on this street.',
          },
          {
            en: "We didn't use to have a car.",
          },
          {
            en: "I'm not used to driving on the left.",
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived the party already finished.',
            right: 'When I arrived the party had already finished.',
            why: 'The earlier of two past actions needs the past perfect.',
          },
          {
            wrong: 'I am used to get up early.',
            right: 'I am used to getting up early.',
            why: "After 'be used to' the verb takes the -ing form, because 'to' is a preposition here.",
          },
          {
            wrong: 'I would live in Madrid when I was young.',
            right: 'I used to live in Madrid when I was young.',
            why: "'Would' is not used for past states like living somewhere; use 'used to'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-pp-ex1',
            prompt: 'By the time we got home, the film ___. (start)',
            options: ['has started', 'started', 'was starting', 'had started'],
            answer: 3,
            explain: 'The film started before we got home, so use the past perfect.',
          },
          {
            kind: 'mcq',
            id: 'b1-pp-ex2',
            prompt: 'Which sentence is correct?',
            options: [
              'I used to live near the beach.',
              'I am used to live near the beach.',
              'I would live near the beach as a state.',
            ],
            answer: 0,
            explain: "'Used to + infinitive' describes a past state that is no longer true.",
          },
          {
            kind: 'mcq',
            id: 'b1-pp-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "She isn't still used to working at night.",
              "She still isn't used working at night.",
              "She still isn't used to working at night.",
              "She still isn't used to work at night.",
            ],
            answer: 2,
            explain: "After 'be used to' use the -ing form of the verb.",
          },
          {
            kind: 'order',
            id: 'b1-pp-ex5',
            tokens: ['We', 'used', 'to', 'go', 'camping', 'every', 'summer.'],
            answer: 'We used to go camping every summer.',
            explain: "'Used to + infinitive' for a repeated past habit.",
          },
          {
            kind: 'mcq',
            id: 'b1-pp-ex6',
            prompt: 'It took me a while, but now I ___ to the cold weather. (get used)',
            options: ['have get used', 'have got used', 'had got used', 'have gotten use'],
            answer: 1,
            explain: "'Get used to' expresses becoming familiar with something.",
          },
          {
            kind: 'mcq',
            id: 'b1-pp-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'He has never flown in a plane before that day.',
              'He had never flown in a plane before that night.',
              'He had never flown on a plane before that day.',
              'He had never flown in a plane before that day.',
            ],
            answer: 3,
            audio: 'He had never flown in a plane before that day.',
            explain: 'Past perfect for experience before a past point.',
          },
        ],
      },
      {
        id: 'b1-future-continuous-predictions',
        level: 'B1',
        title: 'Future Continuous & Predictions',
        summary:
          'Use the **future continuous** (will be + -ing) for an action in progress at a future moment. Make **predictions** with will, going to, may, might and could depending on how sure you are.',
        sections: [
          {
            heading: 'Future continuous',
            body: 'Form it with **will be + verb-ing**. It describes an action that will be in progress at a particular time in the future. It can also describe future events expected to happen as part of a routine.',
            examples: [
              {
                en: 'This time tomorrow I will be flying to Rome.',
              },
              {
                en: "Don't call at 8; we'll be having dinner.",
              },
            ],
          },
          {
            heading: 'Predictions: will vs going to',
            body: "Use **will** for predictions based on opinion or belief (often with 'I think', 'probably'). Use **going to** for predictions based on present evidence you can see.",
            examples: [
              {
                en: 'I think it will rain later.',
              },
              {
                en: "Look at those clouds! It's going to rain.",
              },
            ],
          },
          {
            heading: 'Degrees of certainty',
            body: "To show you are less sure, use **may, might or could**. These mean 'perhaps'. Add **probably** with 'will' for likely predictions and **definitely** for very sure ones.",
            examples: [
              {
                en: 'They might arrive late.',
              },
              {
                en: "She'll probably win the prize.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'How sure are you?',
            columns: ['Certainty', 'Form', 'Example'],
            rows: [
              ['very sure', 'will definitely', 'It will definitely work.'],
              ['likely', 'will probably', "He'll probably come."],
              ['possible', 'may / might / could', 'It might snow.'],
            ],
          },
        ],
        examples: [
          {
            en: 'At 10 a.m. we will be sitting the exam.',
          },
          {
            en: 'By next year, prices will have risen.',
          },
          {
            en: "I'm sure you will pass your test.",
          },
          {
            en: "Be careful, you're going to drop it!",
          },
          {
            en: "We might go to the beach if it's sunny.",
          },
        ],
        pitfalls: [
          {
            wrong: 'Look! The glass is falling, it will break.',
            right: "Look! The glass is falling, it's going to break.",
            why: "With clear present evidence, use 'going to', not 'will'.",
          },
          {
            wrong: 'Tomorrow at five I will work.',
            right: 'Tomorrow at five I will be working.',
            why: 'For an action in progress at a future time, use the future continuous.',
          },
          {
            wrong: 'It maybe rains tomorrow.',
            right: 'It may rain tomorrow.',
            why: "'May/might' are modal verbs followed by a bare infinitive; 'maybe' is a separate adverb.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-fc-ex1',
            prompt: 'This time next week, I ___ on a beach in Spain. (relax)',
            options: ['am relaxing', 'will relax', 'will be relaxing', 'will have relaxed'],
            answer: 2,
            explain: 'An action in progress at a future moment uses will be + -ing.',
          },
          {
            kind: 'mcq',
            id: 'b1-fc-ex2',
            prompt: 'The sky is grey and windy. Which is best?',
            options: [
              'I think it will be sunny.',
              "It's going to rain.",
              'It might be a nice day.',
            ],
            answer: 1,
            explain: "Present evidence (grey sky) calls for 'going to'.",
          },
          {
            kind: 'mcq',
            id: 'b1-fc-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Maybe they will come later.',
              'Maybe they will to come later.',
              'Maybe they will coming later.',
              'Maybe they will came later.',
            ],
            answer: 0,
            explain: "After 'will' use the bare infinitive without 'to'.",
          },
          {
            kind: 'order',
            id: 'b1-fc-ex5',
            tokens: ["Don't", 'phone', 'at', 'nine;', "we'll", 'be', 'watching', 'the', 'match.'],
            answer: "Don't phone at nine; we'll be watching the match.",
            explain: 'Future continuous for an action in progress at a set time.',
          },
          {
            kind: 'mcq',
            id: 'b1-fc-ex6',
            prompt: "She'll ___ win because she has trained so hard. (probable)",
            options: ['probably', 'certainly', 'definitely', 'surely'],
            answer: 0,
            explain: "'Probably' goes after 'will' to show a likely prediction.",
          },
          {
            kind: 'mcq',
            id: 'b1-fc-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'By this time tomorrow we will be driving to the mountain.',
              'By this time tomorrow we will be driving to the mountains.',
              'By this time tomorrow we will be driving from the mountains.',
              "By this time tomorrow we'll be driving to the mountains.",
            ],
            answer: 1,
            audio: 'By this time tomorrow we will be driving to the mountains.',
            explain: 'Future continuous with a future time reference.',
          },
        ],
      },
      {
        id: 'b1-conditionals-wish',
        level: 'B1',
        title: 'Second & Third Conditionals & Wish',
        summary:
          'Use the **second conditional** for unreal or unlikely present situations and the **third conditional** for unreal past situations. Use **wish** to talk about things you would like to be different.',
        sections: [
          {
            heading: 'Second conditional',
            body: "Structure: **If + past simple, would + infinitive**. It describes imaginary or unlikely present/future situations. After 'if', we often use **were** for all persons.",
            examples: [
              {
                en: 'If I had more time, I would learn the piano.',
              },
              {
                en: 'If I were you, I would apologise.',
              },
            ],
          },
          {
            heading: 'Third conditional',
            body: 'Structure: **If + past perfect, would have + past participle**. It describes imaginary situations in the past and their imagined results. The situation did not really happen.',
            examples: [
              {
                en: 'If I had studied, I would have passed.',
              },
              {
                en: "She wouldn't have missed the train if she had left earlier.",
              },
            ],
          },
          {
            heading: 'Wish',
            body: 'Use **wish + past simple** to regret a present situation, and **wish + past perfect** to regret the past. Use **wish + would** to complain about annoying behaviour you want to change.',
            examples: [
              {
                en: 'I wish I had a bigger flat.',
              },
              {
                en: "I wish you wouldn't shout.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conditional types',
            columns: ['Type', 'If-clause', 'Main clause'],
            rows: [
              ['Second', 'past simple', 'would + infinitive'],
              ['Third', 'past perfect', 'would have + past participle'],
            ],
          },
        ],
        examples: [
          {
            en: "If it weren't so expensive, I would buy it.",
          },
          {
            en: 'What would you do if you won the lottery?',
          },
          {
            en: 'If they had warned us, we would have stayed home.',
          },
          {
            en: 'I wish I could speak French.',
          },
          {
            en: "He wishes he hadn't sold his car.",
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have time, I would help you.',
            right: 'If I had time, I would help you.',
            why: "Do not use 'would' in the if-clause of a conditional; use a past tense.",
          },
          {
            wrong: 'If I would have studied, I would have passed.',
            right: 'If I had studied, I would have passed.',
            why: "The third conditional uses 'had + past participle' in the if-clause, not 'would have'.",
          },
          {
            wrong: 'I wish I have more money.',
            right: 'I wish I had more money.',
            why: "'Wish' about a present situation is followed by the past simple.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-cond-ex1',
            prompt: 'If I ___ rich, I would travel the world. (be)',
            options: ['am', 'be', 'are', 'were'],
            answer: 3,
            explain: "Second conditional uses the past simple (were) after 'if'.",
          },
          {
            kind: 'mcq',
            id: 'b1-cond-ex2',
            prompt: 'Complete: If she had left earlier, she ___ the bus.',
            options: ['would catch', 'would have caught', 'catches'],
            answer: 1,
            explain: "Third conditional result uses 'would have + past participle'.",
          },
          {
            kind: 'mcq',
            id: 'b1-cond-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'If I would know the answer, I would tell you.',
              'If I would knew the answer, I would tell you.',
              'If I know the answer, I would tell you.',
              'If I knew the answer, I would tell you.',
            ],
            answer: 3,
            explain: "Use the past simple, not 'would', in the if-clause.",
          },
          {
            kind: 'order',
            id: 'b1-cond-ex5',
            tokens: ['What', 'would', 'you', 'do', 'if', 'you', 'lost', 'your', 'job?'],
            answer: 'What would you do if you lost your job?',
            explain: 'Second conditional question: would + subject + ... if + past simple.',
          },
          {
            kind: 'mcq',
            id: 'b1-cond-ex6',
            prompt: 'We would have arrived on time if the train ___ late. (not be)',
            options: ["wasn't", "hadn't been", "hasn't been", "weren't"],
            answer: 1,
            explain: 'The if-clause of the third conditional uses the past perfect.',
          },
          {
            kind: 'mcq',
            id: 'b1-cond-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "I wish you wouldn't leave your shoes in the hall.",
              "I wish you didn't leave your shoes in the hallway.",
              "I wish you wouldn't leave your shoes in the hallway.",
              "I wish you wouldn't leave your shoes in the doorway.",
            ],
            answer: 2,
            audio: "I wish you wouldn't leave your shoes in the hallway.",
            explain: "'Wish + would' to complain about annoying behaviour.",
          },
        ],
      },
      {
        id: 'b1-reported-speech',
        level: 'B1',
        title: 'Reported Speech',
        summary:
          'Use **reported speech** to tell what someone said without their exact words. Tenses usually shift back one step (**backshift**), and pronouns, places and times change. Choose carefully between **say** and **tell**.',
        sections: [
          {
            heading: 'Backshift of tenses',
            body: 'When the reporting verb is in the past, the verb usually moves **one tense back**: present simple becomes past simple, present continuous becomes past continuous, will becomes would, and so on.',
            examples: [
              {
                en: '"I am tired." → She said she was tired.',
              },
              {
                en: '"I will call you." → He said he would call me.',
              },
            ],
          },
          {
            heading: 'Reported questions',
            body: "In reported questions there is **no inversion and no auxiliary 'do'**, and word order is like a statement. Use **if/whether** for yes/no questions and keep the question word for wh-questions.",
            examples: [
              {
                en: '"Where do you live?" → She asked where I lived.',
              },
              {
                en: '"Are you ready?" → He asked if I was ready.',
              },
            ],
          },
          {
            heading: 'Say vs tell',
            body: "**Tell** needs a person object (tell someone something). **Say** does not take a personal object directly; we say 'say to someone'. Also change time and place words: now→then, today→that day, here→there.",
            examples: [
              {
                en: 'She told me she was leaving.',
              },
              {
                en: 'She said (that) she was leaving.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common changes',
            columns: ['Direct', 'Reported'],
            rows: [
              ['am/is/are', 'was/were'],
              ['will', 'would'],
              ['can', 'could'],
              ['today', 'that day'],
              ['tomorrow', 'the next day'],
            ],
          },
        ],
        examples: [
          {
            en: 'He said he had finished his homework.',
          },
          {
            en: 'They told us they were moving abroad.',
          },
          {
            en: 'She asked me what time it was.',
          },
          {
            en: 'I asked whether they wanted coffee.',
          },
          {
            en: 'He told me to wait outside.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She said me that she was busy.',
            right: 'She told me that she was busy.',
            why: "Use 'tell' with a person object; 'say' does not take a personal object directly.",
          },
          {
            wrong: 'He asked me where did I live.',
            right: 'He asked me where I lived.',
            why: "Reported questions use statement word order with no auxiliary 'do' and no inversion.",
          },
          {
            wrong: 'She said that she will come tomorrow.',
            right: 'She said that she would come the next day.',
            why: "After a past reporting verb, 'will' becomes 'would' and 'tomorrow' becomes 'the next day'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-rs-ex1',
            prompt: '"I am hungry." She said she ___ hungry.',
            options: ['is', 'were', 'was', 'has been'],
            answer: 2,
            explain: "Present 'am' shifts back to 'was'.",
          },
          {
            kind: 'mcq',
            id: 'b1-rs-ex2',
            prompt: 'Choose the correct reported question.',
            options: [
              'He asked where was the station.',
              'He asked where the station was.',
              'He asked where did the station was.',
            ],
            answer: 1,
            explain: 'Statement word order with no inversion.',
          },
          {
            kind: 'mcq',
            id: 'b1-rs-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'She said me that the shop was closed.',
              'She told me that the shop was closed.',
              'She told to me that the shop was closed.',
              'She said me the shop was closed.',
            ],
            answer: 1,
            explain: "'Tell' takes a person object; 'say' does not.",
          },
          {
            kind: 'order',
            id: 'b1-rs-ex5',
            tokens: ['They', 'told', 'us', 'they', 'would', 'arrive', 'late.'],
            answer: 'They told us they would arrive late.',
            explain: "'Tell + person', and 'will' becomes 'would'.",
          },
          {
            kind: 'mcq',
            id: 'b1-rs-ex6',
            prompt: '"Open the door." He told me ___ the door.',
            options: ['open', 'opening', 'to opening', 'to open'],
            answer: 3,
            explain: "Reported commands use 'tell someone to + infinitive'.",
          },
          {
            kind: 'mcq',
            id: 'b1-rs-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'She asked me when the meeting would start.',
              'She asked me what time the meeting would start.',
              'She asked me what time the meeting would end.',
              'She asked him what time the meeting would start.',
            ],
            answer: 1,
            audio: 'She asked me what time the meeting would start.',
            explain: "Reported wh-question with backshift of 'will' to 'would'.",
          },
        ],
      },
      {
        id: 'b1-passive-voice',
        level: 'B1',
        title: 'Passive Voice',
        summary:
          'Use the **passive voice** when the action is more important than who does it. Form it with the verb **be + past participle**. Add **by** to mention the agent only when it matters.',
        sections: [
          {
            heading: 'Form across simple tenses',
            body: 'Keep the same tense in **be** and add the **past participle**: present simple (is made), past simple (was made), present perfect (has been made), future (will be made).',
            examples: [
              {
                en: 'The bridge was built in 1920.',
              },
              {
                en: 'These cars are made in Japan.',
              },
            ],
          },
          {
            heading: 'When to use the passive',
            body: 'Use the passive when the **doer is unknown, obvious or unimportant**, or to sound more formal and objective. Mention the agent with **by** only when it adds information.',
            examples: [
              {
                en: 'My wallet was stolen yesterday.',
              },
              {
                en: 'The novel was written by a Spanish author.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Active to passive',
            columns: ['Tense', 'Active', 'Passive'],
            rows: [
              ['present', 'They clean it.', 'It is cleaned.'],
              ['past', 'They cleaned it.', 'It was cleaned.'],
              ['present perfect', 'They have cleaned it.', 'It has been cleaned.'],
              ['future', 'They will clean it.', 'It will be cleaned.'],
            ],
          },
        ],
        examples: [
          {
            en: 'English is spoken all over the world.',
          },
          {
            en: 'The results will be announced tomorrow.',
          },
          {
            en: 'The room has been cleaned already.',
          },
          {
            en: 'The letters were sent last week.',
          },
          {
            en: 'This dish is served with rice.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The house was build in 1990.',
            right: 'The house was built in 1990.',
            why: 'The passive needs the past participle, not the base form.',
          },
          {
            wrong: 'My car stole last night.',
            right: 'My car was stolen last night.',
            why: "A passive subject that receives the action needs 'be + past participle'.",
          },
          {
            wrong: 'The report is wrote by the manager.',
            right: 'The report is written by the manager.',
            why: "'Write' has the irregular past participle 'written'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-pas-ex1',
            prompt: 'The Mona Lisa ___ by Leonardo da Vinci. (paint)',
            options: ['were painted', 'is painted', 'was painted', 'was painting'],
            answer: 2,
            explain: 'Past passive: was/were + past participle.',
          },
          {
            kind: 'mcq',
            id: 'b1-pas-ex2',
            prompt: 'Choose the present perfect passive.',
            options: [
              'The tickets have sold.',
              'The tickets have been sold.',
              'The tickets are sold by yesterday.',
            ],
            answer: 1,
            explain: 'Present perfect passive: have/has been + past participle.',
          },
          {
            kind: 'mcq',
            id: 'b1-pas-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'These phones are make in China.',
              'These phones is made in China.',
              'These phones are made in China.',
              'These phones are making in China.',
            ],
            answer: 2,
            explain: "Use the past participle 'made' in the passive.",
          },
          {
            kind: 'order',
            id: 'b1-pas-ex5',
            tokens: ['The', 'windows', 'are', 'cleaned', 'every', 'week.'],
            answer: 'The windows are cleaned every week.',
            explain: 'Present simple passive: are + past participle.',
          },
          {
            kind: 'mcq',
            id: 'b1-pas-ex6',
            prompt: 'The thief ___ by the police last night. (catch)',
            options: ['was caught', 'were caught', 'was catched', 'is caught'],
            answer: 0,
            explain: "Past passive of 'catch' is 'was caught'.",
          },
          {
            kind: 'mcq',
            id: 'b1-pas-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The new library will be open next month.',
              'The new library will be opened next week.',
              'The old library will be opened next month.',
              'The new library will be opened next month.',
            ],
            answer: 3,
            audio: 'The new library will be opened next month.',
            explain: "Future passive with 'will be + past participle'.",
          },
        ],
      },
      {
        id: 'b1-relative-clauses',
        level: 'B1',
        title: 'Relative Clauses',
        summary:
          'Use **relative clauses** to give more information about a noun. **Defining** clauses identify which one we mean; **non-defining** clauses add extra information between commas.',
        sections: [
          {
            heading: 'Relative pronouns',
            body: 'Use **who** for people, **which** for things, **that** for both (in defining clauses), **whose** for possession, and **where** for places. **When** refers to times.',
            examples: [
              {
                en: 'The man who lives next door is a doctor.',
              },
              {
                en: "That's the town where I grew up.",
              },
            ],
          },
          {
            heading: 'Defining clauses',
            body: 'A **defining** relative clause is essential: it tells us exactly which person or thing we mean, with **no commas**. You can use **that** instead of who/which, and the relative pronoun can be omitted when it is the object.',
            examples: [
              {
                en: 'The book (that) I bought was cheap.',
              },
              {
                en: "She's the teacher who helped me.",
              },
            ],
          },
          {
            heading: 'Non-defining clauses',
            body: 'A **non-defining** clause adds extra, non-essential information, always between **commas**. Do not use **that** here, and never omit the pronoun.',
            examples: [
              {
                en: 'My brother, who lives in Paris, is a chef.',
              },
              {
                en: 'The hotel, which was very old, had no lift.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Defining vs non-defining',
            columns: ['Feature', 'Defining', 'Non-defining'],
            rows: [
              ['commas', 'no', 'yes'],
              ['that allowed', 'yes', 'no'],
              ['omit pronoun (object)', 'yes', 'no'],
            ],
          },
        ],
        examples: [
          {
            en: 'This is the phone that I told you about.',
          },
          {
            en: 'People who exercise tend to feel better.',
          },
          {
            en: 'Mr Smith, whose car was stolen, called the police.',
          },
          {
            en: 'The day when we met was rainy.',
          },
          {
            en: 'Paris, which is the capital of France, is beautiful.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The woman which lives upstairs is friendly.',
            right: 'The woman who lives upstairs is friendly.',
            why: "Use 'who' (or 'that') for people, not 'which'.",
          },
          {
            wrong: 'My mother, that is a nurse, works nights.',
            right: 'My mother, who is a nurse, works nights.',
            why: "In non-defining clauses you cannot use 'that'; use who/which.",
          },
          {
            wrong: 'The house where I live in is small.',
            right: 'The house where I live is small.',
            why: "'Where' already means 'in which', so do not add 'in' at the end.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-rel-ex1',
            prompt: "That's the girl ___ won the competition. (relative pronoun)",
            options: ['which', 'who', 'whom', 'whose'],
            answer: 1,
            explain: "Use 'who' or 'that' for people in a defining clause.",
          },
          {
            kind: 'mcq',
            id: 'b1-rel-ex2',
            prompt: 'Choose the correct non-defining clause.',
            options: [
              'My car, that is red, is fast.',
              'My car, which is red, is fast.',
              'My car which is red is fast.',
            ],
            answer: 1,
            explain: "Non-defining clauses use 'which' with commas, not 'that'.",
          },
          {
            kind: 'mcq',
            id: 'b1-rel-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The film what I watched was boring.',
              'The film who I watched was boring.',
              'The film that I watched was boring.',
              'The film I watched it was boring.',
            ],
            answer: 2,
            explain: "'What' is not a relative pronoun here; use that/which or omit it.",
          },
          {
            kind: 'order',
            id: 'b1-rel-ex5',
            tokens: ['The', 'man', 'whose', 'dog', 'barks', 'lives', 'next', 'door.'],
            answer: 'The man whose dog barks lives next door.',
            explain: "'Whose' shows possession in a relative clause.",
          },
          {
            kind: 'mcq',
            id: 'b1-rel-ex6',
            prompt: 'Venice, ___ is full of canals, is in Italy.',
            options: ['who', 'that', 'where', 'which'],
            answer: 3,
            explain: "Non-defining clause about a thing uses 'which'.",
          },
          {
            kind: 'mcq',
            id: 'b1-rel-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The restaurant where we had dinner was fully booked.',
              'The restaurant where we had lunch was fully booked.',
              'The restaurant where we had dinner was fully packed.',
              'The restaurant which we had dinner was fully booked.',
            ],
            answer: 0,
            audio: 'The restaurant where we had dinner was fully booked.',
            explain: "Defining relative clause with 'where' for a place.",
          },
        ],
      },
      {
        id: 'b1-modals-deduction',
        level: 'B1',
        title: 'Modals of Deduction',
        summary:
          "Use **modals of deduction** to say how certain you are about something. **Must** shows you are sure it is true, **can't** that it is impossible, and **might/may/could** that it is possible.",
        sections: [
          {
            heading: 'Present deduction',
            body: "Use **must + infinitive** when you are sure something is true, **can't + infinitive** when you are sure it is false, and **might/may/could + infinitive** when it is possible.",
            examples: [
              {
                en: 'She must be tired after that long flight.',
              },
              {
                en: "That can't be John; he's in Spain.",
              },
            ],
          },
          {
            heading: 'Past deduction',
            body: "For the past, use **must have + past participle** (sure it happened), **can't have + past participle** (sure it didn't), and **might/may/could have + past participle** (possible).",
            examples: [
              {
                en: 'He must have left already; his coat is gone.',
              },
              {
                en: 'They might have missed the train.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Certainty with modals',
            columns: ['Meaning', 'Present', 'Past'],
            rows: [
              ['sure - yes', 'must be', 'must have been'],
              ['possible', 'might/may/could be', 'might/may/could have been'],
              ['sure - no', "can't be", "can't have been"],
            ],
          },
        ],
        examples: [
          {
            en: 'You must be joking!',
          },
          {
            en: 'The lights are off; they must be asleep.',
          },
          {
            en: "She can't be at home; her car isn't here.",
          },
          {
            en: 'It might be raining outside.',
          },
          {
            en: 'Someone must have taken my umbrella.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He must to be at work.',
            right: 'He must be at work.',
            why: "Modal verbs are followed by a bare infinitive without 'to'.",
          },
          {
            wrong: "She mustn't be the manager; she's too young.",
            right: "She can't be the manager; she's too young.",
            why: "For a confident negative deduction use 'can't', not 'mustn't' (which means prohibition).",
          },
          {
            wrong: 'They must left early.',
            right: 'They must have left early.',
            why: "Past deduction needs 'have + past participle' after the modal.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-mod-ex1',
            prompt: 'The ground is wet. It ___ have rained last night. (sure - yes)',
            options: ['might', 'must', "can't", 'should'],
            answer: 1,
            explain: "Strong certainty about the past uses 'must have'.",
          },
          {
            kind: 'mcq',
            id: 'b1-mod-ex2',
            prompt: 'He never answers. He ___ be very busy.',
            options: ["can't", 'must', "mustn't"],
            answer: 1,
            explain: "'Must' expresses a confident positive deduction.",
          },
          {
            kind: 'mcq',
            id: 'b1-mod-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "That can't be true.",
              "That can't to be true.",
              "That can't being true.",
              "That doesn't can be true.",
            ],
            answer: 0,
            explain: "After a modal use the bare infinitive without 'to'.",
          },
          {
            kind: 'order',
            id: 'b1-mod-ex5',
            tokens: ['She', "can't", 'be', 'hungry;', 'she', 'just', 'ate.'],
            answer: "She can't be hungry; she just ate.",
            explain: "'Can't' shows a confident negative deduction.",
          },
          {
            kind: 'mcq',
            id: 'b1-mod-ex6',
            prompt: "I'm not sure where she is. She ___ be at the gym. (possible)",
            options: ['must', 'will', 'might', 'can'],
            answer: 2,
            explain: 'Possibility is expressed with might/may/could.',
          },
          {
            kind: 'mcq',
            id: 'b1-mod-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'You must have been very proud of your team.',
              'You must be very proud of your team.',
              'You must have been very proud of your teammate.',
              'You might have been very proud of your team.',
            ],
            answer: 0,
            audio: 'You must have been very proud of your team.',
            explain: "Past deduction with 'must have been'.",
          },
        ],
      },
      {
        id: 'b1-connectors',
        level: 'B1',
        title: 'Connectors of Contrast & Purpose',
        summary:
          'Use **connectors** to link ideas. **Although, though** and **even though** join contrasting clauses; **however** links sentences; **despite/in spite of** take a noun or -ing; and **in order to / so that** show purpose.',
        sections: [
          {
            heading: 'Contrast with clauses',
            body: "**Although / even though / though** are followed by a **subject + verb**. They introduce a surprising contrast. 'Even though' is stronger than 'although'.",
            examples: [
              {
                en: 'Although it was cold, we went out.',
              },
              {
                en: "He passed even though he hadn't studied.",
              },
            ],
          },
          {
            heading: 'Despite, in spite of, however',
            body: '**Despite** and **in spite of** are followed by a **noun or -ing**, not a full clause. **However** connects two sentences and is followed by a comma.',
            examples: [
              {
                en: 'Despite the rain, we enjoyed the trip.',
              },
              {
                en: 'The plan was risky. However, it worked.',
              },
            ],
          },
          {
            heading: 'Purpose',
            body: 'Use **in order to / to + infinitive** to express purpose with the same subject. Use **so that + clause** when the subject changes or a modal is needed.',
            examples: [
              {
                en: 'I went home early in order to rest.',
              },
              {
                en: 'I spoke slowly so that everyone could understand.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'What follows each connector',
            columns: ['Connector', 'Followed by', 'Example'],
            rows: [
              ['although / even though', 'subject + verb', 'although it rained'],
              ['despite / in spite of', 'noun or -ing', 'despite the rain'],
              ['however', 'comma + sentence', 'However, we stayed.'],
              ['in order to', 'infinitive', 'in order to win'],
            ],
          },
        ],
        examples: [
          {
            en: 'Even though she was nervous, she gave a great talk.',
          },
          {
            en: 'In spite of being tired, he finished the race.',
          },
          {
            en: 'The food was great. However, it was expensive.',
          },
          {
            en: 'She studies hard in order to get a scholarship.',
          },
          {
            en: "We left early so that we wouldn't miss the flight.",
          },
        ],
        pitfalls: [
          {
            wrong: 'Despite it was raining, we went out.',
            right: 'Despite the rain, we went out.',
            why: "'Despite' is followed by a noun or -ing, not a subject + verb.",
          },
          {
            wrong: 'Although of the traffic, we arrived on time.',
            right: 'Despite the traffic, we arrived on time.',
            why: "'Although' needs a clause; use 'despite/in spite of' before a noun.",
          },
          {
            wrong: 'I called her for to invite her.',
            right: 'I called her to invite her.',
            why: "Purpose with the same subject uses 'to + infinitive', never 'for to'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-con-ex1',
            prompt: '___ the bad weather, the match continued. (noun-linker)',
            options: ['Although', 'Despite', 'However', 'Because of'],
            answer: 1,
            explain: "Use 'despite' or 'in spite of' before a noun phrase.",
          },
          {
            kind: 'mcq',
            id: 'b1-con-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'Although tired, but he kept working.',
              'Although he was tired, he kept working.',
              'Despite he was tired, he kept working.',
            ],
            answer: 1,
            explain: "'Although' is followed by a subject + verb and needs no 'but'.",
          },
          {
            kind: 'mcq',
            id: 'b1-con-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'In spite of it was late, we kept talking.',
              'In spite of the late hour, we kept talking.',
              'Despite of the late hour, we kept talking.',
              'Although the late hour, we kept talking.',
            ],
            answer: 1,
            explain: "'In spite of' takes a noun or -ing, not a clause.",
          },
          {
            kind: 'order',
            id: 'b1-con-ex5',
            tokens: [
              'We',
              'spoke',
              'quietly',
              'so',
              'that',
              'the',
              'baby',
              "wouldn't",
              'wake',
              'up.',
            ],
            answer: "We spoke quietly so that the baby wouldn't wake up.",
            explain: "'So that + clause' shows purpose with a change of subject.",
          },
          {
            kind: 'mcq',
            id: 'b1-con-ex6',
            prompt: 'The hotel was lovely. ___, it was far from the centre.',
            options: ['However', 'Although', 'Despite', 'Whereas'],
            answer: 0,
            explain: "'However' links two sentences and is followed by a comma.",
          },
          {
            kind: 'mcq',
            id: 'b1-con-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Even though we left late, we still arrived on time.',
              'Even though we left late, we still arrived in time.',
              'Even though we left early, we still arrived on time.',
              'Even though we left late, we never arrived on time.',
            ],
            answer: 0,
            audio: 'Even though we left late, we still arrived on time.',
            explain: "'Even though + clause' for strong contrast.",
          },
        ],
      },
      {
        id: 'b1-adjectives-gerunds-prepositions',
        level: 'B1',
        title: '-ed/-ing Adjectives, Gerunds & Prepositions',
        summary:
          'Choose **-ed** adjectives for feelings and **-ing** adjectives for the cause. Learn which verbs take a **gerund** or **infinitive**, including verbs that change meaning, and the **dependent prepositions** that go with common words.',
        sections: [
          {
            heading: '-ed vs -ing adjectives',
            body: 'Use **-ed adjectives** (bored, tired, interested) to describe how a person feels. Use **-ing adjectives** (boring, tiring, interesting) to describe the thing that causes the feeling.',
            examples: [
              {
                en: "I'm bored. This film is boring.",
              },
              {
                en: 'She was surprised by the surprising result.',
              },
            ],
          },
          {
            heading: 'Gerunds and infinitives',
            body: 'Some verbs take the **gerund** (enjoy, finish, avoid) and others the **infinitive** (want, decide, hope). After **prepositions** always use the **-ing form**.',
            examples: [
              {
                en: 'I enjoy cooking but I want to travel more.',
              },
              {
                en: "She's good at drawing.",
              },
            ],
          },
          {
            heading: 'Verbs that change meaning',
            body: 'Some verbs change meaning. **Remember/forget/stop** + gerund refers to the past; + infinitive refers to a duty or next step. **Try + -ing** means experiment; **try + to** means make an effort.',
            examples: [
              {
                en: 'I stopped smoking. / I stopped to smoke.',
              },
              {
                en: 'Remember to lock the door.',
              },
            ],
          },
          {
            heading: 'Dependent prepositions',
            body: 'Many adjectives and verbs are followed by a fixed **preposition**: interested **in**, good **at**, afraid **of**, depend **on**, listen **to**, wait **for**. Learn them as whole phrases.',
            examples: [
              {
                en: "I'm interested in history.",
              },
              {
                en: 'It depends on the weather.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common dependent prepositions',
            columns: ['Word', 'Preposition', 'Example'],
            rows: [
              ['interested', 'in', 'interested in art'],
              ['good', 'at', 'good at maths'],
              ['afraid', 'of', 'afraid of dogs'],
              ['depend', 'on', 'depend on you'],
              ['worried', 'about', 'worried about money'],
            ],
          },
        ],
        examples: [
          {
            en: 'The lesson was confusing, so we were confused.',
          },
          {
            en: 'He avoided answering the question.',
          },
          {
            en: 'We decided to stay one more night.',
          },
          {
            en: 'Thank you for helping me.',
          },
          {
            en: "She's afraid of flying.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I am very boring in this class.',
            right: 'I am very bored in this class.',
            why: "Use the -ed adjective for the feeling; 'boring' describes the cause.",
          },
          {
            wrong: 'She is good in cooking.',
            right: 'She is good at cooking.',
            why: "The fixed preposition after 'good' is 'at', not 'in'.",
          },
          {
            wrong: "I'm interested in learn languages.",
            right: "I'm interested in learning languages.",
            why: 'After a preposition use the -ing form, not the infinitive.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-adj-ex1',
            prompt: 'The trip was long and we were all ___. (tire)',
            options: ['tiring', 'tire', 'tired', 'tires'],
            answer: 2,
            explain: 'Use the -ed adjective for how people feel.',
          },
          {
            kind: 'mcq',
            id: 'b1-adj-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              "I'm good in playing chess.",
              "I'm good at playing chess.",
              "I'm good for playing chess.",
            ],
            answer: 1,
            explain: "'Good at + -ing' is the fixed structure.",
          },
          {
            kind: 'mcq',
            id: 'b1-adj-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The documentary was very interested.',
              'The documentary was very interest.',
              'The documentary was very interesting.',
              'The documentary was very interestingly.',
            ],
            answer: 2,
            explain: 'The thing that causes interest takes the -ing adjective.',
          },
          {
            kind: 'order',
            id: 'b1-adj-ex5',
            tokens: ["Don't", 'forget', 'to', 'call', 'your', 'mother.'],
            answer: "Don't forget to call your mother.",
            explain: "'Forget to + infinitive' refers to a duty in the future.",
          },
          {
            kind: 'mcq',
            id: 'b1-adj-ex6',
            prompt: "She's really interested ___ learning to paint.",
            options: ['on', 'in', 'at', 'of'],
            answer: 1,
            explain: "'Interested in' is the fixed combination, followed by -ing.",
          },
          {
            kind: 'mcq',
            id: 'b1-adj-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'I stopped drinking coffee because it makes me nervous.',
              'I stopped to drink coffee because it made me nervous.',
              'I stopped drinking coffee because it made me nervous.',
              'I stopped drinking tea because it made me nervous.',
            ],
            answer: 2,
            audio: 'I stopped drinking coffee because it made me nervous.',
            explain: "'Stop + -ing' means to quit a past habit.",
          },
        ],
      },
      {
        id: 'b1-indirect-questions-determiners',
        level: 'B1',
        title: 'Indirect Questions & Determiners',
        summary:
          'Use **indirect questions** to sound more polite, with statement word order. Use **determiners** like another, the other, both, either and neither to talk precisely about quantity and choice.',
        sections: [
          {
            heading: 'Indirect questions',
            body: "Begin with a polite phrase like **Could you tell me...** or **Do you know...**. After it, use **statement word order** with no auxiliary 'do' and no inversion. Use **if/whether** for yes/no questions.",
            examples: [
              {
                en: 'Could you tell me where the station is?',
              },
              {
                en: 'Do you know if the shop is open?',
              },
            ],
          },
          {
            heading: 'another / the other / others',
            body: "**Another** means 'one more' or 'a different one' (singular). **The other** means the specific remaining one. **Others / the others** are plural. Use **the other** when only two options remain.",
            examples: [
              {
                en: 'Would you like another coffee?',
              },
              {
                en: "One shoe is here; where's the other one?",
              },
            ],
          },
          {
            heading: 'both / either / neither',
            body: '**Both** means the two together (+ plural verb). **Either** means one or the other (+ singular). **Neither** means not one and not the other (+ singular, already negative).',
            examples: [
              {
                en: 'Both restaurants are good.',
              },
              {
                en: 'Neither answer is correct.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Choice determiners',
            columns: ['Word', 'Meaning', 'Verb'],
            rows: [
              ['both', 'the two', 'plural'],
              ['either', 'one or the other', 'singular'],
              ['neither', 'not one, not the other', 'singular'],
            ],
          },
        ],
        examples: [
          {
            en: 'Can you tell me what time it is?',
          },
          {
            en: "I don't know where she lives.",
          },
          {
            en: "I'll have another slice of cake.",
          },
          {
            en: 'Some people walked; others took the bus.',
          },
          {
            en: 'Either day works for me.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Could you tell me where is the bank?',
            right: 'Could you tell me where the bank is?',
            why: 'Indirect questions use statement word order, so the verb does not come before the subject.',
          },
          {
            wrong: 'I want other coffee.',
            right: 'I want another coffee.',
            why: "'Another' (one word) is used with singular countable nouns to mean 'one more'.",
          },
          {
            wrong: 'Neither restaurants are open.',
            right: 'Neither restaurant is open.',
            why: "'Neither' takes a singular noun and a singular verb.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-iqd-ex1',
            prompt: 'Do you know what time the film ___ ? (start)',
            options: ['does start', 'start', 'starts', 'started'],
            answer: 2,
            explain: "Indirect question keeps statement order: subject + verb, no 'does'.",
          },
          {
            kind: 'mcq',
            id: 'b1-iqd-ex2',
            prompt: 'Choose the correct indirect question.',
            options: [
              'Can you tell me where does she work?',
              'Can you tell me where she works?',
              'Can you tell me where works she?',
            ],
            answer: 1,
            explain: "Use statement word order with no auxiliary 'do'.",
          },
          {
            kind: 'mcq',
            id: 'b1-iqd-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Both of the answer is wrong.',
              'Both answers are wrong.',
              'Both of the answers is wrong.',
              'Both answer are wrong.',
            ],
            answer: 1,
            explain: "'Both' takes a plural noun and a plural verb.",
          },
          {
            kind: 'order',
            id: 'b1-iqd-ex5',
            tokens: ["I'd", 'like', 'another', 'cup', 'of', 'tea,', 'please.'],
            answer: "I'd like another cup of tea, please.",
            explain: "'Another + singular noun' means one more.",
          },
          {
            kind: 'mcq',
            id: 'b1-iqd-ex6',
            prompt: 'I tried two shirts, but ___ one fitted me. (not one and not the other)',
            options: ['either', 'neither', 'none', 'both'],
            answer: 1,
            explain: "'Neither' means not one and not the other.",
          },
          {
            kind: 'mcq',
            id: 'b1-iqd-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Could you tell me whether this train went to the airport?',
              'Could you tell me whether these trains go to the airport?',
              'Could you tell me if this bus goes to the airport?',
              'Could you tell me whether this train goes to the airport?',
            ],
            answer: 3,
            audio: 'Could you tell me whether this train goes to the airport?',
            explain: "Polite indirect question with 'whether' and statement order.",
          },
        ],
      },
    ],
  },
  {
    level: 'B2',
    title: 'B2 · Grammar in Depth',
    blurb: 'Master the advanced structures that make English sound natural, precise and fluent.',
    lessons: [
      {
        id: 'b2-narrative-tenses',
        level: 'B2',
        title: 'Narrative Tenses',
        summary:
          'Narrative tenses let you tell stories clearly by showing which actions happened first, which were in progress, and which form the background. Use the past simple for the main completed events, the past continuous for actions already in progress, the past perfect for earlier events, and the past perfect continuous to stress the duration of an earlier activity.',
        sections: [
          {
            heading: 'Main events and the background',
            body: 'Use the **past simple** for completed actions that move the story forward, one after another. Use the **past continuous** (was/were + -ing) for a longer action already in progress when a shorter action interrupted it, or to set the scene. The interrupting action goes in the **past simple**.',
            examples: [
              {
                en: 'I was walking home when it started to rain.',
              },
              {
                en: 'The sun was shining and the birds were singing.',
              },
            ],
          },
          {
            heading: 'Going further back: past perfect',
            body: "To refer to something that happened **before** another past moment, use the **past perfect** (had + past participle). It makes the order of events clear even when you mention them out of sequence. Compare: 'When I arrived, the film started' (I saw it begin) vs 'When I arrived, the film had started' (it began earlier).",
            examples: [
              {
                en: 'She had already left when I called.',
              },
              {
                en: "We couldn't get in because we had forgotten the keys.",
              },
            ],
          },
          {
            heading: 'Past perfect continuous',
            body: "Use the **past perfect continuous** (had been + -ing) to emphasise the **duration** of an activity that continued up to a point in the past, often to explain a visible result. 'My eyes were red because I had been crying.' It focuses on the ongoing process rather than the completed result.",
            examples: [
              {
                en: 'The ground was wet because it had been raining all night.',
              },
              {
                en: 'He was tired because he had been working since dawn.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'The four narrative tenses',
            columns: ['Tense', 'Form', 'Use'],
            rows: [
              ['Past simple', 'worked / went', 'Main completed events'],
              ['Past continuous', 'was/were working', 'Action in progress, background'],
              ['Past perfect', 'had worked', 'Earlier completed event'],
              ['Past perfect continuous', 'had been working', 'Duration of earlier activity'],
            ],
          },
        ],
        examples: [
          {
            en: 'When the alarm went off, everyone was sleeping.',
          },
          {
            en: 'By the time the police arrived, the thief had escaped.',
          },
          {
            en: 'She was exhausted because she had been studying for hours.',
          },
          {
            en: 'I recognised him at once: I had met him before.',
          },
          {
            en: 'While we were having dinner, the lights suddenly went out.',
          },
          {
            en: 'They had been driving for six hours before they stopped to rest.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived, she left.',
            right: 'When I arrived, she had left.',
            why: 'If she left before you arrived, the earlier action needs the past perfect to show the sequence.',
          },
          {
            wrong: 'I was knowing the answer immediately.',
            right: 'I knew the answer immediately.',
            why: "Stative verbs like 'know', 'understand' and 'believe' are not normally used in continuous forms.",
          },
          {
            wrong: 'The street was wet because it had rained all night.',
            right: 'The street was wet because it had been raining all night.',
            why: 'To stress the long duration that caused the result, the past perfect continuous is more natural here.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-nt-1',
            prompt: 'Choose the correct sentence.',
            options: [
              'When I got home, my brother already cooked dinner.',
              'When I got home, my brother had already cooked dinner.',
              'When I got home, my brother has already cooked dinner.',
            ],
            answer: 1,
            explain:
              "The cooking happened before getting home, so use the past perfect 'had cooked'.",
          },
          {
            kind: 'mcq',
            id: 'b2-nt-2',
            prompt: 'She was tired because she ___ all day.',
            options: ['has been working', 'had been working', 'was working', 'had worked'],
            answer: 1,
            explain:
              'The past perfect continuous stresses the duration of the activity that caused her tiredness.',
          },
          {
            kind: 'mcq',
            id: 'b2-nt-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'While I cooked, the phone was ringing.',
              'While I cooked, the phone rang.',
              'While I was cooking, the phone rang.',
              'While I was cooking, the phone has rung.',
            ],
            answer: 2,
            explain:
              'The longer background action takes the past continuous; the sudden interruption usually takes the past simple.',
          },
          {
            kind: 'order',
            id: 'b2-nt-4',
            tokens: ['the', 'train', 'had', 'left', 'when', 'we', 'arrived'],
            answer: 'The train had left when we arrived.',
            explain: 'The earlier event (the train leaving) uses the past perfect.',
          },
          {
            kind: 'mcq',
            id: 'b2-nt-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'By midnight they had been talking for three hours.',
              'By midnight they had been talking for two hours.',
              'By midnight they have been talking for three hours.',
              'By midnight they had been walking for three hours.',
            ],
            answer: 0,
            audio: 'By midnight they had been talking for three hours.',
            explain:
              "Note the past perfect continuous 'had been talking' to express duration up to a past point.",
          },
        ],
      },
      {
        id: 'b2-future-perfect-and-future-in-the-past',
        level: 'B2',
        title: 'Future Perfect & Future in the Past',
        summary:
          "Use the future perfect to talk about something that will be completed before a point in the future, and the future continuous for actions in progress at a future moment. 'Future in the past' describes what was expected to happen seen from an earlier viewpoint, usually with 'would' or 'was/were going to'.",
        sections: [
          {
            heading: 'Future perfect and future continuous',
            body: "The **future perfect** (will have + past participle) views an action as **completed before** a future time, often with 'by' or 'by the time'. The **future continuous** (will be + -ing) describes an action **in progress** at a future moment. 'By 2030 I will have finished my degree' vs 'This time tomorrow I will be flying to Madrid.'",
            examples: [
              {
                en: 'By next week I will have read the whole report.',
              },
              {
                en: "Don't call at eight; we'll be having dinner.",
              },
            ],
          },
          {
            heading: 'Future in the past',
            body: "When you describe the future **from a past viewpoint** (what someone expected or planned), use **was/were going to** or **would**. 'I knew she would arrive late.' 'We were going to call you, but we forgot.' These often express plans or predictions that may or may not have happened.",
            examples: [
              {
                en: 'He said he would help us the next day.',
              },
              {
                en: 'They were going to move to Canada, but plans changed.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Forms at a glance',
            columns: ['Meaning', 'Form', 'Example'],
            rows: [
              ['Completed before future point', 'will have + p.p.', 'will have left'],
              ['In progress at future point', 'will be + -ing', 'will be working'],
              ['Future seen from the past', 'was/were going to', 'was going to call'],
              ['Future seen from the past', 'would + verb', 'would arrive'],
            ],
          },
        ],
        examples: [
          {
            en: 'By the time you read this, I will have left the country.',
          },
          {
            en: 'In ten years she will have become a doctor.',
          },
          {
            en: 'At noon tomorrow we will be travelling through the mountains.',
          },
          {
            en: 'I was sure the plan would work.',
          },
          {
            en: 'We were going to buy the house, but it sold first.',
          },
          {
            en: 'By Friday they will have been married for ten years.',
          },
        ],
        pitfalls: [
          {
            wrong: 'By next year I will finish my studies.',
            right: 'By next year I will have finished my studies.',
            why: "With 'by + future time' meaning 'before then', English needs the future perfect, not the simple future.",
          },
          {
            wrong: 'She said she will call me.',
            right: 'She said she would call me.',
            why: "Reporting a past statement shifts 'will' to 'would' (future in the past).",
          },
          {
            wrong: 'This time tomorrow I will fly to Rome.',
            right: 'This time tomorrow I will be flying to Rome.',
            why: 'An action in progress at a precise future moment takes the future continuous.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-fp-1',
            prompt: "Choose the best option: 'By 2035, scientists ___ a cure.'",
            options: ['will find', 'will have found', 'are finding'],
            answer: 1,
            explain:
              "'By 2035' signals completion before a future point, so use the future perfect.",
          },
          {
            kind: 'mcq',
            id: 'b2-fp-2',
            prompt: "Don't phone at nine; we ___ the match.",
            options: ['will watch', 'are watching', 'will be watching', 'will have watched'],
            answer: 2,
            explain: 'An action in progress at a future time takes the future continuous.',
          },
          {
            kind: 'mcq',
            id: 'b2-fp-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'He promised he will pay me back.',
              'He promised he would pay me back.',
              'He promised he would paid me back.',
              'He promised he pays me back.',
            ],
            answer: 1,
            explain: "After a past reporting verb, 'will' becomes 'would' (future in the past).",
          },
          {
            kind: 'order',
            id: 'b2-fp-4',
            tokens: ['we', 'were', 'going', 'to', 'leave', 'but', 'it', 'snowed'],
            answer: 'We were going to leave but it snowed.',
            explain:
              "'Was/were going to' expresses an intention seen from the past that did not happen.",
          },
          {
            kind: 'mcq',
            id: 'b2-fp-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'This time next week I will be lying on the beach.',
              'This time last week I will be lying on a beach.',
              'This time next week I am lying on a beach.',
              'This time next week I will be lying on a beach.',
            ],
            answer: 3,
            audio: 'This time next week I will be lying on a beach.',
            explain: 'Future continuous for an action in progress at a specific future moment.',
          },
        ],
      },
      {
        id: 'b2-mixed-conditionals-and-alternatives',
        level: 'B2',
        title: 'Mixed Conditionals & Alternatives to If',
        summary:
          "Mixed conditionals combine two different time frames: a past condition with a present result, or a present condition with a past result. You can also replace 'if' with words like unless, provided that, as long as, in case, suppose and otherwise to add precise meaning.",
        sections: [
          {
            heading: 'Mixing time frames',
            body: "A **mixed conditional** links a past condition to a present result, or a present condition to a past result. Past condition → present result: 'If I had studied medicine, I would be a doctor now.' Present condition → past result: 'If I were more careful, I wouldn't have lost my keys.' Choose the tense in each clause according to its own time.",
            examples: [
              {
                en: 'If I had saved money, I would be on holiday now.',
              },
              {
                en: "If she weren't so shy, she would have spoken up.",
              },
            ],
          },
          {
            heading: "Alternatives to 'if'",
            body: "Several connectors refine conditional meaning. **Unless** = if not. **Provided/providing that** and **as long as** = only if this condition is met. **In case** = as a precaution. **Otherwise** = if not, the result will be bad. **Suppose/supposing** introduces a hypothesis. 'You can borrow it as long as you return it.' 'Take an umbrella in case it rains.'",
            examples: [
              {
                en: "We'll go for a walk unless it rains.",
              },
              {
                en: 'Bring a map in case we get lost.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Mixed conditional patterns',
            columns: ['Type', 'If-clause', 'Result clause'],
            rows: [
              ['Past → present', 'If + past perfect', 'would + base verb (now)'],
              ['Present → past', 'If + past simple', 'would have + past participle'],
            ],
          },
        ],
        examples: [
          {
            en: "If we hadn't missed the train, we would be home by now.",
          },
          {
            en: 'If he spoke English, he would have got the job.',
          },
          {
            en: "You won't pass unless you work harder.",
          },
          {
            en: "I'll lend you the car provided that you drive carefully.",
          },
          {
            en: "Leave now; otherwise you'll be late.",
          },
          {
            en: 'Suppose you won the lottery, what would you do?',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would tell you.',
            right: 'If I had known, I would have told you.',
            why: "The if-clause never uses 'would have'; it uses the past perfect.",
          },
          {
            wrong: "Unless you don't hurry, we'll miss it.",
            right: "Unless you hurry, we'll miss it.",
            why: "'Unless' already means 'if not', so adding another negative reverses the meaning.",
          },
          {
            wrong: 'Take cash in case you will need it.',
            right: 'Take cash in case you need it.',
            why: "After 'in case' we use a present tense, not 'will', for a future precaution.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-mc-1',
            prompt: "Complete: 'If I had taken that job, I ___ in London now.'",
            options: ['would live', 'would have lived', 'will live'],
            answer: 0,
            explain:
              "Past condition with a present result needs 'would + base verb' for the present outcome.",
          },
          {
            kind: 'mcq',
            id: 'b2-mc-2',
            prompt: "We'll be fine as long as we ___ calm.",
            options: ['will stay', 'stayed', 'stay', 'are staying'],
            answer: 2,
            explain: "'As long as' is followed by a present tense in a real conditional.",
          },
          {
            kind: 'mcq',
            id: 'b2-mc-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'If she would be taller, she would have become a model.',
              'If she was being taller, she would have become a model.',
              'If she would have been taller, she would have become a model.',
              'If she were taller, she would have become a model.',
            ],
            answer: 3,
            explain:
              "Present condition (her height) uses the past simple; the if-clause never takes 'would'.",
          },
          {
            kind: 'order',
            id: 'b2-mc-4',
            tokens: ['bring', 'an', 'umbrella', 'in', 'case', 'it', 'rains'],
            answer: 'Bring an umbrella in case it rains.',
            explain: "'In case' + present tense expresses a precaution against a possible event.",
          },
          {
            kind: 'mcq',
            id: 'b2-mc-6',
            prompt: 'Which sentence did you hear?',
            options: [
              "You can't enter if you have a ticket.",
              "You can't enter unless you have a ticket.",
              "You can't enter unless you had a ticket.",
              "You couldn't enter unless you have a ticket.",
            ],
            answer: 1,
            audio: "You can't enter unless you have a ticket.",
            explain: "'Unless' = 'if not'; no extra negative is needed.",
          },
        ],
      },
      {
        id: 'b2-passive-voice',
        level: 'B2',
        title: 'The Passive in Depth',
        summary:
          "The passive shifts focus from the doer to the action or the receiver, and works in every tense with be + past participle. B2 also covers the causative (have/get something done) for services arranged by someone else, and passive reporting structures such as 'It is said that...' and 'He is believed to...'.",
        sections: [
          {
            heading: 'The passive in all tenses',
            body: "Form the passive with the correct tense of **be + past participle**. Use it when the doer is unknown, obvious or unimportant, or to keep focus on the receiver. Add the agent with **by** only if it matters. 'The bridge was built in 1890.' 'The results will be announced tomorrow.' 'My car is being repaired.'",
            examples: [
              {
                en: 'The documents have been signed already.',
              },
              {
                en: 'A new policy is being discussed.',
              },
            ],
          },
          {
            heading: 'Causative: have/get something done',
            body: "Use **have/get + object + past participle** when you arrange for someone else to do a service for you. 'I had my hair cut' (a hairdresser did it). 'Get' is slightly more informal. It can also describe something unpleasant that happens to you: 'They had their flat burgled.'",
            examples: [
              {
                en: "We're having the kitchen painted next week.",
              },
              {
                en: 'She got her phone repaired yesterday.',
              },
            ],
          },
          {
            heading: 'Passive reporting structures',
            body: "To report opinions or beliefs impersonally, use **It is said/believed/thought that + clause** or **subject + is said/believed + to + infinitive**. 'It is said that he is very rich' = 'He is said to be very rich.' For earlier actions, use the perfect infinitive: 'She is thought to have left the country.'",
            examples: [
              {
                en: 'The minister is believed to be resigning.',
              },
              {
                en: 'The painting is thought to have been stolen.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Passive across tenses',
            columns: ['Tense', 'Active', 'Passive'],
            rows: [
              ['Present simple', 'They make it', 'It is made'],
              ['Present continuous', 'They are making it', 'It is being made'],
              ['Past simple', 'They made it', 'It was made'],
              ['Present perfect', 'They have made it', 'It has been made'],
              ['Future', 'They will make it', 'It will be made'],
              ['Modal', 'They must make it', 'It must be made'],
            ],
          },
        ],
        examples: [
          {
            en: 'English is spoken all over the world.',
          },
          {
            en: 'The road is being resurfaced this month.',
          },
          {
            en: 'I need to have my eyes tested.',
          },
          {
            en: 'He had his wallet stolen on the train.',
          },
          {
            en: 'It is said that the company is in trouble.',
          },
          {
            en: 'The suspect is believed to have fled abroad.',
          },
        ],
        pitfalls: [
          {
            wrong: 'My house was build in 1950.',
            right: 'My house was built in 1950.',
            why: "The passive needs the past participle ('built'), not the base form.",
          },
          {
            wrong: 'I cut my hair yesterday at the salon.',
            right: 'I had my hair cut yesterday at the salon.',
            why: "If a hairdresser did it, use the causative; 'I cut my hair' means you did it yourself.",
          },
          {
            wrong: 'It is said he is to be very rich.',
            right: 'He is said to be very rich.',
            why: "In the personal reporting pattern, the subject comes first, then 'is said to + infinitive'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-pv-1',
            prompt: "Choose the passive form: 'They are repairing the road.'",
            options: [
              'The road is repaired.',
              'The road is being repaired.',
              'The road has repaired.',
            ],
            answer: 1,
            explain: 'Present continuous passive = is/are being + past participle.',
          },
          {
            kind: 'mcq',
            id: 'b2-pv-2',
            prompt: 'We are going to ___ our car serviced before the trip.',
            options: ['make', 'have', 'let', 'do'],
            answer: 1,
            explain:
              "The causative uses 'have/get + object + past participle' for a service done by someone else.",
          },
          {
            kind: 'mcq',
            id: 'b2-pv-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'It is said that he has stolen the money, he is said to steal it.',
              'He is said to steal the money.',
              'He is said to have stolen the money.',
              'He is said to have been stolen the money.',
            ],
            answer: 2,
            explain:
              "For an earlier action in the personal pattern, use the perfect infinitive 'to have stolen'.",
          },
          {
            kind: 'order',
            id: 'b2-pv-4',
            tokens: ['the', 'results', 'will', 'be', 'announced', 'tomorrow'],
            answer: 'The results will be announced tomorrow.',
            explain: 'Future passive = will be + past participle.',
          },
          {
            kind: 'mcq',
            id: 'b2-pv-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'The ancient city is believed to have been destroyed by an earthquake.',
              'The ancient city is believed to have been destroyed by earthquakes.',
              'The ancient city is believed to have destroyed by an earthquake.',
              'The ancient city was believed to have been destroyed by an earthquake.',
            ],
            answer: 0,
            audio: 'The ancient city is believed to have been destroyed by an earthquake.',
            explain:
              "Passive reporting with a passive perfect infinitive 'to have been destroyed'.",
          },
        ],
      },
      {
        id: 'b2-reported-speech',
        level: 'B2',
        title: 'Reported Speech & Reporting Verbs',
        summary:
          "Reported speech retells what someone said, usually shifting tenses one step back and changing pronouns and time words. Commands and requests use 'tell/ask + object + to-infinitive', while reporting verbs like suggest, offer, admit, deny and warn each follow their own grammatical pattern.",
        sections: [
          {
            heading: 'Backshift and changes',
            body: "After a past reporting verb, tenses usually **shift back**: present → past, past → past perfect, will → would, can → could. Pronouns and time/place words also change: 'now' → 'then', 'tomorrow' → 'the next day', 'this' → 'that'. 'I am tired now' → 'She said she was tired then.'",
            examples: [
              {
                en: 'He said he would call me the next day.',
              },
              {
                en: 'She told me she had already eaten.',
              },
            ],
          },
          {
            heading: 'Commands and requests',
            body: "Report orders, advice and requests with **tell/ask/advise/warn + object + (not) to + infinitive**. 'Sit down' → 'She told me to sit down.' 'Please don't go' → 'He asked me not to go.' The negative is formed with **not to**.",
            examples: [
              {
                en: 'The teacher told us to be quiet.',
              },
              {
                en: 'They asked me not to tell anyone.',
              },
            ],
          },
          {
            heading: 'Reporting verbs and their patterns',
            body: "Many verbs summarise a speech act with their own structure. **suggest/recommend + -ing** or **+ that-clause**; **offer/promise/agree/refuse + to-infinitive**; **admit/deny + -ing**; **accuse someone of + -ing**; **blame someone for + -ing**; **apologise for + -ing**; **insist on + -ing**. 'He admitted breaking the window.' 'She offered to help.'",
            examples: [
              {
                en: 'She suggested going to the cinema.',
              },
              {
                en: 'He denied taking the money.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reporting verb patterns',
            columns: ['Pattern', 'Verbs', 'Example'],
            rows: [
              ['verb + to-infinitive', 'offer, promise, agree, refuse', 'She refused to pay.'],
              ['verb + object + to-infinitive', 'tell, ask, advise, warn', 'He told me to wait.'],
              ['verb + -ing', 'suggest, admit, deny, recommend', 'I admit being wrong.'],
              [
                'verb + prep + -ing',
                'apologise for, insist on, accuse of',
                'He apologised for being late.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'She said she had seen the film before.',
          },
          {
            en: 'He asked me where I lived.',
          },
          {
            en: 'They warned us not to swim there.',
          },
          {
            en: 'I apologised for being late.',
          },
          {
            en: 'She accused him of lying.',
          },
          {
            en: 'He promised to pay me back soon.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He said me that he was tired.',
            right: 'He told me that he was tired.',
            why: "'Say' is not followed by a personal object; use 'tell + object' or 'say (without object)'.",
          },
          {
            wrong: 'She suggested me to go.',
            right: 'She suggested going. / She suggested that I go.',
            why: "'Suggest' is not followed by 'object + to-infinitive'; use '-ing' or a that-clause.",
          },
          {
            wrong: 'He asked me what time was it.',
            right: 'He asked me what time it was.',
            why: 'Reported questions use statement word order, not the question word order with inversion.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-rs-1',
            prompt: "Report this: 'I will help you,' she said.",
            options: [
              'She said she will help me.',
              'She said she would help me.',
              'She said she helps me.',
            ],
            answer: 1,
            explain: "After a past reporting verb, 'will' shifts back to 'would'.",
          },
          {
            kind: 'mcq',
            id: 'b2-rs-2',
            prompt: 'He admitted ___ the vase.',
            options: ['to break', 'breaking', 'broke', 'break'],
            answer: 1,
            explain: "'Admit' is followed by the -ing form, not a to-infinitive.",
          },
          {
            kind: 'mcq',
            id: 'b2-rs-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The teacher said us to open our books.',
              'The teacher told us open our books.',
              'The teacher told us to open our books.',
              'The teacher told to us to open our books.',
            ],
            answer: 2,
            explain:
              "Commands use 'tell/ask + object + to-infinitive'; 'say' cannot take a personal object this way.",
          },
          {
            kind: 'order',
            id: 'b2-rs-4',
            tokens: ['she', 'asked', 'me', 'not', 'to', 'be', 'late'],
            answer: 'She asked me not to be late.',
            explain: "Negative requests use 'not to + infinitive'.",
          },
          {
            kind: 'mcq',
            id: 'b2-rs-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'He apologised for not answering my emails.',
              'He apologised for not answering my email.',
              'He apologized for not answering my email.',
              'He apologised for not answering your email.',
            ],
            answer: 1,
            audio: 'He apologised for not answering my email.',
            explain: "'Apologise for + -ing'; the negative is 'for not + -ing'.",
          },
        ],
      },
      {
        id: 'b2-past-modals-of-deduction',
        level: 'B2',
        title: 'Past Modals: Deduction & Regret',
        summary:
          "Past modals let you make deductions and judgements about the past. Use 'must have' for near certainty, 'can't/couldn't have' for impossibility, and 'might/may/could have' for possibility. 'Should have' expresses criticism or regret, while 'needn't have' and 'didn't need to' describe unnecessary actions in different ways.",
        sections: [
          {
            heading: 'Deduction about the past',
            body: "Use **modal + have + past participle** to deduce what was true in the past. **Must have** = I'm almost certain it happened. **Can't/couldn't have** = I'm certain it didn't happen. **Might/may/could have** = it's possible. 'The ground is wet; it must have rained.' 'He can't have finished already.'",
            examples: [
              {
                en: 'She must have left early; her car is gone.',
              },
              {
                en: "They can't have heard the news yet.",
              },
            ],
          },
          {
            heading: 'Criticism and regret: should have',
            body: "Use **should have / shouldn't have + past participle** to say that the right thing was not done, expressing criticism or regret. 'You should have told me' (but you didn't). 'I shouldn't have eaten so much' (but I did). It always looks back at a past action that differs from what was ideal.",
            examples: [
              {
                en: 'You should have asked for help.',
              },
              {
                en: "I shouldn't have shouted at him.",
              },
            ],
          },
          {
            heading: "needn't have vs didn't need to",
            body: "**Needn't have + past participle** = you did something that turned out to be unnecessary. **Didn't need to + base verb** = it wasn't necessary, and usually you didn't do it. 'I needn't have cooked' (I cooked, but it was a waste). 'I didn't need to cook' (so I didn't bother).",
            examples: [
              {
                en: "You needn't have bought milk; we already had some.",
              },
              {
                en: "I didn't need to wake up early, so I slept in.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past modal meanings',
            columns: ['Modal', 'Meaning', 'Example'],
            rows: [
              ['must have + p.p.', 'near certainty it happened', 'She must have known.'],
              ["can't/couldn't have + p.p.", "certainty it didn't happen", "He can't have lied."],
              ['might/may/could have + p.p.', 'possibility', 'They may have left.'],
              ['should have + p.p.', 'criticism / regret', 'I should have called.'],
              ["needn't have + p.p.", 'did it, but unnecessary', "You needn't have paid."],
            ],
          },
        ],
        examples: [
          {
            en: 'The lights are off; they must have gone to bed.',
          },
          {
            en: "You couldn't have seen her; she was abroad.",
          },
          {
            en: 'He might have missed the bus.',
          },
          {
            en: 'We should have booked a table.',
          },
          {
            en: "You needn't have worried; everything was fine.",
          },
          {
            en: "She didn't need to bring anything, so she came empty-handed.",
          },
        ],
        pitfalls: [
          {
            wrong: 'He must left early.',
            right: 'He must have left early.',
            why: "Deduction about the past needs 'have + past participle' after the modal.",
          },
          {
            wrong: 'I should have went to the doctor.',
            right: 'I should have gone to the doctor.',
            why: "Use the past participle 'gone', not the past simple 'went', after 'should have'.",
          },
          {
            wrong: "You didn't need to buy bread, but you did.",
            right: "You needn't have bought bread.",
            why: "If the action was actually done but unnecessary, use 'needn't have + past participle'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-pm-1',
            prompt: 'The window is broken. Someone ___ it.',
            options: ['must break', 'must have broken', 'should break'],
            answer: 1,
            explain: "A confident deduction about the past uses 'must have + past participle'.",
          },
          {
            kind: 'mcq',
            id: 'b2-pm-2',
            prompt: "I'm so full. I ___ eaten that last slice.",
            options: ['should have', "shouldn't have", "shouldn't had", "mustn't have"],
            answer: 1,
            explain: "Regret about a past action uses 'shouldn't have + past participle'.",
          },
          {
            kind: 'mcq',
            id: 'b2-pm-3',
            prompt: 'Choose the correct sentence.',
            options: [
              "She can't be at the party last night; she was ill.",
              "She can't have be at the party last night; she was ill.",
              "She mustn't have been at the party last night; she was ill.",
              "She can't have been at the party last night; she was ill.",
            ],
            answer: 3,
            explain: "Past impossibility needs 'can't/couldn't have + past participle'.",
          },
          {
            kind: 'order',
            id: 'b2-pm-4',
            tokens: ['you', "needn't", 'have', 'waited', 'for', 'me'],
            answer: "You needn't have waited for me.",
            explain: "'Needn't have + p.p.' = the waiting was done but was unnecessary.",
          },
          {
            kind: 'mcq',
            id: 'b2-pm-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'You should have told me you are coming.',
              'You should have told him you were coming.',
              'You should have told me you were coming.',
              "You shouldn't have told me you were coming.",
            ],
            answer: 2,
            audio: 'You should have told me you were coming.',
            explain: "'Should have + past participle' expresses criticism of a past omission.",
          },
        ],
      },
      {
        id: 'b2-relative-and-participle-clauses',
        level: 'B2',
        title: 'Reduced Relative & Participle Clauses',
        summary:
          'Relative clauses can often be shortened into participle clauses to sound more concise and formal. A present participle (-ing) replaces an active relative clause, a past participle replaces a passive one, and participle clauses can also link two actions or show cause and time relationships.',
        sections: [
          {
            heading: 'Reducing relative clauses',
            body: "When a relative clause has an **active** meaning, replace 'who/which/that + verb' with the **present participle (-ing)**: 'the man who is waiting' → 'the man waiting'. When it has a **passive** meaning, use the **past participle**: 'the letter that was sent' → 'the letter sent'. This makes writing tighter and is common in formal English.",
            examples: [
              {
                en: 'The people living next door are friendly.',
              },
              {
                en: 'The car parked outside is mine.',
              },
            ],
          },
          {
            heading: 'Participle clauses for time and cause',
            body: "Participle clauses can connect ideas without a conjunction. A **present participle** shows an action happening at the same time or a reason: 'Feeling tired, she went to bed' (= because she felt tired). 'Opening the door, he saw the mess' (= when/as he opened it). A **perfect participle** (having + p.p.) shows an earlier completed action: 'Having finished, they left.'",
            examples: [
              {
                en: 'Not knowing the way, we asked for directions.',
              },
              {
                en: 'Having read the report, she made her decision.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Full vs reduced clauses',
            columns: ['Full relative clause', 'Reduced clause'],
            rows: [
              ['the woman who is speaking', 'the woman speaking'],
              ['the books that were left on the table', 'the books left on the table'],
              ['the train which departs at six', 'the train departing at six'],
              ['a house that was built in 1900', 'a house built in 1900'],
            ],
          },
        ],
        examples: [
          {
            en: 'Anyone wanting a ticket should queue here.',
          },
          {
            en: 'The money stolen from the bank was never found.',
          },
          {
            en: 'Walking along the beach, I found a shell.',
          },
          {
            en: 'Built in the 1920s, the theatre is now a museum.',
          },
          {
            en: 'Having missed the bus, he had to walk.',
          },
          {
            en: 'There were dozens of people waiting outside.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The man speaked to me was a stranger.',
            right: 'The man speaking to me was a stranger.',
            why: "An active reduced clause uses the present participle '-ing', not a past form.",
          },
          {
            wrong: 'The documents sending yesterday arrived today.',
            right: 'The documents sent yesterday arrived today.',
            why: "A passive meaning ('that were sent') requires the past participle, not -ing.",
          },
          {
            wrong: 'Walking down the street, a dog bit me.',
            right: 'Walking down the street, I was bitten by a dog.',
            why: "The subject of the participle must match the main clause; otherwise the participle 'dangles' illogically.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-rc-1',
            prompt: "Reduce: 'The girl who is playing the piano is my sister.'",
            options: [
              'The girl played the piano is my sister.',
              'The girl playing the piano is my sister.',
              'The girl play the piano is my sister.',
            ],
            answer: 1,
            explain: "An active relative clause reduces to the present participle 'playing'.",
          },
          {
            kind: 'mcq',
            id: 'b2-rc-2',
            prompt: 'The bridge ___ in 1850 still stands today.',
            options: ['building', 'builds', 'built', 'was built'],
            answer: 2,
            explain: "A passive meaning ('that was built') reduces to the past participle.",
          },
          {
            kind: 'mcq',
            id: 'b2-rc-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Having eaten breakfast, we set off.',
              'Having ate breakfast, we set off.',
              'Having eat breakfast, we set off.',
              'Have eaten breakfast, we set off.',
            ],
            answer: 0,
            explain: "The perfect participle uses 'having + past participle' ('eaten', not 'ate').",
          },
          {
            kind: 'order',
            id: 'b2-rc-4',
            tokens: ['not', 'feeling', 'well', 'she', 'stayed', 'home'],
            answer: 'Not feeling well, she stayed home.',
            explain:
              'A present participle clause can express a reason; the negative goes before it.',
          },
          {
            kind: 'mcq',
            id: 'b2-rc-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'The students taking the exam must arrive earlier.',
              'The student taking the exam must arrive early.',
              'The students taking the exam must arrive early.',
              'The students taking the exams must arrive early.',
            ],
            answer: 2,
            audio: 'The students taking the exam must arrive early.',
            explain: "Active reduced relative clause: 'who are taking' becomes 'taking'.",
          },
        ],
      },
      {
        id: 'b2-causatives-and-sense-verbs',
        level: 'B2',
        title: 'Make, Let, Have, Get & Sense Verbs',
        summary:
          'These verbs control whether the following verb takes a to-infinitive, a bare infinitive or an -ing form. Make and let take a bare infinitive, get takes a to-infinitive, have takes a bare infinitive, and sense verbs like see and hear take a bare infinitive for the whole action or -ing for an action in progress.',
        sections: [
          {
            heading: 'make, let, have, get + object',
            body: "**Make + object + bare infinitive** = force ('They made me wait'). **Let + object + bare infinitive** = allow ('She let me go'). **Have + object + bare infinitive** = arrange/instruct ('I'll have him call you'). **Get + object + to-infinitive** = persuade ('I got him to help'). Note that 'make' takes 'to' in the passive: 'I was made to wait.'",
            examples: [
              {
                en: 'My parents let me stay out late.',
              },
              {
                en: 'I finally got my brother to apologise.',
              },
            ],
          },
          {
            heading: 'Sense verbs: see, hear, watch, feel',
            body: "After **see, hear, watch, feel, notice + object**, use the **bare infinitive** for a complete action you witnessed from start to finish, and the **-ing form** for an action in progress that you saw part of. 'I saw him cross the road' (whole action) vs 'I saw him crossing the road' (in the middle of it).",
            examples: [
              {
                en: 'I heard someone shout my name.',
              },
              {
                en: 'We watched the sun setting over the sea.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Which form follows?',
            columns: ['Verb', 'Pattern', 'Example'],
            rows: [
              ['make', '+ object + bare inf.', 'made me leave'],
              ['let', '+ object + bare inf.', 'let me go'],
              ['have', '+ object + bare inf.', 'had her wait'],
              ['get', '+ object + to-inf.', 'got him to sign'],
              ['see/hear (whole)', '+ object + bare inf.', 'saw it fall'],
              ['see/hear (in progress)', '+ object + -ing', 'saw it falling'],
            ],
          },
        ],
        examples: [
          {
            en: 'The film made me cry.',
          },
          {
            en: "Don't let the children play near the road.",
          },
          {
            en: "I'll get someone to fix the printer.",
          },
          {
            en: 'She had her assistant book the flights.',
          },
          {
            en: 'I felt the floor shake during the earthquake.',
          },
          {
            en: 'We noticed him watching us.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She made me to clean the room.',
            right: 'She made me clean the room.',
            why: "'Make + object' is followed by the bare infinitive (no 'to') in the active voice.",
          },
          {
            wrong: 'I got him clean the car.',
            right: 'I got him to clean the car.',
            why: "Unlike make/let/have, 'get + object' takes the to-infinitive.",
          },
          {
            wrong: 'I heard him to sing.',
            right: 'I heard him sing. / I heard him singing.',
            why: 'Sense verbs take the bare infinitive or -ing, never the to-infinitive.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-cs-1',
            prompt: 'Choose the correct sentence.',
            options: [
              'My boss made me to work late.',
              'My boss made me work late.',
              'My boss made me working late.',
            ],
            answer: 1,
            explain: "'Make + object' takes the bare infinitive in the active voice.",
          },
          {
            kind: 'mcq',
            id: 'b2-cs-2',
            prompt: "I couldn't get the engine ___ in the cold.",
            options: ['start', 'to start', 'started', 'starting'],
            answer: 1,
            explain: "'Get + object' is followed by the to-infinitive.",
          },
          {
            kind: 'mcq',
            id: 'b2-cs-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'They let me to use their car.',
              'They let me using their car.',
              'They let me use their car.',
              'They let me used their car.',
            ],
            answer: 2,
            explain: "'Let + object' takes the bare infinitive, with no 'to'.",
          },
          {
            kind: 'order',
            id: 'b2-cs-4',
            tokens: ['we', 'watched', 'the', 'children', 'playing', 'in', 'the', 'park'],
            answer: 'We watched the children playing in the park.',
            explain: 'The -ing form shows an action in progress that we observed.',
          },
          {
            kind: 'mcq',
            id: 'b2-cs-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'I finally got my sister to lend me her bikes.',
              'I finally got my sister to lend me his bike.',
              'I finally got my brother to lend me her bike.',
              'I finally got my sister to lend me her bike.',
            ],
            answer: 3,
            audio: 'I finally got my sister to lend me her bike.',
            explain: "'Get + object + to-infinitive' means to persuade someone to do something.",
          },
        ],
      },
      {
        id: 'b2-emphasis-and-cleft-sentences',
        level: 'B2',
        title: 'Emphasis: do/did & Cleft Sentences',
        summary:
          "English adds emphasis without changing word order by using auxiliary 'do/does/did' before the main verb, or by restructuring a sentence into a cleft with 'It was... that...' or 'What... is...'. These structures highlight exactly the part of the message you want to stress.",
        sections: [
          {
            heading: 'Emphatic do/does/did',
            body: "In affirmative sentences you can add **do/does/did** before the base verb to insist on something, often to contradict or reassure. 'I do like it!' 'She does care.' 'We did warn you.' The stress falls on the auxiliary, and the main verb stays in its base form even after 'did'.",
            examples: [
              {
                en: 'I do understand your point.',
              },
              {
                en: 'He did apologise, eventually.',
              },
            ],
          },
          {
            heading: 'Cleft sentences',
            body: "**Cleft sentences** split one idea into two clauses to focus on a particular element. With **It-clefts** you highlight a noun, time or place: 'It was John who broke it' (not someone else). With **What-clefts** you highlight an action or thing: 'What I need is a holiday.' These are common in both speech and writing to direct attention.",
            examples: [
              {
                en: 'It was in Paris that we first met.',
              },
              {
                en: 'What surprised me was his honesty.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Ways to emphasise',
            columns: ['Structure', 'Neutral', 'Emphatic'],
            rows: [
              ['do/did', 'I told you.', 'I did tell you.'],
              ['It-cleft', 'Maria called.', 'It was Maria who called.'],
              ['What-cleft', 'I want peace.', 'What I want is peace.'],
            ],
          },
        ],
        examples: [
          {
            en: "I did lock the door, I'm sure.",
          },
          {
            en: 'She does work hard, you know.',
          },
          {
            en: 'It was the noise that woke me up.',
          },
          {
            en: 'It is teamwork that makes the difference.',
          },
          {
            en: 'What I really enjoy is hiking.',
          },
          {
            en: 'What we need now is a plan.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I did told you about it.',
            right: 'I did tell you about it.',
            why: "After emphatic 'did', the main verb stays in its base form.",
          },
          {
            wrong: 'It was John who he broke the window.',
            right: 'It was John who broke the window.',
            why: 'In an it-cleft, do not repeat the subject with an extra pronoun after the relative.',
          },
          {
            wrong: 'What I need is to relaxing.',
            right: 'What I need is to relax.',
            why: "After 'What... is', use a noun, a to-infinitive or a base verb, but keep the structure consistent.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-em-1',
            prompt: "Add emphasis: 'I locked the door.'",
            options: ['I did locked the door.', 'I did lock the door.', 'I do locked the door.'],
            answer: 1,
            explain: "Emphatic 'did' is followed by the base form 'lock'.",
          },
          {
            kind: 'mcq',
            id: 'b2-em-2',
            prompt: 'It was her smile ___ I remembered most.',
            options: ['what', 'who', 'that', 'whose'],
            answer: 2,
            explain:
              "An it-cleft uses 'that' (or sometimes 'which') to introduce the second clause.",
          },
          {
            kind: 'mcq',
            id: 'b2-em-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'What I want is to travelling around Asia.',
              'What I want is travel around Asia.',
              'What I want is to travel around Asia.',
              'What I wants is to travel around Asia.',
            ],
            answer: 2,
            explain: "A what-cleft here needs a to-infinitive: 'to travel', not 'to travelling'.",
          },
          {
            kind: 'order',
            id: 'b2-em-4',
            tokens: ['it', 'was', 'yesterday', 'that', 'she', 'arrived'],
            answer: 'It was yesterday that she arrived.',
            explain: "The it-cleft highlights the time element 'yesterday'.",
          },
          {
            kind: 'mcq',
            id: 'b2-em-6',
            prompt: 'Which sentence did you hear?',
            options: [
              "He does seem to know what he's talking about.",
              'He did seem to know what he is talking about.',
              'He does seem to know what he is talking about.',
              'He does seem to know what she is talking about.',
            ],
            answer: 2,
            audio: 'He does seem to know what he is talking about.',
            explain: "Emphatic 'does' with the base verb 'seem' adds insistence.",
          },
        ],
      },
      {
        id: 'b2-comparatives-and-quantifiers',
        level: 'B2',
        title: 'Comparatives, Modifiers & Quantifiers',
        summary:
          "B2 comparison includes parallel structures like 'the more... the more...', modifiers that soften or strengthen comparatives (a bit, far, much, slightly), and the precise difference between little/few (almost none, negative) and a little/a few (some, positive).",
        sections: [
          {
            heading: 'Parallel comparatives and modifiers',
            body: "Use **the + comparative... the + comparative** to show that two things change together: 'The more you practise, the better you get.' Modify comparatives to show degree: **much/far/a lot** + comparative = a big difference ('far cheaper'); **a bit/a little/slightly** + comparative = a small difference ('slightly bigger'). With repetition, 'bigger and bigger' shows continuous change.",
            examples: [
              {
                en: 'The harder I try, the worse it gets.',
              },
              {
                en: 'This phone is far more expensive than that one.',
              },
            ],
          },
          {
            heading: 'little/few vs a little/a few',
            body: "**Few** (countable) and **little** (uncountable) have a **negative** sense, meaning 'almost none': 'I have little time' (not enough). **A few** and **a little** have a **positive** sense, meaning 'some': 'I have a little time' (enough). Use **few/a few** with plural countable nouns and **little/a little** with uncountable nouns.",
            examples: [
              {
                en: 'Few people came, so the room felt empty.',
              },
              {
                en: 'A few friends helped me move, luckily.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Quantifiers: countable vs uncountable',
            columns: ['Meaning', 'Countable', 'Uncountable'],
            rows: [
              ['almost none (negative)', 'few', 'little'],
              ['some (positive)', 'a few', 'a little'],
              ['example', 'few/a few books', 'little/a little water'],
            ],
          },
        ],
        examples: [
          {
            en: "The sooner we leave, the earlier we'll arrive.",
          },
          {
            en: "It's getting colder and colder.",
          },
          {
            en: 'She is much taller than her brother.',
          },
          {
            en: 'We have very little money left.',
          },
          {
            en: 'There are only a few seats available.',
          },
          {
            en: 'Could I have a little more sugar, please?',
          },
        ],
        pitfalls: [
          {
            wrong: 'The more it gets late, the more I worry.',
            right: 'The later it gets, the more I worry.',
            why: "In 'the + comparative' structures, the comparative adjective/adverb goes directly after 'the'.",
          },
          {
            wrong: 'I have a few money for the trip.',
            right: 'I have a little money for the trip.',
            why: "'Money' is uncountable, so it takes 'little/a little', not 'few/a few'.",
          },
          {
            wrong: 'He is more taller than me.',
            right: 'He is much taller than me.',
            why: "'Taller' is already comparative; do not add 'more'. Use modifiers like 'much' instead.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-cq-1',
            prompt: "Complete: '___ you eat, the more weight you gain.'",
            options: ['The most', 'The more', 'More'],
            answer: 1,
            explain: "Parallel comparatives use 'the + comparative... the + comparative'.",
          },
          {
            kind: 'mcq',
            id: 'b2-cq-2',
            prompt: 'Hurry up! We have very ___ time left.',
            options: ['few', 'little', 'less', 'small'],
            answer: 1,
            explain: "'Time' is uncountable and the sense is negative, so use 'little'.",
          },
          {
            kind: 'mcq',
            id: 'b2-cq-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Only few of my friends came, but luckily they did.',
              'A few of my friends came, but luckily they did.',
              'A little of my friends came, but luckily they did.',
              'Few of my friends came, but luckily they did.',
            ],
            answer: 1,
            explain: "The positive sense ('some came, luckily') requires 'a few', not 'few'.",
          },
          {
            kind: 'order',
            id: 'b2-cq-4',
            tokens: ['this', 'car', 'is', 'far', 'more', 'reliable', 'than', 'mine'],
            answer: 'This car is far more reliable than mine.',
            explain: "'Far' is a strong modifier of the comparative 'more reliable'.",
          },
          {
            kind: 'mcq',
            id: 'b2-cq-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'There were only a few people at the meetings.',
              'There was only a few people at the meeting.',
              'There were only a few people at the meeting.',
              'There were only a few people in the meeting.',
            ],
            answer: 2,
            audio: 'There were only a few people at the meeting.',
            explain: "'A few' with a plural countable noun expresses a small but positive number.",
          },
        ],
      },
      {
        id: 'b2-subjunctive-and-discourse-markers',
        level: 'B2',
        title: 'Subjunctive & Formal Discourse Markers',
        summary:
          "After verbs of suggestion and demand like suggest, recommend, insist and demand, formal English uses the base form of the verb (the subjunctive), as in 'I suggest that he be informed'. Formal discourse markers such as however, nevertheless, therefore and furthermore organise ideas and signal logical relationships in writing.",
        sections: [
          {
            heading: 'The subjunctive after suggest/recommend',
            body: "After verbs and adjectives expressing demand, advice or importance (**suggest, recommend, insist, demand, request; it is essential/important that**), formal English uses the **base form** of the verb for every subject, with no -s and no 'to'. 'The doctor recommends that she rest.' 'It is vital that he be present.' In less formal English, 'should' is often added: 'recommends that she should rest.'",
            examples: [
              {
                en: 'I suggest that he apply for the job.',
              },
              {
                en: 'They demanded that the rule be changed.',
              },
            ],
          },
          {
            heading: 'Formal discourse markers',
            body: "Discourse markers link ideas and guide the reader. **However/nevertheless** = contrast. **Therefore/consequently/thus** = result. **Moreover/furthermore/in addition** = adding information. **Nonetheless** = despite that. They usually start a sentence and are followed by a comma. 'The plan is costly. Nevertheless, it is necessary.'",
            examples: [
              {
                en: 'The results were poor. Therefore, we changed our approach.',
              },
              {
                en: 'It was raining. However, the match continued.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Discourse markers by function',
            columns: ['Function', 'Markers'],
            rows: [
              ['Contrast', 'however, nevertheless, nonetheless'],
              ['Result', 'therefore, consequently, thus'],
              ['Adding', 'moreover, furthermore, in addition'],
              ['Example/clarify', 'for instance, namely, in other words'],
            ],
          },
        ],
        examples: [
          {
            en: 'The board insists that the report be submitted by Friday.',
          },
          {
            en: 'It is essential that every member sign the form.',
          },
          {
            en: 'Sales fell sharply. Consequently, several stores closed.',
          },
          {
            en: 'The hotel was expensive. Moreover, the service was poor.',
          },
          {
            en: 'She recommended that we book in advance.',
          },
          {
            en: 'The evidence is weak; nonetheless, the case will proceed.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I suggest that he applies for the job.',
            right: 'I suggest that he apply for the job.',
            why: "In the subjunctive after 'suggest', the verb stays in its base form without -s.",
          },
          {
            wrong: 'It is important that she is on time.',
            right: 'It is important that she be on time.',
            why: "After 'it is important/essential that', formal English uses the base form 'be'.",
          },
          {
            wrong: 'However the rain, the match continued.',
            right: 'However, the match continued despite the rain.',
            why: "'However' is a sentence connector, not a preposition; use 'despite/in spite of' before a noun.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-sd-1',
            prompt: 'Choose the formal (subjunctive) option.',
            options: [
              'The judge ordered that he pays a fine.',
              'The judge ordered that he pay a fine.',
              'The judge ordered that he paying a fine.',
            ],
            answer: 1,
            explain: "After 'ordered that', the subjunctive uses the base form 'pay' with no -s.",
          },
          {
            kind: 'mcq',
            id: 'b2-sd-2',
            prompt: 'The results were disappointing. ___, we decided to try again.',
            options: ['However', 'Therefore', 'Nevertheless', 'Meanwhile'],
            answer: 1,
            explain: 'A result marker links the cause and the decision.',
          },
          {
            kind: 'mcq',
            id: 'b2-sd-3',
            prompt: 'Choose the correct sentence.',
            options: [
              'It is essential that everyone arrives on time.',
              'It is essential that everyone arrive on time.',
              'It is essential that everyone arriving on time.',
              'It is essential that everyone to arrive on time.',
            ],
            answer: 1,
            explain: "The formal subjunctive uses the base form 'arrive' (or adds 'should').",
          },
          {
            kind: 'order',
            id: 'b2-sd-4',
            tokens: ['I', 'recommend', 'that', 'she', 'see', 'a', 'specialist'],
            answer: 'I recommend that she see a specialist.',
            explain: "Subjunctive after 'recommend that': base form 'see', no -s.",
          },
          {
            kind: 'mcq',
            id: 'b2-sd-6',
            prompt: 'Which sentence did you hear?',
            options: [
              'The committee insists that the deadline is respected.',
              'The committee insists that the deadline be respected.',
              'The committee insisted that the deadline be respected.',
              'The committee insists that the deadlines be respected.',
            ],
            answer: 1,
            audio: 'The committee insists that the deadline be respected.',
            explain: "Subjunctive 'be' after 'insists that' in formal English.",
          },
        ],
      },
    ],
  },
  {
    level: 'C1',
    title: 'C1 · Advanced Structures',
    blurb:
      'Master the emphatic, inverted and elliptical structures that make advanced English sound natural and precise.',
    lessons: [
      {
        id: 'c1-cleft-sentences',
        level: 'C1',
        title: 'Cleft Sentences',
        summary:
          'Cleft sentences split one idea into two clauses to **emphasise** a particular element. **It-clefts** (It was John who paid) highlight a noun or phrase, while **wh-clefts** (What I need is time) foreground an action or thing. They are essential for focus, contrast and correcting assumptions.',
        sections: [
          {
            heading: 'It-clefts for focus and contrast',
            body: "An **it-cleft** has the frame **It + be + focus + relative clause**. We move the most important information into the focus slot: *It was her honesty that impressed me*. Use **who/that** for people and **that/which** for things. It-clefts are especially common when **correcting** a false assumption: *It wasn't me who broke it*. The verb *be* agrees with *it* (singular) regardless of the focus, but it can shift tense: *It will be Maria who decides*.",
            examples: [
              {
                en: 'It was in 2010 that the company collapsed.',
              },
              {
                en: "It's the noise that I can't stand, not the work.",
              },
            ],
          },
          {
            heading: 'Wh-clefts (pseudo-clefts)',
            body: 'A **wh-cleft** usually begins with **what** and uses the frame **What + clause + be + focus**: *What surprised me was his calm*. They foreground actions especially well: *What we should do is wait*. You can also start with the focus for end-weight (a **reversed wh-cleft**): *His calm was what surprised me*. Other openers include **All (that)**, **The thing that**, **The reason why**: *All I want is a coffee*; *The reason I called is to apologise*.',
            examples: [
              {
                en: 'What I need right now is a clear plan.',
              },
              {
                en: 'All she did was apologise.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Cleft frames at a glance',
            columns: ['Type', 'Frame', 'Example'],
            rows: [
              ['It-cleft', 'It + be + focus + who/that…', 'It was Ana who called.'],
              ['Wh-cleft', 'What + clause + be + focus', 'What he wants is respect.'],
              ['Reversed wh-cleft', 'Focus + be + what + clause', 'Respect is what he wants.'],
              ['All-cleft', 'All (that) + clause + be + focus', 'All I did was ask.'],
            ],
          },
        ],
        examples: [
          {
            en: 'It was the manager, not the staff, who made the decision.',
          },
          {
            en: 'What bothers me is that nobody warned us.',
          },
          {
            en: "It's only now that I understand what she meant.",
          },
          {
            en: "The reason we're late is that the train was cancelled.",
          },
          {
            en: 'All they need is a little more time.',
          },
          {
            en: "A good night's sleep was what cured him.",
          },
        ],
        pitfalls: [
          {
            wrong: 'The what I need is time.',
            right: 'What I need is time.',
            why: "A **wh-cleft** with *what* takes no article; *what* already means 'the thing that'.",
          },
          {
            wrong: "Is the noise that I can't stand.",
            right: "It's the noise that I can't stand.",
            why: 'English it-clefts need the dummy subject **it**; English does not allow a subjectless verb here.',
          },
          {
            wrong: 'It was me who broke the window who.',
            right: 'It was me who broke the window.',
            why: 'Use a single relative pronoun (**who/that**); do not double it.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-cleft-ex1',
            prompt: 'Choose the correct it-cleft.',
            options: [
              'It was John who paid the bill.',
              'Was John who paid the bill.',
              'It John who paid the bill.',
              'It was John that paid the bill who.',
            ],
            answer: 0,
            explain:
              "An it-cleft needs *It + be + focus + who/that*: 'It was John who paid the bill.'",
          },
          {
            kind: 'mcq',
            id: 'c1-cleft-ex2',
            prompt: '___ I need is a bit of peace and quiet.',
            options: ['That', 'Which', 'What', 'Who'],
            answer: 2,
            explain: "A wh-cleft starts with 'What', meaning 'the thing that'.",
          },
          {
            kind: 'mcq',
            id: 'c1-cleft-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The what surprised me was his honesty.',
              'What surprised me was his honesty.',
              'The thing what surprised me was his honesty.',
              'What surprised me it was his honesty.',
            ],
            answer: 1,
            explain: "Drop 'the': 'what' already includes 'the thing that'.",
          },
          {
            kind: 'order',
            id: 'c1-cleft-ex4',
            tokens: ['It', 'was', 'her', 'support', 'that', 'kept', 'me', 'going'],
            answer: 'It was her support that kept me going.',
            explain: 'It-cleft frame: It + was + focus (her support) + that + clause.',
          },
          {
            kind: 'mcq',
            id: 'c1-cleft-ex6',
            prompt: 'Which sentence emphasises the time, not the person?',
            options: [
              'It was at midnight that they arrived.',
              'It was them who arrived at midnight.',
              'What arrived at midnight was them.',
              'All they did was arrive.',
            ],
            answer: 0,
            explain: 'Placing the time phrase in the focus slot emphasises *when* it happened.',
          },
          {
            kind: 'mcq',
            id: 'c1-cleft-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'What really matters is how you respond to failure.',
              'What really matters is how you respond to failures.',
              'What really matter is how you respond to failure.',
              'What really matters is how you responded to failure.',
            ],
            answer: 0,
            audio: 'What really matters is how you respond to failure.',
            explain: "A wh-cleft foregrounding the action: 'What really matters is...'.",
          },
        ],
      },
      {
        id: 'c1-inversion-negative-adverbials',
        level: 'C1',
        title: 'Inversion After Negative Adverbials',
        summary:
          'When a **negative or restrictive adverbial** is fronted for emphasis (*Never, Not only, Hardly, Little, Only then, No sooner*), the subject and auxiliary **invert** as in a question: *Never have I seen such a mess*. This formal device adds dramatic emphasis in writing and speeches.',
        sections: [
          {
            heading: 'The inversion mechanism',
            body: "After a fronted negative adverbial, use **question word order**: auxiliary + subject + main verb. If there is no auxiliary, add **do/does/did**: *Rarely does he complain*. With perfect or modal verbs, just move the existing auxiliary: *Never had we imagined…*. The negative meaning is what triggers the inversion, not a literal 'no'. Common triggers include **never, rarely, seldom, hardly, scarcely, little, nowhere, at no time, under no circumstances, only later, not until**.",
            examples: [
              {
                en: 'Under no circumstances should you sign this.',
              },
              {
                en: 'Rarely have I felt so welcome.',
              },
            ],
          },
          {
            heading: 'Not only, no sooner and hardly… when',
            body: 'Some adverbials introduce **two-part** structures. **Not only … but also**: *Not only did she win, but she also broke the record*. **No sooner … than** and **Hardly/Scarcely … when** describe one event quickly followed by another, usually with the **past perfect** in the first clause: *No sooner had we sat down than the phone rang*; *Hardly had I closed my eyes when the alarm went off*. **Little** is special: it conveys ignorance — *Little did they know what awaited them*.',
            examples: [
              {
                en: 'Not only is it cheaper, but it also lasts longer.',
              },
              {
                en: 'No sooner had he arrived than he was asked to leave.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Negative adverbial pairings',
            columns: ['Adverbial', 'Pattern', 'Example'],
            rows: [
              [
                'Not only',
                'Not only + aux + S … but also',
                'Not only did he lie, but he also denied it.',
              ],
              [
                'No sooner',
                'No sooner + had + S … than',
                'No sooner had it stopped than it rained again.',
              ],
              ['Hardly / Scarcely', 'Hardly + had + S … when', 'Hardly had we left when it began.'],
              ['Little', 'Little + did + S + know', 'Little did she realise the truth.'],
              ['Only then / Only after', 'Only … + aux + S', 'Only then did I understand.'],
            ],
          },
        ],
        examples: [
          {
            en: 'Never before had the city seen such crowds.',
          },
          {
            en: 'Seldom do we get a chance like this.',
          },
          {
            en: 'Only after the meeting did the truth come out.',
          },
          {
            en: 'At no time did the staff act improperly.',
          },
          {
            en: 'Not until I read the report did I grasp the scale of the problem.',
          },
          {
            en: 'Little did we know that the worst was yet to come.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen such a thing.',
            right: 'Never have I seen such a thing.',
            why: 'After a fronted negative adverbial you must **invert** subject and auxiliary, like a question.',
          },
          {
            wrong: 'Rarely he complains about anything.',
            right: 'Rarely does he complain about anything.',
            why: 'With no existing auxiliary, insert **does/did** to form the inversion.',
          },
          {
            wrong: 'No sooner we had arrived when it started.',
            right: 'No sooner had we arrived than it started.',
            why: '*No sooner* inverts (had we) and pairs with **than**, not *when*.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-inv1-ex1',
            prompt: 'Choose the grammatical sentence.',
            options: [
              'Never have I been so embarrassed.',
              'Never I have been so embarrassed.',
              'Never I was so embarrassed.',
              'Never been I so embarrassed.',
            ],
            answer: 0,
            explain: 'Fronted *Never* triggers inversion: auxiliary *have* before subject *I*.',
          },
          {
            kind: 'mcq',
            id: 'c1-inv1-ex2',
            prompt: 'Rarely ___ she miss a deadline.',
            options: ['did', 'do', 'does', 'is'],
            answer: 2,
            explain:
              "No auxiliary present, so insert 'does' for the inversion (present, third person).",
          },
          {
            kind: 'mcq',
            id: 'c1-inv1-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Not only did he forget my name, but he also ignored me.',
              'Not only he forgot my name, but he also ignored me.',
              'Not only did he forgot my name, but he also ignored me.',
              'Not only he did forget my name, but he also ignored me.',
            ],
            answer: 0,
            explain: "'Not only' fronted needs inversion: 'did he forget'.",
          },
          {
            kind: 'order',
            id: 'c1-inv1-ex4',
            tokens: [
              'No',
              'sooner',
              'had',
              'we',
              'sat',
              'down',
              'than',
              'the',
              'lights',
              'went',
              'out',
            ],
            answer: 'No sooner had we sat down than the lights went out.',
            explain: '*No sooner had + S + past participle … than + clause*.',
          },
          {
            kind: 'mcq',
            id: 'c1-inv1-ex6',
            prompt: 'Little ___ they know what was about to happen.',
            options: ['do', 'does', 'had', 'did'],
            answer: 3,
            explain: "'Little did + S + know' is the fixed inverted expression for unawareness.",
          },
          {
            kind: 'mcq',
            id: 'c1-inv1-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Only then she realised how much she had missed home.',
              'Only then did she realise how much she had missed home.',
              'Only then did she realise how much she has missed home.',
              'Only then did she realise how much she had missed her home.',
            ],
            answer: 1,
            audio: 'Only then did she realise how much she had missed home.',
            explain: "'Only then' fronted forces inversion: 'did she realise'.",
          },
        ],
      },
      {
        id: 'c1-inversion-conditionals',
        level: 'C1',
        title: 'Inversion in Conditionals',
        summary:
          'Formal English can **drop *if*** and invert the subject and auxiliary instead: *Had I known* (= if I had known), *Were I to* (= if I were to), *Should you* (= if you should). This raises the register and is common in writing, business and polite offers.',
        sections: [
          {
            heading: 'The three inversion patterns',
            body: "Three conditional types allow **if-deletion with inversion**. Third conditional: *If I had known* → **Had I known**. Second conditional with *were to*: *If we were to fail* → **Were we to fail**. First/zero with *should* for a remote possibility: *If you should need help* → **Should you need help**. Only **had, were and should** can do this — never *did, was* or modals like *would*. In the negative, do **not** contract: write *Had it not been for…*, never *Hadn't it been for*.",
            examples: [
              {
                en: "Had I known you were coming, I'd have baked a cake.",
              },
              {
                en: 'Should you have any questions, please contact us.',
              },
            ],
          },
          {
            heading: "Register and 'Had it not been for'",
            body: "These structures are **more formal** than *if*-clauses and add elegance to written English. A very common fixed pattern is **Had it not been for + noun** (= if it hadn't been for): *Had it not been for your help, we'd have failed*. **Were it not for** works in the present/unreal: *Were it not for the rain, we'd be outside*. **Should** softens requests in correspondence: *Should you wish to cancel, simply reply to this email*. Note that *Were I to…* often projects a hypothetical future: *Were I to resign, who would replace me?*",
            examples: [
              {
                en: "Were it not for the traffic, we'd already be there.",
              },
              {
                en: 'Had it not been for the alarm, the fire would have spread.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'If-clause vs inverted form',
            columns: ['With if', 'Inverted', 'Use'],
            rows: [
              ['If I had known', 'Had I known', 'Past/3rd conditional'],
              ['If we were to lose', 'Were we to lose', 'Hypothetical future'],
              ['If you should need', 'Should you need', 'Remote possibility / polite'],
              ['If it had not been for', 'Had it not been for', 'Decisive past factor'],
              ['If it were not for', 'Were it not for', 'Decisive present factor'],
            ],
          },
        ],
        examples: [
          {
            en: "Were I to accept the offer, I'd have to relocate.",
          },
          {
            en: 'Should anything go wrong, call this number.',
          },
          {
            en: 'Had she trained harder, she might have won.',
          },
          {
            en: 'Were it not for his patience, the class would be chaos.',
          },
          {
            en: "Had it not been for the delay, we'd have caught the flight.",
          },
          {
            en: 'Should you change your mind, the door is always open.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If had I known, I would have come.',
            right: 'Had I known, I would have come.',
            why: 'When you invert, you **delete *if***; you cannot keep both.',
          },
          {
            wrong: "Hadn't it been for you, I'd have failed.",
            right: "Had it not been for you, I'd have failed.",
            why: 'In inverted conditionals the negative is **not contracted**; place *not* after the subject.',
          },
          {
            wrong: 'Would you need anything, just ask.',
            right: 'Should you need anything, just ask.',
            why: 'Only **had, were and should** invert; *would* cannot front a conditional.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-inv2-ex1',
            prompt: "Rewrite 'If I had seen it, I'd have told you' with inversion.",
            options: [
              "Had I seen it, I'd have told you.",
              "If had I seen it, I'd have told you.",
              "Did I see it, I'd have told you.",
              "Have I seen it, I'd have told you.",
            ],
            answer: 0,
            explain: 'Third conditional inverts with *Had + subject*, deleting *if*.',
          },
          {
            kind: 'mcq',
            id: 'c1-inv2-ex2',
            prompt: '___ you need any help, please let me know.',
            options: ['Would', 'Should', 'Could', 'Shall'],
            answer: 1,
            explain: "'Should you need...' = if you should need (polite, remote possibility).",
          },
          {
            kind: 'mcq',
            id: 'c1-inv2-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "Hadn't it been for the map, we'd have got lost.",
              "Have it not been for the map, we'd have got lost.",
              "Had it not been for the map, we'd have got lost.",
              "Had it not been for the map, we'd have get lost.",
            ],
            answer: 2,
            explain:
              "Do not contract the negative in inverted conditionals: 'Had it not been for'.",
          },
          {
            kind: 'order',
            id: 'c1-inv2-ex4',
            tokens: [
              'Were',
              'I',
              'to',
              'win',
              'the',
              'lottery',
              'I',
              'would',
              'travel',
              'the',
              'world',
            ],
            answer: 'Were I to win the lottery, I would travel the world.',
            explain:
              '*Were + subject + to + infinitive* is the inverted hypothetical-future conditional.',
          },
          {
            kind: 'mcq',
            id: 'c1-inv2-ex6',
            prompt: '___ I known about the meeting, I would have attended.',
            options: ['Have', 'Had', 'Has', 'Would'],
            answer: 1,
            explain: "Inverted third conditional: 'Had I known...'.",
          },
          {
            kind: 'mcq',
            id: 'c1-inv2-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Should you require further assistance, do not hesitate to contact us.',
              'Should you require further assistance, do not hesitate to contact me.',
              'Should you require any further assistance, do not hesitate to contact us.',
              'Should you require further assistance, do not hesitate to call us.',
            ],
            answer: 0,
            audio: 'Should you require further assistance, do not hesitate to contact us.',
            explain: "Formal 'Should you require...' replaces 'if you should require...'.",
          },
        ],
      },
      {
        id: 'c1-mixed-reduced-conditionals',
        level: 'C1',
        title: 'Mixed and Reduced Conditionals',
        summary:
          "**Mixed conditionals** combine times across the two clauses — a past condition with a present result (*If I had studied, I'd be a doctor now*), or a present condition with a past result. **Reduced conditionals** compress the clause using *if so, if not, if necessary, unless* and other shortcuts.",
        sections: [
          {
            heading: 'Mixed conditionals: crossing time zones',
            body: "A **mixed conditional** uses one clause from one time frame and the result from another. The most common is **past condition → present result**: *If I had taken that job, I would be living in Tokyo now* (the past affects the present). The reverse, **present condition → past result**, links a permanent truth to a past outcome: *If I were more organised, I wouldn't have missed the deadline*. Choose tenses by **logic**, not by a fixed formula: ask 'when is the condition?' and 'when is the result?' separately.",
            examples: [
              {
                en: "If she had married him, she'd be unhappy today.",
              },
              {
                en: "If he weren't so stubborn, he would have apologised by now.",
              },
            ],
          },
          {
            heading: 'Reduced and elliptical conditionals',
            body: "We often **shorten** conditionals to avoid repetition. **If so / If not** stand in for a whole clause: *Are you free? If so, let's meet*. **If necessary, if possible, if anything, if in doubt** are fixed reduced phrases: *Call me if necessary*. **Unless** = if not, but only for the single decisive exception: *I'll go unless it rains*. **Even if** concedes; **provided/providing (that)** and **as long as** add a strict condition: *You can stay as long as you're quiet*. **Otherwise** packs an unstated condition: *Hurry — otherwise we'll miss it*.",
            examples: [
              {
                en: "We may need to delay — if so, I'll email everyone.",
              },
              {
                en: "I'll lend you the car as long as you fill it up.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Mixed conditional combinations',
            columns: ['If-clause time', 'Result time', 'Example'],
            rows: [
              [
                'Past (had + p.p.)',
                'Present (would + base)',
                "If I'd saved more, I'd be rich now.",
              ],
              [
                'Present (past simple)',
                'Past (would have + p.p.)',
                "If I knew French, I'd have helped.",
              ],
              [
                'Past (had + p.p.)',
                'Future (would + base)',
                "If you'd left earlier, you'd be there tomorrow.",
              ],
            ],
          },
        ],
        examples: [
          {
            en: "If we hadn't missed the train, we'd be home by now.",
          },
          {
            en: "If I were taller, I'd have become a model.",
          },
          {
            en: "Take an umbrella; otherwise you'll get soaked.",
          },
          {
            en: "I'll sign the contract, provided the terms don't change.",
          },
          {
            en: "Do you want the long version? If not, I'll be brief.",
          },
          {
            en: "Unless you tell me otherwise, I'll book for eight.",
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have studied, I would be a doctor now.',
            right: 'If I had studied, I would be a doctor now.',
            why: 'The if-clause of a (mixed) conditional uses **had + past participle**, never *would have*.',
          },
          {
            wrong: "Unless you don't hurry, we'll be late.",
            right: "Unless you hurry, we'll be late.",
            why: "**Unless** already means 'if not', so a second negative is wrong.",
          },
          {
            wrong: "If I were more careful, I wouldn't make that mistake yesterday.",
            right: "If I were more careful, I wouldn't have made that mistake yesterday.",
            why: 'A past result needs **would have + past participle**, even with a present condition.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-mix-ex1',
            prompt: "Complete: 'If I had accepted the offer, I ___ in London now.'",
            options: ['would be living', 'would have lived', 'will live', 'had lived'],
            answer: 0,
            explain: 'Past condition, present result = *would be living* (mixed conditional).',
          },
          {
            kind: 'mcq',
            id: 'c1-mix-ex2',
            prompt: "If she weren't so shy, she ___ us about the problem yesterday.",
            options: ['would tell', 'will have told', 'would have told', 'had told'],
            answer: 2,
            explain: "Present condition, past result needs 'would have + past participle'.",
          },
          {
            kind: 'mcq',
            id: 'c1-mix-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'If I would have known, I would be there now.',
              'If I had have known, I would be there now.',
              'If I had known, I would be there now.',
              'If I had known, I will be there now.',
            ],
            answer: 2,
            explain: "The if-clause takes 'had known', not 'would have known'.",
          },
          {
            kind: 'order',
            id: 'c1-mix-ex4',
            tokens: ['If', 'we', "hadn't", 'argued', 'we', 'would', 'still', 'be', 'friends'],
            answer: "If we hadn't argued, we would still be friends.",
            explain: 'Past cause, present result: a classic mixed conditional.',
          },
          {
            kind: 'mcq',
            id: 'c1-mix-ex6',
            prompt: "Are you coming tonight? If ___, I'll save you a seat.",
            options: ['so', 'yes', 'then', 'that'],
            answer: 0,
            explain: "'If so' substitutes for the whole positive clause.",
          },
          {
            kind: 'mcq',
            id: 'c1-mix-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "If he had listened to my advice, he won't be in this mess now.",
              "If he had listened to my advice, he wouldn't have been in this mess now.",
              "If he had listened to my advice, he wouldn't be in this mess now.",
              "If he had listened to my advice, he wouldn't be in this mess anymore.",
            ],
            answer: 2,
            audio: "If he had listened to my advice, he wouldn't be in this mess now.",
            explain:
              "Mixed conditional: past condition ('had listened') with present result ('wouldn't be').",
          },
        ],
      },
      {
        id: 'c1-subjunctive',
        level: 'C1',
        title: 'The Subjunctive',
        summary:
          'English keeps a small but important **subjunctive**. The **mandative subjunctive** uses the bare base verb after verbs and adjectives of demand and suggestion (*I insist that he be present*). The **were-subjunctive** appears in unreal clauses (*if I were you*), and there are many **fixed expressions** (*so be it, God save the Queen*).',
        sections: [
          {
            heading: 'The mandative subjunctive',
            body: 'After verbs of **demanding, suggesting, requesting and recommending** (*demand, insist, suggest, recommend, require, propose, ask, request*), the *that*-clause uses the **base form** of the verb for all persons: *They demand that he resign* (not *resigns*). It does not change for negatives or tense: *We recommend that she not travel*; *I suggested that he be informed*. The same applies after adjectives like **essential, vital, important, crucial, necessary, advisable**: *It is essential that everyone arrive on time*. In British English *should + base* is a common alternative: *I insist that he should be present*.',
            examples: [
              {
                en: 'The board recommends that the policy be reviewed.',
              },
              {
                en: 'It is vital that he understand the risks.',
              },
            ],
          },
          {
            heading: 'Were-subjunctive and fixed expressions',
            body: 'In hypothetical and unreal clauses, formal English uses **were** for all persons: *If I were you*; *She acts as if she were the boss*; *I wish it were Friday*; *Suppose he were to refuse*. Using *was* here is acceptable in speech but **were** is preferred in careful writing. The subjunctive also survives in **frozen expressions**: *Be that as it may, So be it, Come what may, God bless you, Heaven forbid, Suffice it to say, Far be it from me, Long live the king*. These are learned as wholes, not built from rules.',
            examples: [
              {
                en: 'If I were in charge, things would be different.',
              },
              {
                en: 'Be that as it may, we must move forward.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Triggers of the mandative subjunctive',
            columns: ['Category', 'Examples', 'Pattern'],
            rows: [
              [
                'Verbs',
                'demand, insist, suggest, recommend, require, propose',
                'verb + that + S + base',
              ],
              [
                'Adjectives',
                'essential, vital, crucial, important, advisable',
                'It is + adj + that + S + base',
              ],
              [
                'Nouns',
                'demand, requirement, suggestion, recommendation',
                'noun + that + S + base',
              ],
              ['Negative', 'not + base (no auxiliary)', '…that he not attend'],
            ],
          },
        ],
        examples: [
          {
            en: 'I insist that she be told immediately.',
          },
          {
            en: 'It is essential that every member sign the form.',
          },
          {
            en: 'The judge ordered that the defendant remain in custody.',
          },
          {
            en: 'We request that you not smoke on the premises.',
          },
          {
            en: "If I were you, I'd think twice.",
          },
          {
            en: "Come what may, I'll support you.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I insist that he comes to the meeting.',
            right: 'I insist that he come to the meeting.',
            why: 'The mandative subjunctive uses the **base form** (*come*), with no third-person -s.',
          },
          {
            wrong: 'It is essential that everyone is present.',
            right: 'It is essential that everyone be present.',
            why: 'After *essential that…*, use the base form **be**, not the conjugated *is*.',
          },
          {
            wrong: "She recommended that he doesn't go.",
            right: 'She recommended that he not go.',
            why: 'The negative subjunctive is **not + base verb**, without *do/does*.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-subj-ex1',
            prompt: 'Choose the correct sentence.',
            options: [
              'The doctor recommends that he rest for a week.',
              'The doctor recommends that he rests for a week.',
              'The doctor recommends that he resting for a week.',
              'The doctor recommends that he is resting for a week.',
            ],
            answer: 0,
            explain: 'Mandative subjunctive: base form *rest*, no -s.',
          },
          {
            kind: 'mcq',
            id: 'c1-subj-ex2',
            prompt: 'It is vital that every passenger ___ a seatbelt.',
            options: ['wears', 'wear', 'wore', 'wearing'],
            answer: 1,
            explain: "After 'vital that', use the base form 'wear'.",
          },
          {
            kind: 'mcq',
            id: 'c1-subj-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "I suggest that she doesn't tell anyone.",
              "I suggest that she don't tell anyone.",
              'I suggest that she not tell anyone.',
              'I suggest that she not tells anyone.',
            ],
            answer: 2,
            explain: "Negative subjunctive: 'not tell', without 'does'.",
          },
          {
            kind: 'order',
            id: 'c1-subj-ex4',
            tokens: ['The', 'committee', 'demanded', 'that', 'the', 'report', 'be', 'published'],
            answer: 'The committee demanded that the report be published.',
            explain: 'Passive subjunctive: *be + past participle* after *demanded that*.',
          },
          {
            kind: 'mcq',
            id: 'c1-subj-ex6',
            prompt: 'Be that as it ___, we still need a decision.',
            options: ['might', 'is', 'may', 'was'],
            answer: 2,
            explain: "Fixed subjunctive expression: 'Be that as it may'.",
          },
          {
            kind: 'mcq',
            id: 'c1-subj-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The regulations require that each application is submitted in writing.',
              'The regulation requires that each application be submitted in writing.',
              'The regulations require that each application be submitted in writing.',
              'The regulations require that every application be submitted in writing.',
            ],
            answer: 2,
            audio: 'The regulations require that each application be submitted in writing.',
            explain: 'Mandative subjunctive in the passive: be submitted.',
          },
        ],
      },
      {
        id: 'c1-advanced-past-modals',
        level: 'C1',
        title: 'Advanced Past Modals',
        summary:
          "**Modal + have + past participle** lets us look back and **speculate** (*must have, might have, can't have*), **criticise** (*should have, ought to have*) and express **regret** (*could have, needn't have*). Mastering the nuances distinguishes confident deduction from gentle reproach.",
        sections: [
          {
            heading: 'Speculation and deduction about the past',
            body: "To deduce what happened, use **must have** (certain it's true: *She must have left already*), **can't have / couldn't have** (certain it's false: *He can't have known*), and **might/may/could have** (possible: *They might have missed the bus*). Note a key contrast: the opposite of *must have* is **can't have**, not *mustn't have*. **Could have** also expresses unrealised possibility — *That could have gone much worse* — so context decides whether it means deduction or a near-miss.",
            examples: [
              {
                en: 'The lights are off — they must have gone to bed.',
              },
              {
                en: "You can't have finished already!",
              },
            ],
          },
          {
            heading: 'Criticism and regret',
            body: "**Should have / ought to have + past participle** criticise a past action or express regret: *You should have told me* (you didn't, and that was wrong). The negative *shouldn't have* marks a mistaken action: *I shouldn't have eaten so much*. **Could have** voices a missed opportunity or reproach: *You could have warned us!*. **Needn't have + past participle** means an action was done but was **unnecessary** (*You needn't have paid — it was free*), which contrasts sharply with **didn't need to**, which often implies the action was *not* done (*I didn't need to pay, so I didn't*).",
            examples: [
              {
                en: "I should have booked earlier; now it's full.",
              },
              {
                en: "You needn't have cooked — we already ate.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past modal meanings',
            columns: ['Form', 'Meaning', 'Example'],
            rows: [
              ['must have + p.p.', 'Certain (positive deduction)', 'She must have forgotten.'],
              ["can't / couldn't have", 'Certain (negative deduction)', "He can't have lied."],
              ['might/may/could have', 'Possibility', 'They may have left.'],
              ['should/ought to have', 'Criticism / regret', 'You should have called.'],
              ["needn't have + p.p.", 'Done but unnecessary', "You needn't have waited."],
              ["didn't need to", 'Often: not done (unnecessary)', "I didn't need to wait."],
            ],
          },
        ],
        examples: [
          {
            en: 'The road is wet; it must have rained overnight.',
          },
          {
            en: "She couldn't have seen us — she was facing the other way.",
          },
          {
            en: "We might have won if we'd played better.",
          },
          {
            en: 'You ought to have asked permission first.',
          },
          {
            en: "I needn't have brought my umbrella after all.",
          },
          {
            en: 'He could have been seriously hurt.',
          },
        ],
        pitfalls: [
          {
            wrong: "He mustn't have heard me.",
            right: "He can't have heard me.",
            why: "For negative deduction use **can't/couldn't have**; *mustn't have* is not used for deduction.",
          },
          {
            wrong: 'You should have to tell me.',
            right: 'You should have told me.',
            why: 'The structure is **should have + past participle**, not *should have to*.',
          },
          {
            wrong: 'I should of called you.',
            right: 'I should have called you.',
            why: "*Of* is a mishearing of the contraction *'ve*; always write **have**.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-mod-ex1',
            prompt: "Best completes: 'The food is untouched. She ___ hungry.'",
            options: [
              "can't have been",
              "mustn't have been",
              "shouldn't have been",
              "needn't have been",
            ],
            answer: 0,
            explain: "Negative deduction about the past uses *can't have been*.",
          },
          {
            kind: 'mcq',
            id: 'c1-mod-ex2',
            prompt: "It's freezing in here — someone ___ the window open.",
            options: ['might have left', 'must have left', 'could have left', "can't have left"],
            answer: 1,
            explain: 'Positive deduction: must have left.',
          },
          {
            kind: 'mcq',
            id: 'c1-mod-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'You should of warned me about the traffic.',
              'You should have warned me about the traffic.',
              'You should had warned me about the traffic.',
              'You should have warn me about the traffic.',
            ],
            answer: 1,
            explain: 'Write should have, never should of.',
          },
          {
            kind: 'mcq',
            id: 'c1-mod-ex4',
            prompt: "Which means 'you waited, but it wasn't necessary'?",
            options: [
              "You needn't have waited.",
              "You didn't need to wait.",
              "You shouldn't wait.",
              "You mustn't have waited.",
            ],
            answer: 0,
            explain: "*Needn't have + p.p.* = the action was done but unnecessary.",
          },
          {
            kind: 'order',
            id: 'c1-mod-ex6',
            tokens: ['They', 'might', 'have', 'taken', 'the', 'wrong', 'turning'],
            answer: 'They might have taken the wrong turning.',
            explain: 'Possibility about the past: *might have + past participle*.',
          },
          {
            kind: 'mcq',
            id: 'c1-mod-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "He couldn't have finished the whole report in an hour.",
              "He can't have finished the whole report in a hour.",
              "He can't have finished the whole report in an hour.",
              "He can't have finished the entire report in an hour.",
            ],
            answer: 2,
            audio: "He can't have finished the whole report in an hour.",
            explain: "Negative deduction: can't have finished.",
          },
        ],
      },
      {
        id: 'c1-passive-reporting',
        level: 'C1',
        title: 'The Full Passive Range and Advanced Reporting',
        summary:
          'C1 passives go beyond *be + past participle*: **get-passives**, **passive infinitives and -ing forms**, **causative have/get**, and impersonal **reporting structures** (*It is said that…*, *He is believed to be…*). These let writers stay objective, manage focus and report claims with appropriate distance.',
        sections: [
          {
            heading: 'Extending the passive',
            body: "Beyond the basic passive, learn: **get-passive** for events and changes, often unplanned (*He got fired*; *The window got broken*); **passive infinitive** *(to) be done* (*She expects to be promoted*; *There's nothing to be done*); **passive -ing** *being done* (*I hate being interrupted*; *After being warned, he left*); **modal passives** (*It must be finished today*); and **perfect passives** (*The bridge has been repaired*). The **causative** *have/get something done* reports an action done for you by someone else: *I had my car serviced*; *We're getting the kitchen painted*.",
            examples: [
              {
                en: "I'm having the documents translated this week.",
              },
              {
                en: 'Nobody likes being told what to do.',
              },
            ],
          },
          {
            heading: 'Impersonal reporting structures',
            body: 'To report opinions or rumours impersonally, English uses two patterns. **It + passive reporting verb + that-clause**: *It is said that the company is failing*; *It was reported that talks had collapsed*. **Subject + passive reporting verb + to-infinitive**: *The company is said to be failing*; *He is believed to have left the country*. Common verbs: *say, believe, think, report, know, expect, allege, consider, understand*. Use a **perfect infinitive** (*to have done*) when the reported event is earlier than the reporting: *She is thought to have made a fortune*.',
            examples: [
              {
                en: 'It is believed that no one survived the crash.',
              },
              {
                en: 'The minister is alleged to have accepted bribes.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reporting transformations',
            columns: ['Active claim', 'It-passive', 'Subject + to-infinitive'],
            rows: [
              ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
              [
                'They believe she left.',
                'It is believed that she left.',
                'She is believed to have left.',
              ],
              [
                'Experts expect prices to rise.',
                'It is expected that prices will rise.',
                'Prices are expected to rise.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'The painting is thought to be a forgery.',
          },
          {
            en: 'Their house got burgled while they were away.',
          },
          {
            en: 'All applications must be submitted by Friday.',
          },
          {
            en: 'We had the roof repaired after the storm.',
          },
          {
            en: 'It was reported that the talks had broken down.',
          },
          {
            en: 'He is known to have lived in Paris for years.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He is said that he is very rich.',
            right: 'He is said to be very rich.',
            why: 'With a personal subject, use the **to-infinitive** pattern; the *that*-clause goes only with *It is said that…*.',
          },
          {
            wrong: 'I cut my hair yesterday at the salon.',
            right: 'I had my hair cut yesterday at the salon.',
            why: 'If someone else does it for you, use the **causative** *have something done*.',
          },
          {
            wrong: 'It is believed the company to be failing.',
            right: 'It is believed that the company is failing.',
            why: 'After *It is believed*, use a **that-clause**, not a to-infinitive.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-pass-ex1',
            prompt: "Rewrite 'People say she is a genius' with a personal subject.",
            options: [
              'She is said to be a genius.',
              'She is said that she is a genius.',
              'It is said her to be a genius.',
              'She says to be a genius.',
            ],
            answer: 0,
            explain: 'Personal subject takes the to-infinitive: *She is said to be…*.',
          },
          {
            kind: 'mcq',
            id: 'c1-pass-ex2',
            prompt: "We're ___ the house painted next week.",
            options: ['making', 'keeping', 'having', 'leaving'],
            answer: 2,
            explain: 'Causative have/get something done for work done by others.',
          },
          {
            kind: 'mcq',
            id: 'c1-pass-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'He is believed to have left the country last night.',
              'He is believed to leaving the country last night.',
              'He is believed to had left the country last night.',
              'He is believed leaving the country last night.',
            ],
            answer: 0,
            explain: 'An earlier event needs the perfect infinitive to have left.',
          },
          {
            kind: 'order',
            id: 'c1-pass-ex4',
            tokens: ['It', 'is', 'thought', 'that', 'the', 'virus', 'originated', 'abroad'],
            answer: 'It is thought that the virus originated abroad.',
            explain: 'Impersonal reporting: *It is thought that…*.',
          },
          {
            kind: 'mcq',
            id: 'c1-pass-ex6',
            prompt: 'The bridge ___ repaired before the festival.',
            options: ['must been', 'must being', 'must have', 'must be'],
            answer: 3,
            explain: 'Modal passive: must be + past participle.',
          },
          {
            kind: 'mcq',
            id: 'c1-pass-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The suspect is alleged to have forged several signature.',
              'The suspects are alleged to have forged several signatures.',
              'The suspect was alleged to have forged several signatures.',
              'The suspect is alleged to have forged several signatures.',
            ],
            answer: 3,
            audio: 'The suspect is alleged to have forged several signatures.',
            explain: 'Reporting passive with perfect infinitive: is alleged to have forged.',
          },
        ],
      },
      {
        id: 'c1-nominalisation-noun-phrases',
        level: 'C1',
        title: 'Nominalisation and Complex Noun Phrases',
        summary:
          'Academic and formal English packs information into **noun phrases** rather than verbs. **Nominalisation** turns verbs and adjectives into nouns (*decide → decision*, *able → ability*), and complex noun phrases stack pre- and post-modifiers (*the recently announced government plan to cut spending*). This makes prose denser, more abstract and more objective.',
        sections: [
          {
            heading: 'Nominalisation: turning verbs into nouns',
            body: '**Nominalisation** replaces a verb or adjective with a related noun, shifting the action into a thing you can discuss. *Prices rose sharply* becomes *the sharp rise in prices*; *They decided quickly* becomes *their quick decision*. Common suffixes include **-tion, -ment, -ance, -ity, -ness, -al**: *introduce → introduction*, *develop → development*, *refuse → refusal*. Nominalisation lets you **compress** several clauses into one phrase and sound more formal, but overusing it makes writing heavy and impersonal, so balance nouns with strong verbs.',
            examples: [
              {
                en: "The government's refusal to negotiate angered the unions.",
              },
              {
                en: 'There has been a marked improvement in safety.',
              },
            ],
          },
          {
            heading: 'Building complex noun phrases',
            body: 'A complex noun phrase has a **head noun** with modifiers before and after it. **Pre-modifiers** (determiners, adjectives, nouns) stack in a fixed order: *the two large wooden shipping crates*. **Post-modifiers** add prepositional phrases, relative clauses, *-ing*/*-ed* clauses, or *to*-infinitives: *the decision **to close the factory** **announced yesterday** **by the board**.* Nouns used as adjectives (**noun + noun**) are very productive: *a government spending review*, *a customer satisfaction survey*. Read complex phrases by finding the head noun first, then unpacking what surrounds it.',
            examples: [
              {
                en: 'A long-awaited independent inquiry into the scandal',
              },
              {
                en: 'The risk of further interest rate increases',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Verb/adjective → noun',
            columns: ['Base', 'Nominalisation', 'Example phrase'],
            rows: [
              ['analyse', 'analysis', 'a detailed analysis of the data'],
              ['fail', 'failure', 'the failure of the talks'],
              ['able', 'ability', 'her ability to adapt'],
              ['arrive', 'arrival', 'on his arrival in Madrid'],
              ['happy', 'happiness', 'the pursuit of happiness'],
            ],
          },
        ],
        examples: [
          {
            en: 'The introduction of new rules caused confusion.',
          },
          {
            en: 'Her resignation came as a complete surprise.',
          },
          {
            en: 'There is growing concern about air pollution levels.',
          },
          {
            en: "The committee's rejection of the proposal was unexpected.",
          },
          {
            en: 'A significant reduction in waiting times was reported.',
          },
          {
            en: "The company's long-term investment strategy paid off.",
          },
        ],
        pitfalls: [
          {
            wrong: 'The govern decided to make a reduce of taxes.',
            right: 'The government decided on a reduction in taxes.',
            why: 'Use the correct **noun forms** (*government*, *reduction*); do not use a verb form as a noun.',
          },
          {
            wrong: 'the increase of the prices',
            right: 'the increase in prices',
            why: 'Many nominalisations take a fixed preposition: *increase/rise/reduction **in***, *refusal/failure **to***.',
          },
          {
            wrong: 'a satisfaction customer survey',
            right: 'a customer satisfaction survey',
            why: 'In noun strings the modifying nouns come **before** the head noun in logical order.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-nom-ex1',
            prompt: "Which is the noun form of 'decide'?",
            options: ['decision', 'decisive', 'deciding', 'decided'],
            answer: 0,
            explain: '*Decision* is the nominalised form (verb → noun).',
          },
          {
            kind: 'mcq',
            id: 'c1-nom-ex2',
            prompt: 'There has been a sharp increase ___ unemployment.',
            options: ['of', 'in', 'on', 'to'],
            answer: 1,
            explain: 'Increase takes the preposition in.',
          },
          {
            kind: 'mcq',
            id: 'c1-nom-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The fail of the project surprised everyone.',
              'The failing of the project surprised everyone.',
              'The failure of the project surprised everyone.',
              'The failure of the project surprise everyone.',
            ],
            answer: 2,
            explain: 'Use the noun failure, not the verb fail, as the head noun.',
          },
          {
            kind: 'order',
            id: 'c1-nom-ex4',
            tokens: ['a', 'long-awaited', 'government', 'report', 'on', 'climate', 'change'],
            answer: 'a long-awaited government report on climate change',
            explain:
              'Pre-modifiers (long-awaited, government) + head noun (report) + post-modifier (on climate change).',
          },
          {
            kind: 'mcq',
            id: 'c1-nom-ex6',
            prompt: 'Choose the correctly ordered noun phrase.',
            options: [
              'a national road safety campaign',
              'a safety road national campaign',
              'a campaign safety road national',
              'a road national safety campaign',
            ],
            answer: 0,
            explain: 'Logical pre-modifier order: national > road safety > campaign.',
          },
          {
            kind: 'mcq',
            id: 'c1-nom-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The sudden collapse of the housing market triggered a global depression.',
              'The sudden collapse of the housing market triggered a global recession.',
              'The sudden collapse of the housing markets triggered a global recession.',
              'The sudden collapse of the housing market triggers a global recession.',
            ],
            answer: 1,
            audio: 'The sudden collapse of the housing market triggered a global recession.',
            explain: 'Nominalised heads: collapse and recession carry the information.',
          },
        ],
      },
      {
        id: 'c1-participle-clauses',
        level: 'C1',
        title: 'Participle Clauses',
        summary:
          '**Participle clauses** compress a full clause into a phrase using *-ing*, *-ed* or *being*. They show time, reason, result or condition more economically: *Realising the time, she ran*. C1 adds **negative** (*not knowing*), **perfect** (*having finished*), **passive** (*being watched*), **absolute** (*the meeting over*) and **concessive** uses.',
        sections: [
          {
            heading: 'Core participle clauses',
            body: "An **-ing clause** has an active meaning: *Feeling tired, I went to bed* (= because I felt tired). An **-ed clause** has a passive meaning: *Built in 1900, the house needs work* (= which was built). Use a **perfect participle** (*having + p.p.*) to show one action clearly before another: *Having locked the door, she left*. Crucially, the participle's subject must be the **same** as the main clause's subject; otherwise you create a 'dangling participle'. Negatives go first: **not knowing**, **never having seen**.",
            examples: [
              {
                en: 'Not having eaten all day, he was starving.',
              },
              {
                en: 'Shocked by the news, she sat down.',
              },
            ],
          },
          {
            heading: 'Absolute and concessive clauses',
            body: "An **absolute clause** has its **own subject**, so the rule about matching subjects does not apply: *The weather being fine, we walked*; *Their work finished, the team went home*; *He stood there, arms folded*. These add background detail elegantly. For **concessive** meaning ('although'), combine a participle with a conjunction: *While admitting the error, she defended the plan*; *Though exhausted, they carried on*. You can also front a participle after **when, after, before, since, on, in**: *On hearing the news, he called home*; *When dealing with complaints, stay calm*.",
            examples: [
              {
                en: 'The meeting over, everyone hurried out.',
              },
              {
                en: 'Though warned, he ignored the danger.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Participle clause types',
            columns: ['Type', 'Form', 'Example'],
            rows: [
              ['Active (-ing)', 'doing…', 'Hearing a noise, I stopped.'],
              ['Passive (-ed)', 'done…', 'Damaged in transit, it was returned.'],
              ['Perfect', 'having done…', 'Having read it, she replied.'],
              ['Perfect passive', 'having been done…', 'Having been warned, he left.'],
              ['Negative', 'not doing / not having done', 'Not knowing the way, we asked.'],
              ['Absolute', '(own subject) + participle', 'The rain stopping, we set off.'],
            ],
          },
        ],
        examples: [
          {
            en: 'Walking home, I bumped into an old friend.',
          },
          {
            en: 'Written in haste, the report contained errors.',
          },
          {
            en: 'Having been delayed twice, the flight finally departed.',
          },
          {
            en: 'All things considered, it was a good year.',
          },
          {
            en: 'Not wanting to seem rude, she stayed a little longer.',
          },
          {
            en: 'The guests gone, the house felt empty.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Walking down the street, a dog bit me.',
            right: 'Walking down the street, I was bitten by a dog.',
            why: "A **dangling participle**: the subject of *walking* must match the main subject. Here the dog wasn't walking.",
          },
          {
            wrong: 'Knowing not the answer, he stayed silent.',
            right: 'Not knowing the answer, he stayed silent.',
            why: 'Place **not** before the participle, not after it.',
          },
          {
            wrong: 'After to finish the task, she left.',
            right: 'After finishing the task, she left.',
            why: 'After a preposition/conjunction like *after*, use the **-ing** form, not a to-infinitive.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-part-ex1',
            prompt: 'Choose the correct participle clause.',
            options: [
              'Having finished her work, she went home.',
              'Having finish her work, she went home.',
              'Have finished her work, she went home.',
              'Finishing had her work, she went home.',
            ],
            answer: 0,
            explain: 'Perfect participle: *Having + past participle*.',
          },
          {
            kind: 'mcq',
            id: 'c1-part-ex2',
            prompt: '___ in 1850, the cathedral attracts many tourists.',
            options: ['Building', 'Build', 'Built', 'Having built'],
            answer: 2,
            explain: 'Passive -ed participle: Built = which was built.',
          },
          {
            kind: 'mcq',
            id: 'c1-part-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Driving to work, my phone rang.',
              'Driving to work, my phone was ringing.',
              'Driven to work, I heard my phone ring.',
              'Driving to work, I heard my phone ring.',
            ],
            answer: 3,
            explain: "Avoid the dangling participle: the phone wasn't driving.",
          },
          {
            kind: 'order',
            id: 'c1-part-ex4',
            tokens: ['Not', 'having', 'received', 'a', 'reply', 'she', 'wrote', 'again'],
            answer: 'Not having received a reply, she wrote again.',
            explain: 'Negative perfect participle: *Not having + past participle*.',
          },
          {
            kind: 'mcq',
            id: 'c1-part-ex6',
            prompt: 'On ___ the news, she burst into tears.',
            options: ['hear', 'hearing', 'heard', 'to hear'],
            answer: 1,
            explain: 'After the preposition on, use the -ing form: on hearing.',
          },
          {
            kind: 'mcq',
            id: 'c1-part-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Though exhausted after the climb, they pushed on to the summit.',
              'Though exhausted before the climb, they pressed on to the summit.',
              'Though exhausted after the climb, they pressed on to the summit.',
              'Though exhausted after the climb, he pressed on to the summit.',
            ],
            answer: 2,
            audio: 'Though exhausted after the climb, they pressed on to the summit.',
            explain: 'Concessive participle clause: Though exhausted...',
          },
        ],
      },
      {
        id: 'c1-relatives-ellipsis-substitution',
        level: 'C1',
        title: 'Relative Clauses, Ellipsis and Substitution',
        summary:
          'Two cohesion tools mark advanced English. **Quantifier relative clauses** (*most of whom, some of which, the cost of which*) add precise non-defining detail. **Ellipsis** leaves out repeated words, and **substitution** replaces them with *so, not, do, one(s)* to avoid clumsy repetition.',
        sections: [
          {
            heading: 'Relative clauses with quantifiers and prepositions',
            body: 'In formal, **non-defining** relative clauses you can combine a quantifier or noun with **of whom / of which / whose**: *The staff, **many of whom** are new, need training*; *He made three points, **none of which** convinced me*; *a system **the cost of which** is enormous*. This pattern is much more elegant than splitting into two sentences. Prepositions can move to the front for formality: *the colleague **to whom** I spoke*, *the issue **about which** we argued*. Note the structure is **quantifier/noun + of + whom/which**, and *whom* is required after a preposition or *of*.',
            examples: [
              {
                en: 'She has two brothers, both of whom live abroad.',
              },
              {
                en: 'They offered several options, none of which appealed to me.',
              },
            ],
          },
          {
            heading: 'Ellipsis and substitution',
            body: "**Ellipsis** omits words recoverable from context: *She can speak French and (she can speak) Italian*; *I'd love to (come), but I can't*. **Substitution** replaces a phrase with a shorter word. Use **so** for positive *that*-clauses after *think, hope, believe, suppose, expect, guess*: *Is it raining? — I think so*. Use **not** or **don't think so** for the negative: *I hope not*; *I don't suppose so*. **Do/did** substitute a verb phrase: *She works harder than I do*. **One/ones** replace countable nouns: *the red one*, *the cheaper ones*. **Neither/so do I** echo and agree: *So do I*; *Neither have they*.",
            examples: [
              {
                en: 'Will they accept? — I expect so.',
              },
              {
                en: 'She passed and so did her brother.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Substitution with so / not',
            columns: ['Verb', 'Positive (so)', 'Negative'],
            rows: [
              ['think', 'I think so.', "I don't think so."],
              ['hope', 'I hope so.', 'I hope not.'],
              ['believe', 'I believe so.', "I don't believe so. / I believe not."],
              ['suppose', 'I suppose so.', "I suppose not. / I don't suppose so."],
              ['be afraid', "I'm afraid so.", "I'm afraid not."],
            ],
          },
        ],
        examples: [
          {
            en: 'The report listed ten risks, most of which were minor.',
          },
          {
            en: 'We interviewed forty people, few of whom were suitable.',
          },
          {
            en: "Are we late? — I'm afraid so.",
          },
          {
            en: "He says he'll help, but I doubt it.",
          },
          {
            en: 'I prefer the blue ones to the green ones.',
          },
          {
            en: "She didn't enjoy it, and neither did I.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I have three cousins, all of them live in Italy.',
            right: 'I have three cousins, all of whom live in Italy.',
            why: 'In a relative clause use **all of whom**, not *all of them*; *them* cannot introduce the clause.',
          },
          {
            wrong: 'Do you think it will rain? — I think it.',
            right: 'Do you think it will rain? — I think so.',
            why: 'Substitute the whole clause with **so**, not *it*, after *think/hope/suppose*.',
          },
          {
            wrong: 'She likes coffee and I like too.',
            right: 'She likes coffee and so do I.',
            why: 'To echo agreement, use **so + auxiliary + subject** (*so do I*), not *I like too*.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-rel-ex1',
            prompt: "Complete: 'The company has 500 staff, ___ work remotely.'",
            options: ['many of whom', 'many of them', 'many of which', 'many who of'],
            answer: 0,
            explain: 'People + quantifier in a relative clause = *many of whom*.',
          },
          {
            kind: 'mcq',
            id: 'c1-rel-ex2',
            prompt: 'Will they win? — I hope ___.',
            options: ['not', 'it', 'that', 'so'],
            answer: 3,
            explain: 'Positive substitution after hope is so.',
          },
          {
            kind: 'mcq',
            id: 'c1-rel-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'He gave several reasons, none of them made sense.',
              'He gave several reasons, none of which made sense.',
              'He gave several reasons, none of who made sense.',
              'He gave several reasons, none of that made sense.',
            ],
            answer: 1,
            explain: 'Use none of which to link the relative clause, not none of them.',
          },
          {
            kind: 'order',
            id: 'c1-rel-ex4',
            tokens: [
              'They',
              'offered',
              'two',
              'jobs',
              'both',
              'of',
              'which',
              'I',
              'turned',
              'down',
            ],
            answer: 'They offered two jobs, both of which I turned down.',
            explain: 'Quantifier relative clause: *both of which*.',
          },
          {
            kind: 'mcq',
            id: 'c1-rel-ex6',
            prompt: "I haven't read it. — ___ have I.",
            options: ['So', 'Either', 'Neither', 'Also'],
            answer: 2,
            explain: 'Echoing a negative: Neither/Nor + auxiliary + subject.',
          },
          {
            kind: 'mcq',
            id: 'c1-rel-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'We tested several designs, the best of which is shown here.',
              'We tested several designs, the best of which are shown here.',
              'We tested several designs, the best of them is shown here.',
              'We tested several designs, the best of which was shown here.',
            ],
            answer: 0,
            audio: 'We tested several designs, the best of which is shown here.',
            explain: 'Superlative quantifier relative clause: the best of which.',
          },
        ],
      },
      {
        id: 'c1-hedging-stance-linkers',
        level: 'C1',
        title: 'Hedging, Stance and Advanced Linkers',
        summary:
          'Skilled writers control **tone**. **Hedging** softens claims (*tend to, somewhat, it would seem*); **stance adverbials** signal your attitude (*admittedly, arguably, presumably*); **non-gradable adjectives** take *absolutely* not *very*; and **advanced linkers** (*and yet, whereas, in that, insofar as*) show subtle logical relations.',
        sections: [
          {
            heading: 'Hedging and stance adverbials',
            body: '**Hedging** makes claims cautious and academic, avoiding sounding arrogant. Tools include modal verbs (*may, might, could*), lexical verbs (*tend to, appear to, suggest, seem*), adverbs (*arguably, possibly, relatively, somewhat, to some extent*) and frames (*It would seem that…, There is some evidence that…*). **Stance adverbials** comment on the whole sentence and reveal your viewpoint: **admittedly** (conceding a point), **arguably** (a defensible claim), **presumably** (a reasonable assumption), **understandably, frankly, curiously, regrettably**. They usually sit at the **front**: *Admittedly, the plan has flaws*.',
            examples: [
              {
                en: 'The results suggest that the drug may be effective.',
              },
              {
                en: 'Arguably, this is her finest novel.',
              },
            ],
          },
          {
            heading: 'Non-gradable adjectives and advanced linkers',
            body: "**Non-gradable (extreme/absolute) adjectives** already contain 'very' in their meaning (*terrified, exhausted, freezing, impossible, perfect, unique*), so they pair with **absolutely, utterly, completely, totally** — not *very*: *absolutely exhausted*, *utterly impossible*. (*Really* works with both types.) For cohesion, use precise **linkers**: **and yet** (surprising contrast: *simple and yet powerful*); **whereas** (direct comparison: *He's calm, whereas she's anxious*); **in that** (= because/in the sense that: *It's unusual in that it has no engine*); **insofar as / inasmuch as** (to the extent that); **albeit** (= although, + phrase: *a small, albeit important, change*).",
            examples: [
              {
                en: 'I was absolutely exhausted after the trip.',
              },
              {
                en: 'The theory is elegant, whereas the proof is messy.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Gradable vs non-gradable intensifiers',
            columns: ['Adjective type', 'Use with', 'Avoid', 'Example'],
            rows: [
              ['Gradable (tired, cold, good)', 'very, quite, rather', 'absolutely', 'very tired'],
              [
                'Non-gradable (exhausted, freezing)',
                'absolutely, utterly, totally',
                'very',
                'absolutely exhausted',
              ],
              ['Either type', 'really', '—', 'really good / really perfect'],
            ],
          },
        ],
        examples: [
          {
            en: 'Admittedly, I should have checked the figures.',
          },
          {
            en: 'The plan is risky, and yet it might just work.',
          },
          {
            en: "He's unusual in that he never uses email.",
          },
          {
            en: 'Sales rose, whereas profits fell.',
          },
          {
            en: 'It was a useful, albeit brief, meeting.',
          },
          {
            en: 'The food was absolutely delicious.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I was very exhausted after the race.',
            right: 'I was absolutely exhausted after the race.',
            why: '*Exhausted* is **non-gradable**; intensify it with *absolutely/utterly*, not *very*.',
          },
          {
            wrong: 'He is rich, in spite of his brother is poor.',
            right: 'He is rich, whereas his brother is poor.',
            why: 'For a direct contrast between two facts use **whereas** + clause, not *in spite of* (which takes a noun/-ing).',
          },
          {
            wrong: 'Admittedly is true that we made mistakes.',
            right: 'Admittedly, it is true that we made mistakes.',
            why: '**Admittedly** is a stance adverb, not a verb; keep the dummy subject *it*.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-hedge-ex1',
            prompt: 'Choose the natural collocation.',
            options: ['absolutely freezing', 'very freezing', 'quite freezing', 'rather freezing'],
            answer: 0,
            explain: '*Freezing* is non-gradable, so it pairs with *absolutely*.',
          },
          {
            kind: 'mcq',
            id: 'c1-hedge-ex2',
            prompt: 'Sales grew steadily, ___ costs remained flat.',
            options: ['therefore', 'whereas', 'however', 'moreover'],
            answer: 1,
            explain: '*Whereas* introduces a direct contrast between two clauses.',
          },
          {
            kind: 'mcq',
            id: 'c1-hedge-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The view was very stunning.',
              'The view were absolutely stunning.',
              'The view was absolute stunning.',
              'The view was absolutely stunning.',
            ],
            answer: 3,
            explain: '*Stunning* is non-gradable; use *absolutely/really*, not *very*.',
          },
          {
            kind: 'order',
            id: 'c1-hedge-ex4',
            tokens: ['The', 'design', 'is', 'simple', 'and', 'yet', 'remarkably', 'effective'],
            answer: 'The design is simple and yet remarkably effective.',
            explain: '*And yet* signals a surprising contrast within one sentence.',
          },
          {
            kind: 'mcq',
            id: 'c1-hedge-ex6',
            prompt: 'The car is special ___ it runs entirely on solar power.',
            options: ['so that', 'in which', 'in that', 'such that'],
            answer: 2,
            explain:
              '*In that* = in the sense that / because, explaining how something is special.',
          },
          {
            kind: 'mcq',
            id: 'c1-hedge-ex7',
            prompt: "Which word best hedges 'This is the best solution'?",
            options: [
              'Arguably, this is the best solution.',
              'Absolutely, this is the best solution.',
              'Definitely, this is the best solution.',
              'Certainly, this is the best solution.',
            ],
            answer: 0,
            explain:
              '*Arguably* hedges the claim, presenting it as defensible rather than certain.',
          },
        ],
      },
      {
        id: 'c1-advanced-multi-word-verbs',
        level: 'C1',
        title: 'Advanced Multi-Word Verbs',
        summary:
          'Phrasal and prepositional verbs become **idiomatic** and abstract at C1: *bring about, account for, do away with, put up with, come down to*. Mastering their meanings, **separability** and three-part forms makes speech sound native and avoids over-formal single-word verbs.',
        sections: [
          {
            heading: 'Types and separability',
            body: '**Transitive separable** verbs let the object go in the middle or after (*turn the offer down / turn down the offer*), but a **pronoun** must go in the middle: *turn it down*, never *turn down it*. **Transitive inseparable** (prepositional) verbs keep the object after the particle: *look after the kids*, *go through the report*. **Three-part verbs** (verb + adverb + preposition) are always inseparable: *put up with, look forward to, come up with, get on with, do away with, catch up on*. Many have a one-word formal synonym (*bring about ≈ cause*, *find out ≈ discover*), and the phrasal version usually sounds more natural in speech.',
            examples: [
              {
                en: "I won't put up with this any longer.",
              },
              {
                en: "Can you turn it down? It's too loud.",
              },
            ],
          },
          {
            heading: 'High-value idiomatic verbs',
            body: 'Build a stock of abstract multi-word verbs you can reuse in essays and discussion: **bring about** (cause), **account for** (explain/make up a proportion), **do away with** (abolish), **come down to** (be essentially a matter of), **carry out** (perform), **point out** (note), **rule out** (eliminate), **stand for** (represent/tolerate), **put forward** (propose), **boil down to** (reduce to essentials), **come up against** (encounter an obstacle), **draw on** (use as a resource). Notice that meaning is often **non-literal**: *do away with* has nothing to do with *do* or *away* individually.',
            examples: [
              {
                en: 'The reforms brought about lasting change.',
              },
              {
                en: 'It all comes down to money in the end.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Phrasal verb and formal synonym',
            columns: ['Multi-word verb', 'Meaning', 'Formal synonym'],
            rows: [
              ['bring about', 'to cause', 'cause / produce'],
              ['do away with', 'to abolish', 'abolish / eliminate'],
              ['account for', 'to explain / make up', 'explain / constitute'],
              ['put up with', 'to tolerate', 'tolerate / endure'],
              ['come up with', 'to think of', 'devise / propose'],
              ['carry out', 'to perform', 'conduct / perform'],
            ],
          },
        ],
        examples: [
          {
            en: 'Renewables now account for a third of our energy.',
          },
          {
            en: 'We need to do away with these outdated rules.',
          },
          {
            en: 'She came up with a brilliant solution.',
          },
          {
            en: 'The committee carried out a thorough review.',
          },
          {
            en: 'I look forward to hearing from you.',
          },
          {
            en: 'We came up against fierce opposition.',
          },
        ],
        pitfalls: [
          {
            wrong: "I won't put with it up.",
            right: "I won't put up with it.",
            why: 'Three-part verbs are **inseparable**; keep *put up with* together with the object after it.',
          },
          {
            wrong: 'Please turn down it.',
            right: 'Please turn it down.',
            why: 'With separable verbs a **pronoun object** must go between the verb and the particle.',
          },
          {
            wrong: 'I look forward to hear from you.',
            right: 'I look forward to hearing from you.',
            why: 'Here *to* is a preposition, so it is followed by the **-ing** form, not the infinitive.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-mwv-ex1',
            prompt: 'Choose the correct pronoun placement.',
            options: [
              'Can you switch it off?',
              'Can you switch off it?',
              'Can you switch off it now?',
              'Can you it switch off?',
            ],
            answer: 0,
            explain: 'A pronoun object goes between the verb and particle: *switch it off*.',
          },
          {
            kind: 'mcq',
            id: 'c1-mwv-ex2',
            prompt: 'I really look forward to ___ you again soon.',
            options: ['see', 'to see', 'seeing', 'seen'],
            answer: 2,
            explain: '*Look forward to* + -ing (the *to* is a preposition).',
          },
          {
            kind: 'mcq',
            id: 'c1-mwv-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              "I can't put up with it any more.",
              "I can't put up it with any more.",
              "I can't put with it up any more.",
              "I can't put up with it no more.",
            ],
            answer: 0,
            explain: '*Put up with* is inseparable; the pronoun follows the whole verb.',
          },
          {
            kind: 'order',
            id: 'c1-mwv-ex4',
            tokens: ['The', 'new', 'policy', 'brought', 'about', 'major', 'changes'],
            answer: 'The new policy brought about major changes.',
            explain: '*Bring about* = cause; the noun object follows the particle here.',
          },
          {
            kind: 'mcq',
            id: 'c1-mwv-ex6',
            prompt: "Which verb means 'to abolish'?",
            options: ['do away with', 'do up', 'do over', 'do without'],
            answer: 0,
            explain: '*Do away with* = abolish/eliminate.',
          },
          {
            kind: 'mcq',
            id: 'c1-mwv-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The researchers carried on the experiment and came up with surprising results.',
              'The researchers carried out the experiment and came up with surprising results.',
              'The researchers carried out the experiment and came up with surprising result.',
              'The researchers carried out the experiments and came up with surprising results.',
            ],
            answer: 1,
            audio:
              'The researchers carried out the experiment and came up with surprising results.',
            explain: 'Two multi-word verbs: *carry out* (perform) and *come up with* (think of).',
          },
        ],
      },
    ],
  },
  {
    level: 'C2',
    title: 'C2 · Mastery & Rhetoric',
    blurb:
      'Wield English with native-like precision: subtle register, stylistic inversion, clefts, nominalisation, advanced conditionals, distancing passives, rhetorical word order, idiom, hedging and self-repair.',
    lessons: [
      {
        id: 'c2-tense-aspect-register',
        level: 'C2',
        title: 'Tense, Aspect & Register Control',
        summary:
          "At C2 you no longer choose a tense merely to mark time; you exploit aspect and tense to signal politeness, distance, emphasis and tone. This lesson sharpens the subtle contrasts between simple and progressive, the 'attitudinal' past, the present perfect for relevance, and the future forms that carry shades of inevitability, intention or formality.",
        sections: [
          {
            heading: 'Progressive for stance and tentativeness',
            body: "Beyond marking action in progress, the **progressive** softens statements and signals a temporary or emotional stance. 'I'm hoping you can help' is gentler than 'I hope you can help'; 'You're being difficult' frames behaviour as temporary rather than as a fixed trait. Use the **past progressive** ('I was wondering whether...') as a politeness device that distances the request in time.",
            examples: [
              {
                en: 'I was wondering if you might reconsider.',
              },
              {
                en: "You're being unusually generous today.",
              },
            ],
          },
          {
            heading: 'Perfect aspect and current relevance',
            body: "The **present perfect** ties a past event to present consequence ('The committee has reached a decision' implies it now stands). The **perfect progressive** foregrounds duration and its visible result ('You've been crying'). In formal narration, the **past perfect** is exploited not only for sequence but to background information that explains a later turn of events.",
            examples: [
              {
                en: 'By the time the report surfaced, the firm had already restructured.',
              },
              {
                en: "She's been advising governments for decades.",
              },
            ],
          },
          {
            heading: 'Future forms and their connotations',
            body: "Each future carries register. **'Will'** states neutral prediction or promise; **'be going to'** stresses present evidence or intention; the **present progressive** schedules arrangements; **'shall'** survives in formal offers and legal text; and the **future perfect** projects completion ('By 2030, attitudes will have shifted'). The **future progressive** ('I'll be travelling next week') can also sound less imposing than 'I'll travel', presenting the action as a matter of course.",
            examples: [
              {
                en: 'Shall we proceed to the next item?',
              },
              {
                en: 'By next spring, the trial will have concluded.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Register and connotation of future forms',
            columns: ['Form', 'Typical use', 'Register / nuance'],
            rows: [
              [
                'will',
                'Neutral prediction, spontaneous decision, promise',
                'Default, all registers',
              ],
              ['be going to', 'Intention, evidence-based prediction', 'Neutral to informal'],
              ['present progressive', 'Fixed arrangement', 'Neutral, conversational'],
              ['shall (I/we)', 'Offers, suggestions, legal obligation', 'Formal / archaic'],
              [
                'future progressive',
                'Action as a matter of course; softened plan',
                'Polite, less imposing',
              ],
              ['future perfect', 'Completion before a future point', 'Formal, projective'],
            ],
          },
        ],
        examples: [
          {
            en: "I'm thinking we should hold off until the figures are confirmed.",
          },
          {
            en: "You'll have noticed the discrepancy by now.",
          },
          {
            en: "He's forever interrupting — it's maddening.",
          },
          {
            en: 'The board shall convene quarterly.',
          },
          {
            en: "I'd been meaning to raise this for some time.",
          },
          {
            en: "She'll be presenting the findings at three.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I am thinking that you are right about this.',
            right: "I think you're right about this.",
            why: "Stative verbs like 'think' (meaning 'believe') normally stay simple. The progressive is only stance-marking when 'think' means 'consider/weigh up'.",
          },
          {
            wrong: 'When the report came out, the firm already restructured.',
            right: 'When the report came out, the firm had already restructured.',
            why: 'An event completed before another past event needs the past perfect to background it clearly.',
          },
          {
            wrong: 'I wonder if you could possibly to help me.',
            right: 'I was wondering whether you could possibly help me.',
            why: "The polite past progressive plus a bare infinitive after 'could' is the natural, more deferential pattern.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ta-ex1',
            prompt: 'Which is the most softened, polite request?',
            options: [
              'I want you to sign this.',
              'I was wondering whether you might sign this.',
              'Sign this.',
              'You will sign this.',
            ],
            answer: 1,
            explain:
              "The past progressive 'was wondering' plus tentative 'might' maximises politeness and distance.",
          },
          {
            kind: 'mcq',
            id: 'c2-ta-ex2',
            prompt: 'By the time we arrived, the negotiations ___ already collapsed.',
            options: ['have', 'has', 'had', 'having'],
            answer: 2,
            explain:
              "Past perfect 'had collapsed' backgrounds an event completed before another past point.",
          },
          {
            kind: 'mcq',
            id: 'c2-ta-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'She is knowing the answer since yesterday.',
              'She knows the answer since yesterday.',
              'She has known the answer since yesterday.',
              'She has knew the answer since yesterday.',
            ],
            answer: 2,
            explain:
              "'Know' is stative, so no progressive; 'since yesterday' demands the present perfect.",
          },
          {
            kind: 'order',
            id: 'c2-ta-ex5',
            tokens: ['I', 'been', 'meaning', 'to', 'had', 'call', 'you'],
            answer: 'I had been meaning to call you',
            explain:
              'Past perfect progressive expresses an intention that had persisted up to a past moment.',
          },
          {
            kind: 'mcq',
            id: 'c2-ta-ex6',
            prompt: 'Choose the form that frames behaviour as temporary, not as a permanent trait.',
            options: [
              'You are rude.',
              'You are being rude.',
              'You were rude.',
              'You will be rude.',
            ],
            answer: 1,
            explain:
              "The progressive 'are being' presents the rudeness as a present, temporary stance.",
          },
          {
            kind: 'mcq',
            id: 'c2-ta-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "I'm hoping we can resolve this before the figures go public.",
              'I hope we can resolve this before the figures go public.',
              "I'm hoping we can resolve this before the figures went public.",
              "I'm hoping we can resolve it before the figures go public.",
            ],
            answer: 0,
            audio: "I'm hoping we can resolve this before the figures go public.",
            explain: "'I'm hoping' is a softened, tentative version of 'I hope'.",
          },
        ],
      },
      {
        id: 'c2-stylistic-inversion',
        level: 'C2',
        title: 'Stylistic & Negative Inversion',
        summary:
          "Inversion reverses subject and auxiliary for emphasis, formality and dramatic effect. This lesson covers fronted negatives and restrictives (never, not only, no sooner, little), 'so/such' inversions, conditional inversion, and inversion after fronted adverbials of place — all hallmarks of polished, rhetorical English.",
        sections: [
          {
            heading: 'Negative and restrictive fronting',
            body: "When a **negative or restrictive adverbial** is fronted for emphasis, the clause inverts like a question: auxiliary before subject. Triggers include **never, rarely, seldom, hardly, scarcely, no sooner, not only, not until, little, nowhere** and **only then/once/after**. 'Never have I seen such a thing' and 'Not only did she resign, but she also sued' are typical. Note 'no sooner... than' and 'hardly... when'.",
            examples: [
              {
                en: 'Not until much later did I grasp the implications.',
              },
              {
                en: 'No sooner had we sat down than the lights went out.',
              },
            ],
          },
          {
            heading: "So, such and 'so + adjective' inversions",
            body: "Fronting **'so + adjective'** or **'such'** triggers inversion of 'be' or the auxiliary: 'So intense was the heat that...', 'Such was her influence that...'. This structure is emphatic and literary; the 'that'-clause states the consequence. Compare the neutral 'The heat was so intense that...' with the marked, front-loaded version that delays the subject for effect.",
            examples: [
              {
                en: 'Such was the outcry that the law was repealed within weeks.',
              },
              {
                en: 'So compelling was her testimony that the jury wept.',
              },
            ],
          },
          {
            heading: 'Conditional and locative inversion',
            body: "Formal conditionals drop 'if' and invert: **'Had I known', 'Were it not for', 'Should you require'**. After a fronted **adverbial of place or direction**, the subject and full verb invert (no auxiliary): 'Down the valley swept the floodwaters', 'On the table lay a single letter'. This locative inversion is descriptive and stylistic, common in narrative and reportage.",
            examples: [
              {
                en: 'Had she spoken sooner, the crisis might have been averted.',
              },
              {
                en: 'Beyond the ridge stretched an endless plain.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Inversion triggers and patterns',
            columns: ['Trigger', 'Inverted example', 'Type'],
            rows: [
              [
                'Never / Rarely / Seldom',
                'Never have I witnessed such courage.',
                'Negative fronting',
              ],
              ['No sooner ... than', 'No sooner had he left than she called.', 'Sequence'],
              ['Not only ... but also', 'Not only did it rain, but it also flooded.', 'Additive'],
              ['Only when / after / then', 'Only then did the truth emerge.', 'Restrictive'],
              ['So + adj ... that', 'So great was the loss that...', 'Degree/consequence'],
              ['Such ... that', 'Such was the panic that...', 'Degree/consequence'],
              ['Had / Were / Should', 'Should you need help, call us.', 'Conditional'],
              ['Place adverbial', 'Here comes the train.', 'Locative'],
            ],
          },
        ],
        examples: [
          {
            en: 'Little did they realise what awaited them.',
          },
          {
            en: 'Rarely has a single speech changed so much.',
          },
          {
            en: 'Were it not for your support, we would have failed.',
          },
          {
            en: 'Not for one moment did I doubt her.',
          },
          {
            en: 'Such was his charisma that crowds fell silent.',
          },
          {
            en: 'Only after the war did the records come to light.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen such a mess.',
            right: 'Never have I seen such a mess.',
            why: "Fronted 'never' forces subject-auxiliary inversion: auxiliary before the subject.",
          },
          {
            wrong: 'No sooner I had arrived when the phone rang.',
            right: 'No sooner had I arrived than the phone rang.',
            why: "'No sooner' needs inversion and pairs with 'than', not 'when'.",
          },
          {
            wrong: 'So the storm was fierce that ships sank.',
            right: 'So fierce was the storm that ships sank.',
            why: "The adjective must follow 'so' and precede the inverted verb: 'So fierce was the storm'.",
          },
          {
            wrong: 'Had not I known, I would have stayed.',
            right: 'Had I not known, I would have stayed.',
            why: "In inverted conditionals the negative 'not' follows the subject, not the auxiliary.",
          },
        ],
        exercises: [
          {
            kind: 'order',
            id: 'c2-si-ex1',
            tokens: ['Never', 'such', 'have', 'I', 'encountered', 'resistance'],
            answer: 'Never have I encountered such resistance',
            explain: "Fronted 'never' triggers inversion: auxiliary 'have' before subject 'I'.",
          },
          {
            kind: 'mcq',
            id: 'c2-si-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'Not only she sang, but she also danced.',
              'Not only did she sang, but she also danced.',
              'Not only she did sing, but she also danced.',
              'Not only did she sing, but she also danced.',
            ],
            answer: 3,
            explain: "'Not only' fronted requires do-support and inversion: 'did she sing'.",
          },
          {
            kind: 'mcq',
            id: 'c2-si-ex3',
            prompt: 'So ___ was the silence that we could hear our hearts.',
            options: ['loud', 'deep', 'bright', 'narrow'],
            answer: 1,
            explain:
              "Pattern 'So + adjective + was + subject + that...'; 'deep silence' is the natural collocation.",
          },
          {
            kind: 'mcq',
            id: 'c2-si-ex4',
            prompt: 'Which is the correctly inverted formal conditional?',
            options: [
              'If had I known, I would have come.',
              'Had I known, I would have come.',
              'Would I have known, I had come.',
              'Had known I, I would come.',
            ],
            answer: 1,
            explain: "Drop 'if' and front the auxiliary: 'Had I known...'.",
          },
          {
            kind: 'mcq',
            id: 'c2-si-ex6',
            prompt: 'Only after the meeting ___ I understand the real agenda.',
            options: ['do', 'did', 'does', 'have'],
            answer: 1,
            explain: "Fronted 'Only after...' triggers do-support inversion: 'did I understand'.",
          },
          {
            kind: 'mcq',
            id: 'c2-si-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Such was her determination that nothing could stop him.',
              'So was her determination that nothing could stop her.',
              'Such was her determination that nothing could stop her.',
              'Such was her determination that nothing can stop her.',
            ],
            answer: 2,
            audio: 'Such was her determination that nothing could stop her.',
            explain: "'Such was + noun phrase + that...' is an emphatic inverted structure.",
          },
        ],
      },
      {
        id: 'c2-clefts-distance',
        level: 'C2',
        title: 'Clefts & Distance Clefts',
        summary:
          "Cleft sentences split one idea into two clauses to focus attention. This lesson covers it-clefts, wh-/pseudo-clefts, all-clefts, reversed pseudo-clefts and the 'it was not until...' distance cleft, giving you fine control over what information is foregrounded and what is presupposed.",
        sections: [
          {
            heading: 'It-clefts: focusing a single element',
            body: "An **it-cleft** uses 'It + be + focus + that/who-clause' to spotlight one element while presupposing the rest. From 'María broke the vase', we can focus the subject ('It was María who broke the vase'), the object ('It was the vase that María broke'), or a time/place adverbial ('It was yesterday that she broke it'). The focused element carries the new, contrastive information; everything in the relative clause is treated as known.",
            examples: [
              {
                en: 'It was the lack of funding, not the idea, that doomed the project.',
              },
              {
                en: 'It is precisely here that the argument falls apart.',
              },
            ],
          },
          {
            heading: 'Wh-clefts and reversed pseudo-clefts',
            body: "A **wh-cleft (pseudo-cleft)** fronts a 'what'-clause: 'What I need is time'. It can focus actions ('What she did was resign') or whole clauses. The **reversed pseudo-cleft** puts the focus first: 'Time is what I need'. Use **'all'-clefts** to convey 'only/just': 'All I want is the truth'. These structures sound deliberate and are excellent for building or summing up an argument.",
            examples: [
              {
                en: 'What strikes me most is the sheer scale of it.',
              },
              {
                en: 'All it takes is a single mistake.',
              },
            ],
          },
          {
            heading: "Distance clefts: 'It was not until...'",
            body: "The **distance cleft** delays a key point for dramatic effect, typically with **'It was not until + time that...'**: 'It was not until 1989 that the wall fell'. The structure presupposes that something did not happen earlier and pinpoints exactly when it did. Variants include 'It was only when...' and 'It is only by/through... that...', stressing the sole condition under which something occurred.",
            examples: [
              {
                en: 'It was not until she left that I understood her reasons.',
              },
              {
                en: 'It is only through dialogue that lasting peace is achieved.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Cleft types at a glance',
            columns: ['Type', 'Frame', 'Example'],
            rows: [
              ['It-cleft', 'It + be + focus + that/who', 'It was John who called.'],
              ['Wh-/pseudo-cleft', 'What... + be + focus', 'What I need is rest.'],
              ['Reversed pseudo-cleft', 'Focus + be + what...', 'Rest is what I need.'],
              ['All-cleft', 'All... + be + focus', 'All I did was ask.'],
              [
                'Distance cleft',
                'It was not until... that...',
                'It was not until dusk that they arrived.',
              ],
              [
                'The thing/reason cleft',
                'The reason... is that...',
                'The reason I left is that I was tired.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'It was her silence, more than her words, that unsettled me.',
          },
          {
            en: 'What we should be debating is the principle, not the price.',
          },
          {
            en: 'All that remained was a faint signature.',
          },
          {
            en: 'It was not until the audit that the fraud surfaced.',
          },
          {
            en: 'The reason it failed is that nobody owned the decision.',
          },
          {
            en: 'Courage is what the moment demanded.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It was John that he broke the window.',
            right: 'It was John who broke the window.',
            why: "Don't add a redundant subject pronoun in the cleft clause; the gap is filled by the focused element.",
          },
          {
            wrong: 'What I want it is more time.',
            right: 'What I want is more time.',
            why: "The wh-cleft already supplies the subject; no extra 'it' is needed before 'is'.",
          },
          {
            wrong: "It wasn't until I left when I realised.",
            right: "It wasn't until I left that I realised.",
            why: "The distance cleft uses 'that', not 'when', to introduce the delayed clause.",
          },
        ],
        exercises: [
          {
            kind: 'order',
            id: 'c2-cl-ex1',
            tokens: ['It', 'was', 'the', 'climate', 'that', 'drove', 'them', 'out'],
            answer: 'It was the climate that drove them out',
            explain: "An it-cleft focusing the cause 'the climate'.",
          },
          {
            kind: 'mcq',
            id: 'c2-cl-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'It was not until midnight that the results came.',
              'It was not until midnight when the results came.',
              "It wasn't until midnight when the results came.",
              'It was not until midnight that the results come.',
            ],
            answer: 0,
            explain: "Distance cleft requires 'that', not 'when'.",
          },
          {
            kind: 'mcq',
            id: 'c2-cl-ex4',
            prompt: "Which sentence focuses the action 'resign'?",
            options: [
              'She resigned suddenly.',
              'What she did was resign.',
              'It was sudden that she resigned.',
              'She is the one resigning.',
            ],
            answer: 1,
            explain: "'What she did was resign' is a pseudo-cleft focusing the action.",
          },
          {
            kind: 'mcq',
            id: 'c2-cl-ex5',
            prompt: 'It was not until the third attempt ___ the engine finally started.',
            options: ['when', 'that', 'which', 'then'],
            answer: 1,
            explain: "'It was not until... that...' is the fixed distance-cleft frame.",
          },
          {
            kind: 'mcq',
            id: 'c2-cl-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'It was precisely her honesty that cost her the jobs.',
              'It was precisely his honesty that cost her the job.',
              'It was precisely her honesty which cost her the job.',
              'It was precisely her honesty that cost her the job.',
            ],
            answer: 3,
            audio: 'It was precisely her honesty that cost her the job.',
            explain: "An it-cleft with the intensifier 'precisely' sharpening the focus.",
          },
        ],
      },
      {
        id: 'c2-nominalisation-lexical-density',
        level: 'C2',
        title: 'Nominalisation & Lexical Density',
        summary:
          'Academic and formal English packs meaning into noun phrases rather than verbs, raising lexical density and objectivity. This lesson shows how to turn processes into nouns, build complex pre- and post-modified noun phrases, and balance density against clarity so prose stays readable.',
        sections: [
          {
            heading: 'Turning processes into things',
            body: "**Nominalisation** converts verbs and adjectives into nouns: 'decide' becomes 'the decision', 'fail' becomes 'the failure', 'analyse' becomes 'the analysis'. This lets you treat an action as an object you can describe, quantify and link: 'The rapid deterioration of conditions prompted intervention'. The effect is **objective and impersonal**, removing the human agent and foregrounding the process itself — the default voice of reports, science and law.",
            examples: [
              {
                en: "The government's refusal to negotiate prolonged the strike.",
              },
              {
                en: 'Implementation of the reforms requires careful coordination.',
              },
            ],
          },
          {
            heading: 'Building dense noun phrases',
            body: "Lexical density rises when you stack **pre-modifiers** (adjectives, nouns as modifiers) and **post-modifiers** (prepositional phrases, relative clauses, '-ing'/'-ed' participles) around a head noun. 'A sharp, sustained rise in long-term unemployment among young graduates' packs an entire clause into one phrase. The skill lies in ordering modifiers correctly and not overloading the reader's working memory.",
            examples: [
              {
                en: 'A government-commissioned report into hospital waiting times',
              },
              {
                en: 'Widespread public concern over data privacy',
              },
            ],
          },
          {
            heading: 'Density versus clarity',
            body: "High density is powerful but risky: chains of abstract nouns ('the optimisation of the utilisation of resources') become opaque and lifeless. Skilled writers **alternate** dense and verbal styles, unpacking a nominalisation into a clause when clarity matters: 'When resources are used well...' rather than 'Through optimal resource utilisation...'. Choose density for precision and economy, but return to verbs to keep the prose alive.",
            examples: [
              {
                en: 'Dense: The reduction in expenditure followed the cancellation of the programme.',
              },
              {
                en: 'Clearer: They spent less after they cancelled the programme.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common verb-to-noun nominalisations',
            columns: ['Verb / Adjective', 'Nominalisation', 'Example phrase'],
            rows: [
              ['decide', 'decision', 'the decision to withdraw'],
              ['fail', 'failure', 'a failure of oversight'],
              ['analyse', 'analysis', 'a thorough analysis of the data'],
              ['expand', 'expansion', 'rapid expansion into new markets'],
              ['refuse', 'refusal', 'their refusal of the offer'],
              ['intense', 'intensity', 'the intensity of the debate'],
              ['able', 'ability', 'the ability to adapt'],
            ],
          },
        ],
        examples: [
          {
            en: 'The introduction of stricter controls met fierce resistance.',
          },
          {
            en: 'A marked decline in biodiversity across the region',
          },
          {
            en: "The committee's reluctance to act drew criticism.",
          },
          {
            en: 'Prolonged exposure to noise impairs concentration.',
          },
          {
            en: 'The sheer complexity of the regulations deters compliance.',
          },
          {
            en: 'Our recommendation is the immediate suspension of trials.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The decide of the board was final.',
            right: 'The decision of the board was final.',
            why: "You must use the noun form 'decision', not the verb, after the article.",
          },
          {
            wrong: 'After the cancel of the event, refunds were issued.',
            right: 'After the cancellation of the event, refunds were issued.',
            why: "The correct nominalisation of 'cancel' is 'cancellation'.",
          },
          {
            wrong: 'The optimisation of the utilisation of the resources of the team was needed.',
            right: 'The team needed to use its resources better.',
            why: 'Over-nominalisation creates an opaque chain of abstract nouns; unpack it into a clause.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-nm-ex1',
            prompt: 'The sudden ___ of the minister shocked the party. (resign)',
            options: ['resigning', 'resignation', 'resigned', 'resignment'],
            answer: 1,
            explain: "Nominalise 'resign' to 'resignation'.",
          },
          {
            kind: 'mcq',
            id: 'c2-nm-ex2',
            prompt: "Which is the correct nominalisation of 'analyse'?",
            options: ['analyse', 'analysation', 'analysis', 'analyst'],
            answer: 2,
            explain: "'Analysis' is the noun; 'analyst' is the person, not the process.",
          },
          {
            kind: 'mcq',
            id: 'c2-nm-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The fail of the system caused delays.',
              'The failure of the system caused delays.',
              'The failing of the system caused delays.',
              'The failure of the system cause delays.',
            ],
            answer: 1,
            explain: "Use the noun 'failure', not the verb 'fail', after the article.",
          },
          {
            kind: 'order',
            id: 'c2-nm-ex5',
            tokens: ['a', 'sharp', 'rise', 'in', 'youth', 'unemployment'],
            answer: 'a sharp rise in youth unemployment',
            explain:
              "Pre-modifier 'sharp' plus post-modifying prepositional phrase build a dense noun phrase.",
          },
          {
            kind: 'mcq',
            id: 'c2-nm-ex6',
            prompt: 'Which version is clearer and less over-nominalised?',
            options: [
              'The achievement of the realisation of the goal occurred.',
              'They achieved the goal.',
              'The realisation of the achievement of the goal took place.',
              'Goal achievement realisation happened.',
            ],
            answer: 1,
            explain: 'Unpacking into a verb-based clause restores clarity.',
          },
          {
            kind: 'mcq',
            id: 'c2-nm-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "The government's reluctance to intervene worsened the crisis.",
              "The government's reluctance to intervene worsened the crises.",
              "The government's reluctance to intervene worsens the crisis.",
              "The government's reluctant to intervene worsened the crisis.",
            ],
            answer: 0,
            audio: "The government's reluctance to intervene worsened the crisis.",
            explain: "'Reluctance' nominalises 'reluctant', giving an objective, formal tone.",
          },
        ],
      },
      {
        id: 'c2-conditionals-advanced',
        level: 'C2',
        title: 'Advanced & Counterfactual Conditionals',
        summary:
          "Beyond the basic types, C2 conditionals mix time frames, invert to drop 'if', and express subtle counterfactual and hypothetical meanings. This lesson covers mixed conditionals, inverted conditionals, alternatives to 'if', and the modal layering that fine-tunes certainty and regret.",
        sections: [
          {
            heading: 'Mixed and counterfactual conditionals',
            body: "**Mixed conditionals** combine time frames: a past condition with a present result ('If I had studied medicine, I'd be a doctor now') or a present condition with a past result ('If she weren't so cautious, she would have invested'). **Counterfactuals** describe what is contrary to fact; the further the verb shifts into the past, the more remote and unreal the situation. This back-shifting is the engine of hypothetical English.",
            examples: [
              {
                en: "If we had left earlier, we wouldn't be stuck in this jam.",
              },
              {
                en: 'If he were more diplomatic, the deal would have closed.',
              },
            ],
          },
          {
            heading: "Inverted conditionals and alternatives to 'if'",
            body: "Formal conditionals drop 'if' and invert: **'Had we known', 'Were they to refuse', 'Should anything go wrong'**. Other connectors replace 'if' with nuance: **'unless'** (= if not), **'provided/providing that'** and **'as long as'** (strict condition), **'supposing/suppose'** (speculation), **'on condition that'**, **'but for'** (= if not for) and **'otherwise'**. Each shifts register and emphasis.",
            examples: [
              {
                en: 'Should you change your mind, the offer stands.',
              },
              {
                en: 'But for your warning, we would have walked straight into the trap.',
              },
            ],
          },
          {
            heading: 'Modal layering and degrees of likelihood',
            body: "Conditionals fine-tune probability through **modal choice** in the result clause: 'would' (likely consequence), 'might/could' (possible consequence), 'should' (expected). Adding 'were to' or 'happen to' to the condition makes it more remote or hypothetical: 'If you were to ask me...'. 'If it hadn't been for...' and 'Had it not been for...' are set counterfactual frames for attributing an outcome to a single decisive cause.",
            examples: [
              {
                en: 'If the talks were to break down, markets might panic.',
              },
              {
                en: 'Had it not been for the strike, profits would have risen.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conditional patterns and meanings',
            columns: ['Pattern', 'Example', 'Meaning'],
            rows: [
              [
                'Mixed (past → present)',
                "If I'd saved, I'd be rich now.",
                'Past cause, present result',
              ],
              [
                'Mixed (present → past)',
                "If I were braver, I'd have asked.",
                'Present state, past result',
              ],
              [
                'Inverted (Had)',
                'Had we acted, this would not have happened.',
                'Formal third conditional',
              ],
              [
                'Inverted (Were ... to)',
                'Were she to resign, chaos would follow.',
                'Remote hypothesis',
              ],
              ['Inverted (Should)', 'Should you need help, call.', 'Open, polite condition'],
              [
                'But for / Had it not been for',
                "But for the rain, we'd have finished.",
                'Single decisive cause',
              ],
            ],
          },
        ],
        examples: [
          {
            en: "If I hadn't taken that job, I'd never have met you.",
          },
          {
            en: "Were it not for the deadline, I'd rewrite the whole thing.",
          },
          {
            en: 'Provided that funding holds, the trial will continue.',
          },
          {
            en: 'Suppose the witness had lied — how would we ever know?',
          },
          {
            en: "I'd be lying if I said I wasn't tempted.",
          },
          {
            en: 'Unless attitudes shift, the policy is doomed.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would have helped.',
            right: 'If I had known, I would have helped.',
            why: "Don't put 'would' in the 'if'-clause; use the past perfect for the condition.",
          },
          {
            wrong: "Unless you don't hurry, we'll miss it.",
            right: "Unless you hurry, we'll miss it.",
            why: "'Unless' already means 'if not', so adding a negative creates a double negative.",
          },
          {
            wrong: 'If I had studied harder, I would be passed the exam.',
            right: 'If I had studied harder, I would have passed the exam.',
            why: "A past unreal result needs 'would have + past participle', not 'would be + participle'.",
          },
          {
            wrong: 'Had not we left, we would have been caught.',
            right: 'Had we not left, we would have been caught.',
            why: "In inversion the negative follows the subject: 'Had we not left'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-cn-ex1',
            prompt: 'Choose the correct sentence.',
            options: [
              'If I would have seen it, I would have told you.',
              'If I saw it, I would have told you.',
              'If I had seen it, I would have told you.',
              'If I had seen it, I would told you.',
            ],
            answer: 2,
            explain: "The condition takes the past perfect, never 'would have'.",
          },
          {
            kind: 'mcq',
            id: 'c2-cn-ex2',
            prompt: "If we'd booked earlier, we ___ sitting together now.",
            options: ['will be', 'would be', 'would have been', 'are'],
            answer: 1,
            explain: "Mixed conditional: past condition, present result with 'would be'.",
          },
          {
            kind: 'order',
            id: 'c2-cn-ex3',
            tokens: ['Had', 'we', 'not', 'intervened', 'the', 'fire', 'would', 'have', 'spread'],
            answer: 'Had we not intervened the fire would have spread',
            explain: "Inverted third conditional with 'not' after the subject.",
          },
          {
            kind: 'mcq',
            id: 'c2-cn-ex5',
            prompt: 'Choose the most remote, hypothetical phrasing.',
            options: [
              'If you ask me to leave, I will.',
              'If you asked me to leave, I would.',
              'If you were to ask me to leave, I would.',
              'If you have asked me to leave, I have.',
            ],
            answer: 2,
            explain: "'Were to ask' adds extra distance and hypotheticality.",
          },
          {
            kind: 'mcq',
            id: 'c2-cn-ex6',
            prompt: '___ you require assistance, our team is available around the clock.',
            options: ['Were', 'Had', 'Would', 'Should'],
            answer: 3,
            explain: "'Should you require...' is an inverted, formal open condition.",
          },
          {
            kind: 'mcq',
            id: 'c2-cn-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Was it not for one stubborn juror, the verdict would have been unanimous.',
              'Were it not for one stubborn juror, the verdict would have been unanimous.',
              'Were it not for one stubborn juror, the verdict would be unanimous.',
              'Were it not for one stubborn juror, the verdict would have been anonymous.',
            ],
            answer: 1,
            audio: 'Were it not for one stubborn juror, the verdict would have been unanimous.',
            explain:
              "Inverted 'Were it not for' introduces a single decisive counterfactual cause.",
          },
        ],
      },
      {
        id: 'c2-impersonal-passive',
        level: 'C2',
        title: 'Impersonal & Distancing Passives',
        summary:
          "Formal English distances the writer from claims using impersonal passives, reporting passives and 'it'-structures. This lesson covers the 'It is said that...' / 'He is said to...' patterns, 'there'-passives, get-passives and how agentless passives manage responsibility, objectivity and tact.",
        sections: [
          {
            heading: 'Reporting passives: distancing a claim',
            body: "To report opinions without committing to them, English uses two parallel **reporting passive** patterns. The **impersonal 'it'-passive**: 'It is said/believed/thought/alleged that he resigned'. The **personal subject-raising passive**: 'He is said/believed to have resigned'. Both attribute the claim to an unnamed source, signalling caution and objectivity — indispensable in journalism, academia and diplomacy.",
            examples: [
              {
                en: 'It is widely believed that the figures were inflated.',
              },
              {
                en: 'The minister is alleged to have misled parliament.',
              },
            ],
          },
          {
            heading: "Agentless and 'there'-passives for objectivity",
            body: "The **agentless passive** omits the doer when it is unknown, obvious or tactfully suppressed: 'Mistakes were made', 'The samples were contaminated'. This is a classic device for **avoiding blame** or keeping focus on the process. The **'there'-passive** ('There is thought to be a link', 'There appears to have been a breach') combines existential 'there' with reporting verbs for maximum impersonality.",
            examples: [
              {
                en: 'There is said to be growing unease among investors.',
              },
              {
                en: 'Errors were overlooked during the review.',
              },
            ],
          },
          {
            heading: 'Get-passives and tactful framing',
            body: "The **get-passive** ('She got promoted', 'He got caught') is informal and often implies that the subject was affected, sometimes adversely or by their own involvement. Compare neutral 'be'-passives with the more dynamic, conversational 'get'. For tact, the passive lets you raise a sensitive point without naming an agent: 'It has been suggested that the report be revised' softens criticism into an impersonal proposal.",
            examples: [
              {
                en: "He got fired for something he didn't do.",
              },
              {
                en: 'It has been suggested that standards be tightened.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reporting passive transformations',
            columns: ['Active claim', 'Impersonal it-passive', 'Personal passive'],
            rows: [
              ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
              [
                'They believe she left.',
                'It is believed that she left.',
                'She is believed to have left.',
              ],
              [
                'Experts expect prices to fall.',
                'It is expected that prices will fall.',
                'Prices are expected to fall.',
              ],
              [
                'Sources allege fraud occurred.',
                'It is alleged that fraud occurred.',
                'Fraud is alleged to have occurred.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'It is understood that talks will resume next week.',
          },
          {
            en: 'The painting is thought to date from the 1600s.',
          },
          {
            en: 'There are reported to be hundreds still missing.',
          },
          {
            en: 'Concerns have been raised about the methodology.',
          },
          {
            en: 'She is rumoured to be stepping down.',
          },
          {
            en: 'Nothing was decided at the meeting.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It is said he to be very wealthy.',
            right: 'He is said to be very wealthy.',
            why: "Mixing the two patterns is wrong; choose either 'It is said that he is...' or 'He is said to be...'.",
          },
          {
            wrong: 'He is believed to has left the country.',
            right: 'He is believed to have left the country.',
            why: "After 'to' use the bare infinitive 'have', and for a past action use the perfect infinitive 'to have left'.",
          },
          {
            wrong: 'It was suggested that the report is revised.',
            right: 'It was suggested that the report be revised.',
            why: "After 'suggest that' in formal English, use the subjunctive base form 'be revised'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ip-ex1',
            prompt: "Rewrite 'People believe the company is insolvent' as a personal passive.",
            options: [
              'It believes the company to be insolvent.',
              'The company is believed to be insolvent.',
              'The company believes to be insolvent.',
              'It is believed the company to be insolvent.',
            ],
            answer: 1,
            explain: "Subject-raising passive: 'The company is believed to be insolvent.'",
          },
          {
            kind: 'mcq',
            id: 'c2-ip-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'The suspect is said to have fled abroad.',
              'The suspect is said to has fled abroad.',
              'The suspect is said to have flee abroad.',
              'The suspect is said have fled abroad.',
            ],
            answer: 0,
            explain: "Use the perfect infinitive 'to have fled' for a past action.",
          },
          {
            kind: 'mcq',
            id: 'c2-ip-ex3',
            prompt: 'It is widely ___ that interest rates will rise again.',
            options: ['convinced', 'informed', 'expected', 'aware'],
            answer: 2,
            explain: "An impersonal reporting passive with 'it' plus a reporting verb.",
          },
          {
            kind: 'order',
            id: 'c2-ip-ex5',
            tokens: ['There', 'is', 'thought', 'to', 'be', 'a', 'connection'],
            answer: 'There is thought to be a connection',
            explain: "Existential 'there' combines with a reporting passive for impersonality.",
          },
          {
            kind: 'mcq',
            id: 'c2-ip-ex6',
            prompt: 'Which sentence most clearly avoids assigning blame?',
            options: [
              'The technician broke the machine.',
              'Mistakes were made.',
              'You broke the machine.',
              'I blame the technician.',
            ],
            answer: 1,
            explain: "The agentless passive 'Mistakes were made' suppresses the responsible party.",
          },
          {
            kind: 'mcq',
            id: 'c2-ip-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'The chief executive is alleged to have approved the payment personally.',
              'The chief executive is alleged to approve the payments personally.',
              'The chief executive is alleged to have approved the payments in person.',
              'The chief executive is alleged to have approved the payments personally.',
            ],
            answer: 3,
            audio: 'The chief executive is alleged to have approved the payments personally.',
            explain:
              'A personal reporting passive with the perfect infinitive distances the claim.',
          },
        ],
      },
      {
        id: 'c2-discourse-ellipsis-word-order',
        level: 'C2',
        title: 'Discourse Markers, Ellipsis & Marked Word Order',
        summary:
          'Cohesive, rhetorically effective English depends on signposting, leaving out the recoverable, and rearranging elements for emphasis. This lesson covers the full range of discourse markers, ellipsis and substitution, and marked word order such as fronting and right-dislocation.',
        sections: [
          {
            heading: 'Discourse markers and signposting',
            body: "**Discourse markers** organise text and signal the speaker's stance. Beyond 'however' and 'therefore', master **contrastive** ('then again', 'that said', 'mind you'), **reinforcing** ('what is more', 'indeed', 'not least'), **conceding** ('admittedly', 'granted', 'to be fair'), **reformulating** ('that is to say', 'in other words', 'or rather') and **focusing** ('as for', 'with regard to', 'incidentally'). Their position and intonation carry as much meaning as their literal sense.",
            examples: [
              {
                en: 'The plan is bold; that said, it is far from foolproof.',
              },
              {
                en: 'She was late — not that anyone minded.',
              },
            ],
          },
          {
            heading: 'Ellipsis and substitution',
            body: "**Ellipsis** omits words recoverable from context, avoiding repetition: 'She can sing and (she can) dance'; 'I haven't finished, but I will (finish) soon'. **Substitution** replaces a repeated element with 'so', 'do', 'one' or 'not': 'Is it raining? — I think so / I hope not'; 'I need a pen — take this one'. Used well, these create lean, cohesive, natural-sounding discourse; overused or misjudged, they obscure meaning.",
            examples: [
              {
                en: "Some agreed, others didn't.",
              },
              {
                en: 'You could apologise — I would, if I were you.',
              },
            ],
          },
          {
            heading: 'Marked word order: fronting and dislocation',
            body: "Shifting elements out of canonical order signals emphasis or contrast. **Fronting** moves an object or complement to the start: 'That I can't accept', 'Brilliant, the whole thing was'. **Left-dislocation** announces a topic then resumes it with a pronoun: 'My neighbour, she never stops complaining'. **Right-dislocation** adds an afterthought tag: 'They're hopeless, those two'. These are stylistic and largely spoken or informal, prized for their rhetorical punch.",
            examples: [
              {
                en: 'His arrogance, I simply cannot stomach.',
              },
              {
                en: "It's a clever idea, that.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Discourse markers by function',
            columns: ['Function', 'Markers', 'Example'],
            rows: [
              [
                'Contrast / concession',
                'that said, then again, mind you, admittedly',
                'Admittedly, the costs are high.',
              ],
              ['Reinforcement', 'what is more, indeed, not least', "What is more, it's cheaper."],
              [
                'Reformulation',
                'that is to say, in other words, or rather',
                "He's frugal, or rather, mean.",
              ],
              [
                'Topic shift / focus',
                'as for, with regard to, incidentally',
                'As for the budget, that can wait.',
              ],
              ['Summing up', 'all in all, on balance, in short', 'All in all, a fair result.'],
            ],
          },
        ],
        examples: [
          {
            en: 'On balance, the benefits outweigh the risks.',
          },
          {
            en: 'I asked her to help, and help she did.',
          },
          {
            en: 'Will it work? Frankly, I doubt it.',
          },
          {
            en: "He said he'd call, but he hasn't.",
          },
          {
            en: 'As for the others, they can wait their turn.',
          },
          {
            en: 'A genius, that man.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Is she coming? — I think yes.',
            right: 'Is she coming? — I think so.',
            why: "English substitutes a positive clause with 'so' after verbs like think/hope/believe, not with 'yes'.",
          },
          {
            wrong: 'I hope no, the meeting is cancelled.',
            right: 'I hope not. — or — I hope so, the meeting is cancelled.',
            why: "The negative substitute is 'not' ('I hope not'), and the clause should match the intended meaning.",
          },
          {
            wrong: 'She can sing and she can to dance.',
            right: 'She can sing and dance.',
            why: "After the shared modal 'can', ellipsis removes the repeated subject and modal; no 'to' appears.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-de-ex1',
            prompt: "Complete: 'Will they accept? — I doubt ___.'",
            options: ['it', 'so', 'that', 'yes'],
            answer: 0,
            explain: "'Doubt' takes 'it' as the substitute object: 'I doubt it.'",
          },
          {
            kind: 'mcq',
            id: 'c2-de-ex2',
            prompt: 'The proposal is risky; that ___, it may be our only option.',
            options: ['spoken', 'said', 'told', 'meant'],
            answer: 1,
            explain: "'That said' is a concessive discourse marker introducing a counterpoint.",
          },
          {
            kind: 'mcq',
            id: 'c2-de-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'Do you think it will rain? — I think yes.',
              'Do you think it will rain? — I so think.',
              'Do you think it will rain? — I think so.',
              'Do you think it will rain? — I think it.',
            ],
            answer: 2,
            explain: "Use 'so' to substitute a positive clause after 'think'.",
          },
          {
            kind: 'order',
            id: 'c2-de-ex4',
            tokens: ['His', 'behaviour', 'I', 'cannot', 'condone'],
            answer: 'His behaviour I cannot condone',
            explain: "Fronting the object 'his behaviour' for emphasis.",
          },
          {
            kind: 'mcq',
            id: 'c2-de-ex6',
            prompt: 'Which marker best signals a reformulation?',
            options: ['what is more', 'in other words', 'as for', 'all in all'],
            answer: 1,
            explain: "'In other words' reformulates a previous statement.",
          },
          {
            kind: 'mcq',
            id: 'c2-de-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Admittedly, the evidence is thin, but the conclusion still holds.',
              'Admittedly, the evidence is thin, and the conclusion still holds.',
              'Admittedly, the evidence is thin, but the conclusion still hold.',
              'Admittedly, the evidence was thin, but the conclusion still holds.',
            ],
            answer: 0,
            audio: 'Admittedly, the evidence is thin, but the conclusion still holds.',
            explain: "'Admittedly' concedes a point before the main contrast with 'but'.",
          },
        ],
      },
      {
        id: 'c2-idiom-collocation-register',
        level: 'C2',
        title: 'Idiom, Collocation & Register Control',
        summary:
          'Sounding native means choosing the word that naturally co-occurs, judging connotation, and matching register to context. This lesson sharpens collocation, idiomatic phrasing, the formal-informal scale and the control of positive, negative and neutral connotation.',
        sections: [
          {
            heading: 'Collocation: words that travel together',
            body: "**Collocations** are conventional word partnerships that native speakers expect: you 'make a decision' but 'do your homework'; rain is 'heavy', not 'strong'; an argument is 'compelling', a need 'pressing', a resemblance 'striking'. Strong **verb + noun**, **adjective + noun** and **adverb + adjective** pairings ('bitterly disappointed', 'highly unlikely') are the fingerprint of fluency. Knowing the dictionary meaning is not enough; you must know the company a word keeps.",
            examples: [
              {
                en: 'The proposal met with strong opposition.',
              },
              {
                en: "I'm bitterly disappointed by the outcome.",
              },
            ],
          },
          {
            heading: 'Idiom and figurative phrasing',
            body: "**Idioms** carry meaning that cannot be read off their parts: 'to bite the bullet', 'a blessing in disguise', 'the elephant in the room'. At C2 the skill is not just understanding them but deploying them aptly and sparingly, and recognising their register — many idioms are informal or even slangy, and a misjudged one in a formal report jars. Beware of translating idioms literally between languages; the imagery rarely transfers.",
            examples: [
              {
                en: 'Cutting the budget now would be a false economy.',
              },
              {
                en: "Let's not beat around the bush.",
              },
            ],
          },
          {
            heading: 'Register and connotation',
            body: "**Register** is the formality scale: 'kids' (informal) / 'children' (neutral) / 'offspring' (formal/technical); 'buy' / 'purchase' / 'procure'. **Connotation** is the emotional colour: 'thrifty' (positive), 'frugal' (neutral), 'stingy' (negative) all describe carefulness with money. Mastery means selecting the term whose register and connotation fit your audience and intent — and noticing when a near-synonym would insult, flatter or sound out of place.",
            examples: [
              {
                en: "He's not assertive, he's downright aggressive.",
              },
              {
                en: 'We would be grateful if you could expedite the matter.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Connotation across near-synonyms',
            columns: ['Negative', 'Neutral', 'Positive'],
            rows: [
              ['stingy', 'frugal', 'thrifty'],
              ['pushy', 'assertive', 'confident'],
              ['stubborn', 'firm', 'determined'],
              ['nosy', 'curious', 'inquisitive'],
              ['childish', 'youthful', 'young at heart'],
              ['cunning', 'clever', 'shrewd'],
            ],
          },
          {
            caption: 'Register scale of common words',
            columns: ['Informal', 'Neutral', 'Formal'],
            rows: [
              ['kids', 'children', 'offspring'],
              ['buy', 'buy', 'purchase / procure'],
              ['get', 'receive', 'obtain'],
              ['ask for', 'request', 'solicit'],
              ['put off', 'postpone', 'defer'],
              ['a lot of', 'many / much', 'a great deal of'],
            ],
          },
        ],
        examples: [
          {
            en: 'The talks reached a deadlock.',
          },
          {
            en: 'She paid a heavy price for her honesty.',
          },
          {
            en: 'Kindly refrain from smoking on the premises.',
          },
          {
            en: "That's a wild guess at best.",
          },
          {
            en: 'We must address the elephant in the room.',
          },
          {
            en: 'His remarks were utterly tactless.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It was raining strongly all day.',
            right: 'It was raining heavily all day.',
            why: "Rain collocates with 'heavily/hard', not 'strongly'.",
          },
          {
            wrong: 'I made my homework before dinner.',
            right: 'I did my homework before dinner.',
            why: "'Homework' collocates with 'do', not 'make' — English splits into two verbs where many languages use one.",
          },
          {
            wrong: 'The manager is very stubborn about quality, which we admire.',
            right: 'The manager is very determined about quality, which we admire.',
            why: "'Stubborn' carries a negative connotation that clashes with the praise; 'determined' fits.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ic-ex1',
            prompt: "Which adverb collocates best: '___ disappointed'?",
            options: ['strongly', 'bitterly', 'highly', 'deeply'],
            answer: 1,
            explain: "'Bitterly disappointed' is the established collocation.",
          },
          {
            kind: 'mcq',
            id: 'c2-ic-ex2',
            prompt: 'The new evidence is highly ___, so the case may collapse.',
            options: ['unlikely', 'false', 'weak', 'poor'],
            answer: 0,
            explain: "'Highly + adjective' is a strong adverb-adjective collocation.",
          },
          {
            kind: 'mcq',
            id: 'c2-ic-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'We must make a decision and do an effort.',
              'We must do a decision and make an effort.',
              'We must make a decision and made an effort.',
              'We must make a decision and make an effort.',
            ],
            answer: 3,
            explain: "'Effort' collocates with 'make' (or 'put in'), not 'do'.",
          },
          {
            kind: 'mcq',
            id: 'c2-ic-ex5',
            prompt: 'Which word has a positive connotation?',
            options: ['stingy', 'nosy', 'thrifty', 'pushy'],
            answer: 2,
            explain: "'Thrifty' praises careful spending; the others are negative.",
          },
          {
            kind: 'order',
            id: 'c2-ic-ex6',
            tokens: ["let's", 'not', 'beat', 'around', 'the', 'bush'],
            answer: "let's not beat around the bush",
            explain: "The idiom means 'get straight to the point'.",
          },
          {
            kind: 'mcq',
            id: 'c2-ic-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              'Cutting corners now will prove a false economy in the long run.',
              'Cutting corners now would prove a false economy in the long term.',
              'Cutting corners now would prove a false economy in the long run.',
              'Cutting corners now would prove a false economy over the long run.',
            ],
            answer: 2,
            audio: 'Cutting corners now would prove a false economy in the long run.',
            explain:
              "'Cut corners' and 'false economy' are idiomatic collocations about saving badly.",
          },
        ],
      },
      {
        id: 'c2-modality-hedging-irony',
        level: 'C2',
        title: 'Modality, Hedging, Irony & Figurative Language',
        summary:
          'Sophisticated English signals exactly how committed you are to a claim and layers tone beneath the literal words. This lesson covers nuanced epistemic and deontic modality, hedging and boosting, understatement and overstatement, and irony, metaphor and other figurative devices.',
        sections: [
          {
            heading: 'Nuanced modality and hedging',
            body: "**Epistemic modality** grades certainty: 'must' (confident deduction) > 'should/ought to' (expectation) > 'may/might/could' (open possibility). **Hedging** softens claims to sound cautious and academic: 'it would appear that', 'this may suggest', 'arguably', 'to some extent', 'tend to', 'somewhat'. **Boosting** does the opposite ('clearly', 'undoubtedly', 'it is evident that'). Calibrating these protects your credibility — over-claiming invites rebuttal, over-hedging sounds evasive.",
            examples: [
              {
                en: 'The data would seem to suggest a modest correlation.',
              },
              {
                en: 'This must be the single most important factor.',
              },
            ],
          },
          {
            heading: 'Understatement, overstatement and irony',
            body: "Tone often diverges from literal meaning. **Understatement (litotes)** says less than is meant for effect, frequently with double negatives: 'not bad at all' (= excellent), 'it's not exactly cheap' (= very expensive). **Overstatement (hyperbole)** exaggerates ('I've told you a thousand times'). **Irony** states the opposite of what is meant, signalled by context or intonation: 'Lovely weather!' in a downpour. These devices are deeply cultural; reading the cue, not just the words, is the C2 challenge.",
            examples: [
              {
                en: 'The exam was not exactly a walk in the park.',
              },
              {
                en: 'Oh, brilliant — another delay.',
              },
            ],
          },
          {
            heading: 'Metaphor and figurative language',
            body: "**Figurative language** maps one domain onto another. **Metaphor** asserts an identity ('the economy is overheating'); **simile** uses 'like/as' ('spread like wildfire'); **metonymy** names by association ('Downing Street denied it'); **personification** gives human traits to ideas ('the report claims...'). Much everyday English is quietly metaphorical, especially 'time is money', 'argument is war' and journeys-as-life. Recognising and extending these patterns lets you write vividly and read between the lines.",
            examples: [
              {
                en: 'Criticism rained down on the proposal.',
              },
              {
                en: 'The White House issued a statement.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Hedging and boosting devices',
            columns: ['Function', 'Devices', 'Effect'],
            rows: [
              ['Strong hedge', 'it would appear, arguably, conceivably', 'Very tentative'],
              ['Mild hedge', 'tend to, somewhat, to some extent, fairly', 'Cautious'],
              ['Neutral', 'is, shows, indicates', 'Plain claim'],
              ['Mild boost', 'indeed, in fact, certainly', 'Reinforced'],
              ['Strong boost', 'clearly, undoubtedly, it is evident that', 'Highly assertive'],
            ],
          },
        ],
        examples: [
          {
            en: 'One could argue that the policy was, at best, short-sighted.',
          },
          {
            en: "She's not unintelligent — quite the opposite.",
          },
          {
            en: "Well, that went brilliantly, didn't it?",
          },
          {
            en: 'Support for the bill is evaporating fast.',
          },
          {
            en: 'It might be argued, somewhat tentatively, that the trend is reversing.',
          },
          {
            en: 'Brussels has yet to comment.',
          },
        ],
        pitfalls: [
          {
            wrong: "It must be raining, but I'm not sure.",
            right: "It might be raining, but I'm not sure.",
            why: "'Must' expresses confident deduction, which clashes with 'I'm not sure'; use 'might/could'.",
          },
          {
            wrong: 'The results are not bad, they are very good. (meant as litotes)',
            right: 'The results are not bad at all.',
            why: 'Litotes works by leaving the positive implied; spelling it out destroys the understatement.',
          },
          {
            wrong: 'I have told you thousand times.',
            right: "I've told you a thousand times.",
            why: "The hyperbolic 'a thousand times' needs the article 'a'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-mh-ex1',
            prompt: 'Which expresses the strongest certainty?',
            options: [
              'It might be the cause.',
              'It could be the cause.',
              'It must be the cause.',
              'It may be the cause.',
            ],
            answer: 2,
            explain: "'Must' signals confident deduction; the others are open possibility.",
          },
          {
            kind: 'mcq',
            id: 'c2-mh-ex2',
            prompt: 'The findings would ___ to support the hypothesis, though more data is needed.',
            options: ['appears', 'appear', 'appeared', 'appearing'],
            answer: 1,
            explain: "'Would appear/seem to' is a classic hedge softening the claim.",
          },
          {
            kind: 'mcq',
            id: 'c2-mh-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'It must be true, although I have no idea really.',
              'It might be true, although I have no idea really.',
              'It will be true, although I have no idea really.',
              'It should be true, although I have no idea really.',
            ],
            answer: 1,
            explain: "Confident 'must' contradicts the admitted uncertainty; use 'might/could'.",
          },
          {
            kind: 'mcq',
            id: 'c2-mh-ex5',
            prompt: "'Downing Street refused to comment.' This is an example of:",
            options: ['simile', 'metonymy', 'litotes', 'hyperbole'],
            answer: 1,
            explain: 'Metonymy names the UK government by its associated location.',
          },
          {
            kind: 'order',
            id: 'c2-mh-ex6',
            tokens: ['one', 'could', 'arguably', 'say', 'the', 'plan', 'backfired'],
            answer: 'one could arguably say the plan backfired',
            explain: "Stacked hedges 'could' and 'arguably' make the claim cautious.",
          },
          {
            kind: 'mcq',
            id: 'c2-mh-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "Well, that's just what we needed today, isn't it?",
              "Well, that's just what we needed today, wasn't it?",
              "Well, that's just what we need today, isn't it?",
              "Well, that's just what we wanted today, isn't it?",
            ],
            answer: 0,
            audio: "Well, that's just what we needed today, isn't it?",
            explain:
              'An ironic remark: the literal praise conveys the opposite, reinforced by the tag question.',
          },
        ],
      },
      {
        id: 'c2-self-repair-restructuring',
        level: 'C2',
        title: 'Self-Repair & Restructuring Strategies',
        summary:
          'Fluent speakers do not produce flawless first drafts; they monitor, repair and restructure their speech in real time without losing the listener. This lesson covers reformulation, false starts, repair markers, hesitation and filler management, and elegant ways to recover and reframe mid-sentence.',
        sections: [
          {
            heading: 'Reformulation and self-correction',
            body: "When the first wording misfires, fluent speakers **reformulate** with a marker rather than starting over: 'or rather', 'or should I say', 'what I mean is', 'let me rephrase that', 'to put it another way'. To correct a factual slip mid-flow, use 'sorry, I meant...', 'that is to say...', or 'or, more precisely...'. The repair is signalled clearly so the listener updates smoothly, and the flow is preserved rather than broken.",
            examples: [
              {
                en: 'It costs around fifty — or rather, fifty-five — euros.',
              },
              {
                en: "He's the director — well, the acting director, to be precise.",
              },
            ],
          },
          {
            heading: 'Managing hesitation and buying time',
            body: "To think without surrendering the floor, deploy **fillers and hedges** strategically: 'well', 'I mean', 'you know', 'sort of', 'kind of', 'how shall I put it', 'the thing is'. Longer **time-buying phrases** ('that's a good question', 'let me think for a moment', 'where do I begin') hold the turn during planning. Used sparingly these sound natural and thoughtful; overused they sound vague, so vary them and keep them short.",
            examples: [
              {
                en: "That's, how shall I put it, an unconventional approach.",
              },
              {
                en: 'The thing is, we simply ran out of time.',
              },
            ],
          },
          {
            heading: 'Restructuring a sentence in flight',
            body: "Sometimes a sentence heads into a grammatical dead end; the elegant fix is to **abandon and restart the structure** smoothly. Use an **anacoluthon repair** ('The reason we failed — well, what really happened was...') or recast a clause: 'If they had — no, let me start again — the decision was never theirs to make.' Skilled speakers also **embed** an afterthought ('the report, and this is crucial, was never finished') rather than tacking on a clumsy correction.",
            examples: [
              {
                en: 'We need to — actually, let me back up a second.',
              },
              {
                en: "The plan, and I can't stress this enough, depends on funding.",
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Repair and restructuring markers',
            columns: ['Function', 'Markers', 'Example'],
            rows: [
              [
                'Reformulate',
                'or rather, what I mean is, that is to say',
                "It's cheap — or rather, affordable.",
              ],
              [
                'Correct a slip',
                'sorry, I meant; more precisely',
                'On Monday — sorry, I meant Tuesday.',
              ],
              ['Buy time', 'well, the thing is, let me think', 'Let me think for a moment.'],
              [
                'Restart / recast',
                'let me start again, let me back up',
                'Let me back up a second.',
              ],
              [
                'Embed emphasis',
                'and this is crucial, mind you',
                'It failed, and this is key, quietly.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'She arrived on the tenth — no, sorry, the twelfth.',
          },
          {
            en: "What I'm trying to say is that timing is everything.",
          },
          {
            en: "It's a bold move — or foolhardy, depending on your view.",
          },
          {
            en: "Let me rephrase that so it's clearer.",
          },
          {
            en: "The issue, and I'll come back to this, is trust.",
          },
          {
            en: "Where do I begin? Well, it's complicated.",
          },
        ],
        pitfalls: [
          {
            wrong: 'I want to say, eh, that, eh, the plan, eh, is good.',
            right: 'What I want to say is that the plan is good.',
            why: 'Strings of meaningless fillers signal a stall; a single clear reformulation marker is far more fluent.',
          },
          {
            wrong: 'It is cheap, I mean it, the price is low.',
            right: "It's cheap — or rather, it's good value for the price.",
            why: "'I mean it' asserts sincerity; to reformulate, use 'I mean' or 'or rather' to introduce the corrected wording.",
          },
          {
            wrong: 'Let me say it again from the start the whole sentence.',
            right: 'Let me start again.',
            why: 'A short, idiomatic restart marker is clearer than a literal, overloaded one.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-sr-ex1',
            prompt: 'Which best introduces a reformulation of what you just said?',
            options: ['I mean it.', 'Or rather,', 'Full stop.', 'As usual,'],
            answer: 1,
            explain:
              "'Or rather' signals you are replacing the previous wording with a better one.",
          },
          {
            kind: 'mcq',
            id: 'c2-sr-ex2',
            prompt: "He's the manager — well, the ___ manager, to be precise.",
            options: ['future', 'former', 'acting', 'current'],
            answer: 2,
            explain: 'An embedded self-correction refines the first, looser label.',
          },
          {
            kind: 'mcq',
            id: 'c2-sr-ex3',
            prompt: 'Choose the correct sentence.',
            options: [
              'The meeting is on Monday, sorry I want to say Tuesday.',
              'The meeting is on Monday — sorry, I mean Tuesday.',
              'The meeting is on Monday — sorry, I mean saying Tuesday.',
              'The meeting is on Monday — sorry, I want say Tuesday.',
            ],
            answer: 1,
            explain: "Use 'I mean', not 'I want to say', to correct a factual slip.",
          },
          {
            kind: 'order',
            id: 'c2-sr-ex5',
            tokens: ['let', 'me', 'rephrase', 'that', 'for', 'clarity'],
            answer: 'let me rephrase that for clarity',
            explain: 'A clear restart marker that keeps the listener on track.',
          },
          {
            kind: 'mcq',
            id: 'c2-sr-ex6',
            prompt: 'Which phrase elegantly buys thinking time?',
            options: [
              "That's a good question — let me think for a moment.",
              'Eh, eh, eh.',
              "I don't know anything.",
              'Stop asking me.',
            ],
            answer: 0,
            explain: "'That's a good question, let me think' holds the turn while you plan.",
          },
          {
            kind: 'mcq',
            id: 'c2-sr-ex7',
            prompt: 'Which sentence did you hear?',
            options: [
              "The proposal is cheap — or rather, it's remarkable good value.",
              "The proposal was cheap — or rather, it's remarkably good value.",
              'The proposal is cheap — or rather, it was remarkably good value.',
              "The proposal is cheap — or rather, it's remarkably good value.",
            ],
            answer: 3,
            audio: "The proposal is cheap — or rather, it's remarkably good value.",
            explain: "A dash plus 'or rather' introduces a smoother, upgraded reformulation.",
          },
        ],
      },
    ],
  },
];
