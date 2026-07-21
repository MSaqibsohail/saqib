/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        flutter: {
          blue: "#02569B",
          secondary: "#13B9FD",
          accent: "#54C5F8",
        },
        dark: {
          bg: "#0F172A",
          card: "rgba(15, 23, 42, 0.45)",
          border: "rgba(255, 255, 255, 0.08)",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        'blob': "blob 7s infinite",
        'float-slow': "float 6s ease-in-out infinite",
        'float-medium': "float 4s ease-in-out infinite",
        'float-fast': "float 3s ease-in-out infinite",
        'pulse-glow': "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },
        }
      }
    },
  },
  plugins: [],
}
