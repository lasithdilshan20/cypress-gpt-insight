// cypress.config.js simplified version for testing

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Comment out or remove complex configurations temporarily
      require('./cypress/plugins/index')(on, config);
      return config;
    },
    supportFile: './cypress/support/e2e.js',
  },
});
