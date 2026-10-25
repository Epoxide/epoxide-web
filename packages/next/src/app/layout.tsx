import '../styles/globals.scss'
import styles from './layout.module.scss'
import localFont from 'next/font/local'
import { META } from '@epoxide/web-constants'
import type { Metadata, Viewport } from 'next'
import { Footer } from '@/components/Footer'
import epoxideLogo from '../../public/images/epoxide-logo-circle.svg'
import { StructuredData } from '@/components/StructuredData'

const raleway = localFont({ src: './Raleway.ttf', display: 'swap' })

export const metadata: Metadata = {
  title: META.TITLE,
  description: META.DESCRIPTION,
  metadataBase: new URL(META.URL),
  icons: { icon: '/favicon.ico', apple: META.APPLE_TOUCH_ICON },
  manifest: META.MANIFEST,
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    url: META.URL,
    locale: META.LOCALE,
    type: META.TYPE,
    images: {
      url: META.OG_IMAGE,
      width: META.OG_IMAGE_WIDTH,
      height: META.OG_IMAGE_HEIGHT,
      alt: META.OG_IMAGE_ALT,
    },
  },
  twitter: {
    card: META.TWITTER_CARD,
    title: META.TITLE,
    description: META.DESCRIPTION,
    images: { url: META.TWITTER_IMAGE, alt: META.TWITTER_IMAGE_ALT },
    creator: META.TWITTER_CREATOR,
    creatorId: META.TWITTER_CREATOR_ID,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: META.GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  colorScheme: META.COLOR_SCHEME,
  themeColor: META.THEME_COLOR,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <StructuredData
          schema={{ '@type': 'WebSite', name: META.TITLE, url: META.URL }}
        />
        <main className={styles.main}>{children}</main>
        <Footer src={epoxideLogo} />
      </body>
    </html>
  )
}
