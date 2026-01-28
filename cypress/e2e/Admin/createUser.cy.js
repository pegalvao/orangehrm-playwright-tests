describe('Admin test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('include', '/dashboard')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    })
        
//   it('Verificar elementos da interface', () => {  
//      cy.url().should('include', '/admin/viewSystemUsers')
//     })

  it('Criar novo usuário', () => {  
     cy.url().should('include', '/admin/viewSystemUsers')
    })


})