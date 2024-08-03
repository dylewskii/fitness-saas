import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "infinite-scroll-bar": "scroll 40s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      animationPlayState: ["hover", "group-hover"],
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ addUtilities }) => {
      addUtilities({
        ".pause": {
          "animation-play-state": "paused",
        },
      });
    }),
  ],
} satisfies Config;
