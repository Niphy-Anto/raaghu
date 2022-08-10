
import { test, expect } from '@playwright/test';
import Env from '../utils/environment';

test('Maintenance', async ({ page }) => {
  await page.goto(Env.test)

  // Click a[role="button"]:has-text("Administration")
  await page.locator('a[role="button"]:has-text("Administration")').click();
  // Click a[role="button"]:has-text("Maintenance")
  await page.locator('a[role="button"]:has-text("Maintenance")').click();

  // Go to http://localhost:8080/pages/maintenance/maintenance
  // await page.goto('http://localhost:8080/pages/maintenance/maintenance');

  // Click text=Caches
  await page.locator('text=Caches').click();
  // Click #nav-Caches >> text=2
  // await page.locator('#nav-Caches >> text=2').click();
  // // Click #nav-Caches a:has-text("1")
  // await page.locator('#nav-Caches a:has-text("1")').click();

  await page.locator('[aria-label="deleteAbpZeroMultiTenantLocalizationDictionaryCache"]').click();

  await page.locator('div[role="dialog"] [aria-label="Cancel"]').click();

  await page.locator('[aria-label="deleteAbpZeroMultiTenantLocalizationDictionaryCache"]').click();

  await page.locator('div[role="dialog"] [aria-label="Delete"]').click();

  // Click [aria-label="CLEAR ALL"]
  await page.locator('[aria-label="CLEAR ALL"]').click();

  await page.locator('div[role="dialog"] [aria-label="Delete"]').click();

  // Click text=Website Logs
  await page.locator('text=Website Logs').click();

   // Click #nav-websiteLogs a:has-text("2")
   await page.locator('#nav-websiteLogs a:has-text("2")').click();
  // Click a:has-text("3")
  await page.locator('a:has-text("3")').click();

  // Click #nav-websiteLogs a:has-text("1")
  await page.locator('#nav-websiteLogs a:has-text("1")').click();

  //Click text=DOWNLOAD ALL
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('[aria-label="DOWNLOAD ALL"]').click()
  ]);
})

test.afterAll(async ({ page }, testInfo) => {
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  const screenshot = await page.screenshot();
  await testInfo.attach("screenshot", {
    body: screenshot,
    contentType: "image/png",
  });
});
