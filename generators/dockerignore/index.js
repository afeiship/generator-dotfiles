'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }
};
