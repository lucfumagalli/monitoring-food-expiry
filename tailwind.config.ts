import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        tlight: {
          "primary": "#81955B",
          "secondary": "#A5B684",
          "accent": "#D3B17D",
          "neutral": "#f3f4f6",
          "base-100": "#f5f5f4",
          "info": "#79A4D4",
          "success": "#6EBE97",
          "warning": "#E7A76F",
          "error": "#D64D4D",
        },
        tdark: {
          "primary": "#81955B",
          "secondary": "#A5B684",
          "accent": "#D3B17D",
          "neutral": "#4b5563",
          "base-100": "#374151",
          "info": "#79A4D4",
          "success": "#6EBE97",
          "warning": "#E7A76F",
          "error": "#D64D4D",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
