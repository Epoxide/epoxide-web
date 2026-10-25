import adapter from '@sveltejs/adapter-node'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    sveltekit({
      // Consult https://svelte.dev/docs/kit/integrations#Preprocessors
      // for more information about preprocessors
      preprocess: vitePreprocess(),
      adapter: adapter(),
    }),
  ],
  server: {
    fs: {
      allow: ['../../packages'],
    },
  },
}

export default config
