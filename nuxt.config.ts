// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome', '@nuxtjs/google-fonts', '@vueuse/nuxt'],

  fontawesome: {
    icons: {
      solid: ['dollar-sign', 'cog', 'circle', 'check', 'calendar', 'fire', 'plus', 'minus', 'x', 'location-dot', 'chevron-right', 'chevron-down', 'chevron-up', 'chevron-left', 'building-columns', 'credit-card', 'magnifying-glass'],
      regular: ['user', 'money-bill-1'],
      brands: ['cc-visa', 'cc-mastercard']
    }
  },

  googleFonts: {
    families: {
      'League+Spartan': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Bebas+Neue': true,
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
  ],

  // Auto-import components from all subdirectories
  components: [
    {
      path: '~/components',
      pathPrefix: false, // Allows direct use of component names without folder prefixes
      global: true, // (Optional) Makes all components globally available
    },
  ]
})