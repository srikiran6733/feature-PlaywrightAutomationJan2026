const { test, expect } = require('@playwright/test');

test.describe('Handling Dropdowns', () => {
    test('Handling the dropdowns', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        //await page.locator('#country').selectOption('India');
        //await page.locator('#country').selectOption({label:'India'});
        //await page.locator('#country').selectOption({index:3});
        //await page.locator('#country').selectOption({value:'india'});

        const options = await page.$$('#country option');
        /*
                let status = false;
                for(const option of options){
                    const optionText = await option.textContent();
                    if(optionText.includes('India')){
                        status = true;
                        break;
                    }
        
                }
                    */

        for (const option of options) {
            const optionText = await option.textContent();
            if (optionText.includes('India')) {
                await page.locator('#country').selectOption({ label: 'India' });
                break;
            }
        }
        await page.waitForTimeout(3000);
    });

});