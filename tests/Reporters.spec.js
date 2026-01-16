const { test, expect } = require('@playwright/test')

test.skip("Test 1", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
})

test("Test 2", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('Automation Testing Practice')
})

test("Test 3", async ({ page }) => {

    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
})
