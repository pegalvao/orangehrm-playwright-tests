import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage'; 

test.describe('Autenticação - Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Deve realizar login com credenciais válidas com sucesso', async ({ page }) => {
  
    await loginPage.login(process.env.VALID_USERNAME!, process.env.VALID_PASSWORD!);
    
    await page.waitForURL('**/dashboard/index');
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  test('Deve bloquear o acesso ao usar credenciais inválidas', async () => {

    await loginPage.login(process.env.INVALID_USERNAME!, process.env.INVALID_PASSWORD!);
    await expect(loginPage.errorMessage).toBeVisible();
  });
});