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

            //User Role
            cy.contains('.oxd-label','User Role').parents('.oxd-input-group').find('.oxd-select-text').click()
            cy.contains('.oxd-select-option', 'Admin').click()

            //EmployeeName
            cy.contains('.oxd-label', 'Employee Name').parents('.oxd-input-group').find('input').type('Test First Demo')

            cy.get('.oxd-autocomplete-dropdown').should('be.visible').contains('Test First Demo').click()
            
            // Status
            cy.contains('.oxd-label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click()
            cy.contains('.oxd-select-option', 'Enabled').click()

            // Username
            cy.contains('.oxd-label', 'Username').parents('.oxd-input-group').find('input').type(userManagement.employee1.username)

            // Password 
            cy.contains('.oxd-label', 'Password').parents('.oxd-input-group').find('input').type(userManagement.employee1.password)

            //Confirm Password
            
            cy.contains('.oxd-label', 'Confirm Password') .parents('.oxd-input-group').find('input').type(userManagement.employee1.password)


            cy.contains('button', 'Save').click()
            cy.get('.oxd-toast').should('be.visible').and('contain.text', 'Successfully Saved')
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