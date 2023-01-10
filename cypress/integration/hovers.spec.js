it('deve exibir o nome da tecnologia ao passar o mouse', function(){
  cy.visit('/hovers')

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

  techs.forEach(function(tech){
    cy.get(tech.img)
    .realHover('mouse')

  cy.get(tech.tag)
    .should('be.visible')
    .should('have.text', tech.name)
  })
})

