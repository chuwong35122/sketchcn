# Repository Guidelines

## Project Structure

- `src/routes/` contains TanStack Start file-based routes; `index.tsx` is the landing page.
- `src/styles.css` holds global Tailwind imports and shared styling.
- `registry/` contains installable shadcn registry source files, declared by `registry.json`.

## Development Commands

- Always use Bun for package management and project commands.
- `bun run dev` starts the local development server on port 3005.
- `bun run build` produces the production Nitro build.
- `bun run check` runs Biome formatting and lint checks.

## Local Ports

- shadcn uses port 4321.
- The app uses port 3005.

## Components and Naming

Use the regular shadcn component name and filename without project-specific prefixes or renames. For example, the button registry item and source must be named `button` and `button.tsx`—never `sketch-button.tsx`, `rough-button.tsx`, or another variant.

Registry components should use Base UI primitives, Tailwind utility classes, `class-variance-authority` for variants, and `cnfast` for class merging. Use `@boxicons/react` for icons and `@fontsource/patrick-hand` as the default font.

## Code Style

Write TypeScript and keep components small and typed. Use tabs and double quotes, matching Biome. Prefer clear names over comments; add comments only for non-obvious constraints. Do not commit or push without explicit instruction.

## Pull Requests

Use concise conventional commits such as `feat: add button registry item`. Describe user-facing changes, list verification performed, and include screenshots for visual UI work.
