import type { HandleServerError } from '@sveltejs/kit/hooks'

/** Handles all errors except redirects. `status` and `message` default to the caught error's values. */
export const handleError: HandleServerError = ({ kind, error }) => {
  const status = kind === 'unknown' ? 500 : error.status

  if (status !== 404) {
    console.error(error)
  }
}
