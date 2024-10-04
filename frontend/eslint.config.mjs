import path from "node:path";
import { fileURLToPath } from "node:url";

// import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      "**/node_modules/",
      "**/.vscode/",
      "**/.husky/",
      "**/generated/",
      "**/.*/",
      "**/__tests__",
      "**/.next",
      "**/.js"
    ]
  },
  ...compat.extends(
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/typescript"
  ),
  {
    plugins: {
      react,
      import: _import,
      "@typescript-eslint": typescriptEslint,
      "react-hooks": reactHooks,
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          printWidth: 90,
          tabWidth: 2,
          semi: true,
          trailingComma: "none",
          bracketSpacing: true,
          jsxBracketSameLine: false,
          arrowParens: "always",
          offsetTernaryExpressions: false
        }
      ],
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      indent: [
        0,
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: false,
          offsetTernaryExpressions: false,
          ignoreComments: true,
          ObjectExpression: 1
        }
      ],

      "linebreak-style": [0, "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "multiline-ternary": 0,
      "react/display-name": 0,
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,

      "max-len": [
        "error",
        {
          code: 150,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreRegExpLiterals: true,
          ignoreComments: true
        }
      ],

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],

          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before"
            }
          ],

          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true
          }
        }
      ]
    }
  }
];
