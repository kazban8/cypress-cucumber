import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the site page', () => {
    cy.visit('https://qauto.forstudy.space', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});


When('I click on SignIn button', () => {
    cy.get('.header_signin').click();
});

When('I enter {string} name', (name) => {
    cy.get('#signinEmail').type(name);
});

When('I enter {string} pass', (pass) => {
    cy.get('#signinPassword').type(pass);
});

When('I click on Login button', () => {
    cy.contains('Login').click();
});

Then('I should be logged in successfully', () => {
    cy.url().should('include', '/panel/garage');   
});

Then('I expect Login button is disabled', () => {
    cy.get('#signinEmail').should('have.value', '');
    cy.get('#signinPassword').should('have.value', '');
    cy.get('.btn.btn-primary').should('not.have.attr', 'disabled');

});

Then('I should see an error message {string}', (expectedText) => {
    cy.get('.alert.alert-danger').should('be.visible').and('contain', expectedText);
});

