import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ENV } from '../../config/env';

test.describe('Autenticação - Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Deve realizar login com credenciais válidas com sucesso', async ({ page }) => {
    // Act - Repare como fica elegante: ENV.VALID_USERNAME
    await loginPage.login(ENV.VALID_USERNAME, ENV.VALID_PASSWORD);

    // Assert
    await page.waitForURL('**/dashboard/index');
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  test('Deve bloquear o acesso ao usar credenciais inválidas', async () => {
    // Act
    await loginPage.login(ENV.INVALID_USERNAME, ENV.INVALID_PASSWORD);
  
    // Assert
    await expect(loginPage.errorMessage).toBeVisible();
  });
});