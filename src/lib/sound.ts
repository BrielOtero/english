// Procedural sound effects via the Web Audio API — no audio files, a few hundred
// bytes of code, and it gives the minigames real arcade "juice". Every sound is
// synthesised from oscillators on demand. Respects a global mute and only starts an
// AudioContext after a user gesture (browsers require that), so it's safe to call.

let ctx: AudioContext | null = null;
let musicOn = true; // per-world ambient theme
let fxOn = true; // interaction sound effects

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

/* ------------------------------------------------------------------ */
/* Ambient per-world soundtrack — a calm, procedurally-looped melody.   */
/* Each world has its own pentatonic scale so it feels like its own     */
/* place. Gentle sine pads, low gain — background, never distracting.    */
/* ------------------------------------------------------------------ */
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
  const scale = WORLD_SCALE[level] ?? WORLD_SCALE.A1;
  let step = 0;
  const tick = () => {
    if (!musicOn) return;
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
