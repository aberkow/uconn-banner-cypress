const config = require('../config')

describe('accessibility check', () => {
  beforeEach(() => {
    cy.visit(`${config.url}:${config.port}`)
  })
  it('passes best practices and WCAG 2.1', () => {
    cy.injectAxe()
    cy.checkA11y(
      config.bannerSelector, 
      {
        type: 'tag',
        runOnly: [
          'wcag2a', 
          'wcag2aa', 
          'wcag21aa', 
          'best-practice'
        ]
      })      
  })

  it('have no visible text, but have visible icons', () => {
    cy.get(`${config.bannerSelector .btn}`)
      .each(el => {
        cy.get(el)
          .within(() => {
            cy.get('span')
              .should('have.attr', 'class', 'no-css')
          })
      })
  })


})