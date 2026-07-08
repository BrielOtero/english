# Design — "Botanical Study"

Fluent's visual language. A warm, plant-filled reading room you learn inside: cream
paper, a forest-green voice, moss and honey accents, and calm motion. It's built to be
**read for hours** — generous measure, low visual noise, nothing that feels like a
dense dashboard or generic AI output.

The whole system is **token-driven**. Components never hardcode colours; they use
semantic Tailwind utilities (`bg-paper`, `text-ink`, `border-rule-soft`, `bg-accent`)
that map to CSS variables in [`src/index.css`](./src/index.css), switched by
`data-theme` on `<html>`. Re-theming the app is editing those variables — not the
components.

---

## Principles (how we avoid "AI slop")

1. **A distinctive, ownable accent.** Forest green — not the indigo/violet or SaaS blue
   that signals machine-made UI.
2. **Characterful type.** A literary serif for voice, a warm humanist sans for reading,
   a mono for numerals — never Inter / Roboto / system-default.
3. **Room to breathe.** Long-form comfort over density. Generous line-height, a capped
   reading measure, real whitespace.
4. **Warm materials.** Cream paper, soft rules, a faint green→honey aurora like sun
   through leaves. Depth via soft shadows, never glass-morphism.
5. **Motion that rewards, never blocks.** Entrances and celebrations delight; nothing
   delays a tap. Everything respects `prefers-reduced-motion`.
6. **One coherent system.** Every screen is the same tokens, type, spacing, and motion.

---

## Colour

Two themes, same token names. Values live in `:root` (light) and
`:root[data-theme='dark']` (dark).

### Neutrals & text

| Token         | Role                        | Light     | Dark      |
| ------------- | --------------------------- | --------- | --------- |
| `--bg`        | App ground                  | `#eae6da` | `#10140e` |
| `--bg-2`      | Recessed surfaces, tracks   | `#e2ddcd` | `#171c14` |
| `--paper`     | Cards / primary surface     | `#f7f4ec` | `#1a2016` |
| `--raised`    | Modals, popovers            | `#fffdf7` | `#232b1d` |
| `--ink`       | Primary text                | `#20241d` | `#eceadd` |
| `--ink-soft`  | Secondary text / body prose | `#55594a` | `#aab19b` |
| `--ink-mute`  | Muted labels, counts        | `#8a8b78` | `#7d846f` |
| `--rule`      | Strong border (rare)        | `#24271b` | `#434d38` |
| `--rule-soft` | Default borders / dividers  | `#dcd7c5` | `#2a3120` |

### Accents & status

| Token             | Role                           | Light     | Dark      |
| ----------------- | ------------------------------ | --------- | --------- |
| `--accent`        | Forest green — primary action  | `#2f6b46` | `#86cf90` |
| `--accent-strong` | Hover / active accent          | `#245638` | `#9edaa6` |
| `--on-accent`     | Text on an accent fill         | `#ffffff` | `#11170e` |
| `--accent-2`      | Honey — highlighter, secondary | `#c98a2e` | `#e8c25a` |
| `--gold`          | Streaks & progress spark       | `#bf8a24` | `#e0b64c` |
| `--sage`          | Moss — soft botanical support  | `#6f9163` | `#8bae7c` |
| `--success`       | Correct / done                 | `#2b7d4a` | `#58c98a` |
| `--danger`        | Errors / destructive           | `#bf4a30` | `#f0715a` |

> Note: light-mode accent is **dark green with white text**; dark-mode accent is
> **bright leaf with dark text**. That inversion keeps `bg-accent` buttons legible in
> both themes.

### Level ramp — a "growth" progression

The six CEFR bands get their own tokens (`--lvl-a1` … `--lvl-c2`) so they stay
distinguishable even though everything leans green: seedling → leaf → forest → bloom
(honey) → clay → dark heartwood. Used only by `LevelBadge` (white/paper text on each).

| Band | Light     | Dark      |
| ---- | --------- | --------- |
| A1   | `#6f9163` | `#7fa072` |
| A2   | `#4f8a4a` | `#61a557` |
| B1   | `#2f6b46` | `#4f9e6c` |
| B2   | `#b3812a` | `#cb9c40` |
| C1   | `#a95a34` | `#c8734a` |
| C2   | `#3a352b` | `#cbc4b2` |

