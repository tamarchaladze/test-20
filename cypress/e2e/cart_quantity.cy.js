// test_case ID-TC_14

describe('რაოდენობის გაზრდა კალათაში', () => {
  it('უნდა გაზარდოს რაოდენობა 1 ერთეულით', () => {
    cy.fixture('staticUser').then((user) => {
      // STEP 1: ლოგინი
      cy.visit('https://zootopia.ge/ka');
      cy.contains('ავტორიზაცია').click({ force: true });
      cy.get('form.input-shablon').should('be.visible');
      cy.get('input[name="login_email"]').type(user.email);
      cy.get('input[name="login_password"]').type(user.password);
      cy.contains('button.form-button', 'ავტორიზაცია').click({ force: true });
      cy.url().should('not.include', '/login');

      // STEP 2: გადადი პროდუქტის გვერდზე (დაგჭირდეს სწორი ბმული ან პროდუქტის კლიკი)
      cy.contains('SANICAT SUPERPLUS TR V/N 20L').click({ force: true });

      // STEP 3: დაამატე კალათაში
      cy.contains('კალათში დამატება').click({ force: true });

      // STEP 4: გადადი კალათის გვერდზე
      cy.visit('https://zootopia.ge/ka/cart');

      // STEP 5: რაოდენობის გაზრდა და შემოწმება
      cy.get('input[readonly][type="text"]').first().invoke('val').then((initialQty) => {
        const qtyBefore = parseInt(initialQty);
        cy.get('button.plus.change-qty-by-one').first().click({ force: true });
        cy.wait(1000);
        cy.get('input[readonly][type="text"]').first().invoke('val').should((newQty) => {
          expect(parseInt(newQty)).to.eq(qtyBefore + 1);
        });
      });
    });
  });
});

