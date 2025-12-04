import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(200 100% 45%)",
          dark: "hsl(200 100% 35%)",
          light: "hsl(210 40% 98%)",
        },
        medical: {
          blue: "hsl(200 100% 45%)",
          green: "hsl(160 60% 50%)",
        },
        success: "hsl(160 60% 50%)",
        danger: "hsl(0 84.2% 60.2%)",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, hsl(200 100% 45%), hsl(160 60% 50%))",
        "hero-gradient": "linear-gradient(135deg, hsl(200 100% 45% / 0.1), hsl(160 60% 50% / 0.1))",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
