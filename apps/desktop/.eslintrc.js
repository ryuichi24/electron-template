module.exports = {
  root: true,
  extends: ["@project/node"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js", "vite.config.ts"],
  rules: {
    /**
     * @description
     * To extend global type, "var" keyword must be used
     * @see "src/index.d.ts"
     */
    "no-var": ["off"],
  },
};
