---
description: This mode is used to generate UI designs in Figma.
model: GPT-5 mini
tools: ['runCommands', 'runTasks', 'editFiles', 'runNotebooks', 'search', 'new', 'extensions', 'codebase', 'usages', 'vscodeAPI', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'findTestFiles', 'searchResults', 'githubRepo', 'todos', 'runTests', 'filesystem', 'memory', 'sequentialthinking']
---

# Create workspace instructions for GitHub Copilot

Purpose: provide a clear, opinionated recipe that GitHub Copilot (or any automation) can follow to scaffold a new pnpm-based monorepo workspace with the minimal, production-ready developer tooling used in this organization.

Keep these principles in mind (they match repository conventions):

- Use pnpm for package management and workspace-level commands.
- Keep file and folder names kebab-case.
- Collocate code where sensible; prefer package-scoped scripts and explicit workspace scripts when operating across packages.

This file contains:

- A recommended top-level `package.json` (scripts are organized into three logical sections as requested)
- Installation commands for the basic dependencies
- Minimal templates for the most-common config files: `release-it`, `eslint`, `tsconfig`, `prettier`, `.gitignore`, `.env.example`, `lint-staged`, and `vitest`
- Small notes about verification and security

## Checklist (requirements mapped)

- [x] Provide `package.json` with `scripts` showing three sections: scripts, pre-configured scripts, custom
- [x] Show install commands for basic dependencies
- [x] Provide minimal config examples for: `release-it`, `eslint`, `typescript`, `prettier`, `.gitignore`, `.env.example`, `lint-staged`, `vitest`

## 2) Configuration templates (use these exact module-based templates)

Important: before running these steps, the user MUST provide the folder path for the new package (for example: `shared/analytics` or `packages/my-lib`). The steps below assume you have that path available and will substitute it where appropriate.

When the folder path is provided, follow these exact steps to add the package to the pnpm workspace and verify it:

1. Create the package folder

```bash
# example: the user provided `packages/analytics`
mkdir -p packages/analytics
```

2. Create `package.json` and base configuration files inside the new folder

Create `packages/analytics/package.json` with a minimal, workspace-friendly manifest (update name, version as needed):

```json
{
	"name": "@ring/analytics",
	"version": "0.0.1",
	"private": true,
	"main": "./dist/index.js",
	"module": "./dist/index.mjs",
	"types": "./dist/index.d.ts",
	"scripts": {
		"🚀": "████████████████████████ ✋ SCRIPTS 👇 ████████████████████████████",
		"dev": "pnpm _pkgroll --watch",
		"check": "run-p check:*",
		"check:tests": "echo 👻",
		"check:types": "tsc --noEmit",
		"check:lint:scripts": "cross-env TIMING=1 eslint src --format stylish --max-warnings=0",
		"check:format": "pnpm _prettier -c .",
		"check:lint:styles": "echo 👻",
		"deps:check": "ncu -e 2",
		"fix": "run-p fix:*",
		"fix:lint:scripts": "echo 👻",
		"fix:format": "pnpm _prettier -w .",
		"fix:lint:styles": "echo 👻",
		"deps:upgrade": "ncu -du --doctorInstall \"pnpm i\" --doctorTest \"pnpm deps:upgrade:test\"",
		"deps:upgrade:test": "run-p check build",
		"build": "pnpm _pkgroll --minify",
		"release": "release-it",
		"deploy": "echo 👻",
		"bootstrap": "echo 👻",
		"🛠️": "████████████████████████ ✋ PRE-CONFIGURED 👇 █████████████████████",
		"_pkgroll": "pkgroll src/index.ts --formats esm,cjs --dts",
		"_tsc": "tsc --noEmit",
		"_eslint": "eslint --format=stylish --max-warnings=0",
		"_tflint": "echo 👻",
		"_prettier": "prettier --ignore-unknown",
		"_yamllint": "echo 👻",
		"_stylelint": "stylelint --allow-empty-input --ignore-path=.gitignore",
		"_markdownlint": "echo 👻",
		"_sort-package-json": "sort-package-json"
	},
	"dependencies": {},
	"devDependencies": {
		"@b12k/mvm": "0.0.10",
		"@ring/configs": "workspace:*",
		"@types/node": "22.13.0",
		"cross-env": "7.0.3",
		"eslint": "9.19.0",
		"lint-staged": "15.4.3",
		"npm-check-updates": "17.1.15",
		"npm-run-all": "4.1.5",
		"prettier": "3.5.3",
		"release-it": "18.1.2",
		"shx": "0.3.4",
		"sort-package-json": "3.0.0",
		"pkgroll": "^0.1.0",
		"typescript": "5.7.3",
		"vitest": "3.1.3"
	}
}
```

