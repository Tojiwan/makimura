// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
    '@vesp/nuxt-fontawesome',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],

  fontawesome: {
    icons: {
      solid: [
        'dollar-sign',
        'cog',
        'circle',
        'check',
        'calendar',
        'fire',
        'plus',
        'minus',
        'x',
        'location-dot',
        'chevron-right',
        'chevron-down',
        'chevron-up',
        'chevron-left',
        'building-columns',
        'credit-card',
        'magnifying-glass',
        'bag-shopping',
        'phone',
        'envelope',
        'cart-shopping',
        'arrow-up',
      ],
      regular: ['user', 'money-bill-1'],
      brands: ['cc-visa', 'cc-mastercard'],
    },
  },

  googleFonts: {
    families: {
      'League+Spartan': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Bebas+Neue': true,
    },
    display: 'swap',

    download: false, // ❌ Do NOT download fonts
    inject: true, // ✅ Inject Google Fonts via <link>
  },

  css: [
    '~/assets/css/main.css', // Include Tailwind CSS file
  ],

  postcss: {
    plugins: {
      tailwindcss: {}, // Add Tailwind CSS plugin
      autoprefixer: {}, // Add Autoprefixer plugin
    },
  },

  // Auto-import components from all subdirectories
  components: [
    {
      path: '~/components',
      pathPrefix: false, // Allows direct use of component names without folder prefixes
      global: true, // (Optional) Makes all components globally available
    },
  ],
});