module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules: {
        indentation: 4,
        'string-quotes': 'double',
        'no-descending-specificity': null,
        'no-empty-source': null
    }
}
