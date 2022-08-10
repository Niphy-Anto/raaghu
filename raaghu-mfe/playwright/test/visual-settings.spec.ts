import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";

test('Visual Settings', async ({ page }, testInfo) => {

  await page.goto(Env.test);

 // Click a[role="button"]:has-text("Administration")
 await page.locator('a[role="button"]:has-text("Administration")').click();
 // Click a[role="button"]:has-text("Visual Settings")
 await Promise.all([
   page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/visual-settings' }*/),
   page.locator('a[role="button"]:has-text("Visual Settings")').click()
 ]);
 // Click text=DefaultTheme 1Theme 2 >> img >> nth=1
 await page.locator('text=Dark Light Default >> img >> nth=0').click();
 // Select dark
 await page.locator('text=Skin*Select Dark Light >> [aria-label="Default select example"]').click();

 await page.locator('option:has-text("Dark")').click;

 // Uncheck #fixedHeaderDesktop
 await page.locator('#fixedHeaderDesktop').uncheck();
 // Uncheck #fixedHeaderMobile
 await page.locator('#fixedHeaderMobile').uncheck();
 // Click text=Skin* Dark Light Desktop Fixed Header Mobile Fixed Header SAVE AS SYSTEM DEFAULT >> [aria-label="SAVE AS SYSTEM DEFAULT "]
 await page.locator('text=Skin*Select Dark Light Desktop Fixed Header Mobile Fixed Header SAVE AS SYSTEM D >> [aria-label="SAVE AS SYSTEM DEFAULT "]').click();
 // Click span:has-text("Subheader")
 await page.locator('span:has-text("Subheader")').click();
 // Check text=Subheader Fixed Header SAVE AS SYSTEM DEFAULT >> input[type="checkbox"]
 await page.locator('text=Subheader Fixed Header SAVE AS SYSTEM DEFAULT >> input[type="checkbox"]').check();
 // Click text=Subheader Fixed Header SAVE AS SYSTEM DEFAULT >> [aria-label="SAVE AS SYSTEM DEFAULT "]
 await page.locator('text=Subheader Fixed Header SAVE AS SYSTEM DEFAULT >> [aria-label="SAVE AS SYSTEM DEFAULT "]').click();
 // Click span:has-text("Menu")
 await page.locator('span:has-text("Menu")').click();
 // Select light
 await page.locator('text=SkinSelect Dark Light >> [aria-label="Default select example"]').click();

 await page.locator('option:has-text("light")').click;
 // Check #allowAsideMinimizing
 await page.locator('#allowAsideMinimizing').check();
 // Check #expandMenuOnHover
 await page.locator('#expandMenuOnHover').check();
 // Select true
 await page.locator('text=Submenu ToggleSelect Accordian Dropdown >> [aria-label="Default select example"]').click();

 await page.locator('option:has-text("Accordian")').click;
 // Click app-rds-comp-visual-settings ul div:has-text("Footer") >> nth=3
 await page.locator('app-rds-comp-visual-settings ul div:has-text("Footer")').nth(3).click();
 // Check text=Footer Fixed Footer SAVE AS SYSTEM DEFAULT >> input[type="checkbox"]
 await page.locator('text=Footer Fixed Footer SAVE AS SYSTEM DEFAULT >> input[type="checkbox"]').check();
 // Click text=Footer Fixed Footer SAVE AS SYSTEM DEFAULT >> [aria-label="SAVE AS SYSTEM DEFAULT "]
 await page.locator('text=Footer Fixed Footer SAVE AS SYSTEM DEFAULT >> [aria-label="SAVE AS SYSTEM DEFAULT "]').click();
 
})
