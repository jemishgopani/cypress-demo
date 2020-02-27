const ELEMENTS = {
    WELCOME_MESSAGE_LINK_CSS: 'a#welcome'
};


class DashboardPage{
    // ---------------------- verify elements methods -------------------------- //
    verifyDashboardPageIsDisplayed(username){
        cy.get(ELEMENTS.WELCOME_MESSAGE_LINK_CSS).should('be.visible').contains(`Welcome ${username}`);
    }
}

module.exports = new DashboardPage();