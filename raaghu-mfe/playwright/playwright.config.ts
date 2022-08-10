// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname+'/.env' });

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // globalTeardown:require.resolve('./global-teardown'),

  globalSetup: './global-setup',
  use: {
    trace: 'on',
    acceptDownloads: true,
    actionTimeout: 0,
    navigationTimeout: 60000,
    // baseURL: '',
    screenshot: 'on',
    video: 'on',

    // configure the storage state
    storageState: 'storage-state/adminStorageState.json',

    // baseURL: process.env.BASEURL,
    launchOptions: {
      slowMo: 1000,
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    //  //"Pixel 4" tests use Chromium browser.
    //  {
    //   name: 'Pixel 4',
    //   use: {
    //     browserName: 'chromium',
    //     ...devices['Pixel 4'],
    //   },
    // },

    // // "iPhone 11" tests use WebKit browser.
    // {
    //   name: 'iPhone 11',
    //   use: {
    //     browserName: 'webkit',
    //     ...devices['iPhone 11'],
    //   },
    // },
  ],
      // testDir: './tests ',
      timeout: 60000,
      expect: {
        timeout: 50000,
      },
      globalTimeout: 60*60*1000,

    // create html report
    reporter: 'html'

};

export default config;
