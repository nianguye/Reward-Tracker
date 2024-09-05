/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "sidebar": "250px",
      },
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#121212',
        },
        foreground: {
          DEFAULT: '#000000',
          dark: '#ffffff',
        },
      },
      fontFamily: {
        body: ['-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Oxygen',
          'Ubuntu',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace'
        ],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

