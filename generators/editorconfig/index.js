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
    this.log(
      yosay(`Welcome to the delightful ${chalk.red('generator-dotfiles:editorconfig')} generator!`)
    );

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
      function(err, cachePath) {
        // copy files:
        this.fs.copy(glob.sync(resolve(cachePath, '.editorconfig')), this.destinationPath());
        done();
      }.bind(this)
    );
  }

  end() {
    console.log('Enjoy coding~');
  }
};
