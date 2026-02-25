import { LoginPageSelector } from "../LoginPage/LoginPageSelector";


export class LoginPagesMain {
  constructor(page) {
    this.page = page;
    this.login = new LoginPageSelector(page);
  }

  async loginMain(email, password) {
    await this.login.navigateToLoginPage();
    await this.login.validLogin(email, password);
  }

  async  invalid(email,password){
    await this.login.navigateToLoginPage();
    await this.login.invalidLogin(email, password);
  }
}