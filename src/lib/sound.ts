// Procedural sound via the Web Audio API — no audio files. Sound effects give the minigames
// arcade "juice"; the soundtrack is a LIVE generative engine (see the composer below) that
// keeps producing new bars, so it evolves for hours like a lofi stream rather than looping.
// Respects the music/effects toggles and only starts an AudioContext after a user gesture.

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

/** Silence the music while a spoken/played clip is in the foreground. */
export function duckMusic() {
  if (ducked) return;
  ducked = true;
  if (ctx && ctx.state === 'running') void ctx.suspend();
}
export function unduckMusic() {
  if (!ducked) return;
  ducked = false;
  if (ctx && ctx.state === 'suspended') void ctx.resume();
}

// Master volume buses: all music routes through `musicGain`, all effects through `fxGain`,
// so each can be turned down independently.
let musicVol = 0.7;
let fxVol = 0.9;
let musicGain: GainNode | null = null;
let fxGain: GainNode | null = null;
function musicOut(): AudioNode | undefined {
  const c = context();
  if (!c) return undefined;
  if (!musicGain) {
    musicGain = c.createGain();
    musicGain.gain.value = musicVol;
    musicGain.connect(c.destination);
  }
  return musicGain;
}
function fxOut(): AudioNode | undefined {
  const c = context();
  if (!c) return undefined;
  if (!fxGain) {
    fxGain = c.createGain();
    fxGain.gain.value = fxVol;
    fxGain.connect(c.destination);
  }
  return fxGain;
}
export function setMusicVolume(v: number) {
  musicVol = Math.max(0, Math.min(1, v));
  if (musicGain) musicGain.gain.value = musicVol;
}
export function setFxVolume(v: number) {
  fxVol = Math.max(0, Math.min(1, v));
  if (fxGain) fxGain.gain.value = fxVol;
}

/** One synthesised tone with a quick attack/decay envelope. */
function blip(
  freq: number,
  dur: number,
  opts: {
    type?: OscillatorType;
    gain?: number;
    delay?: number;
    slideTo?: number;
    dest?: AudioNode;
  } = {},
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
  osc.connect(g).connect(opts.dest ?? fxOut() ?? c.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.03);
}

// ── Sound effects (brief one-shots) ──
export function sCorrect(combo = 1) {
  if (!fxOn) return;
  const base = 520 + Math.min(combo, 10) * 45;
  blip(base, 0.1, { type: 'triangle', gain: 0.07 });
  blip(base * 1.5, 0.12, { type: 'triangle', gain: 0.05, delay: 0.06 });
}
export function sWrong() {
  if (!fxOn) return;
  blip(210, 0.24, { type: 'sawtooth', gain: 0.05, slideTo: 110 });
}
export function sStart() {
  if (!fxOn) return;
  blip(440, 0.12, { type: 'triangle', gain: 0.07 });
  blip(660, 0.14, { type: 'triangle', gain: 0.06, delay: 0.1 });
}
export function sTick() {
  if (!fxOn) return;
  blip(900, 0.03, { type: 'square', gain: 0.03 });
}
/** Soft two-tone shimmer for turning a flashcard over — felt, not heard. */
export function sFlip() {
  if (!fxOn) return;
  blip(587.33, 0.05, { type: 'triangle', gain: 0.04 });
  blip(880, 0.07, { type: 'triangle', gain: 0.03, delay: 0.035 });
}
export function sFinish() {
  if (!fxOn) return;
  [523, 659, 784, 1047].forEach((f, i) =>
    blip(f, 0.18, { type: 'triangle', gain: 0.06, delay: i * 0.11 }),
  );
}
export function sVictory() {
  if (!fxOn) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
    blip(f, 0.26, { type: 'triangle', gain: 0.07, delay: i * 0.12 }),
  );
  blip(1318.51, 0.55, { type: 'triangle', gain: 0.05, delay: 0.52 });
}
export function sDefeat() {
  if (!fxOn) return;
  [415.3, 349.23, 311.13, 233.08].forEach((f, i) =>
    blip(f, 0.34, { type: 'sawtooth', gain: 0.045, delay: i * 0.17 }),
  );
  blip(155.56, 0.7, { type: 'sine', gain: 0.045, delay: 0.7 });
}

