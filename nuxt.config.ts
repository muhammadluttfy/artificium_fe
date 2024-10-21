// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      'Plus Jakarta Sans': [200, 300, 400, 500, 600, 700, 800]
    }
  }
})