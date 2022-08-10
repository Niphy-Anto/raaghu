import { test, expect, firefox, chromium } from '@playwright/test';
import Env from '../utils/environment';

test('Demo page', async ( {  },testInfo) => {
  const browser = await chromium.launch({
    headless: false
  })
  const context = await browser.newContext();

  const page = await context.newPage();

  // Ragghu Login

  // Go to http://localhost:8080/login
  await page.goto(`${Env.test}/login`);

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('admin@aspnetzero.com');

    await page.locator('[placeholder="Email"]').press('Enter');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('123qwe');

  await page.locator('[placeholder="Password"]').press('Enter');

  // Press Tab
  await page.locator('[placeholder="Password"]').press('Tab');

  // Press Tab
  // await page.locator('text=Remember me Forgot password ? >> input[type="checkbox"]').press('Tab');

  // // Press Tab
  // await page.locator('text=Forgot password ?').press('Tab');

  // Press Enter
   await Promise.all([
   page.waitForNavigation({ url: 'pages/dashboard' }),
   page.locator('button:has-text("Login")').click(),
   page.locator('button:has-text("Login")').click(),
 ]);
 const screenshot = await page.screenshot();
 await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
})
