module.exports = {
  ignorePatterns: ["node_modules/"],

  rules: {
    'vue/component-tags-order': ['error', {
      'order': ['template', 'script', 'style']
    }],
    'linebreak-style': ['error', 'unix'],
    'no-trailing-spaces': "off",
  },

  root: true,

  env: {
    node: true
  },

  extends: [
    //'eslint:recommended',
    //'plugin:vue/recommended',
    //'plugin:vue/essential',
    "airbnb-base",
    'plugin:vue/vue3-recommended'
    //'@vue/standard'
  ],

  parserOptions: {
    ecmaVersion: 2020
  }
}
