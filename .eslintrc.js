module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2017
    },
    rules: {
        "no-shadow": "off",
        "no-param-reassign": "off",
        "indent": "off",
        "space-before-function-paren": "off",
        "quotes": "off",
        "comma-dangle": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "arrow-parens": "off",
        "dot-notation": "off",
        "no-trailing-spaces": "off",
        "semi": [
            2,
            "always"
        ]
    }
};
