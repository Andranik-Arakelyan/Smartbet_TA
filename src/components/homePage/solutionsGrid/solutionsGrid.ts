import { Component } from "../../../core/component";

export class SolutionsGrid extends Component {
  public async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }
}
