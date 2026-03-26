import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': {
          DEFAULT: '#6b0f1a',
          dark: '#3d0509',
          light: '#8b1a26',
        },
        'gold': {
          DEFAULT: '#c9943a',
          light: '#e8b86d',
        },
        'warm-white': '#fdf6ec',
        'warm-gray': '#c4a882',
        'sesame': '#f0d080',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
