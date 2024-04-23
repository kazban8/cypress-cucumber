Feature: Login Testing

Scenario: Login with empty fields
    Given I am on the site page
    Then I click on Login button
    Then Button is disable

Scenario: Login with invalid credentials
    Given I am on the site page
    Then I click on Login button
    When I enter "kazbewewe8@gmail.com" name
    When I enter "Danteewe123" pass
    When I click on Login
    Then I should see an error message "Wrong email or password"


Scenario: Login with valid email and password
    Given I am on the site page
    Then I click on Login button
    When I enter "kazban8@gmail.com" name
    When I enter "Dante123" pass
    When I click on Login
    Then I should be logged in successfully 

