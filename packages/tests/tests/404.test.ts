import { expect, test } from '@playwright/test'
import { NOT_FOUND } from '@epoxide/web-constants'

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
