import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test('Dynamic Property', async ({ page }, testInfo) => {

  await page.goto(Env.test);

  // Click a[role="button"]:has-text("Administration")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/dashboard' }*/),
    page.locator('a[role="button"]:has-text("Administration")').click()
  ]);
  // Click a[role="button"]:has-text("Dynamic Properties")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/dynamic-property-management' }*/),
    page.locator('a[role="button"]:has-text("Dynamic Properties")').click()
  ]);
 
  await page.locator('text=Dynamic Properties Dynamic Entity Properties >> span >> nth=0').click();
  await page.waitForSelector('#table1 div:has-text("Property Name Display Name Input Type Permission Actions") >> nth=1');

  // Click [aria-label="New Dynamic Property"]
  await page.locator('[aria-label="NEW DYNAMIC PROPERTY"]').click();

  // Click [placeholder="Property Name"]
  
  await page.locator('[placeholder="Property Name"]').click();

  // Fill [placeholder="Property Name"]
  await page.locator('[placeholder="Property Name"]').fill('property-1');
  await page.locator('[placeholder="Property Name"]').press('Enter');
  await page.locator('[placeholder="Property Name"]').press('Tab');


  // Click [placeholder="Display Name"]
  await page.locator('[placeholder="Display Name"]').click();

  // Fill [placeholder="Display Name"]
  await page.locator('[placeholder="Display Name"]').fill('test-1');
  await page.locator('[placeholder="Display Name"]').press('Enter');
  await page.locator('[placeholder="Display Name"]').press('Tab');


 
  // Select CHECKBOX
  await page.locator('text=Input TypeSelect SINGLE_LINE_STRING COMBOBOX CHECKBOX MULTISELECTCOMBOBOX >> [aria-label="Default select example"]').click();
  await page.locator('option:has-text("COMBOBOX")').click()

  // Click div[role="dialog"] ul >> text=Permission
  await page.locator('div[role="dialog"] ul >> text=Permission').click();

  // Check text=Creating new roleEditing roleDeleting role >> input[type="checkbox"] >> nth=0
  await page.locator('text=Creating new roleEditing roleDeleting role >> input[type="checkbox"]').first().check();
  await page.locator('option:has-text("checkbox")').first().click()

  // Click text=Information Permission Property Name * Property Name *Display Name Display Name  >> [aria-label="Save"]
   await page.click('div[role="dialog"] [aria-label="Save"]');
  
  //Edit


  // Click [aria-label="property-1_action"]
  await page.locator('[aria-label="property-2_action"]').click();
  // Click [aria-label="UpdateEditproperty-1"]
  await page.locator('[aria-label="UpdateEditproperty-2"]').click();
   // Click [placeholder="Property Name"]
   await page.locator('[placeholder="Property Name"]').click();
   // Fill [placeholder="Property Name"]
   await page.locator('[placeholder="Property Name"]').fill('property-2');
   await page.locator('[placeholder="Property Name"]').press('Enter');
   await page.locator('[placeholder="Property Name"]').press('Tab');

   // Click [placeholder="Display Name"]
   await page.locator('[placeholder="Display Name"]').click();
   // Fill [placeholder="Display Name"]
   await page.locator('[placeholder="Display Name"]').fill('test-2');
   await page.locator('[placeholder="Display Name"]').press('Enter');
   await page.locator('[placeholder="Display Name"]').press('Tab');
   // Select COMBOBOXn
    // Select COMBOBOX
   await page.locator('[aria-label="Default select example"]').click();
   await page.locator('option:has-text("COMBOBOX")').nth(1).click();
   // Click div[role="dialog"] ul >> text=Permission
   await page.locator('div[role="dialog"] ul >> text=Permission').click();
   // Check #menuWithChildren1 > .node-dot > rds-checkbox > .form-check > #selectNode >> nth=0
   await page.locator('#menuWithChildren1 > .node-dot > rds-checkbox > .form-check > #selectNode').first().check();
   // Click text=Information Permission Property Name * Property Name *Display Name Display Name  >> [aria-label="Save"]
    await page.click('div[role="dialog"] [aria-label="Save"]');  

   //Delete

   // Click [aria-label="property-2_action"]
  await page.locator('[aria-label="property-2_action"]').click();
  // Click [aria-label="UpdateDeleteproperty-2"]
  await page.locator('[aria-label="UpdateDeleteproperty-2"]').click();
  // Click text=prop-1_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCan >> [aria-label="Cancel"]
  await page.locator('text=CancelDelete >> [aria-label="Cancel"]').click();
  //Click [aria-label="property-2_action"]
  await page.locator('[aria-label="property-2_action"]').click();
  // Click [aria-label="UpdateDeleteproperty-2"]
  await page.locator('[aria-label="UpdateDeleteproperty-2"]').click();
  // Click text=prop-1_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCan >> [aria-label="Delete"]
  await page.locator('text=prop-1_actionDeleteEdit Are you sure ? The record will be deleted permanentlyCan >> [aria-label="Delete"]').click();

  //dynamic Entity Property

  //Edit

  // Click text=Dynamic Entity Properties >> nth=0
  await page.locator('text=Dynamic Entity Properties').first().click();
  // Click [aria-label="New Dynamic Entity Property"]
  await page.locator('[aria-label="New Dynamic Entity Property"]').click();
  // Select iDSDemo.Authorization.Users.User
  await page.locator('[aria-label="Entity"]').selectOption('iDSDemo.Authorization.Users.User');
  // Click a[role="button"]:has-text("Select Property")
  await page.locator('a[role="button"]:has-text("Select Property")').click();
  // Check text=Select Property display-1 >> input[type="checkbox"]
  await page.locator('text=Select Property display-1 >> input[type="checkbox"]').check();
  // Click text=Entity iDSDemo.Authorization.Users.User display-1 × display-1 CloseSave >> [aria-label="Save"]
  await page.click('div[role="dialog"] [aria-label="Save"]'); 

//Delete
 // Click [aria-label="display-1_action"]
 await page.locator('[aria-label="display-1_action"]').click();
 // Click [aria-label="UpdateDeletedisplay-1"]
 await page.locator('[aria-label="UpdateDeletedisplay-1"]').click();
 // Click text=CancelDelete >> [aria-label="Cancel"]
 await page.locator('text=CancelDelete >> [aria-label="Cancel"]').click();
 // Click [aria-label="display-1_action"]
 await page.locator('[aria-label="display-1_action"]').click();
 // Click [aria-label="UpdateDeletedisplay-1"]
 await page.locator('[aria-label="UpdateDeletedisplay-1"]').click();
 // Click [aria-label="Delete"]
 await page.locator('[aria-label="Delete"]').click();
})


