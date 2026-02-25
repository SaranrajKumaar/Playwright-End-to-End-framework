🚀 Playwright End-to-End Automation Framework

A scalable and maintainable Playwright automation framework designed for UI & API testing, following best practices like Page Object Model (POM), reusable utilities, external test data management, retries, parallel execution, and CI/CD integration.

📌 Overview

This project demonstrates how to build a robust test automation framework using Playwright that supports:

✅ UI Automation Testing

✅ API Testing & Utilities

✅ Data-Driven Testing

✅ Parallel & Serial Execution

✅ Retry Mechanism

✅ Video & Screenshot Capture

✅ Allure Reporting

✅ Jenkins CI/CD Integration

✨ Features Implemented

✔ Page Object Model (POM)
✔ API utilities for test data setup & cleanup
✔ External test data (fixtures / JSON / Excel)
✔ Parameterized tests
✔ Retry for flaky tests
✔ Parallel & Serial execution modes
✔ Test annotations (skip, only, tagging)
✔ Video & screenshot recording
✔ Allure HTML reporting
✔ Custom NPM scripts
✔ Jenkins integration

🧱 Framework Architecture
├── tests/
│   ├── playwrightsBasics/
│   │   ├── APITesting/
│   │   ├── specialLocator/
│   │   ├── Recall/
│   │   └── TestCases/
│   │       └── UIControl/
│   ├── fixture/
│   └── excel/
│
├── playwright-report/
├── test-results/
├── screenShots/
│
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
📂 Folder Explanation
Folder / File	Purpose
tests/	Contains all UI & API test specs
APITesting/	API test cases & API helpers
UIControl/	UI automation scenarios
fixture/	External test data (JSON etc.)
excel/	Excel-based test data handling
playwright-report/	Playwright HTML reports
test-results/	Videos, screenshots, traces
screenShots/	Stored screenshots
playwright.config.js	Central test configuration
package.json	Custom execution scripts
⚙️ Tech Stack

Playwright

JavaScript / Node.js

Allure Reports

Jenkins (CI/CD)

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/SaranrajKumaar/Playwright-End-to-End-framework.git
cd Playwright-End-to-End-framework
2️⃣ Install Dependencies
npm install
3️⃣ Run Tests

Run all tests:

npx playwright test

Run headed:

npx playwright test --headed

Run specific test:

npx playwright test tests/playwrightsBasics/TestCases/UIControl
🔁 Retry Mechanism

Retries configured in:

playwright.config.js

Helps stabilize flaky tests.

🎥 Screenshots & Video Recording

Automatically captured for:

✔ Failures
✔ Debugging
✔ Reporting

Stored in:

test-results/
📊 Allure Reporting

Generate Allure results:

npx playwright test --reporter=line,allure-playwright

Open report:

allure serve
🌐 API Testing

Framework supports:

✔ API test execution
✔ Data setup via API
✔ Cleanup via API

Location:

tests/playwrightsBasics/APITesting/
🧪 Execution Modes
Mode	Description
Parallel	Faster execution
Serial	Ordered execution
Retries	Handles flaky tests
🏷 Test Annotations & Tagging

Examples:

test.skip()
test.only()
test.describe.configure({ mode: 'serial' })
📦 Custom NPM Scripts

Example:

npm run test
npm run test:headed
npm run test:api
npm run allure:report
🔄 Jenkins CI/CD Integration

✔ Automated execution
✔ Scheduled runs
✔ Continuous validation

🎯 Learning Outcomes

This framework demonstrates:

Playwright architecture design

UI + API automation

Data-driven testing

Retry strategies

Parallel execution

CI/CD integration

Reporting & debugging

🤝 Contribution

Feel free to fork & enhance 🚀

👨‍💻 Author

Saranraj Kumar
QA Automation Engineer
Playwright | Selenium | Cypress
