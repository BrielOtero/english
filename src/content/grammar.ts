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
          'The verb **to be** is the most important verb in English. Use **am**, **is**, and **are** to describe people and things, and to give your name, age, job, and feelings. English needs the verb in every sentence, even where Spanish leaves it out.',
        summaryEs:
          'El verbo **to be** es el verbo más importante del inglés. Usa **am**, **is** y **are** para describir personas y cosas, y para dar tu nombre, edad, trabajo y sentimientos. El inglés necesita el verbo en cada frase, aunque el español a veces lo omita.',
        sections: [
          {
            heading: 'Forms and contractions',
            body: "Use **I am**, **he/she/it is**, and **we/you/they are**. In speaking and informal writing we use **contractions**: I'm, he's, she's, it's, we're, you're, they're. Both the long and short forms are correct.",
            bodyEs:
              "Usa **I am**, **he/she/it is** y **we/you/they are**. Al hablar y en escritura informal usamos **contracciones**: I'm, he's, she's, it's, we're, you're, they're. Tanto la forma larga como la corta son correctas.",
            examples: [
              {
                en: "I am a teacher. / I'm a teacher.",
                es: 'Soy profesor.',
              },
              {
                en: "She is from Spain. / She's from Spain.",
                es: 'Ella es de España.',
              },
              {
                en: "We are happy. / We're happy.",
                es: 'Estamos contentos.',
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "For the **negative**, add **not**: I am not, she is not (isn't), they are not (aren't). For **questions**, put the verb first: **Are you ready? Is he here?** Short answers keep the verb: **Yes, I am. / No, she isn't.**",
            bodyEs:
              "Para el **negativo**, añade **not**: I am not, she is not (isn't), they are not (aren't). Para las **preguntas**, pon el verbo primero: **Are you ready? Is he here?** Las respuestas cortas mantienen el verbo: **Yes, I am. / No, she isn't.**",
            examples: [
              {
                en: "I'm not tired.",
                es: 'No estoy cansado.',
              },
              {
                en: 'Are you a student? Yes, I am.',
                es: '¿Eres estudiante? Sí, lo soy.',
              },
              {
                en: "It isn't cold today.",
                es: 'Hoy no hace frío.',
              },
            ],
          },
          {
            heading: 'Talking about age and feelings',
            body: 'English uses **be** for age and many states where Spanish uses *tener*: **I am 20** (not *I have 20*). We also use **be** with hungry, thirsty, cold, hot, right, and afraid.',
            bodyEs:
              'El inglés usa **be** para la edad y muchos estados donde el español usa *tener*: **I am 20** (no *I have 20*). También usamos **be** con hungry, thirsty, cold, hot, right y afraid.',
            examples: [
              {
                en: "How old are you? I'm thirty.",
                es: '¿Cuántos años tienes? Tengo treinta.',
              },
              {
                en: "I'm hungry and thirsty.",
                es: 'Tengo hambre y sed.',
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
            es: 'Me llamo Ana.',
          },
          {
            en: 'They are my friends.',
            es: 'Son mis amigos.',
          },
          {
            en: "He isn't at home.",
            es: 'Él no está en casa.',
          },
          {
            en: "Is it expensive? No, it isn't.",
            es: '¿Es caro? No, no lo es.',
          },
          {
            en: "We're from Mexico.",
            es: 'Somos de México.',
          },
          {
            en: "I'm not afraid of dogs.",
            es: 'No tengo miedo a los perros.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have 25 years.',
            right: 'I am 25 (years old).',
            why: 'English uses the verb to be for age, not have.',
            esNote: "Para la edad se usa 'be', no 'have': I am 25.",
          },
          {
            wrong: 'She teacher.',
            right: 'She is a teacher.',
            why: 'Every English sentence needs a verb; you cannot drop is.',
            esNote: "No se puede omitir el verbo: 'She is a teacher'.",
          },
          {
            wrong: 'I am agree with you.',
            right: 'I agree with you.',
            why: 'Agree is a normal verb, so it does not take be.',
            esNote: "'Agree' es un verbo: 'I agree', no 'I am agree'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-be-ex1',
            before: 'She ',
            after: ' a doctor.',
            answers: ['is', "'s"],
            hint: 'third person singular',
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
            kind: 'correct',
            id: 'a1-be-ex3',
            wrong: 'I have 30 years.',
            answers: ['I am 30.', "I'm 30.", 'I am 30 years old.', "I'm 30 years old."],
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
            kind: 'translate',
            id: 'a1-be-ex5',
            es: 'No estoy cansado.',
            answers: ["I'm not tired.", 'I am not tired.'],
            explain: 'Negative of be: am not.',
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
            kind: 'dictation',
            id: 'a1-be-ex7',
            text: "We aren't at school today.",
            explain: "aren't is the contraction of are not.",
          },
        ],
      },
      {
        id: 'a1-there-is-there-are',
        level: 'A1',
        title: 'There is / There are',
        summary:
          'Use **there is** and **there are** to say that something **exists** or is present in a place. Use **there is** with singular nouns and **there are** with plural nouns. This structure is like the Spanish *hay*.',
        summaryEs:
          'Usa **there is** y **there are** para decir que algo **existe** o está presente en un lugar. Usa **there is** con sustantivos singulares y **there are** con plurales. Esta estructura equivale al *hay* del español.',
        sections: [
          {
            heading: 'Singular and plural',
            body: "**There is** (there's) introduces one thing; **There are** introduces more than one. With uncountable nouns like water or money we use **there is**.",
            bodyEs:
              "**There is** (there's) introduce una cosa; **There are** introduce más de una. Con sustantivos incontables como water o money usamos **there is**.",
            examples: [
              {
                en: 'There is a book on the table.',
                es: 'Hay un libro en la mesa.',
              },
              {
                en: 'There are three chairs in the room.',
                es: 'Hay tres sillas en la habitación.',
              },
              {
                en: 'There is some milk in the fridge.',
                es: 'Hay algo de leche en la nevera.',
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "Negative: **There isn't / There aren't**. Question: **Is there...? / Are there...?** We often use **any** in questions and negatives with plural or uncountable nouns.",
            bodyEs:
              "Negativo: **There isn't / There aren't**. Pregunta: **Is there...? / Are there...?** A menudo usamos **any** en preguntas y negativos con sustantivos plurales o incontables.",
            examples: [
              {
                en: "There isn't a problem.",
                es: 'No hay ningún problema.',
              },
              {
                en: 'Are there any shops near here?',
                es: '¿Hay tiendas cerca de aquí?',
              },
              {
                en: "There aren't any eggs.",
                es: 'No hay huevos.',
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
            es: 'Hay un supermercado en la esquina.',
          },
          {
            en: 'There are many people here.',
            es: 'Hay mucha gente aquí.',
          },
          {
            en: 'Is there a bathroom?',
            es: '¿Hay un baño?',
          },
          {
            en: "There aren't any buses at night.",
            es: 'No hay autobuses por la noche.',
          },
          {
            en: 'There is a lot of noise.',
            es: 'Hay mucho ruido.',
          },
          {
            en: 'How many students are there?',
            es: '¿Cuántos estudiantes hay?',
          },
        ],
        pitfalls: [
          {
            wrong: 'It has a book on the table.',
            right: 'There is a book on the table.',
            why: 'To express existence (hay), English uses there is/are, not it has.',
            esNote: "'Hay' se traduce como 'there is/are', no 'it has'.",
          },
          {
            wrong: 'There are a problem.',
            right: 'There is a problem.',
            why: 'Use there is with a singular noun.',
            esNote: "Con singular: 'there is'.",
          },
          {
            wrong: 'There is many cars.',
            right: 'There are many cars.',
            why: 'Use there are with plural nouns.',
            esNote: "Con plural: 'there are'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-there-ex1',
            before: 'There ',
            after: ' two windows in my room.',
            answers: ['are'],
            hint: 'plural',
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
            kind: 'correct',
            id: 'a1-there-ex3',
            wrong: 'It has a park near my house.',
            answers: ['There is a park near my house.', "There's a park near my house."],
            explain: 'Existence is expressed with there is, not it has.',
          },
          {
            kind: 'translate',
            id: 'a1-there-ex4',
            es: '¿Hay un hospital cerca?',
            answers: ['Is there a hospital near here?', 'Is there a hospital nearby?'],
            explain: 'Question form: Is there...?',
          },
          {
            kind: 'order',
            id: 'a1-there-ex5',
            tokens: ['There', "aren't", 'any', 'shops', 'here', '.'],
            answer: "There aren't any shops here.",
            explain: "Negative plural uses there aren't any.",
          },
          {
            kind: 'cloze',
            id: 'a1-there-ex6',
            before: 'There ',
            after: ' a lot of milk in the bottle.',
            answers: ['is', "'s"],
            hint: 'uncountable',
            explain: 'Milk is uncountable, so there is.',
          },
          {
            kind: 'dictation',
            id: 'a1-there-ex7',
            text: 'There are many people in the street.',
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
        summaryEs:
          'Usa el **present simple** para **hábitos**, **rutinas** y **hechos** que son generalmente verdaderos. La regla principal es la terminación **-s** para he, she e it. Formamos negativos y preguntas con **do** y **does**.',
        sections: [
          {
            heading: 'The third person -s',
            body: 'Add **-s** to the verb with **he/she/it**: I work / she works. Add **-es** after o, s, ch, sh, x (go → goes, watch → watches). For verbs ending in consonant + y, change y to **-ies** (study → studies).',
            bodyEs:
              'Añade **-s** al verbo con **he/she/it**: I work / she works. Añade **-es** tras o, s, ch, sh, x (go → goes, watch → watches). Para verbos que terminan en consonante + y, cambia y por **-ies** (study → studies).',
            examples: [
              {
                en: 'I live in Madrid.',
                es: 'Vivo en Madrid.',
              },
              {
                en: 'He goes to work by bus.',
                es: 'Él va al trabajo en autobús.',
              },
              {
                en: 'She studies English.',
                es: 'Ella estudia inglés.',
              },
            ],
          },
          {
            heading: 'Negatives and questions with do/does',
            body: "Use **don't** (do not) and **doesn't** (does not) + the **base verb**. In questions use **Do/Does** + subject + base verb. After does/doesn't, the verb has **no -s**.",
            bodyEs:
              "Usa **don't** (do not) y **doesn't** (does not) + el **verbo base**. En preguntas usa **Do/Does** + sujeto + verbo base. Después de does/doesn't, el verbo **no lleva -s**.",
            examples: [
              {
                en: "I don't eat meat.",
                es: 'No como carne.',
              },
              {
                en: "She doesn't like coffee.",
                es: 'A ella no le gusta el café.',
              },
              {
                en: 'Do you speak English?',
                es: '¿Hablas inglés?',
              },
            ],
          },
          {
            heading: 'Adverbs of frequency',
            body: 'We often use **always, usually, often, sometimes, never** with the present simple. They go **before the main verb** but **after** the verb be: I usually walk; she is never late.',
            bodyEs:
              'A menudo usamos **always, usually, often, sometimes, never** con el present simple. Van **antes del verbo principal** pero **después** del verbo be: I usually walk; she is never late.',
            examples: [
              {
                en: 'I always have breakfast.',
                es: 'Siempre desayuno.',
              },
              {
                en: 'He never drinks tea.',
                es: 'Él nunca bebe té.',
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
            es: 'El agua hierve a 100 grados.',
          },
          {
            en: "We don't have classes on Sunday.",
            es: 'No tenemos clases el domingo.',
          },
          {
            en: 'Does she work here?',
            es: '¿Ella trabaja aquí?',
          },
          {
            en: 'My brother plays football.',
            es: 'Mi hermano juega al fútbol.',
          },
          {
            en: 'I usually get up at seven.',
            es: 'Normalmente me levanto a las siete.',
          },
          {
            en: "They don't live near the centre.",
            es: 'Ellos no viven cerca del centro.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She work in a bank.',
            right: 'She works in a bank.',
            why: 'Add -s to the verb with he, she, it.',
            esNote: 'Con he/she/it el verbo lleva -s.',
          },
          {
            wrong: "He doesn't works here.",
            right: "He doesn't work here.",
            why: "After doesn't the verb has no -s.",
            esNote: "Tras 'doesn't', el verbo va sin -s.",
          },
          {
            wrong: 'Do she like tea?',
            right: 'Does she like tea?',
            why: 'Use does with he, she, it.',
            esNote: "Con he/she/it se usa 'does'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-ps-ex1',
            before: 'He ',
            after: ' (watch) TV every evening.',
            answers: ['watches'],
            hint: 'verb + es',
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
            kind: 'correct',
            id: 'a1-ps-ex3',
            wrong: 'My father work in a hospital.',
            answers: ['My father works in a hospital.'],
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
            kind: 'translate',
            id: 'a1-ps-ex5',
            es: 'Ella no bebe café.',
            answers: ["She doesn't drink coffee.", 'She does not drink coffee.'],
            explain: "Negative third person: doesn't drink.",
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
            kind: 'dictation',
            id: 'a1-ps-ex7',
            text: 'My sister studies medicine in London.',
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
        summaryEs:
          'Usa el **present continuous** para acciones que ocurren **ahora** o alrededor del momento presente. Se forma con **am/is/are + verbo-ing**. Compáralo con el present simple, que es para hábitos.',
        sections: [
          {
            heading: 'Form: be + verb-ing',
            body: "Use the correct form of **be** plus the **-ing** form: I'm working, she's reading, they're playing. Spelling: make → making (drop e), run → running (double the consonant).",
            bodyEs:
              "Usa la forma correcta de **be** más la forma **-ing**: I'm working, she's reading, they're playing. Ortografía: make → making (quita la e), run → running (dobla la consonante).",
            examples: [
              {
                en: "I'm studying right now.",
                es: 'Estoy estudiando ahora mismo.',
              },
              {
                en: 'She is cooking dinner.',
                es: 'Ella está cocinando la cena.',
              },
              {
                en: "They're watching a film.",
                es: 'Están viendo una película.',
              },
            ],
          },
          {
            heading: 'Now vs. habits',
            body: 'Use the **present continuous** for things happening at the moment of speaking, often with **now, right now, at the moment**. Use the **present simple** for habits with always, usually, every day.',
            bodyEs:
              'Usa el **present continuous** para cosas que ocurren en el momento de hablar, a menudo con **now, right now, at the moment**. Usa el **present simple** para hábitos con always, usually, every day.',
            examples: [
              {
                en: "I usually walk, but today I'm taking the bus.",
                es: 'Normalmente camino, pero hoy voy en autobús.',
              },
              {
                en: "What are you doing? I'm cooking.",
                es: '¿Qué estás haciendo? Estoy cocinando.',
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
            es: '¡Mira! Está lloviendo.',
          },
          {
            en: 'The children are sleeping.',
            es: 'Los niños están durmiendo.',
          },
          {
            en: "I'm not listening to music now.",
            es: 'No estoy escuchando música ahora.',
          },
          {
            en: 'Why are you laughing?',
            es: '¿Por qué te ríes?',
          },
          {
            en: "He's writing an email.",
            es: 'Él está escribiendo un correo.',
          },
          {
            en: "We're learning English.",
            es: 'Estamos aprendiendo inglés.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I working now.',
            right: "I'm working now.",
            why: 'You must include the verb be (am/is/are) before -ing.',
            esNote: "Falta el verbo 'be': I am working.",
          },
          {
            wrong: 'She is cook dinner.',
            right: 'She is cooking dinner.',
            why: 'After be you need the -ing form, not the base verb.',
            esNote: "Tras 'be' va el verbo en -ing.",
          },
          {
            wrong: 'I am wanting a coffee.',
            right: 'I want a coffee.',
            why: 'State verbs like want, like, know are not normally used in the continuous.',
            esNote: 'Verbos de estado (want, like, know) no van en continuo.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-pc-ex1',
            before: 'They ',
            after: ' (play) in the garden now.',
            answers: ['are playing', "'re playing"],
            hint: 'be + -ing',
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
            kind: 'correct',
            id: 'a1-pc-ex3',
            wrong: 'Look, it raining!',
            answers: ["Look, it's raining!", 'Look, it is raining!'],
            explain: 'Add the verb be: it is raining.',
          },
          {
            kind: 'translate',
            id: 'a1-pc-ex4',
            es: 'Estoy escribiendo un correo.',
            answers: ["I'm writing an email.", 'I am writing an email.'],
            explain: 'write becomes writing (drop the e).',
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
            kind: 'dictation',
            id: 'a1-pc-ex7',
            text: 'The baby is sleeping at the moment.',
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
        summaryEs:
          "Usa **have** o **have got** para **posesión**, familia y características. Usa **can / can't** para **habilidad** y **permiso**, y **would like** para pedir cosas con cortesía. Son muy frecuentes en el inglés diario.",
        sections: [
          {
            heading: 'Have and have got',
            body: "Both **have** and **have got** mean *tener*. With have we use do/does for questions and negatives: **Do you have...? I don't have...** With have got we use the verb itself: **Have you got...? I haven't got...**",
            bodyEs:
              "Tanto **have** como **have got** significan *tener*. Con have usamos do/does para preguntas y negativos: **Do you have...? I don't have...** Con have got usamos el propio verbo: **Have you got...? I haven't got...**",
            examples: [
              {
                en: "I have two brothers. / I've got two brothers.",
                es: 'Tengo dos hermanos.',
              },
              {
                en: 'Do you have a car?',
                es: '¿Tienes coche?',
              },
              {
                en: "She hasn't got a pen.",
                es: 'Ella no tiene bolígrafo.',
              },
            ],
          },
          {
            heading: "Can and can't",
            body: "**Can** expresses **ability** and **permission**. It is followed by the **base verb** with no to: **I can swim** (not *I can to swim*). The negative is **can't / cannot**. Can is the same for all subjects.",
            bodyEs:
              "**Can** expresa **habilidad** y **permiso**. Va seguido del **verbo base** sin to: **I can swim** (no *I can to swim*). El negativo es **can't / cannot**. Can es igual para todos los sujetos.",
            examples: [
              {
                en: 'I can speak two languages.',
                es: 'Puedo hablar dos idiomas.',
              },
              {
                en: "She can't drive.",
                es: 'Ella no sabe conducir.',
              },
              {
                en: 'Can I open the window?',
                es: '¿Puedo abrir la ventana?',
              },
            ],
          },
          {
            heading: 'Would like',
            body: "**Would like** (I'd like) is a polite way to say *want*. Use it with a **noun** or a **to-infinitive**: I'd like a coffee; I'd like to go home. In questions: **Would you like...?**",
            bodyEs:
              "**Would like** (I'd like) es una forma cortés de decir *querer*. Úsalo con un **sustantivo** o un **to-infinitivo**: I'd like a coffee; I'd like to go home. En preguntas: **Would you like...?**",
            examples: [
              {
                en: "I'd like a glass of water.",
                es: 'Quisiera un vaso de agua.',
              },
              {
                en: 'Would you like to dance?',
                es: '¿Te gustaría bailar?',
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
            es: 'Él tiene los ojos azules.',
          },
          {
            en: "We don't have time.",
            es: 'No tenemos tiempo.',
          },
          {
            en: 'Can you help me, please?',
            es: '¿Puedes ayudarme, por favor?',
          },
          {
            en: "I can't find my keys.",
            es: 'No encuentro mis llaves.',
          },
          {
            en: "I'd like to learn the guitar.",
            es: 'Me gustaría aprender la guitarra.',
          },
          {
            en: 'Would you like some tea?',
            es: '¿Te gustaría un poco de té?',
          },
        ],
        pitfalls: [
          {
            wrong: 'I can to swim.',
            right: 'I can swim.',
            why: 'After can we use the base verb with no to.',
            esNote: "Tras 'can' va el verbo sin 'to'.",
          },
          {
            wrong: 'She cans drive.',
            right: 'She can drive.',
            why: 'Can never takes -s; it is the same for all subjects.',
            esNote: "'Can' nunca lleva -s.",
          },
          {
            wrong: 'I want a coffee, please. (in a polite request)',
            right: "I'd like a coffee, please.",
            why: 'Would like is more polite than want for requests.',
            esNote: "Para pedir con cortesía, usa 'I'd like'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-have-ex1',
            before: 'I ',
            after: " swim, but I can't dive.",
            answers: ['can'],
            hint: 'ability',
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
            kind: 'correct',
            id: 'a1-have-ex3',
            wrong: 'Do you have got a bike?',
            answers: ['Have you got a bike?', 'Do you have a bike?'],
            explain:
              'Use either have got (Have you got...?) or have with do (Do you have...?), not both.',
          },
          {
            kind: 'translate',
            id: 'a1-have-ex4',
            es: 'Me gustaría un café.',
            answers: ["I'd like a coffee.", 'I would like a coffee.'],
            explain: 'would like for polite requests.',
          },
          {
            kind: 'order',
            id: 'a1-have-ex5',
            tokens: ['Would', 'you', 'like', 'to', 'come', '?'],
            answer: 'Would you like to come?',
            explain: 'would like + to-infinitive.',
          },
          {
            kind: 'cloze',
            id: 'a1-have-ex6',
            before: 'She ',
            after: ' got two children.',
            answers: ['has', "'s"],
            hint: 'have got, third person',
            explain: 'Third person of have got is has got.',
          },
          {
            kind: 'dictation',
            id: 'a1-have-ex7',
            text: "I can't find my keys.",
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
        summaryEs:
          'Usa **was** y **were** para hablar de estados y situaciones en el **pasado**. Usa **was** con I, he, she, it y **were** con you, we, they. Es el pasado del verbo to be.',
        sections: [
          {
            heading: 'Was and were',
            body: '**I/he/she/it** → **was**; **you/we/they** → **were**. We use them for the past of be: descriptions, locations, age, and feelings in the past.',
            bodyEs:
              '**I/he/she/it** → **was**; **you/we/they** → **were**. Los usamos para el pasado de be: descripciones, ubicaciones, edad y sentimientos en el pasado.',
            examples: [
              {
                en: 'I was at home yesterday.',
                es: 'Estuve en casa ayer.',
              },
              {
                en: 'They were happy.',
                es: 'Ellos estaban contentos.',
              },
              {
                en: 'It was cold last night.',
                es: 'Hacía frío anoche.',
              },
            ],
          },
          {
            heading: 'Negatives and questions',
            body: "Negative: **wasn't / weren't**. Question: put **was/were** before the subject: **Was she there? Were you tired?** Short answers: Yes, I was. / No, they weren't.",
            bodyEs:
              "Negativo: **wasn't / weren't**. Pregunta: pon **was/were** antes del sujeto: **Was she there? Were you tired?** Respuestas cortas: Yes, I was. / No, they weren't.",
            examples: [
              {
                en: "I wasn't at the party.",
                es: 'No estuve en la fiesta.',
              },
              {
                en: 'Were you at school?',
                es: '¿Estabas en la escuela?',
              },
              {
                en: "She wasn't happy.",
                es: 'Ella no estaba contenta.',
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
            es: 'Mis abuelos eran granjeros.',
          },
          {
            en: 'The film was very good.',
            es: 'La película fue muy buena.',
          },
          {
            en: "We weren't ready.",
            es: 'No estábamos listos.',
          },
          {
            en: 'Where were you last night?',
            es: '¿Dónde estabas anoche?',
          },
          {
            en: 'He was born in 1990.',
            es: 'Él nació en 1990.',
          },
          {
            en: 'Was it expensive? Yes, it was.',
            es: '¿Fue caro? Sí, lo fue.',
          },
        ],
        pitfalls: [
          {
            wrong: 'They was at home.',
            right: 'They were at home.',
            why: 'Use were with they, we, and you.',
            esNote: "Con they/we/you se usa 'were'.",
          },
          {
            wrong: 'I were tired.',
            right: 'I was tired.',
            why: 'Use was with I, he, she, it.',
            esNote: "Con I/he/she/it se usa 'was'.",
          },
          {
            wrong: 'He is born in 1990.',
            right: 'He was born in 1990.',
            why: 'Birth is a past event, so use was born.',
            esNote: "Para nacimiento: 'was/were born'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-waswere-ex1',
            before: 'We ',
            after: ' very tired after the trip.',
            answers: ['were'],
            hint: 'we',
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
            kind: 'correct',
            id: 'a1-waswere-ex3',
            wrong: 'They was at the cinema.',
            answers: ['They were at the cinema.'],
            explain: 'they takes were.',
          },
          {
            kind: 'translate',
            id: 'a1-waswere-ex4',
            es: '¿Dónde estabas ayer?',
            answers: ['Where were you yesterday?'],
            explain: 'Question with were before the subject.',
          },
          {
            kind: 'order',
            id: 'a1-waswere-ex5',
            tokens: ['I', "wasn't", 'at', 'home', '.'],
            answer: "I wasn't at home.",
            explain: "Negative of was is wasn't.",
          },
          {
            kind: 'cloze',
            id: 'a1-waswere-ex6',
            before: 'It ',
            after: ' a wonderful day.',
            answers: ['was'],
            hint: 'it',
            explain: 'With it we use was.',
          },
          {
            kind: 'dictation',
            id: 'a1-waswere-ex7',
            text: 'My parents were born in Spain.',
            explain: 'were born for plural subject in the past.',
          },
        ],
      },
      {
        id: 'a1-past-simple',
        level: 'A1',
        title: 'Past simple (regular and irregular)',
        summary:
          'Use the **past simple** for finished actions in the **past**. Regular verbs add **-ed**; many common verbs are **irregular** and must be learned. Negatives and questions use **did** + base verb.',
        summaryEs:
          'Usa el **past simple** para acciones terminadas en el **pasado**. Los verbos regulares añaden **-ed**; muchos verbos comunes son **irregulares** y hay que aprenderlos. Negativos y preguntas usan **did** + verbo base.',
        sections: [
          {
            heading: 'Regular verbs: -ed',
            body: 'Add **-ed** to regular verbs: work → worked, play → played. Verbs ending in e add only **-d** (like → liked). Consonant + y becomes **-ied** (study → studied). The form is the same for all subjects.',
            bodyEs:
              'Añade **-ed** a los verbos regulares: work → worked, play → played. Los verbos que terminan en e añaden solo **-d** (like → liked). Consonante + y se convierte en **-ied** (study → studied). La forma es igual para todos los sujetos.',
            examples: [
              {
                en: 'I worked all day.',
                es: 'Trabajé todo el día.',
              },
              {
                en: 'She studied for the exam.',
                es: 'Ella estudió para el examen.',
              },
              {
                en: 'We watched a film.',
                es: 'Vimos una película.',
              },
            ],
          },
          {
            heading: 'Irregular verbs',
            body: 'Many frequent verbs have **special past forms**: go → went, have → had, see → saw, eat → ate, make → made, take → took, get → got. You need to memorise these.',
            bodyEs:
              'Muchos verbos frecuentes tienen **formas de pasado especiales**: go → went, have → had, see → saw, eat → ate, make → made, take → took, get → got. Hay que memorizarlos.',
            examples: [
              {
                en: 'I went to the beach.',
                es: 'Fui a la playa.',
              },
              {
                en: 'He had a great time.',
                es: 'Él lo pasó muy bien.',
              },
              {
                en: 'We saw a good film.',
                es: 'Vimos una buena película.',
              },
            ],
          },
          {
            heading: 'Negatives and questions with did',
            body: "Use **didn't** (did not) + **base verb** for negatives, and **Did** + subject + **base verb** for questions. After did/didn't, never use the past form: **I didn't go** (not *didn't went*).",
            bodyEs:
              "Usa **didn't** (did not) + **verbo base** para negativos, y **Did** + sujeto + **verbo base** para preguntas. Después de did/didn't, nunca uses la forma de pasado: **I didn't go** (no *didn't went*).",
            examples: [
              {
                en: "I didn't see her.",
                es: 'No la vi.',
              },
              {
                en: 'Did you go out?',
                es: '¿Saliste?',
              },
              {
                en: "She didn't call me.",
                es: 'Ella no me llamó.',
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
            es: 'Llegamos a las ocho.',
          },
          {
            en: 'He bought a new phone.',
            es: 'Él compró un teléfono nuevo.',
          },
          {
            en: "I didn't like the food.",
            es: 'No me gustó la comida.',
          },
          {
            en: 'Did they enjoy the party?',
            es: '¿Disfrutaron de la fiesta?',
          },
          {
            en: 'She came home early.',
            es: 'Ella llegó a casa temprano.',
          },
          {
            en: "We didn't have time.",
            es: 'No tuvimos tiempo.',
          },
        ],
        pitfalls: [
          {
            wrong: "I didn't went to school.",
            right: "I didn't go to school.",
            why: "After didn't use the base verb, not the past form.",
            esNote: "Tras 'didn't' va el verbo base, no el pasado.",
          },
          {
            wrong: 'Did you saw the film?',
            right: 'Did you see the film?',
            why: 'After did in questions use the base verb.',
            esNote: "Tras 'did' en preguntas va el verbo base.",
          },
          {
            wrong: 'She goed home.',
            right: 'She went home.',
            why: 'Go is irregular: the past is went, not goed.',
            esNote: "'Go' es irregular: pasado 'went'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-past-ex1',
            before: 'Yesterday I ',
            after: ' (go) to the gym.',
            answers: ['went'],
            hint: 'irregular',
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
            kind: 'correct',
            id: 'a1-past-ex3',
            wrong: 'She studyed English last year.',
            answers: ['She studied English last year.'],
            explain: 'Consonant + y changes to -ied: studied.',
          },
          {
            kind: 'translate',
            id: 'a1-past-ex4',
            es: 'Compramos una casa nueva.',
            answers: ['We bought a new house.'],
            explain: 'buy is irregular: bought.',
          },
          {
            kind: 'order',
            id: 'a1-past-ex5',
            tokens: ['Did', 'you', 'see', 'the', 'match', '?'],
            answer: 'Did you see the match?',
            explain: 'Did + subject + base verb.',
          },
          {
            kind: 'cloze',
            id: 'a1-past-ex6',
            before: 'We ',
            after: ' (watch) a film last night.',
            answers: ['watched'],
            hint: 'regular -ed',
            explain: 'Regular verb watch becomes watched.',
          },
          {
            kind: 'dictation',
            id: 'a1-past-ex7',
            text: "They didn't come to the party.",
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
        summaryEs:
          'Habla del futuro con **will** para predicciones y decisiones, y **going to** para planes e intenciones. Aprende también el **imperativo** para dar órdenes, instrucciones y consejos.',
        sections: [
          {
            heading: 'Will',
            body: "Use **will** (+ base verb) for predictions, promises, and decisions made at the moment of speaking. Will is the same for all subjects. Negative: **won't**. Short form: **I'll, she'll**.",
            bodyEs:
              "Usa **will** (+ verbo base) para predicciones, promesas y decisiones tomadas en el momento de hablar. Will es igual para todos los sujetos. Negativo: **won't**. Forma corta: **I'll, she'll**.",
            examples: [
              {
                en: 'It will rain tomorrow.',
                es: 'Lloverá mañana.',
              },
              {
                en: "I'll help you.",
                es: 'Te ayudaré.',
              },
              {
                en: "She won't be late.",
                es: 'Ella no llegará tarde.',
              },
            ],
          },
          {
            heading: 'Going to',
            body: 'Use **be going to + base verb** for **plans** and **intentions** already decided, and for predictions based on what you can see now. Form: am/is/are going to.',
            bodyEs:
              'Usa **be going to + verbo base** para **planes** e **intenciones** ya decididos, y para predicciones basadas en lo que ves ahora. Forma: am/is/are going to.',
            examples: [
              {
                en: "I'm going to visit my family.",
                es: 'Voy a visitar a mi familia.',
              },
              {
                en: "They're going to buy a house.",
                es: 'Van a comprar una casa.',
              },
              {
                en: "Look at the clouds! It's going to rain.",
                es: '¡Mira las nubes! Va a llover.',
              },
            ],
          },
          {
            heading: 'Imperatives',
            body: "The **imperative** uses the **base verb** with no subject to give orders, instructions, or advice: **Open the door. Don't worry.** Add **please** to be polite. The negative is **Don't + verb**.",
            bodyEs:
              "El **imperativo** usa el **verbo base** sin sujeto para dar órdenes, instrucciones o consejos: **Open the door. Don't worry.** Añade **please** para ser cortés. El negativo es **Don't + verbo**.",
            examples: [
              {
                en: 'Sit down, please.',
                es: 'Siéntate, por favor.',
              },
              {
                en: "Don't touch that.",
                es: 'No toques eso.',
              },
              {
                en: 'Turn left at the corner.',
                es: 'Gira a la izquierda en la esquina.',
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
            es: 'Creo que aprobará el examen.',
          },
          {
            en: "We're going to travel in summer.",
            es: 'Vamos a viajar en verano.',
          },
          {
            en: "Don't be late!",
            es: '¡No llegues tarde!',
          },
          {
            en: "I'll have a coffee, please.",
            es: 'Tomaré un café, por favor.',
          },
          {
            en: 'Be careful!',
            es: '¡Ten cuidado!',
          },
          {
            en: 'What are you going to do tonight?',
            es: '¿Qué vas a hacer esta noche?',
          },
        ],
        pitfalls: [
          {
            wrong: 'I will to call you.',
            right: 'I will call you.',
            why: 'After will use the base verb with no to.',
            esNote: "Tras 'will' va el verbo sin 'to'.",
          },
          {
            wrong: 'She going to study.',
            right: 'She is going to study.',
            why: 'Going to needs the verb be (am/is/are).',
            esNote: "'Going to' necesita el verbo 'be'.",
          },
          {
            wrong: 'You sit down, please. (as a command)',
            right: 'Sit down, please.',
            why: 'Imperatives have no subject; just use the base verb.',
            esNote: 'El imperativo no lleva sujeto.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-fut-ex1',
            before: "I'm tired. I think I ",
            after: ' go to bed.',
            answers: ['will', "'ll"],
            hint: 'decision now',
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
            kind: 'correct',
            id: 'a1-fut-ex3',
            wrong: 'They going to move house.',
            answers: ["They're going to move house.", 'They are going to move house.'],
            explain: 'going to needs the verb be.',
          },
          {
            kind: 'translate',
            id: 'a1-fut-ex4',
            es: 'No te preocupes.',
            answers: ["Don't worry.", 'Do not worry.'],
            explain: "Negative imperative: Don't + base verb.",
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
            kind: 'dictation',
            id: 'a1-fut-ex7',
            text: 'Turn left and then go straight on.',
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
        summaryEs:
          "Aprende los **pronombres sujeto** (I, you, he...), los **pronombres objeto** (me, you, him...), los **adjetivos posesivos** (my, your, his...) y los **pronombres posesivos** (mine, yours...). Aprende también el **posesivo 's** para indicar quién posee algo.",
        sections: [
          {
            heading: 'Subject and object pronouns',
            body: '**Subject pronouns** (I, you, he, she, it, we, they) come before the verb. **Object pronouns** (me, you, him, her, it, us, them) come after the verb or a preposition.',
            bodyEs:
              'Los **pronombres sujeto** (I, you, he, she, it, we, they) van antes del verbo. Los **pronombres objeto** (me, you, him, her, it, us, them) van después del verbo o de una preposición.',
            examples: [
              {
                en: 'She loves him.',
                es: 'Ella lo quiere.',
              },
              {
                en: 'I can see them.',
                es: 'Puedo verlos.',
              },
              {
                en: 'Give it to me.',
                es: 'Dámelo.',
              },
            ],
          },
          {
            heading: 'Possessive adjectives and pronouns',
            body: "**Possessive adjectives** (my, your, his, her, its, our, their) go before a noun. **Possessive pronouns** (mine, yours, his, hers, ours, theirs) replace the noun. Note: **its** (possessive) has no apostrophe; **it's** means it is.",
            bodyEs:
              "Los **adjetivos posesivos** (my, your, his, her, its, our, their) van antes de un sustantivo. Los **pronombres posesivos** (mine, yours, his, hers, ours, theirs) reemplazan al sustantivo. Nota: **its** (posesivo) no lleva apóstrofo; **it's** significa it is.",
            examples: [
              {
                en: "This is my book. It's mine.",
                es: 'Este es mi libro. Es mío.',
              },
              {
                en: 'Is this your pen or hers?',
                es: '¿Es este tu bolígrafo o el de ella?',
              },
              {
                en: 'Their house is bigger than ours.',
                es: 'Su casa es más grande que la nuestra.',
              },
            ],
          },
          {
            heading: "Possessive 's",
            body: "To say who owns something, add **'s** to a person or name: **Ana's car, my brother's house**. For plural nouns ending in s, add just an apostrophe: **my parents' house**.",
            bodyEs:
              "Para decir quién posee algo, añade **'s** a una persona o nombre: **Ana's car, my brother's house**. Para sustantivos plurales que terminan en s, añade solo un apóstrofo: **my parents' house**.",
            examples: [
              {
                en: "This is Maria's bag.",
                es: 'Esta es la bolsa de María.',
              },
              {
                en: "The students' books are here.",
                es: 'Los libros de los estudiantes están aquí.',
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
            es: 'Los invitamos a nuestra fiesta.',
          },
          {
            en: 'Her name is Sofia.',
            es: 'Su nombre es Sofía.',
          },
          {
            en: "That book isn't yours, it's mine.",
            es: 'Ese libro no es tuyo, es mío.',
          },
          {
            en: 'Can you help us?',
            es: '¿Puedes ayudarnos?',
          },
          {
            en: "This is John's car.",
            es: 'Este es el coche de John.',
          },
          {
            en: 'The dog wagged its tail.',
            es: 'El perro movió la cola.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The car of my brother is red.',
            right: "My brother's car is red.",
            why: "English usually shows possession with 's, not with 'of'.",
            esNote: "La posesión se hace con 's: 'my brother's car'.",
          },
          {
            wrong: 'She loves he.',
            right: 'She loves him.',
            why: 'After a verb use the object pronoun him.',
            esNote: 'Tras el verbo va el pronombre objeto: him.',
          },
          {
            wrong: "The dog hurt it's leg.",
            right: 'The dog hurt its leg.',
            why: "Possessive its has no apostrophe; it's means it is.",
            esNote: "'Its' posesivo no lleva apóstrofo.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-pron-ex1',
            before: 'This is ',
            after: ' house. (de nosotros)',
            answers: ['our'],
            hint: 'possessive adjective',
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
            kind: 'correct',
            id: 'a1-pron-ex3',
            wrong: 'The house of my parents is big.',
            answers: ["My parents' house is big."],
            explain: "Use the possessive 's (here parents') instead of 'of'.",
          },
          {
            kind: 'translate',
            id: 'a1-pron-ex4',
            es: 'Este libro es mío.',
            answers: ['This book is mine.'],
            explain: 'mine is the possessive pronoun for I.',
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
            kind: 'dictation',
            id: 'a1-pron-ex7',
            text: 'Their car is faster than ours.',
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
        summaryEs:
          'Aprende cuándo usar **a/an**, **the** o **ningún artículo**, y los demostrativos **this/that/these/those**. Luego aprende los sustantivos **contables e incontables** con **some, any, how much, how many**.',
        sections: [
          {
            heading: 'a / an / the / zero article',
            body: 'Use **a/an** with singular countable nouns mentioned for the first time (**a** before a consonant sound, **an** before a vowel sound). Use **the** for something specific or already known. Use **no article** for plurals and uncountables in general statements.',
            bodyEs:
              'Usa **a/an** con sustantivos contables singulares mencionados por primera vez (**a** ante sonido consonante, **an** ante sonido vocal). Usa **the** para algo específico o ya conocido. No uses artículo para plurales e incontables en afirmaciones generales.',
            examples: [
              {
                en: 'I have a dog and an umbrella.',
                es: 'Tengo un perro y un paraguas.',
              },
              {
                en: 'The dog is in the garden.',
                es: 'El perro está en el jardín.',
              },
              {
                en: 'I like music.',
                es: 'Me gusta la música.',
              },
            ],
          },
          {
            heading: 'Demonstratives',
            body: 'Use **this** (singular, near) and **these** (plural, near); **that** (singular, far) and **those** (plural, far).',
            bodyEs:
              'Usa **this** (singular, cerca) y **these** (plural, cerca); **that** (singular, lejos) y **those** (plural, lejos).',
            examples: [
              {
                en: 'This book is interesting.',
                es: 'Este libro es interesante.',
              },
              {
                en: 'Those cars are expensive.',
                es: 'Aquellos coches son caros.',
              },
            ],
          },
          {
            heading: 'some / any and how much / how many',
            body: 'Use **some** in affirmatives and **any** in negatives and questions, with plural or uncountable nouns. Ask quantity with **how many** (countable) and **how much** (uncountable).',
            bodyEs:
              'Usa **some** en afirmativas y **any** en negativas y preguntas, con sustantivos plurales o incontables. Pregunta la cantidad con **how many** (contables) y **how much** (incontables).',
            examples: [
              {
                en: 'I have some friends here.',
                es: 'Tengo algunos amigos aquí.',
              },
              {
                en: "There isn't any sugar.",
                es: 'No hay azúcar.',
              },
              {
                en: 'How much money do you have?',
                es: '¿Cuánto dinero tienes?',
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
            es: 'Ella es profesora.',
          },
          {
            en: 'Can I have an apple?',
            es: '¿Puedo tomar una manzana?',
          },
          {
            en: 'The sun is bright today.',
            es: 'El sol brilla hoy.',
          },
          {
            en: 'Are there any eggs?',
            es: '¿Hay huevos?',
          },
          {
            en: "I'd like some water.",
            es: 'Quisiera un poco de agua.',
          },
          {
            en: 'How many people are coming?',
            es: '¿Cuánta gente viene?',
          },
        ],
        pitfalls: [
          {
            wrong: 'She is teacher.',
            right: 'She is a teacher.',
            why: 'Use a/an before singular jobs and countable nouns.',
            esNote: "Antes de profesiones en singular se usa 'a/an'.",
          },
          {
            wrong: 'I have an university degree.',
            right: 'I have a university degree.',
            why: "University starts with a 'y' sound, so use a, not an.",
            esNote: "'University' suena con 'y', así que se usa 'a'.",
          },
          {
            wrong: 'There are any apples on the table.',
            right: 'There are some apples on the table.',
            why: 'Use some in affirmative sentences; any is for negatives and questions.',
            esNote: "En afirmativas usa 'some'; 'any' es para negativas/preguntas.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-art-ex1',
            before: 'I have ',
            after: ' orange and a banana.',
            answers: ['an'],
            hint: 'vowel sound',
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
            kind: 'correct',
            id: 'a1-art-ex3',
            wrong: 'How much apples do you want?',
            answers: ['How many apples do you want?'],
            explain: 'Apples are countable, so how many.',
          },
          {
            kind: 'translate',
            id: 'a1-art-ex4',
            es: 'Estos zapatos son caros.',
            answers: ['These shoes are expensive.'],
            explain: 'Plural and near: these.',
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
            kind: 'dictation',
            id: 'a1-art-ex7',
            text: "I'd like some water and a sandwich, please.",
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
        summaryEs:
          'Forma sustantivos en **plural**, coloca los **adjetivos** correctamente y haz **comparativos** y **superlativos**. Aprende también **preposiciones de lugar y tiempo** clave y los conectores **and, but, because**.',
        sections: [
          {
            heading: 'Plurals and adjective position',
            body: 'Most plurals add **-s** (cat → cats); after s, ch, sh, x add **-es** (box → boxes). Some are irregular (man → men, child → children). **Adjectives** go **before the noun** and never change for plural: **a red car, two red cars**.',
            bodyEs:
              'La mayoría de los plurales añaden **-s** (cat → cats); tras s, ch, sh, x se añade **-es** (box → boxes). Algunos son irregulares (man → men, child → children). Los **adjetivos** van **antes del sustantivo** y nunca cambian en plural: **a red car, two red cars**.',
            examples: [
              {
                en: 'I have three big dogs.',
                es: 'Tengo tres perros grandes.',
              },
              {
                en: 'There are two children outside.',
                es: 'Hay dos niños fuera.',
              },
              {
                en: 'She has beautiful eyes.',
                es: 'Ella tiene unos ojos bonitos.',
              },
            ],
          },
          {
            heading: 'Comparatives and superlatives',
            body: 'Short adjectives: **-er** (cheaper) for comparatives and **the -est** (the cheapest) for superlatives, with **than** to compare. Long adjectives use **more** and **the most** (more expensive, the most expensive). Irregular: good → better → the best; bad → worse → the worst.',
            bodyEs:
              'Adjetivos cortos: **-er** (cheaper) para comparativos y **the -est** (the cheapest) para superlativos, con **than** para comparar. Los adjetivos largos usan **more** y **the most** (more expensive, the most expensive). Irregulares: good → better → the best; bad → worse → the worst.',
            examples: [
              {
                en: 'This car is cheaper than that one.',
                es: 'Este coche es más barato que ese.',
              },
              {
                en: 'She is the tallest in the class.',
                es: 'Ella es la más alta de la clase.',
              },
              {
                en: 'English is more useful than Latin.',
                es: 'El inglés es más útil que el latín.',
              },
            ],
          },
          {
            heading: 'Prepositions and connectors',
            body: 'Place: **in** (countries, rooms), **on** (surfaces), **at** (points). Time: **at** (times), **on** (days), **in** (months, years). Connect ideas with **and** (addition), **but** (contrast), and **because** (reason).',
            bodyEs:
              'Lugar: **in** (países, habitaciones), **on** (superficies), **at** (puntos). Tiempo: **at** (horas), **on** (días), **in** (meses, años). Conecta ideas con **and** (adición), **but** (contraste) y **because** (razón).',
            examples: [
              {
                en: 'The keys are on the table.',
                es: 'Las llaves están sobre la mesa.',
              },
              {
                en: 'We meet at 5 on Monday.',
                es: 'Nos vemos a las 5 el lunes.',
              },
              {
                en: "I'm tired because I worked a lot.",
                es: 'Estoy cansado porque trabajé mucho.',
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
            es: 'Mi ciudad es más grande que la tuya.',
          },
          {
            en: 'This is the best restaurant in town.',
            es: 'Este es el mejor restaurante de la ciudad.',
          },
          {
            en: 'There are some old books on the shelf.',
            es: 'Hay algunos libros viejos en el estante.',
          },
          {
            en: "I like coffee but I don't like tea.",
            es: 'Me gusta el café pero no me gusta el té.',
          },
          {
            en: 'We were born in 1995.',
            es: 'Nacimos en 1995.',
          },
          {
            en: "He's happy because he passed the exam.",
            es: 'Está contento porque aprobó el examen.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have three cars red.',
            right: 'I have three red cars.',
            why: 'Adjectives go before the noun in English.',
            esNote: 'El adjetivo va antes del sustantivo.',
          },
          {
            wrong: 'She is more taller than me.',
            right: 'She is taller than me.',
            why: "Don't use more with a short adjective that already takes -er.",
            esNote: "No uses 'more' con adjetivos cortos que llevan -er.",
          },
          {
            wrong: "I'm tired because of I worked a lot.",
            right: "I'm tired because I worked a lot.",
            why: 'Use because + clause; because of is followed by a noun.',
            esNote: "'Because' + frase; 'because of' + sustantivo.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-plur-ex1',
            before: 'There are two ',
            after: ' in the room. (child)',
            answers: ['children'],
            hint: 'irregular plural',
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
            kind: 'correct',
            id: 'a1-plur-ex3',
            wrong: 'She has a dress beautiful.',
            answers: ['She has a beautiful dress.'],
            explain: 'The adjective goes before the noun.',
          },
          {
            kind: 'translate',
            id: 'a1-plur-ex4',
            es: 'Es el mejor día de mi vida.',
            answers: ["It's the best day of my life.", 'It is the best day of my life.'],
            explain: 'Irregular superlative: the best.',
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
            kind: 'dictation',
            id: 'a1-plur-ex7',
            text: 'London is bigger than Madrid but Madrid is sunnier.',
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
        summaryEs:
          'Usa el **present perfect** (have/has + participio pasado) para hablar de experiencias de la vida y de acciones recientes cuando el momento exacto no importa. Suele acompañarse de **ever/never**, **already/yet** y **for/since**.',
        sections: [
          {
            heading: 'Form and basic use',
            body: 'Build the present perfect with **have/has + past participle** (worked, gone, seen). Use it for an experience at an unspecified time (**I have visited Rome**) or for a past action with a result now (**She has lost her keys**). Do not say the exact past time with it.',
            bodyEs:
              'Forma el present perfect con **have/has + participio pasado** (worked, gone, seen). Úsalo para una experiencia en un momento no especificado (**I have visited Rome**) o para una acción pasada con resultado ahora (**She has lost her keys**). No digas el momento pasado exacto con él.',
            examples: [
              {
                en: 'I have eaten sushi many times.',
                es: 'He comido sushi muchas veces.',
              },
              {
                en: 'He has broken his phone.',
                es: 'Ha roto su teléfono.',
              },
            ],
          },
          {
            heading: 'ever, never, already, yet',
            body: "Use **ever** in questions (**Have you ever flown?**) and **never** for no experience (**I have never flown**). Use **already** for something done sooner than expected (**I have already finished**), and **yet** in negatives and questions for something expected but not done (**They haven't arrived yet**).",
            bodyEs:
              "Usa **ever** en preguntas (**Have you ever flown?**) y **never** para ninguna experiencia (**I have never flown**). Usa **already** para algo hecho antes de lo esperado (**I have already finished**), y **yet** en negativas y preguntas para algo esperado pero no hecho (**They haven't arrived yet**).",
            examples: [
              {
                en: 'Have you ever met a famous person?',
                es: '¿Alguna vez has conocido a una persona famosa?',
              },
              {
                en: "We haven't decided yet.",
                es: 'Todavía no hemos decidido.',
              },
            ],
          },
          {
            heading: 'for and since',
            body: 'Use **for** with a length of time (**for two years**, **for ten minutes**) and **since** with a starting point (**since 2020**, **since Monday**). Both describe a situation that started in the past and continues now.',
            bodyEs:
              'Usa **for** con una duración (**for two years**, **for ten minutes**) y **since** con un punto de inicio (**since 2020**, **since Monday**). Ambos describen una situación que empezó en el pasado y continúa ahora.',
            examples: [
              {
                en: 'I have lived here for five years.',
                es: 'He vivido aquí durante cinco años.',
              },
              {
                en: 'She has known him since 2019.',
                es: 'Lo conoce desde 2019.',
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
            es: '¿Alguna vez has estado en Japón?',
          },
          {
            en: 'I have never tried snowboarding.',
            es: 'Nunca he probado el snowboard.',
          },
          {
            en: 'The film has already started.',
            es: 'La película ya ha empezado.',
          },
          {
            en: "We haven't eaten yet.",
            es: 'Todavía no hemos comido.',
          },
          {
            en: 'They have been married for ten years.',
            es: 'Llevan casados diez años.',
          },
          {
            en: 'I have worked here since March.',
            es: 'He trabajado aquí desde marzo.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have seen her yesterday.',
            right: 'I saw her yesterday.',
            why: "Do not use the present perfect with a finished time word like 'yesterday'. Use the past simple instead.",
            esNote:
              "Con 'yesterday', 'last week', etc. usa el pasado simple, no el present perfect.",
          },
          {
            wrong: 'I live here since 2020.',
            right: 'I have lived here since 2020.',
            why: 'For a situation that started in the past and continues, English uses the present perfect, not the present simple.',
            esNote:
              "El español usa presente ('vivo aquí desde 2020'); el inglés usa present perfect.",
          },
          {
            wrong: 'I have lived here since five years.',
            right: 'I have lived here for five years.',
            why: "Use 'for' with a length of time, and 'since' only with a starting point.",
            esNote: "'desde hace cinco años' = 'for five years', no 'since'.",
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
            kind: 'cloze',
            id: 'a2-pp-ex2',
            before: 'We have lived in this city',
            after: 'ten years.',
            answers: ['for'],
            hint: 'length of time',
            explain: "Use 'for' with a duration like 'ten years'.",
          },
          {
            kind: 'cloze',
            id: 'a2-pp-ex3',
            before: 'She has worked here',
            after: 'January.',
            answers: ['since'],
            hint: 'starting point',
            explain: "Use 'since' with a point in time like 'January'.",
          },
          {
            kind: 'correct',
            id: 'a2-pp-ex4',
            wrong: 'Have you ever eat octopus?',
            answers: ['Have you ever eaten octopus?'],
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
            kind: 'translate',
            id: 'a2-pp-ex6',
            es: 'Ya he comprado los billetes.',
            answers: ['I have already bought the tickets.', "I've already bought the tickets."],
            explain: "'Ya' = 'already', placed before the past participle.",
          },
          {
            kind: 'dictation',
            id: 'a2-pp-ex7',
            text: 'I have never been to South America.',
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
        summaryEs:
          'Usa **going to** para planes y predicciones basadas en evidencia, **will** para decisiones del momento, ofrecimientos y predicciones de opinión, y el **present continuous** para citas fijas con hora y lugar.',
        sections: [
          {
            heading: 'going to for plans and evidence',
            body: "Use **be going to + verb** for intentions decided before now (**I'm going to study law**) and for predictions based on what you can see (**Look at those clouds — it's going to rain**).",
            bodyEs:
              "Usa **be going to + verbo** para intenciones decididas antes de ahora (**I'm going to study law**) y para predicciones basadas en lo que ves (**Look at those clouds — it's going to rain**).",
            examples: [
              {
                en: "We're going to move to Madrid.",
                es: 'Vamos a mudarnos a Madrid.',
              },
              {
                en: "She's going to have a baby.",
                es: 'Va a tener un bebé.',
              },
            ],
          },
          {
            heading: 'will for instant decisions and offers',
            body: "Use **will + verb** for a decision made at the moment of speaking (**I'll help you**), for offers and promises, and for predictions you think or believe (**I think it will be fine**). The short form is **'ll**, and the negative is **won't**.",
            bodyEs:
              "Usa **will + verbo** para una decisión tomada en el momento de hablar (**I'll help you**), para ofrecimientos y promesas, y para predicciones de opinión (**I think it will be fine**). La forma corta es **'ll** y la negativa **won't**.",
            examples: [
              {
                en: "The phone is ringing — I'll get it.",
                es: 'Suena el teléfono, ya lo cojo yo.',
              },
              {
                en: 'I think she will win.',
                es: 'Creo que ella ganará.',
              },
            ],
          },
          {
            heading: 'Present continuous for arrangements',
            body: "Use the **present continuous** (be + -ing) for fixed future arrangements, usually with another person and a clear time (**I'm meeting Ana at six**). It feels personal and confirmed, like an appointment in your calendar.",
            bodyEs:
              "Usa el **present continuous** (be + -ing) para citas futuras fijas, normalmente con otra persona y una hora clara (**I'm meeting Ana at six**). Suena personal y confirmado, como una cita en tu agenda.",
            examples: [
              {
                en: "We're flying to Rome on Friday.",
                es: 'Volamos a Roma el viernes.',
              },
              {
                en: "I'm seeing the doctor tomorrow.",
                es: 'Tengo cita con el médico mañana.',
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
            es: 'Va a ser un día largo.',
          },
          {
            en: "Don't worry, I'll do it.",
            es: 'No te preocupes, lo hago yo.',
          },
          {
            en: "They're getting married in July.",
            es: 'Se casan en julio.',
          },
          {
            en: "I'm going to learn to drive this year.",
            es: 'Voy a aprender a conducir este año.',
          },
          {
            en: 'Maybe it will snow tonight.',
            es: 'Quizás nieve esta noche.',
          },
          {
            en: "We're having dinner with them on Saturday.",
            es: 'Cenamos con ellos el sábado.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I will buy a new car next year. I already chose the model.',
            right: "I'm going to buy a new car next year. I already chose the model.",
            why: "For a plan decided before now, use 'going to', not 'will'.",
            esNote: "Si ya lo tienes planeado, usa 'going to', no 'will'.",
          },
          {
            wrong: 'Wait, I am going to help you with that bag right now.',
            right: "Wait, I'll help you with that bag right now.",
            why: "An offer or decision made at the moment of speaking uses 'will', not 'going to'.",
            esNote: "Para ofrecerte en el momento, 'I'll help you'.",
          },
          {
            wrong: 'I meet Ana tomorrow at six.',
            right: "I'm meeting Ana tomorrow at six.",
            why: 'For a fixed personal arrangement, use the present continuous, not the present simple.',
            esNote: 'Para citas concretas usa present continuous, no presente simple.',
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
            kind: 'cloze',
            id: 'a2-fut-ex3',
            before: 'Look at that sky! It',
            after: 'rain.',
            answers: ['is going to', "'s going to"],
            hint: 'prediction from evidence',
            explain: "Evidence you can see (clouds) means 'going to'.",
          },
          {
            kind: 'correct',
            id: 'a2-fut-ex4',
            wrong: 'We will travel to Japan in spring; we booked the flights last week.',
            answers: [
              "We're going to travel to Japan in spring; we booked the flights last week.",
              'We are going to travel to Japan in spring; we booked the flights last week.',
            ],
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
            kind: 'translate',
            id: 'a2-fut-ex6',
            es: 'Voy a empezar un curso nuevo.',
            answers: ["I'm going to start a new course.", 'I am going to start a new course.'],
            explain: "'Voy a' for an intention = 'going to'.",
          },
          {
            kind: 'dictation',
            id: 'a2-fut-ex7',
            text: "We're flying to London on Monday morning.",
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
        summaryEs:
          'Usa el **past continuous** (was/were + -ing) para una acción en progreso en el pasado, a menudo interrumpida por una acción en **past simple** con **when/while**. Usa **used to** para hábitos y estados pasados que ya no son ciertos.',
        sections: [
          {
            heading: 'Past continuous for actions in progress',
            body: 'Form it with **was/were + verb-ing**. It describes an action happening at a moment in the past (**At 8 p.m. I was cooking**). It sets the scene or background of a story.',
            bodyEs:
              'Fórmalo con **was/were + verbo-ing**. Describe una acción que ocurría en un momento del pasado (**At 8 p.m. I was cooking**). Pone el escenario o el fondo de una historia.',
            examples: [
              {
                en: 'They were sleeping at midnight.',
                es: 'Estaban durmiendo a medianoche.',
              },
              {
                en: 'It was raining when we left.',
                es: 'Estaba lloviendo cuando salimos.',
              },
            ],
          },
          {
            heading: 'when and while',
            body: 'Use the **past continuous** for the longer background action and the **past simple** for the shorter action that interrupts it. **While** usually goes with the long action (-ing), and **when** usually goes with the short one. (**While I was reading, the phone rang.**)',
            bodyEs:
              'Usa el **past continuous** para la acción de fondo más larga y el **past simple** para la acción corta que la interrumpe. **While** suele ir con la acción larga (-ing) y **when** con la corta. (**While I was reading, the phone rang.**)',
            examples: [
              {
                en: 'When she arrived, I was cooking.',
                es: 'Cuando ella llegó, yo estaba cocinando.',
              },
              {
                en: 'While he was driving, he saw an accident.',
                es: 'Mientras conducía, vio un accidente.',
              },
            ],
          },
          {
            heading: 'used to for past habits',
            body: "Use **used to + base verb** for habits or states that were true in the past but not now (**I used to play tennis**). The negative is **didn't use to** and the question is **Did you use to...?** (no 'd' after 'did').",
            bodyEs:
              "Usa **used to + verbo base** para hábitos o estados que eran ciertos en el pasado pero no ahora (**I used to play tennis**). La negativa es **didn't use to** y la pregunta **Did you use to...?** (sin 'd' tras 'did').",
            examples: [
              {
                en: 'We used to live by the sea.',
                es: 'Antes vivíamos junto al mar.',
              },
              {
                en: "She didn't use to like coffee.",
                es: 'Antes no le gustaba el café.',
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
            es: 'Estaba viendo la tele cuando llamaste.',
          },
          {
            en: 'While we were waiting, it started to snow.',
            es: 'Mientras esperábamos, empezó a nevar.',
          },
          {
            en: 'What were you doing at ten?',
            es: '¿Qué estabas haciendo a las diez?',
          },
          {
            en: 'They used to be neighbours.',
            es: 'Antes eran vecinos.',
          },
          {
            en: 'Did you use to walk to school?',
            es: '¿Antes ibas andando al colegio?',
          },
          {
            en: "He wasn't listening to the teacher.",
            es: 'No estaba escuchando al profesor.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When she called, I cooked dinner.',
            right: 'When she called, I was cooking dinner.',
            why: 'The background action in progress needs the past continuous, not the past simple.',
            esNote: 'La acción que estaba ocurriendo va en past continuous.',
          },
          {
            wrong: 'I was use to play football.',
            right: 'I used to play football.',
            why: "'Used to' is not a continuous form; do not add 'was/were' or '-ing'.",
            esNote: "'used to' no lleva 'was' ni '-ing'.",
          },
          {
            wrong: 'Did you used to smoke?',
            right: 'Did you use to smoke?',
            why: "After 'did', the verb is the base form 'use to', without the final 'd'.",
            esNote: "Tras 'did' se quita la 'd': 'use to'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-pc-ex1',
            before: 'While I',
            after: 'lunch, the doorbell rang.',
            answers: ['was making', 'was cooking', 'was having'],
            hint: 'action in progress',
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
            kind: 'correct',
            id: 'a2-pc-ex3',
            wrong: 'I use to live in Paris ten years ago.',
            answers: ['I used to live in Paris ten years ago.'],
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
            kind: 'translate',
            id: 'a2-pc-ex5',
            es: 'Antes jugábamos juntos.',
            answers: ['We used to play together.', 'We used to play together every day.'],
            explain: "Past habit = 'used to' + base verb.",
          },
          {
            kind: 'translate',
            id: 'a2-pc-ex6',
            es: 'Estaba lloviendo cuando salimos.',
            answers: ['It was raining when we left.', 'It was raining when we went out.'],
            explain: 'Action in progress = past continuous; interruption = past simple.',
          },
          {
            kind: 'dictation',
            id: 'a2-pc-ex7',
            text: 'She was reading when the phone rang.',
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
        summaryEs:
          'Usa **comparativos + than** para comparar dos cosas, **superlativos con the** para lo máximo de un grupo, y **(not) as...as** para decir que las cosas son iguales o desiguales.',
        sections: [
          {
            heading: 'Comparatives with than',
            body: 'Add **-er** to short adjectives (**cheaper**, **bigger**) and use **more** before longer ones (**more expensive**). Follow the comparison with **than**. Irregular: **good → better**, **bad → worse**, **far → further**.',
            bodyEs:
              'Añade **-er** a los adjetivos cortos (**cheaper**, **bigger**) y usa **more** antes de los largos (**more expensive**). Sigue la comparación con **than**. Irregulares: **good → better**, **bad → worse**, **far → further**.',
            examples: [
              {
                en: 'This bag is cheaper than that one.',
                es: 'Este bolso es más barato que ese.',
              },
              {
                en: 'Today is more interesting than yesterday.',
                es: 'Hoy es más interesante que ayer.',
              },
            ],
          },
          {
            heading: 'Superlatives with the',
            body: 'Use **the + -est** for short adjectives (**the cheapest**) and **the most** for longer ones (**the most expensive**). Irregular: **the best**, **the worst**. Use them for one thing at the top of a group.',
            bodyEs:
              'Usa **the + -est** para adjetivos cortos (**the cheapest**) y **the most** para los largos (**the most expensive**). Irregulares: **the best**, **the worst**. Úsalos para lo que está en la cima de un grupo.',
            examples: [
              {
                en: "It's the biggest city in Spain.",
                es: 'Es la ciudad más grande de España.',
              },
              {
                en: 'She is the best player on the team.',
                es: 'Es la mejor jugadora del equipo.',
              },
            ],
          },
          {
            heading: '(not) as...as',
            body: "Use **as + adjective + as** to say two things are equal (**Tom is as tall as Sam**). Use **not as...as** to say one is less (**This film isn't as good as the book**).",
            bodyEs:
              "Usa **as + adjetivo + as** para decir que dos cosas son iguales (**Tom is as tall as Sam**). Usa **not as...as** para decir que una es menos (**This film isn't as good as the book**).",
            examples: [
              {
                en: 'My phone is as fast as yours.',
                es: 'Mi teléfono es tan rápido como el tuyo.',
              },
              {
                en: "It isn't as cold as last week.",
                es: 'No hace tanto frío como la semana pasada.',
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
            es: 'El invierno es más frío que el otoño.',
          },
          {
            en: 'This is the most beautiful beach here.',
            es: 'Esta es la playa más bonita de aquí.',
          },
          {
            en: 'He runs faster than me.',
            es: 'Corre más rápido que yo.',
          },
          {
            en: "My car isn't as new as yours.",
            es: 'Mi coche no es tan nuevo como el tuyo.',
          },
          {
            en: 'That was the worst day of my life.',
            es: 'Ese fue el peor día de mi vida.',
          },
          {
            en: 'She is as clever as her brother.',
            es: 'Es tan lista como su hermano.',
          },
        ],
        pitfalls: [
          {
            wrong: 'This phone is more cheap than that one.',
            right: 'This phone is cheaper than that one.',
            why: "Short adjectives take '-er', not 'more'.",
            esNote: "Adjetivos cortos: '-er', no 'more'.",
          },
          {
            wrong: "It's the most big city.",
            right: "It's the biggest city.",
            why: "Short adjectives form the superlative with '-est', not 'most'.",
            esNote: "Cortos: 'the biggest', no 'the most big'.",
          },
          {
            wrong: 'She is more tall than me.',
            right: 'She is taller than me.',
            why: "Use the '-er' form for one-syllable adjectives like 'tall'.",
            esNote: "'tall' es corto: 'taller than'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-cs-ex1',
            before: 'A train is',
            after: 'than a bus. (fast)',
            answers: ['faster'],
            hint: 'short adjective + -er',
            explain: "'fast' is short, so add '-er': faster.",
          },
          {
            kind: 'cloze',
            id: 'a2-cs-ex2',
            before: 'It is the',
            after: 'restaurant in town. (expensive)',
            answers: ['most expensive'],
            hint: 'long adjective superlative',
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
            kind: 'correct',
            id: 'a2-cs-ex4',
            wrong: "This book isn't as interesting than the other one.",
            answers: ["This book isn't as interesting as the other one."],
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
            kind: 'translate',
            id: 'a2-cs-ex6',
            es: 'Mi hermana es más alta que yo.',
            answers: ['My sister is taller than me.', 'My sister is taller than I am.'],
            explain: "'tall' is short, so 'taller than'.",
          },
          {
            kind: 'dictation',
            id: 'a2-cs-ex7',
            text: 'This is the cheapest hotel in the city.',
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
        summaryEs:
          'Los **adverbios de modo** dicen cómo hacemos algo (normalmente adjetivo + **-ly**) y suelen ir **después del verbo o del objeto**. Cuidado con los irregulares **well**, **fast** y **hard**.',
        sections: [
          {
            heading: 'Forming adverbs of manner',
            body: 'Make most adverbs by adding **-ly** to the adjective: **quick → quickly**, **careful → carefully**. Adjectives ending in **-y** change to **-ily** (**happy → happily**). Some are irregular: **good → well**, and **fast** and **hard** do not change.',
            bodyEs:
              'Forma la mayoría de adverbios añadiendo **-ly** al adjetivo: **quick → quickly**, **careful → carefully**. Los terminados en **-y** cambian a **-ily** (**happy → happily**). Algunos son irregulares: **good → well**, y **fast** y **hard** no cambian.',
            examples: [
              {
                en: 'She speaks English fluently.',
                es: 'Habla inglés con fluidez.',
              },
              {
                en: 'He drives carefully.',
                es: 'Conduce con cuidado.',
              },
            ],
          },
          {
            heading: 'Adjective or adverb?',
            body: "An **adjective** describes a noun (**a quick car**), while an **adverb** describes a verb (**it moves quickly**). Use **well** as the adverb of 'good': **a good cook** but **she cooks well**.",
            bodyEs:
              "Un **adjetivo** describe un sustantivo (**a quick car**), mientras que un **adverbio** describe un verbo (**it moves quickly**). Usa **well** como adverbio de 'good': **a good cook** pero **she cooks well**.",
            examples: [
              {
                en: 'He is a good singer.',
                es: 'Es un buen cantante.',
              },
              {
                en: 'He sings well.',
                es: 'Canta bien.',
              },
            ],
          },
          {
            heading: 'Position in the sentence',
            body: 'Adverbs of manner normally come **after the verb**, or **after the object** if there is one (**She opened the door quietly**). Do not put the adverb between the verb and its object.',
            bodyEs:
              'Los adverbios de modo van normalmente **después del verbo**, o **después del objeto** si lo hay (**She opened the door quietly**). No pongas el adverbio entre el verbo y su objeto.',
            examples: [
              {
                en: 'They finished the test quickly.',
                es: 'Terminaron el examen rápidamente.',
              },
              {
                en: 'Please read the email carefully.',
                es: 'Por favor, lee el correo con atención.',
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
            es: 'Respondió la pregunta correctamente.',
          },
          {
            en: 'The children played happily.',
            es: 'Los niños jugaron felizmente.',
          },
          {
            en: 'He works hard every day.',
            es: 'Trabaja duro todos los días.',
          },
          {
            en: 'Can you speak more slowly?',
            es: '¿Puedes hablar más despacio?',
          },
          {
            en: 'I know the city well.',
            es: 'Conozco bien la ciudad.',
          },
          {
            en: 'They run very fast.',
            es: 'Corren muy rápido.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She sings very good.',
            right: 'She sings very well.',
            why: "After a verb, use the adverb 'well', not the adjective 'good'.",
            esNote: "Tras un verbo usa 'well', no 'good'.",
          },
          {
            wrong: 'He speaks fastly.',
            right: 'He speaks fast.',
            why: "'fast' is already an adverb; do not add '-ly'.",
            esNote: "'fast' no lleva '-ly'.",
          },
          {
            wrong: 'She opened quietly the door.',
            right: 'She opened the door quietly.',
            why: 'Do not place the adverb between the verb and its object.',
            esNote: 'No separes el verbo de su objeto con el adverbio.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-adv-ex1',
            before: 'He finished his homework',
            after: '. (quick)',
            answers: ['quickly'],
            hint: 'adjective + -ly',
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
            kind: 'correct',
            id: 'a2-adv-ex3',
            wrong: 'They speak very slow.',
            answers: ['They speak very slowly.'],
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
            kind: 'translate',
            id: 'a2-adv-ex5',
            es: 'Conduce con cuidado.',
            answers: ['He drives carefully.', 'She drives carefully.', 'Drive carefully.'],
            explain: "'con cuidado' = the adverb 'carefully'.",
          },
          {
            kind: 'translate',
            id: 'a2-adv-ex6',
            es: 'Trabajan duro.',
            answers: ['They work hard.'],
            explain: "'hard' is the adverb here, with no '-ly'.",
          },
          {
            kind: 'dictation',
            id: 'a2-adv-ex7',
            text: 'Please close the door quietly.',
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
        summaryEs:
          "Usa **should** para consejo, **must/have to** para obligación, **mustn't** para prohibición, **don't have to** para falta de obligación, y **might** para posibilidad. Los modales van seguidos del **verbo base**.",
        sections: [
          {
            heading: 'should for advice',
            body: "Use **should + base verb** to give advice or an opinion (**You should rest**). The negative **shouldn't** means it is not a good idea (**You shouldn't smoke**).",
            bodyEs:
              "Usa **should + verbo base** para dar un consejo u opinión (**You should rest**). La negativa **shouldn't** significa que no es buena idea (**You shouldn't smoke**).",
            examples: [
              {
                en: 'You should drink more water.',
                es: 'Deberías beber más agua.',
              },
              {
                en: "We shouldn't be late.",
                es: 'No deberíamos llegar tarde.',
              },
            ],
          },
          {
            heading: 'must, have to, and their negatives',
            body: "Use **must** and **have to** for strong obligation (**I must go**, **I have to work**). But the negatives are different: **mustn't** = prohibition (don't do it), while **don't have to** = no obligation (it isn't necessary).",
            bodyEs:
              "Usa **must** y **have to** para obligación fuerte (**I must go**, **I have to work**). Pero las negativas son distintas: **mustn't** = prohibición (no lo hagas), mientras que **don't have to** = sin obligación (no es necesario).",
            examples: [
              {
                en: "You mustn't park here.",
                es: 'No debes aparcar aquí.',
              },
              {
                en: "You don't have to come if you're tired.",
                es: 'No tienes que venir si estás cansado.',
              },
            ],
          },
          {
            heading: 'might for possibility',
            body: "Use **might + base verb** to say something is possible but not certain (**It might rain**). It is similar to 'maybe'. The negative is **might not**.",
            bodyEs:
              "Usa **might + verbo base** para decir que algo es posible pero no seguro (**It might rain**). Es parecido a 'maybe'. La negativa es **might not**.",
            examples: [
              {
                en: 'I might go to the party.',
                es: 'Puede que vaya a la fiesta.',
              },
              {
                en: 'She might not come.',
                es: 'Puede que ella no venga.',
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
            es: 'Deberías ver a un médico.',
          },
          {
            en: 'I have to finish this today.',
            es: 'Tengo que terminar esto hoy.',
          },
          {
            en: 'Visitors must show their ID.',
            es: 'Los visitantes deben mostrar su identificación.',
          },
          {
            en: "You don't have to pay; it's free.",
            es: 'No tienes que pagar; es gratis.',
          },
          {
            en: 'We might travel next summer.',
            es: 'Puede que viajemos el próximo verano.',
          },
          {
            en: "You mustn't use your phone here.",
            es: 'No debes usar el móvil aquí.',
          },
        ],
        pitfalls: [
          {
            wrong: 'You should to rest.',
            right: 'You should rest.',
            why: "After a modal like 'should', use the base verb without 'to'.",
            esNote: "Tras 'should' no se pone 'to'.",
          },
          {
            wrong: "You mustn't pay; it's free.",
            right: "You don't have to pay; it's free.",
            why: "'mustn't' means it is forbidden; for 'not necessary' use 'don't have to'.",
            esNote: "'no es necesario' = 'don't have to', no 'mustn't'.",
          },
          {
            wrong: 'It maybe rains tomorrow.',
            right: 'It might rain tomorrow.',
            why: "'might' is a modal followed by the base verb; 'maybe' is a separate adverb.",
            esNote: "Con 'might' usa el verbo base: 'might rain'.",
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
            kind: 'cloze',
            id: 'a2-mod-ex2',
            before: 'You look tired. You',
            after: 'go to bed early.',
            answers: ['should'],
            hint: 'advice',
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
            kind: 'correct',
            id: 'a2-mod-ex4',
            wrong: 'She should to study more.',
            answers: ['She should study more.'],
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
            kind: 'translate',
            id: 'a2-mod-ex6',
            es: 'Tengo que trabajar mañana.',
            answers: ['I have to work tomorrow.', 'I must work tomorrow.'],
            explain: "Obligation = 'have to' / 'must' + base verb.",
          },
          {
            kind: 'dictation',
            id: 'a2-mod-ex7',
            text: "You shouldn't drink so much coffee.",
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
        summaryEs:
          'Usa el **zero conditional** (if + presente, presente) para hechos y verdades generales, y el **first conditional** (if + presente, will + verbo) para resultados futuros probables.',
        sections: [
          {
            heading: 'Zero conditional: facts',
            body: 'Use **if + present simple, present simple** for things that are always true (**If you heat ice, it melts**). You can replace **if** with **when** because the result always happens.',
            bodyEs:
              'Usa **if + presente simple, presente simple** para cosas siempre ciertas (**If you heat ice, it melts**). Puedes cambiar **if** por **when** porque el resultado siempre ocurre.',
            examples: [
              {
                en: 'If you mix blue and yellow, you get green.',
                es: 'Si mezclas azul y amarillo, obtienes verde.',
              },
              {
                en: "Plants die if they don't get water.",
                es: 'Las plantas mueren si no reciben agua.',
              },
            ],
          },
          {
            heading: 'First conditional: likely future',
            body: "Use **if + present simple, will + base verb** for a real possible result in the future (**If it rains, we will stay home**). Use the **present simple** after 'if', never 'will'.",
            bodyEs:
              "Usa **if + presente simple, will + verbo base** para un resultado real posible en el futuro (**If it rains, we will stay home**). Usa el **presente simple** tras 'if', nunca 'will'.",
            examples: [
              {
                en: 'If you study, you will pass.',
                es: 'Si estudias, aprobarás.',
              },
              {
                en: "We will be late if we don't hurry.",
                es: 'Llegaremos tarde si no nos damos prisa.',
              },
            ],
          },
          {
            heading: 'Word order and commas',
            body: "The **if-clause** can come first or second. When 'if' comes first, use a **comma** (**If you call me, I'll answer**). When it comes second, no comma is needed (**I'll answer if you call me**).",
            bodyEs:
              "La **oración con if** puede ir primero o segundo. Cuando 'if' va primero, usa una **coma** (**If you call me, I'll answer**). Cuando va segundo, no hace falta coma (**I'll answer if you call me**).",
            examples: [
              {
                en: "If you're hungry, I'll cook something.",
                es: 'Si tienes hambre, cocino algo.',
              },
              {
                en: "I'll cook something if you're hungry.",
                es: 'Cocino algo si tienes hambre.',
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
            es: 'Si pulsas este botón, la máquina arranca.',
          },
          {
            en: "If I have time, I'll call you.",
            es: 'Si tengo tiempo, te llamaré.',
          },
          {
            en: 'Water boils if you heat it to 100°C.',
            es: 'El agua hierve si la calientas a 100 °C.',
          },
          {
            en: "She won't come if she's busy.",
            es: 'No vendrá si está ocupada.',
          },
          {
            en: "If we leave now, we'll catch the train.",
            es: 'Si salimos ahora, cogeremos el tren.',
          },
          {
            en: 'What will you do if it rains?',
            es: '¿Qué harás si llueve?',
          },
        ],
        pitfalls: [
          {
            wrong: 'If it will rain, we will stay home.',
            right: 'If it rains, we will stay home.',
            why: "After 'if', use the present simple, not 'will'.",
            esNote: "Tras 'if' nunca va 'will'; usa el presente.",
          },
          {
            wrong: 'If you will heat ice, it melts.',
            right: 'If you heat ice, it melts.',
            why: 'Zero conditional uses the present simple in both parts.',
            esNote: 'El zero conditional usa presente en las dos partes.',
          },
          {
            wrong: "I'll help you, if you ask me.",
            right: "I'll help you if you ask me.",
            why: "When the if-clause comes second, do not add a comma before 'if'.",
            esNote: "Si 'if' va al final, no se pone coma antes.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-cond-ex1',
            before: 'If you heat water, it',
            after: '. (boil)',
            answers: ['boils'],
            hint: 'general truth',
            explain: 'Zero conditional: present simple in both clauses.',
          },
          {
            kind: 'cloze',
            id: 'a2-cond-ex2',
            before: 'If it rains tomorrow, we',
            after: 'at home.',
            answers: ['will stay', "'ll stay"],
            hint: 'future result',
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
            kind: 'correct',
            id: 'a2-cond-ex4',
            wrong: 'If she will study, she will pass the exam.',
            answers: ['If she studies, she will pass the exam.'],
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
            kind: 'translate',
            id: 'a2-cond-ex6',
            es: 'Si estudias, aprobarás.',
            answers: ['If you study, you will pass.', "If you study, you'll pass."],
            explain: "First conditional with 'will' for the future result.",
          },
          {
            kind: 'dictation',
            id: 'a2-cond-ex7',
            text: 'If you mix red and white, you get pink.',
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
        summaryEs:
          "Algunos verbos van seguidos de la forma **-ing** (gerundio), otros de **to + verbo** (infinitivo). Usa el **gerundio** tras preposiciones y ciertos verbos como 'enjoy', y el **infinitivo** tras verbos como 'want' y 'decide'.",
        sections: [
          {
            heading: 'Verbs + gerund',
            body: 'After verbs like **enjoy, like, love, hate, finish, mind, suggest** and **avoid**, use the **-ing** form (**I enjoy reading**). Also use the gerund as the subject of a sentence (**Swimming is healthy**).',
            bodyEs:
              'Tras verbos como **enjoy, like, love, hate, finish, mind, suggest** y **avoid**, usa la forma **-ing** (**I enjoy reading**). También usa el gerundio como sujeto (**Swimming is healthy**).',
            examples: [
              {
                en: 'She loves cooking.',
                es: 'Le encanta cocinar.',
              },
              {
                en: 'We finished painting the room.',
                es: 'Terminamos de pintar la habitación.',
              },
            ],
          },
          {
            heading: 'Verbs + infinitive',
            body: 'After verbs like **want, need, decide, hope, would like, promise** and **plan**, use **to + base verb** (**I want to travel**). Also use the infinitive to express purpose (**I went out to buy bread**).',
            bodyEs:
              'Tras verbos como **want, need, decide, hope, would like, promise** y **plan**, usa **to + verbo base** (**I want to travel**). También usa el infinitivo para expresar finalidad (**I went out to buy bread**).',
            examples: [
              {
                en: 'They decided to stay.',
                es: 'Decidieron quedarse.',
              },
              {
                en: 'I need to call my boss.',
                es: 'Necesito llamar a mi jefe.',
              },
            ],
          },
          {
            heading: 'Gerund after prepositions',
            body: "Always use the **-ing** form after a preposition (**good at swimming**, **interested in learning**, **before leaving**). Never use 'to + verb' directly after a preposition.",
            bodyEs:
              "Usa siempre la forma **-ing** tras una preposición (**good at swimming**, **interested in learning**, **before leaving**). Nunca uses 'to + verbo' justo después de una preposición.",
            examples: [
              {
                en: "She's good at drawing.",
                es: 'Se le da bien dibujar.',
              },
              {
                en: 'Think before speaking.',
                es: 'Piensa antes de hablar.',
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
            es: 'Disfruto escuchando música.',
          },
          {
            en: 'He wants to learn Italian.',
            es: 'Quiere aprender italiano.',
          },
          {
            en: "We're thinking about moving house.",
            es: 'Estamos pensando en mudarnos.',
          },
          {
            en: 'She decided to change jobs.',
            es: 'Decidió cambiar de trabajo.',
          },
          {
            en: 'Reading helps you relax.',
            es: 'Leer te ayuda a relajarte.',
          },
          {
            en: "They're interested in joining the club.",
            es: 'Están interesados en unirse al club.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I enjoy to read.',
            right: 'I enjoy reading.',
            why: "'enjoy' is always followed by the -ing form, not the infinitive.",
            esNote: "Tras 'enjoy' siempre va '-ing'.",
          },
          {
            wrong: 'I want learning English.',
            right: 'I want to learn English.',
            why: "'want' is followed by 'to + base verb', not the -ing form.",
            esNote: "Tras 'want' va 'to + verbo'.",
          },
          {
            wrong: "She's good at to cook.",
            right: "She's good at cooking.",
            why: "After a preposition like 'at', use the -ing form.",
            esNote: "Tras preposición siempre '-ing'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-gi-ex1',
            before: 'I enjoy',
            after: 'to new places. (travel)',
            answers: ['travelling', 'traveling'],
            hint: "after 'enjoy'",
            explain: "'enjoy' takes the -ing form.",
          },
          {
            kind: 'cloze',
            id: 'a2-gi-ex2',
            before: 'She wants',
            after: 'a doctor. (become)',
            answers: ['to become'],
            hint: "after 'want'",
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
            kind: 'correct',
            id: 'a2-gi-ex4',
            wrong: 'They decided buying a new car.',
            answers: ['They decided to buy a new car.'],
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
            kind: 'translate',
            id: 'a2-gi-ex6',
            es: 'Necesito hablar contigo.',
            answers: [
              'I need to talk to you.',
              'I need to speak to you.',
              'I need to speak with you.',
            ],
            explain: "'need' takes 'to + base verb'.",
          },
          {
            kind: 'dictation',
            id: 'a2-gi-ex7',
            text: 'She hopes to study abroad next year.',
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
        summaryEs:
          'Usa **many/a few** con sustantivos contables y **much/a little** con incontables. Usa **enough** para la cantidad suficiente, y elige la forma según si el sustantivo es contable.',
        sections: [
          {
            heading: 'much vs many',
            body: "Use **many** with **countable** plural nouns (**many books**) and **much** with **uncountable** nouns (**much time**). 'Much' and 'many' are most common in questions and negatives; in positives we often use **a lot of** (**a lot of friends**).",
            bodyEs:
              "Usa **many** con sustantivos **contables** en plural (**many books**) y **much** con **incontables** (**much time**). 'Much' y 'many' son más comunes en preguntas y negativas; en afirmativas solemos usar **a lot of** (**a lot of friends**).",
            examples: [
              {
                en: 'How many people are coming?',
                es: '¿Cuántas personas vienen?',
              },
              {
                en: "We don't have much money.",
                es: 'No tenemos mucho dinero.',
              },
            ],
          },
          {
            heading: 'a few vs a little',
            body: 'Use **a few** with countable nouns (**a few apples**) and **a little** with uncountable nouns (**a little milk**). Both mean a small but sufficient amount.',
            bodyEs:
              'Usa **a few** con sustantivos contables (**a few apples**) y **a little** con incontables (**a little milk**). Ambos significan una cantidad pequeña pero suficiente.',
            examples: [
              {
                en: 'I have a few questions.',
                es: 'Tengo unas pocas preguntas.',
              },
              {
                en: 'Add a little salt.',
                es: 'Añade un poco de sal.',
              },
            ],
          },
          {
            heading: 'enough',
            body: 'Use **enough** before a noun (**enough chairs**) but **after** an adjective or adverb (**old enough**, **fast enough**). It means the necessary amount.',
            bodyEs:
              'Usa **enough** antes de un sustantivo (**enough chairs**) pero **después** de un adjetivo o adverbio (**old enough**, **fast enough**). Significa la cantidad necesaria.',
            examples: [
              {
                en: "There aren't enough seats.",
                es: 'No hay suficientes asientos.',
              },
              {
                en: "He isn't tall enough.",
                es: 'No es lo bastante alto.',
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
            es: '¿Cuánta azúcar quieres?',
          },
          {
            en: 'There are too many cars in the city.',
            es: 'Hay demasiados coches en la ciudad.',
          },
          {
            en: 'I only need a little help.',
            es: 'Solo necesito un poco de ayuda.',
          },
          {
            en: 'We have a few days off.',
            es: 'Tenemos unos días libres.',
          },
          {
            en: 'Is there enough bread for everyone?',
            es: '¿Hay suficiente pan para todos?',
          },
          {
            en: "She's experienced enough for the job.",
            es: 'Tiene suficiente experiencia para el trabajo.',
          },
        ],
        pitfalls: [
          {
            wrong: 'How much friends do you have?',
            right: 'How many friends do you have?',
            why: "'friends' is countable, so use 'many', not 'much'.",
            esNote: "Contables: 'many'; incontables: 'much'.",
          },
          {
            wrong: 'I have a little books.',
            right: 'I have a few books.',
            why: "'books' is countable, so use 'a few', not 'a little'.",
            esNote: "Contables: 'a few'; incontables: 'a little'.",
          },
          {
            wrong: "He isn't enough old to drive.",
            right: "He isn't old enough to drive.",
            why: "'enough' goes after an adjective, not before it.",
            esNote: "Tras adjetivo: 'old enough', no 'enough old'.",
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
            kind: 'cloze',
            id: 'a2-q-ex2',
            before: 'There are only',
            after: 'eggs left, just three.',
            answers: ['a few'],
            hint: 'small amount, countable',
            explain: "'eggs' is countable, so 'a few'.",
          },
          {
            kind: 'cloze',
            id: 'a2-q-ex3',
            before: "She isn't experienced",
            after: 'for this job.',
            answers: ['enough'],
            hint: 'after the adjective',
            explain: "'enough' comes after the adjective.",
          },
          {
            kind: 'correct',
            id: 'a2-q-ex4',
            wrong: "We don't have many time.",
            answers: ["We don't have much time."],
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
            kind: 'translate',
            id: 'a2-q-ex6',
            es: 'Añade un poco de leche.',
            answers: ['Add a little milk.'],
            explain: "'milk' is uncountable, so 'a little'.",
          },
          {
            kind: 'dictation',
            id: 'a2-q-ex7',
            text: 'There are too many people here today.',
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
        summaryEs:
          'Usa **someone/anyone/no one**, **something/anything/nothing** y **somewhere/anywhere** para personas, cosas y lugares desconocidos. Usa los **pronombres reflexivos** (myself, yourself...) cuando el sujeto y el objeto son el mismo.',
        sections: [
          {
            heading: 'some-, any-, no-',
            body: "Use **some-** words in positive sentences (**someone called**), **any-** words in questions and negatives (**Is anyone there?**, **I don't know anything**), and **no-** words for a negative meaning with a positive verb (**Nobody came**).",
            bodyEs:
              "Usa palabras con **some-** en frases afirmativas (**someone called**), con **any-** en preguntas y negativas (**Is anyone there?**, **I don't know anything**), y con **no-** para significado negativo con verbo afirmativo (**Nobody came**).",
            examples: [
              {
                en: 'Someone is knocking at the door.',
                es: 'Alguien está llamando a la puerta.',
              },
              {
                en: "I didn't see anything strange.",
                es: 'No vi nada extraño.',
              },
            ],
          },
          {
            heading: 'Reflexive pronouns',
            body: "Use **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** when the action returns to the subject (**I hurt myself**). Use **by + reflexive** to mean 'alone' (**She lives by herself**).",
            bodyEs:
              "Usa **myself, yourself, himself, herself, itself, ourselves, yourselves, themselves** cuando la acción vuelve al sujeto (**I hurt myself**). Usa **by + reflexivo** para decir 'solo' (**She lives by herself**).",
            examples: [
              {
                en: 'He taught himself to play guitar.',
                es: 'Aprendió a tocar la guitarra por sí mismo.',
              },
              {
                en: 'We enjoyed ourselves at the party.',
                es: 'Nos lo pasamos bien en la fiesta.',
              },
            ],
          },
          {
            heading: 'These words take a singular verb',
            body: "Indefinite pronouns like **everyone, someone, nobody** and **everything** take a **singular verb** (**Everyone is here**). Do not add an extra negative with 'no-' words.",
            bodyEs:
              "Los pronombres indefinidos como **everyone, someone, nobody** y **everything** llevan **verbo en singular** (**Everyone is here**). No añadas otra negación con las palabras 'no-'.",
            examples: [
              {
                en: 'Everybody knows the answer.',
                es: 'Todo el mundo sabe la respuesta.',
              },
              {
                en: 'Nobody was at home.',
                es: 'No había nadie en casa.',
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
            es: '¿Hay algo de comer?',
          },
          {
            en: 'I want to go somewhere quiet.',
            es: 'Quiero ir a algún sitio tranquilo.',
          },
          {
            en: 'Nobody understands this rule.',
            es: 'Nadie entiende esta regla.',
          },
          {
            en: 'Did you make this yourself?',
            es: '¿Hiciste esto tú mismo?',
          },
          {
            en: 'The cat washed itself.',
            es: 'El gato se lavó solo.',
          },
          {
            en: 'Everyone needs a break.',
            es: 'Todos necesitan un descanso.',
          },
        ],
        pitfalls: [
          {
            wrong: "I don't know nothing.",
            right: "I don't know anything.",
            why: "English does not use a double negative; with 'don't', use 'anything'.",
            esNote: "El inglés no usa doble negación: 'don't ... anything'.",
          },
          {
            wrong: 'Everyone are happy.',
            right: 'Everyone is happy.',
            why: "'Everyone' takes a singular verb.",
            esNote: "'Everyone' lleva verbo en singular: 'is'.",
          },
          {
            wrong: 'She did it by her.',
            right: 'She did it by herself.',
            why: "To mean 'alone/by oneself', use the reflexive pronoun 'herself'.",
            esNote: "'por sí misma' = 'by herself'.",
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
            kind: 'cloze',
            id: 'a2-pr-ex2',
            before: 'He cut',
            after: 'while cooking.',
            answers: ['himself'],
            hint: 'subject = object',
            explain: "The action returns to 'he', so 'himself'.",
          },
          {
            kind: 'correct',
            id: 'a2-pr-ex3',
            wrong: "Nobody don't like Mondays.",
            answers: ['Nobody likes Mondays.'],
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
            kind: 'translate',
            id: 'a2-pr-ex6',
            es: 'No hay nadie en la oficina.',
            answers: [
              'There is no one in the office.',
              "There isn't anyone in the office.",
              "There's no one in the office.",
            ],
            explain: "Use 'no one' with a positive verb, or 'anyone' with a negative one.",
          },
          {
            kind: 'dictation',
            id: 'a2-pr-ex7',
            text: 'She taught herself to paint.',
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
        summaryEs:
          "Usa las **question tags** para confirmar información (**..., isn't it?**), las **preguntas de sujeto** sin 'do' cuando la palabra interrogativa es el sujeto (**Who called?**), y **so/neither + auxiliar** para mostrar acuerdo.",
        sections: [
          {
            heading: 'Question tags',
            body: "Add a short **tag** to confirm something. A positive sentence takes a negative tag, and a negative sentence takes a positive tag (**You're tired, aren't you?** / **She isn't here, is she?**). Use the same auxiliary as the main verb.",
            bodyEs:
              "Añade una **tag** corta para confirmar algo. Una frase afirmativa lleva tag negativa, y una negativa lleva tag afirmativa (**You're tired, aren't you?** / **She isn't here, is she?**). Usa el mismo auxiliar que el verbo principal.",
            examples: [
              {
                en: "It's cold today, isn't it?",
                es: 'Hace frío hoy, ¿verdad?',
              },
              {
                en: "You don't smoke, do you?",
                es: 'No fumas, ¿no?',
              },
            ],
          },
          {
            heading: 'Subject questions',
            body: "When the question word (**who, what, which**) is the **subject**, do not use 'do/does/did'. Keep normal word order (**Who broke the window?**, **What happened?**). Use 'do' only when asking about the object (**Who did you see?**).",
            bodyEs:
              "Cuando la palabra interrogativa (**who, what, which**) es el **sujeto**, no uses 'do/does/did'. Mantén el orden normal (**Who broke the window?**, **What happened?**). Usa 'do' solo al preguntar por el objeto (**Who did you see?**).",
            examples: [
              {
                en: 'Who lives here?',
                es: '¿Quién vive aquí?',
              },
              {
                en: 'What makes you happy?',
                es: '¿Qué te hace feliz?',
              },
            ],
          },
          {
            heading: 'so and neither for agreeing',
            body: "Use **So + auxiliary + subject** to agree with a positive statement (**I'm tired. — So am I.**), and **Neither + auxiliary + subject** to agree with a negative one (**I don't drink. — Neither do I.**). Note the inverted word order.",
            bodyEs:
              "Usa **So + auxiliar + sujeto** para coincidir con una frase afirmativa (**I'm tired. — So am I.**), y **Neither + auxiliar + sujeto** para una negativa (**I don't drink. — Neither do I.**). Fíjate en el orden invertido.",
            examples: [
              {
                en: 'I love pizza. — So do I.',
                es: 'Me encanta la pizza. — A mí también.',
              },
              {
                en: "She can't swim. — Neither can I.",
                es: 'Ella no sabe nadar. — Yo tampoco.',
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
            es: 'Sabes nadar, ¿verdad?',
          },
          {
            en: "They didn't call, did they?",
            es: 'No llamaron, ¿no?',
          },
          {
            en: 'Who wrote this email?',
            es: '¿Quién escribió este correo?',
          },
          {
            en: 'What happened last night?',
            es: '¿Qué pasó anoche?',
          },
          {
            en: "I'm hungry. — So am I.",
            es: 'Tengo hambre. — Yo también.',
          },
          {
            en: "I don't like horror films. — Neither do I.",
            es: 'No me gustan las películas de terror. — A mí tampoco.',
          },
        ],
        pitfalls: [
          {
            wrong: "You are tired, isn't it?",
            right: "You are tired, aren't you?",
            why: 'The tag must match the subject and auxiliary of the sentence.',
            esNote: "La tag usa el mismo auxiliar y sujeto: 'aren't you?'.",
          },
          {
            wrong: 'Who did break the window?',
            right: 'Who broke the window?',
            why: "When 'who' is the subject, do not use 'did'; use the past simple directly.",
            esNote: "Si 'who' es el sujeto, no se usa 'did'.",
          },
          {
            wrong: 'I like coffee. — So I do.',
            right: 'I like coffee. — So do I.',
            why: "After 'so', invert: auxiliary before the subject.",
            esNote: "Tras 'so' se invierte: 'So do I'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-qa-ex1',
            before: "It's a beautiful day,",
            after: '?',
            answers: ["isn't it"],
            hint: 'positive sentence, negative tag',
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
            kind: 'cloze',
            id: 'a2-qa-ex3',
            before: "A: I can't cook. B:",
            after: 'can I.',
            answers: ['Neither'],
            hint: 'agreeing with a negative',
            explain: "Agree with a negative using 'Neither can I'.",
          },
          {
            kind: 'correct',
            id: 'a2-qa-ex4',
            wrong: "She works here, doesn't she works?",
            answers: ["She works here, doesn't she?"],
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
            kind: 'translate',
            id: 'a2-qa-ex6',
            es: '¿Quién te llamó anoche?',
            answers: ['Who called you last night?'],
            explain: "'who' is the subject here, so use no 'did' and the past simple 'called'.",
          },
          {
            kind: 'dictation',
            id: 'a2-qa-ex7',
            text: "You haven't met him before, have you?",
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
        summaryEs:
          'Usa el **presente perfecto continuo** (have/has been + -ing) para destacar la duración de una actividad que empezó en el pasado y continúa ahora o acaba de terminar. Compáralo con el **pasado simple**, que describe acciones terminadas en un momento terminado.',
        sections: [
          {
            heading: 'Form and main use',
            body: 'Build it with **have/has + been + verb-ing**. We use it to emphasise how long an action has been happening, often with **for** and **since**. The action may continue now or may have just finished with a visible result.',
            bodyEs:
              'Se forma con **have/has + been + verbo-ing**. Lo usamos para enfatizar cuánto tiempo lleva ocurriendo una acción, a menudo con **for** y **since**. La acción puede continuar ahora o acabar de terminar dejando un resultado visible.',
            examples: [
              {
                en: 'I have been studying English for three years.',
                es: 'Llevo tres años estudiando inglés.',
              },
              {
                en: "She's tired because she has been running.",
                es: 'Está cansada porque ha estado corriendo.',
              },
            ],
          },
          {
            heading: 'Continuous vs Past Simple',
            body: 'Use the **present perfect continuous** when the time is unfinished or connected to now. Use the **past simple** for an action completed at a specific finished moment (yesterday, in 2010, last week).',
            bodyEs:
              'Usa el **presente perfecto continuo** cuando el tiempo no ha terminado o está conectado con el ahora. Usa el **pasado simple** para una acción completada en un momento terminado concreto (yesterday, in 2010, last week).',
            examples: [
              {
                en: 'We have been waiting for an hour. (still waiting)',
                es: 'Llevamos una hora esperando. (todavía esperando)',
              },
              {
                en: 'We waited for an hour and then left. (finished)',
                es: 'Esperamos una hora y luego nos fuimos. (terminado)',
              },
            ],
          },
          {
            heading: 'Stative verbs',
            body: 'Verbs of state such as **know, be, like, have (possess)** are not normally used in continuous forms. Use the **present perfect simple** instead.',
            bodyEs:
              'Los verbos de estado como **know, be, like, have (poseer)** no se usan normalmente en formas continuas. Usa el **presente perfecto simple** en su lugar.',
            examples: [
              {
                en: 'I have known her since 2015.',
                es: 'La conozco desde 2015.',
              },
              {
                en: 'He has had that car for years.',
                es: 'Tiene ese coche desde hace años.',
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
            es: '¿Cuánto tiempo llevas aprendiendo a conducir?',
          },
          {
            en: 'My eyes hurt because I have been reading all day.',
            es: 'Me duelen los ojos porque he estado leyendo todo el día.',
          },
          {
            en: 'They have been living here since March.',
            es: 'Viven aquí desde marzo.',
          },
          {
            en: 'I called you twice last night.',
            es: 'Te llamé dos veces anoche.',
          },
          {
            en: 'It has been raining, so the streets are wet.',
            es: 'Ha estado lloviendo, así que las calles están mojadas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am studying English since three years.',
            right: 'I have been studying English for three years.',
            why: "Spanish uses the present tense for duration, but English needs a perfect form plus 'for' with a period.",
            esNote: "No uses el presente simple para la duración; usa 'have been + -ing'.",
          },
          {
            wrong: 'I have been knowing him for years.',
            right: 'I have known him for years.',
            why: "Stative verbs like 'know' are not used in continuous forms.",
            esNote: 'Los verbos de estado no van en continuo.',
          },
          {
            wrong: 'I have seen her yesterday.',
            right: 'I saw her yesterday.',
            why: "A finished time word like 'yesterday' requires the past simple, not a perfect form.",
            esNote: "Con 'yesterday' usa pasado simple.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-ppc-ex1',
            before: 'She is exhausted because she',
            after: 'all morning. (clean)',
            answers: ['has been cleaning', "'s been cleaning"],
            hint: 'present perfect continuous',
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
            kind: 'correct',
            id: 'b1-ppc-ex3',
            wrong: "We are waiting for the bus since 8 o'clock.",
            answers: [
              "We have been waiting for the bus since 8 o'clock.",
              "We've been waiting for the bus since 8 o'clock.",
            ],
            explain: 'Duration up to now uses present perfect continuous, not the present.',
          },
          {
            kind: 'translate',
            id: 'b1-ppc-ex4',
            es: 'Llevan dos horas jugando al fútbol.',
            answers: [
              'They have been playing football for two hours.',
              "They've been playing football for two hours.",
              'They have been playing soccer for two hours.',
            ],
            explain: "'Llevar + gerundio' maps to have been + -ing with 'for'.",
          },
          {
            kind: 'order',
            id: 'b1-ppc-ex5',
            tokens: ['How', 'long', 'have', 'you', 'been', 'working', 'here?'],
            answer: 'How long have you been working here?',
            explain: 'Question word + have + subject + been + -ing.',
          },
          {
            kind: 'cloze',
            id: 'b1-ppc-ex6',
            before: 'I',
            after: 'her since we were children. (know)',
            answers: ['have known', "'ve known"],
            hint: 'stative verb',
            explain: "'Know' is stative, so use the present perfect simple.",
          },
          {
            kind: 'dictation',
            id: 'b1-ppc-ex7',
            text: 'It has been snowing all night, so the roads are dangerous.',
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
        summaryEs:
          'Usa el **pasado perfecto** (had + participio pasado) para una acción que ocurrió antes de otra acción pasada. Usa **used to** y **would** para hábitos del pasado, y **be used to** para cosas que ahora resultan familiares.',
        sections: [
          {
            heading: 'Past perfect: the earlier past',
            body: 'Form it with **had + past participle**. It shows which of two past events happened first. The later event is usually in the **past simple**.',
            bodyEs:
              'Se forma con **had + participio pasado**. Muestra cuál de dos eventos pasados ocurrió primero. El evento posterior suele ir en **pasado simple**.',
            examples: [
              {
                en: 'When I arrived, the train had already left.',
                es: 'Cuando llegué, el tren ya se había ido.',
              },
              {
                en: 'She had never seen the sea before that trip.',
                es: 'Nunca había visto el mar antes de ese viaje.',
              },
            ],
          },
          {
            heading: 'Used to and would for past habits',
            body: "**Used to + infinitive** describes past habits or states that are no longer true. **Would + infinitive** also describes repeated past actions, but not states. We don't use 'would' for past states like 'live' or 'have'.",
            bodyEs:
              "**Used to + infinitivo** describe hábitos o estados del pasado que ya no son ciertos. **Would + infinitivo** también describe acciones repetidas del pasado, pero no estados. No usamos 'would' para estados pasados como 'live' o 'have'.",
            examples: [
              {
                en: 'I used to play tennis every weekend.',
                es: 'Solía jugar al tenis todos los fines de semana.',
              },
              {
                en: 'On Sundays we would visit my grandmother.',
                es: 'Los domingos visitábamos a mi abuela.',
              },
            ],
          },
          {
            heading: 'Be used to: being familiar with',
            body: "**Be used to + noun / -ing** means something is normal or familiar now. Don't confuse it with **used to**, which is about the past. **Get used to** means becoming familiar with something.",
            bodyEs:
              '**Be used to + sustantivo / -ing** significa que algo es normal o familiar ahora. No lo confundas con **used to**, que habla del pasado. **Get used to** significa acostumbrarse a algo.',
            examples: [
              {
                en: 'I am used to getting up early.',
                es: 'Estoy acostumbrado a levantarme temprano.',
              },
              {
                en: 'She is getting used to her new job.',
                es: 'Se está acostumbrando a su nuevo trabajo.',
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
            es: 'Habían terminado de cenar antes de que llegáramos.',
          },
          {
            en: 'He realised he had forgotten his keys.',
            es: 'Se dio cuenta de que había olvidado las llaves.',
          },
          {
            en: 'There used to be a cinema on this street.',
            es: 'Solía haber un cine en esta calle.',
          },
          {
            en: "We didn't use to have a car.",
            es: 'No solíamos tener coche.',
          },
          {
            en: "I'm not used to driving on the left.",
            es: 'No estoy acostumbrado a conducir por la izquierda.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived the party already finished.',
            right: 'When I arrived the party had already finished.',
            why: 'The earlier of two past actions needs the past perfect.',
            esNote: "La acción anterior necesita 'had + participio'.",
          },
          {
            wrong: 'I am used to get up early.',
            right: 'I am used to getting up early.',
            why: "After 'be used to' the verb takes the -ing form, because 'to' is a preposition here.",
            esNote: "Tras 'be used to' va verbo en -ing.",
          },
          {
            wrong: 'I would live in Madrid when I was young.',
            right: 'I used to live in Madrid when I was young.',
            why: "'Would' is not used for past states like living somewhere; use 'used to'.",
            esNote: "Para estados pasados usa 'used to', no 'would'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-pp-ex1',
            before: 'By the time we got home, the film',
            after: '. (start)',
            answers: ['had started', "'d started"],
            hint: 'earlier past action',
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
            kind: 'correct',
            id: 'b1-pp-ex3',
            wrong: "She still isn't used to work at night.",
            answers: [
              "She still isn't used to working at night.",
              "She still isn't used to work at nights.",
            ],
            explain: "After 'be used to' use the -ing form of the verb.",
          },
          {
            kind: 'translate',
            id: 'b1-pp-ex4',
            es: 'Cuando llegué, ellos ya habían comido.',
            answers: [
              'When I arrived, they had already eaten.',
              'When I arrived they had already eaten.',
            ],
            explain: 'Use the past perfect for the action that happened first.',
          },
          {
            kind: 'order',
            id: 'b1-pp-ex5',
            tokens: ['We', 'used', 'to', 'go', 'camping', 'every', 'summer.'],
            answer: 'We used to go camping every summer.',
            explain: "'Used to + infinitive' for a repeated past habit.",
          },
          {
            kind: 'cloze',
            id: 'b1-pp-ex6',
            before: 'It took me a while, but now I',
            after: 'to the cold weather. (get used)',
            answers: ['have got used', "'ve got used", 'got used'],
            hint: 'becoming familiar',
            explain: "'Get used to' expresses becoming familiar with something.",
          },
          {
            kind: 'dictation',
            id: 'b1-pp-ex7',
            text: 'He had never flown in a plane before that day.',
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
        summaryEs:
          'Usa el **futuro continuo** (will be + -ing) para una acción en progreso en un momento futuro. Haz **predicciones** con will, going to, may, might y could según el grado de seguridad.',
        sections: [
          {
            heading: 'Future continuous',
            body: 'Form it with **will be + verb-ing**. It describes an action that will be in progress at a particular time in the future. It can also describe future events expected to happen as part of a routine.',
            bodyEs:
              'Se forma con **will be + verbo-ing**. Describe una acción que estará en progreso en un momento concreto del futuro. También describe eventos futuros esperados como parte de una rutina.',
            examples: [
              {
                en: 'This time tomorrow I will be flying to Rome.',
                es: 'Mañana a esta hora estaré volando a Roma.',
              },
              {
                en: "Don't call at 8; we'll be having dinner.",
                es: 'No llames a las 8; estaremos cenando.',
              },
            ],
          },
          {
            heading: 'Predictions: will vs going to',
            body: "Use **will** for predictions based on opinion or belief (often with 'I think', 'probably'). Use **going to** for predictions based on present evidence you can see.",
            bodyEs:
              "Usa **will** para predicciones basadas en opinión o creencia (a menudo con 'I think', 'probably'). Usa **going to** para predicciones basadas en evidencia presente que puedes ver.",
            examples: [
              {
                en: 'I think it will rain later.',
                es: 'Creo que lloverá más tarde.',
              },
              {
                en: "Look at those clouds! It's going to rain.",
                es: '¡Mira esas nubes! Va a llover.',
              },
            ],
          },
          {
            heading: 'Degrees of certainty',
            body: "To show you are less sure, use **may, might or could**. These mean 'perhaps'. Add **probably** with 'will' for likely predictions and **definitely** for very sure ones.",
            bodyEs:
              "Para mostrar menos seguridad, usa **may, might o could**. Significan 'quizás'. Añade **probably** con 'will' para predicciones probables y **definitely** para las muy seguras.",
            examples: [
              {
                en: 'They might arrive late.',
                es: 'Puede que lleguen tarde.',
              },
              {
                en: "She'll probably win the prize.",
                es: 'Probablemente gane el premio.',
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
            es: 'A las 10 de la mañana estaremos haciendo el examen.',
          },
          {
            en: 'By next year, prices will have risen.',
            es: 'Para el próximo año, los precios habrán subido.',
          },
          {
            en: "I'm sure you will pass your test.",
            es: 'Estoy seguro de que aprobarás tu examen.',
          },
          {
            en: "Be careful, you're going to drop it!",
            es: '¡Ten cuidado, se te va a caer!',
          },
          {
            en: "We might go to the beach if it's sunny.",
            es: 'Puede que vayamos a la playa si hace sol.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Look! The glass is falling, it will break.',
            right: "Look! The glass is falling, it's going to break.",
            why: "With clear present evidence, use 'going to', not 'will'.",
            esNote: "Con evidencia visible usa 'going to'.",
          },
          {
            wrong: 'Tomorrow at five I will work.',
            right: 'Tomorrow at five I will be working.',
            why: 'For an action in progress at a future time, use the future continuous.',
            esNote: "Para algo en progreso en el futuro usa 'will be + -ing'.",
          },
          {
            wrong: 'It maybe rains tomorrow.',
            right: 'It may rain tomorrow.',
            why: "'May/might' are modal verbs followed by a bare infinitive; 'maybe' is a separate adverb.",
            esNote: "'May/might' + infinitivo sin 'to'; 'maybe' es otra palabra.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-fc-ex1',
            before: 'This time next week, I',
            after: 'on a beach in Spain. (relax)',
            answers: ['will be relaxing', "'ll be relaxing"],
            hint: 'future continuous',
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
            kind: 'correct',
            id: 'b1-fc-ex3',
            wrong: 'Maybe they will to come later.',
            answers: ['Maybe they will come later.', 'They might come later.'],
            explain: "After 'will' use the bare infinitive without 'to'.",
          },
          {
            kind: 'translate',
            id: 'b1-fc-ex4',
            es: 'Puede que llueva esta tarde.',
            answers: [
              'It might rain this afternoon.',
              'It may rain this afternoon.',
              'It could rain this afternoon.',
            ],
            explain: "'Puede que' expresses possibility with may/might/could.",
          },
          {
            kind: 'order',
            id: 'b1-fc-ex5',
            tokens: ["Don't", 'phone', 'at', 'nine;', "we'll", 'be', 'watching', 'the', 'match.'],
            answer: "Don't phone at nine; we'll be watching the match.",
            explain: 'Future continuous for an action in progress at a set time.',
          },
          {
            kind: 'cloze',
            id: 'b1-fc-ex6',
            before: "She'll",
            after: 'win because she has trained so hard. (probable)',
            answers: ['probably'],
            hint: 'adverb of likelihood',
            explain: "'Probably' goes after 'will' to show a likely prediction.",
          },
          {
            kind: 'dictation',
            id: 'b1-fc-ex7',
            text: 'By this time tomorrow we will be driving to the mountains.',
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
        summaryEs:
          'Usa el **segundo condicional** para situaciones presentes irreales o poco probables y el **tercer condicional** para situaciones pasadas irreales. Usa **wish** para hablar de cosas que te gustaría que fueran diferentes.',
        sections: [
          {
            heading: 'Second conditional',
            body: "Structure: **If + past simple, would + infinitive**. It describes imaginary or unlikely present/future situations. After 'if', we often use **were** for all persons.",
            bodyEs:
              "Estructura: **If + pasado simple, would + infinitivo**. Describe situaciones presentes/futuras imaginarias o poco probables. Tras 'if', solemos usar **were** para todas las personas.",
            examples: [
              {
                en: 'If I had more time, I would learn the piano.',
                es: 'Si tuviera más tiempo, aprendería piano.',
              },
              {
                en: 'If I were you, I would apologise.',
                es: 'Si yo fuera tú, me disculparía.',
              },
            ],
          },
          {
            heading: 'Third conditional',
            body: 'Structure: **If + past perfect, would have + past participle**. It describes imaginary situations in the past and their imagined results. The situation did not really happen.',
            bodyEs:
              'Estructura: **If + pasado perfecto, would have + participio pasado**. Describe situaciones imaginarias en el pasado y sus resultados imaginados. La situación no ocurrió realmente.',
            examples: [
              {
                en: 'If I had studied, I would have passed.',
                es: 'Si hubiera estudiado, habría aprobado.',
              },
              {
                en: "She wouldn't have missed the train if she had left earlier.",
                es: 'No habría perdido el tren si hubiera salido antes.',
              },
            ],
          },
          {
            heading: 'Wish',
            body: 'Use **wish + past simple** to regret a present situation, and **wish + past perfect** to regret the past. Use **wish + would** to complain about annoying behaviour you want to change.',
            bodyEs:
              'Usa **wish + pasado simple** para lamentar una situación presente, y **wish + pasado perfecto** para lamentar el pasado. Usa **wish + would** para quejarte de un comportamiento molesto que quieres cambiar.',
            examples: [
              {
                en: 'I wish I had a bigger flat.',
                es: 'Ojalá tuviera un piso más grande.',
              },
              {
                en: "I wish you wouldn't shout.",
                es: 'Ojalá no gritaras.',
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
            es: 'Si no fuera tan caro, lo compraría.',
          },
          {
            en: 'What would you do if you won the lottery?',
            es: '¿Qué harías si ganaras la lotería?',
          },
          {
            en: 'If they had warned us, we would have stayed home.',
            es: 'Si nos hubieran avisado, nos habríamos quedado en casa.',
          },
          {
            en: 'I wish I could speak French.',
            es: 'Ojalá pudiera hablar francés.',
          },
          {
            en: "He wishes he hadn't sold his car.",
            es: 'Ojalá no hubiera vendido su coche.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have time, I would help you.',
            right: 'If I had time, I would help you.',
            why: "Do not use 'would' in the if-clause of a conditional; use a past tense.",
            esNote: "No pongas 'would' en la cláusula con 'if'.",
          },
          {
            wrong: 'If I would have studied, I would have passed.',
            right: 'If I had studied, I would have passed.',
            why: "The third conditional uses 'had + past participle' in the if-clause, not 'would have'.",
            esNote: "En el if-clause del tercer condicional va 'had + participio'.",
          },
          {
            wrong: 'I wish I have more money.',
            right: 'I wish I had more money.',
            why: "'Wish' about a present situation is followed by the past simple.",
            esNote: "'Wish' sobre el presente lleva pasado simple.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-cond-ex1',
            before: 'If I',
            after: 'rich, I would travel the world. (be)',
            answers: ['were', 'was'],
            hint: 'second conditional',
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
            kind: 'correct',
            id: 'b1-cond-ex3',
            wrong: 'If I would know the answer, I would tell you.',
            answers: [
              'If I knew the answer, I would tell you.',
              'If I knew the answer I would tell you.',
            ],
            explain: "Use the past simple, not 'would', in the if-clause.",
          },
          {
            kind: 'translate',
            id: 'b1-cond-ex4',
            es: 'Ojalá hubiera estudiado más.',
            answers: ['I wish I had studied more.', 'I wish I had studied harder.'],
            explain: "'Wish' + past perfect expresses regret about the past.",
          },
          {
            kind: 'order',
            id: 'b1-cond-ex5',
            tokens: ['What', 'would', 'you', 'do', 'if', 'you', 'lost', 'your', 'job?'],
            answer: 'What would you do if you lost your job?',
            explain: 'Second conditional question: would + subject + ... if + past simple.',
          },
          {
            kind: 'cloze',
            id: 'b1-cond-ex6',
            before: 'We would have arrived on time if the train',
            after: 'late. (not be)',
            answers: ["hadn't been", 'had not been'],
            hint: 'third conditional if-clause',
            explain: 'The if-clause of the third conditional uses the past perfect.',
          },
          {
            kind: 'dictation',
            id: 'b1-cond-ex7',
            text: "I wish you wouldn't leave your shoes in the hallway.",
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
        summaryEs:
          'Usa el **estilo indirecto** para contar lo que alguien dijo sin sus palabras exactas. Los tiempos normalmente retroceden un paso (**backshift**), y cambian los pronombres, lugares y tiempos. Elige con cuidado entre **say** y **tell**.',
        sections: [
          {
            heading: 'Backshift of tenses',
            body: 'When the reporting verb is in the past, the verb usually moves **one tense back**: present simple becomes past simple, present continuous becomes past continuous, will becomes would, and so on.',
            bodyEs:
              'Cuando el verbo introductorio está en pasado, el verbo suele retroceder **un tiempo**: presente simple pasa a pasado simple, presente continuo a pasado continuo, will a would, etc.',
            examples: [
              {
                en: '"I am tired." → She said she was tired.',
                es: '"Estoy cansada." → Dijo que estaba cansada.',
              },
              {
                en: '"I will call you." → He said he would call me.',
                es: '"Te llamaré." → Dijo que me llamaría.',
              },
            ],
          },
          {
            heading: 'Reported questions',
            body: "In reported questions there is **no inversion and no auxiliary 'do'**, and word order is like a statement. Use **if/whether** for yes/no questions and keep the question word for wh-questions.",
            bodyEs:
              "En las preguntas indirectas no hay **inversión ni auxiliar 'do'**, y el orden es como en una afirmación. Usa **if/whether** para preguntas de sí/no y mantén la palabra interrogativa en las wh-questions.",
            examples: [
              {
                en: '"Where do you live?" → She asked where I lived.',
                es: '"¿Dónde vives?" → Me preguntó dónde vivía.',
              },
              {
                en: '"Are you ready?" → He asked if I was ready.',
                es: '"¿Estás listo?" → Me preguntó si estaba listo.',
              },
            ],
          },
          {
            heading: 'Say vs tell',
            body: "**Tell** needs a person object (tell someone something). **Say** does not take a personal object directly; we say 'say to someone'. Also change time and place words: now→then, today→that day, here→there.",
            bodyEs:
              "**Tell** necesita un objeto de persona (tell someone something). **Say** no lleva un objeto personal directo; decimos 'say to someone'. Cambia también palabras de tiempo y lugar: now→then, today→that day, here→there.",
            examples: [
              {
                en: 'She told me she was leaving.',
                es: 'Me dijo que se marchaba.',
              },
              {
                en: 'She said (that) she was leaving.',
                es: 'Dijo que se marchaba.',
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
            es: 'Dijo que había terminado los deberes.',
          },
          {
            en: 'They told us they were moving abroad.',
            es: 'Nos dijeron que se mudaban al extranjero.',
          },
          {
            en: 'She asked me what time it was.',
            es: 'Me preguntó qué hora era.',
          },
          {
            en: 'I asked whether they wanted coffee.',
            es: 'Pregunté si querían café.',
          },
          {
            en: 'He told me to wait outside.',
            es: 'Me dijo que esperara fuera.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She said me that she was busy.',
            right: 'She told me that she was busy.',
            why: "Use 'tell' with a person object; 'say' does not take a personal object directly.",
            esNote: "Con objeto de persona usa 'tell', no 'say'.",
          },
          {
            wrong: 'He asked me where did I live.',
            right: 'He asked me where I lived.',
            why: "Reported questions use statement word order with no auxiliary 'do' and no inversion.",
            esNote: "En preguntas indirectas no hay inversión ni 'do'.",
          },
          {
            wrong: 'She said that she will come tomorrow.',
            right: 'She said that she would come the next day.',
            why: "After a past reporting verb, 'will' becomes 'would' and 'tomorrow' becomes 'the next day'.",
            esNote: 'Tras pasado: will→would y tomorrow→the next day.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-rs-ex1',
            before: '"I am hungry." She said she',
            after: 'hungry.',
            answers: ['was'],
            hint: 'backshift',
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
            kind: 'correct',
            id: 'b1-rs-ex3',
            wrong: 'She said me that the shop was closed.',
            answers: [
              'She told me that the shop was closed.',
              'She told me the shop was closed.',
              'She said that the shop was closed.',
            ],
            explain: "'Tell' takes a person object; 'say' does not.",
          },
          {
            kind: 'translate',
            id: 'b1-rs-ex4',
            es: 'Me preguntó si quería ir.',
            answers: [
              'She asked if I wanted to go.',
              'He asked if I wanted to go.',
              'She asked whether I wanted to go.',
              'He asked whether I wanted to go.',
            ],
            explain: "Reported yes/no question uses 'if/whether'.",
          },
          {
            kind: 'order',
            id: 'b1-rs-ex5',
            tokens: ['They', 'told', 'us', 'they', 'would', 'arrive', 'late.'],
            answer: 'They told us they would arrive late.',
            explain: "'Tell + person', and 'will' becomes 'would'.",
          },
          {
            kind: 'cloze',
            id: 'b1-rs-ex6',
            before: '"Open the door." He told me',
            after: 'the door.',
            answers: ['to open'],
            hint: 'reported command',
            explain: "Reported commands use 'tell someone to + infinitive'.",
          },
          {
            kind: 'dictation',
            id: 'b1-rs-ex7',
            text: 'She asked me what time the meeting would start.',
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
        summaryEs:
          'Usa la **voz pasiva** cuando la acción es más importante que quién la hace. Se forma con el verbo **be + participio pasado**. Añade **by** para mencionar al agente solo cuando importa.',
        sections: [
          {
            heading: 'Form across simple tenses',
            body: 'Keep the same tense in **be** and add the **past participle**: present simple (is made), past simple (was made), present perfect (has been made), future (will be made).',
            bodyEs:
              'Mantén el mismo tiempo en **be** y añade el **participio pasado**: presente simple (is made), pasado simple (was made), presente perfecto (has been made), futuro (will be made).',
            examples: [
              {
                en: 'The bridge was built in 1920.',
                es: 'El puente fue construido en 1920.',
              },
              {
                en: 'These cars are made in Japan.',
                es: 'Estos coches se fabrican en Japón.',
              },
            ],
          },
          {
            heading: 'When to use the passive',
            body: 'Use the passive when the **doer is unknown, obvious or unimportant**, or to sound more formal and objective. Mention the agent with **by** only when it adds information.',
            bodyEs:
              'Usa la pasiva cuando el **agente es desconocido, obvio o poco importante**, o para sonar más formal y objetivo. Menciona al agente con **by** solo cuando aporta información.',
            examples: [
              {
                en: 'My wallet was stolen yesterday.',
                es: 'Me robaron la cartera ayer.',
              },
              {
                en: 'The novel was written by a Spanish author.',
                es: 'La novela fue escrita por un autor español.',
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
            es: 'El inglés se habla en todo el mundo.',
          },
          {
            en: 'The results will be announced tomorrow.',
            es: 'Los resultados se anunciarán mañana.',
          },
          {
            en: 'The room has been cleaned already.',
            es: 'La habitación ya ha sido limpiada.',
          },
          {
            en: 'The letters were sent last week.',
            es: 'Las cartas se enviaron la semana pasada.',
          },
          {
            en: 'This dish is served with rice.',
            es: 'Este plato se sirve con arroz.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The house was build in 1990.',
            right: 'The house was built in 1990.',
            why: 'The passive needs the past participle, not the base form.',
            esNote: 'La pasiva lleva participio, no el infinitivo.',
          },
          {
            wrong: 'My car stole last night.',
            right: 'My car was stolen last night.',
            why: "A passive subject that receives the action needs 'be + past participle'.",
            esNote: "Falta el verbo 'be': 'was stolen'.",
          },
          {
            wrong: 'The report is wrote by the manager.',
            right: 'The report is written by the manager.',
            why: "'Write' has the irregular past participle 'written'.",
            esNote: "El participio de 'write' es 'written'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-pas-ex1',
            before: 'The Mona Lisa',
            after: 'by Leonardo da Vinci. (paint)',
            answers: ['was painted'],
            hint: 'past simple passive',
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
            kind: 'correct',
            id: 'b1-pas-ex3',
            wrong: 'These phones are make in China.',
            answers: ['These phones are made in China.', 'These phones are manufactured in China.'],
            explain: "Use the past participle 'made' in the passive.",
          },
          {
            kind: 'translate',
            id: 'b1-pas-ex4',
            es: 'Los resultados se publicarán mañana.',
            answers: [
              'The results will be published tomorrow.',
              'The results will be released tomorrow.',
            ],
            explain: 'Future passive: will be + past participle.',
          },
          {
            kind: 'order',
            id: 'b1-pas-ex5',
            tokens: ['The', 'windows', 'are', 'cleaned', 'every', 'week.'],
            answer: 'The windows are cleaned every week.',
            explain: 'Present simple passive: are + past participle.',
          },
          {
            kind: 'cloze',
            id: 'b1-pas-ex6',
            before: 'The thief',
            after: 'by the police last night. (catch)',
            answers: ['was caught'],
            hint: 'past passive, irregular verb',
            explain: "Past passive of 'catch' is 'was caught'.",
          },
          {
            kind: 'dictation',
            id: 'b1-pas-ex7',
            text: 'The new library will be opened next month.',
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
        summaryEs:
          'Usa las **oraciones de relativo** para dar más información sobre un sustantivo. Las **especificativas** identifican de cuál hablamos; las **explicativas** añaden información extra entre comas.',
        sections: [
          {
            heading: 'Relative pronouns',
            body: 'Use **who** for people, **which** for things, **that** for both (in defining clauses), **whose** for possession, and **where** for places. **When** refers to times.',
            bodyEs:
              'Usa **who** para personas, **which** para cosas, **that** para ambos (en especificativas), **whose** para posesión y **where** para lugares. **When** se refiere a momentos.',
            examples: [
              {
                en: 'The man who lives next door is a doctor.',
                es: 'El hombre que vive al lado es médico.',
              },
              {
                en: "That's the town where I grew up.",
                es: 'Ese es el pueblo donde crecí.',
              },
            ],
          },
          {
            heading: 'Defining clauses',
            body: 'A **defining** relative clause is essential: it tells us exactly which person or thing we mean, with **no commas**. You can use **that** instead of who/which, and the relative pronoun can be omitted when it is the object.',
            bodyEs:
              'Una oración de relativo **especificativa** es esencial: nos dice exactamente de qué persona o cosa hablamos, **sin comas**. Puedes usar **that** en lugar de who/which, y el pronombre relativo puede omitirse cuando es objeto.',
            examples: [
              {
                en: 'The book (that) I bought was cheap.',
                es: 'El libro que compré era barato.',
              },
              {
                en: "She's the teacher who helped me.",
                es: 'Es la profesora que me ayudó.',
              },
            ],
          },
          {
            heading: 'Non-defining clauses',
            body: 'A **non-defining** clause adds extra, non-essential information, always between **commas**. Do not use **that** here, and never omit the pronoun.',
            bodyEs:
              'Una oración **explicativa** añade información extra, no esencial, siempre entre **comas**. Aquí no se usa **that**, y nunca se omite el pronombre.',
            examples: [
              {
                en: 'My brother, who lives in Paris, is a chef.',
                es: 'Mi hermano, que vive en París, es chef.',
              },
              {
                en: 'The hotel, which was very old, had no lift.',
                es: 'El hotel, que era muy viejo, no tenía ascensor.',
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
            es: 'Este es el teléfono del que te hablé.',
          },
          {
            en: 'People who exercise tend to feel better.',
            es: 'Las personas que hacen ejercicio suelen sentirse mejor.',
          },
          {
            en: 'Mr Smith, whose car was stolen, called the police.',
            es: 'El Sr. Smith, cuyo coche fue robado, llamó a la policía.',
          },
          {
            en: 'The day when we met was rainy.',
            es: 'El día en que nos conocimos llovía.',
          },
          {
            en: 'Paris, which is the capital of France, is beautiful.',
            es: 'París, que es la capital de Francia, es preciosa.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The woman which lives upstairs is friendly.',
            right: 'The woman who lives upstairs is friendly.',
            why: "Use 'who' (or 'that') for people, not 'which'.",
            esNote: "Para personas usa 'who', no 'which'.",
          },
          {
            wrong: 'My mother, that is a nurse, works nights.',
            right: 'My mother, who is a nurse, works nights.',
            why: "In non-defining clauses you cannot use 'that'; use who/which.",
            esNote: "En explicativas no se usa 'that'.",
          },
          {
            wrong: 'The house where I live in is small.',
            right: 'The house where I live is small.',
            why: "'Where' already means 'in which', so do not add 'in' at the end.",
            esNote: "'Where' ya incluye 'in', no repitas la preposición.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-rel-ex1',
            before: "That's the girl",
            after: 'won the competition. (relative pronoun)',
            answers: ['who', 'that'],
            hint: 'person, subject',
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
            kind: 'correct',
            id: 'b1-rel-ex3',
            wrong: 'The film what I watched was boring.',
            answers: [
              'The film that I watched was boring.',
              'The film which I watched was boring.',
              'The film I watched was boring.',
            ],
            explain: "'What' is not a relative pronoun here; use that/which or omit it.",
          },
          {
            kind: 'translate',
            id: 'b1-rel-ex4',
            es: 'Esta es la casa donde nací.',
            answers: ['This is the house where I was born.', 'This is the house I was born in.'],
            explain: "'Where' refers to a place in a relative clause.",
          },
          {
            kind: 'order',
            id: 'b1-rel-ex5',
            tokens: ['The', 'man', 'whose', 'dog', 'barks', 'lives', 'next', 'door.'],
            answer: 'The man whose dog barks lives next door.',
            explain: "'Whose' shows possession in a relative clause.",
          },
          {
            kind: 'cloze',
            id: 'b1-rel-ex6',
            before: 'Venice,',
            after: 'is full of canals, is in Italy.',
            answers: ['which'],
            hint: 'non-defining, thing',
            explain: "Non-defining clause about a thing uses 'which'.",
          },
          {
            kind: 'dictation',
            id: 'b1-rel-ex7',
            text: 'The restaurant where we had dinner was fully booked.',
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
        summaryEs:
          "Usa los **modales de deducción** para decir cómo de seguro estás de algo. **Must** muestra que estás seguro de que es verdad, **can't** que es imposible, y **might/may/could** que es posible.",
        sections: [
          {
            heading: 'Present deduction',
            body: "Use **must + infinitive** when you are sure something is true, **can't + infinitive** when you are sure it is false, and **might/may/could + infinitive** when it is possible.",
            bodyEs:
              "Usa **must + infinitivo** cuando estás seguro de que algo es verdad, **can't + infinitivo** cuando estás seguro de que es falso, y **might/may/could + infinitivo** cuando es posible.",
            examples: [
              {
                en: 'She must be tired after that long flight.',
                es: 'Debe de estar cansada tras ese vuelo tan largo.',
              },
              {
                en: "That can't be John; he's in Spain.",
                es: 'Ese no puede ser John; está en España.',
              },
            ],
          },
          {
            heading: 'Past deduction',
            body: "For the past, use **must have + past participle** (sure it happened), **can't have + past participle** (sure it didn't), and **might/may/could have + past participle** (possible).",
            bodyEs:
              "Para el pasado, usa **must have + participio pasado** (seguro que ocurrió), **can't have + participio pasado** (seguro que no), y **might/may/could have + participio pasado** (posible).",
            examples: [
              {
                en: 'He must have left already; his coat is gone.',
                es: 'Debe de haberse ido ya; su abrigo no está.',
              },
              {
                en: 'They might have missed the train.',
                es: 'Puede que hayan perdido el tren.',
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
            es: '¡Debes de estar bromeando!',
          },
          {
            en: 'The lights are off; they must be asleep.',
            es: 'Las luces están apagadas; deben de estar dormidos.',
          },
          {
            en: "She can't be at home; her car isn't here.",
            es: 'No puede estar en casa; su coche no está aquí.',
          },
          {
            en: 'It might be raining outside.',
            es: 'Puede que esté lloviendo fuera.',
          },
          {
            en: 'Someone must have taken my umbrella.',
            es: 'Alguien debe de haberse llevado mi paraguas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He must to be at work.',
            right: 'He must be at work.',
            why: "Modal verbs are followed by a bare infinitive without 'to'.",
            esNote: "Tras un modal va el infinitivo sin 'to'.",
          },
          {
            wrong: "She mustn't be the manager; she's too young.",
            right: "She can't be the manager; she's too young.",
            why: "For a confident negative deduction use 'can't', not 'mustn't' (which means prohibition).",
            esNote: "Para deducción negativa segura usa 'can't', no 'mustn't'.",
          },
          {
            wrong: 'They must left early.',
            right: 'They must have left early.',
            why: "Past deduction needs 'have + past participle' after the modal.",
            esNote: "Para el pasado: 'must have + participio'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-mod-ex1',
            before: 'The ground is wet. It',
            after: 'have rained last night. (sure - yes)',
            answers: ['must'],
            hint: 'certain positive deduction',
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
            kind: 'correct',
            id: 'b1-mod-ex3',
            wrong: "That can't to be true.",
            answers: ["That can't be true.", 'That cannot be true.'],
            explain: "After a modal use the bare infinitive without 'to'.",
          },
          {
            kind: 'translate',
            id: 'b1-mod-ex4',
            es: 'Puede que se haya olvidado.',
            answers: [
              'He might have forgotten.',
              'She might have forgotten.',
              'He may have forgotten.',
              'She may have forgotten.',
              'He could have forgotten.',
              'She could have forgotten.',
            ],
            explain: 'Possibility in the past uses might/may/could have + past participle.',
          },
          {
            kind: 'order',
            id: 'b1-mod-ex5',
            tokens: ['She', "can't", 'be', 'hungry;', 'she', 'just', 'ate.'],
            answer: "She can't be hungry; she just ate.",
            explain: "'Can't' shows a confident negative deduction.",
          },
          {
            kind: 'cloze',
            id: 'b1-mod-ex6',
            before: "I'm not sure where she is. She",
            after: 'be at the gym. (possible)',
            answers: ['might', 'may', 'could'],
            hint: 'possibility',
            explain: 'Possibility is expressed with might/may/could.',
          },
          {
            kind: 'dictation',
            id: 'b1-mod-ex7',
            text: 'You must have been very proud of your team.',
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
        summaryEs:
          'Usa los **conectores** para enlazar ideas. **Although, though** y **even though** unen cláusulas contrastantes; **however** une oraciones; **despite/in spite of** llevan sustantivo o -ing; e **in order to / so that** expresan propósito.',
        sections: [
          {
            heading: 'Contrast with clauses',
            body: "**Although / even though / though** are followed by a **subject + verb**. They introduce a surprising contrast. 'Even though' is stronger than 'although'.",
            bodyEs:
              "**Although / even though / though** van seguidos de **sujeto + verbo**. Introducen un contraste sorprendente. 'Even though' es más fuerte que 'although'.",
            examples: [
              {
                en: 'Although it was cold, we went out.',
                es: 'Aunque hacía frío, salimos.',
              },
              {
                en: "He passed even though he hadn't studied.",
                es: 'Aprobó aunque no había estudiado.',
              },
            ],
          },
          {
            heading: 'Despite, in spite of, however',
            body: '**Despite** and **in spite of** are followed by a **noun or -ing**, not a full clause. **However** connects two sentences and is followed by a comma.',
            bodyEs:
              '**Despite** y **in spite of** van seguidos de un **sustantivo o -ing**, no de una cláusula completa. **However** conecta dos oraciones y va seguido de coma.',
            examples: [
              {
                en: 'Despite the rain, we enjoyed the trip.',
                es: 'A pesar de la lluvia, disfrutamos del viaje.',
              },
              {
                en: 'The plan was risky. However, it worked.',
                es: 'El plan era arriesgado. Sin embargo, funcionó.',
              },
            ],
          },
          {
            heading: 'Purpose',
            body: 'Use **in order to / to + infinitive** to express purpose with the same subject. Use **so that + clause** when the subject changes or a modal is needed.',
            bodyEs:
              'Usa **in order to / to + infinitivo** para expresar propósito con el mismo sujeto. Usa **so that + cláusula** cuando cambia el sujeto o se necesita un modal.',
            examples: [
              {
                en: 'I went home early in order to rest.',
                es: 'Me fui a casa temprano para descansar.',
              },
              {
                en: 'I spoke slowly so that everyone could understand.',
                es: 'Hablé despacio para que todos pudieran entender.',
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
            es: 'Aunque estaba nerviosa, dio una gran charla.',
          },
          {
            en: 'In spite of being tired, he finished the race.',
            es: 'A pesar de estar cansado, terminó la carrera.',
          },
          {
            en: 'The food was great. However, it was expensive.',
            es: 'La comida estaba buenísima. Sin embargo, era cara.',
          },
          {
            en: 'She studies hard in order to get a scholarship.',
            es: 'Estudia mucho para conseguir una beca.',
          },
          {
            en: "We left early so that we wouldn't miss the flight.",
            es: 'Salimos temprano para no perder el vuelo.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Despite it was raining, we went out.',
            right: 'Despite the rain, we went out.',
            why: "'Despite' is followed by a noun or -ing, not a subject + verb.",
            esNote: "'Despite' lleva sustantivo o -ing, no sujeto + verbo.",
          },
          {
            wrong: 'Although of the traffic, we arrived on time.',
            right: 'Despite the traffic, we arrived on time.',
            why: "'Although' needs a clause; use 'despite/in spite of' before a noun.",
            esNote: "Antes de un sustantivo usa 'despite', no 'although of'.",
          },
          {
            wrong: 'I called her for to invite her.',
            right: 'I called her to invite her.',
            why: "Purpose with the same subject uses 'to + infinitive', never 'for to'.",
            esNote: "El propósito se expresa con 'to + infinitivo', no 'for to'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-con-ex1',
            before: '',
            after: 'the bad weather, the match continued. (noun-linker)',
            answers: ['Despite', 'In spite of'],
            hint: 'before a noun',
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
            kind: 'correct',
            id: 'b1-con-ex3',
            wrong: 'In spite of it was late, we kept talking.',
            answers: [
              'In spite of the late hour, we kept talking.',
              'Although it was late, we kept talking.',
              'In spite of it being late, we kept talking.',
            ],
            explain: "'In spite of' takes a noun or -ing, not a clause.",
          },
          {
            kind: 'translate',
            id: 'b1-con-ex4',
            es: 'Estudio mucho para aprobar el examen.',
            answers: ['I study hard to pass the exam.', 'I study hard in order to pass the exam.'],
            explain: "Purpose with the same subject uses 'to / in order to + infinitive'.",
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
            kind: 'cloze',
            id: 'b1-con-ex6',
            before: 'The hotel was lovely.',
            after: ', it was far from the centre.',
            answers: ['However'],
            hint: 'contrast between two sentences',
            explain: "'However' links two sentences and is followed by a comma.",
          },
          {
            kind: 'dictation',
            id: 'b1-con-ex7',
            text: 'Even though we left late, we still arrived on time.',
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
        summaryEs:
          'Elige adjetivos en **-ed** para sentimientos y en **-ing** para la causa. Aprende qué verbos llevan **gerundio** o **infinitivo**, incluidos los que cambian de significado, y las **preposiciones dependientes** que acompañan a palabras comunes.',
        sections: [
          {
            heading: '-ed vs -ing adjectives',
            body: 'Use **-ed adjectives** (bored, tired, interested) to describe how a person feels. Use **-ing adjectives** (boring, tiring, interesting) to describe the thing that causes the feeling.',
            bodyEs:
              'Usa los **adjetivos en -ed** (bored, tired, interested) para describir cómo se siente una persona. Usa los **adjetivos en -ing** (boring, tiring, interesting) para describir la cosa que causa el sentimiento.',
            examples: [
              {
                en: "I'm bored. This film is boring.",
                es: 'Estoy aburrido. Esta película es aburrida.',
              },
              {
                en: 'She was surprised by the surprising result.',
                es: 'Estaba sorprendida por el sorprendente resultado.',
              },
            ],
          },
          {
            heading: 'Gerunds and infinitives',
            body: 'Some verbs take the **gerund** (enjoy, finish, avoid) and others the **infinitive** (want, decide, hope). After **prepositions** always use the **-ing form**.',
            bodyEs:
              'Algunos verbos llevan **gerundio** (enjoy, finish, avoid) y otros **infinitivo** (want, decide, hope). Tras las **preposiciones** se usa siempre la **forma -ing**.',
            examples: [
              {
                en: 'I enjoy cooking but I want to travel more.',
                es: 'Disfruto cocinando pero quiero viajar más.',
              },
              {
                en: "She's good at drawing.",
                es: 'Se le da bien dibujar.',
              },
            ],
          },
          {
            heading: 'Verbs that change meaning',
            body: 'Some verbs change meaning. **Remember/forget/stop** + gerund refers to the past; + infinitive refers to a duty or next step. **Try + -ing** means experiment; **try + to** means make an effort.',
            bodyEs:
              'Algunos verbos cambian de significado. **Remember/forget/stop** + gerundio se refiere al pasado; + infinitivo a una obligación o paso siguiente. **Try + -ing** significa experimentar; **try + to** significa esforzarse.',
            examples: [
              {
                en: 'I stopped smoking. / I stopped to smoke.',
                es: 'Dejé de fumar. / Me detuve para fumar.',
              },
              {
                en: 'Remember to lock the door.',
                es: 'Acuérdate de cerrar la puerta con llave.',
              },
            ],
          },
          {
            heading: 'Dependent prepositions',
            body: 'Many adjectives and verbs are followed by a fixed **preposition**: interested **in**, good **at**, afraid **of**, depend **on**, listen **to**, wait **for**. Learn them as whole phrases.',
            bodyEs:
              'Muchos adjetivos y verbos van seguidos de una **preposición** fija: interested **in**, good **at**, afraid **of**, depend **on**, listen **to**, wait **for**. Apréndelos como frases completas.',
            examples: [
              {
                en: "I'm interested in history.",
                es: 'Me interesa la historia.',
              },
              {
                en: 'It depends on the weather.',
                es: 'Depende del tiempo.',
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
            es: 'La lección era confusa, así que estábamos confundidos.',
          },
          {
            en: 'He avoided answering the question.',
            es: 'Evitó responder a la pregunta.',
          },
          {
            en: 'We decided to stay one more night.',
            es: 'Decidimos quedarnos una noche más.',
          },
          {
            en: 'Thank you for helping me.',
            es: 'Gracias por ayudarme.',
          },
          {
            en: "She's afraid of flying.",
            es: 'Tiene miedo de volar.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am very boring in this class.',
            right: 'I am very bored in this class.',
            why: "Use the -ed adjective for the feeling; 'boring' describes the cause.",
            esNote: "Para el sentimiento usa '-ed' (bored), no '-ing'.",
          },
          {
            wrong: 'She is good in cooking.',
            right: 'She is good at cooking.',
            why: "The fixed preposition after 'good' is 'at', not 'in'.",
            esNote: "Es 'good at', no 'good in'.",
          },
          {
            wrong: "I'm interested in learn languages.",
            right: "I'm interested in learning languages.",
            why: 'After a preposition use the -ing form, not the infinitive.',
            esNote: 'Tras preposición va el verbo en -ing.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-adj-ex1',
            before: 'The trip was long and we were all',
            after: '. (tire)',
            answers: ['tired'],
            hint: 'feeling',
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
            kind: 'correct',
            id: 'b1-adj-ex3',
            wrong: 'The documentary was very interested.',
            answers: [
              'The documentary was very interesting.',
              'The documentary was really interesting.',
            ],
            explain: 'The thing that causes interest takes the -ing adjective.',
          },
          {
            kind: 'translate',
            id: 'b1-adj-ex4',
            es: 'Gracias por venir.',
            answers: ['Thank you for coming.', 'Thanks for coming.'],
            explain: "After the preposition 'for', use the -ing form.",
          },
          {
            kind: 'order',
            id: 'b1-adj-ex5',
            tokens: ["Don't", 'forget', 'to', 'call', 'your', 'mother.'],
            answer: "Don't forget to call your mother.",
            explain: "'Forget to + infinitive' refers to a duty in the future.",
          },
          {
            kind: 'cloze',
            id: 'b1-adj-ex6',
            before: "She's really interested",
            after: 'learning to paint.',
            answers: ['in'],
            hint: 'dependent preposition',
            explain: "'Interested in' is the fixed combination, followed by -ing.",
          },
          {
            kind: 'dictation',
            id: 'b1-adj-ex7',
            text: 'I stopped drinking coffee because it made me nervous.',
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
        summaryEs:
          'Usa las **preguntas indirectas** para sonar más educado, con orden de afirmación. Usa **determinantes** como another, the other, both, either y neither para hablar con precisión sobre cantidad y elección.',
        sections: [
          {
            heading: 'Indirect questions',
            body: "Begin with a polite phrase like **Could you tell me...** or **Do you know...**. After it, use **statement word order** with no auxiliary 'do' and no inversion. Use **if/whether** for yes/no questions.",
            bodyEs:
              "Empieza con una frase educada como **Could you tell me...** o **Do you know...**. Después, usa el **orden de afirmación** sin auxiliar 'do' ni inversión. Usa **if/whether** para preguntas de sí/no.",
            examples: [
              {
                en: 'Could you tell me where the station is?',
                es: '¿Podría decirme dónde está la estación?',
              },
              {
                en: 'Do you know if the shop is open?',
                es: '¿Sabe si la tienda está abierta?',
              },
            ],
          },
          {
            heading: 'another / the other / others',
            body: "**Another** means 'one more' or 'a different one' (singular). **The other** means the specific remaining one. **Others / the others** are plural. Use **the other** when only two options remain.",
            bodyEs:
              "**Another** significa 'uno más' o 'uno diferente' (singular). **The other** significa el restante concreto. **Others / the others** son plurales. Usa **the other** cuando solo quedan dos opciones.",
            examples: [
              {
                en: 'Would you like another coffee?',
                es: '¿Quieres otro café?',
              },
              {
                en: "One shoe is here; where's the other one?",
                es: 'Un zapato está aquí; ¿dónde está el otro?',
              },
            ],
          },
          {
            heading: 'both / either / neither',
            body: '**Both** means the two together (+ plural verb). **Either** means one or the other (+ singular). **Neither** means not one and not the other (+ singular, already negative).',
            bodyEs:
              '**Both** significa los dos juntos (+ verbo plural). **Either** significa uno u otro (+ singular). **Neither** significa ni uno ni otro (+ singular, ya negativo).',
            examples: [
              {
                en: 'Both restaurants are good.',
                es: 'Ambos restaurantes son buenos.',
              },
              {
                en: 'Neither answer is correct.',
                es: 'Ninguna de las dos respuestas es correcta.',
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
            es: '¿Puede decirme qué hora es?',
          },
          {
            en: "I don't know where she lives.",
            es: 'No sé dónde vive.',
          },
          {
            en: "I'll have another slice of cake.",
            es: 'Tomaré otra porción de pastel.',
          },
          {
            en: 'Some people walked; others took the bus.',
            es: 'Algunos caminaron; otros tomaron el autobús.',
          },
          {
            en: 'Either day works for me.',
            es: 'Cualquiera de los dos días me viene bien.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Could you tell me where is the bank?',
            right: 'Could you tell me where the bank is?',
            why: 'Indirect questions use statement word order, so the verb does not come before the subject.',
            esNote: "En preguntas indirectas no se invierte: 'where the bank is'.",
          },
          {
            wrong: 'I want other coffee.',
            right: 'I want another coffee.',
            why: "'Another' (one word) is used with singular countable nouns to mean 'one more'.",
            esNote: "'Another' es una sola palabra con sustantivo singular.",
          },
          {
            wrong: 'Neither restaurants are open.',
            right: 'Neither restaurant is open.',
            why: "'Neither' takes a singular noun and a singular verb.",
            esNote: "'Neither' lleva sustantivo y verbo en singular.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'b1-iqd-ex1',
            before: 'Do you know what time the film',
            after: '? (start)',
            answers: ['starts'],
            hint: 'statement word order',
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
            kind: 'correct',
            id: 'b1-iqd-ex3',
            wrong: 'Both of the answer is wrong.',
            answers: ['Both answers are wrong.', 'Both of the answers are wrong.'],
            explain: "'Both' takes a plural noun and a plural verb.",
          },
          {
            kind: 'translate',
            id: 'b1-iqd-ex4',
            es: '¿Sabes si está abierto?',
            answers: [
              'Do you know if it is open?',
              "Do you know if it's open?",
              'Do you know whether it is open?',
            ],
            explain: "Indirect yes/no question uses 'if/whether' with statement order.",
          },
          {
            kind: 'order',
            id: 'b1-iqd-ex5',
            tokens: ["I'd", 'like', 'another', 'cup', 'of', 'tea,', 'please.'],
            answer: "I'd like another cup of tea, please.",
            explain: "'Another + singular noun' means one more.",
          },
          {
            kind: 'cloze',
            id: 'b1-iqd-ex6',
            before: 'I tried two shirts, but',
            after: 'one fitted me. (not one and not the other)',
            answers: ['neither'],
            hint: 'negative of two',
            explain: "'Neither' means not one and not the other.",
          },
          {
            kind: 'dictation',
            id: 'b1-iqd-ex7',
            text: 'Could you tell me whether this train goes to the airport?',
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
        summaryEs:
          'Los tiempos narrativos te permiten contar historias con claridad mostrando qué acciones ocurrieron primero, cuáles estaban en curso y cuáles son el fondo. Usa el pasado simple para los eventos principales ya terminados, el pasado continuo para acciones que ya estaban en curso, el pasado perfecto para eventos anteriores y el pasado perfecto continuo para resaltar la duración de una actividad anterior.',
        sections: [
          {
            heading: 'Main events and the background',
            body: 'Use the **past simple** for completed actions that move the story forward, one after another. Use the **past continuous** (was/were + -ing) for a longer action already in progress when a shorter action interrupted it, or to set the scene. The interrupting action goes in the **past simple**.',
            bodyEs:
              'Usa el **pasado simple** para acciones terminadas que hacen avanzar la historia, una tras otra. Usa el **pasado continuo** (was/were + -ing) para una acción más larga que ya estaba en curso cuando una acción más breve la interrumpió, o para ambientar la escena. La acción que interrumpe va en **pasado simple**.',
            examples: [
              {
                en: 'I was walking home when it started to rain.',
                es: 'Iba caminando a casa cuando empezó a llover.',
              },
              {
                en: 'The sun was shining and the birds were singing.',
                es: 'El sol brillaba y los pájaros cantaban.',
              },
            ],
          },
          {
            heading: 'Going further back: past perfect',
            body: "To refer to something that happened **before** another past moment, use the **past perfect** (had + past participle). It makes the order of events clear even when you mention them out of sequence. Compare: 'When I arrived, the film started' (I saw it begin) vs 'When I arrived, the film had started' (it began earlier).",
            bodyEs:
              "Para referirte a algo que ocurrió **antes** de otro momento pasado, usa el **pasado perfecto** (had + participio). Deja claro el orden de los eventos aunque los menciones sin seguir la secuencia. Compara: 'When I arrived, the film started' (lo vi empezar) frente a 'When I arrived, the film had started' (había empezado antes).",
            examples: [
              {
                en: 'She had already left when I called.',
                es: 'Ya se había ido cuando llamé.',
              },
              {
                en: "We couldn't get in because we had forgotten the keys.",
                es: 'No pudimos entrar porque habíamos olvidado las llaves.',
              },
            ],
          },
          {
            heading: 'Past perfect continuous',
            body: "Use the **past perfect continuous** (had been + -ing) to emphasise the **duration** of an activity that continued up to a point in the past, often to explain a visible result. 'My eyes were red because I had been crying.' It focuses on the ongoing process rather than the completed result.",
            bodyEs:
              "Usa el **pasado perfecto continuo** (had been + -ing) para resaltar la **duración** de una actividad que continuó hasta un punto en el pasado, a menudo para explicar un resultado visible. 'My eyes were red because I had been crying.' Se centra en el proceso en curso más que en el resultado terminado.",
            examples: [
              {
                en: 'The ground was wet because it had been raining all night.',
                es: 'El suelo estaba mojado porque había estado lloviendo toda la noche.',
              },
              {
                en: 'He was tired because he had been working since dawn.',
                es: 'Estaba cansado porque había estado trabajando desde el amanecer.',
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
            es: 'Cuando sonó la alarma, todos estaban durmiendo.',
          },
          {
            en: 'By the time the police arrived, the thief had escaped.',
            es: 'Para cuando llegó la policía, el ladrón había escapado.',
          },
          {
            en: 'She was exhausted because she had been studying for hours.',
            es: 'Estaba agotada porque había estado estudiando durante horas.',
          },
          {
            en: 'I recognised him at once: I had met him before.',
            es: 'Lo reconocí enseguida: lo había conocido antes.',
          },
          {
            en: 'While we were having dinner, the lights suddenly went out.',
            es: 'Mientras cenábamos, las luces se apagaron de repente.',
          },
          {
            en: 'They had been driving for six hours before they stopped to rest.',
            es: 'Habían estado conduciendo seis horas antes de parar a descansar.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived, she left.',
            right: 'When I arrived, she had left.',
            why: 'If she left before you arrived, the earlier action needs the past perfect to show the sequence.',
            esNote: "Usa 'had + participio' para lo que pasó antes.",
          },
          {
            wrong: 'I was knowing the answer immediately.',
            right: 'I knew the answer immediately.',
            why: "Stative verbs like 'know', 'understand' and 'believe' are not normally used in continuous forms.",
            esNote: 'Verbos de estado no van en continuo.',
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
            kind: 'cloze',
            id: 'b2-nt-2',
            before: 'She was tired because she ',
            after: ' all day.',
            answers: ['had been working', "'d been working"],
            explain:
              'The past perfect continuous stresses the duration of the activity that caused her tiredness.',
          },
          {
            kind: 'correct',
            id: 'b2-nt-3',
            wrong: 'While I cooked, the phone was ringing.',
            answers: [
              'While I was cooking, the phone rang.',
              'While I was cooking, the phone was ringing.',
            ],
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
            kind: 'translate',
            id: 'b2-nt-5',
            es: 'Estaba lloviendo cuando salí de casa.',
            answers: ['It was raining when I left home.', 'It was raining when I left the house.'],
            explain:
              'Background action in progress = past continuous; the short completed action = past simple.',
          },
          {
            kind: 'dictation',
            id: 'b2-nt-6',
            text: 'By midnight they had been talking for three hours.',
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
        summaryEs:
          "Usa el futuro perfecto para hablar de algo que estará terminado antes de un punto en el futuro, y el futuro continuo para acciones en curso en un momento futuro. El 'futuro en el pasado' describe lo que se esperaba que ocurriera visto desde un punto anterior, normalmente con 'would' o 'was/were going to'.",
        sections: [
          {
            heading: 'Future perfect and future continuous',
            body: "The **future perfect** (will have + past participle) views an action as **completed before** a future time, often with 'by' or 'by the time'. The **future continuous** (will be + -ing) describes an action **in progress** at a future moment. 'By 2030 I will have finished my degree' vs 'This time tomorrow I will be flying to Madrid.'",
            bodyEs:
              "El **futuro perfecto** (will have + participio) ve una acción como **terminada antes** de un momento futuro, a menudo con 'by' o 'by the time'. El **futuro continuo** (will be + -ing) describe una acción **en curso** en un momento futuro. 'By 2030 I will have finished my degree' frente a 'This time tomorrow I will be flying to Madrid.'",
            examples: [
              {
                en: 'By next week I will have read the whole report.',
                es: 'Para la semana que viene habré leído todo el informe.',
              },
              {
                en: "Don't call at eight; we'll be having dinner.",
                es: 'No llames a las ocho; estaremos cenando.',
              },
            ],
          },
          {
            heading: 'Future in the past',
            body: "When you describe the future **from a past viewpoint** (what someone expected or planned), use **was/were going to** or **would**. 'I knew she would arrive late.' 'We were going to call you, but we forgot.' These often express plans or predictions that may or may not have happened.",
            bodyEs:
              "Cuando describes el futuro **desde un punto de vista pasado** (lo que alguien esperaba o planeaba), usa **was/were going to** o **would**. 'I knew she would arrive late.' 'We were going to call you, but we forgot.' A menudo expresan planes o predicciones que pueden o no haberse cumplido.",
            examples: [
              {
                en: 'He said he would help us the next day.',
                es: 'Dijo que nos ayudaría al día siguiente.',
              },
              {
                en: 'They were going to move to Canada, but plans changed.',
                es: 'Iban a mudarse a Canadá, pero los planes cambiaron.',
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
            es: 'Para cuando leas esto, habré salido del país.',
          },
          {
            en: 'In ten years she will have become a doctor.',
            es: 'Dentro de diez años se habrá convertido en médica.',
          },
          {
            en: 'At noon tomorrow we will be travelling through the mountains.',
            es: 'Mañana al mediodía estaremos viajando por las montañas.',
          },
          {
            en: 'I was sure the plan would work.',
            es: 'Estaba seguro de que el plan funcionaría.',
          },
          {
            en: 'We were going to buy the house, but it sold first.',
            es: 'Íbamos a comprar la casa, pero se vendió antes.',
          },
          {
            en: 'By Friday they will have been married for ten years.',
            es: 'Para el viernes llevarán diez años casados.',
          },
        ],
        pitfalls: [
          {
            wrong: 'By next year I will finish my studies.',
            right: 'By next year I will have finished my studies.',
            why: "With 'by + future time' meaning 'before then', English needs the future perfect, not the simple future.",
            esNote: "'By' + tiempo futuro pide 'will have + participio'.",
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
            kind: 'cloze',
            id: 'b2-fp-2',
            before: "Don't phone at nine; we ",
            after: ' the match.',
            answers: ['will be watching', "'ll be watching"],
            explain: 'An action in progress at a future time takes the future continuous.',
          },
          {
            kind: 'correct',
            id: 'b2-fp-3',
            wrong: 'He promised he will pay me back.',
            answers: ['He promised he would pay me back.'],
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
            kind: 'translate',
            id: 'b2-fp-5',
            es: 'Para junio habremos terminado el proyecto.',
            answers: [
              'By June we will have finished the project.',
              "By June we'll have finished the project.",
            ],
            explain: "'Para + tiempo futuro' con sentido de terminado = future perfect.",
          },
          {
            kind: 'dictation',
            id: 'b2-fp-6',
            text: 'This time next week I will be lying on a beach.',
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
        summaryEs:
          "Los condicionales mixtos combinan dos marcos temporales distintos: una condición pasada con un resultado presente, o una condición presente con un resultado pasado. También puedes sustituir 'if' por palabras como unless, provided that, as long as, in case, suppose y otherwise para añadir matices precisos.",
        sections: [
          {
            heading: 'Mixing time frames',
            body: "A **mixed conditional** links a past condition to a present result, or a present condition to a past result. Past condition → present result: 'If I had studied medicine, I would be a doctor now.' Present condition → past result: 'If I were more careful, I wouldn't have lost my keys.' Choose the tense in each clause according to its own time.",
            bodyEs:
              "Un **condicional mixto** une una condición pasada con un resultado presente, o una condición presente con un resultado pasado. Condición pasada → resultado presente: 'If I had studied medicine, I would be a doctor now.' Condición presente → resultado pasado: 'If I were more careful, I wouldn't have lost my keys.' Elige el tiempo de cada cláusula según su propio momento.",
            examples: [
              {
                en: 'If I had saved money, I would be on holiday now.',
                es: 'Si hubiera ahorrado dinero, ahora estaría de vacaciones.',
              },
              {
                en: "If she weren't so shy, she would have spoken up.",
                es: 'Si no fuera tan tímida, habría hablado.',
              },
            ],
          },
          {
            heading: "Alternatives to 'if'",
            body: "Several connectors refine conditional meaning. **Unless** = if not. **Provided/providing that** and **as long as** = only if this condition is met. **In case** = as a precaution. **Otherwise** = if not, the result will be bad. **Suppose/supposing** introduces a hypothesis. 'You can borrow it as long as you return it.' 'Take an umbrella in case it rains.'",
            bodyEs:
              "Varios conectores precisan el sentido condicional. **Unless** = si no. **Provided/providing that** y **as long as** = solo si se cumple esta condición. **In case** = por precaución. **Otherwise** = si no, el resultado será malo. **Suppose/supposing** introduce una hipótesis. 'You can borrow it as long as you return it.' 'Take an umbrella in case it rains.'",
            examples: [
              {
                en: "We'll go for a walk unless it rains.",
                es: 'Iremos a pasear a menos que llueva.',
              },
              {
                en: 'Bring a map in case we get lost.',
                es: 'Trae un mapa por si nos perdemos.',
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
            es: 'Si no hubiéramos perdido el tren, ya estaríamos en casa.',
          },
          {
            en: 'If he spoke English, he would have got the job.',
            es: 'Si hablara inglés, habría conseguido el trabajo.',
          },
          {
            en: "You won't pass unless you work harder.",
            es: 'No aprobarás a menos que te esfuerces más.',
          },
          {
            en: "I'll lend you the car provided that you drive carefully.",
            es: 'Te prestaré el coche siempre que conduzcas con cuidado.',
          },
          {
            en: "Leave now; otherwise you'll be late.",
            es: 'Vete ya; de lo contrario llegarás tarde.',
          },
          {
            en: 'Suppose you won the lottery, what would you do?',
            es: 'Supongamos que ganaras la lotería, ¿qué harías?',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would tell you.',
            right: 'If I had known, I would have told you.',
            why: "The if-clause never uses 'would have'; it uses the past perfect. Spanish 'hubiera' can lead to this error.",
            esNote: "La cláusula con 'if' nunca lleva 'would'.",
          },
          {
            wrong: "Unless you don't hurry, we'll miss it.",
            right: "Unless you hurry, we'll miss it.",
            why: "'Unless' already means 'if not', so adding another negative reverses the meaning.",
            esNote: "'Unless' ya es 'si no'; no añadas otra negación.",
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
            kind: 'cloze',
            id: 'b2-mc-2',
            before: "We'll be fine as long as we ",
            after: ' calm.',
            answers: ['stay', 'keep'],
            explain: "'As long as' is followed by a present tense in a real conditional.",
          },
          {
            kind: 'correct',
            id: 'b2-mc-3',
            wrong: 'If she would be taller, she would have become a model.',
            answers: [
              'If she were taller, she would have become a model.',
              'If she was taller, she would have become a model.',
            ],
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
            kind: 'translate',
            id: 'b2-mc-5',
            es: 'Si hubiera dormido más, no estaría tan cansado ahora.',
            answers: [
              "If I had slept more, I wouldn't be so tired now.",
              'If I had slept more, I would not be so tired now.',
            ],
            explain: 'Past condition with present result = mixed conditional.',
          },
          {
            kind: 'dictation',
            id: 'b2-mc-6',
            text: "You can't enter unless you have a ticket.",
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
        summaryEs:
          "La pasiva traslada el foco del agente a la acción o al receptor, y funciona en todos los tiempos con be + participio. En B2 también se trata el causativo (have/get something done) para servicios que otra persona realiza, y las estructuras de reporte pasivo como 'It is said that...' y 'He is believed to...'.",
        sections: [
          {
            heading: 'The passive in all tenses',
            body: "Form the passive with the correct tense of **be + past participle**. Use it when the doer is unknown, obvious or unimportant, or to keep focus on the receiver. Add the agent with **by** only if it matters. 'The bridge was built in 1890.' 'The results will be announced tomorrow.' 'My car is being repaired.'",
            bodyEs:
              "Forma la pasiva con el tiempo correcto de **be + participio**. Úsala cuando el agente es desconocido, evidente o poco importante, o para mantener el foco en el receptor. Añade el agente con **by** solo si importa. 'The bridge was built in 1890.' 'The results will be announced tomorrow.' 'My car is being repaired.'",
            examples: [
              {
                en: 'The documents have been signed already.',
                es: 'Los documentos ya han sido firmados.',
              },
              {
                en: 'A new policy is being discussed.',
                es: 'Se está discutiendo una nueva política.',
              },
            ],
          },
          {
            heading: 'Causative: have/get something done',
            body: "Use **have/get + object + past participle** when you arrange for someone else to do a service for you. 'I had my hair cut' (a hairdresser did it). 'Get' is slightly more informal. It can also describe something unpleasant that happens to you: 'They had their flat burgled.'",
            bodyEs:
              "Usa **have/get + objeto + participio** cuando organizas que otra persona haga un servicio para ti. 'I had my hair cut' (lo hizo un peluquero). 'Get' es algo más informal. También puede describir algo desagradable que te ocurre: 'They had their flat burgled.'",
            examples: [
              {
                en: "We're having the kitchen painted next week.",
                es: 'Nos van a pintar la cocina la semana que viene.',
              },
              {
                en: 'She got her phone repaired yesterday.',
                es: 'Ayer le arreglaron el teléfono.',
              },
            ],
          },
          {
            heading: 'Passive reporting structures',
            body: "To report opinions or beliefs impersonally, use **It is said/believed/thought that + clause** or **subject + is said/believed + to + infinitive**. 'It is said that he is very rich' = 'He is said to be very rich.' For earlier actions, use the perfect infinitive: 'She is thought to have left the country.'",
            bodyEs:
              "Para reportar opiniones o creencias de forma impersonal, usa **It is said/believed/thought that + oración** o **sujeto + is said/believed + to + infinitivo**. 'It is said that he is very rich' = 'He is said to be very rich.' Para acciones anteriores, usa el infinitivo perfecto: 'She is thought to have left the country.'",
            examples: [
              {
                en: 'The minister is believed to be resigning.',
                es: 'Se cree que el ministro va a dimitir.',
              },
              {
                en: 'The painting is thought to have been stolen.',
                es: 'Se cree que el cuadro fue robado.',
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
            es: 'El inglés se habla en todo el mundo.',
          },
          {
            en: 'The road is being resurfaced this month.',
            es: 'Están reasfaltando la carretera este mes.',
          },
          {
            en: 'I need to have my eyes tested.',
            es: 'Necesito que me revisen la vista.',
          },
          {
            en: 'He had his wallet stolen on the train.',
            es: 'Le robaron la cartera en el tren.',
          },
          {
            en: 'It is said that the company is in trouble.',
            es: 'Se dice que la empresa está en apuros.',
          },
          {
            en: 'The suspect is believed to have fled abroad.',
            es: 'Se cree que el sospechoso ha huido al extranjero.',
          },
        ],
        pitfalls: [
          {
            wrong: 'My house was build in 1950.',
            right: 'My house was built in 1950.',
            why: "The passive needs the past participle ('built'), not the base form.",
            esNote: 'Pasiva = be + participio pasado.',
          },
          {
            wrong: 'I cut my hair yesterday at the salon.',
            right: 'I had my hair cut yesterday at the salon.',
            why: "If a hairdresser did it, use the causative; 'I cut my hair' means you did it yourself.",
            esNote: 'Servicio de otra persona: have/get + objeto + participio.',
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
            kind: 'cloze',
            id: 'b2-pv-2',
            before: 'We are going to ',
            after: ' our car serviced before the trip.',
            answers: ['have', 'get'],
            explain:
              "The causative uses 'have/get + object + past participle' for a service done by someone else.",
          },
          {
            kind: 'correct',
            id: 'b2-pv-3',
            wrong: 'It is said that he has stolen the money, he is said to steal it.',
            answers: [
              'He is said to have stolen the money.',
              'It is said that he has stolen the money.',
            ],
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
            kind: 'translate',
            id: 'b2-pv-5',
            es: 'Nos están construyendo una casa nueva.',
            answers: [
              'We are having a new house built.',
              "We're having a new house built.",
              'We are getting a new house built.',
            ],
            explain: 'Service arranged for us = causative have/get something done.',
          },
          {
            kind: 'dictation',
            id: 'b2-pv-6',
            text: 'The ancient city is believed to have been destroyed by an earthquake.',
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
        summaryEs:
          "El estilo indirecto cuenta lo que alguien dijo, normalmente desplazando los tiempos un paso atrás y cambiando pronombres y expresiones de tiempo. Las órdenes y peticiones usan 'tell/ask + objeto + to-infinitivo', mientras que verbos de reporte como suggest, offer, admit, deny y warn siguen cada uno su propio patrón gramatical.",
        sections: [
          {
            heading: 'Backshift and changes',
            body: "After a past reporting verb, tenses usually **shift back**: present → past, past → past perfect, will → would, can → could. Pronouns and time/place words also change: 'now' → 'then', 'tomorrow' → 'the next day', 'this' → 'that'. 'I am tired now' → 'She said she was tired then.'",
            bodyEs:
              "Tras un verbo de reporte en pasado, los tiempos suelen **retroceder**: presente → pasado, pasado → pasado perfecto, will → would, can → could. Los pronombres y las palabras de tiempo/lugar también cambian: 'now' → 'then', 'tomorrow' → 'the next day', 'this' → 'that'. 'I am tired now' → 'She said she was tired then.'",
            examples: [
              {
                en: 'He said he would call me the next day.',
                es: 'Dijo que me llamaría al día siguiente.',
              },
              {
                en: 'She told me she had already eaten.',
                es: 'Me dijo que ya había comido.',
              },
            ],
          },
          {
            heading: 'Commands and requests',
            body: "Report orders, advice and requests with **tell/ask/advise/warn + object + (not) to + infinitive**. 'Sit down' → 'She told me to sit down.' 'Please don't go' → 'He asked me not to go.' The negative is formed with **not to**.",
            bodyEs:
              "Reporta órdenes, consejos y peticiones con **tell/ask/advise/warn + objeto + (not) to + infinitivo**. 'Sit down' → 'She told me to sit down.' 'Please don't go' → 'He asked me not to go.' El negativo se forma con **not to**.",
            examples: [
              {
                en: 'The teacher told us to be quiet.',
                es: 'La profesora nos dijo que nos calláramos.',
              },
              {
                en: 'They asked me not to tell anyone.',
                es: 'Me pidieron que no se lo dijera a nadie.',
              },
            ],
          },
          {
            heading: 'Reporting verbs and their patterns',
            body: "Many verbs summarise a speech act with their own structure. **suggest/recommend + -ing** or **+ that-clause**; **offer/promise/agree/refuse + to-infinitive**; **admit/deny + -ing**; **accuse someone of + -ing**; **blame someone for + -ing**; **apologise for + -ing**; **insist on + -ing**. 'He admitted breaking the window.' 'She offered to help.'",
            bodyEs:
              "Muchos verbos resumen un acto de habla con su propia estructura. **suggest/recommend + -ing** o **+ that-clause**; **offer/promise/agree/refuse + to-infinitivo**; **admit/deny + -ing**; **accuse someone of + -ing**; **blame someone for + -ing**; **apologise for + -ing**; **insist on + -ing**. 'He admitted breaking the window.' 'She offered to help.'",
            examples: [
              {
                en: 'She suggested going to the cinema.',
                es: 'Sugirió ir al cine.',
              },
              {
                en: 'He denied taking the money.',
                es: 'Negó haber cogido el dinero.',
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
            es: 'Dijo que ya había visto la película.',
          },
          {
            en: 'He asked me where I lived.',
            es: 'Me preguntó dónde vivía.',
          },
          {
            en: 'They warned us not to swim there.',
            es: 'Nos advirtieron que no nadáramos allí.',
          },
          {
            en: 'I apologised for being late.',
            es: 'Me disculpé por llegar tarde.',
          },
          {
            en: 'She accused him of lying.',
            es: 'Lo acusó de mentir.',
          },
          {
            en: 'He promised to pay me back soon.',
            es: 'Prometió devolverme el dinero pronto.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He said me that he was tired.',
            right: 'He told me that he was tired.',
            why: "'Say' is not followed by a personal object; use 'tell + object' or 'say (without object)'.",
            esNote: "'Tell me', pero 'say to me'; nunca 'say me'.",
          },
          {
            wrong: 'She suggested me to go.',
            right: 'She suggested going. / She suggested that I go.',
            why: "'Suggest' is not followed by 'object + to-infinitive'; use '-ing' or a that-clause.",
            esNote: "'Suggest' no lleva 'to + infinitivo' con objeto.",
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
            kind: 'cloze',
            id: 'b2-rs-2',
            before: 'He admitted ',
            after: ' the vase.',
            answers: ['breaking', 'having broken'],
            explain: "'Admit' is followed by the -ing form, not a to-infinitive.",
          },
          {
            kind: 'correct',
            id: 'b2-rs-3',
            wrong: 'The teacher said us to open our books.',
            answers: [
              'The teacher told us to open our books.',
              'The teacher asked us to open our books.',
            ],
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
            kind: 'translate',
            id: 'b2-rs-5',
            es: 'Sugirió que esperáramos hasta mañana.',
            answers: [
              'She suggested waiting until tomorrow.',
              'She suggested that we wait until tomorrow.',
              'He suggested waiting until tomorrow.',
            ],
            explain: "'Suggest' takes -ing or a that-clause, never 'object + to-infinitive'.",
          },
          {
            kind: 'dictation',
            id: 'b2-rs-6',
            text: 'He apologised for not answering my email.',
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
        summaryEs:
          "Los modales en pasado permiten hacer deducciones y juicios sobre el pasado. Usa 'must have' para casi certeza, 'can't/couldn't have' para imposibilidad y 'might/may/could have' para posibilidad. 'Should have' expresa crítica o arrepentimiento, mientras que 'needn't have' y 'didn't need to' describen acciones innecesarias de formas distintas.",
        sections: [
          {
            heading: 'Deduction about the past',
            body: "Use **modal + have + past participle** to deduce what was true in the past. **Must have** = I'm almost certain it happened. **Can't/couldn't have** = I'm certain it didn't happen. **Might/may/could have** = it's possible. 'The ground is wet; it must have rained.' 'He can't have finished already.'",
            bodyEs:
              "Usa **modal + have + participio** para deducir qué era cierto en el pasado. **Must have** = casi seguro que ocurrió. **Can't/couldn't have** = seguro que no ocurrió. **Might/may/could have** = es posible. 'The ground is wet; it must have rained.' 'He can't have finished already.'",
            examples: [
              {
                en: 'She must have left early; her car is gone.',
                es: 'Debe de haberse ido temprano; su coche no está.',
              },
              {
                en: "They can't have heard the news yet.",
                es: 'No pueden haberse enterado de la noticia todavía.',
              },
            ],
          },
          {
            heading: 'Criticism and regret: should have',
            body: "Use **should have / shouldn't have + past participle** to say that the right thing was not done, expressing criticism or regret. 'You should have told me' (but you didn't). 'I shouldn't have eaten so much' (but I did). It always looks back at a past action that differs from what was ideal.",
            bodyEs:
              "Usa **should have / shouldn't have + participio** para decir que no se hizo lo correcto, expresando crítica o arrepentimiento. 'You should have told me' (pero no lo hiciste). 'I shouldn't have eaten so much' (pero lo hice). Siempre mira hacia atrás a una acción pasada distinta de lo ideal.",
            examples: [
              {
                en: 'You should have asked for help.',
                es: 'Deberías haber pedido ayuda.',
              },
              {
                en: "I shouldn't have shouted at him.",
                es: 'No debería haberle gritado.',
              },
            ],
          },
          {
            heading: "needn't have vs didn't need to",
            body: "**Needn't have + past participle** = you did something that turned out to be unnecessary. **Didn't need to + base verb** = it wasn't necessary, and usually you didn't do it. 'I needn't have cooked' (I cooked, but it was a waste). 'I didn't need to cook' (so I didn't bother).",
            bodyEs:
              "**Needn't have + participio** = hiciste algo que resultó innecesario. **Didn't need to + verbo base** = no era necesario, y normalmente no lo hiciste. 'I needn't have cooked' (cociné, pero fue en vano). 'I didn't need to cook' (así que no me molesté).",
            examples: [
              {
                en: "You needn't have bought milk; we already had some.",
                es: 'No hacía falta que compraras leche; ya teníamos.',
              },
              {
                en: "I didn't need to wake up early, so I slept in.",
                es: 'No tenía que levantarme temprano, así que dormí hasta tarde.',
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
            es: 'Las luces están apagadas; deben de haberse acostado.',
          },
          {
            en: "You couldn't have seen her; she was abroad.",
            es: 'No pudiste haberla visto; estaba en el extranjero.',
          },
          {
            en: 'He might have missed the bus.',
            es: 'Puede que haya perdido el autobús.',
          },
          {
            en: 'We should have booked a table.',
            es: 'Deberíamos haber reservado mesa.',
          },
          {
            en: "You needn't have worried; everything was fine.",
            es: 'No tenías por qué preocuparte; todo salió bien.',
          },
          {
            en: "She didn't need to bring anything, so she came empty-handed.",
            es: 'No tenía que traer nada, así que vino con las manos vacías.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He must left early.',
            right: 'He must have left early.',
            why: "Deduction about the past needs 'have + past participle' after the modal.",
            esNote: "'Must have + participio' para deducir el pasado.",
          },
          {
            wrong: 'I should have went to the doctor.',
            right: 'I should have gone to the doctor.',
            why: "Use the past participle 'gone', not the past simple 'went', after 'should have'.",
            esNote: "Tras 'should have', participio pasado.",
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
            kind: 'cloze',
            id: 'b2-pm-2',
            before: "I'm so full. I ",
            after: ' eaten that last slice.',
            answers: ["shouldn't have", 'should not have'],
            explain: "Regret about a past action uses 'shouldn't have + past participle'.",
          },
          {
            kind: 'correct',
            id: 'b2-pm-3',
            wrong: "She can't be at the party last night; she was ill.",
            answers: [
              "She can't have been at the party last night; she was ill.",
              "She couldn't have been at the party last night; she was ill.",
            ],
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
            kind: 'translate',
            id: 'b2-pm-5',
            es: 'Puede que se hayan perdido.',
            answers: [
              'They might have got lost.',
              'They may have got lost.',
              'They could have got lost.',
              'They might have gotten lost.',
            ],
            explain: 'Past possibility uses might/may/could have + past participle.',
          },
          {
            kind: 'dictation',
            id: 'b2-pm-6',
            text: 'You should have told me you were coming.',
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
        summaryEs:
          'Las oraciones de relativo a menudo pueden acortarse en cláusulas de participio para sonar más concisas y formales. Un participio presente (-ing) sustituye una relativa activa, un participio pasado sustituye una pasiva, y las cláusulas de participio también pueden enlazar dos acciones o mostrar relaciones de causa y tiempo.',
        sections: [
          {
            heading: 'Reducing relative clauses',
            body: "When a relative clause has an **active** meaning, replace 'who/which/that + verb' with the **present participle (-ing)**: 'the man who is waiting' → 'the man waiting'. When it has a **passive** meaning, use the **past participle**: 'the letter that was sent' → 'the letter sent'. This makes writing tighter and is common in formal English.",
            bodyEs:
              "Cuando una oración de relativo tiene sentido **activo**, sustituye 'who/which/that + verbo' por el **participio presente (-ing)**: 'the man who is waiting' → 'the man waiting'. Cuando tiene sentido **pasivo**, usa el **participio pasado**: 'the letter that was sent' → 'the letter sent'. Esto compacta la escritura y es común en inglés formal.",
            examples: [
              {
                en: 'The people living next door are friendly.',
                es: 'Las personas que viven al lado son simpáticas.',
              },
              {
                en: 'The car parked outside is mine.',
                es: 'El coche aparcado fuera es mío.',
              },
            ],
          },
          {
            heading: 'Participle clauses for time and cause',
            body: "Participle clauses can connect ideas without a conjunction. A **present participle** shows an action happening at the same time or a reason: 'Feeling tired, she went to bed' (= because she felt tired). 'Opening the door, he saw the mess' (= when/as he opened it). A **perfect participle** (having + p.p.) shows an earlier completed action: 'Having finished, they left.'",
            bodyEs:
              "Las cláusulas de participio pueden conectar ideas sin conjunción. Un **participio presente** muestra una acción simultánea o una razón: 'Feeling tired, she went to bed' (= porque estaba cansada). 'Opening the door, he saw the mess' (= cuando abrió la puerta). Un **participio perfecto** (having + p.p.) muestra una acción anterior ya terminada: 'Having finished, they left.'",
            examples: [
              {
                en: 'Not knowing the way, we asked for directions.',
                es: 'Como no conocíamos el camino, pedimos indicaciones.',
              },
              {
                en: 'Having read the report, she made her decision.',
                es: 'Tras leer el informe, tomó su decisión.',
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
            es: 'Cualquiera que quiera una entrada debe hacer cola aquí.',
          },
          {
            en: 'The money stolen from the bank was never found.',
            es: 'El dinero robado del banco nunca se encontró.',
          },
          {
            en: 'Walking along the beach, I found a shell.',
            es: 'Caminando por la playa, encontré una concha.',
          },
          {
            en: 'Built in the 1920s, the theatre is now a museum.',
            es: 'Construido en los años veinte, el teatro es ahora un museo.',
          },
          {
            en: 'Having missed the bus, he had to walk.',
            es: 'Tras perder el autobús, tuvo que ir caminando.',
          },
          {
            en: 'There were dozens of people waiting outside.',
            es: 'Había docenas de personas esperando fuera.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The man speaked to me was a stranger.',
            right: 'The man speaking to me was a stranger.',
            why: "An active reduced clause uses the present participle '-ing', not a past form.",
            esNote: 'Relativa activa reducida: participio en -ing.',
          },
          {
            wrong: 'The documents sending yesterday arrived today.',
            right: 'The documents sent yesterday arrived today.',
            why: "A passive meaning ('that were sent') requires the past participle, not -ing.",
            esNote: 'Sentido pasivo: participio pasado.',
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
            kind: 'cloze',
            id: 'b2-rc-2',
            before: 'The bridge ',
            after: ' in 1850 still stands today.',
            answers: ['built', 'constructed'],
            explain: "A passive meaning ('that was built') reduces to the past participle.",
          },
          {
            kind: 'correct',
            id: 'b2-rc-3',
            wrong: 'Having ate breakfast, we set off.',
            answers: ['Having eaten breakfast, we set off.', 'Having had breakfast, we set off.'],
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
            kind: 'translate',
            id: 'b2-rc-5',
            es: 'Las personas invitadas a la boda eran cien.',
            answers: [
              'The people invited to the wedding were a hundred.',
              'There were a hundred people invited to the wedding.',
            ],
            explain: "Passive reduced clause uses the past participle 'invited'.",
          },
          {
            kind: 'dictation',
            id: 'b2-rc-6',
            text: 'The students taking the exam must arrive early.',
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
        summaryEs:
          "Estos verbos determinan si el verbo siguiente lleva to-infinitivo, infinitivo sin 'to' o forma -ing. Make y let llevan infinitivo sin 'to', get lleva to-infinitivo, have lleva infinitivo sin 'to', y los verbos de percepción como see y hear llevan infinitivo sin 'to' para la acción completa o -ing para una acción en curso.",
        sections: [
          {
            heading: 'make, let, have, get + object',
            body: "**Make + object + bare infinitive** = force ('They made me wait'). **Let + object + bare infinitive** = allow ('She let me go'). **Have + object + bare infinitive** = arrange/instruct ('I'll have him call you'). **Get + object + to-infinitive** = persuade ('I got him to help'). Note that 'make' takes 'to' in the passive: 'I was made to wait.'",
            bodyEs:
              "**Make + objeto + infinitivo sin 'to'** = obligar ('They made me wait'). **Let + objeto + infinitivo sin 'to'** = permitir ('She let me go'). **Have + objeto + infinitivo sin 'to'** = disponer/instruir ('I'll have him call you'). **Get + objeto + to-infinitivo** = persuadir ('I got him to help'). Ojo: 'make' lleva 'to' en pasiva: 'I was made to wait.'",
            examples: [
              {
                en: 'My parents let me stay out late.',
                es: 'Mis padres me dejaron quedarme fuera hasta tarde.',
              },
              {
                en: 'I finally got my brother to apologise.',
                es: 'Por fin conseguí que mi hermano se disculpara.',
              },
            ],
          },
          {
            heading: 'Sense verbs: see, hear, watch, feel',
            body: "After **see, hear, watch, feel, notice + object**, use the **bare infinitive** for a complete action you witnessed from start to finish, and the **-ing form** for an action in progress that you saw part of. 'I saw him cross the road' (whole action) vs 'I saw him crossing the road' (in the middle of it).",
            bodyEs:
              "Tras **see, hear, watch, feel, notice + objeto**, usa el **infinitivo sin 'to'** para una acción completa que presenciaste de principio a fin, y la **forma -ing** para una acción en curso de la que viste una parte. 'I saw him cross the road' (acción completa) frente a 'I saw him crossing the road' (en mitad de ella).",
            examples: [
              {
                en: 'I heard someone shout my name.',
                es: 'Oí a alguien gritar mi nombre.',
              },
              {
                en: 'We watched the sun setting over the sea.',
                es: 'Vimos ponerse el sol sobre el mar.',
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
            es: 'La película me hizo llorar.',
          },
          {
            en: "Don't let the children play near the road.",
            es: 'No dejes que los niños jueguen cerca de la carretera.',
          },
          {
            en: "I'll get someone to fix the printer.",
            es: 'Haré que alguien arregle la impresora.',
          },
          {
            en: 'She had her assistant book the flights.',
            es: 'Hizo que su asistente reservara los vuelos.',
          },
          {
            en: 'I felt the floor shake during the earthquake.',
            es: 'Sentí temblar el suelo durante el terremoto.',
          },
          {
            en: 'We noticed him watching us.',
            es: 'Nos dimos cuenta de que nos observaba.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She made me to clean the room.',
            right: 'She made me clean the room.',
            why: "'Make + object' is followed by the bare infinitive (no 'to') in the active voice.",
            esNote: "'Make' activo: sin 'to'.",
          },
          {
            wrong: 'I got him clean the car.',
            right: 'I got him to clean the car.',
            why: "Unlike make/let/have, 'get + object' takes the to-infinitive.",
            esNote: "'Get' sí lleva 'to'.",
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
            kind: 'cloze',
            id: 'b2-cs-2',
            before: "I couldn't get the engine ",
            after: ' in the cold.',
            answers: ['to start'],
            explain: "'Get + object' is followed by the to-infinitive.",
          },
          {
            kind: 'correct',
            id: 'b2-cs-3',
            wrong: 'They let me to use their car.',
            answers: ['They let me use their car.'],
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
            kind: 'translate',
            id: 'b2-cs-5',
            es: 'Oí cerrarse la puerta de golpe.',
            answers: ['I heard the door slam.', 'I heard the door slam shut.'],
            explain: 'A complete witnessed action after a sense verb takes the bare infinitive.',
          },
          {
            kind: 'dictation',
            id: 'b2-cs-6',
            text: 'I finally got my sister to lend me her bike.',
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
        summaryEs:
          "El inglés añade énfasis sin cambiar el orden de palabras usando el auxiliar 'do/does/did' antes del verbo principal, o reestructurando la oración en una construcción enfática con 'It was... that...' o 'What... is...'. Estas estructuras resaltan justo la parte del mensaje que quieres enfatizar.",
        sections: [
          {
            heading: 'Emphatic do/does/did',
            body: "In affirmative sentences you can add **do/does/did** before the base verb to insist on something, often to contradict or reassure. 'I do like it!' 'She does care.' 'We did warn you.' The stress falls on the auxiliary, and the main verb stays in its base form even after 'did'.",
            bodyEs:
              "En oraciones afirmativas puedes añadir **do/does/did** antes del verbo base para insistir en algo, a menudo para contradecir o tranquilizar. 'I do like it!' 'She does care.' 'We did warn you.' El acento recae en el auxiliar, y el verbo principal se mantiene en forma base incluso tras 'did'.",
            examples: [
              {
                en: 'I do understand your point.',
                es: 'Sí que entiendo tu punto.',
              },
              {
                en: 'He did apologise, eventually.',
                es: 'Al final sí que se disculpó.',
              },
            ],
          },
          {
            heading: 'Cleft sentences',
            body: "**Cleft sentences** split one idea into two clauses to focus on a particular element. With **It-clefts** you highlight a noun, time or place: 'It was John who broke it' (not someone else). With **What-clefts** you highlight an action or thing: 'What I need is a holiday.' These are common in both speech and writing to direct attention.",
            bodyEs:
              "Las **oraciones enfáticas escindidas** dividen una idea en dos cláusulas para enfocar un elemento concreto. Con **It-clefts** resaltas un sustantivo, tiempo o lugar: 'It was John who broke it' (no otra persona). Con **What-clefts** resaltas una acción o cosa: 'What I need is a holiday.' Son comunes al hablar y escribir para dirigir la atención.",
            examples: [
              {
                en: 'It was in Paris that we first met.',
                es: 'Fue en París donde nos conocimos.',
              },
              {
                en: 'What surprised me was his honesty.',
                es: 'Lo que me sorprendió fue su sinceridad.',
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
            es: 'Sí que cerré la puerta con llave, estoy seguro.',
          },
          {
            en: 'She does work hard, you know.',
            es: 'Ella sí que trabaja duro, ¿sabes?',
          },
          {
            en: 'It was the noise that woke me up.',
            es: 'Fue el ruido lo que me despertó.',
          },
          {
            en: 'It is teamwork that makes the difference.',
            es: 'Es el trabajo en equipo lo que marca la diferencia.',
          },
          {
            en: 'What I really enjoy is hiking.',
            es: 'Lo que de verdad disfruto es hacer senderismo.',
          },
          {
            en: 'What we need now is a plan.',
            es: 'Lo que necesitamos ahora es un plan.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I did told you about it.',
            right: 'I did tell you about it.',
            why: "After emphatic 'did', the main verb stays in its base form.",
            esNote: "Tras 'did' enfático, verbo en forma base.",
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
            kind: 'cloze',
            id: 'b2-em-2',
            before: 'It was her smile ',
            after: ' I remembered most.',
            answers: ['that', 'which'],
            explain:
              "An it-cleft uses 'that' (or sometimes 'which') to introduce the second clause.",
          },
          {
            kind: 'correct',
            id: 'b2-em-3',
            wrong: 'What I want is to travelling around Asia.',
            answers: [
              'What I want is to travel around Asia.',
              'What I want is to travel round Asia.',
            ],
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
            kind: 'translate',
            id: 'b2-em-5',
            es: 'Lo que necesito es más tiempo.',
            answers: ['What I need is more time.', 'What I need is more time.'],
            explain: "A what-cleft focuses attention on 'more time'.",
          },
          {
            kind: 'dictation',
            id: 'b2-em-6',
            text: 'He does seem to know what he is talking about.',
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
        summaryEs:
          "La comparación en B2 incluye estructuras paralelas como 'the more... the more...', modificadores que suavizan o intensifican los comparativos (a bit, far, much, slightly), y la diferencia exacta entre little/few (casi nada, negativo) y a little/a few (algo, positivo).",
        sections: [
          {
            heading: 'Parallel comparatives and modifiers',
            body: "Use **the + comparative... the + comparative** to show that two things change together: 'The more you practise, the better you get.' Modify comparatives to show degree: **much/far/a lot** + comparative = a big difference ('far cheaper'); **a bit/a little/slightly** + comparative = a small difference ('slightly bigger'). With repetition, 'bigger and bigger' shows continuous change.",
            bodyEs:
              "Usa **the + comparativo... the + comparativo** para mostrar que dos cosas cambian juntas: 'The more you practise, the better you get.' Modifica los comparativos para indicar el grado: **much/far/a lot** + comparativo = gran diferencia ('far cheaper'); **a bit/a little/slightly** + comparativo = pequeña diferencia ('slightly bigger'). Con repetición, 'bigger and bigger' muestra un cambio continuo.",
            examples: [
              {
                en: 'The harder I try, the worse it gets.',
                es: 'Cuanto más lo intento, peor se pone.',
              },
              {
                en: 'This phone is far more expensive than that one.',
                es: 'Este teléfono es mucho más caro que aquel.',
              },
            ],
          },
          {
            heading: 'little/few vs a little/a few',
            body: "**Few** (countable) and **little** (uncountable) have a **negative** sense, meaning 'almost none': 'I have little time' (not enough). **A few** and **a little** have a **positive** sense, meaning 'some': 'I have a little time' (enough). Use **few/a few** with plural countable nouns and **little/a little** with uncountable nouns.",
            bodyEs:
              "**Few** (contable) y **little** (incontable) tienen un sentido **negativo**, 'casi nada': 'I have little time' (no suficiente). **A few** y **a little** tienen un sentido **positivo**, 'algo': 'I have a little time' (suficiente). Usa **few/a few** con sustantivos contables en plural y **little/a little** con incontables.",
            examples: [
              {
                en: 'Few people came, so the room felt empty.',
                es: 'Vino poca gente, así que la sala parecía vacía.',
              },
              {
                en: 'A few friends helped me move, luckily.',
                es: 'Por suerte, algunos amigos me ayudaron a mudarme.',
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
            es: 'Cuanto antes salgamos, antes llegaremos.',
          },
          {
            en: "It's getting colder and colder.",
            es: 'Cada vez hace más frío.',
          },
          {
            en: 'She is much taller than her brother.',
            es: 'Ella es mucho más alta que su hermano.',
          },
          {
            en: 'We have very little money left.',
            es: 'Nos queda muy poco dinero.',
          },
          {
            en: 'There are only a few seats available.',
            es: 'Solo quedan unos pocos asientos disponibles.',
          },
          {
            en: 'Could I have a little more sugar, please?',
            es: '¿Me podrías dar un poco más de azúcar, por favor?',
          },
        ],
        pitfalls: [
          {
            wrong: 'The more it gets late, the more I worry.',
            right: 'The later it gets, the more I worry.',
            why: "In 'the + comparative' structures, the comparative adjective/adverb goes directly after 'the'.",
            esNote: "'The' + comparativo directamente: 'the later'.",
          },
          {
            wrong: 'I have a few money for the trip.',
            right: 'I have a little money for the trip.',
            why: "'Money' is uncountable, so it takes 'little/a little', not 'few/a few'.",
            esNote: "'Money' es incontable: a little, no a few.",
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
            kind: 'cloze',
            id: 'b2-cq-2',
            before: 'Hurry up! We have very ',
            after: ' time left.',
            answers: ['little'],
            explain: "'Time' is uncountable and the sense is negative, so use 'little'.",
          },
          {
            kind: 'correct',
            id: 'b2-cq-3',
            wrong: 'Only few of my friends came, but luckily they did.',
            answers: [
              'A few of my friends came, but luckily they did.',
              'Only a few of my friends came, but luckily they did.',
            ],
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
            kind: 'translate',
            id: 'b2-cq-5',
            es: 'Cuanto más estudias, más aprendes.',
            answers: ['The more you study, the more you learn.'],
            explain: "Parallel comparative structure with 'the more... the more'.",
          },
          {
            kind: 'dictation',
            id: 'b2-cq-6',
            text: 'There were only a few people at the meeting.',
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
        summaryEs:
          "Tras verbos de sugerencia y exigencia como suggest, recommend, insist y demand, el inglés formal usa la forma base del verbo (el subjuntivo), como en 'I suggest that he be informed'. Los marcadores del discurso formales como however, nevertheless, therefore y furthermore organizan las ideas y señalan relaciones lógicas en la escritura.",
        sections: [
          {
            heading: 'The subjunctive after suggest/recommend',
            body: "After verbs and adjectives expressing demand, advice or importance (**suggest, recommend, insist, demand, request; it is essential/important that**), formal English uses the **base form** of the verb for every subject, with no -s and no 'to'. 'The doctor recommends that she rest.' 'It is vital that he be present.' In less formal English, 'should' is often added: 'recommends that she should rest.'",
            bodyEs:
              "Tras verbos y adjetivos que expresan exigencia, consejo o importancia (**suggest, recommend, insist, demand, request; it is essential/important that**), el inglés formal usa la **forma base** del verbo para todos los sujetos, sin -s y sin 'to'. 'The doctor recommends that she rest.' 'It is vital that he be present.' En inglés menos formal se suele añadir 'should': 'recommends that she should rest.'",
            examples: [
              {
                en: 'I suggest that he apply for the job.',
                es: 'Sugiero que solicite el puesto.',
              },
              {
                en: 'They demanded that the rule be changed.',
                es: 'Exigieron que se cambiara la norma.',
              },
            ],
          },
          {
            heading: 'Formal discourse markers',
            body: "Discourse markers link ideas and guide the reader. **However/nevertheless** = contrast. **Therefore/consequently/thus** = result. **Moreover/furthermore/in addition** = adding information. **Nonetheless** = despite that. They usually start a sentence and are followed by a comma. 'The plan is costly. Nevertheless, it is necessary.'",
            bodyEs:
              "Los marcadores del discurso enlazan ideas y guían al lector. **However/nevertheless** = contraste. **Therefore/consequently/thus** = resultado. **Moreover/furthermore/in addition** = añadir información. **Nonetheless** = a pesar de eso. Suelen iniciar una oración y van seguidos de una coma. 'The plan is costly. Nevertheless, it is necessary.'",
            examples: [
              {
                en: 'The results were poor. Therefore, we changed our approach.',
                es: 'Los resultados fueron malos. Por tanto, cambiamos de enfoque.',
              },
              {
                en: 'It was raining. However, the match continued.',
                es: 'Llovía. Sin embargo, el partido continuó.',
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
            es: 'La junta insiste en que el informe se entregue antes del viernes.',
          },
          {
            en: 'It is essential that every member sign the form.',
            es: 'Es esencial que cada miembro firme el formulario.',
          },
          {
            en: 'Sales fell sharply. Consequently, several stores closed.',
            es: 'Las ventas cayeron bruscamente. En consecuencia, varias tiendas cerraron.',
          },
          {
            en: 'The hotel was expensive. Moreover, the service was poor.',
            es: 'El hotel era caro. Además, el servicio era malo.',
          },
          {
            en: 'She recommended that we book in advance.',
            es: 'Recomendó que reserváramos con antelación.',
          },
          {
            en: 'The evidence is weak; nonetheless, the case will proceed.',
            es: 'Las pruebas son débiles; no obstante, el caso seguirá adelante.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I suggest that he applies for the job.',
            right: 'I suggest that he apply for the job.',
            why: "In the subjunctive after 'suggest', the verb stays in its base form without -s.",
            esNote: "Subjuntivo: forma base, sin -s, aunque el sujeto sea 'he'.",
          },
          {
            wrong: 'It is important that she is on time.',
            right: 'It is important that she be on time.',
            why: "After 'it is important/essential that', formal English uses the base form 'be'.",
            esNote: "Tras 'important that', usa 'be'.",
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
            kind: 'cloze',
            id: 'b2-sd-2',
            before: 'The results were disappointing. ',
            after: ', we decided to try again.',
            answers: ['Therefore', 'Consequently', 'Thus'],
            explain: 'A result marker links the cause and the decision.',
          },
          {
            kind: 'correct',
            id: 'b2-sd-3',
            wrong: 'It is essential that everyone arrives on time.',
            answers: [
              'It is essential that everyone arrive on time.',
              'It is essential that everyone should arrive on time.',
            ],
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
            kind: 'translate',
            id: 'b2-sd-5',
            es: 'El informe era breve. Sin embargo, era muy claro.',
            answers: [
              'The report was short. However, it was very clear.',
              'The report was brief. However, it was very clear.',
            ],
            explain: "'However' marks contrast and is followed by a comma.",
          },
          {
            kind: 'dictation',
            id: 'b2-sd-6',
            text: 'The committee insists that the deadline be respected.',
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
        summaryEs:
          'Las oraciones hendidas dividen una idea en dos cláusulas para **enfatizar** un elemento concreto. Las **it-clefts** (It was John who paid) destacan un sustantivo o frase, mientras que las **wh-clefts** (What I need is time) ponen en primer plano una acción o cosa. Son esenciales para el foco, el contraste y para corregir suposiciones.',
        sections: [
          {
            heading: 'It-clefts for focus and contrast',
            body: "An **it-cleft** has the frame **It + be + focus + relative clause**. We move the most important information into the focus slot: *It was her honesty that impressed me*. Use **who/that** for people and **that/which** for things. It-clefts are especially common when **correcting** a false assumption: *It wasn't me who broke it*. The verb *be* agrees with *it* (singular) regardless of the focus, but it can shift tense: *It will be Maria who decides*.",
            bodyEs:
              "Una **it-cleft** tiene la estructura **It + be + foco + cláusula de relativo**. Movemos la información más importante al hueco del foco: *It was her honesty that impressed me*. Usa **who/that** para personas y **that/which** para cosas. Las it-clefts son muy comunes para **corregir** una suposición falsa: *It wasn't me who broke it*. El verbo *be* concuerda con *it* (singular) sin importar el foco, pero puede cambiar de tiempo: *It will be Maria who decides*.",
            examples: [
              {
                en: 'It was in 2010 that the company collapsed.',
                es: 'Fue en 2010 cuando la empresa quebró.',
              },
              {
                en: "It's the noise that I can't stand, not the work.",
                es: 'Es el ruido lo que no soporto, no el trabajo.',
              },
            ],
          },
          {
            heading: 'Wh-clefts (pseudo-clefts)',
            body: 'A **wh-cleft** usually begins with **what** and uses the frame **What + clause + be + focus**: *What surprised me was his calm*. They foreground actions especially well: *What we should do is wait*. You can also start with the focus for end-weight (a **reversed wh-cleft**): *His calm was what surprised me*. Other openers include **All (that)**, **The thing that**, **The reason why**: *All I want is a coffee*; *The reason I called is to apologise*.',
            bodyEs:
              'Una **wh-cleft** suele empezar con **what** y usa la estructura **What + cláusula + be + foco**: *What surprised me was his calm*. Ponen en primer plano las acciones especialmente bien: *What we should do is wait*. También puedes empezar por el foco para dar peso al final (**wh-cleft invertida**): *His calm was what surprised me*. Otros inicios incluyen **All (that)**, **The thing that**, **The reason why**: *All I want is a coffee*; *The reason I called is to apologise*.',
            examples: [
              {
                en: 'What I need right now is a clear plan.',
                es: 'Lo que necesito ahora mismo es un plan claro.',
              },
              {
                en: 'All she did was apologise.',
                es: 'Lo único que hizo fue disculparse.',
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
            es: 'Fue el gerente, no el personal, quien tomó la decisión.',
          },
          {
            en: 'What bothers me is that nobody warned us.',
            es: 'Lo que me molesta es que nadie nos avisó.',
          },
          {
            en: "It's only now that I understand what she meant.",
            es: 'Es solo ahora cuando entiendo lo que quería decir.',
          },
          {
            en: "The reason we're late is that the train was cancelled.",
            es: 'La razón por la que llegamos tarde es que cancelaron el tren.',
          },
          {
            en: 'All they need is a little more time.',
            es: 'Lo único que necesitan es un poco más de tiempo.',
          },
          {
            en: "A good night's sleep was what cured him.",
            es: 'Una buena noche de sueño fue lo que lo curó.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The what I need is time.',
            right: 'What I need is time.',
            why: "A **wh-cleft** with *what* takes no article; *what* already means 'the thing that'.",
            esNote: "No pongas *the* delante de *what*: *what* ya significa 'lo que'.",
          },
          {
            wrong: "Is the noise that I can't stand.",
            right: "It's the noise that I can't stand.",
            why: 'English it-clefts need the dummy subject **it**; English does not allow a subjectless verb here.',
            esNote:
              'En inglés siempre hace falta el sujeto *it*; no se puede omitir como en español.',
          },
          {
            wrong: 'It was me who broke the window who.',
            right: 'It was me who broke the window.',
            why: 'Use a single relative pronoun (**who/that**); do not double it.',
            esNote: 'Usa un solo pronombre relativo, no lo repitas.',
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
            kind: 'cloze',
            id: 'c1-cleft-ex2',
            before: '',
            after: 'I need is a bit of peace and quiet.',
            answers: ['What'],
            explain: "A wh-cleft starts with *What*, meaning 'the thing that'.",
          },
          {
            kind: 'correct',
            id: 'c1-cleft-ex3',
            wrong: 'The what surprised me was his honesty.',
            answers: ['What surprised me was his honesty.'],
            explain: "Drop *the*: *what* already includes 'the thing that'.",
          },
          {
            kind: 'order',
            id: 'c1-cleft-ex4',
            tokens: ['It', 'was', 'her', 'support', 'that', 'kept', 'me', 'going'],
            answer: 'It was her support that kept me going.',
            explain: 'It-cleft frame: It + was + focus (her support) + that + clause.',
          },
          {
            kind: 'translate',
            id: 'c1-cleft-ex5',
            es: 'Lo único que hizo fue disculparse.',
            answers: [
              'All she did was apologise.',
              'All she did was apologize.',
              'All that she did was apologise.',
            ],
            explain: 'An all-cleft: *All (that) she did was + bare infinitive*.',
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
            kind: 'dictation',
            id: 'c1-cleft-ex7',
            text: 'What really matters is how you respond to failure.',
            explain: "A wh-cleft foregrounding the action: 'What really matters is…'.",
          },
        ],
      },
      {
        id: 'c1-inversion-negative-adverbials',
        level: 'C1',
        title: 'Inversion After Negative Adverbials',
        summary:
          'When a **negative or restrictive adverbial** is fronted for emphasis (*Never, Not only, Hardly, Little, Only then, No sooner*), the subject and auxiliary **invert** as in a question: *Never have I seen such a mess*. This formal device adds dramatic emphasis in writing and speeches.',
        summaryEs:
          'Cuando un **adverbial negativo o restrictivo** se antepone para enfatizar (*Never, Not only, Hardly, Little, Only then, No sooner*), el sujeto y el auxiliar se **invierten** como en una pregunta: *Never have I seen such a mess*. Este recurso formal añade énfasis dramático en la escritura y en los discursos.',
        sections: [
          {
            heading: 'The inversion mechanism',
            body: "After a fronted negative adverbial, use **question word order**: auxiliary + subject + main verb. If there is no auxiliary, add **do/does/did**: *Rarely does he complain*. With perfect or modal verbs, just move the existing auxiliary: *Never had we imagined…*. The negative meaning is what triggers the inversion, not a literal 'no'. Common triggers include **never, rarely, seldom, hardly, scarcely, little, nowhere, at no time, under no circumstances, only later, not until**.",
            bodyEs:
              "Tras un adverbial negativo antepuesto, usa el **orden de pregunta**: auxiliar + sujeto + verbo principal. Si no hay auxiliar, añade **do/does/did**: *Rarely does he complain*. Con verbos perfectos o modales, solo mueve el auxiliar existente: *Never had we imagined…*. Lo que provoca la inversión es el significado negativo, no un 'no' literal. Disparadores comunes: **never, rarely, seldom, hardly, scarcely, little, nowhere, at no time, under no circumstances, only later, not until**.",
            examples: [
              {
                en: 'Under no circumstances should you sign this.',
                es: 'Bajo ninguna circunstancia deberías firmar esto.',
              },
              {
                en: 'Rarely have I felt so welcome.',
                es: 'Rara vez me he sentido tan bienvenido.',
              },
            ],
          },
          {
            heading: 'Not only, no sooner and hardly… when',
            body: 'Some adverbials introduce **two-part** structures. **Not only … but also**: *Not only did she win, but she also broke the record*. **No sooner … than** and **Hardly/Scarcely … when** describe one event quickly followed by another, usually with the **past perfect** in the first clause: *No sooner had we sat down than the phone rang*; *Hardly had I closed my eyes when the alarm went off*. **Little** is special: it conveys ignorance — *Little did they know what awaited them*.',
            bodyEs:
              'Algunos adverbiales introducen estructuras de **dos partes**. **Not only … but also**: *Not only did she win, but she also broke the record*. **No sooner … than** y **Hardly/Scarcely … when** describen un evento seguido rápidamente por otro, normalmente con el **past perfect** en la primera cláusula: *No sooner had we sat down than the phone rang*; *Hardly had I closed my eyes when the alarm went off*. **Little** es especial: transmite ignorancia — *Little did they know what awaited them*.',
            examples: [
              {
                en: 'Not only is it cheaper, but it also lasts longer.',
                es: 'No solo es más barato, sino que también dura más.',
              },
              {
                en: 'No sooner had he arrived than he was asked to leave.',
                es: 'Apenas había llegado cuando le pidieron que se fuera.',
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
            es: 'Nunca antes había visto la ciudad semejantes multitudes.',
          },
          {
            en: 'Seldom do we get a chance like this.',
            es: 'Rara vez tenemos una oportunidad como esta.',
          },
          {
            en: 'Only after the meeting did the truth come out.',
            es: 'Solo después de la reunión salió la verdad a la luz.',
          },
          {
            en: 'At no time did the staff act improperly.',
            es: 'En ningún momento actuó el personal de forma inapropiada.',
          },
          {
            en: 'Not until I read the report did I grasp the scale of the problem.',
            es: 'Hasta que no leí el informe no comprendí la magnitud del problema.',
          },
          {
            en: 'Little did we know that the worst was yet to come.',
            es: 'Poco sabíamos que lo peor estaba aún por llegar.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen such a thing.',
            right: 'Never have I seen such a thing.',
            why: 'After a fronted negative adverbial you must **invert** subject and auxiliary, like a question.',
            esNote: 'Hay que invertir sujeto y auxiliar: *have I*, no *I have*.',
          },
          {
            wrong: 'Rarely he complains about anything.',
            right: 'Rarely does he complain about anything.',
            why: 'With no existing auxiliary, insert **does/did** to form the inversion.',
            esNote: 'Si no hay auxiliar, añade *do/does/did* antes del sujeto.',
          },
          {
            wrong: 'No sooner we had arrived when it started.',
            right: 'No sooner had we arrived than it started.',
            why: '*No sooner* inverts (had we) and pairs with **than**, not *when*.',
            esNote: '*No sooner* se invierte y se empareja con *than*, no con *when*.',
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
            kind: 'cloze',
            id: 'c1-inv1-ex2',
            before: 'Rarely ',
            after: ' she miss a deadline.',
            answers: ['does'],
            explain:
              'No auxiliary present, so insert *does* for the inversion (present, third person).',
          },
          {
            kind: 'correct',
            id: 'c1-inv1-ex3',
            wrong: 'Not only he forgot my name, but he also ignored me.',
            answers: ['Not only did he forget my name, but he also ignored me.'],
            explain: '*Not only* fronted needs inversion: *did he forget*.',
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
            kind: 'translate',
            id: 'c1-inv1-ex5',
            es: 'Bajo ninguna circunstancia deberías abrir esa puerta.',
            answers: ['Under no circumstances should you open that door.'],
            explain: '*Under no circumstances* fronts and inverts: *should you open*.',
          },
          {
            kind: 'cloze',
            id: 'c1-inv1-ex6',
            before: 'Little ',
            after: ' they know what was about to happen.',
            answers: ['did'],
            explain: '*Little did + S + know* is the fixed inverted expression for unawareness.',
          },
          {
            kind: 'dictation',
            id: 'c1-inv1-ex7',
            text: 'Only then did she realise how much she had missed home.',
            explain: '*Only then* fronted forces inversion: *did she realise*.',
          },
        ],
      },
      {
        id: 'c1-inversion-conditionals',
        level: 'C1',
        title: 'Inversion in Conditionals',
        summary:
          'Formal English can **drop *if*** and invert the subject and auxiliary instead: *Had I known* (= if I had known), *Were I to* (= if I were to), *Should you* (= if you should). This raises the register and is common in writing, business and polite offers.',
        summaryEs:
          'El inglés formal puede **omitir *if*** e invertir el sujeto y el auxiliar: *Had I known* (= if I had known), *Were I to* (= if I were to), *Should you* (= if you should). Esto eleva el registro y es común en la escritura, los negocios y los ofrecimientos corteses.',
        sections: [
          {
            heading: 'The three inversion patterns',
            body: "Three conditional types allow **if-deletion with inversion**. Third conditional: *If I had known* → **Had I known**. Second conditional with *were to*: *If we were to fail* → **Were we to fail**. First/zero with *should* for a remote possibility: *If you should need help* → **Should you need help**. Only **had, were and should** can do this — never *did, was* or modals like *would*. In the negative, do **not** contract: write *Had it not been for…*, never *Hadn't it been for*.",
            bodyEs:
              "Tres tipos de condicional permiten la **omisión de *if* con inversión**. Tercer condicional: *If I had known* → **Had I known**. Segundo condicional con *were to*: *If we were to fail* → **Were we to fail**. Primer/cero con *should* para una posibilidad remota: *If you should need help* → **Should you need help**. Solo **had, were y should** pueden hacerlo, nunca *did, was* ni modales como *would*. En negativo, **no** contraigas: escribe *Had it not been for…*, nunca *Hadn't it been for*.",
            examples: [
              {
                en: "Had I known you were coming, I'd have baked a cake.",
                es: 'Si hubiera sabido que venías, habría hecho un pastel.',
              },
              {
                en: 'Should you have any questions, please contact us.',
                es: 'Si tuviera alguna pregunta, póngase en contacto con nosotros.',
              },
            ],
          },
          {
            heading: "Register and 'Had it not been for'",
            body: "These structures are **more formal** than *if*-clauses and add elegance to written English. A very common fixed pattern is **Had it not been for + noun** (= if it hadn't been for): *Had it not been for your help, we'd have failed*. **Were it not for** works in the present/unreal: *Were it not for the rain, we'd be outside*. **Should** softens requests in correspondence: *Should you wish to cancel, simply reply to this email*. Note that *Were I to…* often projects a hypothetical future: *Were I to resign, who would replace me?*",
            bodyEs:
              "Estas estructuras son **más formales** que las cláusulas con *if* y dan elegancia al inglés escrito. Un patrón fijo muy común es **Had it not been for + sustantivo** (= if it hadn't been for): *Had it not been for your help, we'd have failed*. **Were it not for** funciona en presente/irreal: *Were it not for the rain, we'd be outside*. **Should** suaviza peticiones en la correspondencia: *Should you wish to cancel, simply reply to this email*. Nota que *Were I to…* suele proyectar un futuro hipotético: *Were I to resign, who would replace me?*",
            examples: [
              {
                en: "Were it not for the traffic, we'd already be there.",
                es: 'Si no fuera por el tráfico, ya estaríamos allí.',
              },
              {
                en: 'Had it not been for the alarm, the fire would have spread.',
                es: 'De no haber sido por la alarma, el incendio se habría propagado.',
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
            es: 'Si aceptara la oferta, tendría que mudarme.',
          },
          {
            en: 'Should anything go wrong, call this number.',
            es: 'Si algo saliera mal, llama a este número.',
          },
          {
            en: 'Had she trained harder, she might have won.',
            es: 'Si hubiera entrenado más, podría haber ganado.',
          },
          {
            en: 'Were it not for his patience, the class would be chaos.',
            es: 'Si no fuera por su paciencia, la clase sería un caos.',
          },
          {
            en: "Had it not been for the delay, we'd have caught the flight.",
            es: 'De no haber sido por el retraso, habríamos cogido el vuelo.',
          },
          {
            en: 'Should you change your mind, the door is always open.',
            es: 'Si cambiaras de opinión, la puerta siempre está abierta.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If had I known, I would have come.',
            right: 'Had I known, I would have come.',
            why: 'When you invert, you **delete *if***; you cannot keep both.',
            esNote: 'Al invertir se elimina *if*; no se pueden usar los dos a la vez.',
          },
          {
            wrong: "Hadn't it been for you, I'd have failed.",
            right: "Had it not been for you, I'd have failed.",
            why: 'In inverted conditionals the negative is **not contracted**; place *not* after the subject.',
            esNote: 'En condicionales invertidos no se contrae: *Had it not been for…*.',
          },
          {
            wrong: 'Would you need anything, just ask.',
            right: 'Should you need anything, just ask.',
            why: 'Only **had, were and should** invert; *would* cannot front a conditional.',
            esNote: 'Solo *had, were, should* pueden invertirse; *would* no.',
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
            kind: 'cloze',
            id: 'c1-inv2-ex2',
            before: '',
            after: ' you need any help, please let me know.',
            answers: ['Should'],
            explain: '*Should you need…* = if you should need (polite, remote possibility).',
          },
          {
            kind: 'correct',
            id: 'c1-inv2-ex3',
            wrong: "Hadn't it been for the map, we'd have got lost.",
            answers: [
              "Had it not been for the map, we'd have got lost.",
              'Had it not been for the map, we would have got lost.',
              "Had it not been for the map, we'd have gotten lost.",
            ],
            explain:
              'Do not contract the negative in inverted conditionals: *Had it not been for*.',
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
            kind: 'translate',
            id: 'c1-inv2-ex5',
            es: 'Si no fuera por tu apoyo, ya me habría rendido.',
            answers: [
              'Were it not for your support, I would have given up already.',
              "Were it not for your support, I'd have given up already.",
            ],
            explain: '*Were it not for + noun* expresses a decisive present factor.',
          },
          {
            kind: 'cloze',
            id: 'c1-inv2-ex6',
            before: '',
            after: ' I known about the meeting, I would have attended.',
            answers: ['Had'],
            explain: 'Inverted third conditional: *Had I known…*.',
          },
          {
            kind: 'dictation',
            id: 'c1-inv2-ex7',
            text: 'Should you require further assistance, do not hesitate to contact us.',
            explain: 'Formal *Should you require…* replaces *if you should require…*.',
          },
        ],
      },
      {
        id: 'c1-mixed-reduced-conditionals',
        level: 'C1',
        title: 'Mixed and Reduced Conditionals',
        summary:
          "**Mixed conditionals** combine times across the two clauses — a past condition with a present result (*If I had studied, I'd be a doctor now*), or a present condition with a past result. **Reduced conditionals** compress the clause using *if so, if not, if necessary, unless* and other shortcuts.",
        summaryEs:
          "Los **condicionales mixtos** combinan tiempos entre las dos cláusulas: una condición pasada con un resultado presente (*If I had studied, I'd be a doctor now*), o una condición presente con un resultado pasado. Los **condicionales reducidos** comprimen la cláusula usando *if so, if not, if necessary, unless* y otros atajos.",
        sections: [
          {
            heading: 'Mixed conditionals: crossing time zones',
            body: "A **mixed conditional** uses one clause from one time frame and the result from another. The most common is **past condition → present result**: *If I had taken that job, I would be living in Tokyo now* (the past affects the present). The reverse, **present condition → past result**, links a permanent truth to a past outcome: *If I were more organised, I wouldn't have missed the deadline*. Choose tenses by **logic**, not by a fixed formula: ask 'when is the condition?' and 'when is the result?' separately.",
            bodyEs:
              "Un **condicional mixto** usa una cláusula de un marco temporal y el resultado de otro. El más común es **condición pasada → resultado presente**: *If I had taken that job, I would be living in Tokyo now* (el pasado afecta al presente). El inverso, **condición presente → resultado pasado**, vincula una verdad permanente con un resultado pasado: *If I were more organised, I wouldn't have missed the deadline*. Elige los tiempos por **lógica**, no por una fórmula fija: pregúntate '¿cuándo es la condición?' y '¿cuándo es el resultado?' por separado.",
            examples: [
              {
                en: "If she had married him, she'd be unhappy today.",
                es: 'Si se hubiera casado con él, hoy sería infeliz.',
              },
              {
                en: "If he weren't so stubborn, he would have apologised by now.",
                es: 'Si no fuera tan terco, ya se habría disculpado.',
              },
            ],
          },
          {
            heading: 'Reduced and elliptical conditionals',
            body: "We often **shorten** conditionals to avoid repetition. **If so / If not** stand in for a whole clause: *Are you free? If so, let's meet*. **If necessary, if possible, if anything, if in doubt** are fixed reduced phrases: *Call me if necessary*. **Unless** = if not, but only for the single decisive exception: *I'll go unless it rains*. **Even if** concedes; **provided/providing (that)** and **as long as** add a strict condition: *You can stay as long as you're quiet*. **Otherwise** packs an unstated condition: *Hurry — otherwise we'll miss it*.",
            bodyEs:
              "A menudo **acortamos** los condicionales para evitar repetición. **If so / If not** sustituyen a toda una cláusula: *Are you free? If so, let's meet*. **If necessary, if possible, if anything, if in doubt** son frases reducidas fijas: *Call me if necessary*. **Unless** = if not, pero solo para la única excepción decisiva: *I'll go unless it rains*. **Even if** concede; **provided/providing (that)** y **as long as** añaden una condición estricta: *You can stay as long as you're quiet*. **Otherwise** encierra una condición no expresada: *Hurry — otherwise we'll miss it*.",
            examples: [
              {
                en: "We may need to delay — if so, I'll email everyone.",
                es: 'Puede que tengamos que aplazarlo; si es así, enviaré un correo a todos.',
              },
              {
                en: "I'll lend you the car as long as you fill it up.",
                es: 'Te presto el coche siempre que lo llenes de gasolina.',
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
            es: 'Si no hubiéramos perdido el tren, ya estaríamos en casa.',
          },
          {
            en: "If I were taller, I'd have become a model.",
            es: 'Si fuera más alto, me habría hecho modelo.',
          },
          {
            en: "Take an umbrella; otherwise you'll get soaked.",
            es: 'Lleva un paraguas; si no, te empaparás.',
          },
          {
            en: "I'll sign the contract, provided the terms don't change.",
            es: 'Firmaré el contrato, siempre que las condiciones no cambien.',
          },
          {
            en: "Do you want the long version? If not, I'll be brief.",
            es: '¿Quieres la versión larga? Si no, seré breve.',
          },
          {
            en: "Unless you tell me otherwise, I'll book for eight.",
            es: 'A menos que me digas lo contrario, reservaré para las ocho.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have studied, I would be a doctor now.',
            right: 'If I had studied, I would be a doctor now.',
            why: 'The if-clause of a (mixed) conditional uses **had + past participle**, never *would have*.',
            esNote: 'Nunca uses *would have* en la cláusula con *if*; usa *had + participio*.',
          },
          {
            wrong: "Unless you don't hurry, we'll be late.",
            right: "Unless you hurry, we'll be late.",
            why: "**Unless** already means 'if not', so a second negative is wrong.",
            esNote: "*Unless* ya significa 'si no'; no añadas otra negación.",
          },
          {
            wrong: "If I were more careful, I wouldn't make that mistake yesterday.",
            right: "If I were more careful, I wouldn't have made that mistake yesterday.",
            why: 'A past result needs **would have + past participle**, even with a present condition.',
            esNote: 'Para un resultado pasado usa *would have + participio*.',
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
            kind: 'cloze',
            id: 'c1-mix-ex2',
            before: "If she weren't so shy, she ",
            after: ' us about the problem yesterday.',
            answers: ['would have told', "would've told"],
            explain: 'Present condition, past result needs *would have + past participle*.',
          },
          {
            kind: 'correct',
            id: 'c1-mix-ex3',
            wrong: 'If I would have known, I would be there now.',
            answers: [
              'If I had known, I would be there now.',
              'Had I known, I would be there now.',
            ],
            explain: 'The if-clause takes *had known*, not *would have known*.',
          },
          {
            kind: 'order',
            id: 'c1-mix-ex4',
            tokens: ['If', 'we', "hadn't", 'argued', 'we', 'would', 'still', 'be', 'friends'],
            answer: "If we hadn't argued, we would still be friends.",
            explain: 'Past cause, present result: a classic mixed conditional.',
          },
          {
            kind: 'translate',
            id: 'c1-mix-ex5',
            es: 'A menos que llueva, jugaremos al fútbol.',
            answers: [
              "Unless it rains, we'll play football.",
              'Unless it rains, we will play football.',
              "We'll play football unless it rains.",
            ],
            explain: '*Unless* = if not; no extra negative needed.',
          },
          {
            kind: 'cloze',
            id: 'c1-mix-ex6',
            before: 'Are you coming tonight? If ',
            after: ", I'll save you a seat.",
            answers: ['so'],
            explain: '*If so* substitutes for the whole positive clause.',
          },
          {
            kind: 'dictation',
            id: 'c1-mix-ex7',
            text: "If he had listened to my advice, he wouldn't be in this mess now.",
            explain:
              "Mixed conditional: past condition (*had listened*) with present result (*wouldn't be*).",
          },
        ],
      },
      {
        id: 'c1-subjunctive',
        level: 'C1',
        title: 'The Subjunctive',
        summary:
          'English keeps a small but important **subjunctive**. The **mandative subjunctive** uses the bare base verb after verbs and adjectives of demand and suggestion (*I insist that he be present*). The **were-subjunctive** appears in unreal clauses (*if I were you*), and there are many **fixed expressions** (*so be it, God save the Queen*).',
        summaryEs:
          'El inglés conserva un **subjuntivo** pequeño pero importante. El **subjuntivo mandativo** usa el verbo base sin conjugar tras verbos y adjetivos de exigencia y sugerencia (*I insist that he be present*). El **subjuntivo *were*** aparece en cláusulas irreales (*if I were you*), y hay muchas **expresiones fijas** (*so be it, God save the Queen*).',
        sections: [
          {
            heading: 'The mandative subjunctive',
            body: 'After verbs of **demanding, suggesting, requesting and recommending** (*demand, insist, suggest, recommend, require, propose, ask, request*), the *that*-clause uses the **base form** of the verb for all persons: *They demand that he resign* (not *resigns*). It does not change for negatives or tense: *We recommend that she not travel*; *I suggested that he be informed*. The same applies after adjectives like **essential, vital, important, crucial, necessary, advisable**: *It is essential that everyone arrive on time*. In British English *should + base* is a common alternative: *I insist that he should be present*.',
            bodyEs:
              'Tras verbos de **exigencia, sugerencia, petición y recomendación** (*demand, insist, suggest, recommend, require, propose, ask, request*), la cláusula con *that* usa la **forma base** del verbo para todas las personas: *They demand that he resign* (no *resigns*). No cambia con negativos ni tiempos: *We recommend that she not travel*; *I suggested that he be informed*. Lo mismo aplica tras adjetivos como **essential, vital, important, crucial, necessary, advisable**: *It is essential that everyone arrive on time*. En inglés británico *should + base* es una alternativa común: *I insist that he should be present*.',
            examples: [
              {
                en: 'The board recommends that the policy be reviewed.',
                es: 'La junta recomienda que se revise la política.',
              },
              {
                en: 'It is vital that he understand the risks.',
                es: 'Es vital que entienda los riesgos.',
              },
            ],
          },
          {
            heading: 'Were-subjunctive and fixed expressions',
            body: 'In hypothetical and unreal clauses, formal English uses **were** for all persons: *If I were you*; *She acts as if she were the boss*; *I wish it were Friday*; *Suppose he were to refuse*. Using *was* here is acceptable in speech but **were** is preferred in careful writing. The subjunctive also survives in **frozen expressions**: *Be that as it may, So be it, Come what may, God bless you, Heaven forbid, Suffice it to say, Far be it from me, Long live the king*. These are learned as wholes, not built from rules.',
            bodyEs:
              'En cláusulas hipotéticas e irreales, el inglés formal usa **were** para todas las personas: *If I were you*; *She acts as if she were the boss*; *I wish it were Friday*; *Suppose he were to refuse*. Usar *was* aquí es aceptable en el habla, pero **were** es preferible en la escritura cuidada. El subjuntivo también sobrevive en **expresiones fijas**: *Be that as it may, So be it, Come what may, God bless you, Heaven forbid, Suffice it to say, Far be it from me, Long live the king*. Estas se aprenden como bloques, no se construyen con reglas.',
            examples: [
              {
                en: 'If I were in charge, things would be different.',
                es: 'Si yo estuviera al mando, las cosas serían diferentes.',
              },
              {
                en: 'Be that as it may, we must move forward.',
                es: 'Sea como sea, debemos seguir adelante.',
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
            es: 'Insisto en que se le diga de inmediato.',
          },
          {
            en: 'It is essential that every member sign the form.',
            es: 'Es esencial que cada miembro firme el formulario.',
          },
          {
            en: 'The judge ordered that the defendant remain in custody.',
            es: 'El juez ordenó que el acusado permaneciera bajo custodia.',
          },
          {
            en: 'We request that you not smoke on the premises.',
            es: 'Le rogamos que no fume en las instalaciones.',
          },
          {
            en: "If I were you, I'd think twice.",
            es: 'Si yo fuera tú, lo pensaría dos veces.',
          },
          {
            en: "Come what may, I'll support you.",
            es: 'Pase lo que pase, te apoyaré.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I insist that he comes to the meeting.',
            right: 'I insist that he come to the meeting.',
            why: 'The mandative subjunctive uses the **base form** (*come*), with no third-person -s.',
            esNote: 'Usa la forma base del verbo; no añadas -s aunque sea tercera persona.',
          },
          {
            wrong: 'It is essential that everyone is present.',
            right: 'It is essential that everyone be present.',
            why: 'After *essential that…*, use the base form **be**, not the conjugated *is*.',
            esNote: 'Tras *essential that*, usa *be*, no *is*.',
          },
          {
            wrong: "She recommended that he doesn't go.",
            right: 'She recommended that he not go.',
            why: 'The negative subjunctive is **not + base verb**, without *do/does*.',
            esNote: 'El negativo es *not + verbo base*, sin *do/does*.',
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
            kind: 'cloze',
            id: 'c1-subj-ex2',
            before: 'It is vital that every passenger ',
            after: ' a seatbelt.',
            answers: ['wear'],
            explain: 'After *vital that*, use the base form *wear*.',
          },
          {
            kind: 'correct',
            id: 'c1-subj-ex3',
            wrong: "I suggest that she doesn't tell anyone.",
            answers: ['I suggest that she not tell anyone.'],
            explain: 'Negative subjunctive: *not tell*, without *does*.',
          },
          {
            kind: 'order',
            id: 'c1-subj-ex4',
            tokens: ['The', 'committee', 'demanded', 'that', 'the', 'report', 'be', 'published'],
            answer: 'The committee demanded that the report be published.',
            explain: 'Passive subjunctive: *be + past participle* after *demanded that*.',
          },
          {
            kind: 'translate',
            id: 'c1-subj-ex5',
            es: 'Si yo fuera tú, aceptaría la oferta.',
            answers: [
              'If I were you, I would accept the offer.',
              "If I were you, I'd accept the offer.",
            ],
            explain: 'Were-subjunctive in the unreal clause: *If I were you*.',
          },
          {
            kind: 'cloze',
            id: 'c1-subj-ex6',
            before: 'Be that as it ',
            after: ', we still need a decision.',
            answers: ['may'],
            explain: 'Fixed subjunctive expression: *Be that as it may*.',
          },
          {
            kind: 'dictation',
            id: 'c1-subj-ex7',
            text: 'The regulations require that each application be submitted in writing.',
            explain: 'Mandative subjunctive in the passive: *be submitted*.',
          },
        ],
      },
      {
        id: 'c1-advanced-past-modals',
        level: 'C1',
        title: 'Advanced Past Modals',
        summary:
          "**Modal + have + past participle** lets us look back and **speculate** (*must have, might have, can't have*), **criticise** (*should have, ought to have*) and express **regret** (*could have, needn't have*). Mastering the nuances distinguishes confident deduction from gentle reproach.",
        summaryEs:
          "**Modal + have + participio** nos permite mirar atrás y **especular** (*must have, might have, can't have*), **criticar** (*should have, ought to have*) y expresar **arrepentimiento** (*could have, needn't have*). Dominar los matices distingue la deducción segura del leve reproche.",
        sections: [
          {
            heading: 'Speculation and deduction about the past',
            body: "To deduce what happened, use **must have** (certain it's true: *She must have left already*), **can't have / couldn't have** (certain it's false: *He can't have known*), and **might/may/could have** (possible: *They might have missed the bus*). Note the key contrast for Spanish speakers: the opposite of *must have* is **can't have**, not *mustn't have*. **Could have** also expresses unrealised possibility — *That could have gone much worse* — so context decides whether it means deduction or a near-miss.",
            bodyEs:
              "Para deducir qué pasó, usa **must have** (seguro que es verdad: *She must have left already*), **can't have / couldn't have** (seguro que es falso: *He can't have known*), y **might/may/could have** (posible: *They might have missed the bus*). Nota el contraste clave para hispanohablantes: el opuesto de *must have* es **can't have**, no *mustn't have*. **Could have** también expresa una posibilidad no realizada — *That could have gone much worse* — así que el contexto decide si significa deducción o algo que estuvo cerca de pasar.",
            examples: [
              {
                en: 'The lights are off — they must have gone to bed.',
                es: 'Las luces están apagadas; deben de haberse acostado.',
              },
              {
                en: "You can't have finished already!",
                es: '¡No puedes haber terminado ya!',
              },
            ],
          },
          {
            heading: 'Criticism and regret',
            body: "**Should have / ought to have + past participle** criticise a past action or express regret: *You should have told me* (you didn't, and that was wrong). The negative *shouldn't have* marks a mistaken action: *I shouldn't have eaten so much*. **Could have** voices a missed opportunity or reproach: *You could have warned us!*. **Needn't have + past participle** means an action was done but was **unnecessary** (*You needn't have paid — it was free*), which contrasts sharply with **didn't need to**, which often implies the action was *not* done (*I didn't need to pay, so I didn't*).",
            bodyEs:
              "**Should have / ought to have + participio** critican una acción pasada o expresan arrepentimiento: *You should have told me* (no lo hiciste, y estuvo mal). El negativo *shouldn't have* marca una acción equivocada: *I shouldn't have eaten so much*. **Could have** expresa una oportunidad perdida o un reproche: *You could have warned us!*. **Needn't have + participio** significa que una acción se hizo pero era **innecesaria** (*You needn't have paid — it was free*), lo que contrasta marcadamente con **didn't need to**, que suele implicar que la acción *no* se hizo (*I didn't need to pay, so I didn't*).",
            examples: [
              {
                en: "I should have booked earlier; now it's full.",
                es: 'Debería haber reservado antes; ahora está lleno.',
              },
              {
                en: "You needn't have cooked — we already ate.",
                es: 'No hacía falta que cocinaras; ya comimos.',
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
            es: 'La carretera está mojada; debe de haber llovido por la noche.',
          },
          {
            en: "She couldn't have seen us — she was facing the other way.",
            es: 'No pudo habernos visto; estaba mirando hacia el otro lado.',
          },
          {
            en: "We might have won if we'd played better.",
            es: 'Podríamos haber ganado si hubiéramos jugado mejor.',
          },
          {
            en: 'You ought to have asked permission first.',
            es: 'Deberías haber pedido permiso primero.',
          },
          {
            en: "I needn't have brought my umbrella after all.",
            es: 'Al final no hacía falta que trajera el paraguas.',
          },
          {
            en: 'He could have been seriously hurt.',
            es: 'Podría haberse hecho mucho daño.',
          },
        ],
        pitfalls: [
          {
            wrong: "He mustn't have heard me.",
            right: "He can't have heard me.",
            why: "For negative deduction use **can't/couldn't have**; *mustn't have* is not used for deduction.",
            esNote: "Para deducción negativa usa *can't have*, no *mustn't have*.",
          },
          {
            wrong: 'You should have to tell me.',
            right: 'You should have told me.',
            why: 'The structure is **should have + past participle**, not *should have to*.',
            esNote: 'Es *should have + participio*; no metas *to*.',
          },
          {
            wrong: 'I should of called you.',
            right: 'I should have called you.',
            why: "*Of* is a mishearing of the contraction *'ve*; always write **have**.",
            esNote: 'Escribe *should have*, nunca *should of*.',
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
            kind: 'cloze',
            id: 'c1-mod-ex2',
            before: "It's freezing in here — someone ",
            after: ' the window open.',
            answers: ['must have left', "must've left"],
            explain: 'Positive deduction: *must have left*.',
          },
          {
            kind: 'correct',
            id: 'c1-mod-ex3',
            wrong: 'You should of warned me about the traffic.',
            answers: [
              'You should have warned me about the traffic.',
              "You should've warned me about the traffic.",
            ],
            explain: 'Write *should have*, never *should of*.',
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
            kind: 'translate',
            id: 'c1-mod-ex5',
            es: 'Deberías haberme llamado anoche.',
            answers: [
              'You should have called me last night.',
              "You should've called me last night.",
              'You ought to have called me last night.',
            ],
            explain: 'Criticism/regret: *should/ought to have + past participle*.',
          },
          {
            kind: 'order',
            id: 'c1-mod-ex6',
            tokens: ['They', 'might', 'have', 'taken', 'the', 'wrong', 'turning'],
            answer: 'They might have taken the wrong turning.',
            explain: 'Possibility about the past: *might have + past participle*.',
          },
          {
            kind: 'dictation',
            id: 'c1-mod-ex7',
            text: "He can't have finished the whole report in an hour.",
            explain: "Negative deduction: *can't have finished*.",
          },
        ],
      },
      {
        id: 'c1-passive-reporting',
        level: 'C1',
        title: 'The Full Passive Range and Advanced Reporting',
        summary:
          'C1 passives go beyond *be + past participle*: **get-passives**, **passive infinitives and -ing forms**, **causative have/get**, and impersonal **reporting structures** (*It is said that…*, *He is believed to be…*). These let writers stay objective, manage focus and report claims with appropriate distance.',
        summaryEs:
          'Las pasivas de C1 van más allá de *be + participio*: **get-passives**, **infinitivos y formas en -ing pasivos**, **causativo have/get**, y **estructuras de información** impersonales (*It is said that…*, *He is believed to be…*). Permiten al escritor mantenerse objetivo, gestionar el foco y reportar afirmaciones con la distancia adecuada.',
        sections: [
          {
            heading: 'Extending the passive',
            body: "Beyond the basic passive, learn: **get-passive** for events and changes, often unplanned (*He got fired*; *The window got broken*); **passive infinitive** *(to) be done* (*She expects to be promoted*; *There's nothing to be done*); **passive -ing** *being done* (*I hate being interrupted*; *After being warned, he left*); **modal passives** (*It must be finished today*); and **perfect passives** (*The bridge has been repaired*). The **causative** *have/get something done* reports an action done for you by someone else: *I had my car serviced*; *We're getting the kitchen painted*.",
            bodyEs:
              "Más allá de la pasiva básica, aprende: **get-passive** para eventos y cambios, a menudo no planeados (*He got fired*; *The window got broken*); **infinitivo pasivo** *(to) be done* (*She expects to be promoted*; *There's nothing to be done*); **-ing pasivo** *being done* (*I hate being interrupted*; *After being warned, he left*); **pasivas modales** (*It must be finished today*); y **pasivas perfectas** (*The bridge has been repaired*). El **causativo** *have/get something done* informa de una acción hecha por otra persona para ti: *I had my car serviced*; *We're getting the kitchen painted*.",
            examples: [
              {
                en: "I'm having the documents translated this week.",
                es: 'Estoy haciendo traducir los documentos esta semana.',
              },
              {
                en: 'Nobody likes being told what to do.',
                es: 'A nadie le gusta que le digan lo que tiene que hacer.',
              },
            ],
          },
          {
            heading: 'Impersonal reporting structures',
            body: 'To report opinions or rumours impersonally, English uses two patterns. **It + passive reporting verb + that-clause**: *It is said that the company is failing*; *It was reported that talks had collapsed*. **Subject + passive reporting verb + to-infinitive**: *The company is said to be failing*; *He is believed to have left the country*. Common verbs: *say, believe, think, report, know, expect, allege, consider, understand*. Use a **perfect infinitive** (*to have done*) when the reported event is earlier than the reporting: *She is thought to have made a fortune*.',
            bodyEs:
              'Para reportar opiniones o rumores de forma impersonal, el inglés usa dos patrones. **It + verbo pasivo de información + cláusula con that**: *It is said that the company is failing*; *It was reported that talks had collapsed*. **Sujeto + verbo pasivo de información + infinitivo con to**: *The company is said to be failing*; *He is believed to have left the country*. Verbos comunes: *say, believe, think, report, know, expect, allege, consider, understand*. Usa un **infinitivo perfecto** (*to have done*) cuando el evento reportado es anterior al momento de informar: *She is thought to have made a fortune*.',
            examples: [
              {
                en: 'It is believed that no one survived the crash.',
                es: 'Se cree que nadie sobrevivió al accidente.',
              },
              {
                en: 'The minister is alleged to have accepted bribes.',
                es: 'Se alega que el ministro aceptó sobornos.',
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
            es: 'Se cree que el cuadro es una falsificación.',
          },
          {
            en: 'Their house got burgled while they were away.',
            es: 'Les entraron a robar en casa mientras estaban fuera.',
          },
          {
            en: 'All applications must be submitted by Friday.',
            es: 'Todas las solicitudes deben presentarse antes del viernes.',
          },
          {
            en: 'We had the roof repaired after the storm.',
            es: 'Hicimos reparar el tejado tras la tormenta.',
          },
          {
            en: 'It was reported that the talks had broken down.',
            es: 'Se informó de que las negociaciones se habían roto.',
          },
          {
            en: 'He is known to have lived in Paris for years.',
            es: 'Se sabe que vivió en París durante años.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He is said that he is very rich.',
            right: 'He is said to be very rich.',
            why: 'With a personal subject, use the **to-infinitive** pattern; the *that*-clause goes only with *It is said that…*.',
            esNote: 'Con sujeto personal usa *to be*; *that* solo va con *It is said that…*.',
          },
          {
            wrong: 'I cut my hair yesterday at the salon.',
            right: 'I had my hair cut yesterday at the salon.',
            why: 'If someone else does it for you, use the **causative** *have something done*.',
            esNote: 'Si te lo hacen, usa el causativo *have something done*.',
          },
          {
            wrong: 'It is believed the company to be failing.',
            right: 'It is believed that the company is failing.',
            why: 'After *It is believed*, use a **that-clause**, not a to-infinitive.',
            esNote: 'Tras *It is believed* va una cláusula con *that*.',
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
            kind: 'cloze',
            id: 'c1-pass-ex2',
            before: "We're ",
            after: ' the house painted next week.',
            answers: ['having', 'getting'],
            explain: 'Causative *have/get something done* for work done by others.',
          },
          {
            kind: 'correct',
            id: 'c1-pass-ex3',
            wrong: 'He is believed to leaving the country last night.',
            answers: [
              'He is believed to have left the country last night.',
              'It is believed that he left the country last night.',
            ],
            explain: 'An earlier event needs the perfect infinitive *to have left*.',
          },
          {
            kind: 'order',
            id: 'c1-pass-ex4',
            tokens: ['It', 'is', 'thought', 'that', 'the', 'virus', 'originated', 'abroad'],
            answer: 'It is thought that the virus originated abroad.',
            explain: 'Impersonal reporting: *It is thought that…*.',
          },
          {
            kind: 'translate',
            id: 'c1-pass-ex5',
            es: 'A nadie le gusta que lo critiquen en público.',
            answers: [
              'Nobody likes being criticised in public.',
              'No one likes being criticised in public.',
              'Nobody likes being criticized in public.',
            ],
            explain: 'Passive -ing after *like*: *being criticised*.',
          },
          {
            kind: 'cloze',
            id: 'c1-pass-ex6',
            before: 'The bridge ',
            after: ' repaired before the festival.',
            answers: ['must be', 'needs to be', 'has to be'],
            explain: 'Modal passive: *must be + past participle*.',
          },
          {
            kind: 'dictation',
            id: 'c1-pass-ex7',
            text: 'The suspect is alleged to have forged several signatures.',
            explain: 'Reporting passive with perfect infinitive: *is alleged to have forged*.',
          },
        ],
      },
      {
        id: 'c1-nominalisation-noun-phrases',
        level: 'C1',
        title: 'Nominalisation and Complex Noun Phrases',
        summary:
          'Academic and formal English packs information into **noun phrases** rather than verbs. **Nominalisation** turns verbs and adjectives into nouns (*decide → decision*, *able → ability*), and complex noun phrases stack pre- and post-modifiers (*the recently announced government plan to cut spending*). This makes prose denser, more abstract and more objective.',
        summaryEs:
          'El inglés académico y formal concentra la información en **sintagmas nominales** en lugar de verbos. La **nominalización** convierte verbos y adjetivos en sustantivos (*decide → decision*, *able → ability*), y los sintagmas nominales complejos acumulan modificadores antes y después (*the recently announced government plan to cut spending*). Esto hace la prosa más densa, abstracta y objetiva.',
        sections: [
          {
            heading: 'Nominalisation: turning verbs into nouns',
            body: '**Nominalisation** replaces a verb or adjective with a related noun, shifting the action into a thing you can discuss. *Prices rose sharply* becomes *the sharp rise in prices*; *They decided quickly* becomes *their quick decision*. Common suffixes include **-tion, -ment, -ance, -ity, -ness, -al**: *introduce → introduction*, *develop → development*, *refuse → refusal*. Nominalisation lets you **compress** several clauses into one phrase and sound more formal, but overusing it makes writing heavy and impersonal, so balance nouns with strong verbs.',
            bodyEs:
              'La **nominalización** sustituye un verbo o adjetivo por un sustantivo relacionado, convirtiendo la acción en algo que se puede discutir. *Prices rose sharply* se convierte en *the sharp rise in prices*; *They decided quickly* en *their quick decision*. Sufijos comunes: **-tion, -ment, -ance, -ity, -ness, -al**: *introduce → introduction*, *develop → development*, *refuse → refusal*. La nominalización permite **comprimir** varias cláusulas en una frase y sonar más formal, pero abusar de ella hace la escritura pesada e impersonal, así que equilibra los sustantivos con verbos fuertes.',
            examples: [
              {
                en: "The government's refusal to negotiate angered the unions.",
                es: 'La negativa del gobierno a negociar enfureció a los sindicatos.',
              },
              {
                en: 'There has been a marked improvement in safety.',
                es: 'Ha habido una notable mejora en la seguridad.',
              },
            ],
          },
          {
            heading: 'Building complex noun phrases',
            body: 'A complex noun phrase has a **head noun** with modifiers before and after it. **Pre-modifiers** (determiners, adjectives, nouns) stack in a fixed order: *the two large wooden shipping crates*. **Post-modifiers** add prepositional phrases, relative clauses, *-ing*/*-ed* clauses, or *to*-infinitives: *the decision **to close the factory** **announced yesterday** **by the board**.* Nouns used as adjectives (**noun + noun**) are very productive: *a government spending review*, *a customer satisfaction survey*. Read complex phrases by finding the head noun first, then unpacking what surrounds it.',
            bodyEs:
              'Un sintagma nominal complejo tiene un **sustantivo núcleo** con modificadores antes y después. Los **premodificadores** (determinantes, adjetivos, sustantivos) se ordenan de forma fija: *the two large wooden shipping crates*. Los **posmodificadores** añaden frases preposicionales, cláusulas de relativo, cláusulas en *-ing*/*-ed* o infinitivos con *to*: *the decision **to close the factory** **announced yesterday** **by the board**.* Los sustantivos usados como adjetivos (**sustantivo + sustantivo**) son muy productivos: *a government spending review*, *a customer satisfaction survey*. Lee las frases complejas localizando primero el núcleo y luego desentrañando lo que lo rodea.',
            examples: [
              {
                en: 'A long-awaited independent inquiry into the scandal',
                es: 'Una largamente esperada investigación independiente sobre el escándalo',
              },
              {
                en: 'The risk of further interest rate increases',
                es: 'El riesgo de nuevas subidas de los tipos de interés',
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
            es: 'La introducción de nuevas normas causó confusión.',
          },
          {
            en: 'Her resignation came as a complete surprise.',
            es: 'Su dimisión fue una sorpresa total.',
          },
          {
            en: 'There is growing concern about air pollution levels.',
            es: 'Hay una creciente preocupación por los niveles de contaminación del aire.',
          },
          {
            en: "The committee's rejection of the proposal was unexpected.",
            es: 'El rechazo de la propuesta por parte del comité fue inesperado.',
          },
          {
            en: 'A significant reduction in waiting times was reported.',
            es: 'Se informó de una reducción significativa en los tiempos de espera.',
          },
          {
            en: "The company's long-term investment strategy paid off.",
            es: 'La estrategia de inversión a largo plazo de la empresa dio sus frutos.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The govern decided to make a reduce of taxes.',
            right: 'The government decided on a reduction in taxes.',
            why: 'Use the correct **noun forms** (*government*, *reduction*); do not use a verb form as a noun.',
            esNote: 'Cada palabra tiene su forma nominal propia; no uses el verbo como sustantivo.',
          },
          {
            wrong: 'the increase of the prices',
            right: 'the increase in prices',
            why: 'Many nominalisations take a fixed preposition: *increase/rise/reduction **in***, *refusal/failure **to***.',
            esNote: 'Aprende la preposición fija: *increase in*, *refusal to*.',
          },
          {
            wrong: 'a satisfaction customer survey',
            right: 'a customer satisfaction survey',
            why: 'In noun strings the modifying nouns come **before** the head noun in logical order.',
            esNote: 'En cadenas de sustantivos, los modificadores van antes del núcleo.',
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
            kind: 'cloze',
            id: 'c1-nom-ex2',
            before: 'There has been a sharp increase ',
            after: ' unemployment.',
            answers: ['in'],
            explain: '*Increase* takes the preposition *in*.',
          },
          {
            kind: 'correct',
            id: 'c1-nom-ex3',
            wrong: 'The fail of the project surprised everyone.',
            answers: ['The failure of the project surprised everyone.'],
            explain: 'Use the noun *failure*, not the verb *fail*, as the head noun.',
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
            kind: 'translate',
            id: 'c1-nom-ex5',
            es: 'Su negativa a disculparse empeoró las cosas.',
            answers: [
              'Her refusal to apologise made things worse.',
              'His refusal to apologise made things worse.',
              'Her refusal to apologize made things worse.',
            ],
            explain: 'Nominalisation *refusal to + infinitive*.',
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
            kind: 'dictation',
            id: 'c1-nom-ex7',
            text: 'The sudden collapse of the housing market triggered a global recession.',
            explain: 'Nominalised heads: *collapse* and *recession* carry the information.',
          },
        ],
      },
      {
        id: 'c1-participle-clauses',
        level: 'C1',
        title: 'Participle Clauses',
        summary:
          '**Participle clauses** compress a full clause into a phrase using *-ing*, *-ed* or *being*. They show time, reason, result or condition more economically: *Realising the time, she ran*. C1 adds **negative** (*not knowing*), **perfect** (*having finished*), **passive** (*being watched*), **absolute** (*the meeting over*) and **concessive** uses.',
        summaryEs:
          'Las **cláusulas de participio** comprimen una cláusula completa en una frase usando *-ing*, *-ed* o *being*. Muestran tiempo, causa, resultado o condición de forma más económica: *Realising the time, she ran*. El C1 añade usos **negativos** (*not knowing*), **perfectos** (*having finished*), **pasivos** (*being watched*), **absolutos** (*the meeting over*) y **concesivos**.',
        sections: [
          {
            heading: 'Core participle clauses',
            body: "An **-ing clause** has an active meaning: *Feeling tired, I went to bed* (= because I felt tired). An **-ed clause** has a passive meaning: *Built in 1900, the house needs work* (= which was built). Use a **perfect participle** (*having + p.p.*) to show one action clearly before another: *Having locked the door, she left*. Crucially, the participle's subject must be the **same** as the main clause's subject; otherwise you create a 'dangling participle'. Negatives go first: **not knowing**, **never having seen**.",
            bodyEs:
              "Una **cláusula en -ing** tiene significado activo: *Feeling tired, I went to bed* (= porque me sentía cansado). Una **cláusula en -ed** tiene significado pasivo: *Built in 1900, the house needs work* (= que fue construida). Usa un **participio perfecto** (*having + p.p.*) para mostrar una acción claramente antes de otra: *Having locked the door, she left*. Es crucial que el sujeto del participio sea el **mismo** que el de la cláusula principal; si no, creas un 'participio colgante'. Los negativos van delante: **not knowing**, **never having seen**.",
            examples: [
              {
                en: 'Not having eaten all day, he was starving.',
                es: 'Al no haber comido en todo el día, estaba hambriento.',
              },
              {
                en: 'Shocked by the news, she sat down.',
                es: 'Conmocionada por la noticia, se sentó.',
              },
            ],
          },
          {
            heading: 'Absolute and concessive clauses',
            body: "An **absolute clause** has its **own subject**, so the rule about matching subjects does not apply: *The weather being fine, we walked*; *Their work finished, the team went home*; *He stood there, arms folded*. These add background detail elegantly. For **concessive** meaning ('although'), combine a participle with a conjunction: *While admitting the error, she defended the plan*; *Though exhausted, they carried on*. You can also front a participle after **when, after, before, since, on, in**: *On hearing the news, he called home*; *When dealing with complaints, stay calm*.",
            bodyEs:
              "Una **cláusula absoluta** tiene su **propio sujeto**, así que la regla de coincidencia de sujetos no aplica: *The weather being fine, we walked*; *Their work finished, the team went home*; *He stood there, arms folded*. Añaden detalle de fondo con elegancia. Para el sentido **concesivo** ('aunque'), combina un participio con una conjunción: *While admitting the error, she defended the plan*; *Though exhausted, they carried on*. También puedes anteponer un participio tras **when, after, before, since, on, in**: *On hearing the news, he called home*; *When dealing with complaints, stay calm*.",
            examples: [
              {
                en: 'The meeting over, everyone hurried out.',
                es: 'Terminada la reunión, todos salieron a toda prisa.',
              },
              {
                en: 'Though warned, he ignored the danger.',
                es: 'Aunque se le advirtió, ignoró el peligro.',
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
            es: 'Caminando a casa, me encontré con un viejo amigo.',
          },
          {
            en: 'Written in haste, the report contained errors.',
            es: 'Escrito con prisa, el informe contenía errores.',
          },
          {
            en: 'Having been delayed twice, the flight finally departed.',
            es: 'Habiéndose retrasado dos veces, el vuelo por fin despegó.',
          },
          {
            en: 'All things considered, it was a good year.',
            es: 'Considerándolo todo, fue un buen año.',
          },
          {
            en: 'Not wanting to seem rude, she stayed a little longer.',
            es: 'No queriendo parecer maleducada, se quedó un poco más.',
          },
          {
            en: 'The guests gone, the house felt empty.',
            es: 'Una vez idos los invitados, la casa se sintió vacía.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Walking down the street, a dog bit me.',
            right: 'Walking down the street, I was bitten by a dog.',
            why: "A **dangling participle**: the subject of *walking* must match the main subject. Here the dog wasn't walking.",
            esNote: 'El sujeto del participio debe coincidir con el de la oración principal.',
          },
          {
            wrong: 'Knowing not the answer, he stayed silent.',
            right: 'Not knowing the answer, he stayed silent.',
            why: 'Place **not** before the participle, not after it.',
            esNote: '*Not* va delante del participio: *not knowing*.',
          },
          {
            wrong: 'After to finish the task, she left.',
            right: 'After finishing the task, she left.',
            why: 'After a preposition/conjunction like *after*, use the **-ing** form, not a to-infinitive.',
            esNote: 'Tras *after/before/on* usa la forma *-ing*, no *to + infinitivo*.',
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
            kind: 'cloze',
            id: 'c1-part-ex2',
            before: '',
            after: ' in 1850, the cathedral attracts many tourists.',
            answers: ['Built'],
            explain: 'Passive -ed participle: *Built* = which was built.',
          },
          {
            kind: 'correct',
            id: 'c1-part-ex3',
            wrong: 'Driving to work, my phone rang.',
            answers: [
              'Driving to work, I heard my phone ring.',
              'While I was driving to work, my phone rang.',
              'As I was driving to work, my phone rang.',
            ],
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
            kind: 'translate',
            id: 'c1-part-ex5',
            es: 'Terminada la reunión, todos se fueron a casa.',
            answers: [
              'The meeting over, everyone went home.',
              'The meeting finished, everyone went home.',
              'With the meeting over, everyone went home.',
            ],
            explain: 'An absolute clause with its own subject (*the meeting*).',
          },
          {
            kind: 'cloze',
            id: 'c1-part-ex6',
            before: 'On ',
            after: ' the news, she burst into tears.',
            answers: ['hearing'],
            explain: 'After the preposition *on*, use the -ing form: *on hearing*.',
          },
          {
            kind: 'dictation',
            id: 'c1-part-ex7',
            text: 'Though exhausted after the climb, they pressed on to the summit.',
            explain: 'Concessive participle clause: *Though exhausted…*.',
          },
        ],
      },
      {
        id: 'c1-relatives-ellipsis-substitution',
        level: 'C1',
        title: 'Relative Clauses, Ellipsis and Substitution',
        summary:
          'Two cohesion tools mark advanced English. **Quantifier relative clauses** (*most of whom, some of which, the cost of which*) add precise non-defining detail. **Ellipsis** leaves out repeated words, and **substitution** replaces them with *so, not, do, one(s)* to avoid clumsy repetition.',
        summaryEs:
          'Dos herramientas de cohesión marcan el inglés avanzado. Las **cláusulas relativas con cuantificador** (*most of whom, some of which, the cost of which*) añaden detalle preciso no especificativo. La **elipsis** omite palabras repetidas, y la **sustitución** las reemplaza con *so, not, do, one(s)* para evitar repeticiones torpes.',
        sections: [
          {
            heading: 'Relative clauses with quantifiers and prepositions',
            body: 'In formal, **non-defining** relative clauses you can combine a quantifier or noun with **of whom / of which / whose**: *The staff, **many of whom** are new, need training*; *He made three points, **none of which** convinced me*; *a system **the cost of which** is enormous*. This pattern is much more elegant than splitting into two sentences. Prepositions can move to the front for formality: *the colleague **to whom** I spoke*, *the issue **about which** we argued*. Note the structure is **quantifier/noun + of + whom/which**, and *whom* is required after a preposition or *of*.',
            bodyEs:
              'En cláusulas relativas **no especificativas** formales puedes combinar un cuantificador o sustantivo con **of whom / of which / whose**: *The staff, **many of whom** are new, need training*; *He made three points, **none of which** convinced me*; *a system **the cost of which** is enormous*. Este patrón es mucho más elegante que dividir en dos oraciones. Las preposiciones pueden ir al principio para dar formalidad: *the colleague **to whom** I spoke*, *the issue **about which** we argued*. Nota que la estructura es **cuantificador/sustantivo + of + whom/which**, y *whom* es obligatorio tras preposición o *of*.',
            examples: [
              {
                en: 'She has two brothers, both of whom live abroad.',
                es: 'Tiene dos hermanos, ambos de los cuales viven en el extranjero.',
              },
              {
                en: 'They offered several options, none of which appealed to me.',
                es: 'Ofrecieron varias opciones, ninguna de las cuales me atrajo.',
              },
            ],
          },
          {
            heading: 'Ellipsis and substitution',
            body: "**Ellipsis** omits words recoverable from context: *She can speak French and (she can speak) Italian*; *I'd love to (come), but I can't*. **Substitution** replaces a phrase with a shorter word. Use **so** for positive *that*-clauses after *think, hope, believe, suppose, expect, guess*: *Is it raining? — I think so*. Use **not** or **don't think so** for the negative: *I hope not*; *I don't suppose so*. **Do/did** substitute a verb phrase: *She works harder than I do*. **One/ones** replace countable nouns: *the red one*, *the cheaper ones*. **Neither/so do I** echo and agree: *So do I*; *Neither have they*.",
            bodyEs:
              "La **elipsis** omite palabras recuperables del contexto: *She can speak French and (she can speak) Italian*; *I'd love to (come), but I can't*. La **sustitución** reemplaza una frase con una palabra más corta. Usa **so** para cláusulas afirmativas con *that* tras *think, hope, believe, suppose, expect, guess*: *Is it raining? — I think so*. Usa **not** o **don't think so** para el negativo: *I hope not*; *I don't suppose so*. **Do/did** sustituyen un sintagma verbal: *She works harder than I do*. **One/ones** reemplazan sustantivos contables: *the red one*, *the cheaper ones*. **Neither/so do I** repiten y concuerdan: *So do I*; *Neither have they*.",
            examples: [
              {
                en: 'Will they accept? — I expect so.',
                es: '¿Aceptarán? — Supongo que sí.',
              },
              {
                en: 'She passed and so did her brother.',
                es: 'Ella aprobó y su hermano también.',
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
            es: 'El informe enumeraba diez riesgos, la mayoría de los cuales eran menores.',
          },
          {
            en: 'We interviewed forty people, few of whom were suitable.',
            es: 'Entrevistamos a cuarenta personas, pocas de las cuales eran adecuadas.',
          },
          {
            en: "Are we late? — I'm afraid so.",
            es: '¿Llegamos tarde? — Me temo que sí.',
          },
          {
            en: "He says he'll help, but I doubt it.",
            es: 'Dice que ayudará, pero lo dudo.',
          },
          {
            en: 'I prefer the blue ones to the green ones.',
            es: 'Prefiero los azules a los verdes.',
          },
          {
            en: "She didn't enjoy it, and neither did I.",
            es: 'No lo disfrutó, y yo tampoco.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have three cousins, all of them live in Italy.',
            right: 'I have three cousins, all of whom live in Italy.',
            why: 'In a relative clause use **all of whom**, not *all of them*; *them* cannot introduce the clause.',
            esNote: 'En la cláusula de relativo usa *of whom/of which*, no *of them*.',
          },
          {
            wrong: 'Do you think it will rain? — I think it.',
            right: 'Do you think it will rain? — I think so.',
            why: 'Substitute the whole clause with **so**, not *it*, after *think/hope/suppose*.',
            esNote: 'Tras *think/hope* se sustituye con *so*, no con *it*.',
          },
          {
            wrong: 'She likes coffee and I like too.',
            right: 'She likes coffee and so do I.',
            why: 'To echo agreement, use **so + auxiliary + subject** (*so do I*), not *I like too*.',
            esNote: "Para 'yo también' usa *so do I* / *me too*, no *I like too*.",
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
            kind: 'cloze',
            id: 'c1-rel-ex2',
            before: 'Will they win? — I hope ',
            after: '.',
            answers: ['so'],
            explain: 'Positive substitution after *hope* is *so*.',
          },
          {
            kind: 'correct',
            id: 'c1-rel-ex3',
            wrong: 'He gave several reasons, none of them made sense.',
            answers: ['He gave several reasons, none of which made sense.'],
            explain: 'Use *none of which* to link the relative clause, not *none of them*.',
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
            kind: 'translate',
            id: 'c1-rel-ex5',
            es: 'Ella no fuma, y yo tampoco.',
            answers: [
              "She doesn't smoke, and neither do I.",
              "She doesn't smoke, and nor do I.",
              "She doesn't smoke, and I don't either.",
            ],
            explain: 'Negative agreement with *neither/nor + auxiliary + subject*.',
          },
          {
            kind: 'cloze',
            id: 'c1-rel-ex6',
            before: "I haven't read it. — ",
            after: ' have I.',
            answers: ['Neither', 'Nor'],
            explain: 'Echoing a negative: *Neither/Nor + auxiliary + subject*.',
          },
          {
            kind: 'dictation',
            id: 'c1-rel-ex7',
            text: 'We tested several designs, the best of which is shown here.',
            explain: 'Superlative quantifier relative clause: *the best of which*.',
          },
        ],
      },
      {
        id: 'c1-hedging-stance-linkers',
        level: 'C1',
        title: 'Hedging, Stance and Advanced Linkers',
        summary:
          'Skilled writers control **tone**. **Hedging** softens claims (*tend to, somewhat, it would seem*); **stance adverbials** signal your attitude (*admittedly, arguably, presumably*); **non-gradable adjectives** take *absolutely* not *very*; and **advanced linkers** (*and yet, whereas, in that, insofar as*) show subtle logical relations.',
        summaryEs:
          'Los buenos escritores controlan el **tono**. El **hedging** suaviza las afirmaciones (*tend to, somewhat, it would seem*); los **adverbios de postura** señalan tu actitud (*admittedly, arguably, presumably*); los **adjetivos no graduables** llevan *absolutely*, no *very*; y los **conectores avanzados** (*and yet, whereas, in that, insofar as*) muestran relaciones lógicas sutiles.',
        sections: [
          {
            heading: 'Hedging and stance adverbials',
            body: '**Hedging** makes claims cautious and academic, avoiding sounding arrogant. Tools include modal verbs (*may, might, could*), lexical verbs (*tend to, appear to, suggest, seem*), adverbs (*arguably, possibly, relatively, somewhat, to some extent*) and frames (*It would seem that…, There is some evidence that…*). **Stance adverbials** comment on the whole sentence and reveal your viewpoint: **admittedly** (conceding a point), **arguably** (a defensible claim), **presumably** (a reasonable assumption), **understandably, frankly, curiously, regrettably**. They usually sit at the **front**: *Admittedly, the plan has flaws*.',
            bodyEs:
              'El **hedging** hace que las afirmaciones sean cautas y académicas, evitando sonar arrogante. Las herramientas incluyen verbos modales (*may, might, could*), verbos léxicos (*tend to, appear to, suggest, seem*), adverbios (*arguably, possibly, relatively, somewhat, to some extent*) y estructuras (*It would seem that…, There is some evidence that…*). Los **adverbios de postura** comentan toda la oración y revelan tu punto de vista: **admittedly** (concediendo algo), **arguably** (una afirmación defendible), **presumably** (una suposición razonable), **understandably, frankly, curiously, regrettably**. Suelen ir al **principio**: *Admittedly, the plan has flaws*.',
            examples: [
              {
                en: 'The results suggest that the drug may be effective.',
                es: 'Los resultados sugieren que el fármaco podría ser eficaz.',
              },
              {
                en: 'Arguably, this is her finest novel.',
                es: 'Podría decirse que esta es su mejor novela.',
              },
            ],
          },
          {
            heading: 'Non-gradable adjectives and advanced linkers',
            body: "**Non-gradable (extreme/absolute) adjectives** already contain 'very' in their meaning (*terrified, exhausted, freezing, impossible, perfect, unique*), so they pair with **absolutely, utterly, completely, totally** — not *very*: *absolutely exhausted*, *utterly impossible*. (*Really* works with both types.) For cohesion, use precise **linkers**: **and yet** (surprising contrast: *simple and yet powerful*); **whereas** (direct comparison: *He's calm, whereas she's anxious*); **in that** (= because/in the sense that: *It's unusual in that it has no engine*); **insofar as / inasmuch as** (to the extent that); **albeit** (= although, + phrase: *a small, albeit important, change*).",
            bodyEs:
              "Los **adjetivos no graduables (extremos/absolutos)** ya contienen 'very' en su significado (*terrified, exhausted, freezing, impossible, perfect, unique*), así que se combinan con **absolutely, utterly, completely, totally**, no con *very*: *absolutely exhausted*, *utterly impossible*. (*Really* funciona con ambos tipos.) Para la cohesión, usa **conectores** precisos: **and yet** (contraste sorprendente: *simple and yet powerful*); **whereas** (comparación directa: *He's calm, whereas she's anxious*); **in that** (= porque/en el sentido de que: *It's unusual in that it has no engine*); **insofar as / inasmuch as** (en la medida en que); **albeit** (= aunque, + frase: *a small, albeit important, change*).",
            examples: [
              {
                en: 'I was absolutely exhausted after the trip.',
                es: 'Estaba absolutamente agotado tras el viaje.',
              },
              {
                en: 'The theory is elegant, whereas the proof is messy.',
                es: 'La teoría es elegante, mientras que la demostración es desordenada.',
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
            es: 'Hay que reconocer que debería haber comprobado las cifras.',
          },
          {
            en: 'The plan is risky, and yet it might just work.',
            es: 'El plan es arriesgado y, sin embargo, podría funcionar.',
          },
          {
            en: "He's unusual in that he never uses email.",
            es: 'Es inusual en el sentido de que nunca usa el correo electrónico.',
          },
          {
            en: 'Sales rose, whereas profits fell.',
            es: 'Las ventas subieron, mientras que los beneficios cayeron.',
          },
          {
            en: 'It was a useful, albeit brief, meeting.',
            es: 'Fue una reunión útil, aunque breve.',
          },
          {
            en: 'The food was absolutely delicious.',
            es: 'La comida estaba absolutamente deliciosa.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I was very exhausted after the race.',
            right: 'I was absolutely exhausted after the race.',
            why: '*Exhausted* is **non-gradable**; intensify it with *absolutely/utterly*, not *very*.',
            esNote: 'Con adjetivos extremos usa *absolutely*, no *very*.',
          },
          {
            wrong: 'He is rich, in spite of his brother is poor.',
            right: 'He is rich, whereas his brother is poor.',
            why: 'For a direct contrast between two facts use **whereas** + clause, not *in spite of* (which takes a noun/-ing).',
            esNote: 'Para contraste directo usa *whereas* + cláusula.',
          },
          {
            wrong: 'Admittedly is true that we made mistakes.',
            right: 'Admittedly, it is true that we made mistakes.',
            why: '**Admittedly** is a stance adverb, not a verb; keep the dummy subject *it*.',
            esNote: '*Admittedly* es un adverbio; necesitas el sujeto *it* después.',
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
            kind: 'cloze',
            id: 'c1-hedge-ex2',
            before: 'Sales grew steadily, ',
            after: ' costs remained flat.',
            answers: ['whereas'],
            explain: '*Whereas* introduces a direct contrast between two clauses.',
          },
          {
            kind: 'correct',
            id: 'c1-hedge-ex3',
            wrong: 'The view was very stunning.',
            answers: [
              'The view was absolutely stunning.',
              'The view was really stunning.',
              'The view was stunning.',
            ],
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
            kind: 'translate',
            id: 'c1-hedge-ex5',
            es: 'Hay que reconocer que la propuesta tiene algunos defectos.',
            answers: [
              'Admittedly, the proposal has some flaws.',
              'Admittedly, the proposal has a few flaws.',
              'Admittedly, the proposal has some weaknesses.',
            ],
            explain: '*Admittedly* (front position) concedes a point.',
          },
          {
            kind: 'cloze',
            id: 'c1-hedge-ex6',
            before: 'The car is special ',
            after: ' it runs entirely on solar power.',
            answers: ['in that'],
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
        summaryEs:
          'Los verbos con partícula se vuelven **idiomáticos** y abstractos en C1: *bring about, account for, do away with, put up with, come down to*. Dominar sus significados, su **separabilidad** y las formas de tres partes hace que el habla suene nativa y evita verbos de una sola palabra demasiado formales.',
        sections: [
          {
            heading: 'Types and separability',
            body: '**Transitive separable** verbs let the object go in the middle or after (*turn the offer down / turn down the offer*), but a **pronoun** must go in the middle: *turn it down*, never *turn down it*. **Transitive inseparable** (prepositional) verbs keep the object after the particle: *look after the kids*, *go through the report*. **Three-part verbs** (verb + adverb + preposition) are always inseparable: *put up with, look forward to, come up with, get on with, do away with, catch up on*. Many have a one-word formal synonym (*bring about ≈ cause*, *find out ≈ discover*), and the phrasal version usually sounds more natural in speech.',
            bodyEs:
              'Los verbos **transitivos separables** permiten que el objeto vaya en medio o después (*turn the offer down / turn down the offer*), pero un **pronombre** debe ir en medio: *turn it down*, nunca *turn down it*. Los **transitivos inseparables** (preposicionales) mantienen el objeto tras la partícula: *look after the kids*, *go through the report*. Los **verbos de tres partes** (verbo + adverbio + preposición) son siempre inseparables: *put up with, look forward to, come up with, get on with, do away with, catch up on*. Muchos tienen un sinónimo formal de una palabra (*bring about ≈ cause*, *find out ≈ discover*), y la versión con partícula suele sonar más natural al hablar.',
            examples: [
              {
                en: "I won't put up with this any longer.",
                es: 'No voy a aguantar esto más tiempo.',
              },
              {
                en: "Can you turn it down? It's too loud.",
                es: '¿Puedes bajarlo? Está muy alto.',
              },
            ],
          },
          {
            heading: 'High-value idiomatic verbs',
            body: 'Build a stock of abstract multi-word verbs you can reuse in essays and discussion: **bring about** (cause), **account for** (explain/make up a proportion), **do away with** (abolish), **come down to** (be essentially a matter of), **carry out** (perform), **point out** (note), **rule out** (eliminate), **stand for** (represent/tolerate), **put forward** (propose), **boil down to** (reduce to essentials), **come up against** (encounter an obstacle), **draw on** (use as a resource). Notice that meaning is often **non-literal**: *do away with* has nothing to do with *do* or *away* individually.',
            bodyEs:
              'Crea un repertorio de verbos con partícula abstractos que puedas reutilizar en ensayos y debates: **bring about** (causar), **account for** (explicar/representar una proporción), **do away with** (abolir), **come down to** (reducirse esencialmente a), **carry out** (realizar), **point out** (señalar), **rule out** (descartar), **stand for** (representar/tolerar), **put forward** (proponer), **boil down to** (reducirse a lo esencial), **come up against** (encontrarse con un obstáculo), **draw on** (recurrir a). Observa que el significado suele ser **no literal**: *do away with* no tiene nada que ver con *do* ni *away* por separado.',
            examples: [
              {
                en: 'The reforms brought about lasting change.',
                es: 'Las reformas trajeron consigo un cambio duradero.',
              },
              {
                en: 'It all comes down to money in the end.',
                es: 'Al final, todo se reduce al dinero.',
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
            es: 'Las renovables representan ahora un tercio de nuestra energía.',
          },
          {
            en: 'We need to do away with these outdated rules.',
            es: 'Tenemos que abolir estas normas anticuadas.',
          },
          {
            en: 'She came up with a brilliant solution.',
            es: 'Se le ocurrió una solución brillante.',
          },
          {
            en: 'The committee carried out a thorough review.',
            es: 'El comité llevó a cabo una revisión exhaustiva.',
          },
          {
            en: 'I look forward to hearing from you.',
            es: 'Espero tener noticias suyas.',
          },
          {
            en: 'We came up against fierce opposition.',
            es: 'Nos topamos con una feroz oposición.',
          },
        ],
        pitfalls: [
          {
            wrong: "I won't put with it up.",
            right: "I won't put up with it.",
            why: 'Three-part verbs are **inseparable**; keep *put up with* together with the object after it.',
            esNote: 'Los verbos de tres partes no se separan: *put up with it*.',
          },
          {
            wrong: 'Please turn down it.',
            right: 'Please turn it down.',
            why: 'With separable verbs a **pronoun object** must go between the verb and the particle.',
            esNote: 'Con pronombre, el objeto va en medio: *turn it down*.',
          },
          {
            wrong: 'I look forward to hear from you.',
            right: 'I look forward to hearing from you.',
            why: 'Here *to* is a preposition, so it is followed by the **-ing** form, not the infinitive.',
            esNote: 'En *look forward to*, el *to* es preposición: va seguido de *-ing*.',
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
            kind: 'cloze',
            id: 'c1-mwv-ex2',
            before: 'I really look forward to ',
            after: ' you again soon.',
            answers: ['seeing'],
            explain: '*Look forward to* + -ing (the *to* is a preposition).',
          },
          {
            kind: 'correct',
            id: 'c1-mwv-ex3',
            wrong: "I can't put up it with any more.",
            answers: ["I can't put up with it any more.", "I can't put up with it anymore."],
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
            kind: 'translate',
            id: 'c1-mwv-ex5',
            es: 'Al final, todo se reduce a la confianza.',
            answers: [
              'In the end, it all comes down to trust.',
              'It all comes down to trust in the end.',
              'In the end, it all boils down to trust.',
            ],
            explain: '*Come down to / boil down to* = be essentially a matter of.',
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
            kind: 'dictation',
            id: 'c1-mwv-ex7',
            text: 'The researchers carried out the experiment and came up with surprising results.',
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
        summaryEs:
          "En C2 ya no eliges un tiempo verbal solo para marcar el tiempo; explotas el aspecto y el tiempo para señalar cortesía, distancia, énfasis y tono. Esta lección afina los contrastes sutiles entre simple y progresivo, el pasado 'actitudinal', el present perfect de relevancia y las formas de futuro que llevan matices de inevitabilidad, intención o formalidad.",
        sections: [
          {
            heading: 'Progressive for stance and tentativeness',
            body: "Beyond marking action in progress, the **progressive** softens statements and signals a temporary or emotional stance. 'I'm hoping you can help' is gentler than 'I hope you can help'; 'You're being difficult' frames behaviour as temporary rather than as a fixed trait. Use the **past progressive** ('I was wondering whether...') as a politeness device that distances the request in time.",
            bodyEs:
              "Más allá de marcar una acción en curso, el **progresivo** suaviza las afirmaciones y señala una postura temporal o emocional. 'I'm hoping you can help' es más amable que 'I hope you can help'; 'You're being difficult' presenta el comportamiento como algo temporal y no como un rasgo fijo. Usa el **pasado progresivo** ('I was wondering whether...') como recurso de cortesía que distancia la petición en el tiempo.",
            examples: [
              {
                en: 'I was wondering if you might reconsider.',
                es: 'Me preguntaba si quizá lo reconsiderarías.',
              },
              {
                en: "You're being unusually generous today.",
                es: 'Hoy estás siendo inusualmente generoso.',
              },
            ],
          },
          {
            heading: 'Perfect aspect and current relevance',
            body: "The **present perfect** ties a past event to present consequence ('The committee has reached a decision' implies it now stands). The **perfect progressive** foregrounds duration and its visible result ('You've been crying'). In formal narration, the **past perfect** is exploited not only for sequence but to background information that explains a later turn of events.",
            bodyEs:
              "El **present perfect** vincula un evento pasado con su consecuencia presente ('The committee has reached a decision' implica que ahora sigue vigente). El **perfecto progresivo** resalta la duración y su resultado visible ('You've been crying'). En la narración formal, el **past perfect** se explota no solo para la secuencia, sino para situar de fondo información que explica un giro posterior.",
            examples: [
              {
                en: 'By the time the report surfaced, the firm had already restructured.',
                es: 'Para cuando salió el informe, la empresa ya se había reestructurado.',
              },
              {
                en: "She's been advising governments for decades.",
                es: 'Lleva décadas asesorando a gobiernos.',
              },
            ],
          },
          {
            heading: 'Future forms and their connotations',
            body: "Each future carries register. **'Will'** states neutral prediction or promise; **'be going to'** stresses present evidence or intention; the **present progressive** schedules arrangements; **'shall'** survives in formal offers and legal text; and the **future perfect** projects completion ('By 2030, attitudes will have shifted'). The **future progressive** ('I'll be travelling next week') can also sound less imposing than 'I'll travel', presenting the action as a matter of course.",
            bodyEs:
              "Cada futuro tiene su registro. **'Will'** expresa predicción o promesa neutra; **'be going to'** subraya evidencia presente o intención; el **presente progresivo** programa planes; **'shall'** pervive en ofrecimientos formales y textos legales; y el **future perfect** proyecta la finalización ('By 2030, attitudes will have shifted'). El **future progressive** ('I'll be travelling next week') también puede sonar menos impositivo que 'I'll travel', presentando la acción como algo natural.",
            examples: [
              {
                en: 'Shall we proceed to the next item?',
                es: '¿Pasamos al siguiente punto?',
              },
              {
                en: 'By next spring, the trial will have concluded.',
                es: 'Para la próxima primavera, el juicio habrá concluido.',
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
            es: 'Estoy pensando que deberíamos esperar hasta que se confirmen las cifras.',
          },
          {
            en: "You'll have noticed the discrepancy by now.",
            es: 'Ya te habrás dado cuenta de la discrepancia.',
          },
          {
            en: "He's forever interrupting — it's maddening.",
            es: 'Siempre está interrumpiendo, es exasperante.',
          },
          {
            en: 'The board shall convene quarterly.',
            es: 'La junta se reunirá trimestralmente.',
          },
          {
            en: "I'd been meaning to raise this for some time.",
            es: 'Llevaba tiempo queriendo plantear esto.',
          },
          {
            en: "She'll be presenting the findings at three.",
            es: 'Presentará los hallazgos a las tres.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am thinking that you are right about this.',
            right: "I think you're right about this.",
            why: "Stative verbs like 'think' (meaning 'believe') normally stay simple. The progressive is only stance-marking when 'think' means 'consider/weigh up'.",
            esNote: "Con 'think' = 'creer/opinar' usa el presente simple.",
          },
          {
            wrong: 'When the report came out, the firm already restructured.',
            right: 'When the report came out, the firm had already restructured.',
            why: 'An event completed before another past event needs the past perfect to background it clearly.',
            esNote: "El pasado anterior requiere 'had + participio'.",
          },
          {
            wrong: 'I wonder if you could possibly to help me.',
            right: 'I was wondering whether you could possibly help me.',
            why: "The polite past progressive plus a bare infinitive after 'could' is the natural, more deferential pattern.",
            esNote: "Tras 'could' va el infinitivo sin 'to'.",
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
            kind: 'cloze',
            id: 'c2-ta-ex2',
            before: 'By the time we arrived, the negotiations ',
            after: ' already collapsed.',
            answers: ['had'],
            explain:
              "Past perfect 'had collapsed' backgrounds an event completed before another past point.",
          },
          {
            kind: 'correct',
            id: 'c2-ta-ex3',
            wrong: 'She is knowing the answer since yesterday.',
            answers: ['She has known the answer since yesterday.'],
            explain:
              "'Know' is stative, so no progressive; 'since yesterday' demands the present perfect.",
          },
          {
            kind: 'translate',
            id: 'c2-ta-ex4',
            es: 'Para diciembre, el comité habrá tomado su decisión.',
            answers: [
              'By December, the committee will have made its decision.',
              'By December, the committee will have reached its decision.',
              'By December, the committee will have taken its decision.',
            ],
            explain: 'Future perfect projects completion before a stated future point.',
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
            kind: 'dictation',
            id: 'c2-ta-ex7',
            text: "I'm hoping we can resolve this before the figures go public.",
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
        summaryEs:
          "La inversión invierte sujeto y auxiliar para dar énfasis, formalidad y efecto dramático. Esta lección abarca negativos y restrictivos antepuestos (never, not only, no sooner, little), las inversiones con 'so/such', la inversión condicional y la inversión tras adverbios de lugar antepuestos: todos sellos del inglés pulido y retórico.",
        sections: [
          {
            heading: 'Negative and restrictive fronting',
            body: "When a **negative or restrictive adverbial** is fronted for emphasis, the clause inverts like a question: auxiliary before subject. Triggers include **never, rarely, seldom, hardly, scarcely, no sooner, not only, not until, little, nowhere** and **only then/once/after**. 'Never have I seen such a thing' and 'Not only did she resign, but she also sued' are typical. Note 'no sooner... than' and 'hardly... when'.",
            bodyEs:
              "Cuando un **adverbial negativo o restrictivo** se antepone para enfatizar, la oración se invierte como una pregunta: auxiliar antes del sujeto. Los disparadores incluyen **never, rarely, seldom, hardly, scarcely, no sooner, not only, not until, little, nowhere** y **only then/once/after**. 'Never have I seen such a thing' y 'Not only did she resign, but she also sued' son típicos. Atención a 'no sooner... than' y 'hardly... when'.",
            examples: [
              {
                en: 'Not until much later did I grasp the implications.',
                es: 'Solo mucho después comprendí las implicaciones.',
              },
              {
                en: 'No sooner had we sat down than the lights went out.',
                es: 'Apenas nos sentamos, se fueron las luces.',
              },
            ],
          },
          {
            heading: "So, such and 'so + adjective' inversions",
            body: "Fronting **'so + adjective'** or **'such'** triggers inversion of 'be' or the auxiliary: 'So intense was the heat that...', 'Such was her influence that...'. This structure is emphatic and literary; the 'that'-clause states the consequence. Compare the neutral 'The heat was so intense that...' with the marked, front-loaded version that delays the subject for effect.",
            bodyEs:
              "Anteponer **'so + adjetivo'** o **'such'** provoca la inversión de 'be' o del auxiliar: 'So intense was the heat that...', 'Such was her influence that...'. Esta estructura es enfática y literaria; la cláusula con 'that' expresa la consecuencia. Compara el neutro 'The heat was so intense that...' con la versión marcada que retrasa el sujeto para lograr el efecto.",
            examples: [
              {
                en: 'Such was the outcry that the law was repealed within weeks.',
                es: 'Tal fue el clamor que la ley se derogó en semanas.',
              },
              {
                en: 'So compelling was her testimony that the jury wept.',
                es: 'Tan convincente fue su testimonio que el jurado lloró.',
              },
            ],
          },
          {
            heading: 'Conditional and locative inversion',
            body: "Formal conditionals drop 'if' and invert: **'Had I known', 'Were it not for', 'Should you require'**. After a fronted **adverbial of place or direction**, the subject and full verb invert (no auxiliary): 'Down the valley swept the floodwaters', 'On the table lay a single letter'. This locative inversion is descriptive and stylistic, common in narrative and reportage.",
            bodyEs:
              "Los condicionales formales omiten 'if' e invierten: **'Had I known', 'Were it not for', 'Should you require'**. Tras un **adverbial de lugar o dirección** antepuesto, el sujeto y el verbo pleno invierten (sin auxiliar): 'Down the valley swept the floodwaters', 'On the table lay a single letter'. Esta inversión locativa es descriptiva y estilística, frecuente en la narrativa y el reportaje.",
            examples: [
              {
                en: 'Had she spoken sooner, the crisis might have been averted.',
                es: 'Si hubiera hablado antes, la crisis podría haberse evitado.',
              },
              {
                en: 'Beyond the ridge stretched an endless plain.',
                es: 'Más allá de la cresta se extendía una llanura infinita.',
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
            es: 'Poco se imaginaban lo que les esperaba.',
          },
          {
            en: 'Rarely has a single speech changed so much.',
            es: 'Rara vez un solo discurso ha cambiado tanto.',
          },
          {
            en: 'Were it not for your support, we would have failed.',
            es: 'De no ser por tu apoyo, habríamos fracasado.',
          },
          {
            en: 'Not for one moment did I doubt her.',
            es: 'Ni por un momento dudé de ella.',
          },
          {
            en: 'Such was his charisma that crowds fell silent.',
            es: 'Tal era su carisma que las multitudes enmudecían.',
          },
          {
            en: 'Only after the war did the records come to light.',
            es: 'Solo tras la guerra salieron a la luz los registros.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen such a mess.',
            right: 'Never have I seen such a mess.',
            why: "Fronted 'never' forces subject-auxiliary inversion: auxiliary before the subject.",
            esNote: 'Tras un negativo antepuesto, el auxiliar va antes del sujeto.',
          },
          {
            wrong: 'No sooner I had arrived when the phone rang.',
            right: 'No sooner had I arrived than the phone rang.',
            why: "'No sooner' needs inversion and pairs with 'than', not 'when'.",
            esNote: "'No sooner... than', con inversión y 'than'.",
          },
          {
            wrong: 'So the storm was fierce that ships sank.',
            right: 'So fierce was the storm that ships sank.',
            why: "The adjective must follow 'so' and precede the inverted verb: 'So fierce was the storm'.",
            esNote: "El orden es 'So + adjetivo + verbo + sujeto'.",
          },
          {
            wrong: 'Had not I known, I would have stayed.',
            right: 'Had I not known, I would have stayed.',
            why: "In inverted conditionals the negative 'not' follows the subject, not the auxiliary.",
            esNote: "En 'Had I not known', el 'not' va tras el sujeto.",
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
            kind: 'correct',
            id: 'c2-si-ex2',
            wrong: 'Not only she sang, but she also danced.',
            answers: [
              'Not only did she sing, but she also danced.',
              'Not only did she sing but she also danced.',
            ],
            explain: "'Not only' fronted requires do-support and inversion: 'did she sing'.",
          },
          {
            kind: 'cloze',
            id: 'c2-si-ex3',
            before: 'So ',
            after: ' was the silence that we could hear our hearts.',
            answers: ['deep', 'complete', 'total', 'profound'],
            explain:
              "Pattern 'So + adjective + was + subject + that...'; any fitting adjective works.",
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
            kind: 'translate',
            id: 'c2-si-ex5',
            es: 'Apenas habíamos salido cuando empezó a llover.',
            answers: [
              'No sooner had we left than it started to rain.',
              'No sooner had we left than it began to rain.',
              'Hardly had we left when it started to rain.',
            ],
            explain: "'No sooner... than' or 'Hardly... when' both require inversion.",
          },
          {
            kind: 'cloze',
            id: 'c2-si-ex6',
            before: 'Only after the meeting ',
            after: ' I understand the real agenda.',
            answers: ['did'],
            explain: "Fronted 'Only after...' triggers do-support inversion: 'did I understand'.",
          },
          {
            kind: 'dictation',
            id: 'c2-si-ex7',
            text: 'Such was her determination that nothing could stop her.',
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
        summaryEs:
          "Las oraciones hendidas (clefts) dividen una idea en dos cláusulas para enfocar la atención. Esta lección abarca las it-clefts, las wh-/pseudo-clefts, las all-clefts, las pseudo-clefts invertidas y la distancia 'it was not until...', dándote un control fino sobre qué información se destaca y qué se presupone.",
        sections: [
          {
            heading: 'It-clefts: focusing a single element',
            body: "An **it-cleft** uses 'It + be + focus + that/who-clause' to spotlight one element while presupposing the rest. From 'María broke the vase', we can focus the subject ('It was María who broke the vase'), the object ('It was the vase that María broke'), or a time/place adverbial ('It was yesterday that she broke it'). The focused element carries the new, contrastive information; everything in the relative clause is treated as known.",
            bodyEs:
              "Una **it-cleft** usa 'It + be + foco + cláusula con that/who' para destacar un elemento mientras presupone el resto. De 'María broke the vase', podemos enfocar el sujeto ('It was María who broke the vase'), el objeto ('It was the vase that María broke') o un adverbio de tiempo/lugar ('It was yesterday that she broke it'). El elemento enfocado lleva la información nueva y contrastiva; todo lo de la cláusula relativa se trata como conocido.",
            examples: [
              {
                en: 'It was the lack of funding, not the idea, that doomed the project.',
                es: 'Fue la falta de financiación, no la idea, lo que condenó el proyecto.',
              },
              {
                en: 'It is precisely here that the argument falls apart.',
                es: 'Es precisamente aquí donde el argumento se desmorona.',
              },
            ],
          },
          {
            heading: 'Wh-clefts and reversed pseudo-clefts',
            body: "A **wh-cleft (pseudo-cleft)** fronts a 'what'-clause: 'What I need is time'. It can focus actions ('What she did was resign') or whole clauses. The **reversed pseudo-cleft** puts the focus first: 'Time is what I need'. Use **'all'-clefts** to convey 'only/just': 'All I want is the truth'. These structures sound deliberate and are excellent for building or summing up an argument.",
            bodyEs:
              "Una **wh-cleft (pseudo-cleft)** antepone una cláusula con 'what': 'What I need is time'. Puede enfocar acciones ('What she did was resign') o cláusulas enteras. La **pseudo-cleft invertida** pone el foco primero: 'Time is what I need'. Usa las **all-clefts** para transmitir 'solo/únicamente': 'All I want is the truth'. Estas estructuras suenan deliberadas y son excelentes para construir o resumir un argumento.",
            examples: [
              {
                en: 'What strikes me most is the sheer scale of it.',
                es: 'Lo que más me impacta es la magnitud absoluta de ello.',
              },
              {
                en: 'All it takes is a single mistake.',
                es: 'Basta con un solo error.',
              },
            ],
          },
          {
            heading: "Distance clefts: 'It was not until...'",
            body: "The **distance cleft** delays a key point for dramatic effect, typically with **'It was not until + time that...'**: 'It was not until 1989 that the wall fell'. The structure presupposes that something did not happen earlier and pinpoints exactly when it did. Variants include 'It was only when...' and 'It is only by/through... that...', stressing the sole condition under which something occurred.",
            bodyEs:
              "La **distance cleft** retrasa un punto clave para lograr un efecto dramático, normalmente con **'It was not until + tiempo that...'**: 'It was not until 1989 that the wall fell'. La estructura presupone que algo no ocurrió antes y precisa exactamente cuándo ocurrió. Hay variantes como 'It was only when...' e 'It is only by/through... that...', que recalcan la única condición bajo la cual algo sucedió.",
            examples: [
              {
                en: 'It was not until she left that I understood her reasons.',
                es: 'No fue hasta que se fue cuando comprendí sus razones.',
              },
              {
                en: 'It is only through dialogue that lasting peace is achieved.',
                es: 'Solo mediante el diálogo se logra una paz duradera.',
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
            es: 'Fue su silencio, más que sus palabras, lo que me inquietó.',
          },
          {
            en: 'What we should be debating is the principle, not the price.',
            es: 'Lo que deberíamos debatir es el principio, no el precio.',
          },
          {
            en: 'All that remained was a faint signature.',
            es: 'Todo lo que quedaba era una firma tenue.',
          },
          {
            en: 'It was not until the audit that the fraud surfaced.',
            es: 'No fue hasta la auditoría cuando salió a la luz el fraude.',
          },
          {
            en: 'The reason it failed is that nobody owned the decision.',
            es: 'La razón por la que fracasó es que nadie asumió la decisión.',
          },
          {
            en: 'Courage is what the moment demanded.',
            es: 'Valor es lo que el momento exigía.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It was John that he broke the window.',
            right: 'It was John who broke the window.',
            why: "Don't add a redundant subject pronoun in the cleft clause; the gap is filled by the focused element.",
            esNote: "No repitas el sujeto ('he') dentro de la cláusula hendida.",
          },
          {
            wrong: 'What I want it is more time.',
            right: 'What I want is more time.',
            why: "The wh-cleft already supplies the subject; no extra 'it' is needed before 'is'.",
            esNote: "No añadas 'it' tras la cláusula con 'what'.",
          },
          {
            wrong: "It wasn't until I left when I realised.",
            right: "It wasn't until I left that I realised.",
            why: "The distance cleft uses 'that', not 'when', to introduce the delayed clause.",
            esNote: "La distance cleft usa 'that', no 'when'.",
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
            kind: 'translate',
            id: 'c2-cl-ex2',
            es: 'Lo que necesitamos es una estrategia clara.',
            answers: ['What we need is a clear strategy.', 'What we need is a clear strategy.'],
            explain: "Wh-cleft fronting the 'what'-clause to focus the need.",
          },
          {
            kind: 'correct',
            id: 'c2-cl-ex3',
            wrong: 'It was not until midnight when the results came.',
            answers: [
              'It was not until midnight that the results came.',
              "It wasn't until midnight that the results came.",
            ],
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
            kind: 'cloze',
            id: 'c2-cl-ex5',
            before: 'It was not until the third attempt ',
            after: ' the engine finally started.',
            answers: ['that'],
            explain: "'It was not until... that...' is the fixed distance-cleft frame.",
          },
          {
            kind: 'translate',
            id: 'c2-cl-ex6',
            es: 'Todo lo que pido es un poco de paciencia.',
            answers: [
              'All I ask is a little patience.',
              'All I ask for is a little patience.',
              "All I'm asking for is a little patience.",
            ],
            explain: "An all-cleft conveying 'only/just'.",
          },
          {
            kind: 'dictation',
            id: 'c2-cl-ex7',
            text: 'It was precisely her honesty that cost her the job.',
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
        summaryEs:
          'El inglés académico y formal condensa el significado en sintagmas nominales en lugar de verbos, elevando la densidad léxica y la objetividad. Esta lección muestra cómo convertir procesos en sustantivos, construir sintagmas nominales con modificación compleja antes y después del núcleo, y equilibrar la densidad con la claridad para que la prosa siga siendo legible.',
        sections: [
          {
            heading: 'Turning processes into things',
            body: "**Nominalisation** converts verbs and adjectives into nouns: 'decide' becomes 'the decision', 'fail' becomes 'the failure', 'analyse' becomes 'the analysis'. This lets you treat an action as an object you can describe, quantify and link: 'The rapid deterioration of conditions prompted intervention'. The effect is **objective and impersonal**, removing the human agent and foregrounding the process itself — the default voice of reports, science and law.",
            bodyEs:
              "La **nominalización** convierte verbos y adjetivos en sustantivos: 'decide' pasa a 'the decision', 'fail' a 'the failure', 'analyse' a 'the analysis'. Esto permite tratar una acción como un objeto que se puede describir, cuantificar y enlazar: 'The rapid deterioration of conditions prompted intervention'. El efecto es **objetivo e impersonal**, elimina al agente humano y destaca el proceso en sí: la voz por defecto de los informes, la ciencia y el derecho.",
            examples: [
              {
                en: "The government's refusal to negotiate prolonged the strike.",
                es: 'La negativa del gobierno a negociar prolongó la huelga.',
              },
              {
                en: 'Implementation of the reforms requires careful coordination.',
                es: 'La aplicación de las reformas requiere una coordinación cuidadosa.',
              },
            ],
          },
          {
            heading: 'Building dense noun phrases',
            body: "Lexical density rises when you stack **pre-modifiers** (adjectives, nouns as modifiers) and **post-modifiers** (prepositional phrases, relative clauses, '-ing'/'-ed' participles) around a head noun. 'A sharp, sustained rise in long-term unemployment among young graduates' packs an entire clause into one phrase. The skill lies in ordering modifiers correctly and not overloading the reader's working memory.",
            bodyEs:
              "La densidad léxica aumenta cuando apilas **premodificadores** (adjetivos, sustantivos en función de modificador) y **posmodificadores** (sintagmas preposicionales, cláusulas relativas, participios en '-ing'/'-ed') alrededor de un núcleo nominal. 'A sharp, sustained rise in long-term unemployment among young graduates' condensa toda una oración en un solo sintagma. La habilidad está en ordenar bien los modificadores y no sobrecargar la memoria de trabajo del lector.",
            examples: [
              {
                en: 'A government-commissioned report into hospital waiting times',
                es: 'Un informe encargado por el gobierno sobre los tiempos de espera hospitalarios',
              },
              {
                en: 'Widespread public concern over data privacy',
                es: 'Una preocupación pública generalizada por la privacidad de los datos',
              },
            ],
          },
          {
            heading: 'Density versus clarity',
            body: "High density is powerful but risky: chains of abstract nouns ('the optimisation of the utilisation of resources') become opaque and lifeless. Skilled writers **alternate** dense and verbal styles, unpacking a nominalisation into a clause when clarity matters: 'When resources are used well...' rather than 'Through optimal resource utilisation...'. Choose density for precision and economy, but return to verbs to keep the prose alive.",
            bodyEs:
              "La densidad alta es potente pero arriesgada: las cadenas de sustantivos abstractos ('the optimisation of the utilisation of resources') se vuelven opacas y sin vida. Los buenos escritores **alternan** estilos densos y verbales, desplegando una nominalización en una cláusula cuando importa la claridad: 'When resources are used well...' en lugar de 'Through optimal resource utilisation...'. Elige la densidad para la precisión y la economía, pero vuelve a los verbos para mantener viva la prosa.",
            examples: [
              {
                en: 'Dense: The reduction in expenditure followed the cancellation of the programme.',
                es: 'Denso: La reducción del gasto siguió a la cancelación del programa.',
              },
              {
                en: 'Clearer: They spent less after they cancelled the programme.',
                es: 'Más claro: Gastaron menos tras cancelar el programa.',
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
            es: 'La introducción de controles más estrictos topó con una resistencia feroz.',
          },
          {
            en: 'A marked decline in biodiversity across the region',
            es: 'Un marcado descenso de la biodiversidad en toda la región',
          },
          {
            en: "The committee's reluctance to act drew criticism.",
            es: 'La reticencia del comité a actuar atrajo críticas.',
          },
          {
            en: 'Prolonged exposure to noise impairs concentration.',
            es: 'La exposición prolongada al ruido afecta a la concentración.',
          },
          {
            en: 'The sheer complexity of the regulations deters compliance.',
            es: 'La enorme complejidad de la normativa disuade del cumplimiento.',
          },
          {
            en: 'Our recommendation is the immediate suspension of trials.',
            es: 'Nuestra recomendación es la suspensión inmediata de los ensayos.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The decide of the board was final.',
            right: 'The decision of the board was final.',
            why: "You must use the noun form 'decision', not the verb, after the article.",
            esNote: "Tras el artículo usa el sustantivo 'decision', no el verbo.",
          },
          {
            wrong: 'After the cancel of the event, refunds were issued.',
            right: 'After the cancellation of the event, refunds were issued.',
            why: "The correct nominalisation of 'cancel' is 'cancellation'.",
            esNote: "La nominalización de 'cancel' es 'cancellation'.",
          },
          {
            wrong: 'The optimisation of the utilisation of the resources of the team was needed.',
            right: 'The team needed to use its resources better.',
            why: 'Over-nominalisation creates an opaque chain of abstract nouns; unpack it into a clause.',
            esNote:
              'Demasiadas nominalizaciones encadenadas oscurecen el sentido; vuelve a los verbos.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'c2-nm-ex1',
            before: 'The sudden ',
            after: ' of the minister shocked the party. (resign)',
            answers: ['resignation'],
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
            kind: 'correct',
            id: 'c2-nm-ex3',
            wrong: 'The fail of the system caused delays.',
            answers: [
              'The failure of the system caused delays.',
              'The failure of the system caused the delays.',
            ],
            explain: "Use the noun 'failure', not the verb 'fail', after the article.",
          },
          {
            kind: 'translate',
            id: 'c2-nm-ex4',
            es: 'La introducción de la nueva política provocó protestas.',
            answers: [
              'The introduction of the new policy provoked protests.',
              'The introduction of the new policy sparked protests.',
              'The introduction of the new policy triggered protests.',
            ],
            explain: "'Introduction' nominalises 'introduce', producing dense, formal phrasing.",
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
            kind: 'dictation',
            id: 'c2-nm-ex7',
            text: "The government's reluctance to intervene worsened the crisis.",
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
        summaryEs:
          "Más allá de los tipos básicos, los condicionales de C2 mezclan marcos temporales, invierten para omitir 'if' y expresan significados contrafácticos e hipotéticos sutiles. Esta lección abarca los condicionales mixtos, los condicionales invertidos, las alternativas a 'if' y la superposición modal que afina la certeza y el arrepentimiento.",
        sections: [
          {
            heading: 'Mixed and counterfactual conditionals',
            body: "**Mixed conditionals** combine time frames: a past condition with a present result ('If I had studied medicine, I'd be a doctor now') or a present condition with a past result ('If she weren't so cautious, she would have invested'). **Counterfactuals** describe what is contrary to fact; the further the verb shifts into the past, the more remote and unreal the situation. This back-shifting is the engine of hypothetical English.",
            bodyEs:
              "Los **condicionales mixtos** combinan marcos temporales: una condición pasada con un resultado presente ('If I had studied medicine, I'd be a doctor now') o una condición presente con un resultado pasado ('If she weren't so cautious, she would have invested'). Los **contrafácticos** describen lo contrario a los hechos; cuanto más se desplaza el verbo hacia el pasado, más remota e irreal es la situación. Este desplazamiento temporal es el motor del inglés hipotético.",
            examples: [
              {
                en: "If we had left earlier, we wouldn't be stuck in this jam.",
                es: 'Si hubiéramos salido antes, no estaríamos atascados en este atasco.',
              },
              {
                en: 'If he were more diplomatic, the deal would have closed.',
                es: 'Si fuera más diplomático, el trato se habría cerrado.',
              },
            ],
          },
          {
            heading: "Inverted conditionals and alternatives to 'if'",
            body: "Formal conditionals drop 'if' and invert: **'Had we known', 'Were they to refuse', 'Should anything go wrong'**. Other connectors replace 'if' with nuance: **'unless'** (= if not), **'provided/providing that'** and **'as long as'** (strict condition), **'supposing/suppose'** (speculation), **'on condition that'**, **'but for'** (= if not for) and **'otherwise'**. Each shifts register and emphasis.",
            bodyEs:
              "Los condicionales formales omiten 'if' e invierten: **'Had we known', 'Were they to refuse', 'Should anything go wrong'**. Otros conectores sustituyen 'if' con matices: **'unless'** (= si no), **'provided/providing that'** y **'as long as'** (condición estricta), **'supposing/suppose'** (especulación), **'on condition that'**, **'but for'** (= de no ser por) y **'otherwise'**. Cada uno cambia el registro y el énfasis.",
            examples: [
              {
                en: 'Should you change your mind, the offer stands.',
                es: 'Si cambiaras de opinión, la oferta sigue en pie.',
              },
              {
                en: 'But for your warning, we would have walked straight into the trap.',
                es: 'De no ser por tu aviso, habríamos caído de lleno en la trampa.',
              },
            ],
          },
          {
            heading: 'Modal layering and degrees of likelihood',
            body: "Conditionals fine-tune probability through **modal choice** in the result clause: 'would' (likely consequence), 'might/could' (possible consequence), 'should' (expected). Adding 'were to' or 'happen to' to the condition makes it more remote or hypothetical: 'If you were to ask me...'. 'If it hadn't been for...' and 'Had it not been for...' are set counterfactual frames for attributing an outcome to a single decisive cause.",
            bodyEs:
              "Los condicionales afinan la probabilidad mediante la **elección del modal** en la cláusula de resultado: 'would' (consecuencia probable), 'might/could' (consecuencia posible), 'should' (esperada). Añadir 'were to' o 'happen to' a la condición la hace más remota o hipotética: 'If you were to ask me...'. 'If it hadn't been for...' y 'Had it not been for...' son fórmulas contrafácticas fijas para atribuir un resultado a una única causa decisiva.",
            examples: [
              {
                en: 'If the talks were to break down, markets might panic.',
                es: 'Si las negociaciones se rompieran, los mercados podrían entrar en pánico.',
              },
              {
                en: 'Had it not been for the strike, profits would have risen.',
                es: 'De no haber sido por la huelga, los beneficios habrían subido.',
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
            es: 'Si no hubiera aceptado ese trabajo, nunca te habría conocido.',
          },
          {
            en: "Were it not for the deadline, I'd rewrite the whole thing.",
            es: 'De no ser por la fecha límite, lo reescribiría todo.',
          },
          {
            en: 'Provided that funding holds, the trial will continue.',
            es: 'Siempre que se mantenga la financiación, el ensayo continuará.',
          },
          {
            en: 'Suppose the witness had lied — how would we ever know?',
            es: 'Supongamos que el testigo hubiera mentido: ¿cómo lo sabríamos?',
          },
          {
            en: "I'd be lying if I said I wasn't tempted.",
            es: 'Mentiría si dijera que no estoy tentado.',
          },
          {
            en: 'Unless attitudes shift, the policy is doomed.',
            es: 'A menos que cambien las actitudes, la política está condenada.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would have helped.',
            right: 'If I had known, I would have helped.',
            why: "Don't put 'would' in the 'if'-clause; use the past perfect for the condition.",
            esNote: "El 'would' no va en la cláusula con 'if'; usa el pluscuamperfecto.",
          },
          {
            wrong: "Unless you don't hurry, we'll miss it.",
            right: "Unless you hurry, we'll miss it.",
            why: "'Unless' already means 'if not', so adding a negative creates a double negative.",
            esNote: "'Unless' ya significa 'si no'; no añadas otra negación.",
          },
          {
            wrong: 'If I had studied harder, I would be passed the exam.',
            right: 'If I had studied harder, I would have passed the exam.',
            why: "A past unreal result needs 'would have + past participle', not 'would be + participle'.",
            esNote: "Resultado pasado irreal: 'would have + participio'.",
          },
          {
            wrong: 'Had not we left, we would have been caught.',
            right: 'Had we not left, we would have been caught.',
            why: "In inversion the negative follows the subject: 'Had we not left'.",
            esNote: "En la inversión, 'not' va tras el sujeto.",
          },
        ],
        exercises: [
          {
            kind: 'correct',
            id: 'c2-cn-ex1',
            wrong: 'If I would have seen it, I would have told you.',
            answers: [
              'If I had seen it, I would have told you.',
              'Had I seen it, I would have told you.',
            ],
            explain: "The condition takes the past perfect, never 'would have'.",
          },
          {
            kind: 'cloze',
            id: 'c2-cn-ex2',
            before: "If we'd booked earlier, we ",
            after: ' sitting together now.',
            answers: ['would be', "'d be"],
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
            kind: 'translate',
            id: 'c2-cn-ex4',
            es: 'De no haber sido por tu ayuda, habríamos fracasado.',
            answers: [
              'Had it not been for your help, we would have failed.',
              'But for your help, we would have failed.',
              "If it hadn't been for your help, we would have failed.",
            ],
            explain: 'Set counterfactual frames attributing the outcome to one cause.',
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
            kind: 'cloze',
            id: 'c2-cn-ex6',
            before: '',
            after: ' you require assistance, our team is available around the clock.',
            answers: ['Should'],
            explain: "'Should you require...' is an inverted, formal open condition.",
          },
          {
            kind: 'dictation',
            id: 'c2-cn-ex7',
            text: 'Were it not for one stubborn juror, the verdict would have been unanimous.',
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
        summaryEs:
          "El inglés formal distancia al autor de las afirmaciones mediante pasivas impersonales, pasivas de reporte y estructuras con 'it'. Esta lección abarca los patrones 'It is said that...' / 'He is said to...', las pasivas con 'there', las get-passives y cómo las pasivas sin agente gestionan la responsabilidad, la objetividad y el tacto.",
        sections: [
          {
            heading: 'Reporting passives: distancing a claim',
            body: "To report opinions without committing to them, English uses two parallel **reporting passive** patterns. The **impersonal 'it'-passive**: 'It is said/believed/thought/alleged that he resigned'. The **personal subject-raising passive**: 'He is said/believed to have resigned'. Both attribute the claim to an unnamed source, signalling caution and objectivity — indispensable in journalism, academia and diplomacy.",
            bodyEs:
              "Para reportar opiniones sin comprometerse con ellas, el inglés usa dos patrones paralelos de **pasiva de reporte**. La **pasiva impersonal con 'it'**: 'It is said/believed/thought/alleged that he resigned'. La **pasiva personal con elevación del sujeto**: 'He is said/believed to have resigned'. Ambas atribuyen la afirmación a una fuente anónima, señalando cautela y objetividad: imprescindibles en el periodismo, la academia y la diplomacia.",
            examples: [
              {
                en: 'It is widely believed that the figures were inflated.',
                es: 'Se cree ampliamente que las cifras fueron infladas.',
              },
              {
                en: 'The minister is alleged to have misled parliament.',
                es: 'Se alega que el ministro engañó al parlamento.',
              },
            ],
          },
          {
            heading: "Agentless and 'there'-passives for objectivity",
            body: "The **agentless passive** omits the doer when it is unknown, obvious or tactfully suppressed: 'Mistakes were made', 'The samples were contaminated'. This is a classic device for **avoiding blame** or keeping focus on the process. The **'there'-passive** ('There is thought to be a link', 'There appears to have been a breach') combines existential 'there' with reporting verbs for maximum impersonality.",
            bodyEs:
              "La **pasiva sin agente** omite al ejecutor cuando es desconocido, obvio o se suprime con tacto: 'Mistakes were made', 'The samples were contaminated'. Es un recurso clásico para **evitar la culpa** o mantener el foco en el proceso. La **pasiva con 'there'** ('There is thought to be a link', 'There appears to have been a breach') combina el 'there' existencial con verbos de reporte para una impersonalidad máxima.",
            examples: [
              {
                en: 'There is said to be growing unease among investors.',
                es: 'Se dice que hay un creciente malestar entre los inversores.',
              },
              {
                en: 'Errors were overlooked during the review.',
                es: 'Se pasaron por alto errores durante la revisión.',
              },
            ],
          },
          {
            heading: 'Get-passives and tactful framing',
            body: "The **get-passive** ('She got promoted', 'He got caught') is informal and often implies that the subject was affected, sometimes adversely or by their own involvement. Compare neutral 'be'-passives with the more dynamic, conversational 'get'. For tact, the passive lets you raise a sensitive point without naming an agent: 'It has been suggested that the report be revised' softens criticism into an impersonal proposal.",
            bodyEs:
              "La **get-passive** ('She got promoted', 'He got caught') es informal y suele implicar que el sujeto se vio afectado, a veces de forma adversa o por su propia implicación. Compara las pasivas con 'be', neutras, con el 'get' más dinámico y coloquial. Por tacto, la pasiva permite plantear un asunto delicado sin nombrar a un agente: 'It has been suggested that the report be revised' suaviza la crítica convirtiéndola en una propuesta impersonal.",
            examples: [
              {
                en: "He got fired for something he didn't do.",
                es: 'Lo despidieron por algo que no hizo.',
              },
              {
                en: 'It has been suggested that standards be tightened.',
                es: 'Se ha sugerido que se endurezcan los estándares.',
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
            es: 'Se entiende que las conversaciones se reanudarán la próxima semana.',
          },
          {
            en: 'The painting is thought to date from the 1600s.',
            es: 'Se cree que el cuadro data del siglo XVII.',
          },
          {
            en: 'There are reported to be hundreds still missing.',
            es: 'Se informa de que sigue habiendo cientos de desaparecidos.',
          },
          {
            en: 'Concerns have been raised about the methodology.',
            es: 'Se han planteado preocupaciones sobre la metodología.',
          },
          {
            en: 'She is rumoured to be stepping down.',
            es: 'Se rumorea que va a dimitir.',
          },
          {
            en: 'Nothing was decided at the meeting.',
            es: 'No se decidió nada en la reunión.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It is said he to be very wealthy.',
            right: 'He is said to be very wealthy.',
            why: "Mixing the two patterns is wrong; choose either 'It is said that he is...' or 'He is said to be...'.",
            esNote: "No mezcles 'It is said' con la estructura personal con infinitivo.",
          },
          {
            wrong: 'He is believed to has left the country.',
            right: 'He is believed to have left the country.',
            why: "After 'to' use the bare infinitive 'have', and for a past action use the perfect infinitive 'to have left'.",
            esNote: "Tras 'to' va 'have' (infinitivo); para acción pasada, 'to have + participio'.",
          },
          {
            wrong: 'It was suggested that the report is revised.',
            right: 'It was suggested that the report be revised.',
            why: "After 'suggest that' in formal English, use the subjunctive base form 'be revised'.",
            esNote: "Tras 'suggest that' usa la forma base (subjuntivo): 'be revised'.",
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
            kind: 'correct',
            id: 'c2-ip-ex2',
            wrong: 'The suspect is said to has fled abroad.',
            answers: ['The suspect is said to have fled abroad.'],
            explain: "Use the perfect infinitive 'to have fled' for a past action.",
          },
          {
            kind: 'cloze',
            id: 'c2-ip-ex3',
            before: 'It is widely ',
            after: ' that interest rates will rise again.',
            answers: ['expected', 'believed', 'thought', 'anticipated', 'assumed'],
            explain: "An impersonal reporting passive with 'it' plus a reporting verb.",
          },
          {
            kind: 'translate',
            id: 'c2-ip-ex4',
            es: 'Se cree que el manuscrito se perdió en el incendio.',
            answers: [
              'The manuscript is believed to have been lost in the fire.',
              'It is believed that the manuscript was lost in the fire.',
            ],
            explain: 'Either the personal or the impersonal reporting passive is acceptable.',
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
            kind: 'dictation',
            id: 'c2-ip-ex7',
            text: 'The chief executive is alleged to have approved the payments personally.',
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
        summaryEs:
          'El inglés cohesivo y retóricamente eficaz depende de las señales, de omitir lo recuperable y de reordenar elementos para enfatizar. Esta lección abarca toda la gama de marcadores del discurso, la elipsis y la sustitución, y el orden marcado de palabras como el fronting y la dislocación a la derecha.',
        sections: [
          {
            heading: 'Discourse markers and signposting',
            body: "**Discourse markers** organise text and signal the speaker's stance. Beyond 'however' and 'therefore', master **contrastive** ('then again', 'that said', 'mind you'), **reinforcing** ('what is more', 'indeed', 'not least'), **conceding** ('admittedly', 'granted', 'to be fair'), **reformulating** ('that is to say', 'in other words', 'or rather') and **focusing** ('as for', 'with regard to', 'incidentally'). Their position and intonation carry as much meaning as their literal sense.",
            bodyEs:
              "Los **marcadores del discurso** organizan el texto y señalan la postura del hablante. Más allá de 'however' y 'therefore', domina los **contrastivos** ('then again', 'that said', 'mind you'), los **reforzadores** ('what is more', 'indeed', 'not least'), los **concesivos** ('admittedly', 'granted', 'to be fair'), los **reformuladores** ('that is to say', 'in other words', 'or rather') y los **focalizadores** ('as for', 'with regard to', 'incidentally'). Su posición y entonación llevan tanto significado como su sentido literal.",
            examples: [
              {
                en: 'The plan is bold; that said, it is far from foolproof.',
                es: 'El plan es audaz; dicho esto, dista de ser infalible.',
              },
              {
                en: 'She was late — not that anyone minded.',
                es: 'Llegó tarde, no es que a nadie le importara.',
              },
            ],
          },
          {
            heading: 'Ellipsis and substitution',
            body: "**Ellipsis** omits words recoverable from context, avoiding repetition: 'She can sing and (she can) dance'; 'I haven't finished, but I will (finish) soon'. **Substitution** replaces a repeated element with 'so', 'do', 'one' or 'not': 'Is it raining? — I think so / I hope not'; 'I need a pen — take this one'. Used well, these create lean, cohesive, natural-sounding discourse; overused or misjudged, they obscure meaning.",
            bodyEs:
              "La **elipsis** omite palabras recuperables del contexto, evitando la repetición: 'She can sing and (she can) dance'; 'I haven't finished, but I will (finish) soon'. La **sustitución** reemplaza un elemento repetido con 'so', 'do', 'one' o 'not': 'Is it raining? — I think so / I hope not'; 'I need a pen — take this one'. Bien usadas, crean un discurso ágil, cohesivo y natural; abusadas o mal calibradas, oscurecen el sentido.",
            examples: [
              {
                en: "Some agreed, others didn't.",
                es: 'Algunos estuvieron de acuerdo, otros no.',
              },
              {
                en: 'You could apologise — I would, if I were you.',
                es: 'Podrías disculparte; yo lo haría, si fuera tú.',
              },
            ],
          },
          {
            heading: 'Marked word order: fronting and dislocation',
            body: "Shifting elements out of canonical order signals emphasis or contrast. **Fronting** moves an object or complement to the start: 'That I can't accept', 'Brilliant, the whole thing was'. **Left-dislocation** announces a topic then resumes it with a pronoun: 'My neighbour, she never stops complaining'. **Right-dislocation** adds an afterthought tag: 'They're hopeless, those two'. These are stylistic and largely spoken or informal, prized for their rhetorical punch.",
            bodyEs:
              "Desplazar elementos fuera del orden canónico señala énfasis o contraste. El **fronting** mueve un objeto o complemento al inicio: 'That I can't accept', 'Brilliant, the whole thing was'. La **dislocación a la izquierda** anuncia un tema y luego lo retoma con un pronombre: 'My neighbour, she never stops complaining'. La **dislocación a la derecha** añade una coletilla a posteriori: 'They're hopeless, those two'. Son estilísticas y mayormente orales o informales, valoradas por su fuerza retórica.",
            examples: [
              {
                en: 'His arrogance, I simply cannot stomach.',
                es: 'Su arrogancia, sencillamente no la soporto.',
              },
              {
                en: "It's a clever idea, that.",
                es: 'Es una idea ingeniosa, esa.',
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
            es: 'En conjunto, los beneficios superan a los riesgos.',
          },
          {
            en: 'I asked her to help, and help she did.',
            es: 'Le pedí que ayudara, y vaya si ayudó.',
          },
          {
            en: 'Will it work? Frankly, I doubt it.',
            es: '¿Funcionará? Francamente, lo dudo.',
          },
          {
            en: "He said he'd call, but he hasn't.",
            es: 'Dijo que llamaría, pero no lo ha hecho.',
          },
          {
            en: 'As for the others, they can wait their turn.',
            es: 'En cuanto a los demás, pueden esperar su turno.',
          },
          {
            en: 'A genius, that man.',
            es: 'Un genio, ese hombre.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Is she coming? — I think yes.',
            right: 'Is she coming? — I think so.',
            why: "English substitutes a positive clause with 'so' after verbs like think/hope/believe, not with 'yes'.",
            esNote: "Usa 'I think so', no 'I think yes'.",
          },
          {
            wrong: 'I hope no, the meeting is cancelled.',
            right: 'I hope not. — or — I hope so, the meeting is cancelled.',
            why: "The negative substitute is 'not' ('I hope not'), and the clause should match the intended meaning.",
            esNote: "El sustituto negativo es 'not': 'I hope not'.",
          },
          {
            wrong: 'She can sing and she can to dance.',
            right: 'She can sing and dance.',
            why: "After the shared modal 'can', ellipsis removes the repeated subject and modal; no 'to' appears.",
            esNote: "Tras 'can' compartido se elide el sujeto y el modal; sin 'to'.",
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
            kind: 'cloze',
            id: 'c2-de-ex2',
            before: 'The proposal is risky; that ',
            after: ', it may be our only option.',
            answers: ['said'],
            explain: "'That said' is a concessive discourse marker introducing a counterpoint.",
          },
          {
            kind: 'correct',
            id: 'c2-de-ex3',
            wrong: 'Do you think it will rain? — I think yes.',
            answers: ['Do you think it will rain? — I think so.', 'I think so.'],
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
            kind: 'translate',
            id: 'c2-de-ex5',
            es: 'Algunos terminaron a tiempo; otros no.',
            answers: [
              "Some finished on time; others didn't.",
              "Some finished on time, others didn't.",
            ],
            explain: "Ellipsis after 'didn't' omits the recoverable 'finish on time'.",
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
            kind: 'dictation',
            id: 'c2-de-ex7',
            text: 'Admittedly, the evidence is thin, but the conclusion still holds.',
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
        summaryEs:
          'Sonar nativo significa elegir la palabra que coaparece de forma natural, juzgar la connotación y ajustar el registro al contexto. Esta lección afina la colocación, la fraseología idiomática, la escala formal-informal y el control de la connotación positiva, negativa y neutra.',
        sections: [
          {
            heading: 'Collocation: words that travel together',
            body: "**Collocations** are conventional word partnerships that native speakers expect: you 'make a decision' but 'do your homework'; rain is 'heavy', not 'strong'; an argument is 'compelling', a need 'pressing', a resemblance 'striking'. Strong **verb + noun**, **adjective + noun** and **adverb + adjective** pairings ('bitterly disappointed', 'highly unlikely') are the fingerprint of fluency. Knowing the dictionary meaning is not enough; you must know the company a word keeps.",
            bodyEs:
              "Las **colocaciones** son asociaciones convencionales de palabras que los nativos esperan: 'make a decision' pero 'do your homework'; la lluvia es 'heavy', no 'strong'; un argumento es 'compelling', una necesidad 'pressing', un parecido 'striking'. Las combinaciones fuertes de **verbo + sustantivo**, **adjetivo + sustantivo** y **adverbio + adjetivo** ('bitterly disappointed', 'highly unlikely') son la huella de la fluidez. Saber el significado de diccionario no basta; hay que saber la compañía que mantiene una palabra.",
            examples: [
              {
                en: 'The proposal met with strong opposition.',
                es: 'La propuesta se topó con una fuerte oposición.',
              },
              {
                en: "I'm bitterly disappointed by the outcome.",
                es: 'Estoy profundamente decepcionado con el resultado.',
              },
            ],
          },
          {
            heading: 'Idiom and figurative phrasing',
            body: "**Idioms** carry meaning that cannot be read off their parts: 'to bite the bullet', 'a blessing in disguise', 'the elephant in the room'. At C2 the skill is not just understanding them but deploying them aptly and sparingly, and recognising their register — many idioms are informal or even slangy, and a misjudged one in a formal report jars. Beware of translating Spanish idioms literally; the imagery rarely transfers.",
            bodyEs:
              "Los **idioms** llevan un significado que no se deduce de sus partes: 'to bite the bullet', 'a blessing in disguise', 'the elephant in the room'. En C2 la habilidad no es solo entenderlos, sino emplearlos con acierto y mesura, y reconocer su registro: muchos idioms son informales o incluso jergales, y uno mal calibrado en un informe formal desentona. Cuidado con traducir literalmente los modismos españoles; las imágenes rara vez se trasladan.",
            examples: [
              {
                en: 'Cutting the budget now would be a false economy.',
                es: 'Recortar el presupuesto ahora sería un ahorro ilusorio.',
              },
              {
                en: "Let's not beat around the bush.",
                es: 'No nos andemos con rodeos.',
              },
            ],
          },
          {
            heading: 'Register and connotation',
            body: "**Register** is the formality scale: 'kids' (informal) / 'children' (neutral) / 'offspring' (formal/technical); 'buy' / 'purchase' / 'procure'. **Connotation** is the emotional colour: 'thrifty' (positive), 'frugal' (neutral), 'stingy' (negative) all describe carefulness with money. Mastery means selecting the term whose register and connotation fit your audience and intent — and noticing when a near-synonym would insult, flatter or sound out of place.",
            bodyEs:
              "El **registro** es la escala de formalidad: 'kids' (informal) / 'children' (neutro) / 'offspring' (formal/técnico); 'buy' / 'purchase' / 'procure'. La **connotación** es el color emocional: 'thrifty' (positivo), 'frugal' (neutro), 'stingy' (negativo) describen el cuidado con el dinero. El dominio consiste en elegir el término cuyo registro y connotación encajen con tu público e intención, y en notar cuándo un casi-sinónimo insultaría, halagaría o sonaría fuera de lugar.",
            examples: [
              {
                en: "He's not assertive, he's downright aggressive.",
                es: 'No es firme, es directamente agresivo.',
              },
              {
                en: 'We would be grateful if you could expedite the matter.',
                es: 'Le agradeceríamos que agilizara el asunto.',
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
            es: 'Las conversaciones llegaron a un punto muerto.',
          },
          {
            en: 'She paid a heavy price for her honesty.',
            es: 'Pagó un alto precio por su honestidad.',
          },
          {
            en: 'Kindly refrain from smoking on the premises.',
            es: 'Le rogamos que se abstenga de fumar en las instalaciones.',
          },
          {
            en: "That's a wild guess at best.",
            es: 'Eso es, como mucho, una suposición temeraria.',
          },
          {
            en: 'We must address the elephant in the room.',
            es: 'Debemos abordar el tema que todos evitan.',
          },
          {
            en: 'His remarks were utterly tactless.',
            es: 'Sus comentarios fueron del todo faltos de tacto.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It was raining strongly all day.',
            right: 'It was raining heavily all day.',
            why: "Rain collocates with 'heavily/hard', not 'strongly'.",
            esNote: "Se dice 'rain heavily', no 'rain strongly'.",
          },
          {
            wrong: 'I made my homework before dinner.',
            right: 'I did my homework before dinner.',
            why: "'Homework' collocates with 'do', not 'make'; Spanish 'hacer' covers both English verbs.",
            esNote: "'Homework' va con 'do'; el español 'hacer' confunde.",
          },
          {
            wrong: 'The manager is very stubborn about quality, which we admire.',
            right: 'The manager is very determined about quality, which we admire.',
            why: "'Stubborn' carries a negative connotation that clashes with the praise; 'determined' fits.",
            esNote: "'Stubborn' es negativo; para elogiar usa 'determined'.",
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
            kind: 'cloze',
            id: 'c2-ic-ex2',
            before: 'The new evidence is highly ',
            after: ', so the case may collapse.',
            answers: ['unlikely', 'questionable', 'significant', 'relevant'],
            explain: "'Highly + adjective' is a strong adverb-adjective collocation.",
          },
          {
            kind: 'correct',
            id: 'c2-ic-ex3',
            wrong: 'We must make a decision and do an effort.',
            answers: [
              'We must make a decision and make an effort.',
              'We must make a decision and put in an effort.',
            ],
            explain: "'Effort' collocates with 'make' (or 'put in'), not 'do'.",
          },
          {
            kind: 'translate',
            id: 'c2-ic-ex4',
            es: 'Le agradeceríamos que tramitara el asunto con rapidez.',
            answers: [
              'We would be grateful if you could expedite the matter.',
              'We would be grateful if you could deal with the matter promptly.',
              'We would appreciate it if you could expedite the matter.',
            ],
            explain: "Formal register: 'we would be grateful', 'expedite the matter'.",
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
            kind: 'dictation',
            id: 'c2-ic-ex7',
            text: 'Cutting corners now would prove a false economy in the long run.',
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
        summaryEs:
          'El inglés sofisticado señala con exactitud cuán comprometido estás con una afirmación y superpone tono bajo las palabras literales. Esta lección abarca la modalidad epistémica y deóntica matizada, la atenuación (hedging) y el refuerzo, la atenuación retórica y la exageración, y la ironía, la metáfora y otros recursos figurados.',
        sections: [
          {
            heading: 'Nuanced modality and hedging',
            body: "**Epistemic modality** grades certainty: 'must' (confident deduction) > 'should/ought to' (expectation) > 'may/might/could' (open possibility). **Hedging** softens claims to sound cautious and academic: 'it would appear that', 'this may suggest', 'arguably', 'to some extent', 'tend to', 'somewhat'. **Boosting** does the opposite ('clearly', 'undoubtedly', 'it is evident that'). Calibrating these protects your credibility — over-claiming invites rebuttal, over-hedging sounds evasive.",
            bodyEs:
              "La **modalidad epistémica** gradúa la certeza: 'must' (deducción segura) > 'should/ought to' (expectativa) > 'may/might/could' (posibilidad abierta). El **hedging** suaviza las afirmaciones para sonar cauto y académico: 'it would appear that', 'this may suggest', 'arguably', 'to some extent', 'tend to', 'somewhat'. El **boosting** hace lo contrario ('clearly', 'undoubtedly', 'it is evident that'). Calibrarlos protege tu credibilidad: afirmar de más invita a la réplica, atenuar de más suena evasivo.",
            examples: [
              {
                en: 'The data would seem to suggest a modest correlation.',
                es: 'Los datos parecerían sugerir una correlación modesta.',
              },
              {
                en: 'This must be the single most important factor.',
                es: 'Este debe de ser, con diferencia, el factor más importante.',
              },
            ],
          },
          {
            heading: 'Understatement, overstatement and irony',
            body: "Tone often diverges from literal meaning. **Understatement (litotes)** says less than is meant for effect, frequently with double negatives: 'not bad at all' (= excellent), 'it's not exactly cheap' (= very expensive). **Overstatement (hyperbole)** exaggerates ('I've told you a thousand times'). **Irony** states the opposite of what is meant, signalled by context or intonation: 'Lovely weather!' in a downpour. These devices are deeply cultural; reading the cue, not just the words, is the C2 challenge.",
            bodyEs:
              "El tono a menudo diverge del significado literal. La **atenuación (litotes)** dice menos de lo que se quiere decir para lograr un efecto, con frecuencia mediante dobles negaciones: 'not bad at all' (= excelente), 'it's not exactly cheap' (= carísimo). La **exageración (hipérbole)** exagera ('I've told you a thousand times'). La **ironía** afirma lo contrario de lo que se quiere decir, señalada por el contexto o la entonación: '¡Qué tiempo más bonito!' bajo un aguacero. Estos recursos son profundamente culturales; leer la señal, no solo las palabras, es el reto de C2.",
            examples: [
              {
                en: 'The exam was not exactly a walk in the park.',
                es: 'El examen no fue precisamente un paseo.',
              },
              {
                en: 'Oh, brilliant — another delay.',
                es: 'Ah, genial, otro retraso más.',
              },
            ],
          },
          {
            heading: 'Metaphor and figurative language',
            body: "**Figurative language** maps one domain onto another. **Metaphor** asserts an identity ('the economy is overheating'); **simile** uses 'like/as' ('spread like wildfire'); **metonymy** names by association ('Downing Street denied it'); **personification** gives human traits to ideas ('the report claims...'). Much everyday English is quietly metaphorical, especially 'time is money', 'argument is war' and journeys-as-life. Recognising and extending these patterns lets you write vividly and read between the lines.",
            bodyEs:
              "El **lenguaje figurado** proyecta un dominio sobre otro. La **metáfora** afirma una identidad ('the economy is overheating'); el **símil** usa 'like/as' ('spread like wildfire'); la **metonimia** nombra por asociación ('Downing Street denied it'); la **personificación** da rasgos humanos a las ideas ('the report claims...'). Gran parte del inglés cotidiano es discretamente metafórico, sobre todo 'time is money', 'argument is war' y la vida como un viaje. Reconocer y extender estos patrones te permite escribir con viveza y leer entre líneas.",
            examples: [
              {
                en: 'Criticism rained down on the proposal.',
                es: 'Llovieron las críticas sobre la propuesta.',
              },
              {
                en: 'The White House issued a statement.',
                es: 'La Casa Blanca emitió un comunicado.',
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
            es: 'Se podría argumentar que la política fue, en el mejor de los casos, miope.',
          },
          {
            en: "She's not unintelligent — quite the opposite.",
            es: 'No es poco inteligente, todo lo contrario.',
          },
          {
            en: "Well, that went brilliantly, didn't it?",
            es: 'Bueno, eso salió de maravilla, ¿verdad?',
          },
          {
            en: 'Support for the bill is evaporating fast.',
            es: 'El apoyo al proyecto de ley se está evaporando rápido.',
          },
          {
            en: 'It might be argued, somewhat tentatively, that the trend is reversing.',
            es: 'Se podría argumentar, con cierta cautela, que la tendencia se está invirtiendo.',
          },
          {
            en: 'Brussels has yet to comment.',
            es: 'Bruselas aún no se ha pronunciado.',
          },
        ],
        pitfalls: [
          {
            wrong: "It must be raining, but I'm not sure.",
            right: "It might be raining, but I'm not sure.",
            why: "'Must' expresses confident deduction, which clashes with 'I'm not sure'; use 'might/could'.",
            esNote: "'Must' es deducción segura; con duda usa 'might/could'.",
          },
          {
            wrong: 'The results are not bad, they are very good. (meant as litotes)',
            right: 'The results are not bad at all.',
            why: 'Litotes works by leaving the positive implied; spelling it out destroys the understatement.',
            esNote: 'La litotes deja lo positivo implícito; no lo expliques.',
          },
          {
            wrong: 'I have told you thousand times.',
            right: "I've told you a thousand times.",
            why: "The hyperbolic 'a thousand times' needs the article 'a'.",
            esNote: "La hipérbole lleva artículo: 'a thousand times'.",
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
            kind: 'cloze',
            id: 'c2-mh-ex2',
            before: 'The findings would ',
            after: ' to support the hypothesis, though more data is needed.',
            answers: ['appear', 'seem'],
            explain: "'Would appear/seem to' is a classic hedge softening the claim.",
          },
          {
            kind: 'correct',
            id: 'c2-mh-ex3',
            wrong: 'It must be true, although I have no idea really.',
            answers: [
              'It might be true, although I have no idea really.',
              'It could be true, although I have no idea really.',
            ],
            explain: "Confident 'must' contradicts the admitted uncertainty; use 'might/could'.",
          },
          {
            kind: 'translate',
            id: 'c2-mh-ex4',
            es: 'El examen no fue precisamente fácil.',
            answers: ["The exam wasn't exactly easy.", 'The exam was not exactly easy.'],
            explain: "Litotes 'not exactly easy' understates that it was hard.",
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
            kind: 'dictation',
            id: 'c2-mh-ex7',
            text: "Well, that's just what we needed today, isn't it?",
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
        summaryEs:
          'Los hablantes fluidos no producen primeros intentos impecables; supervisan, reparan y reestructuran su habla en tiempo real sin perder al oyente. Esta lección abarca la reformulación, los falsos comienzos, los marcadores de reparación, la gestión de la vacilación y las muletillas, y formas elegantes de recuperar y reencuadrar a mitad de oración.',
        sections: [
          {
            heading: 'Reformulation and self-correction',
            body: "When the first wording misfires, fluent speakers **reformulate** with a marker rather than starting over: 'or rather', 'or should I say', 'what I mean is', 'let me rephrase that', 'to put it another way'. To correct a factual slip mid-flow, use 'sorry, I meant...', 'that is to say...', or 'or, more precisely...'. The repair is signalled clearly so the listener updates smoothly, and the flow is preserved rather than broken.",
            bodyEs:
              "Cuando la primera formulación falla, los hablantes fluidos **reformulan** con un marcador en lugar de empezar de cero: 'or rather', 'or should I say', 'what I mean is', 'let me rephrase that', 'to put it another way'. Para corregir un desliz factual sobre la marcha, usa 'sorry, I meant...', 'that is to say...' o 'or, more precisely...'. La reparación se señala con claridad para que el oyente se actualice sin problemas, y se preserva el flujo en vez de romperlo.",
            examples: [
              {
                en: 'It costs around fifty — or rather, fifty-five — euros.',
                es: 'Cuesta unos cincuenta, o mejor dicho, cincuenta y cinco euros.',
              },
              {
                en: "He's the director — well, the acting director, to be precise.",
                es: 'Es el director, bueno, el director en funciones, para ser exactos.',
              },
            ],
          },
          {
            heading: 'Managing hesitation and buying time',
            body: "To think without surrendering the floor, deploy **fillers and hedges** strategically: 'well', 'I mean', 'you know', 'sort of', 'kind of', 'how shall I put it', 'the thing is'. Longer **time-buying phrases** ('that's a good question', 'let me think for a moment', 'where do I begin') hold the turn during planning. Used sparingly these sound natural and thoughtful; overused they sound vague, so vary them and keep them short.",
            bodyEs:
              "Para pensar sin ceder el turno, despliega **muletillas y atenuadores** de forma estratégica: 'well', 'I mean', 'you know', 'sort of', 'kind of', 'how shall I put it', 'the thing is'. Las **frases para ganar tiempo** más largas ('that's a good question', 'let me think for a moment', 'where do I begin') retienen el turno mientras planificas. Usadas con moderación suenan naturales y reflexivas; abusadas suenan vagas, así que varíalas y mantenlas breves.",
            examples: [
              {
                en: "That's, how shall I put it, an unconventional approach.",
                es: 'Eso es, cómo decirlo, un enfoque poco convencional.',
              },
              {
                en: 'The thing is, we simply ran out of time.',
                es: 'La cosa es que sencillamente nos quedamos sin tiempo.',
              },
            ],
          },
          {
            heading: 'Restructuring a sentence in flight',
            body: "Sometimes a sentence heads into a grammatical dead end; the elegant fix is to **abandon and restart the structure** smoothly. Use an **anacoluthon repair** ('The reason we failed — well, what really happened was...') or recast a clause: 'If they had — no, let me start again — the decision was never theirs to make.' Skilled speakers also **embed** an afterthought ('the report, and this is crucial, was never finished') rather than tacking on a clumsy correction.",
            bodyEs:
              "A veces una oración se mete en un callejón sin salida gramatical; la solución elegante es **abandonar y reiniciar la estructura** con suavidad. Usa una **reparación de anacoluto** ('The reason we failed — well, what really happened was...') o reformula una cláusula: 'If they had — no, let me start again — the decision was never theirs to make.' Los hablantes hábiles también **incrustan** una idea posterior ('the report, and this is crucial, was never finished') en lugar de añadir una corrección torpe.",
            examples: [
              {
                en: 'We need to — actually, let me back up a second.',
                es: 'Necesitamos... en realidad, déjame retroceder un momento.',
              },
              {
                en: "The plan, and I can't stress this enough, depends on funding.",
                es: 'El plan, y no puedo insistir lo suficiente, depende de la financiación.',
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
            es: 'Llegó el día diez... no, perdón, el doce.',
          },
          {
            en: "What I'm trying to say is that timing is everything.",
            es: 'Lo que intento decir es que el momento lo es todo.',
          },
          {
            en: "It's a bold move — or foolhardy, depending on your view.",
            es: 'Es una jugada audaz, o temeraria, según se mire.',
          },
          {
            en: "Let me rephrase that so it's clearer.",
            es: 'Déjame reformular eso para que quede más claro.',
          },
          {
            en: "The issue, and I'll come back to this, is trust.",
            es: 'El problema, y volveré sobre esto, es la confianza.',
          },
          {
            en: "Where do I begin? Well, it's complicated.",
            es: '¿Por dónde empiezo? Bueno, es complicado.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I want to say, eh, that, eh, the plan, eh, is good.',
            right: 'What I want to say is that the plan is good.',
            why: 'Strings of meaningless fillers signal a stall; a single clear reformulation marker is far more fluent.',
            esNote: 'Evita amontonar muletillas; un solo marcador claro es más fluido.',
          },
          {
            wrong: 'It is cheap, I mean it, the price is low.',
            right: "It's cheap — or rather, it's good value for the price.",
            why: "'I mean it' asserts sincerity; to reformulate, use 'I mean' or 'or rather' to introduce the corrected wording.",
            esNote: "'I mean it' = 'lo digo en serio'; para reformular usa 'I mean' / 'or rather'.",
          },
          {
            wrong: 'Let me say it again from the start the whole sentence.',
            right: 'Let me start again.',
            why: 'A short, idiomatic restart marker is clearer than a literal, overloaded one.',
            esNote: "'Let me start again' es la fórmula natural para reiniciar.",
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
            kind: 'cloze',
            id: 'c2-sr-ex2',
            before: "He's the manager — well, the ",
            after: ' manager, to be precise.',
            answers: ['acting', 'deputy', 'assistant', 'interim'],
            explain: 'An embedded self-correction refines the first, looser label.',
          },
          {
            kind: 'correct',
            id: 'c2-sr-ex3',
            wrong: 'The meeting is on Monday, sorry I want to say Tuesday.',
            answers: [
              'The meeting is on Monday — sorry, I mean Tuesday.',
              'The meeting is on Monday, sorry, I mean Tuesday.',
            ],
            explain: "Use 'I mean', not 'I want to say', to correct a factual slip.",
          },
          {
            kind: 'translate',
            id: 'c2-sr-ex4',
            es: 'Lo que intento decir es que necesitamos más tiempo.',
            answers: [
              "What I'm trying to say is that we need more time.",
              'What I am trying to say is that we need more time.',
              "What I'm trying to say is we need more time.",
            ],
            explain: "'What I'm trying to say is...' reframes and clarifies the message.",
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
            kind: 'dictation',
            id: 'c2-sr-ex7',
            text: "The proposal is cheap — or rather, it's remarkably good value.",
            explain: "A dash plus 'or rather' introduces a smoother, upgraded reformulation.",
          },
        ],
      },
    ],
  },
];
