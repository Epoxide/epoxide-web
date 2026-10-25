<script lang="ts">
  import type { WebSite } from 'schema-dts'

  interface Props {
    schema: WebSite
  }

  let { schema }: Props = $props()

  // Svelte doesn't allow a literal <script> tag in markup
  const tag = 'script'

  // Unicode-escape the characters Svelte would otherwise HTML-escape, which a <script> doesn't decode
  const schemaJson = $derived(
    JSON.stringify({
      ...schema,
      '@context': 'https://schema.org',
    }).replace(
      /[<>&]/g,
      (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`,
    ),
  )
</script>

<svelte:element this={tag} type="application/ld+json">
  {schemaJson}
</svelte:element>
