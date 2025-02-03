Feature: Form Authentication

  Scenario: Login and logout successfully
    Given I am on the homepage
    When I navigate to the Form Authentication page using the form link
    And I enter "tomsmith" as username
    And I enter "SuperSecretPassword!" as password
    And I click the login button
    Then I should see "You logged into a secure area!" message
    When I click logout