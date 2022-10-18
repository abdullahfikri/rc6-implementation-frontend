/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgba(124,115,115,0.13)',
                secondary: 'rgba(208,208,208,0.19)',
                inputBg: '#D9D9D9',
                inputText: '#605C5C',
                buttonBg: '#342A2A',
            },
        },
    },
    plugins: [],
};
