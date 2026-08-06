// tests/setup/global.setup.ts

import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../config/env';
const authFile = 'playwright/.auth/user.json';

setup('Autenticar e salvar estado da sessão', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login(ENV.VALID_USERNAME, ENV.VALID_PASSWORD);
  
  await page.waitForURL('**/dashboard/index');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

  await page.context().storageState({ path: authFile });
});