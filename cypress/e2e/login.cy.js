//test_case ID-TC_13
describe('ავტორიზაცია რეგისტრირებულ მომხმარებელზე', () => {
  it('უნდა დააათორიზოს მომხმარებელი რეგისტრაციის მერე', () => {
    cy.fixture('newUser').then((user) => {
      cy.visit('https://zootopia.ge/ka');
      cy.contains('ავტორიზაცია').click({ force: true });

      // დაელოდე ფორმის გამოჩენას პოპაპში
      cy.get('div.pop-box.avtorization.active form.input-shablon').should('be.visible');

      // შეავსე ფორმა
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);

      // დააჭირე ავტორიზაციის ღილაკს პოპაპში
      cy.get('div.pop-box.avtorization.active form.input-shablon button.form-button[type="submit"]').click({ force: true });

      // დაველოდოთ, რომ გამოჩნდეს სახელი გვერდზე
      cy.contains(user.first_name, { timeout: 10000 }).should('exist');
    });
  });
});



