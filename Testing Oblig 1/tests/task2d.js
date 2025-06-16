import { test, expect } from '@playwright/test';

test.describe("Bill Pay", () => {
  test("Successfully pay a bill and log in and log out", async ({ page }) => {
    // Visit the homepage
    await page.goto("https://parabank.parasoft.com/parabank/");

    // Log in as the user (user2)
    await page.fill('[name="username"]', "user2");
    await page.fill('[name="password"]', "password");
    await page.click('.login .button');

    // Verify successful login
    await expect(page.locator('#leftPanel')).toContainText('Welcome user2');

    // Navigate to "Bill Pay" page
    await page.click('text=Bill Pay');

    // Fill out the bill payment form
    await page.fill('input[name="payee.name"]', 'Electric Company'); // Payee Name
    await page.fill('input[name="payee.address.street"]', '456 Power St'); // Payee Street Address
    await page.fill('input[name="payee.address.city"]', 'Energy City'); // Payee City
    await page.fill('input[name="payee.address.state"]', 'CA'); // Payee State
    await page.fill('input[name="payee.address.zipCode"]', '98765'); // Payee Zip Code
    await page.fill('input[name="payee.phoneNumber"]', '555-987-6543'); // Payee Phone Number
    await page.fill('input[name="payee.accountNumber"]', '123456789'); // Payee Account Number
    await page.fill('input[name="payee.verifyAccount"]', '123456789'); // Verify Account Number
    await page.fill('input[name="amount"]', '200'); // Amount to Pay

    // Select account to pay from
    await page.click('select[name="fromAccountId"]'); // Click the dropdown
    await page.selectOption('select[name="fromAccountId"]', { index: 0 }); // Choose the first account

    // Submit the bill payment form
    await page.click('.form2 .button');

    // Verify that the bill payment was successful (check for success message)
    await expect(page.locator('.title')).toHaveText('Bill Payment Complete');

    // Log out after paying the bill
    await page.click('text=Logout');
  });
});
