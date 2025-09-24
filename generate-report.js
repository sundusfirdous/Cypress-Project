const reporter = require("multiple-cucumber-html-reporter");

reporter.generate({
  jsonDir: "cypress/cucumber-json", // folder containing generated JSON
  reportPath: "cypress/cucumber-html-report", 
  metadata: {
    browser: {
      name: "chrome",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Project Info",
    data: [
      { label: "Project", value: "Orange HRM" },
      { label: "Release", value: "1.0.0" },
      { label: "Sprint", value: "Sprint 1" },
    ],
  },
});
