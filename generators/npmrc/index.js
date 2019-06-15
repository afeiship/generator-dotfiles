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
    this.log(yosay(`Welcome to the delightful ${chalk.red('generator-dotfiles')} generator!`));

    const prompts = [
      {
        type: 'list',
        name: 'package_lock',
        message: 'Pakcage lock file (default: false)?',
        default: false,
        choices: [
          {
            name: 'I want to have package-lock.json file.',
            value: true
          },
          {
            name: "I don't want to have package-lock.json file.",
            value: false
          }
        ]
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Select npm registry?(default: taobao)',
        default: 'taobao',
        choices: [
          {
            name: 'taobao.org',
            value: 'https://registry.npm.taobao.org'
          },
          {
            name: 'npm.org',
            value: 'https://registry.npmjs.org'
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
    const { package_lock, registry } = this.props;
    const npmrc = ['sass_binary_site=https://npm.taobao.org/mirrors/node-sass/'];
    npmrc.push(`package-lock=${package_lock}`);
    npmrc.push(`registry=${registry}`);
    this.fs.write(this.destinationPath('.npmrc'), npmrc.join('\n'));
    done();
  }

  end() {
    console.log('Enjoy coding~');
  }
};
