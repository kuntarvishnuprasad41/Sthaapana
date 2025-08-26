// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"], // adjust paths
    theme: {
        extend: {
            backgroundImage: {
                "hero-pattern": "url('/bg.svg')",
            },
        },
    },
    plugins: [],
};
