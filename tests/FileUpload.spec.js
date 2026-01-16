import { test, expect } from '@playwright/test';


test("Handling the file upload test", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    //await page.locator("//input[@id='filesToUpload']").click();

    await page.locator("//input[@id='filesToUpload']").setInputFiles(['tests/UploadFiles/dev-example.pdf', 'tests/UploadFiles/image-doc.pdf'])

    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('dev-example.pdf')
    await expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('image-doc.pdf')

    await page.locator("//input[@id='filesToUpload']").setInputFiles([]);
    await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

    await page.waitForTimeout(5000)

})