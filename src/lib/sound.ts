// Procedural sound effects via the Web Audio API — no audio files, a few hundred
// bytes of code, and it gives the minigames real arcade "juice". Every sound is
// synthesised from oscillators on demand. Respects the music and effects toggles and only starts an
// AudioContext after a user gesture (browsers require that), so it's safe to call.

let ctx: AudioContext | null = null;
let musicOn = true; // per-world ambient theme
let fxOn = true; // interaction sound effects
let ducked = false; // music silenced while a listen clip is in the foreground

function context(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    if (!ctx) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new Ctor();
    }
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

export function setMusicEnabled(v: boolean) {
  musicOn = v;
}
export function musicEnabled() {
  return musicOn;
}
export function setFxEnabled(v: boolean) {
  fxOn = v;
}
export function fxEnabled() {
  return fxOn;
}

/** Silence the ambient/battle music while a spoken/played clip is in the foreground. */
export function duckMusic() {
  if (ducked) return;
  ducked = true;
  // Suspend the Web Audio clock so any sustained note tails go quiet at once. Spoken
  // clips (TTS) and pre-generated .mp3s play on a separate output, so they're unaffected.
  if (ctx && ctx.state === 'running') void ctx.suspend();
}

/** Restore the music once the clip finishes. */
export function unduckMusic() {
  if (!ducked) return;
  ducked = false;
  if (ctx && ctx.state === 'suspended') void ctx.resume();
}

/** One synthesised tone with a quick attack/decay envelope. */
function blip(
  freq: number,
  dur: number,
  opts: { type?: OscillatorType; gain?: number; delay?: number; slideTo?: number } = {},
) {
  const c = context();
  if (!c) return;
  const t0 = c.currentTime + (opts.delay ?? 0);
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = opts.type ?? 'sine';
  osc.frequency.setValueAtTime(freq, t0);
  if (opts.slideTo) osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + dur);
  const peak = opts.gain ?? 0.09;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(peak, t0 + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.03);
}

/** A rising ding whose brightness climbs with the combo — feedback for a right answer. */
export function sCorrect(combo = 1) {
  if (!fxOn) return;
  const base = 520 + Math.min(combo, 10) * 45;
  blip(base, 0.1, { type: 'triangle', gain: 0.08 });
  blip(base * 1.5, 0.12, { type: 'triangle', gain: 0.06, delay: 0.06 });
}
export function sWrong() {
  if (!fxOn) return;
  blip(210, 0.24, { type: 'sawtooth', gain: 0.06, slideTo: 110 });
}
export function sStart() {
  if (!fxOn) return;
  blip(440, 0.12, { type: 'triangle' });
  blip(660, 0.14, { type: 'triangle', delay: 0.1 });
}
export function sTick() {
  if (!fxOn) return;
  blip(900, 0.03, { type: 'square', gain: 0.035 });
}
/** A little victory arpeggio for the results screen. */
export function sFinish() {
  if (!fxOn) return;
  [523, 659, 784, 1047].forEach((f, i) =>
    blip(f, 0.18, { type: 'triangle', gain: 0.07, delay: i * 0.11 }),
  );
}

/** A triumphant fanfare for winning a fight — rising major arpeggio into a sparkle. */
export function sVictory() {
  if (!fxOn) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
    blip(f, 0.26, { type: 'triangle', gain: 0.085, delay: i * 0.12 }),
  );
  blip(1318.51, 0.55, { type: 'triangle', gain: 0.06, delay: 0.52 }); // high sparkle
  blip(783.99, 0.6, { type: 'sine', gain: 0.05, delay: 0.52 }); // held chord tone
}

/** A deflating loss motif for being defeated — a slow descending minor line. */
export function sDefeat() {
  if (!fxOn) return;
  [415.3, 349.23, 311.13, 233.08].forEach((f, i) =>
    blip(f, 0.34, { type: 'sawtooth', gain: 0.055, delay: i * 0.17 }),
  );
  blip(155.56, 0.7, { type: 'sine', gain: 0.05, delay: 0.7 }); // low final thud
}

// ── Procedural soundtrack ────────────────────────────────────────────────────
// Every theme is an 8-bar chord progression. On each bar we lay down a soft three-note
// chord pad and a bass root; a melody arpeggiates the chord across the bar. Real chords
// + a moving bass + an 8-bar loop make each world feel like a place (and each fight its
// own encounter) instead of a short repeating jingle.

/** MIDI note number → frequency (A4 = 69 = 440 Hz). */
function midi(n: number): number {
  return 440 * Math.pow(2, (n - 69) / 12);
}

