// Cross-device progress sync against Supabase. Optional — only runs when the user is
// signed in. localStorage stays the source of truth on-device; on sign-in we pull the
// cloud copy and MERGE it (keeping the most-advanced state, so nothing is ever lost),
// then auto-save local changes back to the cloud, debounced.

import { supabase } from './supabase';
import { useStore } from '../store';

const TABLE = 'progress';

let timer: ReturnType<typeof setTimeout> | null = null;
let unsub: (() => void) | null = null;
let lastPushed = '';

/** The persistable slice of state (mirrors the store's `partialize`). */
function snapshot() {
  const s = useStore.getState();
  return {
    reviews: s.reviews,
    completed: s.completed,
    theme: s.theme,
    showSpanish: s.showSpanish,
    voiceRate: s.voiceRate,
    voiceURI: s.voiceURI,
  };
}

async function push(userId: string): Promise<void> {
  if (!supabase) return;
  const json = JSON.stringify(snapshot());
  if (json === lastPushed) return; // nothing changed (e.g. only the transient clock ticked)
  lastPushed = json;
  const { error } = await supabase
    .from(TABLE)
    .upsert({ user_id: userId, data: JSON.parse(json), updated_at: new Date().toISOString() });
  if (error) console.error('sync push:', error.message);
}

/** Pull the cloud copy, merge it into local state, then upload the merged result. */
export async function pullAndMerge(userId: string): Promise<void> {
  if (!supabase) return;
  const { data, error } = await supabase
    .from(TABLE)
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();
  if (error) {
    console.error('sync pull:', error.message);
    return;
  }
  if (data?.data) useStore.getState().importProgress(data.data);
  await push(userId);
}

/** Start auto-saving local changes to the cloud (debounced). */
export function startSync(userId: string): void {
  stopSync();
  unsub = useStore.subscribe(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => void push(userId), 1500);
  });
}

export function stopSync(): void {
  if (unsub) {
    unsub();
    unsub = null;
  }
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
  lastPushed = '';
}
