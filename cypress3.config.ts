import { defineConfig } from "cypress";
require('dotenv').config();
export default defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1024,
  viewportHeight: 720,
  defaultCommandTimeout: 1000,
  videoUploadOnPasses: false,
  video: false,
  projectId: 'ny4q7p',
  waitForAnimations: true,
  pageLoadTimeout: 180000,
  responseTimeout: 60000,
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents(on, config) {
     let emails=config.env.email.split(' ')
      require('cypress-email-results')(on, config, {
        email: emails,

        emailOnSuccess: true,
        dry: false,


      })
     
      return config
    },
    excludeSpecPattern: ['*.js'],
    specPattern: [
      
      'cypress/e2e/test3.spec.ts',
      'cypress/e2e/test4.spec.ts',
      'cypress/e2e/test5.spec.ts', 




    ]
  },

});
