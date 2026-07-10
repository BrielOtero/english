import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { StarIcon } from './map-art';
import { ConfettiBurst } from './confetti';
import { sFinish } from '../lib/sound';
import { MAX_STARS } from '../lib/stars';

/**
 * The stars just won springing in, then the grand total ticking up to its new value —
 * the little reward beat you get at the end of a level in a game. `total` is the new
 * running total (it already includes `earned`).
 */
export function StarReward({ earned, total }: { earned: number; total: number }) {
  const from = Math.max(0, total - earned);
  const [shown, setShown] = useState(from);

  useEffect(() => {
    sFinish();
    // Let the stars land before the counter climbs to the new total.
    const t = setTimeout(() => setShown(total), 700);
    return () => clearTimeout(t);
  }, [total]);

  const count = Math.max(1, earned);

  return (
    <div className="grid place-items-center gap-2.5">
      <div className="flex items-end gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, y: 26, rotate: -35, opacity: 0 }}
            animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 340, damping: 13, delay: 0.15 + i * 0.16 }}
          >
            <StarIcon className="h-12 w-12 text-gold drop-shadow-[0_2px_8px_rgba(212,160,23,0.45)]" />
          </motion.span>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="font-mono text-[12px] tracking-wide text-gold uppercase"
      >
        +{earned} star{earned === 1 ? '' : 's'}
      </motion.p>
      <span className="flex items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-1 text-[13px] font-medium text-ink-soft">
        <StarIcon className="h-4 w-4 text-gold" />
        <span className="tabular-nums">
          {shown}/{MAX_STARS}
        </span>
      </span>
    </div>
  );
}

/**
 * A dismissable full-screen celebration wrapping StarReward — used when a milestone is
 * hit mid-screen (e.g. mastering a world's lessons) and there's no dedicated win screen.
 */
export function StarRewardOverlay({
  earned,
  total,
  onDone,
}: {
  earned: number;
  total: number;
  onDone: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDone}
        className="fixed inset-0 z-50 grid place-items-center bg-black/50 px-6 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.85, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="relative overflow-hidden rounded-3xl border border-rule-soft bg-paper px-8 py-7 text-center shadow-[var(--shadow-md)]"
        >
          <ConfettiBurst />
          <p className="kicker mb-3 text-[13px] text-success">World mastered</p>
          <StarReward earned={earned} total={total} />
          <p className="mt-3 text-[11px] text-ink-mute">Tap to continue</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
