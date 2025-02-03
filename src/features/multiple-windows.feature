Feature: Multiple Windows

  Scenario: Verify a new window opens with "New Window" text and both windows close
    Given I am on the homepage
    When I navigate to the "Multiple Windows" page
    And I click the Multiple Windows link "Click Here"
    Then a new window should open with the text "New Window"
    And both windows are closed