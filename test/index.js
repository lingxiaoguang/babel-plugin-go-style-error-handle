import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('测试生成的代码正确', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`测试 ${caseName.split('-').join(' ')} 生成正确`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const actual = transformFileSync(actualPath).code;

      const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
      ).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});

describe('测试生成的代码执行正确 ', () => {
  const exexDir = path.join(__dirname, 'exec');
  fs.readdirSync(exexDir).map((caseName) => {
    it(`测试 ${caseName.split('-').join(' ')} 执行正确`, () => {
      const dir = path.join(exexDir, caseName);
      const actualPath = path.join(dir, 'actual.js');
      let actual = transformFileSync(actualPath).code;
      const f = new Function(actual);
      const testFunc = require(path.join(dir, 'expected.js'));
      testFunc(f, assert);
    });
  });
});
