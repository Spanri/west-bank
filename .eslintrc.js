module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  rules: {
    "semi": [2, "always",],
    "no-extra-semi": "error",
    "no-console": "off",
    "comma-dangle": [2, "always",],
    "space-before-function-paren": [2, "never",],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
