import { useEffect, useState } from 'react';
import { useStore } from '../store';
import { englishVoices, onVoicesChanged, speak, speechSupported } from '../lib/speech';
import { Icon } from './icons';

const PREVIEW = 'Hello! This is how your English sentences will sound.';

const SPEEDS: { label: string; rate: number }[] = [
  { label: 'Slow', rate: 0.7 },
  { label: 'Normal', rate: 0.95 },
  { label: 'Fast', rate: 1.15 },
];

/**
 * An "Audio" dropdown to choose the TTS voice (the biggest lever on quality),
 * preview it, and set the speaking speed. Voice quality varies a lot between the
 * voices a system ships, so we list them best-first and let the learner pick.
 */
export function VoiceSettings() {
  const voiceURI = useStore((s) => s.voiceURI);
  const setVoiceURI = useStore((s) => s.setVoiceURI);
  const rate = useStore((s) => s.voiceRate);
  const setVoiceRate = useStore((s) => s.setVoiceRate);

  // Seeded from whatever is loaded at first render; the subscription fills in
  // voices that the browser loads asynchronously afterwards.
  const [voices, setVoices] = useState(englishVoices);
  useEffect(() => onVoicesChanged(() => setVoices(englishVoices())), []);

  if (!speechSupported()) return null;

  return (
    <details className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-2 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
        <Icon name="volume" className="h-3.5 w-3.5" />
        Audio
      </summary>

      <div className="absolute right-0 z-30 mt-2 w-72 rounded-xl border border-rule-soft bg-paper p-4 shadow-xl">
        <label className="mb-1.5 block font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
          Voice
        </label>
        <select
          value={voiceURI ?? ''}
          onChange={(e) => setVoiceURI(e.target.value || null)}
          className="w-full rounded-lg border border-rule-soft bg-bg px-2.5 py-2 text-[13px] text-ink focus:border-accent focus:outline-none"
        >
          <option value="">Auto — best available</option>
          {voices.map((v) => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>

        <label className="mt-4 mb-1.5 block font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
          Speed
        </label>
        <div className="flex gap-2">
          {SPEEDS.map((s) => {
            const active = Math.abs(rate - s.rate) < 0.06;
            return (
              <button
                key={s.label}
                onClick={() => setVoiceRate(s.rate)}
                className={`flex-1 rounded-lg border px-2 py-1.5 text-[12px] transition-colors ${
                  active
                    ? 'border-accent bg-accent/10 text-ink'
                    : 'border-rule-soft bg-bg text-ink-soft hover:text-ink'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => speak(PREVIEW, { rate, voiceURI })}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90"
        >
          <Icon name="play" className="h-3 w-3" />
          Preview voice
        </button>

        <p className="mt-3 text-[11px] leading-snug text-ink-mute">
          {voices.length <= 1
            ? 'Only one English voice is installed. Add more for better quality (see below).'
            : 'Try a few — quality varies. In Chrome, “Google US English” usually sounds best.'}
        </p>
        <p className="mt-1.5 text-[11px] leading-snug text-ink-mute">
          Best macOS voices: System Settings → Accessibility →{' '}
          <span className="text-ink-soft">Read &amp; Speak</span> (older macOS: “Spoken Content”) →
          System Voice → Manage Voices → download an <span className="text-ink-soft">Enhanced</span>{' '}
          or <span className="text-ink-soft">Premium</span> English voice (e.g. “Ava (Premium)”).
          Then reload this page.
        </p>
        <p className="mt-1.5 text-[11px] leading-snug text-ink-mute">
          In Chrome, downloaded Apple voices may not all show — use “Google US English”, or open this
          page in <span className="text-ink-soft">Safari</span> to see the Premium voices. Siri voices
          aren’t available to browsers.
        </p>
      </div>
    </details>
  );
}
