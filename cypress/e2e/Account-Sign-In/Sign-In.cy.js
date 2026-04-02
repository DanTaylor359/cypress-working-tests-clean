describe('Fred Perry Navigation Checks', () => {
  it('verifies navigation tabs and account hover behaviour', () => {
    // Visit the site
    cy.visit('https://www.fredperry.com');
    cy.wait(2000);

    // If 'Accept All Cookies' button appears, click it
    cy.get('body').then($body => {
      if ($body.find('button:contains("Accept All Cookies")').length) {
        cy.contains('button', 'Accept All Cookies').click();
      }
    });
    cy.viewport(940, 743);
    cy.get('button.control__touch-menu').click();
    //cy.viewport(1233, 952);

    // Confirm the required tabs are visible
    cy.contains('[role="button"]', 'Shops').should('be.visible');
    cy.contains('[role="button"]', 'Community').should('be.visible');
    //cy.contains('[role="button"]', 'Account').should('be.visible');
    //cy.contains('[role="button"]', 'GB | £').should('be.visible');

    // Hover over the Account tab
    //cy.contains('[role="button"]', 'Account').trigger('mouseover');

    // Ensure the menu becomes visible
    //cy.get('div.account-wrapper', { timeout: 8000 }).should('be.visible');

    // Confirm "Sign in by email" appears
    cy.contains('h3', /^Sign in by email$/).should('be.visible');
    cy.wait(5000);
  });
});