import { useEffect, useState } from 'react';
import { cloudEnabled, supabase } from '../lib/supabase';
import { pullAndMerge, startSync, stopSync } from '../lib/sync';
import { Icon } from './icons';
import { AppModal } from './app-modal';

function initialOf(email: string): string {
  return (email.trim()[0] || '?').toUpperCase();
}

/**
 * Optional cross-device sync via passwordless magic link. A compact avatar/sign-in
 * trigger in the header opens a modal (bottom sheet on mobile): enter email → we mail
 * a one-tap link → it returns here and signs you in. Renders nothing unless Supabase
 * is configured.
 */
export function Account() {
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

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

  const signedIn = !!userId;

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
    setOpen(false);
  }

  return (
    <>
      {signedIn ? (
        <button
          onClick={() => setOpen(true)}
          aria-label="Account"
          title={`Signed in as ${userEmail}`}
          className="press grid h-9 w-9 place-items-center rounded-full bg-accent font-mono text-[13px] font-medium text-on-accent ring-2 ring-accent/25"
        >
          {initialOf(userEmail)}
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="press flex items-center gap-1.5 rounded-full border border-rule-soft bg-paper px-3 py-2 text-[12px] font-medium text-ink-soft hover:text-ink"
        >
          <Icon name="user" className="h-3.5 w-3.5" />
          Sign in
        </button>
      )}

      <AppModal open={open} onClose={() => setOpen(false)} label="Sign in to sync">
        <div className="px-6 pt-6 pb-7 sm:px-7">
          {/* monogram */}
          <div className="mb-5 flex items-center gap-2">
            <span className="font-display text-[20px] text-accent italic">/ˈfluː.ənt/</span>
          </div>

          {signedIn ? (
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent font-mono text-[16px] text-on-accent ring-2 ring-accent/25">
                  {initialOf(userEmail)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-medium text-ink">{userEmail}</p>
                  <p className="flex items-center gap-1.5 text-[12px] text-success">
                    <Icon name="check" className="h-3.5 w-3.5" />
                    Synced across your devices
                  </p>
                </div>
              </div>
              <button
                onClick={signOut}
                className="press mt-5 w-full rounded-xl border border-rule-soft bg-bg2 py-2.5 text-[13px] font-medium text-ink-soft hover:text-ink"
              >
                Sign out
              </button>
            </div>
          ) : sent ? (
            <div className="text-center">
              <div className="stamp mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-accent text-on-accent">
                <Icon name="check" className="h-7 w-7" />
              </div>
              <h2 className="font-display mt-4 text-[24px] text-ink">Check your inbox</h2>
              <p className="mx-auto mt-1.5 max-w-[20rem] text-[13.5px] leading-relaxed text-ink-soft">
                We sent a magic link to <span className="font-medium text-ink">{email}</span>. Tap it
                on any device to finish — you'll land back here, signed in.
              </p>
              <div className="shimmer mx-auto mt-5 h-1.5 w-40 rounded-full" />
              <p className="mt-2 text-[11px] text-ink-mute">Listening for your sign-in…</p>
              <button
                onClick={() => {
                  setSent(false);
                  setMsg(null);
                }}
                className="press mt-4 text-[12px] font-medium text-ink-mute hover:text-ink"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <div>
              <h2 className="font-display text-[26px] leading-tight text-ink">
                Pick up where you left off.
              </h2>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                Sign in with just your email — no password, ever. Your progress syncs across every
                device. It's optional; the app works fine without it.
              </p>
              <div className="mt-5">
                <div className="flex items-center gap-2.5 rounded-xl border border-rule-soft bg-bg px-3.5 focus-within:border-accent">
                  <Icon name="user" className="h-4 w-4 text-ink-mute" />
                  <input
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendLink()}
                    placeholder="you@email.com"
                    className="w-full bg-transparent py-3.5 text-[15px] text-ink placeholder:text-ink-mute focus:outline-none"
                  />
                </div>
                <button
                  onClick={sendLink}
                  disabled={busy || !email.trim()}
                  className="press mt-3 w-full rounded-xl bg-accent py-3.5 text-[14px] font-semibold text-on-accent hover:bg-accent-strong disabled:opacity-50"
                >
                  {busy ? 'Sending…' : 'Email me a magic link'}
                </button>
                {msg && <p className="mt-2.5 text-[12px] text-danger">{msg}</p>}
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-ink-mute">
                  <Icon name="check" className="h-3 w-3" />
                  Passwordless — we email you a one-tap link.
                </p>
              </div>
            </div>
          )}
        </div>
      </AppModal>
    </>
  );
}
