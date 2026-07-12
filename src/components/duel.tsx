import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Heart } from '@/components/map-art';

function Hearts({ total, left, hitKey }: { total: number; left: number; hitKey: number }) {
  return (
    <motion.div
      key={hitKey}
      animate={hitKey ? { x: [0, -4, 4, -2, 0] } : {}}
      className="flex gap-0.5"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ scale: i < left ? 1 : 0.5, opacity: i < left ? 1 : 0.2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Heart className={`h-5 w-5 ${i < left ? 'text-danger' : 'text-ink-mute/40'}`} />
        </motion.span>
      ))}
    </motion.div>
  );
}

export function DuelHud({
  name,
  icon,
  hp,
  maxHp,
  hpHitKey,
  lives,
  maxLives,
  livesHitKey,
}: {
  name: string;
  icon: ReactNode;
  hp: number;
  maxHp: number;
  hpHitKey: number;
  lives: number;
  maxLives: number;
  livesHitKey: number;
}) {
  return (
    <div className="mb-4 rounded-2xl border border-rule-soft bg-bg/60 p-3">
      <div className="flex items-center gap-3">
        <motion.div
          key={hpHitKey}
          animate={hpHitKey ? { x: [0, -6, 6, -4, 4, 0], scale: [1, 1.12, 1] } : {}}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-danger/10 text-danger"
        >
          {icon}
        </motion.div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-[13px] font-medium text-ink">{name}</span>
            <span className="font-mono text-[11px] text-ink-mute tabular-nums">
              {hp}/{maxHp}
            </span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-danger/15">
            <motion.div
              className="h-full rounded-full bg-danger"
              animate={{ width: `${(hp / maxHp) * 100}%` }}
              transition={{ type: 'spring', stiffness: 200, damping: 26 }}
            />
          </div>
        </div>
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-wide text-ink-mute uppercase">
          Your lives
        </span>
        <Hearts total={maxLives} left={lives} hitKey={livesHitKey} />
      </div>
    </div>
  );
}
