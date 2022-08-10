import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test.describe("Webhooks Subscription", async () => {

  test('New Webhook Subscription', async ({ page }, testInfo) => {

    await page.goto(Env.test);

    // Click a[role="button"]:has-text("Administration")
    await page.locator('a[role="button"]:has-text("Administration")').click();
    // await expect(page).toHaveURL('http://localhost:8080/pages/dashboard');

    // Click a[role="button"]:has-text("Webhook Subscriptions")
    await page.locator('a[role="button"]:has-text("Webhook Subscriptions")').click();
    // await expect(page).toHaveURL('http://localhost:8080/pages/webhook-subscription');

    // Click [aria-label="NEW WEBHOOK SUBSCRIPTION"]
    await page.locator('[aria-label="NEW WEBHOOK SUBSCRIPTION"]').click();


    // Click [placeholder="Webhook Endpoint"]
    await page.locator('[placeholder="Webhook Endpoint"]').click();

    // Fill [placeholder="Webhook Endpoint"]
    await page.locator('[placeholder="Webhook Endpoint"]').fill('https://localhost:8000');
    await page.locator('[placeholder="Webhook Endpoint"]').press('Enter');
    await page.locator('[placeholder="Webhook Endpoint"]').press('Tab');

    // Click textarea[name="text-area1"]
    await page.locator('textarea[name="text-area1"]').click();

    // Fill textarea[name="text-area1"]
    await page.locator('textarea[name="text-area1"]').fill('Adding new webhooks');

    // Click [placeholder="Header Key"]
    await page.locator('[placeholder="Header Key"]').click();

    // Fill [placeholder="Header Key"]
    await page.locator('[placeholder="Header Key"]').fill('one');

    await page.locator('[placeholder="Header Key"]').press('Enter');

    await page.locator('[placeholder="Header Key"]').press('Tab');

    // Click [placeholder="Header Value"]
    await page.locator('[placeholder="Header Value"]').click();

    // Fill [placeholder="Header Value"]
    await page.locator('[placeholder="Header Value"]').fill('two');

    await page.locator('[placeholder="Header Value"]').press('Enter');

    await page.locator('[placeholder="Header Value"]').press('Tab');

    // Click [aria-label="add"]
    await page.locator('[aria-label="add"]').click();

    // Click [aria-label="new_action"]
    await page.locator('[aria-label="one_action"]').click();

   // Click [aria-label="UpdateEditnew"]
    await page.locator('[aria-label="UpdateEditone"]').click();

   // Click #inputText29
  await page.locator('[placeholder="Header value"]').click();
  // Fill #inputText29
  await page.locator('[placeholder="Header value"]').fill('same');

  await page.locator('[placeholder="Header value"]').press('Enter');

  await page.locator('[placeholder="Header value"]').press('Tab');

  // // Click text=Webhook Endpoint Webhook Endpoint Webhook EventAdditional Webhook Headers addHea >> #buttonId0
  // await page.locator('text=Webhook Endpoint Webhook Endpoint Webhook EventAdditional Webhook Headers addHea >> #buttonId0').click();

   
    // Click div[role="dialog"] rds-button:has-text("Save")
    await page.locator('div[role="dialog"] rds-button:has-text("Save")').click();
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