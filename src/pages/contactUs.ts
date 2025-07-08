import { Page } from "playwright";
import { Container } from "../core/container";
import { ContactForm } from "../components/contactUsPage/contactForm/contactForm";

export class ContactUsPage extends Container {
  private LOCATORS = {
    form: this.page.locator("form"),
  };

  public ContactForm = new ContactForm(this.LOCATORS.form, this.page);

  async open() {
    await this.page.goto("https://smartbet.am/contact-us");
  }
}
