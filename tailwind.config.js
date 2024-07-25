/* eslint-disable no-undef */
// tailwind.config.js
// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'auto-scroll': 'auto-scroll 60s linear infinite',
            },
            keyframes: {
                'auto-scroll': {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-100%)' },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)', // Adjust the float height here
                    },
                },
            },
        },
    },
    plugins: [],
}
