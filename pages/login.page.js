const { HomePage } = require("./main.page");

export class LoginPage extends HomePage {
  constructor(page) {
    super(page);
    this.loginForm = page.locator("#login-form");
    this.userField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("#login-submit");
    this.infoMessage = page.locator("#flash_error");
  }

  async fillUserField(user) {
    await this.userField.fill(user);
  }
  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }
  async login() {
    await this.loginButton.click();
  }
}

