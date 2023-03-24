// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page).toHaveTitle('Sample Page')
})

test('has h1 tag with following content', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.getByRole('heading', { name: 'Home Page', exact: true })).toBeVisible()
})

test('status code of home page is ok', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(async () => {
    const response = await page.request.get('http://localhost:3000/')
    expect(response.status()).toBe(200)
  }).toPass()
})
