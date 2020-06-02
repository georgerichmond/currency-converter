/// <reference types="cypress" />

context("Currency", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Select a currency from the list', () => {
    cy.findByLabelText('Currency A').select('USD')
  })
});
