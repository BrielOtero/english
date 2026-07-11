import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from './cn';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, type = 'text', ...props }, ref) {
    return (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          'w-full rounded-lg border border-rule-soft bg-bg px-3 py-2.5 text-[15px] text-ink placeholder:text-ink-mute focus:border-accent focus:outline-none disabled:opacity-50',
          className,
        )}
        {...props}
      />
    );
  },
);