/** A triad (root, third, fifth) from a root MIDI note; `minor` lowers the third. */
function triad(root: number, minor = false): number[] {
  return [root, root + (minor ? 3 : 4), root + 7];
}

// Eight-bar progressions, one mood per world. Roots sit around octave 3–4; the engine
// adds an octave for the melody and drops one for the bass.
const WORLD_PROG: Record<string, number[][]> = {
  // C  G  Am F  C  G  F  G — bright and hopeful
  A1: [
    triad(60),
    triad(55),
    triad(57, true),
    triad(53),
    triad(60),
    triad(55),
    triad(53),
    triad(55),
  ],
  // D  A  Bm G  D  A  G  A — sunny prairie
  A2: [
    triad(62),
    triad(57),
    triad(59, true),
    triad(55),
    triad(62),
    triad(57),
    triad(55),
    triad(57),
  ],
  // G  D  Em C  G  D  C  D — open canyon
  B1: [
    triad(55),
    triad(50),
    triad(52, true),
    triad(48),
    triad(55),
    triad(50),
    triad(48),
    triad(50),
  ],
  // Am F  C  G  Dm Am E  Am — misty peaks
  B2: [
    triad(57, true),
    triad(53),
    triad(60),
    triad(55),
    triad(50, true),
    triad(57, true),
    triad(52),
    triad(57, true),
  ],
  // Em C  G  D  Em C  Am B — windswept heights
  C1: [
    triad(52, true),
    triad(48),
    triad(55),
    triad(50),
    triad(52, true),
    triad(48),
    triad(57, true),
    triad(59),
  ],
  // Dm Bb F  C  Dm Gm A  Dm — twilight summit
  C2: [
    triad(50, true),
    triad(46),
    triad(53),
    triad(48),
    triad(50, true),
    triad(55, true),
    triad(57),
    triad(50, true),
  ],
};

// Darker, tenser progressions for fights; `seed` picks which one.
const BATTLE_PROG: number[][][] = [
  // Am F  C  G  Am F  Dm E
  [
    triad(57, true),
    triad(53),
    triad(60),
    triad(55),
    triad(57, true),
    triad(53),
    triad(50, true),
    triad(52),
  ],
  // Em C  Am B  Em C  G  B
  [
    triad(52, true),
    triad(48),
    triad(57, true),
    triad(59),
    triad(52, true),
    triad(48),
    triad(55),
    triad(59),
  ],
  // Dm Bb C  A  Dm Gm A  A
  [
    triad(50, true),
    triad(46),
    triad(48),
    triad(57),
    triad(50, true),
    triad(55, true),
    triad(57),
    triad(57),
  ],
  // Cm Ab Eb Bb Cm Fm G  G
  [
    triad(48, true),
    triad(44),
    triad(51),
    triad(46),
    triad(48, true),
    triad(53, true),
    triad(55),
    triad(55),
  ],
  // Gm Eb Bb F  Gm Cm D  D
  [
    triad(55, true),
    triad(51),
    triad(46),
    triad(53),
    triad(55, true),
    triad(48, true),
    triad(50),
    triad(50),
  ],
  // Bm G  D  A  Bm G  Em F#
  [
    triad(59, true),
    triad(55),
    triad(50),
    triad(57),
    triad(59, true),
    triad(55),
    triad(52, true),
    triad(54),
  ],
];

const DEFAULT_BAR_STEPS = 4;

interface ThemeOpts {
  stepMs: number;
  padType: OscillatorType;
  melType: OscillatorType;
  melDur: number;
  padGain: number;
  melGain: number;
  bassGain: number;
  /** Arpeggio shapes: indices into the chord's [root, third, fifth, octave]; -1 = rest. */
  arps: number[][];
  /** Melody slots per bar — the rhythmic feel (3 lilts, 4 walks, 6 flows). */
  barSteps?: number;
  /** Semitones to lift the melody above the chord (default 12; 0 keeps it low and warm). */
  melOctave?: number;
  /** Pulse the bass on every step (driving, for fights) rather than once per bar. */
  drive?: boolean;
  /** Transpose the whole thing, in semitones (bosses drop an octave). */
  octave?: number;
}

