Feature: Orange HRM Login Feature

    Through this feautre User should be able to login into Orange HRM Demo Website.
   
    Scenario: user should be Login using Valid credentials
        Given Visits Orange HRM Demo Website
        When User provide username
        When User provide password
        Then Click on Login button to log in into Orange HRM Website

      