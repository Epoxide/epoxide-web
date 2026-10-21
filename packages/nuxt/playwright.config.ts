import config from '../../playwright.config'

config.webServer = {
  command: 'pnpm build && export PORT=4173 && pnpm preview',
  port: 4173,
  reuseExistingServer: !process.env.CI,
}

export default config
