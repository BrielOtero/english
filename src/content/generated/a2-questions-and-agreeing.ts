import type { Exercise, PracticeStage } from '@/types';

// AUTO-GENERATED — verified tap-only practice for "a2-questions-and-agreeing". Do not hand-edit.
export const exercises: Exercise[] = [
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-1",
    "prompt": "Your sister is a nurse, ___?",
    "options": [
      "isn't she",
      "isn't it",
      "doesn't she",
      "is she"
    ],
    "answer": 0,
    "explain": "The statement is positive with 'is', so the tag flips to negative and copies the same verb + pronoun 'she': 'isn't she?' ('doesn't she' needs a plain verb like 'works'; 'is she' keeps the wrong polarity.)"
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-2",
    "statement": "You're not the manager here, are you?",
    "answer": true,
    "explain": "Correct. The statement is negative ('You're not'), so the tag flips to positive and copies 'are' with 'you': 'are you?'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-3",
    "before": "The new office isn't very big,",
    "after": "?",
    "options": [
      "is it",
      "isn't it",
      "does it"
    ],
    "answer": 0,
    "explain": "The statement is negative ('isn't'), so the tag flips to positive and copies 'is' with 'it': 'is it?'"
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-question-tags-4",
    "words": [
      "You",
      "work",
      "night",
      "shifts,",
      "don't",
      "you?",
      "aren't"
    ],
    "answer": "You work night shifts, don't you?",
    "explain": "Present simple with no auxiliary and a positive statement, so the tag uses 'do' made negative: 'don't you?' The 'aren't' tile is a trap — you'd only use 'be' if the statement had 'are'."
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-question-tags-5",
    "pairs": [
      [
        "You're an engineer,",
        "aren't you?"
      ],
      [
        "He works from home,",
        "doesn't he?"
      ],
      [
        "They didn't get the job,",
        "did they?"
      ],
      [
        "She can drive a forklift,",
        "can't she?"
      ]
    ],
    "explain": "Each tag copies the auxiliary and tense, then flips polarity: 'are'→'aren't', present simple 'works'→'doesn't', negative 'didn't'→positive 'did', 'can'→'can't'."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-question-tags-6",
    "prompt": "Tap every sentence with the correct question tag.",
    "options": [
      "We start at nine, don't we?",
      "She isn't your colleague, is she?",
      "He's a chef, is he?",
      "They work overtime, doesn't they?",
      "The interview went well, didn't it?"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "Correct tags flip polarity and match the subject: 'don't we?', 'is she?', 'didn't it?'. 'He's a chef, is he?' should be 'isn't he?', and 'They work overtime' needs 'don't they?', not 'doesn't they?'"
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-question-tags-7",
    "words": [
      "He",
      "doesn't",
      "work",
      "weekends,",
      "does",
      "not",
      "he?"
    ],
    "remove": [
      5
    ],
    "explain": "The statement is negative, so the tag flips to positive: 'does he?' Adding 'not' back makes it negative again — remove it."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-8",
    "prompt": "The engineers finished the project, ___?",
    "options": [
      "didn't they",
      "don't they",
      "haven't they",
      "didn't them"
    ],
    "answer": 0,
    "explain": "'finished' is past simple with no auxiliary, so the tag uses 'did' made negative, and 'the engineers' becomes 'they': 'didn't they?'"
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-9",
    "statement": "The receptionist can speak French, can she?",
    "answer": false,
    "explain": "Wrong polarity. The statement is positive, so the tag must be negative: 'can't she?' You copy 'can' but flip it."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-10",
    "before": "You've worked here for years,",
    "after": "?",
    "options": [
      "haven't you",
      "don't you",
      "aren't you"
    ],
    "answer": 0,
    "explain": "'You've worked' is present perfect, built with 'have'. Copy that auxiliary and flip to negative: 'haven't you?'"
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-question-tags-11",
    "words": [
      "Your",
      "parents",
      "were",
      "born",
      "in",
      "Italy",
      "weren't",
      "they",
      "wasn't",
      "aren't"
    ],
    "answer": "Your parents were born in Italy, weren't they?",
    "explain": "Positive statement with past 'were' → negative tag copying the same tense: 'weren't they?' 'They' matches 'your parents'."
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-question-tags-12",
    "pairs": [
      [
        "Your dad can cook,",
        "can't he?"
      ],
      [
        "Your sisters are twins,",
        "aren't they?"
      ],
      [
        "Grandpa doesn't drive,",
        "does he?"
      ],
      [
        "You have met my wife,",
        "haven't you?"
      ]
    ],
    "explain": "Each tag copies the auxiliary and flips polarity, with a pronoun matching the subject: 'can'→'can't', 'are'→'aren't', 'doesn't'→'does', 'have'→'haven't'."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-question-tags-13",
    "prompt": "Tap every sentence that has the correct question tag.",
    "options": [
      "Your niece is adorable, isn't she?",
      "Your brothers get on well, don't they?",
      "Your husband isn't from here, isn't he?",
      "Your aunt was a teacher, wasn't she?",
      "Your cousins can speak French, can't it?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "A correct tag flips polarity and copies the auxiliary with a matching pronoun. 'isn't from here' needs 'is he?', and 'your cousins' is 'they', so 'can't they?'"
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-question-tags-14",
    "words": [
      "Your",
      "uncle",
      "isn't",
      "coming,",
      "is",
      "he",
      "coming?"
    ],
    "remove": [
      6
    ],
    "explain": "A tag repeats only the auxiliary and pronoun ('is he?'), never the main verb, so the second 'coming' must go."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-15",
    "prompt": "I'm your new supervisor, ___?",
    "options": [
      "aren't I",
      "amn't I",
      "am not I",
      "aren't you"
    ],
    "answer": 0,
    "explain": "'I am' has one fixed tag: 'aren't I?' English has no 'amn't', and the pronoun must stay 'I' to match the subject."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-16",
    "statement": "Your grandmother is 80, isn't it?",
    "answer": false,
    "explain": "The tag copies 'is' and flips polarity correctly, but the pronoun is wrong. 'Your grandmother' is 'she', so it should be 'isn't she?'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-17",
    "before": "The warehouse team will finish by five,",
    "after": "?",
    "options": [
      "won't they",
      "will they",
      "don't they"
    ],
    "answer": 0,
    "explain": "'will finish' is future with 'will', so copy it and flip to negative: 'won't they?' ('team' is treated as 'they'.)"
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-question-tags-18",
    "words": [
      "Your",
      "cousin",
      "hasn't",
      "called",
      "you",
      "back",
      "has",
      "she",
      "have",
      "did"
    ],
    "answer": "Your cousin hasn't called you back, has she?",
    "explain": "Negative statement with 'hasn't' → positive tag copying the same auxiliary: 'has she?'"
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-question-tags-19",
    "pairs": [
      [
        "The fridge is empty,",
        "isn't it?"
      ],
      [
        "You bought the mirror here,",
        "didn't you?"
      ],
      [
        "We can't open this window,",
        "can we?"
      ],
      [
        "They have cleaned the whole flat,",
        "haven't they?"
      ]
    ],
    "explain": "Copy the verb/auxiliary and flip polarity: 'is'→'isn't it', past 'bought'→'didn't you', 'can't'→'can we', 'have'→'haven't they'."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-question-tags-20",
    "prompt": "Tap every sentence with the correct question tag.",
    "options": [
      "The library opens on Sundays, doesn't it?",
      "You left your keys at the office, didn't you?",
      "Your phone rings a lot, isn't it?",
      "The heater isn't working, isn't it?",
      "We can park behind the shop, can't we?"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "Copy the right auxiliary and flip polarity. 'rings' needs do-support → 'doesn't it?', and 'isn't working' is already negative → 'is it?', so options 3 and 4 are wrong."
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-question-tags-21",
    "words": [
      "That",
      "bag",
      "is",
      "heavy,",
      "isn't",
      "is",
      "it?"
    ],
    "remove": [
      5
    ],
    "explain": "The tag copies 'is' just once and flips it: 'isn't it?' The second 'is' is extra."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-22",
    "prompt": "Your grandparents have moved house, ___",
    "options": [
      "haven't they?",
      "didn't they?",
      "haven't them?",
      "don't they?"
    ],
    "answer": 0,
    "explain": "The statement uses 'have' (present perfect), so copy it and flip: 'haven't they?' The subject pronoun is 'they', never the object 'them'."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-23",
    "statement": "You'll call your mum tonight, won't you?",
    "answer": true,
    "explain": "'You'll' = 'you will', a positive statement, so the tag flips to negative and copies 'will': 'won't you?' Correct."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-24",
    "before": "Your cousins aren't twins,",
    "after": "they?",
    "options": [
      "are",
      "aren't",
      "do"
    ],
    "answer": 0,
    "explain": "The statement is negative ('aren't'), so the tag flips to positive and copies the auxiliary: 'are they?'"
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-question-tags-25",
    "words": [
      "The",
      "lift",
      "isn't",
      "working,",
      "is",
      "it",
      "does"
    ],
    "answer": "The lift isn't working, is it?",
    "explain": "A negative statement ('isn't working') takes a positive tag: copy 'is' and add 'it' → 'is it?' The 'does' tile isn't needed because the verb is already 'is'."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-26",
    "prompt": "Your in-laws don't visit often, ___",
    "options": [
      "do they?",
      "don't they?",
      "aren't they?",
      "do them?"
    ],
    "answer": 0,
    "explain": "The statement is negative ('don't'), so the tag flips to positive and copies the auxiliary: 'do they?' 'Them' is an object pronoun, so it can't be the tag's subject."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-27",
    "statement": "The bakery opens early, isn't it?",
    "answer": false,
    "explain": "'opens' is a present simple main verb, so there is no 'be' to copy — the tag uses do-support: 'doesn't it?', not 'isn't it?'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-28",
    "before": "I'm your favourite uncle,",
    "after": "I?",
    "options": [
      "aren't",
      "amn't",
      "am"
    ],
    "answer": 0,
    "explain": "'I am' has a special tag: we say 'aren't I?' There is no 'amn't' in standard English."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-question-tags-29",
    "words": [
      "There's",
      "a",
      "chair",
      "in",
      "the",
      "corner,",
      "isn't",
      "there",
      "it"
    ],
    "answer": "There's a chair in the corner, isn't there?",
    "explain": "With 'There's...', the tag keeps 'there', not 'it': positive statement → negative tag → 'isn't there?'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-30",
    "prompt": "That's a lovely little bookshop, ___?",
    "options": [
      "isn't it",
      "doesn't it",
      "isn't there",
      "is it"
    ],
    "answer": 0,
    "explain": "'That's' = 'that is' — a positive statement, so the tag flips to negative and copies 'is' with 'it': 'isn't it?'"
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-question-tags-31",
    "statement": "You haven't seen my glasses anywhere, have you?",
    "answer": true,
    "explain": "Correct: a negative statement ('haven't seen') takes a positive tag, and we copy the auxiliary 'have' → 'have you?'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-32",
    "before": "You keep the umbrellas by the front door,",
    "after": "you?",
    "options": [
      "don't",
      "aren't",
      "haven't"
    ],
    "answer": 0,
    "explain": "'keep' is a present simple main verb with no auxiliary, so the tag needs do-support: positive statement → negative tag → 'don't you?'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-33",
    "prompt": "We left the shopping bags on the bus, ___?",
    "options": [
      "didn't we",
      "don't we",
      "did we",
      "weren't we"
    ],
    "answer": 0,
    "explain": "'left' is past simple with no auxiliary, so the tag uses 'did'. Positive statement → negative tag → 'didn't we?'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-question-tags-34",
    "before": "You can reach the top shelf,",
    "after": "you?",
    "options": [
      "can't",
      "don't",
      "aren't"
    ],
    "answer": 0,
    "explain": "The statement uses the modal 'can', so the tag repeats it and flips it: positive → negative → 'can't you?'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-question-tags-35",
    "prompt": "The museum isn't open on Mondays, ___?",
    "options": [
      "is it",
      "isn't it",
      "does it",
      "was it"
    ],
    "answer": 0,
    "explain": "The statement is negative ('isn't open'), so the tag is positive and copies 'is' with 'it': 'is it?'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-1",
    "prompt": "___ the sales team at your company?",
    "options": [
      "Who manages",
      "Who does manage",
      "Who do manage"
    ],
    "answer": 0,
    "explain": "Who is the subject (the person doing the action), so we ask directly with no does: \"Who manages the sales team?\" The verb keeps its -s ending."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-2",
    "statement": "Who did answer the phone in the office this morning?",
    "answer": false,
    "explain": "Wrong. Who is the subject here, so we drop did and put the verb in the past form: \"Who answered the phone in the office this morning?\""
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-3",
    "before": "What",
    "after": "at the meeting yesterday?",
    "options": [
      "happened",
      "did happen",
      "happen"
    ],
    "answer": 0,
    "explain": "What is the subject, so no did: \"What happened at the meeting yesterday?\" The verb goes straight into the past form."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-subject-questions-4",
    "words": [
      "Who",
      "trains",
      "the",
      "new",
      "employees",
      "do"
    ],
    "answer": "Who trains the new employees?",
    "explain": "Who is the subject, so we ask directly with the -s form and no do: \"Who trains the new employees?\" do is the distractor."
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-5",
    "words": [
      "Who",
      "does",
      "runs",
      "the",
      "London",
      "office?"
    ],
    "remove": [
      1
    ],
    "explain": "In a subject question Who takes no does. Remove it and keep the -s form: \"Who runs the London office?\""
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-subject-questions-6",
    "pairs": [
      [
        "Who fixed the printer?",
        "The IT technician did."
      ],
      [
        "What broke down in the office?",
        "The coffee machine did."
      ],
      [
        "Who runs this restaurant?",
        "My aunt does."
      ],
      [
        "What went wrong with the order?",
        "The delivery address."
      ]
    ],
    "explain": "Subject questions ask who or what does the action, with no do/does/did in the question. The short answer, though, does use an auxiliary (did / does)."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-subject-questions-7",
    "prompt": "Tap every correct subject question.",
    "options": [
      "Who wants a coffee?",
      "What happened to the report?",
      "Who did calls you?",
      "Who hired the new manager?",
      "What does happens next?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Subject questions have no do/does/did: \"Who wants...\", \"What happened...\", \"Who hired...\". \"Who did calls\" and \"What does happens\" wrongly add an auxiliary."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-8",
    "prompt": "You want to know the person who leads the project. Which question is correct?",
    "options": [
      "Who does lead the project?",
      "Who leads the project?",
      "Who does the project lead?"
    ],
    "answer": 1,
    "explain": "Who is the subject, so no does and the verb keeps -s: \"Who leads the project?\""
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-9",
    "statement": "Who owns the bakery on the corner?",
    "answer": true,
    "explain": "Correct. Who is the subject, so we ask directly with the -s form (owns) and no does."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-10",
    "before": "Who",
    "after": "the night shift at the hospital?",
    "options": [
      "works",
      "work",
      "does work"
    ],
    "answer": 0,
    "explain": "Who is the subject, so use the -s form with no does: \"Who works the night shift at the hospital?\""
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-subject-questions-11",
    "words": [
      "What",
      "caused",
      "the",
      "delay",
      "did"
    ],
    "answer": "What caused the delay?",
    "explain": "What is the subject, so we drop did and put the verb straight into the past: \"What caused the delay?\" did is the distractor."
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-12",
    "words": [
      "Who",
      "did",
      "paid",
      "for",
      "the",
      "taxi?"
    ],
    "remove": [
      1
    ],
    "explain": "Who is the subject, so remove did and keep the past form: \"Who paid for the taxi?\""
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-13",
    "prompt": "___ takes care of the baby while your sister is at work?",
    "options": [
      "Who",
      "Who does",
      "Who do"
    ],
    "answer": 0,
    "explain": "The question word is the subject here, so there is no do/does. The verb already carries the -s: \"Who takes care of the baby?\""
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-14",
    "statement": "Who cooked dinner for the whole family last night?",
    "answer": true,
    "explain": "Correct. \"Who\" is the subject, so we drop \"did\" and the past sits in the verb: \"Who cooked...?\" (Compare the object question \"Who did you cook for?\")"
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-15",
    "statement": "Who did phoned Grandma this morning?",
    "answer": false,
    "explain": "Wrong on two counts. In a subject question you don't add \"did,\" and the verb isn't in the past either — say \"Who phoned Grandma this morning?\""
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-16",
    "before": "Something smells amazing — who",
    "after": "the cake for Grandma's birthday?",
    "options": [
      "baked",
      "did baked",
      "bake"
    ],
    "answer": 0,
    "explain": "\"Who\" is the subject, so use the plain past verb with no \"did\": \"Who baked the cake?\" \"did baked\" doubles the past, and \"bake\" is missing its ending."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-17",
    "before": "Your cousins look so alike. Which one",
    "after": "in London, and which one lives here?",
    "options": [
      "lives",
      "do live",
      "does live"
    ],
    "answer": 0,
    "explain": "\"Which one\" is the subject, so no do/does — keep the third-person -s: \"Which one lives in London?\" The second half of the sentence shows the same pattern: \"which one lives here.\""
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-18",
    "prompt": "___ the family photos at the reunion?",
    "options": [
      "Who took",
      "Who did took",
      "Who taked"
    ],
    "answer": 0,
    "explain": "Subject question: no \"did,\" and the past lives in the irregular verb \"took.\" \"did took\" doubles the past, and \"taked\" isn't a real past form."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-subject-questions-19",
    "prompt": "Tap every correct subject question.",
    "options": [
      "Who wants to sit next to Grandpa?",
      "What happened at your brother's party?",
      "Who does takes care of the twins?",
      "Who looks after your little nephew?",
      "What did happened to the wedding cake?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Subject questions use no do/does/did and keep the plain verb (wants, happened, looks). The wrong ones double-mark the verb — say \"Who takes care of the twins?\" and \"What happened to the wedding cake?\""
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-subject-questions-20",
    "words": [
      "Who",
      "broke",
      "Grandma's",
      "window",
      "yesterday",
      "did",
      "does"
    ],
    "answer": "Who broke Grandma's window yesterday?",
    "explain": "\"Who\" is the subject, so leave out \"did\"/\"does\" — the past is already in \"broke\": \"Who broke Grandma's window yesterday?\""
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-subject-questions-21",
    "words": [
      "Who",
      "lives",
      "with",
      "your",
      "grandparents",
      "now",
      "does",
      "live"
    ],
    "answer": "Who lives with your grandparents now?",
    "explain": "A subject question keeps the third-person -s and drops the auxiliary: \"Who lives...?\" — not \"Who does live.\""
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-22",
    "words": [
      "Who",
      "did",
      "invited",
      "your",
      "cousins",
      "to",
      "the",
      "wedding?"
    ],
    "remove": [
      1
    ],
    "explain": "\"Who\" is the subject, so tap away \"did\" — the past already sits in \"invited\": \"Who invited your cousins to the wedding?\""
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-23",
    "words": [
      "What",
      "does",
      "makes",
      "your",
      "brother",
      "so",
      "angry?"
    ],
    "remove": [
      1
    ],
    "explain": "\"What\" is the subject, so remove \"does\" and keep the -s on the verb: \"What makes your brother so angry?\""
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-subject-questions-24",
    "pairs": [
      [
        "Who cooks the Sunday roast?",
        "My mum does."
      ],
      [
        "Who fixed your bike?",
        "My uncle did."
      ],
      [
        "Who lives upstairs?",
        "My grandparents do."
      ],
      [
        "Who called this morning?",
        "My cousin did."
      ]
    ],
    "explain": "Subject questions (\"Who + verb...?\") carry no do/does/did — that auxiliary shows up only in the short answer (does / did / do) that names who did it."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-25",
    "prompt": "___ these keys on the kitchen counter? — Sorry, that was me.",
    "options": [
      "Who left",
      "Who did leave",
      "Who did left"
    ],
    "answer": 0,
    "explain": "When Who is the subject, there's no do/does/did — the verb goes straight into the past: \"Who left...?\" \"Who did leave/left\" wrongly adds an auxiliary to a subject question."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-26",
    "prompt": "What ___ that rattling noise inside the washing machine?",
    "options": [
      "makes",
      "does make",
      "make"
    ],
    "answer": 0,
    "explain": "What is the subject here, so use the verb directly and keep the third-person -s: \"What makes...?\" \"does make\" adds a wrong auxiliary, and \"make\" drops the -s."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-27",
    "statement": "Who did break the lamp in the hallway?",
    "answer": false,
    "explain": "A subject question takes no did. Because Who is the subject, use the past form alone: \"Who broke the lamp in the hallway?\""
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-subject-questions-28",
    "statement": "What fell off the bookshelf last night?",
    "answer": true,
    "explain": "Correct. What is the subject, so the verb comes straight after with no do/does/did: \"What fell off the bookshelf?\""
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-29",
    "before": "Who",
    "after": "the fridge door open all night?",
    "options": [
      "left",
      "did leave",
      "did left"
    ],
    "answer": 0,
    "explain": "Who is the subject, so no did is needed — just the past form: \"Who left the fridge door open?\" The \"did\" options belong to object questions, not subject ones."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-subject-questions-30",
    "before": "What",
    "after": "in here? The whole kitchen stinks.",
    "options": [
      "smells",
      "does smell",
      "smell"
    ],
    "answer": 0,
    "explain": "What is the subject, so use the verb directly with third-person -s: \"What smells in here?\" No auxiliary, and don't drop the -s."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-subject-questions-31",
    "prompt": "Tap every correct subject question (Who/What asking about the subject, with no do/does/did).",
    "options": [
      "Who lives in the flat above yours?",
      "Who did call the office this morning?",
      "What happened to my blue umbrella?",
      "Who took the towels from the bathroom?",
      "What did fall behind the wardrobe?"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "In a subject question the verb follows Who/What directly: \"Who lives...\", \"What happened...\", \"Who took...\". The wrong ones stick in did — say \"Who called...?\" and \"What fell behind the wardrobe?\""
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-subject-questions-32",
    "words": [
      "Who",
      "broke",
      "the",
      "office",
      "window",
      "did",
      "was"
    ],
    "answer": "Who broke the office window?",
    "explain": "Who is the subject, so use the past form with no auxiliary: \"Who broke the office window?\" The distractors \"did\" and \"was\" don't belong in a subject question."
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-33",
    "words": [
      "Who",
      "did",
      "found",
      "my",
      "phone",
      "under",
      "the",
      "sofa?"
    ],
    "remove": [
      1
    ],
    "explain": "Subject questions have no did. Remove it and the past form \"found\" stands alone: \"Who found my phone under the sofa?\""
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-subject-questions-34",
    "words": [
      "Who",
      "does",
      "wants",
      "the",
      "last",
      "seat",
      "on",
      "the",
      "bus?"
    ],
    "remove": [
      1
    ],
    "explain": "With Who as the subject there's no does — just the verb with -s: \"Who wants the last seat on the bus?\""
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-subject-questions-35",
    "pairs": [
      [
        "Who cooked this pasta?",
        "My roommate did."
      ],
      [
        "What broke the window?",
        "A football."
      ],
      [
        "Who lives next door?",
        "An older couple."
      ],
      [
        "What woke the baby?",
        "The doorbell."
      ]
    ],
    "explain": "Each is a subject question — Who/What is the subject, so there's no do/does/did, and the answer simply names that subject (My roommate, A football, An older couple, The doorbell)."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-subject-questions-36",
    "prompt": "___ to your umbrella? It's completely bent.",
    "options": [
      "What happened",
      "What did happen",
      "What happen"
    ],
    "answer": 0,
    "explain": "What is the subject, so the verb goes straight into the past with no auxiliary: \"What happened to your umbrella?\" \"did happen\" adds a wrong auxiliary and \"happen\" is missing the past ending."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-1",
    "prompt": "A: I work from home on Fridays. B: ___",
    "options": [
      "So do I.",
      "So am I.",
      "Neither do I."
    ],
    "answer": 0,
    "explain": "The statement is positive and uses the present simple (work), so the matching auxiliary is do: 'So do I.' 'So am I' would need the verb be, and Neither only agrees with a negative."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-2",
    "statement": "To agree with 'I don't like night shifts,' you say 'Neither don't I.'",
    "answer": false,
    "explain": "Neither is already negative, so the auxiliary stays positive: 'Neither do I.' 'Neither don't I' is a double negative."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-3",
    "before": "A: I'm a software developer. B: So",
    "after": "I.",
    "options": [
      "am",
      "do",
      "is"
    ],
    "answer": 0,
    "explain": "'I'm' uses the verb be, so agree with the same auxiliary: 'So am I.' Use 'do' only with present-simple verbs, and 'is' would need the subject he/she/it."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-so-neither-4",
    "words": [
      "Neither",
      "have",
      "I",
      "has",
      "so"
    ],
    "answer": "Neither have I.",
    "explain": "Agreeing with a negative present-perfect statement like 'I haven't clocked out yet': Neither + have + I. 'has' would need he/she, and 'so' is only for positives."
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-so-neither-5",
    "pairs": [
      [
        "A: I'm a nurse.",
        "So am I."
      ],
      [
        "A: I don't like Mondays.",
        "Neither do I."
      ],
      [
        "A: I worked overtime.",
        "So did I."
      ],
      [
        "A: I can't type fast.",
        "Neither can I."
      ]
    ],
    "explain": "Match both the auxiliary and the polarity: 'I'm' (be) → So am I; 'don't like' (negative) → Neither do I; 'worked' (past) → So did I; 'can't' (negative modal) → Neither can I."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-so-neither-6",
    "prompt": "Tap every reply that agrees correctly.",
    "options": [
      "A: I love my job. B: So do I.",
      "A: I can't drive a van. B: Neither can I.",
      "A: I'm a chef. B: So do I.",
      "A: I don't work weekends. B: So do I.",
      "A: We finished the shift early. B: So did we."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "So + auxiliary agrees with positives (So do I / So did we); Neither + auxiliary agrees with negatives (Neither can I). 'I'm a chef' needs 'So am I' (be), and the negative 'I don't work weekends' needs 'Neither do I.'"
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-so-neither-7",
    "words": [
      "Neither",
      "does",
      "not",
      "my",
      "manager."
    ],
    "remove": [
      2
    ],
    "explain": "Neither already makes the reply negative, so drop 'not': 'Neither does my manager.' Keeping 'not' creates a double negative."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-8",
    "prompt": "A: I can use the new accounting software. B: ___",
    "options": [
      "So can I.",
      "So do I.",
      "So am I."
    ],
    "answer": 0,
    "explain": "Copy the auxiliary from the statement. With can, you agree using 'So can I' — not 'So do I' (that's for present-simple verbs) or 'So am I' (that's for be)."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-9",
    "statement": "To agree with 'I'm not a morning person,' you can say 'Neither am I.'",
    "answer": true,
    "explain": "Correct. A negative be-statement (I'm not) is matched with 'Neither am I' — Neither + be + subject, with the auxiliary in its positive form."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-10",
    "before": "A: I started my new job last week. B: So",
    "after": "I!",
    "options": [
      "did",
      "do",
      "have"
    ],
    "answer": 0,
    "explain": "'Started' is past simple, so the matching auxiliary is did: 'So did I.' 'do' is present, and 'have' would need a present-perfect statement like 'I've started.'"
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-so-neither-11",
    "words": [
      "Neither",
      "can",
      "my",
      "dad",
      "so",
      "does"
    ],
    "answer": "Neither can my dad.",
    "explain": "To agree with a negative statement about ability (My brother can't swim), use 'Neither + can + [subject].' Keep the auxiliary can — not does — and use Neither, not So, for a negative."
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-so-neither-12",
    "pairs": [
      [
        "'I love big family dinners.'",
        "So do I."
      ],
      [
        "'I'm an only child.'",
        "So am I."
      ],
      [
        "'I don't have any siblings.'",
        "Neither do I."
      ],
      [
        "'I can't remember my cousins' birthdays.'",
        "Neither can I."
      ]
    ],
    "explain": "Match the auxiliary and the polarity: love → So do I; I'm → So am I; don't have → Neither do I; can't → Neither can I."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-so-neither-13",
    "prompt": "Tap every reply that agrees correctly.",
    "options": [
      "'I miss my grandparents.' 'So do I.'",
      "'I'm not married.' 'Neither am I.'",
      "'I visited my in-laws last week.' 'So did I.'",
      "'I don't like big weddings.' 'So do I.'",
      "'I get on well with my mum.' 'So I do.'"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explain": "So agrees with positives and Neither with negatives, and the auxiliary must match and invert. 'don't like' needs 'Neither do I,' and it's 'So do I,' never 'So I do.'"
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-so-neither-14",
    "words": [
      "Neither",
      "also",
      "does",
      "my",
      "brother."
    ],
    "remove": [
      1
    ],
    "explain": "'Neither' already means 'also not,' so 'also' is redundant. Just say 'Neither does my brother.'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-15",
    "prompt": "A: I don't enjoy long meetings. B: ___",
    "options": [
      "Neither do I.",
      "So do I.",
      "Neither don't I."
    ],
    "answer": 0,
    "explain": "Agree with a negative using Neither + auxiliary + subject: 'Neither do I.' 'So do I' agrees with a positive, and 'Neither don't I' is a double negative — Neither is already negative."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-16",
    "statement": "'I don't get along with my cousin.' 'So do I.'",
    "answer": false,
    "explain": "You can't answer a negative with So. A negative statement needs 'Neither do I' (or 'Nor do I'). 'So do I' only agrees with positive statements."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-17",
    "before": "A: Sam doesn't work on Sundays. B: Neither",
    "after": "his sister.",
    "options": [
      "does",
      "do",
      "is"
    ],
    "answer": 0,
    "explain": "'Doesn't' is third-person present, so keep that auxiliary and make it positive after Neither: 'Neither does his sister.' Neither already carries the negative, so you never add n't."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-so-neither-18",
    "words": [
      "So",
      "is",
      "my",
      "whole",
      "family",
      "neither",
      "are"
    ],
    "answer": "So is my whole family.",
    "explain": "To agree with a positive be-statement (My cousin is proud of us), use 'So + is + [subject].' Match is and use So for a positive — not Neither."
  },
  {
    "kind": "match",
    "id": "a2-questions-and-agreeing-so-neither-19",
    "pairs": [
      [
        "'I like this cozy café.' Agree:",
        "So do I."
      ],
      [
        "'I don't have any cash.' Agree:",
        "Neither do I."
      ],
      [
        "'I went to the pharmacy.' Agree:",
        "So did I."
      ],
      [
        "'I can't reach the top shelf.' Agree:",
        "Neither can I."
      ]
    ],
    "explain": "Match the auxiliary and the polarity: positive -> So, negative -> Neither; present simple -> do, past -> did, and 'can' stays 'can'."
  },
  {
    "kind": "pickAll",
    "id": "a2-questions-and-agreeing-so-neither-20",
    "prompt": "Tap every short reply that agrees correctly.",
    "options": [
      "'I have a spare charger in my backpack.' 'So do I.'",
      "'I don't like this crowded supermarket.' 'Neither do I.'",
      "'I can carry the heavy box.' 'So can I.'",
      "'I left my wallet at the café.' 'So do I.'",
      "'I'm not ready to leave the park.' 'So am I.'"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explain": "0-2 match the auxiliary and polarity (do/do/can, So for positive, Neither for negative). '...left my wallet' is past, so it needs 'So did I'; 'I'm not ready' is negative, so it needs 'Neither am I'."
  },
  {
    "kind": "trim",
    "id": "a2-questions-and-agreeing-so-neither-21",
    "words": [
      "Neither",
      "do",
      "not",
      "I."
    ],
    "remove": [
      2
    ],
    "explain": "'Neither' already makes the reply negative, so a second negative 'not' is wrong. Keep a positive verb: 'Neither do I.'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-22",
    "prompt": "\"I really admire my older sister.\" \"___ — she's a brilliant role model.\"",
    "options": [
      "So do I",
      "So am I",
      "So I do",
      "Neither do I"
    ],
    "answer": 0,
    "explain": "A positive present-simple statement (admire → do) is agreed with \"So do I.\" Match the auxiliary do and keep it inverted — not \"So I do\" — and use So, not Neither, for a positive."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-23",
    "statement": "\"My dad has already met her boyfriend.\" \"So has my mum.\"",
    "answer": true,
    "explain": "Correct. The statement uses has (present perfect) and is positive, so agree with \"So has my mum\" — matching has and keeping the inverted word order."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-24",
    "before": "My cousins don't live nearby, and",
    "after": "does the rest of my family.",
    "options": [
      "neither",
      "so",
      "also"
    ],
    "answer": 0,
    "explain": "The first part is negative (don't live), so continue with \"and neither does...\" — matching does and staying negative. So is for positives, and \"also does\" isn't the agreement form."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-so-neither-25",
    "words": [
      "So",
      "have",
      "I",
      "has"
    ],
    "answer": "So have I.",
    "explain": "Agreeing with 'I've been to that new pharmacy' (present perfect): use 'So' for the positive, keep the order So + auxiliary + subject, and 'I' takes 'have', not 'has'."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-26",
    "prompt": "\"I'm really close to my little brother.\" \"___\"",
    "options": [
      "So am I",
      "So do I",
      "So I am",
      "Neither am I"
    ],
    "answer": 0,
    "explain": "The statement uses be (I'm), so match it: \"So am I.\" Not \"So do I\" (wrong auxiliary) and not \"So I am\" — the subject comes after the verb."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-27",
    "statement": "'I don't have my umbrella today.' 'Neither do I.'",
    "answer": true,
    "explain": "The statement is negative (don't have), so you agree with 'Neither' + auxiliary + subject. The auxiliary 'do' matches, and 'neither' carries the negative: 'Neither do I.'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-28",
    "before": "My wife grew up in a huge family, and",
    "after": "did I.",
    "options": [
      "so",
      "neither",
      "nor"
    ],
    "answer": 0,
    "explain": "A positive past-simple statement (grew up → did), so continue with \"and so did I,\" matching did and using so for a positive. Neither and nor are only for negatives."
  },
  {
    "kind": "build",
    "id": "a2-questions-and-agreeing-so-neither-29",
    "words": [
      "Neither",
      "did",
      "I",
      "does"
    ],
    "answer": "Neither did I.",
    "explain": "Agreeing with 'I didn't see the umbrella stand' (past negative): use 'Neither' for the negative, and match the past auxiliary 'did'. 'I' takes 'did', not 'does'."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-30",
    "prompt": "\"I can't stand my brother's snoring.\" \"___ — it keeps me awake too.\"",
    "options": [
      "Neither can I",
      "So can I",
      "Neither do I",
      "Neither can't I"
    ],
    "answer": 0,
    "explain": "A negative statement with can't → \"Neither can I.\" Match the auxiliary can and drop the negative after Neither — not \"Neither can't I\" (double negative) or \"Neither do I\" (wrong auxiliary)."
  },
  {
    "kind": "truefalse",
    "id": "a2-questions-and-agreeing-so-neither-31",
    "statement": "'I can't find the post office.' 'So can I.'",
    "answer": false,
    "explain": "The statement is negative (can't find), so you agree with 'Neither can I', not 'So can I'. 'So' is only for positive statements."
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-32",
    "before": "Anna: 'I love this cozy little bookshop.' Ben:",
    "after": "do I.",
    "options": [
      "So",
      "Neither",
      "Too"
    ],
    "answer": 0,
    "explain": "Anna's sentence is positive (I love), so you agree with 'So' + auxiliary + subject: 'So do I.' 'Neither' is only for negatives, and 'Too do I' is not a pattern."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-33",
    "prompt": "'I keep my keys in a drawer by the door.' 'So ___ I.'",
    "options": [
      "do",
      "am",
      "did",
      "have"
    ],
    "answer": 0,
    "explain": "The statement is present simple (keep), so the matching auxiliary is 'do', and 'So' agrees with a positive sentence: 'So do I.'"
  },
  {
    "kind": "tapCloze",
    "id": "a2-questions-and-agreeing-so-neither-34",
    "before": "Sam: 'I didn't bring an umbrella.' Mia: Neither",
    "after": "I.",
    "options": [
      "did",
      "do",
      "was"
    ],
    "answer": 0,
    "explain": "Sam's sentence is past simple (didn't bring), so the matching auxiliary is 'did': 'Neither did I.'"
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-35",
    "prompt": "'I'm early to the bus stop every day.' '___ am I.'",
    "options": [
      "So",
      "Neither",
      "Nor"
    ],
    "answer": 0,
    "explain": "The statement is positive (I'm early), so agree with 'So am I.' 'Neither' and 'Nor' are for negative statements."
  },
  {
    "kind": "mcq",
    "id": "a2-questions-and-agreeing-so-neither-36",
    "prompt": "'I don't have a charger for this old phone.' '___ do I.'",
    "options": [
      "So",
      "Neither",
      "Not"
    ],
    "answer": 1,
    "explain": "The statement is negative (don't have), so agree with 'Neither do I.' 'So' is for positive statements, and 'Not do I' is not a pattern."
  }
];

export const practice: PracticeStage[] = [
  {
    "focus": "Question tags",
    "ids": [
      "a2-questions-and-agreeing-question-tags-1",
      "a2-questions-and-agreeing-question-tags-2",
      "a2-questions-and-agreeing-question-tags-3",
      "a2-questions-and-agreeing-question-tags-4",
      "a2-questions-and-agreeing-question-tags-5",
      "a2-questions-and-agreeing-question-tags-6",
      "a2-questions-and-agreeing-question-tags-7",
      "a2-questions-and-agreeing-question-tags-8",
      "a2-questions-and-agreeing-question-tags-9",
      "a2-questions-and-agreeing-question-tags-10",
      "a2-questions-and-agreeing-question-tags-11",
      "a2-questions-and-agreeing-question-tags-12",
      "a2-questions-and-agreeing-question-tags-13",
      "a2-questions-and-agreeing-question-tags-14",
      "a2-questions-and-agreeing-question-tags-15",
      "a2-questions-and-agreeing-question-tags-16",
      "a2-questions-and-agreeing-question-tags-17",
      "a2-questions-and-agreeing-question-tags-18",
      "a2-questions-and-agreeing-question-tags-19",
      "a2-questions-and-agreeing-question-tags-20",
      "a2-questions-and-agreeing-question-tags-21",
      "a2-questions-and-agreeing-question-tags-22",
      "a2-questions-and-agreeing-question-tags-23",
      "a2-questions-and-agreeing-question-tags-24",
      "a2-questions-and-agreeing-question-tags-25",
      "a2-questions-and-agreeing-question-tags-26",
      "a2-questions-and-agreeing-question-tags-27",
      "a2-questions-and-agreeing-question-tags-28",
      "a2-questions-and-agreeing-question-tags-29",
      "a2-questions-and-agreeing-question-tags-30",
      "a2-questions-and-agreeing-question-tags-31",
      "a2-questions-and-agreeing-question-tags-32",
      "a2-questions-and-agreeing-question-tags-33",
      "a2-questions-and-agreeing-question-tags-34",
      "a2-questions-and-agreeing-question-tags-35"
    ]
  },
  {
    "focus": "Subject questions",
    "ids": [
      "a2-questions-and-agreeing-subject-questions-1",
      "a2-questions-and-agreeing-subject-questions-2",
      "a2-questions-and-agreeing-subject-questions-3",
      "a2-questions-and-agreeing-subject-questions-4",
      "a2-questions-and-agreeing-subject-questions-5",
      "a2-questions-and-agreeing-subject-questions-6",
      "a2-questions-and-agreeing-subject-questions-7",
      "a2-questions-and-agreeing-subject-questions-8",
      "a2-questions-and-agreeing-subject-questions-9",
      "a2-questions-and-agreeing-subject-questions-10",
      "a2-questions-and-agreeing-subject-questions-11",
      "a2-questions-and-agreeing-subject-questions-12",
      "a2-questions-and-agreeing-subject-questions-13",
      "a2-questions-and-agreeing-subject-questions-14",
      "a2-questions-and-agreeing-subject-questions-15",
      "a2-questions-and-agreeing-subject-questions-16",
      "a2-questions-and-agreeing-subject-questions-17",
      "a2-questions-and-agreeing-subject-questions-18",
      "a2-questions-and-agreeing-subject-questions-19",
      "a2-questions-and-agreeing-subject-questions-20",
      "a2-questions-and-agreeing-subject-questions-21",
      "a2-questions-and-agreeing-subject-questions-22",
      "a2-questions-and-agreeing-subject-questions-23",
      "a2-questions-and-agreeing-subject-questions-24",
      "a2-questions-and-agreeing-subject-questions-25",
      "a2-questions-and-agreeing-subject-questions-26",
      "a2-questions-and-agreeing-subject-questions-27",
      "a2-questions-and-agreeing-subject-questions-28",
      "a2-questions-and-agreeing-subject-questions-29",
      "a2-questions-and-agreeing-subject-questions-30",
      "a2-questions-and-agreeing-subject-questions-31",
      "a2-questions-and-agreeing-subject-questions-32",
      "a2-questions-and-agreeing-subject-questions-33",
      "a2-questions-and-agreeing-subject-questions-34",
      "a2-questions-and-agreeing-subject-questions-35",
      "a2-questions-and-agreeing-subject-questions-36"
    ]
  },
  {
    "focus": "so / neither",
    "ids": [
      "a2-questions-and-agreeing-so-neither-1",
      "a2-questions-and-agreeing-so-neither-2",
      "a2-questions-and-agreeing-so-neither-3",
      "a2-questions-and-agreeing-so-neither-4",
      "a2-questions-and-agreeing-so-neither-5",
      "a2-questions-and-agreeing-so-neither-6",
      "a2-questions-and-agreeing-so-neither-7",
      "a2-questions-and-agreeing-so-neither-8",
      "a2-questions-and-agreeing-so-neither-9",
      "a2-questions-and-agreeing-so-neither-10",
      "a2-questions-and-agreeing-so-neither-11",
      "a2-questions-and-agreeing-so-neither-12",
      "a2-questions-and-agreeing-so-neither-13",
      "a2-questions-and-agreeing-so-neither-14",
      "a2-questions-and-agreeing-so-neither-15",
      "a2-questions-and-agreeing-so-neither-16",
      "a2-questions-and-agreeing-so-neither-17",
      "a2-questions-and-agreeing-so-neither-18",
      "a2-questions-and-agreeing-so-neither-19",
      "a2-questions-and-agreeing-so-neither-20",
      "a2-questions-and-agreeing-so-neither-21",
      "a2-questions-and-agreeing-so-neither-22",
      "a2-questions-and-agreeing-so-neither-23",
      "a2-questions-and-agreeing-so-neither-24",
      "a2-questions-and-agreeing-so-neither-25",
      "a2-questions-and-agreeing-so-neither-26",
      "a2-questions-and-agreeing-so-neither-27",
      "a2-questions-and-agreeing-so-neither-28",
      "a2-questions-and-agreeing-so-neither-29",
      "a2-questions-and-agreeing-so-neither-30",
      "a2-questions-and-agreeing-so-neither-31",
      "a2-questions-and-agreeing-so-neither-32",
      "a2-questions-and-agreeing-so-neither-33",
      "a2-questions-and-agreeing-so-neither-34",
      "a2-questions-and-agreeing-so-neither-35",
      "a2-questions-and-agreeing-so-neither-36"
    ]
  }
];
