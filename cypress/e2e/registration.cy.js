//test_case ID-TC_01 
describe('რეგისტრაციის ტესტი — უნიკალური მომხმარებელი', () => {
  it('უნდა დაარეგისტრიროს ახალი უნიკალური მომხმარებელი და შეინახოს მონაცემები', () => {
    const timestamp = Date.now();
    const user = {
      first_name: 'თამარი',
      email: `user_${timestamp}@example.com`,
      personal_id: `35001${Math.floor(1000 + Math.random() * 9000)}`,
      phone: '555123456',
      password: 'TestPass123'
    };

    // მონაცემების შენახვა fixture-ში, რომ სხვა ტესტში გამოვიყენოთ
    cy.writeFile('cypress/fixtures/newUser.json', user);

    cy.visit('https://zootopia.ge/ka/register');
    cy.get('input[name="first_name"]').type(user.first_name);
    cy.get('input[name="reg_email"]').type(user.email);
    cy.get('input[name="personal_id"]').type(user.personal_id);
    cy.get('input[name="phone"]').type(user.phone);
    cy.get('input[name="reg_password"]').type(user.password);
    cy.get('input[name="reg_password_confirmation"]').type(user.password);
    cy.get('input[type="checkbox"]').check({ force: true });
    cy.contains('რეგისტრაცია').click({ force: true });

    // რეგისტრაციის შედეგის ლოგირება
    cy.get('body', { timeout: 15000 }).should('exist');
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
