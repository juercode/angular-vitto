let plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      vitt: ['Open Sans', 'sans-serif'],
    },
    extend: {
      screens: {
        'xs': '400px'
      },
      fontSize: {
        '12': '0.75rem',
        '13': '0.8125rem',
        '14': '0.875rem',
        '16': '1rem',
        '18': '1.125rem',
        '24': '1.5rem',
        '32': '2rem'
      },
      width: {
        'asset-button': '170px'
      },
      minWidth: {
        'multi-select': '154px',
      },
      maxHeight: {
        'simple-select': '18.75rem',
      },
      colors: {
        vittDarkishBlue: '#04398e',
        vittPaleGray: '#f8f9fb',
        vittLightPeriwinkle: '#dde2ed',
        vittNavyBlue: '#00205c',
        vittNavyBlueOpaque: 'rgba(0, 32, 92, 0.5)',
        vittYellowTan: '#ffe56b',
        vittSalmon: '#ee7474',
        vittPaleTeal: '#80C7B5',
        vittCyan: '#0091ff',
        vittGold: '#f7b500',
        vittOrange: '#fa6400',
        vittPink: '#E2BADD',
        vittSoftBlue: '#7AA0D7',
        vittGradientBaseGray: '#F0F3F7',
        'vittAlertOrange-100': '#FFA654',
        'vittAlertOrange-20': '#FFEEDE'
      },
      borderRadius: {
        'vitt-4': '4px',
        'vitt-5': '5px',
        'vitt-15': '15px',
      },
      boxShadow: {
        vitt: '1px 1px 10px rgba(0, 32, 92, 0.15)',
      },
      backgroundImage: theme => ({
        'gradient-vitt': `linear-gradient(90deg, ${theme('colors.vittDarkishBlue')} -3.33%, ${theme('colors.vittNavyBlue')} 100%)`,
        'gradient-gray-vitt': `linear-gradient(90deg, ${theme('colors.vittGradientBaseGray')} -3.33%, ${theme('colors.vittLightPeriwinkle')} 100%)`,
      }),
      inset: {
        '50': '50px',
        'full': 'calc(100% + 5px)'
      },
      outline: theme => ({
        vittSoftBlue: theme('colors.vittSoftBlue')
      }),
    },
  },
  variants: {
    extend: {},
  },
  target: [
    'relaxed',
    {
      space: 'ie11'
    }
  ],
  plugins: [
    plugin(function ({addBase, theme}) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? {[`--color${colorGroup}-${colorKey}`]: value}
              : extractColorVars(value, `-${colorKey}`);

          return {...vars, ...newVars};
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    }),
  ],
};

