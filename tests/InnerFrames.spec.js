import{test} from '@playwright/test';

test("Handling frames test", async({page})=>{


await page.goto('https://ui.vision/demo/webtest/frames/');

const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
const childFrames = await frame3.childFrames();
//console.log("Number of child frames :",childFrames.length)

await childFrames[0].locator('//*[@id="i5"]/div[3]/div').check();

await page.waitForTimeout(5000);

})