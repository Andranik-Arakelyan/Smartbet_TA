import { test, expect } from "@playwright/test";
import { HomePage } from "../../../src/pages/homePage";

test.describe("Menu Bars", () => {
  test("Menus for products and solutions should open.", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    const header = homePage.Header;

    await test.step("Should open products menu", async () => {
      const productsGrid = homePage.ProductsGrid;

      expect(await productsGrid.isVisible()).toBe(false);

      await header.clickProductsMenu();

      expect(await productsGrid.isVisible()).toBe(true);
    });

    await test.step("Should open solutions menu", async () => {
      const solutionsGrid = homePage.SolutionsGrid;

      expect(await solutionsGrid.isVisible()).toBe(false);

      await page.keyboard.press("Escape");
      await header.clickSolutionsMenu();

      expect(await solutionsGrid.isVisible()).toBe(true);
    });
  });
});
