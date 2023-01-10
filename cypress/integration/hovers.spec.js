it('deve exibir o nome da tecnologia ao passar o mouse', function () {
  const techs = [
    {
      img: 'img[src*=python]',
      tag: '.tag-python',
      name: 'Python'
    },
    {
      img: 'img[src*=golang]',
      tag: '.tag-golang',
      name: 'Golang'
    },
    {
      img: 'img[src*=nodejs]',
      tag: '.tag-nodejs',
      name: 'Node.js'
    },
    {
      img: 'img[src*=netcore]',
      tag: '.tag-netcore',
      name: '.NETCore'
    }
  ]

  cy.visit('/hovers')

  techs.forEach(function (tech) {
    cy.get(tech.img, { timeout: 6000 })
      .realHover('mouse')

    cy.get(tech.tag, { timeout: 6000 })
      .should('be.visible')
      .should('have.text', tech.name)
  })
})
