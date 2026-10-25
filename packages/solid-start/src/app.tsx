import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import './app.css'
import { META } from '@epoxide/web-constants'
import Footer from '~/components/Footer'
import StructuredData from './components/StructuredData'

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <MetaProvider>
            <Title>{META.TITLE}</Title>
            <meta name="description" content={META.DESCRIPTION} />
            <meta property="og:title" content={META.TITLE} />
            <meta property="og:description" content={META.DESCRIPTION} />
            <meta property="og:site_name" content={META.SITE_NAME} />
            <meta property="og:url" content={META.URL} />
            <meta property="og:locale" content={META.LOCALE} />
            <meta property="og:type" content={META.TYPE} />
            <meta property="og:image" content={`${META.URL}${META.OG_IMAGE}`} />
            <meta
              property="og:image:width"
              content={String(META.OG_IMAGE_WIDTH)}
            />
            <meta
              property="og:image:height"
              content={String(META.OG_IMAGE_HEIGHT)}
            />
            <meta property="og:image:alt" content={META.OG_IMAGE_ALT} />
            <meta name="twitter:card" content={META.TWITTER_CARD} />
            <meta name="twitter:title" content={META.TITLE} />
            <meta name="twitter:description" content={META.DESCRIPTION} />
            <meta
              name="twitter:image"
              content={`${META.URL}${META.TWITTER_IMAGE}`}
            />
            <meta name="twitter:image:alt" content={META.TWITTER_IMAGE_ALT} />
            <meta name="twitter:creator" content={META.TWITTER_CREATOR} />
            <meta name="twitter:creator:id" content={META.TWITTER_CREATOR_ID} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="color-scheme" content={META.COLOR_SCHEME} />
            <meta name="theme-color" content={META.THEME_COLOR} />
          </MetaProvider>
          <StructuredData
            schema={{ '@type': 'WebSite', name: META.TITLE, url: META.URL }}
          />
          <main>
            <Suspense>{props.children}</Suspense>
          </main>
          <Footer src="/images/epoxide-logo-circle.svg" />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
