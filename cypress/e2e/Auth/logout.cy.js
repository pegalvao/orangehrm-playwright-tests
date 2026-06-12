describe('Logout test', () => {
    beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })

  it('Logout com sucesso', () => {
      cy.fixture('users').then((users) => {
      cy.get('[name="username"]').type(users.valid.username)
      cy.get('[name="password"]').type(users.valid.password)
      cy.get('.oxd-button').click()

      cy.url().should('include', '/dashboard')
      cy.get('.oxd-userdropdown-tab').click()
      cy.get('.oxd-userdropdown').should('be.visible')
      cy.wait(1000)
      cy.get('.oxd-dropdown-menu .oxd-userdropdown-link').should('be.visible').and('contain.text', 'Logout').click()
      cy.get('[name="username"]').should('be.visible')
    })
   
  })
})