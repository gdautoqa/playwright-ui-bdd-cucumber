Feature: Horizontal Slider

  Scenario: Move the horizontal slider to value 5
    Given I am on the homepage
    And I am on the Horizontal Slider page
    When I move the slider to the right until the value is "5"
    Then I should see the slider value as "5"