'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');

// yo @jswork/dotfiles:prettier --idea
module.exports = class extends Generator {
  writing() {
    const pattern = this.options.idea ? '**' : '.pre*';
    const opts = { dot: true };
    this.fs.copyTpl(
      globby.sync(this.templatePath(pattern), opts),
      this.destinationPath(),
      this.props
    );
  }

  async installDeps() {
    // await this.addDevDependencies(['prettier']);
  }
};
