// File-first audio playback. If a phrase was pre-generated (high-quality neural voice,
// see scripts/generate-audio.ts) we play the static .mp3 — so it sounds great and
// identical in every browser. Anything not pre-generated (text the learner types,
// dictation answers, the voice preview) falls back to the browser's speech synthesis.

import { AUDIO_HASHES } from '../content/audio-manifest';
import { hashText } from './audio-hash';
import { speak, stopSpeaking, type SpeakOptions } from './speech';

const available = new Set(AUDIO_HASHES);
let current: HTMLAudioElement | null = null;

/** Play `text`: the pre-generated clip if we have one, else browser TTS. */
export function playPhrase(text: string, opts: SpeakOptions = {}): void {
  if (!text.trim()) {
    opts.onEnd?.();
    return;
  }
  const hash = hashText(text);
  if (available.has(hash)) {
    stopPhrase();
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/${hash}.mp3`);
    audio.playbackRate = opts.rate ?? 1;
    audio.onended = () => {
      current = null;
      opts.onEnd?.();
    };
    // If the file is somehow missing (e.g. clips weren't generated), fall back.
    audio.onerror = () => {
      current = null;
      speak(text, opts);
    };
    current = audio;
    audio.play().catch(() => {
      current = null;
      speak(text, opts);
    });
    return;
  }
  speak(text, opts);
}

/** Play several phrases back-to-back (used by "Listen to all" on a reading). */
export function playSequence(texts: string[], opts: SpeakOptions = {}): void {
  let i = 0;
  const next = () => {
    if (i >= texts.length) {
      opts.onEnd?.();
      return;
    }
    playPhrase(texts[i++], { ...opts, onEnd: next });
  };
  next();
}

/** Stop any audio (file or speech). */
export function stopPhrase(): void {
  if (current) {
    current.pause();
    current.currentTime = 0;
    current = null;
  }
  stopSpeaking();
}
