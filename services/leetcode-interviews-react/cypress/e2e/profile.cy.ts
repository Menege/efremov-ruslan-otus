describe('Профиль пользователя', () => {
  it('Должна загрузить профиль пользователя', () => {
    cy.visit('/users/1');
    cy.get('h1').contains('Профиль пользователя');
    cy.get('input[name="rating"]').should('exist');
  });

  it('Должна обновить рейтинг пользователя', () => {
    cy.visit('/users/1');
    cy.get('input[name="rating"]').clear().type('95');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
