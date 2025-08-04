// test_case ID-TC_13

describe('უნდა დააათორიზოს უკვე არსებული მომხმარებელი', () => {
  it('წარმატებული ლოგინი static მომხმარებლით', () => {
    cy.fixture('staticUser').then((user) => {
      cy.visit('https://zootopia.ge/ka');

      // გახსენი ავტორიზაციის პოპაპი
      cy.contains('ავტორიზაცია').click({ force: true });

      // დაელოდე ფორმის გამოჩენას
      cy.get('form.input-shablon').should('be.visible');

      // შეავსე ველები
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);

      // ავტორიზაცია (არ შეცვალო selector)
      cy.get('div.pop-box.avtorization.active form.input-shablon button.form-button[type="submit"]').eq(0).click({ force: true });

      // ამით სრულდება ტესტი
    });
  });
});
