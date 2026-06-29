import { useEffect, useState } from 'react';
import { cloudEnabled, supabase } from '../lib/supabase';
import { pullAndMerge, startSync, stopSync } from '../lib/sync';
import { Icon } from './icons';

/**
 * Optional cross-device sync. Passwordless magic-link sign-in: enter your email, get
 * a one-tap sign-in link, click it, and you're in — no password, no code to type.
 * Signing in is entirely optional; the app works the same without it (progress is
 * saved locally either way). Renders nothing unless Supabase is configured.
 */
export function Account() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // Track the auth session (the magic link returns here and is picked up
  // automatically by supabase-js, firing onAuthStateChange).
  useEffect(() => {
    if (!supabase) return;
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setUserId(data.session?.user.id ?? null);
      setUserEmail(data.session?.user.email ?? '');
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserId(session?.user.id ?? null);
      setUserEmail(session?.user.email ?? '');
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  // Pull + start syncing while signed in.
  useEffect(() => {
    if (!userId) {
      stopSync();
      return;
    }
    void pullAndMerge(userId);
    startSync(userId);
    return () => stopSync();
  }, [userId]);

  if (!cloudEnabled) return null;

  async function sendLink() {
    if (!supabase || !email.trim()) return;
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: true, emailRedirectTo: window.location.origin },
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else setSent(true);
  }

  async function signOut() {
    await supabase?.auth.signOut();
    setEmail('');
    setSent(false);
    setMsg(null);
  }

  const signedIn = !!userId;

  return (
    <details className="relative">
      <summary
        className={`flex cursor-pointer list-none items-center gap-1.5 rounded-full border px-3 py-2 font-mono text-[11px] tracking-wide uppercase transition-colors [&::-webkit-details-marker]:hidden ${
          signedIn
            ? 'border-accent bg-accent/10 text-ink'
            : 'border-rule-soft bg-paper text-ink-soft hover:text-ink'
        }`}
      >
        <Icon name="user" className="h-3.5 w-3.5" />
        {signedIn ? (
          <span className="max-w-[120px] truncate normal-case">{userEmail}</span>
        ) : (
          'Sign in'
        )}
      </summary>

      <div className="absolute right-0 z-30 mt-2 w-72 rounded-xl border border-rule-soft bg-paper p-4 shadow-xl">
        {signedIn ? (
          <>
            <p className="text-[13px] text-ink">
              Signed in as <span className="font-medium">{userEmail}</span>
            </p>
            <p className="mt-1 text-[12px] leading-snug text-ink-soft">
              Your progress syncs automatically across your devices.
            </p>
            <button
              onClick={signOut}
              className="mt-3 w-full rounded-lg border border-rule-soft bg-bg px-3 py-2 font-mono text-[11px] tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
            >
              Sign out
            </button>
          </>
        ) : sent ? (
          <>
            <p className="flex items-center gap-2 text-[13px] text-ink">
              <Icon name="check" className="h-4 w-4 text-success" />
              Check your email
            </p>
            <p className="mt-1 text-[12px] leading-snug text-ink-soft">
              We sent a sign-in link to <span className="font-medium">{email}</span>. Click it to
              finish — you can do it on any device.
            </p>
            <button
              onClick={() => {
                setSent(false);
                setMsg(null);
              }}
              className="mt-3 w-full text-center font-mono text-[10px] tracking-wide text-ink-mute uppercase hover:text-ink"
            >
              ← use a different email
            </button>
          </>
        ) : (
          <>
            <p className="mb-3 text-[12px] leading-snug text-ink-soft">
              Sign in to sync your progress across devices — phone, laptop, anywhere. Optional: the
              app works the same without it.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendLink()}
              placeholder="you@email.com"
              className="w-full rounded-lg border border-rule-soft bg-bg px-3 py-2 text-[13px] text-ink focus:border-accent focus:outline-none"
            />
            <button
              onClick={sendLink}
              disabled={busy || !email.trim()}
              className="mt-2 w-full rounded-lg bg-accent px-3 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {busy ? 'Sending…' : 'Email me a sign-in link'}
            </button>
            {msg && <p className="mt-2 text-[11px] leading-snug text-danger">{msg}</p>}
          </>
        )}
      </div>
    </details>
  );
}
