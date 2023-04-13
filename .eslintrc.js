/**
 * ============================================================================
 * @GovernorAuthority
 * ============================================================================
 */

module.exports = {
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'sort-keys-fix', 'react'],
  root: true,
  rules: {
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-shadow': 'warn',
    'prettier/prettier': 'off',
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': 'error',
  },
}
