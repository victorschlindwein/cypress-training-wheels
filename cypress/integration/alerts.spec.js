it('deve exibir uma mensagem de alerta', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Alerta').click()

  cy.on('window:alert', function (result) {
    expect(result).to.equal('Isto é uma mensagem de alerta')
  })
})

it('deve confirmar a solicitação', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()

  cy.on('window:confirm', () => true)

  cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('deve cancelar a solicitação', function () {
  cy.visit('/javascript_alerts')

  cy.contains('button', 'Confirma').click()

  cy.on('window:confirm', () => false)

  cy.get('#result').should('have.text', 'Mensagem não confirmada')
})

it('deve exibir mensagem de boas vindas com o meu nome', function () {
  cy.visit('/javascript_alerts')

  cy.window().then(function ($win) { //pega o contexto da janela 'pop-up' que abre
    cy.stub($win, 'prompt').returns('Vitao') //substitui a janela pelo stub ao acionar o prompt e devolve o valor
    cy.contains('button', 'Prompt').click() //tudo isso ocorre ao ser clicado nesse botão
  })

  cy.get('#result').should('have.text', 'Olá, Vitao') //valor retornado através do stub
})

