//test_case ID-TC_13
// test_case ID-TC_13

describe('ავტორიზაცია რეგისტრირებულ მომხმარებელზე', () => {
  it('უნდა დააათორიზოს მომხმარებელი რეგისტრაციის მერე', () => {
    cy.fixture('newUser').then((user) => {
      cy.visit('https://zootopia.ge/ka', {
        timeout: 120000,
        failOnStatusCode: false,
        headers: {
          "Accept-Encoding": "gzip, deflate"
        }
      });

      // გახსენი ავტორიზაციის პოპაპი
      cy.contains('ავტორიზაცია').click({ force: true });

      // დაელოდე პოპაპის გამოჩენას
      cy.get('div.pop-box.avtorization.active form.input-shablon').should('be.visible');

      // შეიყვანე ელფოსტა და პაროლი
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);

      // დააჭირე ავტორიზაციის ღილაკს
      cy.get('div.pop-box.avtorization.active form.input-shablon button.form-button[type="submit"]')
        .first()
        .click({ force: true });

      // დაელოდე redirect-ს (რადგან წარმატების მესიჯი არ გვაქვს)
      cy.url().should('not.include', '/login');

      // დაელოდე რომ მომხმარებლის სახელი გამოჩნდეს
      cy.contains(user.first_name, { timeout: 10000 }).should('exist');
    });
  });
});


