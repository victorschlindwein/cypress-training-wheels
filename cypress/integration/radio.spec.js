it('deve marcar os top 5 filmes da marvel', function () {
  cy.visit('/radios')

  cy.get('input[value=thor3]')
    .click()
    .should('be.checked')
})