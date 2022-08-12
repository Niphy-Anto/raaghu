import { expect, Page, test } from "@playwright/test";
import Env from "../utils/environment";


test.describe("User Page", async () => {

    test("New User", async ({ page }) => {

        await page.goto(Env.test);

        // Click a[role="button"]:has-text("Administration")
        await page.locator('a[role="button"]:has-text("Administration")').click();

        // Click a[role="button"]:has-text("Users")
        await page.locator('a[role="button"]:has-text("Users")').click();

        // Click [aria-label="New User"]
        await page.locator('[aria-label="New User"]').click();

        // Click text=Name * Name *Surname * Surname *Email Id * Email Id *Phone Number * Phone Number >> img
        

        // // Upload Demo UI Components.svg
        // await page.locator('text=NEW USER User Information Roles Organization Units Name * Name *Surname * Surnam').setInputFiles('Demo UI Components.svg');


        // Fill [placeholder="Name"]
        await page.locator('[placeholder="Name"]').fill('new');

        await page.locator('[placeholder="Name"]').press("Enter");

        await page.locator('[placeholder="Name"]').press("Tab");

        // Click [placeholder="Surname"]
        await page.locator('[placeholder="Surname"]').click();

        // Fill [placeholder="Surname"]
        await page.locator('[placeholder="Surname"]').fill('new');

        await page.locator('[placeholder="Surname"]').press("Enter");

        await page.locator('[placeholder="Surname"]').press("Tab");

        // Fill [placeholder="Email Id"]
        await page.locator('[placeholder="Email Id"]').fill('new@gmail.com');

        await page.locator('[placeholder="Email Id"]').press("Enter");

        await page.locator('[placeholder="Email Id"]').press("Tab");

        // Click [placeholder="Phone Number"]
        await page.locator('[placeholder="Phone Number"]').click();

        // Fill [placeholder="Phone Number"]
        await page.locator('[placeholder="Phone Number"]').fill('1234567890');


        await page.locator('[placeholder="Phone Number"]').press("Enter");

        await page.locator('[placeholder="Phone Number"]').press("Tab");


        // Click [placeholder="User Name"]
        await page.locator('[placeholder="User Name"]').click();

        // Fill [placeholder="User Name"]
        await page.locator('[placeholder="User Name"]').fill('new');

        await page.locator('[placeholder="User Name"]').press("Enter");

        await page.locator('[placeholder="User Name"]').press("Tab");


        // Click text=Password * Password * >> [placeholder="\*\*\*\*\*\*\*\*"]
        await page.locator('[placeholder="Password"]').click();

        // Fill text=Password * Password * >> [placeholder="\*\*\*\*\*\*\*\*"]
        await page.locator('[placeholder="Password"]').fill('123456789');

        await page.locator('[placeholder="Password"]').press("Enter");

        await page.locator('[placeholder="Password"]').press("Tab");

        // Click text=Confirm Password * Confirm Password * >> [placeholder="\*\*\*\*\*\*\*\*"]
        await page.locator('[placeholder="ConfirmPassword"]').click();

        // Fill text=Confirm Password * Confirm Password * >> [placeholder="\*\*\*\*\*\*\*\*"]
        await page.locator('[placeholder="ConfirmPassword"]').fill('123456789');

        await page.locator('[placeholder="ConfirmPassword"]').press("Enter");

        await page.locator('[placeholder="ConfirmPassword"]').press("Tab");

        // // Click text=Set Random Password
        // await page.locator('text=Set Random Password').click();

        // // Click text=Should Change Password On Next Login
        // await page.locator('text=Should Change Password On Next Login').click();

        // // Click text=Set Random Password Should Change Password On Next Login Send activation email A
        // await page.locator('text=Set Random Password Should Change Password On Next Login Send activation email A').click();

        // Click text=Send activation email
        await page.locator('text=Send activation email').click();

        // Click label:has-text("Active")
        await page.locator('label:has-text("Active")').click();

        // Click text=Lockout enabled
        await page.locator('text=Lockout enabled').click();

        // Click rds-button:has-text("Next")
        // await page.locator('rds-button:has-text("Next")').click();
        await page.locator('[aria-label="Next"]').click();

        // Click div[role="dialog"] >> text=Roles
        await page.locator('div[role="dialog"] >> text=Roles').click();

        // // Click label:has-text("Admin")
        // await page.locator('label:has-text("Admin")').click();
        // // Click label:has-text("Admin")
        // await page.locator('label:has-text("Admin")').click();

        // Click #claims rds-button:has-text("Save")
        await page.locator('#claims rds-button:has-text("Save")').click();

        // Click div[role="dialog"] >> text=Organization Units
        //  await page.locator('div[role="dialog"] >> text=Organization Units').click();

        // // Click div[role="dialog"] a:has-text("Organization Units")
        // await page.locator('div[role="dialog"] a:has-text("Organization Units")').click();

        // Click div[role="dialog"] label:has-text("new")
        // await page.locator('div[role="dialog"] label:has-text("new")').click();

        // await page.locator('#organizationUnits rds-button:has-text("Save")').click();

    })

    test("Edit User", async ({ page }) => {

        await page.goto(Env.test);

        await page.locator('a[role="button"]:has-text("Administration")').click();

        // Click a[role="button"]:has-text("Users")
        await page.locator('a[role="button"]:has-text("Users")').click();

        // Click [aria-label="aa_action"]
        await page.locator('[aria-label="new_action"]').click();
        // Click [aria-label="UpdateEditaa"]
        await page.locator('[aria-label="UpdateEditnew"]').click();

        // Click [placeholder="Password"]
        await page.locator('[placeholder="Password"]').click();

        // Fill [placeholder="Password"]
        await page.locator('[placeholder="Password"]').fill('123456789');

        await page.locator('[placeholder="Password"]').press("Enter");

        await page.locator('[placeholder="Password"]').press("Tab");

        // Click [placeholder="ConfirmPassword"]
        await page.locator('[placeholder="ConfirmPassword"]').click();

        // Fill [placeholder="ConfirmPassword"]
        await page.locator('[placeholder="ConfirmPassword"]').fill('123456789');

        await page.locator('[placeholder="ConfirmPassword"]').press("Enter");

        await page.locator('[placeholder="ConfirmPassword"]').press("Tab");

        // Click [aria-label="Next"]
        await page.locator('[aria-label="Next"]').click();

        // Click text=Admin CancelSave >> [aria-label="Save"]
        await page.locator('text=Admin test Three testone CancelSave >> [aria-label="Save"]').click();

        //   Edit Next offcanvas

        // // Click [aria-label="aa_action"]
        // await page.locator('[aria-label="suraj_action"]').click();
        // // Click [aria-label="UpdateEditaa"]
        // await page.locator('[aria-label="UpdateEditsuraj"]').click();

        // await page.locator('[placeholder="Password"]').click();

        // // Fill [placeholder="Password"]
        // await page.locator('[placeholder="Password"]').fill('123456789');

        // await page.locator('[placeholder="Password"]').press("Enter");

        // await page.locator('[placeholder="Password"]').press("Tab");

        // // Click [placeholder="ConfirmPassword"]
        // await page.locator('[placeholder="ConfirmPassword"]').click();

        // // Fill [placeholder="ConfirmPassword"]
        // await page.locator('[placeholder="ConfirmPassword"]').fill('123456789');

        // await page.locator('[placeholder="ConfirmPassword"]').press("Enter");

        // await page.locator('[placeholder="ConfirmPassword"]').press("Tab");

        // // Click [aria-label="Next"]
        // await page.locator('[aria-label="Next"]').click();

        // // Click div[role="dialog"] ul >> text=Organization Units
        // await page.locator('div[role="dialog"] ul >> text=Organization Units').click();

        // // Check div:nth-child(6) > .form-group > rds-checkbox > .form-check > #isAssigned
        // await page.locator('div:nth-child(6) > .form-group > rds-checkbox > .form-check > #isAssigned').check();


        // // Click #settings rds-button:has-text("Save")
        // await page.locator('"text=Wai India Waii USA Wai Texas Wai Pune Wai Ahmednagar suraj new CancelSave >> [aria-label="Save"]"').click();


    })

    test("Delete User", async ({ page }) => {
        await page.goto(Env.test);

        // Click a[role="button"]:has-text("Administration")
        await page.locator('a[role="button"]:has-text("Administration")').click();

        // Click a[role="button"]:has-text("Users")
        await page.locator('a[role="button"]:has-text("Users")').click();

        await page.locator('[aria-label="new_action"]').click();
        // Click [aria-label="UpdateDeleteaa"]
        await page.locator('[aria-label="UpdateDeletenew"]').click();

        await page.locator('div[role="dialog"] [aria-label="Delete"]').click();
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

