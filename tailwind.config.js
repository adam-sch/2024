/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Roboto Slab', 'serif']
      },
      keyframes: {
        bounceInFade: {
          '0%': { transform: 'translateY(25px)', opacity: 0},
          '75%': { transform: 'translateY(-8px)', opacity: 0.6 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
      animation: {
        bounceInFade: 'bounceInFade 0.35s ease forwards',
      },
      colors: {
        'custom-light-blue': '#0096d0',
        'custom-dark-blue': '#032633',
        'custom-dark-slate': '#1c2022'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
          {
            "animation-delay": (value) => {
              return {
                "animation-delay": value,
              };
            },
          },
          {
            values: theme("transitionDelay"),
          }
      );
    }),
  ],
}