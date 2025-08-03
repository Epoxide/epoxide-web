import { expect, test } from '@playwright/test'
import { NOT_FOUND } from '@epoxide/web-constants'
import { VIEWPORT_SIZES } from '../viewportSizes'

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

test('matches desktop snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize(VIEWPORT_SIZES.DESKTOP)
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-desktop-snapshot.png',
  )
})

test('matches laptop snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize(VIEWPORT_SIZES.LAPTOP)
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-laptop-snapshot.png',
  )
})

test('matches tablet snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize(VIEWPORT_SIZES.TABLET)
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-tablet-snapshot.png',
  )
})

test('matches mobile snapshot', async ({ page }) => {
  await page.goto('/non-existing-route')
  await page.setViewportSize(VIEWPORT_SIZES.MOBILE)
  await expect(page).toHaveScreenshot(
    '../snapshots/404.test.ts.matches-mobile-snapshot.png',
  )
})
