import { expect, test } from '@playwright/test'
import { NOT_FOUND } from '@epoxide/web-constants'
import { VIEWPORT_SIZES } from '../viewportSizes'
import { waitForImagesLoaded } from '../utils'

test('has h1 with not found text', async ({ page }) => {
  await page.goto('/non-existing-route')
  await expect(page.locator('h1')).toHaveText(NOT_FOUND.TITLE)
})

test('has link to home', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.getByText(NOT_FOUND.GO_BACK).click()
  await expect(page).toHaveURL('/')
})

test('uses layout', async ({ page }) => {
  await page.goto('/non-existing-route')
  await expect(page.locator('footer')).toBeTruthy()
})

for (const [name, viewport] of Object.entries(VIEWPORT_SIZES)) {
  test(
    `not-found snapshot on ${name.toLowerCase()}`,
    { tag: '@snapshot' },
    async ({ page }) => {
      await page.setViewportSize(viewport)
      await page.goto('/non-existing-route')
      await expect(page.locator('h1')).toBeVisible()
      await page.evaluate(() => document.fonts.ready)
      await waitForImagesLoaded(page)
      await expect(page).toHaveScreenshot(
        `not-found-snapshot-on-${name.toLowerCase()}.png`,
        { fullPage: true },
      )
    },
  )
}
