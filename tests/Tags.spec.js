import { test, expect } from '@playwright/test';

test('test1 @sanity', async ({ page }) => {
    console.log('This is test1 block......');
});

test('test2 @sanity', async ({ page }) => {
    console.log('This is test2 block......');
});

test('test3 @regression', async ({ page }) => {
    console.log('This is test3 block......');
});

test('test4 @regression', async ({ page }) => {
    console.log('This is test4 block......');
});

test('test5 @sanity@reg', async ({ page }) => {
    console.log('This is test5 block......');
});

//npx playwright test tests/Tags.spec.js  --grep "@reg" --grep-invert @sanity@reg
//npx playwright test tests/Tags.spec.js  --grep "@reg"