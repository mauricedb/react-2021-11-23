describe('The movies list', () => {
  before(() => {
    // cy.request()

    cy.intercept(
      'https://the-problem-solver-sample-data.azurewebsites.net/popular-movies',
      {
        fixture: 'movies.json',
      }
    ).as('popular-movies');

    cy.visit('/');
  });

  it('can find Ad Astra', () => {
    cy.get(':nth-child(2) > h2').should('contain.text', 'Ad Astra');

    cy.get('main article').contains('h2', 'Ad Astra').should('be.visible');
  });

  it('can find A Rainy Day in New York', () => {
    cy.get('main article:first')
      .contains('h2', 'A Rainy Day in New York')
      .should('be.visible');
  });

  it('can navigate', () => {
    cy.get('main article').contains('h2', 'Ad Astra').click();

    cy.contains('Released on: 17/09/2019');
  });
});
