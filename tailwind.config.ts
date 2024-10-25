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
        'purple-blue': {
          100: '#F5F0FF',
          200: '#EBE0FF',
          300: '#D6BFFF',
          400: '#B88EFF',
          500: '#9966FF',
          600: '#7A3DFF',
          700: '#5C1ACC',
          800: '#3D1199',
          900: '#1F0B66'
        },
        'sunglow': {
          100: '#FFF9F0',
          200: '#FFF3E0',
          300: '#FFE7BF',
          400: '#FFD580',
          500: '#FFC440',
          600: '#FFB300',
          700: '#CC8800',
          800: '#996600',
          900: '#664400'
        },
        'heisenberg-blue': {
          100: '#F0FCFF',
          200: '#E0F9FF',
          300: '#BFF3FF',
          400: '#80E5FF',
          500: '#40D9FF',
          600: '#00CCFF',
          700: '#0099CC',
          800: '#007399',
          900: '#004C66'
        },
        'happy-orange': {
          100: '#FFF5F0',
          600: '#E67E22',
          900: '#5C3319'
        },
        'electric-green': {
          100: '#F0FFF4',
          600: '#48C774',
          900: '#1B4D3E'
        },
        'red-power': {
          100: '#FFF0F0',
          600: '#E74C3C',
          900: '#5C1F1A'
        }
      },
      boxShadow: {
        '3xl': '0 10px 60px -16px rgba(0, 0, 0, 0.05)'

      }
    },
  },
  plugins: [],
}
