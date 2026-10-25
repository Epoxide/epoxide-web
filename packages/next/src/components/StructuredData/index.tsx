import type { WebSite } from 'schema-dts'

interface StructuredDataProps {
  schema: WebSite
}

export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ ...schema, '@context': 'https://schema.org' }),
      }}
    />
  )
}
