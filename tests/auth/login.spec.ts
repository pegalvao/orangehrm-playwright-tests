import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('Login válido', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.VALID_USERNAME!);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.VALID_PASSWORD!);

    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('/web/index.php/dashboard/index');
    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
  });

  test('Login inválido', async ({ page }) => {
    await page.goto('/web/index.php/auth/login');
  
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.INVALID_USERNAME!);
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.INVALID_PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();
  
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});