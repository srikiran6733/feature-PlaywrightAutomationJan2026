const{test,expect} = require('@playwright/test');

test("Handling the Right click actions",async({page})=>{

await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

const rightClickMeButton = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
await rightClickMeButton.click({button: 'right'});

await page.waitForTimeout(5000)

})