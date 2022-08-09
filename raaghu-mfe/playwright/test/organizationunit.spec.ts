import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test.describe("Organization Unit Page", async () => {
  test("New Organization Unit", async ({ page }) => {
    await page.goto(Env.test);
    // Click a[role="button"]:has-text("Administration")
    await page.locator('a[role="button"]:has-text("Administration")').click();

    // Click a[role="button"]:has-text("Organization Units")
    //await page.locator('a[role="button"]:has-text("Organization Units")').click();
    // Click text=Till
    await page.locator('text=Test primary').click();
    // Click [aria-label="New Member"]
    await page.locator('[aria-label="New Member"]').click();
    await page
      .locator("text=admin admin (admin@aspnetzero.com)")
      .first()
      .click();
    // Click text=Select UsersName Actions admin admin (admin@aspnetzero.com) admin admin (admin@a >> [aria-label="Save"]
    await page
      .locator('div[role="dialog"] rds-button:has-text("Save")')
      .click();

    await page.locator('[aria-label="admin_action"]').click();
    await page.locator('[aria-label="UpdateDeleteadmin"]').click();
    await page.locator('div[role="dialog"] [aria-label="Delete"]').click();

    await page.locator("text=Roles").nth(1).click();
    // Click [aria-label="New Role"]
    await page.locator('[aria-label="New Role"]').click();
    // Click text=Golden Roles
    await page.locator('text=prathessh >> nth=0').first().click();
    // Click text=Select RolesName Actions Golden Roles undefined_actionDelete test undefined_acti >> [aria-label="Save"]
    await page.pause();
    await page
      .locator('div[role="dialog"] rds-button:has-text("Save")').first()
      .click();

    await page.locator('[aria-label="Prathessh_action"]').click();
    // Click text=Golden Roles 28/06/2022, 04:21:13 PM undefined_actionDelete >> [aria-label="UpdateDeleteundefined"]
    await page.locator('[aria-label="UpdateDeletePrathessh"]').click();
    // Click text=Admin 19/05/2022, 11:25:20 PM undefined_actionDelete Are you sure ? The record w >> [aria-label="Delete"]
    await page.locator('div[role="dialog"] [aria-label="Delete"]').click();
  });

  test("Add New Organization Unit", async ({ page }) => {
    // Click .pl-3 >> nth=0
    await page.goto(Env.test);
    await page.locator('a[role="button"]:has-text("Administration")').click();

    await page.locator('[aria-label="New-Root-Unit"]').click();
    // Click [placeholder="Parent label"]
    await page.locator('[placeholder="Parent label"]').click();
    // Fill [placeholder="Parent label"]
    await page.locator('[placeholder="Parent label"]').fill("john");
    // Click div[role="dialog"] rds-button:has-text("Save")
    await page
      .locator('div[role="dialog"] rds-button:has-text("Save")')
      .click();
  });


  test.afterAll(async ({ page }, testInfo) => {
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    const screenshot = await page.screenshot();
    await testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});
