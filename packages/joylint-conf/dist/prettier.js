module.exports = {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    proseWrap: 'never',
    endOfLine: 'lf',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
};
