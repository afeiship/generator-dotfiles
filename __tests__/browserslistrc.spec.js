'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const GEN_PATH = path.join(__dirname, '../generators/browserslistrc');

describe('module:browserslistrc', () => {
  test('creates browserslistrc files', async () => {
    await helpers.run(GEN_PATH);
    // normal files
    assert.file(['.browserslistrc']);
  });
});
