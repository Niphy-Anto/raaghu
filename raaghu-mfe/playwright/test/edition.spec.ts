import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test('Visual Settings', async ({ page }, testInfo) => {
    await page.goto(Env.test);
    // Click a[role="button"]:has-text("Editions")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/edition' }*/),
    page.locator('a[role="button"]:has-text("Editions")').click()
  ]);


// Click [aria-label="NEW EDITION"]
await page.locator('[aria-label="NEW EDITION"]').click();
// Click [placeholder="Edition Name"]
await page.locator('[placeholder="Edition Name"]').click();
// Fill [placeholder="Edition Name"]
await page.locator('[placeholder="Edition Name"]').fill('edition-11');
await page.locator('[placeholder="Edition Name"]').press("Enter");
  await page.locator('[placeholder="Edition Name"]').press("Tab");

// Fill [placeholder="Annual Price"]
await page.locator('[placeholder="Annual Price"]').fill('25');
await page.locator('[placeholder="Annual Price"]').press("Enter");

   await page.locator('[placeholder="Annual Price"]').press("Tab");

// Click text=Trial Period Days >> #button-addon1 >> nth=1
await page.locator('text=Days Days >> #button-addon1').nth(1).click();

// Click text=Trial Period Days >> #button-addon1 >> nth=1
await page.locator('text=Days Days >> #button-addon1').nth(1).click();

// Click text=Expiry Notification Interval Days >> #button-addon1 >> nth=1
await page.locator('text=Days Days >> #button-addon1').nth(3).click();

// Click text=Expiry Notification Interval Days >> #button-addon1 >> nth=1
await page.locator('text=Days Days >> #button-addon1').nth(3).click();

// Check input[name="Radio-Button"] >> nth=1
await page.locator('input[name="Radio-Button"]').nth(1).check();

// Check input[name="AfterSubscriptionExpiryBtn"] >> nth=1
await page.locator('input[name="AfterSubscriptionExpiryBtn"]').nth(1).check();

// Select 1
await page.locator('text=Days Days First Bill Date Immediately After Trial Period After Subscription Expi >> [aria-label="Default select example"]').click();

// Click div[role="dialog"] ul >> text=Features
await page.locator('div[role="dialog"] ul >> text=Features').click();

// Check text=Chat with hostChat with other tenants >> input[type="checkbox"] >> nth=0
await page.locator('text=Chat with hostChat with other tenants >> input[type="checkbox"]').first().check();

// Check div[role="dialog"] #menuWithChildren3 input[type="checkbox"]
await page.locator('div[role="dialog"] #menuWithChildren3 input[type="checkbox"]').check();

// Click text=Edition information Features Edition Name * Edition Name *Annual Price * Annual  >> [aria-label="Save"]
await page.locator('text=Edition information Features Edition Name * Edition Name *Annual Price * Annual  >> [aria-label="Save"]').click();

// //Move Tenant

// // Click text=abb 8 2 abb_actionDeleteEditMove Tenants to Another Edition >> [aria-label="abb_action"]
// await page.locator(' [aria-label="edition-11_action"]').click();
// // Click text=abb 8 2 abb_actionDeleteEditMove Tenants to Another Edition >> [aria-label="UpdateMove Tenants to Another Editionabb"]
// await page.locator(' [aria-label="UpdateMove Tenants to Another Editionedition-11"]').click();
// // Select 5
// await page.locator(' [aria-label="selectList"]').selectOption('5');
// // Click text=CloseSave >> [aria-label="Save"]
// await page.locator('text=CloseSave >> [aria-label="Save"]').click();

//Move Tenants

// Click [aria-label="edition-11_action"]
await page.locator('[aria-label="edition-11_action"]').first().click();
// Click [aria-label="UpdateMove Tenants to Another Editionedition-11"]
await page.locator('.dropdown-menu.show > a:nth-child(3)').click();
// Select 3
await page.locator('text=EditionSelect Not assigned Standard new edition test edition Test141 >> [aria-label="Default select example"]').click();
// await page.locator('text=Standard').last().click();
//Save Move Tenants
await page.pause();
await page.locator('text=CloseSave >> [aria-label="Save"]').click();

//Edit

// Click [aria-label="edition-11_action"]
await page.locator('[aria-label="edition-11_action"]').first().click();

// Click [aria-label="UpdateEditedition-11"]
await page.locator('[aria-label="UpdateEditedition-11"]').first().click();

// Click [placeholder="Edition name"]
await page.locator('[placeholder="Edition name"]').click();
// Fill [placeholder="Edition name"]
await page.locator('[placeholder="Edition name"]').fill('edition-111');
await page.locator('[placeholder="Edition name"]').press('Enter');

// Click div[role="dialog"] ul >> text=Features
await page.locator('div[role="dialog"] ul >> text=Features').click();

// Uncheck div[role="dialog"] #menuWithChildren3 input[type="checkbox"]
await page.locator('div[role="dialog"] #menuWithChildren3 input[type="checkbox"]').uncheck();

// Check #selectNode >> nth=0
await page.locator('#selectNode').first().check();

// Click text=Edition information Features Edition Name * * Edition Name * *Select Features[Te >> [aria-label="Save"]
await page.locator('div[role="dialog"] rds-button:has-text("Save")').click();



//Delete

// Click [aria-label="edition-111_action"]
await page.locator('[aria-label="edition-111_action"]').click();
// Click [aria-label="UpdateDeleteedition-111"]
await page.locator('[aria-label="UpdateDeleteedition-111"]').click();
// Click text=Standard_actionDeleteEditMove Tenants to Another Edition Are you sure ? The reco >> [aria-label="Cancel"]
await page.locator('text=Standard_actionDeleteEditMove Tenants to Another Edition Are you sure ? The reco >> [aria-label="Cancel"]').click();
// Click text=edition-111_actionDeleteEditMove Tenants to Another Edition
await page.locator('text=edition-111_actionDeleteEditMove Tenants to Another Edition').click();
// Click [aria-label="UpdateDeleteedition-111"]
await page.locator('[aria-label="UpdateDeleteedition-111"]').click();
// Click text=Standard_actionDeleteEditMove Tenants to Another Edition Are you sure ? The reco >> [aria-label="Delete"]
await page.locator('text=Standard_actionDeleteEditMove Tenants to Another Edition Are you sure ? The reco >> [aria-label="Delete"]').click();

})