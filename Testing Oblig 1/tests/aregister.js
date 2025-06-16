import { test, expect } from '@playwright/test';

test('test4', async ({ page }) => {
  // Go to the URL
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Click on 'Register' link
  await page.getByRole('link', { name: 'Register' }).click();

  const values = {
    firstName: 'UserA',
    lastName: 'TestAlice',
    street: 'lassi street 41',
    city: 'loveAlice',
    state: 'lovers state 544',
    zipCode: '0004',
    phoneNumber: '954321334',
    ssn: '4341234',
    username: 'alice',
    password: 'alicew',
    repeatedPassword: 'alicew'
  };
  // Fill in the registration form
  await page.locator('[id="customer\\.firstName"]').fill(values.firstName);
  await page.locator('[id="customer\\.lastName"]').fill(values.lastName);
  await page.locator('[id="customer\\.address\\.street"]').fill(values.street);
  await page.locator('[id="customer\\.address\\.city"]').fill(values.city);
  await page.locator('[id="customer\\.address\\.state"]').fill(values.street);
  await page.locator('[id="customer\\.address\\.zipCode"]').fill(values.zipCode);
  await page.locator('[id="customer\\.phoneNumber"]').fill(values.phoneNumber);
  await page.locator('[id="customer\\.ssn"]').fill(values.ssn);
  await page.locator('[id="customer\\.username"]').fill(values.username);
  await page.locator('[id="customer\\.password"]').fill(values.password);
  await page.locator('#repeatedPassword').fill(values.password);

  // Click on 'Register' button to submit the form
  await page.getByRole('button', { name: 'Register' }).click();

  // Log out the user
  await page.getByRole('link', { name: 'Log Out' }).click();
});
