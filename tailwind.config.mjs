/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit Variable", "sans-serif"],
        serif: ["Young Serif", "serif"],
      },
      keyframes: {
        "scale-slide-up": {
          "0%": {
            opacity: "0%",
            transform: "translateY(64px)",
          },
          "100%": {
            opacity: "100%",
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        "scale-slide-up": "scale-slide-up 0.6s ease-out 0.3s forwards",
      },
      backgroundImage: {
        stripes: `url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23fbf6f1' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
  plugins: [require("@tailwindcss/typography")],
}

