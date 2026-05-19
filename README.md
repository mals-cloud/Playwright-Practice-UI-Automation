# 🎭 Playwright TypeScript Test Automation Framework

A robust end-to-end test automation framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern. Integrated with **Allure** for rich test reporting.

---

## 📁 Project Structure

```
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   ├── CheckOutPageStepOne.ts
│   ├── CheckOutPageStepTwo.ts
│   └── ThankYouPage.ts
├── tests/
│    └── productOrderWorkflow.spec.ts
├── allure-results/
├── allure-report/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Playwright](https://playwright.dev/) | Latest | Browser automation |
| [TypeScript](https://www.typescriptlang.org/) | Latest | Type-safe scripting |
| [Allure](https://allurereport.org/) | 2.41.0 | Test reporting |
| [Node.js](https://nodejs.org/) | 18+ | Runtime environment |

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/)
- [Allure Commandline](https://allurereport.org/docs/install/)

```bash
# Install Allure globally
npm install -g allure-commandline

# Verify Allure installation
allure --version
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mals-cloud/playwright-practice.git
cd playwright-practice
```

## ▶️ Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/productOrderWorkflow.spec.ts
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Allure Reporting

### Generate and open report

```bash
# Step 1 - Clean old results
Remove-Item -Recurse -Force ./allure-results   # Windows (PowerShell)
rm -rf ./allure-results                         # Mac/Linux

# Step 2 - Run tests
npx playwright test

# Step 3 - Generate report
allure generate ./allure-results -o ./allure-report --clean

# Step 4 - Open report
allure open ./allure-report
```

### Or use one command
```bash
allure serve ./allure-results
```

---

## 🧩 Page Object Model

This framework follows the **Page Object Model (POM)** pattern. Each page has its own class with locators and actions defined.

```typescript
// Example: LoginPage.ts
import { Page } from '@playwright/test'

export class LoginPage {

    constructor(private page: Page) {}

    private userNameField = this.page.locator('#user-name')
    private passwordField = this.page.locator('#password')
    private submitButton = this.page.locator('input[type="submit"]')

    async enterUserName(username: string) {
        await this.userNameField.fill(username)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async clickOnSubmitButton() {
        await this.submitButton.click()
    }
}
```

---

## 🧪 Test Scenarios

| Test | Description | Status |
|---|---|---|
| Product Order Workflow | End-to-end order flow from login to confirmation | ✅ |

---

## 📝 Playwright Config

```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    reporter: [
        ['line'],
        ['allure-playwright']
    ],
    use: {
        baseURL: 'https://www.saucedemo.com/',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
})
```

---

