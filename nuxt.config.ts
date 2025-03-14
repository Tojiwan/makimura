// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/google-fonts'
  ],

  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar', 'fire', 'plus', 'minus','x'],
      regular: ['user']
    }
  },

  googleFonts: {
    families: {
      'League+Spartan': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    
    // Download fonts instead of linking to Google Fonts CDN
    download: true,  
    base64: false, // Set to true if you want fonts embedded in CSS (not recommended for large projects)
    
    inject: false, // Prevent automatic injection (we will manually include it)
    overwriting: true, // Avoid redundant downloads

    // Set the output directory for CSS and fonts
    outputDir: 'assets',
    stylePath: 'css/google-fonts.css',
    fontsDir: 'fonts',
    fontsPath: '../fonts'
  },
  css: [
    '@/assets/css/google-fonts.css',
    '@/assets/css/main.css',

  ]
})