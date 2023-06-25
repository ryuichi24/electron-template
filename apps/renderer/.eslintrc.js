module.exports = {
  root: true,
  extends: ["@project/react"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["tsconfig.json"],
  },
  ignorePatterns: [
    ".eslintrc.js",
    "vite.config.ts",
    "tailwind.config.js",
    "postcss.config.js",
  ],
  rules: {},
};
