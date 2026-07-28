import { test, expect } from '@playwright/test';

test('Login válido', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('/web/index.php/dashboard/index');
  await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
});


