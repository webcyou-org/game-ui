module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: [],
    // add your custom rules here
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120
            }
        ],
        'dot-notation': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'comma-dangle': ['error', 'never']
    }
}
