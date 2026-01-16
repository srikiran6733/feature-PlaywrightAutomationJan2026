const { test, expect } = require('@playwright/test');

test("Handling the keyboard keys test", async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    const inputText = "Welcome To Automation Testing Practice"
    const inputBox = await page.locator("//textarea[@placeholder='Paste one version of the text here.']")
    //await inputBox.fill(inputText)
    
    // Press keys one by one
    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").pressSequentially('Welcome To Automation Testing Practice');
    const outputBox = await page.locator("//textarea[@placeholder='Paste another version of the text here.']")

    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')

    await expect(outputBox).toHaveValue(inputText)

    await page.waitForTimeout(5000)

})