import { expect } from "@playwright/test";

export class LoginPageSelector {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator("#userEmail");
    this.passwordInput = page.locator("#userPassword");
    this.loginButton = page.locator("#login");
    this.invalidtext =page.locator('.toast-error')
  }

  async navigateToLoginPage() {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  }

  async validLogin(emailName, password) {
    await this.emailInput.fill(emailName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async invalidLogin(emailName, password) {
    await this.emailInput.fill(emailName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.invalidtext.waitFor();
    await expect(this.invalidtext).toHaveText('Incorrect email or password.');
  }
}
