import { devices, type PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm build && pnpm preview --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
  },
  testDir: '../tests/tests',
  snapshotPathTemplate: '../tests/snapshots/{testFileName}.{arg}{ext}',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [
        ['list'],
        ['html', { open: 'never' }],
        ['json', { outputFile: 'playwright-json/results.json' }],
      ]
    : 'list',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: process.env.CI ? 0 : 0.02,
      caret: 'initial',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      grepInvert: /@snapshot/,
    },
    {
      name: 'chromium-snapshots',
      use: { ...devices['Desktop Chrome'] },
      grep: /@snapshot/,
      dependencies: ['chromium'],
    },
  ],
}

export default config
