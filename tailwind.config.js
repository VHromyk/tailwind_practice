/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1.25rem'
        },
        screens: {
            sm: '375px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            blue: '#1fb6ff',
            pink: '#ff49db',
            orange: '#ff7849',
            green: '#13ce66',
            'gray-dark': '#273444',
            'gray-text': '#6B7280',
            'dark-gray-text': '#111827',
            'gray-border': '#E5E7EB',
        },
        fontFamily: {
            sans: ['Satoshi', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {},
    },
    plugins: [],
};
