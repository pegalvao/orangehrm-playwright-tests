import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../config/env';
import { DashboardPage} from '../../pages/DashboardPage';
test.describe('Autenticação - Login', () => {
  test.use({ storageState: { cookies: [], origins: [] } });
  let loginPage: LoginPage;
  let dashboardPage : DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.pageLogin();

  });

  test('Deve realizar login com credenciais válidas com sucesso', async ({ page }) => {
    await loginPage.login(ENV.VALID_USERNAME, ENV.VALID_PASSWORD);

    await dashboardPage.LoadingDashboardPage();

    await expect(dashboardPage.dashboardButton).toBeVisible();
  });

  test('Deve bloquear o acesso ao usar credenciais inválidas', async () => {
    await loginPage.login(ENV.INVALID_USERNAME, ENV.INVALID_PASSWORD);

    await expect(loginPage.errorMessage).toBeVisible();
  });
});