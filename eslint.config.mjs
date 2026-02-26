import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import nextPlugin from "@next/eslint-plugin-next"
import unusedImports from "eslint-plugin-unused-imports"

export default [
    { ignores: ["node_modules/**", ".next/**", "dist/**", "out/**", "coverage/**"] },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "@next/next": nextPlugin,
            "unused-imports": unusedImports,
        },
        settings: {
            react: { version: "detect" },
            next: { rootDir: true },
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,

            "unused-imports/no-unused-imports": "warn",
            "unused-imports/no-unused-vars": [
                "warn",
                {
                    vars: "all",
                    varsIgnorePattern: "^_",
                    args: "after-used",
                    argsIgnorePattern: "^_",
                },
            ],

            "@typescript-eslint/no-explicit-any": "off",
        },
    },
]