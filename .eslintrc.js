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
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],

  parserOptions: {
    "ecmaFeatures": { "legacyDecorators": true },
    "parser": "babel-eslint",
  }
}
