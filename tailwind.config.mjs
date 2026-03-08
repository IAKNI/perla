/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F6F1EB',
          'warm-white': '#FDFBF8',
          taupe: '#8B7D6B',
          'light-taupe': '#C4B5A0',
          sage: '#7A8B6F',
          'light-sage': '#D4DBC8',
          dark: '#2A2622',
          'warm-gray': '#6B6560',
          accent: '#B8A08A',
          border: '#E8E0D6',
        },
      },
      fontFamily: {
        blackletter: ['"UnifrakturMaguntia"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
