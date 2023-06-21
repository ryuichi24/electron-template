module.exports = {
  root: true,
  extends: ["custom-react"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js", "vite.config.ts"],
  rules: {},
};
