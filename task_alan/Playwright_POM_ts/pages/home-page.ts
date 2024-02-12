import { Locator, Page } from "@playwright/test";
import { GlobalPage } from "../basics/global-page.ts";

export class HomePage extends GlobalPage {
  readonly url: string;

  constructor(page: Page) {
    super(page);
    this.url = "/en";
  }

  async gotoHomePage() {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: "networkidle" });
  }
}
