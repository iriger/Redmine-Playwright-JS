const { HomePage } = require("./main.page");

export class IssuesPage extends HomePage {
  constructor(page) {
    super(page);
    this.addFilterLabel = page.getByLabel("Add filter");
    this.subjectFilter = page.locator("#values_subject");
    this.applyLink = page.getByRole("link", { name: "Apply" });
    this.recordsSubject = page.locator("td.subject");
    this.recordId = page.locator("td.id");
    this.fiftyRecordsPerPage = page.getByRole("link", { name: "50" });
    this.hundredRecordsPerPage = page.getByRole("link", { name: "100" });
  }
  async addFilter(option) {
    await this.addFilterLabel.selectOption(option);
  }
  async fillFilter(option) {
    await this.subjectFilter.fill(option);
  }
  async apply() {
    await this.applyLink.click();
  }
  async selectFifty() {
    await this.fiftyRecordsPerPage.click();
  }
  async selectHundred() {
    await this.hundredRecordsPerPage.click();
  }
}
