'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');

// yo @jswork/dotfiles:prettier --ideable
module.exports = class extends Generator {
  writing() {
    const pattern = this.options.ideable ? '**' : '.pre*';
    const opts = { dot: true };
    this.fs.copyTpl(
      globby.sync(this.templatePath(pattern), opts),
      this.destinationPath(),
      this.props
    );
  }

  installDeps() {
    const pkgJson = {
      devDependencies: {
        prettier: '^2.5.1'
      }
    };
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }
};
