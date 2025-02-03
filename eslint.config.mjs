import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import playwrightPlugin from 'eslint-plugin-playwright';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      playwright: playwrightPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...playwrightPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-wait-for-selector': 'error',
      'playwright/no-pause': 'off',
      'prettier/prettier': 'warn'    
    },
  },
];
