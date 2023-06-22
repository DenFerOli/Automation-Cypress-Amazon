describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.amazon.com/');
    });

    it('Show error messages when try to create account without filling no fields', () => {
        cy.registerUser();
        cy.get('#continue').click();
        cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your name');
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your email or mobile phone number');
        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Minimum 6 characters required');
    });

    it('Show error messages when try to create account filling only username field', () => {
        cy.registerUser();
        cy.get('#ap_customer_name').type('userTestCypress2023');
        cy.get('#continue').click();
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your email or mobile phone number');
        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Minimum 6 characters required')
    });

    it('Show error messages when try to create account filling only mobile number or email field', () => {
        cy.registerUser();
        cy.get('#ap_email').type('userTestCypress2023@email.com');
        cy.get('#continue').click();
        cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your name');
        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Minimum 6 characters required')
    });

    it('Show error messages when try to create account filling only password field', () => {
        cy.registerUser();
        cy.get('#ap_password').type('userTestCypress2023@email.com');
        cy.get('#continue').click();
        cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your name');
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your email or mobile phone number');
        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Minimum 6 characters required');
        cy.get('#auth-passwordCheck-missing-alert > .a-box-inner > .a-alert-content').contains('Type your password again');
    });

    it('Show error messages when try to create account filling only Re-enter password field', () => {
        cy.registerUser();
        cy.get('#ap_password_check').type('userTestCypress2023');
        cy.get('#continue').click();
        cy.get('#auth-customerName-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your name');
        cy.get('#auth-email-missing-alert > .a-box-inner > .a-alert-content').contains('Enter your email or mobile phone number');
        cy.get('#auth-password-missing-alert > .a-box-inner > .a-alert-content').contains('Minimum 6 characters required');
    });
});
