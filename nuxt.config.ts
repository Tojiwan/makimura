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
    prefetch: true,
    preconnect: true,
    preload: true
  },
})