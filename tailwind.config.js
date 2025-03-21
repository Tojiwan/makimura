/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}", // Include all components
    "./layouts/**/*.vue",           // Include all layouts
    "./pages/**/*.vue",             // Include all pages
    "./plugins/**/*.{js,ts}",       // Include plugins
    "./app.vue",                    // Include the main app file
    "./nuxt.config.{js,ts}",        // Include Nuxt config if needed
  ],
  theme: {
    extend: {
      colors: {
        'main': '#00b14f', // Example custom color
        'green': 'var(--green-color)', // Add reusable text color
      },
      textColor: {
        'tc-green': 'var(--green-color)', // Add reusable text color
      },
    },
  },
  plugins: [],
}

