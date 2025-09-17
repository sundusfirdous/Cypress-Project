const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    chromeWebSecurity: true,
    defaultCommandTimeout: 4000,
    downloadsFolder: "cypress/downloads",
    env: {},
    excludeSpecPattern: "*.hot-update.js",
    execTimeout: 60000,
    fixturesFolder: "cypress/fixtures",
    includeShadowDom: false,
    numTestsKeptInMemory: 50,
    pageLoadTimeout: 60000,
    reporter: "spec",
    requestTimeout: 5000,
    responseTimeout: 30000,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    scrollBehavior: "top",
    slowTestThreshold: 10000,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    taskTimeout: 60000,
    testIsolation: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoCompression: false,
    videosFolder: "cypress/videos",
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: true,

    // ✅ setupNodeEvents is ONLY for event listeners & plugins
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
  },
});
