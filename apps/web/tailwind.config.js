/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#f8f9fa",
        "gray-200": "#e9ecef",
        "gray-300": "#dee2e6",
        "gray-400": "#ced4da",
        "gray-500": "#adb5bd",
        "gray-600": "#6c757d",
        "gray-700": "#495057",
        "gray-800": "#343a40",
        "gray-900": "#212529",

        "blue-100": "#caf0f8",
        "blue-200": "#90e0ef",
        "blue-300": "#00b4d8",
        "blue-400": "#0077b6",
        "blue-500": "#03045e",
      },
    },
  },
  plugins: [],
};
