/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: { DEFAULT: "#025464" },
                secondary: { DEFAULT: "#E57C23" },
            },
        },
    },
    plugins: [],
};
