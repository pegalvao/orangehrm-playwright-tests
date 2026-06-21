describe('Admin test', () => {
    beforeEach(() => {
        cy.visit('/web/index.php/auth/login')
        cy.fixture('users').then((users) => {
        cy.get('[name="username"]').type(users.valid.username)
        cy.get('[name="password"]').type(users.valid.password)
        cy.get('.oxd-button').click()
        cy.url().should('include', '/dashboard')
        cy.get('.oxd-main-menu-item').contains('Admin').click()
    })
    })
        
//   it('Verificar elementos da interface', () => {  
//      cy.url().should('include', '/admin/viewSystemUsers')
//     })

  it('Criar novo usuário', () => {
    cy.get('.oxd')
    //  cy.url().should('include', '/admin/viewSystemUsers')
    })


})