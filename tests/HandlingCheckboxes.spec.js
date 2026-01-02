import { test, expect } from '@playwright/test';


test.describe('Handling Checkboxes', () => {
    test('Handling the checkboxes', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        const checkboxes = [
            "#//input[@id='sunday']",
            "#//input[@id='tuesday']",
            "#//input[@id='wednesday']",
            "#//input[@id='friday']",
        ]

        for(const checbox of checkboxes){
            console.log(`Handling the checkbox: ${checbox}`);
        }
    });

});