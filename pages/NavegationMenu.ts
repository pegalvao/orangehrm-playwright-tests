import { Page, Locator } from '@playwright/test';
import { URL_PATTERNS } from '../config/route.ts';
export class NavegationMenu{
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
        await this.page.waitForURL(URL_PATTERNS.ADMIN);
    }

    async AcessPimPage(){
        await this.PimMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.PIM);
    }

    async LeavePage(){
        await this.LeaveMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.LEAVE);
    }

    async TimePage(){
        await this.TimeMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.TIME);
    }
   
    async RecruitmentPage(){
        await this.RecruitmentMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.RECRUITMENT);
    }

    async MyInfoPage(){
        await this.MyInfoMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.MY_INFO);
    }
    async PerformancePage(){
        await this.PerformanceMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.PERFORMANCE);
    }

    async DashboardPage(){
        await this.DashboardMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.DASHBOARD);
    }

    async DirectoryPage(){
        await this.DirectoryMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.DIRECTORY);
    }

    async MaintenancePage(){
        await this.MaintenanceMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.MAINTENANCE);
    }

    async ClaimPage(){
        await this.ClaimMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.CLAIM);
    }

    async BuzzPage(){
        await this.BuzzMenuButton.click();
        await this.page.waitForURL(URL_PATTERNS.BUZZ);
    }
}
