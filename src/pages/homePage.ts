import { Container } from "../core/container";
import { Header } from "../components/shared/header/header";
import { ProductsGrid } from "../components/homePage/productsGrid/productsGrid";
import { SolutionsGrid } from "../components/homePage/solutionsGrid/solutionsGrid";

export class HomePage extends Container {
  private LOCATORS = {
    header: this.page.locator("//header"),
    solutions: this.page.locator('//ul[@role="menu" and contains(., "White")]'),
    products: this.page.locator('//ul[@role="menu" and contains(., "Smart")]'),
  };

  public Header = new Header(this.LOCATORS.header, this.page);
  public ProductsGrid = new ProductsGrid(this.LOCATORS.products, this.page);
  public SolutionsGrid = new SolutionsGrid(this.LOCATORS.solutions, this.page);

  public async open() {
    await this.page.goto("https://smartbet.am");
  }
}
