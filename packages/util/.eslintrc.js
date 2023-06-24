module.exports = {
  root: true,
  extends: ["@project/node"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {},
};