Also create the minimal config wrappers that this repo uses (they can reference shared `@ring/configs`):

release-it

```js
module.exports = require('@ring/config-release-it')();
```

eslint.config.js

```js
const config = require('@ring/configs/nextjs/eslint');

// OR the programmatic factory
import { defineEslintConfig } from '@ring/configs';
const config = defineEslintConfig('react');
```

lint-staged.config.js

```js
const { defineLintStagedConfig } = require('@ring/configs');
module.exports = defineLintStagedConfig();
```

prettier.config.js

```js
const { definePrettierConfig } = require('@ring/configs');
module.exports = definePrettierConfig();
```

tsconfig.json

```json
{
	"$schema": "https://json.schemastore.org/tsconfig",
	"extends": "@ring/configs/tsconfig/node",
	"include": ["**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
	"exclude": ["node_modules", ".turbo", ".next", "coverage"]
}
```

vitest.config.ts

```ts
import { defineVitestConfig } from '@ring/configs';
export default defineVitestConfig();
```

vitest.setup.ts

```ts
import '@testing-library/jest-dom';
```

.gitignore

```
.next
.turbo
coverage
node_modules
.env*
!.env.example
tsconfig.tsbuildinfo
```

Add a lightweight `lint-staged` configuration to `package.json` or a separate `.lintstagedrc.json`:

```json
{
	"*.{js,jsx,ts,tsx}": ["pnpm -w -r lint --staged", "pnpm -w -r test --staged"],
	"*.{json,md,css,scss}": ["prettier --write"]
}
```

3. Add an `src/` folder and a dummy `src/index.ts` file

```bash
mkdir -p shared/analytics/src
cat > shared/analytics/src/index.ts <<'TS'
export const analyticsDummy = () => 'analytics up';
TS
```

4. Update the pnpm workspace configuration so the new package is discoverable

Open `pnpm-workspace.yaml` at the repository root and ensure the `packages:` section includes a glob pattern that matches the new folder (for example `shared/*` or `packages/*`). If your workspace file lists explicit packages, add the new path.

Example (append or ensure the pattern exists):

```yaml
packages:
	- 'apps/*'
	- 'shared/*'
	- 'packages/*'
```

If `pnpm-workspace.yaml` uses explicit entries, add the exact path (e.g., `shared/analytics`).

5. Install dependencies

From the repository root run:

```bash
pnpm install
```

6. Run the workspace checks

```bash
pnpm -w -r check
```

7. Fix any issues and make the new workspace visible

- If `pnpm -w -r check` reports type errors, lint failures, or missing configs for the new package, fix them in the package files (common fixes: correct `tsconfig.json`, add missing `devDependencies` to the root `package.json`, or add package-local `devDependencies` inside `shared/analytics/package.json` and run `pnpm install`).
- If tests are failing, run `pnpm -w -r test` and inspect failing packages.
- Repeat `pnpm install` and `pnpm -w -r check` until the package appears without errors in the workspace checks.

Notes and tips:

- When adding packages that need build tooling (pkgroll, rollup, tsc), prefer adding the build tool to the root `devDependencies` (the `package.json` example in this repo shows `pkgroll` in devDependencies). If a package needs a unique toolchain, add it to that package's `package.json` and run `pnpm install`.
- If the package has a UI (React/Next) or Storybook, install and configure Storybook inside the package, not at root.
- Use workspace references (`workspace:*`) in package `dependencies` to link local packages (for example `"@your-scope/logger": "workspace:*"`).

This sequence ensures the new package folder is created, configured, installed, and validated by the repo-level `pnpm check` steps.

## 5) Verification (quick smoke checks)

After scaffolding, run these quick checks from the repo root:

```bash
pnpm install
pnpm check
```

---

End of `create-workspace.instructions.md` — use this as the authoritative scaffold recipe when Copilot is asked to create a new workspace.
