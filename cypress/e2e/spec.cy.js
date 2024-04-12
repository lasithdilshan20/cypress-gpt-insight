describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io');
    cy.task('getGPTInsight', { prompt: 'Testing login with valid credentials' }).then(insight => {
      console.log(`Insight for 'Testing login with valid credentials': ${insight}`);
    });
  });


})