'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'realworld-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API: {
      host: ''
    },

    'ember-simple-auth': {
      // Override the default `index` value
      routeIfAlreadyAuthenticated: 'home'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    // Enable mocking by removing the host
    ENV.API.host = '';
  }

  if (environment === 'production') {
    // Some prod-only config
    ENV.API = {
      host: 'https://conduit.productionready.io'
    };
    ENV.rootURL = '/ember-realworld/';
  }

  return ENV;
};
