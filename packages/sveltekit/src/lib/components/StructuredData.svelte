<script lang="ts">
  import type { WebSite } from 'schema-dts'

  export let schema: WebSite

  $: modifiedSchema = JSON.stringify({
    ...schema,
    '@context': 'https://schema.org',
  })

   $: schemaScript = `<script type=\"application/ld+json\">${modifiedSchema}<\/script>`
</script>

{@html schemaScript}
