/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                sidebar: '#0f172a', // Dark sidebar
                primary: '#1e40af', // Blue
                secondary: '#f472b6', // Pinkish
            }
        },
    },
    plugins: [],
}
