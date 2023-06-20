module.exports = {
  root: true,
  extends: ["custom-node"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    /**
     * @description
     * To extend global type, "var" keyword must be used
     * @see "src/index.d.ts"
     */
    "no-var": ["off"],
  },
};
