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
        cream: { DEFAULT: "#f5f2ea", deep: "#ebe8df", sand: "#d9d4c5" },
        ink: { DEFAULT: "#102019", soft: "#5f6a62" },
        forest: { DEFAULT: "#13241c", deep: "#0e1c15", night: "#0b1712" },
        gold: { DEFAULT: "#b59a63", soft: "#d4c291", deep: "#85703f" },
        line: "rgba(16,32,25,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        page: "1360px",
      },
      transitionTimingFunction: {
        aura: "cubic-bezier(.16,.84,.28,1)",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        markIn: {
          to: { opacity: "1" },
        },
      },
      animation: {
        kenburns: "kenburns 16s cubic-bezier(.16,.84,.28,1) forwards",
        "kenburns-slow": "kenburns 22s cubic-bezier(.16,.84,.28,1) forwards",
        "pulse-dot": "pulse-dot 1.8s infinite",
      },
      boxShadow: {
        soft: "0 22px 44px -22px rgba(16,32,25,0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
