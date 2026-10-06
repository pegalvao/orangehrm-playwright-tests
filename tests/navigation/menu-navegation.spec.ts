import { test, expect } from '@playwright/test';
import { NavegationMenu} from '../../pages/NavegationMenu';
test.describe('Smoke Test - Navegação do Menu Principal', () => {
  let navegationMenu: NavegationMenu;

  test.beforeEach(async ({ page }) => {
    navegationMenu = new NavegationMenu(page);
    
    await page.goto();
  });

  test('Deve navegar pelas páginas principais usando o menu lateral', async ({ page }) => {
    // 1. Admin
    await navegationMenu.AcessAdminPage();
    await expect(page).toHaveURL(/.*admin\/viewSystemUsers/);

    // 2. PIM
    await navegationMenu.AcessPimPage();
    await expect(page).toHaveURL(/.*pim\/viewEmployeeList/);

    // 3. Leave
    await navegationMenu.LeavePage();
    await expect(page).toHaveURL(/.*leave\/viewLeaveList/);

    // 4. Time
    await navegationMenu.TimePage();
    await expect(page).toHaveURL(/.*time\/viewEmployeeTimesheet/);

    // 5. Recruitment
    await navegationMenu.RecruitmentPage();
    await expect(page).toHaveURL(/.*recruitment\/viewCandidates/);

    // 6. My Info (Usamos uma Regex mais branda para ignorar o "empNumber/7" que pode mudar)
    await navegationMenu.MyInfoPage();
    await expect(page).toHaveURL(/.*viewPersonalDetails/);

    // 7. Retorna ao Dashboard
    await navegationMenu.DashboardPage();
    await expect(page).toHaveURL(/.*dashboard\/index/);
  });
});