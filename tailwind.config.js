/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        panel: "#131316",
        panel2: "#1A1A1F",
        line: "#26262C",
        cream: "#F4F2EC",
        muted: "#A7A7B0",
        accent: "#C8F04A",
        accentink: "#0A0A0B",
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Menlo", "monospace"],
      },
      borderRadius: {
        card: "1.25rem",
      },
    },
  },
  plugins: [],
};
