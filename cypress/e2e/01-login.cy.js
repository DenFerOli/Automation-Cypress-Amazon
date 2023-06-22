describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/');
    });

    it('Login with wrong user', () => {
        cy.login('erso');
        cy.get('.a-button-inner > #continue').click();
        cy.get('.a-alert-heading').contains('There was a problem');
        cy.get('.a-list-item').contains('We cannot find an account with that email address');
    });
});



