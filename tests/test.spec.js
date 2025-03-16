import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/main.page";
import { IssuesPage } from "../pages/issues.page";
import { RegistrationPage } from "../pages/registration.page";
import { LoginPage } from "../pages/login.page";
import { DocumentationPage } from "../pages/documentation.page";

const { faker } = require("@faker-js/faker");
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.username({ firstName, lastName });
const email = faker.internet.email({ firstName, lastName });
const password = faker.internet.password({ length: 12, memorable: true });

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
});

test("Test 1 - new user registration", async ({ page }) => {
  const homePage = new HomePage(page);
  const registrationPage = new RegistrationPage(page);

  await homePage.navigateToRegistrationPage();
  await expect(registrationPage.registrationPageTitle).toHaveText("Register");
  await registrationPage.fillUserName(username);
  await registrationPage.fillPassword(password);
  await registrationPage.fillPasswordConfirmation(password);
  await registrationPage.fillFirstName(firstName);
  await registrationPage.fillLastName(lastName);
  await registrationPage.fillEmail(email);
  await registrationPage.submitRegistration();
  await expect(registrationPage.confirmationMessage).toHaveText(
    /Account was successfully created/
  );
});

test("Test 2 - Login with invalid credentials", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.navigateToLoginPage();
  await expect(loginPage.loginForm).toBeVisible();
  await loginPage.fillUserField("     ");
  await loginPage.fillPasswordField("ValidPassword");
  await loginPage.login();
  await expect(loginPage.infoMessage).toHaveText(/Invalid user or password/);
});

test("Test 3 - issues sorting", async ({ page }) => {
  const homePage = new HomePage(page);
  const issuesPage = new IssuesPage(page);

  await homePage.navigateToIssuesPage();
  await expect(page).toHaveURL(
    "https://www.redmine.org/projects/redmine/issues"
  );
  await expect(issuesPage.recordId).toHaveCount(25);
  await issuesPage.selectFifty();
  await expect(issuesPage.recordId).toHaveCount(50);
  await issuesPage.selectHundred();
  await expect(issuesPage.recordId).toHaveCount(100);
});

test("Test 4 - issues filtering", async ({ page }) => {
  const homePage = new HomePage(page);
  const issuesPage = new IssuesPage(page);

  await homePage.navigateToIssuesPage();
  await expect(page).toHaveURL(
    "https://www.redmine.org/projects/redmine/issues"
  );
  await issuesPage.addFilter("subject");
  await issuesPage.fillFilter("customized");
  await issuesPage.apply();
  const records = await issuesPage.recordsSubject.all();
  for (const record of records) {
    await expect(record).toHaveText(/customized/i);
  }
});

test("Test 5 - documentation", async ({ page }) => {
  const homePage = new HomePage(page);
  const documentationPage = new DocumentationPage(page);

  await homePage.navigateToDocumentationPage();
  await expect(page).toHaveURL("https://www.redmine.org/#Documentation");
  await expect(documentationPage.documentationPageHeading).toBeVisible();
  await documentationPage.navigateToDeveloperGuide();
  await expect(documentationPage.developerGuideHeading).toBeVisible();
});
