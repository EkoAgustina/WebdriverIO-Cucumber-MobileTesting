Feature: Product

@validAccount
Scenario: Verify the user successfully added the product
  And Fill "login:usernameField" with data "user_data:email"
  And Fill "login:passwordField" with data "user_data:password"
  And User click "login:loginButton"
  Then Element "home:home_header" is displayed