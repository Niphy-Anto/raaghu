import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test.describe("AuditLog Page", async () => {
  test('OPeration Logs', async ({ page }) => {
    await page.goto(Env.test);
    await page.locator('a[role="button"]:has-text("Administration")').click();
    // assert.equal(page.url(), 'http://localhost:8080/pages/organization-unit');
    // Click a[role="button"]:has-text("Audit logs")


    await page.locator('a[role="button"]:has-text("Audit logs")').click()

    // Click [placeholder="Start Date"]


    await page.locator('[aria-label="FindUsers_action"]').first().click();
    await page.locator('[aria-label="UpdateViewFindUsers"]').first().click();
    await page.mouse.move(0, 0);
    await page.mouse.down();
    await page.mouse.move(0, 100);
    await page.locator('[placeholder="Start Date"]').click();
    // Click .is-highlighted
    await page.locator('table[role="grid"] >> text=22').click();
    // Click [placeholder="End Date"]
    await page.locator('[placeholder="End Date"]').click();
    // Click .is-highlighted
    await page.locator('table[role="grid"] >> text=25').first().click();

    await page.locator('[placeholder="User"]').click();


    await page.locator('[placeholder="User"]').fill('admin');

    await page.locator('[placeholder="User"]').press('Enter');

    // Check text=Advanced Filters Export To Excel >> input[type="checkbox"]
    await page.check("text=Advanced Filters")
    //await page.locator('text=Advanced Filters Export To Excel >> input[type="checkbox"]').check();
    // Click [placeholder="Service"]
    await page.locator('[placeholder="Service"]').click();
    // Fill [placeholder="Service"]
    await page.locator('[placeholder="Service"]').fill('OrganizationUnitAppService');
    await page.locator('[placeholder="Service"]').press('Enter');
    // Click [placeholder="Action"]
    await page.locator('[placeholder="Action"]').click();
    // Fill [placeholder="Action"]
    await page.locator('[placeholder="Action"]').fill('GetOrganizationUnit');
    // Select false
    await page.locator('[placeholder="Action"]').press('Enter');
    //await page.locator('select[name="value"]').nth(2).selectOption('false');
    // Click text=Advanced Filters Export To Excel >> [aria-label="Export To Excel"]
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('text=Advanced Filters Export To Excel >> [aria-label="Export To Excel"]').click()
    ]);
  })
  test('ChangeLogs', async ({ page }) => {
    await page.goto(Env.test);
    await page.locator('a[role="button"]:has-text("Administration")').click();
    // assert.equal(page.url(), 'http://localhost:8080/pages/organization-unit');
    // Click a[role="button"]:has-text("Audit logs")


    await page.locator('a[role="button"]:has-text("Audit logs")').click()

    // Click [placeholder="Start Date"]
    await page.locator('text=Change Logs').click();
    // Click [placeholder="Date Range"] >> nth=0
    await page.locator('[placeholder="Date Range"]').first().click();
    // Click .is-highlighted
    await page.locator('table[role="grid"] >> text=12').first().click();
    // Click [placeholder="Date Range"] >> nth=1
    await page.locator('[placeholder="Date Range"] >> nth=1').click();
    // Click text=30 >> nth=1
    await page.locator('table[role="grid"] >> text=22').first().click();
    // Click [placeholder="User name"]
    await page.locator('[placeholder="User name"]').click();
    // Fill [placeholder="User name"]
    await page.locator('[placeholder="User name"]').fill('admin');
    // Select Success
    await page.locator('text=All Success HasErrorSelectExport To Excel >> [aria-label="Default select example"]').selectOption('Success');
  })


  test.afterAll(async ({ page }, testInfo) => {
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    const screenshot = await page.screenshot();
    await testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
})