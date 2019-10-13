module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": 2,
      "multiline": {
        "max": 2,
        "allowFirstLine": false,
      },
    },],
    "vue/component-name-in-template-casing": ["error", "PascalCase",],
    semi: [2, "always",],
    "no-extra-semi": "warn",
    "no-console": "off",
    "comma-dangle": [2, "always",],
    "space-before-function-paren": [2, "never",],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
