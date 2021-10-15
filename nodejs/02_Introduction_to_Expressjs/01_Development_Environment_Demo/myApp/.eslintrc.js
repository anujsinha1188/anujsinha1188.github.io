module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    //"extends": "eslint:recommended",
    "extends": ["airbnb", "prettier", "plugin:node/recommended"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": ["error", {
            "endOfLine": "auto"
        }],
        "spaced-comment": "off",
        "no-console": "off",
        "consistent-return": "off",
        "func-names": "off",
        "object-shorthand": "off",
        "no-process-exit": "off",
        "no-param-reassign": "off",
        "no-return-await": "off",
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        "no-unused-vars": ["off", { "argsIgnorePattern": "req|res|next|val" }]
    }
};
