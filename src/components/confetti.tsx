import { motion, useReducedMotion } from 'framer-motion';

const COLORS = ['#4B3DDB', '#9A8DFF', '#E8B84B', '#34C58B', '#FF6B6B'];

/** Deterministic pseudo-random in [0, 1) from an integer seed — keeps render pure. */
function rand(n: number): number {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * A short celebratory burst of paper bits, fired from the center of its
 * positioned parent. Mount it with a fresh `key` each time to replay; it
 * self-clears as the pieces fade. Respects reduced-motion (renders nothing).
 */
export function ConfettiBurst({ count = 16 }: { count?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const pieces = Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + (rand(i) - 0.5) * 0.6;
    const dist = 38 + rand(i + 7) * 48;
    return {
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist - 12,
      rotate: rand(i + 13) * 540 - 270,
      color: COLORS[i % COLORS.length],
      delay: rand(i + 23) * 0.05,
    };
  });

  return (
    <span
      className="pointer-events-none absolute top-1/2 left-1/2 z-50 h-0 w-0"
      aria-hidden="true"
    >
      {pieces.map((p, i) => (
        <motion.span
          key={i}
          className="absolute block h-1.5 w-1.5 rounded-[1px]"
          style={{ backgroundColor: p.color }}
          initial={{ x: 0, y: 0, scale: 0.5, opacity: 1 }}
          animate={{ x: p.x, y: p.y, scale: 1, rotate: p.rotate, opacity: 0 }}
          transition={{ duration: 0.72, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </span>
  );
}
