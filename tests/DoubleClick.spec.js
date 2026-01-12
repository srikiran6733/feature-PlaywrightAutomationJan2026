import{test,expect} from '@playwright/test';


test('Handling the double click ',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

const field2 = await page.locator( "//input[@id='field2']")
const copyTextElement =await page.locator("//button[normalize-space()='Copy Text']")

await copyTextElement.dblclick()

await expect(field2).toHaveValue('Hello World!')

await page.waitForTimeout(5000)

})