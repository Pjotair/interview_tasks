import { Locator, Page } from "@playwright/test";
import { GlobalPage } from "../basics/global-page.ts";

export class BusinessPage extends GlobalPage {
  readonly url: string;

  constructor(page: Page) {
    super(page);
    this.url = "/en/business/";
  }

  async gotoBusinessPage() {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: "networkidle" });
  }
}
