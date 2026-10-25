import type { WebSite } from 'schema-dts'

export interface StructuredDataProps {
  schema: WebSite
}

export default function StructuredData(props: StructuredDataProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify({ ...props.schema, '@context': 'https://schema.org' })}
    </script>
  )
}
