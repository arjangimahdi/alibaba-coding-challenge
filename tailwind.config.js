/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                element_scheme_text: "var(--text)",
                element_scheme_background: "var(--background)",
                body_scheme_background: "var(--body-background)",
                element_scheme_placeholder: "var(--placeholder-text)",
            },
        },
    },
    plugins: [],
};
