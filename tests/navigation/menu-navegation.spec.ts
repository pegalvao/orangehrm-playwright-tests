import { test, expect } from '@playwright/test';
import { NavigationMenu} from '../../pages/NavegationMenu';
import { URL_PATTERNS } from '../../config/route.ts';
test.describe('Smoke Test - Navegação do Menu Principal', () => {
  let navegationMenu: NavigationMenu;

  test.beforeEach(async ({ page }) => {
    navegationMenu = new NavigationMenu(page);
    
    await navegationMenu.AcessDashboard();
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

    // 6. My Info
    await navegationMenu.MyInfoPage();
    await expect(page).toHaveURL(URL_PATTERNS.MY_INFO);

    // 7. Performance
    await navegationMenu.PerformancePage();
    await expect(page).toHaveURL(URL_PATTERNS.PERFORMANCE);

    // 8. Directory
    await navegationMenu.DirectoryPage();
    await expect(page).toHaveURL(URL_PATTERNS.DIRECTORY);

    // 9. Maintenance
    await navegationMenu.MaintenancePage();
    await expect(page).toHaveURL(URL_PATTERNS.MAINTENANCE);

    // 10. Claim
    await navegationMenu.ClaimPage();
    await expect(page).toHaveURL(URL_PATTERNS.CLAIM);

    // 11. Buzz
    await navegationMenu.BuzzPage();
    await expect(page).toHaveURL(URL_PATTERNS.BUZZ);
  }); 
});