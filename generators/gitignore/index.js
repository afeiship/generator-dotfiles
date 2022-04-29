'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');

module.exports = class extends Generator {
  prompting() {
    const prompts = [];
    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      this.props
    );
  }
};
