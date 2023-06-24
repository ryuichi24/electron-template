const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  /**
   * Already specified in plugin:@typescript-eslint/recommended ({@link https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/base.ts})
   * but it is for clarity
   */
  parser: "@typescript-eslint/parser",
};

module.exports = config;
