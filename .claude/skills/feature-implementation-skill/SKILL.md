# Feature Implementation

## When to use

Use this skill whenever you are:

- Implementing a new feature or screen
- Expanding or modifying an existing feature
- Adding, moving, or renaming files and folders within `src/` or `app/`
- Creating new components, hooks, parts, or utils

## Structure

Everything lives under `src/`. The top-level folders are:

```
src/
├─ ui/                      # Atomic UI components (buttons, typography, etc.)
├─ hooks/                   # Hooks shared across multiple features
├─ components/              # Complex shared components (e.g. chat)
├─ features/                # Feature-specific modules
│  ├─ home/
│  │  ├─ hooks/             # Hooks shared between home screens
│  │  ├─ parts/             # Parts shared between home screens
│  │  ├─ screens/
│  │  │  ├─ home-screen/
│  │  │  │  ├─ parts/       # Parts specific to home screen
│  │  │  │  │  └─ some-part/
│  │  │  │  │     ├─ index.tsx
│  │  │  │  │     ├─ types.ts
│  │  │  │  │     ├─ utils.ts
│  │  │  │  │     └─ static.ts
│  │  │  │  ├─ index.tsx    # Screen implementation
│  │  │  │  ├─ types.ts
│  │  │  │  ├─ utils.ts
│  │  │  │  └─ static.ts
│  │  │  └─ other-screen/
│  │  └─ utils.ts           # Utils shared across home screens
│  └─ some-other-feature/
```

### Key rules

- **Folder names** use kebab-case (`home-screen`, `some-part`).
- **Co-locate** everything related to a screen or part inside its folder (`types.ts`, `utils.ts`, `static.ts`).
- **Parts** are UI sections of a screen — not standalone screens, not atomic UI components.
- **Scope proximity**: place code at the narrowest scope where it's used.
  - Used by one screen → inside that screen's folder.
  - Shared between screens of one feature → in the feature's `hooks/`, `parts/`, or `utils.ts`.
  - Shared across features → in top-level `src/hooks/`, `src/components/`, or `src/ui/`.

## Translations (i18n)

All user-facing strings **must** be translated via `next-intl`:

- Use `useTranslations("namespace")` from `next-intl` to access translations.
- Add translation keys to `messages/en.json` under a feature-scoped namespace (e.g. `"landing.hero"`, `"landing.nav"`).
- Never hardcode user-visible text directly in JSX — always use `t("key")`.

## Styling

- When merging class names dynamically (e.g. combining a base set of classes with a variable), always use the `cn()` utility from `@/lib/utils` instead of template literals.

## UI Components

- Never use raw HTML `<button>` elements — always use `Button` from `@/components/ui/button`.

## Exports

- Never use `export default`. Always use named exports.

## Route files (`app/`)

Expo Router route files in `app/` are **thin wrappers** — they only re-export the screen as default (required by Expo Router):

```tsx
export { WelcomeScreen as default } from "~/features/welcome/screens/welcome-screen";
```

Do NOT put screen logic, layout, or UI code directly in `app/` route files.
