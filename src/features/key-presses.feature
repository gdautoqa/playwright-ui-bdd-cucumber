Feature: Key Presses

  Scenario: Type keys and validate displayed result
    Given I am on the homepage
    When I click on "Key Presses" link
    And I type "a" in the text box
    Then I should see the text "You entered: A"
    When I type "b" in the text box
    Then I should see the text "You entered: B"