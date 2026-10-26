import type { NextConfig } from 'next'
import { REDIRECTS } from '@epoxide/web-constants'

const nextConfig: NextConfig = {
  typedRoutes: true,
  redirects: async () =>
    Object.values(REDIRECTS).map(({ PATH, REDIRECT_URL }) => ({
      source: PATH,
      destination: REDIRECT_URL,
      permanent: true,
    })),
}

export default nextConfig
