import { expect, test } from '@playwright/test'
import { HOME, META } from '@epoxide/web-constants'
import { VIEWPORT_SIZES } from '../viewportSizes'
import { waitForImagesLoaded } from '../utils'

test('has logo', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('main').locator('img').getByAltText(HOME.LOGO.ALT),
  ).toBeTruthy()
})

test('has title with epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(META.TITLE)
})

test('has h1 with text epoxide', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText(HOME.TITLE)
})

for (const [name, viewport] of Object.entries(VIEWPORT_SIZES)) {
  test(
    `home snapshot on ${name.toLowerCase()}`,
    { tag: '@snapshot' },
    async ({ page }) => {
      await page.setViewportSize(viewport)
      await page.goto('/')
      await expect(page.locator('h1')).toBeVisible()
      await page.evaluate(() => document.fonts.ready)
      await waitForImagesLoaded(page)
      await expect(page).toHaveScreenshot(
        `home-snapshot-on-${name.toLowerCase()}.png`,
        { fullPage: true },
      )
    },
  )
}
