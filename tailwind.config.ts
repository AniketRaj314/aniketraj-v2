import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import scrollbar from 'tailwind-scrollbar'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Ndot55', 'monospace'],
        body: ['var(--font-space)', 'sans-serif'],
      },
      backgroundColor: {
        background: '#0a0a0a',
      },
      textColor: {
        foreground: '#ededed',
        muted: '#c7c7c7',
      },
      colors: {
        accent: '#ff3f81',
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '20%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
      },
    },
  },
  plugins: [typography, scrollbar],
}
export default config
