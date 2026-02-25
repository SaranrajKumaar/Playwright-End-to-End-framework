import { expect } from "@playwright/test";

export class PaymentPageSelector {

  constructor(page) {

    this.page = page;
    // All text inputs (card, name, coupon etc.)
    this.inputText = page.locator('input[type="text"]');
    this.applyButton = page.getByRole("button", { name: "Apply Coupon" });
    this.selectCountry = page.locator('input[placeholder="Select Country"]');
    this.dropDown = page.locator('section[class*="ta-results"]');
    this.placeOrderButton = page.locator('a[class*="action__submit"]');
    // More reliable coupon success locator
    this.waitCoupon = page.getByText("* Coupon Applied");
    this.ThankYouMessage = page.locator("td h1");
    this.orderID =page.locator("td label").last();
    this.orderhistorys = page.locator("td label").first()

  }

  async personalInformation(testData) {

    // CARD NUMBER
    await this.inputText.first().fill("");
    await this.inputText.first().fill(testData.number);

    // NAME ON CARD
    await this.inputText.nth(2).fill(testData.name);

    // COUPON
    await this.inputText.nth(3).fill(testData.coupon);
    await this.applyButton.click();

    // WAIT FOR COUPON SUCCESS MESSAGE
    await this.waitCoupon.waitFor();
    await expect(this.waitCoupon).toBeVisible();

    // EMAIL VALIDATION
    const emailValue = await this.inputText.nth(4).inputValue();
    expect(emailValue).toBe(testData.email);

    // COUNTRY SEARCH
    await this.selectCountry.fill("");
    await this.selectCountry.type(testData.press, { delay: 100 });

    // WAIT FOR DROPDOWN OPTIONS
    await this.dropDown.waitFor();

    const options = this.dropDown.locator("button");
    const dropCount = await options.count();

    for (let j = 0; j < dropCount; j++) {
      const text = await options.nth(j).textContent();

      if (text?.trim().toLowerCase().includes(testData.press.toLowerCase())) {
        await options.nth(j).click();
        break;
      }
    }

  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async thanksMessage(data){
    const actualMessage= await this.ThankYouMessage.textContent()
    expect(actualMessage).toContain(data.message);

  }

  getOrderID(){
    return this.orderID.textContent();
  }


  async orderIDValidation(){
    const orderTextID = await this.getOrderID(); 
    const trimOrder =orderTextID.split("|")[1].trim();
      console.log(trimOrder);
      return trimOrder;
  }

  async orderhistory(){
    await this.orderhistorys.click();
  }


}