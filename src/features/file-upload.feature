Feature: File Upload

  Scenario: Upload s.txt file
    Given I am on the file upload page
    When I select "s.txt" from the uploads folder
    And I click the upload button
    Then the page should display "s.txt"