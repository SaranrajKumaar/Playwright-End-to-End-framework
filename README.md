# 🚀 Playwright End-to-End Automation Framework

A scalable and maintainable **Playwright automation framework** designed for **UI & API testing**, following best practices like **Page Object Model (POM)**, reusable utilities, external test data management, retries, parallel execution, tagging, grep filtering, and CI/CD integration.

---

## 📌 Overview

This framework demonstrates:

- ✅ UI Automation Testing  
- ✅ API Testing & Utilities  
- ✅ Data-Driven Testing  
- ✅ Parallel & Serial Execution  
- ✅ Retry Mechanism  
- ✅ Video & Screenshot Capture  
- ✅ Test Tagging & Filtering  
- ✅ Grep-based Test Execution  
- ✅ Allure Reporting  
- ✅ Jenkins CI/CD Integration  

---

## ✨ Features Implemented

✔ Page Object Model (POM)  
✔ API utilities for test data setup & cleanup  
✔ External test data (Fixtures / JSON / Excel)  
✔ Parameterized tests  
✔ Retry for flaky tests  
✔ Parallel & Serial execution modes  
✔ Test annotations (`skip`, `only`)  
✔ Tagged test execution  
✔ Grep / pattern-based filtering  
✔ Video & screenshot recording  
✔ Allure HTML reporting  
✔ Custom NPM scripts  
✔ Jenkins integration  

---

## 🧱 Framework Architecture
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


---

## ⚙️ Tech Stack

- Playwright  
- JavaScript / Node.js  
- Allure Reports  
- Jenkins (CI/CD)  

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/SaranrajKumaar/Playwright-End-to-End-framework.git
cd Playwright-End-to-End-framework

2️⃣ Install Dependencies
**npm install**
3️⃣ Run Tests

Run all tests:

**npx playwright test**

Run headed mode:

**npx playwright test --headed**
🏷 Test Tagging

Example tagged test:

**test('Login test @smoke', async ({ page }) => {**
  // test steps
});

Multiple tags:

test('Checkout flow @regression @e2e', async ({ page }) => {
});
**🔍 Grep / Tag-Based Execution**

Run only smoke tests:

**npx playwright test --grep @smoke**

Run regression tests:

**npx playwright test --grep @regression**

Run tests matching pattern:

npx playwright test --grep "Login"

Invert grep (exclude tests):

npx playwright test --grep-invert @wip
🧪 Execution Modes

Run tests in parallel:

npx playwright test --workers=4

Run tests serially:

test.describe.configure({ mode: 'serial' });
🔁 Retry Mechanism

Configured in:

playwright.config.js

Example:

retries: 1
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

Supports:

✔ API test execution
✔ Data setup via API
✔ Cleanup via API

Location:

tests/playwrightsBasics/APITesting/

Run only API tests:

npx playwright test --grep @api
📦 Custom NPM Scripts

Example:

npm run test
npm run test:headed
npm run test:smoke
npm run test:regression
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

Tag-based execution

Grep filtering

Retry strategies

Parallel execution

CI/CD integration

Reporting & debugging

🤝 Contribution

Feel free to fork and enhance 🚀

👨‍💻 Author

Saranraj Kumar
QA Automation Engineer
Playwright | Selenium | Cypress
