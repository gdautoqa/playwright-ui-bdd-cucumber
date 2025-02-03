Feature: Hovers

  Scenario: Verify user information on hover
    Given I am on the homepage
    When I click on "Hovers" link
    And I hover over the first image
    Then I should see the text "name: user1" displayed
    When I hover over the second image
    Then I should see the text "name: user2" displayed
    When I hover over the third image
    Then I should see the text "name: user3" displayed