import { strings } from '../../src/utils/strings'

describe('Checa informações iniciais da página inicial', () => {
  it('Checar pela quantidade de resultados iniciais', () => {
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(20))
  })
  it('Busca por herói especifico', () => {
    cy.getTestId('input-busca-personagens').type('Hulk').type('{enter}')
    cy.getTestId('card-personagem').contains('Hulk')
  })
  it('Busca por herói que não existe', () => {
    cy.getTestId('input-busca-personagens').type('zzzzzzzzzzzzzz').type('{enter}')
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(0))
  })
})

describe('Checa sistema de favoritos', () => {
  it('Checa se favoritos iniciais estão vazios', () => {
    cy.getTestId('switch-favoritos').click()
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(0))
  })
  it('Adiciona herói aos favoritos', () => {
    cy.getTestId('card-personagem').first().find('[data-testid="favorito-button"]').click()
  })
  it('Checa se herói está nos favoritos', () => {
    cy.getTestId('switch-favoritos').click()
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(1))
  })
  it('Remove herói dos favoritos', () => {
    cy.getTestId('card-personagem').first().find('[data-testid="favorito-button"]').click()
  })
  it('Checa se herói foi removido dos favoritos', () => {
    cy.getTestId('switch-favoritos').click()
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(0))
  })
  it('Tenta adicionar 6 personagens aos favoritos mas só mantém 5', () => {
    for (let i = 0; i < 6; i++) {
      cy.getTestId('card-personagem').eq(i).find('[data-testid="favorito-button"]').click()
    }
    cy.getTestId('switch-favoritos').click()
    cy.getTestId('herois-encontrados').contains(strings.encontradosXHerois(5))
  })
})
