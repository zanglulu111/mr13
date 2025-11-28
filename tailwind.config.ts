import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // ★★★ 重点修改：连接 layout.tsx 定义的字体变量 ★★★
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        'lux-black': '#080808',
        'lux-charcoal': '#141414',
        'lux-gold': '#D4AF37',
        'lux-gold-dim': '#8A7640',
        'lux-gold-light': '#F8E7B0',
        'lux-white': '#EAEAEA',
        'lux-gray': '#888888',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F8E7B0 50%, #D4AF37 100%)',
        'subtle-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, rgba(0,0,0,0) 70%)',
      }
    },
  },
  plugins: [],
};
export default config;