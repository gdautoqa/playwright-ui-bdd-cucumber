Feature: Add/Remove Elements

  Scenario: Add and remove elements
    Given I navigate to the add remove elements page
    When I click the Add Element button 2 times
    Then I should see 2 delete button displayed
    When I click the Delete button
    Then I should see 1 delete button displayed