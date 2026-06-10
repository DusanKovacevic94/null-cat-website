import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050708",
        coal: "#090d0f",
        pine: {
          300: "#30d4b4",
          400: "#13b99e",
          500: "#07977e",
          700: "#075f52",
        },
        frost: "#f4f7f8",
        steel: "#9aa7ad",
      },
      boxShadow: {
        glow: "0 0 48px rgba(19, 185, 158, 0.2)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
