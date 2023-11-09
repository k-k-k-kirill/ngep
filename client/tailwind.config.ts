import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    margin: {
      "1": "10px",
      "2": "20px",
      "3": "30px",
      "4": "40px",
      "12": "120px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
