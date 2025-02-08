describe('Управление тегами', () => {
  it('Должна отобразить список тегов', () => {
    cy.visit('/tags');
    cy.get('h1').contains('Управление тегами');
    cy.get('ul li').should('have.length.greaterThan', 0);
  });

  it('Должна добавлять новый тег', () => {
    cy.visit('/tags');
    cy.get('input[placeholder="Новый тег"]').type('новый_тег');
    cy.contains('Добавить тег').click();
    cy.get('ul li').contains('новый_тег');
  });

  it('Должна удалять тег', () => {
    cy.visit('/tags');
    cy.contains('алгоритмы').parent().find('button').click();
    cy.get('ul li').should('not.contain.text', 'алгоритмы');
  });
});
