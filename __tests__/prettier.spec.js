'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const GEN_PATH = path.join(__dirname, '../generators/prettier');

describe('module:prettier', () => {
  test('creates prettier files: has_idea-true', async () => {
    await helpers.run(GEN_PATH).withPrompts({ has_idea: true });
    // normal files
    assert.file(['.idea/prettier.xml', '.prettierrc', '.prettierignore']);
  });

  test('creates prettier files: has_idea-false', async () => {
    // no .idea/prettier.xml
    await helpers.run(GEN_PATH).withPrompts({ has_idea: false });
    assert.file(['.prettierrc', '.prettierignore']);
    assert.noFile(['.idea/prettier.xml']);
  });
});
