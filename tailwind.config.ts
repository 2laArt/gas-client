import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const constants = {
  colors: {
    white: '#fff',
    'bg-white': '#fafbfc',
    'ice-blue': '#ecf0f3',
    aqua: '#d1d9e6',
    black: '#2d2d2d',
    dark: '#272727',
    blue: '#1c629e',
    cyan: '#04b19e',
    yellow: '#ffc540',
    tomato: '#E0595D',
    gray: '#7d7c7c',
    'dark-gray': '#3f3f3f',
    'light-gray': '#d4d4d4',
    'skeleton-200': 'rgba(130, 130, 130, 0.2)',
    'skeleton-300': 'rgba(130, 130, 130, 0.3)',
  },
}
const config: Config = {
  darkMode: ['class', "[class~='dark']"],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants.colors,
    },
    extend: {
      screens: {
        xxs: ' 375px',
        xs: '518px',
      },
      fontSize: {
        xxs: '0.65rem',
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        xl: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem',
      },
      keyframes: {
        animationOpacity: {
          from: { opacity: '0.2' },
          to: { opacity: '1' },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
      transitionProperty: {
        bg: 'background .2s linear',
      },
      transitionDuration: {
        '1.25s': '1.25s',
      },
      backgroundImage: {
        'main-texture': "url('/images/texture.jpg')",
        skeleton: `linear-gradient(to right, ${constants.colors['skeleton-200']} 8%, ${constants.colors['skeleton-300']} 18%,${constants.colors['skeleton-300']} 33%)`,
      },
      boxShadow: {
        circle: `inset 8px 8px 12px ${constants.colors.aqua}, inset -8px -8px 12px ${constants.colors.white}`,
        'circle-dark': `inset 8px 8px 12px ${constants.colors['dark-gray']}, inset -8px -8px 12px ${constants.colors.dark}`,
        form: `6px 6px 10px ${constants.colors.aqua}, -6px -6px 10px ${constants.colors.white}`,
        'form-dark': `6px 6px 10px ${constants.colors['dark-gray']}, -6px -6px 10px ${constants.colors.dark}`,
        section:
          '0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 8px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
