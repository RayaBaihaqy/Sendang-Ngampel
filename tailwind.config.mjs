/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        heritage: {
          'dark-brown': '#2A1B14',
          'deep-brown': '#3B261B',
          'warm-brown': '#5A3A28',
          'light-brown': '#8A674F',
          'cream': '#E8DCC7',
          'warm-cream': '#F3EBDD',
          'paper': '#F8F2E7',
          'accent-green': '#3F5E4D',
          'gold-accent': '#C29B38',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
