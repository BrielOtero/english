import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './cn';

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border transition-colors',
  {
    variants: {
      variant: {
        default: 'border-rule-soft bg-bg text-ink-mute',
        active: 'border-accent bg-accent/10 text-ink',
        outline: 'border-rule-soft bg-paper text-ink-soft',
        accent: 'border-transparent bg-[var(--accent-tint)] text-accent',
      },
      size: {
        sm: 'px-2 py-0.5 font-mono text-[9px] tracking-wide uppercase',
        md: 'px-3 py-1.5 text-[12.5px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, variant, size, ...props },
  ref,
) {
  return (
    <span
      ref={ref}
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
});
