import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

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
    },
  },
  plugins: [typography],
}
export default config
