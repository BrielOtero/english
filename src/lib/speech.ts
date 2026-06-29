// Browser text-to-speech for "Listen" buttons, the pronunciation lab, and dictation.
// Quality on the Web Speech API depends almost entirely on WHICH voice is used: most
// systems ship a few natural voices (Chrome's network "Google US English", Apple's
// enhanced/premium voices) next to robotic defaults. So we rank the available voices
// and pick the best one automatically, while letting the learner override and preview.

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

let cachedVoices: SpeechSynthesisVoice[] = [];
const listeners = new Set<() => void>();
/** The learner's chosen voice (voiceURI), or null to auto-pick the best. */
let preferredVoiceURI: string | null = null;

function refreshVoices() {
  if (!speechSupported()) return;
  cachedVoices = window.speechSynthesis.getVoices();
  listeners.forEach((l) => l());
}

if (speechSupported()) {
  refreshVoices();
  // Voices usually load asynchronously; repopulate when they arrive.
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

/** Subscribe to voice-list changes (returns an unsubscribe fn). */
export function onVoicesChanged(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

// Substrings that signal a high-quality / natural voice, and novelty/robotic ones.
const GOOD_NAMES = [
  'natural',
  'neural',
  'premium',
  'enhanced',
  'google',
  'siri',
  'samantha',
  'ava',
  'allison',
  'serena',
  'evan',
  'zoe',
  'aaron',
  'nicky',
  'daniel',
  'kate',
  'oliver',
  'libby',
  'sonia',
  'ryan',
  'jenny',
  'aria',
  'guy',
];
const BAD_NAMES = [
  'compact',
  'eloquence',
  'albert',
  'fred',
  'junior',
  'ralph',
  'kathy',
  'zarvox',
  'trinoids',
  'whisper',
  'bells',
  'boing',
  'bubbles',
  'bahh',
  'cellos',
  'wobble',
  'organ',
  'jester',
  'superstar',
  'bad news',
  'good news',
  'novelty',
  'grandma',
  'grandpa',
  'reed',
  'rocko',
  'sandy',
  'shelley',
  'flo',
];

/** A heuristic quality score; higher is better. English voices only. */
function score(v: SpeechSynthesisVoice): number {
  const lang = v.lang.toLowerCase().replace('_', '-');
  if (!lang.startsWith('en')) return -1000;
  const n = v.name.toLowerCase();
  let s = 0;
  if (lang.startsWith('en-us') || lang.startsWith('en-gb')) s += 6;
  else s += 2; // other English accents are still fine
  if (n.includes('google')) s += 18;
  if (n.includes('natural') || n.includes('neural')) s += 16;
  if (n.includes('premium')) s += 14;
  if (n.includes('enhanced')) s += 10;
  if (n.includes('siri')) s += 12;
  if (GOOD_NAMES.some((g) => n.includes(g))) s += 8;
  // Network voices in Chrome (localService === false) are usually the good ones.
  if (v.localService === false) s += 7;
  if (BAD_NAMES.some((b) => n.includes(b))) s -= 40;
  if (v.default) s += 1;
  return s;
}

/** English voices, best first. */
export function englishVoices(): SpeechSynthesisVoice[] {
  if (!cachedVoices.length) refreshVoices();
  return cachedVoices
    .filter((v) => v.lang.toLowerCase().startsWith('en'))
    .sort((a, b) => score(b) - score(a));
}

/** The auto-selected best voice's URI, if any. */
export function bestVoiceURI(): string | undefined {
  return englishVoices()[0]?.voiceURI;
}

/** Set (or clear) the learner's preferred voice. */
export function setPreferredVoice(voiceURI: string | null): void {
  preferredVoiceURI = voiceURI;
}

function resolveVoice(override?: string | null): SpeechSynthesisVoice | undefined {
  const wanted = override ?? preferredVoiceURI;
  if (wanted) {
    const match = cachedVoices.find((v) => v.voiceURI === wanted);
    if (match) return match;
  }
  return englishVoices()[0];
}

export interface SpeakOptions {
  /** Playback rate; 1 is normal. Slower (~0.8) helps beginners. */
  rate?: number;
  /** Voice pitch; 1 is normal. */
  pitch?: number;
  /** Force a specific voice for this utterance (else the preferred/best voice). */
  voiceURI?: string | null;
  /** Called when speech ends or is cancelled. */
  onEnd?: () => void;
}

/** Speak a phrase out loud, cancelling anything already playing. */
export function speak(text: string, opts: SpeakOptions = {}): void {
  if (!speechSupported() || !text.trim()) {
    opts.onEnd?.();
    return;
  }
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = resolveVoice(opts.voiceURI);
  if (voice) {
    u.voice = voice;
    u.lang = voice.lang;
  } else {
    u.lang = 'en-US';
  }
  u.rate = opts.rate ?? 1;
  u.pitch = opts.pitch ?? 1;
  if (opts.onEnd) {
    u.onend = opts.onEnd;
    u.onerror = opts.onEnd;
  }
  // A tick after cancel() avoids a Chrome quirk where the first network-voice
  // utterance is dropped if queued in the same frame as the cancel.
  setTimeout(() => synth.speak(u), 0);
}

/** Stop any current speech. */
export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}
