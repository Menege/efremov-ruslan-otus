describe('Форма задачи', () => {
  it('Должна создать новую задачу', () => {
    cy.visit('/tasks/new');
    cy.get('input[name="title"]').type('Новая задача');
    cy.get('textarea[name="description"]').type('Описание задачи');
    cy.get('textarea[name="examples"]').type('Примеры входных и выходных данных');
    cy.get('select[name="difficulty"]').select('Средняя');
    cy.get('select[name="tags"]').select(['алгоритмы']);
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('Должна загрузить данные для редактирования задачи', () => {
    cy.visit('/tasks/edit/1');
    cy.get('input[name="title"]').should('have.value', 'Пример задачи');
  });

  it('Должна обновить задачу', () => {
    cy.visit('/tasks/edit/1');
    cy.get('input[name="title"]').clear().type('Обновленная задача');
    cy.get('button[type="submit"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });
});
