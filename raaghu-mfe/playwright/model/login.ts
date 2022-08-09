import { Page } from '@playwright/test';
import Env from '../utils/environment';

async function login(
  page: Page,
  username: string,
  password: string,
): Promise<void> {
  await page.goto(Env.test);
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(username);
  await page.locator('[placeholder="Email"]').press('Enter');
  await page.locator('[placeholder="Email"]').press('Tab');
  await page.locator('[placeholder="Password"]').fill(password);
  await page.locator('[placeholder="Password"]').press('Enter');
  await page.locator('[placeholder="Password"]').press('Tab');

  // await page.locator('text=Password *Password Remember me >> input[type="checkbox"]').press('Tab');

  // await page.locator('text=Password *Password Remember me >> a').press('Tab');

  await page.locator('text=Remember me Forgot password ? >> input[type="checkbox"]').press('Tab');
  await page.locator('text=Forgot password ?').press('Tab');
//   await page.locator('button:has-text("Login")').click();
//  await page.locator('button:has-text("Login")').click();
  await Promise.all([
    // page.waitForNavigation({ url: 'pages/dashboard' }),
    page.waitForNavigation(),
    // page.locator('text=Login').press('Enter'),
    // page.locator('button:has-text("Login")').click(),
    await page.locator('[aria-label="Login"]').click()
  ]);

}

export default login;
