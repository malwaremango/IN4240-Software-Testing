import { test, expect } from '@playwright/test';

test('Transfer funds', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=90A79CB406073240D5434E95F1F970B8');
  await page.locator('input[name="username"]').fill('alice');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('alicew');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('100');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await page.getByRole('link', { name: 'Log Out' }).click();
});