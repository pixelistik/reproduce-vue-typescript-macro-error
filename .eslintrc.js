module.exports = {
  parser: "vue-eslint-parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    parser: "@typescript-eslint/parser",
  },
  rules: {
    curly: ["error", "multi-line", "consistent"],
    "@typescript-eslint/explicit-function-return-type": [0],
    "@typescript-eslint/no-explicit-any": [0],
    "ordered-imports": [0],
    "object-literal-sort-keys": [0],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true, // Ignore comments when checking line length
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "new-parens": 1,
    "no-bitwise": 1,
    "no-cond-assign": 1,
    "no-trailing-spaces": 0,
    "eol-last": 1,
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    semi: 1,
    "no-var": 0,
    "vue/no-v-html": [0],
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        "max-len": [1, 150],
      },
    },
  ],
};
