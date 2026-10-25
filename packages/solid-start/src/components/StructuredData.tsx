import type { WebSite } from 'schema-dts'

export interface StructuredDataProps {
  schema: WebSite
}

export default function StructuredData(props: StructuredDataProps) {
  // Unicode-escape the characters that could close the <script> early, since Solid doesn't escape its contents
  const schemaJson = () =>
    JSON.stringify({
      ...props.schema,
      '@context': 'https://schema.org',
    }).replace(
      /[<>&]/g,
      (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`,
    )

  return <script type="application/ld+json">{schemaJson()}</script>
}
