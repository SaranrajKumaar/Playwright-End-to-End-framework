import { expect } from "@playwright/test";

export class CartPageSelector {
  constructor(page) {
    this.page = page;
    this.value = page.locator('ul li span[class="value"]');
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
    this.cartProducts = page.locator("div li").first();
  }

  getProductLocator(productName) {
    return this.page.locator(`h3:has-text("${productName}")`);
  }

  async VerifyProductIsDisplayed(productName) {
    await this.cartProducts.waitFor();

    const bool = await this.getProductLocator(productName).isVisible();
    expect(bool).toBeTruthy();

    const subTotal = await this.value.first().textContent();
    const total = await this.value.nth(1).textContent();

    expect(subTotal).toEqual(total);
  }

  async checkOutButton() {
    await this.checkoutButton.click();
  }
}