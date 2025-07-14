describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('Shows two default todos', () => {
    cy.get('.todo-list li').should('have.length', 2)
  })
})