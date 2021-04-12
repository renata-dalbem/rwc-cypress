const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Login {
    //acessar a página de login
    acessarLogin(){
        cy.visit(el.linkLogin);
    }
    //preencher formulário de login
    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputSenha).type(12345678);
    }
    //submeter formulário
    submeterFormulario(){
        cy.get(el.buttonSubmit).click();
    }
    //verificações
    verificacoes(){
        cy.wait(`@${Routes.as.getArticles}`).its("response.statusCode").should('eq', 200);
        cy.url().should('eq', 'https://demo.realworld.io/#/')
    }
}

export default new Login();