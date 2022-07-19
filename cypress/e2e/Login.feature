Feature: LoginFeature
     Testing The Application Login Feature

@RequiresSignOut
Scenarion: Valid login
   Given I visit the projects url
   And I sign into application with valid credentials
   Then I should see a "Absa Employees" in the title

Scenarion: Invalid login
   Given I visit the projects url
   And I sign into application with invalid credentials
   Then I should see a message stating"The provided credentials are incorrect"

Scenarion: uknown user login
   Given I visit the projects url
   And I sign into application with uknown user credentials
   Then I should see a message stating"The provided user does not exist"

