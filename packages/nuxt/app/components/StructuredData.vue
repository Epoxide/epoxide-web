<script setup lang="ts">
import { useHead } from 'nuxt/app'
import type { WebSite } from 'schema-dts'

export interface Props {
  schema: WebSite
}

const props = withDefaults(defineProps<Props>(), {})

useHead({
  script: [
    {
      type: 'application/ld+json',
      tagPosition: 'bodyClose',
      innerHTML: () =>
        JSON.stringify({ ...props.schema, '@context': 'https://schema.org' }),
    },
  ],
})
</script>
