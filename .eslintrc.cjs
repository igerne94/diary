module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // // add semi colon
    // "semi": ["error", "always", {
    //   "omitLastInOneLineBlock": false
    // }],
    // removes last comma
    "comma-dangle": ["error", "never"],
    // add quotes ' '
    "quotes": ["error", "single"],
    "react/prop-types": [0]
  },
}
