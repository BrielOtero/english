import type { Exercise, PracticeStage } from '@/types';

// AUTO-GENERATED — verified tap-only practice for "a1-articles-quantifiers". Do not hand-edit.
export const exercises: Exercise[] = [
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-1",
    "prompt": "My brother is ___ architect at a design studio.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 1,
    "explain": "*Architect* begins with a vowel sound /ɑː/, so use **an**."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-2",
    "before": "He teaches at",
    "after": "university in Madrid.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 0,
    "explain": "*University* starts with a \"yoo\" /juː/ sound — a consonant sound — so it takes **a**, even though it's spelled with a vowel."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-3",
    "statement": "The interview lasted an hour.",
    "answer": true,
    "explain": "The *h* in *hour* is silent, so the word starts with a vowel sound — **an hour** is correct."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-a-an-4",
    "words": [
      "She",
      "is",
      "an",
      "honest",
      "manager.",
      "a"
    ],
    "answer": "She is an honest manager.",
    "explain": "Choose the article by the next word: *honest* has a silent *h* and a vowel sound, so use **an honest**."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-a-an-5",
    "pairs": [
      [
        "hour",
        "an hour"
      ],
      [
        "manager",
        "a manager"
      ],
      [
        "office",
        "an office"
      ],
      [
        "uniform",
        "a uniform"
      ]
    ],
    "explain": "Match by sound: *hour* and *office* open with vowel sounds (an), while *manager* and *uniform* open with consonant sounds (a)."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-a-an-6",
    "prompt": "Tap every phrase that uses the correct article.",
    "options": [
      "an office",
      "a hour",
      "an engineer",
      "a doctor",
      "an secretary"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "Vowel sounds take *an* (an office, an engineer); consonant sounds take *a* (a doctor). *A hour* and *an secretary* break the rule."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-7",
    "prompt": "I have ___ uncle who lives in New York.",
    "options": [
      "an",
      "a",
      "the"
    ],
    "answer": 0,
    "explain": "*Uncle* starts with a vowel sound /ʌ/, so use **an**: an uncle."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-8",
    "before": "My grandparents live in",
    "after": "house by the sea.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 0,
    "explain": "You pronounce the *h* in *house*, so it starts with a consonant sound — use **a**."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-9",
    "statement": "She has a aunt who lives near us.",
    "answer": false,
    "explain": "*Aunt* starts with a vowel sound, so it must be **an aunt**, not *a aunt*."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-a-an-10",
    "words": [
      "My",
      "dad",
      "is",
      "a",
      "an",
      "engineer."
    ],
    "remove": [
      3
    ],
    "explain": "*Engineer* begins with a vowel sound, so it needs **an**. Drop the extra *a*."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-11",
    "prompt": "It's raining, so take ___ umbrella with you.",
    "options": [
      "an",
      "a",
      "some"
    ],
    "answer": 0,
    "explain": "*Umbrella* starts with a vowel sound /ʌ/, so use **an**. It's a single object, so *some* is wrong."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-a-an-12",
    "words": [
      "I",
      "have",
      "an",
      "apple",
      "and",
      "a",
      "banana",
      "the"
    ],
    "answer": "I have an apple and a banana.",
    "explain": "*Apple* starts with a vowel sound, so **an apple**; *banana* starts with a consonant sound, so **a banana**."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-a-an-13",
    "pairs": [
      [
        "umbrella",
        "an umbrella"
      ],
      [
        "hotel",
        "a hotel"
      ],
      [
        "egg",
        "an egg"
      ],
      [
        "park",
        "a park"
      ]
    ],
    "explain": "Match each word to *a* or *an* by its first sound: vowel sound → **an** (an umbrella, an egg); consonant sound → **a** (a hotel, a park)."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-14",
    "before": "My neighbour is",
    "after": "electrician.",
    "options": [
      "an",
      "a",
      "the"
    ],
    "answer": 0,
    "explain": "*Electrician* begins with the vowel sound /ɪ/, so use **an**."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-a-an-15",
    "prompt": "Tap every correct phrase.",
    "options": [
      "an aunt",
      "a uncle",
      "an hour",
      "a house",
      "a older brother"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "Use **an** before a vowel sound (an aunt, an hour) and **a** before a consonant sound (a house). *A uncle* and *a older brother* are wrong — those words start with vowel sounds."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-16",
    "statement": "She has a European boss.",
    "answer": true,
    "explain": "*European* starts with a \"yoo\" /jʊ/ consonant sound, so **a European** is right — even though it's spelled with a vowel."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-17",
    "prompt": "Every worker at the factory wears ___ uniform.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 0,
    "explain": "*Uniform* starts with a \"yoo\" /juː/ consonant sound, so it takes **a uniform** — listen to the sound, not the spelling."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-18",
    "before": "My grandfather is",
    "after": "honest man.",
    "options": [
      "an",
      "a",
      "the"
    ],
    "answer": 0,
    "explain": "The *h* in *honest* is silent, so the word starts with a vowel sound — use **an**."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-a-an-19",
    "words": [
      "I",
      "have",
      "an",
      "older",
      "sister.",
      "a"
    ],
    "answer": "I have an older sister.",
    "explain": "*Older* starts with a vowel sound, so use **an**, not *a*."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-a-an-20",
    "words": [
      "She",
      "is",
      "a",
      "an",
      "only",
      "child."
    ],
    "remove": [
      2
    ],
    "explain": "*Only* starts with a vowel sound, so use **an only child** — drop the extra *a*."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-a-an-21",
    "pairs": [
      [
        "uncle",
        "an uncle"
      ],
      [
        "sister",
        "a sister"
      ],
      [
        "aunt",
        "an aunt"
      ],
      [
        "cousin",
        "a cousin"
      ]
    ],
    "explain": "Use **an** before vowel sounds (an uncle, an aunt) and **a** before consonant sounds (a sister, a cousin)."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-22",
    "statement": "My cousin is an nurse at the hospital.",
    "answer": false,
    "explain": "*Nurse* begins with the consonant sound /n/, so it should be **a nurse**, not *an nurse*."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-23",
    "prompt": "We talk with Grandpa for ___ hour every Sunday.",
    "options": [
      "an",
      "a",
      "the"
    ],
    "answer": 0,
    "explain": "The *h* in *hour* is silent, so the word starts with a vowel sound — use **an**."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-24",
    "before": "I have",
    "after": "brother and two sisters.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 0,
    "explain": "*Brother* begins with the consonant sound /b/, so use **a**: a brother."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-a-an-25",
    "prompt": "Tap every word that needs *an*.",
    "options": [
      "apple",
      "house",
      "egg",
      "table",
      "orange"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "*Apple*, *egg* and *orange* all start with a vowel sound, so they take **an**. *House* /h/ and *table* /t/ start with consonant sounds, so they take *a*."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-26",
    "statement": "My mother is an engineer.",
    "answer": true,
    "explain": "*Engineer* starts with a vowel sound /e/, so **an engineer** is correct."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-27",
    "prompt": "My wife is from ___ European family.",
    "options": [
      "a",
      "an",
      "the"
    ],
    "answer": 0,
    "explain": "*European* begins with a *y* sound (yoo-ropean) — a consonant sound — so use **a**, even though it is spelled with a vowel."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-28",
    "before": "She works in",
    "after": "office in the city centre.",
    "options": [
      "an",
      "a",
      "some"
    ],
    "answer": 0,
    "explain": "*Office* begins with a vowel sound /ɒ/, so use **an office**."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-a-an-29",
    "words": [
      "This",
      "is",
      "a",
      "an",
      "old",
      "clock"
    ],
    "remove": [
      2
    ],
    "explain": "*Old* starts with a vowel sound, so we only need **an old clock**. Remove the extra *a*."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-30",
    "statement": "We stayed in an hotel by the sea.",
    "answer": false,
    "explain": "Wrong. *Hotel* starts with a spoken /h/ consonant sound, so it should be **a hotel** — not *an*."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-31",
    "prompt": "She studies at ___ university in the city.",
    "options": [
      "a",
      "an",
      "some"
    ],
    "answer": 0,
    "explain": "*University* begins with a /juː/ (\"yoo\") sound, which is a consonant sound, so use **a university** — even though it starts with the letter *u*."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-32",
    "before": "There is",
    "after": "oven in the kitchen.",
    "options": [
      "an",
      "a",
      "some"
    ],
    "answer": 0,
    "explain": "*Oven* starts with a vowel sound /ʌ/, so use **an oven**."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-a-an-33",
    "statement": "There is an old key on the kitchen table.",
    "answer": true,
    "explain": "Correct. *Old* starts with a vowel sound, so we say **an old key** — even though *key* itself would take *a*."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-a-an-34",
    "prompt": "My grandparents live in ___ house near the river.",
    "options": [
      "a",
      "an",
      "some"
    ],
    "answer": 0,
    "explain": "*House* starts with the consonant sound /h/, so use **a house** — not *an*."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-a-an-35",
    "before": "We waited for",
    "after": "hour at the bus station.",
    "options": [
      "an",
      "a",
      "some"
    ],
    "answer": 0,
    "explain": "The *h* in **hour** is silent, so it starts with a vowel sound: **an hour**. It's the sound that matters, not the letter."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-1",
    "prompt": "The report is ready. Please email ___ manager about it.",
    "options": [
      "the",
      "a",
      "no article"
    ],
    "answer": 0,
    "explain": "We mean one specific, known person (our manager), so use **the**. A singular countable noun can't stand with no article."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-2",
    "statement": "I go to the work by bus every morning.",
    "answer": false,
    "explain": "*Go to work* takes no article. Say: 'I go to work by bus every morning.'"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-3",
    "before": "Please close",
    "after": "door when you leave the office.",
    "options": [
      "the",
      "a",
      "no article"
    ],
    "answer": 0,
    "explain": "There's one specific door we both know, so use **the**."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-the-zero-article-4",
    "prompt": "Tap every correct sentence.",
    "options": [
      "The report on your desk is ready.",
      "Pilots fly planes.",
      "He goes to the work at seven.",
      "The new engineer starts on Monday.",
      "In general, the farmers work outside."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Use **the** for specific things (the report, the new engineer). Use no article for general plurals (pilots) and fixed phrases (go to work). *The work* and *the farmers* (general) are wrong."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-the-zero-article-5",
    "words": [
      "The",
      "boss",
      "wants",
      "to",
      "see",
      "you.",
      "a"
    ],
    "answer": "The boss wants to see you.",
    "explain": "One specific person (our boss) → **the**, not *a*."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-the-zero-article-6",
    "pairs": [
      [
        "Close the door quietly —",
        "the twins are sleeping."
      ],
      [
        "My aunt believes that",
        "family comes first."
      ],
      [
        "At the park I love watching",
        "children play."
      ],
      [
        "Grandma keeps",
        "the old photos in a box."
      ]
    ],
    "explain": "Specific, known nouns take **the** (the twins, the old photos); general ideas take no article (family, children)."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-7",
    "prompt": "In general, ___ nurses help sick people every day.",
    "options": [
      "the",
      "a",
      "no article"
    ],
    "answer": 2,
    "explain": "This is a general statement about nurses as a group, so use **no article** before the plural. *The nurses* would mean specific ones."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-8",
    "statement": "The manager in our office is very kind.",
    "answer": true,
    "explain": "This points to one specific person (the manager in our office), so **the** is correct."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-9",
    "before": "My brother goes to",
    "after": "every morning at eight.",
    "options": [
      "work",
      "the work",
      "a work"
    ],
    "answer": 0,
    "explain": "*Go to work* is a fixed phrase — no article before **work**."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-the-zero-article-10",
    "words": [
      "My",
      "mother",
      "goes",
      "to",
      "the",
      "work",
      "by",
      "car."
    ],
    "remove": [
      4
    ],
    "explain": "*Go to work* takes no article — remove **the**: 'My mother goes to work by car.'"
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-11",
    "prompt": "___ are important in every culture.",
    "options": [
      "Families",
      "The families",
      "A families"
    ],
    "answer": 0,
    "explain": "Talking about families in general takes no article. *A families* is impossible with a plural, and *The families* would point to specific, known ones."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-12",
    "statement": "Good managers give good advice.",
    "answer": true,
    "explain": "General plural (*managers*) and an uncountable noun (*advice*) both take no article. Both correct here."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-13",
    "before": "My parents always say that",
    "after": "is the most important thing.",
    "options": [
      "family",
      "the family",
      "a family"
    ],
    "answer": 0,
    "explain": "As a general idea, **family** takes no article: 'family is the most important thing.'"
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-the-zero-article-14",
    "prompt": "Tap every correct sentence.",
    "options": [
      "Sisters often share clothes.",
      "The baby is crying again.",
      "I really love the babies.",
      "In general, the parents love their children.",
      "Family means everything to me."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "General plurals (*Sisters*) and general uncountables (*Family*) take no article. *the babies* and *In general, the parents* wrongly add **the** to general nouns. **The baby** is right because it means one known baby."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-the-zero-article-15",
    "words": [
      "Grandparents",
      "love",
      "their",
      "grandchildren.",
      "The"
    ],
    "answer": "Grandparents love their grandchildren.",
    "explain": "This is a general truth about grandparents in general, so there is no **The**."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-the-zero-article-16",
    "pairs": [
      [
        "milk in general",
        "I like milk."
      ],
      [
        "this cold glass of milk",
        "The milk is cold."
      ],
      [
        "parks in general",
        "I love parks."
      ],
      [
        "the park near my house",
        "The park is beautiful."
      ]
    ],
    "explain": "General or uncountable nouns take no article; a specific, known thing takes the. Match each idea to its form."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-17",
    "prompt": "Dinner is ready! Where are ___?",
    "options": [
      "the children",
      "children",
      "a children"
    ],
    "answer": 0,
    "explain": "You mean your own, specific children, so use **the children**. *Children* alone would mean children in general."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-18",
    "statement": "Can you hold baby for a minute?",
    "answer": false,
    "explain": "We both know which baby, so use **the baby**: 'Can you hold the baby for a minute?'"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-19",
    "before": "Look at",
    "after": "over there — she looks just like her mum!",
    "options": [
      "the baby",
      "baby",
      "a baby"
    ],
    "answer": 0,
    "explain": "You are pointing at one specific baby you can see, so use **the baby**."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-the-zero-article-20",
    "words": [
      "My",
      "grandmother",
      "says",
      "the",
      "families",
      "should",
      "eat",
      "together."
    ],
    "remove": [
      3
    ],
    "explain": "Remove **the**: the general plural *families* takes no article — 'families should eat together.'"
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-21",
    "prompt": "This soup is cold. Can you heat it up in ___ microwave?",
    "options": [
      "the",
      "(no article)",
      "a"
    ],
    "answer": 0,
    "explain": "You both know the one microwave in the kitchen, so it's a specific, known object: the microwave."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-22",
    "statement": "Families come in all shapes and sizes.",
    "answer": true,
    "explain": "This is a general statement about families in general, so no article is correct."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-23",
    "before": "Everyone in my family loves",
    "after": "cheese.",
    "options": [
      "(no article)",
      "the",
      "a"
    ],
    "answer": 0,
    "explain": "Here cheese means cheese in general, and it's uncountable, so use no article — not the cheese."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-the-zero-article-24",
    "words": [
      "Children",
      "need",
      "love",
      "and",
      "support.",
      "the"
    ],
    "answer": "Children need love and support.",
    "explain": "General plural *Children* and uncountable *love / support* all take no article — drop **the**."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-25",
    "prompt": "___ are useful when it rains. I have three at home.",
    "options": [
      "Umbrellas",
      "The umbrellas",
      "An umbrella"
    ],
    "answer": 0,
    "explain": "You're talking about umbrellas in general as a type of thing, so use no article: Umbrellas are useful."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-26",
    "statement": "I think the happiness comes from spending time with family.",
    "answer": false,
    "explain": "Abstract *happiness* in general takes no article: 'happiness comes from spending time with family.' (*with family* is correctly article-free too.)"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-the-zero-article-27",
    "before": "I'm cooking dinner. Can you pass me",
    "after": "plates on the shelf?",
    "options": [
      "the",
      "(no article)",
      "a"
    ],
    "answer": 0,
    "explain": "You mean the particular plates on the shelf — a specific, known thing — so use the plates."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-the-zero-article-28",
    "words": [
      "She",
      "really",
      "likes",
      "the",
      "flowers"
    ],
    "remove": [
      3
    ],
    "explain": "Flowers here means flowers in general, so the plural noun takes no article: She really likes flowers."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-the-zero-article-29",
    "prompt": "Tap every correct sentence.",
    "options": [
      "I really like tea.",
      "The window in my room is broken.",
      "Can you open door?",
      "Water is very important.",
      "Please turn off light."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "General and uncountable nouns (tea, water) take no article; a specific, known thing (the window in my room) takes the. 'door' and 'light' are specific here, so they need the door and the light."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-the-zero-article-30",
    "prompt": "I can't talk right now — I'm ___.",
    "options": [
      "at work",
      "at the work",
      "at a work"
    ],
    "answer": 0,
    "explain": "**At work** is a fixed phrase and takes no article."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-31",
    "statement": "Books are expensive these days.",
    "answer": true,
    "explain": "This is a general statement about books as a whole, so the plural noun takes no article. Correct."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-the-zero-article-32",
    "words": [
      "Turn",
      "off",
      "the",
      "lights,",
      "please.",
      "a"
    ],
    "answer": "Turn off the lights, please.",
    "explain": "You mean the specific lights in this room, so use the lights; a is the distractor."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-the-zero-article-33",
    "words": [
      "I",
      "never",
      "drink",
      "the",
      "milk",
      "in",
      "the",
      "morning"
    ],
    "remove": [
      3
    ],
    "explain": "Milk in general is uncountable, so drop the first the. Keep the second one — 'in the morning' is a fixed phrase: I never drink milk in the morning."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-34",
    "statement": "Please pass me salt on the table.",
    "answer": false,
    "explain": "The salt is a specific thing on the table, so it needs the: Please pass me the salt on the table."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-the-zero-article-35",
    "statement": "The lights in the kitchen are very bright.",
    "answer": true,
    "explain": "These are specific, known lights in one specific kitchen, so the is correct for both. Correct."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-1",
    "prompt": "___ is my desk, right here next to the window.",
    "options": [
      "This",
      "That",
      "These"
    ],
    "answer": 0,
    "explain": "One desk, right here near you -> **this**. *That* is for far things; *these* is plural."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-2",
    "prompt": "Look at ___ trucks over there in the car park.",
    "options": [
      "those",
      "these",
      "that"
    ],
    "answer": 0,
    "explain": "More than one truck, far away -> **those**. *These* is near; *that* is only for one thing."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-3",
    "statement": "These tools in my toolbox are brand new.",
    "answer": true,
    "explain": "More than one tool, close to you -> **these**. Correct!"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-4",
    "before": "The chef is washing",
    "after": "plates in the kitchen sink.",
    "options": [
      "these",
      "this",
      "that"
    ],
    "answer": 0,
    "explain": "More than one plate, right next to the chef -> **these**. *This/that* are for one thing."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-demonstratives-5",
    "prompt": "Tap every correct sentence.",
    "options": [
      "This nurse next to me is very kind.",
      "Those buildings across the street are offices.",
      "That keyboards over there are dirty.",
      "These meeting is at 3 p.m.",
      "That waiter by the far window is new."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "Match number and distance: this/that for one thing, these/those for many. *That keyboards* and *These meeting* mix singular and plural."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-demonstratives-6",
    "words": [
      "These",
      "boxes",
      "on",
      "my",
      "desk",
      "are",
      "heavy.",
      "This"
    ],
    "answer": "These boxes on my desk are heavy.",
    "explain": "More than one box, near you -> **These**. *This* is only for one thing."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-demonstratives-7",
    "pairs": [
      [
        "this",
        "one person or thing near me"
      ],
      [
        "that",
        "one person or thing far away"
      ],
      [
        "these",
        "many people or things near me"
      ],
      [
        "those",
        "many people or things far away"
      ]
    ],
    "explain": "Demonstratives show number and distance: **this/these** are near you, **that/those** are far; **this/that** are singular, **these/those** are plural."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-8",
    "prompt": "Who is ___ woman at the front desk over there?",
    "options": [
      "that",
      "this",
      "those"
    ],
    "answer": 0,
    "explain": "One woman, far from you -> **that**. *This* is near; *those* is plural."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-9",
    "statement": "Those printer near the door is out of paper.",
    "answer": false,
    "explain": "*Printer* is one thing, so say **that** for far or **this** for near: 'That printer is out of paper.' *Those* is only for plurals."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-10",
    "before": "Who is",
    "after": "man over there? He's my uncle.",
    "options": [
      "this",
      "that",
      "these"
    ],
    "answer": 1,
    "explain": "*Man* is singular and *over there* means far away, so use **that** — one person, far."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-demonstratives-11",
    "words": [
      "This",
      "is",
      "my",
      "this",
      "new",
      "office."
    ],
    "remove": [
      3
    ],
    "explain": "You only need one demonstrative. Drop the extra **this**: 'This is my new office.'"
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-demonstratives-12",
    "prompt": "Tap every correct sentence.",
    "options": [
      "This chair is comfortable.",
      "These flowers smell great.",
      "That houses are old.",
      "Those windows are dirty.",
      "These book is new."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Match the demonstrative to the noun's number: *this/that* for one, *these/those* for many. \"That houses\" and \"These book\" mix them up."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-demonstratives-13",
    "words": [
      "Is",
      "that",
      "your",
      "boss",
      "in",
      "the",
      "office?",
      "those"
    ],
    "answer": "Is that your boss in the office?",
    "explain": "One boss, far away in the office -> **that**. *Those* is plural."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-14",
    "prompt": "___ is my brother, Tom.",
    "options": [
      "This",
      "These",
      "Those"
    ],
    "answer": 0,
    "explain": "*Is* and *brother* are singular, so use **this** (one person). *These* and *those* are for more than one."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-15",
    "statement": "Those mountains in the distance are beautiful.",
    "answer": true,
    "explain": "Correct — **those** is plural and far, which fits mountains in the distance."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-16",
    "before": "Are",
    "after": "girls over there your sisters?",
    "options": [
      "this",
      "these",
      "those"
    ],
    "answer": 2,
    "explain": "*Girls* is plural and *over there* is far away, so use **those** — many people, far."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-demonstratives-17",
    "words": [
      "This",
      "that",
      "jacket",
      "is",
      "warm."
    ],
    "remove": [
      1
    ],
    "explain": "You need only one demonstrative. The jacket is singular and near, so keep **This** and drop *that*."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-demonstratives-18",
    "prompt": "Tap every sentence that points at something far away.",
    "options": [
      "That shop over there sells bread.",
      "This pen in my hand is blue.",
      "Those cars across the street are new.",
      "These plates on my table are clean."
    ],
    "correct": [
      0,
      2
    ],
    "explain": "**That** and **those** point at things far away (*over there*, *across the street*). *This/these* are for things near you."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-demonstratives-19",
    "words": [
      "Those",
      "buildings",
      "are",
      "very",
      "tall.",
      "That"
    ],
    "answer": "Those buildings are very tall.",
    "explain": "*Buildings* is plural, so use **Those**. *That* points at only one building."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-20",
    "prompt": "___ apple in my hand is very sweet.",
    "options": [
      "This",
      "These",
      "Those"
    ],
    "answer": 0,
    "explain": "**This** is singular and near — one apple you're holding. *These* and *those* are for more than one."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-21",
    "statement": "This shoes are too small for me.",
    "answer": false,
    "explain": "*Shoes* is plural, so use **these**: \"These shoes are too small for me.\" *This* is only for one thing."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-22",
    "before": "I love",
    "after": "old family photos here on the wall.",
    "options": [
      "this",
      "these",
      "those"
    ],
    "answer": 1,
    "explain": "*Photos* is plural and *here* means near you, so use **these** — many things, close by."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-demonstratives-23",
    "words": [
      "That",
      "is",
      "this",
      "my",
      "older",
      "sister."
    ],
    "remove": [
      2
    ],
    "explain": "You only need one demonstrative. Keep **That** and drop *this*: 'That is my older sister.'"
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-demonstratives-24",
    "prompt": "Tap every correct sentence.",
    "options": [
      "This is my sister.",
      "These is my parents.",
      "Those are my grandparents.",
      "That are my cousin.",
      "These are my twins."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Singular takes *is* (This is), plural takes *are* (Those/These are). *These is* and *That are* mix them up."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-demonstratives-25",
    "words": [
      "This",
      "market",
      "is",
      "always",
      "busy.",
      "These"
    ],
    "answer": "This market is always busy.",
    "explain": "**This** is singular, so it fits one *market*. *These* needs a plural noun."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-26",
    "prompt": "Look at ___ birds on the roof over there.",
    "options": [
      "those",
      "that",
      "this"
    ],
    "answer": 0,
    "explain": "**Those** is plural and far — there is more than one bird, and they're over there. *That* is for one thing."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-27",
    "statement": "This are my twin brothers.",
    "answer": false,
    "explain": "*Brothers* is plural, so it needs **These are**, not *This are*. *This* is only for one person."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-28",
    "before": "I love",
    "after": "painting on the far wall.",
    "options": [
      "that",
      "these",
      "this"
    ],
    "answer": 0,
    "explain": "One painting far away, so use **that** (singular, far). *This* would be a painting right next to you."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-demonstratives-29",
    "prompt": "Come here and meet ___ woman next to me — she's my wife.",
    "options": [
      "this",
      "that",
      "those"
    ],
    "answer": 0,
    "explain": "*Next to me* means near you and *woman* is singular, so use **this**. *That* is far away; *those* is plural."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-demonstratives-30",
    "statement": "That is my father in the photo.",
    "answer": true,
    "explain": "*Father* is one person, and **that** works for someone pictured a little away — singular and correct."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-31",
    "before": "Are",
    "after": "your keys here on the table?",
    "options": [
      "these",
      "those",
      "this"
    ],
    "answer": 0,
    "explain": "Keys are plural and *here* (near), so use **these**. *Those* would point at something far away."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-demonstratives-32",
    "before": "I keep my ID badge in",
    "after": "pocket on my uniform.",
    "options": [
      "this",
      "these",
      "those"
    ],
    "answer": 0,
    "explain": "One pocket, on the uniform you're wearing (near you) -> **this**. *These/those* are plural."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-demonstratives-33",
    "words": [
      "These",
      "are",
      "my",
      "two",
      "brothers.",
      "this"
    ],
    "answer": "These are my two brothers.",
    "explain": "Two people who are close by need **These are** — plural and near. *This* is singular, so it's the extra word."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-1",
    "prompt": "There aren't ___ meetings this afternoon.",
    "options": [
      "any",
      "some",
      "much"
    ],
    "answer": 0,
    "explain": "Use **any** in negative sentences: *There aren't any meetings.* (*meetings* is countable, so *much* is wrong too.)"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-2",
    "before": "How",
    "after": "employees work in your office?",
    "options": [
      "many",
      "much",
      "some"
    ],
    "answer": 0,
    "explain": "**Employees** is countable and plural, so ask **how many**."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-3",
    "statement": "There is some coffee in the office kitchen.",
    "answer": true,
    "explain": "**Some** is correct in positive sentences, and **coffee** is uncountable — *some coffee* fits perfectly."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-some-any-how-much-many-4",
    "words": [
      "Do",
      "you",
      "have",
      "any",
      "questions",
      "for",
      "the",
      "manager?",
      "some"
    ],
    "answer": "Do you have any questions for the manager?",
    "explain": "Use **any** in questions: *Do you have any questions...?* *some* is the distractor."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-some-any-how-much-many-5",
    "prompt": "Tap every correct sentence.",
    "options": [
      "I have some paperwork to finish.",
      "There aren't any customers today.",
      "How much meetings do you have?",
      "Do we have any coffee for the staff?",
      "There are any managers in the office."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "**some** in positives, **any** in negatives and questions, and **how many** (not *how much*) with countable nouns like *meetings*."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-some-any-how-much-many-6",
    "words": [
      "How",
      "much",
      "many",
      "money",
      "do",
      "you",
      "earn?"
    ],
    "remove": [
      2
    ],
    "explain": "**Money** is uncountable, so keep **how much** and drop the extra **many**."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-some-any-how-much-many-7",
    "pairs": [
      [
        "money",
        "How much money?"
      ],
      [
        "colleagues",
        "How many colleagues?"
      ],
      [
        "experience",
        "How much experience?"
      ],
      [
        "offices",
        "How many offices?"
      ]
    ],
    "explain": "**How much** goes with uncountable nouns (money, experience); **how many** goes with countable plurals (colleagues, offices)."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-8",
    "prompt": "___ experience do you have for this job?",
    "options": [
      "How much",
      "How many",
      "Some"
    ],
    "answer": 0,
    "explain": "**Experience** is uncountable, so ask **how much**."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-9",
    "before": "I have",
    "after": "emails to answer before lunch.",
    "options": [
      "some",
      "any",
      "much"
    ],
    "answer": 0,
    "explain": "Use **some** in positive sentences: *I have some emails.* (*emails* is countable, so *much* is wrong.)"
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-10",
    "statement": "How much colleagues are in your team?",
    "answer": false,
    "explain": "**Colleagues** is countable, so use **how many**: *How many colleagues are in your team?*"
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-some-any-how-much-many-11",
    "words": [
      "How",
      "many",
      "interviews",
      "did",
      "you",
      "have",
      "today?",
      "much"
    ],
    "answer": "How many interviews did you have today?",
    "explain": "**Interviews** is countable and plural, so use **how many**; *much* is the distractor."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-some-any-how-much-many-12",
    "prompt": "Tap every correct sentence.",
    "options": [
      "I have some nieces.",
      "Do you have any grandchildren?",
      "She doesn't have some sisters.",
      "How many cousins do you have?",
      "How much aunts do they have?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "**Some** in positives, **any** in negatives/questions, and **how many** with countable nouns like *cousins*."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-some-any-how-much-many-13",
    "words": [
      "How",
      "many",
      "much",
      "cousins",
      "do",
      "you",
      "have"
    ],
    "remove": [
      2
    ],
    "explain": "*Cousins* are countable, so keep **how many** and drop *much*."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-some-any-how-much-many-14",
    "pairs": [
      [
        "I have ___ brothers. (positive)",
        "some"
      ],
      [
        "I don't have ___ brothers. (negative)",
        "any"
      ],
      [
        "___ brothers do you have? (count them)",
        "how many"
      ],
      [
        "___ time with family? (uncountable)",
        "how much"
      ]
    ],
    "explain": "**Some** for positives, **any** for negatives/questions, **how many** for countable nouns, **how much** for uncountable ones."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-15",
    "prompt": "I have ___ cousins who live in Canada.",
    "options": [
      "some",
      "any",
      "much"
    ],
    "answer": 0,
    "explain": "In positive sentences, use **some** with plural nouns like *cousins*. *Any* is for negatives and questions."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-16",
    "before": "There isn't",
    "after": "work for the new intern today.",
    "options": [
      "any",
      "some",
      "many"
    ],
    "answer": 0,
    "explain": "Use **any** in negative sentences, and **work** is uncountable, so *many* is wrong too: *There isn't any work.*"
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-17",
    "statement": "How much brothers does she have?",
    "answer": false,
    "explain": "*Brothers* are countable, so it must be **How many brothers**, not *how much*."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-some-any-how-much-many-18",
    "words": [
      "Do",
      "you",
      "have",
      "any",
      "nephews?",
      "much"
    ],
    "answer": "Do you have any nephews?",
    "explain": "In questions use **any**; *much* is wrong because *nephews* are countable."
  },
  {
    "kind": "pickAll",
    "id": "a1-articles-quantifiers-some-any-how-much-many-19",
    "prompt": "Tap every correct sentence.",
    "options": [
      "There are some apples in the bowl.",
      "Are there any shops near the station?",
      "How much chairs are in the office?",
      "There isn't any water in the glass.",
      "Would you like some tea?"
    ],
    "correct": [
      0,
      1,
      3,
      4
    ],
    "explain": "Positive → **some**; questions and negatives → **any**; countable chairs need **how many**, not how much."
  },
  {
    "kind": "trim",
    "id": "a1-articles-quantifiers-some-any-how-much-many-20",
    "words": [
      "How",
      "much",
      "many",
      "bags",
      "are",
      "in",
      "the",
      "car"
    ],
    "remove": [
      1
    ],
    "explain": "Bags are countable, so keep **how many** and drop **much**."
  },
  {
    "kind": "match",
    "id": "a1-articles-quantifiers-some-any-how-much-many-21",
    "pairs": [
      [
        "milk",
        "How much milk?"
      ],
      [
        "eggs",
        "How many eggs?"
      ],
      [
        "water",
        "How much water?"
      ],
      [
        "chairs",
        "How many chairs?"
      ]
    ],
    "explain": "Uncountable nouns take **how much**; countable plurals take **how many**."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-22",
    "prompt": "___ uncles do you have?",
    "options": [
      "How many",
      "How much",
      "How some"
    ],
    "answer": 0,
    "explain": "**How many** goes with countable nouns you can count one by one, like *uncles*."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-23",
    "before": "How",
    "after": "time do you spend with your grandparents?",
    "options": [
      "much",
      "many",
      "some"
    ],
    "answer": 0,
    "explain": "*Time* is uncountable — you can't count it one by one — so use **how much**."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-24",
    "statement": "We don't have any relatives in Australia.",
    "answer": true,
    "explain": "**Any** is the right word in a negative sentence."
  },
  {
    "kind": "build",
    "id": "a1-articles-quantifiers-some-any-how-much-many-25",
    "words": [
      "How",
      "many",
      "books",
      "are",
      "there",
      "on",
      "the",
      "desk?",
      "much"
    ],
    "answer": "How many books are there on the desk?",
    "explain": "Books are countable, so use **how many**; *much* is the distractor."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-26",
    "prompt": "Do you have ___ sisters?",
    "options": [
      "any",
      "some",
      "much"
    ],
    "answer": 0,
    "explain": "In yes/no questions, use **any** with plural nouns like *sisters*."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-27",
    "before": "My wife doesn't have",
    "after": "brothers or sisters.",
    "options": [
      "any",
      "some",
      "many"
    ],
    "answer": 0,
    "explain": "Use **any** in negative sentences: *doesn't have any siblings*."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-28",
    "statement": "How many water is there in the bottle?",
    "answer": false,
    "explain": "Water is uncountable, so use **how much**: *How much water is there in the bottle?*"
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-29",
    "prompt": "There is ___ milk in the fridge.",
    "options": [
      "some",
      "any",
      "many"
    ],
    "answer": 0,
    "explain": "In a positive sentence with an uncountable noun (milk), use **some**."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-30",
    "before": "My parents give me",
    "after": "advice about my marriage.",
    "options": [
      "some",
      "any",
      "many"
    ],
    "answer": 0,
    "explain": "**Some** works in positive sentences with uncountable nouns like *advice*."
  },
  {
    "kind": "truefalse",
    "id": "a1-articles-quantifiers-some-any-how-much-many-31",
    "statement": "There aren't some chairs in the kitchen.",
    "answer": false,
    "explain": "Negatives use **any**: *There aren't any chairs in the kitchen.*"
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-32",
    "prompt": "Is there ___ sugar in my coffee?",
    "options": [
      "any",
      "some",
      "many"
    ],
    "answer": 0,
    "explain": "In questions we normally use **any**: *Is there any sugar?*"
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-33",
    "before": "There isn't",
    "after": "bread in the kitchen.",
    "options": [
      "any",
      "some",
      "many"
    ],
    "answer": 0,
    "explain": "In a negative sentence, use **any**: *There isn't any bread.*"
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-34",
    "prompt": "___ chairs are there in the room?",
    "options": [
      "How many",
      "How much",
      "How"
    ],
    "answer": 0,
    "explain": "Chairs are countable, so ask with **how many**."
  },
  {
    "kind": "tapCloze",
    "id": "a1-articles-quantifiers-some-any-how-much-many-35",
    "before": "How",
    "after": "money is in your wallet?",
    "options": [
      "much",
      "many",
      "some"
    ],
    "answer": 0,
    "explain": "Money is uncountable, so ask **how much**."
  },
  {
    "kind": "mcq",
    "id": "a1-articles-quantifiers-some-any-how-much-many-36",
    "prompt": "Would you like ___ coffee?",
    "options": [
      "some",
      "any",
      "much"
    ],
    "answer": 0,
    "explain": "For offers we use **some**, even in a question: *Would you like some coffee?*"
  }
];

export const practice: PracticeStage[] = [
  {
    "focus": "a / an",
    "ids": [
      "a1-articles-quantifiers-a-an-1",
      "a1-articles-quantifiers-a-an-2",
      "a1-articles-quantifiers-a-an-3",
      "a1-articles-quantifiers-a-an-4",
      "a1-articles-quantifiers-a-an-5",
      "a1-articles-quantifiers-a-an-6",
      "a1-articles-quantifiers-a-an-7",
      "a1-articles-quantifiers-a-an-8",
      "a1-articles-quantifiers-a-an-9",
      "a1-articles-quantifiers-a-an-10",
      "a1-articles-quantifiers-a-an-11",
      "a1-articles-quantifiers-a-an-12",
      "a1-articles-quantifiers-a-an-13",
      "a1-articles-quantifiers-a-an-14",
      "a1-articles-quantifiers-a-an-15",
      "a1-articles-quantifiers-a-an-16",
      "a1-articles-quantifiers-a-an-17",
      "a1-articles-quantifiers-a-an-18",
      "a1-articles-quantifiers-a-an-19",
      "a1-articles-quantifiers-a-an-20",
      "a1-articles-quantifiers-a-an-21",
      "a1-articles-quantifiers-a-an-22",
      "a1-articles-quantifiers-a-an-23",
      "a1-articles-quantifiers-a-an-24",
      "a1-articles-quantifiers-a-an-25",
      "a1-articles-quantifiers-a-an-26",
      "a1-articles-quantifiers-a-an-27",
      "a1-articles-quantifiers-a-an-28",
      "a1-articles-quantifiers-a-an-29",
      "a1-articles-quantifiers-a-an-30",
      "a1-articles-quantifiers-a-an-31",
      "a1-articles-quantifiers-a-an-32",
      "a1-articles-quantifiers-a-an-33",
      "a1-articles-quantifiers-a-an-34",
      "a1-articles-quantifiers-a-an-35"
    ]
  },
  {
    "focus": "the & zero article",
    "ids": [
      "a1-articles-quantifiers-the-zero-article-1",
      "a1-articles-quantifiers-the-zero-article-2",
      "a1-articles-quantifiers-the-zero-article-3",
      "a1-articles-quantifiers-the-zero-article-4",
      "a1-articles-quantifiers-the-zero-article-5",
      "a1-articles-quantifiers-the-zero-article-6",
      "a1-articles-quantifiers-the-zero-article-7",
      "a1-articles-quantifiers-the-zero-article-8",
      "a1-articles-quantifiers-the-zero-article-9",
      "a1-articles-quantifiers-the-zero-article-10",
      "a1-articles-quantifiers-the-zero-article-11",
      "a1-articles-quantifiers-the-zero-article-12",
      "a1-articles-quantifiers-the-zero-article-13",
      "a1-articles-quantifiers-the-zero-article-14",
      "a1-articles-quantifiers-the-zero-article-15",
      "a1-articles-quantifiers-the-zero-article-16",
      "a1-articles-quantifiers-the-zero-article-17",
      "a1-articles-quantifiers-the-zero-article-18",
      "a1-articles-quantifiers-the-zero-article-19",
      "a1-articles-quantifiers-the-zero-article-20",
      "a1-articles-quantifiers-the-zero-article-21",
      "a1-articles-quantifiers-the-zero-article-22",
      "a1-articles-quantifiers-the-zero-article-23",
      "a1-articles-quantifiers-the-zero-article-24",
      "a1-articles-quantifiers-the-zero-article-25",
      "a1-articles-quantifiers-the-zero-article-26",
      "a1-articles-quantifiers-the-zero-article-27",
      "a1-articles-quantifiers-the-zero-article-28",
      "a1-articles-quantifiers-the-zero-article-29",
      "a1-articles-quantifiers-the-zero-article-30",
      "a1-articles-quantifiers-the-zero-article-31",
      "a1-articles-quantifiers-the-zero-article-32",
      "a1-articles-quantifiers-the-zero-article-33",
      "a1-articles-quantifiers-the-zero-article-34",
      "a1-articles-quantifiers-the-zero-article-35"
    ]
  },
  {
    "focus": "Demonstratives",
    "ids": [
      "a1-articles-quantifiers-demonstratives-1",
      "a1-articles-quantifiers-demonstratives-2",
      "a1-articles-quantifiers-demonstratives-3",
      "a1-articles-quantifiers-demonstratives-4",
      "a1-articles-quantifiers-demonstratives-5",
      "a1-articles-quantifiers-demonstratives-6",
      "a1-articles-quantifiers-demonstratives-7",
      "a1-articles-quantifiers-demonstratives-8",
      "a1-articles-quantifiers-demonstratives-9",
      "a1-articles-quantifiers-demonstratives-10",
      "a1-articles-quantifiers-demonstratives-11",
      "a1-articles-quantifiers-demonstratives-12",
      "a1-articles-quantifiers-demonstratives-13",
      "a1-articles-quantifiers-demonstratives-14",
      "a1-articles-quantifiers-demonstratives-15",
      "a1-articles-quantifiers-demonstratives-16",
      "a1-articles-quantifiers-demonstratives-17",
      "a1-articles-quantifiers-demonstratives-18",
      "a1-articles-quantifiers-demonstratives-19",
      "a1-articles-quantifiers-demonstratives-20",
      "a1-articles-quantifiers-demonstratives-21",
      "a1-articles-quantifiers-demonstratives-22",
      "a1-articles-quantifiers-demonstratives-23",
      "a1-articles-quantifiers-demonstratives-24",
      "a1-articles-quantifiers-demonstratives-25",
      "a1-articles-quantifiers-demonstratives-26",
      "a1-articles-quantifiers-demonstratives-27",
      "a1-articles-quantifiers-demonstratives-28",
      "a1-articles-quantifiers-demonstratives-29",
      "a1-articles-quantifiers-demonstratives-30",
      "a1-articles-quantifiers-demonstratives-31",
      "a1-articles-quantifiers-demonstratives-32",
      "a1-articles-quantifiers-demonstratives-33"
    ]
  },
  {
    "focus": "some / any & how much/many",
    "ids": [
      "a1-articles-quantifiers-some-any-how-much-many-1",
      "a1-articles-quantifiers-some-any-how-much-many-2",
      "a1-articles-quantifiers-some-any-how-much-many-3",
      "a1-articles-quantifiers-some-any-how-much-many-4",
      "a1-articles-quantifiers-some-any-how-much-many-5",
      "a1-articles-quantifiers-some-any-how-much-many-6",
      "a1-articles-quantifiers-some-any-how-much-many-7",
      "a1-articles-quantifiers-some-any-how-much-many-8",
      "a1-articles-quantifiers-some-any-how-much-many-9",
      "a1-articles-quantifiers-some-any-how-much-many-10",
      "a1-articles-quantifiers-some-any-how-much-many-11",
      "a1-articles-quantifiers-some-any-how-much-many-12",
      "a1-articles-quantifiers-some-any-how-much-many-13",
      "a1-articles-quantifiers-some-any-how-much-many-14",
      "a1-articles-quantifiers-some-any-how-much-many-15",
      "a1-articles-quantifiers-some-any-how-much-many-16",
      "a1-articles-quantifiers-some-any-how-much-many-17",
      "a1-articles-quantifiers-some-any-how-much-many-18",
      "a1-articles-quantifiers-some-any-how-much-many-19",
      "a1-articles-quantifiers-some-any-how-much-many-20",
      "a1-articles-quantifiers-some-any-how-much-many-21",
      "a1-articles-quantifiers-some-any-how-much-many-22",
      "a1-articles-quantifiers-some-any-how-much-many-23",
      "a1-articles-quantifiers-some-any-how-much-many-24",
      "a1-articles-quantifiers-some-any-how-much-many-25",
      "a1-articles-quantifiers-some-any-how-much-many-26",
      "a1-articles-quantifiers-some-any-how-much-many-27",
      "a1-articles-quantifiers-some-any-how-much-many-28",
      "a1-articles-quantifiers-some-any-how-much-many-29",
      "a1-articles-quantifiers-some-any-how-much-many-30",
      "a1-articles-quantifiers-some-any-how-much-many-31",
      "a1-articles-quantifiers-some-any-how-much-many-32",
      "a1-articles-quantifiers-some-any-how-much-many-33",
      "a1-articles-quantifiers-some-any-how-much-many-34",
      "a1-articles-quantifiers-some-any-how-much-many-35",
      "a1-articles-quantifiers-some-any-how-much-many-36"
    ]
  }
];
