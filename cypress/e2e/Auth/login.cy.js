describe('Login test', () => {
  it('Login válido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-input').should('be.visible')
  })

   it('Login inválido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Teste123')
    cy.get('[name="password"]').type('Teste123')
    cy.get('.oxd-button').click()
  })

})