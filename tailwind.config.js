module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'text-primary': 'var(--theme-pink-dark)',
        'text-secondary': 'var(--theme-purple-light)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        'accent-5': 'var(--accent-5)',
        'accent-6': 'var(--accent-6)',
        'accent-7': 'var(--accent-7)',
        'accent-8': 'var(--accent-8)',
        'accent-9': 'var(--accent-9)'
      },
      boxShadow: {
        'outline-primary': '0 0 0 2px var(--primary)',
        'outline-secondary': '0 0 0 2px var(--secondary)',
        'outline-text-secondary': '0 0 0 2px var(--text-secondary)'
      },
      textShadow: {
        'main' : 'text-shadow: -8px -8px 0 var(--text-secondary)'
      },
      scale: {
        '200': '2',
        '450': '4.5',
        '650': '6.5'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'scale(1, 0)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        waveSm: {
          '0%': { transform: 'scale(1, 0)' },
          '100%': { transform: 'scale(4.5, 6.5)' },
        },
        waveXsm: {
          '0%': { transform: 'scale(1, 0)' },
          '100%': { transform: 'scale(1.5, 1.5)' },
        }
      },
      animation: {
        wave: 'wave 1s ease-in-out 1',
        waveSm: 'waveSm 1s ease-in-out 1',
        waveXsm: 'waveXsm 1s ease-in-out 1'
      },
    },
    screens: {
      'xsm': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      width: ['last'],
    }
  },
  plugins: [],
}
