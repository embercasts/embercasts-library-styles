/* eslint-env node */
module.exports = {
  description: '',

  normalizeEntityName: function () {

  },

  afterInstall: function() {
    return this.addPackagesToProject(
      [
        { name: 'ember-cli-sass' }
      ]
    );
  }
};
