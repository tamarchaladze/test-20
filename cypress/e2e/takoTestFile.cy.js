describe('automationexercise registration', () => {
  it('register with correct data', () => {



  //1. Launch browser
 //2. Navigate to url 'http://automationexercise.com'
  cy.visit('https://www.automationexercise.com/login')
 //3. Verify that home page is visible successfully
 cy.contains('Home').should('be.visible')

 //4. Click on 'Signup / Login' button
  cy.get('[data-qa="signup-button"]').click()
 //5. Verify 'New User Signup!' is visible
 cy.get('.signup-form > h2').should("have.text","New User Signup!")
 //6. Enter name and email address
  cy.get('[data-qa="signup-name"]').type("tako122")
  cy.get('[data-qa="signup-email"]').type("tako122@gmail.com")
 //7. Click 'Signup' button
 cy.get('[data-qa="signup-button"]').click()
 //8. Verify that 'Enter Account Information' is visible
 //cy.get(':nth-child(1) > b').should("have.text"," Enter Account Information")
 
 
  //9. Fill details: Title, Name, Email, Password, Date of birth
  cy.get('.clearfix > :nth-child(1)').click()
  cy.get('[data-qa="name"]').type("tako122")
  cy.get('[data-qa="email"]')
  cy.get('[data-qa="password"]').type("password")

 //10. Select checkbox 'Sign up for our newsletter!'
 cy.get(':nth-child(7) > label')
 cy.get('input[name="newsletter"]').check()

 //11. Select checkbox 'Receive special offers from our partners!'
 cy.get(':nth-child(8) > label')
 cy.get('input[name="optin"]').check()

 //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
 cy.get('[data-qa="first_name"]').type("tako122")
 cy.get('[data-qa="last_name"]').type("chaladze")
 cy.get('[data-qa="company"]').type("tests")
 cy.get('[data-qa="address"]').type("address 1")
 cy.get('[data-qa="address2"]').type("address 12")
 cy.get('[data-qa="country"]').select("United States")
 cy.get('[data-qa="state"]').type("virginia")
 cy.get('[data-qa="city"]').type("washington")
 cy.get('[data-qa="zipcode"]').type("123456")
 cy.get('[data-qa="mobile_number"]').type("12345678")
 //13. Click 'Create Account button'
 cy.get('[data-qa="create-account"]').click()
 
 
 //14. Verify that 'ACCOUNT CREATED!' is visible
 
 //cy.contains('ACCOUNT CREATED!').should('be.visible')
//

 //15. Click 'Continue' button
 //cy.get('[data-qa="continue-button"]').click()

 //16. Verify that 'Logged in as username' is visible
 //17. Click 'Delete Account' button
 //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



 
    //cy.get('#id_gender1').click()
    //cy.get('[data-qa="days"]').select(6)
    //cy.get('[data-qa="months"]').select("May")
    //cy.get('[data-qa="years"]').select(1)

    //cy.contains("Name")




  })
})