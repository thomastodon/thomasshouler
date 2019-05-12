context('app', () => {
  describe('when the page loads', () => {

    beforeEach('', () => {
      cy.visit('http://localhost:4000');
    });

    it('should contain my name', () => {

      cy.get('body')
        .should('contain', 'thomas shouler');
    });
  });
});
