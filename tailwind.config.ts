import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#08D9D6",
        themeBlack: "#252A34",
        secondary: "#FF2E63",
        neutral: "#EAEAEA",
        cream: "#F9F5F6",
      },
      fontFamily: {
        roboto: ["'Roboto', sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
