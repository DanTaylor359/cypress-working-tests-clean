const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false
  },

  e2e: {
    setupNodeEvents(on, config) {
      // no special node events needed for Mochawesome
      return config;
    },
  },
});
