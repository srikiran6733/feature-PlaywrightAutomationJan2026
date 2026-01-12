import{test,expect} from '@playwright/test';

test("Handling the Hooks in playwright",async({page})=>{

await page.goto("https://demoblaze.com/");

//Login

await page.locator("#login2").click();

const usernameEditbox = await page.locator("#loginusername")
const passwordEditbox = await page.locator("#loginpassword")
const loginButton = await page.locator("button[onclick='logIn()']")

await usernameEditbox.fill('SriKiranch')
await passwordEditbox.fill('test@143')
await loginButton.click()

await page.waitForSelector("//a[@id='nameofuser']")
await expect(await page.locator("//a[@id='nameofuser']")).toHaveText("Welcome SriKiranch")

//Logout
await page.locator("#logout2").click()

})

test("Home page test",async({page})=>{

await page.goto("https://demoblaze.com/");

//Login

await page.locator("#login2").click();
const usernameEditbox = await page.locator("#loginusername")
const passwordEditbox = await page.locator("#loginpassword")
const loginButton = await page.locator("button[onclick='logIn()']")

await usernameEditbox.fill('SriKiranch')
await passwordEditbox.fill('test@143')
await loginButton.click()

//Add Product to cart
await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
await page.locator("//a[normalize-space()='Add to cart']").click();

page.on('dialog', async dialog =>{

await expect(dialog.message).toContain('Product added.')
await dialog.accept();

})

//Logout
await page.locator("#logout2").click()

})