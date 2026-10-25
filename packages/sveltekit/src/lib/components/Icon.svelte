<script lang="ts">
  interface Props {
    icon: string
    iconLibrary: 'brands' | 'solid'
    size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
  }

  let { icon, iconLibrary, size }: Props = $props()
</script>

<i class={`fa-${iconLibrary} fa-${icon}${size ? ` fa-${size}` : ''}`}></i>
