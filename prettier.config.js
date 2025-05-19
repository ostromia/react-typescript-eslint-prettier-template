/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    useTabs: false,
    tabWidth: 4,
    singleQuote: false,
    trailingComma: "none",
    printWidth: 100,
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: [
        "^(react|react-dom|react-dom/(client|server))$",
        "<THIRD_PARTY_MODULES>",
        "^[./]"
    ],
    importOrderSeparation: true
};

export default config;
