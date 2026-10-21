import config from '../../playwright.config'

config.webServer = {
  command: 'pnpm build && pnpm start --port 4173',
  port: 4173,
  reuseExistingServer: !process.env.CI,
}

export default config
