/// <reference types="cypress" />
import LoginPageElements from '../page-objects/page-actions/loginPageActions';
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginElements = new LoginPageElements();

 Given('Visits Orange HRM Demo Website', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 })

 When('User provide username', function(){
       loginElements.username('Admin');
 })

 When('User provide password', function(){
       loginElements.password('admin123');
})
  Then('Click on Login button to log in into Orange HRM Website', function(){
        loginElements.loginButton();
  })  
