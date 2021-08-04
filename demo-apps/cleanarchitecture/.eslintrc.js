module.exports = {
    extends: 'standard',
    env: {
        jest: true,
        node: true,
        mongo: true,
    },
    plugins: ['prettier'],
    extends: ['prettier', 'airbnb-base'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
