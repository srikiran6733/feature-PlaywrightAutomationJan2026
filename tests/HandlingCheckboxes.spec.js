import { test, expect } from '@playwright/test';


test.describe('Handling Checkboxes', () => {
    test('Handling the checkboxes', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        const checkboxes = [
            "//input[@id='sunday']",
            "//input[@id='tuesday']",
            "//input[@id='wednesday']",
            "//input[@id='friday']",
        ];

        for (const checbox of checkboxes) {
            const checkboxElement = page.locator(checbox);
            await checkboxElement.check();
            await expect(checkboxElement).toBeChecked();
        }

        await page.waitForTimeout(5000);

        for (const checbox of checkboxes) {
            const checkboxElement = page.locator(checbox);
            if (await checkboxElement.isChecked()) {
                await checkboxElement.uncheck();
                await expect(checkboxElement).not.toBeChecked();
            }

        }
        await page.waitForTimeout(8000);

    });


});