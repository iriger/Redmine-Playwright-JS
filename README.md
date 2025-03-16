# Redmine Test Automation
This repository contains automated tests for the Redmine project management application using Playwright. 
## Summary
This project implements a Page Object Model (POM) pattern for testing Redmine's key functionality. The implementation supports cross-browser testing and includes reporting capabilities.
## Features
- Page Object Model design pattern
- Cross-browser testing configuration
- HTML and list reporting
- Before-each hooks 
- Configurable base URL for environment switching
- JavaScript implementation
## Requirements
- Node.js
- npm
## Installation
1.	Clone this repository.
2.	Install dependencies: (```npm install```)
3.	Install Playwright:  (```npm init playwright@latest```)
## To Run Tests:
* Run all tests:
```npx playwright test``` 
* Run tests in UI mode
```npx playwright test --ui```
* Run tests in headed mode
```npx playwright test --headed ```
* Run tests on a specific browser
```npx playwright test --project=chromium```
## Generating Reports
After running tests, reports are automatically generated in the following formats:
1.	HTML Report (default location: playwright-report/) ```npx playwright show-report```
2.	List Report (displayed in the console)
### Custom Report Generation
To generate a report with specific options:
```npx playwright test --reporter=html```
### Available reporters:
- list - Simple list in the console
- html - Interactive HTML report
