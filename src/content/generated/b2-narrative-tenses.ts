import type { Exercise, PracticeStage } from '@/types';

// AUTO-GENERATED — verified tap-only practice for "b2-narrative-tenses". Do not hand-edit.
export const exercises: Exercise[] = [
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-1",
    "prompt": "While the intern was running off 200 copies of the contract, the printer ___.",
    "options": [
      "jammed",
      "was jamming",
      "had jammed",
      "jams"
    ],
    "answer": 0,
    "explain": "The copying is the background scene (was running off); the printer breaking is the short main event that interrupts it, so it takes the past simple: jammed."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-2",
    "before": "While the sous-chef was chopping onions, he accidentally",
    "after": "his finger.",
    "options": [
      "cut",
      "was cutting",
      "had cut"
    ],
    "answer": 0,
    "explain": "Chopping onions is the longer action already in progress; the accident is a single, instant event inside that scene, so use the past simple: cut."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-3",
    "statement": "While the engineers were testing the new server, one of them was spilling coffee on the keyboard.",
    "answer": false,
    "explain": "The tenses are the wrong way round for the spill. Testing is the ongoing background, but spilling coffee is a one-moment event: 'one of them spilled coffee on the keyboard'."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-4",
    "words": [
      "The",
      "receptionist",
      "was",
      "answering",
      "the",
      "phone",
      "when",
      "the",
      "courier",
      "arrived.",
      "answered",
      "arriving"
    ],
    "answer": "The receptionist was answering the phone when the courier arrived.",
    "explain": "The phone call is the longer action already under way (was answering); the courier's arrival is the short event that cuts across it (arrived). 'answered' and 'arriving' are the extras."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-foreground-background-5",
    "prompt": "Tap every sentence that puts the background in the past continuous and the main event in the past simple.",
    "options": [
      "While the chef was preparing the sauce, the head waiter walked in.",
      "The lawyer was reading the contract when her client called.",
      "While the team wrote the pitch, the projector was breaking down.",
      "As we were packing up the warehouse, a forklift knocked over a pallet.",
      "I was leaving the office when I was seeing the CEO in the lift."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "The correct ones set a scene in progress (was preparing, was reading, were packing) and drop a completed event into it (walked in, called, knocked over). Option 3 reverses the roles, and option 5 puts the interruption in the continuous ('was seeing' should be 'saw')."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-foreground-background-6",
    "words": [
      "I",
      "was",
      "reading",
      "the",
      "safety",
      "manual",
      "when",
      "the",
      "trainer",
      "was",
      "walked",
      "in."
    ],
    "remove": [
      9
    ],
    "explain": "Reading the manual is the background (was reading), but the trainer's entrance is a completed main event, so it needs the plain past simple 'walked in' — the second 'was' has to go."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-foreground-background-7",
    "pairs": [
      [
        "The nurse ___ her notes when the buzzer went off.",
        "was writing"
      ],
      [
        "When the buzzer went off, the nurse ___ to the ward.",
        "ran"
      ],
      [
        "The porters ___ the beds while the doctor examined the X-rays.",
        "were moving"
      ],
      [
        "The doctor ___ the X-rays and made a decision.",
        "studied"
      ]
    ],
    "explain": "Continuous forms (was writing, were moving) go with the scene that is already under way; past simple forms (ran, studied) go with the completed events that move the story on. The subject also tells you was vs were."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-8",
    "prompt": "I was hunting for my keys in the hallway when the doorbell ___.",
    "options": [
      "rang",
      "was ringing",
      "had been ringing",
      "rings"
    ],
    "answer": 0,
    "explain": "The search is the background scene (was hunting), so the bell is the interruption — one completed moment in past simple. 'was ringing' would turn a one-second ring into a second long scene, and the story already has one."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-9",
    "before": "The warehouse staff",
    "after": "the last pallet onto the lorry when the power cut out.",
    "options": [
      "were loading",
      "loaded",
      "have loaded"
    ],
    "answer": 0,
    "explain": "The power cut interrupts the loading halfway through, so the loading is the background: were loading. 'loaded' would mean they finished it first."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-10",
    "statement": "I was queuing at the bakery when my phone buzzed in my pocket.",
    "answer": true,
    "explain": "Textbook split: the queuing is the scene already in progress (past continuous) and the buzz is the single event that lands inside it (past simple)."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-11",
    "words": [
      "We",
      "were",
      "watching",
      "old",
      "home",
      "videos",
      "when",
      "my",
      "father",
      "started",
      "to",
      "cry.",
      "was",
      "starting"
    ],
    "answer": "We were watching old home videos when my father started to cry.",
    "explain": "The video-watching is the background (were watching); the tears are the foreground event that breaks into it (started). The extra 'was' and 'starting' would wrongly turn that event into a scene in progress."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-foreground-background-12",
    "prompt": "Tap every sentence that splits foreground and background correctly.",
    "options": [
      "We were clearing out Grandad's attic when we found his old love letters.",
      "My mum was noticing the ring on my finger while we were chatting.",
      "While my dad was cooking dinner, my mum got home from work.",
      "My cousin was slamming the door and stormed out.",
      "My aunt turned up while we were blowing up the balloons."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Background = the scene already running (clearing out, cooking, blowing up); foreground = the completed events that land inside it (found, got home, turned up). 'Noticing' and 'was slamming' are instant events, so they belong in the past simple: noticed, slammed."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-foreground-background-13",
    "words": [
      "We",
      "were",
      "eating",
      "when",
      "my",
      "nephew",
      "was",
      "spilled",
      "his",
      "juice."
    ],
    "remove": [
      6
    ],
    "explain": "The juice-spilling is a one-off event in the foreground, so it's plain past simple: 'spilled'. The extra 'was' would turn it into a scene in progress, which clashes with 'when'."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-foreground-background-14",
    "pairs": [
      [
        "We ___ dinner when Gran phoned.",
        "were having"
      ],
      [
        "Gran ___ just as we sat down.",
        "phoned"
      ],
      [
        "My cousins ___ in the pool all afternoon.",
        "were splashing"
      ],
      [
        "My uncle ___ the barbecue at six.",
        "lit"
      ]
    ],
    "explain": "Long scenes that stretch around other events take the past continuous (were having, were splashing); single completed actions dropped onto the timeline take the past simple (phoned, lit)."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-15",
    "prompt": "While my aunt was setting the table, my cousins ___ into the kitchen and grabbed all the bread.",
    "options": [
      "burst",
      "were bursting",
      "had been bursting"
    ],
    "answer": 0,
    "explain": "The table-setting is the background scene already running. The cousins' entrance is a quick, completed event in the foreground, which is why it pairs with the past simple 'grabbed'. A continuous form would push that burst into the background too."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-16",
    "before": "My grandparents were dancing in the living room when my phone",
    "after": "and ruined the moment.",
    "options": [
      "rang",
      "was ringing",
      "had rung"
    ],
    "answer": 0,
    "explain": "The dancing is the scene; the ring is the sharp event that cuts into it, so past simple. The following 'and ruined' confirms it belongs to the foreground chain."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-17",
    "statement": "My brother was dropping his phone in the pool while we were waiting for our parents.",
    "answer": false,
    "explain": "Dropping is instant, not a scene in progress — it's the foreground event: 'My brother dropped his phone in the pool while we were waiting for our parents.'"
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-18",
    "words": [
      "The",
      "chef",
      "burnt",
      "his",
      "hand",
      "while",
      "he",
      "was",
      "plating",
      "the",
      "desserts.",
      "burning",
      "plated"
    ],
    "answer": "The chef burnt his hand while he was plating the desserts.",
    "explain": "Plating the desserts is the activity that was going on (was plating); the burn is the sudden main event, so it takes the past simple: burnt. 'burning' and 'plated' are the extras."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-foreground-background-19",
    "prompt": "Tap every sentence that splits foreground and background correctly.",
    "options": [
      "I was scrubbing the oven when the smoke alarm went off.",
      "The front door was slamming shut while I was carrying the boxes in.",
      "I noticed the crack in the mug while I was drying it.",
      "The bulb was blowing while I was hoovering the stairs.",
      "While the toaster was smoking, I unplugged it at the wall."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Background scenes run in past continuous (was scrubbing, was drying, was smoking) and one-moment events sit in past simple (went off, noticed, unplugged). 'was slamming' and 'was blowing' stretch instant actions into scenes — they should be 'slammed' and 'blew'."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-foreground-background-20",
    "words": [
      "The",
      "security",
      "guard",
      "was",
      "locked",
      "the",
      "doors",
      "while",
      "we",
      "were",
      "finishing",
      "our",
      "coffee."
    ],
    "remove": [
      3
    ],
    "explain": "Locking the doors is the completed foreground event, so past simple 'locked' is enough. The extra 'was' tries to make it a background scene, but 'we were finishing our coffee' already fills that slot."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-foreground-background-21",
    "pairs": [
      [
        "The tap ___ all night in the empty flat.",
        "was dripping"
      ],
      [
        "A picture ___ off the wall during the storm.",
        "fell"
      ],
      [
        "We ___ the fridge when the power cut out.",
        "were defrosting"
      ],
      [
        "The oven timer ___ at exactly six.",
        "beeped"
      ]
    ],
    "explain": "Scenes that were already running take past continuous (was dripping, were defrosting); single completed moments take past simple (fell, beeped). The subject and the meaning point to one chip each."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-22",
    "prompt": "I ___ my sister with her homework when Dad suddenly walked in with the news.",
    "options": [
      "was helping",
      "helped",
      "had helped"
    ],
    "answer": 0,
    "explain": "'Dad suddenly walked in' is the foreground event that interrupts. The helping was already underway around it, so it takes the past continuous."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-23",
    "before": "I was carrying the shopping up the stairs when one of the bags",
    "after": "and the eggs rolled everywhere.",
    "options": [
      "split",
      "was splitting",
      "splits"
    ],
    "answer": 0,
    "explain": "The climb is the background (was carrying); the bag giving way is the single moment that changes everything, so past simple. A bag doesn't 'split' gradually in the middle of a story."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-24",
    "statement": "While my sister was revising for her exams, our cousins turned up unannounced.",
    "answer": true,
    "explain": "Correct: the revising is the background already in progress (past continuous), and the cousins' arrival is the completed foreground event (past simple)."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-25",
    "words": [
      "The",
      "lift",
      "was",
      "going",
      "down",
      "when",
      "the",
      "lights",
      "flickered.",
      "went",
      "were"
    ],
    "answer": "The lift was going down when the lights flickered.",
    "explain": "The descent is the scene in progress (was going down); the flicker is the sudden event inside it (past simple). The extras 'went' and 'were' would either flatten the background or double up the continuous."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-foreground-background-26",
    "prompt": "Tap every clause that sets the background — an action already in progress.",
    "options": [
      "while the technicians were rewiring the studio",
      "when the client signed the contract",
      "as the delivery van was pulling into the yard",
      "the alarm went off at midnight",
      "the shop assistants were restocking the shelves"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "Background clauses use was/were + -ing to show something already under way. 'signed' and 'went off' are single completed events — those are foreground, not scene-setting."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-foreground-background-27",
    "words": [
      "I",
      "was",
      "reading",
      "on",
      "the",
      "sofa",
      "when",
      "the",
      "cat",
      "was",
      "knocked",
      "my",
      "mug",
      "over."
    ],
    "remove": [
      9
    ],
    "explain": "The cat's knock is a single foreground event, so it's plain past simple: 'knocked'. The extra 'was' makes it a background scene — but that role already belongs to 'I was reading'."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-28",
    "prompt": "Which sentence puts the main event in the foreground correctly?",
    "options": [
      "I was locking the shed when the key snapped in half.",
      "I locked the shed when the key was snapping in half.",
      "I was locking the shed when the key was snapping in half."
    ],
    "answer": 0,
    "explain": "Locking up is the scene in progress (was locking); the snap is one instant, so past simple. The other two stretch the snap into a background action, which a metal key breaking can't be."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-29",
    "before": "The neighbours",
    "after": "their car when the storm broke, so they left it half covered in foam.",
    "options": [
      "were washing",
      "washed",
      "have washed"
    ],
    "answer": 0,
    "explain": "The washing was already under way and the storm cut it short — that's background, so past continuous. 'washed' would mean they washed it after the storm broke, which the foam contradicts."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-30",
    "statement": "I was dropping my umbrella while I was running for the bus.",
    "answer": false,
    "explain": "Dropping something is instant, so it's the foreground event: 'I dropped my umbrella while I was running for the bus.' Only the running is long enough to be the background."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-31",
    "words": [
      "My",
      "little",
      "brother",
      "was",
      "hiding",
      "under",
      "the",
      "stairs",
      "when",
      "we",
      "found",
      "him.",
      "were",
      "finding"
    ],
    "answer": "My little brother was hiding under the stairs when we found him.",
    "explain": "Hiding is the state already in progress (background); found is the completed discovery (foreground). 'Were' doesn't agree with 'my little brother', and 'finding' would blur a one-off discovery into a scene."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-foreground-background-32",
    "prompt": "In 'My uncle was carving the turkey when the lights went out', which part is the background scene already in progress?",
    "options": [
      "My uncle was carving the turkey",
      "the lights went out",
      "Both started and finished at the same moment"
    ],
    "answer": 0,
    "explain": "Past continuous marks the scene already running ('was carving'); past simple marks the single event that lands inside it ('went out')."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-foreground-background-33",
    "before": "When I let myself in, my mother",
    "after": "photos into an old album — she'd been at it for hours.",
    "options": [
      "was slotting",
      "slotted",
      "had slotted"
    ],
    "answer": 0,
    "explain": "'She'd been at it for hours' shows the sorting was already running when you arrived, so it's background: past continuous. 'Slotted' would mean she only started after you came in."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-foreground-background-34",
    "statement": "As the new hire was filling in her paperwork, the HR manager popped in to say hello.",
    "answer": true,
    "explain": "Correct: the paperwork is the longer action in progress (was filling in) and the manager's visit is the short completed event (popped in) that happens during it."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-foreground-background-35",
    "words": [
      "While",
      "the",
      "printer",
      "was",
      "warming",
      "up,",
      "I",
      "refilled",
      "the",
      "paper",
      "tray.",
      "warmed",
      "refilling"
    ],
    "answer": "While the printer was warming up, I refilled the paper tray.",
    "explain": "The warm-up is the scene running around you (was warming up); refilling the tray is the completed action you did inside it (past simple). 'warmed' and 'refilling' swap the two roles."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-1",
    "prompt": "Which sentence correctly shows that the staff left BEFORE the alarm went off?",
    "options": [
      "When the fire alarm went off, the staff had already left the building.",
      "When the fire alarm had gone off, the staff already left the building.",
      "When the fire alarm went off, the staff have already left the building.",
      "When the fire alarm was going off, the staff already left the building."
    ],
    "answer": 0,
    "explain": "The past perfect goes on the earlier event (leaving), and the simple past on the later one (the alarm). The others put it on the wrong clause or use a tense that can't mark earlier past."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-2",
    "before": "The restaurant hired Marco because he",
    "after": "in three Michelin-starred kitchens before.",
    "options": [
      "had worked",
      "has worked",
      "was working"
    ],
    "answer": 0,
    "explain": "His kitchen experience came before the hiring, so it needs the past perfect. 'Has worked' links to now, and 'was working' would mean at the same time."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-3",
    "statement": "The engineer explained that the machine broke down before he had arrived.",
    "answer": false,
    "explain": "The tenses are swapped. The breakdown came first, so it should be: 'the machine had broken down before he arrived'."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-4",
    "words": [
      "The",
      "office",
      "was",
      "empty",
      "because",
      "everyone",
      "had",
      "gone",
      "home.",
      "has",
      "went"
    ],
    "answer": "The office was empty because everyone had gone home.",
    "explain": "Going home happened before the office was found empty, so it takes had + past participle: 'had gone'. 'Has' points to now and 'went' can't mark the earlier past here."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-earlier-past-5",
    "prompt": "The past perfect belongs on the EARLIER event. Tap every sentence that gets it right.",
    "options": [
      "By the time my parents divorced, my sister had already left home.",
      "My brother had called me after he arrived at the airport.",
      "When I finally met my in-laws, they had heard a lot about me.",
      "She admitted that she had never liked my boyfriend.",
      "The baby had fallen asleep, and then we had put her in the cot."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "In 'called me after he arrived' the arrival came first, so it should be 'after he had arrived'. In the cot sentence, putting her down came second, so it should be 'and then we put her in the cot'."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-earlier-past-6",
    "words": [
      "Before",
      "the",
      "factory",
      "closed",
      "down,",
      "it",
      "had",
      "did",
      "employed",
      "two",
      "hundred",
      "people."
    ],
    "remove": [
      7
    ],
    "explain": "The past perfect is just had + past participle: 'had employed'. 'Did' has no job here — you never stack it on top of had."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-earlier-past-7",
    "pairs": [
      [
        "By the time I got home,",
        "my flatmate had cooked dinner."
      ],
      [
        "When my sister rang,",
        "I had already gone to bed."
      ],
      [
        "My mum was upset because",
        "I had forgotten her birthday."
      ],
      [
        "He apologized once he realized",
        "he had hurt her feelings."
      ]
    ],
    "explain": "Each right-hand half is the earlier event in the past perfect; each left-hand half sets the later past moment you measure it against."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-8",
    "prompt": "By the time I arrived at my grandmother's house, everyone ___ the presents.",
    "options": [
      "had already opened",
      "have already opened",
      "had already open",
      "is already opening"
    ],
    "answer": 0,
    "explain": "Arriving is the later past action; opening the presents happened before it, so the earlier event takes the past perfect: had already opened. 'Have' is present perfect, 'open' isn't the participle, and 'is opening' is present."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-9",
    "before": "Rosa didn't recognize her stepbrother at the reunion because they",
    "after": "each other since childhood.",
    "options": [
      "hadn't seen",
      "haven't seen",
      "didn't see",
      "weren't seeing"
    ],
    "answer": 0,
    "explain": "The gap runs up to an earlier past moment (the reunion), so use the past perfect: hadn't seen. 'Haven't seen' would need a present reference point, and the past simple can't stretch across 'since'."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-10",
    "statement": "My parents had been married for thirty years before they decided to renew their vows.",
    "answer": true,
    "explain": "Correct. 'Had been married' is the earlier situation, and 'decided' is the later past action it leads up to."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-11",
    "words": [
      "Had",
      "the",
      "courier",
      "already",
      "delivered",
      "the",
      "parcel",
      "when",
      "you",
      "got",
      "in?",
      "did",
      "has"
    ],
    "answer": "Had the courier already delivered the parcel when you got in?",
    "explain": "In questions, had moves to the front: 'Had the courier already delivered...?' You don't add 'did', and 'has' would drop the earlier-past meaning."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-earlier-past-12",
    "words": [
      "Before",
      "my",
      "grandfather",
      "had",
      "died,",
      "he",
      "had",
      "written",
      "letters",
      "to",
      "all",
      "of",
      "us."
    ],
    "remove": [
      3
    ],
    "explain": "The later event in a 'before' clause stays in the past simple: Before my grandfather died... Only the earlier event keeps the past perfect: he had written letters to all of us."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-13",
    "prompt": "Which sentence shows that the batteries died BEFORE the remote stopped working?",
    "options": [
      "The remote stopped working because the batteries had died.",
      "The remote had stopped working because the batteries died.",
      "The remote was stopping because the batteries had died.",
      "The remote stopped working because the batteries were dying."
    ],
    "answer": 0,
    "explain": "The past perfect marks whichever event came first. Putting 'had died' on the batteries makes them the earlier event."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-14",
    "before": "The bathroom mirror was covered in steam because someone",
    "after": "a shower just before me.",
    "options": [
      "had had",
      "had have",
      "has had",
      "was having"
    ],
    "answer": 0,
    "explain": "'Had had' looks odd but is right: had (auxiliary) + had (past participle of have) for the earlier shower."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-15",
    "statement": "I couldn't find my keys because I had left them on the hall table, so I had gone back inside.",
    "answer": false,
    "explain": "Only the earlier event takes the past perfect. Going back inside came afterwards, so it should be simple past: so I went back inside."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-earlier-past-16",
    "prompt": "Tap every sentence where the past perfect correctly marks the earlier event.",
    "options": [
      "The candidate was nervous because she had never given a presentation before.",
      "We had finished the audit before the inspector arrives.",
      "By the time the shop opened, the queue had grown to fifty people.",
      "The office had smelled of paint because they painted it that morning.",
      "Once the union had voted, management changed its offer."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "The past perfect belongs to whichever event came first. 'Before the inspector arrives' mixes in a present tense, and 'had smelled ... painted' reverses the order — the painting came first, so it should be 'smelled ... had painted'."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-earlier-past-17",
    "pairs": [
      [
        "The intern couldn't log in",
        "because IT hadn't set up her account."
      ],
      [
        "The interview went badly",
        "because he hadn't researched the company."
      ],
      [
        "They cancelled the night shift",
        "because demand had dropped."
      ],
      [
        "The chef was furious",
        "because the supplier had sent the wrong order."
      ]
    ],
    "explain": "Each second half gives the cause that happened earlier, so it sits in the past perfect while the main event stays in the simple past."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-18",
    "prompt": "By the time I got to the warehouse, my shift ___ already started.",
    "options": [
      "had",
      "has",
      "was",
      "did"
    ],
    "answer": 0,
    "explain": "Two past events: getting there, and the shift starting earlier. The earlier one takes had + past participle — 'had already started'."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-19",
    "before": "The kettle was still warm because my flatmate",
    "after": "tea about ten minutes earlier.",
    "options": [
      "had made",
      "was making",
      "made",
      "has made"
    ],
    "answer": 0,
    "explain": "Making the tea happened before the kettle was warm, so we mark that earlier action with had made."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-20",
    "words": [
      "She",
      "realised",
      "she",
      "had",
      "not",
      "charged",
      "the",
      "phone",
      "before",
      "she",
      "left",
      "the",
      "house.",
      "was",
      "charging"
    ],
    "answer": "She realised she had not charged the phone before she left the house.",
    "explain": "The negative past perfect (had not charged) marks the omission that came before leaving the house."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-earlier-past-21",
    "words": [
      "My",
      "cousin",
      "had",
      "been",
      "moved",
      "to",
      "Berlin",
      "before",
      "I",
      "was",
      "born."
    ],
    "remove": [
      3
    ],
    "explain": "The past perfect is simply had + moved. 'Been' doesn't belong — he moved himself, so this isn't passive: My cousin had moved to Berlin before I was born."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-22",
    "statement": "When my dad got to the station, the train has already left.",
    "answer": false,
    "explain": "Wrong. The reference point is past ('got to the station'), so the earlier event needs had already left, not the present perfect has already left."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-23",
    "prompt": "Choose the sentence that correctly marks the earlier past event.",
    "options": [
      "My grandparents had emigrated to Canada long before I was born.",
      "My grandparents emigrated to Canada long before I had been born.",
      "My grandparents have emigrated to Canada long before I was born.",
      "My grandparents had emigrate to Canada long before I was born."
    ],
    "answer": 0,
    "explain": "Emigrating is the earlier event, so it takes the past perfect; being born is the later reference point in the past simple. The second reverses the two, the third uses present perfect with a past time frame, and the last drops the participle."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-24",
    "before": "I didn't recognise the receptionist because she",
    "after": "only started the week before.",
    "options": [
      "had",
      "has",
      "was",
      "did"
    ],
    "answer": 0,
    "explain": "Her starting date comes before the moment of not recognising her, so use 'had only started'. 'The week before' is a classic past perfect time marker."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-earlier-past-25",
    "prompt": "Which sentences correctly use the past perfect for the EARLIER of two past events?",
    "options": [
      "The café was empty because the lunch rush had ended an hour before.",
      "I had recognised the umbrella as soon as I had seen the handle.",
      "He couldn't sit down; someone had put a wet coat on every chair.",
      "The washing machine had finished by the time I came back from the shed.",
      "We had walked to the library while it had rained."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "explain": "Each correct one pairs a single past perfect (the earlier event) with a simple past (the later one). The umbrella and library sentences wrongly put both clauses in the past perfect."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-26",
    "words": [
      "had",
      "never",
      "He",
      "seen",
      "such",
      "a",
      "tidy",
      "kitchen",
      "before",
      "that",
      "evening.",
      "have",
      "saw"
    ],
    "answer": "He had never seen such a tidy kitchen before that evening.",
    "explain": "Past perfect with 'never … before' looks back from a point in the past ('that evening') to everything that came earlier."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-earlier-past-27",
    "words": [
      "The",
      "bin",
      "was",
      "overflowing",
      "because",
      "nobody",
      "had",
      "been",
      "emptied",
      "it",
      "all",
      "week"
    ],
    "remove": [
      7
    ],
    "explain": "Nobody had emptied it — this is active, so 'been' has no place. Had + past participle is all you need."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-earlier-past-28",
    "pairs": [
      [
        "By the time we arrived, the last bus …",
        "… had left."
      ],
      [
        "The desk drawer was empty because I …",
        "… had cleared it out."
      ],
      [
        "She couldn't open the door; her neighbour …",
        "… had changed the lock."
      ],
      [
        "The floor was spotless because Dad …",
        "… had mopped it."
      ]
    ],
    "explain": "Each right-hand piece is the earlier event, so all four take had + past participle."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-29",
    "prompt": "The barista ___ the café long before the new owners took over.",
    "options": [
      "had left",
      "has left",
      "was leaving",
      "leaves"
    ],
    "answer": 0,
    "explain": "'Long before' signals an event further back than the takeover, so the past perfect fits: 'had left'."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-30",
    "statement": "She was exhausted at the interview because she hadn't slept the night before.",
    "answer": true,
    "explain": "Correct. The sleepless night came before the interview, so the earlier event uses the past perfect: 'hadn't slept'."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-earlier-past-31",
    "before": "When Marcus finally called his sister, she",
    "after": "already forgiven him.",
    "options": [
      "had",
      "has",
      "was"
    ],
    "answer": 0,
    "explain": "The forgiving came before the call, so it needs the past perfect: had already forgiven. 'Has' would point to now, and 'was' can't form the past perfect at all."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-32",
    "words": [
      "My",
      "brother",
      "had",
      "already",
      "apologized",
      "before",
      "Mum",
      "found",
      "out.",
      "has",
      "apologize"
    ],
    "answer": "My brother had already apologized before Mum found out.",
    "explain": "The apology came first, so it takes the past perfect; 'found out' is the later event in the past simple. 'Has' and 'apologize' don't fit after had."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-earlier-past-33",
    "words": [
      "After",
      "she",
      "had",
      "packed",
      "the",
      "last",
      "box",
      "she",
      "did",
      "locked",
      "the",
      "garage",
      "door"
    ],
    "remove": [
      8
    ],
    "explain": "'Locked' is already past. The earlier action (had packed) takes the past perfect; the later one is plain simple past — no 'did' needed."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-earlier-past-34",
    "prompt": "By the time I got to the launderette, someone ___ the last dryer.",
    "options": [
      "had taken",
      "was taking",
      "has taken",
      "took"
    ],
    "answer": 0,
    "explain": "The dryer was taken BEFORE I arrived, so the earlier event uses the past perfect: had taken."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-earlier-past-35",
    "statement": "When we reached the corner shop, it had already closed for the night.",
    "answer": true,
    "explain": "Correct. The shop closed first, we arrived second — past perfect for the earlier event, simple past for the later one."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-earlier-past-36",
    "words": [
      "Nobody",
      "told",
      "me",
      "that",
      "my",
      "cousin",
      "had",
      "moved",
      "to",
      "Lisbon.",
      "has",
      "move"
    ],
    "answer": "Nobody told me that my cousin had moved to Lisbon.",
    "explain": "The move happened before anyone told (or didn't tell) you, so the earlier event is had moved. 'Has' points to the present, and 'move' isn't a participle."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-1",
    "prompt": "By the time their daughter finally rang, her parents ___ for news all night.",
    "options": [
      "had been waiting",
      "have been waiting",
      "were waiting",
      "had waiting"
    ],
    "answer": 0,
    "explain": "'By the time she rang' fixes a moment in the past, and had been + -ing stresses how long the waiting had gone on before it. 'Have been waiting' points at now, 'were waiting' can't stretch across 'all night' up to that call, and 'had waiting' isn't a real form."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-past-perfect-continuous-2",
    "before": "My grandparents",
    "after": "in the same little house for forty years before they moved to the coast.",
    "options": [
      "had been living",
      "have been living",
      "were living"
    ],
    "answer": 0,
    "explain": "The move already happened, and 'for forty years' measures the living that led up to it — had been + -ing. 'Have been living' would mean they're still there; past continuous can't carry a duration up to 'before they moved'."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-3",
    "statement": "The manager had been knowing about the budget cuts for weeks before he told the team.",
    "answer": false,
    "explain": "'Know' is a stative verb, so it isn't used in continuous forms. The natural sentence is: The manager had known about the budget cuts for weeks."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-4",
    "words": [
      "She",
      "had",
      "been",
      "training",
      "new",
      "recruits",
      "for",
      "months",
      "before",
      "the",
      "merger.",
      "was",
      "train"
    ],
    "answer": "She had been training new recruits for months before the merger.",
    "explain": "Had been + -ing plus 'for months' stresses how long the training had gone on before the past event. 'Was' and 'train' don't fit the structure."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-past-perfect-continuous-5",
    "pairs": [
      [
        "My sister looked exhausted because",
        "she had been looking after the twins all night."
      ],
      [
        "My uncle's hands were covered in flour because",
        "he had been baking for the party."
      ],
      [
        "The kids were soaked because",
        "they had been playing in the rain."
      ],
      [
        "Dad's voice was hoarse because",
        "he had been shouting at the match."
      ]
    ],
    "explain": "Each past state is the leftover evidence of an activity that had been going on before it — the classic use of had been + -ing. Match the clue (flour, rain, hoarse voice) to the activity that would cause it."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-past-perfect-continuous-6",
    "words": [
      "They",
      "had",
      "been",
      "dating",
      "since",
      "for",
      "three",
      "years",
      "before",
      "the",
      "wedding."
    ],
    "remove": [
      4
    ],
    "explain": "Use 'for' with a length of time (for three years) and 'since' with a starting point (since 2019). Only one can stay, and 'three years' is a length — so 'since' goes."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-past-perfect-continuous-7",
    "prompt": "Tap every sentence that uses the past perfect continuous correctly.",
    "options": [
      "My parents had been saving for the wedding for years before we set a date.",
      "She had been owning that house since her divorce.",
      "By the time we adopted, we had been waiting for eighteen months.",
      "He was been looking after his grandchildren all summer.",
      "Their marriage had been struggling long before anyone noticed."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "The three correct ones all use had been + -ing for an activity running up to a past moment. 'Had been owning' fails because own is stative, and 'was been looking' mixes up the auxiliaries — it needs 'had been'."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-8",
    "prompt": "Which sentence stresses how long the activity had been going on before a past moment?",
    "options": [
      "By the time we arrived, Mum had been cooking for five hours.",
      "By the time we arrived, Mum had cooked three different dishes.",
      "By the time we arrived, Mum cooked for five hours."
    ],
    "answer": 0,
    "explain": "Had been + -ing puts the spotlight on duration ('for five hours' of cooking). Option 2 uses the past perfect simple to count finished results (three dishes), and option 3's past simple doesn't link the cooking back to our arrival at all."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-past-perfect-continuous-9",
    "before": "They finally got their own place in June; before that, my cousin",
    "after": "on our sofa since Christmas.",
    "options": [
      "had been sleeping",
      "has been sleeping",
      "was sleeping"
    ],
    "answer": 0,
    "explain": "June is the past reference point, and 'since Christmas' measures the sleeping right up to it — had been + -ing. 'Has been sleeping' would mean he's still on the sofa, and 'was sleeping' loses the since-Christmas stretch."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-10",
    "statement": "When I arrived at the family reunion, my cousins had been arguing about the inheritance for two hours.",
    "answer": true,
    "explain": "Correct. The arguing started before I arrived and 'for two hours' measures it right up to that past moment — exactly what had been + -ing is for."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-11",
    "words": [
      "How",
      "long",
      "had",
      "they",
      "been",
      "trying",
      "for",
      "a",
      "baby",
      "before",
      "the",
      "twins",
      "arrived?",
      "have",
      "were"
    ],
    "answer": "How long had they been trying for a baby before the twins arrived?",
    "explain": "Questions invert the auxiliary: had + subject + been + -ing. 'How long' asks about duration up to a past moment (the twins arriving), so 'have' and 'were' don't fit."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-past-perfect-continuous-12",
    "words": [
      "She",
      "was",
      "had",
      "been",
      "looking",
      "after",
      "her",
      "father",
      "for",
      "months",
      "before",
      "he",
      "recovered."
    ],
    "remove": [
      1
    ],
    "explain": "The past perfect continuous is just 'had been + -ing' — there's no room for an extra 'was'. 'She had been looking after her father for months' shows the caring running right up to his recovery."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-13",
    "prompt": "The office smelled of smoke because someone ___ in the stairwell.",
    "options": [
      "had been smoking",
      "had been smoked",
      "has been smoking",
      "had being smoking"
    ],
    "answer": 0,
    "explain": "Past perfect continuous is had + been + -ing, and it explains the situation found at a past moment (the smell). 'Had been smoked' is passive, 'has been' is present perfect, and 'had being' is never correct."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-past-perfect-continuous-14",
    "before": "When the CEO finally called back, Priya had been",
    "after": "on hold for twenty minutes.",
    "options": [
      "waiting",
      "waited",
      "wait"
    ],
    "answer": 0,
    "explain": "After had been you need the -ing form: had been waiting. It stresses how long the wait had gone on before the call came."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-15",
    "statement": "The warehouse crew were sweating because they had been unloading trucks since seven that morning.",
    "answer": true,
    "explain": "Correct: had been unloading gives the duration of the earlier activity, and it explains why they were sweating at that past moment."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-past-perfect-continuous-16",
    "prompt": "Tap every correctly formed past perfect continuous phrase.",
    "options": [
      "had been commuting",
      "had being working",
      "had been applying",
      "has been supervising",
      "had been negotiating"
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "The pattern is had + been + -ing. 'Had being working' uses 'being' instead of 'been', and 'has been supervising' is present perfect continuous, not past."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-past-perfect-continuous-17",
    "pairs": [
      [
        "work",
        "had been working"
      ],
      [
        "run",
        "had been running"
      ],
      [
        "manage",
        "had been managing"
      ],
      [
        "study",
        "had been studying"
      ]
    ],
    "explain": "Spelling of the -ing form: work keeps its shape, run doubles the final n, manage drops the e, study just adds -ing. He had been working nights, she had been running the department, and so on."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-18",
    "prompt": "Which sentence stresses how long the activity had gone on before the interview?",
    "options": [
      "She had prepared for the interview.",
      "She had been preparing for the interview for three weeks.",
      "She was preparing for the interview.",
      "She prepared for the interview."
    ],
    "answer": 1,
    "explain": "Only the past perfect continuous with 'for three weeks' highlights the duration of the earlier activity. The others just report a finished action or one in progress."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-past-perfect-continuous-19",
    "words": [
      "The",
      "barista",
      "had",
      "been",
      "making",
      "coffees",
      "non-stop",
      "since",
      "for",
      "three",
      "hours."
    ],
    "remove": [
      7
    ],
    "explain": "Use 'for' with a length of time: for three hours. 'Since' needs a starting point (since 8 a.m.), so it's the extra word here."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-past-perfect-continuous-20",
    "before": "By noon the delivery driver",
    "after": "been driving for five hours straight.",
    "options": [
      "had",
      "has",
      "was"
    ],
    "answer": 0,
    "explain": "The past reference point is 'by noon', so you need had been driving. 'Has been' points to now, and 'was been' isn't a form."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-21",
    "words": [
      "Their",
      "eyes",
      "were",
      "red",
      "because",
      "they",
      "had",
      "been",
      "crying.",
      "was",
      "cried"
    ],
    "answer": "Their eyes were red because they had been crying.",
    "explain": "Past perfect continuous explains a visible past result: the red eyes came from crying that had been going on beforehand. 'Was' and 'cried' are the extras — 'they' needs 'had been', not a simple past."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-22",
    "statement": "My aunt had been knowing my mother since they were children.",
    "answer": false,
    "explain": "Wrong: 'know' is a stative verb, so it doesn't take continuous forms. Say 'My aunt had known my mother since they were children.'"
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-23",
    "prompt": "The photocopier finally broke down. It ___ strange noises for weeks.",
    "options": [
      "had been making",
      "had been made",
      "was been making",
      "had being making"
    ],
    "answer": 0,
    "explain": "Had been making shows the activity continuing over weeks up to the breakdown. The others mix up the passive, the wrong auxiliary, or 'being' instead of 'been'."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-past-perfect-continuous-24",
    "before": "The keys were freezing because they",
    "after": "on the doorstep all night.",
    "options": [
      "had been lying",
      "have been lying",
      "had been lain",
      "are lying"
    ],
    "answer": 0,
    "explain": "Had been + -ing stresses the duration ('all night') up to the past moment when the keys were picked up. 'Had been lain' mixes in a past participle — the pattern is always had been + -ing."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-past-perfect-continuous-25",
    "prompt": "Tap every sentence that uses the past perfect continuous correctly.",
    "options": [
      "The bin was overflowing because nobody had been taking it out for a week.",
      "She had been ironing shirts for an hour when the iron suddenly broke.",
      "The tap had been drip for ages before we called someone.",
      "We had been waiting in the queue for twenty minutes when the doors finally opened.",
      "I had been knowing that little corner shop for years."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "Had been + -ing needs a real -ing form ('had been dripping', not 'had been drip'), and stative verbs like know don't take the continuous — use 'had known'."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-26",
    "words": [
      "The",
      "windows",
      "were",
      "steamed",
      "up",
      "because",
      "she",
      "had",
      "been",
      "cooking",
      "for",
      "hours.",
      "was",
      "cooked"
    ],
    "answer": "The windows were steamed up because she had been cooking for hours.",
    "explain": "The steamed-up windows are the past result; had been cooking for hours says how long the activity had been going on before that."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-past-perfect-continuous-27",
    "words": [
      "The",
      "sofa",
      "smelled",
      "of",
      "smoke",
      "because",
      "the",
      "candle",
      "had",
      "been",
      "being",
      "burning",
      "all",
      "evening."
    ],
    "remove": [
      10
    ],
    "explain": "'Had been burning' is the full form — 'being' is the extra word. Never stack been and being together."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-past-perfect-continuous-28",
    "pairs": [
      [
        "Her fingers were covered in ink",
        "she had been signing forms all morning."
      ],
      [
        "The whole kitchen smelled of garlic",
        "he had been cooking since noon."
      ],
      [
        "The car windows were completely foggy",
        "they had been sitting inside for an hour."
      ],
      [
        "His eyes were red and sore",
        "he had been staring at the screen since dawn."
      ]
    ],
    "explain": "Each had been + -ing clause explains the past situation by saying how long the earlier activity had been going on."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-29",
    "prompt": "By the time the plumber arrived, water ___ from the kitchen tap for over an hour.",
    "options": [
      "had been dripping",
      "had dripped",
      "has been dripping",
      "was dripping"
    ],
    "answer": 0,
    "explain": "The dripping was still going on and we're stressing how long it lasted before an earlier past moment (the plumber arrived), so it's had been dripping."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-30",
    "statement": "When I finally found my umbrella, I had been searching the whole flat for twenty minutes.",
    "answer": true,
    "explain": "Correct. The searching had been going on for twenty minutes before the past moment of finding it — classic had been + -ing with a 'for' phrase."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-31",
    "prompt": "The mechanic's hands were filthy — he ___ under the car since eight o'clock.",
    "options": [
      "had been working",
      "had worked",
      "was working",
      "had been worked"
    ],
    "answer": 0,
    "explain": "'Since eight o'clock' plus a visible past result (filthy hands) calls for had been working: an activity running right up to that past moment."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-past-perfect-continuous-32",
    "statement": "The floor was soaking wet because the washing machine had been leaked all night.",
    "answer": false,
    "explain": "It should be 'had been leaking all night'. The form is had been + -ing, never had been + past participle."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-33",
    "words": [
      "How",
      "long",
      "had",
      "she",
      "been",
      "commuting",
      "to",
      "the",
      "city?",
      "was",
      "commuted"
    ],
    "answer": "How long had she been commuting to the city?",
    "explain": "In questions the auxiliary 'had' comes before the subject: How long had she been commuting...? 'How long' is the natural way to ask about duration with this tense."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-past-perfect-continuous-34",
    "words": [
      "How",
      "long",
      "had",
      "they",
      "been",
      "queuing",
      "outside",
      "the",
      "shop?",
      "have",
      "queued"
    ],
    "answer": "How long had they been queuing outside the shop?",
    "explain": "In questions the order is how long + had + subject + been + -ing. 'How long' is the natural partner of this tense."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-past-perfect-continuous-35",
    "prompt": "Which sentence stresses how long the activity had been going on before the phone rang?",
    "options": [
      "I had cleaned the fridge.",
      "I had been cleaning the fridge for two hours.",
      "I cleaned the fridge.",
      "I was cleaning the fridge."
    ],
    "answer": 1,
    "explain": "Only 'had been cleaning ... for two hours' does both jobs: it looks back from a past moment and measures the duration. 'Had cleaned' just says the job was finished."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-1",
    "prompt": "Which version tells the story correctly?",
    "options": [
      "I was carrying the boxes up the stairs when one of them split, because the rain had soaked the cardboard.",
      "I carried the boxes up the stairs when one of them was splitting, because the rain was soaking the cardboard.",
      "I had carried the boxes up the stairs when one of them had split, because the rain soaked the cardboard.",
      "I had been carrying the boxes up the stairs when one of them was splitting, because the rain has soaked the cardboard."
    ],
    "answer": 0,
    "explain": "The natural weave: past continuous for the ongoing action (was carrying), past simple for the sudden event that interrupts it (split), past perfect for the cause that came first (had soaked). The others swap those roles, so the order of events stops making sense."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-2",
    "before": "The delivery driver arrived at reception soaked to the skin. It",
    "after": "for hours, and the parcels he handed over were dripping.",
    "options": [
      "had been raining",
      "was raining",
      "had rained",
      "rained"
    ],
    "answer": 0,
    "explain": "A visible result plus a long run-up to a past moment is exactly what the past perfect continuous is for. 'Had rained' reports it as a finished fact and loses the duration behind the soaking; 'was raining' and 'rained' can't reach back before he arrived."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-3",
    "statement": "I was cooking dinner when the smoke alarm went off, because I had left a tea towel on the hob.",
    "answer": true,
    "explain": "A clean three-tense weave: past continuous for the background (was cooking), past simple for the interruption (went off), past perfect for the earlier cause (had left)."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-4",
    "words": [
      "When",
      "we",
      "got",
      "home,",
      "Dad",
      "was",
      "still",
      "cooking",
      "the",
      "meal",
      "he",
      "had",
      "promised",
      "us.",
      "has",
      "been"
    ],
    "answer": "When we got home, Dad was still cooking the meal he had promised us.",
    "explain": "Past simple for the arrival (got), past continuous for what was already underway (was still cooking), past perfect for the earlier promise (had promised). 'Has' and 'been' don't fit anywhere."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-weaving-the-story-5",
    "prompt": "You're telling the story of a disastrous first week at a law firm. Tap every sentence that uses the narrative tenses correctly.",
    "options": [
      "I was reading the contract when my new boss knocked on the door.",
      "I was knowing nobody's name for the first three days.",
      "By Friday I had already made three mistakes that nobody let me forget.",
      "I had been working there for two days when I have lost my security pass.",
      "My hands were shaking because I had been apologising all morning."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "explain": "The three good ones cover the core moves: background cut across by an event, an earlier completed event before 'By Friday', and duration explaining a visible result. The others break rules — 'know' is stative so it has no continuous form, and a present perfect ('have lost') can't sit inside a finished past story; it needs 'lost'."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-weaving-the-story-6",
    "pairs": [
      [
        "When I passed the office at midnight, Ana ___ at her desk.",
        "was working"
      ],
      [
        "By the time I joined the firm, she ___ in three departments.",
        "had worked"
      ],
      [
        "Her eyes were red because she ___ on the pitch since dawn.",
        "had been working"
      ],
      [
        "In the end, she ___ out the whole problem in twenty minutes.",
        "worked"
      ]
    ],
    "explain": "One verb, four jobs: in progress when something cuts across it → past continuous; earlier completed events before a past point → past perfect; duration behind a visible result → past perfect continuous; the main event that moves the story on → past simple."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-weaving-the-story-7",
    "words": [
      "I",
      "was",
      "walking",
      "home",
      "when",
      "I",
      "had",
      "realised",
      "that",
      "I",
      "had",
      "left",
      "my",
      "umbrella",
      "in",
      "the",
      "café."
    ],
    "remove": [
      6
    ],
    "explain": "The realisation is the event that interrupts the walk, so it's past simple: 'when I realised'. Only the umbrella belongs further back — that second 'had left' is correct and stays."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-8",
    "prompt": "While I ___ the shelves in the garage, I found the photo album we had lost years earlier.",
    "options": [
      "was clearing",
      "had cleared",
      "had been clearing",
      "have been clearing"
    ],
    "answer": 0,
    "explain": "Three tenses stack here. 'While' + past continuous ('was clearing') sets the background activity, the past simple 'found' cuts across it, and 'had lost' sits furthest back. The perfect forms would wrongly push the clearing before the finding."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-9",
    "statement": "When I arrived at the reunion, I realized I was forgetting to bring the photo album my grandmother had made.",
    "answer": false,
    "explain": "The forgetting happened before the arrival, so it needs the past perfect: I had forgotten. 'Was forgetting' wrongly makes it an action in progress at that moment."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-10",
    "before": "The laundrette was empty when I arrived, because the owner",
    "after": "the door early and gone home.",
    "options": [
      "had locked",
      "was locking",
      "locked",
      "has locked"
    ],
    "answer": 0,
    "explain": "Both actions happened before I arrived, so use the past perfect: 'had locked ... and gone home'. The shared 'had' is what lets 'gone' work — 'was locking ... and gone' or 'locked ... and gone' simply don't join up."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-11",
    "words": [
      "We",
      "had",
      "been",
      "queuing",
      "outside",
      "the",
      "cinema",
      "for",
      "an",
      "hour",
      "when",
      "the",
      "doors",
      "finally",
      "opened.",
      "were",
      "opening"
    ],
    "answer": "We had been queuing outside the cinema for an hour when the doors finally opened.",
    "explain": "'For an hour when...' is the classic signal for the past perfect continuous: a long activity running right up to a past moment, closed off by a past simple event ('opened'). 'were' and 'opening' are the spare tiles."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-weaving-the-story-12",
    "prompt": "Tap every sentence where the narrative tenses fit together correctly.",
    "options": [
      "The café had already closed by the time we got there, so we sat on a bench outside.",
      "I was ironing a shirt when the phone rang, and I burnt my thumb.",
      "Someone stole my bike while I had been shopping in the supermarket.",
      "She had been cleaning the windows all morning, so her arms ached by lunchtime.",
      "When I opened the fridge, I saw that someone drank the last of the milk."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "The correct ones each pair an earlier action with a later one properly. 'While I had been shopping' should be 'while I was shopping' — 'while' wants the ongoing background. And 'someone drank the last of the milk' happened before I opened the fridge, so it needs 'had drunk'."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-weaving-the-story-13",
    "pairs": [
      [
        "While I ___ the dishes, the doorbell rang.",
        "was washing"
      ],
      [
        "The sink was full because the tap ___ all afternoon.",
        "had been dripping"
      ],
      [
        "I ___ the tap tightly, but it still leaked.",
        "turned"
      ],
      [
        "By the time the plumber arrived, the water ___ the floor.",
        "had reached"
      ]
    ],
    "explain": "One story, four jobs: past continuous for the background action, past perfect continuous for the long build-up behind a result, past simple for a single completed event, and past perfect for what was already done before another past moment."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-weaving-the-story-14",
    "words": [
      "We",
      "were",
      "watching",
      "old",
      "wedding",
      "videos",
      "when",
      "the",
      "power",
      "had",
      "cut",
      "out."
    ],
    "remove": [
      9
    ],
    "explain": "The event that interrupts the background action comes after it, so it takes the past simple: when the power cut out. 'Had' would wrongly push it earlier than the watching."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-15",
    "prompt": "It was chaos at the restaurant that night. Two waiters had called in sick, and by the time the first customers walked in, the chef ___ half the menu.",
    "options": [
      "had already scrapped",
      "already scrapped",
      "has already scrapped",
      "was already scrapped"
    ],
    "answer": 0,
    "explain": "'By the time...' fixes a past moment, and anything finished before it takes the past perfect. 'Already scrapped' would put the scrapping after the customers arrived, 'has scrapped' drags a present perfect into a finished story, and 'was scrapped' is passive — the chef did it."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-16",
    "statement": "By the time the auditors reached the third floor, the finance team shredded every document they were worried about.",
    "answer": false,
    "explain": "The shredding clearly happened before the auditors got there, so it needs the past perfect: 'had shredded'. As written, the past simple reads as if they only started shredding once the auditors turned up."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-17",
    "before": "My cousins had been arguing about the inheritance for months before their mother finally",
    "after": "them all to sit down at the same table.",
    "options": [
      "got",
      "had got",
      "was getting"
    ],
    "answer": 0,
    "explain": "The past perfect continuous covers the long run-up (had been arguing); the single event that ends it is past simple: got. A second past perfect would push the event back before itself."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-18",
    "words": [
      "The",
      "phone",
      "had",
      "been",
      "ringing",
      "for",
      "a",
      "minute",
      "before",
      "anyone",
      "in",
      "the",
      "call",
      "centre",
      "picked",
      "it",
      "up.",
      "was",
      "rang"
    ],
    "answer": "The phone had been ringing for a minute before anyone in the call centre picked it up.",
    "explain": "Two layers hand over: the past perfect continuous carries the minute of ringing up to the moment, and the past simple ('picked it up') is the event that ends it. The extras 'was' and 'rang' would flatten both actions into one time frame."
  },
  {
    "kind": "match",
    "id": "b2-narrative-tenses-weaving-the-story-19",
    "pairs": [
      [
        "Everyone was chatting in the kitchen",
        "past continuous"
      ],
      [
        "Then my father stood up",
        "past simple"
      ],
      [
        "He had written his speech the night before",
        "past perfect"
      ],
      [
        "They had been waiting for this toast for years",
        "past perfect continuous"
      ]
    ],
    "explain": "One paragraph, four jobs: set the scene in progress, move the story forward, flash back to a finished earlier action, and show how long something had been going on before that moment."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-weaving-the-story-20",
    "words": [
      "When",
      "the",
      "shop",
      "assistant",
      "was",
      "turned",
      "around,",
      "the",
      "shoplifter",
      "had",
      "already",
      "gone."
    ],
    "remove": [
      4
    ],
    "explain": "'Turned around' is the moment the story pins itself to, so it's past simple. 'Was turned around' makes it passive — as if someone spun her round — and the escape happened earlier, which is why 'had already gone' is right."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-21",
    "prompt": "It was Sunday afternoon and the whole family ___ in the garden when my aunt shouted that she had lost her wedding ring.",
    "options": [
      "was relaxing",
      "had relaxed",
      "has been relaxing",
      "had been relaxed"
    ],
    "answer": 0,
    "explain": "The scene in progress takes the past continuous (was relaxing); the shout interrupts it in the past simple, and the earlier loss goes in the past perfect (had lost). The other forms either flash back or use the wrong auxiliary."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-22",
    "statement": "While I was waiting at the bus stop, I realised I have left my keys on the kitchen counter.",
    "answer": false,
    "explain": "'Have left' is present perfect, which can't sit inside a past narrative. The keys were forgotten before the realisation, so it needs the past perfect: 'I had left my keys on the kitchen counter'."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-23",
    "before": "The interview had been going badly for twenty minutes. Then they asked about my last job, and I suddenly",
    "after": "exactly what to say.",
    "options": [
      "knew",
      "was knowing",
      "had been knowing",
      "have known"
    ],
    "answer": 0,
    "explain": "'Know' is stative, so it has no continuous form at all — that rules out two options instantly. 'Suddenly' marks a single completed event pushing the story forward, so the past simple is the one that fits."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-24",
    "words": [
      "My",
      "sister",
      "had",
      "been",
      "living",
      "abroad",
      "for",
      "a",
      "year",
      "when",
      "she",
      "met",
      "her",
      "husband.",
      "was",
      "meeting"
    ],
    "answer": "My sister had been living abroad for a year when she met her husband.",
    "explain": "The past perfect continuous gives the duration leading up to the moment (had been living for a year), and the past simple marks the event itself (met)."
  },
  {
    "kind": "pickAll",
    "id": "b2-narrative-tenses-weaving-the-story-25",
    "prompt": "Tap every sentence that weaves the narrative tenses correctly.",
    "options": [
      "My mum was setting the table when my dad walked in with the news.",
      "By the time the guests arrived, my sister had been crying for an hour.",
      "When I opened the letter, I was realizing that my aunt had lied to us all.",
      "We had just finished dinner when my brother announced his divorce.",
      "My parents were knowing each other for years before they started dating."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explain": "'Was realizing' is wrong because realize is a state verb — use realized. 'Were knowing' fails twice: know is stative and the meeting came earlier, so it needs had known."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-weaving-the-story-26",
    "words": [
      "When",
      "the",
      "new",
      "manager",
      "finally",
      "arrived,",
      "the",
      "team",
      "had",
      "was",
      "been",
      "waiting",
      "for",
      "him",
      "for",
      "over",
      "an",
      "hour."
    ],
    "remove": [
      9
    ],
    "explain": "The past perfect continuous is just 'had' + 'been' + -ing: 'had been waiting'. 'Was' stacks a second auxiliary that can't sit next to 'had'."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-27",
    "prompt": "When I finally got the drawer open, I ___ that the scissors ___ there all along.",
    "options": [
      "saw / had been",
      "was seeing / were",
      "had seen / had been",
      "saw / have been"
    ],
    "answer": 0,
    "explain": "'Saw' is the past simple event at the drawer; 'had been there all along' reaches back to before that moment. 'Was seeing' isn't used for perception, and 'have been' drags a past story into the present."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-28",
    "statement": "While my parents were painting the nursery, my brother rang to say that his wife had gone into labour.",
    "answer": true,
    "explain": "Three tenses, three jobs: past continuous for the background (were painting), past simple for the event that cuts in (rang), past perfect for what had already happened (had gone)."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-29",
    "before": "I had been sitting in the waiting room for half an hour when the receptionist finally",
    "after": "my name.",
    "options": [
      "called",
      "was calling",
      "had called",
      "has called"
    ],
    "answer": 0,
    "explain": "The past perfect continuous measures the wait up to a point; the thing that ends it takes the past simple — 'called'. 'Had called' would put the call before the waiting, which reverses the story."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-30",
    "words": [
      "I",
      "had",
      "just",
      "finished",
      "my",
      "shift",
      "when",
      "the",
      "manager",
      "asked",
      "me",
      "to",
      "stay",
      "on.",
      "was",
      "been"
    ],
    "answer": "I had just finished my shift when the manager asked me to stay on.",
    "explain": "'Had just finished' puts the end of the shift a beat before the request; the request itself is the main event, so past simple 'asked'. 'Was' and 'been' only belong to continuous forms, which a finished shift doesn't need."
  },
  {
    "kind": "trim",
    "id": "b2-narrative-tenses-weaving-the-story-31",
    "words": [
      "My",
      "uncle",
      "had",
      "been",
      "was",
      "waiting",
      "at",
      "the",
      "station",
      "when",
      "the",
      "train",
      "finally",
      "arrived."
    ],
    "remove": [
      4
    ],
    "explain": "The past perfect continuous is had been + -ing, with no extra auxiliary: My uncle had been waiting at the station when the train finally arrived."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-32",
    "prompt": "We ___ the last trays of bread when the ovens gave out, and the whole morning's order was ruined.",
    "options": [
      "were still loading",
      "still loaded",
      "had still loaded",
      "have still loaded"
    ],
    "answer": 0,
    "explain": "'Still' signals an action already under way that a sudden event cuts across, which is the past continuous. The interrupting event ('gave out') stays in the past simple — that's the standard pairing."
  },
  {
    "kind": "truefalse",
    "id": "b2-narrative-tenses-weaving-the-story-33",
    "statement": "The warehouse had been running on backup power for two days, so when the generator finally died, nobody was surprised.",
    "answer": true,
    "explain": "Correct: the past perfect continuous carries the two-day run-up, and the past simple takes both the event that ends it ('died') and the reaction ('was'). That's exactly how the tenses hand over in a story."
  },
  {
    "kind": "tapCloze",
    "id": "b2-narrative-tenses-weaving-the-story-34",
    "before": "I hadn't seen my nephew for three years, so when he walked in I barely",
    "after": "him.",
    "options": [
      "recognized",
      "was recognizing",
      "had recognized"
    ],
    "answer": 0,
    "explain": "The past perfect sets up the gap (hadn't seen); the reaction at that moment is past simple: recognized. Recognize is a state verb, so the continuous is out, and the past perfect would put it before he walked in."
  },
  {
    "kind": "build",
    "id": "b2-narrative-tenses-weaving-the-story-35",
    "words": [
      "The",
      "washing",
      "machine",
      "was",
      "leaking",
      "because",
      "someone",
      "had",
      "overloaded",
      "it.",
      "has",
      "overloading"
    ],
    "answer": "The washing machine was leaking because someone had overloaded it.",
    "explain": "Past continuous paints the state you walked in on ('was leaking'); the past perfect explains the cause that came before it ('had overloaded'). 'has' and 'overloading' don't belong in a past story."
  },
  {
    "kind": "mcq",
    "id": "b2-narrative-tenses-weaving-the-story-36",
    "prompt": "My aunt looked exhausted at the christening. She ___ all night with the baby.",
    "options": [
      "had been up",
      "was being up",
      "has been up",
      "used to be up"
    ],
    "answer": 0,
    "explain": "The past perfect explains the cause behind the past state: she looked exhausted because of what had happened before. 'Has been up' jumps to the present and the others aren't possible here."
  }
];

export const practice: PracticeStage[] = [
  {
    "focus": "Foreground & background",
    "ids": [
      "b2-narrative-tenses-foreground-background-1",
      "b2-narrative-tenses-foreground-background-2",
      "b2-narrative-tenses-foreground-background-3",
      "b2-narrative-tenses-foreground-background-4",
      "b2-narrative-tenses-foreground-background-5",
      "b2-narrative-tenses-foreground-background-6",
      "b2-narrative-tenses-foreground-background-7",
      "b2-narrative-tenses-foreground-background-8",
      "b2-narrative-tenses-foreground-background-9",
      "b2-narrative-tenses-foreground-background-10",
      "b2-narrative-tenses-foreground-background-11",
      "b2-narrative-tenses-foreground-background-12",
      "b2-narrative-tenses-foreground-background-13",
      "b2-narrative-tenses-foreground-background-14",
      "b2-narrative-tenses-foreground-background-15",
      "b2-narrative-tenses-foreground-background-16",
      "b2-narrative-tenses-foreground-background-17",
      "b2-narrative-tenses-foreground-background-18",
      "b2-narrative-tenses-foreground-background-19",
      "b2-narrative-tenses-foreground-background-20",
      "b2-narrative-tenses-foreground-background-21",
      "b2-narrative-tenses-foreground-background-22",
      "b2-narrative-tenses-foreground-background-23",
      "b2-narrative-tenses-foreground-background-24",
      "b2-narrative-tenses-foreground-background-25",
      "b2-narrative-tenses-foreground-background-26",
      "b2-narrative-tenses-foreground-background-27",
      "b2-narrative-tenses-foreground-background-28",
      "b2-narrative-tenses-foreground-background-29",
      "b2-narrative-tenses-foreground-background-30",
      "b2-narrative-tenses-foreground-background-31",
      "b2-narrative-tenses-foreground-background-32",
      "b2-narrative-tenses-foreground-background-33",
      "b2-narrative-tenses-foreground-background-34",
      "b2-narrative-tenses-foreground-background-35"
    ]
  },
  {
    "focus": "Earlier past",
    "ids": [
      "b2-narrative-tenses-earlier-past-1",
      "b2-narrative-tenses-earlier-past-2",
      "b2-narrative-tenses-earlier-past-3",
      "b2-narrative-tenses-earlier-past-4",
      "b2-narrative-tenses-earlier-past-5",
      "b2-narrative-tenses-earlier-past-6",
      "b2-narrative-tenses-earlier-past-7",
      "b2-narrative-tenses-earlier-past-8",
      "b2-narrative-tenses-earlier-past-9",
      "b2-narrative-tenses-earlier-past-10",
      "b2-narrative-tenses-earlier-past-11",
      "b2-narrative-tenses-earlier-past-12",
      "b2-narrative-tenses-earlier-past-13",
      "b2-narrative-tenses-earlier-past-14",
      "b2-narrative-tenses-earlier-past-15",
      "b2-narrative-tenses-earlier-past-16",
      "b2-narrative-tenses-earlier-past-17",
      "b2-narrative-tenses-earlier-past-18",
      "b2-narrative-tenses-earlier-past-19",
      "b2-narrative-tenses-earlier-past-20",
      "b2-narrative-tenses-earlier-past-21",
      "b2-narrative-tenses-earlier-past-22",
      "b2-narrative-tenses-earlier-past-23",
      "b2-narrative-tenses-earlier-past-24",
      "b2-narrative-tenses-earlier-past-25",
      "b2-narrative-tenses-earlier-past-26",
      "b2-narrative-tenses-earlier-past-27",
      "b2-narrative-tenses-earlier-past-28",
      "b2-narrative-tenses-earlier-past-29",
      "b2-narrative-tenses-earlier-past-30",
      "b2-narrative-tenses-earlier-past-31",
      "b2-narrative-tenses-earlier-past-32",
      "b2-narrative-tenses-earlier-past-33",
      "b2-narrative-tenses-earlier-past-34",
      "b2-narrative-tenses-earlier-past-35",
      "b2-narrative-tenses-earlier-past-36"
    ]
  },
  {
    "focus": "Past perfect continuous",
    "ids": [
      "b2-narrative-tenses-past-perfect-continuous-1",
      "b2-narrative-tenses-past-perfect-continuous-2",
      "b2-narrative-tenses-past-perfect-continuous-3",
      "b2-narrative-tenses-past-perfect-continuous-4",
      "b2-narrative-tenses-past-perfect-continuous-5",
      "b2-narrative-tenses-past-perfect-continuous-6",
      "b2-narrative-tenses-past-perfect-continuous-7",
      "b2-narrative-tenses-past-perfect-continuous-8",
      "b2-narrative-tenses-past-perfect-continuous-9",
      "b2-narrative-tenses-past-perfect-continuous-10",
      "b2-narrative-tenses-past-perfect-continuous-11",
      "b2-narrative-tenses-past-perfect-continuous-12",
      "b2-narrative-tenses-past-perfect-continuous-13",
      "b2-narrative-tenses-past-perfect-continuous-14",
      "b2-narrative-tenses-past-perfect-continuous-15",
      "b2-narrative-tenses-past-perfect-continuous-16",
      "b2-narrative-tenses-past-perfect-continuous-17",
      "b2-narrative-tenses-past-perfect-continuous-18",
      "b2-narrative-tenses-past-perfect-continuous-19",
      "b2-narrative-tenses-past-perfect-continuous-20",
      "b2-narrative-tenses-past-perfect-continuous-21",
      "b2-narrative-tenses-past-perfect-continuous-22",
      "b2-narrative-tenses-past-perfect-continuous-23",
      "b2-narrative-tenses-past-perfect-continuous-24",
      "b2-narrative-tenses-past-perfect-continuous-25",
      "b2-narrative-tenses-past-perfect-continuous-26",
      "b2-narrative-tenses-past-perfect-continuous-27",
      "b2-narrative-tenses-past-perfect-continuous-28",
      "b2-narrative-tenses-past-perfect-continuous-29",
      "b2-narrative-tenses-past-perfect-continuous-30",
      "b2-narrative-tenses-past-perfect-continuous-31",
      "b2-narrative-tenses-past-perfect-continuous-32",
      "b2-narrative-tenses-past-perfect-continuous-33",
      "b2-narrative-tenses-past-perfect-continuous-34",
      "b2-narrative-tenses-past-perfect-continuous-35"
    ]
  },
  {
    "focus": "Weaving the story",
    "ids": [
      "b2-narrative-tenses-weaving-the-story-1",
      "b2-narrative-tenses-weaving-the-story-2",
      "b2-narrative-tenses-weaving-the-story-3",
      "b2-narrative-tenses-weaving-the-story-4",
      "b2-narrative-tenses-weaving-the-story-5",
      "b2-narrative-tenses-weaving-the-story-6",
      "b2-narrative-tenses-weaving-the-story-7",
      "b2-narrative-tenses-weaving-the-story-8",
      "b2-narrative-tenses-weaving-the-story-9",
      "b2-narrative-tenses-weaving-the-story-10",
      "b2-narrative-tenses-weaving-the-story-11",
      "b2-narrative-tenses-weaving-the-story-12",
      "b2-narrative-tenses-weaving-the-story-13",
      "b2-narrative-tenses-weaving-the-story-14",
      "b2-narrative-tenses-weaving-the-story-15",
      "b2-narrative-tenses-weaving-the-story-16",
      "b2-narrative-tenses-weaving-the-story-17",
      "b2-narrative-tenses-weaving-the-story-18",
      "b2-narrative-tenses-weaving-the-story-19",
      "b2-narrative-tenses-weaving-the-story-20",
      "b2-narrative-tenses-weaving-the-story-21",
      "b2-narrative-tenses-weaving-the-story-22",
      "b2-narrative-tenses-weaving-the-story-23",
      "b2-narrative-tenses-weaving-the-story-24",
      "b2-narrative-tenses-weaving-the-story-25",
      "b2-narrative-tenses-weaving-the-story-26",
      "b2-narrative-tenses-weaving-the-story-27",
      "b2-narrative-tenses-weaving-the-story-28",
      "b2-narrative-tenses-weaving-the-story-29",
      "b2-narrative-tenses-weaving-the-story-30",
      "b2-narrative-tenses-weaving-the-story-31",
      "b2-narrative-tenses-weaving-the-story-32",
      "b2-narrative-tenses-weaving-the-story-33",
      "b2-narrative-tenses-weaving-the-story-34",
      "b2-narrative-tenses-weaving-the-story-35",
      "b2-narrative-tenses-weaving-the-story-36"
    ]
  }
];
