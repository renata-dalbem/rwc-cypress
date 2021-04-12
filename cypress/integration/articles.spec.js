/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Artigos', () => {
    beforeEach(() => {
        cy.backgroundLogin()
        articles.acessarFormuariodeNovaPublicação()
    });
    
    it('novo artigo', () => {
        articles.preencherFormulario()
        articles.submeterPublicação()
        articles.verificacoes()
    });
});