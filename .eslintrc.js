module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['prettier', 'unused-imports'],
  extends: [
    'react-app',
    'eslint:recommended',
    'prettier/prettier',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['src/setup/locales/definedMessages/messages.ts'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'warn',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  globals: {
    JSX: true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'typescript',
        endOfLine: 'auto',
      },
    ],
    'no-param-reassign': 0,
    'no-console': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-trailing-spaces': 1,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    'consistent-return': 0,
    'import/extensions': 0,
    'import/no-duplicates': 0,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-bracket-location': [
      2,
      {
        nonEmpty: 'after-props',
        selfClosing: 'tag-aligned',
      },
    ],
    'no-unexpected-multiline': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'no-case-declarations': 0,
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-first-prop-new-line': 2,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'no-multi-spaces': 'error',
    'no-extra-semi': 'error',
    'keyword-spacing': 'error',
    'no-sparse-arrays': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-const': 'error',
    'comma-dangle': ['error', 'always-multiline'],

    indent: 0,
  },
};
