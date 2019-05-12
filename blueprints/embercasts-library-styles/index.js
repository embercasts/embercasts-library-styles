/* eslint-env node */
const semver = require('semver');

function isModuleUnificationProject(project) {
  return project && project.isModuleUnification && project.isModuleUnification();
}

module.exports = {
  description: '',

  normalizeEntityName: function () {

  },

  fileMapTokens() {
    if (isModuleUnificationProject(this.project)) {
      return {
        __path__() {
          return 'src/ui';
        }
      };
    } else {
      return {
        __path__() {
          return 'app';
        }
      };
    }
  },

  afterInstall: function({ project }) {
    const emberSource = project.addonPackages['ember-source'];
    const emberVersion = emberSource.pkg.version;

    const packages = [
      { name: 'ember-cli-sass' },
      { name: 'ember-font-awesome' }
    ];

    // Installs Ember Import Blueprints if < 2.16
    if (semver.lt(emberVersion, '2.16.0')) {
      packages.push({ name: 'ember-import-blueprints' });
    }

    return this.addPackagesToProject(packages);
  }
};
