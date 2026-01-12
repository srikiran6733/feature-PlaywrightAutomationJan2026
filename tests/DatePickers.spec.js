import { test } from '@playwright/test';

test("Handling date picker test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const Year = "2026";
    const Month = "April";
    const Date = "20";

    await page.locator("#datepicker").click();

    while (true) {
        const ExpectedMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();
        const ExpectedYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        if ((ExpectedMonth === Month && ExpectedYear === Year)) {
            break;
        }
        await page.locator("//a[@title='Next']").click();
    }
    //await page.locator(`//a[@class='ui-state-default' and text()=${Date}]`).click()

    const allDates = await page.$$("table[class='ui-datepicker-calendar'] tbody tr td a");

    for(const dt of allDates){
        if(dt.textContent()==Date){
            await dt.click();
            break;
        }
    }
    await page.waitForTimeout(5000)

});