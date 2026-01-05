/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable class-based dark mode
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'mono': ['IBM Plex Mono', 'Roboto Mono', 'Courier New', 'monospace'],
            },
            colors: {
                industrial: {
                    blue: '#1E3A8A',
                    accent: '#3B82F6',
                    light: '#60A5FA',
                },
            },
        },
    },
    plugins: [],
}
