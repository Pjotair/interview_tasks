import { Locator, Page, expect } from "playwright/test";
import testParameters from "../tests/DataForTest.json";

interface Dictionary<T> {
  [key: string]: T;
}

// const expectedFooterContact: Dictionary<string> = testParameters.footer.contact;

export class FooterContainer {
  private readonly page: Page;
  readonly footerContactContainer: Locator;
  readonly contactHeader: Locator;
  readonly contactAddress: Locator;
  readonly contactPhone: Locator;
  readonly contactEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.footerContactContainer = this.page.locator(
      'footer > div[class="container"] div[class="row"]:nth-child(1) > div:nth-child(3)'
    );
    this.contactHeader = this.footerContactContainer.locator("> h3");
    this.contactAddress = this.footerContactContainer.locator(
      "> div:nth-of-type(1)"
    );
    this.contactPhone = this.footerContactContainer.locator(
      "> div:nth-of-type(2)"
    );
    this.contactEmail = this.footerContactContainer.locator(
      "> div:nth-of-type(4)"
    );
  }

  public async getContactData(): Promise<Dictionary<string | null>> {
    const contactData: Dictionary<string | null> = {
      title: await this.contactHeader.innerText(),
      address: (await this.contactAddress.innerText()).replace(/\n/g, " "),
      phone: await this.contactPhone.innerText(),
      email: await this.contactEmail.innerText(),
    };
    return contactData;
  }

  public async checkFooterContact(
    context: string,
    language: string
  ): Promise<void> {
    const contactData: Dictionary<string | null> = await this.getContactData();
    // const expectedFooterContact: Dictionary<string> = testParameters.footer.contact;
    const expectedFooterContact: Dictionary<string> =
      testParameters[context][language].footer.contact;
    expect(contactData).toMatchObject(expectedFooterContact);
  }
}
