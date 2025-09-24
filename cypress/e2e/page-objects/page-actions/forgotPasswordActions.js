// Actions from Forgot Password Page
const forgotPasswordElementsLocators = require('../page-elements/forgotPassword.json');
class forgotPageElements {

  forgotLink() {
    cy.get(forgotPasswordElementsLocators.forgotPageLocators.forgotLink).click();
    return
  }

  resetPasswordField(resretPassword) {
    cy.get(forgotPasswordElementsLocators.forgotPageLocators.resetPasswordField(resretPassword));
    return
  }

  resetButton() {
    cy.get(forgotPasswordElementsLocators.forgotPageLocators.resetButton).click();
    return
  }
}

export default forgotPageElements;
