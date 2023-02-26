Feature: Sign up

  @validSignup
  Scenario: User logs in with a valid account
    And User click "navbar:iconLogin"
    Then Element "navbar:headerLogin" is displayed
    And User click "signup:signupContain"
    And Fill "signup:emailField" with data "user_data:email"
    And Fill "signup:passwordField" with data "user_data:password"
    And Fill "signup:repeatField" with data "user_data:password"
    And User click "signup:sigupButton"
    Then Element "signup:parentPanel" is displayed
    Then Element "signup:panelMessage" is equal with data "signup_testData:successMessage"
    Then User take screenshot with file name "Successfully_SignUp"