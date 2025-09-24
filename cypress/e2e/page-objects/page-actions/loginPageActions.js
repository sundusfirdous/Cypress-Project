const loginElementsLocators = require('../page-elements/loginPageElements.json');
class LoginPageElements {

  username(username) {
    cy.get(loginElementsLocators.LoginPageLocators.username_text).type(username);
    return
  }

  password(password) {
    cy.get(loginElementsLocators.LoginPageLocators.password_text).type(password);
    return
  }

  loginButton() {
    cy.get(loginElementsLocators.LoginPageLocators.loginButton).click();
    return
  }

}

export default LoginPageElements;
