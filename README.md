# Cypress + Cucumber BDD Automation Project (OrangeHRM)

## 📌 Project Overview
This project demonstrates an **end-to-end test automation framework** built with **Cypress** and **Cucumber BDD** in **JavaScript**, designed for the **OrangeHRM** application.  
It follows the **Page Object Model (POM)** pattern for maintainability, scalability, and reusability.

---

## 🔹 High-Level Design
- **BDD Approach**: Test scenarios are written in **Gherkin syntax** (`.feature` files) for readability and collaboration.  
- **Cypress Framework**: Executes automated browser tests with fast execution and built-in debugging.  
- **Page Object Model (POM)**: Separates locators and methods into page classes for easier maintenance.  
- **Reusable Components**: Fixtures for test data, custom commands for utilities, and hooks for setup/teardown.  
- **Reporting**: Supports Cypress reporters and Cucumber JSON reports.  

---

## 🔹 Low-Level Design (Folder Structure)

Cypress-BDD-OrangeHRM/
├── cypress/
│ ├── e2e/
│ │ ├── features/
│ │ │ └── login.feature # Gherkin scenarios
│ │ ├── step_definitions/
│ │ │ └── loginSteps.js # Step definitions
│ │ └── specs/
│ │ └── loginSpec.cy.js # (Optional) direct Cypress specs
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ ├── e2e.js # Hooks & global config
│ │ └── pageObjects/
│ │ ├── LoginPage.js # Page Object for Login
│ │ ├── DashboardPage.js # Page Object for Dashboard
│ │ └── ... (other page classes)
│ ├── fixtures/
│ │ └── testData.json # Test data (username, password, etc.)
├── cypress.config.js # Cypress config (baseUrl, timeouts, etc.)
├── package.json # Dependencies & scripts
├── .gitignore
└── README.md

---

## 🔹 Key Components
| Component | Description |
|-----------|-------------|
| **Feature Files** | Human-readable scenarios (Given/When/Then). |
| **Step Definitions** | Glue code mapping feature steps to Cypress functions. |
| **Page Objects** | Encapsulated locators & page-specific methods. |
| **Fixtures** | Stores test data for data-driven testing. |
| **Support & Commands** | Custom commands, reusable hooks, and utilities. |
| **Config** | Centralized settings for Cypress & plugins. |

---

## 🚀 How to Run

1. Clone the repo  
   ```bash


---

## 🔹 Key Components
| Component | Description |
|-----------|-------------|
| **Feature Files** | Human-readable scenarios (Given/When/Then). |
| **Step Definitions** | Glue code mapping feature steps to Cypress functions. |
| **Page Objects** | Encapsulated locators & page-specific methods. |
| **Fixtures** | Stores test data for data-driven testing. |
| **Support & Commands** | Custom commands, reusable hooks, and utilities. |
| **Config** | Centralized settings for Cypress & plugins. |

---

## 🚀 How to Run

1. Clone the repo  
   ```bash
   git clone <your-repo-url>
   cd Cypress-BDD-OrangeHRM
   
2.Install dependencies
```bash
   npm install

3.Run Cypress in interactive mode
```bash
   npx cypress open
   
4. Run tests in headless mode
```bash
   npx cypress run



   git clone <your-repo-url>
   cd Cypress-BDD-OrangeHRM
