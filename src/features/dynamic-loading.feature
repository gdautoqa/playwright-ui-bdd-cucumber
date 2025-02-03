Feature: Dynamic Loading

  Scenario: Validate dynamic loading examples
    Given I am on the dynamic loading page
    When I select "Example 1: Element on page that is hidden"
    And I click the start button
    Then I should see "Hello World!" displayed
    When I go back to the dynamic loading page
    And I select "Example 2: Element rendered after the fact"
    And I click the start button
    Then I should see "Hello World!" displayed