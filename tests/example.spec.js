// Description: This is a Playwright test that logs into the Secure Area and verifies a successful login
const { test, expect } = require('@playwright/test');

test.describe('Authentication Suite', () => {

    test.beforeEach('Open login page first', async ({ page }) => {
        await page.goto('/');
    })

    test.afterEach('take screenshot for the sucssefull login', async ({ page }) => {
        const timestamp = new Date().toLocaleString('sv').replace(' ', '_').replace(/:/g, '-');
        await page.screenshot({ path: `Screen-${timestamp}.png`, fullPage: true });
    })

    test('Login to Secure Area with valid credentials', async ({ page }) => {

        // 2. Click on "Form Authentication" link
        await page.getByText('Form Authentication').click();

        // 3. Fill in login form
        await page.getByLabel('Username').fill('tomsmith');
        await page.getByLabel('Password').fill('SuperSecretPassword!');
        // const timestamp = new Date().toLocaleString('sv').replace(' ', '_').replace(/:/g, '-');
        // const locator1 = page.getByLabel('Username');
        // await page.screenshot({ path: `Screen-${timestamp}.png`, fullPage: true });
        // await locator1.screenshot({ path: `Element-${timestamp}.png` });

        // 4. Click the Login button
        await page.getByRole('button', { name: 'Login' }).click();

        // 5. Assertion - verify secure area message
        await expect(page.locator('text=Welcome to the Secure Area')).toBeVisible();
    });
});

