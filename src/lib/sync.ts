// Cross-device progress sync against Supabase. Optional — only runs while signed in.
// localStorage stays the source of truth on-device. Design goals:
//   - never lose progress: every write MERGES with the cloud first (most-advanced
//     review box / latest due wins; completed lessons are unioned).
//   - feel live: pull-and-merge on sign-in AND whenever the tab regains focus, so
//     switching back to another device picks up its latest progress.

import { supabase } from './supabase';
import { useStore } from '../store';

const TABLE = 'progress';

let unsubStore: (() => void) | null = null;
let onVisible: (() => void) | null = null;
let timer: ReturnType<typeof setTimeout> | null = null;
let lastJson = '';

/** The synced slice: learning progress only (reviews, completed lessons, defeated
 *  bosses, placement result). Settings (theme, audio) stay per-device. */
function snapshot() {
  const s = useStore.getState();
  return {
    reviews: s.reviews,
    completed: s.completed,
    bossCleared: s.bossCleared,
    placementLevel: s.placementLevel,
    placementTakenAt: s.placementTakenAt,
  };
}

async function readCloud(userId: string): Promise<unknown | null> {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from(TABLE)
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) {
    console.error('[sync] read failed:', error.message);
    return null;
  }
  return data?.data ?? null;
}

async function writeCloud(userId: string, data: unknown): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase
    .from(TABLE)
    .upsert({ user_id: userId, data, updated_at: new Date().toISOString() });
  if (error) console.error('[sync] write failed:', error.message);
}

/** Pull the cloud copy, merge it into local state, then upload the merged result. */
export async function pullAndMerge(userId: string): Promise<void> {
  if (!supabase) return;
  const cloud = await readCloud(userId);
  if (cloud) useStore.getState().importProgress(cloud);
  const snap = snapshot();
  lastJson = JSON.stringify(snap);
  await writeCloud(userId, snap);
}

/** Save local changes — but merge with the cloud first so we never clobber another device. */
async function push(userId: string): Promise<void> {
  if (!supabase) return;
  const cloud = await readCloud(userId);
  if (cloud) useStore.getState().importProgress(cloud);
  const snap = snapshot();
  lastJson = JSON.stringify(snap);
  await writeCloud(userId, snap);
}

/** Start syncing: debounced push on change + pull whenever the tab regains focus. */
export function startSync(userId: string): void {
  stopSync();
  unsubStore = useStore.subscribe(() => {
    // Ignore changes that don't affect persisted state (e.g. the transient clock).
    if (JSON.stringify(snapshot()) === lastJson) return;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => void push(userId), 1200);
  });
  onVisible = () => {
    if (document.visibilityState === 'visible') void pullAndMerge(userId);
  };
  window.addEventListener('focus', onVisible);
  document.addEventListener('visibilitychange', onVisible);
}

export function stopSync(): void {
  if (unsubStore) {
    unsubStore();
    unsubStore = null;
  }
  if (onVisible) {
    window.removeEventListener('focus', onVisible);
    document.removeEventListener('visibilitychange', onVisible);
    onVisible = null;
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  lastJson = '';
}
