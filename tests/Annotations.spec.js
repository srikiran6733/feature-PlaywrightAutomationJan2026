import { test, expect } from '@playwright/test';

/*
test("Handling the annotations test1", async ({ page }) => {
    console.log("This is test1 .....")

})


//*****************************1.only****************************

test.only("Handling the annotations test2", async ({ page }) => {
    console.log("This is test2 .....")

})

//*****************************2.skip****************************

test.skip("Handling the annotations test3", async ({ page }) => {
    console.log("This is test3 .....")

})

test("Handling the annotations test4", async ({ page, browserName }) => {
    console.log("This is test4 .....")
    if (browserName === 'chromium') {
        test.skip();
    }
})

test("Handling the annotations test4", async ({ page, browserName }) => {
    console.log("This is test4 .....")
    if (browserName === 'firefox') {
        test.skip();
    }
})

test.skip("Handling the annotations test5", async ({ page }) => {
    console.log("This is test5 .....")

})

//*****************************3.Fail****************************

test.fail("Handling the annotations test6", async ({ page }) => {
    console.log("This is test6 .....")

})

test("Handling the annotations test5", async ({ page, browserName }) => {
    console.log("This is test5 .....")
    test.fail()

    await expect(1).toEqual(2);
})

test("Handling the annotations test5", async ({ page, browserName }) => {
    console.log("This is test5 .....")
    test.fail()
    await expect(1).toEqual(1);
})
    
//*****************************4.Fixme****************************

test("Handling the annotations test5", async ({ page, browserName }) => {
    console.log("This is test5 .....")
    test.fixme()

})
*/

//*****************************5.slow****************************
test("This is Test6......", async ({ page }) =>{
    //test.slow();
    //setTimeout(3000);
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//*[@id="PageList2"]/div/ul/li[5]/a').click();

})