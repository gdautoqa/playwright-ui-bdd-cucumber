Feature: Digest Authentication

  Scenario: Successful digest authentication
    Given I navigate to the digest authentication page
    Then I should be on the digest authentication page
    Then I should see a confirmation message