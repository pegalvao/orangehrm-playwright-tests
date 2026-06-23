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
        
    it('Criar novo usuário com função de admin caso já tenha um Employee Name que já exista', () => {
        cy.get('.orangehrm-header-container .oxd-button').contains('Add').click()
        cy.fixture('userManagement').then((userManagement) => {
            cy.get('.oxd-input-group .oxd-input').eq(0).type(userManagement.employee1.username)
            cy.get('.oxd-input-group .oxd-input').eq(1).type(userManagement.employee1.password)
            cy.get('.oxd-input-group .oxd-input').eq(2).type(userManagement.employee1.password)
        })
    })

    // it('Criar usuário com dados inválidos', () => {
    
    // })

    // it('Editar usuário existente', () => {
        
    // })

    // it('Deletar usuário', () => {
            
    // })

    // it('Buscar usuário pelo username', () => {
            
    // })

    // it('Buscar usuário por tole,status,nome', () => {
            
    // })





})