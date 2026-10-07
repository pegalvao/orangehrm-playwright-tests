import { test, expect } from '@playwright/test';
import { NavegationMenu} from '../../pages/NavegationMenu';
import { URL_PATTERNS } from '../../config/route.ts';
test.describe('Smoke Test - Navegação do Menu Principal', () => {
  let navegationMenu: NavegationMenu;

  test.beforeEach(async ({ page }) => {
    navegationMenu = new NavegationMenu(page);
    
    await page.goto(URL_PATTERNS.DASHBOARD);
  });

  test('Deve navegar pelas páginas principais usando o menu lateral', async ({ page }) => {
    // 1. Admin
    await navegationMenu.AcessAdminPage();
    await expect(page).toHaveURL(URL_PATTERNS.ADMIN);

    // 2. PIM
    await navegationMenu.AcessPimPage();
    await expect(page).toHaveURL(URL_PATTERNS.PIM);

    // 3. Leave
    await navegationMenu.LeavePage();
    await expect(page).toHaveURL(URL_PATTERNS.LEAVE);

    // 4. Time
    await navegationMenu.TimePage();
    await expect(page).toHaveURL(URL_PATTERNS.TIME);

    // 5. Recruitment
    await navegationMenu.RecruitmentPage();
    await expect(page).toHaveURL(URL_PATTERNS.RECRUITMENT);

    // 6. My Info (Usamos uma Regex mais branda para ignorar o "empNumber/7" que pode mudar)
    await navegationMenu.MyInfoPage();
    await expect(page).toHaveURL(URL_PATTERNS.MY_INFO);

    // 7. Retorna ao Dashboard
    await navegationMenu.DashboardPage();
    await expect(page).toHaveURL(URL_PATTERNS.DASHBOARD);
  });
});