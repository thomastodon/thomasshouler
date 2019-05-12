context('app', () => {
  describe('when the page loads', () => {

    beforeEach('', () => {
      cy.visit('http://localhost:4000');
    });

    it('should contain my name', () => {
      cy.get('body').should('contain', 'thomas shouler');
    });

    describe('when i click on the light bulb', () => {

      beforeEach('', () => {
        cy.get('#bulb').click();
      });

      it('we should be sent to my tumblr', () => {
        cy.url().should('eq', 'https://thomasshouler.tumblr.com/');
      });
    });
  });
});
