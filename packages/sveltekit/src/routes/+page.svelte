<script lang="ts">
  import { HOME } from '@epoxide/web-constants'
  import epoxideLogo from '@epoxide/web-assets/images/epoxide-logo-circle.svg'
  import TitleLogo from '#lib/components/TitleLogo.svelte'
</script>

<TitleLogo
  src={epoxideLogo}
  alt={HOME.LOGO.ALT}
  logoSize={HOME.LOGO.SIZE}
  title={HOME.TITLE}
/>
