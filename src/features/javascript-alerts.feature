Feature: JavaScript Alerts

  Scenario: Handle JavaScript Alerts, Confirm and Prompt
    Given I am on the homepage
    When I click on "JavaScript Alerts" link
    And I click on JS Alert button
    Then I should see alert text "I am a JS Alert" and accept it
    When I click on JS Confirm button
    Then I should see confirm text "I am a JS Confirm" and accept it
    When I click on JS Prompt button
    Then I should see prompt text "I am a JS prompt" and accept it