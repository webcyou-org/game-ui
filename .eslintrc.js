module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended'
    ],
    plugins: ['prettier'],
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
        'comma-dangle': ['error', 'never'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/no-v-html': 'off'
    }
}
