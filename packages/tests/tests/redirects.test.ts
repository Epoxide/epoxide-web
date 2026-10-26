import { expect, test } from '@playwright/test'
import { REDIRECTS } from '@epoxide/web-constants'

test('redirects to R2AT', async ({ page }) => {
  await page.route(`${REDIRECTS.R2AT.REDIRECT_URL}/**`, (route) =>
    route.fulfill({ status: 200, body: '' }),
  )
  await page.goto(REDIRECTS.R2AT.PATH)
  await page.waitForURL(`${REDIRECTS.R2AT.REDIRECT_URL}/`)
  await expect(page.url()).toBe(`${REDIRECTS.R2AT.REDIRECT_URL}/`)
})

for (const { PATH, REDIRECT_URL } of [REDIRECTS.STATS, REDIRECTS.REPLAY]) {
  test(`redirects ${PATH} to home`, async ({ page }) => {
    await page.goto(PATH)
    await expect(page).toHaveURL(REDIRECT_URL)
  })
}
