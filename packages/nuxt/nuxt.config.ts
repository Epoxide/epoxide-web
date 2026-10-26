// https://nuxt.com/docs/api/configuration/nuxt-config
import { REDIRECTS } from '@epoxide/web-constants'

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
    ...Object.fromEntries(
      Object.values(REDIRECTS).map(({ PATH, REDIRECT_URL }) => [
        PATH,
        { redirect: { to: REDIRECT_URL, statusCode: 301 } },
      ]),
    ),
  },
  compatibilityDate: '2026-10-25',
})
