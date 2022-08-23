import { chromium, FullConfig } from '@playwright/test';
import login from './model/login';

const adminUsername = process.env.RAAGHU_USERNAME ?? '';
const adminPassword = process.env.RAAGHU_PASSWORD ?? '';

async function globalSetup(config): Promise<void> {

  // const { storageState } = config.use;

  // TODO: Remove headless after this has been tested
  const browser = await chromium.launch({ headless: true });

  // Admin Login
  const adminPage = await browser.newPage();

  await login(adminPage, adminUsername, adminPassword);

  await adminPage.context().storageState({

    path: 'storage-state/adminStorageState.json',
  });

  // User Login

  // const TenantUsername = process.env.TENANT_USERNAME ?? '';
  // const TenantPassword = process.env.TENANT_PASSWORD ?? '';

  // const userPage = await browser.newPage();

  // await login(userPage, TenantUsername,TenantPassword);

  // await userPage.context().storageState({

  //   path: 'storage-state/tenantStorageState.json',
  // });

  await browser.close();
}

export default globalSetup;
