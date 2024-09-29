import {
  scrollbarColor,
  scrollbarGutter,
  scrollbarWidth,
} from "tailwind-scrollbar-utilities";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [scrollbarGutter(), scrollbarWidth(), scrollbarColor()],
};
export default config;
