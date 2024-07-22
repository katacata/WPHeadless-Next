import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'SUNBURN': '#EE7A2F',
        'BROWN': '#B14906',
        'COCOA-BROWN': '#D4631A',
        'LIGHT-PEACH': '#FFE6D6',
        'PASTEL-ORANGE': '#FF9855',
        'PAPAYA': '#F3EBE6',
        'LAVENDER': '#EBEAF0',
        'DAWN-PINK': '#EBEBED',
        'MOUNTAIN-MIST': '#9491A3',
        'MID-GREY': '#5B586A',
        'LIVER': '#4C4C4C',
        'BURLY-WOOD': '#DFB296',
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
export default config
