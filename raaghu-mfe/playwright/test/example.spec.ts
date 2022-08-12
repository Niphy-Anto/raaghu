import { test, expect, firefox } from '@playwright/test';

test('google', async () => {
  const browser = await firefox.launch({
      headless: false
  })
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://accounts.google.com/signin')

  await page.locator(`[name='identifier']`).fill('admin@aspnetzero.com');

  // await page.locator('[placeholder="Password"]').fill('123qwe');

  await page.locator('button:has-text("Next")').click();
  
  await browser.close()
})


// import { test, expect, Page } from '@playwright/test';

// test.describe('test', async () => {
//   let page: Page;
//   test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//   });

//   test('Navigate to Google', async () => {
//     await page.goto('https://google.com/');
//     const url = await page.url();
//     expect(url).toContain('google');
//   });

//   test('Search for Playwright', async () => {
//     await page.type('input[name="q"]', "Playwright")
//     await page.keyboard.press('Enter');
//     let text = await page.innerText('//h3[contains(text(),"Playwright:")]')
//     expect(text).toContain('Playwright: Fast and reliable');
//   });
// })