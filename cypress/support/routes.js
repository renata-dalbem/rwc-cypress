class Routes {

    as = {
        postArticles: 'POSTArticles',
        getArticles: 'GETArticles',
        getComments: 'GETComments',

        getCadastro: 'GETcadastro'
    }

    init(){
        cy.intercept('POST','**/api/articles').as(this.as.postArticles);
        cy.intercept('GET', '**/api/articles/**').as(this.as.getArticles);
        cy.intercept('GET', '**/api/articles/**/comments').as(this.as.getComments);

        cy.intercept('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.getCadastro);
    }
}
export default new Routes();
