// test Cases of Forget Page
/// <reference types="cypress" />
import forgotPageElements from '../page-objects/page-actions/forgotPasswordActions';

const forgot_Elements = new forgotPageElements();

describe('Page Object Model', function () {

  it('Forgot Password Page', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    forgot_Elements.forgotLink();
    forgot_Elements.resetPasswordField('admin1234');
    forgot_Elements.resetButton();
  });

});