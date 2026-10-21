import { expect, type Page } from '@playwright/test'

/**
 * Wait for every visible image to finish loading before capturing a snapshot.
 * `next/image` marks images `loading="lazy"` unless they set `priority`, so
 * they only start fetching once scrolled into view — a `fullPage` capture can
 * fire before they've painted. Even eager (`priority`) images may still be
 * decoding when the heading becomes visible. We walk each visible image,
 * scroll it into view to trigger its load, and wait until its `naturalWidth`
 * is non-zero (decoded).
 */
export async function waitForImagesLoaded(page: Page, timeout = 30000) {
  const imagesLocator = page.locator('img:visible')
  const images = await imagesLocator.all()

  for (const image of images) {
    await image.scrollIntoViewIfNeeded()
    await expect(image).toHaveJSProperty('complete', true, { timeout })
    await expect(image).not.toHaveJSProperty('naturalWidth', 0, { timeout })
  }
}
