/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        noir1: '#06141B',
        noir2: '#253745',
        bleu1: '#9BA8AB',
        bleu2: '#CCD0CF',
        blanc: '#E6E8E7',
      },
    },
  },
  plugins: [],
}