import { test, expect } from '@playwright/test';

test('Customer Care Test 2025', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=4968031C227C8A5B13E4A1E08937F37E');
  await page.getByRole('link', { name: 'contact', exact: true }).click();

  await page.locator('#name').click();
  await page.locator('#name').fill('Test');
  await page.locator('#email').click();
  await page.locator('#email').fill('test@hahatest.com');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('987654321');
  await page.locator('#message').click();
 
  await page.locator('#message').fill('This is a test haha 2025');
  await page.getByRole('button', { name: 'Send to Customer Care' }).click();
});