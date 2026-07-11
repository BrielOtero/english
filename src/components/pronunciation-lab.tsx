import { useMemo, useState } from 'react';
import type { MinimalPair, SoundLesson } from '@/types';
import { SOUNDS } from '@/content';
import { playPhrase } from '@/lib/audio';
import { useStore } from '@/store';
import { Speaker } from '@/components/speaker';
import { LevelBadge } from '@/components/level-badge';
import { LevelFilter, levelCounts, type LevelChoice } from '@/components/level-filter';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

/** A 2-alternative forced-choice drill: hear a word, decide which one it was. */
function MinimalPairDrill({ pair }: { pair: MinimalPair }) {
  const rate = useStore((s) => s.voiceRate);
  const voiceURI = useStore((s) => s.voiceURI);
  const [target, setTarget] = useState<'a' | 'b' | null>(null);
  const [result, setResult] = useState<'right' | 'wrong' | null>(null);

  function play() {
    const pick = Math.random() < 0.5 ? 'a' : 'b';
    setTarget(pick);
    setResult(null);
    playPhrase(pick === 'a' ? pair.a : pair.b, { rate, voiceURI });
  }

  function guess(choice: 'a' | 'b') {
    if (!target) return;
    setResult(choice === target ? 'right' : 'wrong');
  }

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-rule-soft bg-bg p-2.5">
      <Button size="xxs" className="gap-1.5" onClick={play}>
        <Icon name="play" className="h-2.5 w-2.5" /> Hear one
      </Button>
      {(['a', 'b'] as const).map((side) => {
        const word = side === 'a' ? pair.a : pair.b;
        const ipa = side === 'a' ? pair.ipaA : pair.ipaB;
        const isAnswer = result && target === side;
        return (
          <button
            key={side}
            onClick={() => guess(side)}
            disabled={!target || !!result}
            className={`rounded-lg border px-3 py-1.5 text-[13px] transition-colors disabled:opacity-100 ${
              isAnswer
                ? 'border-success bg-success/10 text-ink'
                : 'border-rule-soft bg-paper text-ink-soft hover:border-accent/50'
            }`}
          >
            {word} <span className="font-mono text-[10px] text-ink-mute">{ipa}</span>
          </button>
        );
      })}
      {result && (
        <span
          className={`inline-flex items-center gap-1 font-mono text-[11px] ${result === 'right' ? 'text-success' : 'text-danger'}`}
        >
          <Icon name={result === 'right' ? 'check' : 'x'} className="h-3 w-3" />
          {result === 'right' ? 'correct' : `it was “${target === 'a' ? pair.a : pair.b}”`}
        </span>
      )}
    </div>
  );
}

function SoundCard({ sound }: { sound: SoundLesson }) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <LevelBadge level={sound.level} />
        <span className="font-mono text-[18px] text-accent">{sound.symbol}</span>
        <span className="text-[14px] font-medium text-ink">{sound.name}</span>
      </div>

      <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{sound.howTo}</p>

      <div className="mt-4">
        <p className="mb-2 kicker text-[13.5px] text-ink-soft">Example words</p>
        <div className="flex flex-wrap gap-2">
          {sound.examples.map((w) => (
            <span
              key={w}
              className="flex items-center gap-1.5 rounded-full border border-rule-soft bg-bg px-2.5 py-1 text-[13px] text-ink"
            >
              {w}
              <Speaker text={w} size="sm" />
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-2 kicker text-[13.5px] text-ink-soft">Minimal pairs · train your ear</p>
        <div className="space-y-2">
          {sound.pairs.map((p, i) => (
            <MinimalPairDrill key={i} pair={p} />
          ))}
        </div>
      </div>
    </Card>
  );
}

export function PronunciationLab() {
  const [level, setLevel] = useState<LevelChoice>('all');
  const counts = useMemo(() => levelCounts(SOUNDS, (s) => s.level), []);
  const visible = level === 'all' ? SOUNDS : SOUNDS.filter((s) => s.level === level);

  return (
    <div className="fade-in">
      <LevelFilter value={level} counts={counts} onChange={setLevel} />
      <div className="space-y-4">
        {visible.map((s) => (
          <SoundCard key={s.id} sound={s} />
        ))}
      </div>
    </div>
  );
}
