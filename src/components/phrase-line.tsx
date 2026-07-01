import type { Phrase } from '../types';
import { Speaker } from './speaker';

/**
 * Renders one example sentence: the English text with a Listen button, its IPA,
 * and an optional teaching note.
 */
export function PhraseLine({ phrase, size = 'md' }: { phrase: Phrase; size?: 'sm' | 'md' }) {
  return (
    <div className="flex items-start gap-2.5">
      <Speaker text={phrase.en} size={size === 'sm' ? 'sm' : 'md'} />
      <div className="min-w-0">
        <p className={`text-ink ${size === 'sm' ? 'text-[13px]' : 'text-[15px]'} leading-snug`}>
          {phrase.en}
        </p>
        {phrase.ipa && <p className="mt-0.5 font-mono text-[11px] text-ink-mute">{phrase.ipa}</p>}
        {phrase.note && <p className="mt-1 text-[12px] text-accent">{phrase.note}</p>}
      </div>
    </div>
  );
}
