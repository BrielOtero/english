import type { Exercise, PracticeStage } from '@/types';

// AUTO-GENERATED — verified tap-only practice for "b1-indirect-questions-determiners". Do not hand-edit.
export const exercises: Exercise[] = [
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-1",
    "prompt": "Choose the correct indirect question.",
    "options": [
      "Do you know when does the shift start?",
      "Do you know when the shift starts?",
      "Do you know when starts the shift?",
      "Do you know when does start the shift?"
    ],
    "answer": 1,
    "explain": "'When the shift starts' is subject + verb, with the -s staying on the main verb. The others either add 'does' or put the verb before the subject — both belong to direct questions only."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-2",
    "before": "I was wondering",
    "after": "you have any openings for a graphic designer.",
    "options": [
      "if",
      "that",
      "do",
      "is"
    ],
    "answer": 0,
    "explain": "This is a yes/no question made polite, so it needs 'if' (or 'whether') to link the opener to the clause. 'That' introduces a statement, not a question."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-3",
    "statement": "Do you know where is the lift?",
    "answer": false,
    "explain": "Wrong order. It should be 'Do you know where the lift is?' — inside an indirect question the verb never jumps in front of the subject."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-4",
    "words": [
      "Could",
      "you",
      "tell",
      "me",
      "who",
      "the",
      "new",
      "supervisor",
      "is?",
      "does",
      "he"
    ],
    "answer": "Could you tell me who the new supervisor is?",
    "explain": "Statement order puts 'is' after the subject: 'who the new supervisor is'. 'does' and 'he' are the extras — you'd only need them in the direct question 'Who is the new supervisor?'"
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-indirect-questions-5",
    "words": [
      "Can",
      "you",
      "tell",
      "me",
      "where",
      "does",
      "the",
      "staff",
      "room",
      "is?"
    ],
    "remove": [
      5
    ],
    "explain": "Delete 'does'. Indirect questions never take the auxiliary 'do/does' — the opener already carries the question, so the rest stays a plain statement: 'where the staff room is'."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-indirect-questions-6",
    "pairs": [
      [
        "Where is the bank?",
        "where the bank is"
      ],
      [
        "What time does it open?",
        "what time it opens"
      ],
      [
        "Is the café open?",
        "if the café is open"
      ],
      [
        "How much does it cost?",
        "how much it costs"
      ]
    ],
    "explain": "After an opener like 'Could you tell me...', the subject comes before the verb and 'do/does' disappears. A yes/no question ('Is the café open?') needs 'if' or 'whether'."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-7",
    "prompt": "Could you tell me when the night shift ___?",
    "options": [
      "finishes",
      "does it finish",
      "finish"
    ],
    "answer": 0,
    "explain": "After an opener like 'Could you tell me', use statement order: subject + verb ('the night shift finishes'). Don't add 'does' or invert the verb — that only happens in direct questions ('When does the night shift finish?')."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-indirect-questions-8",
    "prompt": "Tap every indirect question that is formed correctly.",
    "options": [
      "Could you tell me what the dress code is?",
      "Do you know if the manager is in today?",
      "Can you tell me where is the warehouse?",
      "I'd like to know when do the interviews start.",
      "Do you know whether they offer remote work?"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "The correct ones keep statement order and use if/whether for yes/no questions. 'where is the warehouse' and 'when do the interviews start' still use direct-question word order — they need 'where the warehouse is' and 'when the interviews start'."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-9",
    "before": "Can you tell me how many people",
    "after": "in the marketing department?",
    "options": [
      "work",
      "do work",
      "do they work",
      "works"
    ],
    "answer": 0,
    "explain": "Statement order with no auxiliary: 'how many people work'. 'Do they work' inverts, and 'works' doesn't agree with the plural 'people'."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-10",
    "statement": "I'd like to know whether the position is still available.",
    "answer": true,
    "explain": "Correct: 'I'd like to know' is a polite opener, 'whether' handles the yes/no question, and 'the position is' keeps subject before verb."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-11",
    "words": [
      "Do",
      "you",
      "know",
      "whether",
      "the",
      "café",
      "is",
      "hiring?",
      "does",
      "it"
    ],
    "answer": "Do you know whether the café is hiring?",
    "explain": "A yes/no question needs 'whether' (or 'if') after the opener, then statement order: 'the café is hiring'. 'does' and 'it' are the extras."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-indirect-questions-12",
    "words": [
      "Do",
      "you",
      "know",
      "when",
      "does",
      "the",
      "library",
      "closes?"
    ],
    "remove": [
      4
    ],
    "explain": "Drop 'does' — indirect questions have no 'do/does/did'. The main verb already carries the -s: 'when the library closes'."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-13",
    "prompt": "I'm not sure ___ or not I should apply for the position.",
    "options": [
      "whether",
      "if",
      "that",
      "what"
    ],
    "answer": 0,
    "explain": "Only 'whether' can sit directly before 'or not'. 'If' works elsewhere ('I'm not sure if I should apply'), but 'if or not' is never possible."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-14",
    "before": "Do you know",
    "after": "the corner shop sells umbrellas?",
    "options": [
      "if",
      "does",
      "what",
      "which"
    ],
    "answer": 0,
    "explain": "A yes/no question ('Does the corner shop sell umbrellas?') becomes 'if' (or 'whether') + statement order. 'Does' drags back the question word order, and 'what'/'which' can't introduce a yes/no question."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-indirect-questions-15",
    "pairs": [
      [
        "Do you know ___ the office opens at eight?",
        "if"
      ],
      [
        "Could you tell me ___ the meeting room is?",
        "where"
      ],
      [
        "Do you know ___ manages the sales team?",
        "who"
      ],
      [
        "Can you tell me ___ the training lasts?",
        "how long"
      ]
    ],
    "explain": "Yes/no questions take 'if'; the others take a question word that matches the missing information — place ('where'), person ('who'), duration ('how long'). Notice every clause after the chip keeps statement order."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-16",
    "statement": "Can you tell me how old is your nephew?",
    "answer": false,
    "explain": "After the opener, use statement order: 'how old your nephew is'. An indirect question never keeps the inverted 'is your nephew'."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-17",
    "words": [
      "Could",
      "you",
      "tell",
      "me",
      "where",
      "the",
      "nearest",
      "cash",
      "machine",
      "is?",
      "does",
      "it"
    ],
    "answer": "Could you tell me where the nearest cash machine is?",
    "explain": "The verb 'is' goes at the end, after the subject 'the nearest cash machine'. The extras are 'does' (indirect questions take no auxiliary) and 'it' (the subject is already named)."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-indirect-questions-18",
    "prompt": "Tap every indirect question that is formed correctly.",
    "options": [
      "Could you tell me where your parents met?",
      "Do you know if my aunt has arrived yet?",
      "I wonder how many cousins do you have.",
      "Can I ask why is your brother upset?",
      "Would you mind telling me whether they're divorced?"
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "The correct ones keep statement order after the opener ('where your parents met', 'if my aunt has arrived', 'whether they're divorced'). The wrong ones hang on to direct-question shape: 'do you have' and 'is your brother'."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-19",
    "prompt": "Could you tell me where ___?",
    "options": [
      "your sister lives",
      "does your sister live",
      "lives your sister",
      "your sister does live"
    ],
    "answer": 0,
    "explain": "After an opener like 'Could you tell me', the question turns into a statement: subject + verb ('your sister lives'). Drop the inversion and the auxiliary 'does'."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-indirect-questions-20",
    "words": [
      "Do",
      "you",
      "know",
      "when",
      "does",
      "your",
      "sister",
      "is",
      "getting",
      "married?"
    ],
    "remove": [
      4
    ],
    "explain": "The opener 'Do you know' already carries the question, so the inner clause stays a statement: 'when your sister is getting married'. The extra auxiliary 'does' has to go."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-21",
    "before": "Do you know",
    "after": "your cousin is bringing her boyfriend to the wedding?",
    "options": [
      "if",
      "does",
      "is"
    ],
    "answer": 0,
    "explain": "A yes/no question links with 'if' (or 'whether'): 'Do you know if...'. 'Does' and 'is' would restart question word order, which indirect questions don't allow."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-22",
    "statement": "Do you know how long has she worked at the factory?",
    "answer": false,
    "explain": "Wrong: this keeps the inverted 'has she' from the direct question. It should be 'Do you know how long she has worked at the factory?' — subject before verb, statement order."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-23",
    "words": [
      "I",
      "wonder",
      "whether",
      "my",
      "parents",
      "will",
      "approve",
      "of",
      "him.",
      "do",
      "they"
    ],
    "answer": "I wonder whether my parents will approve of him.",
    "explain": "After 'I wonder', use 'whether' (or 'if') plus statement order: subject 'my parents' + 'will approve'. 'Do' and 'they' belong to a direct question — 'Will they approve of him?'"
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-indirect-questions-24",
    "pairs": [
      [
        "Do you know ___ your sister is coming?",
        "if"
      ],
      [
        "Could you tell me ___ they got married?",
        "when"
      ],
      [
        "I wonder ___ many siblings she has.",
        "how"
      ],
      [
        "Can I ask ___ you're not speaking to him?",
        "why"
      ]
    ],
    "explain": "Pick the link word the answer needs: a yes/no answer takes 'if', a date takes 'when', a quantity takes 'how' (+ many), a reason takes 'why'. The opener never changes — only the link word does."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-25",
    "prompt": "Which sentence is the polite, indirect version of 'Why did your parents move to Madrid?'",
    "options": [
      "Could you tell me why your parents moved to Madrid?",
      "Could you tell me why did your parents move to Madrid?",
      "Could you tell me why your parents did move to Madrid?",
      "Could you tell me why moved your parents to Madrid?"
    ],
    "answer": 0,
    "explain": "The auxiliary 'did' disappears and its past tense moves onto the main verb: 'moved'. What's left is plain statement order — 'why your parents moved'."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-26",
    "before": "Do you have any idea why",
    "after": "with her stepmother?",
    "options": [
      "Emma doesn't get on",
      "doesn't Emma get on",
      "does Emma not get on"
    ],
    "answer": 0,
    "explain": "After 'Do you have any idea why', use statement order: subject 'Emma' + verb 'doesn't get on'. Both inverted options belong to a direct question."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-indirect-questions-27",
    "prompt": "Tap every correctly formed indirect question.",
    "options": [
      "Could you tell me where the post office is?",
      "Do you know when does the museum open?",
      "I wonder if this bus stops at the station.",
      "Can you tell me how much these shoes cost?",
      "Do you know where is the car park?"
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "The correct ones keep statement order with no auxiliary: 'the post office is', 'this bus stops', 'these shoes cost'. 'when does the museum open' and 'where is the car park' slip back into direct question order."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-indirect-questions-28",
    "words": [
      "Would",
      "you",
      "mind",
      "telling",
      "me",
      "how",
      "did",
      "you",
      "two",
      "met?"
    ],
    "remove": [
      6
    ],
    "explain": "'Would you mind telling me' is the question part; the rest is a statement — 'how you two met'. 'Did' is left over from the direct question 'How did you two meet?'"
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-29",
    "statement": "I'd like to know whether your grandparents still live together.",
    "answer": true,
    "explain": "Correct: 'I'd like to know' + 'whether' + statement order ('your grandparents still live'). 'Whether' fits because there's a yes/no question underneath."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-30",
    "words": [
      "Do",
      "you",
      "know",
      "whether",
      "your",
      "cousin",
      "has",
      "any",
      "children?",
      "does",
      "have"
    ],
    "answer": "Do you know whether your cousin has any children?",
    "explain": "The opener 'Do you know' takes the question mark; inside, use 'whether' + statement order ('your cousin has'). 'Does ... have' is direct-question shape, so those two chips stay out."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-31",
    "prompt": "Excuse me, could you tell me where the fitting rooms ___?",
    "options": [
      "are",
      "are they",
      "they are"
    ],
    "answer": 0,
    "explain": "After a polite opener, use statement order: subject ('the fitting rooms') + verb ('are'). Don't invert ('are they'), and don't add a second subject ('they are') — the noun is already there."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-indirect-questions-32",
    "before": "Could you tell me how much these headphones",
    "after": "in the sale?",
    "options": [
      "cost",
      "do cost",
      "do they cost",
      "does cost"
    ],
    "answer": 0,
    "explain": "No 'do/does' in an indirect question — the main verb stands alone: 'how much these headphones cost'. 'These headphones' is already the subject, so 'they' isn't needed either."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-indirect-questions-33",
    "words": [
      "Can",
      "you",
      "tell",
      "me",
      "where",
      "the",
      "lost",
      "property",
      "office",
      "it",
      "is?"
    ],
    "remove": [
      9
    ],
    "explain": "'The lost property office' is already the subject, so the extra 'it' has to go: 'where the lost property office is'."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-indirect-questions-34",
    "statement": "I wonder whether the launderette on the corner takes card payments.",
    "answer": true,
    "explain": "Correct: 'whether' introduces the yes/no question and the order stays statement-like — 'the launderette ... takes'. Note the full stop: 'I wonder...' is a statement, not a question."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-indirect-questions-35",
    "words": [
      "Do",
      "you",
      "know",
      "whether",
      "the",
      "pharmacy",
      "opens",
      "on",
      "Sundays?",
      "does",
      "it"
    ],
    "answer": "Do you know whether the pharmacy opens on Sundays?",
    "explain": "'Whether' (or 'if') introduces a yes/no question, then statement order follows: 'the pharmacy opens'. The extras are 'does' (never used here) and 'it' (the pharmacy is the subject)."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-indirect-questions-36",
    "prompt": "I'd like to know ___ or not the shop delivers.",
    "options": [
      "whether",
      "if",
      "that",
      "do"
    ],
    "answer": 0,
    "explain": "Only 'whether' can sit directly before 'or not': 'whether or not the shop delivers'. 'If or not' is impossible — with 'if' you'd have to say 'if the shop delivers or not'."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-1",
    "prompt": "My contract ends in June, so I'll have to look for ___ job.",
    "options": [
      "another",
      "other",
      "others",
      "the others"
    ],
    "answer": 0,
    "explain": "Another = an + other, so it goes before a singular noun and means 'one more / a different one'. Singular 'other job' needs 'the' in front, and others/the others are plural pronouns that can't sit before a noun."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-2",
    "before": "Some of my colleagues work from home;",
    "after": "commute into the office every day.",
    "options": [
      "others",
      "other",
      "another"
    ],
    "answer": 0,
    "explain": "Others is a plural pronoun meaning 'other people', so nothing follows it. 'Other' can't stand alone, and 'another' is singular."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-3",
    "statement": "We only shortlisted two applicants: one is a graphic designer and the other is a copywriter.",
    "answer": true,
    "explain": "When there are exactly two, the second one is 'the other' — specific, because only one is left. 'Another' would wrongly suggest more applicants are still in the running."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-another-other-4",
    "words": [
      "I'm",
      "applying",
      "for",
      "another",
      "position",
      "in",
      "a",
      "different",
      "department.",
      "other",
      "others"
    ],
    "answer": "I'm applying for another position in a different department.",
    "explain": "Another + singular noun (another position) means 'a different one'. 'Other' would need 'the' before a singular noun, and 'others' never sits in front of a noun — so both are extras."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-another-other-5",
    "pairs": [
      [
        "Would you like ___ biscuit, Grandad?",
        "another"
      ],
      [
        "One twin is shy; ___ twin is loud.",
        "the other"
      ],
      [
        "I've got some cousins here and ___ in Peru.",
        "others"
      ],
      [
        "Do you have any ___ relatives in the UK?",
        "other"
      ]
    ],
    "explain": "Pick by two questions: singular or plural, specific or not. Singular + non-specific = another; singular + specific = the other; plural pronoun = others; plural + noun = other."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-6",
    "prompt": "The office has two lifts: one goes up to reception and ___ goes down to the car park.",
    "options": [
      "the other",
      "another",
      "other",
      "others"
    ],
    "answer": 0,
    "explain": "With exactly two, the second is 'the other' — specific and singular, used here as a pronoun. 'Another' would imply there's a third lift somewhere."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-another-other-7",
    "words": [
      "I",
      "have",
      "another",
      "a",
      "meeting",
      "at",
      "four",
      "with",
      "the",
      "CFO."
    ],
    "remove": [
      3
    ],
    "explain": "Another already contains 'a' (an + other), so you never combine it with a/an/the. Just 'another meeting'."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-another-other-8",
    "prompt": "Tap every sentence that uses another, other or others correctly.",
    "options": [
      "I'd like another cup of coffee before my shift starts.",
      "Some interns stayed late; others left at five.",
      "She's looking for another jobs in marketing.",
      "Two people applied — one is a chef and the other is a waiter.",
      "Do you have any others questions for the panel?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Another takes a singular noun (another cup), others stands alone as a plural pronoun, and 'the other' is the second of two. 'Another jobs' and 'others questions' both break the pattern — plural nouns need plain 'other': other jobs, other questions."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-9",
    "before": "Besides accounting, the firm also offers",
    "after": "services such as tax advice.",
    "options": [
      "other",
      "another",
      "others"
    ],
    "answer": 0,
    "explain": "Other + plural noun (other services) for non-specific extras. Another is singular, and others is a pronoun that can't be followed by a noun."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-10",
    "statement": "The warehouse is expanding, so we're hiring another workers this autumn.",
    "answer": false,
    "explain": "Another is always singular: 'another worker' or 'more workers' / 'other workers'. Never another + plural noun."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-11",
    "prompt": "Only two of the six trainees passed the exam; ___ have to resit it in September.",
    "options": [
      "the others",
      "others",
      "another",
      "other"
    ],
    "answer": 0,
    "explain": "The others = the specific remaining ones (the four who failed), because the group is already defined. Plain 'others' would mean some unspecified other people."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-another-other-12",
    "words": [
      "Some",
      "staff",
      "took",
      "the",
      "early",
      "train",
      "and",
      "others",
      "drove.",
      "another",
      "other"
    ],
    "answer": "Some staff took the early train and others drove.",
    "explain": "Others replaces 'other staff' — a plural pronoun with no noun after it. 'Other' can't stand alone and 'another' is singular, so neither fits."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-13",
    "before": "Out of my five cousins, only Ana wrote back;",
    "after": "ignored the message.",
    "options": [
      "the others",
      "the other",
      "others",
      "another"
    ],
    "answer": 0,
    "explain": "The group of five is specific, and four are left, so use the plural pronoun 'the others'. 'The other' would mean just one, and 'others' without 'the' sounds like random unknown people."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-14",
    "statement": "I've got two sisters — one is a nurse and another is a lawyer.",
    "answer": false,
    "explain": "With exactly two, there's only one left, so it must be 'the other is a lawyer'. 'Another' means 'one more of several', which doesn't fit a set of two."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-another-other-15",
    "pairs": [
      [
        "Would you like ___ sandwich?",
        "another"
      ],
      [
        "Some benches are wet; ___ are dry.",
        "others"
      ],
      [
        "Are there ___ shops nearby?",
        "other"
      ],
      [
        "One shoe is here; ___ shoe is missing.",
        "the other"
      ]
    ],
    "explain": "Match by number and specificity: another + singular noun, other + plural noun, others = plural pronoun (no noun after), the other = the specific remaining one of two."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-16",
    "prompt": "My parents are staying with us for ___ two weeks.",
    "options": [
      "another",
      "other",
      "others"
    ],
    "answer": 0,
    "explain": "'Another' normally takes a singular noun, but a number + noun counts as one block: 'another two weeks' = two more weeks. Same with 'another three days', 'another few months'."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-another-other-17",
    "words": [
      "Some",
      "of",
      "my",
      "nieces",
      "speak",
      "Catalan;",
      "the",
      "others",
      "other",
      "speak",
      "only",
      "Spanish."
    ],
    "remove": [
      8
    ],
    "explain": "'The others' already is the pronoun for the remaining nieces, so 'other' is one word too many. Use 'other' only before a plural noun: 'the other nieces'."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-another-other-18",
    "prompt": "Tap every sentence that uses another/other correctly.",
    "options": [
      "Would you like another slice of my mum's cake?",
      "My grandparents have three other grandchildren besides me.",
      "Some cousins stayed for dinner; other left early.",
      "She has two daughters: one is married and another is single.",
      "My sister-in-law and the others are waiting outside."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "'Another slice' (singular, one more), 'other grandchildren' (plural noun) and 'the others' (pronoun for the rest) all work. 'Other left early' needs the pronoun 'others', and with two daughters the second must be 'the other'."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-19",
    "before": "I found one of my gloves under the sofa, but I still can't find",
    "after": "one.",
    "options": [
      "the other",
      "another",
      "other",
      "others"
    ],
    "answer": 0,
    "explain": "Gloves come in a pair, so once you've found one, the remaining one is specific: 'the other one'. 'Another one' would mean an extra, third glove."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-20",
    "statement": "Some of my relatives came by car; the others took the train.",
    "answer": true,
    "explain": "Correct. 'The others' is a plural pronoun for the rest of a known group — the relatives who didn't come by car. No noun needed after it."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-21",
    "prompt": "My cousin already has three kids, and now she's expecting ___ baby.",
    "options": [
      "another",
      "other",
      "an other",
      "others"
    ],
    "answer": 0,
    "explain": "'Another' = one more, and it goes with a singular noun: 'another baby'. Note it's always one word — 'an other' doesn't exist in English."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-another-other-22",
    "words": [
      "Do",
      "you",
      "have",
      "any",
      "other",
      "brothers",
      "or",
      "sisters?",
      "another",
      "others"
    ],
    "answer": "Do you have any other brothers or sisters?",
    "explain": "After 'any' with a plural noun, use 'other': 'any other brothers'. 'Another' is singular and never follows 'any', and 'others' can't take a noun after it."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-23",
    "before": "I have two grandmothers: one lives in Valencia and",
    "after": "one lives with us.",
    "options": [
      "the other",
      "another",
      "other",
      "others"
    ],
    "answer": 0,
    "explain": "With only two, the second one is specific — everyone knows which one is left — so it's 'the other'. 'Another' would suggest there are more grandmothers to choose from."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-24",
    "statement": "Another my cousin is coming to the wedding.",
    "answer": false,
    "explain": "'Another' can't sit next to a possessive like 'my'. Say 'Another cousin of mine is coming' or just 'Another cousin is coming'."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-another-other-25",
    "pairs": [
      [
        "Could you pass me ___ stapler? This one's jammed.",
        "another"
      ],
      [
        "There are two exits; ___ one is at the back.",
        "the other"
      ],
      [
        "Some staff work part-time; ___ work full-time.",
        "others"
      ],
      [
        "Are there any ___ vacancies in your team?",
        "other"
      ]
    ],
    "explain": "Another + singular noun; 'the other' + the specific remaining one of two; 'others' alone as a plural pronoun; 'other' + plural noun for non-specific extras. Look at the noun — or the lack of one — to pick the chip."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-26",
    "prompt": "This mug is chipped — could I have ___ one, please?",
    "options": [
      "another",
      "other",
      "others",
      "the others"
    ],
    "answer": 0,
    "explain": "Another = an + other, so it goes with a singular noun or 'one': 'another one'. 'Other' can't stand alone before 'one' here, and 'others'/'the others' are plural pronouns."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-another-other-27",
    "words": [
      "I'd",
      "like",
      "the",
      "another",
      "cup",
      "of",
      "tea,",
      "please."
    ],
    "remove": [
      2
    ],
    "explain": "Another already contains 'an', so it can never follow 'the'. Say 'another cup' — or 'the other cup' if you mean a specific second one."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-another-other-28",
    "prompt": "Tap every sentence that uses another / other / the other / others correctly.",
    "options": [
      "Some drawers were empty; others were full of cables.",
      "Can I borrow another chair from the kitchen?",
      "I have two keys — this one opens the gate and other opens the door.",
      "There are other cafés near the station if this one is full.",
      "Do you want another biscuits?"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Others is a plural pronoun (others were full); another takes a singular noun (another chair); other takes a plural noun (other cafés). 'Other opens' needs 'the other', and 'another biscuits' mixes a singular word with a plural noun."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-another-other-29",
    "before": "The bakery was closed, so we tried some",
    "after": "shops on the high street.",
    "options": [
      "other",
      "others",
      "another",
      "the other"
    ],
    "answer": 0,
    "explain": "Before a plural noun (shops), use 'other'. 'Others' is a pronoun and never takes a noun after it, and another/the other are singular."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-30",
    "statement": "There are two supermarkets on my street: one is cheap and another is expensive.",
    "answer": false,
    "explain": "With only two items, the second one is specific, so it must be 'the other is expensive'. Another means 'one more' from an open set."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-31",
    "prompt": "Some umbrellas fold up small; ___ are too bulky for a bag.",
    "options": [
      "others",
      "other",
      "another",
      "the other"
    ],
    "answer": 0,
    "explain": "This is a general statement about umbrellas, not a fixed group, so use the pronoun 'others'. 'Other' can't stand alone, and 'another'/'the other' are singular."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-another-other-32",
    "words": [
      "Some",
      "relatives",
      "arrived",
      "early",
      "and",
      "others",
      "turned",
      "up",
      "late.",
      "other",
      "another"
    ],
    "answer": "Some relatives arrived early and others turned up late.",
    "explain": "'Others' is the plural pronoun standing in for 'other relatives' — non-specific, so no 'the'. 'Other' can't stand alone, and 'another' is singular."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-another-other-33",
    "statement": "One of my keys opens the front door; the others are for the shed.",
    "answer": true,
    "explain": "Correct: 'my keys' is a known set, one is identified, so the remaining ones are 'the others' — used alone as a pronoun."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-another-other-34",
    "prompt": "This table is a bit wobbly. Shall we move to ___ one by the window?",
    "options": [
      "another",
      "other",
      "others",
      "the others"
    ],
    "answer": 0,
    "explain": "Another = 'a different one', singular and non-specific, so it fits before 'one'. Other needs a plural noun, and others/the others are plural pronouns."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-another-other-35",
    "words": [
      "Some",
      "of",
      "the",
      "mugs",
      "are",
      "clean,",
      "but",
      "the",
      "others",
      "ones",
      "are",
      "still",
      "dirty."
    ],
    "remove": [
      9
    ],
    "explain": "Others already means 'the other ones', so it can't take a noun after it. Say either 'the others are still dirty' or 'the other ones are still dirty'."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-another-other-36",
    "words": [
      "One",
      "of",
      "the",
      "lamps",
      "works",
      "but",
      "the",
      "others",
      "don't.",
      "other",
      "another"
    ],
    "answer": "One of the lamps works but the others don't.",
    "explain": "The lamps are a known group, so the remaining ones are 'the others' — a pronoun, no noun after it. 'Other' and 'another' are the extras: both need a noun to follow."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-1",
    "prompt": "___ of our receptionists speak Spanish, which really helps at the front desk.",
    "options": [
      "Both",
      "Either",
      "Neither",
      "Every"
    ],
    "answer": 0,
    "explain": "The plural verb \"speak\" and the positive meaning point to \"Both\" (= the two of them). \"Either\"/\"Neither\" take a singular verb (speaks), and \"Every\" can't be followed by \"of\"."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-2",
    "before": "I can work Saturday or Sunday —",
    "after": "day is fine with me.",
    "options": [
      "either",
      "both",
      "neither"
    ],
    "answer": 0,
    "explain": "\"Either + singular noun\" means \"one or the other, it doesn't matter\": either day is fine. \"Both\" needs a plural noun (both days), and \"neither\" would mean no day works."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-3",
    "statement": "Neither of the two offices has a proper kitchen.",
    "answer": true,
    "explain": "Correct: \"neither of\" means \"not one of the two\" and takes a singular verb — \"has\"."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-both-either-neither-4",
    "words": [
      "You",
      "can",
      "either",
      "take",
      "the",
      "bus",
      "or",
      "cycle",
      "to",
      "work.",
      "neither",
      "both"
    ],
    "answer": "You can either take the bus or cycle to work.",
    "explain": "\"Either\" pairs with \"or\" to offer two options. \"Neither\" pairs with \"nor\" (a negative idea) and \"both\" pairs with \"and\", so they're the extras."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-both-either-neither-5",
    "words": [
      "Neither",
      "of",
      "the",
      "two",
      "managers",
      "was",
      "not",
      "available."
    ],
    "remove": [
      6
    ],
    "explain": "\"Neither\" is already negative, so adding \"not\" creates a double negative. Correct: \"Neither of the two managers was available.\""
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-both-either-neither-6",
    "pairs": [
      [
        "Both of the parks ___ free.",
        "are"
      ],
      [
        "Neither of the parks ___ free.",
        "is"
      ],
      [
        "Both parks ___ a lake.",
        "have"
      ],
      [
        "Neither park ___ a lake.",
        "has"
      ]
    ],
    "explain": "Both is plural (are, have); neither is singular (is, has). The noun after 'of the...' never changes this — 'parks' is plural in all four, yet the neither sentences stay singular."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-7",
    "prompt": "Either the receptionists or the manager ___ going to call you back this afternoon.",
    "options": [
      "is",
      "are",
      "were",
      "be"
    ],
    "answer": 0,
    "explain": "With \"either A or B\", the verb agrees with the noun closest to it. Here that's \"the manager\" (singular), so \"is\" is correct."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-both-either-neither-8",
    "prompt": "Tap every sentence that uses both / either / neither correctly.",
    "options": [
      "Both of my bosses are on holiday this week.",
      "Neither of the applicants was suitable for the role.",
      "Either the plumber or the electrician are coming today.",
      "Both the chef and the waiter speaks French.",
      "You can either email us or call the office."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "\"Both of\" takes a plural verb (are) and \"neither of\" takes a singular verb (was). \"Either A or B\" agrees with the nearer noun — \"the electrician is\", not \"are\" — and \"both A and B\" is plural, so it needs \"speak\"."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-9",
    "before": "She turned down the job because",
    "after": "the salary nor the hours were right.",
    "options": [
      "neither",
      "either",
      "both"
    ],
    "answer": 0,
    "explain": "\"Nor\" only ever pairs with \"neither\". \"Either\" pairs with \"or\" and \"both\" pairs with \"and\"."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-10",
    "statement": "Both of the interviewers was very friendly during my interview.",
    "answer": false,
    "explain": "Wrong verb: \"both of\" is plural, so it takes \"were\" — \"Both of the interviewers were very friendly.\""
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-both-either-neither-11",
    "words": [
      "Neither",
      "the",
      "salary",
      "nor",
      "the",
      "location",
      "was",
      "attractive.",
      "or",
      "were"
    ],
    "answer": "Neither the salary nor the location was attractive.",
    "explain": "\"Neither\" must be followed by \"nor\", not \"or\". The verb matches the nearer subject \"the location\" (singular), so it's \"was\", not \"were\"."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-12",
    "prompt": "You can park on ___ side of the road.",
    "options": [
      "either",
      "both",
      "neither",
      "all"
    ],
    "answer": 0,
    "explain": "Either + singular noun means 'one or the other, it doesn't matter': either side. Both and all need a plural noun (both sides), and neither would mean you can't park at all."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-both-either-neither-13",
    "words": [
      "My",
      "grandmother",
      "speaks",
      "neither",
      "Spanish",
      "nor",
      "or",
      "English."
    ],
    "remove": [
      6
    ],
    "explain": "Neither pairs with nor, never with or. 'Or' only follows either: 'either Spanish or English'."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-both-either-neither-14",
    "pairs": [
      [
        "___ my parents are doctors.",
        "Both"
      ],
      [
        "___ of my brothers is married — they're both single.",
        "Neither"
      ],
      [
        "My aunt speaks neither French ___ German.",
        "nor"
      ],
      [
        "You can invite ___ your mum or your dad.",
        "either"
      ]
    ],
    "explain": "Both + plural noun + plural verb; neither of + plural noun + singular verb; neither pairs with nor; either pairs with or."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-15",
    "before": "Neither of the two keys",
    "after": "the front door.",
    "options": [
      "opens",
      "open",
      "are opening"
    ],
    "answer": 0,
    "explain": "Neither is grammatically singular, so the verb is singular too: 'Neither of the two keys opens'. The plural 'keys' is inside 'of the...', so it doesn't control the verb."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-16",
    "prompt": "The company has offices in ___ London and Dublin.",
    "options": [
      "both",
      "either",
      "neither",
      "each"
    ],
    "answer": 0,
    "explain": "\"Both A and B\" adds two things together — the company has two offices. \"Either\" needs \"or\", \"neither\" needs \"nor\", and \"each\" can't link two names this way."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-17",
    "statement": "Either the library or the museum are free on Sundays.",
    "answer": false,
    "explain": "With either...or, the verb agrees with the noun closest to it. 'Museum' is singular, so it should be 'is free on Sundays'."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-both-either-neither-18",
    "words": [
      "Both",
      "my",
      "sister",
      "and",
      "my",
      "cousin",
      "work",
      "at",
      "the",
      "hospital.",
      "either",
      "nor"
    ],
    "answer": "Both my sister and my cousin work at the hospital.",
    "explain": "Both always pairs with and: 'both my sister and my cousin'. Two people joined by and take a plural verb (work), so 'either' and 'nor' are the extras."
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-both-either-neither-19",
    "prompt": "Tap every sentence that uses both, either or neither correctly.",
    "options": [
      "Both of the shops close at six.",
      "Neither restaurant has a car park.",
      "Either of the two routes take you to the station.",
      "Both kitchen is clean.",
      "Neither of my two suitcases is waterproof."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "Both takes a plural verb (shops close); either and neither take a singular one (has, is). 'Either of the two routes take' should be 'takes', and 'Both kitchen is' should be 'Both kitchens are'."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-both-either-neither-20",
    "words": [
      "Both",
      "of",
      "the",
      "my",
      "neighbours",
      "have",
      "dogs."
    ],
    "remove": [
      2
    ],
    "explain": "After 'both of' you use one determiner, not two: 'both of my neighbours' or 'both of the neighbours' — never 'both of the my'."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-21",
    "prompt": "\"Which of your two brothers is coming to the wedding?\" \"___ — they're both away on holiday.\"",
    "options": [
      "Neither",
      "Either",
      "Both",
      "Any"
    ],
    "answer": 0,
    "explain": "Neither works as a one-word answer meaning 'not this one and not that one'. Either would mean one of them is coming, both would mean two, and any is for three or more."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-22",
    "before": "Neither twin",
    "after": "to share a bedroom, so my aunt split the room down the middle.",
    "options": [
      "wants",
      "want",
      "wanting"
    ],
    "answer": 0,
    "explain": "Neither + singular noun = singular verb: 'Neither twin wants'. Neither means 'not this one and not that one', so you treat it as one at a time."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-23",
    "statement": "There's a chemist's at both ends of the street.",
    "answer": true,
    "explain": "Correct: both is followed directly by a plural noun — both ends. No 'of' is needed when there's no the/my/them after it."
  },
  {
    "kind": "match",
    "id": "b1-indirect-questions-determiners-both-either-neither-24",
    "pairs": [
      [
        "___ of my two coworkers speak fluent German.",
        "both"
      ],
      [
        "I don't mind — ___ shift is fine with me.",
        "either"
      ],
      [
        "___ of the candidates accepted the offer, so the post is still open.",
        "neither"
      ],
      [
        "Neither the pay ___ the location suited him.",
        "nor"
      ]
    ],
    "explain": "\"Both\" goes with plural verbs, \"either\" with a singular noun for a free choice, \"neither\" for the negative \"not one of the two\", and \"nor\" is the partner word that always follows \"neither\"."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-25",
    "prompt": "___ my parents are teachers, so dinner at home is basically a second classroom.",
    "options": [
      "Both",
      "Either",
      "Neither",
      "Every"
    ],
    "answer": 0,
    "explain": "Both goes straight before a plural noun and takes a plural verb: 'Both my parents are'. Either and neither can't sit directly in front of a plural noun (you'd need 'either/neither of my parents'), and 'every' only works with a singular noun."
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-both-either-neither-26",
    "words": [
      "Neither",
      "my",
      "brother",
      "nor",
      "my",
      "cousin",
      "wants",
      "to",
      "organise",
      "the",
      "party.",
      "or",
      "both"
    ],
    "answer": "Neither my brother nor my cousin wants to organise the party.",
    "explain": "Neither...nor is the fixed pair, and the verb agrees with the subject closest to it ('my cousin' → wants). 'Or' and 'both' don't belong in this pattern."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-27",
    "before": "I've got two aunts in Bilbao, but",
    "after": "of them has ever visited us.",
    "options": [
      "neither",
      "both",
      "either"
    ],
    "answer": 0,
    "explain": "'But' signals a negative idea, and neither of + them = not one and not the other, with a singular verb (has). 'Both of them has' breaks agreement, and 'either' can't carry a negative meaning in a positive statement."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-28",
    "statement": "Neither of my uncles don't speak English.",
    "answer": false,
    "explain": "Neither is already negative, so a second negative cancels it out. Say 'Neither of my uncles speaks English.'"
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-29",
    "prompt": "___ my mum or my dad will drive us to the airport — they haven't decided yet.",
    "options": [
      "Either",
      "Both",
      "Neither",
      "Whether"
    ],
    "answer": 0,
    "explain": "Either...or presents two options when only one will happen. Both needs and, neither would mean nobody drives (which contradicts the sentence), and whether can't start a main clause like this."
  },
  {
    "kind": "trim",
    "id": "b1-indirect-questions-determiners-both-either-neither-30",
    "words": [
      "Neither",
      "of",
      "the",
      "two",
      "bicycles",
      "is",
      "not",
      "mine."
    ],
    "remove": [
      6
    ],
    "explain": "Neither is already negative, so adding 'not' makes a double negative. Say 'Neither of the two bicycles is mine.'"
  },
  {
    "kind": "pickAll",
    "id": "b1-indirect-questions-determiners-both-either-neither-31",
    "prompt": "Tap every sentence that uses both, either or neither correctly.",
    "options": [
      "Both of my parents grew up in the same village.",
      "Neither my aunt nor my uncle likes big family parties.",
      "Both my brother and my sister lives in Madrid.",
      "Either of my cousins can babysit on Friday.",
      "Neither of my sisters don't have kids."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Both takes a plural verb ('grew up', so 'lives' should be 'live'), neither...nor agrees with the nearest subject ('my uncle likes'), and neither is negative on its own, so 'don't have' is a double negative."
  },
  {
    "kind": "tapCloze",
    "id": "b1-indirect-questions-determiners-both-either-neither-32",
    "before": "You can leave your umbrella",
    "after": "in the hallway or by the back door.",
    "options": [
      "either",
      "both",
      "neither"
    ],
    "answer": 0,
    "explain": "'Or' signals the either...or pattern for two options. Both needs 'and', and neither needs 'nor' — plus neither would mean you can't leave it anywhere."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-33",
    "prompt": "___ of the lifts are out of order, so we'll have to take the stairs.",
    "options": [
      "Both",
      "Either",
      "Neither",
      "Each"
    ],
    "answer": 0,
    "explain": "Both of + plural noun takes a plural verb: 'Both of the lifts are'. Either and Each need a singular verb ('is'), and Neither would mean the lifts work fine — which contradicts taking the stairs."
  },
  {
    "kind": "truefalse",
    "id": "b1-indirect-questions-determiners-both-either-neither-34",
    "statement": "Both of my grandmothers lives in the countryside.",
    "answer": false,
    "explain": "Both means two people, so the verb must be plural: 'Both of my grandmothers live in the countryside.'"
  },
  {
    "kind": "build",
    "id": "b1-indirect-questions-determiners-both-either-neither-35",
    "words": [
      "Neither",
      "the",
      "lamp",
      "nor",
      "the",
      "mirror",
      "was",
      "expensive.",
      "or",
      "were"
    ],
    "answer": "Neither the lamp nor the mirror was expensive.",
    "explain": "Neither pairs with nor, never with or. The nearest noun is the singular 'mirror', so the verb is 'was' — 'were' is the extra."
  },
  {
    "kind": "mcq",
    "id": "b1-indirect-questions-determiners-both-either-neither-36",
    "prompt": "The hotel has ___ a gym and a swimming pool.",
    "options": [
      "both",
      "either",
      "neither",
      "each"
    ],
    "answer": 0,
    "explain": "The partner word 'and' fixes the answer: both...and. Either pairs with or, neither pairs with nor, and each never pairs with anything."
  }
];

export const practice: PracticeStage[] = [
  {
    "focus": "Indirect questions",
    "ids": [
      "b1-indirect-questions-determiners-indirect-questions-1",
      "b1-indirect-questions-determiners-indirect-questions-2",
      "b1-indirect-questions-determiners-indirect-questions-3",
      "b1-indirect-questions-determiners-indirect-questions-4",
      "b1-indirect-questions-determiners-indirect-questions-5",
      "b1-indirect-questions-determiners-indirect-questions-6",
      "b1-indirect-questions-determiners-indirect-questions-7",
      "b1-indirect-questions-determiners-indirect-questions-8",
      "b1-indirect-questions-determiners-indirect-questions-9",
      "b1-indirect-questions-determiners-indirect-questions-10",
      "b1-indirect-questions-determiners-indirect-questions-11",
      "b1-indirect-questions-determiners-indirect-questions-12",
      "b1-indirect-questions-determiners-indirect-questions-13",
      "b1-indirect-questions-determiners-indirect-questions-14",
      "b1-indirect-questions-determiners-indirect-questions-15",
      "b1-indirect-questions-determiners-indirect-questions-16",
      "b1-indirect-questions-determiners-indirect-questions-17",
      "b1-indirect-questions-determiners-indirect-questions-18",
      "b1-indirect-questions-determiners-indirect-questions-19",
      "b1-indirect-questions-determiners-indirect-questions-20",
      "b1-indirect-questions-determiners-indirect-questions-21",
      "b1-indirect-questions-determiners-indirect-questions-22",
      "b1-indirect-questions-determiners-indirect-questions-23",
      "b1-indirect-questions-determiners-indirect-questions-24",
      "b1-indirect-questions-determiners-indirect-questions-25",
      "b1-indirect-questions-determiners-indirect-questions-26",
      "b1-indirect-questions-determiners-indirect-questions-27",
      "b1-indirect-questions-determiners-indirect-questions-28",
      "b1-indirect-questions-determiners-indirect-questions-29",
      "b1-indirect-questions-determiners-indirect-questions-30",
      "b1-indirect-questions-determiners-indirect-questions-31",
      "b1-indirect-questions-determiners-indirect-questions-32",
      "b1-indirect-questions-determiners-indirect-questions-33",
      "b1-indirect-questions-determiners-indirect-questions-34",
      "b1-indirect-questions-determiners-indirect-questions-35",
      "b1-indirect-questions-determiners-indirect-questions-36"
    ]
  },
  {
    "focus": "Another / other",
    "ids": [
      "b1-indirect-questions-determiners-another-other-1",
      "b1-indirect-questions-determiners-another-other-2",
      "b1-indirect-questions-determiners-another-other-3",
      "b1-indirect-questions-determiners-another-other-4",
      "b1-indirect-questions-determiners-another-other-5",
      "b1-indirect-questions-determiners-another-other-6",
      "b1-indirect-questions-determiners-another-other-7",
      "b1-indirect-questions-determiners-another-other-8",
      "b1-indirect-questions-determiners-another-other-9",
      "b1-indirect-questions-determiners-another-other-10",
      "b1-indirect-questions-determiners-another-other-11",
      "b1-indirect-questions-determiners-another-other-12",
      "b1-indirect-questions-determiners-another-other-13",
      "b1-indirect-questions-determiners-another-other-14",
      "b1-indirect-questions-determiners-another-other-15",
      "b1-indirect-questions-determiners-another-other-16",
      "b1-indirect-questions-determiners-another-other-17",
      "b1-indirect-questions-determiners-another-other-18",
      "b1-indirect-questions-determiners-another-other-19",
      "b1-indirect-questions-determiners-another-other-20",
      "b1-indirect-questions-determiners-another-other-21",
      "b1-indirect-questions-determiners-another-other-22",
      "b1-indirect-questions-determiners-another-other-23",
      "b1-indirect-questions-determiners-another-other-24",
      "b1-indirect-questions-determiners-another-other-25",
      "b1-indirect-questions-determiners-another-other-26",
      "b1-indirect-questions-determiners-another-other-27",
      "b1-indirect-questions-determiners-another-other-28",
      "b1-indirect-questions-determiners-another-other-29",
      "b1-indirect-questions-determiners-another-other-30",
      "b1-indirect-questions-determiners-another-other-31",
      "b1-indirect-questions-determiners-another-other-32",
      "b1-indirect-questions-determiners-another-other-33",
      "b1-indirect-questions-determiners-another-other-34",
      "b1-indirect-questions-determiners-another-other-35",
      "b1-indirect-questions-determiners-another-other-36"
    ]
  },
  {
    "focus": "Both / either / neither",
    "ids": [
      "b1-indirect-questions-determiners-both-either-neither-1",
      "b1-indirect-questions-determiners-both-either-neither-2",
      "b1-indirect-questions-determiners-both-either-neither-3",
      "b1-indirect-questions-determiners-both-either-neither-4",
      "b1-indirect-questions-determiners-both-either-neither-5",
      "b1-indirect-questions-determiners-both-either-neither-6",
      "b1-indirect-questions-determiners-both-either-neither-7",
      "b1-indirect-questions-determiners-both-either-neither-8",
      "b1-indirect-questions-determiners-both-either-neither-9",
      "b1-indirect-questions-determiners-both-either-neither-10",
      "b1-indirect-questions-determiners-both-either-neither-11",
      "b1-indirect-questions-determiners-both-either-neither-12",
      "b1-indirect-questions-determiners-both-either-neither-13",
      "b1-indirect-questions-determiners-both-either-neither-14",
      "b1-indirect-questions-determiners-both-either-neither-15",
      "b1-indirect-questions-determiners-both-either-neither-16",
      "b1-indirect-questions-determiners-both-either-neither-17",
      "b1-indirect-questions-determiners-both-either-neither-18",
      "b1-indirect-questions-determiners-both-either-neither-19",
      "b1-indirect-questions-determiners-both-either-neither-20",
      "b1-indirect-questions-determiners-both-either-neither-21",
      "b1-indirect-questions-determiners-both-either-neither-22",
      "b1-indirect-questions-determiners-both-either-neither-23",
      "b1-indirect-questions-determiners-both-either-neither-24",
      "b1-indirect-questions-determiners-both-either-neither-25",
      "b1-indirect-questions-determiners-both-either-neither-26",
      "b1-indirect-questions-determiners-both-either-neither-27",
      "b1-indirect-questions-determiners-both-either-neither-28",
      "b1-indirect-questions-determiners-both-either-neither-29",
      "b1-indirect-questions-determiners-both-either-neither-30",
      "b1-indirect-questions-determiners-both-either-neither-31",
      "b1-indirect-questions-determiners-both-either-neither-32",
      "b1-indirect-questions-determiners-both-either-neither-33",
      "b1-indirect-questions-determiners-both-either-neither-34",
      "b1-indirect-questions-determiners-both-either-neither-35",
      "b1-indirect-questions-determiners-both-either-neither-36"
    ]
  }
];
