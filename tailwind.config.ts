import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        page_bg: 'linear-gradient(0deg, #141414 0%, #1F1D1D 100%)',
        card_bg: 'linear-gradient(0.36deg, rgba(28, 27, 27, 0.9) 5.23%, rgba(46, 46, 46, 0) 98.38%)',
        card_shadow: 'box-shadow: 2px 2px 24px 0px #8D50081F',
      },
      colors: {
        white: '#fff',
        orange: '#F28A0F',
        text_white: '#E6E6E6',
        text_base: '#F0F0F0',
        grey: '#B8B8B8',
      },
      boxShadow: {
        card_shadow: '2px 2px 24px 0px #8D50081F',
      },
    },
  },
  plugins: [],
};
export default config;
