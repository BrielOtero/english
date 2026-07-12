import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Level } from '@/types';

export type Theme = 'light' | 'dark';
export type Grade = 'again' | 'good' | 'easy';

/** Spaced-repetition state for one flashcard (Leitner-style boxes). */
export interface ReviewItem {
  /** 0 = new/unseen, 1..5 = progressively longer intervals. */
  box: number;
  /** Epoch ms when the card is next due for review. */
  due: number;
}

const MS_DAY = 86_400_000;
// Days until next review for each box. Box 1 is short (same/next day); grows from there.
const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];
export const MAX_BOX = 5;

export function isLearned(item: ReviewItem | undefined): boolean {
  return !!item && item.box >= 1;
}
export function isDue(item: ReviewItem | undefined, now: number): boolean {
  return !!item && item.due <= now;
}

function nextBox(prev: number, grade: Grade): number {
  if (grade === 'again') return 1;
  if (grade === 'easy') return Math.min(Math.max(prev + 2, 2), MAX_BOX);
  return Math.min(prev + 1, MAX_BOX); // good
}

interface FluentState {
  /** SRS state per flashcard id (vocab, phrasal verbs, idioms...). */
  reviews: Record<string, ReviewItem>;
  /** SRS state per grammar lesson id — a cleared level fades and resurfaces for a refresh,
   *  so "passed" means "still mastered", not "cleared once and forgotten". */
  lessonReviews: Record<string, ReviewItem>;
  /** Completed lesson ids. */
  completed: Record<string, true>;
  /** Vocabulary groups the learner has EXCLUDED from Review (id → false). Absent = included,
   *  so new groups are opted in by default. */
  reviewGroups: Record<string, boolean>;
  theme: Theme;
  /** TTS playback rate (0.6 slow .. 1 normal). */
  voiceRate: number;
  /** Chosen TTS voice (voiceURI), or null to auto-pick the best available. */
  voiceURI: string | null;
  /** Whether the per-world ambient music plays. */
  musicOn: boolean;
  /** Whether interaction sound effects play. */
  fxOn: boolean;
  /** Music volume (0..1). */
  musicVol: number;
  /** Sound-effects volume (0..1). */
  fxVol: number;
  /** Level estimated by the placement test, or null if never taken. */
  placementLevel: Level | null;
  /** Epoch ms when the placement test was last completed. */
  placementTakenAt: number | null;
  /** Worlds whose boss has been defeated (keyed by level) — gates the next world. */
  bossCleared: Record<string, true>;
  /** Worlds whose optional bonus round has been cleared (keyed by level). */
  bonusCleared: Record<string, true>;
  /** Mini-bosses defeated, keyed by `${level}:${blockIndex}`. */
  miniCleared: Record<string, true>;
  /** Exercise ids answered correctly at least once — battles avoid repeating these. */
  answeredCorrect: Record<string, true>;
  /** Transient clock used to compute due-ness; not persisted. */
  now: number;

  grade: (cardId: string, grade: Grade) => void;
  markComplete: (lessonId: string) => void;
  unmarkComplete: (lessonId: string) => void;
  /** Clear a level by beating its challenge: mark it done and (re)schedule its refresh.
   *  A first clear starts the SRS clock; re-clearing a due level bumps its interval. */
  passLesson: (lessonId: string) => void;
  /** Include/exclude a vocabulary group from Review. */
  toggleReviewGroup: (id: string) => void;
  /** Replace the whole review-group selection (used by select all / none). */
  setReviewGroups: (v: Record<string, boolean>) => void;
  toggleTheme: () => void;
  setVoiceRate: (rate: number) => void;
  setVoiceURI: (voiceURI: string | null) => void;
  setMusicOn: (v: boolean) => void;
  setFxOn: (v: boolean) => void;
  setMusicVol: (v: number) => void;
  setFxVol: (v: number) => void;
  /** Reset every audio setting (speed, toggles, volumes) to its default. */
  resetAudio: () => void;
  /** Record the result of a placement test (level + when it was taken). */
  setPlacementResult: (level: Level) => void;
  /** Mark a world's boss as defeated, unlocking the next world. */
  clearBoss: (level: Level) => void;
  /** Mark a world's bonus round as cleared. */
  clearBonus: (level: Level) => void;
  /** Mark a mini-boss as defeated (`${level}:${blockIndex}`). */
  clearMini: (id: string) => void;
  /** Record an exercise the learner answered correctly. */
  markAnsweredCorrect: (id: string) => void;
  /** Merge progress from the cloud (or a backup) into this device — never loses progress. */
  importProgress: (data: unknown) => void;
  refreshNow: () => void;
}

