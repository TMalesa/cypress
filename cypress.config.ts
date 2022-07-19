import { defineConfig } from 'cypress'

export default defineConfig({
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    baseUrl: 'http://localhost:4200',
    supportFolder:'cypress/support/index.js',
    // specFiles: 'e2e/**/*.feature',
   // specPattern: 'cypress/integration/**/*.feature',
    specPattern: 'cypress/integration/**/*.js',
    
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    
  
  },
})
