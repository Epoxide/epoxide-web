import { expect, test } from '@playwright/test'
import { HOME, META } from '@epoxide/web-constants'
import { VIEWPORT_SIZES } from '../viewportSizes'

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

test('has section with links', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('section').locator('a')).toBeTruthy()
})

test('matches desktop snapshot', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize(VIEWPORT_SIZES.DESKTOP)
  await expect(page).toHaveScreenshot(
    '../snapshots/home.test.ts.matches-desktop-snapshot.png',
  )
})

test('matches laptop snapshot', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize(VIEWPORT_SIZES.LAPTOP)
  await expect(page).toHaveScreenshot(
    '../snapshots/home.test.ts.matches-laptop-snapshot.png',
  )
})

test('matches tablet snapshot', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize(VIEWPORT_SIZES.TABLET)
  await expect(page).toHaveScreenshot(
    '../snapshots/home.test.ts.matches-tablet-snapshot.png',
  )
})

test('matches mobile snapshot', async ({ page }) => {
  await page.goto('/')
  await page.setViewportSize(VIEWPORT_SIZES.MOBILE)
  await expect(page).toHaveScreenshot(
    '../snapshots/home.test.ts.matches-mobile-snapshot.png',
  )
})
