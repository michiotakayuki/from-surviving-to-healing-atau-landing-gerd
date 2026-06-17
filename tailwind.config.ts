import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF8",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#1A1613",
          soft: "#494139",
        },
        muted: "#857B70",
        line: "rgba(26, 22, 19, 0.08)",
        accent: {
          DEFAULT: "#B85C38",
          hover: "#A24E2E",
          soft: "#F4EBE4",
          ring: "rgba(184, 92, 56, 0.28)",
        },
        sage: "#5C6E5A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "1120px",
        prose: "640px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,22,19,0.04), 0 8px 24px rgba(26,22,19,0.06)",
        lift: "0 2px 4px rgba(26,22,19,0.04), 0 18px 48px rgba(26,22,19,0.10)",
        glow: "0 8px 30px rgba(184,92,56,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
