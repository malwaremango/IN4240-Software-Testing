import { test, expect } from '@playwright/test';

test('Apply loan', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('alice');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('alicew');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('10000');
  await page.locator('#downPayment').fill('600');
  await page.getByRole('button', { name: 'Apply Now' }).click();

  //log out
  await page.getByRole('link', { name: 'Log Out' }).click();
});