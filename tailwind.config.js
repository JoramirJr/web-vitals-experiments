/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        'header': "6rem"
      },
      backgroundImage: {
        'slider-item-mobile-1': "url('/mobile-image-hero-1.jpg')",
        'slider-item-desktop-1': "url('/desktop-image-hero-1.jpg')",
        'slider-item-mobile-2': "url('/mobile-image-hero-2.jpg')",
        'slider-item-desktop-2': "url('/desktop-image-hero-2.jpg')",
        'slider-item-mobile-3': "url('/mobile-image-hero-3.jpg')",
        'slider-item-desktop-3': "url('/desktop-image-hero-3.jpg')",
      },
      keyframes: {
        ['slide-left']: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        ['slide-right']: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        ['slide-left']: 'slide-left 3s forwards',
        ['slide-right']: 'slide-right 3s forwards'
      }
    }
  },
  plugins: []
};

