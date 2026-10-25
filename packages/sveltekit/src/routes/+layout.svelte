<script lang="ts">
  import '../app.css'
  import type { Snippet } from 'svelte'
  import { META } from '@epoxide/web-constants'
  import epoxideLogo from '@epoxide/web-assets/images/epoxide-logo-circle.svg'
  import Footer from '#lib/components/Footer.svelte'
  import StructuredData from '#lib/components/StructuredData.svelte'

  interface Props {
    children: Snippet
  }

  let { children }: Props = $props()
</script>

<svelte:head>
  <title>{META.TITLE}</title>
  <meta name="description" content={META.DESCRIPTION} />
  <meta property="og:title" content={META.TITLE} />
  <meta property="og:description" content={META.DESCRIPTION} />
  <meta property="og:site_name" content={META.SITE_NAME} />
  <meta property="og:url" content={META.URL} />
  <meta property="og:locale" content={META.LOCALE} />
  <meta property="og:type" content={META.TYPE} />
  <meta property="og:image" content={`${META.URL}${META.OG_IMAGE}`} />
  <meta property="og:image:width" content={String(META.OG_IMAGE_WIDTH)} />
  <meta property="og:image:height" content={String(META.OG_IMAGE_HEIGHT)} />
  <meta property="og:image:alt" content={META.OG_IMAGE_ALT} />
  <meta name="twitter:card" content={META.TWITTER_CARD} />
  <meta name="twitter:title" content={META.TITLE} />
  <meta name="twitter:description" content={META.DESCRIPTION} />
  <meta name="twitter:image" content={`${META.URL}${META.TWITTER_IMAGE}`} />
  <meta name="twitter:image:alt" content={META.TWITTER_IMAGE_ALT} />
  <meta name="twitter:creator" content={META.TWITTER_CREATOR} />
  <meta name="twitter:creator:id" content={META.TWITTER_CREATOR_ID} />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="color-scheme" content={META.COLOR_SCHEME} />
  <meta name="theme-color" content={META.THEME_COLOR} />
</svelte:head>
<StructuredData
  schema={{
    '@type': 'WebSite',
    name: META.TITLE,
    url: META.URL,
  }}
/>
<main>
  {@render children()}
</main>
<Footer src={epoxideLogo} />

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - var(--footer-height));
  }
</style>
