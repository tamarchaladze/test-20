// test_case ID-TC_15

// Preconditions: ავტორიზებული მომხმარებელი
// Test Data: პროდუქტი: SANICAT SUPERPLUS TR V/N 20L

describe('ID-TC_15 – კალათიდან პროდუქტის წაშლა', () => {
  it('უნდა წაიშალოს პროდუქტი კალათიდან და გამოჩნდეს ცარიელი კალათის მესიჯი', () => {
    cy.fixture('staticUser').then((user) => {
      // STEP 1 – ლოგინი
      cy.visit('https://zootopia.ge/ka');
      cy.contains('ავტორიზაცია').click({ force: true });
      cy.get('form.input-shablon').should('be.visible');
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);
      cy.contains('button.form-button', 'ავტორიზაცია').click({ force: true });

      // STEP 2 – გადადი პროდუქტის გვერდზე
      cy.visit('https://zootopia.ge/ka/product/1286-SANICAT-SUPERPLUS-TR-V-N-20L');

      // STEP 3 – დააწკაპუნე "კალათაში დამატება"
      cy.get('b').contains('კალათში დამატება').click({ force: true });

      // STEP 4 – გადადი კალათის გვერდზე
      cy.visit('https://zootopia.ge/ka/cart');

      // STEP 5 – გადაამოწმე, რომ წაშლის ღილაკი არსებობს
      cy.get('figure.clear a[href*="remove_from_cart"]').should('exist');

      // STEP 6 – დააწკაპუნე წაშლის ღილაკს
      cy.get('figure.clear a[href*="remove_from_cart"]').click({ force: true });

      // STEP 7 – გადაამოწმე, რომ კალათა ცარიელია
      cy.contains('კალათა ცარიელია').should('be.visible');
    });
  });
});
