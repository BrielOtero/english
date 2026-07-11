import { type ReactNode } from 'react';
import { cn } from '@/components/ui/cn';

export function EmptyState({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-dashed border-rule-soft bg-paper p-6 text-center text-[13px] text-ink-mute',
        className,
      )}
    >
      {children}
    </div>
  );
}
