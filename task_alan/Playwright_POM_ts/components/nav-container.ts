import { Locator, Page, expect } from "playwright/test";
import { FooterContainer } from "./footer-container";
import testParameters from "../tests/DataForTest.json";

export class NavContainer {
  private readonly page: Page;
  readonly activeTab: string;

  readonly navMenu: Locator;
  readonly brandLogo: Locator;
  readonly wosp: Locator;
  readonly languageSwitch: Locator;
  readonly pageHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activeTab = "nav-link active";

    this.navMenu = this.page.locator('[class="nav-container"]');
    this.brandLogo = this.navMenu.locator('a > img[alt="Alan System"]');
    this.wosp = this.navMenu.locator('[class="wosp_img"]');
    this.languageSwitch = this.navMenu.locator(
      '[class="langs font-white ms-5 d-none d-xl-block"]'
    );
    this.pageHeader = this.page.locator("div.title > h1");
  }

  public async getNavMenuElements() {
    let menuElements: string[] = await this.navMenu
      .locator("li")
      .allTextContents();
    menuElements = menuElements.filter((n) => n);
    return menuElements;
  }

  public async goToTab(tab: string) {
    const element: Locator = this.navMenu.locator(`text=${tab}`).first();

    // TO BE REMOVE!!!
    console.log(await element.innerText());

    await element.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async getMenuElementLocator(currentTab: string): Promise<Locator> {
    const element: Locator = this.navMenu.locator(`text=${currentTab}`).first();
    return element;
  }

  public async checkMenuTabs(context: string, language: string) {
    let menuElements: string[] = await this.getNavMenuElements();
    const expectedMenuElements = testParameters[context][language].menuOptions;
    expect(menuElements).toEqual(expectedMenuElements);

    menuElements = menuElements.slice(0, -1);
    for (const buttonTab of menuElements) {
      await this.goToTab(buttonTab);
      const currentTab: Locator = await this.getMenuElementLocator(buttonTab);
      await expect(currentTab).toHaveClass(this.activeTab);

      await expect(this.brandLogo).toBeVisible();
      await expect(this.wosp).toBeVisible();
      await expect(this.languageSwitch).toBeVisible();

      const tabName = buttonTab.replace(/\s/g, "").toLowerCase();
      const pageHeader: string = await this.pageHeader.innerText();
      const expectedPageHeader: string =
        testParameters[context][language].headers[tabName];
      expect(pageHeader).toContain(expectedPageHeader);

      const footerContainerInstance = new FooterContainer(this.page);
      footerContainerInstance.checkFooterContact(context, language);
    }
  }
}
