const { HomePage } = require("./main.page");

export class DocumentationPage extends HomePage {
  constructor(page) {
    super(page);
    this.documentationPageHeading = page.getByRole("heading", {
      name: "Documentation",
    });
    this.userGuideHeading = page.getByRole("heading", {
      name: "Redmine guide",
    });
    this.developerGuide = page
      .locator("#content")
      .getByRole("link", { name: "Developer's Guide" });
    this.developerGuideHeading = page.getByRole("heading", {
      name: "Developer guide",
    });
  }
  
  async navigateToDeveloperGuide() {
    await this.developerGuide.click();
  }
}

