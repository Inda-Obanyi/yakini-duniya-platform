import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#ebefff',
          200: '#d5ddff',
          300: '#aebdff',
          400: '#7d8df7',
          500: '#5867ea',
          600: '#434fcd',
          700: '#3740a5',
          800: '#2c367f',
          900: '#262d69',
        },
      },
      boxShadow: {
        glow: '0 0 35px rgba(88, 103, 234, 0.38)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
