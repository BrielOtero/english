# Contributing

Thanks for your interest in improving Fluent!

## Getting set up

Requires **Node ≥ 20.19 / 22.12** and **pnpm** (enable with `corepack enable`).

```bash
pnpm install
pnpm dev          # http://localhost:5173
```

## Before you open a PR

```bash
pnpm lint         # ESLint
pnpm build        # tsc -b (type-check) + vite build
pnpm format       # Prettier
```

All three must pass. For UI changes, run the app and check it in the browser.

## Adding content

Course content is **typed data** in `src/content/*` — adding a lesson, word, or drill is a data edit,
not a code change. It must satisfy the interfaces in `src/types.ts`. If you add spoken phrases, run
`pnpm generate:audio` to create their audio clips.

## Conventions

Engineering rules, project layout, and the **Conventional Commits** format are documented in
[`AGENTS.md`](./AGENTS.md) — please follow them. In short: TypeScript strict (no `any`/`@ts-ignore`),
one component per file (kebab-case), token-driven styling, title-only conventional commits.

## Branching

Branch off `main`, keep changes focused (one concern per PR), and open a pull request.
