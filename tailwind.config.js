/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "#ff2bd6",
          soft: "#ff6ec7",
          glow: "rgba(255,43,214,.45)",
        },
        blood: "#e6344b",
        gold: "#d4af37",
        abyss: "#0d0510",
        bone: "#ffe9f7",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%,100%": { textShadow: "0 0 12px rgba(255,43,214,.5)" },
          "50%": { textShadow: "0 0 34px rgba(255,43,214,.95)" },
        },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
