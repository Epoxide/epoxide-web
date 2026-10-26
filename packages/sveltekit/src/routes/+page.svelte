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
<section class="links">
  <a href={HOME.LINKS.R2AT.URL} target="_blank" rel="external">
    {HOME.LINKS.R2AT.TEXT}
  </a>
</section>

<style lang="scss">
  @use '@epoxide/web-assets/css/breakpoints';

  .links {
    display: flex;
    gap: 3em;

    @media screen and (max-width: breakpoints.$breakpoint-lg) {
      flex-direction: column;
      gap: 1em;
      align-items: center;
    }

    a {
      font-size: 1.5em;
      font-weight: 500;
      letter-spacing: 0.1rem;
      color: rgb(var(--on-background-color));
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;

      &:hover {
        color: rgb(var(--primary-color));
      }
    }
  }
</style>
