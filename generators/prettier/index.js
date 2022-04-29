'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'confirm',
        name: 'has_idea',
        message: 'Idea settigns include?'
      }
    ];

    return this.prompt(prompts).then((props) => (this.props = props));
  }

  writing() {
    const pattern = this.props.has_idea ? '**' : '.pre*';
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
