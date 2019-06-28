const config  = require('../config')

describe('responsive design tests', () => {
  beforeEach(() => cy.visit(`${config.url}:${config.port}`))

  context('laptop resolution', () => {
    beforeEach(() => cy.viewport('macbook-11'))

    it('has a responsive design & University of Connecticut is visible', () => {
      cy.get(config.bannerSelector)
        .within(() => {
          cy.get('#university-of-connecticut')
            .contains('University of Connecticut')
            .should('be.visible')
        })
  
    })
  })

  context('tablet resolution', () => {
    beforeEach(() => cy.viewport('ipad-2'))

    it('has a responsive design & University of Connecticut is not visible', () => {
      cy.get(config.bannerSelector)
        .within(() => {
          cy.get('#university-of-connecticut')
            .contains('University of Connecticut')
            .should('have.css', 'display', 'none')
        })
    })
  })


  context('mobile resolution', () => {
    beforeEach(() => cy.viewport('iphone-5'))

    it('has a responsive design & University of Connecticut is not visible', () => {
      cy.get(config.bannerSelector)
        .within(() => {
          cy.get('#university-of-connecticut')
            .contains('University of Connecticut')
            .should('have.css', 'display', 'none')
        })
    })
  })
})