import{test,expect} from '@playwright/test';

test('Handling the screenshots test', async({page})=>{

await page.goto("https://demoblaze.com/")
await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'screenshot.png'})

await page.waitForTimeout(5000)

})

test('Handling the full page screenshots test', async({page})=>{

await page.goto("https://demoblaze.com/")
await page.screenshot({path: 'tests/Screenshots/'+Date.now()+'FullPagescreenshot.png',fullPage:true})

await page.waitForTimeout(5000)

})

test.only('Handling the felement screenshots test', async({page})=>{

await page.goto("https://demoblaze.com/")
await page.locator('//*[@id="tbodyid"]/div[1]').screenshot({path: 'tests/Screenshots/'+Date.now()+'ElementScreenshot.png'})

await page.waitForTimeout(5000)

})