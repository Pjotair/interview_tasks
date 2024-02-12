import { test, expect } from "@playwright/test";
import { BusinessPage } from "../pages/business-page";
import { CareerPage } from "../pages/career-page";
import { NavContainer } from "../components/nav-container";

const BUSINESS: string = "businessPage";
const CAREER: string = "careerPage";
const ENGLISH: string = "en";
const POLSKI: string = "pl";

test.describe("Home Page Tests", () => {
  let businessPage: BusinessPage;
  let careerPage: CareerPage;
  let navContainer: NavContainer;

  test.beforeEach(async ({ page }) => {
    businessPage = new BusinessPage(page);
    careerPage = new CareerPage(page);
    navContainer = new NavContainer(page);
    // go to Home Page and wait until page is loaded
    await businessPage.gotoBusinessPage();
  });

  test("Business Page - en - Check Navigation Menu and Footer", async () => {
    /*
    {link to test documentation}
    For each tab, check the menu at the top of the page and the address in the footer.
    Given: starting from the page view{url}/business in English version.
    When: check the menu items and the address in the footer for each tab
    Then: all menu options and the address in the footer are visible
    */
    const context: string = BUSINESS;
    const language: string = ENGLISH;
    await expect(navContainer.navMenu).toBeVisible();
    await navContainer.checkMenuTabs(context, language);
  });

  test("Career Page - en - Check Navigation Menu and Footer", async () => {
    /*
    {link to test documentation}
    For each tab, check the menu at the top of the page and the address in the footer.
    Given: starting from the page{url}/business view in the English version,
    go to the Careers page using the button in the navigation menu
    When: check the menu items and the address in the footer for each tab
    Then: all menu options and the address in the footer are visible
    */
    await navContainer.goToTab("Career");
    const context: string = CAREER;
    const language: string = ENGLISH;
    await expect(navContainer.navMenu).toBeVisible();
    await navContainer.checkMenuTabs(context, language);
  });

  test("Business Page - pl - Check Navigation Menu and Footer", async () => {
    /*
    {link to test documentation}
    For each tab, check the menu at the top of the page and the address in the footer.
    Given: starting from the page view{url}/business in English version,
    then change the language to Polish
    When: check the menu items and the address in the footer for each tab
    Then: all menu options and the address in the footer are visible
    */
    await navContainer.switchLanguage();
    const context: string = BUSINESS;
    const language: string = POLSKI;
    await expect(navContainer.navMenu).toBeVisible();
    await navContainer.checkMenuTabs(context, language);
  });

  test("Career Page - pl - Check Navigation Menu and Footer", async () => {
    /*
    {link to test documentation}
    For each tab, check the menu at the top of the page and the address in the footer.
    Given: starting from the page view{url}/business in the English version,
    go to the Careers page using the button in the navigation menu,
    then change the language to Polish
    When: check the menu items and the address in the footer for each tab
    Then: all menu options and the address in the footer are visible
    */
    await navContainer.goToTab("Career");
    await navContainer.switchLanguage();
    const context: string = CAREER;
    const language: string = POLSKI;
    await expect(navContainer.navMenu).toBeVisible();
    await navContainer.checkMenuTabs(context, language);
  });
});
