/// <reference types="cypress" />
import LoginPageElements from '../page-objects/page-actions/loginPageActions';

const loginElements = new LoginPageElements();

describe('Page Object Model', function () {

  it('Login Page', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginElements.username('Admin');
    loginElements.password('admin123');
    loginElements.loginButton();
  });
});