describe('Главная страница', () => {
    it('Должна загрузить список задач', () => {
      cy.visit('/');
      cy.get('h1').contains('Список задач');
      cy.get('ul li').should('have.length.greaterThan', 0);
    });
  
    it('Должна фильтровать задачи по сложности', () => {
      cy.visit('/');
      cy.get('select').first().select('Простая');
      cy.get('ul li').each(($el) => {
        cy.wrap($el).should('contain.text', 'Простая');
      });
    });
  
    it('Должна фильтровать задачи по тегам', () => {
      cy.visit('/');
      cy.get('input[placeholder="Введите тег"]').type('алгоритмы');
      cy.get('ul li').each(($el) => {
        cy.wrap($el).should('contain.text', 'алгоритмы');
      });
    });
  
    it('Должна перейти на страницу создания задачи', () => {
      cy.visit('/');
      cy.contains('Добавить новую задачу').click();
      cy.url().should('include', '/tasks/new');
    });
  });
  