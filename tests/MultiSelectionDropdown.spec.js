import { test, expect } from "@playwright/test";

test.describe('Handling Multi Selection Dropdown', () => {
    test('Handling the multi selection dropdown', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        const colors = ['Red', 'Blue', 'Green'];

        const options = await page.$$('#colors option');

        for (const option of options) {
            const optionText = await option.textContent();
            if (optionText.includes('Red') || optionText.includes('Blue') || optionText.includes('Green')) {
                await page.locator('#colors').selectOption(colors);
            }
        }
        // Assert selected options
        const selectedOptions = page.locator('#colors option:checked');
        await expect(selectedOptions).toHaveText(colors);

        await page.waitForTimeout(10000);
    });

});