/** Loop a chord progression with pads, bass, and an arpeggiated melody. */
function runTheme(prog: number[][], o: ThemeOpts): ReturnType<typeof setInterval> {
  const barSteps = o.barSteps ?? DEFAULT_BAR_STEPS;
  const melOctave = o.melOctave ?? 12;
  const barSec = (barSteps * o.stepMs) / 1000;
  const oct = o.octave ?? 0;
  let step = 0;
  const tick = () => {
    if (!musicOn || ducked) return;
    const bar = Math.floor(step / barSteps) % prog.length;
    const slot = step % barSteps;
    const ch = prog[bar];
    const tones = [ch[0], ch[1], ch[2], ch[0] + 12];
    if (slot === 0) {
      ch.forEach((n) => blip(midi(n + oct), barSec * 0.95, { type: o.padType, gain: o.padGain }));
    }
    if (o.drive) {
      blip(midi(ch[0] - 12 + oct), (o.stepMs / 1000) * 0.9, { type: 'triangle', gain: o.bassGain });
    } else if (slot === 0) {
      blip(midi(ch[0] - 12 + oct), barSec, { type: 'sine', gain: o.bassGain });
    }
    const pat = o.arps[bar % o.arps.length];
    const idx = pat[slot % pat.length];
    if (idx >= 0) {
      blip(midi(tones[idx] + melOctave + oct), o.melDur, { type: o.melType, gain: o.melGain });
    }
    step++;
  };
  tick();
  return setInterval(tick, o.stepMs);
}

// Each world's "voice": tempo, timbre, register, rhythm, and articulation. Same engine,
// but these knobs give every world its own personality — not one song in six keys.
const WORLD_VOICE: Record<string, ThemeOpts> = {
  // Sunrise Meadow — warm, gentle, unhurried.
  A1: {
    stepMs: 480,
    barSteps: 4,
    padType: 'sine',
    melType: 'triangle',
    melDur: 0.6,
    melOctave: 12,
    padGain: 0.02,
    melGain: 0.026,
    bassGain: 0.02,
    arps: [
      [0, 2, 3, 2],
      [0, 1, 2, 3],
    ],
  },
  // Prairie Skip — bright, quick, plucky.
  A2: {
    stepMs: 300,
    barSteps: 4,
    padType: 'triangle',
    melType: 'square',
    melDur: 0.14,
    melOctave: 12,
    padGain: 0.013,
    melGain: 0.02,
    bassGain: 0.024,
    arps: [
      [0, 3, 2, 3],
      [3, 2, 0, 2],
      [0, 2, 3, 1],
    ],
  },
  // Canyon Echo — spacious and slow, waltzing in 3 with wide leaps.
  B1: {
    stepMs: 600,
    barSteps: 3,
    padType: 'sine',
    melType: 'sine',
    melDur: 1.0,
    melOctave: 12,
    padGain: 0.02,
    melGain: 0.03,
    bassGain: 0.022,
    arps: [
      [0, 2, 3],
      [3, 0, 2],
      [0, 3, 2],
    ],
  },
  // Misty Ascent — minor, mysterious, sparse and low (rests + no melody lift).
  B2: {
    stepMs: 520,
    barSteps: 4,
    padType: 'sine',
    melType: 'triangle',
    melDur: 0.75,
    melOctave: 0,
    padGain: 0.02,
    melGain: 0.03,
    bassGain: 0.02,
    arps: [
      [0, -1, 2, -1],
      [0, -1, 3, 2],
      [2, -1, 0, -1],
    ],
  },
  // Windswept Ridge — noble, flowing in 6.
  C1: {
    stepMs: 340,
    barSteps: 6,
    padType: 'triangle',
    melType: 'triangle',
    melDur: 0.3,
    melOctave: 12,
    padGain: 0.015,
    melGain: 0.024,
    bassGain: 0.02,
    arps: [
      [0, 2, 3, 2, 3, 1],
      [0, 1, 2, 3, 2, 0],
    ],
  },
  // Twilight Summit — solemn, deep, very slow.
  C2: {
    stepMs: 640,
    barSteps: 4,
    padType: 'sine',
    melType: 'sine',
    melDur: 0.95,
    melOctave: 12,
    padGain: 0.022,
    melGain: 0.028,
    bassGain: 0.024,
    arps: [
      [0, 3, 2, 3],
      [0, 2, 1, 2],
    ],
  },
};

let themeTimer: ReturnType<typeof setInterval> | null = null;

/** Start looping a world's ambient theme (stops any current one). */
export function startWorldTheme(level: string) {
  stopWorldTheme();
  ducked = false; // starting a theme means music should be audible again
  const prog = WORLD_PROG[level] ?? WORLD_PROG.A1;
  const voice = WORLD_VOICE[level] ?? WORLD_VOICE.A1;
  themeTimer = runTheme(prog, voice);
}

export function stopWorldTheme() {
  if (themeTimer) {
    clearInterval(themeTimer);
    themeTimer = null;
  }
}

