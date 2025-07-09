import { test, expect } from "@playwright/test";
import { ContactUsPage } from "../../../src/pages/contactUs";

test.describe("Menu Bars", () => {
  test("Menus for products and solutions should open.", async ({ page }) => {
    const errorMessages = [
      "First Name is required",
      "Email is required",
      "Message is required",
    ];

    const contactUspage = new ContactUsPage(page);
    await contactUspage.open();

    await test.step("Should open products menu", async () => {
      const form = contactUspage.ContactForm;
      await form.clickContactUsButton();

      expect(await form.isVisibleErrorMessage(errorMessages[0])).toBe(true);
      expect(await form.isVisibleErrorMessage(errorMessages[1])).toBe(true);
      expect(await form.isVisibleErrorMessage(errorMessages[2])).toBe(true);
    });
  });
});
