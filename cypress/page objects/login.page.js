const ELEMENTS = {
    LOGIN_BLOCK_CSS: "div#divLogin",
    USERNAME_INPUT_TEXT_CSS: "input#txtUsername",
    PASSWORD_INPUT_TEXT_CSS: "input#txtPassword",
    LOGIN_BUTTON_CSS: "input#btnLogin"
};


class LoginPage{

    // ---------------------- verify elements methods -------------------------- //
    verifyLoginPageIsDisplayed(){
        cy.get(ELEMENTS.LOGIN_BLOCK_CSS).should('be.visible');
    }

    // ---------------------- form filling methods --------------------------------- //
    doLogin(username, password){
        cy.get(ELEMENTS.USERNAME_INPUT_TEXT_CSS).type(username);
        cy.get(ELEMENTS.PASSWORD_INPUT_TEXT_CSS).type(password);
        this.clickOnLoginButton();
    }

    // ---------------------- clicking methods -------------------------------------- //
    clickOnLoginButton(){
        cy.get(ELEMENTS.LOGIN_BUTTON_CSS).click();
    }
}


module.exports = new LoginPage();