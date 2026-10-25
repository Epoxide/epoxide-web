import { expect, test } from '@playwright/test'
import { META } from '@epoxide/web-constants'

test('has favicon', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('link[rel="icon"]').first().getAttribute('href'),
  ).toContain('/favicon.ico')
})

test('has apple touch icon', async ({ page }) => {
  await page.goto('/')
  const appleTouchIcon = await page
    .locator('link[rel="apple-touch-icon"]')
    .getAttribute('href')
  await expect(appleTouchIcon).toContain(META.APPLE_TOUCH_ICON)
  const response = await page.request.get(appleTouchIcon as string)
  await expect(response.ok()).toBe(true)
})

test('has web manifest with loadable icons', async ({ page }) => {
  await page.goto('/')
  const manifestHref = await page
    .locator('link[rel="manifest"]')
    .getAttribute('href')
  await expect(manifestHref).toContain(META.MANIFEST)
  const manifest = await (await page.request.get(manifestHref as string)).json()
  await expect(manifest.name).toBe(META.TITLE)
  await expect(manifest.icons.length).toBeGreaterThan(0)
  for (const icon of manifest.icons) {
    const response = await page.request.get(icon.src)
    await expect(response.ok()).toBe(true)
  }
})

test('has description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="description"]').getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has color scheme', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="color-scheme"]').getAttribute('content'),
  ).toBe(META.COLOR_SCHEME)
})

test('has theme color', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="theme-color"]').getAttribute('content'),
  ).toBe(META.THEME_COLOR)
})

test('has opengraph title', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:title"]').getAttribute('content'),
  ).toBe(META.TITLE)
})

test('has opengraph description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[property="og:description"]')
      .getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has opengraph url', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:url"]').getAttribute('content'),
  ).toContain(META.URL)
})

test('has opengraph site name', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:site_name"]').getAttribute('content'),
  ).toBe(META.SITE_NAME)
})

test('has opengraph locale', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:locale"]').getAttribute('content'),
  ).toBe(META.LOCALE)
})

test('has opengraph image', async ({ page }) => {
  await page.goto('/')
  const ogImage = await page
    .locator('meta[property="og:image"]')
    .getAttribute('content')
  await expect(ogImage).toBe(`${META.URL}${META.OG_IMAGE}`)
  await expect(page.goto(ogImage as string)).resolves.toBeTruthy()
  await expect(page.url()).toBe(ogImage)
})

test('has opengraph image dimensions', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[property="og:image:width"]')
      .getAttribute('content'),
  ).toBe(String(META.OG_IMAGE_WIDTH))
  await expect(
    await page
      .locator('meta[property="og:image:height"]')
      .getAttribute('content'),
  ).toBe(String(META.OG_IMAGE_HEIGHT))
})

test('has opengraph image alt', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:image:alt"]').getAttribute('content'),
  ).toBe(META.OG_IMAGE_ALT)
})

test('has opengraph type', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[property="og:type"]').getAttribute('content'),
  ).toBe(META.TYPE)
})

test('has twitter card', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:card"]').getAttribute('content'),
  ).toBe(META.TWITTER_CARD)
})

test('has twitter creator', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:creator"]').getAttribute('content'),
  ).toBe(META.TWITTER_CREATOR)
})

test('has twitter creator id', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[name="twitter:creator:id"]')
      .getAttribute('content'),
  ).toBe(META.TWITTER_CREATOR_ID)
})

test('has twitter title', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[name="twitter:title"]').getAttribute('content'),
  ).toBe(META.TITLE)
})

test('has twitter description', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[name="twitter:description"]')
      .getAttribute('content'),
  ).toBe(META.DESCRIPTION)
})

test('has twitter image', async ({ page }) => {
  await page.goto('/')
  const twitterImage = await page
    .locator('meta[name="twitter:image"]')
    .getAttribute('content')
  await expect(twitterImage).toBe(`${META.URL}${META.TWITTER_IMAGE}`)
  await expect(page.goto(twitterImage as string)).resolves.toBeTruthy()
  await expect(page.url()).toBe(twitterImage)
})

test('has twitter image alt', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page
      .locator('meta[name="twitter:image:alt"]')
      .getAttribute('content'),
  ).toBe(META.TWITTER_IMAGE_ALT)
})

test('has lang set to en', async ({ page }) => {
  await page.goto('/')
  await expect(await page.locator('html').getAttribute('lang')).toBe('en')
})

test('has charset set utf-8', async ({ page }) => {
  await page.goto('/')
  await expect(
    await page.locator('meta[charset]').getAttribute('charset'),
  ).toBe('utf-8')
})
