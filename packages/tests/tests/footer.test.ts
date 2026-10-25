import { expect, test } from '@playwright/test'
import { FOOTER } from '@epoxide/web-constants'

test('has logo', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('footer').locator('img').getByAltText(FOOTER.LOGO.ALT),
  ).toBeTruthy()
})

test('has epoxide text', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('footer').getByText(FOOTER.TITLE)).toBeTruthy()
})

test('has social media buttons in footer', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.locator('footer').locator('section').locator('a'),
  ).toBeTruthy()
})

test('social media buttons links correctly', async ({ context, page }) => {
  await page.goto('/')

  const socialMediaLinks = await page
    .locator('footer')
    .locator('section')
    .locator('a')
    .all()

  for (const [index, socialMediaLink] of socialMediaLinks.entries()) {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      socialMediaLink.click(),
    ])

    await expect(newPage.url()).toBe(FOOTER.SOCIAL_MEDIA_LINKS[index]?.URL)
  }
})

test('social media button links have correct aria-label', async ({ page }) => {
  await page.goto('/')

  const socialMediaLinks = await page
    .locator('footer')
    .locator('section')
    .locator('a')
    .all()

  for (const [index, socialMediaLink] of socialMediaLinks.entries()) {
    await expect(await socialMediaLink.getAttribute('aria-label')).toBe(
      FOOTER.SOCIAL_MEDIA_LINKS[index]?.ARIA_LABEL,
    )
  }
})
