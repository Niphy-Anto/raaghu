
import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test('Dynamic Property', async ({ page }, testInfo) => {

  await page.goto(Env.test);


// Click a[role="button"]:has-text("Administration")
await page.locator('a[role="button"]:has-text("Administration")').click();
// Click a[role="button"]:has-text("Roles")
await Promise.all([
  page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/role' }*/),
  page.locator('a[role="button"]:has-text("Roles")').click()
]);
// Click text=NEW ROLE

await page.click('text=NEW ROLE');

// Click [placeholder="Role Name"]

await page.click('[placeholder="Role Name"]');

// Fill [placeholder="Role Name"]

await page.fill('[placeholder="Role Name"]','Demo Role');

await page.press('[placeholder="Role Name"]','Enter');

// Press Tab    

await page.press('[placeholder="Role Name"]','Tab');

// Check div[role="dialog"] #isDefault

await page.check('div[role="dialog"] #isDefault');

await page.locator('div[role="dialog"] ul >> text=Permission').click();

// Check div[role="dialog"] >> text=RolesCreating new roleEditing roleDeleting role >> input[type="checkbox"] >> nth=0

await page.locator('div[role="dialog"] >> text=RolesCreating new roleEditing roleDeleting role >> input[type="checkbox"]').first().check();

// Click [aria-label="Save"]

await page.locator('div[role="dialog"] #Permission rds-button:has-text("Save")').click();

//Edit

 // Click [aria-label="Demo Role_action"]
 await page.click('[aria-label="Demo Role_action"]');
 // Click [aria-label="UpdateEditDemo Role"]
 await page.click('[aria-label="UpdateEditDemo Role"]');
 // Click #inputText23
 await page.click('[placeholder="Role Name"]');
 // Fill #inputText23
 await page.fill('[placeholder="Role Name"]','Demo Role-11');
 await page.press('[placeholder="Role Name"]','Enter');

// Press Tab    

await page.press('[placeholder="Role Name"]','Tab');
 // Uncheck div[role="dialog"] #isDefault
 await page.locator('div[role="dialog"] #isDefault').uncheck();
 // Click div[role="dialog"] a:has-text("Permission")
 await page.locator('div[role="dialog"] a:has-text("Permission")').click();
 // Check #menuWithChildren1 > .node-dot > rds-checkbox > .form-check > #selectNode >> nth=0
 await page.locator('#menuWithChildren1 > .node-dot > rds-checkbox > .form-check > #selectNode').first().check();
 // Check div[role="dialog"] >> text=Creating Entity Dynamic PropertiesDeleting Entity Dynamic PropertiesEditing Enti >> input[type="checkbox"] >> nth=1
 await page.locator('div[role="dialog"] >> text=Creating Entity Dynamic PropertiesDeleting Entity Dynamic PropertiesEditing Enti >> input[type="checkbox"]').nth(1).check();
 // Click #buttonId24
 await page.click('div[role="dialog"] #Permission rds-button:has-text("Save")');




 //Delete


 // Click [aria-label="Demo Role-11_action"]
 await page.locator('[aria-label="Demo Role-11_action"]').click();
 // Click [aria-label="UpdateDeleteDemo Role-11"]
 await page.locator('[aria-label="UpdateDeleteDemo Role-11"]').click();
 // Click text=Admin_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCanc >> [aria-label="Cancel"]
 await page.locator('div[role="dialog"] rds-button:has-text("Cancel")').click();
 // Click [aria-label="Demo Role-11_action"]
 await page.locator('[aria-label="Demo Role-11_action"]').click();
 // Click [aria-label="UpdateDeleteDemo Role-11"]
 await page.locator('[aria-label="UpdateDeleteDemo Role-11"]').click();
 // Click text=Admin_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCanc >> [aria-label="Delete"]
 await page.locator('text=Admin_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCanc >> [aria-label="Delete"]').click();

//filter by permission

 // Click [aria-label="FILTER BY PERMISSIONS"]
 await page.locator('[aria-label="FILTER BY PERMISSIONS"]').click();
 // Check div[role="dialog"] >> text=Creating new roleEditing roleDeleting role >> input[type="checkbox"] >> nth=0
 await page.locator('div[role="dialog"] >> text=Creating new roleEditing roleDeleting role >> input[type="checkbox"]').first().check();
 // Click [aria-label="Select"]
 await page.locator('[aria-label="Select"]').click();




})