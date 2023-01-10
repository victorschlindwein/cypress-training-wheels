const niceIFrame = function(){
  return cy
    .get('#weareqaninja')
    .its('0.contentDocument.body') //pegando todo o body da pagina do instagram que tem o id #weareqaninja na pagina
    .should('not.be.empty')
    .then(cy.wrap) //função que aguarda uma promessa (a requisição de carregamento da página do instagram)

    //obtem o conteudo da pagina do instagram pra disponibilizar pro teste abaixo
}

const badIFrame = function(){
  return cy  
    .get('iframe[src*=instagram]') //expressão regular pra pegar o id com o link do insta
    .its('0.contentDocument.body') // o its puxa as propriedades do elemento pra dentro dele, nesse caso o body
    .should('not.be.empty') //verificação tosca pra garantir que ta pegando
    .then(cy.wrap) //depois de trazer os elementos pra dentro do its o then consegue envelopar pra reutilizarmos
}

it('deve validar o total de seguimores no iframe ruim', function(){
  cy.visit('/bad_iframe')

  badIFrame()
    .contains('.FollowerCountText', '7.209 seguidores')
    .should('be.visible')
})

it('deve validar o total de seguimores no iframe bom', function(){
  cy.visit('/nice_iframe')

  niceIFrame()
    .contains('.FollowerCountText', '7.209 seguidores')
    .should('be.visible')
})