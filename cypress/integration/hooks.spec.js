describe('Suite de testes', function(){

  before(function(){
    cy.log('Antes de todos los testitos')
  })

  beforeEach(function(){
    cy.log('estoy aqui antes de tudito manito')
  })

  it('teste 1', function(){
    cy.log('testando o teste 1')
  })
  
  it('teste 2', function(){
    cy.log('testando o teste 2')
  })
  
  it('teste 3', function(){
    cy.log('testando o teste 3')
  })

  after(function(){
    cy.log('mim roda siempre depois de todos los testidos')
  })

  afterEach(function(){
    cy.log('mim rodar depois de cada los testito')
  })
})



