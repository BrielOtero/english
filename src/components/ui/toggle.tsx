import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/components/ui/cn';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed: boolean;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
  { pressed, className, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      data-slot="toggle"
      aria-pressed={pressed}
      data-state={pressed ? 'on' : 'off'}
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-3 py-1 font-mono text-[10px] tracking-wide uppercase transition-colors disabled:pointer-events-none',
        pressed
          ? 'border-success bg-success/10 text-success'
          : 'border-rule-soft text-ink-mute hover:text-ink',
        className,
      )}
      {...props}
    />
  );
});
