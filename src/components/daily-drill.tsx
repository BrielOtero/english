import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PLACEMENT, GRAMMAR } from '@/content';
import { shuffle } from '@/lib/shuffle';
import { useStore } from '@/store';
import { sCorrect, sWrong, sStart, sFinish, sTick } from '@/lib/sound';
import { Mascot, StarIcon } from '@/components/map-art';
import { ConfettiBurst } from '@/components/confetti';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';

const DURATION = 60; // seconds per round
const FEEDBACK_MS = 430; // how long the right/wrong flash lingers before the next question

interface Q {
  prompt: string;
  options: string[];
  answer: number;
}

/** Assemble a big pool of quick multiple-choice questions from the existing content. */
function buildPool(): Q[] {
  const fromPlacement: Q[] = PLACEMENT.map((p) => ({
    prompt: p.prompt,
    options: p.options,
    answer: p.answer,
  }));
  const fromGrammar: Q[] = GRAMMAR.flatMap((u) => u.lessons)
    .flatMap((l) => l.exercises)
    .filter((e) => e.kind === 'mcq')
    .filter((e) => !e.audio) // listen-and-choose needs a play button the drill lacks
    .map((e) => ({ prompt: e.prompt, options: e.options, answer: e.answer }));
  return shuffle([...fromPlacement, ...fromGrammar]);
}

function rankOf(score: number): { grade: string; note: string } {
  if (score >= 1600) return { grade: 'S', note: 'Native reflexes.' };
  if (score >= 1100) return { grade: 'A', note: 'Razor sharp.' };
  if (score >= 650) return { grade: 'B', note: 'Nicely warmed up.' };
  return { grade: 'C', note: 'Keep the streak going.' };
}

