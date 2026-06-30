import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  /** SRS state per flashcard id (vocab, phrasal verbs, idioms, pitfalls...). */
  reviews: Record<string, ReviewItem>;
  /** Completed lesson ids. */
  completed: Record<string, true>;
  theme: Theme;
  /** Show Spanish translations/glosses inline. */
  showSpanish: boolean;
  /** TTS playback rate (0.6 slow .. 1 normal). */
  voiceRate: number;
  /** Chosen TTS voice (voiceURI), or null to auto-pick the best available. */
  voiceURI: string | null;
  /** Transient clock used to compute due-ness; not persisted. */
  now: number;

  grade: (cardId: string, grade: Grade) => void;
  markComplete: (lessonId: string) => void;
  unmarkComplete: (lessonId: string) => void;
  toggleTheme: () => void;
  toggleSpanish: () => void;
  setVoiceRate: (rate: number) => void;
  setVoiceURI: (voiceURI: string | null) => void;
  /** Merge progress from the cloud (or a backup) into this device — never loses progress. */
  importProgress: (data: unknown) => void;
  refreshNow: () => void;
}

export const useStore = create<FluentState>()(
  persist(
    (set) => ({
      reviews: {},
      completed: {},
      theme: 'light',
      showSpanish: true,
      voiceRate: 0.95,
      voiceURI: null,
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
      unmarkComplete: (lessonId) =>
        set((state) => {
          const next = { ...state.completed };
          delete next[lessonId];
          return { completed: next };
        }),
      toggleTheme: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
      toggleSpanish: () => set((s) => ({ showSpanish: !s.showSpanish })),
      setVoiceRate: (rate) => set({ voiceRate: rate }),
      setVoiceURI: (voiceURI) => set({ voiceURI }),
      // Merge ONLY learning progress (reviews + completed). Settings like theme and
      // audio speed are per-device preferences and are deliberately NOT synced.
      importProgress: (data) =>
        set((state) => {
          if (!data || typeof data !== 'object') return {};
          const d = data as {
            reviews?: Record<string, ReviewItem>;
            completed?: Record<string, true>;
          };
          const reviews = { ...state.reviews };
          for (const [id, item] of Object.entries(d.reviews ?? {})) {
            if (!item || typeof item.box !== 'number' || typeof item.due !== 'number') continue;
            const ex = reviews[id];
            // Keep the more-advanced / most-recently-scheduled card so a merge never loses progress.
            if (!ex || item.box > ex.box || (item.box === ex.box && item.due > ex.due)) {
              reviews[id] = item;
            }
          }
          return { reviews, completed: { ...state.completed, ...(d.completed ?? {}) } };
        }),
      refreshNow: () => set({ now: Date.now() }),
    }),
    {
      name: 'fluent',
      version: 1,
      // Only persist durable state — `now` is transient.
      partialize: (s) => ({
        reviews: s.reviews,
        completed: s.completed,
        theme: s.theme,
        showSpanish: s.showSpanish,
        voiceRate: s.voiceRate,
        voiceURI: s.voiceURI,
      }),
    },
  ),
);
