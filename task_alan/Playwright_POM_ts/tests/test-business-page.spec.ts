import { test, expect } from "@playwright/test";
import { BusinessPage } from "../pages/business-page";
import { NavContainer } from "../components/nav-container";

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
    await test.step("B tab", async () => {
      const context: string = "businessPage";
      const language: string = "en";
      await expect(navContainer.navMenu).toBeVisible();
      await navContainer.checkMenuTabs(context, language);
    });
  });
});
