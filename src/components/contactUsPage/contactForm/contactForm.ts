import { Component } from "../../../core/component";
type ContactFormField = "from_name" | "from_last_name" | "email";

export class ContactForm extends Component {
  private LOCATORS = {
    contactUsButton: this.locator.locator('//button[contains(.,"Contact Us")]'),
    errorMessages: (name: string) =>
      this.locator.locator(`//p[text()="${name}"]`),
  };

  public async clickContactUsButton(): Promise<void> {
    await this.LOCATORS.contactUsButton.click();
  }

  public async isVisibleErrorMessage(name: string): Promise<boolean> {
    return await this.LOCATORS.errorMessages(name).isVisible();
  }
}
