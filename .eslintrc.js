module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "eslint:recommended", "airbnb", "prettier", "plugin:prettier/recommended", "airbnb/hooks"],
    parserOptions: {
        ecmaFeatures: {
            globalReturn: false,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    ignorePatterns: ["public", "config", "node_modules", "build", "dist"],
    plugins: ["jsx-a11y", "react-hooks", "react"],
    rules: {
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "": "never",
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
        "prettier/prettier": [
            "error",
            {
                singleQuote: false,
                endOfLine: "auto",
                useTabs: false,
            },
        ],
        "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
        eqeqeq: ["error", "always", { null: "ignore" }],
        "import/prefer-default-export": "off",
        "import/no-unresolved": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "no-console": "off",
        "react/react-in-jsx-scope": "off",
        "no-underscore-dangle": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-props-no-spreading": "off",
        "object-curly-newline": "off",
        "linebreak-style": "off",
        "no-param-reassign": "off",
        "no-multiple-empty-lines": "off",
        "react/jsx-indent": "off",
        "arrow-parens": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-no-useless-fragment": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "react/function-component-definition": "off",
        "react/button-has-type": "off",
        "operator-assignment": "off",
        "no-plusplus": "off",
        "react/require-default-props": "off",
        "react/prop-types": "off",
        "react/no-this-in-sfc": "off",
        "react/destructuring-assignment": [0, "always"],
        "consistent-return": "off",
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    },
};
