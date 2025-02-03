Feature: Dropdown

  Scenario: Select options from the dropdown
    Given I navigate to the dropdown page
    Then the dropdown should have default text "Please select an option"
    When I select option with value "1"
    Then the dropdown should show "Option 1" selected
    When I select option with value "2"
    Then the dropdown should show "Option 2" selected