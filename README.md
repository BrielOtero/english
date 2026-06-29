# Fluent — Zero to Native English

An interactive, single-page app for learning English from your very first words to a confident,
near-native **C1** — built especially for **Spanish speakers**. It pairs explicit, CEFR-mapped
grammar lessons with the things that actually make a language stick: lots of audio input,
self-checking practice, targeted correction of Spanish-speaker mistakes, and daily spaced repetition.

It is a **client-only** app — no backend, no accounts. Audio plays from pre-generated neural-voice
clips (with a browser speech-synthesis fallback), and your progress is saved in `localStorage`.

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
(Microsoft Edge TTS — `en-US-AvaMultilingualNeural`, no API key) and played as static `.mp3` files.
Anything dynamic (text you type for a dictation answer, the voice preview) falls back to the
browser's built-in speech synthesis, whose voice you can pick under **Audio** in the header.

Regenerate the clips after editing content with:

```bash
pnpm generate:audio        # creates any missing clips + updates the manifest
```

This keeps the app a **pure static site** — no backend, no API keys — so it stays free and trivial to
self-host.

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
