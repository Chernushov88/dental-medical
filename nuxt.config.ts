// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  srcDir: 'src/.',
  components: {
    dirs: [
      {
        path: '~/components/general',
        global: true,
      }
    ]
  }
})
