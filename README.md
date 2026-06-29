# Fluent — Zero to Native English

An interactive, single-page app for learning English from your very first words to a confident,
near-native **C1** — built especially for **Spanish speakers**. It pairs explicit, CEFR-mapped
grammar lessons with the things that actually make a language stick: lots of audio input,
self-checking practice, targeted correction of Spanish-speaker mistakes, and daily spaced repetition.

It is a **client-only** app — no required backend or account. Audio plays from pre-generated
neural-voice clips (with a browser speech-synthesis fallback), and your progress is saved in
`localStorage`, with **optional** passwordless sign-in to sync it across devices.

## What's inside

- **Roadmap** — your path from A1 → C2 with visible progress.
- **Grammar** — the full CEFR grammar spine (A1–C2). Each lesson is a rule + worked examples +
  common Spanish-speaker pitfalls + interactive drills, with a "mark complete" toggle.
- **Vocabulary** — frequency- and theme-based word sets, each with IPA, a Spanish gloss, an example,
  and collocations. Study any set as flashcards.
- **Pronunciation** — a phonetics lab of the sounds Spanish speakers struggle with, each with
  "which did you hear?" minimal-pair drills (HVPT-style).
- **Reading** — graded texts you can listen to sentence by sentence, with a glossary and
  comprehension questions.
- **Writing** — pushed-output prompts with tips, useful phrases, and a model answer to compare against.
- **Spanish Pitfalls** — false friends and L1-interference traps (grammar, prepositions, word order,
  pronunciation), shown wrong → right.
- **Phrasal Verbs** and **Idioms & Collocations** — high-frequency multi-word language, searchable,
  with one-tap "add to review".
- **Review** — a spaced-repetition (Leitner) flashcard system that pulls from everything you learn
  and resurfaces each item right before you'd forget it.

Every English sentence and word has a **Listen** button, and you can toggle Spanish glosses and
audio speed from the header.

### Voice / audio

To make pronunciation sound great and identical in every browser, the audio for all (static) course
content is **pre-generated** into `public/audio/` with a high-quality free neural voice
(Microsoft Edge TTS — `en-US-AndrewMultilingualNeural`, no API key) and played as static `.mp3` files.
Anything dynamic (text you type for a dictation answer, the voice preview) falls back to the
browser's built-in speech synthesis, whose voice you can pick under **Audio** in the header.

Regenerate the clips after editing content with:

```bash
pnpm generate:audio        # creates any missing clips + updates the manifest
```

This keeps the app a **pure static site** — no backend, no API keys — so it stays free and trivial to
self-host.

### Sync across devices (optional)

By default, progress lives in `localStorage` on each device. To sync it across devices, the app
supports **optional, passwordless** sign-in (email one-time code — "like a 2FA code") backed by
[Supabase](https://supabase.com)'s free tier. It's entirely opt-in — the app works exactly the same
without it, and the sign-in UI only appears once Supabase is configured.

To enable it:

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL Editor, run [`supabase/schema.sql`](./supabase/schema.sql) (creates a `progress` table
   with Row-Level Security — each user can only access their own data).
3. Copy your **Project URL** and **anon public key** (Project Settings → API) into a `.env.local`:

   ```bash
   VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

Then a **Sync** button appears in the header: enter your email, type the 6-digit code you receive,
and your progress is pulled, **merged** (it never overwrites more-advanced progress), and auto-saved
from then on.

## Why it's built this way

The curriculum and mechanics are grounded in second-language-acquisition research: comprehensible
input (Krashen's _i+1_), Nation's vocabulary-coverage thresholds, high-variability phonetic training,
spaced retrieval, explicit grammar instruction for adults, and pushed output. Input, practice,
correction, and review are designed to work together rather than in isolation.

## Tech stack

React 19 · TypeScript 6 (strict) · Vite 8 · Tailwind CSS v4 · Zustand 5 · Web Speech API

## Getting started

Requires **Node 20+** and **pnpm**.

```bash
pnpm install
pnpm dev        # http://localhost:5173
```

## Scripts

| Command               | What it does                                             |
| --------------------- | -------------------------------------------------------- |
| `pnpm dev`            | Start the Vite dev server                                |
| `pnpm build`          | Type-check (`tsc -b`) and build to `dist/`               |
| `pnpm preview`        | Serve the production build locally                       |
| `pnpm lint`           | Run ESLint                                               |
| `pnpm format`         | Format the project with Prettier                         |
| `pnpm format:check`   | Check formatting without writing (CI-friendly)           |
| `pnpm generate:audio` | Pre-generate neural-voice audio clips for course content |

## Deploying

The app is a **static site** (`pnpm build` → `dist/`) hosted on **Cloudflare Pages** (free,
commercial-friendly, _unlimited_ bandwidth — ideal for the audio files). Publishing is wired into
GitHub Actions (`deploy.yml`): every push to `main` builds and deploys.

**One-time setup** — add these in GitHub → **Settings → Secrets and variables → Actions**:

| Secret                   | Required? | Where to get it                                                         |
| ------------------------ | --------- | ----------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`   | yes       | Cloudflare → My Profile → API Tokens → _Edit Cloudflare Pages_ template |
| `CLOUDFLARE_ACCOUNT_ID`  | yes       | Cloudflare → Workers & Pages → right sidebar **Account ID**             |
| `VITE_SUPABASE_URL`      | optional  | Supabase → Project Settings → API → Project URL (enables sync)          |
| `VITE_SUPABASE_ANON_KEY` | optional  | Supabase → Project Settings → API → anon `public` key                   |

The first deploy auto-creates a Pages project named `english` (change `--project-name` in
`deploy.yml` if you prefer). SPA routing is handled by `public/_redirects`. No backend or rewrite to
Next.js is needed — the app is fully static and talks to Supabase from the browser.

> Prefer Cloudflare's dashboard **"Connect to Git"** instead? You can — then delete `deploy.yml` (so
> it doesn't double-deploy) and set the build command `pnpm build`, output `dist`, and the env vars
> in the Cloudflare dashboard. `vercel.json` is also included if you'd rather use Vercel (note its
> free Hobby tier is non-commercial and bandwidth-capped).

## CI/CD

Three GitHub Actions are included (`.github/workflows/`):

- **`ci.yml`** — `pnpm lint` + `pnpm build` (type-check) on every pull request.
- **`deploy.yml`** — builds and publishes to Cloudflare Pages on push to `main`.
- **`generate-audio.yml`** — when spoken content changes (or via manual “Run workflow”), regenerates
  any missing audio clips and commits them back. Audio is normally generated locally with
  `pnpm generate:audio`; this is a safety net.

## Project structure

```
src/
  main.tsx            # React entry point
  app.tsx             # shell: header, sidebar, track routing
  types.ts            # the content model (Lesson, Exercise, VocabItem, SoundLesson, ...)
  store.ts            # Zustand store: SRS schedule, completion, theme, settings (persisted)
  index.css           # Tailwind import + theme tokens (light/dark CSS variables)
  lib/                # speech (TTS), answer-checking, shuffle
  content/            # ALL course content as typed data + the navigation catalog
  components/         # one component per file, kebab-case (exercise.tsx, lesson-view.tsx, ...)
```

All the course content lives in `src/content/*` — adding a lesson, word, or drill is a data edit,
not a code change. See [`AGENTS.md`](./AGENTS.md) for the engineering and commit conventions.
