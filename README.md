# 👕 Next.JS Template with Linter

## This project is a template using the framework NextJS.

<br>

### 🔨 Tools:

- Typescript
- ESLint
- Prettier 
- Husky
- Jest
- Axios

### 🤺 How to use:

- git clone https://github.com/RodrigoRVSN/next_ts_boilerplate.git
- yarn to install dependencies
- ✅

### 🤖 Auto-formatting on save:

Inside `/.vscode/settings.json` we set prettier as the default formatter, and also set `editor.codeActionsOnSave` to run:

- **Lint:** `"source.fixAll.eslint"`
- **Format:** `"source.fixAll.format"`

### ✅ Checking standards pre-commit:

Using [husky](https://www.npmjs.com/package/husky) we can check all of our style standards to make sure our git commits are up to par. Check those checks out at [`.husky/pre-commit`](.husky/pre-commit)
