import { test, expect } from "@playwright/test";

test.describe('Handling Multi Selection Dropdown', () => {
    test('Handling the multi selection dropdown', async ({ page }) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const usernameInput = await page.locator("input[name='username']");
        const passwordInput = await page.locator("input[name='password']");

        const orangeHRMLogo = await page.locator("//img[@alt='company-branding']");
        await page.waitForSelector(orangeHRMLogo);
        await expect(orangeHRMLogo).toBeVisible();

        await expect(usernameInput).toBeVisible();
        await usernameInput.fill('Admin');

        await expect(passwordInput).toBeVisible();
        await passwordInput.fill('admin123');

        await page.waitForTimeout(3000);

        await page.locator("button[type='submit']").click();

        const dashboardHeaderText = await page.locator("//h6[text()='Dashboard']");
        await page.waitForSelector("//h6[text()='Dashboard']");
        await expect(dashboardHeaderText).toBeVisible();

        const oranheHRMLogo = await page.locator("//img[@alt='client brand banner']");
        await expect(oranheHRMLogo).toBeVisible();

        const PIMMenuOption = await page.locator("//div[@class='oxd-sidepanel-body']/ul/li//span[text()='PIM']");
        await expect(PIMMenuOption).toBeVisible();
        await PIMMenuOption.click();
        await page.waitForTimeout(5000);

        const PIMHeaderText = await page.locator("//span[@class='oxd-topbar-header-breadcrumb']/h6");
        await expect(PIMHeaderText).toBeVisible();
        await expect(PIMHeaderText).toHaveText('PIM');

        const employeeStatusDropdownMenuIcon = await page.locator("//div[@class='oxd-form-row']//div[3]//i");

        const employeeStatusDropdownOptions = await page.locator("//div[@role='listbox']/div/span");
        await employeeStatusDropdownMenuIcon.click();
        await page.waitForTimeout(2000);
        await employeeStatusDropdownOptions.filter({ hasText: 'Full-Time Contract' });
        await employeeStatusDropdownOptions.nth(3).click();

        await page.waitForTimeout(5000);

        /* const includeDropdownMenuIcon = await page.locator("//div[@class='oxd-form-row']//div[4]//i");
         const includeDropdownOptions = await page.locator("//div[@role='listbox']/div/span");
         await includeDropdownMenuIcon.click();
         await page.waitForTimeout(2000);
         await includeDropdownOptions.filter({ hasText: 'Current and Past Employees' });
         await includeDropdownOptions.nth(2).click();
 
         await page.waitForTimeout(5000);
 */

    });
});