<script setup lang="ts">
import '~/assets/css/app.css'
import { META } from '@epoxide/web-constants'
import StructuredData from '~/components/StructuredData.vue'
</script>

<template>
  <Head>
    <Title>{{ META.TITLE }}</Title>
    <Meta name="description" :content="META.DESCRIPTION" />
    <Meta property="og:title" :content="META.TITLE" />
    <Meta property="og:description" :content="META.DESCRIPTION" />
    <Meta property="og:site_name" :content="META.SITE_NAME" />
    <Meta property="og:url" :content="META.URL" />
    <Meta property="og:locale" :content="META.LOCALE" />
    <Meta property="og:type" :content="META.TYPE" />
    <Meta property="og:image" :content="`${META.URL}${META.OG_IMAGE}`" />
    <Meta property="og:image:width" :content="String(META.OG_IMAGE_WIDTH)" />
    <Meta property="og:image:height" :content="String(META.OG_IMAGE_HEIGHT)" />
    <Meta property="og:image:alt" :content="META.OG_IMAGE_ALT" />
    <Meta name="twitter:card" :content="META.TWITTER_CARD" />
    <Meta name="twitter:title" :content="META.TITLE" />
    <Meta name="twitter:description" :content="META.DESCRIPTION" />
    <Meta name="twitter:image" :content="`${META.URL}${META.TWITTER_IMAGE}`" />
    <Meta name="twitter:image:alt" :content="META.TWITTER_IMAGE_ALT" />
    <Meta name="twitter:creator" :content="META.TWITTER_CREATOR" />
    <Meta name="twitter:creator:id" :content="META.TWITTER_CREATOR_ID" />
    <Meta name="robots" content="index, follow" />
    <Meta name="googlebot" content="index, follow" />
    <Meta name="color-scheme" :content="META.COLOR_SCHEME" />
    <Meta name="theme-color" :content="META.THEME_COLOR" />
    <Link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="100x100" />
    <Link rel="apple-touch-icon" :href="META.APPLE_TOUCH_ICON" />
    <Link rel="manifest" :href="META.MANIFEST" />
  </Head>
  <StructuredData
    :schema="{ '@type': 'WebSite', name: META.TITLE, url: META.URL }"
  />
  <main>
    <slot />
  </main>
  <Footer src="/images/epoxide-logo-circle.svg" />
</template>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--footer-height));
}
</style>
