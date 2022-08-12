import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test.describe("Tenants Page", async () => {

  // test('Goto Url', async ({ page }) => {
  //   await page.goto(Env.test);
  // })


  test('New Tenant', async ({ page }) => {
    await page.goto(Env.test);
// 
    await page.locator('a[role="button"]:has-text("Tenants")').click(),

      // Click text=New Tenant
      await page.locator('[aria-label="New Tenant"]').click();

    // Click text=Tenancy Name *Tenancy NameTenant Name *Tenant NameAdmin Email *Admin EmailEditio >> img
    await page.locator('text=Tenancy Name * Tenancy Name *Tenant Name * Tenant Name *Admin Email * Admin Emai >> img').click();
    // Click [placeholder="Tenancy Name"]
    await page.locator('[placeholder="Tenancy Name"]').click();

    // Fill [placeholder="Tenancy Name"]
    await page.locator('[placeholder="Tenancy Name"]').fill("Demo7");

    await page.locator('[placeholder="Tenancy Name"]').press("Enter");

    await page.locator('[placeholder="Tenancy Name"]').press("Tab");

    // Click [placeholder="Tenant Name"]
    await page.locator('[placeholder="Tenant Name"]').click();

    // Fill [placeholder="Tenant Name"]
    await page.locator('[placeholder="Tenant Name"]').fill("Demo7");

    await page.locator('[placeholder="Tenant Name"]').press("Enter");

    await page.locator('[placeholder="Tenant Name"]').press("Tab");

    // Click [placeholder="Admin Email"]
    await page.locator('[placeholder="Admin Email"]').click();

    // Fill [placeholder="Admin Email"]
    await page.locator('[placeholder="Admin Email"]').fill("demo5@gmail.com");

    await page.locator('[placeholder="Admin Email"]').press("Enter");

    await page.locator('[placeholder="Admin Email"]').press("Tab");

    // Select 1
    // await page.locator('[aria-label="Default select example"]').selectOption("1");
    await page.locator('text=Edition Not assigned Standard >> [aria-label="Default select example"]').selectOption('1');

    // Check text=Tenancy Name *Tenancy NameTenant Name *Tenant NameAdmin Email *Admin EmailEditio >> input[type="checkbox"]
    await page.locator("text=Unlimited Time Subscription").click();

    // Click text=Tenancy Name *Tenancy NameTenant Name *Tenant NameAdmin Email *Admin EmailEditio >> svg
    await page.locator('text=Tenancy Name * Tenancy Name *Tenant Name * Tenant Name *Admin Email * Admin Emai >> [placeholder="Date"]').click();

    // Click button:has-text("›")
    await page.locator('button:has-text("›")').click();
    // Click .is-highlighted
    await page.locator(".is-highlighted").click();

    // await page.locator('button:has-text("Next")').click();

    await page.locator('[aria-label="Next"]').click();

    await page.locator('button:has-text("Next")').press("Enter");

    // Click div[role="dialog"] >> text=Settings
    await page.locator('div[role="dialog"] >> text=Settings').click();

    // Check #useHostDatabase
    await page.locator("#useHostDatabase").check();

    await page.locator("#useHostDatabase").press("Enter");

    // Click [placeholder="Password"]
    await page.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill("1234567890a");

    await page.locator('[placeholder="Password"]').press("Enter");

    // Press Tab
    await page.locator('[placeholder="Password"]').press("Tab");

    // Fill [placeholder="Confirm Password"]
    await page.locator('[placeholder="Confirm Password"]').fill("1234567890a");

    await page.locator('[placeholder="Confirm Password"]').press("Enter");

    // Check #setRandomPassword
    await page.locator("#setRandomPassword").check();

    // Check #active
    await page.locator("#active").check();

    // Click text=Save
    await page.locator('div[role="dialog"] rds-button:has-text("Save")').click();

  });


  // Edit 




  test('Edit Tenant', async ({ page }) => {

    await page.goto(Env.test);
    await page.locator('a[role="button"]:has-text("Tenants")').click();
   // const rows = page.locator('table tr');
    // Pattern 1: use locator methods to calculate text on the whole list.
   // const texts = await rows.allTextContents();
   // Pattern 2: do something with each element in the list.
   // const count = await rows.count()
   // for (let i = 0; i < count; ++i){
   
     await page.locator('[aria-label="Demo7_action"]').click();
     await page.locator('[aria-label="UpdateEditDemo7"]').click();
    
  
  
   // }
   





    // Click [placeholder="Tenancy Name"]
    await page.locator('[placeholder="Tenancy Name"]').click();

    // Fill [placeholder="Tenancy Name"]
    await page.locator('[placeholder="Tenancy Name"]').fill('SurajKhupee');

    // Click text=Next
    await page.locator('text=Next').click();

    // Click [placeholder="Password"]
    await page.locator('[placeholder="Password"]').click();

    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill('1234567890a1');

    // Click [placeholder="Confirm Password"]
    await page.locator('[placeholder="Confirm Password"]').click();

    // Fill [placeholder="Confirm Password"]
    await page.locator('[placeholder="Confirm Password"]').fill('1234567890a1');

    // Click text=Activate
    await page.locator("#active").check();

    // Click text=Password * Password *Confirm Password * Confirm Password * Activate CancelSave >> [aria-label="Cancel"]
    // await page.locator('[aria-label="Cancel"]').click();

    // Click #settings rds-button:has-text("Save")
    await page.locator('#settings rds-button:has-text("Save")').click();
   
  })

  // Delete Tenant 

  test('Delete Tenant', async ({ page }) => {

    await page.goto(Env.test);

    await page.locator('[aria-label="Demo7_action"]').click();
    await page.locator('[aria-label="UpdateDeleteDemo7"]').click();

   // await page.locator('text=Delete').nth(2).click();

    // Click div[role="dialog"] >> text=Cancel
    // await page.locator('[aria-label="Cancel"]').click();

   // Click button:has-text("Delete")
    // await page.locator('[aria-label="CancelDelete"]').click();
    await page.locator('div[role="dialog"] [aria-label="Delete"]').click();

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