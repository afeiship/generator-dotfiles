'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const GEN_PATH = path.join(__dirname, '../generators/ncu');

describe('module:ncu', () => {
  test('creates ncu files', async () => {
    await helpers.run(GEN_PATH);
    // normal files
    assert.file(['.ncurc.json']);
  });
});
