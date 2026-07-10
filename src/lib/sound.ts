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

// Ambient per-world soundtrack: a calm, procedurally-looped melody. Each world has its
// own pentatonic scale so it feels like its own place; gentle sine pads at low gain.
const WORLD_SCALE: Record<string, number[]> = {
  A1: [261.63, 293.66, 329.63, 392.0, 440.0], // C major pentatonic — bright, hopeful
  A2: [293.66, 329.63, 392.0, 440.0, 523.25], // D — sunny prairie
  B1: [246.94, 277.18, 329.63, 369.99, 415.3], // B — canyon, open
  B2: [220.0, 261.63, 293.66, 329.63, 392.0], // A minor pentatonic — misty peaks
  C1: [207.65, 233.08, 277.18, 311.13, 349.23], // G# — windswept heights
  C2: [196.0, 220.0, 261.63, 293.66, 349.23], // G — twilight summit
};

let themeTimer: ReturnType<typeof setInterval> | null = null;

/** Start looping a world's ambient theme (stops any current one). */
export function startWorldTheme(level: string) {
  stopWorldTheme();
  ducked = false; // starting a theme means music should be audible again
  const scale = WORLD_SCALE[level] ?? WORLD_SCALE.A1;
  let step = 0;
  const tick = () => {
    if (!musicOn || ducked) return;
    const note = scale[step % scale.length];
    blip(note, 1.7, { type: 'sine', gain: 0.03 });
    if (step % 4 === 0) blip(note / 2, 2.4, { type: 'sine', gain: 0.022 }); // soft bass root
    step++;
  };
  tick();
  themeTimer = setInterval(tick, 1450);
}

export function stopWorldTheme() {
  if (themeTimer) {
    clearInterval(themeTimer);
    themeTimer = null;
  }
}

// A driving battle loop for mini-boss / boss fights. `seed` picks the key so each
// fight sounds different; `boss` drops it an octave and speeds it up for more menace.
const BATTLE_SCALES: number[][] = [
  [329.63, 392.0, 440.0, 493.88, 587.33],
  [293.66, 349.23, 392.0, 440.0, 523.25],
  [261.63, 311.13, 349.23, 392.0, 466.16],
  [349.23, 415.3, 466.16, 523.25, 622.25],
];
let battleTimer: ReturnType<typeof setInterval> | null = null;

export function startBattleTheme(seed = 0, boss = false) {
  stopBattleTheme();
  ducked = false;
  const scale = BATTLE_SCALES[seed % BATTLE_SCALES.length];
  const oct = boss ? 0.5 : 1;
  let step = 0;
  const tick = () => {
    if (!musicOn || ducked) return;
    const note = scale[step % scale.length] * oct;
    blip(note, 0.22, { type: boss ? 'sawtooth' : 'triangle', gain: 0.035 });
    if (step % 2 === 0) blip(note / 2, 0.34, { type: 'sine', gain: 0.03 });
    step++;
  };
  tick();
  battleTimer = setInterval(tick, boss ? 300 : 340);
}

export function stopBattleTheme() {
  if (battleTimer) {
    clearInterval(battleTimer);
    battleTimer = null;
  }
}
