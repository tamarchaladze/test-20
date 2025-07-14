describe('automationexercise registration', () => {
  it('registration with correct data', () => {
    cy.visit('https://www.automationexercise.com/login')
    cy.get('.signup-form > h2').should("have.text","New User Signup!")
    cy.get('[data-qa="signup-name"]').type("testUser")
    cy.get('[data-qa="signup-email"]').type("tako123456@gmail.com")
    cy.get('[data-qa="signup-button"]').click()
    cy.get('#id_gender1').click()
    cy.get('[data-qa="days"]').select(6)
    cy.get('[data-qa="months"]').select("May")
    cy.get('[data-qa="years"]').select(1)
    cy.contains("name")

  })
})