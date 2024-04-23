import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the site page', () => {
    cy.visit('https://qauto.forstudy.space', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto'
        }
    });
});

Then ("There are exactly 5 social media icons present", () => {
    cy.get('a.socials_link').should('have.length', 5);
});

When('I click on Sign Up button', () => {
    cy.contains('button', 'Sign up').click();

});

Then("I should see the registration form", () => {
    cy.get('app-signup-modal').should('be.visible');
});

When('I click on Login button', () => {
    cy.get('.header_signin').click();
});

Then('I should see the login form', () => {
    cy.get('form').should('exist');
});
