// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2026-10-25',
})
