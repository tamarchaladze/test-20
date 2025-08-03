//test_case ID-TC_01 

describe('რეგისტრაციის ტესტი', () => {
  it('უნდა დაარეგისტრიროს ახალი უნიკალური მომხმარებელი', () => {
    const timestamp = Date.now();
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    const user = {
      first_name: 'თამარი',
      email: `user_${timestamp}@example.com`,
      personal_id: `35001${randomDigits}`,
      phone: '555123456',
      password: 'TestPassword123'
    };

    // შენახვა, რომ ლოგინის ტესტში წაგიყვანოს
    Cypress.env('user', user);

    cy.visit('https://zootopia.ge/ka/register');

    cy.get('input[name="first_name"]').clear().type(user.first_name);
    cy.get('input[name="reg_email"]').clear().type(user.email);
    cy.get('input[name="personal_id"]').clear().type(user.personal_id);
    cy.get('input[name="phone"]').clear().type(user.phone);
    cy.get('input[name="reg_password"]').clear().type(user.password);
    cy.get('input[name="reg_password_confirmation"]').clear().type(user.password);

    cy.get('input[type="checkbox"]').check({ force: true });
    cy.contains('რეგისტრაცია').click({ force: true });
    cy.writeFile('cypress/fixtures/newUser.json', user);


  });
});




//test_case ID-TC_06 
describe('რეგისტრაცია ცარიელი ველებით', () => {
  it('ID-TC_06 - არ უნდა დაარეგისტრიროს როცა ყველა ველი ცარიელია', () => {
    cy.visit('https://zootopia.ge/ka/register');
    cy.contains('რეგისტრაცია').click({ force: true });
    cy.url({ timeout: 10000 }).should('include', '/register');
  });
});
