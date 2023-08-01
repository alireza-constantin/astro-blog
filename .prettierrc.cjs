/** @type {import("@types/prettier").Options} */
module.exports = {
    printWidth: 100,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    useTabs: true,
    plugins: [
        require("prettier-plugin-astro"),
    ],
    pluginSearchDirs: false,
    overrides: [
        {
            files: "**/*astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
