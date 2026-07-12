import { useState } from 'react';

// The shared combat state behind every challenge: the foe has HP (correct answers chip it
// down), you have lives (a wrong answer costs one). The fight is over when either hits zero.
// Boss fights and per-level trials both run on this — same feel, one source of truth.
export function useDuel(hp: number, lives: number) {
  const [foeHP, setFoeHP] = useState(hp);
  const [userLives, setUserLives] = useState(lives);
  const [foeHitKey, setFoeHitKey] = useState(0);
  const [userHitKey, setUserHitKey] = useState(0);
  const [round, setRound] = useState(0);

  const over = foeHP <= 0 || userLives <= 0;
  const won = foeHP <= 0;

  function onResult(correct: boolean) {
    if (over) return;
    if (correct) {
      setFoeHP((h) => Math.max(0, h - 1));
      setFoeHitKey((k) => k + 1);
    } else {
      setUserLives((l) => Math.max(0, l - 1));
      setUserHitKey((k) => k + 1);
    }
  }

  function start() {
    setFoeHP(hp);
    setUserLives(lives);
    setFoeHitKey(0);
    setUserHitKey(0);
    setRound((r) => r + 1);
  }

  return { foeHP, userLives, foeHitKey, userHitKey, round, over, won, onResult, start };
}
