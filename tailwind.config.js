/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#0E8784",
        "dark-gray": "#333D4B",
        orange: "#FDD6BA",
        cream: "#FEFCF7",
        gray: "#83888F",
      },
      spacing: { container: "var(--container-w)" },
      cx: "calc((100% - var(--container-w)) / 2)",
    },
    screens: {
      ss: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
    },
    fontFamily: {
      barlow: ["Barlow", "sans serif"],
      fraunces: ["Fraunces", 'serif'],
    },
  },
  plugins: [],
};
