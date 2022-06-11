module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint', 'sort-imports-es6-autofix'],
  ignorePatterns: ['**/node_modules/**'],
  rules: {
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    'arrow-body-style': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': 'error',
    'no-void': ['error', { allowAsStatement: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  },
};
