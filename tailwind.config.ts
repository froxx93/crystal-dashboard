import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#60BFFF",
        secondary: "#7717A7",
        highlight: "#308BFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
