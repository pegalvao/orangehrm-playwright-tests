import { test, expect } from '@playwright/test';
import { PimPage } from '../../pages/PimPage';
import { NavigationMenu } from '../../pages/NavigationMenu';

// Execução sequencial para não quebrar a busca
test.describe.serial('Módulo PIM - Gestão de Funcionários', () => {
  let pimPage: PimPage;
  let navigationMenu: NavigationMenu;
  
  // Dados dinâmicos para evitar duplicidade
  const uniqueFirstName = `QAUser${Date.now()}`;
  const lastName = 'Automated';
  // Pega os últimos 6 números do timestamp para servir como Employee ID único
  const uniqueEmployeeId = Date.now().toString().slice(-6); 

  test.beforeEach(async ({ page }) => {
    pimPage = new PimPage(page);
    navigationMenu = new NavigationMenu(page);
    
    // Inicia no Dashboard e vai para o PIM
    await navigationMenu.AcessDashboard();
    await navigationMenu.AcessPimPage();
  });

  test('Deve cadastrar um novo funcionário com sucesso', async () => {
    // Passando o nome, sobrenome e o ID único
    await pimPage.addEmployee(uniqueFirstName, lastName, uniqueEmployeeId);
    await expect(pimPage.successMessage).toBeVisible();
  });

  test('Deve buscar o funcionário recém-cadastrado na lista', async () => {
    // O beforeEach nos coloca no PIM, então já estamos na tela de Employee List
    await pimPage.searchEmployee(uniqueFirstName);
    
    // Pega a linha usando o método que criamos na PimPage
    const resultRow = pimPage.getEmployeeRow(uniqueFirstName);
    
    // Valida se a linha existe e se contém o ID que criamos!
    await expect(resultRow).toBeVisible();
    await expect(resultRow).toContainText(uniqueEmployeeId);
  });

test('Deve excluir o funcionário criado e limpar a base', async () => {
    // Busca novamente
    await pimPage.searchEmployee(uniqueFirstName);
    
    // Deleta
    await pimPage.deleteEmployee();
    
    // Valida as mensagens de deleção usando estritamente o POM
    await expect(pimPage.deletedSuccessMessage).toBeVisible();
    await expect(pimPage.noRecordsFoundMessage).toBeVisible();
  });
});