// ── Generative lofi engine ────────────────────────────────────────────────────
function midi(n: number): number {
  return 440 * Math.pow(2, (n - 69) / 12);
}

const FADE = 0.1; // seconds to fade a theme in on start / out on stop

interface ThemeHandle {
  stop: () => void;
}

/** Deterministic PRNG so a given world/fight always evolves the same way. */
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashSeed(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Church modes (semitone offsets) — different colours so worlds don't all sound the same.
const MODES: Record<string, number[]> = {
  ionian: [0, 2, 4, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  aeolian: [0, 2, 3, 5, 7, 8, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
};
const BRIGHT = ['ionian', 'mixolydian', 'lydian', 'dorian'];
const DARK = ['aeolian', 'dorian', 'phrygian'];
const PENTA_MAJOR = [0, 2, 4, 7, 9];
const PENTA_MINOR = [0, 3, 5, 7, 10];
// Where a chord likes to go next (scale degrees) — smooth, lofi-friendly motion.
const NEXT: Record<number, number[]> = {
  0: [3, 5, 1, 4, 2, 6],
  1: [4, 3, 6, 2, 5],
  2: [5, 3, 1, 0, 4],
  3: [4, 1, 6, 0, 2, 5],
  4: [0, 5, 3, 1, 6],
  5: [3, 1, 4, 0, 2],
  6: [4, 2, 0, 5, 3],
};

// A shared white-noise buffer for the drum hats/snare (built once, deterministically).
let noiseBuf: AudioBuffer | null = null;
function noise(c: AudioContext): AudioBuffer {
  if (!noiseBuf) {
    const len = Math.floor(c.sampleRate * 0.4);
    noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    let s = 22222;
    for (let i = 0; i < len; i++) {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      d[i] = s / 2147483648 - 1;
    }
  }
  return noiseBuf;
}
function hit(c: AudioContext, gain: number, dur: number, hp: number, lp: number, delay = 0) {
  const src = c.createBufferSource();
  src.buffer = noise(c);
  const f = c.createBiquadFilter();
  f.type = 'highpass';
  f.frequency.value = hp;
  const g = c.createGain();
  const t = c.currentTime + delay;
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  let node: AudioNode = f;
  src.connect(f);
  if (lp) {
    const l = c.createBiquadFilter();
    l.type = 'lowpass';
    l.frequency.value = lp;
    f.connect(l);
    node = l;
  }
  node.connect(g).connect(musicOut() ?? c.destination); // drums go dry (bypass the echo)
  src.start(t);
  src.stop(t + dur + 0.02);
}

// ── Instrument synth ──────────────────────────────────────────────────────────
// A tiny subtractive synth so instruments sound like actual instruments (Rhodes, piano,
// nylon guitar, strings, organ…) instead of the same beep. Each note stacks a few
// oscillators through a lowpass filter + an amp envelope, with optional filter sweep and
// tremolo. Different presets per style are what make the styles actually sound different.
interface Inst {
  /** [waveform, freq multiplier, detune cents, gain]. */
  oscs: [OscillatorType, number, number, number][];
  a: number; // attack (s)
  d: number; // decay (s)
  s: number; // sustain level (0..1)
  cutoff?: number; // lowpass cutoff (Hz)
  fenv?: number; // filter envelope depth — opens then decays (a pluck/wah)
  trem?: number; // tremolo rate (Hz)
}
const INSTRUMENTS: Record<string, Inst> = {
  // Electric piano — bell-y sines that decay, with tremolo. Mellow, percussive.
  rhodes: {
    oscs: [
      ['sine', 1, 0, 0.9],
      ['sine', 2, 4, 0.16],
      ['triangle', 1, -6, 0.12],
    ],
    a: 0.005,
    d: 1.0,
    s: 0.08,
    cutoff: 2400,
    trem: 4.5,
  },
  // Acoustic-ish piano — bright, hard attack, long percussive decay, no sustain.
  piano: {
    oscs: [
      ['triangle', 1, 0, 0.8],
      ['sawtooth', 1, 4, 0.3],
      ['sine', 2, 0, 0.14],
    ],
    a: 0.002,
    d: 1.4,
    s: 0.0,
    cutoff: 3400,
    fenv: 2800,
  },
  // Nylon guitar — quick warm pluck that dies away.
  nylon: {
    oscs: [
      ['triangle', 1, 0, 0.9],
      ['sawtooth', 1, 7, 0.2],
      ['triangle', 2, 0, 0.1],
    ],
    a: 0.003,
    d: 0.55,
    s: 0.0,
    cutoff: 2600,
    fenv: 2400,
  },
  // Strings pad — detuned saws, slow swell, long sustain.
  strings: {
    oscs: [
      ['sawtooth', 1, -9, 0.38],
      ['sawtooth', 1, 9, 0.38],
      ['sawtooth', 2, 3, 0.12],
    ],
    a: 0.34,
    d: 0.4,
    s: 0.85,
    cutoff: 1800,
  },
  // Warm analog synth — filtered saw+square, medium sustain.
  synth: {
    oscs: [
      ['sawtooth', 1, 0, 0.55],
      ['square', 1, 7, 0.25],
    ],
    a: 0.008,
    d: 0.5,
    s: 0.3,
    cutoff: 1500,
    fenv: 1700,
  },
  // Drawbar organ — stacked sines, full sustain, Leslie-ish tremolo (this one IS meant to hold).
  organ: {
    oscs: [
      ['sine', 1, 0, 0.5],
      ['sine', 2, 0, 0.28],
      ['sine', 3, 0, 0.16],
      ['sine', 4, 0, 0.09],
    ],
    a: 0.01,
    d: 0.15,
    s: 0.8,
    cutoff: 2400,
    trem: 5.5,
  },
  // Finger bass — round triangle + sub, plucky.
  fingerbass: {
    oscs: [
      ['triangle', 1, 0, 0.9],
      ['sine', 0.5, 0, 0.4],
    ],
    a: 0.004,
    d: 0.6,
    s: 0.25,
    cutoff: 850,
  },
  // Sub bass — deep sine.
  subbass: {
    oscs: [
      ['sine', 1, 0, 1],
      ['triangle', 1, 0, 0.2],
    ],
    a: 0.008,
    d: 0.6,
    s: 0.5,
    cutoff: 500,
  },
  // Synth bass — filtered saw with a little pluck.
  synthbass: {
    oscs: [['sawtooth', 1, 0, 0.8]],
    a: 0.004,
    d: 0.4,
    s: 0.2,
    cutoff: 700,
    fenv: 700,
  },
};
// Per-style instruments: lead / pad / bass. This is what makes each genre recognisable.
const STYLE_INST: Record<string, { lead: string; pad: string; bass: string }> = {
  lofi: { lead: 'rhodes', pad: 'rhodes', bass: 'fingerbass' },
  jazz: { lead: 'piano', pad: 'strings', bass: 'fingerbass' },
  rnb: { lead: 'rhodes', pad: 'rhodes', bass: 'synthbass' },
  bossa: { lead: 'nylon', pad: 'nylon', bass: 'fingerbass' },
  ambient: { lead: 'strings', pad: 'strings', bass: 'subbass' },
  chillhop: { lead: 'synth', pad: 'rhodes', bass: 'synthbass' },
  soul: { lead: 'rhodes', pad: 'organ', bass: 'fingerbass' },
  nightjazz: { lead: 'piano', pad: 'strings', bass: 'fingerbass' },
  noir: { lead: 'synth', pad: 'strings', bass: 'subbass' },
};

/** Play one instrument note: stacked oscillators → lowpass (+ envelope) → amp (ADSR). */
function voice(inst: Inst, freq: number, dur: number, gain: number, dest?: AudioNode, delay = 0) {
  const c = context();
  if (!c) return;
  const out = dest ?? c.destination;
  const t = c.currentTime + delay;
  const amp = c.createGain();
  const peak = Math.max(gain, 0.0002);
  const susLevel = Math.max(gain * inst.s, 0.0001);
  // ADSR: attack → decay toward the sustain floor → continuous fade to silence over the
  // rest of the note. Low-sustain instruments (piano, plucks) die away percussively;
  // high-sustain ones (strings, organ) hold. No flat hold — that's what sounded like an organ.
  const aEnd = t + Math.min(inst.a, dur * 0.4);
  const dEnd = Math.max(aEnd + 0.01, Math.min(t + inst.a + inst.d, t + dur - 0.03));
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.exponentialRampToValueAtTime(peak, aEnd);
  amp.gain.exponentialRampToValueAtTime(susLevel, dEnd);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  if (inst.cutoff) {
    const f = c.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.setValueAtTime(inst.cutoff + (inst.fenv ?? 0), t);
    if (inst.fenv) f.frequency.exponentialRampToValueAtTime(inst.cutoff, t + inst.a + inst.d);
    amp.connect(f).connect(out);
  } else {
    amp.connect(out);
  }
  if (inst.trem) {
    const lfo = c.createOscillator();
    const lg = c.createGain();
    lfo.frequency.value = inst.trem;
    lg.gain.value = gain * 0.22;
    lfo.connect(lg).connect(amp.gain);
    lfo.start(t);
    lfo.stop(t + dur + 0.05);
  }
  for (const [wave, mult, detune, og] of inst.oscs) {
    const osc = c.createOscillator();
    osc.type = wave;
    osc.frequency.value = freq * mult;
    if (detune) osc.detune.value = detune;
    const g = c.createGain();
    g.gain.value = og;
    osc.connect(g).connect(amp);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }
}

// Each world / the roadmap / fights get a distinct STYLE so they feel different — a style
// sets tempo, swing, drum kit, timbres, harmony colour and how busy the melody is. All are
// kept gentle and study-friendly.
type DrumKit = 'none' | 'lofi' | 'boombap' | 'brush' | 'bossa';
interface Style {
  minor: boolean;
  bpm: number;
  spread: number;
  swing: number;
  drums: DrumKit;
  padWave: OscillatorType;
  leadWave: OscillatorType;
  density: number; // chance a bar carries melody
  restProb: number; // chance a beat rests
  ext: boolean; // add 9th/11th colour
  bass: 'groove' | 'walk' | 'bossa' | 'root';
}
const STYLES: Record<string, Style> = {
  lofi: {
    minor: false,
    bpm: 70,
    spread: 8,
    swing: 0.11,
    drums: 'lofi',
    padWave: 'triangle',
    leadWave: 'triangle',
    density: 0.72,
    restProb: 0.26,
    ext: true,
    bass: 'groove',
  },
  jazz: {
    minor: false,
    bpm: 92,
    spread: 16,
    swing: 0.12,
    drums: 'brush',
    padWave: 'sine',
    leadWave: 'triangle',
    density: 0.85,
    restProb: 0.16,
    ext: true,
    bass: 'walk',
  },
  rnb: {
    minor: false,
    bpm: 76,
    spread: 8,
    swing: 0.09,
    drums: 'lofi',
    padWave: 'triangle',
    leadWave: 'triangle',
    density: 0.74,
    restProb: 0.22,
    ext: true,
    bass: 'groove',
  },
  bossa: {
    minor: false,
    bpm: 118,
    spread: 12,
    swing: 0.03,
    drums: 'bossa',
    padWave: 'triangle',
    leadWave: 'triangle',
    density: 0.72,
    restProb: 0.2,
    ext: true,
    bass: 'bossa',
  },
  ambient: {
    minor: false,
    bpm: 62,
    spread: 8,
    swing: 0,
    drums: 'none',
    padWave: 'sine',
    leadWave: 'sine',
    density: 0.5,
    restProb: 0.42,
    ext: true,
    bass: 'root',
  },
  chillhop: {
    minor: false,
    bpm: 84,
    spread: 8,
    swing: 0.08,
    drums: 'boombap',
    padWave: 'triangle',
    leadWave: 'triangle',
    density: 0.76,
    restProb: 0.2,
    ext: true,
    bass: 'groove',
  },
  soul: {
    minor: false,
    bpm: 82,
    spread: 8,
    swing: 0.09,
    drums: 'lofi',
    padWave: 'triangle',
    leadWave: 'triangle',
    density: 0.8,
    restProb: 0.18,
    ext: true,
    bass: 'groove',
  },
  nightjazz: {
    minor: true,
    bpm: 88,
    spread: 12,
    swing: 0.11,
    drums: 'brush',
    padWave: 'sine',
    leadWave: 'triangle',
    density: 0.82,
    restProb: 0.18,
    ext: true,
    bass: 'walk',
  },
  noir: {
    minor: true,
    bpm: 80,
    spread: 10,
    swing: 0.1,
    drums: 'lofi',
    padWave: 'sine',
    leadWave: 'triangle',
    density: 0.7,
    restProb: 0.24,
    ext: true,
    bass: 'groove',
  },
};
const WORLD_STYLE: Record<string, string> = {
  A1: 'lofi',
  A2: 'jazz',
  B1: 'rnb',
  B2: 'bossa',
  C1: 'ambient',
  C2: 'chillhop',
};

// Per-style rhythmic feel — its own pool of one-bar melody rhythms (beats sum to 4) so the
// GROOVE differs between worlds, not just the timbre.
const DEFAULT_RHYTHMS = [
  [1, 1, 1, 1],
  [1, 0.5, 0.5, 1, 1],
  [2, 1, 1],
];
const STYLE_RHYTHM: Record<string, number[][]> = {
  lofi: [
    [1.5, 0.5, 2],
    [1, 0.5, 1.5, 1],
    [2, 1, 1],
    [1, 1, 2],
  ],
  jazz: [
    [0.5, 0.5, 1, 0.5, 0.5, 1],
    [1, 0.5, 0.5, 1, 1],
    [0.5, 1, 0.5, 1, 1],
    [1, 1, 1, 1],
  ],
  rnb: [
    [1, 0.5, 0.5, 2],
    [0.5, 0.5, 1, 2],
    [2, 0.5, 0.5, 1],
    [1, 1, 2],
  ],
  bossa: [
    [1, 1, 1, 1],
    [0.5, 0.5, 1, 0.5, 0.5, 1],
    [1, 0.5, 0.5, 1, 1],
    [2, 1, 1],
  ],
  ambient: [[4], [3, 1], [2, 2], [2, 1, 1]],
  chillhop: [
    [1, 1, 2],
    [2, 1, 1],
    [1, 0.5, 0.5, 1, 1],
    [0.5, 0.5, 1, 2],
  ],
  soul: [
    [1, 1, 1, 1],
    [1, 0.5, 0.5, 1, 1],
    [2, 1, 1],
    [1.5, 0.5, 2],
  ],
  nightjazz: [
    [0.5, 0.5, 1, 1, 1],
    [1, 0.5, 0.5, 1, 1],
    [0.5, 1, 0.5, 2],
    [1, 1, 2],
  ],
  noir: [
    [2, 2],
    [3, 1],
    [1, 1, 2],
    [2, 1, 1],
  ],
};
// Harmonic rhythm: how many bars a chord holds — spacious styles change less often.
const STYLE_CHORD_EVERY: Record<string, number> = {
  lofi: 2,
  jazz: 1,
  rnb: 2,
  bossa: 1,
  ambient: 2,
  chillhop: 2,
  soul: 1,
  nightjazz: 1,
  noir: 2,
};
// How busy a style's melody is (0 sparse/long notes .. 1 busy/short) — biases the generator.
const STYLE_BUSY: Record<string, number> = {
  lofi: 0.4,
  jazz: 0.75,
  rnb: 0.5,
  bossa: 0.6,
  ambient: 0.15,
  chillhop: 0.5,
  soul: 0.5,
  nightjazz: 0.7,
  noir: 0.3,
};

/** Generate a fresh one-bar rhythm (durations summing to 4) — near-infinite variety,
 *  biased by `busy`. Occasionally the caller uses a style's hand-crafted motif instead. */
function makeRhythm(ri: (n: number) => number, busy: number): number[] {
  const out: number[] = [];
  let total = 0;
  while (total < 4) {
    const rem = 4 - total;
    const palette =
      busy > 0.6 ? [0.5, 0.5, 1, 1, 1.5] : busy > 0.35 ? [0.5, 1, 1, 1.5, 2] : [1, 1.5, 2, 2, 3];
    const cands = palette.filter((d) => d <= rem);
    const d = cands.length ? cands[ri(cands.length)] : rem;
    out.push(d);
    total += d;
  }
  return out;
}

// Browsers block sound before any user gesture, so prime the AudioContext on the first
// interaction — the theme is already ticking and becomes audible the moment they click.
let primed = false;
function primeAudio() {
  if (primed || typeof window === 'undefined') return;
  primed = true;
  const resume = () => void context()?.resume?.();
  window.addEventListener('pointerdown', resume, { once: true, passive: true });
  window.addEventListener('keydown', resume, { once: true });
  window.addEventListener('touchstart', resume, { once: true, passive: true });
}
let loadCount = 0;

/**
 * A live generative theme in a given `style`. It never loops a fixed tune — every bar it
 * decides the next chord, bass, a developing melody and a soft beat, so it evolves for hours.
 */
function startGenerative(seedStr: string, styleKey: string): ThemeHandle {
  const style = STYLES[styleKey] ?? STYLES.lofi;
  const stylePool = STYLE_RHYTHM[styleKey] ?? DEFAULT_RHYTHMS;
  const chordEvery = STYLE_CHORD_EVERY[styleKey] ?? 1;
  const busy = STYLE_BUSY[styleKey] ?? 0.5;
  const inst = STYLE_INST[styleKey] ?? STYLE_INST.lofi;
  const leadI = INSTRUMENTS[inst.lead];
  const padI = INSTRUMENTS[inst.pad];
  const bassI = INSTRUMENTS[inst.bass];
  const c = context();
  let bus: GainNode | null = null;
  const nodes: AudioNode[] = [];
  if (c) {
    bus = c.createGain();
    bus.connect(musicOut() ?? c.destination);
    bus.gain.setValueAtTime(0.0001, c.currentTime);
    bus.gain.exponentialRampToValueAtTime(1, c.currentTime + FADE);
    const delay = c.createDelay(0.8);
    delay.delayTime.value = 0.34;
    const fb = c.createGain();
    fb.gain.value = 0.3;
    const wet = c.createGain();
    wet.gain.value = 0.28;
    bus.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(wet);
    wet.connect(musicOut() ?? c.destination);
    nodes.push(bus, delay, fb, wet);
  }
  const dest = bus ?? undefined;

  const r = rng(hashSeed(seedStr));
  const ri = (n: number) => Math.floor(r() * n);
  const pick = <T>(a: T[]): T => a[ri(a.length)];

  const mode = MODES[pick(style.minor ? DARK : BRIGHT)];
  const penta = mode[2] === 4 ? PENTA_MAJOR : PENTA_MINOR;
  const key = 48 + pick([0, 2, 3, 5, 7, 8, 9, 10]); // wide key spread across worlds
  const bpm = style.bpm + ri(style.spread);
  const beatSec = 60 / bpm;
  const stepMs = (beatSec / 4) * 1000; // 16th-note clock
  const swingSec = beatSec * style.swing;

  const deg = (d: number) => key + mode[((d % 7) + 7) % 7] + 12 * Math.floor(d / 7);

  // Musical state that evolves as bars go by.
  let chord = 0;
  let bars = 0;
  let mIdx = 2 + ri(3); // pentatonic melody position
  let rhythm = makeRhythm(ri, busy);
  let step = 0;

  // Per-bar note maps (step 0..15 → what to play).
  let pad: number[] = [];
  let bass: Record<number, number> = {};
  let mel: Record<number, { midi: number; dur: number }> = {};
  let perc: Record<number, string> = {};

  function genBar() {
    // Advance the harmony — usually a smooth move, occasionally a fresh jump for variety.
    if (bars > 0 && (bars % chordEvery === 0 || ri(100) < 22))
      chord = ri(100) < 15 ? ri(7) : pick(NEXT[chord] ?? [3, 4, 5]);
    // Extended voicing: root, 3rd, 7th, 9th (optional 5th / 11th for colour).
    pad = [deg(chord), deg(chord + 2), deg(chord + 6), deg(chord + 8)];
    if (style.ext && ri(100) < 45) pad.push(deg(chord + 4));
    if (style.ext && ri(100) < 25) pad.push(deg(chord + 10));
    // Bass — pattern depends on the style.
    bass = { 0: deg(chord) - 12 };
    if (style.bass === 'groove') {
      if (ri(100) < 55) bass[6] = deg(chord) - 12;
      if (ri(100) < 75) bass[8] = deg(chord + 4) - 12;
      if (ri(100) < 35) bass[14] = deg(chord + 7) - 12;
    } else if (style.bass === 'walk') {
      bass[4] = deg(chord + 4) - 12;
      bass[8] = deg(chord + 2) - 12;
      bass[12] = deg(chord + 5) - 12;
    } else if (style.bass === 'bossa') {
      bass[8] = deg(chord + 4) - 12;
      if (ri(100) < 55) bass[6] = deg(chord + 4) - 12;
    } else if (ri(100) < 40) {
      bass[8] = deg(chord) - 12;
    }
    // Melody: develop a motif, leave space (rests), drift register. Whole bars may rest.
    if (ri(100) < 40) rhythm = ri(100) < 65 ? makeRhythm(ri, busy) : pick(stylePool);
    mel = {};
    if (ri(100) < style.density * 100) {
      let beat = 0;
      for (const dur of rhythm) {
        const pos = Math.round(beat * 4);
        beat += dur;
        if (ri(100) < style.restProb * 100) continue;
        mIdx = Math.max(0, Math.min(penta.length + 2, mIdx + pick([1, -1, 1, 2, -2, 0, -1, 3])));
        const oct = mIdx >= penta.length ? 12 : 0;
        mel[pos] = { midi: key + penta[mIdx % penta.length] + 12 + oct, dur };
      }
    }
    // Drums — kit depends on the style.
    perc = {};
    const kit = style.drums;
    if (kit !== 'none') {
      perc[0] = 'k';
      if (kit === 'lofi') {
        perc[8] = 's';
        if (ri(100) < 45) perc[11] = 'k';
        for (let s = 2; s < 16; s += 4) if (ri(100) < 78) perc[s] = 'h';
      } else if (kit === 'boombap') {
        perc[8] = 's';
        if (ri(100) < 55) perc[6] = 'k';
        if (ri(100) < 40) perc[10] = 'k';
        for (let s = 2; s < 16; s += 2) if (ri(100) < 60 && !perc[s]) perc[s] = 'h';
      } else if (kit === 'brush') {
        perc[8] = 'r';
        for (let s = 2; s < 16; s += 2) if (ri(100) < 88 && !perc[s]) perc[s] = 'h';
      } else if (kit === 'bossa') {
        [0, 6, 8, 14].forEach((s) => (perc[s] = 'r'));
        perc[0] = 'k';
        perc[8] = 'k';
        for (let s = 2; s < 16; s += 4) if (ri(100) < 66 && !perc[s]) perc[s] = 'h';
      }
    }
    bars++;
  }

  // Start from a different point each load (but on a clean downbeat) so it isn't always the
  // same opening — warm the harmony/melody state forward a few bars first.
  const offset = 1 + ((loadCount++ * 5 + hashSeed(seedStr)) % 7);
  for (let i = 0; i < offset; i++) genBar();

  const tick = () => {
    if (musicOn && !ducked && c) {
      const s = step;
      if (s === 0) {
        // Pad: the style's chord instrument, gently rolled in (humanised strum).
        pad.forEach((n, i) => voice(padI, midi(n), beatSec * 3.4, 0.013, dest, i * 0.02));
      }
      if (bass[s] !== undefined) voice(bassI, midi(bass[s]), beatSec * 1.5, 0.05, dest);
      const m = mel[s];
      if (m) {
        const swing = s % 4 === 2 ? swingSec : 0;
        voice(leadI, midi(m.midi), m.dur * beatSec * 0.92, 0.05 * (0.82 + r() * 0.36), dest, swing);
      }
      const p = perc[s];
      const hatSwing = s % 4 === 2 ? swingSec : 0;
      if (p === 'k') blip(114, 0.2, { type: 'sine', gain: 0.04, slideTo: 44, dest: musicOut() });
      else if (p === 'h') hit(c, 0.01, 0.025, 7500, 0, hatSwing);
      else if (p === 's') {
        hit(c, 0.02, 0.08, 2200, 6500); // soft rim/snap on the backbeat
        blip(330, 0.05, { type: 'triangle', gain: 0.009, dest: musicOut() });
      } else if (p === 'r') hit(c, 0.013, 0.05, 3200, 9000, hatSwing); // brush/rim tick
    }
    step = (step + 1) % 16;
    if (step === 0) genBar();
  };
  tick();
  const timer = setInterval(tick, stepMs);

  return {
    stop() {
      clearInterval(timer);
      if (c && bus) {
        const t = c.currentTime;
        bus.gain.cancelScheduledValues(t);
        bus.gain.setValueAtTime(Math.max(bus.gain.value, 0.0001), t);
        bus.gain.exponentialRampToValueAtTime(0.0001, t + FADE);
        setTimeout(() => {
          for (const n of nodes) {
            try {
              n.disconnect();
            } catch {
              /* already gone */
            }
          }
        }, 1600);
      }
    },
  };
}

// ── Theme control ────────────────────────────────────────────────────────────
let worldTheme: ThemeHandle | null = null;

/** Start a world's evolving theme — each world has its own genre (lofi, jazz, R&B…). */
export function startWorldTheme(level: string) {
  stopWorldTheme();
  ducked = false;
  primeAudio();
  worldTheme = startGenerative(`world:${level}`, WORLD_STYLE[level] ?? 'lofi');
}
export function stopWorldTheme() {
  if (worldTheme) {
    worldTheme.stop();
    worldTheme = null;
  }
}

/** The roadmap/world-select hub theme — its own "soul" style (shares the world-theme slot). */
export function startRoadmapTheme() {
  stopWorldTheme();
  ducked = false;
  primeAudio();
  worldTheme = startGenerative('roadmap', 'soul');
}

let battleTheme: ThemeHandle | null = null;

/** A fight's music. `seed` is unique per mini-boss / boss, so each evolves its own way. */
export function startBattleTheme(seed = 0, boss = false) {
  stopBattleTheme();
  ducked = false;
  primeAudio();
  battleTheme = startGenerative(`fight:${seed}`, boss ? 'noir' : 'nightjazz');
}
export function stopBattleTheme() {
  if (battleTheme) {
    battleTheme.stop();
    battleTheme = null;
  }
}
