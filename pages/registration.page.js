const { HomePage } = require("./main.page");

export class RegistrationPage extends HomePage {
  constructor(page) {
    super(page);
    this.registrationPageTitle = page.locator("#content h2");
    this.userName = page.locator("#user_login");
    this.password = page.locator("#user_password");
    this.passwordConfirmation = page.locator("#user_password_confirmation");
    this.userFirstName = page.locator("#user_firstname");
    this.userLastName = page.locator("#user_lastname");
    this.userEmail = page.locator("#user_mail");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.confirmationMessage = page.locator("#flash_notice");
  }

  async fillUserName(user) {
    await this.userName.fill(user);
  }
  async fillPassword(password) {
    await this.password.fill(password);
  }
  async fillPasswordConfirmation(password) {
    await this.passwordConfirmation.fill(password);
  }
  async fillFirstName(firstName) {
    await this.userFirstName.fill(firstName);
  }
  async fillLastName(lastName) {
    await this.userLastName.fill(lastName);
  }
  async fillEmail(email) {
    await this.userEmail.fill(email);
  }
  async submitRegistration() {
    await this.submitButton.click();
  }
}
