import { Page, Locator } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly saveButton: Locator;
  readonly successMessage: Locator;
  readonly employeeListTab: Locator;
  readonly employeeNameSearchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Elementos de Cadastro
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.successMessage = page.getByText('Successfully Saved');

    // Elementos de Busca
    this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
    // O OrangeHRM usa 'Type for hints...' no campo de busca de nome
    this.employeeNameSearchInput = page.getByPlaceholder('Type for hints...').first(); 
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  // Ação de cadastrar
  async addEmployee(firstName: string, lastName: string) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }

  // Ação de buscar
  async searchEmployee(name: string) {
    await this.employeeListTab.click(); // Garante que está na aba de busca
    await this.employeeNameSearchInput.fill(name);
    // Aguarda o dropdown de autocomplete aparecer e clica na primeira opção
    await this.page.getByRole('option').first().waitFor({ state: 'visible' });
    await this.page.getByRole('option').first().click();
    await this.searchButton.click();
  }

  getEmployeeRow(employeeName: string): Locator {
    return this.page.getByRole('row').filter({ hasText: employeeName });
  }
  
}