import { Component } from "../../../core/component";

export class ProductsGrid extends Component {
  public async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }
}
