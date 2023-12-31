/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#25a15d",
        Tertiary: "#778899"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/dark-wavy.jpg')"
      }
    },
  },
  plugins: [],
}

