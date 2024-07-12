[![Depfu](https://badges.depfu.com/badges/4b1166cf110842ec49787e0acf8f8723/overview.svg)](https://depfu.com/github/alex-kim-dev/vite-react-template?project_id=34571)
[![CI](https://github.com/alex-kim-dev/vite-react-template/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/alex-kim-dev/vite-react-template/actions/workflows/ci.yml)

# Vite React template

## Features

- PNPM, pinned versions of dependencies
- Vite
  - import alias `~/` mapped to `src`
  - import SVGs as react components
- React
- Typescript
- Vitest, Happy Dom, React Testing Library, test utils. In tests css processing is turned off
- Eslint v9: typescript-eslint config with type checking, imports sorting
- Stylelint: standard config, css properties sorting
- Prettier & editorconfig
- Commitlint: conventional commits
- pre-commit hook for linting/testing/typechecking staged files
- CI on push & pr, in-progress workflow cancelling if a new one is queued, dependencies caching

## Usage

1. Click the `Use this template` button or clone locally:

   ```sh
   pnpx degit alex-kim-dev/vite-react-template vite-project
   ```

   Both methods will clean the git history.

   _[degit](https://github.com/Rich-Harris/degit)_

2. Update & install the dependencies:

   ```sh
   pnpx ncu -u && pnpm i
   ```

   _[npm-check-updates](https://github.com/raineorshine/npm-check-updates)_

3. Change the name, description, author, license, links in `package.json`.
4. Check out the available scripts in `package.json` or execute `pnpm run`.
