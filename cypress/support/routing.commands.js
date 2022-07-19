// Cypress.Commands.add("routeToEmployeeView", () => {
//   cy.wait(2000);
//   cy.get(`[matTooltip='view employees]`).click();
// });

Cypress.Commands.add("goToSignInView", () => {
  cy.get(".auth-prompt-container").contains("sign-in").click();
});

Cypress.Commands.add("goToRegistrationView", () => {
  cy.get(".auth-prompt-container").contains("register").click();
});
