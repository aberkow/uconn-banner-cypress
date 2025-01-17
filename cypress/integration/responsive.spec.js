const config  = require('../config')

describe('responsive design tests', () => {

  before(() => {
    cy.exec('npm run clean:screenshots')
  })

  beforeEach(() => cy.visit(`${config.url}:${config.port}`))

  afterEach(() => {
    // take a screenshot of the responsive design with a little context.
    cy.get('#uconn-banner')
      .screenshot()
  })

  context('laptop resolution', () => {
    beforeEach(() => cy.viewport('macbook-11'))

    it('desktop design & University of Connecticut is visible', () => {
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

    it('tablet design & University of Connecticut is not visible', () => {
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

    it('mobile design & University of Connecticut is not visible', () => {
      cy.get(config.bannerSelector)
        .within(() => {
          cy.get('#university-of-connecticut')
            .contains('University of Connecticut')
            .should('have.css', 'display', 'none')
        })
    })
  })
})