import { test, expect } from "@playwright/test";
import { PoManager } from "../../../PageObjects/PoManager.js";
import { customTest } from "../../fixture/TestData/fixtureCsutomTest.js";
const dataSet = require("../../fixture/TestData/LoginTestData.json");

const assertion = { 
  message: " Thankyou for the order. "
};
//test.describe.configure({mode:"parallel"});
for (const data of dataSet) {

  test(`client App ${data.productName} @Smoke`, async ({ page }) => {

    const pomanager = new PoManager(page);

    const login = pomanager.getLoginPage();
    await login.loginMain(data.email, data.password);

    const dashboard = pomanager.getdashboardPage();
    await dashboard.searchProduct(data.productName);
    await dashboard.navigateToCart();

    const cart = pomanager.getCartPage();
    await cart.VerifyProductIsDisplayed(data.productName);
    await cart.checkOutButton();

    const payment = pomanager.getPaymentPage();
    await payment.personalInformation(data);
    await payment.placeOrder();
    await payment.thanksMessage(assertion);

    const orderID = await payment.orderIDValidation();
    console.log("Captured OrderID:", orderID);

    await payment.orderhistory();
    await page.waitForLoadState("networkidle");

    const orderHistory = pomanager.getOrderHistory();
    await orderHistory.getOrderID(orderID);

  });
}
//fixture for invalid login
  customTest(" Invalid Login @Smoke",async({page,testDataInvalidLogin})=>{

     const pomanager = new PoManager(page);
    const login = pomanager.getLoginPage();
    await login.invalid(testDataInvalidLogin.email, testDataInvalidLogin.password);
  })

