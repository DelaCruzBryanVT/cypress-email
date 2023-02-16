import { defineConfig } from "cypress";
require('dotenv').config();
export default defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-email-results')(on, config, {
        email: ['as7moc@hotmail.com','delacruzbryanvt@gmail.com','fabricio.cordova@connectinformatics.com'],
        
         emailOnSuccess: true,
        dry: false, 
       

      })
    },
    excludeSpecPattern: ['*.js'],
    specPattern: [
      'cypress/e2e/test.spec.ts',
      'cypress/e2e/test2.spec.ts',
      'cypress/e2e/test3.spec.ts',
      'cypress/e2e/test4.spec.ts',
      'cypress/e2e/test5.spec.ts',
      

      

    ]
  },

});
