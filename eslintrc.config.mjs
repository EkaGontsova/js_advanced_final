import globals from "globals";
import pluginJs from "@eslint/js";

export default {
  languageOptions: {
    globals: { ...globals.browser, ...globals.node, ...globals.jest },
    parserOptions: {
      ecmaVersion: 2020, // Или 2021, в зависимости от ваших нужд
      sourceType: "module", // Позволяет использовать import/export
    },
  },
  extends: [pluginJs.configs.recommended],
  rules: {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "indent": ["error", 2],
    "semi": ["error", "always"],
  },
  settings: {
    react: {
      version: "detect", // Автоматически определяет версию React
    },
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js'], 
      rules: {
        "no-undef": "off", 
      },
    },
  ],
};
