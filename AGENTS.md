# AGENTS.md

Guidance for AI agents and engineers working in this repository. Read this before making changes.

## Project

**Fluent** — an interactive, single-page app that takes a learner from zero English to a
near-native **C1**. It renders a CEFR roadmap, per-level grammar lessons (rule → examples → pitfalls →
self-checking drills), themed vocabulary with flashcards, a pronunciation lab with minimal-pair
drills, graded reading, writing prompts with model answers, phrasal-verb and idiom references, and
a spaced-repetition review that pulls from all of it.

It is a **static** app — all content lives as typed data in `src/content/`. Audio plays from
pre-generated neural-voice clips with a browser Web Speech fallback. Progress (SRS schedule, completed
lessons, settings) persists to `localStorage`, with **optional** passwordless Supabase sign-in to
sync it across devices.

## Tech stack

| Concern    | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | React 19                                           |
| Language   | TypeScript 6 (strict)                              |
| Build tool | Vite 8                                             |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`)              |
| State      | Zustand 5 (`persist` → localStorage)               |
| Audio      | Pre-generated Edge-TTS clips (Web Speech fallback) |
| Sync       | Supabase (optional, passwordless)                  |
| Speech     | Web Speech API (`speechSynthesis`)                 |

## Commands

This project uses **pnpm** (pinned via `packageManager`). Use it, not npm/yarn.

```bash
pnpm install        # install dependencies
pnpm dev            # start the Vite dev server (http://localhost:5173)
pnpm build          # type-check (tsc -b) + production build to dist/
pnpm preview        # serve the production build locally
pnpm lint           # ESLint over the project
pnpm format         # Prettier --write over the project
pnpm generate:audio # (re)generate neural-voice audio clips for course content
```

**Audio.** Listen buttons play pre-generated `.mp3` clips (Microsoft Edge TTS, `en-US-AndrewMultilingualNeural`,
free, no key) keyed by a hash of the phrase (`lib/audio-hash.ts`), with the browser's speech
synthesis as the fallback for dynamic text. After editing spoken content, run `pnpm generate:audio`
to create the new clips and refresh `src/content/audio-manifest.ts`. The app stays a pure static
site — no backend.

`pnpm build` runs `tsc -b` first, so a green build means types are clean. Always run `pnpm lint` and
`pnpm build` before considering a change done.

## Layout

```
src/
  main.tsx            # React entry point
  app.tsx             # shell: header, sidebar layout, track routing
  types.ts            # the content model + all content types
  store.ts            # zustand store (SRS reviews, completed, theme, settings), persisted
  index.css           # Tailwind import + theme tokens (light/dark CSS variables)
  lib/
    audio.ts          # file-first playback: pre-generated clip if present, else speech.ts
    speech.ts         # Web Speech API wrapper + voice ranking (fallback for dynamic text)
    audio-hash.ts     # deterministic phrase→filename hash (shared with the generator)
    check.ts          # tolerant answer-checking for free-text exercises
    shuffle.ts        # Fisher-Yates shuffle
scripts/
  generate-audio.ts   # build-time: synthesize public/audio/<hash>.mp3 via Edge TTS + manifest
public/audio/         # pre-generated neural-voice clips (committed; regenerate with pnpm generate:audio)
  content/
    index.ts          # nav catalog (TRACKS), derived stats, SRS deck builder
    grammar.ts        # GrammarUnit[]  (A1-C2 lessons)
    vocab.ts          # VocabSet[]
    phonetics.ts      # SoundLesson[]
    phrasal.ts        # PhrasalVerb[]
    idioms.ts         # Idiom[]
    reading.ts        # Reading[]
    writing.ts        # WritingPrompt[]
  components/         # one component per file, kebab-case names
    ui/               # design system — shadcn-style primitives (Button, Card, Badge, Input, Stat)
```

## Content model

All learning material is **typed data**, defined by the interfaces in `src/types.ts` (`Lesson`,
`Exercise`, `VocabItem`, `SoundLesson`, `PhrasalVerb`, `Idiom`, `Reading`, `WritingPrompt`, …). Adding
content is a data edit, not a code change. The exercise engine renders a discriminated union of
exercise kinds (`mcq`, `cloze`, `correct`, `order`, `dictation`); to add a new kind,
extend the union in `types.ts` and handle it in `components/exercise.tsx`.

## Styling conventions

- **Tailwind utilities in markup** — the default. No ad-hoc CSS files or inline `style` for things a
  utility can express (the few exceptions are dynamic widths on progress bars).
- **Theming is token-driven.** Colors come from semantic tokens (`bg-bg`, `text-ink`,
  `border-rule-soft`, `text-accent`, `text-success`, …) defined in `index.css` via `@theme inline`
  and switched by the `data-theme` attribute on `<html>`. **Never hard-code hex colors in
  components** — add or reuse a token.

## Design system

Reusable UI primitives live in `src/components/ui/`, built shadcn-style (`cva` variants, a
`cn()` helper over `clsx` + `tailwind-merge`, `forwardRef`, `data-slot`). **Prefer a `ui/`
primitive over ad-hoc markup wherever one fits** — it keeps the UI consistent and kills
copy-pasted `className` strings. Browse `src/components/ui/` for what's available; if nothing
fits, add a primitive there rather than one-off styling. Extend a primitive by passing
`className` (tailwind-merge resolves conflicts) or by adding a `cva` variant — never fork its
styles inline.

## Engineering rules

1. **TypeScript strict, no escape hatches.** No `any`, no `@ts-ignore`, no non-null `!` to silence the
   compiler. Model content with real types and let inference flow.
2. **One component per file** in `src/components/`, kebab-case filenames, PascalCase exports. Keep
   components presentational; derive state in the store or the parent and pass it down. Reach for a
   `ui/` design-system primitive before hand-rolling UI elements (see **Design system**).
3. **State discipline.** Persistent/shared state (SRS schedule, completed lessons, theme, settings)
   lives in the Zustand store; transient view state (open lesson, current exercise) stays local.
4. **Data is content, not code.** New lessons/words/drills go in `src/content/*` and must satisfy the
   existing interfaces. Don't special-case rendering for one entry — extend the type if needed.
5. **No new dependencies without cause.** Prefer the platform and what's installed.
6. **Accessibility & semantics.** Real elements (`button`, `nav`, `article`, ordered headings),
   accessible names on icon-only controls.
7. **Leave it clean.** No dead code, stray `console.log`, or unused imports — `noUnusedLocals` and
   ESLint will fail it.
8. **Verify, don't assume.** Run `pnpm lint` and `pnpm build`; for UI changes, run the app and look.

## Commit conventions

Use **[Conventional Commits](https://www.conventionalcommits.org/)** for every commit.

```
<type>(<optional scope>): <description>
```

- **Title only — no body.** Write the single `type(scope): description` line and nothing else.
- Imperative mood, lower-case description, no trailing period, subject ≤ ~72 chars.

**Types:** `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `perf`, `test`.

**Scope** names the area touched (`grammar`, `vocab`, `review`, `speech`, `content`, `store`,
`theme`, `deps`).

**Examples**

```
feat(review): pull flashcards from phrasal verbs and idioms
fix(exercise): accept contracted answers in cloze drills
docs: add AGENTS.md
chore(deps): bump vite to 8.0.16
```
