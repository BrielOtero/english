import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Level, Lesson } from '../types';
import { LEVELS } from '../types';
import { GRAMMAR, grammarUnit } from '../content';
import { WORLDS, type WorldInfo } from '../content/worlds';
import { useStore } from '../store';
import { startWorldTheme, stopWorldTheme } from '../lib/sound';
import { starsForLevel, unlockedThroughFor, totalStars, MAX_STARS } from '../lib/stars';
import { BossChallenge, type BattleMode } from './boss-challenge';
import { LessonView } from './lesson-view';
import { Mascot, Crest, Castle, Chest, Slime, Leaf, Check, StarIcon, Padlock } from './map-art';

const ALL_LESSONS = GRAMMAR.flatMap((u) => u.lessons);

/* Per-world tint (literal classes so Tailwind generates them). */
const TONE: Record<Level, { band: string; ring: string; fill: string; text: string }> = {
  A1: {
    band: 'bg-lvl-a1/10 border-lvl-a1/30',
    ring: 'border-lvl-a1',
    fill: 'bg-lvl-a1',
    text: 'text-lvl-a1',
  },
  A2: {
    band: 'bg-lvl-a2/10 border-lvl-a2/30',
    ring: 'border-lvl-a2',
    fill: 'bg-lvl-a2',
    text: 'text-lvl-a2',
  },
  B1: {
    band: 'bg-lvl-b1/10 border-lvl-b1/30',
    ring: 'border-lvl-b1',
    fill: 'bg-lvl-b1',
    text: 'text-lvl-b1',
  },
  B2: {
    band: 'bg-lvl-b2/10 border-lvl-b2/30',
    ring: 'border-lvl-b2',
    fill: 'bg-lvl-b2',
    text: 'text-lvl-b2',
  },
  C1: {
    band: 'bg-lvl-c1/10 border-lvl-c1/30',
    ring: 'border-lvl-c1',
    fill: 'bg-lvl-c1',
    text: 'text-lvl-c1',
  },
  C2: {
    band: 'bg-lvl-c2/10 border-lvl-c2/30',
    ring: 'border-lvl-c2',
    fill: 'bg-lvl-c2',
    text: 'text-lvl-c2',
  },
};

