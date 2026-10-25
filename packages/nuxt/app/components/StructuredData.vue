<script setup lang="ts">
import type { WebSite } from 'schema-dts'

export interface Props {
  schema: WebSite
}

withDefaults(defineProps<Props>(), {})
</script>

<template>
  <component :is="'script'" type="application/ld+json">
    {{ JSON.stringify({ ...schema, '@context': 'https://schema.org' }) }}
  </component>
</template>
