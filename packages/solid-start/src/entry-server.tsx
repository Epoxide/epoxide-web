// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server'
import { META } from '@epoxide/web-constants'

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href={META.APPLE_TOUCH_ICON} />
          <link rel="manifest" href={META.MANIFEST} />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
