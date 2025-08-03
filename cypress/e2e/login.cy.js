// cypress/e2e/login.cy.js

describe('ავტორიზაცია რეგისტრირებულ მომხმარებელზე', () => {
  it('უნდა დააათორიზოს მომხმარებელი რეგისტრაციის მერე', () => {
    cy.fixture('newUser').then((user) => {
      cy.visit('https://zootopia.ge/ka');
      cy.contains('ავტორიზაცია').click({ force: true });

      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);
      cy.get('button[type="submit"]').click();

      // ავტორიზაციის წარმატების შემოწმება: მომხმარებლის სახელი უნდა გამოჩნდეს
      cy.contains(user.first_name, { timeout: 10000 }).should('exist');
    });
  });
});


