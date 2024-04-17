/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit Variable", "sans-serif"],
        serif: ["Young Serif", "serif"],
      },
    },
    colors: {
      white: "#fff",
      nutmeg: "hsl(14, 45%, 36%)",
      "dark-raspberry": "hsl(332, 51%, 32%)",
      "rose-white": "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      "light-gray": "hsl(30, 18%, 87%)",
      "wenge-brown": "hsl(30, 10%, 34%)",
      "dark-charcoal": "hsl(24, 5%, 18%)",
    },
  },
  plugins: [],
}

