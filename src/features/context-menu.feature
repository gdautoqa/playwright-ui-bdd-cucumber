Feature: Context Menu

  Scenario: Right-click on the hot spot triggers an alert
    Given I navigate to the context menu page
    Then I should be on the context menu page
    When I right click on the hot spot
    Then I should see an alert with message "You selected a context menu"