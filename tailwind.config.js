/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ps2p: ['var(--font-ps2p)'],
      },
    },
  },
  plugins: [],
};
