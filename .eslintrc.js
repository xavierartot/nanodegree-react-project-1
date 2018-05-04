// "off" or 0 - turn the rule off
// "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
// "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  //extends: 'eslint:recommended',
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-uses-vars': 1,
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    semi: [
      'error',
      'always',
    ],
    'import/no-named-as-default': 0,
    'react/jsx-indent': [1, 2], // warning & 2 spaces
    'indent': [1, 2]
    'react/prefer-stateless-function': 2,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'no-unused-vars': 1,
    'jsx-a11y/anchor-is-valid': 1,
    quotes: [2, 'single'],
    'class-methods-use-this': 0,
    'no-console': 2,
    'no-return-assign': 1,
    'react/no-unused-state': 1,
    'react/jsx-key': 2,
    "react/jsx-no-literals": 1,
    "import/no-unresolved": 2,
  },
};
