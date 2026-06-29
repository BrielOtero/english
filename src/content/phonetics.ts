import type { SoundLesson } from '../types';

// Pronunciation lab: phonemes & minimal pairs. Generated content.
export const SOUNDS: SoundLesson[] = [
  {
    id: 'snd-v-ih-ee',
    symbol: '/ɪ/ vs /iː/',
    name: 'short i vs long ee (ship/sheep)',
    level: 'A2',
    howTo:
      'For /ɪ/ keep the tongue high but relaxed and slightly lower and more central, jaw a touch open, lips loose - it is a short, lax sound. For /iː/ push the tongue high and forward toward the front teeth, spread the lips into a smile, and hold it longer with tense muscles.',
    spanishNote:
      "Spanish has only one front high vowel, the /i/ in 'sí', which sits between English /ɪ/ and /iː/. Spanish speakers tend to pronounce both English sounds as that single tense /i/, making 'ship' sound like 'sheep'. Fix: make /ɪ/ deliberately shorter, looser and lower (let the jaw drop a hair and relax the smile), and stretch /iː/ longer with a wide smile.",
    examples: ['ship', 'sheep', 'bit', 'beat', 'fill', 'feel', 'live', 'leave'],
    pairs: [
      {
        a: 'ship',
        b: 'sheep',
        ipaA: '/ʃɪp/',
        ipaB: '/ʃiːp/',
      },
      {
        a: 'bit',
        b: 'beat',
        ipaA: '/bɪt/',
        ipaB: '/biːt/',
      },
      {
        a: 'live',
        b: 'leave',
        ipaA: '/lɪv/',
        ipaB: '/liːv/',
        note: "verb 'live' vs 'leave'",
      },
      {
        a: 'fill',
        b: 'feel',
        ipaA: '/fɪl/',
        ipaB: '/fiːl/',
      },
    ],
  },
  {
    id: 'snd-v-e-ae',
    symbol: '/e/ vs /æ/',
    name: 'short e vs flat a (bet/bat)',
    level: 'A2',
    howTo:
      "For /e/ the jaw is only slightly open and the tongue is mid-front, similar to the e in Spanish 'mesa'. For /æ/ drop the jaw much lower, spread the lips wide and flatten the tongue forward and low - it is an open, bright sound almost like a sheep's 'baa'.",
    spanishNote:
      "Spanish has no /æ/; speakers replace it with /e/ or /a/, so 'bat' becomes 'bet' or 'bot'. Fix: open the mouth wider than for any Spanish vowel and aim for a flat, stretched 'aaa' while keeping the tongue forward. Exaggerate the jaw drop at first.",
    examples: ['bet', 'bat', 'men', 'man', 'pen', 'pan', 'said', 'sad'],
    pairs: [
      {
        a: 'bet',
        b: 'bat',
        ipaA: '/bet/',
        ipaB: '/bæt/',
      },
      {
        a: 'men',
        b: 'man',
        ipaA: '/men/',
        ipaB: '/mæn/',
      },
      {
        a: 'pen',
        b: 'pan',
        ipaA: '/pen/',
        ipaB: '/pæn/',
      },
      {
        a: 'said',
        b: 'sad',
        ipaA: '/sed/',
        ipaB: '/sæd/',
      },
    ],
  },
  {
    id: 'snd-v-ae-uh',
    symbol: '/æ/ vs /ʌ/',
    name: 'flat a vs short u (cat/cut)',
    level: 'B1',
    howTo:
      "For /æ/ keep the tongue low and forward with lips spread wide and jaw dropped. For /ʌ/ pull the tongue back to a central, relaxed position with the mouth only moderately open and lips neutral - it is a short, quick 'uh' produced in the middle of the mouth.",
    spanishNote:
      "Both sounds are absent from Spanish and tend to collapse into Spanish /a/, so 'cat' and 'cut' sound identical. Fix: for /æ/ push the sound forward and bright with a wide smile; for /ʌ/ keep it dark, central and short, like a grunt with no lip movement. Contrast their tongue positions: front vs centre.",
    examples: ['cat', 'cut', 'bat', 'but', 'ran', 'run', 'cap', 'cup'],
    pairs: [
      {
        a: 'cat',
        b: 'cut',
        ipaA: '/kæt/',
        ipaB: '/kʌt/',
      },
      {
        a: 'bat',
        b: 'but',
        ipaA: '/bæt/',
        ipaB: '/bʌt/',
      },
      {
        a: 'ran',
        b: 'run',
        ipaA: '/ræn/',
        ipaB: '/rʌn/',
      },
      {
        a: 'cap',
        b: 'cup',
        ipaA: '/kæp/',
        ipaB: '/kʌp/',
      },
    ],
  },
  {
    id: 'snd-v-uu-oo',
    symbol: '/ʊ/ vs /uː/',
    name: 'short oo vs long oo (full/fool)',
    level: 'A2',
    howTo:
      'For /ʊ/ round the lips loosely with the tongue high and back but relaxed - a short, lax sound. For /uː/ round the lips tightly into a small circle, push the tongue high and far back, and hold the sound longer with tense muscles.',
    spanishNote:
      "Spanish has only one /u/ (as in 'luna'), tense and short, so speakers merge both English sounds and 'full' sounds like 'fool'. Fix: make /ʊ/ shorter, looser and with relaxed lips, and stretch /uː/ longer with strongly rounded, pushed-forward lips.",
    examples: ['full', 'fool', 'pull', 'pool', 'look', 'Luke', 'could', 'cooed'],
    pairs: [
      {
        a: 'full',
        b: 'fool',
        ipaA: '/fʊl/',
        ipaB: '/fuːl/',
      },
      {
        a: 'pull',
        b: 'pool',
        ipaA: '/pʊl/',
        ipaB: '/puːl/',
      },
      {
        a: 'look',
        b: 'Luke',
        ipaA: '/lʊk/',
        ipaB: '/luːk/',
      },
      {
        a: 'should',
        b: 'shooed',
        ipaA: '/ʃʊd/',
        ipaB: '/ʃuːd/',
      },
    ],
  },
  {
    id: 'snd-v-oh-uh',
    symbol: '/ɒ/ vs /ʌ/',
    name: 'short o vs short u (cot/cut)',
    level: 'B1',
    howTo:
      "For /ɒ/ (British) drop the jaw and round the lips a little with the tongue low and back - an open, rounded 'o'. In American English this is often /ɑː/, an unrounded open back vowel. For /ʌ/ keep the lips neutral and unrounded with the tongue central and the mouth only moderately open - a short 'uh'.",
    spanishNote:
      "Spanish /o/ in 'sol' is tense and rounded; speakers use it for English /ɒ/ and also confuse the unrounded central /ʌ/ with it, so 'cot' and 'cut' blur. Fix: keep /ɒ/ open and lightly rounded, and make /ʌ/ central, unrounded and short with no lip rounding at all.",
    examples: ['cot', 'cut', 'not', 'nut', 'lock', 'luck', 'fond', 'fund'],
    pairs: [
      {
        a: 'cot',
        b: 'cut',
        ipaA: '/kɒt/',
        ipaB: '/kʌt/',
      },
      {
        a: 'not',
        b: 'nut',
        ipaA: '/nɒt/',
        ipaB: '/nʌt/',
      },
      {
        a: 'lock',
        b: 'luck',
        ipaA: '/lɒk/',
        ipaB: '/lʌk/',
      },
      {
        a: 'fond',
        b: 'fund',
        ipaA: '/fɒnd/',
        ipaB: '/fʌnd/',
      },
    ],
  },
  {
    id: 'snd-v-ah-uh',
    symbol: '/ɑː/ vs /ʌ/',
    name: 'long ah vs short u (cart/cut)',
    level: 'B1',
    howTo:
      "For /ɑː/ open the mouth wide, pull the tongue low and back, keep the lips unrounded, and hold the sound long - a deep, open 'aah'. For /ʌ/ keep the mouth only moderately open with the tongue central and the sound short and clipped.",
    spanishNote:
      'Spanish /a/ is short and central; speakers use it for both the long open /ɑː/ and the short central /ʌ/, so length and place get lost. Fix: stretch /ɑː/ long, open and dark at the back of the mouth, and keep /ʌ/ short, central and relaxed. Length and depth are the key contrasts.',
    examples: ['cart', 'cut', 'heart', 'hut', 'bath', 'but', 'calm', 'come'],
    pairs: [
      {
        a: 'cart',
        b: 'cut',
        ipaA: '/kɑːt/',
        ipaB: '/kʌt/',
      },
      {
        a: 'heart',
        b: 'hut',
        ipaA: '/hɑːt/',
        ipaB: '/hʌt/',
      },
      {
        a: 'calm',
        b: 'come',
        ipaA: '/kɑːm/',
        ipaB: '/kʌm/',
      },
      {
        a: 'dark',
        b: 'duck',
        ipaA: '/dɑːk/',
        ipaB: '/dʌk/',
      },
    ],
  },
  {
    id: 'snd-v-schwa',
    symbol: '/ə/',
    name: 'the schwa (about, sofa)',
    level: 'B1',
    howTo:
      "Relax everything: jaw slightly open, tongue resting flat and central, lips neutral. Make a tiny, weak, unstressed 'uh' with no muscular effort. It is the shortest, laziest vowel in English and only appears in unstressed syllables.",
    spanishNote:
      "Spanish pronounces every vowel fully and clearly, even unstressed ones, so speakers say 'banana' with three strong 'a' sounds instead of reducing them to schwa. This makes speech sound robotic. Fix: in unstressed syllables, weaken the vowel almost to nothing - 'banana' becomes /bəˈnɑːnə/. Stress one syllable strongly and swallow the rest into schwa.",
    examples: ['about', 'sofa', 'banana', 'problem', 'camera', 'support', 'under', 'the'],
    pairs: [
      {
        a: 'the (weak)',
        b: 'thee (strong)',
        ipaA: '/ðə/',
        ipaB: '/ðiː/',
        note: 'unstressed schwa vs full vowel',
      },
      {
        a: 'a (weak)',
        b: 'eh (strong)',
        ipaA: '/ə/',
        ipaB: '/eɪ/',
        note: 'the article reduced vs the letter name',
      },
      {
        a: 'to (weak)',
        b: 'too',
        ipaA: '/tə/',
        ipaB: '/tuː/',
        note: 'function word reduces to schwa',
      },
      {
        a: 'for (weak)',
        b: 'four',
        ipaA: '/fə/',
        ipaB: '/fɔː/',
        note: 'reduced preposition vs full word',
      },
    ],
  },
  {
    id: 'snd-v-ei-ai',
    symbol: '/eɪ/ vs /aɪ/',
    name: 'the ay and eye diphthongs (day/die)',
    level: 'A2',
    howTo:
      'For /eɪ/ start at /e/ (mouth mid-open) and glide upward toward /ɪ/, closing the jaw as you go. For /aɪ/ start with the mouth wide open at /a/ and glide up toward /ɪ/, a bigger movement. Both must be one smooth gliding sound, not two separate vowels.',
    spanishNote:
      "Spanish has similar sequences (ley, hay) but tends to clip them or treat them as two pure vowels rather than a single gliding diphthong, and may flatten /eɪ/ to a pure /e/. Fix: make a continuous glide within one syllable, letting the jaw close smoothly, and do not stop on a flat Spanish 'e'.",
    examples: ['day', 'die', 'late', 'light', 'pain', 'pine', 'wait', 'white'],
    pairs: [
      {
        a: 'day',
        b: 'die',
        ipaA: '/deɪ/',
        ipaB: '/daɪ/',
      },
      {
        a: 'late',
        b: 'light',
        ipaA: '/leɪt/',
        ipaB: '/laɪt/',
      },
      {
        a: 'pain',
        b: 'pine',
        ipaA: '/peɪn/',
        ipaB: '/paɪn/',
      },
      {
        a: 'wait',
        b: 'white',
        ipaA: '/weɪt/',
        ipaB: '/waɪt/',
      },
    ],
  },
  {
    id: 'snd-v-ou-au',
    symbol: '/əʊ/ vs /aʊ/',
    name: 'the oh and ow diphthongs (go/cow)',
    level: 'B1',
    howTo:
      'For /əʊ/ (British) start at a central schwa /ə/ and glide toward /ʊ/, rounding the lips as you close - the American version /oʊ/ starts a little more rounded. For /aʊ/ start with the mouth wide open at /a/ and glide toward /ʊ/, rounding the lips at the end. Each is one smooth movement.',
    spanishNote:
      "Spanish 'o' is a pure, tense, single vowel, so speakers say a flat /o/ for English /əʊ/ instead of gliding, and may clip /aʊ/. Fix: do not stop on a pure Spanish 'o' - start more central and glide into a rounded ending. For /aʊ/ open wide first, then round the lips as you close.",
    examples: ['go', 'cow', 'boat', 'about', 'know', 'now', 'load', 'loud'],
    pairs: [
      {
        a: 'go',
        b: 'cow',
        ipaA: '/ɡəʊ/',
        ipaB: '/kaʊ/',
        note: 'same glide ending, different start',
      },
      {
        a: 'low',
        b: 'loud',
        ipaA: '/ləʊ/',
        ipaB: '/laʊd/',
      },
      {
        a: 'phone',
        b: 'found',
        ipaA: '/fəʊn/',
        ipaB: '/faʊnd/',
      },
      {
        a: 'know',
        b: 'now',
        ipaA: '/nəʊ/',
        ipaB: '/naʊ/',
      },
    ],
  },
  {
    id: 'snd-v-oi',
    symbol: '/ɔɪ/',
    name: 'the oy diphthong (boy)',
    level: 'A2',
    howTo:
      "Start with the lips rounded and the tongue back at /ɔ/ (an open-mid 'aw'), then glide forward and up toward /ɪ/, unrounding and spreading the lips slightly as the tongue moves to the front. It is one smooth gliding syllable.",
    spanishNote:
      "Spanish has a very similar sound in 'hoy' or 'soy', so this diphthong is one of the easier ones - the main risk is making the first part too short or too tense. Fix: hold the rounded /ɔ/ start a touch longer, then glide cleanly to /ɪ/, and avoid adding an extra /j/ consonant before following vowels.",
    examples: ['boy', 'toy', 'coin', 'voice', 'enjoy', 'choice', 'oil', 'point'],
    pairs: [
      {
        a: 'boy',
        b: 'bay',
        ipaA: '/bɔɪ/',
        ipaB: '/beɪ/',
        note: 'oy glide vs ay glide',
      },
      {
        a: 'coin',
        b: 'cone',
        ipaA: '/kɔɪn/',
        ipaB: '/kəʊn/',
      },
      {
        a: 'oil',
        b: 'isle',
        ipaA: '/ɔɪl/',
        ipaB: '/aɪl/',
        note: 'oy vs eye',
      },
      {
        a: 'toy',
        b: 'tie',
        ipaA: '/tɔɪ/',
        ipaB: '/taɪ/',
      },
    ],
  },
  {
    id: 'snd-c1',
    symbol: '/θ/ vs /ð/',
    name: 'th sounds (think / this)',
    level: 'A2',
    howTo:
      'Put the tip of your tongue lightly between your teeth (or just touching the back of the upper front teeth) and push air out. For /θ/ (think) the vocal cords do NOT vibrate - it is just airflow. For /ð/ (this) keep the same tongue position but turn your voice on so the throat buzzes. Keep the tongue relaxed and let a little air leak around it.',
    spanishNote:
      "Spanish has /θ/ in Castilian Spanish (cielo, zapato) but Latin American Spanish does not, and /ð/ exists only as a soft allophone of 'd' between vowels (nada). Speakers tend to replace 'th' with /t/, /d/, /s/ or /f/, saying 'tink' or 'dis'. The fix: exaggerate putting the tongue between the teeth where you can see it in a mirror, then gradually pull it back. Practice the voiced/voiceless contrast by feeling your throat for the buzz.",
    examples: ['think', 'thank', 'three', 'month', 'this', 'that', 'mother', 'breathe'],
    pairs: [
      {
        a: 'think',
        b: 'sink',
        ipaA: '/θɪŋk/',
        ipaB: '/sɪŋk/',
        note: '/θ/ not /s/',
      },
      {
        a: 'thin',
        b: 'tin',
        ipaA: '/θɪn/',
        ipaB: '/tɪn/',
        note: '/θ/ not /t/',
      },
      {
        a: 'they',
        b: 'day',
        ipaA: '/ðeɪ/',
        ipaB: '/deɪ/',
        note: '/ð/ not /d/',
      },
      {
        a: 'breathe',
        b: 'breeze',
        ipaA: '/briːð/',
        ipaB: '/briːz/',
        note: '/ð/ not /z/',
      },
    ],
  },
  {
    id: 'snd-c2',
    symbol: '/b/ vs /v/',
    name: 'b vs v sounds (berry / very)',
    level: 'A1',
    howTo:
      'For /b/, press both lips fully together, build up air, then release - the lips touch. For /v/, do NOT use both lips: place your top teeth gently on your bottom lip and push air through while voicing, so you feel a buzzing vibration on your lip. The key difference is teeth-on-lip (/v/) versus lips-together (/b/).',
    spanishNote:
      "In Spanish, the letters 'b' and 'v' are pronounced identically - both as /b/ or the soft /β/ (with lips). There is no /v/ sound, so 'vote' and 'boat' sound the same to Spanish ears. The fix: for every English 'v', force your top teeth onto your bottom lip. Look in a mirror to check teeth touch lip and you can sustain the 'vvvv' buzz; you cannot hold a /b/ that way.",
    examples: ['very', 'vote', 'van', 'love', 'river', 'save', 'voice', 'live'],
    pairs: [
      {
        a: 'berry',
        b: 'very',
        ipaA: '/ˈbɛri/',
        ipaB: '/ˈvɛri/',
        note: 'lips vs teeth-lip',
      },
      {
        a: 'boat',
        b: 'vote',
        ipaA: '/boʊt/',
        ipaB: '/voʊt/',
        note: 'initial /b/ vs /v/',
      },
      {
        a: 'ban',
        b: 'van',
        ipaA: '/bæn/',
        ipaB: '/væn/',
        note: '/b/ vs /v/',
      },
      {
        a: 'marble',
        b: 'marvel',
        ipaA: '/ˈmɑːrbəl/',
        ipaB: '/ˈmɑːrvəl/',
        note: 'medial contrast',
      },
    ],
  },
  {
    id: 'snd-c3',
    symbol: '/ʃ/ vs /tʃ/',
    name: 'sh vs ch sounds (ship / chip)',
    level: 'A2',
    howTo:
      "For /ʃ/ (sh), round your lips slightly and let a continuous stream of air flow over the middle of the tongue - it is a long, smooth hiss with no stop. For /tʃ/ (ch), start by briefly blocking the air with the tongue touching just behind the teeth ridge (like a 't'), then release it into the 'sh' - it is a quick burst, t + sh together.",
    spanishNote:
      "Spanish has /tʃ/ (mucho, chico) but in many dialects there is no /ʃ/, so speakers turn 'ship' into 'chip' and 'she' into 'che'. The fix: remember /ʃ/ is a steady, continuous airflow you can hold for several seconds (shhhh), while /tʃ/ starts with a hard stop. Practice holding a long 'sh' first, then add a tiny 't' in front of it to make 'ch'.",
    examples: ['ship', 'shoe', 'wash', 'she', 'chip', 'cheese', 'watch', 'teacher'],
    pairs: [
      {
        a: 'ship',
        b: 'chip',
        ipaA: '/ʃɪp/',
        ipaB: '/tʃɪp/',
        note: 'continuous vs stop+release',
      },
      {
        a: 'share',
        b: 'chair',
        ipaA: '/ʃɛər/',
        ipaB: '/tʃɛər/',
        note: '/ʃ/ vs /tʃ/',
      },
      {
        a: 'wash',
        b: 'watch',
        ipaA: '/wɑːʃ/',
        ipaB: '/wɑːtʃ/',
        note: 'final contrast',
      },
      {
        a: 'sheep',
        b: 'cheap',
        ipaA: '/ʃiːp/',
        ipaB: '/tʃiːp/',
        note: 'initial contrast',
      },
    ],
  },
  {
    id: 'snd-c4',
    symbol: '/s/ vs /z/',
    name: 's vs z and final voicing (bus / buzz)',
    level: 'B1',
    howTo:
      "Both sounds use the same tongue position: tip near the ridge behind the upper teeth, air flowing in a thin stream. For /s/ the vocal cords are silent (a snake's hiss). For /z/ turn your voice on so you feel a buzz in your throat and on the tongue (a bee's buzz). Hold a finger to your throat: /z/ vibrates, /s/ does not.",
    spanishNote:
      "Spanish has no /z/ phoneme - the letter 's' is always voiceless /s/. So speakers say 'price' for 'prize' and devoice final consonants, making 'is' sound like 'iss'. This is especially important at the end of words, where /z/ is very common in English. The fix: keep your voice ON through the whole final /z/ and slightly lengthen the vowel before it (the vowel in 'buzz' is longer than in 'bus').",
    examples: ['zoo', 'zebra', 'buzz', 'is', 'was', 'rose', 'easy', 'music'],
    pairs: [
      {
        a: 'bus',
        b: 'buzz',
        ipaA: '/bʌs/',
        ipaB: '/bʌz/',
        note: 'final voicing',
      },
      {
        a: 'price',
        b: 'prize',
        ipaA: '/praɪs/',
        ipaB: '/praɪz/',
        note: '/s/ vs /z/',
      },
      {
        a: 'sip',
        b: 'zip',
        ipaA: '/sɪp/',
        ipaB: '/zɪp/',
        note: 'initial contrast',
      },
      {
        a: 'racer',
        b: 'razor',
        ipaA: '/ˈreɪsər/',
        ipaB: '/ˈreɪzər/',
        note: 'medial contrast',
      },
    ],
  },
  {
    id: 'snd-c5',
    symbol: '/j/ vs /dʒ/',
    name: 'y vs j sounds (yet / jet)',
    level: 'A2',
    howTo:
      "For /j/ (the 'y' in yes), raise the middle of the tongue toward the roof of the mouth without touching it, voice on, and glide smoothly into the next vowel - air keeps flowing. For /dʒ/ (the 'j' in jet), press the tongue firmly against the ridge behind the teeth to stop the air, then release it into a 'zh' buzz - it is a hard, voiced burst.",
    spanishNote:
      "Spanish 'y' and 'll' (yo, llave) vary by region but the English contrast between gliding /j/ and the hard affricate /dʒ/ is unfamiliar, so 'yet' and 'jet' get mixed up, and Spanish 'j' (jamón) is a throaty /x/ which does not exist in English. The fix: for /dʒ/ make a firm contact and release (it feels like 'd' + 'zh'); for /j/ let the tongue float and glide with no contact.",
    examples: ['yes', 'year', 'yellow', 'young', 'jet', 'jump', 'judge', 'danger'],
    pairs: [
      {
        a: 'yet',
        b: 'jet',
        ipaA: '/jɛt/',
        ipaB: '/dʒɛt/',
        note: 'glide vs affricate',
      },
      {
        a: 'yam',
        b: 'jam',
        ipaA: '/jæm/',
        ipaB: '/dʒæm/',
        note: '/j/ vs /dʒ/',
      },
      {
        a: 'use (you)',
        b: 'juice',
        ipaA: '/juːz/',
        ipaB: '/dʒuːs/',
        note: 'initial contrast',
      },
      {
        a: 'year',
        b: 'jeer',
        ipaA: '/jɪər/',
        ipaB: '/dʒɪər/',
        note: 'initial contrast',
      },
    ],
  },
  {
    id: 'snd-c6',
    symbol: '-ed /t/ /d/ /ɪd/',
    name: 'past -ed endings (walked / played / wanted)',
    level: 'B1',
    howTo:
      "The regular past '-ed' has three pronunciations and you choose by the sound before it. If the verb ends in a voiceless sound (p, k, f, s, sh, ch), say /t/: 'walked' = walk-t. If it ends in a voiced sound or vowel, say /d/: 'played' = play-d. If it ends in /t/ or /d/, add a whole extra syllable /ɪd/: 'wanted' = want-id. Match the voicing of '-ed' to the sound just before it.",
    spanishNote:
      "Spanish past tense never adds a consonant cluster like this, so speakers either pronounce every '-ed' as a full syllable ('walk-ed', 'play-ed') or drop it entirely. Crucially, /t/ and /d/ here are NOT extra syllables. The fix: only ends in t/d get the extra /ɪd/ beat; for all others, glue a single /t/ or /d/ sound directly onto the verb with no new vowel.",
    examples: ['walked', 'stopped', 'watched', 'played', 'lived', 'called', 'wanted', 'needed'],
    pairs: [
      {
        a: 'walked',
        b: 'wanted',
        ipaA: '/wɔːkt/',
        ipaB: '/ˈwɒntɪd/',
        note: '/t/ vs /ɪd/ (1 vs 2 syllables)',
      },
      {
        a: 'played',
        b: 'waited',
        ipaA: '/pleɪd/',
        ipaB: '/ˈweɪtɪd/',
        note: '/d/ vs /ɪd/',
      },
      {
        a: 'stopped',
        b: 'robbed',
        ipaA: '/stɒpt/',
        ipaB: '/rɒbd/',
        note: '/t/ vs /d/',
      },
      {
        a: 'missed',
        b: 'raised',
        ipaA: '/mɪst/',
        ipaB: '/reɪzd/',
        note: '/t/ vs /d/',
      },
    ],
  },
  {
    id: 'snd-c7',
    symbol: '-s /s/ /z/ /ɪz/',
    name: 'plural & 3rd-person -s (cats / dogs / buses)',
    level: 'B1',
    howTo:
      "The '-s' ending (plurals, possessives, he/she verbs) also has three sounds chosen by the sound before it. After a voiceless sound (p, t, k, f), say /s/: 'cats' = cat-s. After a voiced sound or vowel, say /z/: 'dogs' = dog-z. After a hissing/buzzing sound (s, z, sh, ch, j, x), add the syllable /ɪz/: 'buses' = bus-iz. Let your voice match what comes before it.",
    spanishNote:
      "Spanish plurals are always a simple /s/, so speakers say /s/ for every English '-s', turning 'dogs' into 'dogss' instead of 'dogz'. The voiced /z/ ending and the extra /ɪz/ syllable are the hard parts. The fix: after a voiced sound keep your voice on so '-s' becomes /z/; only add a new /ɪz/ beat after sibilant endings like s, z, sh, ch.",
    examples: ['cats', 'books', 'dogs', 'cars', 'goes', 'buses', 'watches', 'boxes'],
    pairs: [
      {
        a: 'cats',
        b: 'dogs',
        ipaA: '/kæts/',
        ipaB: '/dɒgz/',
        note: '/s/ vs /z/',
      },
      {
        a: 'books',
        b: 'boxes',
        ipaA: '/bʊks/',
        ipaB: '/ˈbɒksɪz/',
        note: '/s/ vs /ɪz/ (extra syllable)',
      },
      {
        a: 'maps',
        b: 'cabs',
        ipaA: '/mæps/',
        ipaB: '/kæbz/',
        note: '/s/ vs /z/',
      },
      {
        a: 'races',
        b: 'rates',
        ipaA: '/ˈreɪsɪz/',
        ipaB: '/reɪts/',
        note: '/ɪz/ vs /s/',
      },
    ],
  },
  {
    id: 'snd-c8',
    symbol: '/s/ + consonant',
    name: 'initial s-clusters (school, not eschool)',
    level: 'A2',
    howTo:
      "English words can begin with 's' plus another consonant (sp-, st-, sk-, sl-, sn-, sm-). Start the hiss of 's' immediately, with NO vowel before it - go straight from silence into 'ssschool'. Keep the 's' short and lead directly into the next consonant. Do not let your mouth add an 'eh' sound at the front.",
    spanishNote:
      "Spanish has no words starting with s+consonant; they all begin with 'e' (escuela, España, estudiante). So speakers automatically insert a vowel and say 'eschool', 'estudent', 'eSpain'. The fix: begin the word with the hissing 's' itself - hold the 'sss' a moment before the rest of the word, and consciously keep the lips and jaw from making any vowel first.",
    examples: ['school', 'Spain', 'student', 'stop', 'small', 'snow', 'speak', 'street'],
    pairs: [
      {
        a: 'school',
        b: '(eschool)',
        ipaA: '/skuːl/',
        ipaB: '/ɛsˈkuːl/',
        note: 'no initial /ɛ/',
      },
      {
        a: 'Spain',
        b: '(espain)',
        ipaA: '/speɪn/',
        ipaB: '/ɛsˈpeɪn/',
        note: 'no initial /ɛ/',
      },
      {
        a: 'student',
        b: '(estudent)',
        ipaA: '/ˈstjuːdənt/',
        ipaB: '/ɛsˈtjuːdənt/',
        note: 'no initial /ɛ/',
      },
      {
        a: 'speak',
        b: '(espeak)',
        ipaA: '/spiːk/',
        ipaB: '/ɛsˈpiːk/',
        note: 'no initial /ɛ/',
      },
    ],
  },
  {
    id: 'snd-c9',
    symbol: '/h/',
    name: 'the h sound (house, hello)',
    level: 'A1',
    howTo:
      'English /h/ is a gentle puff of air from the throat, like fogging up a mirror or a quiet sigh, made BEFORE the vowel. The mouth is already shaped for the following vowel; you just breathe out audibly first. There is no friction at the back of the mouth - it is soft breath, not a scrape.',
    spanishNote:
      "In Spanish the letter 'h' is completely silent (hola, hombre), so speakers drop it and say 'ouse' for 'house' or 'ello' for 'hello'. Some over-correct using the Spanish 'j' /x/, a harsh velar scrape, saying a German-like 'jouse'. The fix: actually produce a soft breath of air for every written 'h', but keep it gentle and from the throat - breathe it, do not scrape it.",
    examples: ['house', 'hello', 'happy', 'hand', 'behind', 'hot', 'who', 'perhaps'],
    pairs: [
      {
        a: 'house',
        b: '(ouse)',
        ipaA: '/haʊs/',
        ipaB: '/aʊs/',
        note: "don't drop /h/",
      },
      {
        a: 'hate',
        b: 'eight',
        ipaA: '/heɪt/',
        ipaB: '/eɪt/',
        note: '/h/ vs no /h/',
      },
      {
        a: 'heart',
        b: 'art',
        ipaA: '/hɑːrt/',
        ipaB: '/ɑːrt/',
        note: '/h/ vs no /h/',
      },
      {
        a: 'hill',
        b: 'ill',
        ipaA: '/hɪl/',
        ipaB: '/ɪl/',
        note: '/h/ vs no /h/',
      },
    ],
  },
  {
    id: 'snd-c10',
    symbol: 'ˈstress',
    name: 'word stress patterns (PHOtograph / phoTOgrapher)',
    level: 'B2',
    howTo:
      'Every English word of two or more syllables has one strong (stressed) syllable: say it louder, longer, higher in pitch, and with a clear full vowel. The other syllables are weak and shrink toward the neutral schwa /ə/. Find the stressed syllable, stretch it, and let the rest become short and quiet. Stress can shift when you add endings, changing the whole rhythm.',
    spanishNote:
      "Spanish gives each syllable a fairly equal, full vowel and stress usually falls predictably (often the second-to-last syllable, or marked by an accent). English reduces unstressed vowels to /ə/, which Spanish does not do, so speakers pronounce every syllable equally and stress the wrong one ('foTOgraph'). The fix: hit one syllable hard and deliberately weaken the others into a quick 'uh', exaggerating the long-short contrast.",
    examples: [
      'photograph',
      'photographer',
      'present',
      'record',
      'develop',
      'important',
      'comfortable',
      'necessary',
    ],
    pairs: [
      {
        a: 'PREsent (noun)',
        b: 'preSENT (verb)',
        ipaA: '/ˈprɛzənt/',
        ipaB: '/prɪˈzɛnt/',
        note: 'stress changes meaning',
      },
      {
        a: 'REcord (noun)',
        b: 'reCORD (verb)',
        ipaA: '/ˈrɛkɔːrd/',
        ipaB: '/rɪˈkɔːrd/',
        note: 'noun vs verb stress',
      },
      {
        a: 'PHOtograph',
        b: 'phoTOgrapher',
        ipaA: '/ˈfoʊtəˌɡræf/',
        ipaB: '/fəˈtɒɡrəfər/',
        note: 'stress shifts with suffix',
      },
      {
        a: 'OBject (noun)',
        b: 'obJECT (verb)',
        ipaA: '/ˈɒbdʒɪkt/',
        ipaB: '/əbˈdʒɛkt/',
        note: 'noun vs verb stress',
      },
    ],
  },
];