export function DailyDrill({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<'intro' | 'play' | 'over'>('intro');
  const [pool, setPool] = useState<Q[]>([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [choice, setChoice] = useState<number | null>(null);
  const [locked, setLocked] = useState(false);
  const [flash, setFlash] = useState<'good' | 'bad' | null>(null);
  const [pop, setPop] = useState<{ key: number; text: string } | null>(null);
  const fxOn = useStore((s) => s.fxOn);
  const setFxOn = useStore((s) => s.setFxOn);

  const advanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase !== 'play') return;
    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id);
          sFinish();
          setPhase('over');
          return 0;
        }
        if (t <= 4) sTick();
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => () => void (advanceRef.current && clearTimeout(advanceRef.current)), []);

  function start() {
    setPool(buildPool());
    setIdx(0);
    setScore(0);
    setCombo(0);
    setBest(0);
    setCorrect(0);
    setAnswered(0);
    setTimeLeft(DURATION);
    setChoice(null);
    setLocked(false);
    setFlash(null);
    setPhase('play');
    sStart();
  }

  function answer(i: number) {
    if (locked || phase !== 'play') return;
    const q = pool[idx];
    const ok = i === q.answer;
    setChoice(i);
    setLocked(true);
    setAnswered((a) => a + 1);

    if (ok) {
      const nextCombo = combo + 1;
      const pts = 100 + nextCombo * 15;
      setCombo(nextCombo);
      setBest((b) => Math.max(b, nextCombo));
      setScore((s) => s + pts);
      setCorrect((c) => c + 1);
      setFlash('good');
      setPop({ key: answered, text: `+${pts}` });
      sCorrect(nextCombo);
    } else {
      setCombo(0);
      setFlash('bad');
      sWrong();
    }

    advanceRef.current = setTimeout(() => {
      setIdx((n) => (n + 1) % pool.length);
      setChoice(null);
      setLocked(false);
      setFlash(null);
    }, FEEDBACK_MS);
  }

  const RING = 2 * Math.PI * 26;

  if (phase === 'intro') {
    return (
      <div className="fade-in mx-auto max-w-md text-center">
        <div className="rounded-3xl border border-rule-soft bg-paper p-7">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-[var(--accent-tint)]"
          >
            <Mascot className="h-14 w-14" />
          </motion.div>
          <p className="kicker mt-4 text-[14px] text-ink-soft">Brain training</p>
          <h2 className="font-display mt-1 text-[30px] leading-none text-ink">Daily Drill</h2>
          <p className="mx-auto mt-3 max-w-xs text-[14px] leading-relaxed text-ink-soft">
            {DURATION} seconds. Answer as fast as you can. Chain correct answers to build a combo —
            miss one and it resets. How high can you score?
          </p>
          <Button onClick={start} className="mt-6 w-full">
            Start drill
          </Button>
          <div className="mt-3 flex items-center justify-center gap-4 text-[12px] text-ink-mute">
            <button onClick={() => setFxOn(!fxOn)} className="transition-colors hover:text-ink">
              {fxOn ? 'Sound on' : 'Sound off'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'over') {
    const rank = rankOf(score);
    const acc = answered ? Math.round((correct / answered) * 100) : 0;
    const englishAge = Math.max(8, Math.min(70, 70 - Math.floor(score / 55)));
    return (
      <div className="fade-in mx-auto max-w-md text-center">
        <div className="relative overflow-hidden rounded-3xl border border-rule-soft bg-paper p-7">
          <ConfettiBurst />
          <p className="kicker text-[14px] text-ink-soft">Round complete</p>
          <div className="mt-2 flex items-center justify-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-3xl bg-accent font-display text-[44px] leading-none text-on-accent">
              {rank.grade}
            </div>
            <div className="text-left">
              <p className="font-display text-[40px] leading-none text-ink tnum">{score}</p>
              <p className="text-[12px] text-ink-mute">points · {rank.note}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {[
              { k: 'Accuracy', v: `${acc}%` },
              { k: 'Best combo', v: `×${best}` },
              { k: 'English age', v: `${englishAge}` },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-rule-soft bg-bg p-3">
                <p className="font-display text-[22px] leading-none text-ink tnum">{s.v}</p>
                <p className="mt-1 text-[10.5px] text-ink-mute">{s.k}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-2">
            <Button className="flex-1" onClick={start}>
              Play again
            </Button>
            <Button variant="outline" onClick={onClose}>
              Done
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = pool[idx];
  return (
    <div className="fade-in mx-auto max-w-md">
      <div
        className={`relative overflow-hidden rounded-3xl border border-rule-soft bg-paper p-6 ${
          flash === 'bad' ? 'shake' : ''
        }`}
      >
        <AnimatePresence>
          {flash && (
            <motion.div
              key={`${flash}-${answered}`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`pointer-events-none absolute inset-0 z-[2] ${
                flash === 'good' ? 'bg-success' : 'bg-danger'
              }`}
            />
          )}
        </AnimatePresence>

        <div className="relative z-[3] mb-5 flex items-center justify-between">
          <div className="relative grid h-16 w-16 place-items-center">
            <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="var(--rule-soft)"
                strokeWidth="5"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke={timeLeft <= 10 ? 'var(--danger)' : 'var(--accent)'}
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={RING}
                strokeDashoffset={RING * (1 - timeLeft / DURATION)}
                className="transition-[stroke-dashoffset] duration-1000 ease-linear"
              />
            </svg>
            <span className="absolute font-display text-[20px] text-ink tnum">{timeLeft}</span>
          </div>

          <div className="text-center">
            <p className="font-display text-[30px] leading-none text-ink tnum">{score}</p>
            <p className="text-[10.5px] text-ink-mute">score</p>
          </div>

          <motion.div
            key={combo}
            initial={{ scale: combo > 1 ? 1.4 : 1 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
            className={`grid h-16 w-16 place-items-center rounded-2xl ${
              combo > 1 ? 'bg-gold/15 text-gold' : 'bg-bg text-ink-mute'
            }`}
          >
            <span className="font-display text-[22px] leading-none">×{combo}</span>
            <span className="text-[9px] uppercase">combo</span>
          </motion.div>
        </div>

        {pop && flash === 'good' && (
          <div
            key={pop.key}
            className="pop-score pointer-events-none absolute top-16 left-1/2 z-[4] -translate-x-1/2 font-display text-[26px] font-semibold text-success"
          >
            {pop.text}
          </div>
        )}

        <div className="relative z-[3]">
          <AnimatePresence mode="wait">
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="mb-4 min-h-[3rem] text-[19px] leading-snug text-ink"
            >
              {q.prompt}
            </motion.p>
          </AnimatePresence>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {q.options.map((opt, i) => {
              const isAnswer = i === q.answer;
              const isChosen = i === choice;
              const cls = !locked
                ? 'border-rule-soft bg-bg text-ink hover:border-accent hover:-translate-y-0.5'
                : isAnswer
                  ? 'border-success bg-success/15 text-ink'
                  : isChosen
                    ? 'border-danger bg-danger/15 text-ink'
                    : 'border-rule-soft bg-bg text-ink-mute';
              return (
                <motion.button
                  key={i}
                  whileTap={locked ? undefined : { scale: 0.94 }}
                  disabled={locked}
                  onClick={() => answer(i)}
                  className={`rounded-xl border-2 px-4 py-3 text-left text-[15px] font-medium transition-all ${cls}`}
                >
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="relative z-[3] mt-5 flex items-center justify-between text-[11px] text-ink-mute">
          <span className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5 text-gold" /> best ×{best}
          </span>
          <button onClick={() => setFxOn(!fxOn)} className="transition-colors hover:text-ink">
            <Icon name="bolt" className="inline h-3.5 w-3.5" /> {fxOn ? 'sound on' : 'sound off'}
          </button>
          <button onClick={onClose} className="transition-colors hover:text-ink">
            quit
          </button>
        </div>
      </div>
    </div>
  );
}
