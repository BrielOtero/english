# Fluent — Zero to Native English

A self-study English course, from first words to a near-native C1.
Single-page app, no backend required.

## Why it's built this way

**Pedagogy drives the architecture.** The curriculum follows second-language-acquisition
research — comprehensible input (Krashen's _i+1_), high-variability phonetic training for the
sounds learners can't yet hear, spaced retrieval, and pushed output. Because input,
practice, correction, and review only work when they reinforce each other, the app is split into
tracks (grammar, vocabulary, pronunciation, reading, writing) that all feed one spaced-repetition
review queue.

**Content is typed data, not code.** Every lesson, word, drill, and reading lives in
`src/content/*` as TypeScript. Adding material is a data edit the compiler checks — no JSX, no CMS,
no runtime parsing. The content model is the source of truth; components just render it.

**Client-only by default.** No required backend or account. Progress persists to `localStorage`
and the whole app deploys as static files — hosting is free, it works offline, and anyone can clone
and run it in two commands.

**Audio is pre-generated, not synthesized at runtime.** Course audio is rendered ahead of time to
`public/audio/*.mp3` with a neural voice (Edge TTS, no API key) so pronunciation sounds identical in
every browser. Only dynamic text — a dictation answer you type — falls back to the Web Speech API.
No audio backend, no per-play cost.

**Sync is optional and passwordless.** Progress is local first. Configure Supabase and a magic-link
sign-in appears, syncing progress across devices and _merging_ so it never overwrites more-advanced
progress. Without that config the app behaves identically, minus the sign-in button.

## Stack

React 19 · TypeScript 6 (strict) · Vite 8 · Tailwind v4 · Zustand 5 · Supabase (optional)

## Run it

```bash
pnpm install      # Node 22 (.node-version); enable pnpm with `corepack enable`
pnpm dev
```

Engineering and commit conventions live in [AGENTS.md](./AGENTS.md); optional sync setup in
[.env.example](./.env.example).
