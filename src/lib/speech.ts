// Browser text-to-speech, used for "Listen" buttons, the pronunciation lab, and
// dictation exercises. This is what lets the app simulate listening immersion
// with no backend — everything runs on the Web Speech API (`speechSynthesis`).

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

let cachedVoices: SpeechSynthesisVoice[] = [];

function refreshVoices() {
  if (!speechSupported()) return;
  cachedVoices = window.speechSynthesis.getVoices();
}

if (speechSupported()) {
  refreshVoices();
  // Voices often load asynchronously; repopulate the cache when they arrive.
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

/** Pick the best available voice for a BCP-47 language tag (default en-US). */
function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  if (!cachedVoices.length) refreshVoices();
  const base = lang.toLowerCase().split('-')[0];
  // Prefer an exact locale match, then any voice for the base language.
  return (
    cachedVoices.find((v) => v.lang.toLowerCase() === lang.toLowerCase()) ??
    cachedVoices.find((v) => v.lang.toLowerCase().startsWith(base))
  );
}

export interface SpeakOptions {
  /** Playback rate; 1 is normal. Slower (~0.8) helps beginners. */
  rate?: number;
  /** BCP-47 language tag. Default 'en-US'. */
  lang?: string;
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
  u.lang = opts.lang ?? 'en-US';
  u.rate = opts.rate ?? 0.95;
  const voice = pickVoice(u.lang);
  if (voice) u.voice = voice;
  if (opts.onEnd) {
    u.onend = opts.onEnd;
    u.onerror = opts.onEnd;
  }
  synth.speak(u);
}

/** Stop any current speech. */
export function stopSpeaking(): void {
  if (speechSupported()) window.speechSynthesis.cancel();
}
