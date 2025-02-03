Feature: Drag and Drop

  Scenario: Drag box A onto box B
    Given I navigate to the drag and drop page
    Then I should see the columns with headers "A" and "B"
    When I perform the drag and drop action
    Then I should see the columns with headers "B" and "A"