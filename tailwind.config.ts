import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'noble-black': {
          100: '#E8E9E9',
          200: '#CDCECF',
          300: '#9B9C9E',
          400: '#686B6E',
          500: '#363A3D',
          600: '#1A1D21',
          700: '#131619',
          800: '#0D0F10',
          900: '#060708'
        },
        'stem-green': {
          100: '#F7FDF4',
          200: '#EDFBE6',
          300: '#DBF7CD',
          400: '#C8F4B4',
          500: '#B6F09C',
          600: '#9AD37F',
          700: '#739F5F',
          800: '#4D6A3F',
          900: '#263520'
        },
        'day-blue': {
          100: '#EBEDFC',
          200: '#D2D8F9',
          300: '#A6B0F2',
          400: '#7989EC',
          500: '#4D62E5',
          600: '#3045C9',
          700: '#243497',
          800: '#182364',
          900: '#0C1132'
        },
      }
    },
  },
  plugins: [],
}
