describe('Login test', () => {
  it('Login válido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin'),
    cy.get('[name="password"]').type('admin123')
  })
})