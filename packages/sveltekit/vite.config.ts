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
      compilerOptions: {
        // Force runes mode for our own components, but leave libraries to decide for themselves
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
      },
    }),
  ],
  server: {
    fs: {
      allow: ['../../packages'],
    },
  },
}

export default config