// The roadmap (world-select) hub is a heroic "overworld march" in D Mixolydian — the bright
// bVII (C) gives the adventure feel, and a marching bass pulse + brighter, faster triangles
// set it clearly apart from A1's calm, slow C-major meadow. D C G A  D C Em A.
const ROADMAP_PROG = [
  triad(62),
  triad(60),
  triad(55),
  triad(57),
  triad(62),
  triad(60),
  triad(64, true),
  triad(57),
];
const ROADMAP_VOICE: ThemeOpts = {
  stepMs: 360,
  barSteps: 4,
  padType: 'triangle',
  melType: 'triangle',
  melDur: 0.26,
  melOctave: 12,
  padGain: 0.016,
  melGain: 0.03,
  bassGain: 0.026,
  drive: true, // a light marching pulse — the only non-battle theme with momentum
  arps: [
    [0, 2, 3, 2],
    [3, 2, 0, 3],
    [0, 3, 2, 3],
  ],
};

/** Start the roadmap/world-select hub theme (shares the world-theme slot). */
export function startRoadmapTheme() {
  stopWorldTheme();
  ducked = false;
  themeTimer = runTheme(ROADMAP_PROG, ROADMAP_VOICE);
}

let battleTimer: ReturnType<typeof setInterval> | null = null;

// Each fight variant gets its own driving voice — tempo, timbre, rhythm — so back-to-back
// battles don't blur into one song. `seed` (world + block) picks one, paired with the
// matching progression above.
const BATTLE_VOICE: ThemeOpts[] = [
  // 0 — square-lead charge
  {
    stepMs: 205,
    padType: 'triangle',
    melType: 'square',
    melDur: 0.16,
    melOctave: 12,
    padGain: 0.016,
    melGain: 0.028,
    bassGain: 0.032,
    drive: true,
    arps: [
      [0, 3, 2, 3],
      [0, 2, 3, 2],
    ],
  },
  // 1 — galloping triangle
  {
    stepMs: 235,
    padType: 'triangle',
    melType: 'triangle',
    melDur: 0.2,
    melOctave: 12,
    padGain: 0.016,
    melGain: 0.03,
    bassGain: 0.032,
    drive: true,
    arps: [
      [0, 2, 3, 0],
      [3, 2, 0, 2],
    ],
  },
  // 2 — heavy, low sawtooth
  {
    stepMs: 255,
    padType: 'sawtooth',
    melType: 'sawtooth',
    melDur: 0.22,
    melOctave: 0,
    padGain: 0.011,
    melGain: 0.024,
    bassGain: 0.034,
    drive: true,
    arps: [
      [0, 0, 3, 2],
      [0, 2, 0, 3],
    ],
  },
  // 3 — frantic, fast square
  {
    stepMs: 180,
    padType: 'triangle',
    melType: 'square',
    melDur: 0.12,
    melOctave: 12,
    padGain: 0.015,
    melGain: 0.026,
    bassGain: 0.032,
    drive: true,
    arps: [
      [0, 3, 1, 3],
      [2, 3, 0, 3],
    ],
  },
  // 4 — syncopated 6/8 gallop
  {
    stepMs: 220,
    barSteps: 6,
    padType: 'triangle',
    melType: 'triangle',
    melDur: 0.16,
    melOctave: 12,
    padGain: 0.015,
    melGain: 0.026,
    bassGain: 0.03,
    drive: true,
    arps: [
      [0, 2, 3, 2, 3, 0],
      [0, 3, 2, 3, 0, 2],
    ],
  },
  // 5 — slow, menacing sawtooth
  {
    stepMs: 270,
    padType: 'sawtooth',
    melType: 'sawtooth',
    melDur: 0.3,
    melOctave: 12,
    padGain: 0.011,
    melGain: 0.024,
    bassGain: 0.03,
    drive: true,
    arps: [
      [0, 3, 2, 0],
      [3, 0, 2, 3],
    ],
  },
];

/** A driving battle loop. `seed` (world + block) picks one of several distinct fight
 *  voices so back-to-back battles vary; `boss` makes it a beefier, lower, faster variant. */
export function startBattleTheme(seed = 0, boss = false) {
  stopBattleTheme();
  ducked = false;
  const i = seed % BATTLE_PROG.length;
  const voice = BATTLE_VOICE[i];
  const prog = BATTLE_PROG[i];
  battleTimer = runTheme(
    prog,
    boss
      ? {
          ...voice,
          octave: -12,
          stepMs: Math.round(voice.stepMs * 0.9),
          melType: 'sawtooth',
          melGain: voice.melGain + 0.004,
        }
      : voice,
  );
}

export function stopBattleTheme() {
  if (battleTimer) {
    clearInterval(battleTimer);
    battleTimer = null;
  }
}
