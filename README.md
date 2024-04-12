# OpenAI GPT Integration with Cypress Plugin

This module provides a simple and easy-to-use integration between OpenAI's Generative Pretrained Transformer (GPT) and Cypress.

## Description

The main functionality is centered around leveraging OpenAI's GPT models to provide insights into automated test scenarios and performance analysis through custom commands in Cypress.

## Installation

Before this module is imported and used, make sure to install the necessary dependencies as follows:


## Environment Variables

For the integration with OpenAI, you need to set an environment variable:

- `OPENAI_API_KEY`: The API key for your OpenAI account

This can be done in a `.env` file in your project root.

## Usage

### Analyzing Test Scenarios

The function `addCustomCommands` defines a custom Cypress command `analyzeTest`, which takes a test description as an argument. This function uses the OpenAI API to get insights about the test scenario:

cy.analyzeTest("My test description");


on('task', {
analyzeTestPerformance(data) {
return getGPTInsight(`Analyze performance for the following data: ${data}`).then(insight => {
console.log(`Performance analysis result: ${insight}`);
return insight;
});
}
});