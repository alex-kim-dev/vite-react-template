# Vite React template

## Features

- Vite
  - html minification, EJS template
  - import aliases
  - importing SVGs as react components
  - CSS / preprocessors / modules [support](https://vitejs.dev/guide/features.html#css)
- React
- Typescript
- React Testing Library, test utils
- Eslint: airbnb config, prettier integration, import & props sorting
- Stylelint: standard config, prettier integration, css props sorting
- Editorconfig & Prettier
- Commitlint: conventional commits
- pre-commit hook for linting/testing/typechecking staged files
- CI on push & pr, in-progress workflow cancelling if a new one is queued, dependencies caching
- pinned versions of dependencies

## Usage

1. Click the `Use this template` button or clone locally:

   ```sh
   npx degit alex-kim-dev/vite-react-template vite-project
   ```

   Both methods will clean the git history.

   _[degit](https://github.com/Rich-Harris/degit)_

2. Update & install the dependencies:

   ```sh
   npx ncu -u && npm i
   ```

   _[npm-check-updates](https://github.com/raineorshine/npm-check-updates)_

3. Change the name, description, author, license, links in `package.json`.
4. Check out the available scripts in `package.json` or execute `npm run`.

After installing additional typings add them to the `types` array in `tsconfig.json`.

To add import aliases, edit these two:

- `path` in `tsconfig.json`
- `moduleNameMapper` in `jest.config.json` - order matters