function Stars({ n, className = 'h-4 w-4' }: { n: number; className?: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${n} of 3 stars`}>
      {[0, 1, 2].map((i) => (
        <StarIcon key={i} className={`${className} ${i < n ? 'text-gold' : 'text-ink-mute/25'}`} />
      ))}
    </span>
  );
}

type NodeKind = 'lesson' | 'mini' | 'special' | 'boss';

function NodeGlyph({ kind, done, num }: { kind: NodeKind; done: boolean; num?: number }) {
  if (kind === 'boss') return <Castle className="h-8 w-8" />;
  if (kind === 'mini') return <Slime className="h-7 w-7" />;
  if (kind === 'special') return <Chest className="h-7 w-7" />;
  if (done) return <Check className="h-5 w-5" />;
  return num ? (
    <span className="font-display text-[15px] leading-none">{num}</span>
  ) : (
    <Leaf className="h-5 w-5" />
  );
}

function TrailNode({
  kind,
  done,
  num,
  tone,
  onClick,
  label,
  locked = false,
}: {
  kind: NodeKind;
  done: boolean;
  num?: number;
  tone: (typeof TONE)[Level];
  onClick: () => void;
  label: string;
  locked?: boolean;
}) {
  const size = kind === 'boss' ? 'h-14 w-14' : 'h-12 w-12';
  const base = done
    ? `${tone.fill} text-paper border-transparent`
    : kind === 'boss'
      ? 'bg-danger/10 border-danger/50'
      : kind === 'mini'
        ? 'bg-danger/5 border-danger/40'
        : kind === 'special'
          ? 'bg-accent2/10 border-accent2/50'
          : `bg-paper ${tone.ring} ${tone.text}`;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={locked}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      whileHover={locked ? undefined : { scale: 1.14, y: -3 }}
      whileTap={locked ? undefined : { scale: 0.9 }}
      className={`grid ${size} place-items-center rounded-full border-2 shadow-[var(--shadow-md)] ${base} ${
        locked ? 'opacity-45' : ''
      }`}
      aria-label={locked ? `${label} (locked)` : label}
    >
      {locked ? (
        <Padlock className="h-6 w-6 text-ink-mute" />
      ) : (
        <NodeGlyph kind={kind} done={done} num={num} />
      )}
    </motion.button>
  );
}

function WorldGalaxy({
  unlockedThrough,
  currentIdx,
  completed,
  bossCleared,
  onEnter,
}: {
  unlockedThrough: number;
  currentIdx: number;
  completed: Record<string, true>;
  bossCleared: Record<string, true>;
  onEnter: (i: number) => void;
}) {
  const n = WORLDS.length + 1; // worlds + the summit
  const mapH = Math.max(660, n * 124);
  const pos = (i: number) => ({
    x: Math.max(17, Math.min(83, 50 + Math.sin(i * 0.9 + 0.5) * 30)),
    y: 91 - (i / (n - 1)) * 82,
  });
  const pts = Array.from({ length: n }, (_, i) => `${pos(i).x},${pos(i).y}`).join(' ');
  const summit = pos(n - 1);

  return (
    <div
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-rule-soft sm:max-w-2xl lg:max-w-4xl"
      style={{ height: `${mapH}px` }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <polyline
          points={pts}
          fill="none"
          stroke="var(--paper)"
          strokeWidth="1.1"
          strokeDasharray="0.6 3"
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>

      <div
        style={{ left: `${summit.x}%`, top: `${summit.y}%` }}
        className="absolute z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      >
        <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-rule-soft bg-paper shadow-[var(--shadow-md)]">
          <StarIcon className="h-8 w-8 text-gold" />
        </span>
        <span className="mt-1 font-display text-[13px] text-ink">Native · Summit</span>
      </div>

      {WORLDS.map((w, i) => {
        const p = pos(i);
        const unlocked = i <= unlockedThrough;
        const current = i === currentIdx;
        const tone = TONE[w.level];
        const stars = starsForLevel(w.level, i, unlockedThrough, completed, bossCleared);
        return (
          <div
            key={w.level}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute z-[1] flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center"
          >
            <motion.button
              type="button"
              disabled={!unlocked}
              onClick={() => onEnter(i)}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={unlocked ? { scale: 1.1, y: -3 } : undefined}
              whileTap={unlocked ? { scale: 0.92 } : undefined}
              className={`grid h-20 w-20 place-items-center rounded-3xl border-2 shadow-[var(--shadow-pop)] ${
                unlocked ? tone.band : 'border-rule-soft bg-paper opacity-60'
              }`}
              aria-label={`World ${w.n}: ${w.name}`}
            >
              {current ? (
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
                >
                  <Mascot className="h-14 w-14" />
                </motion.span>
              ) : unlocked ? (
                <span className={tone.text}>
                  <Crest n={w.n} className="h-14 w-14" />
                </span>
              ) : (
                <span className="text-ink-mute">
                  <Padlock className="h-8 w-8" />
                </span>
              )}
            </motion.button>
            <span className="mt-1.5 text-center font-display text-[14px] leading-tight text-ink">
              {w.name}
            </span>
            <span className="mt-0.5">
              <Stars n={stars} className="h-3.5 w-3.5" />
            </span>
          </div>
        );
      })}
    </div>
  );
}

function WorldDetail({
  world,
  stars,
  completed,
  bossDone,
  bonusDone,
  onBack,
  onOpenLesson,
  onBattle,
}: {
  world: WorldInfo;
  stars: number;
  completed: Record<string, true>;
  bossDone: boolean;
  bonusDone: boolean;
  onBack: () => void;
  onOpenLesson: (id: string) => void;
  onBattle: (cfg: { mode: BattleMode; lessons: Lesson[]; seed: number }) => void;
}) {
  const tone = TONE[world.level];

  useEffect(() => {
    startWorldTheme(world.level);
    return () => stopWorldTheme();
  }, [world.level]);

  const lessons = useMemo(() => grammarUnit(world.level)?.lessons ?? [], [world.level]);
  const doneCount = lessons.filter((l) => completed[l.id]).length;

  const allDone = lessons.length > 0 && lessons.every((l) => completed[l.id]);

  // Break the world into blocks: a mini-boss (this block's topics) caps each block;
  // the world boss at the top draws from every lesson and is star-gated behind them all.
  interface Node {
    kind: NodeKind;
    done: boolean;
    num?: number;
    title: string;
    label: string;
    locked?: boolean;
    onClick: () => void;
  }
  const BLOCK = 4;
  const nodes: Node[] = [];
  lessons.forEach((l, i) => {
    nodes.push({
      kind: 'lesson',
      done: !!completed[l.id],
      num: i + 1,
      title: l.title,
      label: `Level ${i + 1}: ${l.title}`,
      onClick: () => onOpenLesson(l.id),
    });
    if ((i + 1) % BLOCK === 0 && i + 1 < lessons.length) {
      const bi = Math.floor(i / BLOCK);
      const block = lessons.slice(i + 1 - BLOCK, i + 1);
      nodes.push({
        kind: 'mini',
        done: false,
        title: `Mini-boss ${bi + 1}`,
        label: `Mini-boss ${bi + 1}`,
        onClick: () => onBattle({ mode: 'mini', lessons: block, seed: bi }),
      });
    }
  });
  nodes.push({
    kind: 'special',
    done: bonusDone,
    title: 'Bonus round',
    label: 'Bonus round',
    onClick: () => onBattle({ mode: 'bonus', lessons, seed: 3 }),
  });
  nodes.push({
    kind: 'boss',
    done: bossDone,
    title: world.boss,
    label: `Boss: ${world.boss}`,
    locked: !allDone,
    onClick: () => onBattle({ mode: 'boss', lessons, seed: 7 }),
  });
  const n = nodes.length;
  const mapH = Math.max(620, n * 88);
  // Winding climb: level 1 at the bottom, boss at the top, x oscillating across the map.
  const pos = (i: number) => ({
    x: Math.max(16, Math.min(84, 50 + Math.sin(i * 0.85 + 0.6) * 30)),
    y: 92 - (i / (n - 1)) * 84,
  });
  const pts = nodes.map((_, i) => `${pos(i).x},${pos(i).y}`).join(' ');
  const firstUncleared = lessons.findIndex((l) => !completed[l.id]);
  const currentNode = firstUncleared === -1 ? lessons.length : firstUncleared;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
    >
      <button
        onClick={onBack}
        className="press mb-4 flex items-center gap-1.5 text-[13px] font-medium text-ink-mute transition-colors hover:text-ink"
      >
        ← All worlds
      </button>

      <div className={`rounded-3xl border ${tone.band} px-5 py-5`}>
        <div className="flex items-center gap-3">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-paper shadow-[var(--shadow-sm)]">
            <span className={tone.text}>
              <Crest n={world.n} className="h-11 w-11" />
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="kicker text-[13px] text-ink-soft">
                World {world.n} · {world.level}
              </span>
              <span className="ml-auto">
                <Stars n={stars} />
              </span>
            </div>
            <h2 className="font-display text-[26px] leading-tight text-ink">{world.name}</h2>
            <p className="text-[13px] text-ink-soft italic">{world.tagline}</p>
          </div>
        </div>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-bg2">
          <div
            className={`h-full rounded-full ${tone.fill}`}
            style={{ width: `${lessons.length ? (doneCount / lessons.length) * 100 : 0}%` }}
          />
        </div>
        <p className="mt-1.5 text-[11px] text-ink-mute">
          {doneCount}/{lessons.length} levels cleared · reward: {world.reward}
        </p>
      </div>

      <div
        className="relative mx-auto mt-5 w-full overflow-hidden rounded-3xl border border-rule-soft"
        style={{ height: `${mapH}px` }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <polyline
            points={pts}
            fill="none"
            stroke="var(--paper)"
            strokeWidth="1.3"
            strokeDasharray="0.6 3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
        {nodes.map((nd, i) => {
          const p = pos(i);
          return (
            <div
              key={nd.label}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className="absolute z-[1] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              {i === currentNode && (
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  className="pointer-events-none absolute -top-8"
                >
                  <Mascot className="h-8 w-8" />
                </motion.span>
              )}
              <TrailNode
                kind={nd.kind}
                done={nd.done}
                num={nd.num}
                tone={tone}
                label={nd.label}
                locked={nd.locked}
                onClick={nd.onClick}
              />
              <span className="mt-1 line-clamp-2 max-w-[112px] text-center text-[10.5px] leading-tight font-medium text-ink-soft">
                {nd.title}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-center text-[11px] text-ink-mute">
        {allDone
          ? `Mastery star earned — challenge ${world.boss} at the top!`
          : `Clear all ${lessons.length} levels to earn the ⭐ that unlocks ${world.boss} (${doneCount}/${lessons.length})`}
      </p>
    </motion.div>
  );
}

function LevelView({
  lessonId,
  world,
  onBack,
}: {
  lessonId: string;
  world: WorldInfo;
  onBack: () => void;
}) {
  // Opening a level from a node deep in the map would otherwise keep the map's scroll.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [lessonId]);

  const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
  if (!lesson) return null;
  const levelNo = (grammarUnit(world.level)?.lessons ?? []).findIndex((l) => l.id === lessonId) + 1;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24 }}
    >
      <button
        onClick={onBack}
        className="press mb-4 flex items-center gap-1.5 text-[13px] font-medium text-ink-mute transition-colors hover:text-ink"
      >
        ← World {world.n}: {world.name}
      </button>
      <p className="kicker mb-3 text-[13px] text-ink-soft">
        Level {levelNo} · {world.level}
      </p>
      <LessonView lesson={lesson} />
    </motion.div>
  );
}

export function WorldMap({ onOpenTrack }: { onOpenTrack: (trackId: string) => void }) {
  const completed = useStore((s) => s.completed);
  const placementLevel = useStore((s) => s.placementLevel);
  const bossCleared = useStore((s) => s.bossCleared);
  const bonusCleared = useStore((s) => s.bonusCleared);

  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [openLessonId, setOpenLessonId] = useState<string | null>(null);
  const [battle, setBattle] = useState<{
    world: WorldInfo;
    mode: BattleMode;
    lessons: Lesson[];
    seed: number;
  } | null>(null);

  const unlockedThrough = unlockedThroughFor(placementLevel, bossCleared);
  const currentIdx = (() => {
    const i = LEVELS.findIndex((lv, idx) => idx <= unlockedThrough && !bossCleared[lv]);
    return i === -1 ? unlockedThrough : i;
  })();
  const starTotal = totalStars({ placementLevel, completed, bossCleared });

  const openWorld = openIdx !== null ? WORLDS[openIdx] : null;

  return (
    <div className="fade-in">
      <AnimatePresence mode="wait">
        {openLessonId && openWorld ? (
          <LevelView
            key={`l-${openLessonId}`}
            lessonId={openLessonId}
            world={openWorld}
            onBack={() => setOpenLessonId(null)}
          />
        ) : openWorld ? (
          <WorldDetail
            key={`w-${openWorld.level}`}
            world={openWorld}
            stars={starsForLevel(
              openWorld.level,
              openIdx!,
              unlockedThrough,
              completed,
              bossCleared,
            )}
            completed={completed}
            bossDone={!!bossCleared[openWorld.level]}
            bonusDone={!!bonusCleared[openWorld.level]}
            onBack={() => setOpenIdx(null)}
            onOpenLesson={(id) => setOpenLessonId(id)}
            onBattle={(cfg) => setBattle({ world: openWorld, ...cfg })}
          />
        ) : (
          <motion.div
            key="select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-7 flex items-end justify-between gap-3">
              <div>
                <p className="kicker text-[13px] text-ink-soft">The climb to native</p>
                <h1 className="font-display text-[clamp(24px,5vw,38px)] leading-none text-ink">
                  Choose your world
                </h1>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-1.5">
                <StarIcon className="h-4 w-4 text-gold" />
                <span className="font-mono text-[12px] text-ink-soft tabular-nums">
                  {starTotal}/{MAX_STARS}
                </span>
              </span>
            </div>

            {!placementLevel && (
              <button
                onClick={() => onOpenTrack('placement')}
                className="group mb-7 flex w-full items-center gap-4 rounded-3xl border border-accent/40 bg-[var(--accent-tint)] p-5 text-left transition hover:border-accent"
              >
                <Mascot className="h-14 w-14 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-ink">
                    New adventurer? Take the Trial.
                  </p>
                  <p className="mt-0.5 text-[13px] text-ink-soft">
                    A quick adaptive test finds which world you should start in.
                  </p>
                </div>
              </button>
            )}

            <WorldGalaxy
              unlockedThrough={unlockedThrough}
              currentIdx={currentIdx}
              completed={completed}
              bossCleared={bossCleared}
              onEnter={(i) => setOpenIdx(i)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {battle && (
        <BossChallenge
          world={battle.world}
          mode={battle.mode}
          lessons={battle.lessons}
          seed={battle.seed}
          onClose={() => setBattle(null)}
        />
      )}
    </div>
  );
}
