module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  plugins: ['prettier', 'eslint-plugin-prettier'],
  // add your custom rules here
  rules: {
    'no-plusplus': 'off',
    'prettier/prettier': 'error',
    'space-in-parens': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
      },
    ],
    semi: ['error', 'always'],
    'no-var': 2,
    quotes: 'off',
    'comma-dangle': [
      'error',
      {
        always,
      },
    ],
  },
};
