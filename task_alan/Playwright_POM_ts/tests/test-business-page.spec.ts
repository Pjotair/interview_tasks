import { test, expect, Locator } from "@playwright/test";
import { BusinessPage } from "../pages/business-page";
import { NavContainer } from "../components/nav-container";
import testParameters from "./DataForTest.json";

const BUSINESS_MENU: string[] = testParameters["navMenu"].businessMenu;

test.describe("Home Page Tests", () => {
  let businessPage: BusinessPage;
  let navContainer: NavContainer;

  test.beforeEach(async ({ page }) => {
    businessPage = new BusinessPage(page);
    navContainer = new NavContainer(page);
    // go to Home Page and wait until page is loaded
    await businessPage.gotoBusinessPage();
  });

  test("Business Page - Navigation Menu", async () => {
    /*
    link to test documentation
    */
    await test.step('B tab', async () => {
  
      console.log("START");
  
      await expect(navContainer.navMenu).toBeVisible()
      await navContainer.checkTabs("businessMenu");
  
      console.log("END");
  
    });
  });

  // test("Home Page - Page Header", async () => {
  //   /*
  //   The user sees the page header
  //   Given: the user has access to the page
  //   When: open the home page
  //   Then: the page contains the header
  //   */
  //   const homePageHeader: string = await homePage.pageTitle.innerText();
  //   const expectedPageHeader: string = TEST_PARAMETERS.pageTitle;
  //   expect(homePageHeader).toEqual(expectedPageHeader);
  // });

  // test("Home Page - Check [Get Started] Button", async ({ page }) => {
  //   /*
  //   The user can use the Get Started button
  //   Given: the user has access to the page
  //   When: open the home page
  //   Then: The page contains a Get Started button
  //   */
  //   const getStartedButton: Locator = homePage.getStartedButton;
  //   await test.step("Check basic properties", async () => {
  //     await expect(getStartedButton).toBeVisible();
  //     await expect(getStartedButton).toBeEnabled();

  //     await getStartedButton.hover();
  //     await page.waitForTimeout(10);
  //     const buttonColor: string = await getStartedButton.evaluate((element) => {
  //       return window
  //         .getComputedStyle(element)
  //         .getPropertyValue("background-color");
  //     });
  //     expect(buttonColor).toBe(EXPECTED_STYLES.button.hoverColor);
  //   });

  //   await test.step("Check navigation", async () => {
  //     await Promise.all([getStartedButton.click(), page.waitForLoadState()]);
  //     await expect(page).toHaveURL(new RegExp(testParameters.docs.url));
  //   });
  // });
});

test.describe("Inne", () => {
  let businessPage: BusinessPage;
  let navContainer: NavContainer;

  test.beforeEach(async ({ page }) => {
    businessPage = new BusinessPage(page);
    navContainer = new NavContainer(page);
    // go to Home Page and wait until page is loaded
    await businessPage.gotoBusinessPage();
  });

  // test("B Page", async () => {
  //   await test.step('B tab', async () => {

  //     console.log("START");

  //     await expect(navContainer.navMenu).toBeVisible()
  //     await navContainer.checkTabs("businessMenu");

  //     console.log("END");

  //   });
  // });
});