import { type ReactNode } from 'react';
import { cn } from '@/components/ui/cn';
import { Card } from '@/components/ui/card';

export function Stat({
  value,
  label,
  accent,
}: {
  value: ReactNode;
  label: string;
  accent?: boolean;
}) {
  return (
    <Card className="p-4 text-center">
      <p
        className={cn('font-display text-[30px] leading-none', accent ? 'text-accent' : 'text-ink')}
      >
        {value}
      </p>
      <p className="mt-1 font-mono text-[10px] tracking-wide text-ink-mute uppercase">{label}</p>
    </Card>
  );
}
