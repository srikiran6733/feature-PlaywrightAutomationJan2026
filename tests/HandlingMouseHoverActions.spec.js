import{test,expect} from '@playwright/test';


test('Handling Mouse Hover Actions Test', async({page})=>{

await page.goto('https://ecommerce-playground.lambdatest.io/')

const megaMenu = await page.locator("//span[normalize-space()='Mega Menu']")
const mobileCases = await page.locator("//a[normalize-space()='Mobile cases']")

await megaMenu.hover();
await mobileCases.hover();
await mobileCases.click();

await page.waitForTimeout(10000);

})