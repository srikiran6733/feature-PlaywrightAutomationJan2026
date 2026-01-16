import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('SriKiranch');
    await page.locator('#loginpassword').fill('test@143');
    await page.locator("//button[normalize-space()='Log in']").click();
    await page.waitForSelector('#nameofuser');
});

test('Handling the Hooks in Playwright', async () => {
    await expect(page.locator('#nameofuser'))
        .toContainText('SriKiranch');
});

test('Home page test', async () => {

    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
    });

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();
});

test.afterEach(async () => {
    await page.locator('#logout2').click();
});
