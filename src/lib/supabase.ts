import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Optional cross-device sync. When the two VITE_SUPABASE_* env vars are set (see
// .env.example), the app shows a "Sign in to sync" control and stores progress in
// Supabase. When they're absent, the app runs exactly as before — local-only — so
// the project still works for anyone who clones it without configuring a backend.

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/** True when Supabase is configured; gates all sync UI. */
export const cloudEnabled = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = cloudEnabled
  ? createClient(url as string, anonKey as string, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;
