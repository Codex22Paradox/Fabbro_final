export default {
    printWidth: 1000,
    tabWidth: 4,

    plugins: [(await import("prettier-plugin-tailwindcss")).default],
};
