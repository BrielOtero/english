import { useEffect, useRef } from 'react';
import { useStore } from '@/store';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';

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
  const musicOn = useStore((s) => s.musicOn);
  const setMusicOn = useStore((s) => s.setMusicOn);
  const fxOn = useStore((s) => s.fxOn);
  const setFxOn = useStore((s) => s.setFxOn);
  const musicVol = useStore((s) => s.musicVol);
  const setMusicVol = useStore((s) => s.setMusicVol);
  const fxVol = useStore((s) => s.fxVol);
  const setFxVol = useStore((s) => s.setFxVol);
  const resetAudio = useStore((s) => s.resetAudio);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  // Native <details> stays open on outside clicks — close it like a real dropdown.
  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    const onPointerDown = (e: PointerEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.open = false;
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && (el.open = false);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <details ref={detailsRef} className="relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-2 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
        <Icon name="volume" className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Audio</span>
      </summary>

      <div className="absolute right-0 z-30 mt-2 w-56 rounded-xl border border-rule-soft bg-paper p-4 shadow-xl">
        <label className="mb-1.5 block kicker text-[13.5px] text-ink-soft">Speed</label>
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
        <div className="mt-4 space-y-2">
          <ToggleRow label="Music" on={musicOn} onChange={setMusicOn} />
          <ToggleRow label="Sound effects" on={fxOn} onChange={setFxOn} />
        </div>

        <div className="mt-4 space-y-3">
          <VolumeRow
            label="Music volume"
            value={musicVol}
            onChange={setMusicVol}
            muted={!musicOn}
          />
          <VolumeRow label="Effects volume" value={fxVol} onChange={setFxVol} muted={!fxOn} />
        </div>

        <Button
          variant="outline"
          shape="plain"
          size="xs"
          className="mt-4 w-full font-normal"
          onClick={resetAudio}
        >
          Restore defaults
        </Button>

        <p className="mt-3 text-[11px] leading-snug text-ink-mute">
          Sentences use a built-in natural voice, so they sound the same in every browser.
        </p>
      </div>
    </details>
  );
}

function ToggleRow({
  label,
  on,
  onChange,
}: {
  label: string;
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!on)}
      role="switch"
      aria-checked={on}
      className="flex w-full items-center justify-between rounded-lg border border-rule-soft bg-bg px-3 py-2 text-[12.5px] text-ink transition-colors hover:border-accent/50"
    >
      <span>{label}</span>
      <span
        className={`relative h-5 w-9 rounded-full transition-colors ${on ? 'bg-accent' : 'bg-rule-soft'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-paper transition-transform ${
            on ? 'translate-x-4' : ''
          }`}
        />
      </span>
    </button>
  );
}

function VolumeRow({
  label,
  value,
  onChange,
  muted,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  muted?: boolean;
}) {
  return (
    <label className={`block ${muted ? 'opacity-40' : ''}`}>
      <div className="mb-1 flex items-center justify-between text-[12px] text-ink-soft">
        <span>{label}</span>
        <span className="font-mono text-[11px] text-ink-mute tabular-nums">
          {Math.round(value * 100)}%
        </span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.05}
        value={value}
        disabled={muted}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-rule-soft accent-accent"
      />
    </label>
  );
}
