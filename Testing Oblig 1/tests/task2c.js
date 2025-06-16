import { test, expect } from '@playwright/test';

test.describe("Transfer Funds", () => {
  test("Successfully transfer funds and log in and log out", async ({ page }) => {
    // Visit the homepage
    await page.goto("https://parabank.parasoft.com/parabank/");

    // Log in as the user (user2)
    await page.fill('[name="username"]', "user2");
    await page.fill('[name="password"]', "password");
    await page.click('.login .button');

    // Verify successful login
    await expect(page.locator('#leftPanel')).toContainText('Welcome user2');

    // Navigate to "Transfer Funds" page
    await page.click('text=Transfer Funds');

    // Fill out the fund transfer form
    await page.fill('input[name="amount"]', '100'); // Amount to transfer
    await page.fill('input[name="fromAccountId"]', '18783'); // From Account (you can choose an account based on available ones)
    await page.fill('input[name="toAccountId"]', '18784'); // To Account (same as above, specify another account)

    // Submit the fund transfer form
    await page.click('.form2 .button');

    // Verify that the transfer was successful (check for the confirmation text)
    await expect(page.locator('.title')).toHaveText('Fund Transfer Complete');

    // Log out after the transfer
    await page.click('text=Logout');
  });
});
