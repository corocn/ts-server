module.exports = {
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "@typescript-eslint/indent": ["error", 2],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
      }
    ],
  }
};