import { test, expect } from '@playwright/test';

test('basic test', async ({ page }, testInfo) => {
  await page.goto('https://playwright.dev');
  const screenshot = await page.screenshot();
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });
});
