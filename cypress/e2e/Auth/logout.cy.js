describe('Logout test', () => {
  it('Logout com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get('.oxd-userdropdown').should('be.visible')
    cy.wait(1000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    cy.get('[name="username"]').should('be.visible')
  })
})