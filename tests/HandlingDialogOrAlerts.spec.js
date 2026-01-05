import { test, expect } from '@playwright/test';


test('Handling Dialogs and Alerts', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handling Alert
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();

    });

    await page.click("//button[@id='alertBtn']");

    await page.waitForTimeout(5000);

});

test('Handling confirmation alert with OK and Cancel buttons', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handling Alert
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept();

    });

    await page.click("//button[@id='confirmBtn']");
    await page.waitForTimeout(2000);
    await expect(page.locator("//p[@id='demo']")).toContainText('You pressed OK!');

    await page.waitForTimeout(5000);

});

test.only('Handling Prompt alert', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handling Alert
    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        await expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('GeethaSreeCH');

    });

    await page.click("//button[@id='promptBtn']");
    await page.waitForTimeout(2000);
    await expect(page.locator("//p[@id='demo']")).toContainText('Hello GeethaSreeCH! How are you today?');

    await page.waitForTimeout(5000);

});