const faker = require('faker')
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Cadastro {

    acessarCadastro(){
        cy.visit(el.linkCadastro);
    }
    preencherFormulario(){
        cy.get(el.inputUser).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type(12345678);
    }
    submeterCadastro(){
        cy.get(el.buttonSubmit).click();
    }
    verificacoes(){
        cy.wait(`@${Routes.as.getCadastro}`).its('response.statusCode').should('eq', 200)
        cy.url().should('eq', 'https://demo.realworld.io/#/')
    }
}

export default new Cadastro();