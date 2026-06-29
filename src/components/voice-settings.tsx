import { useStore } from '../store';
import { Icon } from './icons';

const SPEEDS: { label: string; rate: number }[] = [
  { label: 'Slow', rate: 0.7 },
  { label: 'Normal', rate: 0.95 },
  { label: 'Fast', rate: 1.15 },
];

/**
 * The "Audio" dropdown. Course audio plays from pre-generated natural-voice clips, so
 * the only thing worth tuning is playback speed (which also applies to the clips).
 */
export function VoiceSettings() {
  const rate = useStore((s) => s.voiceRate);
  const setVoiceRate = useStore((s) => s.setVoiceRate);

  return (
    <details className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-2 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
        <Icon name="volume" className="h-3.5 w-3.5" />
        Audio
      </summary>

      <div className="absolute right-0 z-30 mt-2 w-56 rounded-xl border border-rule-soft bg-paper p-4 shadow-xl">
        <label className="mb-1.5 block font-mono text-[10px] tracking-[0.15em] text-ink-mute uppercase">
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
        <p className="mt-3 text-[11px] leading-snug text-ink-mute">
          Sentences use a built-in natural voice, so they sound the same in every browser.
        </p>
      </div>
    </details>
  );
}
