const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'group-focus',
      'active',
    ],
    borderWidth: ['responsive', 'last'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'group-focus',
      'focus-within',
      'last',
    ],
    padding: ['responsive', 'last'],
    margin: ['responsive', 'first', 'last'],
  },
  plugins: [
    plugin(({
      addComponents,
    }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
