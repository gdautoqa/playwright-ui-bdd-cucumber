Feature: Dynamic Controls

  Scenario: Remove/Add checkbox and Enable/Disable input field
    Given I navigate to the dynamic controls page
    When I click the remove button
    Then I wait for the gone message
    When I click the add button
    Then I wait for the back message
    When I click the enable button
    Then I wait for the enabled message
    When I click the disable button
    Then I wait for the disabled message