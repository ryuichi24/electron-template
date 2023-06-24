const config = {
  extends: [
    "@project/base",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // Since React 17 and typescript 4.1, no need to add React in scope
    "react/react-in-jsx-scope": ["off"],
    "@typescript-eslint/ban-types": ["warn"],
    "no-empty-pattern": ["warn"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
