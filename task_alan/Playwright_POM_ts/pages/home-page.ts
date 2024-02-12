import { Locator, Page } from "@playwright/test";
import { GlobalPage } from "../basics/global-page.ts";

export class HomePage extends GlobalPage {
  readonly url: string;
  readonly hopOnBoardButton: Locator;

  constructor(page: Page) {
    super(page);
    this.url = "/en/";
    this.hopOnBoardButton = this.page.locator('h3 > a[href="/en/for-you/"]');
  }

  async gotoHomePage() {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: "networkidle" });
  }

  public async hopOnBoard() {
    await this.hopOnBoardButton.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
