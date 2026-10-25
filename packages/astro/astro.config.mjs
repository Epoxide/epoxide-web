import { defineConfig, fontProviders } from 'astro/config'
import react from '@astrojs/react'

export default defineConfig({
  integrations: [react()],
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Raleway',
      cssVariable: '--font-raleway',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['@epoxide/web-assets/fonts/Raleway.ttf'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
})
