import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        loop: "loop 5s linear infinite",
      },
      keyframes: {
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50%))" },
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: "smooth",
        },
      });
    },
  ],
} satisfies Config;
