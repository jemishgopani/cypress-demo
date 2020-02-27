const loginPage = require("../page objects/login.page");
const dashboardPage = require("../page objects/dashboard.page");

describe('Demo Smoke Test', () => {
   beforeEach(() => {
       cy.visit('/');
   });

    it('user should be login into system', () => {

        // Verify "Login Page" is displayed
        loginPage.verifyLoginPageIsDisplayed();

        // Load our test data for user login
        cy.fixture("testUsers.json").then(user => {
            // User login into system
           loginPage.doLogin(user.username, user.password);

           // Verify "Dashboard Page" is displayed
           dashboardPage.verifyDashboardPageIsDisplayed(user.username);
        });
    });
});