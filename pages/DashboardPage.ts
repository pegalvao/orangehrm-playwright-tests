import { Page, Locator } from '@playwright/test';

export class DashboardPage{
    readonly page : Page
    readonly dashboardButton : Locator
    constructor(page: Page) {
        this.page = page;
        this.dashboardButton = page.getByRole('link', { name: 'Dashboard' });
    }
    //Acessar a página de Dashboard
    async AcessDashboard(){
        await this.page.goto('**/dashboard/index')
    }

    async LoadingDashboardPage (){
        await this.page.waitForURL('**/dashboard/index', { timeout: 10000 });
    }

}

