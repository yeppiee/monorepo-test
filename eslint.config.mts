// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    "ignores": ["**/assets/**/*"],
  },
  {
    "files": ["**/tailwind.config.js"],
    "rules": {
    }
  },
  {
    "files": ["**/postcss.config.cjs"],
    "languageOptions": {
      "globals": {
        "require": "readonly",
        "module": "readonly",
        "exports": "readonly",
        "process": "readonly",
        "console": "readonly",
      }
    }
  }
);