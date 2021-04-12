const faker = require ('faker');
const el = require('./elements').ELEMENTS
import Routes from '../../routes'

class Articles {
    acessarFormuariodeNovaPublicação(){
        cy.get(el.linkNovaPublicação).click();
    }
    //preencher formulário do artigo
    preencherFormulario() {
        cy.get(el.inputTitle).type(faker.lorem.word());
        cy.get(el.inputDescription).type(faker.lorem.words());
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTags).type(faker.lorem.word());
    }
    //submeter o código
    submeterPublicação(){
        cy.get(el.buttonSubmit).click();
    }
    verificacoes(){
        //template string
        cy.wait(`@${Routes.as.postArticles}`).its('response.statusCode').should('eq', 200);
        cy.wait(`@${Routes.as.getArticles}`).its('response.statusCode').should('eq', 200);
        cy.wait(`@${Routes.as.getComments}`).its('response.statusCode').should('eq', 200);
        cy.url().should('contains', 'https://demo.realworld.io/#/article')
    }
}

export default new Articles();