Feature: Checkboxes

  Scenario: Toggling the first checkbox
    Given I navigate to the checkboxes page
    Then I should see the first checkbox is "unchecked"
    And I should see the second checkbox is "checked"
    When I toggle the first checkbox
    Then I should see the first checkbox is "checked"