module.exports = {
    'parserOptions': {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    'env': {
        'browser': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'arrow-parens': 1,
        'arrow-spacing': 1,
        'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
        'camelcase': 1,
        'comma-dangle': 1,
        'comma-spacing': [1, { 'before': false, 'after': true }],
        'comma-style': [1, 'last'],
        'computed-property-spacing': 1,
        'curly': 1,
        'eol-last': 1,
        'eqeqeq': 2,
        'indent': [2, 4, { 'SwitchCase': 1 }],
        'key-spacing': 1,
        'no-alert': 2,
        'no-console': 1,
        'no-multi-spaces': 1,
        'no-trailing-spaces': 1,
        'no-unused-vars': 1,
        'no-var': 2,
        'object-curly-spacing': [1, 'always'],
        'prefer-spread': 1,
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'space-before-blocks': 1
    }
};
