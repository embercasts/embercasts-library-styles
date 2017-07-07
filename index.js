/* eslint-env node */
'use strict';

module.exports = {
  name: 'embercasts-library-styles',

  included(app) {
    app.import('vendor/logo.svg');
    app.import('vendor/favicon.png');
    app.import('vendor/welcome.svg');
  }
};
