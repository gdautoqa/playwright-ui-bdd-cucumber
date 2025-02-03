Feature: Shifting Content

  Scenario: Validate Shifting Content Examples
    Given I am on the Shifting Content page
    When I click the shifting content example "Example 1: Menu Element"
    Then I should see all menu elements shifting on hover
    When I go back to the Shifting Content page
    And I click the shifting content example "Example 2: An image"
    Then I should see an image present
    When I go back to the Shifting Content page
    And I click the shifting content example "Example 3: List"
    Then I should see the list is displayed properly