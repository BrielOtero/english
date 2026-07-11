import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from './cn';

export type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'muted';

const STATE: Record<OptionState, string> = {
  idle: 'border-rule-soft bg-bg text-ink-soft hover:border-accent/60',
  selected: 'border-accent bg-accent/10 text-ink',
  correct: 'border-success bg-success/10 text-ink',
  wrong: 'border-danger bg-danger/10 text-ink',
  muted: 'border-rule-soft bg-bg text-ink-mute',
};

export interface OptionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: OptionState;
}

export const OptionButton = forwardRef<HTMLButtonElement, OptionButtonProps>(function OptionButton(
  { state = 'idle', className, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'rounded-lg border px-4 py-2.5 text-left text-[14px] transition-colors',
        STATE[state],
        className,
      )}
      {...props}
    />
  );
});