### Derived tokens

- `--accent-tint` — `accent` mixed into `paper`; selected / active backgrounds.
- `--ring` — translucent accent; the focus-visible ring.
- `--marker` — translucent honey; the highlighter swipe on key terms.

---

## Typography

| Family                 | Variable         | Used for                                   |
| ---------------------- | ---------------- | ------------------------------------------ |
| **Newsreader** (serif) | `--font-display` | Wordmark, headings, hero numerals, kickers |
| **Hanken Grotesk**     | `--font-sans`    | Body, UI, controls (default)               |
| **Geist Mono**         | `--font-mono`    | Counts, tags, level badges, eyebrows       |

- `.font-display` — the serif, optical-sized, slightly tight tracking.
- `.kicker` — an editorial _italic serif_ eyebrow (replaces mono-uppercase labels).
- Headings scale fluidly with `clamp()` (e.g. `text-[clamp(24px,3.4vw,34px)]`).

### Reading comfort

Long-form prose (lessons, reading texts) uses helper classes for a book-like measure:

- `.reading` — 17px / line-height 1.78
- `.reading-lg` — 18px / line-height 1.8
- `.measure` — caps line length at `64ch`

Pair them: `<p className="reading measure text-ink-soft">`. Never let body prose run the
full container width — a long line is tiring; ~60–70 characters is the target.

---

## Spacing & layout

- **Wrappers over margins.** Prefer flex/grid with `gap` for rhythm.
- **Cards.** `rounded-xl border border-rule-soft bg-paper` with `p-4`–`p-6`. Elevated
  things (modals) use `bg-raised` + `--shadow-pop`.
- **Air is a feature.** Section spacing `space-y-8`, generous padding. When in doubt,
  add breathing room — this app should never feel condensed.
- **Content width.** The shell caps at `max-w-[1280px]`; prose caps tighter via
  `.measure`.

---

## Motion

Defined once in `index.css`; reused via classes. Tuned to be _felt, not watched_.

| Class                   | Effect                                                   |
| ----------------------- | -------------------------------------------------------- |
| `.fade-in`              | Mount fade + 8px rise (content entrances)                |
| `.stagger`              | Cascade children in (capped so long lists aren't slow)   |
| `.press`                | Springy `scale(0.97)` on `:active` for tap feedback      |
| `.mark`                 | Honey highlighter swipe across key terms                 |
| `.pop-in`               | Modal scale-in; `.sheet-up` mobile sheet; `.backdrop-in` |
| `.eq-bar` / `.speaking` | "Now playing" audio indicators                           |
| `.stamp` / `.shimmer`   | Sign-in delights                                         |

**Timing tokens:** `--t-fast 130ms`, `--t 220ms`, `--t-slow 320ms`, `--t-sheet 420ms`.
**Easing:** `--ease-out` (settle), `--ease-io` (loops), `--ease-spring` (delight).

Rules: interactions respond within ~130ms; entrances/celebrations may be slower.
Motion **never** gates an action. A global `prefers-reduced-motion` block flattens all
animation to ~0ms.

---

## Accessibility

- **Contrast:** target WCAG AA — 4.5:1 body text, 3:1 for large/bold and UI. The accent
  inverts per theme specifically to keep `on-accent` text legible.
- **Focus:** a visible `--ring` on every `:focus-visible` (`button, a, input, [tabindex]`).
- **Don't rely on colour alone:** feedback pairs colour with an icon + word (e.g.
  `✓ Correct`), so it reads without colour vision.
- **Touch targets:** ≥ 44×44px for primary controls.
- **Reduced motion:** honoured globally.

---

## Extending the system

- **Adding content is a data edit**, not a design change — see the content model in
  `src/types.ts`. Components render whatever the typed data says.
- **Never hardcode a hex.** Reach for a semantic token (`text-accent`, `bg-paper`, …).
  Need a new role? Add a variable in both themes and map it in `@theme inline`.
- **Re-theming** is changing the `:root` / `:root[data-theme='dark']` values here — the
  whole app follows.
