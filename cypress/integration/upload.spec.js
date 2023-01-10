it('deve fazer o upload da foto', function(){
  cy.visit('/upload')

  const imageFile = 'cypress/fixtures/vitao.jpg'

  cy.get('input[name=file]').selectFile(imageFile, {force: true})

  cy.get('input[value=Upload]').click()

  cy.get('img[src="/uploads/vitao.jpg"', {timeout: 7000}).should('be.visible')
})