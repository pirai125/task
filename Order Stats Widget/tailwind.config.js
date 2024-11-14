/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00D632",
        red: "#FF3B30 ",
        gray: {
          1: "#8E8E93",
          2: "#F0F2F5",
        },
      },
    },
  },

  plugins: [],
};
