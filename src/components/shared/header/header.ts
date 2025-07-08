import { Component } from "../../../core/component";

type MenuType = "Products" | "Solutions";

export class Header extends Component {
  private LOCATORS = {
    menuButton: (name: MenuType) =>
      this.locator.locator(`//div[contains(text(), "${name}")]`),
  };

  public async clickProductsMenu() {
    await this.LOCATORS.menuButton("Products").click();
  }

  public async clickSolutionsMenu() {
    await this.LOCATORS.menuButton("Solutions").click();
  }
}
