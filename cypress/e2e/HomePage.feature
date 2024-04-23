Feature: HomePage Testing

Scenario: Presence of 5 social media icons
    Given I am on the site page
    Then There are exactly 5 social media icons present

Scenario: Opening registration form after clicking Sign Up
    Given I am on the site page
    When I click on Sign Up button
    Then I should see the registration form

Scenario: Opening login form after clicking Sign In
    Given I am on the site page
    When I click on Login button
    Then I should see the login form