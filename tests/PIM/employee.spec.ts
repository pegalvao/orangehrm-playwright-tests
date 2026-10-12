import { test, expect } from '@playwright/test';
import { PimPage } from '../../pages/PimPage';
import { NavigationMenu } from '../../pages/NavigationMenu';

test.describe.serial('Módulo PIM - Gestão de Funcionários', () => {
  let pimPage: PimPage;
  let navigationMenu: NavigationMenu;
  
  // Usamos o Date.now() para gerar um nome único e o teste nunca falhar por duplicidade
  const uniqueFirstName = `QAUser${Date.now()}`;
  const lastName = 'Automated';

  test.beforeEach(async ({ page }) => {
    pimPage = new PimPage(page);
    navigationMenu = new NavigationMenu(page);
    await navigationMenu.AcessDashboard();
    await navigationMenu.AcessPimPage();
  });

  test('Deve cadastrar um novo funcionário com sucesso', async () => {
    // Executa a ação de cadastro isolada no Page Object
    await pimPage.addEmployee(uniqueFirstName, lastName);
    
    // Valida se o sistema exibiu a mensagem de sucesso
    await expect(pimPage.successMessage).toBeVisible();
  });

 test('Deve buscar o funcionário recém-cadastrado na lista', async () => {
    // 1. Executa a busca
    await pimPage.searchEmployee(uniqueFirstName);
    
    // 2. Chama o método da página passando o nome, e valida se está visível
    const resultRow = pimPage.getEmployeeRow(uniqueFirstName);
    await expect(resultRow).toBeVisible();
  });
});