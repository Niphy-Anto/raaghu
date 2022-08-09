import { test, expect, firefox, chromium } from '@playwright/test';
import Env from '../utils/environment';


test("Settings Page", async ({ page }, testInfo) => {

    await page.goto(Env.test);

    // Click a[role="button"]:has-text("Administration")
  await page.locator('a[role="button"]:has-text("Administration")').click();
  // Click a[role="button"]:has-text("Settings") >> nth=1
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/pages/settings' }*/),
    page.locator('a[role="button"]:has-text("Settings")').nth(1).click()
  ]);
  // Uncheck text=Allow Tenants To Register To The System. If You Disable This, Tenants Will Only  >> input[type="checkbox"]
  await page.locator('text=Allow Tenants To Register To The System. If You Disable This, Tenants Will Only  >> input[type="checkbox"]').uncheck();
  // Select 2
  await page.locator('text=Edition Select Not assigned Standard test one Test edition Demo edition >> [aria-label="Default select example"]').selectOption('2');
  // Click app-sidenav app-root rds-nav-tab div:has-text("User Management") >> nth=3
  await page.locator('app-sidenav app-root rds-nav-tab div:has-text("User Management")').nth(3).click();
  // Check #emailConfirm
  await page.locator('#emailConfirm').check();
  // Uncheck #phoneVerify
  await page.locator('#phoneVerify').uncheck();
  // Click span:has-text("Security")
  await page.locator('span:has-text("Security")').click();
  // Check #requireUpper
  await page.locator('#requireUpper').check();
  // Click #button-addon1 >> nth=1
  await page.locator('#button-addon1').nth(1).click();
  // Click #button-addon1 >> nth=3
  await page.locator('#button-addon1').nth(3).click();
  // Click text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]
  await page.locator('text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]').click();
  // Fill text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]
  await page.locator('text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]').fill('310');
  await page.locator('text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]').press('Enter');
  await page.locator('text=Password Complexity Use Default Settings Require Digit Require Lowercase Require >> [placeholder="Enter a value"]').press('Tab');
  // Click a:has-text("Email(SMTP)")
  await page.locator('a:has-text("Email(SMTP)")').click();
  // Click [placeholder="admin\@mydomain\.com"]
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').click();
  // Click [placeholder="admin\@mydomain\.com"]
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').click();
  // Click [placeholder="admin\@mydomain\.com"]
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').click();  
  // Fill [placeholder="admin\@mydomain\.com"]
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').fill('admin@mydomain.com');
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').press('Enter');
  await page.locator('[placeholder="admin\\@mydomain\\.com"]').press('Tab');
  // Click [placeholder="mydomain\.com mailer"]
  await page.locator('[placeholder="mydomain\\.com mailer"]').click();
  // Fill [placeholder="mydomain\.com mailer"]
  await page.locator('[placeholder="mydomain\\.com mailer"]').fill('mydomainfist.com');
  await page.locator('[placeholder="mydomain\\.com mailer"]').press('Enter');
  await page.locator('[placeholder="mydomain\\.com mailer"]').press('Tab');
  // Click [placeholder="\32 5"]
  await page.locator('[placeholder="\\32 5"]').click();
  // Fill [placeholder="\32 5"]
  await page.locator('[placeholder="\\32 5"]').fill('2525');
  await page.locator('[placeholder="\\32 5"]').press('Enter');
  await page.locator('[placeholder="\\32 5"]').press('Tab');

  // Click span:has-text("Invoice")
  await page.locator('span:has-text("Invoice")').click();
  // Click [placeholder="Legal Name"]
  await page.locator('[placeholder="Legal Name"]').click();
  // Fill [placeholder="Legal Name"]
  await page.locator('[placeholder="Legal Name"]').fill('Legal Name Demo');
  await page.locator('[placeholder="Legal Name"]').press('Enter');
  await page.locator('[placeholder="Legal Name"]').press('Tab');
  // Click textarea[name="text-area1"]
  await page.locator('textarea[name="text-area1"]').click();
  // Fill textarea[name="text-area1"]
  await page.locator('textarea[name="text-area1"]').fill('Address Place No');
  await page.locator('textarea[name="text-area1"]').press('Enter');
  await page.locator('textarea[name="text-area1"]').press('Tab');
  // Click text=Other-Settings
  await page.locator('text=Other-Settings').click();
  // Check text=Quick Theme Selection Is Quick Theme Select Enabled >> input[type="checkbox"]
  await page.locator('text=Quick Theme Selection Is Quick Theme Select Enabled >> input[type="checkbox"]').check();
  // Click [aria-label="SAVE ALL"]
  await page.locator('[aria-label="SAVE ALL"]').click();
})