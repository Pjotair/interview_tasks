import { Page, Locator } from "@playwright/test";
import { GlobalPage } from "../basics/global-page.ts";

export class CareerPage extends GlobalPage {
  readonly findJobOfferButton: Locator;
  readonly applyContainer: Locator;
  readonly uploadFile: Locator;
  readonly applyCheckboxOne: Locator;
  readonly applyCheckboxTwo: Locator;
  readonly applyButton: Locator;
  readonly uploadFileErrorMsg: Locator;
  readonly applyChecboxOneErrorMsg: Locator;
  readonly applyChecboxTwoErrorMsg: Locator;

  constructor(page: Page) {
    super(page);
    this.findJobOfferButton = this.page.locator('h3 > a[href="/en/career/"]');

    // apply form
    this.applyContainer = this.page.locator('[class="bg-grad form p-5"]');
    this.uploadFile = this.applyContainer.locator('input[type="file"]');
    this.applyCheckboxOne = this.applyContainer.locator('[id="checkbox-1"]');
    this.applyCheckboxTwo = this.applyContainer.locator('[id="checkbox-2"]');
    this.applyButton = this.applyContainer.locator("button.forminator-button");
    this.uploadFileErrorMsg = this.applyContainer.locator(
      'div[id="upload-1"] span.forminator-error-message'
    );
    this.applyChecboxOneErrorMsg = this.applyCheckboxOne.locator(
      "span.forminator-error-message"
    );
    this.applyChecboxTwoErrorMsg = this.applyCheckboxTwo.locator(
      "span.forminator-error-message"
    );
  }

  public async findJobOffer() {
    await this.findJobOfferButton.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async goToJobOffer(roleName: string) {
    const jobOffer: Locator = this.page.locator(`text=${roleName}`).first();
    await jobOffer.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
