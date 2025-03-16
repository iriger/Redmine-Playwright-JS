exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.issuesLink = page.getByRole("link", { name: "issues" });
    this.registerLink = page.getByRole("link", { name: "register" });
    this.loginLink = page.getByRole("link", { name: "Sign In" });
    this.documentationLink = page.getByRole("link", { name: "documentation" });
  }

  async navigateToHomePage() {
    await this.page.goto("/");
  }
  async navigateToIssuesPage() {
    await this.issuesLink.click();
  }
  async navigateToRegistrationPage() {
    await this.registerLink.click();
  }
  async navigateToLoginPage() {
    await this.loginLink.click();
  }
  async navigateToDocumentationPage() {
    await this.documentationLink.click();
  }
};
