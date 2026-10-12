import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage} from '../../pages/DashboardPage';
import { ENV } from '../../config/env';
const authFile = 'playwright/.auth/user.json';

setup('Autenticar e salvar estado da sessão', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  
  await loginPage.pageLogin();
  await loginPage.login(ENV.VALID_USERNAME, ENV.VALID_PASSWORD);
  
  await dashboardPage.LoadingDashboardPage();
  await expect(dashboardPage.dashboardButton).toBeVisible();

  await page.context().storageState({ path: authFile });
});