describe('Login test', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login')
  })

  it('Login válido', () => {
    cy.fixture('users').then((users) => {
      cy.get('[name="username"]').type(users.valid.username)
      cy.get('[name="password"]').type(users.valid.password)
      cy.get('.oxd-button').click()

      cy.url().should('include', '/dashboard')
    })
  })

   it('Login inválido', () => {
    cy.fixture('users').then((users) => {
    
      cy.get('[name="username"]').type(users.invalid.username)
      cy.get('[name="password"]').type(users.invalid.password)
      cy.get('.oxd-button').click()

      cy.get('.oxd-alert-content-text')
      .should('be.visible')
      .and('contain.text', 'Invalid credentials')

    })
  })

})