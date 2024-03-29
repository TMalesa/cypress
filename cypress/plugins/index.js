// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
};