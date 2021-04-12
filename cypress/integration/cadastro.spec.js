/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
    it('Cadastrar novo usuário', () => {
        cadastro.acessarCadastro()
        cadastro.preencherFormulario();
        cadastro.submeterCadastro()
        cadastro.verificacoes()
    });  
});