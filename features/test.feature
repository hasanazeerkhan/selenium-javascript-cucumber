Feature: Registration Form
  As a user,
  I want to fill out the registration form on the Techlistic website,
  So that I can create an account and access the site's features.

  Scenario: Fill out registration form
    Given I am on the registration page
    When I enter my first name as "My First Name"
    And I enter my last name as "My Last Name"
    And I Select my Gender as "Male"
    And I enter my years of Experience as "3"
    And I enter my date as "10/05/2023"
    And I Select Profession as "Automation Tester"
    And I Select Automation tools as "Selenium Webdriver"
    And I Select Continents as "Asia"
    And I Select Selenium Commands as "Browser Commands"
    And I submit all the inputs