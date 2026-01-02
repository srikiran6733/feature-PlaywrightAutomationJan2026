const { test, expect } = require('@playwright/test');


test.describe('Handle Input Boxes', () => {

    test('Handling the input box', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        const nameInputBox = page.locator('input[placeholder="Enter Name"]');
        const emailInputBox = page.locator('#email');
        const phoneInputBox = page.locator('#phone');
        const addressInputBox = page.locator('#textarea');
        await expect(emailInputBox).toHaveAttribute('placeholder', 'Enter EMail');

        await expect(nameInputBox).toBeVisible();
        await expect(nameInputBox).toBeEnabled();
        await expect(nameInputBox).toHaveAttribute('placeholder', 'Enter Name');
        await expect(nameInputBox).toBeEmpty();
        await nameInputBox.clear();
        await nameInputBox.fill('John Doe');
        await expect(nameInputBox).toHaveValue('John Doe');

        await expect(emailInputBox).toBeVisible();
        await expect(emailInputBox).toBeEnabled();
        await expect(emailInputBox).toHaveAttribute('placeholder', 'Enter EMail');
        await expect(emailInputBox).toBeEmpty();
        await emailInputBox.clear();
        await emailInputBox.fill('john.doe@example.com');
        await expect(emailInputBox).toHaveValue('john.doe@example.com');

        await expect(phoneInputBox).toBeVisible();
        await expect(phoneInputBox).toBeEnabled();
        await expect(phoneInputBox).toHaveAttribute('placeholder', 'Enter Phone');
        await expect(phoneInputBox).toBeEmpty();
        await phoneInputBox.clear();
        await phoneInputBox.fill('1234567890');
        await expect(phoneInputBox).toHaveValue('1234567890');

        await expect(addressInputBox).toBeVisible();
        await expect(addressInputBox).toBeEnabled();
        await expect(addressInputBox).toHaveAttribute('id', 'textarea');
        await expect(addressInputBox).toBeEmpty();
        await addressInputBox.clear();
        await addressInputBox.fill('123 Main St, Anytown, USA');
        await expect(addressInputBox).toHaveValue('123 Main St, Anytown, USA');


        await page.waitForTimeout(3000);

    });

});