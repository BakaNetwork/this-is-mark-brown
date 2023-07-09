/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        youtube: {
          darkbg: "#0f0f0f",
        },
      },
      fontFamily: {
        pixel: ["pixel"],
      },
    },
  },
  plugins: [],
};
