export class DashboardPageSelector {
  constructor(page) {
    this.page = page;
    this.productListName = page.locator(".card-body h5 b");
    this.productCount = page.locator(".card-body");
    this.cartIcon = page.locator('button[routerlink*="cart"]');
    this.cartList =page.locator('div li')
  }

  async searchProduct(productName) {
    await this.page.waitForSelector(".card-body h5 b");
    
    const getText = await this.productListName.allTextContents();
    console.log(getText);
    const product = this.productCount;
    const counts = await product.count();
    for (let i = 0; i <= counts; i++) {
      if ((await product.nth(i).locator("b").textContent()) === productName) {
        await product.nth(i).locator("text=Add To Cart").click();
        break;
      }
    }

  }

  async navigateToCart(){
//cart 
    await this.cartIcon.click();
    await this.cartList.first().waitFor();
  }
}


