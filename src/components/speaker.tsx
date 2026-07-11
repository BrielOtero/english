import { useEffect, useState } from 'react';
import { playPhrase } from '@/lib/audio';
import { useStore } from '@/store';

const SIZES = {
  sm: 'h-6 w-6 text-[11px]',
  md: 'h-7 w-7 text-[13px]',
  lg: 'h-9 w-9 text-[15px]',
} as const;

/**
 * A round "Listen" button that speaks `text` aloud via the Web Speech API at the
 * learner's chosen rate. Renders nothing if the browser has no speech synthesis.
 */
export function Speaker({
  text,
  size = 'md',
  label,
}: {
  text: string;
  size?: keyof typeof SIZES;
  label?: string;
}) {
  const rate = useStore((s) => s.voiceRate);
  const voiceURI = useStore((s) => s.voiceURI);
  const [playing, setPlaying] = useState(false);

  // Make sure we stop pulsing if the component unmounts mid-utterance.
  useEffect(() => () => setPlaying(false), []);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        setPlaying(true);
        playPhrase(text, { rate, voiceURI, onEnd: () => setPlaying(false) });
      }}
      aria-label={label ?? `Listen: ${text}`}
      title="Listen"
      className={`inline-grid shrink-0 place-items-center rounded-full border border-rule-soft bg-paper text-accent transition hover:border-accent hover:text-accent active:scale-[0.92] ${SIZES[size]}`}
    >
      {playing ? (
        <span className="flex h-[42%] items-center gap-[2px]" aria-hidden="true">
          <span className="eq-bar h-full w-[2px] rounded-full bg-current" />
          <span className="eq-bar h-full w-[2px] rounded-full bg-current" />
          <span className="eq-bar h-full w-[2px] rounded-full bg-current" />
        </span>
      ) : (
        <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="currentColor" aria-hidden="true">
          <path d="M3 9v6h4l5 5V4L7 9H3z" />
          <path
            d="M16 8.5a4 4 0 010 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
