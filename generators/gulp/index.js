'use strict';
const Generator = require('yeoman-generator');
const glob = require('glob');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');
const remote = require('yeoman-remote');
const { resolve } = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the delightful ${chalk.red('generator-dotfiles:gulp')} generator!`));

    const prompts = [];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      // yoHelper.rewriteProps(props);
    });
  }

  writing() {
    const done = this.async();
    remote(
      'afeiship',
      'configuration-files',
      (err, cachePath) => {
        // copy files:
        this.fs.copy(
          glob.sync(resolve(cachePath, 'gulp/*')),
          this.destinationPath()
        );
        done();
      }
    );
  }

  end() {
    const npmPkg = 'npm install -D del gulp gulp-load-plugins gulp-uglify';
    console.log(chalk.green('\n\t' + npmPkg + '\n'));
  }
};
