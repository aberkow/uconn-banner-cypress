const config = require('../config')

describe('branding tests', () => {

  beforeEach(() => cy.visit(`${config.url}:${config.port}`))

  it('has correct text for each element', () => {
    cy.get(config.bannerSelector)
      .within((list) => {
        cy.contains('UConn')
        cy.contains('University of Connecticut')
        cy.contains('Search University of Connecticut')
        cy.contains('A to Z Index')
      })
  })

  it('has correct links for each element', () => {
    cy.get(config.bannerSelector)
      .within(() => {
        cy.get('#home-link')
          .should('have.attr', 'href', 'https://uconn.edu/')
        cy.get('#uconn-search')
          .should('have.attr', 'href', 'https://uconn.edu/search')
        cy.get('#uconn-az')
          .should('have.attr', 'href', 'https://uconn.edu/az')
      })
  })

  it('should use correct colors and typography for each element', () => {
    cy.get(config.bannerSelector)
      .should('have.css', 'background-color', 'rgb(0, 14, 47)')
        .and('have.css', 'color', 'rgb(255, 255, 255)')
      .within(() => {

        cy.get('#wordmark')
          .should('have.css', 'color', 'rgb(255, 255, 255)')
          .and('have.css', 'font-family', 'UConn, Arial, Helvetica, sans-serif')
          .and('have.css', 'font-size', '32px')
          .and('have.css', 'text-transform', 'uppercase')

        cy.get('#university-of-connecticut')
          .should('have.css', 'color', 'rgb(159, 170, 178)')
          .and('have.css', 'font-family', '"Proxima Nova", Arial, Helvetica, sans-serif')
          .and('have.css', 'font-size', '18px')
          .and('have.css', 'font-weight', '700')
          .and('have.css', 'text-transform', 'uppercase')

        cy.get('.btn')
          .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
          .and('have.css', 'border', '0px none rgb(255, 255, 255)')
          .and('have.css', 'color', 'rgb(255, 255, 255)')

      })
  })
})