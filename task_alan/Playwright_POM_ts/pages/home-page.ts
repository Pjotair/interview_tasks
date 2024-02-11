import { Locator, Page } from "@playwright/test";
import { GlobalPage } from "../basics/global-page.ts";

export class HomePage extends GlobalPage {
  readonly url: string;
  readonly pageTitle: Locator;
  readonly getStartedButton: Locator;

  constructor(page: Page) {
    super(page);
    this.url = "/";

    this.pageTitle = this.page.locator(
      'h1[class="hero__title heroTitle_ohkl"]'
    );
    this.getStartedButton = this.page.locator(".getStarted_Sjon");
  }

  async gotoHomePage() {
    await this.page.goto(this.url);
    await this.page.waitForURL(`**${this.url}`, { waitUntil: "networkidle" });
  }
}
