// Description: This is a Playwright test that logs into the Secure Area and verifies a successful login
const { test, expect } = require('@playwright/test');

test.describe('test suite here', () => {

    test('[@smoke] Login to Secure Area with valid credentials', async ({ page }) => {

        // 1. Navigate to the homepage
        await page.goto('https://the-internet.herokuapp.com');

        // 2. Click on "Form Authentication" link
        await page.getByText('Form Authentication').click();

        // 3. Fill in login form
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        await page.screenshot({ path: "screenshot.png", fullPage: true });

        // 4. Click the Login button
        await page.getByRole('button', { name: 'Login' }).click();

        // 5. Assertion - verify secure area message
        await expect(page.locator('text=Welcome to the Secure Area')).toBeVisible();
    });
});

