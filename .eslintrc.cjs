module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    tsConfigRootDir: __dirname,
    project: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-refresh'],
  rules: {
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    camelcase: 'warn',
    quotes: ['warn', 'single'],
    arrowBodyStyle: 'off',
    preferArrowStyleCallback: 'off',
  },
};
