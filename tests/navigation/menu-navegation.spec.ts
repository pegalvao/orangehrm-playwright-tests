import { test, expect } from '@playwright/test';
import { NavigationMenu} from '../../pages/NavigationMenu';
import { URL_PATTERNS } from '../../config/route.ts';
test.describe('Smoke Test - Navegação do Menu Principal', () => {
  let navigationMenu: NavigationMenu;

  test.beforeEach(async ({ page }) => {
    navigationMenu = new NavigationMenu(page);
    
    await navigationMenu.AcessDashboard();
  });

  test('Deve navegar pelas páginas principais usando o menu lateral', async ({ page }) => {
    // 1. Admin
    await navigationMenu.AcessAdminPage();
    await expect(page).toHaveURL(URL_PATTERNS.ADMIN);

    // 2. PIM
    await navigationMenu.AcessPimPage();
    await expect(page).toHaveURL(URL_PATTERNS.PIM);

    // 3. Leave
    await navigationMenu.LeavePage();
    await expect(page).toHaveURL(URL_PATTERNS.LEAVE);

    // 4. Time
    await navigationMenu.TimePage();
    await expect(page).toHaveURL(URL_PATTERNS.TIME);

    // 5. Recruitment
    await navigationMenu.RecruitmentPage();
    await expect(page).toHaveURL(URL_PATTERNS.RECRUITMENT);

    // 6. My Info
    await navigationMenu.MyInfoPage();
    await expect(page).toHaveURL(URL_PATTERNS.MY_INFO);

    // 7. Performance
    await navigationMenu.PerformancePage();
    await expect(page).toHaveURL(URL_PATTERNS.PERFORMANCE);

    // 8. Directory
    await navigationMenu.DirectoryPage();
    await expect(page).toHaveURL(URL_PATTERNS.DIRECTORY);

    // 9. Claim
    await navigationMenu.ClaimPage();
    await expect(page).toHaveURL(URL_PATTERNS.CLAIM);

    // 10. Buzz
    await navigationMenu.BuzzPage();
    await expect(page).toHaveURL(URL_PATTERNS.BUZZ);
  }); 
});