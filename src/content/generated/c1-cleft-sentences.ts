import type { Exercise, PracticeStage } from '@/types';

// AUTO-GENERATED — verified tap-only practice for "c1-cleft-sentences". Do not hand-edit.
export const exercises: Exercise[] = [
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-1",
    "prompt": "Our night supervisor spotted the fault, not the engineer. → ___ our night supervisor who spotted the fault.",
    "options": [
      "It was",
      "There was",
      "It were",
      "Was it"
    ],
    "answer": 0,
    "explain": "An it-cleft always opens with the dummy 'It' + 'was/is' — 'It was our night supervisor who…'. 'There was' introduces existence, not focus; 'It were' is never used; 'Was it' turns it into a question."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-2",
    "before": "It was the union rep",
    "after": "negotiated the new overtime rates.",
    "options": [
      "who",
      "which",
      "whose",
      "what"
    ],
    "answer": 0,
    "explain": "When the spotlighted element is a person, link the two halves with 'who' (or 'that'). 'Which' is for things, 'whose' shows possession, and 'what' can't introduce the second half of an it-cleft."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-3",
    "statement": "It were the interns who set up the entire client database.",
    "answer": false,
    "explain": "Wrong: it-clefts stay singular — 'It was the interns who…'. The verb agrees with the dummy 'it', never with the plural noun in focus."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-4",
    "words": [
      "It",
      "was",
      "the",
      "finance",
      "team",
      "that",
      "approved",
      "the",
      "budget.",
      "There",
      "were"
    ],
    "answer": "It was the finance team that approved the budget.",
    "explain": "Plain: 'The finance team approved the budget.' To spotlight the subject, wrap it in 'It was … that …'. 'There' and 'were' are the extras — 'There were' states existence instead of highlighting."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-it-clefts-5",
    "words": [
      "It",
      "was",
      "the",
      "receptionist",
      "who",
      "she",
      "buzzed",
      "us",
      "in."
    ],
    "remove": [
      5
    ],
    "explain": "'Who' already fills the subject slot, so you don't repeat the subject: 'It was the receptionist who buzzed us in.' Adding 'she' is a resumptive pronoun and sounds wrong in English."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-it-clefts-6",
    "pairs": [
      [
        "Highlight 'the intern': The intern fixed the printer.",
        "It was the intern who fixed the printer."
      ],
      [
        "Highlight 'the printer': The intern fixed the printer.",
        "It was the printer that the intern fixed."
      ],
      [
        "Highlight 'on Monday': The intern fixed the printer on Monday.",
        "It was on Monday that the intern fixed the printer."
      ],
      [
        "Highlight 'in the mailroom': The intern fixed the printer in the mailroom.",
        "It was in the mailroom that the intern fixed the printer."
      ]
    ],
    "explain": "Whatever you put straight after 'It was' is what gets the spotlight — subject, object, time phrase or place phrase. Everything else drops into the 'that/who' clause, and only a person takes 'who'."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-it-clefts-7",
    "prompt": "Tap every correctly formed it-cleft.",
    "options": [
      "It was the warehouse manager who signed for the delivery.",
      "It was on Friday that we finally got payroll fixed.",
      "It was the warehouse manager signed for the delivery.",
      "It were my colleagues who covered my shift.",
      "It was my line manager that recommended me for promotion."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "explain": "A complete it-cleft needs 'It was' + focus + 'that/who'. Option 3 drops the linker, and option 4 uses 'were' instead of the fixed singular 'was'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-8",
    "prompt": "It was the expenses claim ___ the auditor kept questioning, not the travel budget.",
    "options": [
      "that",
      "who",
      "what",
      "when"
    ],
    "answer": 0,
    "explain": "The focus is a thing acting as the object, so use 'that' (or 'which'). 'Who' is for people, and 'what'/'when' can't link the halves of an it-cleft."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-9",
    "before": "It was on my very first day",
    "after": "I spilled coffee down the CFO's jacket.",
    "options": [
      "that",
      "which",
      "where",
      "what"
    ],
    "answer": 0,
    "explain": "Even when the spotlight falls on a time or place phrase, an it-cleft links with 'that' — not 'where' or 'which'."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-10",
    "statement": "It was in her old job as a paralegal that she learned to read a contract properly.",
    "answer": true,
    "explain": "Correct: the prepositional phrase 'in her old job as a paralegal' sits in the focus slot and 'that' carries the rest — a natural way to stress where something happened."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-11",
    "words": [
      "It",
      "was",
      "last",
      "Friday",
      "that",
      "the",
      "whole",
      "department",
      "was",
      "restructured.",
      "when",
      "There"
    ],
    "answer": "It was last Friday that the whole department was restructured.",
    "explain": "To spotlight a time phrase, put it right after 'It was' and continue with 'that'. 'When' and 'There' are the extras — clefts don't use 'when' as the linker."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-it-clefts-12",
    "words": [
      "It",
      "was",
      "the",
      "head",
      "chef",
      "who",
      "that",
      "trained",
      "me."
    ],
    "remove": [
      6
    ],
    "explain": "Pick one linker, not both: 'It was the head chef who trained me.' 'Who' and 'that' are alternatives for people, so stacking them is ungrammatical."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-13",
    "prompt": "\"My aunt, not my mother, raised me after the accident.\" Which it-cleft is correct?",
    "options": [
      "It was my aunt, not my mother, who raised me after the accident.",
      "It was my aunt, not my mother, which raised me after the accident.",
      "It was my aunt, not my mother, who she raised me after the accident.",
      "It were my aunt, not my mother, who raised me after the accident."
    ],
    "answer": 0,
    "explain": "Clefts are built for exactly this kind of correction — spotlight the right person and slot the contrast in after it. 'Which' can't refer to a person, 'who she' repeats a subject that 'who' already covers, and 'It' never takes 'were'."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-14",
    "before": "It isn't the money",
    "after": "worries me — it's the way he hides it from me.",
    "options": [
      "that",
      "who",
      "what",
      "whose"
    ],
    "answer": 0,
    "explain": "Clefts go negative easily: 'It isn't X that...' denies one thing so you can supply the real one. The focus is a thing, so 'that' — 'who' needs a person, 'what' never links an it-cleft, and 'whose' shows possession."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-15",
    "statement": "It is my brother and his wife who is hosting Christmas this year.",
    "answer": false,
    "explain": "Two different verbs, two different rules. 'It is' stays singular whatever follows, but the verb inside the who-clause agrees with the spotlighted phrase — 'my brother and his wife' is plural, so: 'who are hosting Christmas this year.'"
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-16",
    "words": [
      "It",
      "wasn't",
      "until",
      "my",
      "parents",
      "divorced",
      "that",
      "I",
      "understood",
      "their",
      "silence.",
      "when",
      "was"
    ],
    "answer": "It wasn't until my parents divorced that I understood their silence.",
    "explain": "'It wasn't until X that Y' is the standard way to spotlight the moment something finally happened. The link is always 'that', even though the focus is a time — 'until... when' is the classic slip here."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-it-clefts-17",
    "words": [
      "It",
      "was",
      "my",
      "sister-in-law",
      "that",
      "I",
      "confided",
      "in",
      "her",
      "about",
      "the",
      "pregnancy."
    ],
    "remove": [
      8
    ],
    "explain": "'That' already stands in for the object of 'in', so 'her' repeats it: 'It was my sister-in-law that I confided in about the pregnancy.' Leaving the preposition stranded at the end is completely normal here."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-it-clefts-18",
    "pairs": [
      [
        "spotlight GRANDMA",
        "It was Grandma who left the cottage to my mother."
      ],
      [
        "spotlight THE COTTAGE",
        "It was the cottage that Grandma left to my mother."
      ],
      [
        "spotlight TO MY MOTHER",
        "It was to my mother that Grandma left the cottage."
      ],
      [
        "spotlight IN HER WILL",
        "It was in her will that Grandma left the cottage to my mother."
      ]
    ],
    "explain": "All four come from one sentence: 'Grandma left the cottage to my mother in her will.' Whatever you spotlight moves straight after 'It was', and the rest follows unchanged. People take 'who'; things, places and phrases take 'that'."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-it-clefts-19",
    "prompt": "Tap every grammatical it-cleft.",
    "options": [
      "It was my grandfather who taught me to fish on the canal.",
      "It was my grandfather whom taught me to fish on the canal.",
      "It wasn't until I had children of my own that I understood my mother.",
      "It was because he never once apologised that she finally left him.",
      "It was furious that my father got when he heard."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "You can spotlight a person, a time boundary or a reason. But 'whom' is an object form and can't be the subject of 'taught' (use 'who'), and an adjective like 'furious' can never go in the spotlight — clefts take noun phrases and adverbials only."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-20",
    "prompt": "Rewrite to spotlight the reason: \"They stayed together because of the children.\" → ___ they stayed together.",
    "options": [
      "It was because of the children that",
      "It was because of the children which",
      "It was because of the children who",
      "It was that because of the children"
    ],
    "answer": 0,
    "explain": "A reason phrase can go in the spotlight just like a person or a time: It + was + because of the children + that + the rest. The link stays 'that' — never 'which' (things only, and not in clefts) or 'who' (people only). Option 4 puts 'that' before the focus, which breaks the pattern."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-21",
    "before": "It was to my aunt",
    "after": "I turned when my parents' marriage fell apart.",
    "options": [
      "that",
      "who",
      "whom",
      "which"
    ],
    "answer": 0,
    "explain": "Once you front the whole prepositional phrase ('to my aunt'), the link can only be 'that'. 'Who' and 'whom' would need the person alone in the spotlight: 'It was my aunt who I turned to.' You can't have both the preposition up front and a who/whom link."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-22",
    "statement": "It was in the middle of my parents' divorce that I sat my final exams.",
    "answer": true,
    "explain": "Correct. Even a long prepositional phrase can take the spotlight, and the link stays 'that'. Fronting it this way frames the exams against the divorce instead of just listing two events."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-23",
    "words": [
      "It",
      "was",
      "only",
      "my",
      "grandmother",
      "who",
      "ever",
      "took",
      "my",
      "side.",
      "which",
      "were"
    ],
    "answer": "It was only my grandmother who ever took my side.",
    "explain": "Adding 'only' inside the spotlight sharpens the contrast — she alone, nobody else. The focus is a person, so 'who' ('that' would work too); 'which' can't refer to people and 'It' never takes 'were'."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-it-clefts-24",
    "words": [
      "It",
      "was",
      "that",
      "chipped",
      "mug",
      "that",
      "she",
      "always",
      "reached",
      "for",
      "it",
      "first."
    ],
    "remove": [
      10
    ],
    "explain": "With the object in focus, 'that' already refers back to 'that chipped mug', so no pronoun follows the preposition — it's simply left stranded: 'that she always reached for first.'"
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-25",
    "prompt": "It's the loose floorboards in the hallway ___ the noise, not the pipes.",
    "options": [
      "that make",
      "that makes",
      "who make",
      "that is making"
    ],
    "answer": 0,
    "explain": "The verb in the cleft clause agrees with the spotlighted noun, not with 'It'. The focus is 'floorboards' (plural), so 'that make'. 'that makes' and 'that is making' both agree with 'It' by mistake, and 'who' only follows a person."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-26",
    "before": "It wasn't until the plumber lifted the sink panel",
    "after": "we spotted the leak.",
    "options": [
      "that",
      "when",
      "then",
      "which"
    ],
    "answer": 0,
    "explain": "'It wasn't until X ___ Y' is a fixed cleft frame and the second half is always introduced by 'that'. 'when' and 'then' feel tempting because the meaning is about time, but the frame doesn't allow them."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-27",
    "statement": "It was the old kettle that we finally threw it out last month.",
    "answer": false,
    "explain": "'that' is already standing in for 'the old kettle' as the object, so you can't repeat it as 'it'. Correct: 'It was the old kettle that we finally threw out last month.'"
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-28",
    "words": [
      "It",
      "was",
      "in",
      "the",
      "shed",
      "that",
      "we",
      "found",
      "the",
      "missing",
      "tent",
      "poles.",
      "which",
      "where"
    ],
    "answer": "It was in the shed that we found the missing tent poles.",
    "explain": "When you spotlight a place, the whole prepositional phrase ('in the shed') moves after 'It was' and the rest still links with 'that'. Even with a location in focus, 'where' and 'which' are wrong here."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-it-clefts-29",
    "pairs": [
      [
        "It was the freezer that packed in, not the fridge.",
        "which appliance broke"
      ],
      [
        "It was on Sunday that the freezer packed in, not on Friday.",
        "which day it happened"
      ],
      [
        "It was our landlord who fixed it, not the letting agency.",
        "who sorted it out"
      ],
      [
        "It was in the garage that we dumped the old one, not the garden.",
        "where it ended up"
      ]
    ],
    "explain": "An it-cleft doesn't just emphasise — it corrects. Whatever sits straight after 'It was' is the piece being put right, while everything in the that/who clause is treated as already agreed."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-it-clefts-30",
    "prompt": "Tap every it-cleft that is correct.",
    "options": [
      "It was the doormat that the spare key was hidden under.",
      "It was the launderette on Fenn Street that closed down first.",
      "It was in the loft where we stored the Christmas lights.",
      "It's the hinges on this cupboard that need oiling.",
      "It were the tiles in the bathroom that cracked."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Clefts link with that/who and keep singular 'It was/It's' whatever follows. 'where' can never replace 'that' after a fronted place phrase, and a plural focus like 'the tiles' doesn't turn 'was' into 'were'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-31",
    "prompt": "\"We keep the tools in that cupboard.\" → Which it-cleft correctly spotlights THAT CUPBOARD?",
    "options": [
      "It's that cupboard that we keep the tools in.",
      "It's that cupboard where we keep the tools in.",
      "It's that cupboard which we keep the tools.",
      "It's in that cupboard that we keep the tools in."
    ],
    "answer": 0,
    "explain": "Cleft the noun on its own and the preposition stays stranded at the end. You can front the whole phrase instead ('It's in that cupboard that we keep the tools'), but never do both, and 'where' can't follow a noun focus that still has 'in' hanging at the end."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-it-clefts-32",
    "before": "It wasn't the noise from the road",
    "after": "kept me awake — it was the dripping tap in the bathroom.",
    "options": [
      "that",
      "what",
      "which it",
      "who"
    ],
    "answer": 0,
    "explain": "A negative cleft works exactly like a positive one: a thing in focus links with 'that', never 'what'. 'which it' doubles the subject, since the link word is already doing that job."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-it-clefts-33",
    "statement": "It was me who left the keys on the hall table.",
    "answer": true,
    "explain": "In everyday English the focused pronoun takes the object form: 'It was me who…'. The formal 'It was I who…' is also correct but sounds stiff outside writing."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-it-clefts-34",
    "words": [
      "It's",
      "the",
      "letterbox",
      "that",
      "the",
      "draught",
      "comes",
      "through,",
      "not",
      "the",
      "front",
      "door.",
      "where",
      "what"
    ],
    "answer": "It's the letterbox that the draught comes through, not the front door.",
    "explain": "The focus is a noun, so the link word is 'that' and 'through' stays stranded at the end of the clause. 'what' is never a cleft linker, and 'where' can't leave a preposition dangling like that."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-it-clefts-35",
    "words": [
      "It's",
      "only",
      "when",
      "the",
      "lift",
      "breaks",
      "down",
      "that",
      "do",
      "you",
      "notice",
      "how",
      "many",
      "stairs",
      "there",
      "are."
    ],
    "remove": [
      8
    ],
    "explain": "Fronting alone forces inversion — 'Only when the lift breaks down do you notice…'. But the cleft frame already carries the emphasis, so the that-clause keeps plain word order with no auxiliary: 'that you notice…'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-it-clefts-36",
    "prompt": "\"It was my sister who told Mum about the tattoo.\" What does this sentence take for granted?",
    "options": [
      "That someone told Mum about the tattoo.",
      "That nobody told Mum about the tattoo.",
      "That Mum has a tattoo.",
      "That the speaker is asking who told Mum."
    ],
    "answer": 0,
    "explain": "This is what clefts are really for: the who/that-clause is presupposed — already shared, not up for debate — while the spotlighted phrase delivers the new, contrastive information. Here, that Mum was told is old news; which sister did it is the point."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-1",
    "prompt": "___ my sister needs right now is a bit of space, not another lecture from Mum.",
    "options": [
      "What",
      "That",
      "Which",
      "That what"
    ],
    "answer": 0,
    "explain": "A wh-cleft opens with 'What' + clause acting as the whole subject: What my sister needs = the thing she needs. 'That what' is a common Spanish-driven slip (lo que) — English uses 'What' alone."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-2",
    "before": "What my parents did after the row",
    "after": "each other for a fortnight.",
    "options": [
      "was ignore",
      "was ignored",
      "were ignoring",
      "was to ignoring"
    ],
    "answer": 0,
    "explain": "After 'What X did was', the verb comes back as a bare infinitive: was ignore. 'Was' already carries the tense, so 'ignored' and 'ignoring' double up on it."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-3",
    "statement": "What does the team need is clearer deadlines.",
    "answer": false,
    "explain": "The wh-clause is a subject, not a question, so it takes no inversion or auxiliary 'does'. It should read 'What the team needs is clearer deadlines.'"
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-4",
    "words": [
      "What",
      "you",
      "should",
      "do",
      "is",
      "call",
      "a",
      "locksmith.",
      "calling",
      "that"
    ],
    "answer": "What you should do is call a locksmith.",
    "explain": "'What you should do is...' fronts advice, and the focus is a bare infinitive: 'is call'. 'calling' and 'that' don't fit this pattern."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-wh-clefts-5",
    "words": [
      "What",
      "it",
      "annoys",
      "me",
      "is",
      "my",
      "brother's",
      "silence."
    ],
    "remove": [
      1
    ],
    "explain": "'What' is already the subject of 'annoys', so there's no room for 'it'. Spanish 'Lo que me molesta' tempts you into an extra pronoun that English drops."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-wh-clefts-6",
    "prompt": "Tap every sentence that is a correctly formed wh-cleft.",
    "options": [
      "What my parents want is a quiet retirement.",
      "What does my wife need is more support at home.",
      "What I did was call my grandmother straight away.",
      "What happened was that my uncle forgot the wedding entirely.",
      "What annoying me is my sister's constant excuses."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "The three correct ones keep a full clause after 'What' plus a linking 'is/was'. Option 2 inverts as if it were a question, and option 5 has no finite verb — it needs 'What annoys me'."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-wh-clefts-7",
    "pairs": [
      [
        "What I need is ___",
        "a sharper knife"
      ],
      [
        "What he did was ___",
        "replace the batteries"
      ],
      [
        "What happened was ___",
        "that the shelf collapsed"
      ],
      [
        "What I like about the flat is ___",
        "the natural light"
      ]
    ],
    "explain": "The opener dictates the focus: a 'do'-clause takes a bare infinitive (was replace), 'What happened was' takes a that-clause, and need/like clauses take a noun phrase."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-8",
    "prompt": "___ was hand in her notice without warning anyone.",
    "options": [
      "What Maria did",
      "What Maria was",
      "That Maria did",
      "Which Maria did"
    ],
    "answer": 0,
    "explain": "To front an action you use 'What + person + did was' + bare infinitive: 'What Maria did was hand in her notice.' 'What Maria was' points to a state, and 'That'/'Which' can't head a cleft."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-9",
    "before": "A decent set of saucepans is",
    "after": "this kitchen has been missing for years.",
    "options": [
      "what",
      "that",
      "which",
      "it"
    ],
    "answer": 0,
    "explain": "This is a reversed pseudo-cleft: the focus comes first and the What-clause follows. Only 'what' can head that clause here — it packs in 'the thing that', so 'that' or 'which' would leave the clause without an object."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-10",
    "statement": "What happened at the warehouse was that two supervisors quit on the same day.",
    "answer": true,
    "explain": "Correct. When the highlighted part is a whole event rather than a thing, 'What happened was' is completed by a that-clause — a very natural way to open a workplace story."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-11",
    "words": [
      "What",
      "surprised",
      "me",
      "was",
      "how",
      "quickly",
      "they",
      "filled",
      "the",
      "vacancy.",
      "that",
      "which"
    ],
    "answer": "What surprised me was how quickly they filled the vacancy.",
    "explain": "Here 'what' is the subject inside its own clause ('What surprised me'), and 'was' links it to an embedded wh-clause. 'That' and 'which' don't fit either slot."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-wh-clefts-12",
    "words": [
      "What",
      "that",
      "the",
      "shift",
      "manager",
      "wants",
      "is",
      "a",
      "bigger",
      "budget."
    ],
    "remove": [
      1
    ],
    "explain": "'What' alone introduces the cleft clause — stacking 'that' after it is ungrammatical. The clean version is 'What the shift manager wants is a bigger budget.'"
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-13",
    "prompt": "___ was that the lock jammed and I couldn't get the front door open.",
    "options": [
      "What happened",
      "That happened",
      "Which happened",
      "It happened"
    ],
    "answer": 0,
    "explain": "'What happened was (that)...' is a fixed wh-cleft opener for introducing an explanation. The other options are ordinary clauses, so they can't be followed by 'was that...'."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-14",
    "before": "What the recruiter did",
    "after": "forward my application straight to the hiring manager.",
    "options": [
      "was",
      "did",
      "is being",
      "has been"
    ],
    "answer": 0,
    "explain": "'What + subject + did' is completed by 'was' + a bare infinitive: 'was forward'. The past tense sits in 'was', so the action verb stays plain — not 'was forwarded' or 'did forward'."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-15",
    "statement": "What annoys me about this kitchen is the lack of drawer space.",
    "answer": true,
    "explain": "Correct. The whole What-clause acts as a singular subject, so it takes 'is', and the focus that follows is a noun phrase: 'the lack of drawer space'."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-16",
    "words": [
      "What",
      "she",
      "enjoys",
      "most",
      "is",
      "training",
      "new",
      "hires.",
      "that",
      "which"
    ],
    "answer": "What she enjoys most is training new hires.",
    "explain": "The wh-clause 'What she enjoys most' fronts the idea, then 'is' links it to the highlighted part. Only 'what' can head this structure — 'that' and 'which' are the extras."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-wh-clefts-17",
    "words": [
      "What",
      "I",
      "can't",
      "stand",
      "it",
      "is",
      "the",
      "open-plan",
      "noise."
    ],
    "remove": [
      4
    ],
    "explain": "'What' already stands for the thing you can't stand, so adding 'it' doubles the object. Wh-clefts never leave a spare pronoun behind: 'What I can't stand is the open-plan noise.'"
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-wh-clefts-18",
    "prompt": "Tap every sentence that is a correct wh-cleft.",
    "options": [
      "What this office lacks is natural light.",
      "What I did was email the whole department by mistake.",
      "What the intern he wants is more responsibility.",
      "What annoys me most is unpaid overtime.",
      "That I need is a new contract."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Correct wh-clefts run 'what'-clause + be + highlighted element. 'What the intern he wants' leaves a stray 'he' after the wh-clause, and 'That I need' uses the wrong word — only 'what' can head the cleft."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-wh-clefts-19",
    "pairs": [
      [
        "What the CEO announced was",
        "a company-wide pay freeze."
      ],
      [
        "What I miss about my old job is",
        "the ten-minute commute."
      ],
      [
        "What the new manager did was",
        "scrap the dress code."
      ],
      [
        "What happens on Fridays is",
        "that everyone works from home."
      ]
    ],
    "explain": "The wh-clause decides what can follow 'be': 'did was' takes a bare infinitive (scrap), 'announced was'/'miss...is' take noun phrases, and 'What happens is' introduces a whole event with a that-clause."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-20",
    "prompt": "___ is a proper handover, not another all-hands meeting.",
    "options": [
      "What this team needs",
      "That this team needs",
      "Which this team needs",
      "What does this team need"
    ],
    "answer": 0,
    "explain": "A wh-cleft opens with a 'what'-clause acting as the subject: 'What this team needs is...'. 'That'/'Which' can't launch a cleft, and the wh-clause keeps statement word order — never the question form 'does this team need'."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-21",
    "before": "Honestly,",
    "after": "is a manager who actually reads my reports.",
    "options": [
      "what I want",
      "that I want",
      "which I want",
      "what do I want"
    ],
    "answer": 0,
    "explain": "The cleft subject is 'what I want' — statement order, headed by 'what'. 'That'/'which' can't introduce it, and 'what do I want' is a question, not a subject."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-22",
    "statement": "What does my grandmother want is simply a phone call now and then.",
    "answer": false,
    "explain": "False — the wh-clause is a subject here, not a question, so there's no inversion: What my grandmother wants is simply a phone call now and then."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-23",
    "words": [
      "What",
      "upsets",
      "my",
      "mother",
      "is",
      "that",
      "nobody",
      "ever",
      "calls",
      "her.",
      "does",
      "it"
    ],
    "answer": "What upsets my mother is that nobody ever calls her.",
    "explain": "When the highlighted part is a whole situation, the cleft ends in a that-clause: is that nobody ever calls her. 'It' would be the dummy subject of an it-cleft, a different structure."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-wh-clefts-24",
    "words": [
      "What",
      "I",
      "want",
      "to",
      "is",
      "for",
      "my",
      "parents",
      "to",
      "stop",
      "interfering."
    ],
    "remove": [
      3
    ],
    "explain": "The wh-clause ends at the verb — 'What I want' — so the first 'to' is stranded. The second 'to' is doing real work in 'for my parents to stop'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-25",
    "prompt": "What really struck me about the old library ___ the smell of the wooden shelves.",
    "options": [
      "was",
      "were",
      "being",
      "it was"
    ],
    "answer": 0,
    "explain": "The What-clause counts as a single singular subject, so it takes 'was' — and the focus, 'the smell', is singular too. 'it was' would repeat the subject."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-26",
    "before": "What she did to the old bookcase",
    "after": "sand it down and paint it white.",
    "options": [
      "was",
      "did",
      "is being",
      "were"
    ],
    "answer": 0,
    "explain": "The What-clause is singular and the action is past, so the linking verb is 'was'. After 'What she did was' the focus takes a bare infinitive: 'was sand it down', never 'was sanded'."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-27",
    "statement": "What my grandparents did was renew their vows on their fiftieth anniversary.",
    "answer": true,
    "explain": "True — 'was' carries the past tense, so 'renew' stays in its bare form. 'Was to renew' is also possible, but the bare infinitive sounds more natural in speech."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-28",
    "words": [
      "All",
      "I",
      "want",
      "is",
      "a",
      "quiet",
      "corner",
      "to",
      "read",
      "in.",
      "what",
      "that"
    ],
    "answer": "All I want is a quiet corner to read in.",
    "explain": "'All I want is...' is the limiting variant of the wh-cleft — it means 'the only thing I want'. The clause is still a singular subject taking 'is', so 'what' and 'that' are the extras."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-wh-clefts-29",
    "words": [
      "What",
      "I",
      "need",
      "it",
      "is",
      "a",
      "new",
      "ironing",
      "board."
    ],
    "remove": [
      3
    ],
    "explain": "The What-clause is already the subject of 'is', so there's no room for a second subject. 'What I need is a new ironing board' — nothing goes between the clause and the verb."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-wh-clefts-30",
    "prompt": "Tap every sentence that is a correctly formed wh-cleft.",
    "options": [
      "What this hallway needs is a proper coat rack.",
      "What I did was cancelled the delivery.",
      "What bothers me most is the noise from the street.",
      "What I want it is a comfortable armchair.",
      "What we ordered was a second-hand desk."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Options 1, 3 and 5 all follow What-clause + BE + focus. 'What I did was cancelled' is wrong — after 'did was' you need a bare infinitive ('was cancel'). 'What I want it is' wrongly adds a second subject."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-wh-clefts-31",
    "pairs": [
      [
        "What my brother did was ___ our mother a surprise visit.",
        "pay"
      ],
      [
        "What my parents want ___ more time with the grandchildren.",
        "is"
      ],
      [
        "What ___ me is how rarely my cousins call.",
        "bothers"
      ],
      [
        "What happened ___ that my niece moved abroad.",
        "was"
      ]
    ],
    "explain": "Each slot shows a different piece of the wh-cleft machinery: the bare infinitive after 'did was', the linking verb 'is/was', and the finite verb inside the wh-clause itself."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-32",
    "prompt": "___ I need most in this flat is a bigger wardrobe.",
    "options": [
      "What",
      "Which",
      "That",
      "It"
    ],
    "answer": 0,
    "explain": "A wh-cleft opens with What + subject + verb, then BE + the focus: 'What I need most ... is a bigger wardrobe.' Which and That can't introduce this fronted clause, and It would start a different structure (an it-cleft)."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-wh-clefts-33",
    "before": "More patience with my teenage son",
    "after": "what I need, not more advice from my mother-in-law.",
    "options": [
      "is",
      "are",
      "being",
      "it is"
    ],
    "answer": 0,
    "explain": "This is a reversed wh-cleft: the emphasised bit comes first and the wh-clause follows. 'More patience' is uncountable and singular, so it takes 'is'."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-wh-clefts-34",
    "statement": "Who left the keys on the hall table was my flatmate.",
    "answer": false,
    "explain": "Wh-clefts don't work with 'who'. To focus a person, use 'The person who left the keys on the hall table was my flatmate' or an it-cleft: 'It was my flatmate who left the keys on the hall table.'"
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-wh-clefts-35",
    "words": [
      "All",
      "I",
      "want",
      "this",
      "Christmas",
      "is",
      "for",
      "my",
      "brother",
      "and",
      "my",
      "dad",
      "to",
      "talk.",
      "are",
      "that"
    ],
    "answer": "All I want this Christmas is for my brother and my dad to talk.",
    "explain": "'All I want' is the wh-cleft's close cousin — it means 'the only thing that'. When the emphasised part has its own subject, it arrives as 'for + someone + to + verb'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-wh-clefts-36",
    "prompt": "I'm not criticising your family. ___ is that we need one weekend a month to ourselves.",
    "options": [
      "All I'm saying",
      "All what I'm saying",
      "That I'm saying",
      "What am I saying"
    ],
    "answer": 0,
    "explain": "'All I'm saying is…' softens a complaint — it frames your point as the only claim on the table. 'All what' is never English; 'all' already does the job of 'what'."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-1",
    "prompt": "\"So the intern redesigned the website?\" — \"No, ___ — the intern only wrote the copy.\"",
    "options": [
      "it was our lead developer who redesigned it",
      "it was the website that our lead developer redesigned",
      "what the intern did was redesign the website",
      "it was redesigning that our lead developer did"
    ],
    "answer": 0,
    "explain": "The false assumption is about WHO did the work, so the person goes in the focus slot: 'It was our lead developer who...'. The second option highlights the website (never in doubt), and the third confirms the very claim you're denying."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-2",
    "before": "We didn't lose the contract at the pitch —",
    "after": "we lost it.",
    "options": [
      "it was in the follow-up meeting that",
      "it was the follow-up meeting which",
      "what we lost in the follow-up meeting was",
      "there was the follow-up meeting where"
    ],
    "answer": 0,
    "explain": "You're correcting WHERE it happened, so the adverbial phrase 'in the follow-up meeting' takes the focus slot, and an it-cleft links it with 'that' — never 'which' or 'where'."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-choosing-focus-3",
    "words": [
      "It",
      "was",
      "the",
      "night",
      "shift",
      "that",
      "management",
      "scrapped.",
      "who",
      "what"
    ],
    "answer": "It was the night shift that management scrapped.",
    "explain": "The contrast is about WHAT got cut, so 'the night shift' fills the focus slot after 'It was', linked with 'that'. 'Who' only introduces people, and 'what' belongs to a wh-cleft ('What management scrapped was...')."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-choosing-focus-4",
    "prompt": "Your colleague claims: \"The CFO approved the budget.\" In fact the board did. Tap every reply that correctly shifts the focus onto the board.",
    "options": [
      "It was the board that approved the budget, not the CFO.",
      "It was the budget that the board approved.",
      "The one who approved the budget was the board.",
      "What the board did was approve the budget.",
      "It was the board who approved the budget."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "The disputed element is the approver, so the board must sit in the focus slot (either 'that' or 'who' works for people). 'It was the budget that...' highlights the budget, and 'What the board did was...' foregrounds the action rather than contrasting who did it."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-choosing-focus-5",
    "pairs": [
      [
        "Focus on the person responsible",
        "It was the site manager who signed it off."
      ],
      [
        "Focus on when it happened",
        "It was only last quarter that we broke even."
      ],
      [
        "Focus on the action they took",
        "What they did was outsource the whole helpdesk."
      ],
      [
        "Focus on the reason behind it",
        "The reason we restructured was falling demand."
      ]
    ],
    "explain": "Each kind of focus has its own frame: 'It was + person + who' for the doer, 'It was + time + that' for when, 'What + subject + did was' for the action, and 'The reason... was' for why."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-choosing-focus-6",
    "words": [
      "It",
      "was",
      "the",
      "union",
      "rep",
      "who",
      "she",
      "raised",
      "the",
      "complaint."
    ],
    "remove": [
      6
    ],
    "explain": "The focus slot already names the person — 'the union rep' — and 'who' carries her into the clause as its subject. Adding 'she' duplicates a subject that's already there."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-7",
    "statement": "\"I hear Priya negotiated the contract.\" — \"Actually, what Priya did was proofread it; it was Daniel who negotiated it.\"",
    "answer": true,
    "explain": "Both clefts pull their weight: the wh-cleft corrects the action (proofread, not negotiated), then the it-cleft puts the real negotiator, Daniel, in the focus slot."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-8",
    "prompt": "You want to stress that it was the CLIENT, not your team, who changed the brief. Which sentence does that?",
    "options": [
      "It was the client who changed the brief.",
      "It was the brief that the client changed.",
      "What the client did was change the brief.",
      "It was our team that the client briefed."
    ],
    "answer": 0,
    "explain": "Whatever sits right after 'It was' is what you're contrasting — so the client goes there. The second option defends the brief, the third stresses the action, and the fourth says something else entirely."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-9",
    "before": "The board didn't ignore the report;",
    "after": "was act on it far too slowly.",
    "options": [
      "what they did",
      "what did they",
      "the thing they",
      "it was what they"
    ],
    "answer": 0,
    "explain": "To correct a false assumption about the action, use a wh-cleft: 'What they did was act on it...'. Keep normal word order inside the clause (what they did, not what did they) and follow 'was' with a bare infinitive."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-choosing-focus-10",
    "words": [
      "It",
      "was",
      "Dad",
      "who",
      "moved",
      "the",
      "boxes,",
      "not",
      "the",
      "cleaner.",
      "what",
      "which"
    ],
    "answer": "It was Dad who moved the boxes, not the cleaner.",
    "explain": "'not the cleaner' shows the argument is about the person, so 'Dad' takes the focus slot and 'who' links the rest. 'what' and 'which' can't open an it-cleft focusing a person."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-choosing-focus-11",
    "prompt": "A colleague assumes you took the job for the salary. In fact it was the chance to lead a team. Tap every reply that puts the focus where it belongs.",
    "options": [
      "It was the chance to lead a team that attracted me, not the salary.",
      "The reason I applied was the chance to lead a team.",
      "What attracted me was the chance to lead a team.",
      "It was me who the chance to lead a team attracted.",
      "It was the salary that attracted me."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explain": "An it-cleft, a reason-cleft and a wh-cleft can all foreground the real motive. 'It was me who...' spotlights you rather than the motive, and 'It was the salary...' simply repeats the assumption you're denying."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-choosing-focus-12",
    "pairs": [
      [
        "They think Dad cooked the meal — actually Mum did.",
        "It was Mum who cooked the meal."
      ],
      [
        "They think Mum cooked the meal — actually she ordered it.",
        "What Mum did was order the meal."
      ],
      [
        "They think Mum cooked lunch — actually it was dinner.",
        "It was dinner that Mum cooked."
      ],
      [
        "They think Mum cooked on Friday — actually it was Saturday.",
        "It was on Saturday that Mum cooked."
      ]
    ],
    "explain": "Same basic fact, four different points of dispute. Whichever element is wrong is the one that moves into focus — the person, the action, the thing, or the time. Note the action needs a wh-cleft ('What Mum did was...'), while the rest work as it-clefts."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-choosing-focus-13",
    "words": [
      "It",
      "was",
      "in",
      "the",
      "attic",
      "where",
      "that",
      "we",
      "found",
      "the",
      "old",
      "records."
    ],
    "remove": [
      5
    ],
    "explain": "An it-cleft focusing a place still links with 'that', not 'where': 'It was in the attic that we found the old records.' The preposition 'in' already carries the location meaning, so 'where' is dead weight."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-14",
    "statement": "Your partner thinks you booked the holiday for July, but you booked it for June. 'It was the holiday that I booked for June' puts the focus in the right place.",
    "answer": false,
    "explain": "Wrong element. The disagreement is about the month, so June belongs in focus: 'It was in June that I booked the holiday.' Focusing 'the holiday' contrasts it with some other thing you booked — which nobody is arguing about."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-15",
    "prompt": "\"So you fired him?\" — \"No! ___ We just moved him to another team.\"",
    "options": [
      "What we did was transfer him, not dismiss him.",
      "It was him that we transferred, not dismissed.",
      "It was us who transferred him.",
      "The reason we transferred him was another team."
    ],
    "answer": 0,
    "explain": "The misunderstanding is about the ACTION, and only a wh-cleft can put a verb in focus: 'What we did was transfer him.' The it-clefts spotlight the person instead, which was never the issue."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-16",
    "before": "Don't blame Dad for the argument. It was",
    "after": "who started it, not him.",
    "options": [
      "my uncle",
      "the argument",
      "starting it",
      "at dinner"
    ],
    "answer": 0,
    "explain": "Two signals pin the focus to a person: the linker 'who' and the tag 'not him'. The point in dispute is who started it, so a person must fill the slot. A thing, an action or a time would need 'that' — and none of them would answer the accusation aimed at Dad."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-choosing-focus-17",
    "words": [
      "It",
      "was",
      "my",
      "stepdad",
      "who",
      "took",
      "me",
      "to",
      "every",
      "match.",
      "what",
      "were"
    ],
    "answer": "It was my stepdad who took me to every match.",
    "explain": "To correct someone who assumes it was your dad, drop the real person straight into the focus slot between 'It was' and 'who'. 'were' clashes with the singular focus and 'what' would start a different kind of cleft altogether."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-choosing-focus-18",
    "prompt": "Your father-in-law assumes your wife paid for the meal. In fact you did. Tap every sentence that corrects him properly.",
    "options": [
      "It was me who paid for the meal.",
      "It was the meal that I paid for.",
      "The one who paid for the meal was me.",
      "What I did was pay for the meal.",
      "It was I who paid for the meal."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Only sentences that put the payer in focus settle who paid. 'It was me' is the everyday choice and 'It was I' the formal one — both are fine. 'It was the meal that...' contrasts the meal with something else you paid for, and 'What I did was...' shifts the spotlight onto the action, leaving his assumption untouched."
  },
  {
    "kind": "match",
    "id": "c1-cleft-sentences-choosing-focus-19",
    "pairs": [
      [
        "They think you broke the lamp — but it was the clock.",
        "It was the clock that I broke."
      ],
      [
        "They think Sam broke the lamp — but it was you.",
        "It was me who broke the lamp."
      ],
      [
        "They think you broke the lamp — but you only moved it.",
        "What I did to the lamp was move it."
      ],
      [
        "They think you broke the lamp in the study — but it was the hall.",
        "It was in the hall that I broke the lamp."
      ]
    ],
    "explain": "Each correction drops the disputed element — the object, the person, the action, the place — into the focus slot, and pushes everything both speakers already agree on into the background clause."
  },
  {
    "kind": "trim",
    "id": "c1-cleft-sentences-choosing-focus-20",
    "words": [
      "It",
      "was",
      "my",
      "brother",
      "who",
      "he",
      "lent",
      "us",
      "the",
      "deposit."
    ],
    "remove": [
      5
    ],
    "explain": "'My brother' is the focused element and 'who' already stands in for him as the subject — so 'he' repeats a job that's done: 'It was my brother who lent us the deposit.'"
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-21",
    "statement": "\"Was it the marketing team that leaked the figures?\" — \"No, it was the leak that came from finance.\"",
    "answer": false,
    "explain": "The question asks WHO leaked them, so the reply should put the real culprit in focus: 'No, it was finance that leaked them.' Fronting 'the leak' answers a question nobody asked."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-22",
    "prompt": "'So your mum organised the whole party?' — 'No, ___ Mum just paid for the cake.'",
    "options": [
      "it was my aunt who organised it.",
      "it was the party that my aunt organised.",
      "it was Mum who paid for the cake.",
      "what my aunt organised was the party."
    ],
    "answer": 0,
    "explain": "The false assumption is about WHO organised it, so the real organiser goes in the focus slot: 'It was my aunt who...'. The others are grammatical but spotlight the wrong thing — 'the party' contrasts it with some other event, and the last option already takes for granted that your aunt organised something."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-23",
    "before": "Don't blame me for the mirror — it was",
    "after": "that I knocked over.",
    "options": [
      "the vase",
      "in the hallway",
      "me",
      "knocked over"
    ],
    "answer": 0,
    "explain": "The argument is mirror vs. vase, so the object goes in focus: 'it was the vase that I knocked over'. Focusing the place or the person would answer a question nobody asked."
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-choosing-focus-24",
    "words": [
      "It",
      "was",
      "the",
      "balcony",
      "that",
      "we",
      "repainted,",
      "not",
      "the",
      "kitchen.",
      "what",
      "where"
    ],
    "answer": "It was the balcony that we repainted, not the kitchen.",
    "explain": "The 'not the kitchen' tail tells you which element is contrasted, so 'the balcony' must sit in the focus slot right after 'It was'. 'what' and 'where' can't introduce an it-cleft — that job belongs to 'that'."
  },
  {
    "kind": "pickAll",
    "id": "c1-cleft-sentences-choosing-focus-25",
    "prompt": "Someone claims: \"You spilled coffee on the rug.\" In fact you spilled it on the sofa. Tap every cleft that corrects the right element.",
    "options": [
      "It was on the sofa that I spilled the coffee.",
      "It was the rug that I spilled coffee on.",
      "Where I spilled the coffee was on the sofa.",
      "It was coffee that I spilled on the sofa.",
      "It was me who spilled the coffee."
    ],
    "correct": [
      0,
      2
    ],
    "explain": "Only the location is wrong, so the correction must spotlight 'on the sofa' — an it-cleft or a where-cleft both do the job. The others re-focus the rug, the drink or the culprit, leaving the actual mistake unchallenged."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-26",
    "statement": "If your cousin assumes you moved abroad for the money, 'It was to be closer to my partner that I moved abroad' correctly puts the real reason in focus.",
    "answer": true,
    "explain": "Correct. The mistaken element is the reason, so a purpose phrase takes the focus slot and 'that' introduces the rest. The cleft quietly accepts 'you moved abroad' and argues only about why."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-27",
    "prompt": "Your flatmate: \"You left your umbrella at the office.\" In fact you left it at the café. Which cleft corrects them?",
    "options": [
      "It was at the café that I left my umbrella.",
      "It was my umbrella that I left at the café.",
      "What I left at the café was my umbrella.",
      "It was me who left my umbrella at the café."
    ],
    "answer": 0,
    "explain": "Only the place is wrong, so 'at the café' takes the focus slot after 'It was'. The other three spotlight the umbrella or you — neither of which anyone is questioning."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-28",
    "before": "We didn't split up because of the distance.",
    "after": "that finished us.",
    "options": [
      "It was the constant arguing",
      "It was the distance",
      "What finished us was",
      "There was the arguing"
    ],
    "answer": 0,
    "explain": "The first sentence rules the distance out, so the focus slot must hold the real cause. Picking 'the distance' contradicts what was just denied, and the last two can't be followed by 'that finished us.'"
  },
  {
    "kind": "build",
    "id": "c1-cleft-sentences-choosing-focus-29",
    "words": [
      "It's",
      "my",
      "sister",
      "I",
      "confide",
      "in,",
      "not",
      "my",
      "mother.",
      "there's",
      "whose"
    ],
    "answer": "It's my sister I confide in, not my mother.",
    "explain": "The person you confide in is the point at issue, so she sits right after 'It's', and the 'not...' tag names the wrong assumption being corrected. After the focus you can drop the linker entirely — 'my sister I confide in' is more natural here than 'my sister who I confide in'."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-30",
    "statement": "To deny that you borrowed the ladder when in fact you borrowed the drill, the natural cleft is \"It was me who borrowed the drill.\"",
    "answer": false,
    "explain": "The contrast is tool vs. tool, so the tool belongs in the focus slot: 'It was the drill that I borrowed.' 'It was me who…' focuses the borrower, but nobody doubts who did it."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-31",
    "prompt": "Your brother: \"You must have lost the spare key.\" Actually he lost it himself. Which cleft pins the blame where it belongs?",
    "options": [
      "It was you who lost the spare key.",
      "It was the spare key that you lost.",
      "It was lost by you, the spare key.",
      "What you lost was the spare key."
    ],
    "answer": 0,
    "explain": "The dispute is over who, so the person goes in focus: 'It was you who…'. 'It was the spare key that…' and 'What you lost was…' both focus the key, which was never in doubt, and the passive version isn't a cleft at all."
  },
  {
    "kind": "tapCloze",
    "id": "c1-cleft-sentences-choosing-focus-32",
    "before": "I didn't throw the old kettle out —",
    "after": "was put it in the garage.",
    "options": [
      "what I did",
      "it was",
      "the thing that",
      "where I did"
    ],
    "answer": 0,
    "explain": "The contrast is between two actions (throw out vs. put away), and actions are focused with a what-cleft: 'What I did was put it in the garage.' An it-cleft can't take a bare verb phrase like this."
  },
  {
    "kind": "truefalse",
    "id": "c1-cleft-sentences-choosing-focus-33",
    "statement": "To correct \"The leak was in the bathroom\", saying \"It was under the kitchen sink that we found the leak\" focuses exactly the element that was wrong.",
    "answer": true,
    "explain": "Correct — the mistake was the location, and 'under the kitchen sink' sits in the focus slot. Everything the two speakers already agree on (there was a leak, you found it) drops into the that-clause."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-34",
    "prompt": "'You only went to the wedding to see your ex.' — 'Don't be ridiculous. ___'",
    "options": [
      "It was to support my cousin that I went.",
      "It was the wedding that I went to.",
      "It was me who went to the wedding.",
      "What I went to was the wedding."
    ],
    "answer": 0,
    "explain": "The accusation is about your motive, so the real reason has to take the focus slot. The other three are well-formed but argue about things nobody questioned — which event it was, or who attended."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-35",
    "prompt": "'So the kids talked you into getting a dog?' — 'No — ___'",
    "options": [
      "it was my husband who wanted one. The kids didn't care either way.",
      "it was a dog that the kids talked me into getting.",
      "what the kids did was talk me into getting a dog.",
      "it was the kids who I talked into getting a dog."
    ],
    "answer": 0,
    "explain": "What's wrong in the question is who did the persuading, so the real culprit goes in focus. The second option contrasts the dog with another pet, the third confirms the very assumption you're denying, and the fourth flips the roles round."
  },
  {
    "kind": "mcq",
    "id": "c1-cleft-sentences-choosing-focus-36",
    "prompt": "Your partner: \"Why did you buy another lamp? We already have one.\" You want to stress that you bought a mirror, not a lamp. Which cleft works?",
    "options": [
      "It was a mirror that I bought, not a lamp.",
      "It was I who bought a mirror, not a lamp.",
      "It was at the shop that I bought a mirror.",
      "Where I bought it was the corner shop."
    ],
    "answer": 0,
    "explain": "The misunderstanding is about the item, so the item goes in focus: 'It was a mirror that I bought'. The others spotlight the buyer or the shop — nothing your partner actually got wrong."
  }
];

export const practice: PracticeStage[] = [
  {
    "focus": "It-clefts",
    "ids": [
      "c1-cleft-sentences-it-clefts-1",
      "c1-cleft-sentences-it-clefts-2",
      "c1-cleft-sentences-it-clefts-3",
      "c1-cleft-sentences-it-clefts-4",
      "c1-cleft-sentences-it-clefts-5",
      "c1-cleft-sentences-it-clefts-6",
      "c1-cleft-sentences-it-clefts-7",
      "c1-cleft-sentences-it-clefts-8",
      "c1-cleft-sentences-it-clefts-9",
      "c1-cleft-sentences-it-clefts-10",
      "c1-cleft-sentences-it-clefts-11",
      "c1-cleft-sentences-it-clefts-12",
      "c1-cleft-sentences-it-clefts-13",
      "c1-cleft-sentences-it-clefts-14",
      "c1-cleft-sentences-it-clefts-15",
      "c1-cleft-sentences-it-clefts-16",
      "c1-cleft-sentences-it-clefts-17",
      "c1-cleft-sentences-it-clefts-18",
      "c1-cleft-sentences-it-clefts-19",
      "c1-cleft-sentences-it-clefts-20",
      "c1-cleft-sentences-it-clefts-21",
      "c1-cleft-sentences-it-clefts-22",
      "c1-cleft-sentences-it-clefts-23",
      "c1-cleft-sentences-it-clefts-24",
      "c1-cleft-sentences-it-clefts-25",
      "c1-cleft-sentences-it-clefts-26",
      "c1-cleft-sentences-it-clefts-27",
      "c1-cleft-sentences-it-clefts-28",
      "c1-cleft-sentences-it-clefts-29",
      "c1-cleft-sentences-it-clefts-30",
      "c1-cleft-sentences-it-clefts-31",
      "c1-cleft-sentences-it-clefts-32",
      "c1-cleft-sentences-it-clefts-33",
      "c1-cleft-sentences-it-clefts-34",
      "c1-cleft-sentences-it-clefts-35",
      "c1-cleft-sentences-it-clefts-36"
    ]
  },
  {
    "focus": "Wh-clefts",
    "ids": [
      "c1-cleft-sentences-wh-clefts-1",
      "c1-cleft-sentences-wh-clefts-2",
      "c1-cleft-sentences-wh-clefts-3",
      "c1-cleft-sentences-wh-clefts-4",
      "c1-cleft-sentences-wh-clefts-5",
      "c1-cleft-sentences-wh-clefts-6",
      "c1-cleft-sentences-wh-clefts-7",
      "c1-cleft-sentences-wh-clefts-8",
      "c1-cleft-sentences-wh-clefts-9",
      "c1-cleft-sentences-wh-clefts-10",
      "c1-cleft-sentences-wh-clefts-11",
      "c1-cleft-sentences-wh-clefts-12",
      "c1-cleft-sentences-wh-clefts-13",
      "c1-cleft-sentences-wh-clefts-14",
      "c1-cleft-sentences-wh-clefts-15",
      "c1-cleft-sentences-wh-clefts-16",
      "c1-cleft-sentences-wh-clefts-17",
      "c1-cleft-sentences-wh-clefts-18",
      "c1-cleft-sentences-wh-clefts-19",
      "c1-cleft-sentences-wh-clefts-20",
      "c1-cleft-sentences-wh-clefts-21",
      "c1-cleft-sentences-wh-clefts-22",
      "c1-cleft-sentences-wh-clefts-23",
      "c1-cleft-sentences-wh-clefts-24",
      "c1-cleft-sentences-wh-clefts-25",
      "c1-cleft-sentences-wh-clefts-26",
      "c1-cleft-sentences-wh-clefts-27",
      "c1-cleft-sentences-wh-clefts-28",
      "c1-cleft-sentences-wh-clefts-29",
      "c1-cleft-sentences-wh-clefts-30",
      "c1-cleft-sentences-wh-clefts-31",
      "c1-cleft-sentences-wh-clefts-32",
      "c1-cleft-sentences-wh-clefts-33",
      "c1-cleft-sentences-wh-clefts-34",
      "c1-cleft-sentences-wh-clefts-35",
      "c1-cleft-sentences-wh-clefts-36"
    ]
  },
  {
    "focus": "Choosing focus",
    "ids": [
      "c1-cleft-sentences-choosing-focus-1",
      "c1-cleft-sentences-choosing-focus-2",
      "c1-cleft-sentences-choosing-focus-3",
      "c1-cleft-sentences-choosing-focus-4",
      "c1-cleft-sentences-choosing-focus-5",
      "c1-cleft-sentences-choosing-focus-6",
      "c1-cleft-sentences-choosing-focus-7",
      "c1-cleft-sentences-choosing-focus-8",
      "c1-cleft-sentences-choosing-focus-9",
      "c1-cleft-sentences-choosing-focus-10",
      "c1-cleft-sentences-choosing-focus-11",
      "c1-cleft-sentences-choosing-focus-12",
      "c1-cleft-sentences-choosing-focus-13",
      "c1-cleft-sentences-choosing-focus-14",
      "c1-cleft-sentences-choosing-focus-15",
      "c1-cleft-sentences-choosing-focus-16",
      "c1-cleft-sentences-choosing-focus-17",
      "c1-cleft-sentences-choosing-focus-18",
      "c1-cleft-sentences-choosing-focus-19",
      "c1-cleft-sentences-choosing-focus-20",
      "c1-cleft-sentences-choosing-focus-21",
      "c1-cleft-sentences-choosing-focus-22",
      "c1-cleft-sentences-choosing-focus-23",
      "c1-cleft-sentences-choosing-focus-24",
      "c1-cleft-sentences-choosing-focus-25",
      "c1-cleft-sentences-choosing-focus-26",
      "c1-cleft-sentences-choosing-focus-27",
      "c1-cleft-sentences-choosing-focus-28",
      "c1-cleft-sentences-choosing-focus-29",
      "c1-cleft-sentences-choosing-focus-30",
      "c1-cleft-sentences-choosing-focus-31",
      "c1-cleft-sentences-choosing-focus-32",
      "c1-cleft-sentences-choosing-focus-33",
      "c1-cleft-sentences-choosing-focus-34",
      "c1-cleft-sentences-choosing-focus-35",
      "c1-cleft-sentences-choosing-focus-36"
    ]
  }
];
