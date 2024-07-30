import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          content: "hsl(var(--primary-content))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          content: "hsl(var(--secondary-content))",
          dark: "hsl(var(--secondary-dark))",
          light: "hsl(var(--secondary-light))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        copy: {
          DEFAULT: "hsl(var(--copy))",
          light: "hsl(var(--copy-light))",
          lighter: "hsl(var(--copy-lighter))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          content: "hsl(var(--success-content))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          content: "hsl(var(--warning-content))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          content: "hsl(var(--error-content))",
        },
      },
      borderRadius: {
        "4xl": "3rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
