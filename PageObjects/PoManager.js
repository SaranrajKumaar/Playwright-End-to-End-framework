import { CartPageSelector } from "./CartPage/CartPageSelector.js";
import { DashboardPageSelector } from "./DashboardPage/DashboardPageSelector.js";
import { OrderHistorys } from "./OrderHistory/OrderHistory.js";
import { LoginPagesMain } from "./pages/loginPages.js";
import { PaymentPageSelector } from "./PaymentPage/PaymentPage.js";


export class PoManager {
  constructor(page) {
    this.page = page;

    this.loginpageM = new LoginPagesMain(page);
    this.dashboard = new DashboardPageSelector(page);
    this.cart = new CartPageSelector(page);

    this.orderHistory = new OrderHistorys(page);
    this.payment =new PaymentPageSelector(page)
  }

  getLoginPage()
  { return this.loginpageM }

  getdashboardPage()
  { return this.dashboard }

  getCartPage()
  { return this.cart }

  getPaymentPage()
  { return this.payment }

  getOrderHistory()
  { return this.orderHistory }
}