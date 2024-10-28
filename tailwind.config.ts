import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-background': '#EBECF0',
        'secondary-background': '#959391',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'navbar-container': '-6px -7px 11px 0px #FFFFFFD6, 8px 7px 21px 0px #00000026',
        'navbar-link': '5px 5px 2px 0px #0000001F inset, -4px -4px 4px 0px #FFFFFF inset',
        'cta-button': '6px 5px 10px 3px rgba(54, 54, 54, 0.24), -8px -8px 10px 0px rgba(255, 255, 255, 1)',
        'hero-circle-outer':
          '-3px -10px 10px 0px rgba(255, 255, 255, 1) inset, 3px 10px 10px 0px rgba(0, 0, 0, 0.15) inset',
        'hero-circle-inner': '-3px -10px 10px 0px rgba(255, 255, 255, 1), 3px 10px 10px 0px rgba(0, 0, 0, 0.15)',
        'hero-icon-circle': '0px 4px 11px 0px rgba(0, 0, 0, 0.25), -6px -5px 12px 0px rgba(255, 255, 255, 1)',
      },
      translate: {
        desktop: '-265px',
        mobile: '-150px',
      },
    },
  },
  plugins: [],
};
export default config;
