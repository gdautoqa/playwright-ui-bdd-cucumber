Feature: File Download

  Scenario: Download s.txt file
    Given I am on the homepage
    When I navigate to the File Download page using the download link
    And I download the file "s.txt"
    Then the downloaded file should exist and not be empty