import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-mono tracking-wide whitespace-nowrap uppercase transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-accent text-on-accent hover:opacity-90',
        destructive: 'bg-danger text-paper hover:opacity-90',
        bonus: 'bg-accent2 text-paper hover:opacity-90',
        dark: 'bg-ink text-paper hover:opacity-90',
        outline: 'border border-rule-soft bg-bg text-ink-soft hover:text-ink',
        soft: 'border border-rule-soft bg-paper text-ink-soft hover:text-ink',
        ghost: 'text-ink-mute hover:bg-bg hover:text-ink',
      },
      size: {
        xxs: 'px-3 py-1.5 text-[10px]',
        xs: 'px-4 py-2 text-[11px]',
        sm: 'px-5 py-2.5 text-[11px]',
        md: 'px-6 py-3 text-[12px]',
        icon: 'size-9 shrink-0',
        'icon-sm': 'size-8 shrink-0',
      },
      shape: {
        pill: '',
        plain: 'rounded-xl font-sans font-medium tracking-normal normal-case',
      },
    },
    compoundVariants: [
      { shape: 'plain', size: 'xs', class: 'px-3 py-2 text-[12px]' },
      { shape: 'plain', size: 'sm', class: 'px-4 py-2.5 text-[13px]' },
      { shape: 'plain', size: 'md', class: 'px-5 py-3.5 text-[14px]' },
    ],
    defaultVariants: { variant: 'primary', size: 'md', shape: 'pill' },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, shape, type = 'button', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape }), className)}
      {...props}
    />
  );
});
