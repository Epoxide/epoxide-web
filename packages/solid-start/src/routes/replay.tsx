import { REDIRECTS } from '@epoxide/web-constants'
import { redirect } from '@solidjs/router'

export function GET() {
  return redirect(REDIRECTS.REPLAY.REDIRECT_URL)
}
