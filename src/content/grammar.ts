import type { GrammarUnit } from '../types';

// CEFR grammar spine A1-C2. Generated content; edit src/types.ts for the shape.
export const GRAMMAR: GrammarUnit[] = [
  {
    level: 'A1',
    title: 'A1 · Primeros pasos en gramática inglesa',
    blurb:
      'Las bases del inglés: ser/estar, presentes, pasado, futuro, pronombres, artículos y más, explicado para hispanohablantes.',
    lessons: [
      {
        id: 'a1-verb-to-be',
        level: 'A1',
        title: 'El verbo to be y there is/there are',
        summary:
          "El verbo to be significa 'ser' y 'estar'. Aprende sus formas, negativos y preguntas, y cómo decir 'hay' con there is/there are.",
        sections: [
          {
            heading: 'Formas de to be',
            body: "El verbo **to be** se traduce como **ser** o **estar**. Cambia según el sujeto: **am** (I), **is** (he/she/it) y **are** (you/we/they). En el habla normal usamos contracciones: **I'm**, **you're**, **he's**.",
            examples: [
              {
                en: "I am a teacher. / I'm a teacher.",
                es: 'Soy profesor.',
                ipa: '/aɪm ə ˈtiːtʃər/',
              },
              {
                en: "She is happy. / She's happy.",
                es: 'Ella está contenta.',
              },
              {
                en: "We are at home. / We're at home.",
                es: 'Estamos en casa.',
              },
            ],
          },
          {
            heading: 'Negativos y preguntas',
            body: "Para el **negativo** añadimos **not** después del verbo: *I am not, she is not (isn't), they are not (aren't)*. Para las **preguntas** ponemos el verbo **antes** del sujeto: *Are you ready? Is he Spanish?*",
            examples: [
              {
                en: "I'm not tired.",
                es: 'No estoy cansado.',
              },
              {
                en: 'Are you from Spain?',
                es: '¿Eres de España?',
              },
              {
                en: "He isn't at work today.",
                es: 'Él no está en el trabajo hoy.',
              },
            ],
          },
          {
            heading: 'There is / There are (hay)',
            body: "Para decir **hay** usamos **there is** (singular) y **there are** (plural). No existe la forma 'it has' para esto. En negativo: *there isn't / there aren't*; en pregunta: *Is there...? / Are there...?*",
            examples: [
              {
                en: 'There is a book on the table.',
                es: 'Hay un libro sobre la mesa.',
              },
              {
                en: 'There are two cats in the garden.',
                es: 'Hay dos gatos en el jardín.',
              },
              {
                en: 'Is there a bank near here?',
                es: '¿Hay un banco cerca de aquí?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conjugación de to be (presente)',
            columns: ['Sujeto', 'Afirmativo', 'Contracción', 'Negativo'],
            rows: [
              ['I', 'am', "I'm", "I'm not"],
              ['You / We / They', 'are', "you're / we're / they're", "aren't"],
              ['He / She / It', 'is', "he's / she's / it's", "isn't"],
            ],
          },
        ],
        examples: [
          {
            en: "I'm twenty years old.",
            es: 'Tengo veinte años.',
          },
          {
            en: 'They are my friends.',
            es: 'Ellos son mis amigos.',
          },
          {
            en: 'Is she a doctor?',
            es: '¿Es ella médica?',
          },
          {
            en: "There aren't any chairs in the room.",
            es: 'No hay sillas en la habitación.',
          },
          {
            en: 'The weather is cold today.',
            es: 'El tiempo está frío hoy.',
          },
          {
            en: "We're not at school now.",
            es: 'No estamos en la escuela ahora.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have 20 years.',
            right: 'I am 20 years old.',
            why: 'La edad se expresa con to be, no con have.',
            esNote:
              "En inglés la edad se dice con el verbo 'to be': 'I am 20 years old', no 'I have 20 years'.",
          },
          {
            wrong: 'Is a problem with the car.',
            right: 'There is a problem with the car.',
            why: "Para decir 'hay' se necesita 'there is/there are', no solo el verbo.",
            esNote: "'Hay' siempre se traduce como 'there is/there are'.",
          },
          {
            wrong: 'There are a book on the table.',
            right: 'There is a book on the table.',
            why: "'A book' es singular, así que se usa 'there is'.",
            esNote: 'Concuerda el verbo con el sustantivo: singular = is, plural = are.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-verb-to-be-ex1',
            prompt: 'Choose the correct form: She ___ my sister.',
            options: ['am', 'is', 'are'],
            answer: 1,
            explain: "'She' usa 'is'.",
          },
          {
            kind: 'cloze',
            id: 'a1-verb-to-be-ex2',
            before: 'We ',
            after: ' students at this school.',
            answers: ['are', "'re"],
            explain: "'We' va con 'are'.",
            hint: 'plural',
          },
          {
            kind: 'correct',
            id: 'a1-verb-to-be-ex3',
            wrong: 'I have 30 years old.',
            answers: ['I am 30 years old.', "I'm 30 years old."],
            explain: 'La edad usa to be.',
          },
          {
            kind: 'order',
            id: 'a1-verb-to-be-ex4',
            tokens: ['there', 'are', 'three', 'books', 'on', 'the', 'shelf'],
            answer: 'There are three books on the shelf.',
            explain: "Plural 'books' = there are.",
          },
          {
            kind: 'translate',
            id: 'a1-verb-to-be-ex5',
            es: '¿Hay un supermercado cerca de aquí?',
            answers: ['Is there a supermarket near here?', 'Is there a supermarket nearby?'],
            explain: "Pregunta con 'Is there...?'.",
          },
          {
            kind: 'dictation',
            id: 'a1-verb-to-be-ex6',
            text: "They aren't at home this evening.",
            explain: "Negativo de 'are' = aren't.",
          },
          {
            kind: 'mcq',
            id: 'a1-verb-to-be-ex7',
            prompt: 'Choose the correct sentence.',
            options: ['There is two dogs.', 'There are two dogs.', 'It has two dogs.'],
            answer: 1,
            explain: "'Two dogs' es plural = there are.",
          },
        ],
      },
      {
        id: 'a1-present-simple',
        level: 'A1',
        title: 'Presente simple y adverbios de frecuencia',
        summary:
          "Usa el presente simple para hábitos, rutinas y hechos. Aprende la -s de la tercera persona, los negativos con don't/doesn't y los adverbios de frecuencia.",
        sections: [
          {
            heading: 'Uso y forma',
            body: 'El **presente simple** se usa para **hábitos**, **rutinas** y **hechos generales**: *I work, you eat, they live*. Con **he/she/it** se añade **-s** al verbo: *he works, she eats*. Verbos que terminan en -o, -ss, -sh, -ch, -x añaden **-es** (*goes, watches*).',
            examples: [
              {
                en: 'I drink coffee every morning.',
                es: 'Bebo café cada mañana.',
              },
              {
                en: 'She works in a hospital.',
                es: 'Ella trabaja en un hospital.',
              },
              {
                en: 'Water boils at 100 degrees.',
                es: 'El agua hierve a 100 grados.',
              },
            ],
          },
          {
            heading: 'Negativos y preguntas',
            body: "Usamos el auxiliar **do/does**. Negativo: **don't** (I/you/we/they) y **doesn't** (he/she/it) + verbo base. Preguntas: **Do/Does** + sujeto + verbo base. ¡Ojo! Tras **doesn't** y **does** el verbo NO lleva -s.",
            examples: [
              {
                en: "I don't like fish.",
                es: 'No me gusta el pescado.',
              },
              {
                en: "He doesn't speak French.",
                es: 'Él no habla francés.',
              },
              {
                en: 'Do you live here?',
                es: '¿Vives aquí?',
              },
            ],
          },
          {
            heading: 'Adverbios de frecuencia',
            body: 'Los **adverbios de frecuencia** (always, usually, often, sometimes, never) van **antes** del verbo principal, pero **después** del verbo to be: *I always work / She is always late*.',
            examples: [
              {
                en: 'I usually get up at seven.',
                es: 'Normalmente me levanto a las siete.',
              },
              {
                en: 'He never eats meat.',
                es: 'Él nunca come carne.',
              },
              {
                en: 'They are sometimes late.',
                es: 'A veces llegan tarde.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Adverbios de frecuencia (de más a menos)',
            columns: ['Inglés', 'Español', '% aprox.'],
            rows: [
              ['always', 'siempre', '100%'],
              ['usually', 'normalmente', '80%'],
              ['often', 'a menudo', '60%'],
              ['sometimes', 'a veces', '40%'],
              ['never', 'nunca', '0%'],
            ],
          },
        ],
        examples: [
          {
            en: 'My brother plays football on Saturdays.',
            es: 'Mi hermano juega al fútbol los sábados.',
          },
          {
            en: "We don't watch TV in the morning.",
            es: 'No vemos la tele por la mañana.',
          },
          {
            en: 'Does she like chocolate?',
            es: '¿Le gusta el chocolate?',
          },
          {
            en: "The shop opens at nine o'clock.",
            es: 'La tienda abre a las nueve.',
          },
          {
            en: 'I often go to the gym after work.',
            es: 'A menudo voy al gimnasio después del trabajo.',
          },
          {
            en: "He doesn't understand the question.",
            es: 'Él no entiende la pregunta.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She work in a bank.',
            right: 'She works in a bank.',
            why: 'Con he/she/it el verbo lleva -s.',
            esNote: 'Recuerda la -s de la tercera persona: he/she/it + verbo + s.',
          },
          {
            wrong: "He doesn't works here.",
            right: "He doesn't work here.",
            why: "Tras 'doesn't' el verbo va en forma base, sin -s.",
            esNote: "La -s ya está en 'does', no se repite en el verbo.",
          },
          {
            wrong: 'I no like coffee.',
            right: "I don't like coffee.",
            why: "El negativo necesita el auxiliar don't, no solo 'no'.",
            esNote: "No se niega con 'no' delante del verbo; se usa don't/doesn't.",
          },
          {
            wrong: 'I go always to bed late.',
            right: 'I always go to bed late.',
            why: 'El adverbio de frecuencia va antes del verbo principal.',
            esNote: 'Coloca always/usually/never antes del verbo, no después.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-present-simple-ex1',
            before: 'My father ',
            after: ' (work) in an office.',
            answers: ['works'],
            explain: 'Tercera persona = works.',
            hint: 'he/she/it + -s',
          },
          {
            kind: 'mcq',
            id: 'a1-present-simple-ex2',
            prompt: 'Choose the correct sentence.',
            options: ["She don't like tea.", "She doesn't likes tea.", "She doesn't like tea."],
            answer: 2,
            explain: "doesn't + verbo base.",
          },
          {
            kind: 'correct',
            id: 'a1-present-simple-ex3',
            wrong: 'He go to school every day.',
            answers: ['He goes to school every day.'],
            explain: 'go -> goes en tercera persona.',
          },
          {
            kind: 'order',
            id: 'a1-present-simple-ex4',
            tokens: ['I', 'always', 'have', 'breakfast', 'at', 'eight'],
            answer: 'I always have breakfast at eight.',
            explain: 'El adverbio va antes del verbo principal.',
          },
          {
            kind: 'translate',
            id: 'a1-present-simple-ex5',
            es: '¿Hablas inglés?',
            answers: ['Do you speak English?'],
            explain: 'Pregunta con Do + sujeto + verbo base.',
          },
          {
            kind: 'dictation',
            id: 'a1-present-simple-ex6',
            text: 'We never drink coffee at night.',
            explain: "never antes del verbo, verbo base con 'we'.",
          },
          {
            kind: 'mcq',
            id: 'a1-present-simple-ex7',
            prompt: "Which adverb means 'a veces'?",
            options: ['always', 'never', 'sometimes'],
            answer: 2,
            explain: 'sometimes = a veces.',
          },
        ],
      },
      {
        id: 'a1-present-continuous',
        level: 'A1',
        title: 'Presente continuo (ahora)',
        summary:
          'El presente continuo describe acciones que ocurren ahora mismo. Se forma con to be + verbo terminado en -ing.',
        sections: [
          {
            heading: 'Forma: to be + -ing',
            body: 'El **presente continuo** describe algo que pasa **ahora** o alrededor de ahora. Se forma con **am/is/are** + verbo con **-ing**: *I am working, she is reading*. Palabras clave: **now**, **at the moment**, **today**.',
            examples: [
              {
                en: 'I am studying English now.',
                es: 'Estoy estudiando inglés ahora.',
              },
              {
                en: 'She is talking on the phone.',
                es: 'Ella está hablando por teléfono.',
              },
              {
                en: 'They are playing in the park.',
                es: 'Están jugando en el parque.',
              },
            ],
          },
          {
            heading: 'Reglas de ortografía del -ing',
            body: "Verbos que terminan en **-e** pierden la e: *make → making*. Verbos cortos con una vocal + consonante **doblan la consonante**: *run → running, sit → sitting*. Negativo y pregunta usan to be: *She isn't sleeping / Are you coming?*",
            examples: [
              {
                en: 'He is writing an email.',
                es: 'Él está escribiendo un correo.',
              },
              {
                en: "We aren't watching TV right now.",
                es: 'No estamos viendo la tele ahora mismo.',
              },
              {
                en: 'Are you listening to me?',
                es: '¿Me estás escuchando?',
              },
            ],
          },
          {
            heading: 'Presente simple vs continuo',
            body: 'Usa el **presente simple** para rutinas (*I work every day*) y el **presente continuo** para algo en este momento (*I am working now*). Algunos verbos de estado (like, want, know) normalmente **no** se usan en continuo.',
            examples: [
              {
                en: "I usually walk to work, but today I'm taking the bus.",
                es: 'Normalmente voy andando al trabajo, pero hoy tomo el autobús.',
              },
              {
                en: 'She wants a coffee.',
                es: 'Ella quiere un café.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reglas del -ing',
            columns: ['Tipo', 'Regla', 'Ejemplo'],
            rows: [
              ['normal', '+ -ing', 'play → playing'],
              ['termina en -e', 'quita -e + ing', 'write → writing'],
              ['vocal + consonante', 'dobla consonante', 'run → running'],
            ],
          },
        ],
        examples: [
          {
            en: 'The children are sleeping.',
            es: 'Los niños están durmiendo.',
          },
          {
            en: 'It is raining at the moment.',
            es: 'Está lloviendo en este momento.',
          },
          {
            en: 'What are you doing?',
            es: '¿Qué estás haciendo?',
          },
          {
            en: "I'm not working today.",
            es: 'Hoy no estoy trabajando.',
          },
          {
            en: 'He is making dinner now.',
            es: 'Él está haciendo la cena ahora.',
          },
          {
            en: 'We are learning new words.',
            es: 'Estamos aprendiendo palabras nuevas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I working now.',
            right: 'I am working now.',
            why: 'El presente continuo necesita to be antes del -ing.',
            esNote: "Nunca olvides am/is/are: 'I am working', no 'I working'.",
          },
          {
            wrong: 'She is write a letter.',
            right: 'She is writing a letter.',
            why: 'El verbo principal debe llevar -ing.',
            esNote: 'Después de to be, el verbo va en -ing.',
          },
          {
            wrong: 'I am wanting a coffee.',
            right: 'I want a coffee.',
            why: "'want' es un verbo de estado y no se usa en continuo.",
            esNote: 'Verbos como want, like, know no se usan normalmente en -ing.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-present-continuous-ex1',
            before: 'Listen! The baby ',
            after: ' (cry).',
            answers: ['is crying'],
            explain: 'is + crying.',
            hint: 'to be + -ing',
          },
          {
            kind: 'mcq',
            id: 'a1-present-continuous-ex2',
            prompt: "Choose the correct -ing form of 'run'.",
            options: ['runing', 'running', 'runninng'],
            answer: 1,
            explain: 'Se dobla la n: running.',
          },
          {
            kind: 'correct',
            id: 'a1-present-continuous-ex3',
            wrong: 'They are play football now.',
            answers: ['They are playing football now.'],
            explain: 'play -> playing.',
          },
          {
            kind: 'order',
            id: 'a1-present-continuous-ex4',
            tokens: ['what', 'are', 'you', 'doing', 'now'],
            answer: 'What are you doing now?',
            explain: 'Pregunta: wh- + are + sujeto + -ing.',
          },
          {
            kind: 'translate',
            id: 'a1-present-continuous-ex5',
            es: 'Está lloviendo ahora.',
            answers: ['It is raining now.', "It's raining now."],
            explain: 'It + is + raining.',
          },
          {
            kind: 'dictation',
            id: 'a1-present-continuous-ex6',
            text: "I'm not watching TV at the moment.",
            explain: "Negativo: I'm not + -ing.",
          },
          {
            kind: 'mcq',
            id: 'a1-present-continuous-ex7',
            prompt: 'Which sentence is correct?',
            options: ['I am liking this song.', 'I like this song.', 'I am like this song.'],
            answer: 1,
            explain: "'like' no se usa en continuo.",
          },
        ],
      },
      {
        id: 'a1-have-got-can',
        level: 'A1',
        title: "Have got / have y can / can't",
        summary: "Expresa posesión con have got o have, y habilidad y permiso con can y can't.",
        sections: [
          {
            heading: 'Have got y have (posesión)',
            body: "Para hablar de **posesión** usamos **have got** (más común en inglés británico) o **have**. *I have got a car = I have a car*. Negativo: *haven't got / don't have*. Pregunta: *Have you got...? / Do you have...?*",
            examples: [
              {
                en: 'I have got two brothers.',
                es: 'Tengo dos hermanos.',
              },
              {
                en: 'She has got brown eyes.',
                es: 'Ella tiene los ojos marrones.',
              },
              {
                en: 'Do you have a pen?',
                es: '¿Tienes un bolígrafo?',
              },
            ],
          },
          {
            heading: "Can y can't (habilidad y permiso)",
            body: "**Can** expresa **habilidad** ('saber/poder') y **permiso**. Es un verbo modal: va seguido del **verbo base** (sin 'to' y sin -s). Negativo: **can't** (cannot). Pregunta: *Can you swim?*",
            examples: [
              {
                en: 'I can swim.',
                es: 'Sé nadar.',
              },
              {
                en: "He can't drive.",
                es: 'Él no sabe conducir.',
              },
              {
                en: 'Can I open the window?',
                es: '¿Puedo abrir la ventana?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'have got y can',
            columns: ['Forma', 'have got', 'can'],
            rows: [
              ['Afirmativo', 'I have got / She has got', 'I can / She can'],
              ['Negativo', "haven't got / hasn't got", "can't (cannot)"],
              ['Pregunta', 'Have you got...?', 'Can you...?'],
            ],
          },
        ],
        examples: [
          {
            en: 'We have got a big house.',
            es: 'Tenemos una casa grande.',
          },
          {
            en: "I haven't got any money.",
            es: 'No tengo dinero.',
          },
          {
            en: 'Can you help me, please?',
            es: '¿Puedes ayudarme, por favor?',
          },
          {
            en: 'She can speak three languages.',
            es: 'Ella sabe hablar tres idiomas.',
          },
          {
            en: 'Has he got a bike?',
            es: '¿Tiene él una bicicleta?',
          },
          {
            en: "I can't come to the party.",
            es: 'No puedo venir a la fiesta.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I can to swim.',
            right: 'I can swim.',
            why: "Después de 'can' el verbo va sin 'to'.",
            esNote: "Los modales como can no usan 'to' antes del verbo.",
          },
          {
            wrong: 'She can swims very well.',
            right: 'She can swim very well.',
            why: "Tras 'can' el verbo va en forma base, sin -s.",
            esNote: 'Can no cambia y el verbo siguiente nunca lleva -s.',
          },
          {
            wrong: 'She have got a car.',
            right: 'She has got a car.',
            why: "Con he/she/it se usa 'has got'.",
            esNote: 'Tercera persona: has got, no have got.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-have-got-can-ex1',
            prompt: 'Choose: My sister ___ got a new phone.',
            options: ['have', 'has', 'is'],
            answer: 1,
            explain: 'She/he/it = has got.',
          },
          {
            kind: 'cloze',
            id: 'a1-have-got-can-ex2',
            before: 'I ',
            after: " play the guitar, but I can't sing.",
            answers: ['can'],
            explain: 'Habilidad afirmativa = can.',
            hint: 'habilidad',
          },
          {
            kind: 'correct',
            id: 'a1-have-got-can-ex3',
            wrong: 'He can to drive a car.',
            answers: ['He can drive a car.'],
            explain: "Sin 'to' después de can.",
          },
          {
            kind: 'order',
            id: 'a1-have-got-can-ex4',
            tokens: ['have', 'you', 'got', 'any', 'brothers'],
            answer: 'Have you got any brothers?',
            explain: 'Pregunta con Have you got...?',
          },
          {
            kind: 'translate',
            id: 'a1-have-got-can-ex5',
            es: 'No puedo encontrar mis llaves.',
            answers: ["I can't find my keys.", 'I cannot find my keys.'],
            explain: "can't + verbo base.",
          },
          {
            kind: 'dictation',
            id: 'a1-have-got-can-ex6',
            text: 'She has got two cats and a dog.',
            explain: 'has got con tercera persona.',
          },
          {
            kind: 'mcq',
            id: 'a1-have-got-can-ex7',
            prompt: 'Which is correct?',
            options: ['Can you to help me?', 'Can you help me?', 'Can you helping me?'],
            answer: 1,
            explain: 'can + verbo base.',
          },
        ],
      },
      {
        id: 'a1-would-like-want',
        level: 'A1',
        title: 'Would like, want to y like + -ing',
        summary:
          'Pide y expresa deseos con would like, di qué quieres hacer con want to + infinitivo, y qué te gusta hacer con like + -ing.',
        sections: [
          {
            heading: 'Would like (me gustaría)',
            body: "**Would like** significa **me gustaría** y es más educado que 'want'. Se usa para **peticiones** y **ofertas**. Va seguido de un sustantivo o de **to + verbo**: *I'd like a coffee / I'd like to go*. Contracción: **I'd like**.",
            examples: [
              {
                en: "I'd like a glass of water, please.",
                es: 'Me gustaría un vaso de agua, por favor.',
              },
              {
                en: 'Would you like to come with us?',
                es: '¿Te gustaría venir con nosotros?',
              },
              {
                en: "She'd like to learn French.",
                es: 'A ella le gustaría aprender francés.',
              },
            ],
          },
          {
            heading: 'Want to + infinitivo',
            body: '**Want** significa **querer**. Para decir qué quieres hacer usamos **want to + verbo base**: *I want to eat*. Recuerda la -s en tercera persona: *he wants to*. Es directo, no se usa para pedir con cortesía.',
            examples: [
              {
                en: 'I want to buy a new car.',
                es: 'Quiero comprar un coche nuevo.',
              },
              {
                en: 'He wants to be a pilot.',
                es: 'Él quiere ser piloto.',
              },
              {
                en: 'Do you want to dance?',
                es: '¿Quieres bailar?',
              },
            ],
          },
          {
            heading: 'Like + -ing (gustar hacer algo)',
            body: 'Para decir qué actividades **te gustan**, usa **like / love / hate + verbo en -ing**: *I like swimming, she loves cooking*. Para hablar de gustos en general usamos esta estructura.',
            examples: [
              {
                en: 'I like reading books.',
                es: 'Me gusta leer libros.',
              },
              {
                en: 'They love playing tennis.',
                es: 'Les encanta jugar al tenis.',
              },
              {
                en: 'He hates getting up early.',
                es: 'Él odia levantarse temprano.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Estructuras de deseo y gusto',
            columns: ['Estructura', 'Significado', 'Ejemplo'],
            rows: [
              ['would like + to + verbo', 'me gustaría (cortés)', "I'd like to go"],
              ['want + to + verbo', 'quiero (directo)', 'I want to go'],
              ['like + verbo-ing', 'me gusta (hábito)', 'I like going'],
            ],
          },
        ],
        examples: [
          {
            en: 'Would you like some tea?',
            es: '¿Te gustaría un poco de té?',
          },
          {
            en: "I'd like to book a table for two.",
            es: 'Me gustaría reservar una mesa para dos.',
          },
          {
            en: 'We want to visit London next year.',
            es: 'Queremos visitar Londres el año que viene.',
          },
          {
            en: 'She likes dancing at parties.',
            es: 'A ella le gusta bailar en las fiestas.',
          },
          {
            en: 'Do you want to watch a film?',
            es: '¿Quieres ver una película?',
          },
          {
            en: "I don't like waiting in queues.",
            es: 'No me gusta esperar en colas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I want go home.',
            right: 'I want to go home.',
            why: "Después de 'want' se necesita 'to' antes del verbo.",
            esNote: "want siempre va con 'to': want to + verbo.",
          },
          {
            wrong: 'I would like a coffee, but I like to play more often.',
            right: "I'd like a coffee. / I like playing tennis.",
            why: "'would like' = deseo puntual; 'like + -ing' = gusto general.",
            esNote:
              "No confundas 'would like' (me gustaría ahora) con 'like' (me gusta en general).",
          },
          {
            wrong: 'She want to sleep.',
            right: 'She wants to sleep.',
            why: 'Tercera persona lleva -s: wants.',
            esNote: 'Recuerda la -s: he/she wants to.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-would-like-want-ex1',
            before: 'I want ',
            after: ' learn how to cook.',
            answers: ['to'],
            explain: 'want + to + verbo.',
            hint: 'una palabra',
          },
          {
            kind: 'mcq',
            id: 'a1-would-like-want-ex2',
            prompt: 'Choose: I like ___ in the sea.',
            options: ['swim', 'to swimming', 'swimming'],
            answer: 2,
            explain: 'like + -ing.',
          },
          {
            kind: 'correct',
            id: 'a1-would-like-want-ex3',
            wrong: 'Would you like drink something?',
            answers: ['Would you like to drink something?', 'Would you like a drink?'],
            explain: 'would like + to + verbo, o + sustantivo.',
          },
          {
            kind: 'order',
            id: 'a1-would-like-want-ex4',
            tokens: ['she', 'would', 'like', 'to', 'see', 'the', 'menu'],
            answer: 'She would like to see the menu.',
            explain: 'would like to + verbo.',
          },
          {
            kind: 'translate',
            id: 'a1-would-like-want-ex5',
            es: 'Me gustaría reservar una habitación.',
            answers: ["I'd like to book a room.", 'I would like to book a room.'],
            explain: 'would like to + verbo.',
          },
          {
            kind: 'dictation',
            id: 'a1-would-like-want-ex6',
            text: 'They want to travel around the world.',
            explain: 'want to + verbo base.',
          },
          {
            kind: 'mcq',
            id: 'a1-would-like-want-ex7',
            prompt: 'Which is the polite way to offer?',
            options: ['You want a coffee?', 'Would you like a coffee?', 'You like coffee?'],
            answer: 1,
            explain: 'would like es más educado.',
          },
        ],
      },
      {
        id: 'a1-past-be',
        level: 'A1',
        title: 'Pasado del verbo to be (was / were)',
        summary:
          'Habla del pasado con was y were, sus negativos y preguntas, y la estructura there was/there were.',
        sections: [
          {
            heading: 'Was y were',
            body: 'El **pasado de to be** tiene dos formas: **was** (I, he, she, it) y **were** (you, we, they). Significa **era**, **estaba** o **fue/estuvo**. Palabras clave: **yesterday**, **last week**, **ago**.',
            examples: [
              {
                en: 'I was at home yesterday.',
                es: 'Estuve en casa ayer.',
              },
              {
                en: 'They were happy with the result.',
                es: 'Estaban contentos con el resultado.',
              },
              {
                en: 'She was a nurse.',
                es: 'Ella era enfermera.',
              },
            ],
          },
          {
            heading: 'Negativos, preguntas y there was/were',
            body: "Negativo: **wasn't** / **weren't**. Pregunta: el verbo va antes del sujeto, *Was she there? Were you tired?* Para decir 'había' usamos **there was** (singular) y **there were** (plural).",
            examples: [
              {
                en: "He wasn't at school.",
                es: 'Él no estaba en la escuela.',
              },
              {
                en: 'Were you at the party?',
                es: '¿Estuviste en la fiesta?',
              },
              {
                en: 'There were many people at the concert.',
                es: 'Había mucha gente en el concierto.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'to be en pasado',
            columns: ['Sujeto', 'Afirmativo', 'Negativo'],
            rows: [
              ['I / He / She / It', 'was', "wasn't"],
              ['You / We / They', 'were', "weren't"],
            ],
          },
        ],
        examples: [
          {
            en: 'The film was very interesting.',
            es: 'La película fue muy interesante.',
          },
          {
            en: "We weren't ready for the exam.",
            es: 'No estábamos preparados para el examen.',
          },
          {
            en: 'Was it cold last night?',
            es: '¿Hacía frío anoche?',
          },
          {
            en: 'There was a problem with the car.',
            es: 'Había un problema con el coche.',
          },
          {
            en: 'My parents were teachers.',
            es: 'Mis padres eran profesores.',
          },
          {
            en: "I wasn't at work on Monday.",
            es: 'No estuve en el trabajo el lunes.',
          },
        ],
        pitfalls: [
          {
            wrong: 'They was at the cinema.',
            right: 'They were at the cinema.',
            why: "they/we/you usan 'were'.",
            esNote: 'was es singular; were es plural (you, we, they).',
          },
          {
            wrong: 'I were tired.',
            right: 'I was tired.',
            why: "Con 'I' se usa 'was'.",
            esNote: 'I siempre va con was en pasado.',
          },
          {
            wrong: 'There was many people.',
            right: 'There were many people.',
            why: "'people' es plural, así que se usa 'were'.",
            esNote: 'people es plural en inglés: there were many people.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-past-be-ex1',
            prompt: 'Choose: We ___ at the beach yesterday.',
            options: ['was', 'were', 'are'],
            answer: 1,
            explain: 'we = were.',
          },
          {
            kind: 'cloze',
            id: 'a1-past-be-ex2',
            before: 'She ',
            after: ' very tired after the trip.',
            answers: ['was'],
            explain: 'she = was.',
            hint: 'singular',
          },
          {
            kind: 'correct',
            id: 'a1-past-be-ex3',
            wrong: 'They was happy.',
            answers: ['They were happy.'],
            explain: 'they = were.',
          },
          {
            kind: 'order',
            id: 'a1-past-be-ex4',
            tokens: ['there', 'were', 'two', 'dogs', 'in', 'the', 'garden'],
            answer: 'There were two dogs in the garden.',
            explain: 'Plural = there were.',
          },
          {
            kind: 'translate',
            id: 'a1-past-be-ex5',
            es: '¿Estabas en casa anoche?',
            answers: ['Were you at home last night?'],
            explain: 'Were + you + ...?',
          },
          {
            kind: 'dictation',
            id: 'a1-past-be-ex6',
            text: "I wasn't at the meeting this morning.",
            explain: "wasn't con 'I'.",
          },
          {
            kind: 'mcq',
            id: 'a1-past-be-ex7',
            prompt: 'Choose the correct negative.',
            options: ["He weren't here.", "He wasn't here.", 'He not was here.'],
            answer: 1,
            explain: "he = wasn't.",
          },
        ],
      },
      {
        id: 'a1-past-simple',
        level: 'A1',
        title: 'Pasado simple: verbos regulares e irregulares',
        summary:
          'Habla de acciones terminadas en el pasado. Forma regular con -ed, verbos irregulares, y negativos y preguntas con did.',
        sections: [
          {
            heading: 'Verbos regulares (-ed)',
            body: 'El **pasado simple** describe acciones **terminadas** en el pasado. Los verbos **regulares** añaden **-ed**: *work → worked, play → played*. Si termina en -e, solo se añade -d (*like → liked*). Si termina en consonante + y, cambia a -ied (*study → studied*).',
            examples: [
              {
                en: 'I worked late yesterday.',
                es: 'Trabajé hasta tarde ayer.',
              },
              {
                en: 'She studied for the exam.',
                es: 'Ella estudió para el examen.',
              },
              {
                en: 'We watched a film last night.',
                es: 'Vimos una película anoche.',
              },
            ],
          },
          {
            heading: 'Verbos irregulares',
            body: 'Muchos verbos comunes son **irregulares** y hay que memorizarlos: *go → went, have → had, see → saw, eat → ate, buy → bought*. La forma es la misma para todas las personas.',
            examples: [
              {
                en: 'He went to Madrid last summer.',
                es: 'Él fue a Madrid el verano pasado.',
              },
              {
                en: 'They had a great time.',
                es: 'Lo pasaron muy bien.',
              },
              {
                en: 'I saw a good film yesterday.',
                es: 'Vi una buena película ayer.',
              },
            ],
          },
          {
            heading: 'Negativos y preguntas con did',
            body: "En negativo y pregunta usamos el auxiliar **did** + **verbo base** (¡sin pasado!). Negativo: **didn't + verbo base**. Pregunta: **Did + sujeto + verbo base**. *I didn't go / Did you see it?*",
            examples: [
              {
                en: "I didn't go to work yesterday.",
                es: 'No fui a trabajar ayer.',
              },
              {
                en: 'Did you eat breakfast?',
                es: '¿Desayunaste?',
              },
              {
                en: "She didn't like the food.",
                es: 'A ella no le gustó la comida.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Verbos irregulares frecuentes',
            columns: ['Infinitivo', 'Pasado', 'Español'],
            rows: [
              ['go', 'went', 'ir'],
              ['have', 'had', 'tener'],
              ['see', 'saw', 'ver'],
              ['eat', 'ate', 'comer'],
              ['buy', 'bought', 'comprar'],
              ['make', 'made', 'hacer'],
            ],
          },
        ],
        examples: [
          {
            en: 'We visited my grandmother on Sunday.',
            es: 'Visitamos a mi abuela el domingo.',
          },
          {
            en: 'He bought a new laptop last week.',
            es: 'Él compró un portátil nuevo la semana pasada.',
          },
          {
            en: 'Did they finish the project?',
            es: '¿Terminaron el proyecto?',
          },
          {
            en: "I didn't understand the lesson.",
            es: 'No entendí la lección.',
          },
          {
            en: 'She made a cake for the party.',
            es: 'Ella hizo un pastel para la fiesta.',
          },
          {
            en: 'They played football in the rain.',
            es: 'Jugaron al fútbol bajo la lluvia.',
          },
        ],
        pitfalls: [
          {
            wrong: "I didn't went home.",
            right: "I didn't go home.",
            why: "Tras 'didn't' el verbo va en forma base, no en pasado.",
            esNote: "El pasado ya está en 'did/didn't'; el verbo vuelve a la base.",
          },
          {
            wrong: 'Did you saw the match?',
            right: 'Did you see the match?',
            why: "En preguntas con 'did' el verbo va en forma base.",
            esNote: "Después de 'did', usa el infinitivo: see, no saw.",
          },
          {
            wrong: 'Yesterday I go to the shop.',
            right: 'Yesterday I went to the shop.',
            why: "Con 'yesterday' se necesita el pasado: went.",
            esNote: 'go es irregular: su pasado es went.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a1-past-simple-ex1',
            before: 'Last weekend we ',
            after: ' (go) to the beach.',
            answers: ['went'],
            explain: 'go -> went.',
            hint: 'irregular',
          },
          {
            kind: 'mcq',
            id: 'a1-past-simple-ex2',
            prompt: "Choose the past of 'study'.",
            options: ['studyed', 'studied', 'studed'],
            answer: 1,
            explain: 'consonante + y -> ied.',
          },
          {
            kind: 'correct',
            id: 'a1-past-simple-ex3',
            wrong: "She didn't liked the film.",
            answers: ["She didn't like the film."],
            explain: "didn't + verbo base.",
          },
          {
            kind: 'order',
            id: 'a1-past-simple-ex4',
            tokens: ['did', 'you', 'see', 'the', 'news', 'yesterday'],
            answer: 'Did you see the news yesterday?',
            explain: 'Did + sujeto + verbo base.',
          },
          {
            kind: 'translate',
            id: 'a1-past-simple-ex5',
            es: 'Compré un coche nuevo la semana pasada.',
            answers: ['I bought a new car last week.'],
            explain: 'buy -> bought.',
          },
          {
            kind: 'dictation',
            id: 'a1-past-simple-ex6',
            text: 'They watched a great film last night.',
            explain: 'watch -> watched (regular).',
          },
          {
            kind: 'mcq',
            id: 'a1-past-simple-ex7',
            prompt: 'Which sentence is correct?',
            options: ["I didn't ate dinner.", "I didn't eat dinner.", 'I not ate dinner.'],
            answer: 1,
            explain: "didn't + verbo base.",
          },
        ],
      },
      {
        id: 'a1-future-will-going-to',
        level: 'A1',
        title: 'Futuro: will y going to',
        summary:
          'Habla del futuro con will (decisiones, predicciones, promesas) y be going to (planes e intenciones).',
        sections: [
          {
            heading: 'Will',
            body: "**Will** se usa para **predicciones**, **decisiones del momento**, **promesas** y **ofertas**. Va con el **verbo base** para todas las personas. Contracción: **'ll**. Negativo: **won't**. *I'll help you / It will rain*.",
            examples: [
              {
                en: 'I think it will rain tomorrow.',
                es: 'Creo que lloverá mañana.',
              },
              {
                en: "I'll call you later.",
                es: 'Te llamaré más tarde.',
              },
              {
                en: "She won't be late.",
                es: 'Ella no llegará tarde.',
              },
            ],
          },
          {
            heading: 'Be going to',
            body: "**Be going to** se usa para **planes** e **intenciones** que ya has decidido, y para predicciones con evidencia. Forma: **am/is/are + going to + verbo base**. *I'm going to study tonight*.",
            examples: [
              {
                en: 'We are going to visit Italy next month.',
                es: 'Vamos a visitar Italia el mes que viene.',
              },
              {
                en: "He's going to buy a new phone.",
                es: 'Él va a comprar un teléfono nuevo.',
              },
              {
                en: "Look at the clouds! It's going to rain.",
                es: '¡Mira las nubes! Va a llover.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'will vs going to',
            columns: ['Forma', 'Uso', 'Ejemplo'],
            rows: [
              ['will + verbo', 'decisión del momento, predicción, promesa', "I'll help you"],
              ['going to + verbo', 'plan o intención ya decidida', "I'm going to travel"],
            ],
          },
        ],
        examples: [
          {
            en: "I'm going to start a new job next week.",
            es: 'Voy a empezar un trabajo nuevo la semana que viene.',
          },
          {
            en: 'Maybe they will come to the party.',
            es: 'Quizás vengan a la fiesta.',
          },
          {
            en: "Don't worry, I'll do it.",
            es: 'No te preocupes, lo haré yo.',
          },
          {
            en: 'Are you going to study tonight?',
            es: '¿Vas a estudiar esta noche?',
          },
          {
            en: "The bus won't arrive on time.",
            es: 'El autobús no llegará a tiempo.',
          },
          {
            en: "We're going to have dinner at eight.",
            es: 'Vamos a cenar a las ocho.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I will to call you.',
            right: 'I will call you.',
            why: "Después de 'will' no se usa 'to'.",
            esNote: "will + verbo base, sin 'to'.",
          },
          {
            wrong: 'She wills come tomorrow.',
            right: 'She will come tomorrow.',
            why: "'will' no cambia con la tercera persona.",
            esNote: 'will es igual para todas las personas, sin -s.',
          },
          {
            wrong: "I'm going to study tonight... no, I going to study.",
            right: "I'm going to study tonight.",
            why: 'going to necesita am/is/are antes.',
            esNote: "No olvides el verbo to be: I'm going to, no 'I going to'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-future-will-going-to-ex1',
            prompt: "The phone is ringing. 'I ___ answer it!'",
            options: ['am going to', "'ll", 'going to'],
            answer: 1,
            explain: "Decisión del momento = will ('ll).",
          },
          {
            kind: 'cloze',
            id: 'a1-future-will-going-to-ex2',
            before: 'Next year we are ',
            after: ' buy a house.',
            answers: ['going to'],
            explain: 'Plan = going to.',
            hint: 'plan',
          },
          {
            kind: 'correct',
            id: 'a1-future-will-going-to-ex3',
            wrong: 'I will to help you.',
            answers: ['I will help you.', "I'll help you."],
            explain: 'will + verbo base.',
          },
          {
            kind: 'order',
            id: 'a1-future-will-going-to-ex4',
            tokens: ['she', 'is', 'going', 'to', 'start', 'a', 'new', 'job'],
            answer: 'She is going to start a new job.',
            explain: 'is going to + verbo.',
          },
          {
            kind: 'translate',
            id: 'a1-future-will-going-to-ex5',
            es: 'Creo que mañana hará sol.',
            answers: ['I think it will be sunny tomorrow.', "I think it'll be sunny tomorrow."],
            explain: 'Predicción = will.',
          },
          {
            kind: 'dictation',
            id: 'a1-future-will-going-to-ex6',
            text: 'They are going to travel to Japan in summer.',
            explain: 'going to para planes.',
          },
          {
            kind: 'mcq',
            id: 'a1-future-will-going-to-ex7',
            prompt: 'Choose the negative of will.',
            options: ["willn't", "won't", "don't will"],
            answer: 1,
            explain: "will not = won't.",
          },
        ],
      },
      {
        id: 'a1-pronouns-imperatives',
        level: 'A1',
        title: 'Pronombres, posesivos e imperativos',
        summary:
          'Aprende los pronombres de sujeto y objeto, los adjetivos y pronombres posesivos, y cómo dar órdenes e instrucciones con el imperativo.',
        sections: [
          {
            heading: 'Pronombres de sujeto y objeto',
            body: 'Los **pronombres de sujeto** (I, you, he, she, it, we, they) hacen la acción. Los **pronombres de objeto** (me, you, him, her, it, us, them) reciben la acción: *She loves him*. En inglés el **sujeto es obligatorio**.',
            examples: [
              {
                en: 'I saw her at the party.',
                es: 'La vi en la fiesta.',
              },
              {
                en: 'They helped us a lot.',
                es: 'Nos ayudaron mucho.',
              },
              {
                en: 'Can you call me tonight?',
                es: '¿Puedes llamarme esta noche?',
              },
            ],
          },
          {
            heading: 'Posesivos',
            body: 'Los **adjetivos posesivos** van antes del sustantivo (my, your, his, her, its, our, their): *my car*. Los **pronombres posesivos** van solos (mine, yours, his, hers, ours, theirs): *This car is mine*.',
            examples: [
              {
                en: 'This is my book and that is yours.',
                es: 'Este es mi libro y aquel es el tuyo.',
              },
              {
                en: 'Her name is Anna.',
                es: 'Su nombre es Anna.',
              },
              {
                en: 'The house is ours.',
                es: 'La casa es nuestra.',
              },
            ],
          },
          {
            heading: 'Imperativos',
            body: "El **imperativo** da órdenes, instrucciones y consejos. Se usa el **verbo base** sin sujeto: *Open the door! Sit down*. El negativo es **Don't + verbo**: *Don't run!*",
            examples: [
              {
                en: 'Close the window, please.',
                es: 'Cierra la ventana, por favor.',
              },
              {
                en: "Don't touch that!",
                es: '¡No toques eso!',
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
            caption: 'Pronombres y posesivos',
            columns: ['Sujeto', 'Objeto', 'Adjetivo posesivo', 'Pronombre posesivo'],
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
            en: 'We invited them to dinner.',
            es: 'Los invitamos a cenar.',
          },
          {
            en: 'Is this your phone or mine?',
            es: '¿Es este tu teléfono o el mío?',
          },
          {
            en: 'Please give me the keys.',
            es: 'Por favor, dame las llaves.',
          },
          {
            en: "Don't be late for the meeting.",
            es: 'No llegues tarde a la reunión.',
          },
          {
            en: 'Their house is bigger than ours.',
            es: 'Su casa es más grande que la nuestra.',
          },
          {
            en: "Take an umbrella, it's raining.",
            es: 'Lleva un paraguas, está lloviendo.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Is raining a lot.',
            right: 'It is raining a lot.',
            why: "El sujeto 'it' es obligatorio en inglés.",
            esNote: 'En inglés siempre se pone el sujeto, aunque en español se omita.',
          },
          {
            wrong: 'This is the book of me.',
            right: 'This is my book. / This book is mine.',
            why: "La posesión usa my/mine, no 'of me'.",
            esNote: "No se traduce 'de mí'; usa my (mi) o mine (mío).",
          },
          {
            wrong: 'She loves he.',
            right: 'She loves him.',
            why: 'Tras el verbo se usa el pronombre de objeto.',
            esNote: 'Después del verbo: me, him, her, us, them.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-pronouns-imperatives-ex1',
            prompt: "Choose: I don't know ___. (a él)",
            options: ['he', 'him', 'his'],
            answer: 1,
            explain: 'Objeto = him.',
          },
          {
            kind: 'cloze',
            id: 'a1-pronouns-imperatives-ex2',
            before: "That bag isn't mine, it's ",
            after: '. (de ella)',
            answers: ['hers'],
            explain: 'Pronombre posesivo = hers.',
            hint: 'pronombre posesivo',
          },
          {
            kind: 'correct',
            id: 'a1-pronouns-imperatives-ex3',
            wrong: 'Please gives me the salt.',
            answers: ['Please give me the salt.'],
            explain: 'El imperativo usa el verbo base.',
          },
          {
            kind: 'order',
            id: 'a1-pronouns-imperatives-ex4',
            tokens: ["don't", 'open', 'the', 'door'],
            answer: "Don't open the door.",
            explain: "Imperativo negativo: Don't + verbo.",
          },
          {
            kind: 'translate',
            id: 'a1-pronouns-imperatives-ex5',
            es: 'Este es mi coche y aquel es el tuyo.',
            answers: ['This is my car and that is yours.', 'This is my car and that one is yours.'],
            explain: 'my (adjetivo) + yours (pronombre).',
          },
          {
            kind: 'dictation',
            id: 'a1-pronouns-imperatives-ex6',
            text: 'Turn off your phone, please.',
            explain: 'Imperativo + adjetivo posesivo your.',
          },
          {
            kind: 'mcq',
            id: 'a1-pronouns-imperatives-ex7',
            prompt: 'Which sentence has the correct subject?',
            options: ['Is cold today.', 'It is cold today.', 'Cold is today.'],
            answer: 1,
            explain: "El sujeto 'it' es obligatorio.",
          },
        ],
      },
      {
        id: 'a1-articles-nouns',
        level: 'A1',
        title: 'Artículos, demostrativos, plurales y sustantivos contables',
        summary:
          'Domina a/an/the y el artículo cero, los demostrativos this/that, los plurales, la posición del adjetivo y los cuantificadores some/any, how much/how many.',
        sections: [
          {
            heading: 'Artículos a/an/the y cero',
            body: 'Usa **a** antes de sonido consonante (*a dog*) y **an** antes de sonido vocálico (*an apple*). **The** es el artículo definido (algo específico). Usamos **artículo cero** (nada) con plurales y sustantivos incontables en sentido general: *I like music, Cats are nice*.',
            examples: [
              {
                en: 'I have a brother and an uncle.',
                es: 'Tengo un hermano y un tío.',
              },
              {
                en: 'The car outside is mine.',
                es: 'El coche de fuera es el mío.',
              },
              {
                en: 'Dogs are friendly animals.',
                es: 'Los perros son animales amistosos.',
              },
            ],
          },
          {
            heading: 'Demostrativos, plurales y adjetivos',
            body: 'Los **demostrativos**: **this/that** (singular), **these/those** (plural). Los **plurales** normalmente añaden **-s** (*book → books*); algunos son irregulares (*child → children, man → men*). El **adjetivo va antes del sustantivo** y **no cambia**: *a big house, two big houses*.',
            examples: [
              {
                en: 'This book is interesting.',
                es: 'Este libro es interesante.',
              },
              {
                en: 'Those shoes are expensive.',
                es: 'Esos zapatos son caros.',
              },
              {
                en: 'She has three small children.',
                es: 'Ella tiene tres niños pequeños.',
              },
            ],
          },
          {
            heading: 'Contables, incontables, some/any, how much/many',
            body: 'Los sustantivos **contables** se pueden contar (*one apple, two apples*); los **incontables** no (*water, money, rice*). Usa **some** en afirmativo y **any** en negativos y preguntas. Para cantidad pregunta **how many** (contables) o **how much** (incontables).',
            examples: [
              {
                en: 'There is some milk in the fridge.',
                es: 'Hay algo de leche en la nevera.',
              },
              {
                en: "I don't have any money.",
                es: 'No tengo nada de dinero.',
              },
              {
                en: 'How many apples do you want?',
                es: '¿Cuántas manzanas quieres?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Cuantificadores',
            columns: ['Tipo', 'Afirmativo', 'Negativo/Pregunta', 'Cantidad'],
            rows: [
              ['Contable (plural)', 'some apples', 'any apples', 'how many'],
              ['Incontable', 'some water', 'any water', 'how much'],
            ],
          },
        ],
        examples: [
          {
            en: "I'd like an orange and a banana.",
            es: 'Me gustaría una naranja y un plátano.',
          },
          {
            en: 'These photos are beautiful.',
            es: 'Estas fotos son preciosas.',
          },
          {
            en: 'We need some bread and some eggs.',
            es: 'Necesitamos pan y huevos.',
          },
          {
            en: 'How much sugar do you take?',
            es: '¿Cuánta azúcar tomas?',
          },
          {
            en: "There aren't any chairs in this room.",
            es: 'No hay sillas en esta sala.',
          },
          {
            en: 'He bought two red cars.',
            es: 'Él compró dos coches rojos.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She has two cars red.',
            right: 'She has two red cars.',
            why: 'El adjetivo va antes del sustantivo.',
            esNote: "En inglés el adjetivo va delante: 'red cars', no 'cars red'.",
          },
          {
            wrong: 'I have a informations.',
            right: 'I have some information.',
            why: "'information' es incontable: sin -s y sin 'a'.",
            esNote: 'Palabras como information, advice, money no tienen plural.',
          },
          {
            wrong: 'How much books do you have?',
            right: 'How many books do you have?',
            why: "'books' es contable: how many.",
            esNote: 'how many para contables, how much para incontables.',
          },
          {
            wrong: "I don't have some money.",
            right: "I don't have any money.",
            why: "En negativo se usa 'any'.",
            esNote: 'some en afirmativo; any en negativos y preguntas.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-articles-nouns-ex1',
            prompt: 'Choose: I saw ___ elephant at the zoo.',
            options: ['a', 'an', 'the'],
            answer: 1,
            explain: 'elephant empieza por sonido vocálico = an.',
          },
          {
            kind: 'cloze',
            id: 'a1-articles-nouns-ex2',
            before: 'Are there ',
            after: ' eggs in the fridge?',
            answers: ['any'],
            explain: 'Pregunta = any.',
            hint: 'pregunta',
          },
          {
            kind: 'correct',
            id: 'a1-articles-nouns-ex3',
            wrong: 'I bought three book yesterday.',
            answers: ['I bought three books yesterday.'],
            explain: 'Plural = books.',
          },
          {
            kind: 'order',
            id: 'a1-articles-nouns-ex4',
            tokens: ['she', 'has', 'a', 'beautiful', 'white', 'dress'],
            answer: 'She has a beautiful white dress.',
            explain: 'Adjetivos antes del sustantivo.',
          },
          {
            kind: 'translate',
            id: 'a1-articles-nouns-ex5',
            es: '¿Cuánta agua bebes al día?',
            answers: ['How much water do you drink a day?', 'How much water do you drink per day?'],
            explain: 'water es incontable = how much.',
          },
          {
            kind: 'dictation',
            id: 'a1-articles-nouns-ex6',
            text: "There is some cheese, but there isn't any milk.",
            explain: 'some en afirmativo, any en negativo.',
          },
          {
            kind: 'mcq',
            id: 'a1-articles-nouns-ex7',
            prompt: "Choose the correct plural of 'child'.",
            options: ['childs', 'children', 'childes'],
            answer: 1,
            explain: 'child es irregular: children.',
          },
        ],
      },
      {
        id: 'a1-comparatives-prepositions',
        level: 'A1',
        title: 'Comparativos, superlativos, preposiciones y conjunciones',
        summary:
          'Compara cosas con -er/more y the -est/most, ubica con preposiciones de lugar y tiempo, y une ideas con and, but y because.',
        sections: [
          {
            heading: 'Comparativos y superlativos',
            body: 'Adjetivos **cortos**: comparativo **-er** + than (*taller than*), superlativo **the -est** (*the tallest*). Adjetivos **largos**: **more** + adjetivo + than (*more expensive than*), **the most** (*the most expensive*). Irregulares: *good → better → the best; bad → worse → the worst*.',
            examples: [
              {
                en: 'My brother is taller than me.',
                es: 'Mi hermano es más alto que yo.',
              },
              {
                en: 'This is the most interesting book.',
                es: 'Este es el libro más interesante.',
              },
              {
                en: 'Today is better than yesterday.',
                es: 'Hoy es mejor que ayer.',
              },
            ],
          },
          {
            heading: 'Preposiciones de lugar y tiempo',
            body: "**Lugar**: **in** (dentro: in the box), **on** (sobre: on the table), **at** (en un punto: at the door). **Tiempo**: **in** (meses, años: in May), **on** (días: on Monday), **at** (horas: at 5 o'clock).",
            examples: [
              {
                en: 'The keys are on the table.',
                es: 'Las llaves están sobre la mesa.',
              },
              {
                en: "We meet at three o'clock.",
                es: 'Nos vemos a las tres.',
              },
              {
                en: 'My birthday is in June.',
                es: 'Mi cumpleaños es en junio.',
              },
            ],
          },
          {
            heading: 'Conjunciones and, but, because',
            body: "**And** une ideas (y), **but** muestra contraste (pero), **because** da una razón (porque). *I'm tired but happy. I stayed home because it was raining.*",
            examples: [
              {
                en: 'I like tea and coffee.',
                es: 'Me gusta el té y el café.',
              },
              {
                en: 'She is small but strong.',
                es: 'Ella es pequeña pero fuerte.',
              },
              {
                en: "We didn't go out because it was cold.",
                es: 'No salimos porque hacía frío.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Comparativos y superlativos',
            columns: ['Adjetivo', 'Comparativo', 'Superlativo'],
            rows: [
              ['tall (corto)', 'taller than', 'the tallest'],
              ['big (corto)', 'bigger than', 'the biggest'],
              ['expensive (largo)', 'more expensive than', 'the most expensive'],
              ['good (irregular)', 'better than', 'the best'],
              ['bad (irregular)', 'worse than', 'the worst'],
            ],
          },
          {
            caption: 'Preposiciones in / on / at',
            columns: ['Preposición', 'Lugar', 'Tiempo'],
            rows: [
              ['in', 'in the room', 'in May, in 2025'],
              ['on', 'on the wall', 'on Monday'],
              ['at', 'at the bus stop', "at 6 o'clock"],
            ],
          },
        ],
        examples: [
          {
            en: 'This phone is cheaper than that one.',
            es: 'Este teléfono es más barato que ese.',
          },
          {
            en: 'Mount Everest is the highest mountain in the world.',
            es: 'El Everest es la montaña más alta del mundo.',
          },
          {
            en: 'The cat is under the table.',
            es: 'El gato está debajo de la mesa.',
          },
          {
            en: 'I work from Monday to Friday.',
            es: 'Trabajo de lunes a viernes.',
          },
          {
            en: 'She was sad because she lost her job.',
            es: 'Estaba triste porque perdió su trabajo.',
          },
          {
            en: 'He is fast but careful.',
            es: 'Él es rápido pero cuidadoso.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She is more tall than me.',
            right: 'She is taller than me.',
            why: "Adjetivos cortos usan -er, no 'more'.",
            esNote: "Con adjetivos cortos: taller, bigger; no 'more tall'.",
          },
          {
            wrong: 'I am more big than you.',
            right: 'I am bigger than you.',
            why: 'big es corto: bigger (se dobla la g).',
            esNote: 'Adjetivos cortos terminados en vocal+consonante doblan la consonante.',
          },
          {
            wrong: 'I see you in Monday at the morning.',
            right: "I'll see you on Monday in the morning.",
            why: 'on con días, in con partes del día.',
            esNote: 'on Monday, in the morning, at night: cada preposición tiene su uso.',
          },
          {
            wrong: 'I stayed home because of it was raining.',
            right: 'I stayed home because it was raining.',
            why: "'because' va con una oración; 'because of' va con un sustantivo.",
            esNote: 'because + sujeto + verbo; because of + sustantivo.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a1-comparatives-prepositions-ex1',
            prompt: 'Choose: A train is ___ than a bike.',
            options: ['fast', 'faster', 'the fastest'],
            answer: 1,
            explain: 'Comparativo corto = faster.',
          },
          {
            kind: 'cloze',
            id: 'a1-comparatives-prepositions-ex2',
            before: 'The meeting is ',
            after: " 9 o'clock.",
            answers: ['at'],
            explain: 'Horas = at.',
            hint: 'hora',
          },
          {
            kind: 'correct',
            id: 'a1-comparatives-prepositions-ex3',
            wrong: 'This is the more expensive car in the shop.',
            answers: ['This is the most expensive car in the shop.'],
            explain: 'Superlativo largo = the most.',
          },
          {
            kind: 'order',
            id: 'a1-comparatives-prepositions-ex4',
            tokens: ['I', 'was', 'tired', 'but', 'I', 'finished', 'the', 'work'],
            answer: 'I was tired but I finished the work.',
            explain: 'but muestra contraste.',
          },
          {
            kind: 'translate',
            id: 'a1-comparatives-prepositions-ex5',
            es: 'No fuimos a la playa porque estaba lloviendo.',
            answers: ["We didn't go to the beach because it was raining."],
            explain: 'because da la razón.',
          },
          {
            kind: 'dictation',
            id: 'a1-comparatives-prepositions-ex6',
            text: 'The book is on the table next to the lamp.',
            explain: 'on para superficies.',
          },
          {
            kind: 'mcq',
            id: 'a1-comparatives-prepositions-ex7',
            prompt: 'Choose the correct preposition: My birthday is ___ December.',
            options: ['on', 'at', 'in'],
            answer: 2,
            explain: 'Meses = in.',
          },
        ],
      },
    ],
  },
  {
    level: 'A2',
    title: 'A2 · Building Real Conversations',
    blurb:
      'Connect past, present and future, compare things, and react naturally — the grammar that turns words into conversation.',
    lessons: [
      {
        id: 'a2-present-perfect',
        level: 'A2',
        title: 'Present Perfect: experiences and recent news',
        summary:
          'Use have/has + past participle to talk about life experiences (ever/never) and recent or unfinished situations (already/yet, for/since).',
        sections: [
          {
            heading: 'Form and basic use',
            body: 'The **present perfect** is **have/has + past participle**. We use it for experiences in our life without saying exactly when, and for things that started in the past and still matter now. With *he/she/it* use **has**; with everything else use **have**.',
            examples: [
              {
                en: 'I have visited London twice.',
                es: 'He visitado Londres dos veces.',
              },
              {
                en: 'She has lost her keys.',
                es: 'Ha perdido las llaves.',
              },
            ],
          },
          {
            heading: 'ever, never, already, yet',
            body: 'Use **ever** in questions about experience and **never** for none. Use **already** for something done sooner than expected, and **yet** at the end of questions and negatives for something expected but not done. Note: **never** is already negative, so the verb stays positive.',
            examples: [
              {
                en: 'Have you ever eaten sushi?',
                es: '¿Alguna vez has comido sushi?',
              },
              {
                en: 'I have never been to Japan.',
                es: 'Nunca he estado en Japón.',
              },
              {
                en: 'We have already finished.',
                es: 'Ya hemos terminado.',
              },
              {
                en: "He hasn't called yet.",
                es: 'Todavía no ha llamado.',
              },
            ],
          },
          {
            heading: 'for and since',
            body: "Use **for** with a period of time (*for three years*) and **since** with a starting point (*since 2020*). Both answer 'how long' for situations that continue up to now.",
            examples: [
              {
                en: 'I have lived here for ten years.',
                es: 'He vivido aquí durante diez años.',
              },
              {
                en: 'We have known each other since 2015.',
                es: 'Nos conocemos desde 2015.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Present perfect forms',
            columns: ['Subject', 'Auxiliary', 'Example'],
            rows: [
              ['I / you / we / they', "have / haven't", 'I have seen it.'],
              ['he / she / it', "has / hasn't", 'She has gone home.'],
              ['Question', 'Have/Has + subject', 'Have you finished?'],
            ],
          },
        ],
        examples: [
          {
            en: 'Have you ever broken a bone?',
            es: '¿Alguna vez te has roto un hueso?',
          },
          {
            en: 'They have already left the office.',
            es: 'Ya se han ido de la oficina.',
          },
          {
            en: "I haven't seen that film yet.",
            es: 'Todavía no he visto esa película.',
          },
          {
            en: 'She has worked here since March.',
            es: 'Trabaja aquí desde marzo.',
          },
          {
            en: 'We have had this car for five years.',
            es: 'Tenemos este coche desde hace cinco años.',
          },
          {
            en: 'He has never tried Thai food.',
            es: 'Nunca ha probado la comida tailandesa.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have visited Paris yesterday.',
            right: 'I visited Paris yesterday.',
            why: 'With a finished past time (yesterday, last week), use the past simple, not the present perfect.',
            esNote: 'Si dices cuándo pasó exactamente, usa pasado simple, no present perfect.',
          },
          {
            wrong: 'I live here since 2010.',
            right: 'I have lived here since 2010.',
            why: 'For a situation continuing from the past to now, use the present perfect, not the present simple.',
            esNote: "El español usa presente ('vivo desde'), pero el inglés usa present perfect.",
          },
          {
            wrong: 'I have lived here since ten years.',
            right: 'I have lived here for ten years.',
            why: "Use 'for' with a length of time and 'since' with a starting point.",
            esNote: "'For' = duración; 'since' = punto de inicio.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-pp-ex1',
            prompt: 'Choose the correct sentence.',
            options: [
              'She has went to the bank.',
              'She has gone to the bank.',
              'She have gone to the bank.',
            ],
            answer: 1,
            explain: "Use 'has' (third person) + the past participle 'gone', not 'went'.",
          },
          {
            kind: 'cloze',
            id: 'a2-pp-ex2',
            before: 'I have known her',
            after: 'we were children.',
            answers: ['since'],
            hint: 'starting point',
            explain: "'Since' is used with a point in time (when we were children).",
          },
          {
            kind: 'cloze',
            id: 'a2-pp-ex3',
            before: 'Have you finished your homework',
            after: '?',
            answers: ['yet'],
            hint: 'end of a question',
            explain: "'Yet' goes at the end of questions and negatives.",
          },
          {
            kind: 'correct',
            id: 'a2-pp-ex4',
            wrong: 'We have see this movie last night.',
            answers: ['We saw this movie last night.', 'We watched this movie last night.'],
            explain: "'Last night' is a finished time, so use the past simple.",
          },
          {
            kind: 'translate',
            id: 'a2-pp-ex5',
            es: 'Nunca he estado en China.',
            answers: ['I have never been to China.', "I've never been to China."],
            explain: "'Have never been' expresses an experience that has not happened.",
          },
          {
            kind: 'order',
            id: 'a2-pp-ex6',
            tokens: ['They', 'have', 'already', 'eaten', 'dinner'],
            answer: 'They have already eaten dinner.',
            explain: "'Already' goes between the auxiliary and the participle.",
          },
          {
            kind: 'dictation',
            id: 'a2-pp-ex7',
            text: "I haven't called my parents yet.",
            explain: "Negative present perfect with 'yet' at the end.",
          },
        ],
      },
      {
        id: 'a2-future-forms',
        level: 'A2',
        title: 'The Future: will, going to and arrangements',
        summary:
          "Choose between 'will' for decisions and predictions, 'going to' for plans and evidence, and the present continuous for fixed arrangements.",
        sections: [
          {
            heading: 'will',
            body: "Use **will + base verb** for instant decisions, offers, promises and predictions based on opinion. The negative is **won't**. It does not change with the subject.",
            examples: [
              {
                en: "I'll help you with that.",
                es: 'Te ayudaré con eso.',
              },
              {
                en: 'I think it will rain tomorrow.',
                es: 'Creo que lloverá mañana.',
              },
            ],
          },
          {
            heading: 'going to',
            body: 'Use **be going to + base verb** for plans and intentions you already have, and for predictions based on present evidence you can see.',
            examples: [
              {
                en: 'We are going to buy a house.',
                es: 'Vamos a comprar una casa.',
              },
              {
                en: "Look at those clouds — it's going to rain.",
                es: 'Mira esas nubes; va a llover.',
              },
            ],
          },
          {
            heading: 'Present continuous for arrangements',
            body: 'Use the **present continuous** (am/is/are + -ing) for **fixed arrangements** with a time or place already decided, usually with another person. A future time word makes it clearly future.',
            examples: [
              {
                en: "I'm meeting Sara at six tomorrow.",
                es: 'Me reúno con Sara a las seis mañana.',
              },
              {
                en: "They're flying to Rome on Friday.",
                es: 'Vuelan a Roma el viernes.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Which future form?',
            columns: ['Situation', 'Form', 'Example'],
            rows: [
              ['Instant decision / offer', 'will', "I'll get it!"],
              ['Plan / intention', 'going to', "I'm going to study tonight."],
              ['Evidence prediction', 'going to', "She's going to fall!"],
              ['Fixed arrangement', 'present continuous', "We're leaving at 8."],
            ],
          },
        ],
        examples: [
          {
            en: "Don't worry, I'll call you later.",
            es: 'No te preocupes, te llamaré luego.',
          },
          {
            en: "She's going to start a new job next month.",
            es: 'Va a empezar un trabajo nuevo el mes que viene.',
          },
          {
            en: "We're having dinner with them on Saturday.",
            es: 'Cenamos con ellos el sábado.',
          },
          {
            en: "I think they'll win the match.",
            es: 'Creo que ganarán el partido.',
          },
          {
            en: "Be careful, you're going to drop it!",
            es: 'Ten cuidado, ¡lo vas a tirar!',
          },
          {
            en: "The train leaves at nine, so I'm taking the early one.",
            es: 'El tren sale a las nueve, así que cojo el temprano.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I will to call you tomorrow.',
            right: 'I will call you tomorrow.',
            why: "After 'will' use the base verb with no 'to'.",
            esNote: "Después de 'will' no se pone 'to'.",
          },
          {
            wrong: 'Tomorrow I go to the dentist at 5.',
            right: "Tomorrow I'm going to the dentist at 5.",
            why: 'For a fixed arrangement, use the present continuous, not the present simple.',
            esNote: 'Para una cita ya fijada, usa el present continuous.',
          },
          {
            wrong: 'Look! It will rain.',
            right: "Look! It's going to rain.",
            why: "With present evidence (clouds you can see), use 'going to', not 'will'.",
            esNote: "Si hay pruebas visibles ahora, usa 'going to'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-fut-ex1',
            prompt: 'The phone is ringing. Which is best?',
            options: ["I'm going to answer it.", "I'll answer it.", 'I answer it.'],
            answer: 1,
            explain: "An instant decision made at the moment of speaking uses 'will'.",
          },
          {
            kind: 'cloze',
            id: 'a2-fut-ex2',
            before: 'Careful! You',
            after: 'drop those plates.',
            answers: ['are going to', "'re going to"],
            hint: 'prediction from evidence',
            explain: "Present evidence (you can see it) calls for 'going to'.",
          },
          {
            kind: 'correct',
            id: 'a2-fut-ex3',
            wrong: 'We will to travel to Spain in July.',
            answers: [
              'We will travel to Spain in July.',
              "We're going to travel to Spain in July.",
              'We are going to travel to Spain in July.',
            ],
            explain: "No 'to' after 'will'; or use 'going to' for a plan.",
          },
          {
            kind: 'translate',
            id: 'a2-fut-ex4',
            es: 'Me reúno con el médico mañana a las diez.',
            answers: [
              "I'm meeting the doctor at ten tomorrow.",
              'I am meeting the doctor at ten tomorrow.',
              "I'm meeting the doctor tomorrow at ten.",
            ],
            explain: 'A fixed arrangement uses the present continuous.',
          },
          {
            kind: 'order',
            id: 'a2-fut-ex5',
            tokens: ['She', 'is', 'going', 'to', 'learn', 'French'],
            answer: 'She is going to learn French.',
            explain: "'Going to' + base verb expresses an intention.",
          },
          {
            kind: 'mcq',
            id: 'a2-fut-ex6',
            prompt: 'Which sentence describes a plan you already decided?',
            options: [
              "I'll maybe study tonight.",
              "I'm going to study tonight.",
              'I study tonight.',
            ],
            answer: 1,
            explain: "'Going to' shows a decision already made.",
          },
          {
            kind: 'dictation',
            id: 'a2-fut-ex7',
            text: "They're flying to New York on Monday.",
            explain: 'Present continuous for a fixed future arrangement.',
          },
        ],
      },
      {
        id: 'a2-past-continuous',
        level: 'A2',
        title: 'Past Continuous with when and while',
        summary:
          'Describe actions in progress in the past and interrupt them with a shorter action using when and while.',
        sections: [
          {
            heading: 'Form and meaning',
            body: 'The **past continuous** is **was/were + -ing**. It describes an action that was in progress at a moment in the past. Use **was** with I/he/she/it and **were** with you/we/they.',
            examples: [
              {
                en: 'At 8 p.m. I was watching TV.',
                es: 'A las 8 de la tarde estaba viendo la tele.',
              },
              {
                en: 'They were sleeping when we arrived.',
                es: 'Estaban durmiendo cuando llegamos.',
              },
            ],
          },
          {
            heading: 'when and while',
            body: 'A longer background action (past continuous) is often interrupted by a shorter action (**past simple**). Use **while** before the long action and **when** before the short one. Two long actions happening together also use **while**.',
            examples: [
              {
                en: 'While I was cooking, the phone rang.',
                es: 'Mientras cocinaba, sonó el teléfono.',
              },
              {
                en: 'I was reading when the lights went out.',
                es: 'Estaba leyendo cuando se fue la luz.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past continuous vs past simple',
            columns: ['Tense', 'Use', 'Example'],
            rows: [
              ['Past continuous', 'longer / background action', 'I was driving home.'],
              ['Past simple', 'shorter / interrupting action', '...when I saw the accident.'],
            ],
          },
        ],
        examples: [
          {
            en: 'It was raining when I left the house.',
            es: 'Llovía cuando salí de casa.',
          },
          {
            en: 'While she was studying, her brother was playing.',
            es: 'Mientras ella estudiaba, su hermano jugaba.',
          },
          {
            en: 'We were having dinner when you called.',
            es: 'Estábamos cenando cuando llamaste.',
          },
          {
            en: 'What were you doing at midnight?',
            es: '¿Qué estabas haciendo a medianoche?',
          },
          {
            en: 'He fell while he was running.',
            es: 'Se cayó mientras corría.',
          },
          {
            en: "I wasn't listening, sorry.",
            es: 'No estaba escuchando, perdona.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I was see a film when she arrived.',
            right: 'I was seeing a film when she arrived.',
            why: 'The past continuous needs the -ing form after was/were.',
            esNote: "Después de 'was/were' va el verbo en -ing.",
          },
          {
            wrong: 'When I cooked, the phone was ringing.',
            right: 'While I was cooking, the phone rang.',
            why: 'The long background action takes the past continuous; the sudden one takes the past simple.',
            esNote:
              'La acción larga va en past continuous; la corta que interrumpe, en past simple.',
          },
          {
            wrong: 'They were arrive at six.',
            right: 'They arrived at six.',
            why: 'A single completed action at a clear time is past simple, not past continuous.',
            esNote: 'Una acción puntual y completa va en pasado simple.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-pc-ex1',
            before: 'While we',
            after: '(walk) home, it started to snow.',
            answers: ['were walking'],
            explain: 'The long background action takes the past continuous.',
          },
          {
            kind: 'mcq',
            id: 'a2-pc-ex2',
            prompt: 'Choose the correct sentence.',
            options: [
              'I was reading when she called.',
              'I read when she was calling.',
              'I was read when she called.',
            ],
            answer: 0,
            explain: 'Long action (reading) = continuous; interruption (called) = simple.',
          },
          {
            kind: 'correct',
            id: 'a2-pc-ex3',
            wrong: 'She was cook dinner when I arrived.',
            answers: ['She was cooking dinner when I arrived.'],
            explain: "Use the -ing form after 'was'.",
          },
          {
            kind: 'translate',
            id: 'a2-pc-ex4',
            es: '¿Qué estabas haciendo a las diez?',
            answers: ['What were you doing at ten?', "What were you doing at ten o'clock?"],
            explain: "Past continuous question with 'were'.",
          },
          {
            kind: 'order',
            id: 'a2-pc-ex5',
            tokens: ['The', 'baby', 'was', 'sleeping', 'when', 'we', 'got', 'home'],
            answer: 'The baby was sleeping when we got home.',
            explain: 'Background action in continuous, interruption in simple.',
          },
          {
            kind: 'cloze',
            id: 'a2-pc-ex6',
            before: 'I was driving home',
            after: 'I saw the accident.',
            answers: ['when'],
            hint: 'before the short action',
            explain: "'When' introduces the short, interrupting action.",
          },
          {
            kind: 'dictation',
            id: 'a2-pc-ex7',
            text: 'While he was working, the power went out.',
            explain: "'While' + past continuous, then past simple.",
          },
        ],
      },
      {
        id: 'a2-comparatives-superlatives',
        level: 'A2',
        title: 'Comparatives, Superlatives and as...as',
        summary:
          'Compare two things with -er/more...than, find the top with the -est/most, and show equality with (not) as...as.',
        sections: [
          {
            heading: 'Comparatives with than',
            body: 'For short adjectives add **-er** (*cheaper, bigger*). For long adjectives use **more** (*more expensive*). Add **than** before the second thing. Some are irregular: good→**better**, bad→**worse**.',
            examples: [
              {
                en: 'This car is cheaper than that one.',
                es: 'Este coche es más barato que ese.',
              },
              {
                en: 'She is more careful than her brother.',
                es: 'Ella es más cuidadosa que su hermano.',
              },
            ],
          },
          {
            heading: 'Superlatives',
            body: 'For short adjectives add **the ...-est** (*the cheapest*); for long ones use **the most** (*the most expensive*). Irregulars: good→**the best**, bad→**the worst**.',
            examples: [
              {
                en: "It's the cheapest phone in the shop.",
                es: 'Es el teléfono más barato de la tienda.',
              },
              {
                en: 'She is the best student in the class.',
                es: 'Es la mejor estudiante de la clase.',
              },
            ],
          },
          {
            heading: '(not) as ... as',
            body: 'Use **as + adjective + as** to say two things are equal, and **not as ... as** to say one is less. The adjective stays in its base form.',
            examples: [
              {
                en: 'He is as tall as his father.',
                es: 'Es tan alto como su padre.',
              },
              {
                en: "Today isn't as cold as yesterday.",
                es: 'Hoy no hace tanto frío como ayer.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Comparative and superlative forms',
            columns: ['Adjective', 'Comparative', 'Superlative'],
            rows: [
              ['cheap', 'cheaper', 'the cheapest'],
              ['big', 'bigger', 'the biggest'],
              ['expensive', 'more expensive', 'the most expensive'],
              ['good', 'better', 'the best'],
              ['bad', 'worse', 'the worst'],
            ],
          },
        ],
        examples: [
          {
            en: 'My new flat is bigger than the old one.',
            es: 'Mi piso nuevo es más grande que el viejo.',
          },
          {
            en: "This is the most interesting book I've read.",
            es: 'Es el libro más interesante que he leído.',
          },
          {
            en: 'Trains are faster than buses here.',
            es: 'Aquí los trenes son más rápidos que los autobuses.',
          },
          {
            en: "He's not as fast as he used to be.",
            es: 'No es tan rápido como antes.',
          },
          {
            en: 'It was the worst day of my life.',
            es: 'Fue el peor día de mi vida.',
          },
          {
            en: "Your coffee is as good as the café's.",
            es: 'Tu café es tan bueno como el de la cafetería.',
          },
        ],
        pitfalls: [
          {
            wrong: 'This is more cheap than that.',
            right: 'This is cheaper than that.',
            why: "Short adjectives take -er, not 'more'.",
            esNote: "Adjetivos cortos: -er, no 'more'.",
          },
          {
            wrong: 'She is more taller than me.',
            right: 'She is taller than me.',
            why: "Don't use 'more' together with an -er form — choose one.",
            esNote: "No combines 'more' con la terminación -er.",
          },
          {
            wrong: "It's the most big city in the country.",
            right: "It's the biggest city in the country.",
            why: "Short adjectives form the superlative with -est, not 'most'.",
            esNote: 'Superlativo de adjetivos cortos: the ...-est.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-cs-ex1',
            before: 'Mount Everest is the',
            after: '(high) mountain in the world.',
            answers: ['highest'],
            explain: 'Short adjective superlative: high → the highest.',
          },
          {
            kind: 'mcq',
            id: 'a2-cs-ex2',
            prompt: 'Choose the correct comparative.',
            options: ['more good', 'gooder', 'better'],
            answer: 2,
            explain: "'Good' is irregular: the comparative is 'better'.",
          },
          {
            kind: 'correct',
            id: 'a2-cs-ex3',
            wrong: 'This exercise is more easy than the last one.',
            answers: ['This exercise is easier than the last one.'],
            explain: "'Easy' is short, so use 'easier', not 'more easy'.",
          },
          {
            kind: 'translate',
            id: 'a2-cs-ex4',
            es: 'Hoy no hace tanto calor como ayer.',
            answers: [
              "Today isn't as hot as yesterday.",
              'Today is not as hot as yesterday.',
              "It isn't as hot today as yesterday.",
            ],
            explain: "'Not as ... as' shows one thing is less than another.",
          },
          {
            kind: 'order',
            id: 'a2-cs-ex5',
            tokens: ['She', 'is', 'as', 'tall', 'as', 'her', 'sister'],
            answer: 'She is as tall as her sister.',
            explain: "'as + adjective + as' shows equality.",
          },
          {
            kind: 'cloze',
            id: 'a2-cs-ex6',
            before: 'This restaurant is more expensive',
            after: 'the other one.',
            answers: ['than'],
            explain: "Comparatives are followed by 'than'.",
          },
          {
            kind: 'dictation',
            id: 'a2-cs-ex7',
            text: 'It was the most beautiful place I have ever seen.',
            explain: "Superlative with 'the most' for a long adjective.",
          },
        ],
      },
      {
        id: 'a2-adverbs-of-manner',
        level: 'A2',
        title: 'Adverbs of Manner and Word Order',
        summary:
          'Form adverbs from adjectives, describe how actions happen, and place them correctly in the sentence.',
        sections: [
          {
            heading: 'Forming adverbs',
            body: 'Most **adverbs of manner** come from an adjective + **-ly** (*quick → quickly*). Adjectives ending in -y change to **-ily** (*easy → easily*). Some are irregular: good→**well**, fast→**fast**, hard→**hard**.',
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
            body: "An **adjective** describes a noun (*a careful driver*). An **adverb** describes a verb — how the action is done (*he drives carefully*). 'Good' is the adjective; 'well' is the adverb.",
            examples: [
              {
                en: 'She is a good singer. She sings well.',
                es: 'Es una buena cantante. Canta bien.',
              },
              {
                en: 'It was a quiet room. They talked quietly.',
                es: 'Era una sala silenciosa. Hablaban en voz baja.',
              },
            ],
          },
          {
            heading: 'Position',
            body: 'Adverbs of manner usually go **after the verb** or **after the object**, not between the verb and the object. So we say *I speak English well*, not *I speak well English*.',
            examples: [
              {
                en: 'He opened the door slowly.',
                es: 'Abrió la puerta despacio.',
              },
              {
                en: 'They finished the test quickly.',
                es: 'Terminaron el examen rápidamente.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Adjective to adverb',
            columns: ['Adjective', 'Adverb', 'Note'],
            rows: [
              ['quick', 'quickly', '+ -ly'],
              ['easy', 'easily', 'y → ily'],
              ['good', 'well', 'irregular'],
              ['fast', 'fast', 'no change'],
              ['hard', 'hard', 'no change'],
            ],
          },
        ],
        examples: [
          {
            en: 'Please speak slowly.',
            es: 'Por favor, habla despacio.',
          },
          {
            en: 'She answered the questions easily.',
            es: 'Respondió las preguntas con facilidad.',
          },
          {
            en: 'He works hard every day.',
            es: 'Trabaja duro todos los días.',
          },
          {
            en: 'The children played happily in the garden.',
            es: 'Los niños jugaban felizmente en el jardín.',
          },
          {
            en: 'I can swim well now.',
            es: 'Ahora sé nadar bien.',
          },
          {
            en: 'They waited patiently for the bus.',
            es: 'Esperaron el autobús con paciencia.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She sings very good.',
            right: 'She sings very well.',
            why: "To describe a verb you need the adverb 'well', not the adjective 'good'.",
            esNote: "Para describir el verbo usa 'well', no 'good'.",
          },
          {
            wrong: 'He speaks fluently English.',
            right: 'He speaks English fluently.',
            why: "Don't put the adverb between the verb and its object; put it after the object.",
            esNote: 'El adverbio va después del objeto, no entre el verbo y el objeto.',
          },
          {
            wrong: 'Drive careful!',
            right: 'Drive carefully!',
            why: "An adverb (carefully) is needed to modify the verb 'drive'.",
            esNote: 'El verbo necesita un adverbio (-ly), no un adjetivo.',
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-adv-ex1',
            before: 'He plays the guitar very',
            after: '.',
            answers: ['well'],
            hint: "irregular adverb of 'good'",
            explain: "The adverb of 'good' is 'well'.",
          },
          {
            kind: 'mcq',
            id: 'a2-adv-ex2',
            prompt: 'Which sentence is correct?',
            options: [
              'She speaks slowly Spanish.',
              'She speaks Spanish slowly.',
              'She slowly speaks Spanish well slowly.',
            ],
            answer: 1,
            explain: "The adverb goes after the object 'Spanish'.",
          },
          {
            kind: 'correct',
            id: 'a2-adv-ex3',
            wrong: 'They worked very hardly today.',
            answers: ['They worked very hard today.'],
            explain: "The adverb of 'hard' is 'hard'; 'hardly' means 'almost not'.",
          },
          {
            kind: 'translate',
            id: 'a2-adv-ex4',
            es: 'Conduce con cuidado.',
            answers: ['He drives carefully.', 'She drives carefully.', 'Drive carefully.'],
            explain: "'Carefully' is the adverb describing how he drives.",
          },
          {
            kind: 'order',
            id: 'a2-adv-ex5',
            tokens: ['She', 'answered', 'the', 'question', 'easily'],
            answer: 'She answered the question easily.',
            explain: 'The adverb of manner comes after the object.',
          },
          {
            kind: 'cloze',
            id: 'a2-adv-ex6',
            before: 'The team played',
            after: '(bad) and lost the game.',
            answers: ['badly'],
            explain: "The adverb of 'bad' is 'badly'.",
          },
          {
            kind: 'dictation',
            id: 'a2-adv-ex7',
            text: 'Please listen carefully to the instructions.',
            explain: "Adverb of manner 'carefully' after the verb phrase.",
          },
        ],
      },
      {
        id: 'a2-modals',
        level: 'A2',
        title: 'Modals: should, have to, must and might',
        summary:
          'Give advice with should, talk about obligation with have to/must, and express possibility with might.',
        sections: [
          {
            heading: 'should for advice',
            body: "Use **should + base verb** to give advice or an opinion. The negative is **shouldn't**. It is the same for all subjects.",
            examples: [
              {
                en: 'You should see a doctor.',
                es: 'Deberías ver a un médico.',
              },
              {
                en: "You shouldn't eat so much sugar.",
                es: 'No deberías comer tanto azúcar.',
              },
            ],
          },
          {
            heading: 'have to and must for obligation',
            body: "Use **have to** / **has to** for rules and obligations, and **must** for strong personal obligation. The negative **don't have to** means it is *not necessary*, while **mustn't** means it is *prohibited* — these are very different.",
            examples: [
              {
                en: 'I have to wear a uniform at work.',
                es: 'Tengo que llevar uniforme en el trabajo.',
              },
              {
                en: "You mustn't smoke here.",
                es: 'No debes fumar aquí.',
              },
              {
                en: "You don't have to come if you're tired.",
                es: 'No tienes que venir si estás cansado.',
              },
            ],
          },
          {
            heading: 'might for possibility',
            body: 'Use **might + base verb** to say something is possible but not certain. The negative is **might not**.',
            examples: [
              {
                en: 'It might rain later.',
                es: 'Puede que llueva luego.',
              },
              {
                en: 'She might not come to the party.',
                es: 'Puede que no venga a la fiesta.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Meaning of the modals',
            columns: ['Modal', 'Meaning', 'Example'],
            rows: [
              ['should', 'advice', 'You should rest.'],
              ['have to / must', 'obligation', 'I must finish this.'],
              ["don't have to", 'not necessary', "You don't have to pay."],
              ["mustn't", 'prohibited', "You mustn't park here."],
              ['might', 'possibility', 'We might go out.'],
            ],
          },
        ],
        examples: [
          {
            en: 'You should drink more water.',
            es: 'Deberías beber más agua.',
          },
          {
            en: 'Children must wear a seatbelt.',
            es: 'Los niños deben llevar cinturón.',
          },
          {
            en: 'I have to get up early tomorrow.',
            es: 'Tengo que levantarme temprano mañana.',
          },
          {
            en: "You don't have to finish it today.",
            es: 'No tienes que terminarlo hoy.',
          },
          {
            en: 'We might go to the beach this weekend.',
            es: 'Puede que vayamos a la playa este fin de semana.',
          },
          {
            en: "You mustn't touch that machine.",
            es: 'No debes tocar esa máquina.',
          },
        ],
        pitfalls: [
          {
            wrong: 'You should to study more.',
            right: 'You should study more.',
            why: "After a modal like 'should' use the base verb with no 'to'.",
            esNote: "Tras 'should', 'must', 'might' no se usa 'to'.",
          },
          {
            wrong: "You don't have to smoke in here (meaning: it's forbidden).",
            right: "You mustn't smoke in here.",
            why: "'Don't have to' means not necessary; 'mustn't' means prohibited.",
            esNote: "'Don't have to' = no es necesario; 'mustn't' = está prohibido.",
          },
          {
            wrong: 'She musts work on Sunday.',
            right: 'She has to work on Sunday.',
            why: "Modals don't take -s, and 'must' has no third-person form; use 'has to' here.",
            esNote: "Los modales no llevan -s; usa 'has to' en tercera persona.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-mod-ex1',
            prompt: "Your friend is sick. What's the best advice?",
            options: [
              'You might stay in bed.',
              'You should stay in bed.',
              "You mustn't stay in bed.",
            ],
            answer: 1,
            explain: "'Should' is used for advice.",
          },
          {
            kind: 'cloze',
            id: 'a2-mod-ex2',
            before: "It's a secret. You",
            after: 'tell anyone! (prohibition)',
            answers: ["mustn't", 'must not'],
            explain: "Prohibition is expressed with 'mustn't'.",
          },
          {
            kind: 'correct',
            id: 'a2-mod-ex3',
            wrong: 'You should to call her tonight.',
            answers: ['You should call her tonight.'],
            explain: "No 'to' after 'should'.",
          },
          {
            kind: 'translate',
            id: 'a2-mod-ex4',
            es: 'Puede que llueva esta tarde.',
            answers: ['It might rain this afternoon.', 'It may rain this afternoon.'],
            explain: "'Might' expresses possibility.",
          },
          {
            kind: 'cloze',
            id: 'a2-mod-ex5',
            before: "It's Saturday, so I",
            after: 'go to work. (not necessary)',
            answers: ["don't have to"],
            explain: "'Don't have to' = it is not necessary.",
          },
          {
            kind: 'order',
            id: 'a2-mod-ex6',
            tokens: ['You', 'should', 'see', 'a', 'dentist'],
            answer: 'You should see a dentist.',
            explain: "'Should' + base verb for advice.",
          },
          {
            kind: 'dictation',
            id: 'a2-mod-ex7',
            text: 'I have to leave early today.',
            explain: "'Have to' expresses obligation.",
          },
        ],
      },
      {
        id: 'a2-conditionals',
        level: 'A2',
        title: 'Zero and First Conditional',
        summary:
          'Talk about facts that are always true (zero) and likely future results (first conditional) using if.',
        sections: [
          {
            heading: 'Zero conditional',
            body: 'Use the **zero conditional** for things that are always true: **If + present simple, present simple**. You can replace *if* with **when** because the result is automatic.',
            examples: [
              {
                en: 'If you heat ice, it melts.',
                es: 'Si calientas el hielo, se derrite.',
              },
              {
                en: 'When it rains, the ground gets wet.',
                es: 'Cuando llueve, el suelo se moja.',
              },
            ],
          },
          {
            heading: 'First conditional',
            body: "Use the **first conditional** for a likely future situation and its result: **If + present simple, will + base verb**. The 'if' part stays in the present — never use 'will' after 'if' here.",
            examples: [
              {
                en: "If it rains, we'll stay home.",
                es: 'Si llueve, nos quedaremos en casa.',
              },
              {
                en: "She'll pass if she studies.",
                es: 'Aprobará si estudia.',
              },
            ],
          },
          {
            heading: 'Word order and commas',
            body: "You can start with either clause. When the **if-clause** comes first, use a **comma**; when it comes second, no comma is needed. You can also use **unless** to mean 'if not'.",
            examples: [
              {
                en: "We'll be late unless we hurry.",
                es: 'Llegaremos tarde a menos que nos demos prisa.',
              },
              {
                en: "If you call me, I'll answer.",
                es: 'Si me llamas, contestaré.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conditional structures',
            columns: ['Type', 'If-clause', 'Main clause'],
            rows: [
              ['Zero', 'If/When + present', 'present simple'],
              ['First', 'If + present', 'will + base verb'],
            ],
          },
        ],
        examples: [
          {
            en: 'If you mix blue and yellow, you get green.',
            es: 'Si mezclas azul y amarillo, obtienes verde.',
          },
          {
            en: "If we leave now, we'll catch the train.",
            es: 'Si salimos ahora, cogeremos el tren.',
          },
          {
            en: "I'll help you if you ask me.",
            es: 'Te ayudaré si me lo pides.',
          },
          {
            en: 'When you press this button, the machine starts.',
            es: 'Cuando aprietas este botón, la máquina arranca.',
          },
          {
            en: "Unless you hurry, you'll miss the bus.",
            es: 'A menos que te des prisa, perderás el autobús.',
          },
          {
            en: "If she doesn't call, I'll be worried.",
            es: 'Si no llama, estaré preocupado.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If it will rain, we will stay home.',
            right: 'If it rains, we will stay home.',
            why: "Use the present simple after 'if', not 'will'.",
            esNote: "Después de 'if' va presente, no 'will'.",
          },
          {
            wrong: 'If you will heat water, it boils.',
            right: 'If you heat water, it boils.',
            why: 'For a general truth, both verbs are present simple.',
            esNote: 'En el zero conditional ambos verbos van en presente.',
          },
          {
            wrong: 'We will catch the train if we will leave now.',
            right: 'We will catch the train if we leave now.',
            why: "Only the result clause uses 'will'; the if-clause stays present.",
            esNote: "Solo la parte del resultado lleva 'will'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-cond-ex1',
            before: 'If you',
            after: '(study), you will pass the exam.',
            answers: ['study'],
            explain: "After 'if' use the present simple in the first conditional.",
          },
          {
            kind: 'mcq',
            id: 'a2-cond-ex2',
            prompt: 'Choose the correct first conditional.',
            options: [
              'If it will rain, we cancel.',
              "If it rains, we'll cancel.",
              'If it rains, we cancel will.',
            ],
            answer: 1,
            explain: "Present after 'if', 'will' in the result.",
          },
          {
            kind: 'correct',
            id: 'a2-cond-ex3',
            wrong: 'If she will come, I will be happy.',
            answers: ['If she comes, I will be happy.', "If she comes, I'll be happy."],
            explain: "No 'will' in the if-clause.",
          },
          {
            kind: 'translate',
            id: 'a2-cond-ex4',
            es: 'Si llueve, nos quedaremos en casa.',
            answers: [
              "If it rains, we'll stay home.",
              'If it rains, we will stay home.',
              "If it rains, we'll stay at home.",
            ],
            explain: 'First conditional: present + will.',
          },
          {
            kind: 'order',
            id: 'a2-cond-ex5',
            tokens: ['If', 'you', 'heat', 'ice', 'it', 'melts'],
            answer: 'If you heat ice, it melts.',
            explain: 'Zero conditional: present + present.',
          },
          {
            kind: 'cloze',
            id: 'a2-cond-ex6',
            before: "We'll miss the bus",
            after: 'we hurry.',
            answers: ['unless'],
            hint: '= if ... not',
            explain: "'Unless' means 'if not'.",
          },
          {
            kind: 'dictation',
            id: 'a2-cond-ex7',
            text: "If you call me later, I'll explain everything.",
            explain: 'First conditional with the if-clause first.',
          },
        ],
      },
      {
        id: 'a2-gerunds-infinitives',
        level: 'A2',
        title: 'Gerunds and Infinitives',
        summary:
          'Decide when to use the -ing form and when to use to + verb after verbs, prepositions and to express purpose.',
        sections: [
          {
            heading: 'Gerund (-ing)',
            body: 'Use the **gerund** (verb + -ing) after certain verbs like *enjoy, like, love, hate, finish, stop, mind*, and always after a **preposition**. It can also be the subject of a sentence.',
            examples: [
              {
                en: 'I enjoy swimming.',
                es: 'Disfruto nadando.',
              },
              {
                en: "She's good at drawing.",
                es: 'Se le da bien dibujar.',
              },
            ],
          },
          {
            heading: 'Infinitive (to + verb)',
            body: 'Use the **infinitive with to** after verbs like *want, need, decide, hope, would like, learn*. Also use it to express **purpose** (to say *why*).',
            examples: [
              {
                en: 'I want to learn English.',
                es: 'Quiero aprender inglés.',
              },
              {
                en: 'She went out to buy milk.',
                es: 'Salió a comprar leche.',
              },
            ],
          },
          {
            heading: "After 'to' as a preposition",
            body: "Be careful: in **look forward to** and **be used to**, the word 'to' is a preposition, so it is followed by **-ing**, not the base verb.",
            examples: [
              {
                en: "I'm looking forward to seeing you.",
                es: 'Tengo ganas de verte.',
              },
              {
                en: "He's used to working at night.",
                es: 'Está acostumbrado a trabajar de noche.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common verbs and their pattern',
            columns: ['Pattern', 'Verbs', 'Example'],
            rows: [
              ['+ -ing', 'enjoy, finish, mind, stop, avoid', 'I finished cooking.'],
              ['+ to + verb', 'want, need, decide, hope, learn', 'I want to go.'],
              ['after preposition', 'good at, interested in, before', 'before leaving'],
            ],
          },
        ],
        examples: [
          {
            en: 'They decided to move to the city.',
            es: 'Decidieron mudarse a la ciudad.',
          },
          {
            en: "I don't mind waiting.",
            es: 'No me importa esperar.',
          },
          {
            en: "We're interested in learning Italian.",
            es: 'Nos interesa aprender italiano.',
          },
          {
            en: 'He stopped smoking last year.',
            es: 'Dejó de fumar el año pasado.',
          },
          {
            en: 'I need to call the bank.',
            es: 'Necesito llamar al banco.',
          },
          {
            en: 'Reading before bed helps me sleep.',
            es: 'Leer antes de dormir me ayuda a dormir.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I enjoy to read.',
            right: 'I enjoy reading.',
            why: "'Enjoy' is always followed by the -ing form.",
            esNote: "'Enjoy', 'finish', 'mind' van siempre con -ing.",
          },
          {
            wrong: "I'm interested in learn English.",
            right: "I'm interested in learning English.",
            why: 'After a preposition (in) use the -ing form.',
            esNote: 'Tras una preposición se usa el verbo en -ing.',
          },
          {
            wrong: 'She went to the shop for buy bread.',
            right: 'She went to the shop to buy bread.',
            why: "To express purpose use 'to + verb', not 'for + verb'.",
            esNote: "Para expresar finalidad usa 'to + verbo', no 'for'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-gi-ex1',
            before: "I'm thinking about",
            after: '(change) jobs.',
            answers: ['changing'],
            explain: "After the preposition 'about' use the -ing form.",
          },
          {
            kind: 'mcq',
            id: 'a2-gi-ex2',
            prompt: 'Choose the correct sentence.',
            options: ['I want going home.', 'I want to go home.', 'I want go home.'],
            answer: 1,
            explain: "'Want' is followed by 'to + verb'.",
          },
          {
            kind: 'correct',
            id: 'a2-gi-ex3',
            wrong: 'She finished to clean the kitchen.',
            answers: ['She finished cleaning the kitchen.'],
            explain: "'Finish' takes the -ing form.",
          },
          {
            kind: 'translate',
            id: 'a2-gi-ex4',
            es: 'Disfruto cocinando para mis amigos.',
            answers: [
              'I enjoy cooking for my friends.',
              'I enjoy cooking for my friends very much.',
            ],
            explain: "'Enjoy' + -ing.",
          },
          {
            kind: 'order',
            id: 'a2-gi-ex5',
            tokens: ['He', 'went', 'out', 'to', 'buy', 'a', 'newspaper'],
            answer: 'He went out to buy a newspaper.',
            explain: "Infinitive of purpose: 'to buy' = in order to buy.",
          },
          {
            kind: 'cloze',
            id: 'a2-gi-ex6',
            before: "We're looking forward to",
            after: '(meet) you.',
            answers: ['meeting'],
            hint: "'to' here is a preposition",
            explain: "'Look forward to' is followed by -ing.",
          },
          {
            kind: 'dictation',
            id: 'a2-gi-ex7',
            text: 'I need to finish writing this report.',
            explain: "'Need to' + verb, then 'finish' + -ing.",
          },
        ],
      },
      {
        id: 'a2-quantifiers',
        level: 'A2',
        title: 'Quantifiers: much, many, a few, a little, enough',
        summary:
          'Talk about quantity with countable and uncountable nouns and say if you have enough.',
        sections: [
          {
            heading: 'much and many',
            body: 'Use **many** with countable plural nouns (*many books*) and **much** with uncountable nouns (*much time*). They are most common in questions and negatives. In positive sentences we often prefer **a lot of**.',
            examples: [
              {
                en: 'How many people came?',
                es: '¿Cuánta gente vino?',
              },
              {
                en: "I don't have much money.",
                es: 'No tengo mucho dinero.',
              },
            ],
          },
          {
            heading: 'a few and a little',
            body: "Use **a few** with countable nouns (*a few friends*) and **a little** with uncountable nouns (*a little sugar*). Both mean 'a small amount'.",
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
            body: "Use **enough** to mean 'the right amount'. It goes **before a noun** (*enough chairs*) but **after an adjective or adverb** (*big enough*).",
            examples: [
              {
                en: "We don't have enough chairs.",
                es: 'No tenemos suficientes sillas.',
              },
              {
                en: "This box isn't big enough.",
                es: 'Esta caja no es lo bastante grande.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Countable vs uncountable',
            columns: ['Meaning', 'Countable', 'Uncountable'],
            rows: [
              ['a large amount', 'many', 'much'],
              ['a small amount', 'a few', 'a little'],
              ['the right amount', 'enough', 'enough'],
            ],
          },
        ],
        examples: [
          {
            en: "There aren't many seats left.",
            es: 'No quedan muchos asientos.',
          },
          {
            en: 'How much water do you drink?',
            es: '¿Cuánta agua bebes?',
          },
          {
            en: 'She speaks a little French.',
            es: 'Habla un poco de francés.',
          },
          {
            en: 'We invited a few friends.',
            es: 'Invitamos a unos pocos amigos.',
          },
          {
            en: 'Is there enough food for everyone?',
            es: '¿Hay suficiente comida para todos?',
          },
          {
            en: "You're not old enough to drive.",
            es: 'No tienes edad suficiente para conducir.',
          },
        ],
        pitfalls: [
          {
            wrong: 'How much books do you have?',
            right: 'How many books do you have?',
            why: "'Books' is countable, so use 'many', not 'much'.",
            esNote: "Con nombres contables usa 'many'; con incontables, 'much'.",
          },
          {
            wrong: 'I have a little friends here.',
            right: 'I have a few friends here.',
            why: "'Friends' is countable, so use 'a few', not 'a little'.",
            esNote: "'A few' = contables; 'a little' = incontables.",
          },
          {
            wrong: "The room isn't enough big.",
            right: "The room isn't big enough.",
            why: "'Enough' comes after an adjective.",
            esNote: "Con adjetivos, 'enough' va detrás: 'big enough'.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-q-ex1',
            before: 'How',
            after: 'sugar do you want in your coffee?',
            answers: ['much'],
            explain: "'Sugar' is uncountable, so use 'much'.",
          },
          {
            kind: 'mcq',
            id: 'a2-q-ex2',
            prompt: "Choose the correct word: 'I only need ___ help.'",
            options: ['a few', 'many', 'a little'],
            answer: 2,
            explain: "'Help' is uncountable, so use 'a little'.",
          },
          {
            kind: 'correct',
            id: 'a2-q-ex3',
            wrong: "We don't have many time.",
            answers: ["We don't have much time.", "We don't have a lot of time."],
            explain: "'Time' is uncountable, so use 'much'.",
          },
          {
            kind: 'translate',
            id: 'a2-q-ex4',
            es: 'No hay suficientes sillas.',
            answers: ["There aren't enough chairs.", 'There are not enough chairs.'],
            explain: "'Enough' before a noun.",
          },
          {
            kind: 'order',
            id: 'a2-q-ex5',
            tokens: ['This', 'coffee', "isn't", 'hot', 'enough'],
            answer: "This coffee isn't hot enough.",
            explain: "'Enough' goes after the adjective 'hot'.",
          },
          {
            kind: 'cloze',
            id: 'a2-q-ex6',
            before: 'I have',
            after: '(a small number of) emails to answer.',
            answers: ['a few'],
            explain: "'Emails' is countable, so use 'a few'.",
          },
          {
            kind: 'dictation',
            id: 'a2-q-ex7',
            text: "There isn't much milk left in the fridge.",
            explain: "'Much' with the uncountable noun 'milk'.",
          },
        ],
      },
      {
        id: 'a2-used-to',
        level: 'A2',
        title: 'used to for Past Habits',
        summary:
          'Describe past habits and states that are no longer true with used to, and ask and deny correctly.',
        sections: [
          {
            heading: 'Affirmative',
            body: 'Use **used to + base verb** for things that happened regularly in the past but not now, and for past states that have changed. It is the same for all subjects.',
            examples: [
              {
                en: 'I used to play football every weekend.',
                es: 'Antes jugaba al fútbol todos los fines de semana.',
              },
              {
                en: 'She used to live in Madrid.',
                es: 'Antes vivía en Madrid.',
              },
            ],
          },
          {
            heading: 'Negative and questions',
            body: "In negatives and questions, use **did** and drop the -d: **didn't use to** and **Did you use to ...?** The main verb stays in the base form.",
            examples: [
              {
                en: "I didn't use to like coffee.",
                es: 'Antes no me gustaba el café.',
              },
              {
                en: 'Did you use to have long hair?',
                es: '¿Antes tenías el pelo largo?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'used to forms',
            columns: ['Form', 'Structure', 'Example'],
            rows: [
              ['Affirmative', 'used to + verb', 'I used to smoke.'],
              ['Negative', "didn't use to + verb", "I didn't use to smoke."],
              ['Question', 'Did + subject + use to + verb', 'Did you use to smoke?'],
            ],
          },
        ],
        examples: [
          {
            en: 'We used to go to the beach every summer.',
            es: 'Antes íbamos a la playa todos los veranos.',
          },
          {
            en: 'He used to be very shy.',
            es: 'Antes era muy tímido.',
          },
          {
            en: "I didn't use to eat vegetables as a child.",
            es: 'De niño no comía verduras.',
          },
          {
            en: 'Did they use to live near you?',
            es: '¿Antes vivían cerca de ti?',
          },
          {
            en: 'This building used to be a school.',
            es: 'Este edificio antes era una escuela.',
          },
          {
            en: "She didn't use to drink tea, but now she loves it.",
            es: 'Antes no tomaba té, pero ahora le encanta.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I use to play tennis when I was young.',
            right: 'I used to play tennis when I was young.',
            why: "In the affirmative the form is 'used to' with -d.",
            esNote: "En afirmativo es 'used to' con -d.",
          },
          {
            wrong: "I didn't used to like it.",
            right: "I didn't use to like it.",
            why: "After 'did/didn't' drop the -d: 'use to'.",
            esNote: "Con 'did' se quita la -d: 'use to'.",
          },
          {
            wrong: 'I am used to play football.',
            right: 'I used to play football.',
            why: "For a past habit use 'used to', not 'be used to' (which means 'be accustomed to').",
            esNote: "'Used to' = hábito pasado; 'be used to' = estar acostumbrado.",
          },
        ],
        exercises: [
          {
            kind: 'cloze',
            id: 'a2-ut-ex1',
            before: 'When I was a child, I',
            after: '(have) a dog.',
            answers: ['used to have'],
            explain: "Past habit/state: 'used to have'.",
          },
          {
            kind: 'mcq',
            id: 'a2-ut-ex2',
            prompt: 'Choose the correct negative.',
            options: ["I didn't used to smoke.", "I didn't use to smoke.", "I usedn't smoke."],
            answer: 1,
            explain: "After 'didn't' use 'use to' without -d.",
          },
          {
            kind: 'correct',
            id: 'a2-ut-ex3',
            wrong: 'She use to live in Paris.',
            answers: ['She used to live in Paris.'],
            explain: "The affirmative needs 'used to' with -d.",
          },
          {
            kind: 'translate',
            id: 'a2-ut-ex4',
            es: 'Antes íbamos a la playa todos los veranos.',
            answers: [
              'We used to go to the beach every summer.',
              'We used to go to the beach every summer when we were young.',
            ],
            explain: "'Used to' for a repeated past habit.",
          },
          {
            kind: 'order',
            id: 'a2-ut-ex5',
            tokens: ['Did', 'you', 'use', 'to', 'play', 'an', 'instrument'],
            answer: 'Did you use to play an instrument?',
            explain: 'Question form: Did + subject + use to + verb.',
          },
          {
            kind: 'cloze',
            id: 'a2-ut-ex6',
            before: 'This shop',
            after: '(be) a cinema years ago.',
            answers: ['used to be'],
            explain: 'Past state that has changed.',
          },
          {
            kind: 'dictation',
            id: 'a2-ut-ex7',
            text: "I didn't use to like vegetables, but now I do.",
            explain: "Negative 'didn't use to' for a changed past state.",
          },
        ],
      },
      {
        id: 'a2-so-neither-tags',
        level: 'A2',
        title: 'Agreeing (so/neither) and Question Tags',
        summary:
          'React to others with so/neither + auxiliary, and check information with question tags and subject questions.',
        sections: [
          {
            heading: 'so and neither',
            body: 'To agree with a **positive** statement use **So + auxiliary + subject** (*So do I*). To agree with a **negative** statement use **Neither + auxiliary + subject** (*Neither do I*). Choose the auxiliary that matches the verb tense.',
            examples: [
              {
                en: '"I love pizza." "So do I."',
                es: '—Me encanta la pizza. —A mí también.',
              },
              {
                en: '"I can\'t swim." "Neither can I."',
                es: '—No sé nadar. —Yo tampoco.',
              },
            ],
          },
          {
            heading: 'Question tags',
            body: 'A **question tag** is a short question at the end of a sentence to check or confirm. A **positive** sentence takes a **negative** tag, and a negative sentence takes a positive tag. Repeat the same auxiliary.',
            examples: [
              {
                en: "You're Spanish, aren't you?",
                es: 'Eres español, ¿verdad?',
              },
              {
                en: "She doesn't drive, does she?",
                es: 'Ella no conduce, ¿verdad?',
              },
            ],
          },
          {
            heading: 'Subject questions',
            body: "When **who** or **what** is the subject of the question, do **not** use 'do/does/did'. The word order stays like a statement: *Who broke the window?* not *Who did break...*.",
            examples: [
              {
                en: 'Who made this cake?',
                es: '¿Quién hizo este pastel?',
              },
              {
                en: 'What happened?',
                es: '¿Qué pasó?',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'so / neither responses',
            columns: ['Statement', 'Agree (same)', 'Auxiliary'],
            rows: [
              ['I am tired.', 'So am I.', 'be'],
              ['I like tea.', 'So do I.', 'do'],
              ["I can't cook.", 'Neither can I.', 'can'],
              ["I didn't go.", 'Neither did I.', 'did'],
            ],
          },
        ],
        examples: [
          {
            en: '"I\'m hungry." "So am I."',
            es: '—Tengo hambre. —Yo también.',
          },
          {
            en: '"I don\'t like horror films." "Neither do I."',
            es: '—No me gustan las películas de terror. —A mí tampoco.',
          },
          {
            en: "It's a lovely day, isn't it?",
            es: 'Hace un día precioso, ¿verdad?',
          },
          {
            en: "You didn't call her, did you?",
            es: 'No la llamaste, ¿verdad?',
          },
          {
            en: 'Who told you that?',
            es: '¿Quién te dijo eso?',
          },
          {
            en: 'What woke you up last night?',
            es: '¿Qué te despertó anoche?',
          },
        ],
        pitfalls: [
          {
            wrong: '"I like coffee." "So I do."',
            right: '"I like coffee." "So do I."',
            why: "In 'so/neither' answers the auxiliary comes before the subject: So do I.",
            esNote: "El orden es 'So + auxiliar + sujeto': So do I.",
          },
          {
            wrong: "You are tired, isn't it?",
            right: "You are tired, aren't you?",
            why: "The tag must repeat the subject and auxiliary of the sentence, not use 'isn't it'.",
            esNote:
              "La coletilla repite el sujeto y el auxiliar, no es siempre '¿verdad?' = 'isn't it'.",
          },
          {
            wrong: 'Who did break the window?',
            right: 'Who broke the window?',
            why: "When 'who' is the subject, don't use 'did'; the verb is already in the past.",
            esNote: "Si 'who' es el sujeto, no se usa 'did'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'a2-sn-ex1',
            prompt: '"I don\'t eat meat." Agree:',
            options: ['So do I.', 'Neither do I.', 'Neither I do.'],
            answer: 1,
            explain: "Agreeing with a negative uses 'Neither + auxiliary + subject'.",
          },
          {
            kind: 'cloze',
            id: 'a2-sn-ex2',
            before: 'You live in Madrid,',
            after: '?',
            answers: ["don't you"],
            hint: 'positive sentence → negative tag',
            explain: 'A positive sentence takes a negative tag with the same auxiliary.',
          },
          {
            kind: 'correct',
            id: 'a2-sn-ex3',
            wrong: 'Who did win the match?',
            answers: ['Who won the match?'],
            explain: "'Who' is the subject, so no 'did' and the verb is in the past.",
          },
          {
            kind: 'translate',
            id: 'a2-sn-ex4',
            es: '—Estoy cansado. —Yo también.',
            answers: ['"I\'m tired." "So am I."', "I'm tired. So am I.", 'So am I.'],
            explain: "Agreeing with a positive 'be' statement: So am I.",
          },
          {
            kind: 'order',
            id: 'a2-sn-ex5',
            tokens: ['She', "can't", 'drive', ',', 'can', 'she', '?'],
            answer: "She can't drive, can she?",
            explain: 'Negative sentence takes a positive tag: can she?',
          },
          {
            kind: 'cloze',
            id: 'a2-sn-ex6',
            before: '"I can\'t sleep." "',
            after: 'can I."',
            answers: ['Neither', 'Nor'],
            explain: 'Agreeing with a negative: Neither can I.',
          },
          {
            kind: 'dictation',
            id: 'a2-sn-ex7',
            text: "It's cold today, isn't it?",
            explain: 'Positive sentence with a negative question tag.',
          },
        ],
      },
    ],
  },
  {
    level: 'B1',
    title: 'B1 · Intermediate',
    blurb:
      'Connect past, present and future: perfect tenses, conditionals, reported speech, the passive, and the structures that make your English flow.',
    lessons: [
      {
        id: 'b1-present-perfect-continuous',
        level: 'B1',
        title: 'Present perfect continuous (and vs past simple)',
        summary:
          'Use have/has been + -ing to focus on the duration of an activity that started in the past and is still relevant now. Contrast it with the past simple for finished moments.',
        sections: [
          {
            heading: 'Form and core meaning',
            body: 'Make it with **have/has + been + verb-ing**. It focuses on the **activity and its duration**, often with **for** (a period) or **since** (a starting point). The action usually continues now or has just stopped, with a present result.',
            examples: [
              {
                en: 'I have been studying English for three years.',
                es: 'Llevo tres años estudiando inglés.',
              },
              {
                en: 'She has been working since 8 a.m.',
                es: 'Ha estado trabajando desde las 8 de la mañana.',
              },
              {
                en: 'It has been raining all day.',
                es: 'Ha estado lloviendo todo el día.',
              },
            ],
          },
          {
            heading: 'Continuous vs simple perfect',
            body: "Use the **continuous** to stress how long or that the action repeated; use the **simple present perfect** to stress a finished result or a quantity. Compare 'I've been reading' (activity) with 'I've read three books' (result).",
            examples: [
              {
                en: "I've been painting the kitchen. (that's why I'm dirty)",
                es: 'He estado pintando la cocina.',
              },
              {
                en: "I've painted the kitchen. (it's finished)",
                es: 'He pintado la cocina.',
              },
            ],
          },
          {
            heading: 'Versus the past simple',
            body: "The present perfect continuous links to **now**; the **past simple** is for a finished time that has no connection to the present (yesterday, last year, at 6 o'clock). If you say **when** exactly, use the past simple.",
            examples: [
              {
                en: 'He has been living here since 2020.',
                es: 'Vive aquí desde 2020.',
              },
              {
                en: 'He lived in Paris in 2018.',
                es: 'Vivió en París en 2018.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Present perfect continuous forms',
            columns: ['Subject', 'Affirmative', 'Negative', 'Question'],
            rows: [
              [
                'I / you / we / they',
                'have been working',
                "haven't been working",
                'Have you been working?',
              ],
              ['he / she / it', 'has been working', "hasn't been working", 'Has she been working?'],
            ],
          },
        ],
        examples: [
          {
            en: 'How long have you been waiting?',
            es: '¿Cuánto tiempo llevas esperando?',
          },
          {
            en: "My eyes hurt because I've been looking at the screen all day.",
            es: 'Me duelen los ojos porque he estado mirando la pantalla todo el día.',
          },
          {
            en: "We've been trying to call you since this morning.",
            es: 'Llevamos intentando llamarte desde esta mañana.',
          },
          {
            en: "She's tired because she's been running.",
            es: 'Está cansada porque ha estado corriendo.',
          },
          {
            en: 'They got married in 2015 and have been together ever since.',
            es: 'Se casaron en 2015 y han estado juntos desde entonces.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am studying English for three years.',
            right: 'I have been studying English for three years.',
            why: 'For an action that started in the past and continues now, English uses the **present perfect**, not the present.',
            esNote:
              "El español usa 'llevo + gerundio' o el presente; el inglés exige 'have been + -ing'.",
          },
          {
            wrong: 'I have been knowing her for years.',
            right: 'I have known her for years.',
            why: '**Stative verbs** (know, like, be, have=possess) are not normally used in continuous forms.',
            esNote: 'Verbos de estado (know, love, want) no van en forma continua.',
          },
          {
            wrong: "I've been to the gym yesterday.",
            right: 'I went to the gym yesterday.',
            why: 'With a finished past time word like **yesterday**, use the past simple, not a perfect form.',
            esNote: "Con 'yesterday', 'last week', etc., va el pasado simple.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-ppc-1',
            prompt: 'Choose the best option: "My hands are dirty because I ___ the car."',
            options: ['wash', 'have been washing', 'washed', 'am washing'],
            answer: 1,
            explain:
              'A present result (dirty hands) from a recent activity uses the **present perfect continuous**.',
          },
          {
            kind: 'cloze',
            id: 'b1-ppc-2',
            before: 'We have been living here',
            after: '2019.',
            answers: ['since'],
            hint: 'a starting point',
            explain:
              '**Since** marks the point when something started; **for** marks a length of time.',
          },
          {
            kind: 'correct',
            id: 'b1-ppc-3',
            wrong: 'She is working here since five years.',
            answers: [
              'She has been working here for five years.',
              "She's been working here for five years.",
            ],
            explain:
              "Started in the past + continues now = present perfect continuous; '5 years' is a period, so **for**.",
          },
          {
            kind: 'order',
            id: 'b1-ppc-4',
            tokens: ['How', 'long', 'have', 'you', 'been', 'learning', 'English', '?'],
            answer: 'How long have you been learning English ?',
            explain: 'Question word order: **How long + have + subject + been + -ing**.',
          },
          {
            kind: 'translate',
            id: 'b1-ppc-5',
            es: 'Llevo dos horas esperando el autobús.',
            answers: [
              'I have been waiting for the bus for two hours.',
              "I've been waiting for the bus for two hours.",
            ],
            explain: "'Llevo + gerundio' → present perfect continuous with **for**.",
          },
          {
            kind: 'dictation',
            id: 'b1-ppc-6',
            text: "It's been raining since I woke up this morning.",
            explain: "Note the contraction 'It's been' = It has been.",
          },
        ],
      },
      {
        id: 'b1-past-perfect',
        level: 'B1',
        title: 'Past perfect: the past before the past',
        summary:
          'Use had + past participle to show that one past action happened before another past action. It puts events in the right order.',
        sections: [
          {
            heading: 'Form and use',
            body: 'Make it with **had + past participle** for every subject. It describes an action **completed before another point in the past**. The later action is usually in the **past simple**.',
            examples: [
              {
                en: 'When I arrived, the train had already left.',
                es: 'Cuando llegué, el tren ya se había ido.',
              },
              {
                en: 'She had finished dinner before he called.',
                es: 'Ella había terminado de cenar antes de que él llamara.',
              },
            ],
          },
          {
            heading: 'With time linkers',
            body: 'Common with **before, after, already, just, by the time, when**. Words like **already, just, never, yet** often go between had and the participle.',
            examples: [
              {
                en: 'By the time we got there, the film had started.',
                es: 'Para cuando llegamos, la película había empezado.',
              },
              {
                en: 'I had never seen snow before that trip.',
                es: 'Nunca había visto la nieve antes de aquel viaje.',
              },
            ],
          },
          {
            heading: 'Past perfect continuous',
            body: 'Use **had been + -ing** to stress the **duration** of an activity up to a past moment. It often explains a past result.',
            examples: [
              {
                en: 'He was tired because he had been working all night.',
                es: 'Estaba cansado porque había estado trabajando toda la noche.',
              },
              {
                en: 'They had been driving for hours when the car broke down.',
                es: 'Llevaban horas conduciendo cuando el coche se averió.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past perfect',
            columns: ['Form', 'Example', 'Use'],
            rows: [
              ['had + past participle', 'had gone, had seen', 'earlier past action'],
              ["had not (hadn't) + p.p.", "hadn't eaten", 'negative'],
              ['had + subject + p.p.?', 'Had you met before?', 'question'],
            ],
          },
        ],
        examples: [
          {
            en: 'The house was empty; everyone had gone home.',
            es: 'La casa estaba vacía; todos se habían ido a casa.',
          },
          {
            en: 'I realised I had forgotten my keys.',
            es: 'Me di cuenta de que había olvidado las llaves.',
          },
          {
            en: 'After she had read the email, she called me.',
            es: 'Después de que leyó el correo, me llamó.',
          },
          {
            en: "We couldn't get in because we had lost the tickets.",
            es: 'No pudimos entrar porque habíamos perdido las entradas.',
          },
          {
            en: 'By 2010 he had already published three novels.',
            es: 'Para 2010 ya había publicado tres novelas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived, the train already left.',
            right: 'When I arrived, the train had already left.',
            why: 'To mark the action that happened **first**, use the past perfect (**had + p.p.**), not the past simple.',
            esNote: "El 'pluscuamperfecto' español ('se había ido') equivale al past perfect.",
          },
          {
            wrong: 'I had ate before the meeting.',
            right: 'I had eaten before the meeting.',
            why: 'The past perfect uses the **past participle** (eaten), not the past simple (ate).',
            esNote: 'Usa el participio (eaten, gone, seen), no el pasado simple.',
          },
          {
            wrong: 'After I had finished, I had gone home.',
            right: 'After I had finished, I went home.',
            why: 'Only the **earlier** action needs the past perfect; the later one is past simple.',
            esNote: 'No pongas todo en past perfect: solo la acción anterior.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-pp-1',
            prompt: 'Choose the best option: "She ___ when we arrived at the party."',
            options: [
              'already left',
              'had already left',
              'has already left',
              'was leaving already',
            ],
            answer: 1,
            explain: 'Leaving happened before arriving, so use the **past perfect**.',
          },
          {
            kind: 'cloze',
            id: 'b1-pp-2',
            before: 'By the time the police came, the thief',
            after: '(escape).',
            answers: ['had escaped'],
            hint: 'had + past participle',
            explain: 'An action finished before another past point → past perfect.',
          },
          {
            kind: 'correct',
            id: 'b1-pp-3',
            wrong: "I didn't recognise her because she changed a lot.",
            answers: [
              "I didn't recognise her because she had changed a lot.",
              "I didn't recognize her because she had changed a lot.",
            ],
            explain: 'The change happened before the moment of not recognising → past perfect.',
          },
          {
            kind: 'order',
            id: 'b1-pp-4',
            tokens: ['He', 'was', 'tired', 'because', 'he', 'had', 'been', 'running'],
            answer: 'He was tired because he had been running',
            explain: 'Past perfect continuous explains a past result: **had been + -ing**.',
          },
          {
            kind: 'translate',
            id: 'b1-pp-5',
            es: 'Cuando llegué, la reunión ya había terminado.',
            answers: [
              'When I arrived, the meeting had already finished.',
              'When I arrived, the meeting had already ended.',
              'When I got there, the meeting had already finished.',
            ],
            explain: 'El pluscuamperfecto español → past perfect inglés.',
          },
          {
            kind: 'dictation',
            id: 'b1-pp-6',
            text: 'We had never been to Japan before last summer.',
            explain: "'never' sits between 'had' and the participle 'been'.",
          },
        ],
      },
      {
        id: 'b1-used-to',
        level: 'B1',
        title: 'Used to, would and be used to',
        summary:
          "Three look-alike structures: 'used to' for past habits, 'would' for repeated past actions, and 'be used to' for being accustomed to something.",
        sections: [
          {
            heading: 'used to + infinitive',
            body: "**Used to + base verb** describes **past habits or states that are no longer true**. The negative and question drop the -d: **didn't use to / Did you use to...?**",
            examples: [
              {
                en: 'I used to smoke, but I stopped.',
                es: 'Antes fumaba, pero lo dejé.',
              },
              {
                en: 'There used to be a cinema here.',
                es: 'Antes había un cine aquí.',
              },
              {
                en: 'Did you use to play sports?',
                es: '¿Antes practicabas deportes?',
              },
            ],
          },
          {
            heading: 'would for repeated past actions',
            body: "**Would + base verb** also describes **repeated past actions**, like a storytelling style. Important: **would does NOT work with states** (have, be, like). Use 'used to' for states.",
            examples: [
              {
                en: 'Every summer we would visit our grandparents.',
                es: 'Cada verano visitábamos a nuestros abuelos.',
              },
              {
                en: 'He used to be shy. (NOT He would be shy.)',
                es: 'Antes era tímido.',
              },
            ],
          },
          {
            heading: 'be/get used to + -ing',
            body: "**Be used to + noun / -ing** means 'be accustomed to' something. **Get used to** means becoming accustomed. Here 'to' is a **preposition**, so a verb after it takes **-ing**.",
            examples: [
              {
                en: "I'm used to getting up early.",
                es: 'Estoy acostumbrado a levantarme temprano.',
              },
              {
                en: "She can't get used to the cold weather.",
                es: 'No consigue acostumbrarse al frío.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Three structures compared',
            columns: ['Structure', 'Meaning', 'Followed by', 'Example'],
            rows: [
              ['used to', 'past habit/state (not now)', 'base verb', 'I used to live there'],
              ['would', 'repeated past action', 'base verb', 'We would walk to school'],
              ['be used to', 'be accustomed to', 'noun / -ing', "I'm used to driving"],
            ],
          },
        ],
        examples: [
          {
            en: 'We used to go to the beach every weekend.',
            es: 'Antes íbamos a la playa cada fin de semana.',
          },
          {
            en: "I didn't use to like coffee, but now I love it.",
            es: 'Antes no me gustaba el café, pero ahora me encanta.',
          },
          {
            en: 'When I was a child, my dad would read me stories.',
            es: 'Cuando era niño, mi padre me leía cuentos.',
          },
          {
            en: 'Are you used to working from home?',
            es: '¿Estás acostumbrado a trabajar desde casa?',
          },
          {
            en: 'It took me a while to get used to the new system.',
            es: 'Me costó un tiempo acostumbrarme al nuevo sistema.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I use to go to the gym last year.',
            right: 'I used to go to the gym.',
            why: "The affirmative form is **used to** (with -d), and it can't be combined with a specific finished time the way the past simple is.",
            esNote:
              "En afirmativo es 'used to'; sin -d solo en negativas/preguntas (didn't use to).",
          },
          {
            wrong: 'I am used to get up early.',
            right: 'I am used to getting up early.',
            why: "After **be used to**, 'to' is a preposition, so the verb must be **-ing**.",
            esNote: "'Be used to' + gerundio (-ing), no infinitivo.",
          },
          {
            wrong: 'He would be tall when he was young.',
            right: 'He used to be tall when he was young.',
            why: "**would** cannot describe past **states**; use 'used to' with be, have, like, know.",
            esNote: "'Would' solo para acciones repetidas, no para estados.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-ut-1',
            prompt: 'Choose the correct option: "I\'m not ___ such spicy food."',
            options: ['used to eat', 'used to eating', 'use to eat', 'used eat'],
            answer: 1,
            explain: "**be used to + -ing** = be accustomed to: 'used to eating'.",
          },
          {
            kind: 'cloze',
            id: 'b1-ut-2',
            before: 'There',
            after: 'be a bakery on this corner, but it closed.',
            answers: ['used to'],
            hint: 'past state, no longer true',
            explain: 'Past state that has changed → **used to + base verb**.',
          },
          {
            kind: 'correct',
            id: 'b1-ut-3',
            wrong: 'Did you used to live in Madrid?',
            answers: ['Did you use to live in Madrid?'],
            explain: 'In questions and negatives the -d is dropped: **use to**.',
          },
          {
            kind: 'order',
            id: 'b1-ut-4',
            tokens: ['Every', 'winter', 'we', 'would', 'go', 'skiing'],
            answer: 'Every winter we would go skiing',
            explain: '**would + base verb** for a repeated past action.',
          },
          {
            kind: 'translate',
            id: 'b1-ut-5',
            es: 'Todavía no me acostumbro a conducir por la izquierda.',
            answers: [
              "I'm still not used to driving on the left.",
              'I am still not used to driving on the left.',
              "I still can't get used to driving on the left.",
            ],
            explain: "'Acostumbrarse a + verbo' → be/get used to + -ing.",
          },
          {
            kind: 'dictation',
            id: 'b1-ut-6',
            text: "I didn't use to enjoy reading, but now I read every day.",
            explain: "Negative form: didn't use to (no -d).",
          },
        ],
      },
      {
        id: 'b1-future-continuous',
        level: 'B1',
        title: 'Future forms: will, going to and future continuous',
        summary:
          'Choose between will and going to for predictions and plans, and use will be + -ing for actions in progress at a future time.',
        sections: [
          {
            heading: 'will vs going to',
            body: 'Use **will** for instant decisions, offers, promises and predictions based on opinion. Use **be going to** for **plans/intentions** and predictions based on **present evidence**.',
            examples: [
              {
                en: 'I think it will rain tomorrow.',
                es: 'Creo que mañana lloverá.',
              },
              {
                en: "Look at those clouds — it's going to rain.",
                es: 'Mira esas nubes; va a llover.',
              },
              {
                en: "We're going to move house next year.",
                es: 'Vamos a mudarnos el año que viene.',
              },
            ],
          },
          {
            heading: 'Future continuous',
            body: 'Use **will be + -ing** for an action that **will be in progress** at a specific future moment, or for a polite, neutral prediction about arrangements.',
            examples: [
              {
                en: "This time tomorrow I'll be flying to Rome.",
                es: 'Mañana a esta hora estaré volando a Roma.',
              },
              {
                en: "Don't call at 8 — we'll be having dinner.",
                es: 'No llames a las 8; estaremos cenando.',
              },
            ],
          },
          {
            heading: 'Softening predictions',
            body: "Make predictions more or less certain with adverbs: **definitely, probably, might, may, could**. Note position: 'will probably' but 'probably won't'.",
            examples: [
              {
                en: "She'll probably be late.",
                es: 'Probablemente llegará tarde.',
              },
              {
                en: "They probably won't come.",
                es: 'Probablemente no vendrán.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Choosing a future form',
            columns: ['Form', 'Use', 'Example'],
            rows: [
              ['will + base', 'decision now / opinion prediction', "I'll help you"],
              ['going to + base', 'plan / evidence prediction', "I'm going to study law"],
              ['will be + -ing', 'in progress at a future time', "I'll be working at 9"],
            ],
          },
        ],
        examples: [
          {
            en: "The phone's ringing — I'll get it.",
            es: 'Suena el teléfono; ya contesto yo.',
          },
          {
            en: "By next week, I'll be lying on a beach.",
            es: 'Para la semana que viene, estaré tumbado en una playa.',
          },
          {
            en: "We're going to start a new project in May.",
            es: 'Vamos a empezar un nuevo proyecto en mayo.',
          },
          {
            en: "I'm sure you'll do well in the exam.",
            es: 'Seguro que te irá bien en el examen.',
          },
          {
            en: 'Will you be using the car tonight?',
            es: '¿Vas a usar el coche esta noche?',
          },
        ],
        pitfalls: [
          {
            wrong: 'Tomorrow I go to the dentist.',
            right: "Tomorrow I'm going to the dentist. / I'm going to go to the dentist.",
            why: 'For future plans English uses **going to** or the **present continuous**, not the present simple.',
            esNote:
              "El español usa el presente para planes; el inglés prefiere 'going to' o present continuous.",
          },
          {
            wrong: 'I will to call you later.',
            right: 'I will call you later.',
            why: "After **will**, use the bare infinitive — no 'to'.",
            esNote: "Tras 'will' va el verbo sin 'to'.",
          },
          {
            wrong: 'Look! The bus will leave!',
            right: 'Look! The bus is going to leave!',
            why: "For a prediction based on **present evidence**, use 'going to', not 'will'.",
            esNote: "Con evidencia presente, usa 'going to'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-fc-1',
            prompt: 'Choose the best option: "This time next year, we ___ in our new house."',
            options: ['will live', 'are living', 'will be living', 'live'],
            answer: 2,
            explain: 'An action in progress at a future moment → **will be + -ing**.',
          },
          {
            kind: 'cloze',
            id: 'b1-fc-2',
            before: 'That bag looks heavy. I',
            after: 'help you with it.',
            answers: ["'ll", 'will'],
            hint: 'an instant offer',
            explain: 'A spontaneous offer/decision uses **will**.',
          },
          {
            kind: 'correct',
            id: 'b1-fc-3',
            wrong: "Don't phone at six because we will have dinner.",
            answers: [
              "Don't phone at six because we'll be having dinner.",
              "Don't phone at six because we will be having dinner.",
            ],
            explain: 'Action in progress at a future time → future continuous (will be + -ing).',
          },
          {
            kind: 'order',
            id: 'b1-fc-4',
            tokens: ['She', 'is', 'going', 'to', 'start', 'university', 'in', 'September'],
            answer: 'She is going to start university in September',
            explain: 'A planned intention → **be going to + base verb**.',
          },
          {
            kind: 'translate',
            id: 'b1-fc-5',
            es: 'Mañana a esta hora estaré conduciendo a la costa.',
            answers: [
              "This time tomorrow I'll be driving to the coast.",
              'This time tomorrow I will be driving to the coast.',
            ],
            explain: 'Acción en curso en un momento futuro → will be + -ing.',
          },
          {
            kind: 'dictation',
            id: 'b1-fc-6',
            text: "I think they'll probably win the match.",
            explain: "'will probably' — adverb after will in affirmatives.",
          },
        ],
      },
      {
        id: 'b1-conditionals-wish',
        level: 'B1',
        title: 'Second and third conditionals, and wish',
        summary:
          "Talk about unreal present situations (2nd conditional), unreal past situations (3rd conditional), and regrets or desires with 'wish'.",
        sections: [
          {
            heading: 'Second conditional',
            body: "Use **If + past simple, ... would + base verb** for **imaginary or unlikely present/future** situations. With 'be', formal English uses **were** for all subjects.",
            examples: [
              {
                en: 'If I had more time, I would learn the guitar.',
                es: 'Si tuviera más tiempo, aprendería la guitarra.',
              },
              {
                en: "If I were you, I'd accept the offer.",
                es: 'Yo que tú, aceptaría la oferta.',
              },
            ],
          },
          {
            heading: 'Third conditional',
            body: 'Use **If + past perfect, ... would have + past participle** for **unreal situations in the past** — things that did not happen and their imagined results.',
            examples: [
              {
                en: 'If I had studied, I would have passed.',
                es: 'Si hubiera estudiado, habría aprobado.',
              },
              {
                en: "If we hadn't missed the train, we wouldn't have been late.",
                es: 'Si no hubiéramos perdido el tren, no habríamos llegado tarde.',
              },
            ],
          },
          {
            heading: 'wish / if only',
            body: "Use **wish + past simple** for a different **present**; **wish + past perfect** for a regret about the **past**; **wish + would** to complain about an annoying habit. 'If only' works the same way, but stronger.",
            examples: [
              {
                en: 'I wish I had a bigger flat.',
                es: 'Ojalá tuviera un piso más grande.',
              },
              {
                en: 'I wish I had studied medicine.',
                es: 'Ojalá hubiera estudiado medicina.',
              },
              {
                en: "I wish you wouldn't interrupt me.",
                es: 'Ojalá no me interrumpieras.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Conditional types',
            columns: ['Type', 'If-clause', 'Main clause', 'Use'],
            rows: [
              ['2nd', 'past simple', 'would + base', 'unreal present/future'],
              ['3rd', 'past perfect', 'would have + p.p.', 'unreal past'],
              ['wish (present)', 'wish + past simple', '—', 'different present'],
              ['wish (past)', 'wish + past perfect', '—', 'past regret'],
            ],
          },
        ],
        examples: [
          {
            en: "If I won the lottery, I'd travel the world.",
            es: 'Si ganara la lotería, viajaría por el mundo.',
          },
          {
            en: 'What would you do if you lost your job?',
            es: '¿Qué harías si perdieras tu trabajo?',
          },
          {
            en: 'If she had asked me, I would have helped her.',
            es: 'Si me hubiera pedido ayuda, la habría ayudado.',
          },
          {
            en: 'I wish I could speak Japanese.',
            es: 'Ojalá pudiera hablar japonés.',
          },
          {
            en: "If only I hadn't said that.",
            es: 'Ojalá no hubiera dicho eso.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have time, I would help you.',
            right: 'If I had time, I would help you.',
            why: "**'would' does not go in the if-clause** of a conditional; use the past simple there.",
            esNote: "No pongas 'would' en la oración con 'if'; va el pasado.",
          },
          {
            wrong: 'If I would have known, I would have come.',
            right: 'If I had known, I would have come.',
            why: "Third conditional if-clause needs the **past perfect** (had known), not 'would have'.",
            esNote: "En la condición va 'had + participio', no 'would have'.",
          },
          {
            wrong: 'I wish I have more money.',
            right: 'I wish I had more money.',
            why: 'After **wish** for a present desire, use the **past simple**, not the present.',
            esNote: "'Wish' para el presente va con pasado simple.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-cw-1',
            prompt: 'Choose the correct option: "If I ___ rich, I would buy a boat."',
            options: ['am', 'were', 'would be', 'had been'],
            answer: 1,
            explain:
              "Second conditional if-clause uses the past simple; with 'be' we use **were**.",
          },
          {
            kind: 'cloze',
            id: 'b1-cw-2',
            before: 'If you had told me earlier, I',
            after: '(come) to the meeting.',
            answers: ['would have come', "'d have come"],
            hint: 'third conditional result',
            explain: 'Unreal past result → **would have + past participle**.',
          },
          {
            kind: 'correct',
            id: 'b1-cw-3',
            wrong: 'I wish I would be taller.',
            answers: ['I wish I were taller.', 'I wish I was taller.'],
            explain: "wish about a present state → past simple (were/was), not 'would be'.",
          },
          {
            kind: 'order',
            id: 'b1-cw-4',
            tokens: ['If', 'I', 'had', 'studied', 'more', 'I', 'would', 'have', 'passed'],
            answer: 'If I had studied more I would have passed',
            explain: 'Third conditional: if + past perfect, would have + p.p.',
          },
          {
            kind: 'translate',
            id: 'b1-cw-5',
            es: 'Si tuviera más tiempo, viajaría más.',
            answers: [
              'If I had more time, I would travel more.',
              "If I had more time, I'd travel more.",
            ],
            explain: 'Condicional irreal de presente: if + pasado, would + base.',
          },
          {
            kind: 'dictation',
            id: 'b1-cw-6',
            text: 'I wish I had learned to play an instrument.',
            explain: 'wish + past perfect expresses a past regret.',
          },
        ],
      },
      {
        id: 'b1-reported-speech',
        level: 'B1',
        title: 'Reported speech: statements and questions',
        summary:
          'Report what people said using backshift of tenses, changes of pronouns and time words, and the difference between say and tell.',
        sections: [
          {
            heading: 'Backshift of tenses',
            body: 'When the reporting verb is past (said, told), the tense usually moves **one step back**: present → past, past → past perfect, will → would, can → could. Pronouns and time/place words also change (now → then, here → there, tomorrow → the next day).',
            examples: [
              {
                en: '"I am tired." → He said he was tired.',
                es: '«Estoy cansado.» → Dijo que estaba cansado.',
              },
              {
                en: '"I\'ll call you." → She said she would call me.',
                es: '«Te llamaré.» → Dijo que me llamaría.',
              },
            ],
          },
          {
            heading: 'say vs tell',
            body: '**tell** needs a **person object**: tell someone something. **say** does not take a person directly; if you mention the listener, use **say to someone**.',
            examples: [
              {
                en: 'He told me he was busy.',
                es: 'Me dijo que estaba ocupado.',
              },
              {
                en: 'He said (that) he was busy.',
                es: 'Dijo que estaba ocupado.',
              },
            ],
          },
          {
            heading: 'Reported questions',
            body: 'Reported questions use **statement word order** (no inversion, no auxiliary do/does/did, no question mark). Use **if/whether** for yes/no questions and the **question word** for wh-questions.',
            examples: [
              {
                en: '"Where do you live?" → She asked where I lived.',
                es: '«¿Dónde vives?» → Me preguntó dónde vivía.',
              },
              {
                en: '"Are you ready?" → He asked if I was ready.',
                es: '«¿Estás listo?» → Preguntó si estaba listo.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Tense backshift',
            columns: ['Direct speech', 'Reported speech'],
            rows: [
              ['present simple (work)', 'past simple (worked)'],
              ['present continuous (am working)', 'past continuous (was working)'],
              ['past simple (worked)', 'past perfect (had worked)'],
              ['will / can / may', 'would / could / might'],
            ],
          },
        ],
        examples: [
          {
            en: 'She said she had already seen the film.',
            es: 'Dijo que ya había visto la película.',
          },
          {
            en: 'They told us they were leaving the next day.',
            es: 'Nos dijeron que se iban al día siguiente.',
          },
          {
            en: 'I asked him what time the shop opened.',
            es: 'Le pregunté a qué hora abría la tienda.',
          },
          {
            en: 'He asked me whether I could help.',
            es: 'Me preguntó si podía ayudar.',
          },
          {
            en: 'My boss told me not to be late.',
            es: 'Mi jefe me dijo que no llegara tarde.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He said me that he was tired.',
            right: 'He told me that he was tired. / He said that he was tired.',
            why: '**say** is not followed directly by a person; **tell** is.',
            esNote: "'Tell + persona' (told me); 'say' sin persona directa.",
          },
          {
            wrong: 'She asked me where do I live.',
            right: 'She asked me where I lived.',
            why: "Reported questions use **statement word order** with no auxiliary 'do'.",
            esNote: "En preguntas indirectas no se invierte ni se usa 'do'.",
          },
          {
            wrong: 'He told that he was busy.',
            right: 'He said that he was busy. / He told me that he was busy.',
            why: "**tell** must have a person object; without one, use 'say'.",
            esNote: "'Tell' siempre lleva a alguien; si no, usa 'say'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-rs-1',
            prompt: 'Choose the correct option: "She ___ me that she was leaving."',
            options: ['said', 'told', 'asked', 'spoke'],
            answer: 1,
            explain: 'With a person object (me) use **told**.',
          },
          {
            kind: 'cloze',
            id: 'b1-rs-2',
            before: 'Direct: "I am studying." Reported: He said he',
            after: 'studying.',
            answers: ['was'],
            hint: "backshift of 'am'",
            explain: "Present continuous 'am studying' backshifts to 'was studying'.",
          },
          {
            kind: 'correct',
            id: 'b1-rs-3',
            wrong: 'He asked me where did I work.',
            answers: ['He asked me where I worked.', 'He asked where I worked.'],
            explain: "Reported question = statement order, no 'did', and backshift work → worked.",
          },
          {
            kind: 'order',
            id: 'b1-rs-4',
            tokens: ['She', 'asked', 'if', 'I', 'could', 'speak', 'French'],
            answer: 'She asked if I could speak French',
            explain: 'Yes/no reported question uses **if** + statement order.',
          },
          {
            kind: 'translate',
            id: 'b1-rs-5',
            es: 'Me dijo que llegaría tarde.',
            answers: [
              'He told me he would be late.',
              'She told me she would be late.',
              'He told me that he would be late.',
            ],
            explain: "'Decir a alguien' → tell + person; 'llegaré' → would arrive/be.",
          },
          {
            kind: 'dictation',
            id: 'b1-rs-6',
            text: 'They told us they had finished the project.',
            explain: "past simple 'finished' backshifts to past perfect 'had finished'.",
          },
        ],
      },
      {
        id: 'b1-passive-voice',
        level: 'B1',
        title: 'The passive voice (simple tenses)',
        summary:
          "Use be + past participle to focus on the action or the receiver rather than who does it. Add 'by' only when the doer matters.",
        sections: [
          {
            heading: 'Form and purpose',
            body: 'Make the passive with **be (in the right tense) + past participle**. Use it when the **doer is unknown, obvious or unimportant**, or to keep the focus on the result. The object of the active sentence becomes the subject.',
            examples: [
              {
                en: 'The bridge was built in 1890.',
                es: 'El puente fue construido en 1890.',
              },
              {
                en: 'English is spoken all over the world.',
                es: 'El inglés se habla en todo el mundo.',
              },
            ],
          },
          {
            heading: 'Across tenses',
            body: 'Only **be** changes tense; the **past participle stays the same**. Present: is/are done. Past: was/were done. Present perfect: has/have been done. Future: will be done. Modal: can/must be done.',
            examples: [
              {
                en: 'The report has been sent.',
                es: 'El informe ha sido enviado.',
              },
              {
                en: 'The work must be finished by Friday.',
                es: 'El trabajo debe estar terminado para el viernes.',
              },
            ],
          },
          {
            heading: "The agent with 'by'",
            body: 'Mention the doer with **by + agent** only when it adds useful information. Often we leave it out.',
            examples: [
              {
                en: 'Romeo and Juliet was written by Shakespeare.',
                es: 'Romeo y Julieta fue escrita por Shakespeare.',
              },
              {
                en: 'My car was stolen last night.',
                es: 'Anoche me robaron el coche.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Passive across tenses',
            columns: ['Tense', 'Active', 'Passive'],
            rows: [
              ['present simple', 'They make it', 'It is made'],
              ['past simple', 'They made it', 'It was made'],
              ['present perfect', 'They have made it', 'It has been made'],
              ['future / modal', 'They will make it', 'It will be made'],
            ],
          },
        ],
        examples: [
          {
            en: 'The results will be announced tomorrow.',
            es: 'Los resultados se anunciarán mañana.',
          },
          {
            en: 'This museum is visited by thousands of people.',
            es: 'Este museo es visitado por miles de personas.',
          },
          {
            en: 'Our flight was cancelled because of the storm.',
            es: 'Nuestro vuelo fue cancelado por la tormenta.',
          },
          {
            en: 'The documents have been signed.',
            es: 'Los documentos han sido firmados.',
          },
          {
            en: 'Mistakes were made.',
            es: 'Se cometieron errores.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The house was build in 1990.',
            right: 'The house was built in 1990.',
            why: 'The passive needs the **past participle** (built), not the base form.',
            esNote: 'Usa el participio (built, made, sent), no el infinitivo.',
          },
          {
            wrong: 'The window broke by the boys.',
            right: 'The window was broken by the boys.',
            why: 'A passive sentence must include the verb **be** (was) before the participle.',
            esNote: "Falta el verbo 'be': was broken.",
          },
          {
            wrong: 'English speaks in many countries.',
            right: 'English is spoken in many countries.',
            why: 'The subject (English) receives the action, so the verb must be passive: **is spoken**.',
            esNote: "El español usa 'se habla'; en inglés es pasiva: is spoken.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-pv-1',
            prompt: 'Choose the correct option: "The letters ___ yesterday."',
            options: ['were sent', 'were send', 'are sent', 'have sent'],
            answer: 0,
            explain: 'Past passive = **was/were + past participle** (were sent).',
          },
          {
            kind: 'cloze',
            id: 'b1-pv-2',
            before: 'This song',
            after: '(write) by a famous singer.',
            answers: ['was written'],
            hint: 'past passive',
            explain: 'be (was) + past participle (written).',
          },
          {
            kind: 'correct',
            id: 'b1-pv-3',
            wrong: 'The cake was eat by the children.',
            answers: ['The cake was eaten by the children.'],
            explain: "Use the past participle 'eaten', not 'eat'.",
          },
          {
            kind: 'order',
            id: 'b1-pv-4',
            tokens: ['The', 'report', 'must', 'be', 'finished', 'by', 'Monday'],
            answer: 'The report must be finished by Monday',
            explain: 'Modal passive: modal + **be + past participle**.',
          },
          {
            kind: 'translate',
            id: 'b1-pv-5',
            es: 'El inglés se habla en muchos países.',
            answers: [
              'English is spoken in many countries.',
              'English is spoken in a lot of countries.',
            ],
            explain: "'Se habla' impersonal → present passive 'is spoken'.",
          },
          {
            kind: 'dictation',
            id: 'b1-pv-6',
            text: 'The new bridge has been opened to traffic.',
            explain: 'Present perfect passive: has been + past participle.',
          },
        ],
      },
      {
        id: 'b1-relative-clauses',
        level: 'B1',
        title: 'Relative clauses: defining and non-defining',
        summary:
          "Add information about people, things and places with who, which, that, whose and where. Learn when commas and 'that' are allowed.",
        sections: [
          {
            heading: 'Defining relative clauses',
            body: 'A **defining** clause gives **essential** information that identifies the noun. Use **who** for people, **which** for things, **that** for either, **whose** for possession, **where** for places. No commas.',
            examples: [
              {
                en: 'The man who fixed my car is very kind.',
                es: 'El hombre que arregló mi coche es muy amable.',
              },
              {
                en: 'This is the book that everyone is talking about.',
                es: 'Este es el libro del que todos hablan.',
              },
            ],
          },
          {
            heading: 'Omitting the pronoun',
            body: 'In a defining clause you can **omit who/which/that when it is the object** of the clause. You cannot omit it when it is the subject.',
            examples: [
              {
                en: 'The film (that) we watched was great.',
                es: 'La película que vimos fue genial.',
              },
              {
                en: 'The woman who called you is here. (subject — keep it)',
                es: 'La mujer que te llamó está aquí.',
              },
            ],
          },
          {
            heading: 'Non-defining relative clauses',
            body: "A **non-defining** clause adds **extra, non-essential** information, set off by **commas**. Here you **cannot use 'that'** and **cannot omit** the pronoun.",
            examples: [
              {
                en: 'My brother, who lives in Rome, is a chef.',
                es: 'Mi hermano, que vive en Roma, es chef.',
              },
              {
                en: 'The Prado, which is in Madrid, is famous.',
                es: 'El Prado, que está en Madrid, es famoso.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Relative pronouns',
            columns: ['Pronoun', 'Refers to', 'Example'],
            rows: [
              ['who', 'people', 'the girl who sings'],
              ['which', 'things/animals', 'the car which broke down'],
              ['that', 'people/things (defining only)', 'the keys that I lost'],
              ['whose', 'possession', 'the man whose dog barked'],
              ['where', 'places', 'the town where I grew up'],
            ],
          },
        ],
        examples: [
          {
            en: "That's the restaurant where we had dinner.",
            es: 'Ese es el restaurante donde cenamos.',
          },
          {
            en: 'I have a friend whose father is a pilot.',
            es: 'Tengo un amigo cuyo padre es piloto.',
          },
          {
            en: 'The phone (which) I bought last week is broken.',
            es: 'El teléfono que compré la semana pasada está roto.',
          },
          {
            en: 'Paris, which I visited last year, is beautiful.',
            es: 'París, que visité el año pasado, es preciosa.',
          },
          {
            en: 'People who exercise regularly tend to sleep better.',
            es: 'Las personas que hacen ejercicio con regularidad suelen dormir mejor.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The man which lives next door is a doctor.',
            right: 'The man who lives next door is a doctor.',
            why: "Use **who** (or that) for people, not 'which'.",
            esNote: "'Which' es para cosas; para personas usa 'who'.",
          },
          {
            wrong: 'My mother, that is a teacher, loves her job.',
            right: 'My mother, who is a teacher, loves her job.',
            why: "In **non-defining** clauses (with commas) you cannot use 'that'.",
            esNote: "Con comas (no defining) no se usa 'that'.",
          },
          {
            wrong: 'The house where I grew up in is for sale.',
            right:
              'The house where I grew up is for sale. / The house (which) I grew up in is for sale.',
            why: "**where** already means 'in which', so don't add an extra preposition.",
            esNote: "'Where' ya incluye 'in which'; no repitas la preposición.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-rc-1',
            prompt: 'Choose the correct option: "That\'s the woman ___ car was stolen."',
            options: ['who', 'which', 'whose', 'where'],
            answer: 2,
            explain: '**whose** shows possession (her car).',
          },
          {
            kind: 'cloze',
            id: 'b1-rc-2',
            before: 'This is the village',
            after: 'my grandparents were born.',
            answers: ['where'],
            hint: 'a place',
            explain: 'Use **where** for places (= in which).',
          },
          {
            kind: 'correct',
            id: 'b1-rc-3',
            wrong: 'London, that is the capital of England, is huge.',
            answers: ['London, which is the capital of England, is huge.'],
            explain: "Non-defining clause → use 'which', not 'that'.",
          },
          {
            kind: 'order',
            id: 'b1-rc-4',
            tokens: ['The', 'book', 'that', 'I', 'read', 'was', 'boring'],
            answer: 'The book that I read was boring',
            explain: "Defining clause with 'that' as object (could also be omitted).",
          },
          {
            kind: 'translate',
            id: 'b1-rc-5',
            es: 'El hombre que vive al lado es médico.',
            answers: [
              'The man who lives next door is a doctor.',
              'The man that lives next door is a doctor.',
            ],
            explain: 'Persona + cláusula esencial → who/that.',
          },
          {
            kind: 'dictation',
            id: 'b1-rc-6',
            text: 'My sister, who lives in Canada, is visiting next month.',
            explain: "Non-defining clause set off by commas with 'who'.",
          },
        ],
      },
      {
        id: 'b1-modals-deduction',
        level: 'B1',
        title: "Modals of deduction: must, can't, might",
        summary:
          "Express how certain you are about a situation using must (sure it's true), can't (sure it's false), and might/may/could (possible).",
        sections: [
          {
            heading: 'Present deduction',
            body: "Use **must + base verb** when you are **almost certain something is true**, **can't + base verb** when you are **certain it is false**, and **might/may/could** when something is **possible**. The opposite of 'must be' is **can't be**, not 'mustn't be'.",
            examples: [
              {
                en: 'She must be at home; her car is here.',
                es: 'Debe de estar en casa; su coche está aquí.',
              },
              {
                en: "He can't be hungry; he just ate.",
                es: 'No puede tener hambre; acaba de comer.',
              },
              {
                en: 'They might be on holiday.',
                es: 'Puede que estén de vacaciones.',
              },
            ],
          },
          {
            heading: 'Past deduction',
            body: "For deductions about the **past**, use **must/can't/might + have + past participle**.",
            examples: [
              {
                en: 'She must have left early.',
                es: 'Debe de haberse ido temprano.',
              },
              {
                en: "He can't have seen us.",
                es: 'No puede habernos visto.',
              },
              {
                en: 'They might have missed the bus.',
                es: 'Puede que hayan perdido el autobús.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Certainty scale',
            columns: ['Modal', 'Certainty', 'Present', 'Past'],
            rows: [
              ['must', "sure it's true", 'must be tired', 'must have been tired'],
              ['might / may / could', 'possible', 'might be true', 'might have been true'],
              ["can't", "sure it's false", "can't be true", "can't have been true"],
            ],
          },
        ],
        examples: [
          {
            en: 'The lights are off, so they must be asleep.',
            es: 'Las luces están apagadas, así que deben de estar dormidos.',
          },
          {
            en: "You can't be serious!",
            es: '¡No puedes hablar en serio!',
          },
          {
            en: 'It might rain later, so take an umbrella.',
            es: 'Puede que llueva luego, así que lleva paraguas.',
          },
          {
            en: "Someone's knocking — it could be the postman.",
            es: 'Alguien llama; podría ser el cartero.',
          },
          {
            en: "She didn't answer; she must have been busy.",
            es: 'No contestó; debía de estar ocupada.',
          },
        ],
        pitfalls: [
          {
            wrong: "He mustn't be at home; the lights are off.",
            right: "He can't be at home; the lights are off.",
            why: "To say you are sure something is **not** true, use **can't**, not 'mustn't'.",
            esNote: "El contrario de 'must be' (deducción) es 'can't be', no 'mustn't'.",
          },
          {
            wrong: 'She must to be tired.',
            right: 'She must be tired.',
            why: "After a modal verb, use the **bare infinitive** — no 'to'.",
            esNote: "Tras un modal va el verbo sin 'to'.",
          },
          {
            wrong: "They must have lost the game, but I'm not sure.",
            right: "They might have lost the game, but I'm not sure.",
            why: "**must** shows certainty; for a guess you're unsure of, use **might/may/could**.",
            esNote: "'Must' es seguridad; para una posibilidad usa 'might'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-md-1',
            prompt: 'Choose the best option: "You\'ve worked all day. You ___ exhausted."',
            options: ["can't be", 'must be', 'might not be', "mustn't be"],
            answer: 1,
            explain: 'Strong logical certainty (true) → **must be**.',
          },
          {
            kind: 'cloze',
            id: 'b1-md-2',
            before: "He's not answering. He",
            after: "be sleeping. (= sure he isn't)",
            answers: ["can't"],
            hint: "certain it's false",
            explain: "Certain something is NOT true → **can't**.",
          },
          {
            kind: 'correct',
            id: 'b1-md-3',
            wrong: "She mustn't be French; she has a strong English accent.",
            answers: ["She can't be French; she has a strong English accent."],
            explain: "Sure it's false → can't be (not 'mustn't be').",
          },
          {
            kind: 'order',
            id: 'b1-md-4',
            tokens: ['They', 'must', 'have', 'left', 'already'],
            answer: 'They must have left already',
            explain: 'Past deduction: must + have + past participle.',
          },
          {
            kind: 'translate',
            id: 'b1-md-5',
            es: 'Puede que esté en una reunión.',
            answers: [
              'He might be in a meeting.',
              'She might be in a meeting.',
              'He may be in a meeting.',
              'He could be in a meeting.',
            ],
            explain: "'Puede que' → might/may/could + base verb.",
          },
          {
            kind: 'dictation',
            id: 'b1-md-6',
            text: "You can't have finished already; it's only been ten minutes.",
            explain: "Past deduction (sure it's false): can't have + past participle.",
          },
        ],
      },
      {
        id: 'b1-connectors',
        level: 'B1',
        title: 'Connectors: contrast and purpose',
        summary:
          'Join ideas smoothly with although, though, however, despite/in spite of for contrast, and to/in order to/so that for purpose.',
        sections: [
          {
            heading: 'Contrast: although vs despite',
            body: '**Although / even though / though** are followed by a **subject + verb** (a clause). **Despite / in spite of** are followed by a **noun or -ing**. They mean the same but the grammar differs.',
            examples: [
              {
                en: 'Although it was raining, we went out.',
                es: 'Aunque llovía, salimos.',
              },
              {
                en: 'Despite the rain, we went out.',
                es: 'A pesar de la lluvia, salimos.',
              },
              {
                en: 'In spite of being tired, she kept working.',
                es: 'A pesar de estar cansada, siguió trabajando.',
              },
            ],
          },
          {
            heading: 'However and contrast adverbs',
            body: '**However** connects two sentences and is usually followed by a **comma**. It shows contrast between separate ideas. Compare with **but**, which joins clauses within one sentence.',
            examples: [
              {
                en: 'The plan was risky. However, it worked.',
                es: 'El plan era arriesgado. Sin embargo, funcionó.',
              },
              {
                en: "It's expensive, but it's worth it.",
                es: 'Es caro, pero merece la pena.',
              },
            ],
          },
          {
            heading: 'Purpose: to / in order to / so that',
            body: "Express purpose ('para') with **to + base verb** or the more formal **in order to / so as to**. Use **so that + clause** when there is a different subject or a modal (can/could/would).",
            examples: [
              {
                en: 'I went to the bank to pay a bill.',
                es: 'Fui al banco para pagar una factura.',
              },
              {
                en: 'She spoke slowly so that everyone could understand.',
                es: 'Habló despacio para que todos pudieran entender.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Linking words',
            columns: ['Connector', 'Followed by', 'Function'],
            rows: [
              ['although / even though', 'subject + verb', 'contrast'],
              ['despite / in spite of', 'noun / -ing', 'contrast'],
              ['however', 'comma + sentence', 'contrast'],
              ['to / in order to', 'base verb', 'purpose'],
              ['so that', 'subject + modal', 'purpose'],
            ],
          },
        ],
        examples: [
          {
            en: 'Even though he studied hard, he failed the exam.',
            es: 'Aunque estudió mucho, suspendió el examen.',
          },
          {
            en: 'Despite having little money, they travelled a lot.',
            es: 'A pesar de tener poco dinero, viajaron mucho.',
          },
          {
            en: 'We left early in order to avoid the traffic.',
            es: 'Salimos temprano para evitar el tráfico.',
          },
          {
            en: 'The hotel was lovely. However, it was very noisy.',
            es: 'El hotel era encantador. Sin embargo, era muy ruidoso.',
          },
          {
            en: "I'm saving money so that I can buy a car.",
            es: 'Estoy ahorrando para poder comprar un coche.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Despite it was raining, we went out.',
            right: 'Despite the rain, we went out. / Although it was raining, we went out.',
            why: '**Despite** is followed by a noun or -ing, not a subject + verb clause.',
            esNote: "'Despite' + sustantivo/-ing; 'although' + sujeto + verbo.",
          },
          {
            wrong: 'I went to the shop for buy bread.',
            right: 'I went to the shop to buy bread.',
            why: "Purpose ('para') uses **to + base verb**, not 'for + verb'.",
            esNote: "'Para + infinitivo' → 'to + verbo', no 'for'.",
          },
          {
            wrong: 'Although, it was late, we stayed.',
            right: 'Although it was late, we stayed.',
            why: "**Although** is not followed by a comma; it introduces a clause directly. ('However' takes the comma.)",
            esNote: "'Although' no lleva coma inmediata; 'however' sí.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-cn-1',
            prompt: 'Choose the correct option: "___ the bad weather, the match continued."',
            options: ['Although', 'Despite', 'However', 'But'],
            answer: 1,
            explain: "Before a noun phrase ('the bad weather') use **Despite**.",
          },
          {
            kind: 'cloze',
            id: 'b1-cn-2',
            before: "I'm learning English",
            after: 'get a better job.',
            answers: ['to', 'in order to', 'so as to'],
            hint: 'purpose (para)',
            explain: 'Purpose with a base verb → **to / in order to**.',
          },
          {
            kind: 'correct',
            id: 'b1-cn-3',
            wrong: 'Despite of the rain, we went for a walk.',
            answers: [
              'Despite the rain, we went for a walk.',
              'In spite of the rain, we went for a walk.',
            ],
            explain: "It's 'despite' (no 'of') OR 'in spite of'.",
          },
          {
            kind: 'order',
            id: 'b1-cn-4',
            tokens: ['Although', 'she', 'was', 'ill', 'she', 'went', 'to', 'work'],
            answer: 'Although she was ill she went to work',
            explain: 'Although + subject + verb introduces a contrast clause.',
          },
          {
            kind: 'translate',
            id: 'b1-cn-5',
            es: 'A pesar de estar cansado, terminó el trabajo.',
            answers: [
              'Despite being tired, he finished the work.',
              'In spite of being tired, he finished the work.',
              'Despite being tired, she finished the work.',
            ],
            explain: "'A pesar de + infinitivo' → despite/in spite of + -ing.",
          },
          {
            kind: 'dictation',
            id: 'b1-cn-6',
            text: 'The food was excellent. However, the service was slow.',
            explain: "'However' begins a new sentence and is followed by a comma.",
          },
        ],
      },
      {
        id: 'b1-gerunds-infinitives',
        level: 'B1',
        title: 'Gerunds, infinitives and dependent prepositions',
        summary:
          'Decide between -ing and to + verb after other verbs, after prepositions, and in cases where the meaning changes. Plus common verb/adjective + preposition combinations.',
        sections: [
          {
            heading: 'Verb + gerund or infinitive',
            body: 'Some verbs are followed by **-ing** (enjoy, finish, avoid, mind, suggest), others by **to + infinitive** (want, decide, hope, promise, agree). After **prepositions** always use **-ing**.',
            examples: [
              {
                en: 'I enjoy cooking but I want to learn more.',
                es: 'Disfruto cocinando pero quiero aprender más.',
              },
              {
                en: "She's thinking about changing jobs.",
                es: 'Está pensando en cambiar de trabajo.',
              },
            ],
          },
          {
            heading: 'Meaning changes',
            body: 'A few verbs change meaning. **stop + -ing** = quit an activity; **stop + to** = pause in order to. **remember/forget + -ing** = a memory; **+ to** = a task/duty. **try + -ing** = experiment; **+ to** = make an effort.',
            examples: [
              {
                en: 'He stopped smoking. (he quit)',
                es: 'Dejó de fumar.',
              },
              {
                en: 'He stopped to smoke. (he paused to have a cigarette)',
                es: 'Se detuvo para fumar.',
              },
              {
                en: 'Remember to lock the door. (a task)',
                es: 'Acuérdate de cerrar la puerta.',
              },
            ],
          },
          {
            heading: 'Dependent prepositions',
            body: 'Many adjectives and verbs go with a **fixed preposition**: good at, interested in, afraid of, worried about, depend on, rely on, succeed in. Learn them as chunks; the verb after them is **-ing**.',
            examples: [
              {
                en: "She's good at solving problems.",
                es: 'Se le da bien resolver problemas.',
              },
              {
                en: "I'm interested in learning Italian.",
                es: 'Me interesa aprender italiano.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common patterns',
            columns: ['Pattern', 'Examples', 'Followed by'],
            rows: [
              ['verb + -ing', 'enjoy, avoid, finish, suggest', 'cooking'],
              ['verb + to', 'want, decide, hope, agree', 'to go'],
              ['preposition + -ing', 'good at, before, instead of', 'doing'],
              ['adjective + preposition', 'afraid of, interested in, proud of', '+ noun / -ing'],
            ],
          },
        ],
        examples: [
          {
            en: 'Would you mind opening the window?',
            es: '¿Te importaría abrir la ventana?',
          },
          {
            en: 'They decided to move to the countryside.',
            es: 'Decidieron mudarse al campo.',
          },
          {
            en: "I'm worried about failing the exam.",
            es: 'Me preocupa suspender el examen.',
          },
          {
            en: "He's afraid of flying.",
            es: 'Tiene miedo a volar.',
          },
          {
            en: "We can't afford to buy a new car.",
            es: 'No podemos permitirnos comprar un coche nuevo.',
          },
        ],
        pitfalls: [
          {
            wrong: "I'm interested in to learn languages.",
            right: "I'm interested in learning languages.",
            why: "After a **preposition** (in), the verb takes **-ing**, never 'to + infinitive'.",
            esNote: 'Tras preposición siempre va -ing, no infinitivo.',
          },
          {
            wrong: 'I enjoy to read in the evenings.',
            right: 'I enjoy reading in the evenings.',
            why: '**enjoy** is always followed by **-ing**, not the infinitive.',
            esNote: "'Enjoy', 'finish', 'avoid' van con -ing.",
          },
          {
            wrong: "She's good in cooking.",
            right: "She's good at cooking.",
            why: "The fixed combination is **good at**, not 'good in'.",
            esNote: "Es 'good at' (bueno en/para), no 'good in'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b1-gi-1',
            prompt: 'Choose the correct option: "They agreed ___ us with the project."',
            options: ['helping', 'to help', 'help', 'helped'],
            answer: 1,
            explain: '**agree** is followed by the **to-infinitive**.',
          },
          {
            kind: 'cloze',
            id: 'b1-gi-2',
            before: 'On the way home, he stopped',
            after: '(buy) some milk.',
            answers: ['to buy'],
            hint: 'he paused in order to...',
            explain: 'stop + to = pause in order to do something.',
          },
          {
            kind: 'correct',
            id: 'b1-gi-3',
            wrong: "I'm thinking about to start a business.",
            answers: ["I'm thinking about starting a business."],
            explain: "After the preposition 'about', use -ing (starting).",
          },
          {
            kind: 'order',
            id: 'b1-gi-4',
            tokens: ['She', 'is', 'afraid', 'of', 'making', 'mistakes'],
            answer: 'She is afraid of making mistakes',
            explain: 'afraid of + -ing (preposition + gerund).',
          },
          {
            kind: 'translate',
            id: 'b1-gi-5',
            es: 'Me interesa aprender a programar.',
            answers: [
              "I'm interested in learning to code.",
              'I am interested in learning to code.',
              "I'm interested in learning to program.",
            ],
            explain: "'interested in' + -ing; luego 'learn to + base verb'.",
          },
          {
            kind: 'dictation',
            id: 'b1-gi-6',
            text: "Don't forget to call me when you arrive.",
            explain: 'forget + to = a future task you must not forget.',
          },
        ],
      },
    ],
  },
  {
    level: 'B2',
    title: 'B2 · Upper-Intermediate',
    blurb:
      'Tell stories in the past, handle complex passives and reported speech, speculate about the past, and add emphasis and nuance like a confident speaker.',
    lessons: [
      {
        id: 'b2-narrative-tenses',
        level: 'B2',
        title: 'Narrative tenses (past perfect continuous)',
        summary:
          'Combine past simple, past continuous, past perfect and past perfect continuous to tell stories and make the order and duration of past events clear.',
        sections: [
          {
            heading: 'The four narrative tenses',
            body: 'Use **past simple** for the main events, **past continuous** for the background action in progress, **past perfect** for an earlier completed event, and **past perfect continuous** for an action that had been going on up to a point in the past.',
            examples: [
              {
                en: 'We were walking home when it started to rain.',
                es: 'Íbamos caminando a casa cuando empezó a llover.',
              },
              {
                en: 'By the time we arrived, the film had already started.',
                es: 'Para cuando llegamos, la película ya había empezado.',
              },
              {
                en: 'She was tired because she had been working all day.',
                es: 'Estaba cansada porque había estado trabajando todo el día.',
              },
            ],
          },
          {
            heading: 'Past perfect continuous: duration before a past moment',
            body: 'Form it with **had been + -ing**. It stresses how long an activity lasted before another past event, and often explains a result. Compare it with the past perfect, which focuses on completion rather than duration.',
            examples: [
              {
                en: 'They had been driving for six hours when the car broke down.',
                es: 'Llevaban seis horas conduciendo cuando el coche se averió.',
              },
              {
                en: 'His eyes were red; he had been crying.',
                es: 'Tenía los ojos rojos; había estado llorando.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Narrative tenses at a glance',
            columns: ['Tense', 'Form', 'Use'],
            rows: [
              ['Past simple', 'worked', 'main completed events'],
              ['Past continuous', 'was working', 'background / interrupted action'],
              ['Past perfect', 'had worked', 'earlier completed event'],
              ['Past perfect continuous', 'had been working', 'duration up to a past point'],
            ],
          },
        ],
        examples: [
          {
            en: 'When I got to the station, the train had just left.',
            es: 'Cuando llegué a la estación, el tren acababa de salir.',
          },
          {
            en: 'The ground was wet because it had been raining all night.',
            es: 'El suelo estaba mojado porque había estado lloviendo toda la noche.',
          },
          {
            en: 'While she was cooking, the guests were arriving.',
            es: 'Mientras ella cocinaba, los invitados iban llegando.',
          },
          {
            en: 'He had been studying English for years before he moved to London.',
            es: 'Llevaba años estudiando inglés antes de mudarse a Londres.',
          },
          {
            en: 'I realised I had left my keys at home.',
            es: 'Me di cuenta de que me había dejado las llaves en casa.',
          },
        ],
        pitfalls: [
          {
            wrong: 'When I arrived, the meeting already started.',
            right: 'When I arrived, the meeting had already started.',
            why: 'Use the **past perfect** for the event that happened before the main past event.',
            esNote:
              "El español usa el pluscuamperfecto ('ya había empezado'); no lo omitas en inglés.",
          },
          {
            wrong: 'I was knowing the answer.',
            right: 'I knew the answer.',
            why: 'Stative verbs like **know** are not normally used in continuous forms.',
            esNote: 'Verbos de estado (know, like, want) no van en forma continua.',
          },
          {
            wrong: 'She had been finished her work.',
            right: 'She had finished her work.',
            why: 'Past perfect continuous needs **been + -ing**, not been + past participle.',
            esNote: "La forma continua es 'had been working', no 'had been finished'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-nt-1',
            prompt: 'Choose the best option: "They were exhausted because they ___ all morning."',
            options: ['had walked', 'had been walking', 'were walking', 'walked'],
            answer: 1,
            explain:
              'The **past perfect continuous** stresses the duration that caused the result (exhaustion).',
          },
          {
            kind: 'cloze',
            id: 'b2-nt-2',
            before: 'By the time the police arrived, the thief ',
            after: ' (escape).',
            answers: ['had escaped'],
            explain: 'An event completed before another past event takes the **past perfect**.',
            hint: 'past perfect',
          },
          {
            kind: 'cloze',
            id: 'b2-nt-3',
            before: 'I was tired because I ',
            after: ' for hours.',
            answers: ['had been studying', 'had been working', 'had been driving'],
            explain: 'Use **had been + -ing** to show a long activity before the past moment.',
          },
          {
            kind: 'correct',
            id: 'b2-nt-4',
            wrong: 'When we got there, the concert already finished.',
            answers: ['When we got there, the concert had already finished.'],
            explain: 'The concert finished before we arrived, so use the **past perfect**.',
          },
          {
            kind: 'order',
            id: 'b2-nt-5',
            tokens: ['She', 'had', 'been', 'waiting', 'for', 'an', 'hour', 'when', 'he', 'called'],
            answer: 'She had been waiting for an hour when he called',
            explain: 'Past perfect continuous (duration) + past simple (interrupting event).',
          },
          {
            kind: 'translate',
            id: 'b2-nt-6',
            es: 'Íbamos caminando a casa cuando empezó a llover.',
            answers: [
              'We were walking home when it started to rain.',
              'We were walking home when it began to rain.',
            ],
            explain: 'Past continuous (background) interrupted by past simple.',
          },
          {
            kind: 'dictation',
            id: 'b2-nt-7',
            text: 'The ground was wet because it had been raining all night.',
            explain: "Listen for the contracted 'had been' and the -ing ending.",
          },
        ],
      },
      {
        id: 'b2-future-perfect-future-in-past',
        level: 'B2',
        title: 'Future perfect & future in the past',
        summary:
          'Talk about actions that will be finished by a future time, and describe the future as seen from a point in the past.',
        sections: [
          {
            heading: 'Future perfect: finished before a future time',
            body: 'Use **will have + past participle** to say something will be complete before a deadline in the future. It often appears with **by** (by then, by 2030, by the time...). The continuous form **will have been + -ing** stresses duration.',
            examples: [
              {
                en: 'By next June, I will have finished my degree.',
                es: 'Para el próximo junio, habré terminado mi carrera.',
              },
              {
                en: "By 8 o'clock, they will have been travelling for ten hours.",
                es: 'Para las ocho, llevarán diez horas viajando.',
              },
            ],
          },
          {
            heading: 'Future in the past',
            body: 'To describe what was still future from an earlier viewpoint, use **was/were going to**, **would**, or **was/were about to**. This is common in reported speech and storytelling.',
            examples: [
              {
                en: 'She said she would call me later.',
                es: 'Dijo que me llamaría más tarde.',
              },
              {
                en: 'We were going to leave, but the storm started.',
                es: 'Íbamos a salir, pero empezó la tormenta.',
              },
              {
                en: 'I was about to phone you when you knocked.',
                es: 'Estaba a punto de llamarte cuando llamaste a la puerta.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Forms',
            columns: ['Meaning', 'Form', 'Example'],
            rows: [
              ['Finished before future point', 'will have + p.p.', 'will have left'],
              ['Duration up to future point', 'will have been + -ing', 'will have been working'],
              [
                'Future seen from the past',
                'was going to / would / was about to',
                'was going to leave',
              ],
            ],
          },
        ],
        examples: [
          {
            en: "Don't call at nine; the show will have ended by then.",
            es: 'No llames a las nueve; el programa ya habrá terminado para entonces.',
          },
          {
            en: 'In August we will have been living here for ten years.',
            es: 'En agosto llevaremos diez años viviendo aquí.',
          },
          {
            en: 'He promised he would help us move.',
            es: 'Prometió que nos ayudaría a mudarnos.',
          },
          {
            en: 'They were about to sign the contract when the lawyer called.',
            es: 'Estaban a punto de firmar el contrato cuando llamó el abogado.',
          },
          {
            en: 'By the time you read this, I will have left the country.',
            es: 'Para cuando leas esto, ya habré salido del país.',
          },
        ],
        pitfalls: [
          {
            wrong: 'By next year I will finish the project.',
            right: 'By next year I will have finished the project.',
            why: 'With **by + future time** for a completed action, use the **future perfect**.',
            esNote: "'Para el año que viene habré terminado' = future perfect, no future simple.",
          },
          {
            wrong: 'She said she will call me.',
            right: 'She said she would call me.',
            why: 'After a past reporting verb, **will** shifts to **would** (future in the past).',
            esNote: "Tras un verbo en pasado, 'will' pasa a 'would'.",
          },
          {
            wrong: 'We were going to leaving early.',
            right: 'We were going to leave early.',
            why: '**Be going to** is followed by the bare infinitive, not -ing.',
            esNote: "'going to' + infinitivo sin 'to'-ing: going to leave.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-fp-1',
            prompt: 'Choose the best option: "By the time we get home, the kids ___ asleep."',
            options: ['will fall', 'will have fallen', 'fall', 'would fall'],
            answer: 1,
            explain:
              'The action will be complete before a future point, so use the **future perfect**.',
          },
          {
            kind: 'cloze',
            id: 'b2-fp-2',
            before: "In two years' time, I ",
            after: ' (work) here for a decade.',
            answers: ['will have been working', "'ll have been working"],
            explain: 'Duration up to a future point uses the **future perfect continuous**.',
          },
          {
            kind: 'cloze',
            id: 'b2-fp-3',
            before: 'He told me he ',
            after: ' arrive before noon.',
            answers: ['would'],
            explain: 'Future in the past after a past reporting verb uses **would**.',
          },
          {
            kind: 'correct',
            id: 'b2-fp-4',
            wrong: 'By Friday I will receive your answer, I hope.',
            answers: [
              'By Friday I will have received your answer, I hope.',
              "By Friday I'll have received your answer, I hope.",
            ],
            explain: 'Completion before a future deadline needs **will have + past participle**.',
          },
          {
            kind: 'order',
            id: 'b2-fp-5',
            tokens: ['We', 'were', 'about', 'to', 'leave', 'when', 'the', 'phone', 'rang'],
            answer: 'We were about to leave when the phone rang',
            explain: "'Be about to' = on the point of doing something (future in the past).",
          },
          {
            kind: 'translate',
            id: 'b2-fp-6',
            es: 'Para el próximo junio, habré terminado mi carrera.',
            answers: [
              'By next June, I will have finished my degree.',
              "By next June, I'll have finished my degree.",
            ],
            explain: 'By + future time + future perfect.',
          },
          {
            kind: 'dictation',
            id: 'b2-fp-7',
            text: 'By the time you read this, I will have left the country.',
            explain: "Notice the future perfect 'will have left'.",
          },
        ],
      },
      {
        id: 'b2-mixed-conditionals',
        level: 'B2',
        title: 'Mixed conditionals & alternatives to if',
        summary:
          "Mix time references in conditional sentences and use alternatives to 'if' such as unless, provided that, as long as, and inverted conditionals.",
        sections: [
          {
            heading: 'Mixed conditionals',
            body: 'Mix the times when the condition and result belong to different moments. **Past condition → present result**: if + past perfect, would + infinitive. **Present condition → past result**: if + past simple, would have + past participle.',
            examples: [
              {
                en: 'If I had studied medicine, I would be a doctor now.',
                es: 'Si hubiera estudiado medicina, ahora sería médico.',
              },
              {
                en: "If she weren't so shy, she would have asked for a raise.",
                es: 'Si no fuera tan tímida, habría pedido un aumento.',
              },
            ],
          },
          {
            heading: "Alternatives to 'if'",
            body: 'Use **unless** (= if not), **provided/providing that**, **as long as**, **on condition that**, **suppose/supposing**, and **in case**. In formal English you can also invert: **Had I known...**, **Were I you...**, **Should you need...**.',
            examples: [
              {
                en: 'You can borrow it as long as you return it tomorrow.',
                es: 'Puedes tomarlo prestado siempre que lo devuelvas mañana.',
              },
              {
                en: "Unless you hurry, you'll miss the bus.",
                es: 'A menos que te des prisa, perderás el autobús.',
              },
              {
                en: 'Had I known you were coming, I would have cooked.',
                es: 'Si hubiera sabido que venías, habría cocinado.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Mixed conditional patterns',
            columns: ['Condition (if-clause)', 'Result (main clause)', 'Time mix'],
            rows: [
              ['if + past perfect', 'would + infinitive', 'past → present'],
              ['if + past simple', 'would have + p.p.', 'present → past'],
            ],
          },
        ],
        examples: [
          {
            en: "If he had saved money, he wouldn't be in debt today.",
            es: 'Si hubiera ahorrado dinero, no estaría endeudado hoy.',
          },
          {
            en: 'If I were more organised, I would have finished on time.',
            es: 'Si fuera más organizado, habría terminado a tiempo.',
          },
          {
            en: 'Take an umbrella in case it rains.',
            es: 'Lleva un paraguas por si llueve.',
          },
          {
            en: "You'll pass provided that you revise.",
            es: 'Aprobarás siempre que repases.',
          },
          {
            en: 'Should you have any questions, contact us.',
            es: 'Si tuviera alguna pregunta, contáctenos.',
          },
          {
            en: "Were I you, I'd accept the offer.",
            es: 'Yo que tú, aceptaría la oferta.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would have come.',
            right: 'If I had known, I would have come.',
            why: "Don't use **would** in the if-clause; use the **past perfect**.",
            esNote: "Error muy común: 'would have' no va en la cláusula con 'if'.",
          },
          {
            wrong: "Unless you don't study, you'll fail.",
            right: "Unless you study, you'll fail.",
            why: "**Unless** already means 'if not', so don't add another negative.",
            esNote: "'Unless' ya es 'si no'; no añadas otra negación.",
          },
          {
            wrong: 'If I had studied, I will be a doctor now.',
            right: 'If I had studied, I would be a doctor now.',
            why: "A present hypothetical result takes **would + infinitive**, not 'will'.",
            esNote: "Resultado presente hipotético: 'would be', no 'will be'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-mc-1',
            prompt: 'Choose the best option: "If I had taken the job, I ___ in Berlin now."',
            options: ['would live', 'will live', 'would have lived', 'lived'],
            answer: 0,
            explain: 'Past condition, present result = **would + infinitive** (mixed conditional).',
          },
          {
            kind: 'cloze',
            id: 'b2-mc-2',
            before: "If she weren't afraid of flying, she ",
            after: ' us in Japan last year.',
            answers: ['would have visited', 'would have joined'],
            explain: 'Present condition, past result = **would have + past participle**.',
          },
          {
            kind: 'cloze',
            id: 'b2-mc-3',
            before: '',
            after: ' I known earlier, I would have helped.',
            answers: ['Had'],
            explain: "Inverted conditional: **Had + subject + past participle** replaces 'if'.",
          },
          {
            kind: 'correct',
            id: 'b2-mc-4',
            wrong: 'If I would have more time, I would learn the piano.',
            answers: ['If I had more time, I would learn the piano.'],
            explain: "The if-clause uses the **past simple**, never 'would have'.",
          },
          {
            kind: 'order',
            id: 'b2-mc-5',
            tokens: ['You', 'can', 'stay', 'as', 'long', 'as', 'you', 'stay', 'quiet'],
            answer: 'You can stay as long as you stay quiet',
            explain: "'As long as' introduces a condition (= only if).",
          },
          {
            kind: 'translate',
            id: 'b2-mc-6',
            es: 'Si hubiera estudiado medicina, ahora sería médico.',
            answers: [
              'If I had studied medicine, I would be a doctor now.',
              "If I had studied medicine, I'd be a doctor now.",
            ],
            explain: 'Past condition → present result.',
          },
          {
            kind: 'dictation',
            id: 'b2-mc-7',
            text: "Unless you hurry, you'll miss the last train.",
            explain: "'Unless' = if not.",
          },
        ],
      },
      {
        id: 'b2-passive-voice',
        level: 'B2',
        title: 'The passive: all tenses, causative & reporting',
        summary:
          'Form the passive in every tense, use causative have/get something done, and report opinions impersonally with passive reporting structures.',
        sections: [
          {
            heading: 'Passive across the tenses',
            body: 'Form the passive with the right tense of **be + past participle**. Use it when the action matters more than the doer, or when the doer is unknown or obvious. Add **by + agent** only when it gives useful information.',
            examples: [
              {
                en: 'The bridge is being repaired this week.',
                es: 'El puente se está reparando esta semana.',
              },
              {
                en: 'The documents had been signed before the meeting.',
                es: 'Los documentos se habían firmado antes de la reunión.',
              },
              {
                en: 'The results will be announced tomorrow.',
                es: 'Los resultados se anunciarán mañana.',
              },
            ],
          },
          {
            heading: 'Causative: have/get something done',
            body: 'Use **have/get + object + past participle** to say someone else does a service for you. **Get** is more informal than **have**.',
            examples: [
              {
                en: 'I had my hair cut yesterday.',
                es: 'Ayer me corté el pelo (me lo cortaron).',
              },
              {
                en: "We're getting the kitchen painted.",
                es: 'Estamos haciendo que nos pinten la cocina.',
              },
            ],
          },
          {
            heading: 'Passive reporting',
            body: 'To report beliefs impersonally, use **It is said that...** or **subject + be + said/believed/thought + to-infinitive**. Use a perfect infinitive (**to have + p.p.**) for earlier actions.',
            examples: [
              {
                en: 'It is believed that the painting is genuine.',
                es: 'Se cree que el cuadro es auténtico.',
              },
              {
                en: 'He is thought to have left the country.',
                es: 'Se cree que ha salido del país.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Passive forms by tense',
            columns: ['Tense', 'Passive form', 'Example'],
            rows: [
              ['Present simple', 'am/is/are + p.p.', 'is made'],
              ['Present continuous', 'am/is/are being + p.p.', 'is being made'],
              ['Past simple', 'was/were + p.p.', 'was made'],
              ['Present perfect', 'has/have been + p.p.', 'has been made'],
              ['Past perfect', 'had been + p.p.', 'had been made'],
              ['Future / modal', 'will/can be + p.p.', 'will be made'],
            ],
          },
        ],
        examples: [
          {
            en: 'This house was built in 1920.',
            es: 'Esta casa se construyó en 1920.',
          },
          {
            en: 'The road is being widened at the moment.',
            es: 'La carretera se está ensanchando ahora mismo.',
          },
          {
            en: 'I need to get my car serviced.',
            es: 'Necesito que me revisen el coche.',
          },
          {
            en: 'The suspect is said to be dangerous.',
            es: 'Se dice que el sospechoso es peligroso.',
          },
          {
            en: 'Nothing can be done now.',
            es: 'Ahora no se puede hacer nada.',
          },
          {
            en: 'She had her passport stolen at the airport.',
            es: 'Le robaron el pasaporte en el aeropuerto.',
          },
        ],
        pitfalls: [
          {
            wrong: 'My car was stolen by someone yesterday.',
            right: 'My car was stolen yesterday.',
            why: 'Omit **by + agent** when the doer is unknown or unimportant.',
            esNote: "No añadas 'by someone' si el agente es desconocido o irrelevante.",
          },
          {
            wrong: 'I cut my hair yesterday (at the salon).',
            right: 'I had my hair cut yesterday.',
            why: 'If a professional does it for you, use the **causative** have something done.',
            esNote: "'Me corté el pelo' en peluquería = 'I had my hair cut', no 'I cut my hair'.",
          },
          {
            wrong: 'It is said the company to be in trouble.',
            right: 'The company is said to be in trouble.',
            why: 'In the personal pattern the subject comes first: **subject + be said + to-infinitive**.',
            esNote: 'Estructura: sujeto + is said + to + infinitivo.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-pv-1',
            prompt: 'Choose the passive: "The new stadium ___ right now."',
            options: ['is built', 'is being built', 'has built', 'builds'],
            answer: 1,
            explain: 'Present continuous passive = **is being + past participle**.',
          },
          {
            kind: 'cloze',
            id: 'b2-pv-2',
            before: 'We are going to ',
            after: ' (have / the windows / clean) next week.',
            answers: ['have the windows cleaned', 'get the windows cleaned'],
            explain: 'Causative: have/get + object + past participle.',
          },
          {
            kind: 'cloze',
            id: 'b2-pv-3',
            before: 'The thief is believed ',
            after: ' through the window.',
            answers: ['to have escaped', 'to have climbed', 'to have entered'],
            explain: 'Passive reporting with a **perfect infinitive** for an earlier action.',
          },
          {
            kind: 'correct',
            id: 'b2-pv-4',
            wrong: 'Yesterday I repaired my watch at the shop.',
            answers: [
              'Yesterday I had my watch repaired at the shop.',
              'Yesterday I got my watch repaired at the shop.',
            ],
            explain: 'Someone else did the repair, so use the **causative**.',
          },
          {
            kind: 'order',
            id: 'b2-pv-5',
            tokens: ['The', 'results', 'will', 'be', 'announced', 'next', 'Monday'],
            answer: 'The results will be announced next Monday',
            explain: 'Future passive = will be + past participle.',
          },
          {
            kind: 'translate',
            id: 'b2-pv-6',
            es: 'Se cree que el cuadro es auténtico.',
            answers: [
              'It is believed that the painting is genuine.',
              'The painting is believed to be genuine.',
            ],
            explain: 'Two correct passive reporting structures.',
          },
          {
            kind: 'dictation',
            id: 'b2-pv-7',
            text: 'The bridge is being repaired this week.',
            explain: 'Present continuous passive.',
          },
        ],
      },
      {
        id: 'b2-reported-speech',
        level: 'B2',
        title: 'Reported speech: commands, requests & reporting verbs',
        summary:
          "Report statements, questions, commands and requests, and use specific reporting verbs with the right patterns instead of always saying 'said'.",
        sections: [
          {
            heading: 'Backshift and changes',
            body: 'After a past reporting verb, shift tenses back one step (present → past, will → would, can → could). Also change pronouns and time/place words (**now → then, today → that day, here → there, tomorrow → the next day**).',
            examples: [
              {
                en: '"I\'m tired," she said. → She said she was tired.',
                es: '—Estoy cansada —dijo. → Dijo que estaba cansada.',
              },
              {
                en: 'He said he would arrive the next day.',
                es: 'Dijo que llegaría al día siguiente.',
              },
            ],
          },
          {
            heading: 'Commands, requests and questions',
            body: 'Report commands and requests with **tell/ask + object + (not) to + infinitive**. Report questions with **ask + if/whether** (yes/no) or the **question word**, using normal word order (no inversion, no do/does/did).',
            examples: [
              {
                en: 'She told me to wait outside.',
                es: 'Me dijo que esperara fuera.',
              },
              {
                en: 'He asked me not to be late.',
                es: 'Me pidió que no llegara tarde.',
              },
              {
                en: 'They asked where I lived.',
                es: 'Me preguntaron dónde vivía.',
              },
            ],
          },
          {
            heading: 'Specific reporting verbs',
            body: 'Use precise verbs with their own patterns: **suggest doing**, **offer to do**, **promise to do**, **admit doing**, **accuse someone of doing**, **apologise for doing**, **warn someone not to do**, **remind someone to do**.',
            examples: [
              {
                en: 'He offered to help us.',
                es: 'Se ofreció a ayudarnos.',
              },
              {
                en: 'She accused him of lying.',
                es: 'Lo acusó de mentir.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reporting verb patterns',
            columns: ['Pattern', 'Verbs', 'Example'],
            rows: [
              ['verb + to-inf', 'offer, promise, refuse, agree', 'promised to call'],
              ['verb + obj + to-inf', 'tell, ask, remind, warn, advise', 'asked me to wait'],
              ['verb + -ing', 'suggest, admit, deny, recommend', 'denied stealing it'],
              ['verb + obj + of + -ing', 'accuse, suspect', 'accused him of cheating'],
            ],
          },
        ],
        examples: [
          {
            en: 'She said she had already seen that film.',
            es: 'Dijo que ya había visto esa película.',
          },
          {
            en: 'The teacher told us to open our books.',
            es: 'El profesor nos dijo que abriéramos los libros.',
          },
          {
            en: 'He asked whether I wanted a coffee.',
            es: 'Me preguntó si quería un café.',
          },
          {
            en: 'They warned us not to swim there.',
            es: 'Nos advirtieron que no nadáramos allí.',
          },
          {
            en: 'I reminded her to lock the door.',
            es: 'Le recordé que cerrara la puerta con llave.',
          },
          {
            en: 'He admitted breaking the window.',
            es: 'Admitió haber roto la ventana.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He asked me where do I live.',
            right: 'He asked me where I lived.',
            why: "Reported questions use **statement word order** and no auxiliary 'do'.",
            esNote: "En preguntas indirectas no se invierte ni se usa 'do/does/did'.",
          },
          {
            wrong: 'She said me that she was busy.',
            right: 'She told me that she was busy. / She said she was busy.',
            why: '**Say** has no personal object; **tell** needs one (tell someone).',
            esNote: "'say' no lleva objeto de persona; 'tell' sí: tell me.",
          },
          {
            wrong: 'He suggested me to go.',
            right: 'He suggested going. / He suggested that I go.',
            why: '**Suggest** is not followed by object + to-infinitive.',
            esNote: "'suggest' + -ing o 'suggest that...', nunca 'suggest someone to do'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-rs-1',
            prompt: 'Report it: "Don\'t touch that," she said. → She ___ that.',
            options: [
              'said me not to touch',
              'told me not to touch',
              'told me to not touch',
              'said not touching',
            ],
            answer: 1,
            explain: 'Commands: **tell + object + not + to-infinitive**.',
          },
          {
            kind: 'cloze',
            id: 'b2-rs-2',
            before: 'He asked me ',
            after: ' I had finished the report.',
            answers: ['if', 'whether'],
            explain: 'Yes/no questions are reported with **if** or **whether**.',
          },
          {
            kind: 'cloze',
            id: 'b2-rs-3',
            before: 'She apologised ',
            after: ' late.',
            answers: ['for being', 'for arriving'],
            explain: '**Apologise for + -ing**.',
          },
          {
            kind: 'correct',
            id: 'b2-rs-4',
            wrong: 'They asked me what time was it.',
            answers: ['They asked me what time it was.'],
            explain: 'Reported questions keep **statement word order**.',
          },
          {
            kind: 'order',
            id: 'b2-rs-5',
            tokens: ['He', 'promised', 'to', 'pay', 'me', 'back', 'the', 'next', 'day'],
            answer: 'He promised to pay me back the next day',
            explain: "'Promise + to-infinitive'; 'tomorrow' becomes 'the next day'.",
          },
          {
            kind: 'translate',
            id: 'b2-rs-6',
            es: 'Me dijo que esperara fuera.',
            answers: ['She told me to wait outside.', 'He told me to wait outside.'],
            explain: 'Reported command: tell + object + to-infinitive.',
          },
          {
            kind: 'dictation',
            id: 'b2-rs-7',
            text: 'She said she had already seen that film.',
            explain: 'Backshift: present perfect becomes past perfect.',
          },
        ],
      },
      {
        id: 'b2-past-modals-deduction',
        level: 'B2',
        title: "Past modals: deduction, needn't have & didn't need to",
        summary:
          "Speculate about the past with must have, can't have and might have, and distinguish needn't have done from didn't need to do.",
        sections: [
          {
            heading: 'Deduction about the past',
            body: "Use **must have + p.p.** for a confident positive conclusion, **can't/couldn't have + p.p.** for a confident negative one, and **might/may/could have + p.p.** for a possibility.",
            examples: [
              {
                en: 'The ground is wet; it must have rained.',
                es: 'El suelo está mojado; debe de haber llovido.',
              },
              {
                en: "She can't have heard you; she had headphones on.",
                es: 'No puede haberte oído; llevaba auriculares.',
              },
              {
                en: 'He might have missed the train.',
                es: 'Puede que haya perdido el tren.',
              },
            ],
          },
          {
            heading: 'Criticism and regret: should have',
            body: "Use **should/ought to have + p.p.** to criticise or express regret about a past action, and **shouldn't have + p.p.** for something that was a mistake to do.",
            examples: [
              {
                en: 'You should have told me earlier.',
                es: 'Deberías habérmelo dicho antes.',
              },
              {
                en: "I shouldn't have eaten so much.",
                es: 'No debería haber comido tanto.',
              },
            ],
          },
          {
            heading: "needn't have vs didn't need to",
            body: "**Needn't have done** = you did it, but it was unnecessary. **Didn't need to do** usually = it wasn't necessary, so (often) you didn't do it.",
            examples: [
              {
                en: "You needn't have cooked — we'd already eaten.",
                es: 'No hacía falta que cocinaras: ya habíamos comido (pero cocinaste).',
              },
              {
                en: "I didn't need to buy milk; there was plenty.",
                es: 'No necesitaba comprar leche; había de sobra (y no compré).',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Past modal meanings',
            columns: ['Form', 'Meaning'],
            rows: [
              ['must have + p.p.', 'certain it happened'],
              ["can't / couldn't have + p.p.", "certain it didn't happen"],
              ['might / may / could have + p.p.', 'possible'],
              ["should(n't) have + p.p.", 'criticism / regret'],
              ["needn't have + p.p.", 'did it, but unnecessary'],
            ],
          },
        ],
        examples: [
          {
            en: 'They must have left already; the lights are off.',
            es: 'Ya deben de haberse ido; las luces están apagadas.',
          },
          {
            en: "You can't have finished the whole book in one night!",
            es: '¡No puedes haber terminado el libro entero en una noche!',
          },
          {
            en: 'We should have booked a table.',
            es: 'Deberíamos haber reservado mesa.',
          },
          {
            en: 'She might have forgotten the meeting.',
            es: 'Puede que se haya olvidado de la reunión.',
          },
          {
            en: "You needn't have waited for me.",
            es: 'No hacía falta que me esperaras.',
          },
          {
            en: "I didn't need to bring an umbrella in the end.",
            es: 'Al final no necesitaba traer paraguas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He must left already.',
            right: 'He must have left already.',
            why: 'Past deduction needs **have + past participle** after the modal.',
            esNote: "Deducción en pasado: modal + 'have' + participio.",
          },
          {
            wrong: 'She must not have heard me. (to mean impossibility)',
            right: "She can't have heard me.",
            why: "For a confident negative deduction, use **can't/couldn't have**, not 'must not have'.",
            esNote: "Para negar con seguridad usa 'can't have', no 'mustn't have'.",
          },
          {
            wrong: "You didn't need to have helped me, but thanks.",
            right: "You needn't have helped me, but thanks.",
            why: "If the action was done but unnecessary, use **needn't have + p.p.**",
            esNote: "'needn't have' = lo hiciste sin necesidad; 'didn't need to' = no hacía falta.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-pm-1',
            prompt: 'Choose the best option: "The streets are wet. It ___ during the night."',
            options: ['must rain', 'must have rained', "can't have rained", 'should rain'],
            answer: 1,
            explain: 'A confident past conclusion uses **must have + past participle**.',
          },
          {
            kind: 'cloze',
            id: 'b2-pm-2',
            before: 'He failed the exam. He ',
            after: ' harder.',
            answers: ['should have studied', 'ought to have studied'],
            explain: 'Regret/criticism about the past = **should have + past participle**.',
          },
          {
            kind: 'cloze',
            id: 'b2-pm-3',
            before: 'You ',
            after: ' bought tickets — entry was free!',
            answers: ["needn't have", "needn't have", "didn't need to"],
            explain:
              "An unnecessary action that was nonetheless done = **needn't have + p.p.** (didn't need to is also accepted by many speakers).",
          },
          {
            kind: 'correct',
            id: 'b2-pm-4',
            wrong: "She can't finished it so fast.",
            answers: ["She can't have finished it so fast."],
            explain: "Negative past deduction = **can't have + past participle**.",
          },
          {
            kind: 'order',
            id: 'b2-pm-5',
            tokens: ['They', 'might', 'have', 'taken', 'the', 'wrong', 'turning'],
            answer: 'They might have taken the wrong turning',
            explain: 'Past possibility = might have + past participle.',
          },
          {
            kind: 'translate',
            id: 'b2-pm-6',
            es: 'Deberías habérmelo dicho antes.',
            answers: [
              'You should have told me earlier.',
              'You should have told me before.',
              'You ought to have told me earlier.',
            ],
            explain: 'Regret/criticism with should have + past participle.',
          },
          {
            kind: 'dictation',
            id: 'b2-pm-7',
            text: "You needn't have waited for me.",
            explain: "needn't have = it was done but unnecessary.",
          },
        ],
      },
      {
        id: 'b2-relative-participle-clauses',
        level: 'B2',
        title: 'Reduced relative & participle clauses',
        summary:
          'Make sentences more economical by reducing relative clauses to participle clauses and using -ing/-ed clauses to combine information.',
        sections: [
          {
            heading: 'Reducing relative clauses',
            body: "When a relative clause has an active meaning, reduce it to a **present participle (-ing)**. When it has a passive meaning, reduce it to a **past participle (-ed/-en)**. Drop the relative pronoun and the verb 'be'.",
            examples: [
              {
                en: 'The man who is talking to Sue is my boss. → The man talking to Sue is my boss.',
                es: 'El hombre que habla con Sue es mi jefe.',
              },
              {
                en: 'The books that were left on the table are mine. → The books left on the table are mine.',
                es: 'Los libros dejados sobre la mesa son míos.',
              },
            ],
          },
          {
            heading: 'Participle clauses for time and reason',
            body: 'Participle clauses can replace clauses of **time** or **reason** when both clauses share the same subject. Use a **present participle** for an active/same-time action, a **perfect participle (having + p.p.)** for an earlier action, and a **past participle** for a passive meaning.',
            examples: [
              {
                en: 'Feeling tired, she went to bed early.',
                es: 'Sintiéndose cansada, se fue pronto a la cama.',
              },
              {
                en: 'Having finished the report, he left the office.',
                es: 'Habiendo terminado el informe, salió de la oficina.',
              },
              {
                en: 'Built in 1850, the house needs repairs.',
                es: 'Construida en 1850, la casa necesita reparaciones.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Reducing relative clauses',
            columns: ['Full clause', 'Reduced form', 'Meaning'],
            rows: [
              ['who is waiting', 'waiting', 'active'],
              ['which was made', 'made', 'passive'],
              ['who have finished', 'having finished', 'earlier active'],
            ],
          },
        ],
        examples: [
          {
            en: 'Anyone wanting a ticket should queue here.',
            es: 'Cualquiera que quiera una entrada debe hacer cola aquí.',
          },
          {
            en: 'The car parked outside belongs to my neighbour.',
            es: 'El coche aparcado fuera es de mi vecino.',
          },
          {
            en: 'Not knowing the way, we asked a local.',
            es: 'Como no sabíamos el camino, le preguntamos a un lugareño.',
          },
          {
            en: 'Written in plain English, the guide is easy to follow.',
            es: 'Escrita en inglés sencillo, la guía es fácil de seguir.',
          },
          {
            en: 'Having lived abroad, she speaks four languages.',
            es: 'Como ha vivido en el extranjero, habla cuatro idiomas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The people waited outside were angry.',
            right: 'The people waiting outside were angry.',
            why: 'An active meaning needs the **present participle (-ing)**, not the past participle.',
            esNote: "Significado activo: 'waiting' (que esperaban), no 'waited'.",
          },
          {
            wrong: 'Stolen the money, he ran away.',
            right: 'Having stolen the money, he ran away.',
            why: 'For an earlier completed action use the **perfect participle (having + p.p.)**.',
            esNote: "Acción anterior: 'having + participio'.",
          },
          {
            wrong: 'Walking down the street, a dog bit me.',
            right: 'Walking down the street, I was bitten by a dog.',
            why: 'The participle and the main clause must share the **same subject** (a dangling participle is wrong).',
            esNote: 'El sujeto del participio y el de la oración principal deben coincidir.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-rc-1',
            prompt: 'Reduce: "The woman who is sitting next to me is a doctor."',
            options: [
              'The woman sat next to me',
              'The woman sitting next to me',
              'The woman seated next to me being',
              'The woman who sitting next to me',
            ],
            answer: 1,
            explain: 'Active meaning reduces to the **present participle**: sitting.',
          },
          {
            kind: 'cloze',
            id: 'b2-rc-2',
            before: 'The bridge ',
            after: ' last year is already cracking.',
            answers: ['built', 'constructed'],
            explain: 'Passive meaning reduces to the **past participle**.',
          },
          {
            kind: 'cloze',
            id: 'b2-rc-3',
            before: '',
            after: ' finished her degree, she started job-hunting.',
            answers: ['Having'],
            explain: 'An earlier action uses the **perfect participle**: Having + p.p.',
          },
          {
            kind: 'correct',
            id: 'b2-rc-4',
            wrong: 'The letters wrote in 1900 are valuable.',
            answers: ['The letters written in 1900 are valuable.'],
            explain: "Passive meaning needs the **past participle** 'written'.",
          },
          {
            kind: 'order',
            id: 'b2-rc-5',
            tokens: ['Not', 'knowing', 'what', 'to', 'say', 'he', 'stayed', 'silent'],
            answer: 'Not knowing what to say he stayed silent',
            explain: 'Negative participle clause of reason: Not knowing...',
          },
          {
            kind: 'translate',
            id: 'b2-rc-6',
            es: 'El coche aparcado fuera es de mi vecino.',
            answers: [
              'The car parked outside belongs to my neighbour.',
              'The car parked outside belongs to my neighbor.',
            ],
            explain: 'Reduced relative clause with a past participle.',
          },
          {
            kind: 'dictation',
            id: 'b2-rc-7',
            text: 'Having finished the report, he left the office.',
            explain: 'Perfect participle for an earlier action.',
          },
        ],
      },
      {
        id: 'b2-causative-sense-verbs',
        level: 'B2',
        title: 'make / let / have / get & verbs of perception',
        summary:
          'Master the patterns after make, let, have, get and help, and the difference between bare infinitive and -ing after verbs of perception.',
        sections: [
          {
            heading: 'make, let, have, get, help',
            body: "Use **make/let/have + object + bare infinitive** (without 'to'). Use **get + object + to-infinitive**. **Help** allows both: help someone (to) do. In the passive, 'make' takes the to-infinitive: was made to wait.",
            examples: [
              {
                en: 'My parents made me apologise.',
                es: 'Mis padres me hicieron disculparme.',
              },
              {
                en: 'She let the children stay up late.',
                es: 'Dejó que los niños se quedaran despiertos hasta tarde.',
              },
              {
                en: 'I got him to lend me the car.',
                es: 'Conseguí que me prestara el coche.',
              },
            ],
          },
          {
            heading: 'Verbs of perception',
            body: 'After **see, hear, watch, feel, notice** use the **bare infinitive** for a complete action and the **-ing form** for an action in progress.',
            examples: [
              {
                en: 'I saw her leave the building. (complete)',
                es: 'La vi salir del edificio (acción completa).',
              },
              {
                en: 'I saw her leaving the building. (in progress)',
                es: 'La vi saliendo del edificio (en progreso).',
              },
              {
                en: 'We heard someone shouting.',
                es: 'Oímos a alguien gritando.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Verb patterns',
            columns: ['Verb', 'Pattern', 'Example'],
            rows: [
              ['make / let / have', '+ obj + bare infinitive', 'made me wait'],
              ['get', '+ obj + to-infinitive', 'got me to wait'],
              ['help', '+ obj + (to) infinitive', 'helped me (to) move'],
              ['see/hear/watch', '+ obj + bare inf. / -ing', 'saw it happen / happening'],
            ],
          },
        ],
        examples: [
          {
            en: 'The film made me cry.',
            es: 'La película me hizo llorar.',
          },
          {
            en: "They wouldn't let us in without a ticket.",
            es: 'No nos dejaron entrar sin entrada.',
          },
          {
            en: "I couldn't get the engine to start.",
            es: 'No conseguí que el motor arrancara.',
          },
          {
            en: 'She helped me carry the boxes.',
            es: 'Me ayudó a llevar las cajas.',
          },
          {
            en: 'I felt the floor shake.',
            es: 'Sentí temblar el suelo.',
          },
          {
            en: 'He was made to repeat the year.',
            es: 'Le hicieron repetir el curso.',
          },
        ],
        pitfalls: [
          {
            wrong: 'My boss made me to work late.',
            right: 'My boss made me work late.',
            why: "**Make/let/have** take the **bare infinitive** (no 'to').",
            esNote: "Tras make/let/have, infinitivo sin 'to': made me work.",
          },
          {
            wrong: 'I got him fix my laptop.',
            right: 'I got him to fix my laptop.',
            why: '**Get** takes the **to-infinitive**, unlike make/have.',
            esNote: "'get' sí lleva 'to': got him to fix.",
          },
          {
            wrong: 'I saw him to cross the road.',
            right: 'I saw him cross the road.',
            why: 'Verbs of perception take the **bare infinitive** or **-ing**, never the to-infinitive.',
            esNote: "Tras see/hear: 'cross' o 'crossing', nunca 'to cross'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-cs-1',
            prompt:
              'Choose the best option: "The teacher made the students ___ their phones away."',
            options: ['to put', 'putting', 'put', 'puts'],
            answer: 2,
            explain: '**Make + object + bare infinitive**.',
          },
          {
            kind: 'cloze',
            id: 'b2-cs-2',
            before: 'I finally got my brother ',
            after: ' me with the move.',
            answers: ['to help'],
            explain: '**Get + object + to-infinitive**.',
          },
          {
            kind: 'cloze',
            id: 'b2-cs-3',
            before: 'We heard the rain ',
            after: ' on the roof all night.',
            answers: ['falling', 'beating', 'drumming'],
            explain: '**-ing** after a perception verb shows an action in progress/continuous.',
          },
          {
            kind: 'correct',
            id: 'b2-cs-4',
            wrong: "They didn't let me to pay for the meal.",
            answers: ["They didn't let me pay for the meal."],
            explain: '**Let** takes the bare infinitive.',
          },
          {
            kind: 'order',
            id: 'b2-cs-5',
            tokens: ['I', 'saw', 'her', 'leave', 'the', 'building', 'at', 'noon'],
            answer: 'I saw her leave the building at noon',
            explain: 'Perception verb + bare infinitive = a complete action witnessed.',
          },
          {
            kind: 'translate',
            id: 'b2-cs-6',
            es: 'La película me hizo llorar.',
            answers: ['The film made me cry.', 'The movie made me cry.'],
            explain: 'make + object + bare infinitive.',
          },
          {
            kind: 'dictation',
            id: 'b2-cs-7',
            text: 'She let the children stay up late.',
            explain: 'let + object + bare infinitive.',
          },
        ],
      },
      {
        id: 'b2-emphasis-cleft-comparatives',
        level: 'B2',
        title: 'Emphasis, cleft sentences & comparatives',
        summary:
          "Add emphasis with auxiliary do/did and cleft sentences, and refine comparisons with modifiers and parallel 'the more... the more' structures.",
        sections: [
          {
            heading: 'Emphasis with do/did',
            body: 'In positive statements, add **do/does/did** before the base verb to emphasise or contradict. Stress the auxiliary in speech.',
            examples: [
              {
                en: "I do like it, I'm just tired.",
                es: 'Sí que me gusta, solo estoy cansado.',
              },
              {
                en: 'She did warn you about this.',
                es: 'Sí te avisó de esto.',
              },
            ],
          },
          {
            heading: 'Cleft sentences',
            body: 'Split a sentence to focus on one part. Use **It + be + focus + that/who...** or **What... is/was...** to highlight information.',
            examples: [
              {
                en: 'It was Maria who solved the problem.',
                es: 'Fue María quien resolvió el problema.',
              },
              {
                en: 'What I need is a holiday.',
                es: 'Lo que necesito son unas vacaciones.',
              },
            ],
          },
          {
            heading: "Comparatives: modifiers & 'the... the...'",
            body: 'Soften or strengthen comparatives with modifiers like **much, far, a lot, slightly, a bit, even**. Use **the + comparative... the + comparative** to show two things changing together.',
            examples: [
              {
                en: 'This route is much faster.',
                es: 'Esta ruta es mucho más rápida.',
              },
              {
                en: 'The more you practise, the better you get.',
                es: 'Cuanto más practicas, mejor te vuelves.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Comparative modifiers',
            columns: ['Strength', 'Modifiers', 'Example'],
            rows: [
              ['Big difference', 'much, far, a lot, even', 'far cheaper'],
              ['Small difference', 'slightly, a bit, a little', 'a bit colder'],
              ['No difference', '(not) any, no', 'no better'],
            ],
          },
        ],
        examples: [
          {
            en: 'I did send the email — check your spam folder.',
            es: 'Sí que envié el correo: mira la carpeta de spam.',
          },
          {
            en: 'It was in 2010 that they got married.',
            es: 'Fue en 2010 cuando se casaron.',
          },
          {
            en: 'What surprised me was his calm reaction.',
            es: 'Lo que me sorprendió fue su reacción tranquila.',
          },
          {
            en: 'Your new phone is far better than the old one.',
            es: 'Tu teléfono nuevo es mucho mejor que el antiguo.',
          },
          {
            en: 'The harder he tried, the worse it got.',
            es: 'Cuanto más lo intentaba, peor iba.',
          },
          {
            en: "The sooner we leave, the sooner we'll arrive.",
            es: 'Cuanto antes salgamos, antes llegaremos.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I do liked it.',
            right: 'I did like it.',
            why: 'After emphatic **do/does/did**, use the **base form** of the verb.',
            esNote: "Tras 'did' enfático, el verbo va en forma base: 'did like'.",
          },
          {
            wrong: 'More you practise, more you learn.',
            right: 'The more you practise, the more you learn.',
            why: 'This structure needs **the** before each comparative.',
            esNote: "Lleva 'the' delante de cada comparativo: 'the more... the more...'.",
          },
          {
            wrong: 'This car is very faster than mine.',
            right: 'This car is much faster than mine.',
            why: "Use **much/far/a lot** (not 'very') to intensify a comparative.",
            esNote: "Para reforzar comparativos usa 'much/far', no 'very'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-ec-1',
            prompt: 'Choose the cleft sentence focusing on the person: "___ broke the window."',
            options: ['It was Tom who', 'Tom who it was', 'What Tom is', 'There was Tom that'],
            answer: 0,
            explain: 'Cleft for a person: **It + was + person + who...**',
          },
          {
            kind: 'cloze',
            id: 'b2-ec-2',
            before: "I'm not lying — I ",
            after: ' see him there.',
            answers: ['did'],
            explain: 'Emphatic **did** + base form to contradict a doubt.',
          },
          {
            kind: 'cloze',
            id: 'b2-ec-3',
            before: 'The more I read about it, ',
            after: ' I understand.',
            answers: ['the more'],
            explain: 'Parallel structure: **the + comparative... the + comparative**.',
          },
          {
            kind: 'correct',
            id: 'b2-ec-4',
            wrong: 'What I want is to find a more good job.',
            answers: ['What I want is to find a better job.'],
            explain: "'Good' has the irregular comparative **better**, not 'more good'.",
          },
          {
            kind: 'order',
            id: 'b2-ec-5',
            tokens: ['What', 'I', 'need', 'is', 'a', 'long', 'holiday'],
            answer: 'What I need is a long holiday',
            explain: "Cleft sentence with 'What...is...' for emphasis.",
          },
          {
            kind: 'translate',
            id: 'b2-ec-6',
            es: 'Cuanto más practicas, mejor te vuelves.',
            answers: [
              'The more you practise, the better you get.',
              'The more you practice, the better you get.',
            ],
            explain: "'the more... the better...' parallel comparative.",
          },
          {
            kind: 'dictation',
            id: 'b2-ec-7',
            text: 'It was Maria who solved the problem.',
            explain: 'Cleft sentence emphasising the subject.',
          },
        ],
      },
      {
        id: 'b2-quantifiers-subjunctive-markers',
        level: 'B2',
        title: 'Quantifiers, the subjunctive & formal markers',
        summary:
          'Tell little/few from a little/a few, use the subjunctive after suggest and recommend, and connect ideas with formal discourse markers.',
        sections: [
          {
            heading: 'little / few vs a little / a few',
            body: "**A little** (uncountable) and **a few** (countable) have a positive sense (= some, enough). **Little** and **few** have a negative sense (= almost none, not enough). Use **quite a few** to mean 'a fairly large number'.",
            examples: [
              {
                en: "We have a little time, so let's relax.",
                es: 'Tenemos algo de tiempo, así que relajémonos.',
              },
              {
                en: "There's little hope of finding it now.",
                es: 'Hay pocas esperanzas de encontrarlo ahora.',
              },
              {
                en: 'Quite a few people came to the talk.',
                es: 'Bastante gente vino a la charla.',
              },
            ],
          },
          {
            heading: 'The subjunctive after suggest/recommend',
            body: 'After verbs like **suggest, recommend, insist, demand, request** and after expressions like **It is essential that**, use the **base form** of the verb for all persons (the subjunctive). British English also allows **should + base form**.',
            examples: [
              {
                en: 'I suggest that he take a break.',
                es: 'Sugiero que se tome un descanso.',
              },
              {
                en: 'They insisted that she be present.',
                es: 'Insistieron en que ella estuviera presente.',
              },
              {
                en: 'It is essential that everyone arrive on time.',
                es: 'Es esencial que todos lleguen a tiempo.',
              },
            ],
          },
          {
            heading: 'Formal discourse markers',
            body: 'Link ideas formally with **however, nevertheless, moreover, furthermore, therefore, consequently, in addition, on the other hand, whereas**. These usually start a sentence and are followed by a comma.',
            examples: [
              {
                en: 'The plan is expensive; nevertheless, it is necessary.',
                es: 'El plan es caro; no obstante, es necesario.',
              },
              {
                en: 'Sales rose, whereas costs stayed the same.',
                es: 'Las ventas subieron, mientras que los costes se mantuvieron.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Quantifiers',
            columns: ['Quantifier', 'Noun type', 'Sense'],
            rows: [
              ['a little', 'uncountable', 'some (positive)'],
              ['little', 'uncountable', 'almost none (negative)'],
              ['a few', 'countable', 'some (positive)'],
              ['few', 'countable', 'almost none (negative)'],
            ],
          },
        ],
        examples: [
          {
            en: 'Few students passed the exam this year.',
            es: 'Pocos estudiantes aprobaron el examen este año.',
          },
          {
            en: 'Add a little salt to the sauce.',
            es: 'Añade un poco de sal a la salsa.',
          },
          {
            en: 'The doctor recommended that he stop smoking.',
            es: 'El médico recomendó que dejara de fumar.',
          },
          {
            en: 'We need more staff; therefore, we are hiring.',
            es: 'Necesitamos más personal; por tanto, estamos contratando.',
          },
          {
            en: 'Moreover, the report ignores the main issue.',
            es: 'Además, el informe ignora la cuestión principal.',
          },
          {
            en: 'I have a few ideas we could try.',
            es: 'Tengo algunas ideas que podríamos probar.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I have a few money left.',
            right: 'I have a little money left.',
            why: "**Money** is uncountable, so use **a little**, not 'a few'.",
            esNote: "'a few' va con contables; 'a little' con incontables (money).",
          },
          {
            wrong: 'I recommend that he takes a rest.',
            right: 'I recommend that he take a rest.',
            why: 'The subjunctive uses the **base form** (take) for all persons, with no -s.',
            esNote: "Subjuntivo: 'he take' (sin -s) tras recommend/suggest.",
          },
          {
            wrong: 'He was tired, however he kept working.',
            right: 'He was tired; however, he kept working.',
            why: "**However** is not a conjunction like 'but'; separate the clauses and add a comma.",
            esNote: "'however' no une dos oraciones como 'but'; usa punto y coma o punto.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'b2-qs-1',
            prompt:
              'Choose the best option: "Hurry up — we have ___ time before the train leaves."',
            options: ['a few', 'few', 'little', 'a little'],
            answer: 3,
            explain: "Uncountable + positive 'some' = **a little time**.",
          },
          {
            kind: 'cloze',
            id: 'b2-qs-2',
            before: 'Sadly, ',
            after: ' people understood the warning, so many got lost.',
            answers: ['few'],
            explain: 'Negative sense (almost none) with a countable noun = **few**.',
          },
          {
            kind: 'cloze',
            id: 'b2-qs-3',
            before: 'The committee demanded that the report ',
            after: ' rewritten.',
            answers: ['be'],
            explain: "Subjunctive after **demand**: base form 'be'.",
          },
          {
            kind: 'correct',
            id: 'b2-qs-4',
            wrong: 'I suggest that she comes earlier next time.',
            answers: ['I suggest that she come earlier next time.'],
            explain: "Subjunctive: **come** (base form, no -s) after 'suggest'.",
          },
          {
            kind: 'order',
            id: 'b2-qs-5',
            tokens: [
              'The',
              'results',
              'were',
              'poor',
              'nevertheless',
              'the',
              'team',
              'stayed',
              'positive',
            ],
            answer: 'The results were poor nevertheless the team stayed positive',
            explain: "'Nevertheless' introduces a contrasting idea in formal style.",
          },
          {
            kind: 'translate',
            id: 'b2-qs-6',
            es: 'El médico recomendó que dejara de fumar.',
            answers: [
              'The doctor recommended that he stop smoking.',
              'The doctor recommended that he should stop smoking.',
            ],
            explain: "Subjunctive (or 'should + base form' in British English) after 'recommend'.",
          },
          {
            kind: 'dictation',
            id: 'b2-qs-7',
            text: 'Quite a few people came to the talk.',
            explain: "'Quite a few' = a fairly large number.",
          },
        ],
      },
    ],
  },
  {
    level: 'C1',
    title: 'C1 · Advanced Structures',
    blurb:
      'Cleft sentences, inversion, the subjunctive, past modals and the polished syntax of advanced English.',
    lessons: [
      {
        id: 'c1-cleft-sentences',
        level: 'C1',
        title: 'Cleft sentences (it-clefts & wh-clefts)',
        summary:
          'Clefts split one idea into two clauses so you can spotlight a particular piece of information for emphasis or contrast.',
        sections: [
          {
            heading: 'It-clefts: It + be + focus + that/who',
            body: 'An **it-cleft** takes a normal sentence and puts one element in the spotlight: It is/was + the focused part + that/who + the rest. You can focus a subject, object, or adverbial. Use **who** for people (optional) and **that** for everything else.',
            examples: [
              {
                en: 'It was Ana who solved the problem, not me.',
                es: 'Fue Ana quien resolvió el problema, no yo.',
              },
              {
                en: 'It was in 2019 that the company finally turned a profit.',
                es: 'Fue en 2019 cuando la empresa por fin tuvo beneficios.',
              },
              {
                en: "It's your attitude that worries me.",
                es: 'Es tu actitud lo que me preocupa.',
              },
            ],
          },
          {
            heading: 'Wh-clefts (pseudo-clefts): What... is...',
            body: 'A **wh-cleft** usually starts with **what** and is completed by **be**: What I need is a holiday. The new information goes after **be**. Use these to introduce, summarise, or dramatise a point. With actions, use a **do**-construction: What he did was (to) resign.',
            examples: [
              {
                en: 'What I really want is a straight answer.',
                es: 'Lo que de verdad quiero es una respuesta clara.',
              },
              {
                en: 'What surprised everyone was how calm she stayed.',
                es: 'Lo que sorprendió a todos fue lo tranquila que se mantuvo.',
              },
              {
                en: 'What he did was delete the entire file.',
                es: 'Lo que hizo fue borrar el archivo entero.',
              },
            ],
          },
          {
            heading: 'Other cleft patterns: The thing / All / The reason',
            body: "You can build clefts around nouns like **the thing**, **the reason**, **the place**, or with **all** (meaning 'the only thing'). These add variety and a slightly more conversational feel.",
            examples: [
              {
                en: 'The reason I called is that I need your advice.',
                es: 'La razón por la que llamé es que necesito tu consejo.',
              },
              {
                en: "All I'm asking for is a little patience.",
                es: 'Lo único que pido es un poco de paciencia.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'From neutral to cleft',
            columns: ['Neutral sentence', 'It-cleft', 'Wh-cleft'],
            rows: [
              [
                'Ana broke the window.',
                'It was Ana who broke the window.',
                'The person who broke the window was Ana.',
              ],
              [
                'I admire his honesty.',
                "It's his honesty that I admire.",
                'What I admire is his honesty.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: "It wasn't the price that bothered me; it was the rudeness.",
            es: 'No fue el precio lo que me molestó; fue la mala educación.',
          },
          {
            en: 'What matters now is staying focused.',
            es: 'Lo que importa ahora es mantener la concentración.',
          },
          {
            en: 'It was only later that I realised my mistake.',
            es: 'Fue solo más tarde cuando me di cuenta de mi error.',
          },
          {
            en: 'The thing I love about Madrid is the energy at night.',
            es: 'Lo que me encanta de Madrid es la energía por la noche.',
          },
          {
            en: "All she said was that she'd be late.",
            es: 'Lo único que dijo fue que llegaría tarde.',
          },
          {
            en: "It's you who has to decide, not your parents.",
            es: 'Eres tú quien tiene que decidir, no tus padres.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Is the rudeness that bothered me.',
            right: 'It was the rudeness that bothered me.',
            why: 'An it-cleft must begin with the dummy subject **it** plus a form of **be**.',
            esNote:
              "El español omite el sujeto ('Fue la mala educación...'), pero en inglés necesitas 'It'.",
          },
          {
            wrong: 'What I want is to have a holiday is rest.',
            right: 'What I want is rest.',
            why: "Don't double the verb **be**. The wh-clause is the subject, and one **is** links it to the focus.",
            esNote: "No repitas el verbo 'be'; un solo 'is' une la cláusula con el foco.",
          },
          {
            wrong: 'It was me who broke it... It was I who broke it.',
            right: "It was I/me who broke it (both used; 'me' is normal in speech).",
            why: "After 'It was', object pronouns (me, him) are standard in everyday English; the subject form sounds very formal.",
            esNote: "En el habla normal se dice 'It was me who...'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-cleft-1',
            prompt:
              "Choose the correct it-cleft to focus 'on Monday' in 'The strike began on Monday.'",
            options: [
              'It was on Monday that the strike began.',
              'It was on Monday what the strike began.',
              'Was on Monday that the strike began.',
              'It was on Monday who began the strike.',
            ],
            answer: 0,
            explain:
              "Use 'It + was + adverbial + that'. Use 'that' (not 'what'/'who') for a time phrase.",
          },
          {
            kind: 'cloze',
            id: 'c1-cleft-2',
            before: "I don't need money.",
            after: 'I need is your trust.',
            answers: ['What'],
            hint: "wh-cleft opener for 'the thing that'",
            explain: 'A wh-cleft about a thing begins with **What**.',
          },
          {
            kind: 'correct',
            id: 'c1-cleft-3',
            wrong: 'Is John who always pays for dinner.',
            answers: [
              'It is John who always pays for dinner.',
              "It's John who always pays for dinner.",
            ],
            explain: 'Add the dummy subject **It** before the verb be.',
          },
          {
            kind: 'order',
            id: 'c1-cleft-4',
            tokens: ['What', 'she', 'did', 'was', 'ignore', 'the', 'warning'],
            answer: 'What she did was ignore the warning',
            explain: 'Action wh-cleft: What + subject + did + was + bare/infinitive verb.',
          },
          {
            kind: 'translate',
            id: 'c1-cleft-5',
            es: 'Lo que me sorprendió fue su silencio.',
            answers: [
              'What surprised me was his silence.',
              'What surprised me was her silence.',
              'What surprised me was their silence.',
            ],
            explain: "Spanish 'Lo que' maps to the wh-cleft 'What... was...'.",
          },
          {
            kind: 'translate',
            id: 'c1-cleft-6',
            es: 'Fue tu hermano quien me lo contó.',
            answers: [
              'It was your brother who told me.',
              'It was your brother that told me.',
              'It was your brother who told me about it.',
            ],
            explain: "It-cleft focusing the subject: 'It was + person + who'.",
          },
          {
            kind: 'dictation',
            id: 'c1-cleft-7',
            text: "It wasn't what he said but the way he said it that hurt.",
            explain: "Notice the contrastive it-cleft built around 'not X but Y'.",
          },
        ],
      },
      {
        id: 'c1-inversion-negative-adverbials',
        level: 'C1',
        title: 'Inversion after negative adverbials',
        summary:
          'When a sentence opens with a negative or restrictive adverbial, the subject and (auxiliary) verb swap places, just as in a question.',
        sections: [
          {
            heading: 'The trigger and the swap',
            body: 'Fronting a **negative or limiting adverbial** forces **subject–auxiliary inversion**. Common triggers: never, rarely, seldom, hardly, scarcely, no sooner, not only, not until, little, only then, only after, under no circumstances, at no time. If there is no auxiliary, add **do/does/did**.',
            examples: [
              {
                en: 'Never have I seen such chaos.',
                es: 'Nunca he visto semejante caos.',
              },
              {
                en: 'Rarely does he arrive on time.',
                es: 'Rara vez llega a tiempo.',
              },
              {
                en: 'Under no circumstances should you sign this.',
                es: 'Bajo ninguna circunstancia deberías firmar esto.',
              },
            ],
          },
          {
            heading: 'Two-part patterns: hardly... when / no sooner... than / not only... but also',
            body: 'Several triggers introduce a **two-clause** structure. Memorise the pairings: **Hardly/Scarcely... when**, **No sooner... than**, **Not only... but (also)**. The inversion happens in the first clause.',
            examples: [
              {
                en: 'Hardly had we sat down when the phone rang.',
                es: 'Apenas nos habíamos sentado cuando sonó el teléfono.',
              },
              {
                en: 'No sooner had she left than it started to rain.',
                es: 'Nada más irse, empezó a llover.',
              },
              {
                en: 'Not only did he lie, but he also blamed me.',
                es: 'No solo mintió, sino que además me culpó.',
              },
            ],
          },
          {
            heading: 'Only + time/condition',
            body: "Phrases with **only** (only then, only later, only when, only after, only by) trigger inversion in the **main** clause, not in the 'only' clause itself.",
            examples: [
              {
                en: 'Only after the meeting did I understand the plan.',
                es: 'Solo después de la reunión entendí el plan.',
              },
              {
                en: 'Only by working together can we finish on time.',
                es: 'Solo trabajando juntos podemos terminar a tiempo.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Inversion at a glance',
            columns: ['Trigger', 'Normal order', 'Inverted (correct)'],
            rows: [
              ['Never', 'I have never met him.', 'Never have I met him.'],
              ['Seldom', 'She seldom complains.', 'Seldom does she complain.'],
              [
                'Not until',
                'I knew the truth not until then.',
                'Not until then did I know the truth.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'Little did they know that the worst was yet to come.',
            es: 'Poco sabían que lo peor estaba aún por llegar.',
          },
          {
            en: 'Seldom have I been so disappointed.',
            es: 'Pocas veces he estado tan decepcionado.',
          },
          {
            en: 'Not until I read the contract did I notice the clause.',
            es: 'Hasta que no leí el contrato no me fijé en la cláusula.',
          },
          {
            en: 'At no time was the public in danger.',
            es: 'En ningún momento el público estuvo en peligro.',
          },
          {
            en: 'Only then did she realise how tired she was.',
            es: 'Solo entonces se dio cuenta de lo cansada que estaba.',
          },
          {
            en: "Not only is it expensive, but it's also unreliable.",
            es: 'No solo es caro, sino que además no es fiable.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Never I have seen such a thing.',
            right: 'Never have I seen such a thing.',
            why: 'After a fronted negative adverbial you must **invert** the subject and auxiliary.',
            esNote:
              "No basta con poner 'Never' delante; hay que mover el auxiliar antes del sujeto, como en una pregunta.",
          },
          {
            wrong: 'No sooner I had arrived when it started.',
            right: 'No sooner had I arrived than it started.',
            why: "Invert (had I) and use the partner word **than**, not 'when', with 'no sooner'.",
            esNote: "'No sooner' va con 'than'; 'hardly/scarcely' van con 'when'.",
          },
          {
            wrong: 'Rarely he goes out.',
            right: 'Rarely does he go out.',
            why: 'With no existing auxiliary, supply **do/does/did** to carry the inversion.',
            esNote: "Si no hay auxiliar, añade 'do/does/did' para hacer la inversión.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-inv-1',
            prompt: "Complete: 'Not only ___ the report late, but it was also full of errors.'",
            options: ['was', 'it was', 'did', 'had'],
            answer: 0,
            explain: "Invert subject and 'be': Not only WAS the report late...",
          },
          {
            kind: 'cloze',
            id: 'c1-inv-2',
            before: 'Seldom',
            after: 'we see such dedication from a newcomer.',
            answers: ['do'],
            hint: 'add an auxiliary for the inversion (present)',
            explain: 'No existing auxiliary, so add **do**: Seldom do we see...',
          },
          {
            kind: 'correct',
            id: 'c1-inv-3',
            wrong: 'Hardly I had closed the door when the bell rang.',
            answers: [
              'Hardly had I closed the door when the bell rang.',
              'Scarcely had I closed the door when the bell rang.',
            ],
            explain: "Invert the auxiliary: 'Hardly had I closed...', paired with 'when'.",
          },
          {
            kind: 'order',
            id: 'c1-inv-4',
            tokens: ['Only', 'then', 'did', 'I', 'understand', 'the', 'joke'],
            answer: 'Only then did I understand the joke',
            explain: "'Only then' triggers inversion with the added auxiliary 'did'.",
          },
          {
            kind: 'translate',
            id: 'c1-inv-5',
            es: 'Nunca había estado tan asustado.',
            answers: [
              'Never had I been so frightened.',
              'Never had I been so scared.',
              'Never had I been so afraid.',
            ],
            explain: "Fronted 'Never' + inverted past perfect 'had I been'.",
          },
          {
            kind: 'translate',
            id: 'c1-inv-6',
            es: 'Bajo ninguna circunstancia debes contarle esto.',
            answers: [
              'Under no circumstances must you tell him this.',
              'Under no circumstances should you tell him this.',
              'Under no circumstances must you tell her this.',
            ],
            explain: "'Under no circumstances' + inverted modal + subject.",
          },
          {
            kind: 'dictation',
            id: 'c1-inv-7',
            text: 'Little did we realise how much our lives were about to change.',
            explain:
              "'Little did we realise' is a fixed inverted expression meaning 'we had no idea'.",
          },
        ],
      },
      {
        id: 'c1-inversion-conditionals',
        level: 'C1',
        title: 'Inversion in conditionals (had I known, were I, should you)',
        summary:
          "Formal English can drop 'if' and invert the verb instead, especially with had, were, and should.",
        sections: [
          {
            heading: 'Three inverted patterns',
            body: "To sound formal or literary, omit **if** and invert: **Had** + subject (3rd conditional), **Were** + subject (2nd conditional / hypothetical), **Should** + subject (open/future condition, like a polite 'if it happens'). The meaning is identical to the 'if' version.",
            examples: [
              {
                en: 'Had I known, I would have helped. (= If I had known)',
                es: 'De haberlo sabido, habría ayudado.',
              },
              {
                en: "Were I in your position, I'd resign. (= If I were)",
                es: 'Si yo estuviera en tu lugar, dimitiría.',
              },
              {
                en: 'Should you need anything, just call. (= If you should need)',
                es: 'Si necesitaras algo, solo llama.',
              },
            ],
          },
          {
            heading: 'Were I to + infinitive',
            body: "For a more remote or tentative hypothesis, use **Were + subject + to + infinitive**. This is the inverted form of 'If I were to...'. It is common in formal writing and diplomacy.",
            examples: [
              {
                en: 'Were the deal to collapse, thousands would lose their jobs.',
                es: 'Si el acuerdo se viniera abajo, miles perderían su empleo.',
              },
              {
                en: 'Were we to accept, what would we gain?',
                es: 'Si aceptáramos, ¿qué ganaríamos?',
              },
            ],
          },
          {
            heading: "Negatives keep 'not' after the subject",
            body: 'In inverted conditionals the negative **not** stays after the subject; you do not contract it onto the auxiliary. So: **Had it not been for...**, **Were it not for...**, **Should you not wish...**',
            examples: [
              {
                en: 'Had it not been for your help, I would have failed.',
                es: 'De no haber sido por tu ayuda, habría fracasado.',
              },
              {
                en: "Were it not for the rain, we'd be at the beach.",
                es: 'Si no fuera por la lluvia, estaríamos en la playa.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'If-clause to inversion',
            columns: ["With 'if'", "Inverted (no 'if')"],
            rows: [
              ['If I had known', 'Had I known'],
              ['If she were here', 'Were she here'],
              ['If you should change your mind', 'Should you change your mind'],
              ['If it had not been for him', 'Had it not been for him'],
            ],
          },
        ],
        examples: [
          {
            en: 'Had they listened, the crisis could have been avoided.',
            es: 'De haber escuchado, la crisis se podría haber evitado.',
          },
          {
            en: "Should anyone ask, tell them I've left.",
            es: 'Si alguien pregunta, diles que me he ido.',
          },
          {
            en: "Were I you, I wouldn't sign that.",
            es: 'Yo que tú, no firmaría eso.',
          },
          {
            en: 'Were the company to relocate, many staff would resign.',
            es: 'Si la empresa se trasladara, muchos empleados dimitirían.',
          },
          {
            en: 'Had it not been for the alarm, the fire would have spread.',
            es: 'De no haber sido por la alarma, el fuego se habría propagado.',
          },
          {
            en: 'Should you require assistance, our team is available.',
            es: 'Si necesitara asistencia, nuestro equipo está disponible.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If had I known, I would have come.',
            right: 'Had I known, I would have come.',
            why: "Inversion **replaces** 'if'. Never use both 'if' and the inversion together.",
            esNote: "La inversión sustituye a 'if'; no se ponen los dos.",
          },
          {
            wrong: 'Would I known, I would have helped.',
            right: 'Had I known, I would have helped.',
            why: "The 3rd-conditional inversion uses **Had** (the past perfect auxiliary), not 'would'.",
            esNote: "La inversión del tercer condicional empieza con 'Had', no con 'Would'.",
          },
          {
            wrong: "Hadn't it been for you, I'd have failed.",
            right: "Had it not been for you, I'd have failed.",
            why: 'In formal inversion the negative is written in full as **not** after the subject, not contracted.',
            esNote: "En la inversión formal no se contrae: 'Had it not been for...'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-invcond-1',
            prompt: "Rewrite without 'if': 'If I had seen the sign, I would have stopped.'",
            options: [
              'Had I seen the sign, I would have stopped.',
              'If had I seen the sign, I would have stopped.',
              'Would I have seen the sign, I had stopped.',
              'Did I see the sign, I would have stopped.',
            ],
            answer: 0,
            explain: "Drop 'if' and invert: 'Had I seen...'.",
          },
          {
            kind: 'cloze',
            id: 'c1-invcond-2',
            before: '',
            after: 'you change your mind, the offer still stands.',
            answers: ['Should'],
            hint: 'inverted open conditional (= if you should)',
            explain: "'Should you change your mind' = 'If you change your mind' (formal).",
          },
          {
            kind: 'correct',
            id: 'c1-invcond-3',
            wrong: 'If were I rich, I would travel the world.',
            answers: [
              'Were I rich, I would travel the world.',
              "Were I rich, I'd travel the world.",
            ],
            explain: "Inversion replaces 'if': 'Were I rich...'.",
          },
          {
            kind: 'order',
            id: 'c1-invcond-4',
            tokens: ['Had', 'it', 'not', 'been', 'for', 'her', 'we', 'would', 'have', 'lost'],
            answer: 'Had it not been for her we would have lost',
            explain: "Formal negative inversion: 'Had it not been for...'.",
          },
          {
            kind: 'translate',
            id: 'c1-invcond-5',
            es: 'Si la empresa cerrara, perderíamos todo.',
            answers: [
              'Were the company to close, we would lose everything.',
              "Were the company to close, we'd lose everything.",
              'Should the company close, we would lose everything.',
            ],
            explain: "Use 'Were + subject + to + infinitive' for a remote hypothesis.",
          },
          {
            kind: 'translate',
            id: 'c1-invcond-6',
            es: 'De haberlo sabido, te habría avisado.',
            answers: [
              'Had I known, I would have warned you.',
              "Had I known, I'd have warned you.",
              'Had I known, I would have told you.',
            ],
            explain: "'De haberlo sabido' maps to the inverted third conditional 'Had I known'.",
          },
          {
            kind: 'dictation',
            id: 'c1-invcond-7',
            text: 'Should you have any questions, please do not hesitate to contact us.',
            explain: "A standard formal-letter formula using inverted 'Should you...'.",
          },
        ],
      },
      {
        id: 'c1-mixed-reduced-conditionals',
        level: 'C1',
        title: 'Mixed and reduced conditionals',
        summary:
          'Real situations rarely fit one neat conditional, so you mix time frames and trim clauses for nuance and flow.',
        sections: [
          {
            heading: 'Mixed conditionals: past condition, present result',
            body: "A **mixed conditional** combines a past 'if' clause with a present result (or vice versa). Type 1: **If + past perfect, ... would + base** (past cause → present effect). Type 2: **If + past simple, ... would have + participle** (present/general cause → past effect).",
            examples: [
              {
                en: 'If I had studied medicine, I would be a doctor now.',
                es: 'Si hubiera estudiado medicina, ahora sería médico.',
              },
              {
                en: "If she weren't so shy, she would have spoken up.",
                es: 'Si no fuera tan tímida, habría hablado.',
              },
            ],
          },
          {
            heading: "Alternatives to 'if': unless, provided, as long as, supposing",
            body: 'Vary your conditionals with connectors: **unless** (= if not), **provided/providing (that)** and **as long as** (= only if this condition holds), **supposing/suppose** (hypothesis), **otherwise** (= if not, the result).',
            examples: [
              {
                en: "You'll pass provided you revise consistently.",
                es: 'Aprobarás siempre que repases de forma constante.',
              },
              {
                en: "I won't go unless you come with me.",
                es: 'No iré a menos que vengas conmigo.',
              },
              {
                en: "Hurry up, otherwise we'll miss the train.",
                es: 'Date prisa, si no perderemos el tren.',
              },
            ],
          },
          {
            heading: 'Reduced and implied conditionals',
            body: "You can **reduce** a conditional by leaving the condition implicit: with **if so / if not**, with **but for** (= if it weren't for), or by simply implying it ('A real professional would never do that' = if they were a real professional).",
            examples: [
              {
                en: 'But for your support, I would have given up.',
                es: 'Si no fuera por tu apoyo, habría abandonado.',
              },
              {
                en: 'Is it raining? If so, take an umbrella.',
                es: '¿Está lloviendo? Si es así, lleva paraguas.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Mixed conditional types',
            columns: ['Cause (time)', 'Result (time)', 'Pattern', 'Example'],
            rows: [
              [
                'Past',
                'Present',
                'If + past perfect → would + base',
                "If I'd saved money, I'd be free now.",
              ],
              [
                'Present',
                'Past',
                'If + past simple → would have + participle',
                "If I were braver, I'd have asked her.",
              ],
            ],
          },
        ],
        examples: [
          {
            en: "If we had left earlier, we wouldn't be stuck in traffic now.",
            es: 'Si hubiéramos salido antes, ahora no estaríamos atascados.',
          },
          {
            en: "If he were more careful, he wouldn't have crashed the car.",
            es: 'Si fuera más cuidadoso, no habría chocado el coche.',
          },
          {
            en: "As long as you're honest, people will trust you.",
            es: 'Mientras seas honesto, la gente confiará en ti.',
          },
          {
            en: 'But for the weather, the trip would have been perfect.',
            es: 'Si no fuera por el tiempo, el viaje habría sido perfecto.',
          },
          {
            en: "Take the early flight; otherwise you'll be late.",
            es: 'Coge el vuelo temprano; si no, llegarás tarde.',
          },
          {
            en: 'Supposing you won the lottery, what would you do first?',
            es: 'Suponiendo que ganaras la lotería, ¿qué harías primero?',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would be there now.',
            right: 'If I had known, I would be there now.',
            why: "Use the **past perfect** in the if-clause, never 'would have'.",
            esNote:
              "El error de poner 'would' en la cláusula 'if' es muy común; usa el past perfect.",
          },
          {
            wrong: "Unless you don't pay, they'll cut the service.",
            right: "Unless you pay, they'll cut the service.",
            why: "**Unless** already means 'if not', so a second negative reverses the meaning.",
            esNote: "'Unless' = 'si no'; no añadas otra negación ('don't').",
          },
          {
            wrong: 'If I had more time, I would have learned the piano when I was young.',
            right: 'If I had more time, I would learn the piano.',
            why: "Keep the time frames coherent: a present condition ('had more time') pairs with a present/future result, not a past one, unless you genuinely intend a mixed reading.",
            esNote: 'Mantén coherentes los tiempos: condición presente con resultado presente.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-mix-1',
            prompt:
              "Choose the natural mixed conditional: 'If she ___ the warning, she wouldn't be in hospital now.'",
            options: ['had heeded', 'would heed', 'heeds', 'has heeded'],
            answer: 0,
            explain:
              "Past cause (past perfect) → present result (wouldn't be): a mixed conditional.",
          },
          {
            kind: 'cloze',
            id: 'c1-mix-2',
            before: "I'll lend you the car",
            after: 'you fill it up afterwards.',
            answers: ['provided', 'as long as', 'providing', 'provided that'],
            hint: '= only on the condition that',
            explain: "'provided / as long as' introduce a condition that must be met.",
          },
          {
            kind: 'correct',
            id: 'c1-mix-3',
            wrong: 'If I would have studied harder, I would have a better job now.',
            answers: [
              'If I had studied harder, I would have a better job now.',
              "If I'd studied harder, I would have a better job now.",
            ],
            explain: "Past perfect in the if-clause; present result 'would have' (= now).",
          },
          {
            kind: 'order',
            id: 'c1-mix-4',
            tokens: ['But', 'for', 'your', 'advice', 'I', 'would', 'have', 'failed'],
            answer: 'But for your advice I would have failed',
            explain: "'But for + noun' = 'If it hadn't been for', a reduced conditional.",
          },
          {
            kind: 'translate',
            id: 'c1-mix-5',
            es: 'Si hablara francés, habría conseguido ese trabajo.',
            answers: [
              'If I spoke French, I would have got that job.',
              'If I spoke French, I would have gotten that job.',
              'If I could speak French, I would have got that job.',
            ],
            explain: 'Present ability/condition → past result: a mixed conditional.',
          },
          {
            kind: 'translate',
            id: 'c1-mix-6',
            es: 'No te ayudaré a menos que me lo pidas.',
            answers: [
              "I won't help you unless you ask me.",
              "I won't help you unless you ask.",
              "I won't help you unless you ask me to.",
            ],
            explain: "'Unless' = 'a menos que / si no'; no extra negative.",
          },
          {
            kind: 'dictation',
            id: 'c1-mix-7',
            text: "If we hadn't taken that wrong turn, we would already be home by now.",
            explain: 'Past condition, present result — a classic mixed conditional.',
          },
        ],
      },
      {
        id: 'c1-subjunctive',
        level: 'C1',
        title: 'The subjunctive (mandative, were-subjunctive, fixed phrases)',
        summary:
          "English keeps a quiet subjunctive: the bare base form after certain verbs of demand, and 'were' in hypotheticals.",
        sections: [
          {
            heading: 'Mandative subjunctive: the base form',
            body: "After verbs and adjectives of **demand, suggestion, recommendation, or necessity**, use the **base form** of the verb in the that-clause, with no -s and no 'to': suggest, recommend, insist, demand, request, propose, require; it is essential/vital/important/crucial that. The base form stays the same for all subjects, including the negative (that he not go).",
            examples: [
              {
                en: 'The board insists that he resign immediately.',
                es: 'La junta insiste en que dimita de inmediato.',
              },
              {
                en: 'It is essential that every member be informed.',
                es: 'Es esencial que todos los miembros estén informados.',
              },
              {
                en: 'I recommend that she not sign anything yet.',
                es: 'Recomiendo que no firme nada todavía.',
              },
            ],
          },
          {
            heading: 'Were-subjunctive in hypotheticals',
            body: "Use **were** (not 'was') for all subjects after **if**, **wish**, **if only**, **as if/as though**, and **suppose** when the situation is unreal or hypothetical. 'If I were you' is fixed.",
            examples: [
              {
                en: "If I were you, I'd take the offer.",
                es: 'Yo que tú, aceptaría la oferta.',
              },
              {
                en: 'I wish it were that simple.',
                es: 'Ojalá fuera así de sencillo.',
              },
              {
                en: 'He talks as if he were the boss.',
                es: 'Habla como si fuera el jefe.',
              },
            ],
          },
          {
            heading: 'Fixed subjunctive expressions',
            body: 'A number of set phrases freeze the old subjunctive: **be that as it may**, **come what may**, **so be it**, **far be it from me to...**, **God save the King**, **suffice it to say**, **long live...**. Learn them as whole chunks.',
            examples: [
              {
                en: 'Be that as it may, the rules still apply.',
                es: 'Sea como sea, las reglas siguen aplicándose.',
              },
              {
                en: 'Suffice it to say, we were not impressed.',
                es: 'Baste decir que no nos impresionó.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Indicative vs mandative subjunctive',
            columns: ['Ordinary (indicative)', 'After demand/suggestion (subjunctive)'],
            rows: [
              ['She arrives on time.', 'We ask that she arrive on time.'],
              ['He is present.', 'It is vital that he be present.'],
              ["They don't leave.", 'I insist that they not leave.'],
            ],
          },
        ],
        examples: [
          {
            en: 'The doctor recommended that he stay in bed for a week.',
            es: 'El médico recomendó que se quedara en cama una semana.',
          },
          {
            en: 'It is crucial that the report be finished by Friday.',
            es: 'Es crucial que el informe esté terminado para el viernes.',
          },
          {
            en: 'I wish I were taller.',
            es: 'Ojalá fuera más alto.',
          },
          {
            en: 'She demanded that the money be returned.',
            es: 'Exigió que se devolviera el dinero.',
          },
          {
            en: "Come what may, we'll face it together.",
            es: 'Pase lo que pase, lo afrontaremos juntos.',
          },
          {
            en: 'Far be it from me to criticise, but this is wrong.',
            es: 'Lejos de mí criticar, pero esto está mal.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I suggest that he goes to the doctor.',
            right: 'I suggest that he go to the doctor.',
            why: 'The mandative subjunctive uses the **base form** (go), with no third-person -s.',
            esNote:
              "En inglés formal no se pone la -s: 'that he go'. (En estilo informal británico 'should go' también se acepta.)",
          },
          {
            wrong: 'It is important that everyone is on time.',
            right: 'It is important that everyone be on time.',
            why: "After 'it is important/essential that', use the base form **be**.",
            esNote: "Tras 'it is important/essential that' usa la forma base 'be'.",
          },
          {
            wrong: 'If I was rich, I would help you.',
            right: 'If I were rich, I would help you.',
            why: "In a clearly hypothetical 'if', formal/standard English uses **were** for all persons.",
            esNote: "Para hipótesis usa 'were' con todos los sujetos: 'If I were...'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-subj-1',
            prompt: "Choose the correct form: 'The committee demanded that the chairman ___.'",
            options: ['resign', 'resigns', 'resigned', 'to resign'],
            answer: 0,
            explain: "Mandative subjunctive after 'demand that': base form 'resign'.",
          },
          {
            kind: 'cloze',
            id: 'c1-subj-2',
            before: 'It is essential that every passenger',
            after: 'wearing a seatbelt.',
            answers: ['be'],
            hint: "base form of 'be'",
            explain: "After 'it is essential that', use the base form **be**.",
          },
          {
            kind: 'correct',
            id: 'c1-subj-3',
            wrong: 'I wish I was there with you now.',
            answers: [
              'I wish I were there with you now.',
              'I wish I were there with you right now.',
            ],
            explain: "Use the were-subjunctive after 'wish' for hypotheticals.",
          },
          {
            kind: 'order',
            id: 'c1-subj-4',
            tokens: ['We', 'recommend', 'that', 'she', 'not', 'travel', 'alone'],
            answer: 'We recommend that she not travel alone',
            explain: "Negative mandative subjunctive: 'that she not travel' (no 'doesn't').",
          },
          {
            kind: 'translate',
            id: 'c1-subj-5',
            es: 'El profesor insistió en que entregáramos los trabajos a tiempo.',
            answers: [
              'The teacher insisted that we hand in the assignments on time.',
              'The teacher insisted that we submit the assignments on time.',
              'The teacher insisted that we hand in our assignments on time.',
            ],
            explain: "After 'insisted that', the base form 'hand in / submit'.",
          },
          {
            kind: 'translate',
            id: 'c1-subj-6',
            es: 'Habla como si lo supiera todo.',
            answers: [
              'He talks as if he knew everything.',
              'She talks as if she knew everything.',
              'He speaks as if he knew everything.',
            ],
            explain: "'As if' + past/subjunctive for an unreal comparison.",
          },
          {
            kind: 'dictation',
            id: 'c1-subj-7',
            text: 'Be that as it may, I still believe we should try.',
            explain: "'Be that as it may' is a fixed subjunctive phrase meaning 'even so'.",
          },
        ],
      },
      {
        id: 'c1-past-modals',
        level: 'C1',
        title: 'Advanced past modals: speculation, criticism, regret',
        summary:
          'Modal + have + past participle lets you deduce, second-guess, and regret things that are already over.',
        sections: [
          {
            heading: 'Speculation and deduction about the past',
            body: "Use **must have** (certain it happened), **can't/couldn't have** (certain it didn't), and **may/might/could have** (possible) + past participle to reason about the past.",
            examples: [
              {
                en: "She's not answering; she must have gone to bed.",
                es: 'No contesta; debe de haberse acostado.',
              },
              {
                en: "He can't have finished already — he only just started.",
                es: 'No puede haber terminado ya; acaba de empezar.',
              },
              {
                en: 'They might have missed the turning.',
                es: 'Puede que se hayan saltado el desvío.',
              },
            ],
          },
          {
            heading: 'Criticism and unrealised obligation',
            body: "**Should have / ought to have + participle** criticises a past action or expresses what was the right thing to do but didn't happen. **Shouldn't have** criticises something that was done. **Could have** can also reproach a missed opportunity.",
            examples: [
              {
                en: 'You should have told me earlier.',
                es: 'Deberías habérmelo dicho antes.',
              },
              {
                en: "He shouldn't have spoken to her like that.",
                es: 'No debería haberle hablado así.',
              },
              {
                en: 'You could have at least apologised.',
                es: 'Por lo menos podrías haberte disculpado.',
              },
            ],
          },
          {
            heading: "Regret and willingness: would have / needn't have",
            body: "**Would have + participle** expresses what you'd have done (often with regret or in unreal results). **Needn't have + participle** = you did something that turned out to be unnecessary; contrast with **didn't need to** (you knew it was unnecessary, so maybe didn't do it).",
            examples: [
              {
                en: 'I would have called, but I lost your number.',
                es: 'Te habría llamado, pero perdí tu número.',
              },
              {
                en: "You needn't have cooked — we'd already eaten.",
                es: 'No hacía falta que cocinaras; ya habíamos comido.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Meaning of each past modal',
            columns: ['Form', 'Meaning', 'Example'],
            rows: [
              ['must have + pp', 'logical certainty (yes)', 'He must have left.'],
              ["can't/couldn't have + pp", 'logical certainty (no)', "She can't have known."],
              ['might/may/could have + pp', 'possibility', 'They may have forgotten.'],
              ['should have + pp', 'criticism / regret', 'You should have asked.'],
              ["needn't have + pp", 'unnecessary, but done', "I needn't have worried."],
            ],
          },
        ],
        examples: [
          {
            en: 'The ground is wet; it must have rained overnight.',
            es: 'El suelo está mojado; debe de haber llovido por la noche.',
          },
          {
            en: 'You could have warned me about the traffic!',
            es: '¡Podrías haberme avisado del tráfico!',
          },
          {
            en: "I shouldn't have eaten so much.",
            es: 'No debería haber comido tanto.',
          },
          {
            en: 'She might not have seen your message.',
            es: 'Puede que no haya visto tu mensaje.',
          },
          {
            en: "We needn't have rushed; the train was delayed anyway.",
            es: 'No hacía falta que corriéramos; el tren venía con retraso de todos modos.',
          },
          {
            en: "He can't have meant it; he was joking.",
            es: 'No pudo haberlo dicho en serio; estaba bromeando.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She must has left.',
            right: 'She must have left.',
            why: "After a modal use the base **have**, never 'has/had'.",
            esNote: "Tras un modal siempre 'have' en su forma base.",
          },
          {
            wrong: 'You must have not seen it.',
            right: "You can't have seen it. / You must not have seen it.",
            why: "For a negative deduction about the past, the natural form is **can't/couldn't have**; 'must have not' is awkward.",
            esNote: "Para deducción negativa usa 'can't/couldn't have + participio'.",
          },
          {
            wrong: "I didn't need to bring an umbrella, but I brought one and it didn't rain.",
            right: "I needn't have brought an umbrella (it didn't rain).",
            why: "Use **needn't have + pp** when you did something that proved unnecessary.",
            esNote:
              "'needn't have' = lo hiciste pero no hacía falta; 'didn't need to' = no hacía falta y quizá no lo hiciste.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-pmod-1',
            prompt: "Best fit: 'The lights are off and the car's gone — they ___ home.'",
            options: ['must have gone', 'should have gone', "can't have gone", "needn't have gone"],
            answer: 0,
            explain: "Strong evidence → logical certainty: 'must have gone'.",
          },
          {
            kind: 'cloze',
            id: 'c1-pmod-2',
            before: 'You',
            after: 'told me the meeting was cancelled — I waited an hour!',
            answers: ['should have', 'could have', "should've", "could've"],
            hint: 'criticism of a past failure',
            explain: "'should/could have told me' criticises the missed action.",
          },
          {
            kind: 'correct',
            id: 'c1-pmod-3',
            wrong: 'He must has forgotten our meeting.',
            answers: ['He must have forgotten our meeting.', "He must've forgotten our meeting."],
            explain: "Modal + base 'have' + participle.",
          },
          {
            kind: 'order',
            id: 'c1-pmod-4',
            tokens: ['You', "needn't", 'have', 'paid', 'for', 'everything'],
            answer: "You needn't have paid for everything",
            explain: "'needn't have + participle' = it was unnecessary, but you did it.",
          },
          {
            kind: 'translate',
            id: 'c1-pmod-5',
            es: 'No puede haber sido él; estaba conmigo.',
            answers: [
              "It can't have been him; he was with me.",
              "It couldn't have been him; he was with me.",
              "It can't have been him; he was with me the whole time.",
            ],
            explain: "Negative deduction about the past: 'can't/couldn't have been'.",
          },
          {
            kind: 'translate',
            id: 'c1-pmod-6',
            es: 'Deberías haber pedido ayuda.',
            answers: [
              'You should have asked for help.',
              'You ought to have asked for help.',
              "You should've asked for help.",
            ],
            explain: "'should/ought to have + participle' for past criticism/regret.",
          },
          {
            kind: 'dictation',
            id: 'c1-pmod-7',
            text: "I might have left my keys at the office, but I'm not sure.",
            explain: "'might have + participle' expresses uncertain past possibility.",
          },
        ],
      },
      {
        id: 'c1-passive-reporting',
        level: 'C1',
        title: 'The full passive range & advanced reporting',
        summary:
          'Beyond the basic passive: passive infinitives, get-passives, causatives, and distancing report structures.',
        sections: [
          {
            heading: 'The full passive toolkit',
            body: 'Master passives across tenses and forms: **passive infinitive** (to be done), **passive -ing** (being done), **perfect passive** (have been done), and the **get-passive** for sudden or unwanted events. The **causative** have/get something done shows you arranged an action.',
            examples: [
              {
                en: 'The documents need to be signed today.',
                es: 'Los documentos hay que firmarlos hoy.',
              },
              {
                en: 'She hates being interrupted.',
                es: 'Odia que la interrumpan.',
              },
              {
                en: 'Our car got towed last night.',
                es: 'Anoche se llevaron nuestro coche con la grúa.',
              },
              {
                en: "I'm having the kitchen repainted.",
                es: 'Me están repintando la cocina.',
              },
            ],
          },
          {
            heading: 'Impersonal passive reporting (distancing)',
            body: 'To report rumours or general belief impersonally, use **It is said/believed/thought/reported/claimed that...** or the personal version **Subject + is said/believed + to-infinitive**. Use a **perfect infinitive** (to have done) for an earlier action.',
            examples: [
              {
                en: 'It is believed that the suspect has fled the country.',
                es: 'Se cree que el sospechoso ha huido del país.',
              },
              {
                en: 'The minister is said to be considering resignation.',
                es: 'Se dice que el ministro está considerando dimitir.',
              },
              {
                en: 'He is thought to have left around midnight.',
                es: 'Se cree que se marchó hacia medianoche.',
              },
            ],
          },
          {
            heading: 'Advanced reporting verbs and patterns',
            body: "Go beyond 'say' and 'tell'. Many reporting verbs take specific patterns: **advise/urge/remind sb to do**, **admit/deny + -ing**, **insist/recommend (that)...**, **accuse sb of + -ing**, **blame sb for + -ing**, **congratulate sb on + -ing**. Choosing the right verb adds nuance (claim, allege, point out, concede, deny).",
            examples: [
              {
                en: 'He denied taking the money.',
                es: 'Negó haber cogido el dinero.',
              },
              {
                en: 'They accused her of leaking the report.',
                es: 'La acusaron de filtrar el informe.',
              },
              {
                en: 'She urged us to reconsider.',
                es: 'Nos instó a reconsiderarlo.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Impersonal vs personal report',
            columns: ['Active belief', 'It-passive', 'Personal passive'],
            rows: [
              ['People say he is rich.', 'It is said that he is rich.', 'He is said to be rich.'],
              [
                'They believe she stole it.',
                'It is believed that she stole it.',
                'She is believed to have stolen it.',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'The bridge is expected to be completed by 2027.',
            es: 'Se espera que el puente esté terminado para 2027.',
          },
          {
            en: 'Mistakes were made, but no one took responsibility.',
            es: 'Se cometieron errores, pero nadie asumió la responsabilidad.',
          },
          {
            en: 'I need to get my passport renewed before the trip.',
            es: 'Tengo que renovar el pasaporte antes del viaje.',
          },
          {
            en: 'The CEO is alleged to have misled investors.',
            es: 'Se alega que el director engañó a los inversores.',
          },
          {
            en: 'He admitted having lied about his qualifications.',
            es: 'Admitió haber mentido sobre su titulación.',
          },
          {
            en: 'Being told off in public was humiliating.',
            es: 'Que me regañaran en público fue humillante.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It is said he to be very wealthy.',
            right: 'He is said to be very wealthy. / It is said that he is very wealthy.',
            why: "Pick one structure: 'It is said THAT + clause' or 'He is said TO be...'. Don't blend them.",
            esNote: "'Se dice que...' tiene dos traducciones; no las mezcles.",
          },
          {
            wrong: 'He denied to take the money.',
            right: 'He denied taking the money.',
            why: '**deny** is followed by **-ing**, not a to-infinitive.',
            esNote:
              'Varios verbos de reporte (deny, admit, suggest) van con -ing, no con infinitivo.',
          },
          {
            wrong: 'I painted my house last week (meaning I hired someone).',
            right: 'I had my house painted last week.',
            why: 'Use the **causative have/get + object + past participle** when someone else does the work for you.',
            esNote: "Para 'me pintaron la casa' usa el causativo 'have/get + objeto + participio'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-pass-1',
            prompt: "Rewrite personally: 'It is thought that the painting is a fake.'",
            options: [
              'The painting is thought to be a fake.',
              'The painting is thought being a fake.',
              'The painting thinks to be a fake.',
              'It is thought the painting to be a fake.',
            ],
            answer: 0,
            explain: 'Personal passive report: subject + is thought + to-infinitive.',
          },
          {
            kind: 'cloze',
            id: 'c1-pass-2',
            before: "We're going to",
            after: 'the roof repaired before winter.',
            answers: ['have', 'get'],
            hint: 'causative verb',
            explain: "Causative 'have/get + object + past participle' (the roof repaired).",
          },
          {
            kind: 'correct',
            id: 'c1-pass-3',
            wrong: 'She admitted to steal the documents.',
            answers: [
              'She admitted stealing the documents.',
              'She admitted to stealing the documents.',
              'She admitted having stolen the documents.',
            ],
            explain: "'admit' takes -ing ('admit stealing' or 'admit to stealing').",
          },
          {
            kind: 'order',
            id: 'c1-pass-4',
            tokens: ['The', 'minister', 'is', 'believed', 'to', 'have', 'resigned'],
            answer: 'The minister is believed to have resigned',
            explain: "Personal report with perfect infinitive: 'is believed to have resigned'.",
          },
          {
            kind: 'translate',
            id: 'c1-pass-5',
            es: 'Se dice que la empresa está en crisis.',
            answers: [
              'The company is said to be in crisis.',
              'It is said that the company is in crisis.',
              'The company is said to be in a crisis.',
            ],
            explain: "Two valid report structures for 'Se dice que...'.",
          },
          {
            kind: 'translate',
            id: 'c1-pass-6',
            es: 'Lo acusaron de robar la información.',
            answers: [
              'They accused him of stealing the information.',
              'He was accused of stealing the information.',
              'They accused him of leaking the information.',
            ],
            explain: "'accuse sb of + -ing'.",
          },
          {
            kind: 'dictation',
            id: 'c1-pass-7',
            text: 'The new policy is expected to be announced sometime next week.',
            explain: "Passive infinitive after 'expected to be' for a future arrangement.",
          },
        ],
      },
      {
        id: 'c1-nominalisation',
        level: 'C1',
        title: 'Nominalisation & complex noun phrases',
        summary:
          'Academic and formal English packs information into nouns, building dense noun phrases instead of long verb-heavy clauses.',
        sections: [
          {
            heading: 'Turning verbs and adjectives into nouns',
            body: '**Nominalisation** turns an action or quality into a noun: decide → the decision, fail → the failure, grow → the growth, happy → happiness. This makes writing more abstract, concise, and impersonal — a hallmark of formal registers.',
            examples: [
              {
                en: "The committee decided quickly. → The committee's quick decision...",
                es: 'El comité decidió rápido. → La rápida decisión del comité...',
              },
              {
                en: 'Prices rose sharply. → The sharp rise in prices...',
                es: 'Los precios subieron mucho. → La fuerte subida de los precios...',
              },
            ],
          },
          {
            heading: 'Building complex noun phrases',
            body: 'A complex noun phrase can carry **pre-modifiers** (adjectives, nouns) and **post-modifiers** (prepositional phrases, relative or participle clauses) around a head noun. Order matters: determiner + adjectives + noun-modifier + HEAD + post-modifiers.',
            examples: [
              {
                en: 'a growing concern about online privacy',
                es: 'una preocupación creciente por la privacidad en internet',
              },
              {
                en: "the government's long-awaited decision to cut taxes",
                es: 'la tan esperada decisión del gobierno de bajar los impuestos',
              },
            ],
          },
          {
            heading: 'Why nominalise? Register and cohesion',
            body: "Nominalisation lets you **refer back** to a whole idea ('This decision...', 'Such an increase...') and link sentences smoothly. Overuse, however, makes prose heavy and vague, so balance it with clear verbs.",
            examples: [
              {
                en: 'Unemployment rose. This increase alarmed economists.',
                es: 'El desempleo subió. Este aumento alarmó a los economistas.',
              },
              {
                en: 'Their refusal to cooperate surprised no one.',
                es: 'Su negativa a cooperar no sorprendió a nadie.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common nominalisations',
            columns: ['Verb / Adjective', 'Noun'],
            rows: [
              ['analyse', 'analysis'],
              ['argue', 'argument'],
              ['expand', 'expansion'],
              ['able', 'ability'],
              ['respond', 'response'],
              ['explain', 'explanation'],
            ],
          },
        ],
        examples: [
          {
            en: 'The failure of the negotiations led to a strike.',
            es: 'El fracaso de las negociaciones provocó una huelga.',
          },
          {
            en: 'There has been a significant improvement in air quality.',
            es: 'Ha habido una mejora significativa en la calidad del aire.',
          },
          {
            en: 'The discovery of the vaccine changed everything.',
            es: 'El descubrimiento de la vacuna lo cambió todo.',
          },
          {
            en: 'His sudden departure from the company raised questions.',
            es: 'Su repentina salida de la empresa suscitó preguntas.',
          },
          {
            en: 'A widely held belief among scientists is now being challenged.',
            es: 'Una creencia muy extendida entre los científicos se está cuestionando ahora.',
          },
          {
            en: 'The implementation of the new rules has caused confusion.',
            es: 'La aplicación de las nuevas normas ha causado confusión.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The decide of the board was final.',
            right: 'The decision of the board was final.',
            why: 'You must use the **noun form** (decision), not the verb, as the head of a noun phrase.',
            esNote: "Necesitas el sustantivo ('decision'), no el verbo ('decide').",
          },
          {
            wrong: 'the privacy online a growing concern',
            right: 'a growing concern about online privacy',
            why: 'Pre-modifiers go before the head noun and post-modifying phrases (about...) go after it, in a fixed order.',
            esNote: 'El español pospone muchos adjetivos; el inglés los antepone al sustantivo.',
          },
          {
            wrong: 'There was a big rise of unemployment.',
            right: 'There was a big rise in unemployment.',
            why: 'Use the correct dependent preposition: a rise/increase/fall **in** something.',
            esNote: "'rise/increase IN', no 'of'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-nom-1',
            prompt: "Choose the nominalised version of 'The team performed badly.'",
            options: [
              "The team's poor performance",
              'The team performed bad',
              "The bad of the team's performing",
              'The team is performance bad',
            ],
            answer: 0,
            explain: "Verb + adverb → noun phrase: 'the team's poor performance'.",
          },
          {
            kind: 'cloze',
            id: 'c1-nom-2',
            before: 'There has been a sharp increase',
            after: 'house prices this year.',
            answers: ['in'],
            hint: "preposition after 'increase'",
            explain: "'increase / rise / fall IN' something.",
          },
          {
            kind: 'correct',
            id: 'c1-nom-3',
            wrong: 'The analyse of the data took two weeks.',
            answers: [
              'The analysis of the data took two weeks.',
              'Analysis of the data took two weeks.',
            ],
            explain: "Use the noun 'analysis', not the verb 'analyse'.",
          },
          {
            kind: 'order',
            id: 'c1-nom-4',
            tokens: ['a', 'growing', 'demand', 'for', 'renewable', 'energy'],
            answer: 'a growing demand for renewable energy',
            explain: 'Pre-modifier (growing) before the head, post-modifier (for...) after.',
          },
          {
            kind: 'translate',
            id: 'c1-nom-5',
            es: 'El fracaso del proyecto decepcionó a los inversores.',
            answers: [
              'The failure of the project disappointed the investors.',
              "The project's failure disappointed the investors.",
              'The failure of the project disappointed investors.',
            ],
            explain: "Nominalised subject 'the failure of the project'.",
          },
          {
            kind: 'translate',
            id: 'c1-nom-6',
            es: 'Su negativa a disculparse empeoró la situación.',
            answers: [
              'His refusal to apologise made the situation worse.',
              'Her refusal to apologise made the situation worse.',
              'His refusal to apologise worsened the situation.',
            ],
            explain: "'refusal to + infinitive' nominalises 'refuse to'.",
          },
          {
            kind: 'dictation',
            id: 'c1-nom-7',
            text: "The government's reluctance to act has drawn widespread criticism.",
            explain: "Two nominalisations: 'reluctance to act' and 'criticism'.",
          },
        ],
      },
      {
        id: 'c1-participle-clauses',
        level: 'C1',
        title: 'Participle clauses (negative, absolute, concessive)',
        summary:
          'Participle clauses compress two clauses into one, adding economy and a polished, written feel.',
        sections: [
          {
            heading: 'Present and perfect participle clauses',
            body: 'A **participle clause** replaces a clause with the same subject. Use the **-ing** participle for actions happening at the same time or for a reason/result, and the **perfect participle (having + pp)** for an earlier action. The subject of both clauses must match.',
            examples: [
              {
                en: 'Feeling tired, she went to bed early.',
                es: 'Sintiéndose cansada, se acostó temprano.',
              },
              {
                en: 'Having finished the report, he left the office.',
                es: 'Habiendo terminado el informe, salió de la oficina.',
              },
              {
                en: 'Opening the door, I noticed a strange smell.',
                es: 'Al abrir la puerta, noté un olor extraño.',
              },
            ],
          },
          {
            heading: 'Negative, passive and conjunctioned participles',
            body: 'Make a participle clause **negative** with **not** before it (Not knowing what to say, ...). Use the **past participle** alone for a passive meaning (Built in 1850, the house...). You can keep a conjunction for clarity: **when/while/before/after + -ing**, **though/although + -ed** for a **concessive** sense.',
            examples: [
              {
                en: 'Not wanting to disturb anyone, she crept out.',
                es: 'Para no molestar a nadie, se escabulló.',
              },
              {
                en: 'Built on a cliff, the hotel has stunning views.',
                es: 'Construido sobre un acantilado, el hotel tiene vistas impresionantes.',
              },
              {
                en: 'Though exhausted, they kept walking.',
                es: 'Aunque agotados, siguieron caminando.',
              },
            ],
          },
          {
            heading: 'Absolute clauses (with their own subject)',
            body: "An **absolute clause** has its **own subject**, different from the main clause, often with **with**: 'The meeting over, we went home'; 'With the kids asleep, we relaxed.' These add background detail compactly.",
            examples: [
              {
                en: 'The work finished, they celebrated.',
                es: 'Terminado el trabajo, celebraron.',
              },
              {
                en: 'With night falling, we set up camp.',
                es: 'Al caer la noche, montamos el campamento.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Which participle?',
            columns: ['Meaning', 'Form', 'Example'],
            rows: [
              ['same time / reason', '-ing', 'Living abroad, she learned fast.'],
              ['earlier action', 'having + pp', 'Having eaten, we left.'],
              ['passive', 'past participle', 'Damaged in the storm, it was unsafe.'],
              ['negative', 'not + participle', 'Not having a key, I waited.'],
            ],
          },
        ],
        examples: [
          {
            en: 'Walking home, I bumped into an old friend.',
            es: 'Mientras volvía a casa, me encontré con un viejo amigo.',
          },
          {
            en: 'Having lived in London for years, she knows it well.',
            es: 'Habiendo vivido en Londres durante años, lo conoce bien.',
          },
          {
            en: 'Written in haste, the letter contained several errors.',
            es: 'Escrita con prisas, la carta contenía varios errores.',
          },
          {
            en: 'Not having heard from them, we assumed the worst.',
            es: 'Al no tener noticias suyas, supusimos lo peor.',
          },
          {
            en: 'The speech finished, the audience applauded warmly.',
            es: 'Terminado el discurso, el público aplaudió con calor.',
          },
          {
            en: 'Although warned, he ignored the danger.',
            es: 'Aunque le avisaron, ignoró el peligro.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Walking down the street, a dog bit me.',
            right: 'Walking down the street, I was bitten by a dog.',
            why: "A **dangling participle**: the participle's subject must match the main subject. As written, the dog is walking.",
            esNote: 'El sujeto del gerundio debe coincidir con el del verbo principal.',
          },
          {
            wrong: 'Having finished, the report was emailed.',
            right: 'Having finished the report, she emailed it.',
            why: "'Having finished' needs a human subject who did the finishing; a report cannot finish itself.",
            esNote: 'El participio perfecto necesita un sujeto humano que realice la acción.',
          },
          {
            wrong: 'No knowing the answer, I stayed quiet.',
            right: 'Not knowing the answer, I stayed quiet.',
            why: 'Negate a participle clause with **not**, placed before the participle.',
            esNote: "La negación es 'not + participio', no 'no'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-part-1',
            prompt: "Combine: 'She had already seen the film. She didn't want to go again.' → ___",
            options: [
              "Having already seen the film, she didn't want to go again.",
              "Having already saw the film, she didn't want to go again.",
              "Seeing already the film, she didn't want to go again.",
              "Been seen the film, she didn't want to go again.",
            ],
            answer: 0,
            explain: "Earlier action → perfect participle 'Having + past participle (seen)'.",
          },
          {
            kind: 'cloze',
            id: 'c1-part-2',
            before: '',
            after: 'in 1889, the tower is now a global icon.',
            answers: ['Built', 'Completed', 'Constructed'],
            hint: 'passive participle (past participle)',
            explain: "Passive meaning → bare past participle 'Built in 1889'.",
          },
          {
            kind: 'correct',
            id: 'c1-part-3',
            wrong: 'Driving to work, the engine suddenly stopped.',
            answers: [
              'While I was driving to work, the engine suddenly stopped.',
              'As I was driving to work, the engine suddenly stopped.',
              'Driving to work, I felt the engine suddenly stop.',
            ],
            explain:
              "Avoid the dangling participle: the engine wasn't driving. Restore the real subject.",
          },
          {
            kind: 'order',
            id: 'c1-part-4',
            tokens: ['Not', 'knowing', 'the', 'city', 'we', 'got', 'lost'],
            answer: 'Not knowing the city we got lost',
            explain: "Negative participle clause: 'Not + -ing'.",
          },
          {
            kind: 'translate',
            id: 'c1-part-5',
            es: 'Habiendo terminado los deberes, salió a jugar.',
            answers: [
              'Having finished his homework, he went out to play.',
              'Having finished her homework, she went out to play.',
              'Having done his homework, he went out to play.',
            ],
            explain: 'Perfect participle for the earlier action.',
          },
          {
            kind: 'translate',
            id: 'c1-part-6',
            es: 'Aunque herido, siguió jugando.',
            answers: [
              'Although injured, he kept playing.',
              'Though injured, he kept playing.',
              'Although injured, he continued playing.',
            ],
            explain: "Concessive participle clause: 'Although/Though + past participle'.",
          },
          {
            kind: 'dictation',
            id: 'c1-part-7',
            text: 'With the deadline approaching, the team worked through the night.',
            explain: "An absolute clause with 'with' supplying background detail.",
          },
        ],
      },
      {
        id: 'c1-relative-quantifiers-ellipsis',
        level: 'C1',
        title: 'Relatives with quantifiers, ellipsis & substitution',
        summary:
          "Tie clauses together elegantly with 'most of whom' relatives, and trim repetition with ellipsis and 'so/not'.",
        sections: [
          {
            heading: 'Quantifier + of + whom / which',
            body: 'In formal non-defining relative clauses you can place a **quantifier before of whom/of which**: all of whom, most of which, several of whom, none of which, the majority of whom, both of which. Use **whom** for people, **which** for things.',
            examples: [
              {
                en: 'She has three brothers, all of whom are doctors.',
                es: 'Tiene tres hermanos, todos los cuales son médicos.',
              },
              {
                en: 'He made several claims, none of which were true.',
                es: 'Hizo varias afirmaciones, ninguna de las cuales era cierta.',
              },
              {
                en: 'They sell dozens of products, many of which are eco-friendly.',
                es: 'Venden docenas de productos, muchos de los cuales son ecológicos.',
              },
            ],
          },
          {
            heading: 'Ellipsis: leaving out repeated words',
            body: "**Ellipsis** omits words the listener can recover. After auxiliaries, drop the repeated verb phrase ('I haven't finished, but she has.'). In coordinated clauses, drop a repeated subject or verb ('He bought the tickets and [he] paid for dinner.').",
            examples: [
              {
                en: "I'd help if I could (help).",
                es: 'Te ayudaría si pudiera.',
              },
              {
                en: "Some people like it; others don't (like it).",
                es: 'A algunos les gusta; a otros no.',
              },
            ],
          },
          {
            heading: 'Substitution with so, not, one and do',
            body: "Replace a whole clause with **so** (positive) or **not** (negative) after verbs like think, hope, expect, suppose, believe, guess, be afraid: 'I think so', 'I hope not'. Use **one/ones** to replace a countable noun, and **do/does/did** to replace a verb phrase.",
            examples: [
              {
                en: '"Will it rain?" "I hope not."',
                es: '—¿Lloverá? —Espero que no.',
              },
              {
                en: '"Are we late?" "I\'m afraid so."',
                es: '—¿Llegamos tarde? —Me temo que sí.',
              },
              {
                en: 'I prefer the red one to the blue one.',
                es: 'Prefiero el rojo al azul.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Substitution after reporting verbs',
            columns: ['Positive (so)', 'Negative', 'Verb'],
            rows: [
              ['I think so.', "I don't think so.", 'think (negative on the verb)'],
              ['I hope so.', 'I hope not.', "hope (negative with 'not')"],
              ["I'm afraid so.", "I'm afraid not.", "be afraid (negative with 'not')"],
              ['I expect so.', "I expect not. / I don't expect so.", 'expect (both)'],
            ],
          },
        ],
        examples: [
          {
            en: 'I interviewed ten candidates, two of whom were outstanding.',
            es: 'Entrevisté a diez candidatos, dos de los cuales eran excelentes.',
          },
          {
            en: 'We visited three museums, each of which was unique.',
            es: 'Visitamos tres museos, cada uno de los cuales era único.',
          },
          {
            en: '"Has the meeting been cancelled?" "I believe so."',
            es: '—¿Se ha cancelado la reunión? —Creo que sí.',
          },
          {
            en: "He said he'd call, but he didn't.",
            es: 'Dijo que llamaría, pero no lo hizo.',
          },
          {
            en: 'This phone is better than my old one.',
            es: 'Este teléfono es mejor que el viejo.',
          },
          {
            en: "I don't think so, to be honest.",
            es: 'No lo creo, sinceramente.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She has many friends, most of them are foreign.',
            right: 'She has many friends, most of whom are foreign.',
            why: "In a relative clause use **of whom/of which**, not 'of them/of it'.",
            esNote:
              "'most of whom' = 'la mayoría de los cuales'; 'of them' rompe la cláusula relativa.",
          },
          {
            wrong: 'I think yes. / I hope yes.',
            right: 'I think so. / I hope so.',
            why: "English substitutes a clause with **so**, never 'yes', after these verbs.",
            esNote: "'Creo que sí' = 'I think so', no 'I think yes'.",
          },
          {
            wrong: 'I want the blue.',
            right: 'I want the blue one.',
            why: 'When a noun is omitted after an adjective, English needs the pro-form **one/ones**.',
            esNote: "El español puede decir 'el azul'; el inglés necesita 'the blue one'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-rel-1',
            prompt:
              "Choose the correct relative: 'The report had ten sections, ___ dealt with safety.'",
            options: ['three of which', 'three of them', 'three of who', 'three which'],
            answer: 0,
            explain: 'Quantifier + of which (things) in a non-defining relative clause.',
          },
          {
            kind: 'cloze',
            id: 'c1-rel-2',
            before: '"Do you think they\'ll win?" "I',
            after: 'so."',
            answers: ['hope', 'think', 'expect', 'suppose', 'guess', 'believe'],
            hint: 'verb + so',
            explain: "Substitution: verb of opinion/hope + 'so'.",
          },
          {
            kind: 'correct',
            id: 'c1-rel-3',
            wrong: 'I have two cars, both of them are electric.',
            answers: [
              'I have two cars, both of which are electric.',
              'I have two cars, both of which are electric ones.',
            ],
            explain: "Use 'both of which' inside the relative clause, not 'both of them'.",
          },
          {
            kind: 'order',
            id: 'c1-rel-4',
            tokens: ['She', 'invited', 'fifty', 'guests', 'most', 'of', 'whom', 'came'],
            answer: 'She invited fifty guests most of whom came',
            explain: "'most of whom' links the second clause to 'guests' (people).",
          },
          {
            kind: 'translate',
            id: 'c1-rel-5',
            es: '—¿Va a llover? —Espero que no.',
            answers: [
              '"Is it going to rain?" "I hope not."',
              'Is it going to rain? I hope not.',
              '"Will it rain?" "I hope not."',
            ],
            explain: "Negative substitution after 'hope' uses 'not'.",
          },
          {
            kind: 'translate',
            id: 'c1-rel-6',
            es: 'Tengo dos ofertas de trabajo, ninguna de las cuales me convence.',
            answers: [
              'I have two job offers, neither of which convinces me.',
              'I have two job offers, neither of which appeals to me.',
              'I have two job offers, none of which convinces me.',
            ],
            explain: "'neither/none of which' for things in a relative clause.",
          },
          {
            kind: 'dictation',
            id: 'c1-rel-7',
            text: "He promised to help, but in the end he didn't.",
            explain: "Ellipsis after 'didn't' — the verb phrase 'help' is left understood.",
          },
        ],
      },
      {
        id: 'c1-hedging-linkers',
        level: 'C1',
        title: 'Hedging, stance adverbials & advanced linkers',
        summary:
          'Sound measured and academic: soften claims, signal your viewpoint, and connect ideas with precise discourse markers.',
        sections: [
          {
            heading: 'Hedging: softening your claims',
            body: '**Hedging** makes statements cautious and credible. Use modals (**may, might, could, would, can**), approximators (**tend to, seem to, appear to, generally, to some extent**), and frames (**it could be argued that, there is some evidence that**). This avoids sweeping overstatement.',
            examples: [
              {
                en: 'This may suggest that the policy is failing.',
                es: 'Esto podría indicar que la política está fracasando.',
              },
              {
                en: 'The results tend to support the hypothesis.',
                es: 'Los resultados tienden a respaldar la hipótesis.',
              },
              {
                en: 'It could be argued that the law is outdated.',
                es: 'Podría argumentarse que la ley está anticuada.',
              },
            ],
          },
          {
            heading: 'Stance adverbials: showing your attitude',
            body: '**Stance (comment) adverbials** flag your viewpoint at the start of a sentence: **admittedly, arguably, presumably, evidently, apparently, understandably, frankly, ideally, inevitably, regrettably**. They comment on the whole statement that follows.',
            examples: [
              {
                en: "Admittedly, I hadn't read the whole document.",
                es: 'Hay que reconocer que no había leído todo el documento.',
              },
              {
                en: 'Arguably, this is her best novel yet.',
                es: 'Podría decirse que es su mejor novela hasta ahora.',
              },
              {
                en: "Presumably, they'll announce the results tomorrow.",
                es: 'Es de suponer que anunciarán los resultados mañana.',
              },
            ],
          },
          {
            heading: 'Advanced linkers: and yet, whereas, in that',
            body: 'Refine the relationships between ideas: **and yet** (surprising contrast), **whereas / while** (direct comparison/contrast), **in that** (= in the sense that, giving the respect in which something is true), **insofar as**, **albeit** (= although, + phrase), **notwithstanding** (= despite).',
            examples: [
              {
                en: 'He earns very little, and yet he seems content.',
                es: 'Gana muy poco y, sin embargo, parece contento.',
              },
              {
                en: 'Some prefer cities, whereas others love the countryside.',
                es: 'Algunos prefieren las ciudades, mientras que otros adoran el campo.',
              },
              {
                en: 'The plan is risky in that it relies on one supplier.',
                es: 'El plan es arriesgado en el sentido de que depende de un solo proveedor.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Linkers and their function',
            columns: ['Linker', 'Function', 'Rough Spanish'],
            rows: [
              ['and yet', 'surprising contrast', 'y sin embargo'],
              ['whereas', 'direct contrast', 'mientras que'],
              ['in that', 'specifying respect', 'en el sentido de que'],
              ['albeit', 'concession (+ phrase)', 'aunque'],
              ['notwithstanding', 'despite', 'a pesar de'],
            ],
          },
        ],
        examples: [
          {
            en: 'Arguably, the reform did more harm than good.',
            es: 'Podría argumentarse que la reforma hizo más mal que bien.',
          },
          {
            en: 'The evidence is, admittedly, far from conclusive.',
            es: 'Las pruebas, hay que admitirlo, distan de ser concluyentes.',
          },
          {
            en: 'It seems likely that prices will continue to rise.',
            es: 'Parece probable que los precios sigan subiendo.',
          },
          {
            en: 'She accepted the role, albeit reluctantly.',
            es: 'Aceptó el puesto, aunque a regañadientes.',
          },
          {
            en: 'The north is industrial, whereas the south is largely rural.',
            es: 'El norte es industrial, mientras que el sur es mayormente rural.',
          },
          {
            en: 'His theory is useful in that it explains the anomaly.',
            es: 'Su teoría es útil en el sentido de que explica la anomalía.',
          },
        ],
        pitfalls: [
          {
            wrong: 'Obviously this is the best solution and there is no doubt.',
            right: 'Arguably, this could be the best solution.',
            why: "Academic writing prefers **hedged** claims; absolute statements ('obviously', 'no doubt') sound unsupported.",
            esNote: 'Modera las afirmaciones; evita expresiones tajantes en estilo formal.',
          },
          {
            wrong: 'He is poor, yet however he is happy.',
            right: 'He is poor, and yet he is happy.',
            why: "Don't stack contrast markers ('yet' + 'however'); choose one. 'and yet' is a fixed pair.",
            esNote: 'No acumules conectores de contraste; usa solo uno.',
          },
          {
            wrong: "I like tea, whereas I don't like coffee, whereas it's bitter.",
            right: "I like tea, whereas I don't like coffee, because it's bitter.",
            why: "**Whereas** marks contrast between two clauses, not a reason; use 'because' for cause.",
            esNote: "'whereas' = 'mientras que' (contraste), no 'porque'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c1-hedge-1',
            prompt:
              "Choose the best hedged version: 'Social media ___ harmful to teenagers' mental health.'",
            options: ['may be', 'is definitely', 'is absolutely', 'must be totally'],
            answer: 0,
            explain: "'may be' hedges the claim, which suits cautious academic writing.",
          },
          {
            kind: 'cloze',
            id: 'c1-hedge-2',
            before: 'She has a degree in physics,',
            after: 'her brother studied law.',
            answers: ['whereas', 'while'],
            hint: 'direct contrast linker',
            explain: "'whereas / while' draws a contrast between the two siblings.",
          },
          {
            kind: 'correct',
            id: 'c1-hedge-3',
            wrong: 'Admittedly is true that I made a mistake.',
            answers: [
              'Admittedly, I made a mistake.',
              'Admittedly, it is true that I made a mistake.',
              "Admittedly, it's true that I made a mistake.",
            ],
            explain:
              "'Admittedly' is a sentence adverbial; it doesn't take a dummy subject by itself.",
          },
          {
            kind: 'order',
            id: 'c1-hedge-4',
            tokens: ['The', 'design', 'is', 'clever', 'in', 'that', 'it', 'saves', 'space'],
            answer: 'The design is clever in that it saves space',
            explain: "'in that' introduces the respect in which the design is clever.",
          },
          {
            kind: 'translate',
            id: 'c1-hedge-5',
            es: 'Podría argumentarse que el sistema es injusto.',
            answers: [
              'It could be argued that the system is unfair.',
              'It could be argued that the system is unjust.',
              'One could argue that the system is unfair.',
            ],
            explain: "'It could be argued that' is a standard hedging frame.",
          },
          {
            kind: 'translate',
            id: 'c1-hedge-6',
            es: 'Gana mucho dinero y, sin embargo, nunca está satisfecho.',
            answers: [
              'He earns a lot of money, and yet he is never satisfied.',
              "He makes a lot of money, and yet he's never satisfied.",
              'She earns a lot of money, and yet she is never satisfied.',
            ],
            explain: "'and yet' signals the surprising contrast.",
          },
          {
            kind: 'dictation',
            id: 'c1-hedge-7',
            text: 'Presumably, the committee will reach a decision by the end of the month.',
            explain: "'Presumably' is a stance adverbial expressing reasonable assumption.",
          },
        ],
      },
    ],
  },
  {
    level: 'C2',
    title: 'C2 · Mastery',
    blurb:
      'Stylistic inversion, distance clefts, nuanced modality and register control for full rhetorical command of English.',
    lessons: [
      {
        id: 'c2-tense-aspect-register',
        level: 'C2',
        title: 'Tense and aspect with subtle register',
        summary:
          'At C2 the choice between past and present perfect, simple and continuous, is driven by viewpoint and register rather than by rules — and the past forms carry tentativeness and distance.',
        sections: [
          {
            heading: 'Aspect encodes viewpoint, not just time',
            body: "Native-like control means choosing **continuous** for an action seen as ongoing, framing or temporary, and **simple** for a complete or characterising event. The continuous can soften a statement (**I'm hoping** is gentler than **I hope**) or signal that something is provisional and may change.",
            examples: [
              {
                en: "I'm hoping you might reconsider.",
                es: 'Espero (con cautela) que puedas reconsiderarlo.',
              },
              {
                en: "I was wondering whether you'd be free on Thursday.",
                es: 'Me preguntaba si estarías libre el jueves.',
              },
              {
                en: "You'll have been travelling for twelve hours by the time you land.",
                es: 'Habrás estado viajando doce horas para cuando aterrices.',
              },
            ],
          },
          {
            heading: 'Distancing through backshift',
            body: "Shifting a verb **one step into the past** creates politeness and hypothetical distance without referring to past time. **Did you want** the bill? is more tentative than **Do you want**; **I'd thought** we agreed signals diplomatic surprise.",
            examples: [
              {
                en: 'Did you want to leave a message?',
                es: '¿Quería dejar un mensaje? (más cortés)',
              },
              {
                en: "I'd imagined the meeting would start at nine.",
                es: 'Me había imaginado que la reunión empezaría a las nueve.',
              },
            ],
          },
          {
            heading: 'Perfect aspect for relevance and résumé',
            body: 'The **present perfect** ties a past event to now (results, experience, news), while the **past simple** files it in finished time. In formal abstracts and CVs, the perfect builds a record: **The committee has reviewed...**; narrative reportage prefers the simple for immediacy.',
            examples: [
              {
                en: 'The board has approved the merger.',
                es: 'La junta ha aprobado la fusión.',
              },
              {
                en: 'Shares fell sharply after the announcement.',
                es: 'Las acciones cayeron bruscamente tras el anuncio.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Pragmatic effect of marked tense/aspect choices',
            columns: ['Form', 'Literal time', 'Added meaning'],
            rows: [
              ['I was wondering...', 'past continuous', 'tentative request, polite'],
              ["I'm loving this", 'present continuous', 'temporary, emphatic stance'],
              ['Did you need anything?', 'past simple', 'softened offer'],
              ["I'd been meaning to ask", 'past perfect cont.', 'delayed intention, apologetic'],
            ],
          },
        ],
        examples: [
          {
            en: 'I was thinking we might push the deadline back a little.',
            es: 'Estaba pensando que quizás podríamos posponer un poco la fecha límite.',
          },
          {
            en: "By next month I'll have been working here for a decade.",
            es: 'Para el mes que viene llevaré una década trabajando aquí.',
          },
          {
            en: "Honestly, I'm not seeing the problem you describe.",
            es: 'Sinceramente, no veo el problema que describes.',
          },
          {
            en: 'We had been led to believe the funding was secure.',
            es: 'Nos habían hecho creer que la financiación estaba asegurada.',
          },
          {
            en: 'Critics have long argued that the policy was flawed.',
            es: 'Los críticos han sostenido desde hace tiempo que la política era defectuosa.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I am wondering if you can help me, please.',
            right: 'I was wondering if you could help me, please.',
            why: 'The **past continuous + could** creates the polite distance English uses for requests.',
            esNote:
              'El presente suena demasiado directo; el inglés retrocede el tiempo para ser cortés.',
          },
          {
            wrong: 'I have seen that film yesterday.',
            right: 'I saw that film yesterday.',
            why: 'A finished-time adverb like **yesterday** forces the past simple, never the present perfect.',
            esNote:
              'Con un tiempo terminado (ayer) no se usa el present perfect, a diferencia del español coloquial.',
          },
          {
            wrong: 'When I will arrive, I will call you.',
            right: "When I arrive, I'll call you.",
            why: 'After **when/as soon as** in future contexts, use the present, not will.',
            esNote: "Como en español: 'Cuando llegue', no 'cuando llegaré'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ta-1',
            prompt: 'Which is the most diplomatically tentative way to make the request?',
            options: [
              'I want a word with you.',
              'I was wondering if I might have a word.',
              'I wonder you have a word.',
              'Do you want I have a word?',
            ],
            answer: 1,
            explain: 'Past continuous + might creates the softened, polite register.',
          },
          {
            kind: 'cloze',
            id: 'c2-ta-2',
            before: 'By the end of this year, she ',
            after: ' for the company for twenty years.',
            answers: ['will have been working', 'will have worked'],
            explain:
              'Future perfect (continuous preferred for duration) projects a span up to a future point.',
            hint: 'future perfect',
          },
          {
            kind: 'correct',
            id: 'c2-ta-3',
            wrong: 'The committee already discussed the proposal last week.',
            answers: [
              'The committee discussed the proposal last week.',
              'The committee already discussed the proposal last week — wait, that should be past simple.',
            ],
            explain:
              "With 'last week' (finished time) use the past simple, not the present perfect; here 'already' wrongly pulls toward the perfect.",
          },
          {
            kind: 'translate',
            id: 'c2-ta-4',
            es: 'Me preguntaba si estarías libre mañana.',
            answers: [
              "I was wondering if you'd be free tomorrow.",
              'I was wondering whether you would be free tomorrow.',
              'I was wondering if you were free tomorrow.',
            ],
            explain: 'Past continuous opener gives polite distance.',
          },
          {
            kind: 'order',
            id: 'c2-ta-5',
            tokens: ['We', 'had', 'been', 'led', 'to', 'believe', 'otherwise'],
            answer: 'We had been led to believe otherwise',
            explain: 'Past perfect passive expresses a prior, now-contradicted belief.',
          },
          {
            kind: 'dictation',
            id: 'c2-ta-6',
            text: 'Critics have long maintained that the reform was rushed.',
            explain:
              'Present perfect (have long maintained) for an ongoing stance; past simple (was rushed) for the finished event.',
          },
        ],
      },
      {
        id: 'c2-stylistic-inversion',
        level: 'C2',
        title: 'Stylistic inversion: so, such, and fronted complements',
        summary:
          "Beyond negative adverbials, C2 writers invert after fronted 'so + adjective' and 'such', and front complements for dramatic, literary effect.",
        sections: [
          {
            heading: 'So + adjective/adverb ... that',
            body: 'Front **so + adjective** and invert the auxiliary for heightened drama: *So intense was the heat that the road buckled.* The pattern moves the result clause to the spotlight and feels markedly literary.',
            examples: [
              {
                en: 'So intense was the heat that the tarmac began to melt.',
                es: 'Tan intenso era el calor que el asfalto empezó a derretirse.',
              },
              {
                en: 'So convincing was her argument that no one objected.',
                es: 'Tan convincente era su argumento que nadie objetó.',
              },
            ],
          },
          {
            heading: 'Such + noun ... that',
            body: 'Front **such (a) + noun phrase** for the same effect: *Such was his influence that ministers sought his counsel.* Note **such** governs a noun, **so** an adjective or adverb.',
            examples: [
              {
                en: 'Such was the outcry that the law was repealed.',
                es: 'Tal fue la indignación que la ley fue derogada.',
              },
              {
                en: 'Such a storm did it become that flights were grounded.',
                es: 'Tal tormenta se volvió que se cancelaron los vuelos.',
              },
            ],
          },
          {
            heading: 'Fronting complements and adverbials',
            body: 'Place a **complement or prepositional phrase first** and invert for cohesion and emphasis: *Gone are the days when...*; *Among the guests was a former president.* This keeps long or new information at the end, where English prefers its weight.',
            examples: [
              {
                en: 'Gone are the days when a handshake sealed a deal.',
                es: 'Atrás quedaron los días en que un apretón de manos cerraba un trato.',
              },
              {
                en: 'Among the casualties were three senior officers.',
                es: 'Entre las bajas había tres oficiales de alto rango.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'So vs such in fronted inversion',
            columns: ['Trigger', 'Governs', 'Example'],
            rows: [
              ['So + adjective/adverb', 'adjective or adverb', 'So great was the demand that...'],
              ['Such + (a) + noun', 'noun phrase', 'Such was the demand that...'],
              [
                'Fronted -ed/-ing complement',
                'participle',
                'Gone are the days... / Standing at the door was...',
              ],
            ],
          },
        ],
        examples: [
          {
            en: 'So rarely does he speak that everyone listens when he does.',
            es: 'Tan raramente habla que todos escuchan cuando lo hace.',
          },
          {
            en: 'Such was the silence that you could hear the clock ticking.',
            es: 'Tal era el silencio que se oía el tictac del reloj.',
          },
          {
            en: 'So bewildering were the instructions that we gave up.',
            es: 'Tan desconcertantes eran las instrucciones que nos rendimos.',
          },
          {
            en: 'Seldom has a film divided audiences so sharply.',
            es: 'Pocas veces una película ha dividido al público tan marcadamente.',
          },
          {
            en: 'At the heart of the scandal lay a single forged document.',
            es: 'En el corazón del escándalo había un único documento falsificado.',
          },
        ],
        pitfalls: [
          {
            wrong: 'So intense the heat was that the road buckled.',
            right: 'So intense was the heat that the road buckled.',
            why: 'After fronted **so + adjective** you must invert: was the heat, not the heat was.',
            esNote:
              "Hay que invertir el verbo y el sujeto, no basta con anteponer 'so + adjetivo'.",
          },
          {
            wrong: 'Such was big the storm that flights stopped.',
            right:
              'Such was the storm that flights stopped. / So big was the storm that flights stopped.',
            why: "**Such** takes a noun directly; don't insert an adjective. Use **so** if you want the adjective.",
            esNote: "'Such' va con sustantivo; 'so' va con adjetivo. No se mezclan.",
          },
          {
            wrong: 'Gone is the days of cheap travel.',
            right: 'Gone are the days of cheap travel.',
            why: 'The verb agrees with the postponed plural subject **days**.',
            esNote: 'El verbo concuerda con el sujeto pospuesto, que aquí es plural.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-si-1',
            prompt: 'Choose the correct fronted inversion.',
            options: [
              'So loud the music was that we left.',
              'So loud was the music that we left.',
              'Such loud was the music that we left.',
              'So was loud the music that we left.',
            ],
            answer: 1,
            explain: 'So + adjective fronted → invert auxiliary and subject: was the music.',
          },
          {
            kind: 'cloze',
            id: 'c2-si-2',
            before: 'Such ',
            after: ' his reputation that clients waited months for an appointment.',
            answers: ['was'],
            explain:
              "Such + (noun phrase = his reputation) ... that; the verb 'was' inverts before the subject.",
          },
          {
            kind: 'order',
            id: 'c2-si-3',
            tokens: ['So', 'fierce', 'was', 'the', 'competition', 'that', 'many', 'withdrew'],
            answer: 'So fierce was the competition that many withdrew',
            explain: 'So + adjective + inverted was + subject + that-clause.',
          },
          {
            kind: 'correct',
            id: 'c2-si-4',
            wrong: 'Gone is the days when letters arrived by post.',
            answers: ['Gone are the days when letters arrived by post.'],
            explain: "Subject 'days' is plural, so the verb must be 'are'.",
          },
          {
            kind: 'translate',
            id: 'c2-si-5',
            es: 'Tan convincente era su argumento que nadie se atrevió a discrepar.',
            answers: [
              'So convincing was her argument that no one dared to disagree.',
              'So convincing was his argument that nobody dared to disagree.',
            ],
            explain: 'So + adjective inversion plus a result clause.',
          },
          {
            kind: 'dictation',
            id: 'c2-si-6',
            text: 'Among the survivors was a child who had hidden in the cellar.',
            explain: 'Fronted prepositional phrase triggers inversion: was a child.',
          },
        ],
      },
      {
        id: 'c2-clefts-distance',
        level: 'C2',
        title: 'The full range of cleft and distance-cleft sentences',
        summary:
          "Clefts split a sentence to spotlight one element; distance clefts like 'It wasn't until...' delay and dramatise the key information.",
        sections: [
          {
            heading: 'It-clefts for any element',
            body: '**It + be + X + that/who...** can foreground a subject, object, time or place: *It was in 1989 that the wall fell.* The remainder becomes presupposed background, sharpening contrast and correction.',
            examples: [
              {
                en: 'It was the manager, not the staff, who made the decision.',
                es: 'Fue el gerente, no el personal, quien tomó la decisión.',
              },
              {
                en: 'It was only later that I understood her warning.',
                es: 'Fue solo más tarde cuando entendí su advertencia.',
              },
            ],
          },
          {
            heading: "Distance clefts: it wasn't until / it was not until",
            body: "**It wasn't until + time/event + that...** withholds the main clause to build suspense and stress how late something happened. It often pairs with inversion in very formal style: *Not until dawn did the rescuers arrive.*",
            examples: [
              {
                en: "It wasn't until I read the report that the scale became clear.",
                es: 'No fue hasta que leí el informe que la magnitud quedó clara.',
              },
              {
                en: 'Not until much later did she grasp the consequences.',
                es: 'No fue hasta mucho después cuando comprendió las consecuencias.',
              },
            ],
          },
          {
            heading: 'Wh-clefts and reversed wh-clefts',
            body: '**What... is/was...** fronts an idea (*What we need is time*); the **reversed** form puts the highlighted phrase first (*Time is what we need*). The **all-cleft** (*All I did was ask*) minimises or excuses an action.',
            examples: [
              {
                en: 'What surprised everyone was how calmly she responded.',
                es: 'Lo que sorprendió a todos fue la calma con que respondió.',
              },
              {
                en: 'All he wanted was a straight answer.',
                es: 'Todo lo que quería era una respuesta clara.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Cleft types and their rhetorical job',
            columns: ['Type', 'Pattern', 'Effect'],
            rows: [
              ['It-cleft', 'It + be + X + that/who', 'highlight/correct one element'],
              ['Distance cleft', "It wasn't until... that", 'delay + stress lateness'],
              ['Wh-cleft', 'What... is/was...', 'foreground a whole idea'],
              ['Reversed wh-cleft', 'X is what...', 'end-focus on the clause'],
              ['All-cleft', 'All (that)... is/was', 'minimise / restrict'],
            ],
          },
        ],
        examples: [
          {
            en: 'It was her silence, more than her words, that unsettled me.',
            es: 'Fue su silencio, más que sus palabras, lo que me inquietó.',
          },
          {
            en: "It wasn't until the lights went out that we realised the danger.",
            es: 'No fue hasta que se apagaron las luces que nos dimos cuenta del peligro.',
          },
          {
            en: 'What the plan lacks is any sense of priority.',
            es: 'Lo que al plan le falta es cualquier sentido de prioridad.',
          },
          {
            en: 'All that remains is to sign the contract.',
            es: 'Todo lo que queda es firmar el contrato.',
          },
          {
            en: 'A safer city is what the campaign promised.',
            es: 'Una ciudad más segura es lo que prometió la campaña.',
          },
        ],
        pitfalls: [
          {
            wrong: "It was not until I didn't see it that I believed.",
            right: 'It was not until I saw it that I believed.',
            why: "**Not until** already carries the negation; don't add a second negative in the clause.",
            esNote:
              "El español 'no fue hasta que no lo vi' duplica la negación; en inglés solo se niega una vez.",
          },
          {
            wrong: 'What I need is to study more, that is my problem.',
            right: 'What I need is to study more.',
            why: "The wh-cleft is self-contained; the tag 'that is my problem' is redundant.",
            esNote:
              "La estructura 'What... is...' ya enfatiza; no necesita una coletilla explicativa.",
          },
          {
            wrong: 'It was the music what I liked most.',
            right: 'It was the music that I liked most.',
            why: "In it-clefts use **that/who**, never 'what'.",
            esNote: "En las cleft con 'it', el relativo es 'that' o 'who', nunca 'what'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-cl-1',
            prompt:
              "Complete the distance cleft: '___ the final whistle that the fans realised they had won.'",
            options: ['It was until', "It wasn't until", 'It was not when', "Until it wasn't"],
            answer: 1,
            explain: "It wasn't until + event + that... stresses how late the realisation came.",
          },
          {
            kind: 'cloze',
            id: 'c2-cl-2',
            before: 'What the report fails to mention ',
            after: ' the cost to local communities.',
            answers: ['is'],
            explain:
              "Wh-cleft 'What... is...' takes a singular linking verb agreeing with the clause.",
          },
          {
            kind: 'order',
            id: 'c2-cl-3',
            tokens: ['All', 'we', 'asked', 'for', 'was', 'a', 'little', 'honesty'],
            answer: 'All we asked for was a little honesty',
            explain: 'All-cleft minimises the request: All (that) we asked for was...',
          },
          {
            kind: 'correct',
            id: 'c2-cl-4',
            wrong: 'It was the weather what ruined the trip.',
            answers: ['It was the weather that ruined the trip.'],
            explain: "It-clefts use 'that', not 'what'.",
          },
          {
            kind: 'translate',
            id: 'c2-cl-5',
            es: 'No fue hasta medianoche cuando finalmente se pusieron de acuerdo.',
            answers: [
              "It wasn't until midnight that they finally agreed.",
              'It was not until midnight that they finally agreed.',
            ],
            explain: 'Distance cleft delaying the main clause.',
          },
          {
            kind: 'dictation',
            id: 'c2-cl-6',
            text: 'What struck me most was how little had actually changed.',
            explain: 'Wh-cleft foregrounding an observation.',
          },
        ],
      },
      {
        id: 'c2-conditionals-advanced',
        level: 'C2',
        title: 'The full range of conditionals: inverted, mixed and counterfactual',
        summary:
          'Master inverted conditionals (Had I known), mixed time references, and counterfactuals with were to, but for, and otherwise.',
        sections: [
          {
            heading: "Inversion instead of 'if'",
            body: 'In formal English, drop **if** and invert: **Had I known** (= if I had known), **Were she here** (= if she were here), **Should you need** (= if you should need). This is crisp and characteristic of careful prose and speeches.',
            examples: [
              {
                en: "Had we anticipated the demand, we'd have ordered more.",
                es: 'Si hubiéramos previsto la demanda, habríamos pedido más.',
              },
              {
                en: 'Should you require assistance, do not hesitate to call.',
                es: 'Si necesitara ayuda, no dude en llamar.',
              },
            ],
          },
          {
            heading: 'Mixed conditionals',
            body: "Pair a past condition with a present result, or vice versa: *If I had taken that job (past), I'd be in London now (present).* The clauses can reference **different times**, which is essential for nuanced hypothetical reasoning.",
            examples: [
              {
                en: "If she had studied medicine, she'd be a doctor today.",
                es: 'Si hubiera estudiado medicina, hoy sería médica.',
              },
              {
                en: "If I weren't so tired, I would have joined you last night.",
                es: 'Si no estuviera tan cansado, me habría unido anoche.',
              },
            ],
          },
          {
            heading: 'Were to, but for, otherwise',
            body: "**Were to** marks a remote or hypothetical future (*Were the deal to collapse...*). **But for** = if it weren't for (*But for your help, we'd have failed*). **Otherwise** carries an implied condition (*I had a map; otherwise I'd have got lost*).",
            examples: [
              {
                en: 'Were the government to fall, fresh elections would follow.',
                es: 'Si el gobierno cayera, seguirían nuevas elecciones.',
              },
              {
                en: "But for a moment's hesitation, he would have won.",
                es: 'De no ser por un instante de vacilación, habría ganado.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Inverted conditional equivalences',
            columns: ['With if', 'Inverted form', 'Time/meaning'],
            rows: [
              ['If I had known', 'Had I known', 'past unreal'],
              ['If she were here', 'Were she here', 'present unreal'],
              ['If it were to fail', 'Were it to fail', 'remote future'],
              ['If you should need', 'Should you need', 'tentative future'],
            ],
          },
        ],
        examples: [
          {
            en: 'Had it not been for the storm, the launch would have gone ahead.',
            es: 'De no haber sido por la tormenta, el lanzamiento habría seguido adelante.',
          },
          {
            en: 'Were I in your position, I would seek legal advice.',
            es: 'Si yo estuviera en tu posición, buscaría asesoría legal.',
          },
          {
            en: 'If they had invested earlier, the company would still exist.',
            es: 'Si hubieran invertido antes, la empresa todavía existiría.',
          },
          {
            en: 'But for a stroke of luck, the whole project would have collapsed.',
            es: 'De no ser por un golpe de suerte, todo el proyecto se habría hundido.',
          },
          {
            en: "Should anything change, I'll let you know at once.",
            es: 'Si algo cambiara, te avisaré de inmediato.',
          },
        ],
        pitfalls: [
          {
            wrong: 'If I would have known, I would have helped.',
            right: 'If I had known, I would have helped. / Had I known, I would have helped.',
            why: "The if-clause of a third conditional uses the **past perfect**, never 'would have'.",
            esNote:
              "El condicional 'would' no va en la cláusula con 'if'; ahí va el pluscuamperfecto.",
          },
          {
            wrong: "Had I would known, I'd have come.",
            right: "Had I known, I'd have come.",
            why: "Inversion replaces 'if'; don't keep an extra auxiliary like 'would'.",
            esNote: "La inversión 'Had I known' ya sustituye a 'if'; no se añade otro auxiliar.",
          },
          {
            wrong: 'If she would be here, everything would be easier.',
            right: 'If she were here, everything would be easier.',
            why: "Present unreal conditions use the **past subjunctive 'were'**, not 'would be'.",
            esNote: "En condicionales irreales del presente se usa 'were', no 'would be'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-co-1',
            prompt:
              "Rewrite without 'if': 'If we had left earlier, we would have caught the train.'",
            options: [
              'Had we left earlier, we would have caught the train.',
              'Would we have left earlier, we caught the train.',
              'Had we would leave earlier, we caught the train.',
              'If had we left earlier, we would catch the train.',
            ],
            answer: 0,
            explain: "Drop 'if' and invert: Had we left...",
          },
          {
            kind: 'cloze',
            id: 'c2-co-2',
            before: 'If I had accepted that offer, I ',
            after: ' in Berlin right now.',
            answers: ['would be', "'d be"],
            explain: 'Mixed conditional: past condition, present result → would be.',
          },
          {
            kind: 'order',
            id: 'c2-co-3',
            tokens: ['Were', 'the', 'talks', 'to', 'fail', 'markets', 'would', 'tumble'],
            answer: 'Were the talks to fail markets would tumble',
            explain: "Remote future hypothetical with 'were to' and inversion.",
          },
          {
            kind: 'correct',
            id: 'c2-co-4',
            wrong: 'If I would have more time, I would travel more.',
            answers: [
              'If I had more time, I would travel more.',
              'Had I more time, I would travel more.',
            ],
            explain: "Second conditional if-clause uses the past simple, not 'would have'.",
          },
          {
            kind: 'translate',
            id: 'c2-co-5',
            es: 'De no ser por tu ayuda, habríamos fracasado.',
            answers: [
              'But for your help, we would have failed.',
              "If it weren't for your help, we would have failed.",
              'Had it not been for your help, we would have failed.',
            ],
            explain: 'But for / had it not been for express the counterfactual cause.',
          },
          {
            kind: 'dictation',
            id: 'c2-co-6',
            text: 'Should you change your mind, the offer still stands.',
            explain: "Inverted tentative conditional with 'should'.",
          },
        ],
      },
      {
        id: 'c2-nominalisation-lexical-density',
        level: 'C2',
        title: 'Complex nominalisation and lexical density',
        summary:
          'Academic and formal English packs meaning into noun phrases, turning verbs and adjectives into nouns to compress information and sound objective.',
        sections: [
          {
            heading: 'Turning processes into things',
            body: "**Nominalisation** converts a verb or adjective into a noun: *decide → decision*, *fail → failure*, *able → ability*. This lets you treat a process as a topic and stack modifiers: *the government's repeated failure to act* instead of *the government repeatedly failed to act*.",
            examples: [
              {
                en: "The committee's reluctance to intervene drew criticism.",
                es: 'La reticencia del comité a intervenir suscitó críticas.',
              },
              {
                en: 'Implementation of the policy proved difficult.',
                es: 'La aplicación de la política resultó difícil.',
              },
            ],
          },
          {
            heading: 'Lexical density and packing the noun phrase',
            body: 'Formal writing raises **lexical density** by loading content words into long noun phrases: *a marked reduction in urban air pollution levels*. Premodifiers (adjectives, nouns) and postmodifiers (of-phrases, relative clauses) compress what speech would spread over several clauses.',
            examples: [
              {
                en: 'a sustained, evidence-based reduction in hospital readmission rates',
                es: 'una reducción sostenida y basada en evidencia de las tasas de reingreso hospitalario',
              },
              {
                en: 'the long-term economic impact of the proposed reforms',
                es: 'el impacto económico a largo plazo de las reformas propuestas',
              },
            ],
          },
          {
            heading: 'Why and when to use it',
            body: 'Nominalisation creates **objectivity and cohesion**: a process named in one sentence becomes the subject of the next (*The economy contracted. This contraction...*). But over-nominalising buries the agent and obscures meaning, so balance it with verbs in plainer prose.',
            examples: [
              {
                en: 'Prices rose sharply. This increase alarmed consumers.',
                es: 'Los precios subieron bruscamente. Este aumento alarmó a los consumidores.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Common verb/adjective to noun conversions',
            columns: ['Verb/Adjective', 'Nominalisation'],
            rows: [
              ['analyse', 'analysis'],
              ['fail', 'failure'],
              ['able', 'ability'],
              ['reduce', 'reduction'],
              ['assume', 'assumption'],
              ['recur', 'recurrence'],
            ],
          },
        ],
        examples: [
          {
            en: 'The widespread adoption of remote work transformed city centres.',
            es: 'La adopción generalizada del trabajo remoto transformó los centros urbanos.',
          },
          {
            en: 'Resistance to the merger came chiefly from shareholders.',
            es: 'La resistencia a la fusión provino principalmente de los accionistas.',
          },
          {
            en: 'Their refusal to compromise prolonged the dispute.',
            es: 'Su negativa a ceder prolongó la disputa.',
          },
          {
            en: 'A thorough investigation of the causes is under way.',
            es: 'Una investigación exhaustiva de las causas está en curso.',
          },
          {
            en: 'The sudden withdrawal of funding jeopardised the research.',
            es: 'La retirada repentina de financiación puso en peligro la investigación.',
          },
        ],
        pitfalls: [
          {
            wrong: 'The fail of the plan surprised us.',
            right: 'The failure of the plan surprised us.',
            why: "Use the correct nominal form **failure**, not the bare verb 'fail'.",
            esNote: "Cada verbo tiene su forma nominal propia; 'fail' no funciona como sustantivo.",
          },
          {
            wrong: "The govern's decision was final.",
            right: "The government's decision was final.",
            why: "Choose the established noun **government**, not an invented form from the verb 'govern'.",
            esNote:
              'No todos los verbos se nominalizan de forma regular; hay que saber el sustantivo correcto.',
          },
          {
            wrong: 'An analyse of the data shows a trend.',
            right: 'An analysis of the data shows a trend.',
            why: "The noun is **analysis**; 'analyse' is the verb.",
            esNote: "'Analyse' es el verbo; el sustantivo es 'analysis'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-nom-1',
            prompt:
              "Choose the best nominalised version of 'The company decided quickly, and this helped.'",
            options: [
              "The company's quick decision helped.",
              'The company decision quick helped.',
              'That the company decided quick helped.',
              'The quickly decide of the company helped.',
            ],
            answer: 0,
            explain:
              'decided → decision, quickly → quick (adjective), packed into a noun phrase subject.',
          },
          {
            kind: 'cloze',
            id: 'c2-nom-2',
            before: "The government's repeated ",
            after: ' to act angered the public.',
            answers: ['failure'],
            explain: "Nominalise 'fail' → 'failure' to head the noun phrase.",
          },
          {
            kind: 'order',
            id: 'c2-nom-3',
            tokens: ['The', 'implementation', 'of', 'the', 'reforms', 'was', 'delayed'],
            answer: 'The implementation of the reforms was delayed',
            explain: "Nominalisation 'implementation' as subject with an of-phrase postmodifier.",
          },
          {
            kind: 'correct',
            id: 'c2-nom-4',
            wrong: 'The analyse of the results took weeks.',
            answers: ['The analysis of the results took weeks.'],
            explain: "The noun form is 'analysis'.",
          },
          {
            kind: 'translate',
            id: 'c2-nom-5',
            es: 'Su negativa a negociar prolongó el conflicto.',
            answers: [
              'Their refusal to negotiate prolonged the conflict.',
              'His refusal to negotiate prolonged the conflict.',
              'Her refusal to negotiate prolonged the conflict.',
            ],
            explain: 'negarse → refusal, a nominalised subject.',
          },
          {
            kind: 'dictation',
            id: 'c2-nom-6',
            text: 'A marked reduction in emissions followed the introduction of the tax.',
            explain:
              'Two nominalisations (reduction, introduction) packed into a dense formal sentence.',
          },
        ],
      },
      {
        id: 'c2-impersonal-distancing-passive',
        level: 'C2',
        title: 'Impersonal and distancing passive structures',
        summary:
          'Formal English distances the writer from claims using it-passives, reporting passives, and the get-passive — a key tool for objectivity and hedging.',
        sections: [
          {
            heading: 'Reporting passives: it is said / he is believed to',
            body: "To attribute a claim without naming a source, use **It is said/believed/thought that...** or the personal **Subject + is said/believed + to-infinitive**: *He is believed to have fled the country.* This signals distance — you report the claim, you don't endorse it.",
            examples: [
              {
                en: 'It is widely believed that the policy backfired.',
                es: 'Se cree ampliamente que la política fue contraproducente.',
              },
              {
                en: 'The minister is alleged to have misled parliament.',
                es: 'Se alega que el ministro engañó al parlamento.',
              },
            ],
          },
          {
            heading: 'Agentless passive for objectivity',
            body: 'Dropping the agent foregrounds the action and sounds impersonal and scientific: *Mistakes were made.* It is invaluable when the agent is unknown, obvious, or diplomatically best left unstated — a classic device for **avoiding blame**.',
            examples: [
              {
                en: 'The samples were analysed under controlled conditions.',
                es: 'Las muestras se analizaron en condiciones controladas.',
              },
              {
                en: 'Errors were made, and lessons have been learned.',
                es: 'Se cometieron errores y se han aprendido lecciones.',
              },
            ],
          },
          {
            heading: 'The get-passive and have something done',
            body: 'The **get-passive** is informal and often implies an event affecting the subject, frequently adverse: *She got promoted; they got caught.* **Have/get something done** expresses arranging a service: *We had the contract reviewed.*',
            examples: [
              {
                en: 'He got fired for leaking the report.',
                es: 'Lo despidieron por filtrar el informe.',
              },
              {
                en: 'We had the figures independently audited.',
                es: 'Hicimos que las cifras fueran auditadas de forma independiente.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Distancing report structures',
            columns: ['Pattern', 'Example', 'Register/effect'],
            rows: [
              ['It is said that...', 'It is said that he resigned.', 'neutral, impersonal'],
              ['S is said to + inf.', 'He is said to be wealthy.', 'formal, personal subject'],
              ['S is said to have + pp', 'She is said to have left.', 'past, distanced'],
              ['get + past participle', 'They got arrested.', 'informal, often adverse'],
            ],
          },
        ],
        examples: [
          {
            en: 'The suspect is thought to be hiding abroad.',
            es: 'Se cree que el sospechoso se esconde en el extranjero.',
          },
          {
            en: 'It has been suggested that the data were manipulated.',
            es: 'Se ha sugerido que los datos fueron manipulados.',
          },
          {
            en: 'The bridge is reported to have been weakened by flooding.',
            es: 'Se informa que el puente fue debilitado por las inundaciones.',
          },
          {
            en: 'Several decisions were taken behind closed doors.',
            es: 'Varias decisiones se tomaron a puerta cerrada.',
          },
          {
            en: 'She got caught up in a scandal she had nothing to do with.',
            es: 'Se vio envuelta en un escándalo con el que no tenía nada que ver.',
          },
        ],
        pitfalls: [
          {
            wrong: 'It is said he to have left the country.',
            right: 'He is said to have left the country. / It is said that he left the country.',
            why: "Either use **It is said that + clause** or **Subject + is said to + infinitive**; don't merge them.",
            esNote:
              "El español 'se dice que' admite una sola estructura; en inglés hay dos patrones distintos que no se mezclan.",
          },
          {
            wrong: 'The report was wrote by the committee.',
            right: 'The report was written by the committee.',
            why: "Use the **past participle 'written'**, not the past simple 'wrote'.",
            esNote: "El participio de 'write' es 'written', no 'wrote'.",
          },
          {
            wrong: 'We had reviewed the contract by a lawyer.',
            right: 'We had the contract reviewed by a lawyer.',
            why: 'Causative order is **have + object + past participle**.',
            esNote:
              "La estructura causativa es 'have + objeto + participio', no 'have + participio + objeto'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ip-1',
            prompt: 'Choose the correct distancing structure.',
            options: [
              'He is believed to have escaped.',
              'He is believed escape.',
              'It is believed he to escape.',
              'He believes to have escaped.',
            ],
            answer: 0,
            explain: 'Subject + is believed + to have + past participle.',
          },
          {
            kind: 'cloze',
            id: 'c2-ip-2',
            before: 'It ',
            after: ' that the negotiations have collapsed.',
            answers: ['is reported', 'is said', 'is believed', 'is thought', 'is understood'],
            explain: 'It + is + reporting verb (passive) + that-clause.',
          },
          {
            kind: 'order',
            id: 'c2-ip-3',
            tokens: ['The', 'minister', 'is', 'alleged', 'to', 'have', 'accepted', 'bribes'],
            answer: 'The minister is alleged to have accepted bribes',
            explain: 'Personal reporting passive with perfect infinitive.',
          },
          {
            kind: 'correct',
            id: 'c2-ip-4',
            wrong: 'They had repaired the roof by professionals last week.',
            answers: ['They had the roof repaired by professionals last week.'],
            explain: 'Causative: have + object (the roof) + past participle (repaired).',
          },
          {
            kind: 'translate',
            id: 'c2-ip-5',
            es: 'Se cree que el director dimitirá pronto.',
            answers: [
              'The director is believed to be about to resign.',
              'It is believed that the director will resign soon.',
              'The director is thought to be resigning soon.',
            ],
            explain: "Either it-passive or personal passive can render 'se cree que'.",
          },
          {
            kind: 'dictation',
            id: 'c2-ip-6',
            text: 'Mistakes were made, but no one was prepared to take responsibility.',
            explain: 'Agentless passive used to soften the assignment of blame.',
          },
        ],
      },
      {
        id: 'c2-discourse-ellipsis-word-order',
        level: 'C2',
        title: 'Discourse markers, ellipsis and marked word order',
        summary:
          'Sophisticated cohesion: precise discourse markers, leaving out recoverable words (ellipsis), and fronting elements for emphasis and flow.',
        sections: [
          {
            heading: 'Discourse markers for fine-grained logic',
            body: "Beyond 'but' and 'so', deploy markers that signal exact relations: **concession** (admittedly, granted, that said), **reformulation** (in other words, that is to say), **addition with contrast** (then again), **summary** (all in all, in short). They guide the reader through your argument.",
            examples: [
              {
                en: 'The plan is bold; that said, it carries real risks.',
                es: 'El plan es audaz; dicho esto, conlleva riesgos reales.',
              },
              {
                en: 'All in all, the experiment was a qualified success.',
                es: 'En definitiva, el experimento fue un éxito relativo.',
              },
            ],
          },
          {
            heading: 'Ellipsis: leaving out the recoverable',
            body: 'Omit words the reader can reconstruct to avoid repetition. **Verb-phrase ellipsis** (*She can swim and so can I*), **gapping** (*Tom ordered tea; Sara, coffee*), and reduced clauses (*If (it is) possible, call me*) tighten prose and sound idiomatic.',
            examples: [
              {
                en: 'Some praised the design; others, the price.',
                es: 'Algunos elogiaron el diseño; otros, el precio.',
              },
              {
                en: "I'd help if I could, but I can't.",
                es: 'Ayudaría si pudiera, pero no puedo.',
              },
            ],
          },
          {
            heading: 'Marked word order: fronting and end-focus',
            body: 'Move an element to the **front** for emphasis or to link back to prior text (*That much I understand*), and keep heavy or new information at the **end** (the end-weight principle). Fronting an object or adverbial creates contrast and rhythm.',
            examples: [
              {
                en: 'His arrogance I could forgive; his dishonesty I could not.',
                es: 'Su arrogancia podía perdonarla; su deshonestidad, no.',
              },
              {
                en: 'Into the room burst a breathless messenger.',
                es: 'En la sala irrumpió un mensajero sin aliento.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Discourse markers by function',
            columns: ['Function', 'Markers'],
            rows: [
              ['Concession', 'admittedly, granted, that said, even so'],
              ['Reformulation', 'in other words, that is to say, namely'],
              ['Contrast/afterthought', 'then again, on the other hand'],
              ['Summary', 'all in all, in short, on balance'],
            ],
          },
        ],
        examples: [
          {
            en: 'Granted, the costs are high; the benefits, however, are greater still.',
            es: 'Es cierto que los costos son altos; los beneficios, sin embargo, lo son aún más.',
          },
          {
            en: "She wanted to apologise but didn't know how to.",
            es: 'Quería disculparse pero no sabía cómo.',
          },
          {
            en: 'What he lacks in experience he makes up for in enthusiasm.',
            es: 'Lo que le falta de experiencia lo compensa con entusiasmo.',
          },
          {
            en: 'Down came the rain, and with it our hopes of a picnic.',
            es: 'Cayó la lluvia, y con ella nuestras esperanzas de un picnic.',
          },
          {
            en: 'In short, the strategy needs a complete rethink.',
            es: 'En resumen, la estrategia necesita un replanteamiento total.',
          },
        ],
        pitfalls: [
          {
            wrong: 'She can swim and I can too swim.',
            right: 'She can swim and so can I. / She can swim and I can too.',
            why: "Use **ellipsis** ('so can I' / 'I can too') instead of repeating the verb.",
            esNote: "El inglés elide el verbo repetido; no se repite 'swim'.",
          },
          {
            wrong: 'In other words is the plan too expensive.',
            right: 'In other words, the plan is too expensive.',
            why: 'A discourse marker is set off by a **comma** and followed by a normal clause, not a question order.',
            esNote: 'El conector va seguido de coma y de una oración normal, sin inversión.',
          },
          {
            wrong: 'His honesty I admire it greatly.',
            right: 'His honesty I admire greatly.',
            why: "When you front the object, **don't leave a resumptive pronoun** ('it') in its old place.",
            esNote:
              "Al anteponer el objeto en inglés no se deja un pronombre 'it' repetido, a diferencia del español ('lo admiro').",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-de-1',
            prompt: "Choose the natural elliptical reply to 'Who wants coffee?'",
            options: ['I want coffee do.', 'I do.', 'I want do.', 'Do I want.'],
            answer: 1,
            explain: "Verb-phrase ellipsis: 'I do' stands in for 'I want coffee'.",
          },
          {
            kind: 'cloze',
            id: 'c2-de-2',
            before: 'The proposal is risky. That ',
            after: ', it may be our only option.',
            answers: ['said'],
            explain: "'That said' is a concessive discourse marker meaning 'even so'.",
          },
          {
            kind: 'order',
            id: 'c2-de-3',
            tokens: ['Into', 'the', 'hall', 'marched', 'the', 'soldiers'],
            answer: 'Into the hall marched the soldiers',
            explain:
              'Fronted adverbial of place triggers subject-verb inversion with a motion verb.',
          },
          {
            kind: 'correct',
            id: 'c2-de-4',
            wrong: 'He plays the guitar and she plays the guitar too.',
            answers: [
              'He plays the guitar and so does she.',
              'He plays the guitar and she does too.',
            ],
            explain:
              "Use ellipsis with 'so does she' / 'she does too' to avoid repeating the verb phrase.",
          },
          {
            kind: 'translate',
            id: 'c2-de-5',
            es: 'En resumen, necesitamos replantear toda la estrategia.',
            answers: [
              'In short, we need to rethink the whole strategy.',
              'All in all, we need to rethink the entire strategy.',
            ],
            explain: 'Summary discourse marker plus the main clause.',
          },
          {
            kind: 'dictation',
            id: 'c2-de-6',
            text: 'Some came for the music; others, simply for the company.',
            explain: "Gapping: the second clause omits the repeated verb 'came'.",
          },
        ],
      },
      {
        id: 'c2-idiom-collocation-register',
        level: 'C2',
        title: 'Idiom, collocation and connotation: controlling register',
        summary:
          'Choosing words that collocate naturally, carry the right connotation, and match the formality of the context is the hallmark of near-native command.',
        sections: [
          {
            heading: 'Collocation: words that travel together',
            body: 'English prefers fixed partnerships: you make a decision but take a photo; you have a strong preference but a deep regret. Wrong collocations (*do a decision*) are grammatical yet unnatural. Build **collocational accuracy** with verbs+nouns, adjective+noun and adverb+adjective pairs.',
            examples: [
              {
                en: 'They reached a unanimous decision.',
                es: 'Llegaron a una decisión unánime.',
              },
              {
                en: 'The findings raise serious concerns.',
                es: 'Los hallazgos plantean serias preocupaciones.',
              },
            ],
          },
          {
            heading: 'Connotation: same meaning, different colour',
            body: 'Near-synonyms differ in **connotation**: *thrifty* (positive) vs *stingy* (negative); *slim* vs *skinny*; *determined* vs *stubborn*; *childlike* vs *childish*. Picking the right shade signals attitude and tone with precision.',
            examples: [
              {
                en: "I'd call him determined rather than stubborn.",
                es: 'Yo lo llamaría decidido más que terco.',
              },
              {
                en: 'She is assertive, not aggressive.',
                es: 'Ella es firme, no agresiva.',
              },
            ],
          },
          {
            heading: 'Register: matching formality',
            body: 'Match vocabulary to context. Informal **phrasal verbs** (*put off, find out*) suit speech; their **Latinate equivalents** (*postpone, ascertain*) suit formal writing. Idioms (*a blessing in disguise*) enliven prose but jar in technical reports.',
            examples: [
              {
                en: 'We had to postpone the launch. (formal)',
                es: 'Tuvimos que aplazar el lanzamiento. (formal)',
              },
              {
                en: 'We had to put off the launch. (informal)',
                es: 'Tuvimos que posponer el lanzamiento. (informal)',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Register pairs: informal vs formal',
            columns: ['Informal (phrasal)', 'Formal (Latinate)'],
            rows: [
              ['find out', 'ascertain / discover'],
              ['put off', 'postpone'],
              ['go up', 'increase / rise'],
              ['look into', 'investigate'],
              ['get rid of', 'eliminate / remove'],
            ],
          },
        ],
        examples: [
          {
            en: 'The report shed light on a long-standing problem.',
            es: 'El informe arrojó luz sobre un problema de larga data.',
          },
          {
            en: 'His comments struck a nerve with the audience.',
            es: 'Sus comentarios tocaron una fibra sensible en el público.',
          },
          {
            en: 'We must ascertain the cause before drawing conclusions.',
            es: 'Debemos determinar la causa antes de sacar conclusiones.',
          },
          {
            en: 'Calling her frugal is kinder than calling her tight-fisted.',
            es: 'Llamarla ahorradora es más amable que llamarla tacaña.',
          },
          {
            en: 'The deal fell through at the eleventh hour.',
            es: 'El acuerdo se vino abajo en el último momento.',
          },
        ],
        pitfalls: [
          {
            wrong: 'I made a photo of the sunset.',
            right: 'I took a photo of the sunset.',
            why: "The collocation is **take a photo**, not 'make'.",
            esNote: "En español 'hacer una foto', pero en inglés es 'take a photo'.",
          },
          {
            wrong: 'He is very stubborn, always finishing his work on time.',
            right: 'He is very determined, always finishing his work on time.',
            why: "In a praising context use the positive connotation **determined**, not the negative 'stubborn'.",
            esNote: "'Stubborn' (terco) es negativo; para elogiar se usa 'determined'.",
          },
          {
            wrong: 'In the report, we found out the cause and got rid of it.',
            right: 'In the report, we ascertained the cause and eliminated it.',
            why: 'Formal writing prefers **Latinate verbs** over casual phrasal verbs.',
            esNote:
              'En registro formal se prefieren verbos latinos a los phrasal verbs coloquiales.',
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-ic-1',
            prompt:
              "Which verb collocates correctly: 'The new evidence ___ serious doubts about the verdict.'",
            options: ['does', 'makes', 'raises', 'puts'],
            answer: 2,
            explain: "The collocation is 'raise doubts'.",
          },
          {
            kind: 'cloze',
            id: 'c2-ic-2',
            before: 'After months of delay, the committee finally ',
            after: ' a decision.',
            answers: ['reached', 'made', 'took'],
            explain: "'Reach/make/take a decision' are all natural collocations.",
          },
          {
            kind: 'correct',
            id: 'c2-ic-3',
            wrong: 'Please make me a favour and close the window.',
            answers: ['Please do me a favour and close the window.'],
            explain: "The collocation is 'do a favour', not 'make'.",
          },
          {
            kind: 'order',
            id: 'c2-ic-4',
            tokens: ['The', 'scandal', 'came', 'to', 'light', 'last', 'year'],
            answer: 'The scandal came to light last year',
            explain: "Idiomatic collocation 'come to light' = become known.",
          },
          {
            kind: 'translate',
            id: 'c2-ic-5',
            es: 'Resultó ser una bendición disfrazada.',
            answers: [
              'It turned out to be a blessing in disguise.',
              'It proved to be a blessing in disguise.',
            ],
            explain: "Fixed idiom 'a blessing in disguise'.",
          },
          {
            kind: 'dictation',
            id: 'c2-ic-6',
            text: 'We must ascertain the facts before we go public.',
            explain: "Formal 'ascertain' contrasted with informal 'find out'.",
          },
        ],
      },
      {
        id: 'c2-modality-hedging-irony',
        level: 'C2',
        title: 'Nuanced modality, hedging, irony and figurative language',
        summary:
          'Fine control of certainty, diplomatic hedging, and the layered meaning of irony, understatement and metaphor.',
        sections: [
          {
            heading: 'Graded modality and epistemic certainty',
            body: "Modals encode **degrees of likelihood**: *must* (confident deduction), *should/ought to* (reasonable expectation), *may/might/could* (open possibility), *can't/couldn't* (negative certainty). Layer them with adverbs (*conceivably, presumably, arguably*) for precise calibration.",
            examples: [
              {
                en: 'The results must surely be flawed.',
                es: 'Los resultados sin duda deben de estar viciados.',
              },
              {
                en: "That may well be the case, but I'd want proof.",
                es: 'Bien puede ser así, pero querría pruebas.',
              },
            ],
          },
          {
            heading: 'Hedging for diplomacy and academic caution',
            body: '**Hedges** soften claims and protect you from overstatement: *it would seem, to some extent, tends to, arguably, not entirely unreasonable*. Academic and diplomatic English relies on them to sound measured rather than dogmatic.',
            examples: [
              {
                en: 'The data would seem to support this interpretation.',
                es: 'Los datos parecerían respaldar esta interpretación.',
              },
              {
                en: 'Her approach is, to some extent, justified.',
                es: 'Su enfoque está, hasta cierto punto, justificado.',
              },
            ],
          },
          {
            heading: 'Irony, understatement and figurative language',
            body: '**Understatement** (litotes) says less to mean more: *not bad* = very good; *no small achievement* = a great one. **Irony** means the opposite of the literal words. **Metaphor and metonymy** compress meaning: *the White House denied it* (= the administration).',
            examples: [
              {
                en: 'That was no small feat.',
                es: 'Eso no fue una hazaña menor (= fue una gran hazaña).',
              },
              {
                en: "Well, this is a fine mess we're in. (ironic)",
                es: 'Vaya, en buen lío estamos metidos. (irónico)',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Modal certainty scale',
            columns: ['Modal', 'Degree of certainty'],
            rows: [
              ["must / can't", 'near-certain (positive / negative)'],
              ['should / ought to', 'expected, probable'],
              ['may / might / could', 'possible, uncertain'],
              ['may well / might well', 'likely possibility'],
            ],
          },
        ],
        examples: [
          {
            en: "He can't possibly have finished already.",
            es: 'No es posible que ya haya terminado.',
          },
          {
            en: 'It would seem, on balance, that the policy has failed.',
            es: 'Parecería, en conjunto, que la política ha fracasado.',
          },
          {
            en: 'The proposal is, shall we say, less than perfect.',
            es: 'La propuesta es, digamos, menos que perfecta.',
          },
          {
            en: 'Losing the contract was something of a setback.',
            es: 'Perder el contrato fue algo así como un revés (eufemismo por uno grande).',
          },
          {
            en: 'Brussels has yet to respond to the criticism.',
            es: 'Bruselas (= la UE) aún no ha respondido a las críticas.',
          },
        ],
        pitfalls: [
          {
            wrong: 'He must to be very tired after the trip.',
            right: 'He must be very tired after the trip.',
            why: "Modal verbs are followed by the **bare infinitive**, never 'to'.",
            esNote: "Los modales van con infinitivo sin 'to': 'must be', no 'must to be'.",
          },
          {
            wrong: "It can't be true, maybe he lied.",
            right: "It can't be true; he must have lied.",
            why: 'For a confident deduction about the past use **must have + past participle**.',
            esNote: "Para deducir algo del pasado con seguridad se usa 'must have + participio'.",
          },
          {
            wrong: 'The plan is not bad, it is terrible.',
            right: 'The plan is, frankly, terrible.',
            why: "'Not bad' is litotes meaning 'quite good', so it contradicts 'terrible'; understatement must point the same way as your meaning.",
            esNote: "'Not bad' significa 'bastante bueno' por lítotes; no equivale a 'terrible'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-mo-1',
            prompt: 'Which expresses the strongest confidence that something is false?',
            options: [
              'It might not be true.',
              'It may not be true.',
              "It can't be true.",
              "It shouldn't be true.",
            ],
            answer: 2,
            explain: "'Can't' expresses near-certain negative deduction.",
          },
          {
            kind: 'cloze',
            id: 'c2-mo-2',
            before: 'She left an hour ago, so she ',
            after: ' have arrived by now.',
            answers: ['must', 'should'],
            explain:
              "'Must have arrived' = confident deduction; 'should have arrived' = reasonable expectation.",
          },
          {
            kind: 'order',
            id: 'c2-mo-3',
            tokens: ['The', 'evidence', 'would', 'seem', 'to', 'support', 'this', 'claim'],
            answer: 'The evidence would seem to support this claim',
            explain: "Hedged assertion using 'would seem to'.",
          },
          {
            kind: 'correct',
            id: 'c2-mo-4',
            wrong: 'You must to see a doctor about that cough.',
            answers: ['You must see a doctor about that cough.'],
            explain: "Modals take the bare infinitive, no 'to'.",
          },
          {
            kind: 'translate',
            id: 'c2-mo-5',
            es: 'Bien podría tener razón, pero todavía tengo dudas.',
            answers: [
              'He may well be right, but I still have doubts.',
              'She may well be right, but I still have doubts.',
              'You may well be right, but I still have doubts.',
            ],
            explain: "'May well' raises the likelihood; hedged with 'but'.",
          },
          {
            kind: 'dictation',
            id: 'c2-mo-6',
            text: 'Winning all three awards was, to put it mildly, no small achievement.',
            explain: "Understatement (litotes): 'no small achievement' means a very great one.",
          },
        ],
      },
      {
        id: 'c2-self-repair-restructuring',
        level: 'C2',
        title: 'Self-repair and restructuring strategies',
        summary:
          'Fluent speakers correct, qualify and reframe mid-utterance gracefully, using set phrases to buy time, retract and clarify without losing the thread.',
        sections: [
          {
            heading: 'Repairing and reformulating',
            body: 'Signal a correction smoothly with **or rather, or should I say, that is, what I mean is, let me rephrase that**. These let you replace a word or recast a whole clause while keeping the listener with you.',
            examples: [
              {
                en: "It's expensive — or rather, it's beyond our budget.",
                es: 'Es caro — o más bien, está fuera de nuestro presupuesto.',
              },
              {
                en: "He's confident, or should I say overconfident.",
                es: 'Es seguro de sí mismo, o debería decir demasiado confiado.',
              },
            ],
          },
          {
            heading: 'Retracting and qualifying',
            body: 'Soften or walk back a claim with **actually, then again, on second thoughts, having said that, to be fair**. They show you are reconsidering in real time, which sounds thoughtful rather than indecisive.',
            examples: [
              {
                en: "I'll take the train — actually, on second thoughts, I'll drive.",
                es: 'Tomaré el tren — bueno, pensándolo mejor, conduciré.',
              },
              {
                en: 'It was a failure; to be fair, though, the timing was awful.',
                es: 'Fue un fracaso; siendo justos, eso sí, el momento fue pésimo.',
              },
            ],
          },
          {
            heading: 'Buying time and holding the floor',
            body: 'Use **fillers and stallers** to plan without yielding your turn: *well, I mean, the thing is, how shall I put it, let me think.* Combined with vague language (*sort of, kind of, more or less*) they keep speech natural while you organise your thoughts.',
            examples: [
              {
                en: "The thing is, how shall I put it, we simply can't afford it.",
                es: 'La cosa es, cómo lo diría, sencillamente no podemos permitírnoslo.',
              },
              {
                en: "It's, well, more or less what we expected.",
                es: 'Es, bueno, más o menos lo que esperábamos.',
              },
            ],
          },
        ],
        tables: [
          {
            caption: 'Self-repair toolkit',
            columns: ['Function', 'Phrases'],
            rows: [
              ['Reformulate', 'or rather, that is to say, what I mean is'],
              ['Retract/reconsider', 'on second thoughts, actually, then again'],
              ['Concede then qualify', 'to be fair, having said that, mind you'],
              ['Stall / hold floor', 'the thing is, how shall I put it, let me see'],
            ],
          },
        ],
        examples: [
          {
            en: "She's reliable — well, usually reliable, let's say.",
            es: 'Es fiable — bueno, normalmente fiable, digamos.',
          },
          {
            en: 'We should sell now. Then again, prices might recover.',
            es: 'Deberíamos vender ahora. Aunque, pensándolo bien, los precios podrían recuperarse.',
          },
          {
            en: "What I'm trying to say is that the plan needs more time.",
            es: 'Lo que intento decir es que el plan necesita más tiempo.',
          },
          {
            en: 'It went badly — or, to put it more diplomatically, it could have gone better.',
            es: 'Salió mal — o, para decirlo con más diplomacia, pudo haber salido mejor.',
          },
          {
            en: 'I disagree. Having said that, you do raise a fair point.',
            es: 'No estoy de acuerdo. Dicho esto, planteas un buen punto.',
          },
        ],
        pitfalls: [
          {
            wrong: 'On second thought I will to change my answer.',
            right: "On second thoughts, I'll change my answer.",
            why: "British English says **on second thoughts** (plural) and the modal 'will' takes a bare infinitive.",
            esNote: "La expresión fija es 'on second thoughts'; y 'will' va sin 'to'.",
          },
          {
            wrong: "What I mean to say is that, what I mean is, it's complicated.",
            right: "What I mean is, it's complicated.",
            why: 'Pick one reformulation phrase; stacking several sounds disorganised, not fluent.',
            esNote: 'No conviene encadenar varias muletillas de reformulación; basta una.',
          },
          {
            wrong: 'He is, how to say, a little difficult.',
            right: 'He is, how shall I put it, a little difficult.',
            why: "The idiomatic staller is **how shall I put it**, not a literal 'how to say'.",
            esNote: "El equivalente de 'cómo decirlo' es 'how shall I put it', no 'how to say'.",
          },
        ],
        exercises: [
          {
            kind: 'mcq',
            id: 'c2-sr-1',
            prompt:
              "Choose the natural reformulation marker: 'He's thrifty — ___ , some would call him mean.'",
            options: ['by the way', 'or rather', 'in case', 'as long as'],
            answer: 1,
            explain: "'Or rather' introduces a self-correction or sharper rephrasing.",
          },
          {
            kind: 'cloze',
            id: 'c2-sr-2',
            before: "I'll fly there. On second ",
            after: ", I'll take the train instead.",
            answers: ['thoughts', 'thought'],
            explain:
              "'On second thoughts' (BrE) / 'on second thought' (AmE) signals reconsideration.",
          },
          {
            kind: 'order',
            id: 'c2-sr-3',
            tokens: ['What', "I'm", 'trying', 'to', 'say', 'is', 'that', "it's", 'risky'],
            answer: "What I'm trying to say is that it's risky",
            explain: 'A reformulation frame that restructures the message clearly.',
          },
          {
            kind: 'correct',
            id: 'c2-sr-4',
            wrong: 'He is, how to say it, a bit unreliable.',
            answers: [
              'He is, how shall I put it, a bit unreliable.',
              'He is, how can I put it, a bit unreliable.',
            ],
            explain: "The idiomatic staller is 'how shall I put it', not a literal translation.",
          },
          {
            kind: 'translate',
            id: 'c2-sr-5',
            es: 'No estoy de acuerdo. Dicho esto, tienes razón en una cosa.',
            answers: [
              "I disagree. Having said that, you're right about one thing.",
              "I disagree. That said, you're right about one thing.",
            ],
            explain: "Concede-then-qualify with 'having said that' / 'that said'.",
          },
          {
            kind: 'dictation',
            id: 'c2-sr-6',
            text: 'It went well — or, to be fair, better than we had any right to expect.',
            explain: "Reformulation with 'to be fair' qualifying the initial claim.",
          },
        ],
      },
    ],
  },
];
