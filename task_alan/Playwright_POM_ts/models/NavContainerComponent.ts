import { Locator, Page } from "playwright/test";
// import { GlobalPage } from "../lib/GlobalPage.ts"

export class NavContainer{
    private readonly page: Page;
    readonly topBar: Locator;
    readonly brandLogo: Locator;
    readonly navMenuContainer: Locator;

    constructor(page: Page) {
        this.page = page
        this.topBar = this.page.locator('[class="nav-container sticky"] > nav');
        this.brandLogo = this.page.locator('a > img[alt="Alan System"]');
        this.navMenuContainer = this.page.locator('ul[id="menu-menu-biznes-en"]')
    }
}
