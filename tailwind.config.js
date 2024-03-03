/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
],
theme: {
  container: {
    center: true,
    padding: '1rem',
    screens: {
      'xl': '1200px',
      '2xl': '1600px',
    },
  },
  fontFamily: {
    'sans': ['Montserrat', 'sans-serif']
  }
},
plugins: [require('daisyui')], 
daisyui: {
  themes: [
    {
      lightTheme: {
        primary: "#778ad4",
        secondary: "#f4f4a1",
        accent: "#1be885",
        neutral: "#272136",
        "base-100": "#ffffff",
        info: "#778ad4",
        success: "#23b893",
        warning: "#f79926",
        error: "#ea535a",
        body: {
          "background-color": "#FFCBA4",
        },
      },
    },
  ],
},
};
