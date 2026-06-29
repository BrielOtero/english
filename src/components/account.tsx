import { useEffect, useState } from 'react';
import { cloudEnabled, supabase } from '../lib/supabase';
import { pullAndMerge, startSync, stopSync } from '../lib/sync';
import { Icon } from './icons';

/**
 * Optional cross-device sync. Passwordless: enter your email, get a 6-digit code,
 * enter it — no password. Signing in is entirely optional; the app works the same
 * without it (progress is saved locally either way). Renders nothing unless Supabase
 * is configured (see lib/supabase.ts).
 */
export function Account() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // Track the auth session.
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

  async function sendCode() {
    if (!supabase || !email.trim()) return;
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: true },
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else {
      setStep('code');
      setMsg('We emailed you a 6-digit code.');
    }
  }

  async function verify() {
    if (!supabase || !code.trim()) return;
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.verifyOtp({
      email: email.trim(),
      token: code.trim(),
      type: 'email',
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else {
      setStep('email');
      setCode('');
      setMsg(null);
    }
  }

  async function signOut() {
    await supabase?.auth.signOut();
    setStep('email');
    setEmail('');
    setCode('');
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
        <Icon name={signedIn ? 'check' : 'refresh'} className="h-3.5 w-3.5" />
        {signedIn ? 'Synced' : 'Sync'}
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
        ) : (
          <>
            <p className="mb-3 text-[12px] leading-snug text-ink-soft">
              Sign in to sync your progress across devices — phone, laptop, anywhere. Optional: the
              app works the same without it.
            </p>
            {step === 'email' ? (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendCode()}
                  placeholder="you@email.com"
                  className="w-full rounded-lg border border-rule-soft bg-bg px-3 py-2 text-[13px] text-ink focus:border-accent focus:outline-none"
                />
                <button
                  onClick={sendCode}
                  disabled={busy || !email.trim()}
                  className="mt-2 w-full rounded-lg bg-accent px-3 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {busy ? 'Sending…' : 'Email me a code'}
                </button>
              </>
            ) : (
              <>
                <input
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && verify()}
                  placeholder="6-digit code"
                  className="w-full rounded-lg border border-rule-soft bg-bg px-3 py-2 text-center font-mono text-[15px] tracking-[0.3em] text-ink focus:border-accent focus:outline-none"
                />
                <button
                  onClick={verify}
                  disabled={busy || !code.trim()}
                  className="mt-2 w-full rounded-lg bg-accent px-3 py-2 font-mono text-[11px] tracking-wide text-paper uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {busy ? 'Verifying…' : 'Verify & sign in'}
                </button>
                <button
                  onClick={() => {
                    setStep('email');
                    setMsg(null);
                  }}
                  className="mt-2 w-full text-center font-mono text-[10px] tracking-wide text-ink-mute uppercase hover:text-ink"
                >
                  ← use a different email
                </button>
              </>
            )}
            {msg && <p className="mt-2 text-[11px] leading-snug text-ink-soft">{msg}</p>}
          </>
        )}
      </div>
    </details>
  );
}
