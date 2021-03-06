module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "env": { "node": true },
    "parserOptions": {
      "ecmaVersion": 5,
      "sourceType": "module",
      "project": "./tsconfig.json"
    },
    "rules": {}
  }