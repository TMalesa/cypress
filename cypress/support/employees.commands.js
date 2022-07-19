Cypress.Commands.add(
  "createEmployee",
  (fullName, surname, email, abNumber, gender, department) => {
    cy.get(`formControlName='fullName`).type(fullName);
    cy.get(`formControlName='surname`).type(surname);
    cy.get(`formControlName='email`).type(email);
    cy.get(`formControlName='abNumber`).type(abNumber);
    
  }
);
