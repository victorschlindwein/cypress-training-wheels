it('deve exibir 7 séries no total', function () {
  cy.visit('/tables')

  cy.get('table tbody tr')
    .then(function (series) {
      expect(series).to.have.length(7)
    })
})

it('deve exibir a série loki', function () {
  cy.visit('/tables')

  cy.contains('table tbody tr', 'Loki')
    .then(function (item) {
      expect(item).to.contain('Loki')
      expect(item).to.contain('Marvel')
      expect(item).to.contain('Disney+')
      expect(item).to.contain('2021')
    })
})

it('deve remover a serie R6', function () {
  cy.visit('/tables')

  cy.contains('table tbody tr', 'Round 6')
    .then(function (item) {
      item.find('.delete').trigger('click')
    })
    .should('not.exist')

  cy.get('table tbody tr')
    .then(function (series) {
      expect(series).to.have.length(6)
    })
})
