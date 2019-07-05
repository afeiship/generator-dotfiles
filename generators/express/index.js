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
      yosay(`Welcome to the delightful ${chalk.red('generator-dotfiles:express')} generator!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'is_mini',
        message: 'Mini or with proxy? (default: mini)?',
        default: true,
        choices: [
          {
            name: 'Use mini express only support localhost:30000',
            value: true
          },
          {
            name: 'With proxy middleware.',
            value: false
          }
        ]
      }
    ];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      // yoHelper.rewriteProps(props);
    });
  }

  writing() {
    const done = this.async();
    const { is_mini } = this.props;
    remote(
      'afeiship',
      'configuration-files',
      function(err, cachePath) {
        const filename = is_mini ? 'server.js' : 'server-with-proxy.js';
        this.fs.copy(glob.sync(resolve(cachePath, `express/${filename}`)), this.destinationPath());
        done();
      }.bind(this)
    );
  }

  end() {
    const { is_mini } = this.props;
    const npmPkg1 = 'npm install -D express';
    const npmPkg2 = 'npm install -D express http-proxy-middleware compression';
    console.log(chalk.green('\n\t' + is_mini ? npmPkg1 : npmPkg2 + '\n'));
  }
};
