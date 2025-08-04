// test_case ID-TC_18
describe('სწორი ძიების შედეგები პროდუქტის სახელით', () => {
  it('ძიების ველში "dog" უნდა აჩვენოს შესაბამისი პროდუქტები', () => {
    cy.visit('https://zootopia.ge/ka', { timeout: 120000 });

    // STEP 1 — მოძებნე პირველი input[name="keyword"]
    cy.get('input[name="keyword"]').first().type('dog', { force: true });

    // STEP 2 — დააჭირე ძებნის ღილაკს
    cy.get('button[type="submit"]').first().click({ force: true });

    // STEP 3 — გადაამოწმე რომ სიტყვა "dog" გამოჩნდა პროდუქტების სახელში
    cy.contains(/dog/i, { timeout: 10000 }).should('exist');
  });
});