export const useStore = create<FluentState>()(
  persist(
    (set) => ({
      reviews: {},
      lessonReviews: {},
      completed: {},
      reviewGroups: {},
      theme: 'light',
      voiceRate: 0.95,
      voiceURI: null,
      musicOn: true,
      fxOn: true,
      musicVol: 0.7,
      fxVol: 0.9,
      placementLevel: null,
      placementTakenAt: null,
      bossCleared: {},
      bonusCleared: {},
      miniCleared: {},
      answeredCorrect: {},
      now: Date.now(),

      grade: (cardId, grade) =>
        set((state) => {
          const now = Date.now();
          const prev = state.reviews[cardId]?.box ?? 0;
          const box = nextBox(prev, grade);
          // "again" resurfaces almost immediately; otherwise schedule by box interval.
          const due = grade === 'again' ? now + 60_000 : now + INTERVAL_DAYS[box] * MS_DAY;
          return { reviews: { ...state.reviews, [cardId]: { box, due } } };
        }),
      markComplete: (lessonId) =>
        set((state) => ({ completed: { ...state.completed, [lessonId]: true } })),
      passLesson: (lessonId) =>
        set((state) => {
          const prev = state.lessonReviews[lessonId]?.box ?? 0;
          const box = Math.min(prev + 1, MAX_BOX);
          const due = Date.now() + INTERVAL_DAYS[box] * MS_DAY;
          return {
            completed: { ...state.completed, [lessonId]: true },
            lessonReviews: { ...state.lessonReviews, [lessonId]: { box, due } },
          };
        }),
      toggleReviewGroup: (id) =>
        set((state) => ({
          reviewGroups: { ...state.reviewGroups, [id]: state.reviewGroups[id] === false },
        })),
      setReviewGroups: (v) => set({ reviewGroups: v }),
      unmarkComplete: (lessonId) =>
        set((state) => {
          const next = { ...state.completed };
          delete next[lessonId];
          return { completed: next };
        }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
      setVoiceRate: (rate) => set({ voiceRate: rate }),
      setVoiceURI: (voiceURI) => set({ voiceURI }),
      setMusicOn: (v) => set({ musicOn: v }),
      setFxOn: (v) => set({ fxOn: v }),
      setMusicVol: (v) => set({ musicVol: Math.max(0, Math.min(1, v)) }),
      setFxVol: (v) => set({ fxVol: Math.max(0, Math.min(1, v)) }),
      resetAudio: () =>
        set({ voiceRate: 0.95, musicOn: true, fxOn: true, musicVol: 0.7, fxVol: 0.9 }),
      setPlacementResult: (level) => set({ placementLevel: level, placementTakenAt: Date.now() }),
      clearBoss: (level) =>
        set((state) => ({ bossCleared: { ...state.bossCleared, [level]: true } })),
      clearBonus: (level) =>
        set((state) => ({ bonusCleared: { ...state.bonusCleared, [level]: true } })),
      clearMini: (id) => set((state) => ({ miniCleared: { ...state.miniCleared, [id]: true } })),
      markAnsweredCorrect: (id) =>
        set((state) => ({ answeredCorrect: { ...state.answeredCorrect, [id]: true } })),
      // Merge learning progress — reviews, completed lessons, defeated bosses, and the
      // placement result. Per-device settings (theme, audio) are deliberately NOT synced.
      importProgress: (data) =>
        set((state) => {
          if (!data || typeof data !== 'object') return {};
          const d = data as {
            reviews?: Record<string, ReviewItem>;
            lessonReviews?: Record<string, ReviewItem>;
            completed?: Record<string, true>;
            bossCleared?: Record<string, true>;
            bonusCleared?: Record<string, true>;
            miniCleared?: Record<string, true>;
            answeredCorrect?: Record<string, true>;
            placementLevel?: Level | null;
            placementTakenAt?: number | null;
          };
          // Keep the more-advanced / most-recently-scheduled entry so a merge never loses progress.
          const mergeSrs = (
            into: Record<string, ReviewItem>,
            from: Record<string, ReviewItem> | undefined,
          ) => {
            const out = { ...into };
            for (const [id, item] of Object.entries(from ?? {})) {
              if (!item || typeof item.box !== 'number' || typeof item.due !== 'number') continue;
              const ex = out[id];
              if (!ex || item.box > ex.box || (item.box === ex.box && item.due > ex.due)) {
                out[id] = item;
              }
            }
            return out;
          };
          const reviews = mergeSrs(state.reviews, d.reviews);
          const lessonReviews = mergeSrs(state.lessonReviews, d.lessonReviews);
          // Take whichever placement result was taken most recently.
          const placement =
            (d.placementTakenAt ?? 0) > (state.placementTakenAt ?? 0) && d.placementLevel
              ? { placementLevel: d.placementLevel, placementTakenAt: d.placementTakenAt ?? null }
              : {};
          return {
            reviews,
            lessonReviews,
            completed: { ...state.completed, ...(d.completed ?? {}) },
            bossCleared: { ...state.bossCleared, ...(d.bossCleared ?? {}) },
            bonusCleared: { ...state.bonusCleared, ...(d.bonusCleared ?? {}) },
            miniCleared: { ...state.miniCleared, ...(d.miniCleared ?? {}) },
            answeredCorrect: { ...state.answeredCorrect, ...(d.answeredCorrect ?? {}) },
            ...placement,
          };
        }),
      refreshNow: () => set({ now: Date.now() }),
    }),
    {
      name: 'fluent',
      version: 3,
      // Migrate old saves forward: everything is derived from progress, so nothing is lost —
      // we just guarantee the newer tracking maps exist. v3 adds per-lesson SRS scheduling;
      // already-completed lessons stay completed and simply aren't scheduled for a refresh yet.
      migrate: (persisted) => {
        const s = (persisted ?? {}) as Record<string, unknown>;
        return {
          ...s,
          bonusCleared: s.bonusCleared ?? {},
          miniCleared: s.miniCleared ?? {},
          answeredCorrect: s.answeredCorrect ?? {},
          lessonReviews: s.lessonReviews ?? {},
        };
      },
      // Only persist durable state — `now` is transient.
      partialize: (s) => ({
        reviews: s.reviews,
        lessonReviews: s.lessonReviews,
        completed: s.completed,
        reviewGroups: s.reviewGroups,
        theme: s.theme,
        voiceRate: s.voiceRate,
        voiceURI: s.voiceURI,
        musicOn: s.musicOn,
        fxOn: s.fxOn,
        musicVol: s.musicVol,
        fxVol: s.fxVol,
        placementLevel: s.placementLevel,
        placementTakenAt: s.placementTakenAt,
        bossCleared: s.bossCleared,
        bonusCleared: s.bonusCleared,
        miniCleared: s.miniCleared,
        answeredCorrect: s.answeredCorrect,
      }),
    },
  ),
);
