Feature: Login

 @validAccount
  Scenario: User logs in with a valid account
    And User click "navbar:iconLogin"
    Then Element "navbar:headerLogin" is displayed
    And User click "signup:signupContain"
    And Fill "signup:emailField" with data "user_data:email"
    And Fill "signup:passwordField" with data "user_data:password"
    And Fill "signup:repeatField" with data "user_data:password"
    And User click "signup:sigupButton"
    And User click "signup:okButton"
    And User click "login:loginContain"
    Then Element "login:usernameField" is equal with data "user_data:email"
    Then Element "login:passwordField" is not equal with data "user_data:password"
    Then User click "login:LoginButton"
    Then Element "login:succesMessage" is equal with data "login_testData:successMessage"
    Then User take screenshot with file name "Successfully_Login"


