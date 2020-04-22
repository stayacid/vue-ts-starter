module.exports = {
  ignorePatterns: ["node_modules/"],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "comma-dangle": ["error", "always-multiline"],
    "no-trailing-spaces": "off",
    "space-before-function-paren": "off"
  },

  root: true,

  env: {
    node: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    ecmaVersion: 2020
  }
}
