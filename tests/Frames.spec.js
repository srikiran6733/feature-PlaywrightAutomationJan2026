import{test,expect} from '@playwright/test';

test("Handling frames test", async({page})=>{


await page.goto('https://ui.vision/demo/webtest/frames/');


//Handling the frames using frame()
const allFrames = await page.frames();
console.log('Number of frames:',allFrames.length);

//Approach-1
//const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
//await frame1.fill("input[name='mytext1']",'GeethaSree');

//Approac-2
const frame1 = await page.frameLocator('//*[@src="frame_1.html"]').locator("input[name='mytext1']")
await frame1.fill('GeethaSree');


//frame-3
const frame2 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
await frame2.fill("input[name='mytext3']",'KiranKumar');

//frame-2
const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})
await frame3.fill("input[name='mytext2']",'Deyyam');


//frame-4
const frame4 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_4.html'})
await frame4.fill("input[name='mytext4']",'Milky');

//frame-5
const frame5 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_5.html'})
await frame5.fill("input[name='mytext5']",'Nakshu');


await page.waitForTimeout(5000);

})