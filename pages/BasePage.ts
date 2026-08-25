import { Page, Locator } from '@playwright/test';

export class BasePage{
    readonly page : Page
    readonly AdminMenuButton : Locator
    readonly PimMenuButton : Locator
    readonly LeaveMenuButton: Locator
    readonly TimeMenuButton : Locator
    readonly RecruitmentMenuButton: Locator
    readonly MyInfoMenuButton : Locator
    readonly PerformanceMenuButton: Locator
    readonly DashboardMenuButton : Locator
    readonly DirectoryMenuButton : Locator
    readonly MaintenanceMenuButton: Locator
    readonly ClaimMenuButton : Locator
    readonly BuzzMenuButton : Locator
    constructor(page: Page) {
        this.page = page;
        this.AdminMenuButton = page.getByRole('link', { name: 'Admin' });
        this.PimMenuButton = page.getByRole('link', { name: 'PIM' });
        this.LeaveMenuButton = page.getByRole('link', { name: 'Leave' });
        this.TimeMenuButton = page.getByRole('link', { name: 'Time' });
        this.RecruitmentMenuButton = page.getByRole('link', { name: 'Recruitment' });
        this.MyInfoMenuButton = page.getByRole('link', { name: 'My Info' });
        this.PerformanceMenuButton = page.getByRole('link', {name: 'Performance'});
        this.DashboardMenuButton = page.getByRole('link', {name: 'Dashboard'});
        this.DirectoryMenuButton = page.getByRole('link', {name: 'Directory'});
        this.MaintenanceMenuButton = page.getByRole('link', {name: 'Maintenance'});
        this.ClaimMenuButton = page.getByRole('link', {name: 'Claim'});
        this.BuzzMenuButton = page.getByRole('link', {name: 'Buzz'});
    }
    //Acessar a página de Admin
    async AcessAdminPage(){
        await this.AdminMenuButton.click();
        await this.page.waitForURL('**/admin/viewSystemUsers');
    }

    async AcessPimPage(){
        await this.PimMenuButton.click();
        await this.page.waitForURL('**/pim/viewEmployeeList');
    }

   

}

