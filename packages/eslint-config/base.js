/** @type {import("eslint").Linter.Config} */
module.exports = {
    env: {
        browser: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    ignorePatterns: ["package.json", ".*.js"]
}