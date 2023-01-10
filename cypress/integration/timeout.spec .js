it('exemplo de timeout', function(){
  cy.visit('/timeout')

  cy.contains('button', 'Habilita').click()

  cy.get('#firstname')
    .should('be.visible')
    .type('Vitao', {timeout: 7000})
})