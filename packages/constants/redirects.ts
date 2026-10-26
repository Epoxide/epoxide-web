import { R2AT_URL } from './r2at'

export const REDIRECTS = {
  R2AT: {
    PATH: '/R2AT',
    REDIRECT_URL: R2AT_URL,
  },
  STATS: {
    PATH: '/stats',
    REDIRECT_URL: '/',
  },
  REPLAY: {
    PATH: '/replay',
    REDIRECT_URL: '/',
  },
} as const
