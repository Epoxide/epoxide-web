<script lang="ts">
  import type {
    HTMLAnchorAttributes,
    HTMLButtonAttributes,
  } from 'svelte/elements'
  import Icon from './Icon.svelte'

  interface Props {
    href?: HTMLAnchorAttributes['href']
    target?: HTMLAnchorAttributes['target']
    type?: HTMLButtonAttributes['type']
    icon: string
    iconLibrary: 'brands' | 'solid'
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
    ariaLabel?: string
  }

  let { href, target, type, icon, iconLibrary, size, ariaLabel }: Props =
    $props()
</script>

{#if href}
  <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- Only used for external links -->
  <a {href} {target} aria-label={ariaLabel} class="button">
    <Icon {icon} {iconLibrary} {size} />
  </a>
{:else}
  <button {type} class="button">
    <Icon {icon} {iconLibrary} {size} />
  </button>
{/if}

<style lang="scss">
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(var(--on-background-color));
    background-color: transparent;
    height: 2.5em;
    width: 2.5em;
    padding: 0.25em;
    border: none;
    border-radius: 50%;
    appearance: none;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 250ms ease-in-out;

    &:hover {
      background: rgba(var(--on-surface-color), 0.12);
    }
  }
</style>
