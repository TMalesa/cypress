Cypress.Commands.add("register", (email, abNumber, password) => {
  cy.get(`[formControlName='email']`).type(email);
  cy.get(`[formControlName='abNumber']`).type(abNumber);
  cy.get(`[formControlName='password']`).type(password);
  cy.get(`[formControlName='confirmPassword']`).type(password);
  cy.get("button").contains("Register").click();
});
