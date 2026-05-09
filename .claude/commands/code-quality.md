Run all code quality checks and fix any issues found.

1. Run `pnpm typecheck` to check for TypeScript errors. Fix all type errors.
2. Run `pnpm format` to auto-format with Prettier.
3. Run `pnpm lint --fix` to lint and auto-fix with ESLint.
4. Run `pnpm knip` to find unused exports, dependencies, and files. Remove anything flagged as unused.

After each step, if there are remaining errors that couldn't be auto-fixed, fix them manually before proceeding to the next step. Report a summary of what was found and fixed.
