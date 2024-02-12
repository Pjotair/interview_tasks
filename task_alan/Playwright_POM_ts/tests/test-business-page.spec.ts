import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/home-page";
import { BusinessPage } from "../pages/business-page";
import { CareerPage } from "../pages/career-page";
import { NavContainer } from "../components/nav-container";
import { HelpersMakers } from "../helpers/combinatios-maker";
import testParameters from "./data-for-test.json";

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

test.describe("Home Page Tests", () => {
  let homePage: HomePage;
  let careerPage: CareerPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    careerPage = new CareerPage(page);
    // go to Home Page and wait until page is loaded
    await homePage.gotoHomePage();
  });

  test("Career ", async ({ page }) => {
    /*
    {link to test documentation}
    Check the validation of the required fields in the job contact form.
    Given: start from home page {} go to selected job offer
    When: after going to the view of the selected offer fill out the form 
    - check all possible combinations
    Then: all three fields contain validation
    */
    await test.step("Go to job offer", async () => {
      await homePage.hopOnBoard();
      await careerPage.findJobOffer();
      const roleName: string =
        testParameters.careerPage.en.careerOffer.roleName;
      await careerPage.goToJobOffer(roleName);
    });

    await test.step("Check all possible combinations in the form", async () => {
      const expectedInputFileErrorMsg: string =
        testParameters.careerPage.en.careerOffer.validationMessage.inputFileMsg;
      const expectedCheckboxErrorMsg: string =
        testParameters.careerPage.en.careerOffer.validationMessage.consentMsg;

      const helpers = new HelpersMakers();
      const combinations: boolean[][] = helpers.combinatorics();

      // TO BE REMOVE
      combinations.pop();
      console.log(combinations);

      for (const combination of combinations) {
        const [attach_file, checkbox_one, checkbox_two] = combination;

        // selecting options on a form
        if (attach_file) {
          await careerPage.uploadFile.setInputFiles("./empty-pdf.pdf");
          // waiting for file to load
          page.waitForTimeout(1000);
        }
        checkbox_one && (await careerPage.applyCheckboxOne.click());
        checkbox_two && (await careerPage.applyCheckboxTwo.click());

        await careerPage.applyButton.click();

        // check form validation
        if (!attach_file) {
          const uploadFileErrorMsg: string =
            await careerPage.uploadFileErrorMsg.innerText();
          expect(uploadFileErrorMsg).toContain(expectedInputFileErrorMsg);
        }
        if (!checkbox_one) {
          const checkboxOneErrorMsg: string =
            await careerPage.applyChecboxOneErrorMsg.innerText();
          expect(checkboxOneErrorMsg).toContain(expectedCheckboxErrorMsg);
        }
        if (!checkbox_two) {
          const checkboxTwoErrorMsg: string =
            await careerPage.applyChecboxTwoErrorMsg.innerText();
          expect(checkboxTwoErrorMsg).toContain(expectedCheckboxErrorMsg);
        }

        // reload the page before the next iteration of the test
        await page.reload();
        await page.waitForLoadState("domcontentloaded");
      }
    });
  });
});
