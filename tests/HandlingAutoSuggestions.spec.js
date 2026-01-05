import { test, expect } from "@playwright/test";

test.describe('Handling Multi Selection Dropdown', () => {
    test('Handling the multi selection dropdown', async ({ page }) => {

        await page.goto('https://www.abhibus.com/');

        const sourceInput = page.locator("input[placeholder='Leaving From']");
        const destinationInput = page.locator("input[placeholder='Going To']");
        const sourceOptions = page.locator("//ul[contains(@class,'auto-complete-list')]/li/div/div[2]/div/div[1]");
        const destOptions = page.locator("//ul[contains(@class,'auto-complete-list')]/li/div/div[2]/div/div[1]");

        //await expect(sourceInput).toBeVisible();
        await sourceInput.fill('Ban');
        await page.waitForTimeout(2000);
        sourceOptions.filter({ hasText: 'Bangalore' });
        await sourceOptions.first().click();

        //await expect(destinationInput).toBeVisible();
        await destinationInput.fill('Che');
        await page.waitForTimeout(2000);
        destOptions.filter({ hasText: 'Chennai' });
        await destOptions.first().click();

        await page.waitForTimeout(5000);

    });

});