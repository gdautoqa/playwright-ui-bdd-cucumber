Feature: Sortable Data Tables

  Scenario: Sort Table Columns in Example 1 and Example 2
    Given I am on the homepage
    When I click on "Sortable Data Tables" link
    And I click on the "Due" header in Example 1
    Then I should see the "Due" column values sorted in ascending order
    When I click on the "Last Name" header in Example 2 to sort ascending
    Then I should see the "Last Name" column values sorted alphabetically