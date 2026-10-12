import { Page, Locator } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator; 
  readonly saveButton: Locator;
  readonly successMessage: Locator;
  readonly employeeListTab: Locator;
  readonly employeeNameSearchInput: Locator;
  readonly searchButton: Locator;
  readonly deleteIcon: Locator;
  readonly confirmDeleteButton: Locator;
  readonly deletedSuccessMessage: Locator;
  readonly noRecordsFoundMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole('button', { name: 'Add' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.employeeIdInput = page.locator('label').filter({ hasText: 'Employee Id' }).locator('xpath=../following-sibling::div//input');
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.successMessage = page.getByText('Successfully Saved');
    this.employeeListTab = page.getByRole('link', { name: 'Employee List' });
    this.employeeNameSearchInput = page.getByPlaceholder('Type for hints...').first(); 
    this.searchButton = page.getByRole('button', { name: 'Search', exact: true });
    this.deleteIcon = page.locator('.bi-trash');
    this.confirmDeleteButton = page.getByRole('button', { name: 'Yes, Delete' });
    this.deletedSuccessMessage = page.getByText('Successfully Deleted');
    this.noRecordsFoundMessage = page.getByText('No Records Found').first();
  }

  async addEmployee(firstName: string, lastName: string, employeeId: string) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.employeeIdInput.fill(employeeId);
    await this.saveButton.click();
  }

  async goToEmployeeList() {
    await this.employeeListTab.click();
  }

  async searchEmployee(name: string) {
    await this.employeeNameSearchInput.fill(name);
    await this.page.getByRole('option').first().waitFor({ state: 'visible' });
    await this.page.getByRole('option').first().click();
    await this.searchButton.click();
  }

  async deleteEmployee() {
    await this.deleteIcon.first().click();
    await this.confirmDeleteButton.click();
  }

  getEmployeeRow(employeeName: string): Locator {
    return this.page.getByRole('row').filter({ hasText: employeeName });
  }
}