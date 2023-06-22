import './commands'


Cypress.Commands.add('login', (username, password) => {
    cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
    cy.get('#ap_email').type(username);
});

Cypress.Commands.add('registerUser', () => {
    cy.get('#nav-link-accountList > .nav-line-2').click();
    cy.get('#createAccountSubmit').click();
})