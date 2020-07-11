'use strict';
const Generator = require('yeoman-generator');
const glob = require('glob');
const remote = require('yeoman-remote');
const { resolve } = require('path');

module.exports = class extends Generator {
  prompting() {
    const prompts = [];
    return this.prompt(prompts).then((props) => {
      this.props = props;
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
          glob.sync(resolve(cachePath, 'stdapp/*')),
          this.destinationPath()
        );
        done();
      }
    );
  }
};
