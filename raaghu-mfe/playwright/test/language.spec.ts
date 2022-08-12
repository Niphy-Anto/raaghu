import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test.describe("Language Page", async () => {
  test("New Language", async ({ page }) => {
    await page.goto(Env.test);
    // Click a[role="button"]:has-text("Administration")
    await page.locator('a[role="button"]:has-text("Administration")').click();

    await page.locator('a[role="button"]:has-text("Language")').click();

    await page.locator('[aria-label="New Language"]').click();
    // Select af
    // await page.locator('[aria-label="Language"]').selectOption("af");
    // Click label:has-text("al") >> nth=2
    await page.locator('a[role="button"]:has-text("Country Code")').click();
    // await page.locator('text=COUNTRY CODE>> [aria-label="dropdownMenuLink"]').selectOption('1');
    await page.pause();
    //await page.locator('[id="dropdownMenuLink"]').click();
    // await page.locator('label:has-text("al")').nth(2).click();
    // Click #AddLanguage > .offcanvas-body
    await page
      .locator('div[role="dialog"] rds-button:has-text("Save")')
      .click();

    // assert.equal(page.url(), 'http://localhost:8080/pages/language');
    // Click [aria-label="Afar \(Ethiopia\)_action"]
    await page.locator('[aria-label="Deutsch_action"]').click();
    await page
      .locator('[aria-label="UpdateSet as default languageDeutsch"]')
      .click();
    // Click [aria-label="UpdateSet as default languageAfar \(Ethiopia\)"]

    // Click [aria-label="English_action"]
    await page.locator('[aria-label="English_action"]').click();
    // Click [aria-label="UpdateSet as default languageEnglish"]
    await page
      .locator('[aria-label="UpdateSet as default languageEnglish"]')
      .click();
    // Click [aria-label="Afar \(Ethiopia\)_action"]
    await page.locator('[aria-label="Italiano_action"]').click();
    // Click [aria-label="UpdateEditAfar \(Ethiopia\)"]
    await page.locator('[aria-label="UpdateDeleteItaliano"]').click();

    await page.locator('div[role="dialog"] [aria-label="Delete"]').click();
  });
  test("Edit Language", async ({ page }) => {
    await page.goto(Env.test);
    await page.locator('a[role="button"]:has-text("Administration")').click();

    await page.locator('a[role="button"]:has-text("Language")').click();

    await page.locator('[aria-label="English \(UK\)_action"]').click();
    // Click [aria-label="UpdateEditAfar \(Ethiopia\)"]
    await page.locator('[aria-label="UpdateEditEnglish \(UK\)"]').click();
    // Select aa-DJ
    // Click text=Afrikaans_actionEditChange TextsSet as default languageDelete Are you sure ? The >> [aria-label="Delete"]
    // await page.locator('[aria-label="Language"]').selectOption("af");
    // Click label:has-text("al") >> nth=2
    await page.locator('[aria-label="Country Code"]').click();
    // await page.locator('text=COUNTRY CODE>> [aria-label="dropdownMenuLink"]').selectOption('1');

    //await page.locator('[id="dropdownMenuLink"]').click();
    await page.locator('label:has-text("al")').nth(2).click();
    await page
      .locator('div[role="dialog"] rds-button:has-text("Save")')
      .click();
  });

  test.afterAll(async ({ page }, testInfo) => {
    await page.screenshot({ path: "screenshot.png", fullPage: true });

    const screenshot = await page.screenshot();
    await testInfo.attach("screenshot", {
      body: screenshot,
      contentType: "image/png",
    });
  });
});
