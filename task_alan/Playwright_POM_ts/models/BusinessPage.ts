import { Locator, Page } from "@playwright/test";
import { GlobalPage } from "../lib/GlobalPage.ts"

export class BusinessPage extends GlobalPage {
    readonly url: string;
    readonly menuContainer: Locator;
  
    constructor(page: Page) {
      super(page);
      this.url = "/en/business/";
  
    //   this.menuContainer = this.page.locator('ul[id="menu-menu-biznes-en"]');
    }
  
    async gotoBusinessPage() {
      await this.page.goto(this.url);
      await this.page.waitForURL(`**${this.url}`, { waitUntil: "networkidle" });
    }
  }
