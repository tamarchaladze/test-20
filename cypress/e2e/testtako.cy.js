// cypress/e2e/accountTests.cy.js

/// <reference types="cypress" />

describe('Simple Tests', () => {

  const userInfo = {
    mail: 'cypress.user2025@mail.com',
    pass: 'TestUser@2025',
    newPass: 'NewPass456!',
    firstName: 'Tako',
    lastName: 'Chaladze',
    telephone: '599123456',
    address1: 'Rustaveli Ave 10',
    city: 'Tbilisi',
    zip: '0101',
    state: 'Tbilisi',
    country: 'Georgia'
  }

  beforeEach(() => {
    cy.authUser(userInfo.mail, userInfo.pass)
  })

  it('Updates user personal information', () => {
    cy.visit('/index.php?rt=account/account')
    cy.contains('Edit account details').click()

    cy.get('input[name="firstname"]').clear().type('Tamar')
    cy.get('input[name="lastname"]').clear().type('Updated')
    cy.get('input[name="telephone"]').clear().type('555000111')
    cy.get('button[title="Continue"]').click()

    cy.contains('Success: Your account has been successfully updated.').should('be.visible')
  })

  it('Changes password and reverts back', () => {
    cy.visit('/index.php?rt=account/account')
    cy.contains('Change password').click()

    cy.get('input[name="password"]').type(userInfo.pass)
    cy.get('input[name="new"]').type(userInfo.newPass)
    cy.get('input[name="confirm"]').type(userInfo.newPass)
    cy.get('button[title="Continue"]').click()

    cy.contains('Success: Your password has been successfully updated.').should('be.visible')

    // Revert to original password
    cy.visit('/index.php?rt=account/login')
    cy.authUser(userInfo.mail, userInfo.newPass)
    cy.visit('/index.php?rt=account/account')
    cy.contains('Change password').click()
    cy.get('input[name="password"]').type(userInfo.newPass)
    cy.get('input[name="new"]').type(userInfo.pass)
    cy.get('input[name="confirm"]').type(userInfo.pass)
    cy.get('button[title="Continue"]').click()
  })


})
