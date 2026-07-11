// File-first audio playback. If a phrase was pre-generated (high-quality neural voice,
// see scripts/generate-audio.ts) we play the static .mp3 — so it sounds great and
// identical in every browser. Anything not pre-generated (text the learner types,
// dictation answers, the voice preview) falls back to the browser's speech synthesis.

import { AUDIO_HASHES } from '@/content/audio-manifest';
import { hashText } from '@/lib/audio-hash';
import { speak, stopSpeaking, type SpeakOptions } from '@/lib/speech';
import { duckMusic, unduckMusic } from '@/lib/sound';

const available = new Set(AUDIO_HASHES);
let current: HTMLAudioElement | null = null;

/** Play `text`: the pre-generated clip if we have one, else browser TTS. Ducks the
 *  background music for the duration so the voice is never fighting the soundtrack. */
export function playPhrase(text: string, opts: SpeakOptions = {}): void {
  stopPhrase(); // stop anything already playing (and un-duck it) before starting
  if (!text.trim()) {
    opts.onEnd?.();
    return;
  }
  const hash = hashText(text);
  const done = () => {
    unduckMusic();
    opts.onEnd?.();
  };
  duckMusic();
  if (available.has(hash)) {
    const audio = new Audio(`${import.meta.env.BASE_URL}audio/${hash}.mp3`);
    audio.playbackRate = opts.rate ?? 1;
    audio.onended = () => {
      current = null;
      done();
    };
    // If the file is somehow missing (e.g. clips weren't generated), fall back to TTS —
    // which keeps the music ducked until it finishes via the shared `done`.
    audio.onerror = () => {
      current = null;
      speak(text, { ...opts, onEnd: done });
    };
    current = audio;
    audio.play().catch(() => {
      current = null;
      speak(text, { ...opts, onEnd: done });
    });
    return;
  }
  speak(text, { ...opts, onEnd: done });
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

/** Stop any audio (file or speech) and restore the music. */
export function stopPhrase(): void {
  if (current) {
    current.pause();
    current.currentTime = 0;
    current = null;
  }
  stopSpeaking();
  unduckMusic();
}
